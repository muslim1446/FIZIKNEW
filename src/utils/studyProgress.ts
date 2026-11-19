import type {
  AppRoute,
  ChapterContent,
  LikertRating,
  MasteryStatus,
  PartNumber,
  StudyProgressMap,
  SubjectId,
  SubtopicContent,
  SubtopicProgress,
} from '../types/textbook';

export const PROGRESS_STORAGE_KEY = 'fizik_kssm_t4_progress_v1';

export const LIKERT_LABELS: Record<
  LikertRating,
  { short: string; description: string; recommendation: string }
> = {
  1: {
    short: '1 · Belum Faham',
    description: 'Masih keliru dengan konsep asas',
    recommendation: 'Baca semula Bahagian 1 hingga 3',
  },
  2: {
    short: '2 · Kurang Jelas',
    description: 'Faham sedikit tetapi masih keliru rumus atau kata kunci',
    recommendation: 'Semak kata kunci dan contoh pengiraan',
  },
  3: {
    short: '3 · Faham Asas',
    description: 'Faham konsep tetapi masih perlukan latihan',
    recommendation: 'Cuba soalan latihan di Bahagian 6',
  },
  4: {
    short: '4 · Yakin',
    description: 'Boleh menerangkan konsep dan mengira dengan betul',
    recommendation: 'Semak kesilapan biasa sebelum peperiksaan',
  },
  5: {
    short: '5 · Sudah Kuasai',
    description: 'Ingat kata kunci dan sedia menjawab soalan SPM',
    recommendation: 'Sudah dikuasai. Ulang kaji ringkas secara berkala.',
  },
};

export const STATUS_META: Record<
  MasteryStatus,
  {
    label: string;
    shortBadge: string;
    symbol: string;
    textColor: string;
    borderColor: string;
    bgColor: string;
  }
> = {
  unread: {
    label: 'Belum Dibaca',
    shortBadge: 'BELUM DIBACA',
    symbol: '○',
    textColor: 'text-slate-600 dark:text-slate-300',
    borderColor: 'border-slate-200 dark:border-slate-700',
    bgColor: 'bg-slate-50 dark:bg-slate-800/75',
  },
  opened_unrated: {
    label: 'Sedang Dibaca',
    shortBadge: 'SEDANG DIBACA',
    symbol: '◐',
    textColor: 'text-sky-700 dark:text-sky-300',
    borderColor: 'border-sky-200 dark:border-sky-800',
    bgColor: 'bg-sky-50/70 dark:bg-sky-950/55',
  },
  needs_reread: {
    label: 'Perlu Dibaca Lagi',
    shortBadge: 'PERLU BACA LAGI',
    symbol: '▲',
    textColor: 'text-red-700 dark:text-red-300',
    borderColor: 'border-red-200 dark:border-red-800',
    bgColor: 'bg-red-50/70 dark:bg-red-950/50',
  },
  needs_practice: {
    label: 'Perlu Latihan',
    shortBadge: 'PERLU LATIHAN',
    symbol: '◆',
    textColor: 'text-amber-700 dark:text-amber-300',
    borderColor: 'border-amber-200 dark:border-amber-800',
    bgColor: 'bg-amber-50/70 dark:bg-amber-950/50',
  },
  mastered: {
    label: 'Telah Dikuasai',
    shortBadge: 'DIKUASAI',
    symbol: '✓',
    textColor: 'text-emerald-700 dark:text-emerald-300',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    bgColor: 'bg-emerald-50/70 dark:bg-emerald-950/50',
  },
};

export function createEmptySubtopicProgress(): SubtopicProgress {
  return {
    opened: false,
    rating: null,
    openedParts: [],
    partRatings: {},
    updatedAt: null,
  };
}

export function getSubtopicProgress(
  map: StudyProgressMap,
  subtopicId: string
): SubtopicProgress {
  return map[subtopicId] ?? createEmptySubtopicProgress();
}

