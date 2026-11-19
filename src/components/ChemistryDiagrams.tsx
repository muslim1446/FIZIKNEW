import React, { useState } from 'react';
import type { DiagramKind } from '../types/textbook';

interface ChemistryDiagramProps {
  kind: DiagramKind;
}

const ChemHeatingCoolingCurveSvg: React.FC = () => {
  const [mode, setMode] = useState<'heating' | 'cooling'>('heating');
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setMode('heating')}
          className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
            mode === 'heating'
              ? 'border-sky-600 bg-sky-600 text-white'
              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
        >
          Lengkung Pemanasan Naftalena
        </button>
        <button
          type="button"
          onClick={() => setMode('cooling')}
          className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
            mode === 'cooling'
              ? 'border-sky-600 bg-sky-600 text-white'
              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
        >
          Lengkung Penyejukan Naftalena
        </button>
      </div>
      <svg
        viewBox="0 0 600 215"
        className="w-full h-auto"
        role="img"
        aria-label="Lengkung pemanasan dan penyejukan naftalena"
      >
        <rect width="600" height="215" fill="var(--svg-bg)" />
        <line x1="65" y1="175" x2="555" y2="175" stroke="var(--svg-ink)" strokeWidth="1.6" />
        <line x1="65" y1="175" x2="65" y2="22" stroke="var(--svg-ink)" strokeWidth="1.6" />
        <text x="54" y="25" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
          Suhu (°C)
        </text>
        <text x="550" y="195" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
          Masa (min)
        </text>
        <line x1="65" y1="96" x2="540" y2="96" stroke="var(--svg-muted)" strokeDasharray="4 4" strokeWidth="1" />
        <text x="58" y="100" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-amber)">
          80°C
        </text>
        {mode === 'heating' ? (
          <g>
            <polyline
              points="75,160 190,96 365,96 510,36"
              fill="none"
              stroke="var(--svg-red)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              { x: 75, y: 160, l: 'A (Pepejal)' },
              { x: 190, y: 96, l: 'B (Mula melebur)' },
              { x: 365, y: 96, l: 'C (Tamat lebur)' },
              { x: 510, y: 36, l: 'D (Cecair)' },
            ].map((p) => (
              <g key={p.l}>
                <circle cx={p.x} cy={p.y} r="4.5" fill="var(--svg-red)" />
                <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">
                  {p.l}
                </text>
              </g>
            ))}
            <rect x="195" y="106" width="165" height="52" rx="4" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" />
            <text x="277" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber-text)">
              BC: Pepejal + Cecair (Malar)
            </text>
            <text x="277" y="139" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              Haba diserap untuk mengatasi
            </text>
            <text x="277" y="151" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              daya tarikan antara zarah
            </text>
          </g>
        ) : (
          <g>
            <polyline
              points="75,36 190,96 365,96 510,160"
              fill="none"
              stroke="var(--svg-sky)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              { x: 75, y: 36, l: 'E (Cecair)' },
              { x: 190, y: 96, l: 'F (Mula membeku)' },
              { x: 365, y: 96, l: 'G (Tamat beku)' },
              { x: 510, y: 160, l: 'H (Pepejal)' },
            ].map((p) => (
              <g key={p.l}>
                <circle cx={p.x} cy={p.y} r="4.5" fill="var(--svg-sky)" />
                <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">
                  {p.l}
                </text>
              </g>
            ))}
            <rect x="195" y="106" width="165" height="52" rx="4" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
            <text x="277" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">
              FG: Cecair + Pepejal (Malar)
            </text>
            <text x="277" y="139" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              Haba hilang diimbangi oleh haba
            </text>
            <text x="277" y="151" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              dibebaskan semasa ikatan terbentuk
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

const ATOMS = [
  { symbol: 'Na', name: 'Natrium (²³₁₁Na)', p: 11, n: 12, shells: [2, 8, 1] },
  { symbol: 'Cl', name: 'Klorin (³⁵₁₇Cl)', p: 17, n: 18, shells: [2, 8, 7] },
  { symbol: 'Ca', name: 'Kalsium (⁴⁰₂₀Ca)', p: 20, n: 20, shells: [2, 8, 8, 2] },
] as const;

const ChemAtomicShellsSvg: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const atom = ATOMS[idx];
  const shellRadii = [34, 54, 74, 92];
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {ATOMS.map((a, i) => (
          <button
            key={a.symbol}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
              idx === i
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 600 220" className="w-full h-auto" role="img" aria-label="Rajah struktur atom dan susunan elektron">
        <rect width="600" height="220" fill="var(--svg-bg)" />
        {/* Left: Atom Structure */}
        <text x="155" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
          Rajah Struktur Atom (Tunjuk p &amp; n)
        </text>
        {atom.shells.map((count, sIdx) => {
          const r = shellRadii[sIdx];
          const isValence = sIdx === atom.shells.length - 1;
          return (
            <g key={sIdx}>
              <circle
                cx="155"
                cy="118"
                r={r}
                fill="none"
                stroke={isValence ? 'var(--svg-sky)' : 'var(--svg-muted)'}
                strokeWidth={isValence ? '1.8' : '1.2'}
                strokeDasharray={isValence ? undefined : '3 2'}
              />
              {Array.from({ length: count }).map((_, eIdx) => {
                const angle = (2 * Math.PI * eIdx) / count - Math.PI / 2;
                const ex = 155 + r * Math.cos(angle);
                const ey = 118 + r * Math.sin(angle);
                return (
                  <circle
                    key={eIdx}
                    cx={ex}
                    cy={ey}
                    r="3.8"
                    fill={isValence ? 'var(--svg-amber)' : 'var(--svg-sky)'}
                  />
                );
              })}
            </g>
          );
        })}
        <circle cx="155" cy="118" r="20" fill="var(--svg-red-tint)" stroke="var(--svg-red)" strokeWidth="1.5" />
        <text x="155" y="114" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-red-text)">
          {atom.p}p
        </text>
        <text x="155" y="126" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-red-text)">
          {atom.n}n
        </text>

        {/* Right: Summary Box */}
        <rect x="315" y="34" width="260" height="160" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
        <text x="332" y="58" fontSize="12" fontWeight="700" fill="var(--svg-sky-text)">
          {atom.name}
        </text>
        <text x="332" y="82" fontSize="11" fill="var(--svg-ink)">
          • Nombor Proton (Z) = {atom.p}
        </text>
        <text x="332" y="102" fontSize="11" fill="var(--svg-ink)">
          • Nombor Nukleon (A) = {atom.p + atom.n}
        </text>
        <text x="332" y="122" fontSize="11" fontWeight="700" fill="var(--svg-emerald)">
          • Susunan Elektron = {atom.shells.join('.')}
        </text>
        <text x="332" y="142" fontSize="11" fill="var(--svg-amber)">
          • Elektron Valens = {atom.shells[atom.shells.length - 1]} (Petala luar)
        </text>
        <text x="332" y="164" fontSize="10" fill="var(--svg-muted)">
          Bilangan petala = {atom.shells.length} (Kala {atom.shells.length})
        </text>
        <text x="332" y="180" fontSize="10" fill="var(--svg-muted)">
          Rajah susunan elektron tulis simbol {atom.symbol} di pusat.
        </text>
      </svg>
    </div>
  );
};

