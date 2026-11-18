import React, { useState } from 'react';
import { TEXTBOOK_CHAPTERS } from '../data';
import { KaTeXBlock, RichMathText } from './MathText';

interface FormulaVaultViewProps {
  onJumpToSubtopic: (chapterId: string, subtopicId: string) => void;
}

type FormFilter = 'all' | 4 | 5;

export const FormulaVaultView: React.FC<FormulaVaultViewProps> = ({
  onJumpToSubtopic,
}) => {
  const [formFilter, setFormFilter] = useState<FormFilter>('all');

  const visibleChapters = TEXTBOOK_CHAPTERS.filter(
    (ch) => formFilter === 'all' || ch.formLevel === formFilter
  );

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-bold text-slate-950 dark:text-slate-50">
              Senarai Rumus &amp; Pemalar Fizik KSSM (Tingkatan 4 &amp; 5)
            </h2>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Himpunan rumus rasmi 13 Bab (Tingkatan 4 Bab 1–6 &amp; Tingkatan 5 Bab 1–7) berserta syarat sah dan sempadan kegagalan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Penapis tingkatan rumus">
            {(
              [
                ['all', 'Semua (13 Bab)'],
                [4, 'Tingkatan 4'],
                [5, 'Tingkatan 5'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={String(key)}
                type="button"
                data-testid={`formula-filter-${key}`}
                onClick={() => setFormFilter(key)}
                className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  formFilter === key
                    ? 'border-sky-700 bg-sky-700 text-white dark:border-sky-500 dark:bg-sky-600'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {visibleChapters.map((chapter) => (
        <section key={chapter.id} className="space-y-2.5 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-1.5">
            <h3 className="font-display text-base font-bold text-slate-950 dark:text-slate-100">
              <span className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400 mr-2">
                T{chapter.formLevel}
              </span>
              Bab {chapter.number} · {chapter.title}
            </h3>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{chapter.pageRange}</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {chapter.subtopics.flatMap((sub) =>
              sub.part3Mechanics.formulas.map((f, fIdx) => (
                <div
                  key={`${sub.id}-${fIdx}`}
                  className="min-w-0 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 flex flex-col justify-between gap-2.5"
                >
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400">
                        T{chapter.formLevel} · Subtopik {sub.code}
                      </span>
                      <button
                        type="button"
                        onClick={() => onJumpToSubtopic(chapter.id, sub.id)}
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300 underline underline-offset-2 hover:text-sky-700 dark:hover:text-sky-400 cursor-pointer"
                      >
                        Buka Nota {sub.code}
                      </button>
                    </div>
                    <p className="mt-1 font-display text-sm font-semibold text-slate-950 dark:text-slate-50">
                      <RichMathText text={f.title} />
                    </p>
                    <div className="mt-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/75 px-2.5 py-1">
                      <KaTeXBlock latex={f.latex} />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    <strong className="text-red-700 dark:text-red-400">Awas:</strong>{' '}
                    <RichMathText text={f.failsWhen} />
                  </p>
                </div>
              ))
            )}
          </div>
        </section>
      ))}
    </div>
  );
};
