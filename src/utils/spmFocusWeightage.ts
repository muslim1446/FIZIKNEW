import type { ChapterContent, StudyProgressMap } from '../types/textbook';
import { computeSubtopicStructuralWeight } from './spmConfidence';
import { computeProgressStats } from './studyProgress';

export interface ChapterWeightageInfo {
  chapter: ChapterContent;
  rawScore: number;
  weightagePercent: number;
  rank: number;
  isHighWeightage: boolean;
  focusTag: string;
  keyElementsSummary: string;
  stats: ReturnType<typeof computeProgressStats>;
}

/**
 * Calibration multipliers anchored to Malaysian KSSM SPM Paper 1, Paper 2 (Section A/B/C),
 * and Paper 3 (Amali) topic weightage frequency across Tingkatan 4 & Tingkatan 5.
 */
const SPM_EXAM_MULTIPLIER: Record<string, { multiplier: number; focusTag: string }> = {
  // Fizik KSSM
  'bab-1': { multiplier: 0.72, focusTag: 'Graf & Unit' },
  'bab-2': { multiplier: 1.48, focusTag: 'Kerap Keluar Kertas 1 & 2' },
  'bab-3': { multiplier: 0.96, focusTag: 'Hukum Kepler & Graviti' },
  'bab-4': { multiplier: 1.24, focusTag: 'Kertas 2 & Amali' },
  'bab-5': { multiplier: 1.38, focusTag: 'Kertas 2 · Gelombang' },
  'bab-6': { multiplier: 1.42, focusTag: 'Lukis Sinar & Kanta' },
  't5-bab-1': { multiplier: 1.22, focusTag: 'Leraian & Paduan Daya' },
  't5-bab-2': { multiplier: 1.44, focusTag: 'Kertas 2 · Tekanan Bendalir' },
  't5-bab-3': { multiplier: 1.36, focusTag: 'Pengiraan Litar & Amali' },
  't5-bab-4': { multiplier: 1.34, focusTag: 'Motor, Penjana & Transformer' },
  't5-bab-5': { multiplier: 1.08, focusTag: 'Diod & Transistor' },
  't5-bab-6': { multiplier: 0.94, focusTag: 'Separuh Hayat & Nuklear' },
  't5-bab-7': { multiplier: 0.98, focusTag: 'Fotoelektrik & Kuantum' },

  // Kimia KSSM
  'k4-bab-1': { multiplier: 0.55, focusTag: 'Keselamatan Makmal' },
  'k4-bab-2': { multiplier: 0.9, focusTag: 'Lengkung Pemanasan & Isotop' },
  'k4-bab-3': { multiplier: 1.85, focusTag: 'Asas Mol & Formula' },
  'k4-bab-4': { multiplier: 1.02, focusTag: 'Jadual Berkala Unsur' },
  'k4-bab-5': { multiplier: 1.04, focusTag: 'Ikatan Ion & Kovalen' },
  'k4-bab-6': { multiplier: 1.65, focusTag: 'Sangat Penting · Garam & Titrasi' },
  'k4-bab-7': { multiplier: 1.72, focusTag: 'Kertas 2 & Amali Kadar' },
  'k4-bab-8': { multiplier: 0.78, focusTag: 'Aloi, Kaca & Komposit' },
  'k5-bab-1': { multiplier: 1.75, focusTag: 'Sangat Penting · Redoks & E⁰' },
  'k5-bab-2': { multiplier: 1.88, focusTag: 'Soalan Esei · Siri Homolog' },
  'k5-bab-3': { multiplier: 1.55, focusTag: 'Pengiraan Haba Tindak Balas' },
  'k5-bab-4': { multiplier: 0.86, focusTag: 'Polimer & Getah' },
  'k5-bab-5': { multiplier: 0.92, focusTag: 'Sabun, Bahan Tambah & Teknologi Hijau' },
};

const QUICK_FOCUS_CHAPTER_COUNT = 5;

export function rankSpmChaptersByWeightage(
  chapters: ChapterContent[],
  progressMap: StudyProgressMap
): ChapterWeightageInfo[] {
  if (chapters.length === 0) return [];

  const preliminary = chapters.map((chapter) => {
    const profile = SPM_EXAM_MULTIPLIER[chapter.id] ?? {
      multiplier: 1.0,
      focusTag: 'Bab Penting',
    };

    let structuralSum = 0;
    let workedCount = 0;
    let expCount = 0;
    let decisionCount = 0;

    for (const sub of chapter.subtopics) {
      structuralSum += computeSubtopicStructuralWeight(sub);
      workedCount += sub.part4WorkedExamples.length;
      expCount += sub.part3Mechanics.experiments.length;
      if (sub.part5DecisionTable) {
        decisionCount += 1;
      }
    }

    const rawScore = structuralSum * profile.multiplier;
    const stats = computeProgressStats(chapter.subtopics, progressMap);

    const parts: string[] = [`${chapter.subtopics.length} topik`];
    if (workedCount > 0) parts.push(`${workedCount} contoh`);
    if (expCount > 0) parts.push(`${expCount} eksperimen`);
    if (decisionCount > 0) parts.push(`${decisionCount} jadual`);

    return {
      chapter,
      rawScore,
      focusTag: profile.focusTag,
      keyElementsSummary: parts.join(' · '),
      stats,
    };
  });

  const totalRaw = preliminary.reduce((sum, item) => sum + item.rawScore, 0);

  const sorted = [...preliminary].sort((a, b) => {
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    return a.chapter.number - b.chapter.number;
  });

  const topCount = Math.min(QUICK_FOCUS_CHAPTER_COUNT, sorted.length);
  const selectedIds = new Set(sorted.slice(0, topCount).map((x) => x.chapter.id));

  return sorted.map((item, idx) => ({
    chapter: item.chapter,
    rawScore: Number(item.rawScore.toFixed(2)),
    weightagePercent:
      totalRaw > 0 ? Math.round((item.rawScore / totalRaw) * 100) : 0,
    rank: idx + 1,
    isHighWeightage: selectedIds.has(item.chapter.id),
    focusTag: item.focusTag,
    keyElementsSummary: item.keyElementsSummary,
    stats: item.stats,
  }));
}

export function getQuickFocusChapters(
  ranked: ChapterWeightageInfo[],
  formFilter: 'all' | 4 | 5 = 'all'
): ChapterWeightageInfo[] {
  return ranked.filter(
    (entry) =>
      entry.isHighWeightage &&
      (formFilter === 'all' || entry.chapter.formLevel === formFilter)
  );
}