const ChemMoleBridgeSvg: React.FC = () => (
  <svg viewBox="0 0 640 205" className="w-full h-auto" role="img" aria-label="Jambatan Konsep Mol">
    <rect width="640" height="205" fill="var(--svg-bg)" />
    {/* Center MOL */}
    <rect x="245" y="75" width="150" height="55" rx="8" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
    <text x="320" y="100" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--svg-sky-deep)">
      BILANGAN MOL (n)
    </text>
    <text x="320" y="118" textAnchor="middle" fontSize="10" fill="var(--svg-ink)">
      Pusat Penukaran Stoikiometri
    </text>

    {/* Left: Particles */}
    <rect x="20" y="75" width="145" height="55" rx="8" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeWidth="1.6" />
    <text x="92" y="98" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-amber-text)">
      Bilangan Zarah
    </text>
    <text x="92" y="115" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
      (atom / molekul / ion)
    </text>
    <line x1="168" y1="92" x2="242" y2="92" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <text x="205" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
      ÷ Nₐ
    </text>
    <line x1="242" y1="114" x2="168" y2="114" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <text x="205" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      × Nₐ
    </text>

    {/* Top: Mass */}
    <rect x="245" y="8" width="150" height="44" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-emerald)" strokeWidth="1.6" />
    <text x="320" y="28" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-emerald)">
      Jisim Bahan (g)
    </text>
    <text x="320" y="43" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">
      Jisim Molar = JAR/JMR (g/mol)
    </text>
    <text x="290" y="66" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--svg-emerald)">
      ÷ Jisim Molar
    </text>
    <text x="350" y="66" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--svg-red)">
      × Jisim Molar
    </text>

    {/* Right: Volume of Gas */}
    <rect x="475" y="75" width="145" height="55" rx="8" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" strokeWidth="1.6" />
    <text x="547" y="96" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-sky-text)">
      Isi Padu Gas (dm³)
    </text>
    <text x="547" y="112" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
      STP: 22.4 dm³/mol
    </text>
    <text x="547" y="124" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
      Bilik: 24 dm³/mol
    </text>
    <line x1="398" y1="92" x2="472" y2="92" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <text x="435" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      × Vₘ
    </text>
    <line x1="472" y1="114" x2="398" y2="114" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <text x="435" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
      ÷ Vₘ
    </text>

    {/* Bottom: Molarity */}
    <rect x="215" y="152" width="210" height="44" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-amber)" strokeWidth="1.6" />
    <text x="320" y="171" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-amber-text)">
      Larutan Akueus: n = MV / 1000
    </text>
    <text x="320" y="186" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">
      M = Kemolaran (mol dm⁻³), V = Isi padu (cm³)
    </text>
  </svg>
);

