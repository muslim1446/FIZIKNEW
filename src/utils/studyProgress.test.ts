import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ALL_SUBTOPICS,
  FIZIK_CHAPTERS,
  KIMIA_CHAPTERS,
  TEXTBOOK_CHAPTERS,
  getSubtopicsBySubject,
} from '../data/index.ts';
import type { StudyProgressMap } from '../types/textbook.ts';
import {
  computeProgressStats,
  computeSubjectMasteryProgress,
  createEmptySubtopicProgress,
  deriveMasteryStatus,
  derivePartStatus,
  filterSubtopics,
  markPartJustVisiting,
  markSubtopicJustVisiting,
  markSubtopicOpened,
  parseHashToRoute,
  parseProgressMap,
  ratePartLikert,
  rateSubtopicLikert,
  routeToHash,
  serializeProgressMap,
  toggleSubtopicPart,
} from './studyProgress.ts';

test('curriculum integrity: all 26 chapters (13 Fizik + 13 Kimia) and 121 subtopics (55 + 66) obey the 6-part structure', () => {
  assert.equal(FIZIK_CHAPTERS.length, 13);
  assert.equal(KIMIA_CHAPTERS.length, 13);
  assert.equal(TEXTBOOK_CHAPTERS.length, 26);
  assert.equal(getSubtopicsBySubject('fizik').length, 55);
  assert.equal(getSubtopicsBySubject('kimia').length, 66);
  assert.equal(ALL_SUBTOPICS.length, 121);

  const chapterIds = new Set(TEXTBOOK_CHAPTERS.map((c) => c.id));
  const subtopicIds = new Set(ALL_SUBTOPICS.map((s) => s.id));
  assert.equal(chapterIds.size, 26, 'Duplicate chapter IDs found');
  assert.equal(subtopicIds.size, 121, 'Duplicate subtopic IDs found');

  for (const sub of ALL_SUBTOPICS) {
    assert.ok(sub.part1Anchor.phenomenon.length > 10, `${sub.id} missing Part 1`);
    assert.ok(sub.part2SacredDefinitions.length >= 1, `${sub.id} missing Part 2`);
    assert.ok(
      sub.part3Mechanics.causalChains.length >= 1 &&
        sub.part3Mechanics.tables.length >= 1 &&
        sub.part3Mechanics.formulas.length >= 1,
      `${sub.id} missing Part 3 core blocks`
    );
    assert.ok(sub.part4WorkedExamples.length >= 1, `${sub.id} missing Part 4 worked example`);
    assert.equal(
      sub.part6Checkpoint.quickRecall.length,
      3,
      `${sub.id} Part 6 must have 3 quick recall items`
    );
    assert.ok(
      sub.part6Checkpoint.fadedProblem.step1GivenAndFormula.length > 5 &&
        sub.part6Checkpoint.transferQuestion.question.length > 10,
      `${sub.id} Part 6 incomplete`
    );
  }
});

test('deriveMasteryStatus maps unopened, opened, and Likert 1..5 accurately', () => {
  assert.equal(deriveMasteryStatus(createEmptySubtopicProgress()), 'unread');
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: null,
      openedParts: [1],
      partRatings: {},
      updatedAt: null,
    }),
    'opened_unrated'
  );
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: 1,
      openedParts: [],
      partRatings: {},
      updatedAt: null,
    }),
    'needs_reread'
  );
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: 2,
      openedParts: [],
      partRatings: {},
      updatedAt: null,
    }),
    'needs_reread'
  );
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: 3,
      openedParts: [],
      partRatings: {},
      updatedAt: null,
    }),
    'needs_practice'
  );
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: 4,
      openedParts: [],
      partRatings: {},
      updatedAt: null,
    }),
    'mastered'
  );
  assert.equal(
    deriveMasteryStatus({
      opened: true,
      rating: 5,
      openedParts: [],
      partRatings: {},
      updatedAt: null,
    }),
    'mastered'
  );
});

