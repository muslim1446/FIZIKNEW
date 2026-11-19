import assert from 'node:assert/strict';
import test from 'node:test';
import { FIZIK_CHAPTERS, KIMIA_CHAPTERS } from '../data/index.ts';
import type { StudyProgressMap } from '../types/textbook.ts';
import {
  computeSpmConfidence,
  formatConfidencePercent,
} from './spmConfidence.ts';
import {
  markSubtopicOpened,
  ratePartLikert,
  rateSubtopicLikert,
} from './studyProgress.ts';

test('SPM confidence starts at 0.0% and isolates Fizik vs Kimia strictly', () => {
  const emptyMap: StudyProgressMap = {};
  const fizikZero = computeSpmConfidence(FIZIK_CHAPTERS, emptyMap, 'Fizik');
  const kimiaZero = computeSpmConfidence(KIMIA_CHAPTERS, emptyMap, 'Kimia');

  assert.equal(fizikZero.ratio, 0);
  assert.equal(fizikZero.percentLabel, '0.0%');
  assert.equal(kimiaZero.ratio, 0);
  assert.equal(kimiaZero.percentLabel, '0.0%');

  // Completing Kimia topics must NEVER affect Fizik SPM confidence
  let kimiaOnlyMap: StudyProgressMap = {};
  for (const ch of KIMIA_CHAPTERS) {
    for (const sub of ch.subtopics) {
      kimiaOnlyMap = rateSubtopicLikert(kimiaOnlyMap, sub.id, 5);
    }
  }
  const fizikUntouched = computeSpmConfidence(FIZIK_CHAPTERS, kimiaOnlyMap, 'Fizik');
  const kimiaUpdated = computeSpmConfidence(KIMIA_CHAPTERS, kimiaOnlyMap, 'Kimia');

  assert.equal(fizikUntouched.ratio, 0);
  assert.equal(fizikUntouched.percentLabel, '0.0%');
  assert.ok(kimiaUpdated.percentValue > 75);
});

test('SPM confidence increments sub-pixel smoothly on even a single Part and monotonically across Likert 1..5', () => {
  let map: StudyProgressMap = {};
  const firstSub = FIZIK_CHAPTERS[0].subtopics[0];

  map = markSubtopicOpened(map, firstSub.id);
  const afterOpen = computeSpmConfidence(FIZIK_CHAPTERS, map, 'Fizik');
  assert.ok(afterOpen.ratio > 0, 'Opening should give tiny non-zero micro signal');
  assert.equal(afterOpen.percentLabel, '0.1%');

  // Rating Part 2 (verbatim keywords) strictly increases confidence
  map = ratePartLikert(map, firstSub.id, 2, 4);
  const afterPart2 = computeSpmConfidence(FIZIK_CHAPTERS, map, 'Fizik');
  assert.ok(afterPart2.ratio > afterOpen.ratio);

  // Monotonic across Likert 1 -> 2 -> 3 -> 4 -> 5 on overall + Part 6
  const ratings = [1, 2, 3, 4, 5] as const;
  let prev = 0;
  for (const r of ratings) {
    let testMap: StudyProgressMap = {};
    testMap = ratePartLikert(testMap, firstSub.id, 6, r);
    testMap = rateSubtopicLikert(testMap, firstSub.id, r);
    const res = computeSpmConfidence(FIZIK_CHAPTERS, testMap, 'Fizik');
    assert.ok(res.ratio > prev, `Rating ${r} (${res.ratio}) should beat previous (${prev})`);
    prev = res.ratio;
  }
});

test('SPM confidence enforces anti-illusion damping and Form 4 + Form 5 balance across full SPM syllabus', () => {
  // 1. Subtopic rated 5 WITHOUT verifying any parts vs ALL parts rated 5
  let surfaceMap: StudyProgressMap = {};
  let verifiedMap: StudyProgressMap = {};
  for (const ch of FIZIK_CHAPTERS) {
    for (const sub of ch.subtopics) {
      surfaceMap = rateSubtopicLikert(surfaceMap, sub.id, 5);
      verifiedMap = rateSubtopicLikert(verifiedMap, sub.id, 5);
      const parts = sub.part5DecisionTable ? [1, 2, 3, 4, 5, 6] as const : [1, 2, 3, 4, 6] as const;
      for (const p of parts) {
        verifiedMap = ratePartLikert(verifiedMap, sub.id, p, 5);
      }
    }
  }

  const surfaceConf = computeSpmConfidence(FIZIK_CHAPTERS, surfaceMap, 'Fizik');
  const verifiedConf = computeSpmConfidence(FIZIK_CHAPTERS, verifiedMap, 'Fizik');

  assert.ok(surfaceConf.percentValue < 90, 'Unverified Likert-5 should be damped below 90%');
  assert.equal(verifiedConf.percentLabel, '100%');
  assert.equal(verifiedConf.readinessTier, 'ready');

  // 2. Form 4 100% mastered + Form 5 0% untouched should be penalized below 45% (not naive 50%)
  let f4OnlyMap: StudyProgressMap = {};
  for (const ch of KIMIA_CHAPTERS.filter((c) => c.formLevel === 4)) {
    for (const sub of ch.subtopics) {
      f4OnlyMap = rateSubtopicLikert(f4OnlyMap, sub.id, 5);
      const parts = sub.part5DecisionTable ? [1, 2, 3, 4, 5, 6] as const : [1, 2, 3, 4, 6] as const;
      for (const p of parts) {
        f4OnlyMap = ratePartLikert(f4OnlyMap, sub.id, p, 5);
      }
    }
  }
  const f4OnlyConf = computeSpmConfidence(KIMIA_CHAPTERS, f4OnlyMap, 'Kimia');
  assert.equal(f4OnlyConf.form4Percent, 100);
  assert.equal(f4OnlyConf.form5Percent, 0);
  assert.ok(f4OnlyConf.percentValue < 58, `Expected Form-balance drag on F4-only, got ${f4OnlyConf.percentValue}`);
});

test('formatConfidencePercent outputs strictly percentage strings', () => {
  assert.equal(formatConfidencePercent(0), '0.0%');
  assert.equal(formatConfidencePercent(0.0002), '0.1%');
  assert.equal(formatConfidencePercent(0.4284), '42.8%');
  assert.equal(formatConfidencePercent(1), '100%');
});
