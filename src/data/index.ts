import type { ChapterContent, SubtopicContent } from '../types/textbook';
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

export const FORM4_CHAPTERS: ChapterContent[] = [
  bab1,
  bab2,
  bab3,
  bab4,
  bab5,
  bab6,
];

export const FORM5_CHAPTERS: ChapterContent[] = [
  t5bab1,
  t5bab2,
  t5bab3,
  t5bab4,
  t5bab5,
  t5bab6,
  t5bab7,
];

export const TEXTBOOK_CHAPTERS: ChapterContent[] = [
  ...FORM4_CHAPTERS,
  ...FORM5_CHAPTERS,
];

export const ALL_SUBTOPICS: SubtopicContent[] = TEXTBOOK_CHAPTERS.flatMap(
  (chapter) => chapter.subtopics
);

export function getSubtopicById(id: string): SubtopicContent | undefined {
  return ALL_SUBTOPICS.find((s) => s.id === id);
}