export function deriveStatusFromRating(
  opened: boolean,
  rating: LikertRating | null
): MasteryStatus {
  if (rating === null) {
    return opened ? 'opened_unrated' : 'unread';
  }
  if (rating <= 2) {
    return 'needs_reread';
  }
  if (rating === 3) {
    return 'needs_practice';
  }
  return 'mastered';
}

export function deriveMasteryStatus(progress: SubtopicProgress): MasteryStatus {
  return deriveStatusFromRating(progress.opened, progress.rating);
}

export function derivePartStatus(
  progress: SubtopicProgress,
  partNum: PartNumber
): MasteryStatus {
  const partRating = progress.partRatings?.[partNum] ?? null;
  if (partRating !== null) {
    return deriveStatusFromRating(true, partRating);
  }
  const wasOpened = progress.openedParts.includes(partNum);
  return deriveStatusFromRating(wasOpened, null);
}

export function countRatedParts(progress: SubtopicProgress): number {
  return Object.values(progress.partRatings ?? {}).filter(
    (v): v is LikertRating => v !== null
  ).length;
}

export function markSubtopicOpened(
  map: StudyProgressMap,
  subtopicId: string,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  if (prev.opened) {
    return map;
  }
  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: true,
      updatedAt: timestamp,
    },
  };
}

export function toggleSubtopicPart(
  map: StudyProgressMap,
  subtopicId: string,
  partNumber: number,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  const exists = prev.openedParts.includes(partNumber);
  const openedParts = exists
    ? prev.openedParts.filter((p) => p !== partNumber)
    : [...prev.openedParts, partNumber].sort((a, b) => a - b);

  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: true,
      openedParts,
      updatedAt: timestamp,
    },
  };
}

export function setSubtopicAllParts(
  map: StudyProgressMap,
  subtopicId: string,
  expandAll: boolean,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: true,
      openedParts: expandAll ? [1, 2, 3, 4, 5, 6] : [],
      updatedAt: timestamp,
    },
  };
}

export function rateSubtopicLikert(
  map: StudyProgressMap,
  subtopicId: string,
  rating: LikertRating | null,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: rating !== null ? true : prev.opened,
      rating,
      updatedAt: timestamp,
    },
  };
}

export function ratePartLikert(
  map: StudyProgressMap,
  subtopicId: string,
  partNumber: PartNumber,
  rating: LikertRating | null,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  const nextPartRatings = {
    ...(prev.partRatings ?? {}),
    [partNumber]: rating,
  };
  const nextOpenedParts =
    rating !== null && !prev.openedParts.includes(partNumber)
      ? [...prev.openedParts, partNumber].sort((a, b) => a - b)
      : prev.openedParts;

  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: rating !== null ? true : prev.opened,
      openedParts: nextOpenedParts,
      partRatings: nextPartRatings,
      updatedAt: timestamp,
    },
  };
}

/**
 * When a student honestly declares "I didn't read it for real, I was just visiting"
 * on a Part page: clears that Part's rating and opened marker, and if the Subtopic
 * has no other rated parts and no explicit subtopic rating, resets the Subtopic
 * back to `unread` (0/unread).
 */
export function markPartJustVisiting(
  map: StudyProgressMap,
  subtopicId: string,
  partNumber: PartNumber,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  const prev = getSubtopicProgress(map, subtopicId);
  const nextPartRatings = { ...(prev.partRatings ?? {}) };
  delete nextPartRatings[partNumber];

  const nextOpenedParts = prev.openedParts.filter((p) => p !== partNumber);
  const hasAnyOtherRatedPart = Object.values(nextPartRatings).some(
    (v) => v !== null
  );
  const keepOpened = prev.rating !== null || hasAnyOtherRatedPart || nextOpenedParts.length > 0;

  return {
    ...map,
    [subtopicId]: {
      ...prev,
      opened: keepOpened,
      openedParts: nextOpenedParts,
      partRatings: nextPartRatings,
      updatedAt: timestamp,
    },
  };
}