const ChemPeriodicTrendsSvg: React.FC = () => {
  const [group, setGroup] = useState<'g1' | 'g17' | 'p3'>('g1');
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['g1', 'Kumpulan 1 (Logam Alkali)'],
            ['g17', 'Kumpulan 17 (Halogen)'],
            ['p3', 'Merentasi Kala 3 (Na → Ar)'],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setGroup(k)}
            className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
              group === k
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 600 190" className="w-full h-auto" role="img" aria-label="Trend kereaktifan dan saiz atom dalam Jadual Berkala">
        <rect width="600" height="190" fill="var(--svg-bg)" />
        {group !== 'p3' ? (
          <g>
            {(group === 'g1'
              ? [
                  { sym: 'Li (2.1)', r: 16, y: 42 },
                  { sym: 'Na (2.8.1)', r: 22, y: 92 },
                  { sym: 'K (2.8.8.1)', r: 28, y: 148 },
                ]
              : [
                  { sym: 'F₂ (2.7)', r: 15, y: 42 },
                  { sym: 'Cl₂ (2.8.7)', r: 21, y: 92 },
                  { sym: 'Br₂ (2.8.18.7)', r: 27, y: 148 },
                ]
            ).map((el) => (
              <g key={el.sym}>
                <circle
                  cx="110"
                  cy={el.y}
                  r={el.r}
                  fill={group === 'g1' ? 'var(--svg-sky-tint)' : 'var(--svg-amber-tint)'}
                  stroke={group === 'g1' ? 'var(--svg-sky)' : 'var(--svg-amber)'}
                  strokeWidth="1.8"
                />
                <text x="160" y={el.y + 4} fontSize="11.5" fontWeight="700" fill="var(--svg-ink)">
                  {el.sym}
                </text>
              </g>
            ))}
            <line x1="42" y1="30" x2="42" y2="165" stroke="var(--svg-red)" strokeWidth="2.5" />
            <polygon points="42,172 36,160 48,160" fill="var(--svg-red)" />
            <text x="50" y="102" fontSize="10" fontWeight="700" fill="var(--svg-red)">
              Menuruni Kumpulan
            </text>
            <rect x="285" y="25" width="295" height="140" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
            <text x="302" y="50" fontSize="11.5" fontWeight="700" fill="var(--svg-sky-text)">
              {group === 'g1'
                ? 'Kereaktifan Kumpulan 1 MENINGKAT ↓'
                : 'Kereaktifan Kumpulan 17 BERKURANG ↓'}
            </text>
            <text x="302" y="75" fontSize="10.5" fill="var(--svg-ink)">
              1. Bilangan petala berisi elektron bertambah
            </text>
            <text x="302" y="96" fontSize="10.5" fill="var(--svg-ink)">
              2. Saiz atom bertambah &amp; jarak ke nukleus jauh
            </text>
            <text x="302" y="117" fontSize="10.5" fill="var(--svg-ink)">
              3. Daya tarikan nukleus ke atas e⁻ valens lemah
            </text>
            <text x="302" y="142" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">
              {group === 'g1'
                ? '4. Lebih MUDAH melepaskan 1 e⁻ valens'
                : '4. Lebih SUKAR menarik 1 e⁻ ke petala luar'}
            </text>
          </g>
        ) : (
          <g>
            {[
              { s: 'Na', r: 24, x: 55, c: 'var(--svg-sky)' },
              { s: 'Mg', r: 21, x: 120, c: 'var(--svg-sky)' },
              { s: 'Al', r: 19, x: 185, c: 'var(--svg-sky)' },
              { s: 'Si', r: 17, x: 250, c: 'var(--svg-amber)' },
              { s: 'P', r: 15, x: 315, c: 'var(--svg-red)' },
              { s: 'S', r: 14, x: 380, c: 'var(--svg-red)' },
              { s: 'Cl', r: 12, x: 445, c: 'var(--svg-red)' },
              { s: 'Ar', r: 11, x: 510, c: 'var(--svg-emerald)' },
            ].map((el) => (
              <g key={el.s}>
                <circle cx={el.x} cy="65" r={el.r} fill="var(--svg-subtle)" stroke={el.c} strokeWidth="2" />
                <text x={el.x} y="69" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
                  {el.s}
                </text>
              </g>
            ))}
            <text x="285" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
              Jejari atom BERKURANG (Z bertambah, bilangan petala kekal 3) → Keelektronegatifan MENINGKAT
            </text>
            <rect x="40" y="128" width="175" height="44" rx="6" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
            <text x="127" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">
              Na₂O, MgO: Oksida Bes
            </text>
            <text x="127" y="162" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              Bertindak balas dengan asid
            </text>
            <rect x="225" y="128" width="145" height="44" rx="6" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" />
            <text x="297" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber-text)">
              Al₂O₃: Amfoterik
            </text>
            <text x="297" y="162" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              Larut dlm asid &amp; alkali
            </text>
            <rect x="380" y="128" width="185" height="44" rx="6" fill="var(--svg-red-tint)" stroke="var(--svg-red)" />
            <text x="472" y="147" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red-text)">
              SiO₂ → Cl₂O₇: Oksida Asid
            </text>
            <text x="472" y="162" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">
              Bertindak balas dengan alkali
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

const ChemIonicCovalentSvg: React.FC = () => {
  const [tab, setTab] = useState<'ion' | 'cov' | 'datif'>('ion');
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['ion', 'Ikatan Ion (NaCl)'],
            ['cov', 'Ikatan Kovalen (Cl₂)'],
            ['datif', 'Ikatan Datif (NH₄⁺)'],
          ] as const
        ).map(([k, lbl]) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
              tab === k
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 600 185" className="w-full h-auto" role="img" aria-label="Pembentukan ikatan kimia">
        <rect width="600" height="185" fill="var(--svg-bg)" />
        {tab === 'ion' && (
          <g>
            <circle cx="135" cy="95" r="46" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
            <text x="135" y="99" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-sky-deep)">
              [Na]⁺
            </text>
            <text x="135" y="158" textAnchor="middle" fontSize="10.5" fill="var(--svg-ink)">
              Kation (2.8) · Derma 1 e⁻
            </text>
            <path d="M 190 78 Q 250 45 310 78" fill="none" stroke="var(--svg-red)" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="250" y="55" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">
              Pemindahan 1 e⁻ →
            </text>
            <text x="250" y="102" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
              Daya Elektrostatik Kuat
            </text>
            <circle cx="375" cy="95" r="52" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeWidth="2" />
            <text x="375" y="99" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-amber-text)">
              [Cl]⁻
            </text>
            <text x="375" y="164" textAnchor="middle" fontSize="10.5" fill="var(--svg-ink)">
              Anion (2.8.8) · Terima 1 e⁻
            </text>
            <text x="515" y="95" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
              Kekisi Ion Raksasa
            </text>
            <text x="515" y="113" textAnchor="middle" fontSize="10" fill="var(--svg-muted)">
              Lebur/Akueus: Ion bebas
            </text>
          </g>
        )}
        {tab === 'cov' && (
          <g>
            <circle cx="170" cy="95" r="58" fill="none" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <circle cx="255" cy="95" r="58" fill="none" stroke="var(--svg-emerald)" strokeWidth="2.2" />
            <text x="142" y="99" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-ink)">
              Cl
            </text>
            <text x="283" y="99" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-ink)">
              Cl
            </text>
            <circle cx="212" cy="84" r="4.5" fill="var(--svg-red)" />
            <circle cx="212" cy="106" r="4.5" fill="var(--svg-amber)" />
            <text x="212" y="168" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">
              Sepasang elektron dikongsi (Ikatan Tunggal Cl–Cl)
            </text>
            <rect x="360" y="38" width="215" height="105" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
            <text x="375" y="62" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
              Molekul Ringkas Kovalen
            </text>
            <text x="375" y="84" fontSize="10" fill="var(--svg-muted)">
              • Antara bukan logam + bukan logam
            </text>
            <text x="375" y="102" fontSize="10" fill="var(--svg-muted)">
              • Daya van der Waals lemah antara molekul
            </text>
            <text x="375" y="120" fontSize="10" fill="var(--svg-muted)">
              • Takat lebur rendah &amp; tidak konduksikan elektrik
            </text>
          </g>
        )}
        {tab === 'datif' && (
          <g>
            <rect x="35" y="42" width="530" height="110" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-sky)" />
            <text x="300" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--svg-ink)">
              H₃N: (Pasangan elektron bebas)  +  H⁺ (Tiada elektron)  →  [NH₄]⁺
            </text>
            <text x="300" y="98" textAnchor="middle" fontSize="11" fill="var(--svg-sky-text)" fontWeight="600">
              Kedua-dua elektron yang dikongsi berasal daripada atom Nitrogen (N) sahaja!
            </text>
            <text x="300" y="124" textAnchor="middle" fontSize="10.5" fill="var(--svg-emerald)">
              N mencapai susunan oktet (8) manakala keempat-empat H mencapai susunan duplet (2).
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

