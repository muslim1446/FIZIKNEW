export type DiagramKind =
  | 'graph-shapes'
  | 'pendulum-setup'
  | 'linear-motion-graphs'
  | 'ticker-tape'
  | 'free-fall-vacuum'
  | 'inertia-balance'
  | 'momentum-collision'
  | 'impulse-time-graph'
  | 'gravity-profile'
  | 'kepler-ellipse'
  | 'satellite-orbits'
  | 'thermal-equilibrium'
  | 'land-sea-breeze'
  | 'heating-curve'
  | 'gas-laws-graphs'
  | 'wave-profiles'
  | 'damping-resonance'
  | 'wave-reflection'
  | 'wave-refraction'
  | 'wave-diffraction'
  | 'wave-interference'
  | 'em-spectrum'
  | 'light-refraction'
  | 'total-internal-reflection'
  | 'convex-lens-rays'
  | 'concave-lens-rays'
  | 'optical-instruments'
  | 'spherical-mirrors'
  | 'f5-vector-forces'
  | 'f5-hookes-law'
  | 'f5-pressure-pascal'
  | 'f5-archimedes-bernoulli'
  | 'f5-emf-internal'
  | 'f5-fleming-motor'
  | 'f5-transformer'
  | 'f5-rectifier-transistor'
  | 'f5-nuclear-decay'
  | 'f5-photoelectric-einstein';

export interface VerbatimSegment {
  text: string;
  keyword?: boolean;
}

export interface SacredDefinition {
  title: string;
  category: 'Takrifan' | 'Hukum' | 'Prinsip' | 'Definisi Operasi' | 'Persamaan';
  verbatimSegments: VerbatimSegment[];
  equationLatex?: string;
  operationalNote?: string;
}

export interface CausalChain {
  title: string;
  cause: string;
  mechanism: string;
  effect: string;
}

export interface StructuredTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface FormulaSpec {
  title: string;
  latex: string;
  symbols: {
    symbol: string;
    meaning: string;
    unit: string;
  }[];
  appliesWhen: string;
  failsWhen: string;
}

export interface DiagramSpec {
  kind: DiagramKind;
  title: string;
  whatItShows: string;
  axisOrRule: string;
}

export interface ExperimentCore {
  code: string;
  title: string;
  aim: string;
  inference: string;
  hypothesis: string;
  variables: {
    manipulated: string;
    responding: string;
    fixed: string;
  };
  setupLogic: string;
  expectedResult: string;
  conclusion: string;
}

export interface WorkedExample {
  title: string;
  problem: string;
  given: string[];
  formulaLatex: string;
  formulaWhy: string;
  substituteLatex: string;
  answer: string;
  trapAlert: string;
}

export interface DecisionRow {
  designChoice: string;
  scientificReason: string;
}

export interface CheckpointRecall {
  question: string;
  answer: string;
}

export interface SubtopicContent {
  id: string;
  chapterId: string;
  code: string;
  title: string;
  pageRef: string;
  part1Anchor: {
    phenomenon: string;
    chapterConnection: string;
  };
  part2SacredDefinitions: SacredDefinition[];
  part3Mechanics: {
    causalChains: CausalChain[];
    tables: StructuredTable[];
    formulas: FormulaSpec[];
    diagrams: DiagramSpec[];
    experiments: ExperimentCore[];
  };
  part4WorkedExamples: WorkedExample[];
  part5DecisionTable: {
    title: string;
    rows: DecisionRow[];
  } | null;
  part6Checkpoint: {
    quickRecall: CheckpointRecall[];
    fadedProblem: {
      prompt: string;
      step1GivenAndFormula: string;
      studentTask: string;
      answerSteps: string;
    };
    transferQuestion: {
      question: string;
      answer: string;
    };
  };
}

export interface ChapterContent {
  id: string;
  formLevel: 4 | 5;
  number: number;
  title: string;
  pageRange: string;
  overview: string;
  subtopics: SubtopicContent[];
}

export type LikertRating = 1 | 2 | 3 | 4 | 5;

export type PartNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type MasteryStatus =
  | 'unread'
  | 'opened_unrated'
  | 'needs_reread'
  | 'needs_practice'
  | 'mastered';

export interface SubtopicProgress {
  opened: boolean;
  rating: LikertRating | null;
  openedParts: number[];
  partRatings: Record<number, LikertRating | null>;
  updatedAt: string | null;
}

export type StudyProgressMap = Record<string, SubtopicProgress>;

export type AppRoute =
  | { view: 'dashboard' }
  | { view: 'review' }
  | { view: 'formulas' }
  | { view: 'chapter'; chapterId: string }
  | { view: 'subtopic'; chapterId: string; subtopicId: string }
  | { view: 'part'; chapterId: string; subtopicId: string; partNum: PartNumber };
