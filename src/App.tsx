import {
  ArrowLeft,
  ArrowRight,
  Atom,
  ChevronRight,
  FlaskConical,
  Moon,
  RotateCcw,
  Search,
  Sun,
  Zap,
} from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormulaVaultView } from './components/FormulaVaultView';
import { HonestExitModal } from './components/HonestExitModal';
import { LikertRatingBar } from './components/LikertRatingBar';
import { RichMathText } from './components/MathText';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PART_METADATA, PartContentView } from './components/PartContentView';
import { PWAInstallButton } from './components/PWAInstallButton';
import { SpmConfidenceBar } from './components/SpmConfidenceBar';
import {
  TEXTBOOK_CHAPTERS,
  getChaptersBySubject,
  getSubtopicsBySubject,
} from './data';
import type {
  AppRoute,
  LikertRating,
  PartNumber,
  StudyProgressMap,
  SubjectId,
} from './types/textbook';
import {
  PROGRESS_STORAGE_KEY,
  STATUS_META,
  type StatusFilter,
  computeProgressStats,
  countRatedParts,
  deriveMasteryStatus,
  derivePartStatus,
  filterSubtopics,
  getSubtopicProgress,
  markPartJustVisiting,
  markSubtopicJustVisiting,
  markSubtopicOpened,
  parseHashToRoute,
  parseProgressMap,
  ratePartLikert,
  rateSubtopicLikert,
  resolveSubjectFromRoute,
  routeToHash,
  serializeProgressMap,
} from './utils/studyProgress';
import {
  THEME_STORAGE_KEY,
  type ThemeMode,
  applyThemeToDocument,
  resolveInitialTheme,
  toggleThemeMode,
} from './utils/theme';
import { computeSpmConfidence } from './utils/spmConfidence';
import {
  getQuickFocusChapters,
  rankSpmChaptersByWeightage,
} from './utils/spmFocusWeightage';

const PART_NUMBERS: PartNumber[] = [1, 2, 3, 4, 5, 6];
const SUBJECT_STORAGE_KEY = 'kssm_active_subject_v1';
const QUICK_FOCUS_STORAGE_KEY = 'kssm_quick_focus_v1';