const ChemPhTitrationSvg: React.FC = () => (
  <svg viewBox="0 0 600 190" className="w-full h-auto" role="img" aria-label="Skala pH dan lengkung pentitratan">
    <rect width="600" height="190" fill="var(--svg-bg)" />
    {/* pH Scale Bar */}
    <text x="20" y="22" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      Skala pH = −log [H⁺] (Larutan Akueus 25°C)
    </text>
    <rect x="20" y="30" width="240" height="22" fill="var(--svg-red-tint)" stroke="var(--svg-red)" />
    <rect x="260" y="30" width="40" height="22" fill="var(--svg-subtle)" stroke="var(--svg-emerald)" strokeWidth="2" />
    <rect x="300" y="30" width="280" height="22" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
    <text x="140" y="45" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red-text)">
      ASID (pH 0–6): [H⁺] tinggi
    </text>
    <text x="280" y="45" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">
      7
    </text>
    <text x="440" y="45" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-deep)">
      ALKALI (pH 8–14): [OH⁻] tinggi
    </text>

    {/* Titration Curve */}
    <line x1="65" y1="168" x2="65" y2="70" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="65" y1="168" x2="295" y2="168" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <path d="M 75 82 Q 165 84 180 120 Q 192 158 280 160" fill="none" stroke="var(--svg-sky)" strokeWidth="2.8" />
    <circle cx="180" cy="120" r="5" fill="var(--svg-red)" />
    <text x="195" y="118" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      Takat Akhir (pH = 7)
    </text>
    <text x="60" y="75" textAnchor="end" fontSize="10" fill="var(--svg-ink)">pH</text>
    <text x="295" y="182" textAnchor="end" fontSize="10" fill="var(--svg-ink)">Isi padu asid (cm³)</text>

    {/* Indicators box */}
    <rect x="320" y="70" width="260" height="105" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
    <text x="335" y="92" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      Formula &amp; Petunjuk Pentitratan
    </text>
    <text x="335" y="114" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">
      MₐVₐ / M_bV_b = a / b  (H⁺ + OH⁻ → H₂O)
    </text>
    <text x="335" y="135" fontSize="10" fill="var(--svg-ink)">
      • Fenolftalein: Merah jambu (alkali) → Tak berwarna
    </text>
    <text x="335" y="153" fontSize="10" fill="var(--svg-ink)">
      • Metil jingga: Kuning (alkali) → Jingga (neutral)
    </text>
  </svg>
);

const ChemQualitativeAnalysisSvg: React.FC = () => (
  <svg viewBox="0 0 640 205" className="w-full h-auto" role="img" aria-label="Analisis kualitatif kation dengan NaOH dan NH3">
    <rect width="640" height="205" fill="var(--svg-bg)" />
    <text x="320" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--svg-ink)">
      Ujian Kation: Tambah NaOH(ak) atau NH₃(ak) Sedikit demi Sedikit hingga Berlebihan
    </text>
    <rect x="20" y="34" width="185" height="158" rx="6" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
    <text x="112" y="54" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">
      Tiada Mendakan
    </text>
    <text x="32" y="76" fontSize="10" fill="var(--svg-ink)">• NH₄⁺ (+ panas): Bebas gas NH₃</text>
    <text x="32" y="94" fontSize="10" fill="var(--svg-muted)">  (kertas litmus merah → biru)</text>
    <text x="32" y="118" fontSize="10" fill="var(--svg-ink)">• Ca²⁺ dalam NH₃(ak):</text>
    <text x="32" y="134" fontSize="10" fill="var(--svg-muted)">  Tiada mendakan (OH⁻ rendah)</text>

    <rect x="220" y="34" width="215" height="158" rx="6" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" />
    <text x="327" y="54" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-amber-text)">
      Mendakan Putih (Larut vs Tak Larut)
    </text>
    <text x="232" y="76" fontSize="10" fontWeight="700" fill="var(--svg-ink)">• Mg²⁺, Ca²⁺: Tak larut dlm NaOH lebih</text>
    <text x="232" y="96" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">• Zn²⁺: Larut dlm NaOH &amp; NH₃ lebih</text>
    <text x="232" y="116" fontSize="10" fontWeight="700" fill="var(--svg-red-text)">• Al³⁺, Pb²⁺: Larut dlm NaOH lebih,</text>
    <text x="232" y="132" fontSize="10" fill="var(--svg-ink)">  TAK larut dlm NH₃ lebih</text>
    <text x="232" y="156" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Bezakan Al³⁺ vs Pb²⁺ (+ KI):</text>
    <text x="232" y="172" fontSize="10" fill="var(--svg-ink)">Pb²⁺ → mendakan kuning PbI₂</text>

    <rect x="450" y="34" width="170" height="158" rx="6" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
    <text x="535" y="54" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-deep)">
      Mendakan Berwarna
    </text>
    <text x="462" y="78" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">• Fe²⁺: Hijau (tak larut)</text>
    <text x="462" y="102" fontSize="10" fontWeight="700" fill="var(--svg-red)">• Fe³⁺: Perang (tak larut)</text>
    <text x="462" y="126" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">• Cu²⁺: Biru</text>
    <text x="462" y="144" fontSize="9.5" fill="var(--svg-ink)">  Larut dlm NH₃ lebih →</text>
    <text x="462" y="158" fontSize="9.5" fontWeight="700" fill="var(--svg-sky-deep)">  larutan biru tua</text>
  </svg>
);

