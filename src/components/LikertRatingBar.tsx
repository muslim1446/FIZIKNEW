import React from 'react';
import type { LikertRating } from '../types/textbook';
import {
  LIKERT_LABELS,
  STATUS_META,
  deriveStatusFromRating,
} from '../utils/studyProgress';

interface LikertRatingBarProps {
  testId: string;
  label?: string;
  opened: boolean;
  rating: LikertRating | null;
  onRate: (rating: LikertRating | null) => void;
  onJustVisiting?: () => void;
}

const LIKERT_VALUES: LikertRating[] = [1, 2, 3, 4, 5];

export const LikertRatingBar: React.FC<LikertRatingBarProps> = ({
  testId,
  label = 'Penilaian Kendiri Skala Likert (1–5)',
  opened,
  rating,
  onRate,
  onJustVisiting,
}) => {
  const status = deriveStatusFromRating(opened, rating);
  const meta = STATUS_META[status];

  return (
    <div
      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/90 p-3.5 space-y-2.5"
      data-testid={testId}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {label}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            {rating
              ? LIKERT_LABELS[rating].recommendation
              : 'Nilai kefahaman anda secara jujur, atau tandakan 0 jika hanya melawat.'}
          </p>
        </div>
        <div
          className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-semibold ${meta.borderColor} ${meta.bgColor} ${meta.textColor}`}
        >
          <span aria-hidden="true">{meta.symbol}</span>
          <span>{meta.shortBadge}</span>
          {rating !== null && (
            <span className="font-mono tabular-nums opacity-85">· {rating}/5</span>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-1.5 sm:grid-cols-5"
        role="group"
        aria-label={label}
      >
        {LIKERT_VALUES.map((val) => {
          const isSelected = rating === val;
          let activeTone = 'border-sky-600 bg-sky-600 text-white shadow-xs';
          if (val <= 2) {
            activeTone = 'border-red-600 bg-red-600 text-white shadow-xs';
          } else if (val === 3) {
            activeTone = 'border-amber-600 bg-amber-600 text-white shadow-xs';
          } else {
            activeTone = 'border-emerald-600 bg-emerald-600 text-white shadow-xs';
          }

          return (
            <button
              key={val}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onRate(isSelected ? null : val)}
              className={`flex flex-col items-start rounded-md border px-2.5 py-2 text-left transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isSelected
                  ? activeTone
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/85 text-slate-800 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="font-mono text-xs font-semibold tabular-nums">
                {LIKERT_LABELS[val].short}
              </span>
              <span
                className={`mt-0.5 text-[11px] leading-snug ${
                  isSelected ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {val <= 2
                  ? 'Perlu baca lagi'
                  : val === 3
                    ? 'Perlu latihan'
                    : 'Dikuasai'}
              </span>
            </button>
          );
        })}
      </div>

      {onJustVisiting && (
        <div className="pt-1 flex justify-end">
          <button
            type="button"
            onClick={onJustVisiting}
            className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
          >
            0 · Sekadar melawat / belum baca betul-betul (Kira Belum Dibaca)
          </button>
        </div>
      )}
    </div>
  );
};