test('honest "just visiting" exit resets part and subtopic back to unread (0)', () => {
  let map: StudyProgressMap = {};
  map = markSubtopicOpened(map, '2.4', '2026-01-01T00:00:00Z');
  map = ratePartLikert(map, '2.4', 2, 4, '2026-01-01T00:01:00Z');
  assert.equal(derivePartStatus(map['2.4'], 2), 'mastered');

  // If user visits Part 2 and chooses "just visiting", Part 2 returns to unread and subtopic returns to unread if no other rated parts
  map = markPartJustVisiting(map, '2.4', 2, '2026-01-01T00:02:00Z');
  assert.equal(derivePartStatus(map['2.4'], 2), 'unread');
  assert.equal(deriveMasteryStatus(map['2.4']), 'unread');

  // Even if subtopic was previously rated 5, choosing "just visiting" on subtopic resets to 0/unread
  map = rateSubtopicLikert(map, '2.4', 5, '2026-01-01T00:03:00Z');
  assert.equal(deriveMasteryStatus(map['2.4']), 'mastered');
  map = markSubtopicJustVisiting(map, '2.4', '2026-01-01T00:04:00Z');
  assert.equal(deriveMasteryStatus(map['2.4']), 'unread');
  assert.equal(computeProgressStats(ALL_SUBTOPICS, map).unread, 121);
});

test('progress updates, part toggles, and subject-scoped stats computation stay consistent', () => {
  let map: StudyProgressMap = {};
  map = markSubtopicOpened(map, '1.1', '2026-01-01T00:00:00Z');
  map = toggleSubtopicPart(map, '1.1', 2, '2026-01-01T00:01:00Z');
  map = rateSubtopicLikert(map, '1.2', 2, '2026-01-01T00:02:00Z');
  map = rateSubtopicLikert(map, '2.1', 3, '2026-01-01T00:03:00Z');
  map = rateSubtopicLikert(map, '2.3', 5, '2026-01-01T00:04:00Z');
  map = rateSubtopicLikert(map, 'k4-2.1', 5, '2026-01-01T00:05:00Z');
  map = rateSubtopicLikert(map, 'k5-1.1', 2, '2026-01-01T00:06:00Z');

  const fizikStats = computeProgressStats(getSubtopicsBySubject('fizik'), map);
  assert.equal(fizikStats.total, 55);
  assert.equal(fizikStats.openedUnrated, 1);
  assert.equal(fizikStats.needsReread, 1);
  assert.equal(fizikStats.needsPractice, 1);
  assert.equal(fizikStats.mastered, 1);
  assert.equal(fizikStats.unread, 51);
  assert.equal(fizikStats.ratedCount, 3);
  assert.equal(fizikStats.averageLikert, 3.3);

  const kimiaStats = computeProgressStats(getSubtopicsBySubject('kimia'), map);
  assert.equal(kimiaStats.total, 66);
  assert.equal(kimiaStats.mastered, 1);
  assert.equal(kimiaStats.needsReread, 1);
  assert.equal(kimiaStats.unread, 64);
});

test('filterSubtopics filters by status, chapter, and search query', () => {
  let map: StudyProgressMap = {};
  map = rateSubtopicLikert(map, '1.1', 5);
  map = rateSubtopicLikert(map, '3.2', 1);

  const masteredOnly = filterSubtopics(TEXTBOOK_CHAPTERS, map, {
    statusFilter: 'mastered',
  });
  assert.equal(masteredOnly.length, 1);
  assert.equal(masteredOnly[0].subtopics[0].id, '1.1');

  const priorityOnly = filterSubtopics(TEXTBOOK_CHAPTERS, map, {
    statusFilter: 'review_priority',
  });
  assert.equal(priorityOnly.length, 1);
  assert.equal(priorityOnly[0].subtopics[0].id, '3.2');

  const queryMatch = filterSubtopics(TEXTBOOK_CHAPTERS, map, {
    query: 'Kepler',
  });
  assert.equal(queryMatch.length, 1);
  assert.equal(queryMatch[0].subtopics[0].id, '3.2');

  const f5Match = filterSubtopics(TEXTBOOK_CHAPTERS, map, {
    query: 'Einstein',
  });
  assert.ok(f5Match.some((g) => g.subtopics.some((s) => s.id === 't5-7.3')));
});