const ChemCollisionEnergySvg: React.FC = () => {
  const [catalyst, setCatalyst] = useState(true);
  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setCatalyst((c) => !c)}
        className="rounded border border-sky-600 bg-sky-600 px-3 py-1 text-xs font-semibold text-white cursor-pointer"
      >
        {catalyst ? 'Sembunyikan Laluan Mangkin (Eₐ\')' : 'Tunjukkan Laluan Mangkin (Eₐ\')'}
      </button>
      <svg viewBox="0 0 600 205" className="w-full h-auto" role="img" aria-label="Gambar rajah profil tenaga dan teori perlanggaran">
        <rect width="600" height="205" fill="var(--svg-bg)" />
        <line x1="65" y1="175" x2="65" y2="25" stroke="var(--svg-ink)" strokeWidth="1.5" />
        <line x1="65" y1="175" x2="555" y2="175" stroke="var(--svg-ink)" strokeWidth="1.5" />
        <text x="58" y="30" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Tenaga</text>
        <text x="548" y="192" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Lintasan Tindak Balas</text>

        {/* Reactants & Products */}
        <line x1="90" y1="100" x2="180" y2="100" stroke="var(--svg-ink)" strokeWidth="2.5" />
        <text x="135" y="92" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Bahan Tindak Balas</text>
        <line x1="395" y1="145" x2="500" y2="145" stroke="var(--svg-ink)" strokeWidth="2.5" />
        <text x="447" y="160" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Hasil (ΔH negatif)</text>

        {/* Uncatalysed curve */}
        <path d="M 180 100 Q 285 8 395 145" fill="none" stroke="var(--svg-red)" strokeWidth="2.8" />
        <line x1="285" y1="100" x2="285" y2="42" stroke="var(--svg-red)" strokeDasharray="3 3" strokeWidth="1.5" />
        <text x="292" y="54" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">Eₐ (Tanpa mangkin)</text>

        {catalyst && (
          <g>
            <path d="M 180 100 Q 285 55 395 145" fill="none" stroke="var(--svg-emerald)" strokeWidth="2.8" strokeDasharray="6 3" />
            <text x="335" y="90" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">Eₐ&apos; (Dengan mangkin)</text>
          </g>
        )}

        <line x1="180" y1="100" x2="395" y2="100" stroke="var(--svg-muted)" strokeDasharray="3 3" strokeWidth="1" />
        <text x="455" y="126" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">ΔH tidak berubah</text>
      </svg>
    </div>
  );
};

const ChemAlloyLatticeSvg: React.FC = () => (
  <svg viewBox="0 0 600 185" className="w-full h-auto" role="img" aria-label="Susunan atom dalam logam tulen vs aloi">
    <rect width="600" height="185" fill="var(--svg-bg)" />
    {/* Pure Metal */}
    <text x="145" y="22" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-ink)">
      Logam Tulen (Lebih Lembut)
    </text>
    {[0, 1, 2].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <circle
          key={`p-${row}-${col}`}
          cx={65 + col * 40}
          cy={55 + row * 36}
          r="15"
          fill="var(--svg-sky-tint)"
          stroke="var(--svg-sky)"
          strokeWidth="1.6"
        />
      ))
    )}
    <text x="145" y="170" textAnchor="middle" fontSize="10" fill="var(--svg-muted)">
      Atom sama saiz · Lapisan mudah menggelongsor
    </text>

    {/* Alloy */}
    <text x="455" y="22" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-ink)">
      Aloi (Lebih Keras &amp; Kuat)
    </text>
    {[
      { x: 375, y: 55, r: 15, f: false },
      { x: 415, y: 55, r: 15, f: false },
      { x: 455, y: 50, r: 20, f: true },
      { x: 498, y: 55, r: 15, f: false },
      { x: 535, y: 55, r: 15, f: false },
      { x: 375, y: 95, r: 15, f: false },
      { x: 415, y: 95, r: 15, f: false },
      { x: 455, y: 98, r: 15, f: false },
      { x: 495, y: 95, r: 15, f: false },
      { x: 535, y: 95, r: 15, f: false },
      { x: 375, y: 132, r: 15, f: false },
      { x: 418, y: 134, r: 10, f: true },
      { x: 455, y: 132, r: 15, f: false },
      { x: 495, y: 132, r: 15, f: false },
      { x: 535, y: 132, r: 15, f: false },
    ].map((a, i) => (
      <circle
        key={i}
        cx={a.x}
        cy={a.y}
        r={a.r}
        fill={a.f ? 'var(--svg-amber-tint)' : 'var(--svg-sky-tint)'}
        stroke={a.f ? 'var(--svg-amber)' : 'var(--svg-sky)'}
        strokeWidth="1.6"
      />
    ))}
    <text x="455" y="170" textAnchor="middle" fontSize="10" fill="var(--svg-amber-text)" fontWeight="600">
      Atom asing ganggu susunan teratur → sukar gelongsor
    </text>
  </svg>
);

const ChemRedoxUTubeSvg: React.FC = () => (
  <svg viewBox="0 0 600 205" className="w-full h-auto" role="img" aria-label="Pemindahan elektron pada suatu jarak dalam Tiub-U">
    <rect width="600" height="205" fill="var(--svg-bg)" />
    {/* Galvanometer & Wire */}
    <polyline points="210,65 210,26 390,26 390,65" fill="none" stroke="var(--svg-ink)" strokeWidth="2" />
    <circle cx="300" cy="26" r="16" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeWidth="2" />
    <text x="300" y="30" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--svg-amber-text)">G</text>
    <text x="300" y="54" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      Aliran elektron (e⁻) dari − ke + →
    </text>

    {/* U-Tube */}
    <path d="M 192 65 L 192 150 Q 192 180 300 180 Q 408 180 408 150 L 408 65" fill="none" stroke="var(--svg-muted)" strokeWidth="24" strokeLinecap="round" />
    <path d="M 192 65 L 192 150 Q 192 180 300 180 Q 408 180 408 150 L 408 65" fill="none" stroke="var(--svg-sky-tint)" strokeWidth="20" strokeLinecap="round" />

    {/* Electrodes */}
    <rect x="204" y="55" width="12" height="75" fill="var(--svg-ink)" />
    <rect x="384" y="55" width="12" height="75" fill="var(--svg-ink)" />

    <text x="12" y="95" textAnchor="start" fontSize="10" fontWeight="700" fill="var(--svg-red)">Terminal Negatif (Pengoksidaan)</text>
    <text x="12" y="111" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">Fe²⁺ → Fe³⁺ + e⁻</text>
    <text x="12" y="126" textAnchor="start" fontSize="9.5" fill="var(--svg-muted)">Hijau pucat → Perang</text>

    <text x="588" y="95" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Terminal Positif (Penurunan)</text>
    <text x="588" y="111" textAnchor="end" fontSize="9.5" fill="var(--svg-ink)">MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</text>
    <text x="588" y="126" textAnchor="end" fontSize="9.5" fill="var(--svg-muted)">Ungu → Tidak berwarna</text>

    <text x="300" y="199" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-text)">
      Asid sulfurik cair H₂SO₄ membenarkan pergerakan ion untuk melengkapkan litar
    </text>
  </svg>
);

