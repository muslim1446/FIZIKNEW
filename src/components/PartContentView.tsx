import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  FlaskConical,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import type {
  ChapterContent,
  LikertRating,
  PartNumber,
  SubtopicContent,
  SubtopicProgress,
} from '../types/textbook';
import { LikertRatingBar } from './LikertRatingBar';
import { KaTeXBlock, RichMathText } from './MathText';
import { PhysicsDiagram } from './PhysicsDiagrams';

export const PART_METADATA: Record<
  PartNumber,
  { title: string; subtitle: string }
> = {
  1: {
    title: 'Jangkar Gambaran Besar',
    subtitle: 'Realiti fizikal ("Mengapa") & kaitan keseluruhan bab',
  },
  2: {
    title: 'Takrifan, Hukum & Persamaan Verbatim SPM',
    subtitle: 'Kata kunci pemarkahan wajib tanpa ubah suai ayat',
  },
  3: {
    title: 'Mekanik Teras, Rumus, Jadual & Rajah Visual',
    subtitle: 'Rantaian Punca → Mekanisme → Kesan, had rumus, rajah & eksperimen',
  },
  4: {
    title: 'Contoh Kerja Teranotasi 4-Langkah',
    subtitle: 'Penyelesaian berstruktur + amaran perangkap SPM',
  },
  5: {
    title: 'Jadual Keputusan & Pengubahsuaian Kertas 2 SPM',
    subtitle: 'Pilihan reka bentuk kejuruteraan & sebab saintifik',
  },
  6: {
    title: 'Titik Semakan Anti-Ilusi (Latihan Aktif)',
    subtitle: 'Ingatan 3-saat, masalah pudar & soalan pemindahan KBAT',
  },
};

interface PartContentViewProps {
  chapter: ChapterContent;
  subtopic: SubtopicContent;
  partNum: PartNumber;
  progress: SubtopicProgress;
  onRatePart: (rating: LikertRating | null) => void;
  onJustVisitingPart: () => void;
  onNavigatePart: (targetPart: PartNumber) => void;
  onBackToSubtopic: () => void;
}

