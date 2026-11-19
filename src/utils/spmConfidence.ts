import type {
  ChapterContent,
  LikertRating,
  PartNumber,
  StudyProgressMap,
  SubtopicContent,
  SubtopicProgress,
} from '../types/textbook';
import { createEmptySubtopicProgress } from './studyProgress';

const PART_WEIGHTS: Record<PartNumber, number> = {
  1: 0.1,
  2: 0.24,
  3: 0.24,
  4: 0.16,
  5: 0.14,
  6: 0.26,
};

const LIKERT_EVIDENCE: Record<LikertRating, number> = {
  1: 0.08,
  2: 0.22,
  3: 0.5,
  4: 0.81,
  5: 1.0,
};

export interface SpmConfidenceBreakdown {
  ratio: number; // 0..1 high-precision continuous confidence
  percentValue: number; // 0..100 floating point
  percentLabel: string; // Strictly e.g. "0.0%", "42.8%", "100%"
  form4Percent: number;
  form5Percent: number;
  activeRecallCoveragePercent: number;
  weakBottlenecks: number;
  verdictTitle: string;
  verdictDetail: string;
  readinessTier: 'early' | 'building' | 'almost' | 'ready';
}

function mapRatingEvidence(opened: boolean, rating: LikertRating | null): number {
  if (rating !== null) return LIKERT_EVIDENCE[rating];
  return opened ? 0.04 : 0;
}

export function computeSubtopicStructuralWeight(sub: SubtopicContent): number {
  const hasPart5 = sub.part5DecisionTable ? 0.15 : 0;
  const expWeight = 0.08 * Math.min(2, sub.part3Mechanics.experiments.length);
  const diagWeight = 0.05 * Math.min(2, sub.part3Mechanics.diagrams.length);
  const exWeight = 0.04 * Math.min(3, sub.part4WorkedExamples.length);
  return 1 + hasPart5 + expWeight + diagWeight + exWeight;
}

export function computeSubtopicEvidence(
  sub: SubtopicContent,
  progress: SubtopicProgress
): {
  evidence: number;
  isWeakBottleneck: boolean;
  part6Mastered: boolean;
} {
  const activeParts: PartNumber[] = sub.part5DecisionTable
    ? [1, 2, 3, 4, 5, 6]
    : [1, 2, 3, 4, 6];

  let partWeightSum = 0;
  let partWeightedScore = 0;
  let ratedPartsCount = 0;
  let partRatingSum = 0;

  for (const pNum of activeParts) {
    const w = PART_WEIGHTS[pNum];
    partWeightSum += w;
    const pRating = progress.partRatings?.[pNum] ?? null;
    const pOpened = progress.openedParts.includes(pNum);
    if (pRating !== null) {
      ratedPartsCount++;
      partRatingSum += pRating;
    }
    partWeightedScore += w * mapRatingEvidence(pOpened, pRating);
  }

  const partEvidence = partWeightSum > 0 ? partWeightedScore / partWeightSum : 0;
  const overallEvidence = mapRatingEvidence(progress.opened, progress.rating);

  const part2Rating = progress.partRatings?.[2] ?? null;
  const part6Rating = progress.partRatings?.[6] ?? null;
  const part6Mastered =
    (part6Rating !== null && part6Rating >= 3) ||
    (ratedPartsCount === 0 && progress.rating !== null && progress.rating >= 4);

  let combined = 0;

  if (ratedPartsCount > 0 && progress.rating !== null) {
    combined = 0.56 * partEvidence + 0.44 * overallEvidence;
    // Anti-illusion dampener: claiming 4-5 overall while ignoring/failing Part 2 or Part 6
    if (progress.rating >= 4) {
      if ((part2Rating !== null && part2Rating <= 2) || (part6Rating !== null && part6Rating <= 2)) {
        combined *= 0.72;
      } else if (part2Rating === null || part6Rating === null) {
        combined *= 0.88;
      }
    }
  } else if (progress.rating !== null) {
    // Rated overall only without verifying parts individually -> conservative discount
    const discount = progress.rating >= 4 ? 0.86 : 0.92;
    combined = overallEvidence * discount;
  } else if (ratedPartsCount > 0) {
    // Rated individual parts even before subtopic summary rating -> direct high-resolution feedback
    combined = partEvidence;
  } else if (progress.opened) {
    const openedFrac =
      activeParts.length > 0 ? Math.min(1, progress.openedParts.length / activeParts.length) : 0;
    combined = 0.02 + 0.02 * openedFrac;
  }

  const meanPartRating = ratedPartsCount > 0 ? partRatingSum / ratedPartsCount : null;
  const isWeakBottleneck =
    (progress.rating !== null && progress.rating <= 2) ||
    (meanPartRating !== null && meanPartRating <= 2.1);

  return {
    evidence: Math.max(0, Math.min(1, combined)),
    isWeakBottleneck,
    part6Mastered,
  };
}