test('SPA hash routing round-trips cleanly across Fizik and Kimia T4/T5 routes', () => {
  assert.deepEqual(parseHashToRoute('#/', TEXTBOOK_CHAPTERS), { view: 'dashboard' });
  assert.deepEqual(parseHashToRoute('#/ulang-kaji', TEXTBOOK_CHAPTERS), { view: 'review' });
  assert.deepEqual(parseHashToRoute('#/rumus', TEXTBOOK_CHAPTERS), { view: 'formulas' });
  assert.deepEqual(parseHashToRoute('#/kimia', TEXTBOOK_CHAPTERS), {
    view: 'dashboard',
    subject: 'kimia',
  });
  assert.deepEqual(parseHashToRoute('#/kimia/ulang-kaji', TEXTBOOK_CHAPTERS), {
    view: 'review',
    subject: 'kimia',
  });
  assert.deepEqual(parseHashToRoute('#/kimia/rumus', TEXTBOOK_CHAPTERS), {
    view: 'formulas',
    subject: 'kimia',
  });
  assert.deepEqual(
    parseHashToRoute(routeToHash({ view: 'chapter', chapterId: 'bab-2' }), TEXTBOOK_CHAPTERS),
    { view: 'chapter', chapterId: 'bab-2' }
  );
  assert.deepEqual(
    parseHashToRoute(routeToHash({ view: 'chapter', chapterId: 't5-bab-2' }), TEXTBOOK_CHAPTERS),
    { view: 'chapter', chapterId: 't5-bab-2' }
  );
  assert.deepEqual(
    parseHashToRoute(routeToHash({ view: 'chapter', chapterId: 'k4-bab-6' }), TEXTBOOK_CHAPTERS),
    { view: 'chapter', chapterId: 'k4-bab-6' }
  );
  assert.deepEqual(
    parseHashToRoute(
      routeToHash({ view: 'part', chapterId: 'k4-bab-6', subtopicId: 'k4-6.11', partNum: 3 }),
      TEXTBOOK_CHAPTERS
    ),
    { view: 'part', chapterId: 'k4-bab-6', subtopicId: 'k4-6.11', partNum: 3 }
  );
  assert.deepEqual(
    parseHashToRoute(
      routeToHash({ view: 'subtopic', chapterId: 'k5-bab-1', subtopicId: 'k5-1.3' }),
      TEXTBOOK_CHAPTERS
    ),
    { view: 'subtopic', chapterId: 'k5-bab-1', subtopicId: 'k5-1.3' }
  );
  assert.deepEqual(
    parseHashToRoute(
      routeToHash({ view: 'subtopic', chapterId: 'bab-2', subtopicId: '2.4' }),
      TEXTBOOK_CHAPTERS
    ),
    { view: 'subtopic', chapterId: 'bab-2', subtopicId: '2.4' }
  );
  assert.deepEqual(
    parseHashToRoute(
      routeToHash({ view: 'part', chapterId: 't5-bab-7', subtopicId: 't5-7.3', partNum: 3 }),
      TEXTBOOK_CHAPTERS
    ),
    { view: 'part', chapterId: 't5-bab-7', subtopicId: 't5-7.3', partNum: 3 }
  );
  // Part 5 does not exist on 1.1 -> gracefully falls back to subtopic
  assert.deepEqual(
    parseHashToRoute('#/bab/bab-1/1.1/bahagian/5', TEXTBOOK_CHAPTERS),
    { view: 'subtopic', chapterId: 'bab-1', subtopicId: '1.1' }
  );
});