export const PartContentView: React.FC<PartContentViewProps> = ({
  chapter,
  subtopic,
  partNum,
  progress,
  onRatePart,
  onJustVisitingPart,
  onNavigatePart,
  onBackToSubtopic,
}) => {
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    setShowAnswerKey(false);
  }, [subtopic.id, partNum]);

  const availableParts: PartNumber[] = subtopic.part5DecisionTable
    ? [1, 2, 3, 4, 5, 6]
    : [1, 2, 3, 4, 6];
  const currentIdx = availableParts.indexOf(partNum);
  const prevPart = currentIdx > 0 ? availableParts[currentIdx - 1] : null;
  const nextPart =
    currentIdx >= 0 && currentIdx < availableParts.length - 1
      ? availableParts[currentIdx + 1]
      : null;

  const partRating = progress.partRatings?.[partNum] ?? null;
  const partOpened =
    progress.openedParts.includes(partNum) || partRating !== null;
  const meta = PART_METADATA[partNum];

  return (
    <div className="space-y-5">
      {/* Focused Header */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            Tingkatan {chapter.formLevel} · Bab {chapter.number} · Subtopik {subtopic.code} · Bahagian {partNum}/6
          </span>
          <button
            type="button"
            onClick={onBackToSubtopic}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Kembali ke Subtopik {subtopic.code}</span>
          </button>
        </div>
        <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-50">
          Bahagian {partNum}: {meta.title}
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {subtopic.code} {subtopic.title} ({subtopic.pageRef}) · {meta.subtitle}
        </p>
      </div>

      {/* ONLY THIS PART'S CONTENT */}
      {partNum === 1 && (
        <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              Realiti Fizikal (Mengapa Fenomena Ini Wujud)
            </p>
            <p className="mt-1.5 text-base leading-relaxed text-slate-900 dark:text-slate-100">
              <RichMathText text={subtopic.part1Anchor.phenomenon} />
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Kaitan Dengan Keseluruhan Bab {chapter.number}
            </p>
            <p className="mt-1.5 leading-relaxed">
              <RichMathText text={subtopic.part1Anchor.chapterConnection} />
            </p>
          </div>
        </section>
      )}

      {partNum === 2 && (
        <section className="space-y-3">
          {subtopic.part2SacredDefinitions.map((def, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-amber-200 dark:border-amber-800/70 bg-amber-50/45 dark:bg-amber-950/30 p-5 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                  <RichMathText text={def.title} />
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  Amaran Kata Kunci SPM · {def.category}
                </span>
              </div>
              <blockquote className="text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-200">
                {def.verbatimSegments.map((seg, sIdx) =>
                  seg.keyword ? (
                    <strong
                      key={sIdx}
                      className="font-bold text-slate-950 dark:text-white underline decoration-amber-600/80 dark:decoration-amber-400/80 decoration-2 underline-offset-2"
                    >
                      <RichMathText text={seg.text} />
                    </strong>
                  ) : (
                    <RichMathText key={sIdx} text={seg.text} />
                  )
                )}
              </blockquote>
              {def.equationLatex && (
                <div className="rounded-lg border border-amber-200/80 dark:border-amber-800/60 bg-white dark:bg-slate-950/80 px-4 py-2">
                  <KaTeXBlock latex={def.equationLatex} />
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {partNum === 3 && (
        <section className="space-y-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          {subtopic.part3Mechanics.causalChains.map((chain, idx) => (
            <div key={idx} className="space-y-2.5">
              <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                <RichMathText text={chain.title} />
              </h2>
              <div className="grid gap-2.5 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    1 · Punca
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    <RichMathText text={chain.cause} />
                  </p>
                </div>
                <div className="rounded-lg border border-sky-200 dark:border-sky-800/70 bg-sky-50/40 dark:bg-sky-950/40 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    2 · Mekanisme
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    <RichMathText text={chain.mechanism} />
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/40 dark:bg-emerald-950/40 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    3 · Kesan Dapat Dicerap
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    <RichMathText text={chain.effect} />
                  </p>
                </div>
              </div>
            </div>
          ))}

          {subtopic.part3Mechanics.tables.map((tbl, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                <RichMathText text={tbl.title} />
              </h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                    <tr>
                      {tbl.headers.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          className="border-b border-slate-200 dark:border-slate-700 px-3.5 py-2.5 font-semibold"
                        >
                          <RichMathText text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900/90">
                    {tbl.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/55">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-3.5 py-2.5 align-top text-slate-800 dark:text-slate-200 leading-relaxed"
                          >
                            <RichMathText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {subtopic.part3Mechanics.formulas.map((f, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/55 p-4 space-y-3"
            >
              <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                <RichMathText text={f.title} />
              </h2>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950/85 px-3.5 py-2">
                <KaTeXBlock latex={f.latex} />
              </div>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {f.symbols.map((sym, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-baseline justify-between gap-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <span>
                      <RichMathText text={`$${sym.symbol}$`} /> —{' '}
                      <RichMathText text={sym.meaning} />
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      <RichMathText text={sym.unit} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid gap-2 sm:grid-cols-2 text-xs">
                <div className="rounded border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/50 dark:bg-emerald-950/35 p-3">
                  <span className="font-mono font-semibold text-emerald-800 dark:text-emerald-300">
                    ✓ BILA SAH DIGUNA:{' '}
                  </span>
                  <span className="text-slate-800 dark:text-slate-200">
                    <RichMathText text={f.appliesWhen} />
                  </span>
                </div>
                <div className="rounded border border-red-200 dark:border-red-800/70 bg-red-50/50 dark:bg-red-950/35 p-3">
                  <span className="font-mono font-semibold text-red-800 dark:text-red-300">
                    ▲ BILA GAGAL / AMARAN:{' '}
                  </span>
                  <span className="text-slate-800 dark:text-slate-200">
                    <RichMathText text={f.failsWhen} />
                  </span>
                </div>
              </div>
            </div>
          ))}

          {subtopic.part3Mechanics.diagrams.map((diag, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 space-y-3"
            >
              <div>
                <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                  <RichMathText text={diag.title} />
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  <RichMathText text={diag.whatItShows} />
                </p>
              </div>
              <div className="rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2">
                <PhysicsDiagram kind={diag.kind} />
              </div>
              <p className="text-xs font-medium text-sky-900 dark:text-sky-200 bg-sky-50 dark:bg-sky-950/45 border border-sky-200 dark:border-sky-800/70 rounded px-3 py-2">
                <span className="font-mono font-semibold uppercase mr-1">
                  Aturan Rajah:
                </span>
                <RichMathText text={diag.axisOrRule} />
              </p>
            </div>
          ))}

          {subtopic.part3Mechanics.experiments.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-sky-200 dark:border-sky-800/70 bg-sky-50/35 dark:bg-sky-950/30 p-4 space-y-2.5"
            >
              <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300">
                <FlaskConical className="h-4 w-4 shrink-0" />
                <h2 className="font-display text-base font-bold">
                  {exp.code}: <RichMathText text={exp.title} />
                </h2>
              </div>
              <dl className="grid gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">Tujuan: </dt>
                  <dd className="inline"><RichMathText text={exp.aim} /></dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">Inferens: </dt>
                  <dd className="inline"><RichMathText text={exp.inference} /></dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">Hipotesis: </dt>
                  <dd className="inline"><RichMathText text={exp.hypothesis} /></dd>
                </div>
                <div className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 space-y-1 text-xs">
                  <p>
                    <strong className="text-slate-950 dark:text-slate-50">Pemboleh Ubah Dimanipulasi:</strong>{' '}
                    <RichMathText text={exp.variables.manipulated} />
                  </p>
                  <p>
                    <strong className="text-slate-950 dark:text-slate-50">Pemboleh Ubah Bergerak Balas:</strong>{' '}
                    <RichMathText text={exp.variables.responding} />
                  </p>
                  <p>
                    <strong className="text-slate-950 dark:text-slate-50">Pemboleh Ubah Dimalarkan:</strong>{' '}
                    <RichMathText text={exp.variables.fixed} />
                  </p>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">
                    Logik Susunan &amp; Langkah Kritis:{' '}
                  </dt>
                  <dd className="inline"><RichMathText text={exp.setupLogic} /></dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">
                    Jangkaan Graf / Pemerhatian:{' '}
                  </dt>
                  <dd className="inline"><RichMathText text={exp.expectedResult} /></dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-950 dark:text-slate-50">Kesimpulan: </dt>
                  <dd className="inline"><RichMathText text={exp.conclusion} /></dd>
                </div>
              </dl>
            </div>
          ))}
        </section>
      )}

      {partNum === 4 && (
        <section className="space-y-4">
          {subtopic.part4WorkedExamples.map((ex, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3"
            >
              <div>
                <h2 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
                  <RichMathText text={ex.title} />
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <RichMathText text={ex.problem} />
                </p>
              </div>

              <div className="grid gap-2.5 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Langkah 1 · Diberi (Tukar Unit)
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {ex.given.map((g, gIdx) => (
                      <li key={gIdx}>
                        • <RichMathText text={g} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Langkah 2 · Rumus &amp; Sebab Pemilihan
                  </p>
                  <KaTeXBlock latex={ex.formulaLatex} />
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    [<RichMathText text={ex.formulaWhy} />]
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Langkah 3 · Penggantian
                  </p>
                  <KaTeXBlock latex={ex.substituteLatex} />
                </div>

                <div className="rounded-lg border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/50 dark:bg-emerald-950/35 p-3.5">
                  <p className="font-mono text-[11px] font-semibold uppercase text-emerald-800 dark:text-emerald-300">
                    Langkah 4 · Jawapan + Unit
                  </p>
                  <p className="mt-1.5 text-sm sm:text-base font-semibold text-slate-950 dark:text-slate-50">
                    <RichMathText text={ex.answer} />
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-red-200 dark:border-red-800/70 bg-red-50/60 dark:bg-red-950/40 px-3.5 py-2.5 text-xs sm:text-sm text-red-900 dark:text-red-200">
                <strong className="font-mono uppercase mr-1.5">
                  ▲ Amaran Perangkap SPM:
                </strong>
                <RichMathText text={ex.trapAlert} />
              </div>
            </div>
          ))}
        </section>
      )}

      {partNum === 5 && subtopic.part5DecisionTable && (
        <section className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
              <tr>
                <th className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold w-2/5">
                  Pilihan Reka Bentuk / Ciri Pengubahsuaian
                </th>
                <th className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold w-3/5">
                  Sebab Saintifik (Frasa Pemarkahan SPM)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {subtopic.part5DecisionTable.rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/55">
                  <td className="px-4 py-3 font-medium text-slate-950 dark:text-slate-100 align-top">
                    <RichMathText text={r.designChoice} />
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 align-top leading-relaxed">
                    <RichMathText text={r.scientificReason} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {partNum === 6 && (
        <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              1 · Ingatan Pantas 3-Saat (Jawab Tanpa Menoleh ke Belakang)
            </h2>
            <ol className="mt-2 space-y-2 text-sm text-slate-800 dark:text-slate-200 list-decimal list-inside">
              {subtopic.part6Checkpoint.quickRecall.map((q, idx) => (
                <li key={idx} className="leading-relaxed">
                  <RichMathText text={q.question} />
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-4 space-y-2">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              2 · Masalah Pudar (Lengkapkan Langkah 2–4 Sendiri)
            </h2>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              <RichMathText text={subtopic.part6Checkpoint.fadedProblem.prompt} />
            </p>
            <p className="text-xs sm:text-sm text-sky-900 dark:text-sky-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-3 py-2">
              <RichMathText
                text={subtopic.part6Checkpoint.fadedProblem.step1GivenAndFormula}
              />
            </p>
            <p className="text-xs italic text-slate-600 dark:text-slate-400">
              <RichMathText text={subtopic.part6Checkpoint.fadedProblem.studentTask} />
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/70 p-4 space-y-1.5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              3 · Soalan Pemindahan Peperiksaan (KBAT / Penaakulan)
            </h2>
            <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
              <RichMathText
                text={subtopic.part6Checkpoint.transferQuestion.question}
              />
            </p>
          </div>

          <div className="pt-1">
            <button
              type="button"
              aria-expanded={showAnswerKey}
              onClick={() => setShowAnswerKey((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-900 dark:bg-sky-600 px-4 py-2.5 font-mono text-xs font-semibold text-white hover:bg-slate-800 dark:hover:bg-sky-500 cursor-pointer"
            >
              {showAnswerKey ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
              <span>
                {showAnswerKey
                  ? 'Sembunyikan Skema Jawapan'
                  : '--- SKEMA JAWAPAN (JANGAN INTAI DAHULU) ---'}
              </span>
            </button>

            {showAnswerKey && (
              <div className="mt-3 rounded-lg border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/45 dark:bg-emerald-950/35 p-4 space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div>
                  <p className="font-mono font-semibold text-emerald-900 dark:text-emerald-300">
                    Jawapan Ingatan 3-Saat:
                  </p>
                  <ol className="mt-1 space-y-1 list-decimal list-inside">
                    {subtopic.part6Checkpoint.quickRecall.map((q, idx) => (
                      <li key={idx}>
                        <RichMathText text={q.answer} />
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-800/60">
                  <p className="font-mono font-semibold text-emerald-900 dark:text-emerald-300">
                    Penyelesaian Masalah Pudar:
                  </p>
                  <p className="mt-0.5">
                    <RichMathText
                      text={subtopic.part6Checkpoint.fadedProblem.answerSteps}
                    />
                  </p>
                </div>
                <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-800/60">
                  <p className="font-mono font-semibold text-emerald-900 dark:text-emerald-300">
                    Jawapan Pemindahan KBAT:
                  </p>
                  <p className="mt-0.5">
                    <RichMathText
                      text={subtopic.part6Checkpoint.transferQuestion.answer}
                    />
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Inline Likert for THIS Part */}
      <LikertRatingBar
        testId={`likert-part-${subtopic.id}-${partNum}`}
        label={`Penilaian Kendiri · Bahagian ${partNum}`}
        opened={partOpened}
        rating={partRating}
        onRate={onRatePart}
        onJustVisiting={onJustVisitingPart}
      />

      {/* Part-to-Part & Exit Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="flex flex-wrap items-center gap-2">
          {prevPart && (
            <button
              type="button"
              onClick={() => onNavigatePart(prevPart)}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Bahagian {prevPart}</span>
            </button>
          )}
          <button
            type="button"
            onClick={onBackToSubtopic}
            className="rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
          >
            Menu Subtopik {subtopic.code}
          </button>
        </div>

        {nextPart ? (
          <button
            type="button"
            onClick={() => onNavigatePart(nextPart)}
            className="inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 cursor-pointer"
          >
            <span>Seterusnya: Bahagian {nextPart}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onBackToSubtopic}
            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 cursor-pointer"
          >
            <span>Selesai Bahagian 6 · Kembali ke Subtopik</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
