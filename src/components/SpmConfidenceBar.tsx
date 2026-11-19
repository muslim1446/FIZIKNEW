import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { SubjectId } from '../types/textbook';
import type { SpmConfidenceBreakdown } from '../utils/spmConfidence';

interface SpmConfidenceBarProps {
  confidence: SpmConfidenceBreakdown;
  subject: SubjectId;
}

const MAX_REVEAL_PX = 24;
const LATCH_THRESHOLD_PX = 10;
const LATCH_DURATION_MS = 3600;

export const SpmConfidenceBar: React.FC<SpmConfidenceBarProps> = ({
  confidence,
  subject,
}) => {
  const [dragPx, setDragPx] = useState(0);
  const [latched, setLatched] = useState(false);

  const touchStartYRef = useRef<number | null>(null);
  const pointerStartYRef = useRef<number | null>(null);
  const dragPxRef = useRef(0);
  const latchTimerRef = useRef<number | null>(null);

  const triggerLatch = useCallback(() => {
    setLatched(true);
    if (latchTimerRef.current !== null) {
      window.clearTimeout(latchTimerRef.current);
    }
    latchTimerRef.current = window.setTimeout(() => {
      setLatched(false);
    }, LATCH_DURATION_MS);
  }, []);

  const clearLatch = useCallback(() => {
    setLatched(false);
    if (latchTimerRef.current !== null) {
      window.clearTimeout(latchTimerRef.current);
      latchTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (latchTimerRef.current !== null) {
        window.clearTimeout(latchTimerRef.current);
      }
    };
  }, []);

  // Touch pull-down gesture (page top or anywhere on sticky navbar) + top overscroll wheel impulse
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const target = e.target as HTMLElement | null;
      const inHeader = Boolean(target?.closest('[data-spm-sticky-top="true"]'));
      if (window.scrollY <= 3 || inHeader) {
        touchStartYRef.current = e.touches[0].clientY;
      } else {
        touchStartYRef.current = null;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null || e.touches.length !== 1) return;
      const deltaY = e.touches[0].clientY - touchStartYRef.current;
      if (deltaY > 4 && (window.scrollY <= 3 || dragPxRef.current > 0)) {
        window.getSelection()?.removeAllRanges();
        const damped = Math.min(MAX_REVEAL_PX, (deltaY - 4) * 0.5);
        dragPxRef.current = damped;
        setDragPx(damped);
      } else if (deltaY < -6 && dragPxRef.current > 0) {
        dragPxRef.current = 0;
        setDragPx(0);
      }
    };

    const onTouchEnd = () => {
      if (dragPxRef.current >= LATCH_THRESHOLD_PX) {
        triggerLatch();
      }
      touchStartYRef.current = null;
      dragPxRef.current = 0;
      setDragPx(0);
    };

    const onWheel = (e: WheelEvent) => {
      if (window.scrollY <= 1 && e.deltaY < -22) {
        triggerLatch();
      } else if (e.deltaY > 14) {
        clearLatch();
      }
    };

    const onScroll = () => {
      if (window.scrollY > 24) {
        clearLatch();
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
    };
  }, [clearLatch, triggerLatch]);

  // Pointer drag-down on the sticky navbar/top-bar or page top (mouse / stylus)
  useEffect(() => {
    let suppressNextClick = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      if (e.button !== 0) return;
      suppressNextClick = false;
      const target = e.target as HTMLElement | null;
      const inHeader = Boolean(target?.closest('[data-spm-sticky-top="true"]'));
      if (inHeader) {
        pointerStartYRef.current = e.clientY;
      } else {
        pointerStartYRef.current = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerStartYRef.current === null) return;
      const delta = e.clientY - pointerStartYRef.current;
      if (delta > 6) {
        suppressNextClick = true;
        window.getSelection()?.removeAllRanges();
        const damped = Math.min(MAX_REVEAL_PX, (delta - 2) * 0.65);
        dragPxRef.current = damped;
        setDragPx(damped);
      }
    };

    const onPointerUp = () => {
      if (pointerStartYRef.current === null) return;
      if (dragPxRef.current >= LATCH_THRESHOLD_PX) {
        triggerLatch();
      }
      pointerStartYRef.current = null;
      dragPxRef.current = 0;
      setDragPx(0);
      if (suppressNextClick) {
        window.setTimeout(() => {
          suppressNextClick = false;
        }, 60);
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (!suppressNextClick) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-spm-sticky-top="true"]')) {
        e.preventDefault();
        e.stopPropagation();
        suppressNextClick = false;
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('click', onClickCapture, true);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('click', onClickCapture, true);
    };
  }, [triggerLatch]);

  const revealHeightPx = latched ? MAX_REVEAL_PX : dragPx;
  const isRevealed = revealHeightPx > 1;
  const visualRatio =
    confidence.ratio > 0 ? Math.max(0.004, Math.min(1, confidence.ratio)) : 0;

  const fillGradientClass =
    confidence.percentValue >= 70
      ? 'from-sky-500 via-emerald-500 to-emerald-400 dark:from-sky-400 dark:via-emerald-400 dark:to-teal-300'
      : confidence.percentValue >= 35
        ? 'from-sky-500 via-indigo-500 to-cyan-400 dark:from-sky-400 dark:via-indigo-400 dark:to-cyan-300'
        : 'from-sky-600 to-cyan-400 dark:from-sky-500 dark:to-cyan-300';

  const handleTogglePullPeek = () => {
    if (latched) {
      clearLatch();
    } else {
      triggerLatch();
    }
  };

  return (
    <div className="w-full">
      {/* Sticky Pull-Reveal Percentage Strip ABOVE the progress bar — STRICTLY percentage ONLY */}
      <div
        data-testid="spm-pull-percentage"
        aria-hidden={!isRevealed}
        onClick={clearLatch}
        style={{
          height: `${revealHeightPx}px`,
          opacity: isRevealed ? Math.min(1, revealHeightPx / 12) : 0,
        }}
        className="w-full overflow-hidden flex items-center justify-center bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md transition-opacity duration-150 ease-out cursor-pointer select-none"
      >
        <span
          data-testid="spm-pull-percentage-text"
          className="font-mono text-[11px] font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums leading-none"
        >
          {confidence.percentLabel}
        </span>
      </div>

      {/* Ultra-thin Hairline Progress Bar ABOVE the navbar */}
      <div
        role="progressbar"
        tabIndex={0}
        data-testid="spm-confidence-bar"
        aria-label={`Keyakinan SPM ${subject === 'kimia' ? 'Kimia' : 'Fizik'}: ${confidence.percentLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Number(confidence.percentValue.toFixed(1))}
        onClick={handleTogglePullPeek}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTogglePullPeek();
          }
        }}
        className="group relative w-full h-[2.5px] bg-slate-200/80 dark:bg-slate-800/90 overflow-hidden cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
      >
        {/* Subtle 50% and 80% calibration micro-notches */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-px bg-slate-400/30 dark:bg-slate-600/40"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-[80%] w-px bg-slate-400/35 dark:bg-slate-500/45"
        />

        {/* Sub-pixel GPU-composited confidence fill */}
        <div
          data-testid="spm-confidence-fill"
          className={`h-full w-full origin-left bg-gradient-to-r ${fillGradientClass} transition-transform duration-500 ease-out`}
          style={{ transform: `scaleX(${visualRatio})` }}
        />

        {/* Crisp 2px sub-pixel leading spark animated strictly via GPU translateX */}
        {visualRatio > 0 && visualRatio < 1 && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${(visualRatio * 100).toFixed(4)}%)` }}
          >
            <span className="block -ml-[2px] h-full w-[2px] bg-white/95 dark:bg-sky-200" />
          </div>
        )}
      </div>
    </div>
  );
};