const ChemDaniellCellSvg: React.FC = () => (
  <svg viewBox="0 0 600 205" className="w-full h-auto" role="img" aria-label="Sel Kimia Sel Daniell Zn Cu">
    <rect width="600" height="205" fill="var(--svg-bg)" />
    <polyline points="150,55 150,24 450,24 450,55" fill="none" stroke="var(--svg-ink)" strokeWidth="2" />
    <circle cx="300" cy="24" r="16" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
    <text x="300" y="28" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--svg-sky-deep)">V</text>
    <text x="300" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      Aliran e⁻: Zn → Cu | E⁰sel = +0.34 − (−0.76) = +1.10 V
    </text>

    {/* Left Beaker: Zn */}
    <rect x="85" y="75" width="130" height="95" fill="var(--svg-subtle)" stroke="var(--svg-muted)" strokeWidth="1.5" />
    <rect x="87" y="102" width="126" height="66" fill="var(--svg-sky-tint)" />
    <rect x="142" y="55" width="16" height="95" fill="var(--svg-muted)" />
    <text x="150" y="186" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">
      Anod (−): Zn → Zn²⁺ + 2e⁻
    </text>
    <text x="150" y="199" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">
      (E⁰ = −0.76 V lebih negatif)
    </text>

    {/* Salt Bridge */}
    <path d="M 188 128 L 188 78 L 412 78 L 412 128" fill="none" stroke="var(--svg-amber)" strokeWidth="14" strokeLinecap="round" />
    <text x="300" y="82" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-ink)">
      Titian Garam (KNO₃)
    </text>

    {/* Right Beaker: Cu */}
    <rect x="385" y="75" width="130" height="95" fill="var(--svg-subtle)" stroke="var(--svg-muted)" strokeWidth="1.5" />
    <rect x="387" y="102" width="126" height="66" fill="var(--svg-sky-tint)" />
    <rect x="442" y="55" width="16" height="95" fill="var(--svg-amber)" />
    <text x="450" y="186" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">
      Katod (+): Cu²⁺ + 2e⁻ → Cu
    </text>
    <text x="450" y="199" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">
      (E⁰ = +0.34 V lebih positif)
    </text>
  </svg>
);

const ChemElectrolysisCellSvg: React.FC = () => {
  const [mode, setMode] = useState<'dilute' | 'conc'>('dilute');
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setMode('dilute')}
          className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
            mode === 'dilute'
              ? 'border-sky-600 bg-sky-600 text-white'
              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
        >
          NaCl Cair (0.0001 mol dm⁻³)
        </button>
        <button
          type="button"
          onClick={() => setMode('conc')}
          className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
            mode === 'conc'
              ? 'border-sky-600 bg-sky-600 text-white'
              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
        >
          NaCl Pekat (1.0 mol dm⁻³)
        </button>
      </div>
      <svg viewBox="0 0 600 195" className="w-full h-auto" role="img" aria-label="Sel elektrolisis larutan akueus">
        <rect width="600" height="195" fill="var(--svg-bg)" />
        {/* Battery & Wires */}
        <polyline points="222,52 222,22 285,22" fill="none" stroke="var(--svg-ink)" strokeWidth="2" />
        <polyline points="378,52 378,22 315,22" fill="none" stroke="var(--svg-ink)" strokeWidth="2" />
        <line x1="285" y1="12" x2="285" y2="32" stroke="var(--svg-red)" strokeWidth="3" />
        <line x1="295" y1="16" x2="295" y2="28" stroke="var(--svg-ink)" strokeWidth="2" />
        <text x="275" y="16" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-red)">+</text>
        <text x="322" y="16" textAnchor="start" fontSize="11" fontWeight="700" fill="var(--svg-sky)">−</text>

        {/* Beaker */}
        <rect x="172" y="65" width="256" height="115" fill="var(--svg-subtle)" stroke="var(--svg-muted)" strokeWidth="1.5" />
        <rect x="174" y="92" width="252" height="86" fill="var(--svg-sky-tint)" />
        <rect x="214" y="52" width="16" height="96" fill="var(--svg-ink)" />
        <rect x="370" y="52" width="16" height="96" fill="var(--svg-ink)" />

        <text x="12" y="88" textAnchor="start" fontSize="10" fontWeight="700" fill="var(--svg-red)">
          ANOD (+) · Pengoksidaan
        </text>
        <text x="12" y="106" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">
          Ion hadir: OH⁻, Cl⁻
        </text>
        <text x="12" y="124" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--svg-emerald)">
          {mode === 'dilute'
            ? 'OH⁻ dipilih (E⁰ lebih rendah)'
            : 'Cl⁻ dipilih (Kepekatan tinggi)'}
        </text>
        <text x="12" y="142" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">
          {mode === 'dilute' ? 'Hasil: Gas Oksigen, O₂' : 'Hasil: Gas Klorin, Cl₂'}
        </text>

        <text x="442" y="88" textAnchor="start" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">
          KATOD (−) · Penurunan
        </text>
        <text x="442" y="106" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">
          Ion hadir: Na⁺, H⁺
        </text>
        <text x="442" y="124" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--svg-emerald)">
          H⁺ dipilih (E⁰ lebih tinggi)
        </text>
        <text x="442" y="142" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">
          Hasil: Gas Hidrogen, H₂
        </text>
      </svg>
    </div>
  );
};

