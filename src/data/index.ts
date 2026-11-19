import type { ChapterContent, SubjectId, SubtopicContent } from '../types/textbook';
import { bab1 } from './bab1';
import { bab2 } from './bab2';
import { bab3 } from './bab3';
import { bab4 } from './bab4';
import { bab5 } from './bab5';
import { bab6 } from './bab6';
import { t5bab1 } from './t5bab1';
import { t5bab2 } from './t5bab2';
import { t5bab3 } from './t5bab3';
import { t5bab4 } from './t5bab4';
import { t5bab5 } from './t5bab5';
import { t5bab6 } from './t5bab6';
import { t5bab7 } from './t5bab7';
import { k4bab1 } from './k4bab1';
import { k4bab2 } from './k4bab2';
import { k4bab3 } from './k4bab3';
import { k4bab4 } from './k4bab4';
import { k4bab5 } from './k4bab5';
import { k4bab6 } from './k4bab6';
import { k4bab7 } from './k4bab7';
import { k4bab8 } from './k4bab8';
import { k5bab1 } from './k5bab1';
import { k5bab2 } from './k5bab2';
import { k5bab3 } from './k5bab3';
import { k5bab4 } from './k5bab4';
import { k5bab5 } from './k5bab5';

function withSubject(ch: ChapterContent, subject: SubjectId): ChapterContent {
  return ch.subject === subject ? ch : { ...ch, subject };
}

export const FORM4_CHAPTERS: ChapterContent[] = [
  bab1,
  bab2,
  bab3,
  bab4,
  bab5,
  bab6,
].map((ch) => withSubject(ch, 'fizik'));

export const FORM5_CHAPTERS: ChapterContent[] = [
  t5bab1,
  t5bab2,
  t5bab3,
  t5bab4,
  t5bab5,
  t5bab6,
  t5bab7,
].map((ch) => withSubject(ch, 'fizik'));

export const FIZIK_CHAPTERS: ChapterContent[] = [
  ...FORM4_CHAPTERS,
  ...FORM5_CHAPTERS,
];

export const KIMIA_FORM4_CHAPTERS: ChapterContent[] = [
  k4bab1,
  k4bab2,
  k4bab3,
  k4bab4,
  k4bab5,
  k4bab6,
  k4bab7,
  k4bab8,
].map((ch) => withSubject(ch, 'kimia'));

export const KIMIA_FORM5_CHAPTERS: ChapterContent[] = [
  k5bab1,
  k5bab2,
  k5bab3,
  k5bab4,
  k5bab5,
].map((ch) => withSubject(ch, 'kimia'));

export const KIMIA_CHAPTERS: ChapterContent[] = [
  ...KIMIA_FORM4_CHAPTERS,
  ...KIMIA_FORM5_CHAPTERS,
];

export const TEXTBOOK_CHAPTERS: ChapterContent[] = [
  ...FIZIK_CHAPTERS,
  ...KIMIA_CHAPTERS,
];

export const ALL_SUBTOPICS: SubtopicContent[] = TEXTBOOK_CHAPTERS.flatMap(
  (chapter) => chapter.subtopics
);

export function getChaptersBySubject(subject: SubjectId): ChapterContent[] {
  return subject === 'kimia' ? KIMIA_CHAPTERS : FIZIK_CHAPTERS;
}

export function getSubtopicsBySubject(subject: SubjectId): SubtopicContent[] {
  return getChaptersBySubject(subject).flatMap((ch) => ch.subtopics);
}

export function getSubtopicById(id: string): SubtopicContent | undefined {
  return ALL_SUBTOPICS.find((s) => s.id === id);
}
