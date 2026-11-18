import { EyeOff, ShieldAlert, X } from 'lucide-react';
import React, { useEffect } from 'react';
import type { LikertRating } from '../types/textbook';
import { LIKERT_LABELS } from '../utils/studyProgress';

interface HonestExitModalProps {
  open: boolean;
  pageLabel: string;
  currentRating: LikertRating | null;
  onSelectJustVisiting: () => void;
  onSelectLikert: (rating: LikertRating) => void;
  onCancelStay: () => void;
}

const LIKERT_OPTIONS: LikertRating[] = [1, 2, 3, 4, 5];

export const HonestExitModal: React.FC<HonestExitModalProps> = ({
  open,
  pageLabel,
  currentRating,
  onSelectJustVisiting,
  onSelectLikert,
  onCancelStay,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancelStay();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onCancelStay]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 dark:bg-slate-950/80 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-gate-title"
      data-testid="honest-exit-modal"
    >
      <div className="w-full max-w-lg rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
              <ShieldAlert className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Semakan Kejujuran Sebelum Keluar
              </p>
              <h2
                id="exit-gate-title"
                className="font-display text-base font-bold text-slate-950 dark:text-slate-50"
              >
                {pageLabel}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancelStay}
            aria-label="Kekal di halaman ini"
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Sejujurnya, sebelum anda meninggalkan halaman ini — sejauh manakah anda benar-benar membaca dan memahami kandungannya?
        </p>

        {/* Honest 0 / Just Visiting Option */}
        <button
          type="button"
          data-testid="exit-just-visiting-btn"
          onClick={onSelectJustVisiting}
          className="w-full flex items-start gap-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-3 text-left hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <EyeOff className="h-4 w-4 shrink-0 mt-0.5 text-slate-600 dark:text-slate-300" />
          <div>
            <p className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100">
              0 · Sejujurnya saya tidak membacanya betul-betul, sekadar melawat sahaja
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Direkodkan sebagai <strong className="text-slate-800 dark:text-slate-200">0 / Belum Dibaca</strong> supaya statistik ulang kaji anda kekal jujur.
            </p>
          </div>
        </button>

        {/* Likert 1–5 Options */}
        <div className="space-y-1.5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Atau nilaikan tahap kefahaman sebenar anda (Skala Likert 1–5):
          </p>
          <div className="grid gap-1.5">
            {LIKERT_OPTIONS.map((val) => {
              const isPrev = currentRating === val;
              const tone =
                val <= 2
                  ? 'border-red-200 dark:border-red-900/70 hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50/70 dark:hover:bg-red-950/40'
                  : val === 3
                    ? 'border-amber-200 dark:border-amber-900/70 hover:border-amber-400 dark:hover:border-amber-500 hover:bg-amber-50/70 dark:hover:bg-amber-950/40'
                    : 'border-emerald-200 dark:border-emerald-900/70 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/40';

              return (
                <button
                  key={val}
                  type="button"
                  data-testid={`exit-likert-${val}`}
                  onClick={() => onSelectLikert(val)}
                  className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer ${
                    isPrev
                      ? 'ring-1 ring-sky-600 dark:ring-sky-400 bg-sky-50/50 dark:bg-sky-950/40 ' + tone
                      : 'bg-white dark:bg-slate-800/70 ' + tone
                  }`}
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-950 dark:text-slate-100">
                      {LIKERT_LABELS[val].short}
                    </span>
                    <span className="ml-2 text-xs text-slate-600 dark:text-slate-300">
                      {LIKERT_LABELS[val].description}
                    </span>
                  </div>
                  {isPrev && (
                    <span className="font-mono text-[10px] font-semibold text-sky-700 dark:text-sky-300 shrink-0">
                      NILAI SEDIA ADA
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end pt-1 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onCancelStay}
            className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
          >
            Batal — Kekal di Halaman Ini
          </button>
        </div>
      </div>
    </div>
  );
};