const ChemRustingCellSvg: React.FC = () => (
  <svg viewBox="0 0 600 190" className="w-full h-auto" role="img" aria-label="Mekanisme pengaratan besi">
    <rect width="600" height="190" fill="var(--svg-bg)" />
    {/* Iron block */}
    <rect x="55" y="115" width="490" height="45" fill="var(--svg-muted)" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <text x="300" y="143" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--svg-bg)">
      Logam Besi (Fe)
    </text>
    {/* Water droplet */}
    <path d="M 140 115 Q 300 18 460 115 Z" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
    <text x="300" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-sky-deep)">
      Titisan Air (H₂O) + Oksigen Terlarut (O₂)
    </text>

    {/* Anode center */}
    <text x="300" y="96" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">
      Anod (Kurang O₂): Fe → Fe²⁺ + 2e⁻
    </text>
    {/* Electron arrows */}
    <line x1="250" y1="125" x2="170" y2="125" stroke="var(--svg-amber)" strokeWidth="2" />
    <line x1="350" y1="125" x2="430" y2="125" stroke="var(--svg-amber)" strokeWidth="2" />
    <text x="210" y="121" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-amber)">← e⁻</text>
    <text x="390" y="121" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-amber)">e⁻ →</text>

    {/* Cathodes at edges */}
    <text x="125" y="62" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
      Katod (Hujung, kaya O₂)
    </text>
    <text x="125" y="77" textAnchor="end" fontSize="9.5" fill="var(--svg-ink)">
      O₂ + 2H₂O + 4e⁻ → 4OH⁻
    </text>
    <text x="475" y="62" textAnchor="start" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
      Karat Terbentuk:
    </text>
    <text x="475" y="77" textAnchor="start" fontSize="9.5" fill="var(--svg-ink)">
      Fe²⁺ + 2OH⁻ → Fe(OH)₂
    </text>
    <text x="475" y="92" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--svg-red)">
      → Fe₂O₃·xH₂O (perang)
    </text>
  </svg>
);

const ChemHomologFlowchartSvg: React.FC = () => (
  <svg viewBox="0 0 640 205" className="w-full h-auto" role="img" aria-label="Peta alir saling pertukaran siri homolog sebatian karbon">
    <rect width="640" height="205" fill="var(--svg-bg)" />
    {/* Alkana */}
    <rect x="20" y="25" width="125" height="52" rx="6" fill="var(--svg-subtle)" stroke="var(--svg-muted)" strokeWidth="1.6" />
    <text x="82" y="48" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-ink)">Alkana</text>
    <text x="82" y="65" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">CₙH₂ₙ₊₂ (C–C)</text>

    {/* Alkena */}
    <rect x="205" y="25" width="135" height="52" rx="6" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeWidth="1.6" />
    <text x="272" y="48" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-amber-text)">Alkena</text>
    <text x="272" y="65" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">CₙH₂ₙ (C=C)</text>

    {/* Alkohol */}
    <rect x="415" y="25" width="150" height="52" rx="6" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1.6" />
    <text x="490" y="48" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-sky-deep)">Alkohol</text>
    <text x="490" y="65" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">CₙH₂ₙ₊₁OH (–OH)</text>

    {/* Asid Karboksilik */}
    <rect x="415" y="135" width="155" height="52" rx="6" fill="var(--svg-red-tint)" stroke="var(--svg-red)" strokeWidth="1.6" />
    <text x="492" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-red-text)">Asid Karboksilik</text>
    <text x="492" y="175" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">–COOH</text>

    {/* Ester */}
    <rect x="195" y="135" width="155" height="52" rx="6" fill="var(--svg-subtle)" stroke="var(--svg-emerald)" strokeWidth="1.8" />
    <text x="272" y="158" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-emerald)">Ester</text>
    <text x="272" y="175" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">–COO– (Bau wangi buah)</text>

    {/* Arrows */}
    <line x1="205" y1="50" x2="148" y2="50" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <text x="176" y="42" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--svg-emerald)">← +H₂ (Ni)</text>

    <line x1="340" y1="40" x2="412" y2="40" stroke="var(--svg-sky)" strokeWidth="1.6" />
    <text x="376" y="33" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--svg-sky-text)">+H₂O (H₃PO₄) →</text>
    <line x1="412" y1="62" x2="340" y2="62" stroke="var(--svg-red)" strokeWidth="1.6" />
    <text x="376" y="76" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--svg-red)">← Pendehidratan</text>

    <line x1="490" y1="77" x2="490" y2="132" stroke="var(--svg-red)" strokeWidth="1.6" />
    <text x="500" y="109" fontSize="9.5" fontWeight="700" fill="var(--svg-red)">Pengoksidaan (KMnO₄/H⁺)</text>

    <line x1="415" y1="162" x2="352" y2="162" stroke="var(--svg-emerald)" strokeWidth="1.6" />
    <text x="383" y="154" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--svg-emerald)">+Alkohol (H₂SO₄)</text>
  </svg>
);

const ChemThermochemistryLevelsSvg: React.FC = () => (
  <svg viewBox="0 0 600 185" className="w-full h-auto" role="img" aria-label="Gambar rajah aras tenaga eksotermik dan endotermik">
    <rect width="600" height="185" fill="var(--svg-bg)" />
    {/* Exo */}
    <text x="150" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-red)">
      Tindak Balas Eksotermik (ΔH = −ve)
    </text>
    <line x1="55" y1="160" x2="55" y2="35" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <text x="48" y="40" textAnchor="end" fontSize="10" fill="var(--svg-ink)">Tenaga</text>
    <line x1="75" y1="58" x2="215" y2="58" stroke="var(--svg-ink)" strokeWidth="2.5" />
    <text x="145" y="50" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Bahan tindak balas (cth: H⁺ + OH⁻)</text>
    <line x1="75" y1="138" x2="215" y2="138" stroke="var(--svg-ink)" strokeWidth="2.5" />
    <text x="145" y="154" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Hasil tindak balas (H₂O)</text>
    <line x1="145" y1="60" x2="145" y2="133" stroke="var(--svg-red)" strokeWidth="2.2" />
    <polygon points="145,137 140,127 150,127" fill="var(--svg-red)" />
    <text x="155" y="102" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">ΔH = −57 kJ mol⁻¹ (Haba dibebas)</text>

    {/* Endo */}
    <text x="450" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--svg-sky)">
      Tindak Balas Endotermik (ΔH = +ve)
    </text>
    <line x1="355" y1="160" x2="355" y2="35" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <text x="348" y="40" textAnchor="end" fontSize="10" fill="var(--svg-ink)">Tenaga</text>
    <line x1="375" y1="138" x2="515" y2="138" stroke="var(--svg-ink)" strokeWidth="2.5" />
    <text x="445" y="154" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Bahan (cth: CaCO₃)</text>
    <line x1="375" y1="58" x2="515" y2="58" stroke="var(--svg-ink)" strokeWidth="2.5" />
    <text x="445" y="50" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Hasil (CaO + CO₂)</text>
    <line x1="445" y1="136" x2="445" y2="63" stroke="var(--svg-sky)" strokeWidth="2.2" />
    <polygon points="445,59 440,69 450,69" fill="var(--svg-sky)" />
    <text x="455" y="102" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">ΔH = +ve (Haba diserap)</text>
  </svg>
);