/**
 * When a student honestly declares "I didn't read it for real, I was just visiting"
 * before leaving a Subtopic SPA page: resets it cleanly to `unread` (0/unread).
 */
export function markSubtopicJustVisiting(
  map: StudyProgressMap,
  subtopicId: string,
  timestamp: string = new Date().toISOString()
): StudyProgressMap {
  return {
    ...map,
    [subtopicId]: {
      opened: false,
      rating: null,
      openedParts: [],
      partRatings: {},
      updatedAt: timestamp,
    },
  };
}

export interface ProgressStats {
  total: number;
  unread: number;
  openedUnrated: number;
  needsReread: number;
  needsPractice: number;
  mastered: number;
  ratedCount: number;
  readOrActiveCount: number;
  completionPercent: number;
  averageLikert: number | null;
}

export function computeProgressStats(
  subtopics: Pick<SubtopicContent, 'id'>[],
  map: StudyProgressMap
): ProgressStats {
  let unread = 0;
  let openedUnrated = 0;
  let needsReread = 0;
  let needsPractice = 0;
  let mastered = 0;
  let ratingSum = 0;
  let ratedCount = 0;

  for (const subtopic of subtopics) {
    const progress = getSubtopicProgress(map, subtopic.id);
    const status = deriveMasteryStatus(progress);
    if (status === 'unread') unread++;
    else if (status === 'opened_unrated') openedUnrated++;
    else if (status === 'needs_reread') needsReread++;
    else if (status === 'needs_practice') needsPractice++;
    else if (status === 'mastered') mastered++;

    if (progress.rating !== null) {
      ratingSum += progress.rating;
      ratedCount++;
    }
  }

  const total = subtopics.length;
  const readOrActiveCount = total - unread;
  const completionPercent = total === 0 ? 0 : Math.round((mastered / total) * 100);
  const averageLikert =
    ratedCount === 0 ? null : Number((ratingSum / ratedCount).toFixed(1));

  return {
    total,
    unread,
    openedUnrated,
    needsReread,
    needsPractice,
    mastered,
    ratedCount,
    readOrActiveCount,
    completionPercent,
    averageLikert,
  };
}

export const PART_MASTERY_WEIGHTS: Record<PartNumber, number> = {
  1: 0.85,
  2: 1.5,
  3: 1.75,
  4: 1.4,
  5: 1.25,
  6: 1.85,
};

export function likertToScore(
  rating: LikertRating | null,
  opened: boolean
): number {
  if (rating === null) {
    return opened ? 0.06 : 0;
  }
  switch (rating) {
    case 1:
      return 0.2;
    case 2:
      return 0.4;
    case 3:
      return 0.64;
    case 4:
      return 0.86;
    case 5:
      return 1.0;
  }
}

export interface SubjectMasteryMetrics {
  fraction: number;
  exactPercent: number;
  formattedPercent: string;
  earnedWeight: number;
  totalWeight: number;
}

/**
 * Computes high-precision SPM mastery across ALL Form 4 + Form 5 chapters,
 * subtopics, and Part 1-6 subsets for a SINGLE subject only.
 * Respects Likert 1-5 ratings, opened/unrated (0.06), and explicit 0/null unread (0).
 */
