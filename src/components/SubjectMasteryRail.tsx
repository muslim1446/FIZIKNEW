import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { ChapterContent, StudyProgressMap } from '../types/textbook';
import { computeSubjectMasteryProgress } from '../utils/studyProgress';

interface SubjectMasteryRailProps {
  chapters: ChapterContent[];
  progressMap: StudyProgressMap;
  children: React.ReactNode;
}

const REVEAL_HEIGHT_PX = 24;
const STICKY_TRIGGER_PX = 12;
const STICKY_AUTO_HIDE_MS = 4200;

/**
 * Sticky top wrapper housing:
 * 1) A hidden pull-to-reveal strip ABOVE the progress bar showing ONLY the percentage
 *    when the user pulls down the navbar/page (touch, pointer drag, or top overscroll).
 * 2) An ultra-thin 2px sub-pixel-accurate hairline progress bar ABOVE the navbar.
 * 3) The navbar itself (`children`).
 */
export const SubjectMasteryRail: React.FC<SubjectMasteryRailProps> = ({
  chapters,
  progressMap,
  children,
}) => {
  const metrics = useMemo(
    () => computeSubjectMasteryProgress(chapters, progressMap),
    [chapters, progressMap]
  );

  const [pullPx, setPullPx] = useState<number>(0);
  const [stickyRevealed, setStickyRevealed] = useState<boolean>(false);

  const touchStartYRef = useRef<number | null>(null);
  const pointerDragRef = useRef<{ startY: number; startX: number; active: boolean } | null>(
    null
  );
  const pullPxRef = useRef<number>(0);
  const hideTimerRef = useRef<number | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const scheduleAutoHide = () => {
    clearHideTimer();
    hideTimerRef.current = window.setTimeout(() => {
      setStickyRevealed(false);
    }, STICKY_AUTO_HIDE_MS);
  };

  // Refresh sticky hold briefly when percentage updates while revealed
  useEffect(() => {
    if (stickyRevealed) {
      scheduleAutoHide();
    }
    return () => clearHideTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metrics.formattedPercent, stickyRevealed]);

  // Global touch pull-down, top-of-page wheel overscroll, and scroll-away retract
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      if (window.scrollY <= 2 || shellRef.current?.contains(e.target as Node)) {
        touchStartYRef.current = e.touches[0].clientY;
      } else {
        touchStartYRef.current = null;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null || e.touches.length !== 1) return;
      const dy = e.touches[0].clientY - touchStartYRef.current;
      if (dy > 4 && window.scrollY <= 2) {
        const damped = Math.min(REVEAL_HEIGHT_PX, (dy - 4) * 0.42);
        pullPxRef.current = damped;
        setPullPx(damped);
        if (damped >= STICKY_TRIGGER_PX) {
          setStickyRevealed(true);
        }
      } else if (dy < -8) {
        pullPxRef.current = 0;
        setPullPx(0);
        setStickyRevealed(false);
      }
    };

    const onTouchEnd = () => {
      if (pullPxRef.current >= STICKY_TRIGGER_PX) {
        setStickyRevealed(true);
        scheduleAutoHide();
      }
      pullPxRef.current = 0;
      setPullPx(0);
      touchStartYRef.current = null;
    };

    const onWheel = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY < -14) {
        setStickyRevealed(true);
        scheduleAutoHide();
      } else if (e.deltaY > 18 && window.scrollY > 4) {
        setStickyRevealed(false);
        clearHideTimer();
      }
    };

    const onScroll = () => {
      if (window.scrollY > 16) {
        setStickyRevealed(false);
        setPullPx(0);
        pullPxRef.current = 0;
        clearHideTimer();
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      clearHideTimer();
    };
  }, []);

  // Mouse/pointer drag support directly on the top shell / navbar
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const drag = pointerDragRef.current;
      if (!drag) return;
      const dy = e.clientY - drag.startY;
      const dx = Math.abs(e.clientX - drag.startX);
      if (!drag.active) {
        if (dy > 6 && dy > dx) {
          drag.active = true;
        } else {
          return;
        }
      }
      if (dy > 0) {
        const damped = Math.min(REVEAL_HEIGHT_PX, dy * 0.48);
        pullPxRef.current = damped;
        setPullPx(damped);
        if (damped >= STICKY_TRIGGER_PX) {
          setStickyRevealed(true);
        }
      } else if (dy < -8) {
        pullPxRef.current = 0;
        setPullPx(0);
        setStickyRevealed(false);
      }
    };

    const onPointerUp = () => {
      if (pointerDragRef.current?.active && pullPxRef.current >= STICKY_TRIGGER_PX) {
        setStickyRevealed(true);
        scheduleAutoHide();
      }
      pointerDragRef.current = null;
      pullPxRef.current = 0;
      setPullPx(0);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  const handleShellPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    pointerDragRef.current = {
      startY: e.clientY,
      startX: e.clientX,
      active: false,
    };
  };

  const revealHeight = stickyRevealed
    ? REVEAL_HEIGHT_PX
    : Math.round(pullPx * 10) / 10;
  const isVisible = revealHeight >= 10;
  const tipPercent = Math.min(99.85, Math.max(0, metrics.exactPercent));

  return (
    <div
      ref={shellRef}
      onPointerDown={handleShellPointerDown}
      className="sticky top-0 z-40 w-full"
    >
      {/* 1. Sticky pull-reveal strip ABOVE the loading bar: strictly percentage ONLY */}
      <div
        data-testid="spm-pull-reveal"
        aria-hidden={!isVisible}
        onClick={() => {
          setStickyRevealed(false);
          clearHideTimer();
        }}
        style={{ height: `${revealHeight}px` }}
        className="w-full overflow-hidden bg-slate-100/95 dark:bg-slate-950/95 backdrop-blur-xs flex items-center justify-center transition-[height] duration-200 ease-out cursor-pointer"
      >
        <span
          data-testid="spm-pull-percentage"
          className={`font-mono text-[11px] font-semibold tracking-[0.06em] tabular-nums text-slate-700 dark:text-slate-200 select-none transition-opacity duration-150 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {metrics.formattedPercent}
        </span>
      </div>

      {/* 2. Ultra-thin 2px hairline mastery bar directly ABOVE the navbar */}
      <div
        role="progressbar"
        aria-label="Peratusan penguasaan subjek"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Number(metrics.exactPercent.toFixed(2))}
        aria-valuetext={metrics.formattedPercent}
        data-testid="spm-hairline-progress"
        data-subject-percent={metrics.exactPercent.toFixed(4)}
        className="relative h-[2px] w-full bg-slate-200/65 dark:bg-slate-800/75 overflow-hidden"
      >
        <div
          data-testid="spm-hairline-fill"
          className="absolute inset-0 origin-left bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-400 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `scaleX(${metrics.fraction})` }}
        />
        {metrics.fraction > 0 && metrics.fraction < 1 && (
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 w-[2px] bg-white/95 dark:bg-sky-200 transition-[left] duration-500 ease-out"
            style={{ left: `calc(${tipPercent}% - 1px)` }}
          />
        )}
      </div>

      {/* 3. Navbar sits cleanly directly beneath the 2px hairline progress bar */}
      {children}
    </div>
  );
};