test('parseProgressMap safely handles invalid JSON and preserves valid state + partRatings', () => {
  assert.deepEqual(parseProgressMap(null), {});
  assert.deepEqual(parseProgressMap('not-json'), {});
  assert.deepEqual(parseProgressMap('[]'), {});

  let map: StudyProgressMap = {};
  map = rateSubtopicLikert(map, '4.3', 4, '2026-01-01T00:00:00Z');
  map = ratePartLikert(map, '4.3', 3, 5, '2026-01-01T00:00:00Z');
  map = toggleSubtopicPart(map, '4.3', 2, '2026-01-01T00:00:00Z');
  const roundTripped = parseProgressMap(serializeProgressMap(map));
  assert.equal(roundTripped['4.3']?.rating, 4);
  assert.equal(roundTripped['4.3']?.partRatings[3], 5);
  assert.deepEqual(roundTripped['4.3']?.openedParts, [2, 3]);
});

test('computeSubjectMasteryProgress sums Form 4 + Form 5 subsets accurately and never mixes Fizik with Kimia', () => {
  let map: StudyProgressMap = {};
  const emptyFizik = computeSubjectMasteryProgress(FIZIK_CHAPTERS, map);
  const emptyKimia = computeSubjectMasteryProgress(KIMIA_CHAPTERS, map);
  assert.equal(emptyFizik.exactPercent, 0);
  assert.equal(emptyFizik.formattedPercent, '0.00%');
  assert.equal(emptyKimia.exactPercent, 0);

  // Rate only Kimia subtopic parts & subtopic (Form 4 + Form 5)
  map = markSubtopicOpened(map, 'k4-2.1');
  map = ratePartLikert(map, 'k4-2.1', 3, 4);
  map = ratePartLikert(map, 'k5-1.1', 6, 5);
  map = rateSubtopicLikert(map, 'k5-1.1', 5);

  const afterKimia = computeSubjectMasteryProgress(KIMIA_CHAPTERS, map);
  const fizikUntouched = computeSubjectMasteryProgress(FIZIK_CHAPTERS, map);
  assert.ok(afterKimia.exactPercent > 0 && afterKimia.exactPercent < 100);
  assert.equal(
    fizikUntouched.exactPercent,
    0,
    'Fizik mastery bar must remain strictly isolated at 0 when only Kimia changes'
  );

  // Opening a Fizik part gives subtle micro-progress; marking "just visiting" resets back to 0
  map = toggleSubtopicPart(map, '1.1', 1);
  const fizikOpened = computeSubjectMasteryProgress(FIZIK_CHAPTERS, map);
  assert.ok(fizikOpened.exactPercent > 0 && fizikOpened.exactPercent < 0.2);

  map = markPartJustVisiting(map, '1.1', 1);
  map = markSubtopicJustVisiting(map, '1.1');
  const fizikReset = computeSubjectMasteryProgress(FIZIK_CHAPTERS, map);
  assert.equal(fizikReset.exactPercent, 0);

  // Full mastery (rating 5 on all valid parts + overall) across all Kimia chapters yields 100%
  let fullKimiaMap: StudyProgressMap = {};
  for (const ch of KIMIA_CHAPTERS) {
    for (const sub of ch.subtopics) {
      const parts = sub.part5DecisionTable ? ([1, 2, 3, 4, 5, 6] as const) : ([1, 2, 3, 4, 6] as const);
      for (const p of parts) {
        fullKimiaMap = ratePartLikert(fullKimiaMap, sub.id, p, 5);
      }
      fullKimiaMap = rateSubtopicLikert(fullKimiaMap, sub.id, 5);
    }
  }
  const maxedKimia = computeSubjectMasteryProgress(KIMIA_CHAPTERS, fullKimiaMap);
  assert.equal(maxedKimia.formattedPercent, '100%');
  assert.equal(computeSubjectMasteryProgress(FIZIK_CHAPTERS, fullKimiaMap).exactPercent, 0);
});