export function computeSubjectMasteryProgress(
  subjectChapters: ChapterContent[],
  map: StudyProgressMap
): SubjectMasteryMetrics {
  let earnedWeight = 0;
  let totalWeight = 0;

  for (const chapter of subjectChapters) {
    for (const subtopic of chapter.subtopics) {
      const validParts: PartNumber[] = subtopic.part5DecisionTable
        ? [1, 2, 3, 4, 5, 6]
        : [1, 2, 3, 4, 6];

      const prog = getSubtopicProgress(map, subtopic.id);

      let partWeightTotal = 0;
      let partWeightedEarned = 0;
      let hasAnyPartActivity = false;

      for (const pNum of validParts) {
        const w = PART_MASTERY_WEIGHTS[pNum];
        const pRating = prog.partRatings?.[pNum] ?? null;
        const pOpened = prog.openedParts.includes(pNum) || pRating !== null;
        if (pOpened || pRating !== null) {
          hasAnyPartActivity = true;
        }
        partWeightTotal += w;
        partWeightedEarned += w * likertToScore(pRating, pOpened);
      }

      const depthBonus =
        Math.min(subtopic.part3Mechanics.experiments.length * 0.4, 0.8) +
        Math.min(subtopic.part4WorkedExamples.length * 0.25, 0.5) +
        1.5;

      const subtopicWeight = partWeightTotal + depthBonus;
      totalWeight += subtopicWeight;

      const isCompletelyUnread =
        !prog.opened && prog.rating === null && !hasAnyPartActivity;
      if (isCompletelyUnread) {
        continue;
      }

      const partRatio =
        partWeightTotal > 0 ? partWeightedEarned / partWeightTotal : 0;
      const overallScore = likertToScore(prog.rating, prog.opened);

      const compositeScore = Math.max(
        0,
        Math.min(1, 0.68 * partRatio + 0.32 * overallScore)
      );

      earnedWeight += subtopicWeight * compositeScore;
    }
  }

  const fraction =
    totalWeight > 0 ? Math.max(0, Math.min(1, earnedWeight / totalWeight)) : 0;
  const exactPercent = fraction * 100;
  const formattedPercent =
    exactPercent >= 99.995 ? '100%' : `${exactPercent.toFixed(2)}%`;

  return {
    fraction,
    exactPercent,
    formattedPercent,
    earnedWeight,
    totalWeight,
  };
}

export type StatusFilter = 'all' | MasteryStatus | 'review_priority';