export function formatConfidencePercent(ratio: number): string {
  const clamped = Math.max(0, Math.min(1, ratio));
  if (clamped === 0) return '0.0%';
  const rawPct = clamped * 100;
  if (rawPct < 0.1) return '0.1%';
  if (rawPct >= 99.95) return '100%';
  return `${rawPct.toFixed(1)}%`;
}

export function computeSpmConfidence(
  chapters: ChapterContent[],
  progressMap: StudyProgressMap,
  subjectLabel: string = 'subjek ini'
): SpmConfidenceBreakdown {
  let totalWeight = 0;
  let totalEvidence = 0;
  let f4Weight = 0;
  let f4Evidence = 0;
  let f5Weight = 0;
  let f5Evidence = 0;
  let weakWeight = 0;
  let weakBottlenecks = 0;
  let part6MasteredWeight = 0;

  for (const chapter of chapters) {
    for (const sub of chapter.subtopics) {
      const progress = progressMap[sub.id] ?? createEmptySubtopicProgress();
      const w = computeSubtopicStructuralWeight(sub);
      const { evidence, isWeakBottleneck, part6Mastered } = computeSubtopicEvidence(
        sub,
        progress
      );

      totalWeight += w;
      totalEvidence += w * evidence;

      if (chapter.formLevel === 4) {
        f4Weight += w;
        f4Evidence += w * evidence;
      } else {
        f5Weight += w;
        f5Evidence += w * evidence;
      }

      if (isWeakBottleneck) {
        weakWeight += w;
        weakBottlenecks++;
      }

      if (part6Mastered) {
        part6MasteredWeight += w;
      }
    }
  }

  const rawRatio = totalWeight > 0 ? totalEvidence / totalWeight : 0;
  const f4Ratio = f4Weight > 0 ? f4Evidence / f4Weight : 0;
  const f5Ratio = f5Weight > 0 ? f5Evidence / f5Weight : 0;
  const part6Coverage = totalWeight > 0 ? part6MasteredWeight / totalWeight : 0;
  const weakRatio = totalWeight > 0 ? weakWeight / totalWeight : 0;

  // Cross-form SPM balance penalty: mastering only Form 4 or only Form 5 limits SPM readiness
  const balanceFactor = rawRatio > 0 ? 1 - 0.16 * Math.abs(f4Ratio - f5Ratio) : 1;
  const weakMultiplier = 1 - 0.14 * weakRatio;
  const recallSynergy = 1 + 0.02 * part6Coverage;

  const calibratedRatio = Math.max(
    0,
    Math.min(1, rawRatio * balanceFactor * weakMultiplier * recallSynergy)
  );
  const percentValue = calibratedRatio * 100;
  const percentLabel = formatConfidencePercent(calibratedRatio);

  let readinessTier: SpmConfidenceBreakdown['readinessTier'] = 'early';
  let verdictTitle = 'Belum cukup bersedia untuk SPM';
  let verdictDetail = `Baru bermula untuk ${subjectLabel}. Teruskan membaca topik penting.`;

  if (percentValue >= 85) {
    readinessTier = 'ready';
    verdictTitle = `Sangat yakin untuk ${subjectLabel} SPM`;
    verdictDetail =
      'Penguasaan seimbang untuk Tingkatan 4 dan Tingkatan 5.';
  } else if (percentValue >= 60) {
    readinessTier = 'almost';
    verdictTitle = `Hampir sedia untuk ${subjectLabel} SPM`;
    verdictDetail =
      'Asas Tingkatan 4 dan 5 sudah kukuh. Lengkapkan baki topik yang masih lemah.';
  } else if (percentValue >= 30) {
    readinessTier = 'building';
    verdictTitle = `Sedang membina kefahaman ${subjectLabel}`;
    verdictDetail =
      'Seimbangkan ulang kaji antara Tingkatan 4 dan Tingkatan 5.';
  }

  return {
    ratio: calibratedRatio,
    percentValue,
    percentLabel,
    form4Percent: Math.round(f4Ratio * 100),
    form5Percent: Math.round(f5Ratio * 100),
    activeRecallCoveragePercent: Math.round(part6Coverage * 100),
    weakBottlenecks,
    verdictTitle,
    verdictDetail,
    readinessTier,
  };
}