export default function App() {
  const [progressMap, setProgressMap] = useState<StudyProgressMap>(() => {
    if (typeof window === 'undefined') return {};
    return parseProgressMap(window.localStorage.getItem(PROGRESS_STORAGE_KEY));
  });

  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === 'undefined') return { view: 'dashboard' };
    return parseHashToRoute(window.location.hash, TEXTBOOK_CHAPTERS);
  });

  const [activeSubject, setActiveSubject] = useState<SubjectId>(() => {
    if (typeof window === 'undefined') return 'fizik';
    const initialRoute = parseHashToRoute(window.location.hash, TEXTBOOK_CHAPTERS);
    const fromRoute = resolveSubjectFromRoute(initialRoute, TEXTBOOK_CHAPTERS);
    if (fromRoute) return fromRoute;
    const saved = window.localStorage.getItem(SUBJECT_STORAGE_KEY);
    return saved === 'kimia' ? 'kimia' : 'fizik';
  });

  const [dashboardFilter, setDashboardFilter] = useState<StatusFilter>('all');
  const [formFilter, setFormFilter] = useState<'all' | 4 | 5>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const [quickFocusMode, setQuickFocusMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(QUICK_FOCUS_STORAGE_KEY) === 'true';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return resolveInitialTheme(saved, prefersDark);
  });

  // Track whether student has already submitted an honest rating during the current visit
  const [visitConfirmed, setVisitConfirmed] = useState<boolean>(false);
  const [pendingRoute, setPendingRoute] = useState<AppRoute | null>(null);

  useEffect(() => {
    applyThemeToDocument(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(SUBJECT_STORAGE_KEY, activeSubject);
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [activeSubject]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        QUICK_FOCUS_STORAGE_KEY,
        quickFocusMode ? 'true' : 'false'
      );
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [quickFocusMode]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        serializeProgressMap(progressMap)
      );
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [progressMap]);

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHashToRoute(window.location.hash, TEXTBOOK_CHAPTERS);
      const fromRoute = resolveSubjectFromRoute(parsed, TEXTBOOK_CHAPTERS);
      if (fromRoute) {
        setActiveSubject(fromRoute);
      }
      setRoute(parsed);
      setVisitConfirmed(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const commitNavigation = useCallback((target: AppRoute) => {
    const nextHash = routeToHash(target);
    if (typeof window !== 'undefined') {
      if (window.location.hash !== nextHash) {
        window.location.hash = nextHash;
      }
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    const resolvedSubj = resolveSubjectFromRoute(target, TEXTBOOK_CHAPTERS);
    if (resolvedSubj) {
      setActiveSubject(resolvedSubj);
    }
    if (target.view === 'subtopic' || target.view === 'part') {
      setProgressMap((prev) => markSubtopicOpened(prev, target.subtopicId));
    }
    setRoute(target);
    setVisitConfirmed(false);
    setPendingRoute(null);
  }, []);

  const navigateWithGate = useCallback(
    (target: AppRoute) => {
      // Drilling down from a subtopic into one of its own Parts is staying inside that subtopic
      if (
        route.view === 'subtopic' &&
        target.view === 'part' &&
        route.subtopicId === target.subtopicId
      ) {
        commitNavigation(target);
        return;
      }

      // Leaving a Subtopic page or Part page checks honestly if not rated during this visit
      if (
        (route.view === 'part' || route.view === 'subtopic') &&
        !visitConfirmed
      ) {
        setPendingRoute(target);
        return;
      }

      commitNavigation(target);
    },
    [commitNavigation, route, visitConfirmed]
  );

  const switchSubject = useCallback(
    (nextSubject: SubjectId) => {
      setActiveSubject(nextSubject);
      setFormFilter('all');
      setDashboardFilter('all');
      setSearchQuery('');
      setConfirmReset(false);
      if (
        route.view === 'dashboard' ||
        route.view === 'review' ||
        route.view === 'formulas'
      ) {
        commitNavigation({ view: route.view, subject: nextSubject });
      } else {
        navigateWithGate({ view: 'dashboard', subject: nextSubject });
      }
    },
    [commitNavigation, navigateWithGate, route.view]
  );

  const subjectChapters = useMemo(
    () => getChaptersBySubject(activeSubject),
    [activeSubject]
  );

  const subjectSubtopics = useMemo(
    () => getSubtopicsBySubject(activeSubject),
    [activeSubject]
  );

  const overallStats = useMemo(
    () => computeProgressStats(subjectSubtopics, progressMap),
    [progressMap, subjectSubtopics]
  );

  const spmConfidence = useMemo(
    () =>
      computeSpmConfidence(
        subjectChapters,
        progressMap,
        activeSubject === 'kimia' ? 'Kimia' : 'Fizik'
      ),
    [activeSubject, progressMap, subjectChapters]
  );

  const rankedSubjectChapters = useMemo(
    () => rankSpmChaptersByWeightage(subjectChapters, progressMap),
    [progressMap, subjectChapters]
  );

  const activeChapter = useMemo(() => {
    if (
      route.view === 'chapter' ||
      route.view === 'subtopic' ||
      route.view === 'part'
    ) {
      return TEXTBOOK_CHAPTERS.find((c) => c.id === route.chapterId) ?? null;
    }
    return null;
  }, [route]);

  const activeSubtopic = useMemo(() => {
    if (
      (route.view === 'subtopic' || route.view === 'part') &&
      activeChapter
    ) {
      return (
        activeChapter.subtopics.find((s) => s.id === route.subtopicId) ?? null
      );
    }
    return null;
  }, [activeChapter, route]);

  const searchMatches = useMemo(() => {
    if (!searchQuery.trim() && dashboardFilter === 'all') return [];
    return filterSubtopics(subjectChapters, progressMap, {
      statusFilter: dashboardFilter,
      query: searchQuery,
    });
  }, [dashboardFilter, progressMap, searchQuery, subjectChapters]);

  const reviewGroups = useMemo(
    () =>
      filterSubtopics(subjectChapters, progressMap, {
        statusFilter: 'review_priority',
        query: searchQuery,
      }),
    [progressMap, searchQuery, subjectChapters]
  );

  const handleResetAll = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    const idsToReset = new Set(subjectSubtopics.map((s) => s.id));
    setProgressMap((prev) => {
      const next: StudyProgressMap = {};
      for (const [k, v] of Object.entries(prev)) {
        if (!idsToReset.has(k)) {
          next[k] = v;
        }
      }
      return next;
    });
    setConfirmReset(false);
    setDashboardFilter('all');
    setSearchQuery('');
    commitNavigation({ view: 'dashboard', subject: activeSubject });
  };

  // Exit modal label
  const exitModalLabel = useMemo(() => {
    if (route.view === 'part' && activeSubtopic) {
      return `${activeSubtopic.code} ${activeSubtopic.title} · Bahagian ${route.partNum}: ${PART_METADATA[route.partNum].title}`;
    }
    if (route.view === 'subtopic' && activeSubtopic) {
      return `Topik ${activeSubtopic.code} · ${activeSubtopic.title}`;
    }
    return '';
  }, [activeSubtopic, route]);

  const exitCurrentRating = useMemo<LikertRating | null>(() => {
    if (route.view === 'part') {
      const prog = getSubtopicProgress(progressMap, route.subtopicId);
      return prog.partRatings?.[route.partNum] ?? null;
    }
    if (route.view === 'subtopic') {
      return getSubtopicProgress(progressMap, route.subtopicId).rating;
    }
    return null;
  }, [progressMap, route]);

  const handleModalJustVisiting = () => {
    if (route.view === 'part') {
      setProgressMap((prev) =>
        markPartJustVisiting(prev, route.subtopicId, route.partNum)
      );
    } else if (route.view === 'subtopic') {
      setProgressMap((prev) =>
        markSubtopicJustVisiting(prev, route.subtopicId)
      );
    }
    if (pendingRoute) {
      commitNavigation(pendingRoute);
    }
  };

  const handleModalSelectLikert = (rating: LikertRating) => {
    if (route.view === 'part') {
      setProgressMap((prev) =>
        ratePartLikert(prev, route.subtopicId, route.partNum, rating)
      );
    } else if (route.view === 'subtopic') {
      setProgressMap((prev) =>
        rateSubtopicLikert(prev, route.subtopicId, rating)
      );
    }
    if (pendingRoute) {
      commitNavigation(pendingRoute);
    }
  };

  const isNavNotesActive =
    route.view === 'dashboard' ||
    route.view === 'chapter' ||
    route.view === 'subtopic' ||
    route.view === 'part';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Sticky Top Shell: Hairline SPM Confidence Bar (with pull-percentage above) + 3-Zone Top Bar */}
      <div
        data-spm-sticky-top="true"
        className="sticky top-0 z-40 select-none border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs"
      >
        <SpmConfidenceBar confidence={spmConfidence} subject={activeSubject} />
        <header>
          <div className="mx-auto flex max-w-6xl flex-wrap sm:flex-nowrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-2 sm:py-3 sm:px-6">
          {/* Left: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => navigateWithGate({ view: 'dashboard', subject: activeSubject })}
            className="flex items-center gap-2.5 shrink-0 order-1 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 dark:bg-sky-500/15 dark:border dark:border-sky-500/40 text-white dark:text-sky-400">
              {activeSubject === 'kimia' ? (
                <FlaskConical className="h-4.5 w-4.5" />
              ) : (
                <Atom className="h-4.5 w-4.5" />
              )}
            </span>
            <span className="font-display text-base font-bold tracking-tight text-slate-950 dark:text-slate-50 whitespace-nowrap">
              {activeSubject === 'kimia' ? 'Kimia KSSM' : 'Fizik KSSM'}
            </span>
          </button>

          {/* Center: Clean Nav Links */}
          <nav
            aria-label="Navigasi utama"
            className="order-3 sm:order-2 w-full sm:w-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 border-t border-slate-100 dark:border-slate-800 pt-1.5 sm:border-t-0 sm:pt-0"
          >
            <button
              type="button"
              onClick={() => {
                setDashboardFilter('all');
                navigateWithGate({ view: 'dashboard', subject: activeSubject });
              }}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isNavNotesActive
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Senarai Bab
            </button>
            <button
              type="button"
              onClick={() => navigateWithGate({ view: 'review', subject: activeSubject })}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                route.view === 'review'
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Ulang Kaji
            </button>
            <button
              type="button"
              onClick={() => navigateWithGate({ view: 'formulas', subject: activeSubject })}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                route.view === 'formulas'
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Rumus
            </button>
          </nav>

          {/* Right: PWA Install + Dark Mode Toggle + 1 Primary CTA */}
          <div className="order-2 sm:order-3 shrink-0 flex items-center gap-2">
            <PWAInstallButton />
            <button
              type="button"
              data-testid="theme-toggle-btn"
              aria-pressed={theme === 'dark'}
              aria-label={
                theme === 'dark'
                  ? 'Tukar ke mod cerah'
                  : 'Tukar ke mod gelap untuk belajar malam'
              }
              title={theme === 'dark' ? 'Mod Cerah' : 'Mod Gelap'}
              onClick={() => setTheme((prev) => toggleThemeMode(prev))}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {theme === 'dark' ? (
                <Sun className="h-3.5 w-3.5 text-amber-400" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-slate-700" />
              )}
              <span className="hidden md:inline whitespace-nowrap">
                {theme === 'dark' ? 'Mod Cerah' : 'Mod Gelap'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setDashboardFilter((prev) =>
                  prev === 'unread' ? 'all' : 'unread'
                );
                navigateWithGate({ view: 'dashboard', subject: activeSubject });
              }}
              className="shrink-0 rounded-md bg-sky-600 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 whitespace-nowrap transition-colors cursor-pointer"
            >
              Belum Dibaca ({overallStats.unread})
            </button>
          </div>
        </div>
      </header>
      </div>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-24 sm:px-6 sm:pb-20 space-y-6">
        {/* Breadcrumb Bar for Sub-pages (Levels 1, 2, 3) */}
        {(route.view === 'chapter' ||
          route.view === 'subtopic' ||
          route.view === 'part') &&
          activeChapter && (
            <nav
              aria-label="Jejak lokasi"
              className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400"
            >
              <button
                type="button"
                onClick={() =>
                  navigateWithGate({
                    view: 'dashboard',
                    subject: activeChapter.subject ?? activeSubject,
                  })
                }
                className="font-semibold text-sky-700 dark:text-sky-400 hover:underline cursor-pointer"
              >
                Utama ({activeChapter.subject === 'kimia' ? 'Kimia' : 'Fizik'})
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600" />
              <button
                type="button"
                onClick={() =>
                  navigateWithGate({
                    view: 'chapter',
                    chapterId: activeChapter.id,
                  })
                }
                className={`cursor-pointer ${
                  route.view === 'chapter'
                    ? 'font-bold text-slate-950 dark:text-slate-50'
                    : 'font-semibold text-sky-700 dark:text-sky-400 hover:underline'
                }`}
              >
                Bab {activeChapter.number} (T{activeChapter.formLevel}) · {activeChapter.title}
              </button>
              {(route.view === 'subtopic' || route.view === 'part') &&
                activeSubtopic && (
                  <>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600" />
                    <button
                      type="button"
                      onClick={() =>
                        navigateWithGate({
                          view: 'subtopic',
                          chapterId: activeChapter.id,
                          subtopicId: activeSubtopic.id,
                        })
                      }
                      className={`cursor-pointer ${
                        route.view === 'subtopic'
                          ? 'font-bold text-slate-950 dark:text-slate-50'
                          : 'font-semibold text-sky-700 dark:text-sky-400 hover:underline'
                      }`}
                    >
                      {activeSubtopic.code} {activeSubtopic.title}
                    </button>
                  </>
                )}
              {route.view === 'part' && (
                <>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600" />
                  <span className="font-bold text-slate-950 dark:text-slate-50">
                    Bahagian {route.partNum}
                  </span>
                </>
              )}
            </nav>
          )}

        {/* LEVEL 0: MAIN DASHBOARD */}
        {route.view === 'dashboard' && (
          <div className="space-y-6">
            {/* Subject Switcher Bar */}
            <section
              aria-label="Pilih subjek pembelajaran"
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 sm:px-5 sm:py-3.5"
            >
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Suis Subjek">
                {(
                  [
                    {
                      id: 'fizik',
                      label: 'Fizik KSSM',
                      meta: '13 Bab · 55 Topik',
                      Icon: Atom,
                    },
                    {
                      id: 'kimia',
                      label: 'Kimia KSSM',
                      meta: '13 Bab · 66 Topik',
                      Icon: FlaskConical,
                    },
                  ] as const
                ).map(({ id, label, meta, Icon }) => {
                  const selected = activeSubject === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      data-testid={`subject-tab-${id}`}
                      aria-pressed={selected}
                      onClick={() => switchSubject(id)}
                      className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-left transition-colors cursor-pointer ${
                        selected
                          ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-600'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="font-display text-xs sm:text-sm font-bold whitespace-nowrap">
                        {label}
                      </span>
                      <span
                        className={`font-mono text-[11px] whitespace-nowrap ${
                          selected
                            ? 'text-sky-100'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        ({meta})
                      </span>
                    </button>
                  );
                })}
              </div>

              {!quickFocusMode && (
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Rekod disimpan asing ikut subjek
                </span>
              )}
            </section>

            {/* Hero & Mastery Summary */}
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
              <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-4">
                <div className="min-w-[260px] flex-1 max-w-xl">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    {quickFocusMode
                      ? `MOD FOKUS SPM · ${activeSubject === 'kimia' ? 'KIMIA' : 'FIZIK'} T4 & T5`
                      : activeSubject === 'kimia'
                        ? `Kimia Tingkatan 4 & 5 · ${subjectChapters.length} Bab (${subjectSubtopics.length} Topik)`
                        : `Fizik Tingkatan 4 & 5 · ${subjectChapters.length} Bab (${subjectSubtopics.length} Topik)`}
                  </p>
                  <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                    {quickFocusMode
                      ? `Bab Penting ${activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} SPM`
                      : `${activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} KSSM Tingkatan 4 & 5`}
                  </h1>
                  {!quickFocusMode && (
                    <p
                      data-testid="hero-description"
                      className="mt-1 text-sm text-slate-600 dark:text-slate-300"
                    >
                      Pilih bab dan topik untuk mula belajar. Rekod bacaan anda disimpan secara automatik.
                    </p>
                  )}
                </div>

                <div className="flex w-full lg:w-auto items-center justify-between lg:justify-end gap-3 sm:gap-4 shrink-0">
                  <div className="text-left lg:text-right min-w-0">
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      Keyakinan Ambil {activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} SPM
                    </p>
                    <p
                      data-testid="dashboard-spm-confidence"
                      className="font-mono text-3xl font-bold text-slate-950 dark:text-slate-50 tabular-nums"
                    >
                      {spmConfidence.percentLabel}
                    </p>
                    <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">
                      {spmConfidence.verdictTitle}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-400 tabular-nums">
                      T4 {spmConfidence.form4Percent}% · T5 {spmConfidence.form5Percent}% · {overallStats.mastered}/{overallStats.total} dikuasai
                      {overallStats.averageLikert !== null
                        ? ` · Purata ${overallStats.averageLikert}/5`
                        : ''}
                    </p>
                  </div>

                  <img
                    src="/jata-negara.svg"
                    alt="Jata Negara Malaysia"
                    data-testid="jata-negara-emblem"
                    width={1024}
                    height={768}
                    decoding="async"
                    className="h-[88px] sm:h-[96px] w-auto aspect-[4/3] shrink-0 object-contain select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* 5-Category Dual-Coded Status Summary Grid (hidden in Quick Focus Mode) */}
              {!quickFocusMode && (
                <div
                  data-testid="status-summary-grid"
                  className="grid grid-cols-2 gap-2 sm:grid-cols-5"
                >
                  {(
                    [
                      ['unread', overallStats.unread],
                      ['opened_unrated', overallStats.openedUnrated],
                      ['needs_reread', overallStats.needsReread],
                      ['needs_practice', overallStats.needsPractice],
                      ['mastered', overallStats.mastered],
                    ] as const
                  ).map(([statusKey, count]) => {
                    const meta = STATUS_META[statusKey];
                    const isSelected = dashboardFilter === statusKey;
                    return (
                      <button
                        key={statusKey}
                        type="button"
                        onClick={() =>
                          setDashboardFilter((prev) =>
                            prev === statusKey ? 'all' : statusKey
                          )
                        }
                        className={`rounded-lg border p-3 text-left transition-colors cursor-pointer ${
                          isSelected
                            ? 'border-sky-600 dark:border-sky-400 bg-sky-50/70 dark:bg-sky-950/50 ring-1 ring-sky-600 dark:ring-sky-400'
                            : `${meta.borderColor} ${meta.bgColor} hover:border-slate-300 dark:hover:border-slate-600`
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between text-xs font-semibold ${meta.textColor}`}
                        >
                          <span>{meta.shortBadge}</span>
                          <span aria-hidden="true">{meta.symbol}</span>
                        </div>
                        <p className="mt-1 font-mono text-xl font-bold text-slate-950 dark:text-slate-50 tabular-nums">
                          {count}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Quick Search & Reset Toolbar (hidden in Quick Focus Mode) */}
            {!quickFocusMode && (
              <section
                data-testid="search-reset-toolbar"
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="relative flex-1 min-w-[220px]">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        activeSubject === 'kimia'
                          ? 'Cari topik (cth: Mol, Titrasi, Redoks, Polimer)...'
                          : 'Cari topik (cth: Kepler, Hooke, Pascal, Einstein)...'
                      }
                      aria-label={
                        activeSubject === 'kimia'
                          ? 'Cari topik Kimia Tingkatan 4 dan 5'
                          : 'Cari topik Fizik Tingkatan 4 dan 5'
                      }
                      className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 py-2 pl-9 pr-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-600 dark:focus:border-sky-400 focus:bg-white dark:focus:bg-slate-900 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {dashboardFilter !== 'all' && (
                      <button
                        type="button"
                        onClick={() => setDashboardFilter('all')}
                        className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                      >
                        Padam Penapis ({STATUS_META[dashboardFilter as keyof typeof STATUS_META]?.shortBadge ?? dashboardFilter})
                      </button>
                    )}

                    {confirmReset ? (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handleResetAll}
                          className="rounded-md border border-red-600 bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700 cursor-pointer"
                        >
                          Sahkan Set Semula ({activeSubject === 'kimia' ? 'Kimia' : 'Fizik'})
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmReset(false)}
                          className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                        >
                          Batal
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmReset(true)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Set Semula Rekod</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Filtered Quick Jump List (only shown when user searches or selects a status filter) */}
                {(searchQuery.trim() !== '' || dashboardFilter !== 'all') && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Hasil Carian Topik
                    </p>
                    {searchMatches.length === 0 ? (
                      <p className="text-xs text-slate-600 dark:text-slate-400 py-2">
                        Tiada topik sepadan.
                      </p>
                    ) : (
                      <div className="grid gap-2 sm:grid-cols-2">
                        {searchMatches.flatMap(({ chapter, subtopics }) =>
                          subtopics.map((sub) => {
                            const prog = getSubtopicProgress(progressMap, sub.id);
                            const st = deriveMasteryStatus(prog);
                            const meta = STATUS_META[st];
                            return (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() =>
                                  commitNavigation({
                                    view: 'subtopic',
                                    chapterId: chapter.id,
                                    subtopicId: sub.id,
                                  })
                                }
                                className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 px-3 py-2.5 text-left hover:border-sky-300 dark:hover:border-sky-500 hover:bg-sky-50/40 dark:hover:bg-sky-950/40 cursor-pointer"
                              >
                                <div className="min-w-0">
                                  <p className="font-display text-sm font-semibold text-slate-950 dark:text-slate-50 truncate">
                                    {sub.code} · {sub.title}
                                  </p>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                    T{chapter.formLevel} · Bab {chapter.number} · {chapter.title}
                                  </p>
                                </div>
                                <span
                                  className={`shrink-0 inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold ${meta.borderColor} ${meta.bgColor} ${meta.textColor}`}
                                >
                                  <span aria-hidden="true">{meta.symbol}</span>
                                  <span>{meta.shortBadge}</span>
                                </span>
                              </button>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Topic (Chapter) Cards Grid with Form 4 & Form 5 Filter */}
            {(() => {
              const focusEntries = quickFocusMode
                ? getQuickFocusChapters(rankedSubjectChapters, 'all')
                : rankedSubjectChapters
                    .filter(
                      (entry) =>
                        formFilter === 'all' ||
                        entry.chapter.formLevel === formFilter
                    )
                    .sort((a, b) => {
                      if (a.chapter.formLevel !== b.chapter.formLevel) {
                        return a.chapter.formLevel - b.chapter.formLevel;
                      }
                      return a.chapter.number - b.chapter.number;
                    });

              const t4Count = subjectChapters.filter((ch) => ch.formLevel === 4).length;
              const t5Count = subjectChapters.filter((ch) => ch.formLevel === 5).length;
              const displayedSubtopicsCount = focusEntries.reduce(
                (sum, entry) => sum + entry.chapter.subtopics.length,
                0
              );
              const combinedWeightPct = focusEntries.reduce(
                (sum, entry) => sum + entry.weightagePercent,
                0
              );

              return (
                <section className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display text-lg font-bold text-slate-950 dark:text-slate-50">
                        {quickFocusMode
                          ? `Bab Fokus ${activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} SPM (${focusEntries.length} Bab Utama)`
                          : `Pilih Bab ${activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} (${focusEntries.length} Bab)`}
                      </h2>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {quickFocusMode
                          ? `${displayedSubtopicsCount} topik · Anggaran ${combinedWeightPct}% markah SPM`
                          : `${displayedSubtopicsCount} topik`}
                      </span>
                    </div>

                    {!quickFocusMode && (
                      <div
                        data-testid="form-filter-group"
                        className="flex flex-wrap items-center gap-1.5"
                        role="group"
                        aria-label="Penapis Tingkatan"
                      >
                        {(
                          [
                            ['all', `Semua (${subjectChapters.length} Bab)`],
                            [4, `Tingkatan 4 (${t4Count} Bab)`],
                            [5, `Tingkatan 5 (${t5Count} Bab)`],
                          ] as const
                        ).map(([lvl, label]) => (
                          <button
                            key={String(lvl)}
                            type="button"
                            data-testid={`form-filter-${lvl}`}
                            onClick={() => setFormFilter(lvl)}
                            className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                              formFilter === lvl
                                ? 'border-sky-700 bg-sky-700 text-white dark:border-sky-500 dark:bg-sky-600'
                                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid gap-3.5 md:grid-cols-2">
                    {focusEntries.map((entry) => {
                      const { chapter, stats: chStats, rank, weightagePercent, focusTag, keyElementsSummary } = entry;
                      return (
                        <button
                          key={chapter.id}
                          type="button"
                          data-testid={`chapter-card-${chapter.id}`}
                          data-high-weightage={entry.isHighWeightage ? 'true' : 'false'}
                          onClick={() =>
                            commitNavigation({
                              view: 'chapter',
                              chapterId: chapter.id,
                            })
                          }
                          className={`group rounded-xl border p-5 text-left transition-colors cursor-pointer flex flex-col justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                            quickFocusMode
                              ? 'border-amber-400/90 dark:border-amber-500/75 bg-amber-50/35 dark:bg-amber-950/20 hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/35'
                              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/20 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                                {quickFocusMode && (
                                  <span className="rounded border border-amber-400/70 dark:border-amber-500/60 bg-amber-100 dark:bg-amber-900/60 px-1.5 py-0.5 text-[10px] font-bold text-amber-900 dark:text-amber-200">
                                    #{rank} · ~{weightagePercent}% SPM
                                  </span>
                                )}
                                <span className="rounded border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/70 px-1.5 py-0.5 text-[10px]">
                                  T{chapter.formLevel}
                                </span>
                                <span>
                                  Bab {chapter.number} · {chapter.pageRange}
                                </span>
                              </span>
                              <span className="font-mono text-xs font-semibold text-slate-600 dark:text-slate-400 tabular-nums">
                                {chStats.mastered}/{chStats.total} dikuasai
                              </span>
                            </div>
                            <h3 className="font-display text-lg font-bold text-slate-950 dark:text-slate-50 group-hover:text-sky-800 dark:group-hover:text-sky-300">
                              {chapter.title}
                            </h3>
                            {quickFocusMode ? (
                              <div className="flex flex-col items-start gap-1.5 text-xs">
                                <span className="rounded border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/50 px-2 py-0.5 font-semibold text-sky-800 dark:text-sky-300">
                                  {focusTag}
                                </span>
                                <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                                  {keyElementsSummary}
                                </span>
                              </div>
                            ) : (
                              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                                <RichMathText text={chapter.overview} />
                              </p>
                            )}
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <div className="h-1.5 w-full overflow-hidden rounded bg-slate-100 dark:bg-slate-800">
                              <div
                                className="h-full bg-emerald-600 dark:bg-emerald-500 transition-all"
                                style={{ width: `${chStats.completionPercent}%` }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 tabular-nums">
                              <span>
                                {chStats.unread} belum dibaca ·{' '}
                                {chStats.needsReread + chStats.needsPractice} perlu semakan
                              </span>
                              <span className="inline-flex items-center gap-1 font-sans font-semibold text-sky-700 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                                <span>Buka Bab {chapter.number}</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })()}
          </div>
        )}

        {/* LEVEL 1: CHAPTER (TOPIC) SPA PAGE */}
        {route.view === 'chapter' && activeChapter && (
          <div className="space-y-5">
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() =>
                    commitNavigation({
                      view: 'dashboard',
                      subject: activeChapter.subject ?? activeSubject,
                    })
                  }
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Kembali</span>
                </button>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {activeChapter.pageRange} · {activeChapter.subtopics.length} topik
                </span>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  Tingkatan {activeChapter.formLevel} · Bab {activeChapter.number}
                </p>
                <h1 className="mt-0.5 font-display text-2xl font-bold text-slate-950 dark:text-slate-50">
                  {activeChapter.title}
                </h1>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  <RichMathText text={activeChapter.overview} />
                </p>
              </div>
            </section>

            <section className="space-y-2.5">
              <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                Pilih Topik ({activeChapter.subtopics.length})
              </h2>
              <div className="space-y-2">
                {activeChapter.subtopics.map((sub) => {
                  const prog = getSubtopicProgress(progressMap, sub.id);
                  const status = deriveMasteryStatus(prog);
                  const meta = STATUS_META[status];
                  const ratedParts = countRatedParts(prog);
                  const totalParts = sub.part5DecisionTable ? 6 : 5;

                  return (
                    <button
                      key={sub.id}
                      type="button"
                      data-testid={`section-btn-${sub.id}`}
                      onClick={() =>
                        commitNavigation({
                          view: 'subtopic',
                          chapterId: activeChapter.id,
                          subtopicId: sub.id,
                        })
                      }
                      className="w-full flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 text-left hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/25 dark:hover:bg-slate-800/80 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 rounded px-2.5 py-1 shrink-0 tabular-nums">
                          {sub.code}
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-base font-semibold text-slate-950 dark:text-slate-50">
                            {sub.title}
                          </p>
                          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                            Buku Teks {sub.pageRef} · {ratedParts}/{totalParts} bahagian dinilai
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 ml-auto shrink-0">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-semibold ${meta.borderColor} ${meta.bgColor} ${meta.textColor}`}
                        >
                          <span aria-hidden="true">{meta.symbol}</span>
                          <span>{meta.shortBadge}</span>
                          {prog.rating !== null && (
                            <span className="font-mono tabular-nums">
                              · {prog.rating}/5
                            </span>
                          )}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* LEVEL 2: SUBTOPIC SPA PAGE */}
        {route.view === 'subtopic' && activeChapter && activeSubtopic && (() => {
          const prog = getSubtopicProgress(progressMap, activeSubtopic.id);
          return (
            <div className="space-y-5">
              <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    data-testid="back-to-chapter-btn"
                    onClick={() =>
                      navigateWithGate({
                        view: 'chapter',
                        chapterId: activeChapter.id,
                      })
                    }
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Kembali ke Bab {activeChapter.number}</span>
                  </button>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    Buku Teks {activeSubtopic.pageRef}
                  </span>
                </div>

                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    Tingkatan {activeChapter.formLevel} · Topik {activeSubtopic.code} · {activeChapter.title}
                  </p>
                  <h1 className="mt-0.5 font-display text-2xl font-bold text-slate-950 dark:text-slate-50">
                    {activeSubtopic.title}
                  </h1>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Pilih satu bahagian di bawah untuk dibuka pada halaman berasingan.
                  </p>
                </div>
              </section>

              {/* 6 Clean Part Buttons (Navigates to Level 3 SPA Page) */}
              <section className="space-y-2.5">
                <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                  Pilih Bahagian (1–6)
                </h2>
                <div className="grid gap-2.5">
                  {PART_NUMBERS.map((pNum) => {
                    const disabled =
                      pNum === 5 && !activeSubtopic.part5DecisionTable;
                    const pMeta = PART_METADATA[pNum];
                    const pStatus = derivePartStatus(prog, pNum);
                    const sMeta = STATUS_META[pStatus];
                    const pRating = prog.partRatings?.[pNum] ?? null;

                    if (disabled) {
                      return (
                        <div
                          key={pNum}
                          className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3.5 text-slate-400 dark:text-slate-500"
                        >
                          <div>
                            <p className="font-display text-sm font-semibold text-slate-500 dark:text-slate-400">
                              Bahagian 5 · {pMeta.title}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">
                              Tiada untuk topik ini
                            </p>
                          </div>
                          <span className="font-mono text-xs">TIADA</span>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={pNum}
                        type="button"
                        data-testid={`part-btn-${activeSubtopic.id}-${pNum}`}
                        onClick={() =>
                          navigateWithGate({
                            view: 'part',
                            chapterId: activeChapter.id,
                            subtopicId: activeSubtopic.id,
                            partNum: pNum,
                          })
                        }
                        className="w-full flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 text-left hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/25 dark:hover:bg-slate-800/80 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-sm sm:text-base font-bold text-slate-950 dark:text-slate-50">
                            Bahagian {pNum} · {pMeta.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {pMeta.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-2.5 ml-auto shrink-0">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-semibold ${sMeta.borderColor} ${sMeta.bgColor} ${sMeta.textColor}`}
                          >
                            <span aria-hidden="true">{sMeta.symbol}</span>
                            <span>{sMeta.shortBadge}</span>
                            {pRating !== null && (
                              <span className="font-mono tabular-nums">
                                · {pRating}/5
                              </span>
                            )}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Inline Overall Topic Rating Control */}
              <LikertRatingBar
                testId={`likert-control-${activeSubtopic.id}`}
                label={`Tahap Kefahaman Topik ${activeSubtopic.code}`}
                opened={prog.opened}
                rating={prog.rating}
                onRate={(rating) => {
                  setProgressMap((prev) =>
                    rateSubtopicLikert(prev, activeSubtopic.id, rating)
                  );
                  setVisitConfirmed(true);
                }}
                onJustVisiting={() => {
                  setProgressMap((prev) =>
                    markSubtopicJustVisiting(prev, activeSubtopic.id)
                  );
                  setVisitConfirmed(true);
                  commitNavigation({
                    view: 'chapter',
                    chapterId: activeChapter.id,
                  });
                }}
              />
            </div>
          );
        })()}

        {/* LEVEL 3: PART (SUB-SUB) SPA PAGE */}
        {route.view === 'part' && activeChapter && activeSubtopic && (
          <PartContentView
            chapter={activeChapter}
            subtopic={activeSubtopic}
            partNum={route.partNum}
            progress={getSubtopicProgress(progressMap, activeSubtopic.id)}
            onRatePart={(rating) => {
              setProgressMap((prev) =>
                ratePartLikert(
                  prev,
                  activeSubtopic.id,
                  route.partNum,
                  rating
                )
              );
              setVisitConfirmed(true);
            }}
            onJustVisitingPart={() => {
              setProgressMap((prev) =>
                markPartJustVisiting(prev, activeSubtopic.id, route.partNum)
              );
              setVisitConfirmed(true);
              commitNavigation({
                view: 'subtopic',
                chapterId: activeChapter.id,
                subtopicId: activeSubtopic.id,
              });
            }}
            onNavigatePart={(targetPart) =>
              navigateWithGate({
                view: 'part',
                chapterId: activeChapter.id,
                subtopicId: activeSubtopic.id,
                partNum: targetPart,
              })
            }
            onBackToSubtopic={() =>
              navigateWithGate({
                view: 'subtopic',
                chapterId: activeChapter.id,
                subtopicId: activeSubtopic.id,
              })
            }
          />
        )}

        {/* REVIEW PRIORITY QUEUE */}
        {route.view === 'review' && (
          <div className="space-y-4">
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="font-display text-xl font-bold text-slate-950 dark:text-slate-50">
                  Senarai Ulang Kaji ({activeSubject === 'kimia' ? 'Kimia KSSM' : 'Fizik KSSM'})
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  Topik yang dinilai 1 hingga 3 atau sedang dibaca disenaraikan di sini.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-0.5" role="group" aria-label="Pilih subjek ulang kaji">
                  {(
                    [
                      ['fizik', 'Fizik'],
                      ['kimia', 'Kimia'],
                    ] as const
                  ).map(([subj, label]) => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => switchSubject(subj)}
                      className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        activeSubject === subj
                          ? 'bg-slate-900 dark:bg-sky-600 text-white'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    commitNavigation({ view: 'dashboard', subject: activeSubject })
                  }
                  className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Kembali
                </button>
              </div>
            </section>

            {reviewGroups.length === 0 ? (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center space-y-2">
                <p className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                  Tiada topik {activeSubject === 'kimia' ? 'Kimia' : 'Fizik'} perlu diulang kaji buat masa ini.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Buka mana-mana bab dan tandakan tahap kefahaman anda (1 hingga 5) untuk mula menjejak.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {reviewGroups.flatMap(({ chapter, subtopics }) =>
                  subtopics.map((sub) => {
                    const prog = getSubtopicProgress(progressMap, sub.id);
                    const status = deriveMasteryStatus(prog);
                    const meta = STATUS_META[status];
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() =>
                          commitNavigation({
                            view: 'subtopic',
                            chapterId: chapter.id,
                            subtopicId: sub.id,
                          })
                        }
                        className="w-full flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 text-left hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/25 dark:hover:bg-slate-800/80 cursor-pointer"
                      >
                        <div>
                          <p className="font-display text-base font-semibold text-slate-950 dark:text-slate-50">
                            {sub.code} · {sub.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            T{chapter.formLevel} · Bab {chapter.number} ({chapter.title}) · {sub.pageRef}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-semibold ${meta.borderColor} ${meta.bgColor} ${meta.textColor}`}
                        >
                          <span aria-hidden="true">{meta.symbol}</span>
                          <span>{meta.shortBadge}</span>
                          {prog.rating !== null && (
                            <span className="font-mono tabular-nums">
                              · {prog.rating}/5
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            )}
          </div>
        )}

        {/* FORMULA VAULT */}
        {route.view === 'formulas' && (
          <FormulaVaultView
            activeSubject={activeSubject}
            onChangeSubject={(subj) => switchSubject(subj)}
            onJumpToSubtopic={(chapterId, subtopicId) =>
              commitNavigation({ view: 'subtopic', chapterId, subtopicId })
            }
          />
        )}
      </main>

      {/* Honest Exit Gate Modal before leaving Subtopic or Part SPA page */}
      <HonestExitModal
        open={pendingRoute !== null}
        pageLabel={exitModalLabel}
        currentRating={exitCurrentRating}
        onSelectJustVisiting={handleModalJustVisiting}
        onSelectLikert={handleModalSelectLikert}
        onCancelStay={() => setPendingRoute(null)}
      />

      {/* Floating Focus Mode Toggle on Main Dashboard */}
      {route.view === 'dashboard' && (
        <button
          type="button"
          data-testid="quick-focus-toggle"
          aria-pressed={quickFocusMode}
          aria-label={
            quickFocusMode
              ? 'Matikan Mod Fokus untuk paparkan semua bab'
              : 'Aktifkan Mod Fokus untuk paparkan bab paling penting bagi SPM'
          }
          onClick={() => setQuickFocusMode((prev) => !prev)}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold shadow-xl transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
            quickFocusMode
              ? 'border-amber-400 bg-amber-500 text-slate-950 hover:bg-amber-400 ring-2 ring-amber-400/30'
              : 'border-slate-700 dark:border-sky-400/50 bg-slate-900 dark:bg-sky-600 text-white hover:bg-slate-800 dark:hover:bg-sky-500'
          }`}
        >
          <Zap
            className={`h-4 w-4 shrink-0 ${
              quickFocusMode ? 'fill-slate-950 text-slate-950' : 'text-amber-400 dark:text-amber-300'
            }`}
          />
          <span className="whitespace-nowrap">
            {quickFocusMode ? 'Mod Fokus: Aktif' : 'Mod Fokus SPM'}
          </span>
        </button>
      )}

      {/* Offline status banner & precache readiness toast */}
      <OfflineIndicator />
    </div>
  );
}