const ChemLatexCoagulationSvg: React.FC = () => (
  <svg viewBox="0 0 600 185" className="w-full h-auto" role="img" aria-label="Penggumpalan lateks dan rangkai silang sulfur">
    <rect width="600" height="185" fill="var(--svg-bg)" />
    <text x="150" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      1. Lateks Asli (Tolakan Cas −)
    </text>
    {[
      { x: 95, y: 80 },
      { x: 205, y: 80 },
    ].map((c, idx) => (
      <g key={idx}>
        <circle cx={c.x} cy={c.y} r="28" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
        <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">Getah</text>
        <text x={c.x - 34} y={c.y} fontSize="11" fontWeight="700" fill="var(--svg-red)">−</text>
        <text x={c.x + 28} y={c.y} fontSize="11" fontWeight="700" fill="var(--svg-red)">−</text>
      </g>
    ))}
    <text x="150" y="138" textAnchor="middle" fontSize="10" fill="var(--svg-muted)">
      + Asid (H⁺) meneutralkan cas negatif
    </text>
    <text x="150" y="154" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">
      → Zarah berlanggar, pecah &amp; bergumpal!
    </text>

    {/* Vulcanised rubber */}
    <text x="455" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      2. Getah Tervulkan (Rangkai Silang Sulfur)
    </text>
    <path d="M 355 58 Q 405 42 455 58 Q 505 74 555 58" fill="none" stroke="var(--svg-ink)" strokeWidth="2.5" />
    <path d="M 355 115 Q 405 99 455 115 Q 505 131 555 115" fill="none" stroke="var(--svg-ink)" strokeWidth="2.5" />
    {[395, 495].map((x) => (
      <g key={x}>
        <line x1={x} y1="53" x2={x} y2="118" stroke="var(--svg-amber)" strokeWidth="2.5" />
        <circle cx={x} cy="75" r="7" fill="var(--svg-amber)" />
        <text x={x} y="78" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff">S</text>
        <circle cx={x} cy="97" r="7" fill="var(--svg-amber)" />
        <text x={x} y="100" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff">S</text>
      </g>
    ))}
    <text x="455" y="148" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">
      Rangkai silang –S–S– halang rantai polimer menggelongsor
    </text>
    <text x="455" y="164" textAnchor="middle" fontSize="9.5" fill="var(--svg-muted)">
      Lebih kenyal, kuat &amp; tahan haba tinggi
    </text>
  </svg>
);

const ChemSoapMicelleSvg: React.FC = () => (
  <svg viewBox="0 0 600 185" className="w-full h-auto" role="img" aria-label="Tindakan pencucian sabun dan detergen pada gris">
    <rect width="600" height="185" fill="var(--svg-bg)" />
    {/* Soap ion anatomy */}
    <rect x="20" y="25" width="245" height="135" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" />
    <text x="142" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      Struktur Anion Sabun (RCOO⁻)
    </text>
    <path d="M 48 86 Q 68 74 88 86 Q 108 98 128 86 Q 148 74 168 86" fill="none" stroke="var(--svg-amber)" strokeWidth="3" />
    <circle cx="182" cy="86" r="14" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="2" />
    <text x="182" y="90" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--svg-sky-deep)">−</text>
    <text x="108" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber-text)">
      Ekor Hidrofobik (Larut gris)
    </text>
    <text x="182" y="132" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-text)">
      Kepala Hidrofilik (Larut air)
    </text>

    {/* Grease droplet lifted */}
    <text x="440" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">
      Gris Dipecah &amp; Terapung (Emulsi)
    </text>
    <rect x="305" y="138" width="270" height="22" fill="var(--svg-muted)" />
    <text x="440" y="153" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-bg)">
      Permukaan Kain
    </text>
    <circle cx="440" cy="88" r="24" fill="var(--svg-amber)" fillOpacity="0.85" />
    <text x="440" y="92" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff">Gris</text>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 440 + 22 * Math.cos(rad);
      const y1 = 88 + 22 * Math.sin(rad);
      const x2 = 440 + 44 * Math.cos(rad);
      const y2 = 88 + 44 * Math.sin(rad);
      return (
        <g key={deg}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--svg-amber)" strokeWidth="2.2" />
          <circle cx={x2} cy={y2} r="5.5" fill="var(--svg-sky)" />
        </g>
      );
    })}
  </svg>
);

export const ChemistryDiagram: React.FC<ChemistryDiagramProps> = ({ kind }) => {
  switch (kind) {
    case 'chem-heating-cooling-curve':
      return <ChemHeatingCoolingCurveSvg />;
    case 'chem-atomic-shells':
      return <ChemAtomicShellsSvg />;
    case 'chem-mole-bridge':
      return <ChemMoleBridgeSvg />;
    case 'chem-periodic-trends':
      return <ChemPeriodicTrendsSvg />;
    case 'chem-ionic-covalent-bonds':
      return <ChemIonicCovalentSvg />;
    case 'chem-ph-titration':
      return <ChemPhTitrationSvg />;
    case 'chem-qualitative-analysis':
      return <ChemQualitativeAnalysisSvg />;
    case 'chem-collision-energy':
      return <ChemCollisionEnergySvg />;
    case 'chem-alloy-lattice':
      return <ChemAlloyLatticeSvg />;
    case 'chem-redox-u-tube':
      return <ChemRedoxUTubeSvg />;
    case 'chem-daniell-cell':
      return <ChemDaniellCellSvg />;
    case 'chem-electrolysis-cell':
      return <ChemElectrolysisCellSvg />;
    case 'chem-rusting-cell':
      return <ChemRustingCellSvg />;
    case 'chem-homolog-flowchart':
      return <ChemHomologFlowchartSvg />;
    case 'chem-thermochemistry-levels':
      return <ChemThermochemistryLevelsSvg />;
    case 'chem-latex-coagulation':
      return <ChemLatexCoagulationSvg />;
    case 'chem-soap-micelle':
      return <ChemSoapMicelleSvg />;
    default:
      return null;
  }
};