export function filterSubtopics(
  chapters: ChapterContent[],
  map: StudyProgressMap,
  options: {
    chapterId?: string | 'all';
    statusFilter?: StatusFilter;
    query?: string;
  }
): { chapter: ChapterContent; subtopics: SubtopicContent[] }[] {
  const { chapterId = 'all', statusFilter = 'all', query = '' } = options;
  const normalizedQuery = query.trim().toLowerCase();

  return chapters
    .filter((ch) => chapterId === 'all' || ch.id === chapterId)
    .map((ch) => {
      const matched = ch.subtopics.filter((sub) => {
        const progress = getSubtopicProgress(map, sub.id);
        const status = deriveMasteryStatus(progress);

        const passesStatus =
          statusFilter === 'all'
            ? true
            : statusFilter === 'review_priority'
              ? status === 'needs_reread' || status === 'needs_practice' || status === 'opened_unrated'
              : status === statusFilter;

        if (!passesStatus) return false;
        if (!normalizedQuery) return true;

        const haystack = `${sub.code} ${sub.title} ${ch.title} ${sub.part1Anchor.phenomenon}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      });

      return { chapter: ch, subtopics: matched };
    })
    .filter((entry) => entry.subtopics.length > 0);
}

export function routeToHash(route: AppRoute): string {
  switch (route.view) {
    case 'dashboard':
      return route.subject === 'kimia' ? '#/kimia' : '#/';
    case 'review':
      return route.subject === 'kimia' ? '#/kimia/ulang-kaji' : '#/ulang-kaji';
    case 'formulas':
      return route.subject === 'kimia' ? '#/kimia/rumus' : '#/rumus';
    case 'chapter':
      return `#/bab/${route.chapterId}`;
    case 'subtopic':
      return `#/bab/${route.chapterId}/${route.subtopicId}`;
    case 'part':
      return `#/bab/${route.chapterId}/${route.subtopicId}/bahagian/${route.partNum}`;
  }
}

export function resolveSubjectFromRoute(
  route: AppRoute,
  chapters: ChapterContent[]
): SubjectId | null {
  if (
    route.view === 'dashboard' ||
    route.view === 'review' ||
    route.view === 'formulas'
  ) {
    return route.subject ?? null;
  }
  const ch = chapters.find((c) => c.id === route.chapterId);
  return ch?.subject ?? (route.chapterId.startsWith('k4-') || route.chapterId.startsWith('k5-') ? 'kimia' : 'fizik');
}

export function parseHashToRoute(
  hash: string,
  chapters: ChapterContent[]
): AppRoute {
  const cleaned = hash.replace(/^#/, '').replace(/\/+$/, '') || '/';
  if (cleaned === '/' || cleaned === '') return { view: 'dashboard' };
  if (cleaned === '/ulang-kaji') return { view: 'review' };
  if (cleaned === '/rumus') return { view: 'formulas' };
  if (cleaned === '/kimia') return { view: 'dashboard', subject: 'kimia' };
  if (cleaned === '/kimia/ulang-kaji') return { view: 'review', subject: 'kimia' };
  if (cleaned === '/kimia/rumus') return { view: 'formulas', subject: 'kimia' };

  const parts = cleaned.split('/').filter(Boolean);
  if (parts[0] === 'bab' && parts[1]) {
    const ch = chapters.find((c) => c.id === parts[1]);
    if (!ch) return { view: 'dashboard' };

    if (!parts[2]) {
      return { view: 'chapter', chapterId: ch.id };
    }

    const sub = ch.subtopics.find((s) => s.id === parts[2]);
    if (!sub) return { view: 'chapter', chapterId: ch.id };

    if (parts[3] === 'bahagian' && parts[4]) {
      const pNum = Number(parts[4]);
      if ([1, 2, 3, 4, 5, 6].includes(pNum)) {
        if (pNum === 5 && !sub.part5DecisionTable) {
          return { view: 'subtopic', chapterId: ch.id, subtopicId: sub.id };
        }
        return {
          view: 'part',
          chapterId: ch.id,
          subtopicId: sub.id,
          partNum: pNum as PartNumber,
        };
      }
    }
    return { view: 'subtopic', chapterId: ch.id, subtopicId: sub.id };
  }

  return { view: 'dashboard' };
}

export function serializeProgressMap(map: StudyProgressMap): string {
  return JSON.stringify(map);
}

export function parseProgressMap(raw: string | null): StudyProgressMap {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }
    const clean: StudyProgressMap = {};
    for (const [key, val] of Object.entries(parsed)) {
      if (!val || typeof val !== 'object') continue;
      const obj = val as Record<string, unknown>;
      const rating =
        typeof obj.rating === 'number' && [1, 2, 3, 4, 5].includes(obj.rating)
          ? (obj.rating as LikertRating)
          : null;
      const openedParts = Array.isArray(obj.openedParts)
        ? obj.openedParts.filter((n): n is number => typeof n === 'number' && n >= 1 && n <= 6)
        : [];
      const partRatings: Record<number, LikertRating | null> = {};
      if (obj.partRatings && typeof obj.partRatings === 'object' && !Array.isArray(obj.partRatings)) {
        for (const [pKey, pVal] of Object.entries(obj.partRatings as Record<string, unknown>)) {
          const pNum = Number(pKey);
          if ([1, 2, 3, 4, 5, 6].includes(pNum)) {
            if (typeof pVal === 'number' && [1, 2, 3, 4, 5].includes(pVal)) {
              partRatings[pNum] = pVal as LikertRating;
            } else if (pVal === null) {
              partRatings[pNum] = null;
            }
          }
        }
      }
      clean[key] = {
        opened: Boolean(obj.opened),
        rating,
        openedParts,
        partRatings,
        updatedAt: typeof obj.updatedAt === 'string' ? obj.updatedAt : null,
      };
    }
    return clean;
  } catch {
    return {};
  }
}
