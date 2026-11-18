import {
  ArrowLeft,
  ArrowRight,
  Atom,
  ChevronRight,
  Moon,
  RotateCcw,
  Search,
  Sun,
} from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormulaVaultView } from './components/FormulaVaultView';
import { HonestExitModal } from './components/HonestExitModal';
import { LikertRatingBar } from './components/LikertRatingBar';
import { RichMathText } from './components/MathText';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PART_METADATA, PartContentView } from './components/PartContentView';
import { PWAInstallButton } from './components/PWAInstallButton';
import { ALL_SUBTOPICS, TEXTBOOK_CHAPTERS } from './data';
import type {
  AppRoute,
  LikertRating,
  PartNumber,
  StudyProgressMap,
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

const PART_NUMBERS: PartNumber[] = [1, 2, 3, 4, 5, 6];

export default function App() {
  const [progressMap, setProgressMap] = useState<StudyProgressMap>(() => {
    if (typeof window === 'undefined') return {};
    return parseProgressMap(window.localStorage.getItem(PROGRESS_STORAGE_KEY));
  });

  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === 'undefined') return { view: 'dashboard' };
    return parseHashToRoute(window.location.hash, TEXTBOOK_CHAPTERS);
  });

  const [dashboardFilter, setDashboardFilter] = useState<StatusFilter>('all');
  const [formFilter, setFormFilter] = useState<'all' | 4 | 5>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [confirmReset, setConfirmReset] = useState<boolean>(false);

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

  const overallStats = useMemo(
    () => computeProgressStats(ALL_SUBTOPICS, progressMap),
    [progressMap]
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
    return filterSubtopics(TEXTBOOK_CHAPTERS, progressMap, {
      statusFilter: dashboardFilter,
      query: searchQuery,
    });
  }, [dashboardFilter, progressMap, searchQuery]);

  const reviewGroups = useMemo(
    () =>
      filterSubtopics(TEXTBOOK_CHAPTERS, progressMap, {
        statusFilter: 'review_priority',
        query: searchQuery,
      }),
    [progressMap, searchQuery]
  );

  const handleResetAll = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setProgressMap({});
    setConfirmReset(false);
    setDashboardFilter('all');
    setSearchQuery('');
    commitNavigation({ view: 'dashboard' });
  };

  // Exit modal handlers
  const exitModalLabel = useMemo(() => {
    if (route.view === 'part' && activeSubtopic) {
      return `${activeSubtopic.code} ${activeSubtopic.title} · Bahagian ${route.partNum}: ${PART_METADATA[route.partNum].title}`;
    }
    if (route.view === 'subtopic' && activeSubtopic) {
      return `Subtopik ${activeSubtopic.code} · ${activeSubtopic.title}`;
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
      {/* 3-Zone Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-6xl flex-wrap sm:flex-nowrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5 sm:py-3 sm:px-6">
          {/* Left: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => navigateWithGate({ view: 'dashboard' })}
            className="flex items-center gap-2.5 shrink-0 order-1 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 dark:bg-sky-500/15 dark:border dark:border-sky-500/40 text-white dark:text-sky-400">
              <Atom className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-slate-950 dark:text-slate-50 whitespace-nowrap">
              Fizik KSSM
            </span>
          </button>

          {/* Center: Clean Nav Links */}
          <nav
            aria-label="Navigasi utama"
            className="order-3 sm:order-2 w-full sm:w-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 border-t border-slate-100 dark:border-slate-800 pt-2 sm:border-t-0 sm:pt-0"
          >
            <button
              type="button"
              onClick={() => {
                setDashboardFilter('all');
                navigateWithGate({ view: 'dashboard' });
              }}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isNavNotesActive
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Dashboard Bab
            </button>
            <button
              type="button"
              onClick={() => navigateWithGate({ view: 'review' })}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                route.view === 'review'
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Fokus Ulang Kaji
            </button>
            <button
              type="button"
              onClick={() => navigateWithGate({ view: 'formulas' })}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                route.view === 'formulas'
                  ? 'bg-slate-900 dark:bg-sky-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Senarai Rumus
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
                navigateWithGate({ view: 'dashboard' });
              }}
              className="shrink-0 rounded-md bg-sky-600 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 whitespace-nowrap transition-colors cursor-pointer"
            >
              Belum Dibaca ({overallStats.unread})
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-16 sm:px-6 space-y-6">
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
                onClick={() => navigateWithGate({ view: 'dashboard' })}
                className="font-semibold text-sky-700 dark:text-sky-400 hover:underline cursor-pointer"
              >
                Dashboard
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
            {/* Hero & Mastery Telemetry */}
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    Sukatan KSSM Fizik Tingkatan 4 &amp; 5 · 13 Bab (55 Subtopik)
                  </p>
                  <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                    Dashboard Penguasaan Topik SPM
                  </h1>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Pilih Tingkatan dan bab untuk membuka halaman subtopiknya. Setiap subtopik dan setiap bahagian dibuka dalam halaman berasingan supaya minda kekal fokus.
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    Penguasaan Keseluruhan
                  </p>
                  <p className="font-mono text-3xl font-bold text-slate-950 dark:text-slate-50 tabular-nums">
                    {overallStats.completionPercent}%
                  </p>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-400 tabular-nums">
                    {overallStats.mastered}/{overallStats.total} dikuasai
                    {overallStats.averageLikert !== null
                      ? ` · Purata ${overallStats.averageLikert}/5`
                      : ''}
                  </p>
                </div>
              </div>

              {/* 5-Category Dual-Coded Status Summary Grid */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
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
            </section>

            {/* Quick Search & Reset Toolbar */}
            <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[220px]">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari pantas mana-mana topik (cth: Kepler, Hooke, Pascal, Einstein)..."
                    aria-label="Cari subtopik Fizik Tingkatan 4 dan 5"
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
                        Sahkan Set Semula Rekod
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
                    Hasil Padanan Subtopik (Klik untuk Buka Halaman Subtopik)
                  </p>
                  {searchMatches.length === 0 ? (
                    <p className="text-xs text-slate-600 dark:text-slate-400 py-2">
                      Tiada subtopik sepadan dengan penapis semasa.
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

            {/* Topic (Chapter) Cards Grid with Form 4 & Form 5 Filter */}
            {(() => {
              const displayedChapters = TEXTBOOK_CHAPTERS.filter(
                (ch) => formFilter === 'all' || ch.formLevel === formFilter
              );
              const displayedSubtopicsCount = displayedChapters.reduce(
                (sum, ch) => sum + ch.subtopics.length,
                0
              );
              return (
                <section className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display text-lg font-bold text-slate-950 dark:text-slate-50">
                        Pilih Bab Pembelajaran ({displayedChapters.length} Bab)
                      </h2>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {displayedSubtopicsCount} subtopik dipaparkan
                      </span>
                    </div>

                    <div
                      className="flex flex-wrap items-center gap-1.5"
                      role="group"
                      aria-label="Penapis Tingkatan"
                    >
                      {(
                        [
                          ['all', 'Semua (13 Bab)'],
                          [4, 'Tingkatan 4 (6 Bab)'],
                          [5, 'Tingkatan 5 (7 Bab)'],
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
                  </div>

                  <div className="grid gap-3.5 md:grid-cols-2">
                    {displayedChapters.map((chapter) => {
                      const chStats = computeProgressStats(
                        chapter.subtopics,
                        progressMap
                      );
                      return (
                        <button
                          key={chapter.id}
                          type="button"
                          data-testid={`chapter-card-${chapter.id}`}
                          onClick={() =>
                            commitNavigation({
                              view: 'chapter',
                              chapterId: chapter.id,
                            })
                          }
                          className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-left transition-colors hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/20 dark:hover:bg-slate-800/80 cursor-pointer flex flex-col justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
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
                            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                              <RichMathText text={chapter.overview} />
                            </p>
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
                  onClick={() => commitNavigation({ view: 'dashboard' })}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Kembali ke Dashboard</span>
                </button>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {activeChapter.pageRange} · {activeChapter.subtopics.length} subtopik
                </span>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  Tingkatan {activeChapter.formLevel} · Halaman Bab {activeChapter.number}
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
                Pilih Subtopik ({activeChapter.subtopics.length})
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
                    Tingkatan {activeChapter.formLevel} · Subtopik {activeSubtopic.code} · {activeChapter.title}
                  </p>
                  <h1 className="mt-0.5 font-display text-2xl font-bold text-slate-950 dark:text-slate-50">
                    {activeSubtopic.title}
                  </h1>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Pilih satu bahagian di bawah untuk membukanya pada halaman khusus. Tiada lambakan teks serentak.
                  </p>
                </div>
              </section>

              {/* 6 Clean Part Buttons (Navigates to Level 3 SPA Page) */}
              <section className="space-y-2.5">
                <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                  Pilih Bahagian Pembelajaran (Bahagian 1–6)
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
                              Tidak berkenaan bagi subtopik asas teori/pengiraan tulen ini
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

              {/* Inline Subtopic Overall Likert Control */}
              <LikertRatingBar
                testId={`likert-control-${activeSubtopic.id}`}
                label={`Penilaian Keseluruhan Subtopik ${activeSubtopic.code}`}
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
                  Barisan Fokus Ulang Kaji (Skala Likert 1–3 &amp; Sedang Dibaca)
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  Hanya topik yang anda nilai 1–3 atau sedang dibaca disenaraikan di sini. Topik "Sekadar Melawat (0)" kekal dalam Belum Dibaca.
                </p>
              </div>
              <button
                type="button"
                onClick={() => commitNavigation({ view: 'dashboard' })}
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
              >
                Kembali ke Dashboard
              </button>
            </section>

            {reviewGroups.length === 0 ? (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center space-y-2">
                <p className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                  Tiada topik dalam senarai fokus ulang kaji buat masa ini.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Mulakan dengan membuka mana-mana bab di Dashboard dan menilai kefahaman anda pada skala Likert 1–5.
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

      {/* Offline status banner & precache readiness toast */}
      <OfflineIndicator />
    </div>
  );
}
