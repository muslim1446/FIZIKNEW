import assert from 'node:assert/strict';
import test from 'node:test';
import { FIZIK_CHAPTERS, KIMIA_CHAPTERS } from '../data';
import {
  getQuickFocusChapters,
  rankSpmChaptersByWeightage,
} from './spmFocusWeightage';

test('rankSpmChaptersByWeightage isolates Fizik vs Kimia and highlights highest-weightage chapters across T4 & T5', () => {
  const fizikRanked = rankSpmChaptersByWeightage(FIZIK_CHAPTERS, {});
  const kimiaRanked = rankSpmChaptersByWeightage(KIMIA_CHAPTERS, {});

  assert.equal(fizikRanked.length, 13);
  assert.equal(kimiaRanked.length, 13);

  const fizikFocus = getQuickFocusChapters(fizikRanked, 'all');
  const kimiaFocus = getQuickFocusChapters(kimiaRanked, 'all');

  assert.equal(fizikFocus.length, 5);
  assert.equal(kimiaFocus.length, 5);

  // Fizik focus must contain only Fizik chapters and include top T4 + T5 high-yield topics ranked #1..#5
  assert.ok(fizikFocus.every((c) => c.chapter.subject === 'fizik'));
  assert.deepEqual(fizikFocus.map((c) => c.rank), [1, 2, 3, 4, 5]);
  assert.ok(fizikFocus.some((c) => c.chapter.formLevel === 4));
  assert.ok(fizikFocus.some((c) => c.chapter.formLevel === 5));
  assert.ok(fizikFocus.some((c) => c.chapter.id === 'bab-2'));
  assert.ok(fizikFocus.some((c) => c.chapter.id === 't5-bab-2'));

  // Kimia focus must contain only Kimia chapters and include top T4 + T5 high-yield topics ranked #1..#5
  assert.ok(kimiaFocus.every((c) => c.chapter.subject === 'kimia'));
  assert.deepEqual(kimiaFocus.map((c) => c.rank), [1, 2, 3, 4, 5]);
  assert.ok(kimiaFocus.some((c) => c.chapter.formLevel === 4));
  assert.ok(kimiaFocus.some((c) => c.chapter.formLevel === 5));
  assert.equal(kimiaFocus[0].chapter.id, 'k4-bab-6');
  assert.ok(kimiaFocus.some((c) => c.chapter.id === 'k5-bab-1'));
  assert.ok(kimiaFocus.some((c) => c.chapter.id === 'k5-bab-2'));
  assert.ok(kimiaFocus.some((c) => c.chapter.id === 'k4-bab-3'));
});

test('getQuickFocusChapters respects T4 / T5 form filters and produces positive weightage percentages', () => {
  const kimiaRanked = rankSpmChaptersByWeightage(KIMIA_CHAPTERS, {});
  const totalPct = kimiaRanked.reduce((sum, c) => sum + c.weightagePercent, 0);
  assert.ok(totalPct >= 95 && totalPct <= 105);

  const t4Focus = getQuickFocusChapters(kimiaRanked, 4);
  const t5Focus = getQuickFocusChapters(kimiaRanked, 5);

  assert.ok(t4Focus.length >= 2);
  assert.ok(t5Focus.length >= 2);
  assert.ok(t4Focus.every((c) => c.chapter.formLevel === 4));
  assert.ok(t5Focus.every((c) => c.chapter.formLevel === 5));
});
