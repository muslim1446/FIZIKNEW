import React, { useState } from 'react';
import type { DiagramKind } from '../types/textbook';

interface PhysicsDiagramProps {
  kind: DiagramKind;
}

const GraphShapesSvg: React.FC = () => (
  <svg viewBox="0 0 640 175" className="w-full h-auto" role="img" aria-label="Bentuk graf asas fizik">
    <rect x="0" y="0" width="640" height="175" fill="var(--svg-bg)" />
    {[
      { x: 15, title: 'y ∝ x (y = mx)', path: 'M 30 125 L 125 35', color: 'var(--svg-sky)' },
      { x: 170, title: 'y = mx + c', path: 'M 185 100 L 280 35', color: 'var(--svg-emerald)' },
      { x: 325, title: 'y = -mx + c', path: 'M 340 42 L 435 120', color: 'var(--svg-amber)' },
      { x: 480, title: 'y ∝ 1/x', path: 'M 500 35 Q 515 110 595 120', color: 'var(--svg-red)' },
    ].map((g) => (
      <g key={g.title}>
        <line x1={g.x + 15} y1="25" x2={g.x + 15} y2="128" stroke="var(--svg-axis)" strokeWidth="1.5" />
        <line x1={g.x + 15} y1="128" x2={g.x + 125} y2="128" stroke="var(--svg-axis)" strokeWidth="1.5" />
        <path d={g.path} fill="none" stroke={g.color} strokeWidth="2.5" strokeLinecap="round" />
        <text x={g.x + 70} y="152" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--svg-ink)">
          {g.title}
        </text>
      </g>
    ))}
  </svg>
);

const PendulumSetupSvg: React.FC = () => (
  <svg viewBox="0 0 520 200" className="w-full h-auto" role="img" aria-label="Susunan radas Eksperimen 1.1 Bandul Ringkas">
    <rect width="520" height="200" fill="var(--svg-bg)" />
    <rect x="40" y="170" width="120" height="10" fill="var(--svg-axis)" />
    <rect x="70" y="25" width="8" height="145" fill="var(--svg-muted)" />
    <rect x="78" y="32" width="110" height="7" fill="#64748B" />
    <rect x="172" y="27" width="22" height="16" rx="2" fill="var(--svg-sky)" />
    <text x="202" y="38" fontSize="10.5" fill="var(--svg-ink)">Dua kepingan papan lapis (titik apit)</text>
    <line x1="183" y1="43" x2="183" y2="140" stroke="var(--svg-ink)" strokeWidth="1.6" />
    <line x1="183" y1="43" x2="215" y2="135" stroke="#94A3B8" strokeWidth="1.4" strokeDasharray="4 3" />
    <circle cx="183" cy="148" r="10" fill="var(--svg-sky)" />
    <circle cx="218" cy="143" r="10" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1.2" />
    <line x1="160" y1="43" x2="160" y2="148" stroke="var(--svg-red)" strokeWidth="1.3" />
    <text x="150" y="98" textAnchor="end" fontSize="11" fontWeight="600" fill="var(--svg-red)">l (hingga pusat ladung)</text>
    <text x="235" y="146" fontSize="10.5" fill="var(--svg-axis)">θ &lt; 10° · 20 ayunan (t₁, t₂)</text>
    {/* Mini T^2 vs l graph */}
    <line x1="365" y1="155" x2="365" y2="45" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="365" y1="155" x2="485" y2="155" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="365" y1="155" x2="475" y2="55" stroke="var(--svg-emerald)" strokeWidth="2.5" />
    <text x="358" y="42" textAnchor="end" fontSize="10.5" fontWeight="600" fill="var(--svg-ink)">T² (s²)</text>
    <text x="485" y="170" textAnchor="end" fontSize="10.5" fontWeight="600" fill="var(--svg-ink)">l (m)</text>
    <text x="430" y="112" fontSize="10" fill="var(--svg-emerald)" fontWeight="600">g = 4π² / m</text>
  </svg>
);

const LinearMotionGraphsSvg: React.FC = () => (
  <svg viewBox="0 0 620 185" className="w-full h-auto" role="img" aria-label="Graf s-t, v-t, dan a-t">
    <rect width="620" height="185" fill="var(--svg-bg)" />
    {/* s-t */}
    <line x1="35" y1="140" x2="35" y2="25" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="35" y1="140" x2="185" y2="140" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <path d="M 35 140 Q 65 135 80 105 L 130 55 Q 150 38 175 38" fill="none" stroke="var(--svg-sky)" strokeWidth="2.5" />
    <text x="30" y="22" fontSize="11" fontWeight="700" fill="var(--svg-ink)">s (m)</text>
    <text x="180" y="155" fontSize="11" fill="var(--svg-ink)">t (s)</text>
    <text x="108" y="172" textAnchor="middle" fontSize="10.5" fill="var(--svg-sky)" fontWeight="600">Kecerunan = Halaju v</text>
    {/* v-t */}
    <line x1="235" y1="140" x2="235" y2="25" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="235" y1="140" x2="395" y2="140" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <polygon points="235,140 280,52 335,52 380,140" fill="var(--svg-emerald)" fillOpacity="0.16" />
    <polyline points="235,140 280,52 335,52 380,140" fill="none" stroke="var(--svg-emerald)" strokeWidth="2.5" />
    <text x="230" y="22" fontSize="11" fontWeight="700" fill="var(--svg-ink)">v (m/s)</text>
    <text x="390" y="155" fontSize="11" fill="var(--svg-ink)">t (s)</text>
    <text x="312" y="108" textAnchor="middle" fontSize="10" fill="var(--svg-emerald)" fontWeight="600">Luas = Sesaran</text>
    <text x="312" y="172" textAnchor="middle" fontSize="10.5" fill="var(--svg-emerald)" fontWeight="600">Kecerunan = Pecutan a</text>
    {/* a-t */}
    <line x1="440" y1="100" x2="440" y2="25" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="440" y1="100" x2="600" y2="100" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="440" y1="100" x2="440" y2="148" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <polyline points="440,50 485,50 485,100 540,100 540,140 585,140" fill="none" stroke="var(--svg-red)" strokeWidth="2.3" />
    <text x="434" y="22" fontSize="11" fontWeight="700" fill="var(--svg-ink)">a (m/s²)</text>
    <text x="595" y="114" fontSize="11" fill="var(--svg-ink)">t</text>
    <text x="515" y="172" textAnchor="middle" fontSize="10.5" fill="var(--svg-red)" fontWeight="600">a+ · a=0 · a-</text>
  </svg>
);

const TickerTapeSvg: React.FC = () => (
  <svg viewBox="0 0 600 170" className="w-full h-auto" role="img" aria-label="Corak pita detik dan carta pita">
    <rect width="600" height="170" fill="var(--svg-bg)" />
    <text x="20" y="24" fontSize="11" fontWeight="700" fill="var(--svg-ink)">1. Halaju Seragam (jarak titik sama)</text>
    <rect x="20" y="32" width="240" height="18" fill="var(--svg-subtle)" stroke="#94A3B8" />
    {[40, 75, 110, 145, 180, 215, 250].map((x) => (
      <circle key={x} cx={x} cy="41" r="3" fill="var(--svg-sky)" />
    ))}
    <text x="20" y="76" fontSize="11" fontWeight="700" fill="var(--svg-ink)">2. Pecutan Seragam (jarak titik bertambah)</text>
    <rect x="20" y="84" width="240" height="18" fill="var(--svg-subtle)" stroke="#94A3B8" />
    {[30, 42, 60, 86, 122, 168, 226].map((x) => (
      <circle key={x} cx={x} cy="93" r="3" fill="var(--svg-emerald)" />
    ))}
    <text x="20" y="128" fontSize="11" fontWeight="700" fill="var(--svg-ink)">3. Nyahpecutan (jarak titik berkurang)</text>
    <rect x="20" y="136" width="240" height="18" fill="var(--svg-subtle)" stroke="#94A3B8" />
    {[30, 88, 134, 170, 196, 214, 226].map((x) => (
      <circle key={x} cx={x} cy="145" r="3" fill="var(--svg-red)" />
    ))}
    {/* Carta Pita */}
    <text x="330" y="24" fontSize="11" fontWeight="700" fill="var(--svg-ink)">Carta Pita (5 jalur × 10 detik)</text>
    <line x1="330" y1="145" x2="330" y2="35" stroke="var(--svg-ink)" strokeWidth="1.5" />
    <line x1="330" y1="145" x2="565" y2="145" stroke="var(--svg-ink)" strokeWidth="1.5" />
    {[22, 42, 62, 82, 102].map((h, i) => (
      <rect
        key={h}
        x={345 + i * 38}
        y={145 - h}
        width="32"
        height={h}
        fill="var(--svg-sky-tint)"
        stroke="var(--svg-sky)"
        strokeWidth="1.2"
      />
    ))}
    <line x1="361" y1="123" x2="513" y2="43" stroke="var(--svg-red)" strokeWidth="2" strokeDasharray="4 2" />
    <text x="448" y="162" textAnchor="middle" fontSize="10" fill="var(--svg-axis)">Masa antara u &amp; v = (n − 1) × 0.2 s</text>
  </svg>
);

const TotalInternalReflectionInteractive: React.FC = () => {
  const [angle, setAngle] = useState<number>(45);
  const critical = 42;
  const isTIR = angle > critical;
  const isCritical = angle === critical;

  const rad = (angle * Math.PI) / 180;
  const len = 95;
  const x1 = 220 - Math.sin(rad) * len;
  const y1 = 115 + Math.cos(rad) * len;

  const refractedRad = !isTIR && !isCritical ? Math.asin(Math.min(1, 1.5 * Math.sin(rad))) : Math.PI / 2;
  const rx = 220 + Math.sin(refractedRad) * len;
  const ry = 115 - Math.cos(refractedRad) * len;

  const reflX = 220 + Math.sin(rad) * len;
  const reflY = 115 + Math.cos(rad) * len;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2">
        <label htmlFor="tir-slider" className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          Sudut Tuju dalam Kaca (n = 1.50, c = 42°):{' '}
          <span className="font-mono text-sky-700 dark:text-sky-400 tabular-nums">{angle}°</span>
        </label>
        <input
          id="tir-slider"
          type="range"
          min={15}
          max={70}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-44 accent-sky-600 dark:accent-sky-400 cursor-pointer"
        />
        <span
          className={`text-xs font-semibold ${
            isTIR
              ? 'text-emerald-700 dark:text-emerald-300'
              : isCritical
                ? 'text-amber-700 dark:text-amber-300'
                : 'text-sky-700 dark:text-sky-300'
          }`}
        >
          {isTIR
            ? '▲ Pantulan Dalam Penuh (i > c)'
            : isCritical
              ? '◆ Sudut Genting (r = 90°)'
              : '● Pembiasan Keluar (i < c)'}
        </span>
      </div>
      <svg viewBox="0 0 460 220" className="w-full h-auto" role="img" aria-label="Simulasi sudut genting dan pantulan dalam penuh">
        <rect width="460" height="220" fill="var(--svg-bg)" />
        <rect x="20" y="115" width="420" height="95" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1" />
        <text x="32" y="135" fontSize="11" fontWeight="600" fill="var(--svg-sky-text)">Kaca (n = 1.50, tumpat optik)</text>
        <text x="32" y="45" fontSize="11" fontWeight="600" fill="var(--svg-muted)">Udara (n = 1.00, kurang tumpat)</text>
        <line x1="220" y1="20" x2="220" y2="210" stroke="#64748B" strokeWidth="1.2" strokeDasharray="4 4" />
        <text x="226" y="34" fontSize="10" fill="var(--svg-muted)">Garis Normal</text>
        {/* Incident */}
        <line x1={x1} y1={y1} x2="220" y2="115" stroke="var(--svg-red)" strokeWidth="2.5" />
        <text x={x1 - 24} y={y1 - 8} fontSize="10.5" fontWeight="700" fill="var(--svg-red)">i = {angle}°</text>
        {/* Refracted / Critical */}
        {!isTIR && (
          <line
            x1="220"
            y1="115"
            x2={isCritical ? 390 : rx}
            y2={isCritical ? 115 : ry}
            stroke="var(--svg-sky)"
            strokeWidth="2.5"
          />
        )}
        {/* Reflected */}
        <line
          x1="220"
          y1="115"
          x2={reflX}
          y2={reflY}
          stroke="var(--svg-emerald)"
          strokeWidth={isTIR ? 2.8 : 1.3}
          strokeDasharray={isTIR ? undefined : '4 3'}
        />
        <text x={reflX + 6} y={reflY - 6} fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">
          {isTIR ? `Pantulan 100% (${angle}°)` : 'Pantul lemah'}
        </text>
      </svg>
    </div>
  );
};

const HeatingCurveInteractive: React.FC = () => {
  const [stage, setStage] = useState<'PQ' | 'QR' | 'RS' | 'ST'>('QR');
  const info = {
    PQ: 'PQ (Pepejal memanas): Suhu naik · Q = mcΔθ · Tenaga kinetik molekul bertambah.',
    QR: 'QR (Peleburan 0°C): Suhu MALAR · Q = ml_f · Haba melemahkan ikatan pepejal → cecair.',
    RS: 'RS (Cecair memanas): Suhu naik 0°C→100°C · Q = mcΔθ · Tenaga kinetik meningkat.',
    ST: 'ST (Pendidihan 100°C): Suhu MALAR · Q = ml_v · Haba memutuskan ikatan sepenuhnya menjadi gas.',
  }[stage];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(['PQ', 'QR', 'RS', 'ST'] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(s)}
            className={`rounded border px-2.5 py-1 font-mono text-xs font-semibold cursor-pointer ${
              stage === s
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Segmen {s}
          </button>
        ))}
      </div>
      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-3 py-2">
        {info}
      </p>
      <svg viewBox="0 0 500 185" className="w-full h-auto" role="img" aria-label="Lengkung pemanasan air">
        <rect width="500" height="185" fill="var(--svg-bg)" />
        <line x1="55" y1="155" x2="55" y2="20" stroke="var(--svg-ink)" strokeWidth="1.5" />
        <line x1="55" y1="155" x2="470" y2="155" stroke="var(--svg-ink)" strokeWidth="1.5" />
        <text x="14" y="25" fontSize="11" fontWeight="700" fill="var(--svg-ink)">Suhu</text>
        <text x="455" y="172" fontSize="11" fontWeight="700" fill="var(--svg-ink)">Masa</text>
        {/* Curve */}
        <line x1="55" y1="145" x2="105" y2="115" stroke={stage === 'PQ' ? 'var(--svg-red)' : 'var(--svg-sky)'} strokeWidth={stage === 'PQ' ? 3.5 : 2.2} />
        <line x1="105" y1="115" x2="195" y2="115" stroke={stage === 'QR' ? 'var(--svg-red)' : 'var(--svg-emerald)'} strokeWidth={stage === 'QR' ? 3.5 : 2.2} />
        <line x1="195" y1="115" x2="275" y2="55" stroke={stage === 'RS' ? 'var(--svg-red)' : 'var(--svg-sky)'} strokeWidth={stage === 'RS' ? 3.5 : 2.2} />
        <line x1="275" y1="55" x2="415" y2="55" stroke={stage === 'ST' ? 'var(--svg-red)' : 'var(--svg-emerald)'} strokeWidth={stage === 'ST' ? 3.5 : 2.2} />
        <line x1="415" y1="55" x2="455" y2="28" stroke="var(--svg-sky)" strokeWidth="2.2" />
        <text x="62" y="140" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">P</text>
        <text x="102" y="108" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Q</text>
        <text x="192" y="108" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">R</text>
        <text x="272" y="48" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">S</text>
        <text x="415" y="48" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">T</text>
        <text x="345" y="46" textAnchor="middle" fontSize="10" fill="var(--svg-emerald)" fontWeight="600">ST lebih panjang (l_v &gt; l_f)</text>
      </svg>
    </div>
  );
};

const ConvexLensInteractive: React.FC = () => {
  const [zone, setZone] = useState<'gt2f' | 'eq2f' | 'between' | 'ltf'>('gt2f');

  const descriptions = {
    gt2f: 'u > 2f → Imej antara F dan 2F · Nyata, Songsang, Diperkecil (Kamera)',
    eq2f: 'u = 2f → Imej pada 2F · Nyata, Songsang, Sama saiz (m = 1)',
    between: 'f < u < 2f → Imej > 2F · Nyata, Songsang, Diperbesar (Projektor)',
    ltf: 'u < f → Imej di belakang objek · Maya, Tegak, Diperbesar (Kanta Pembesar)',
  }[zone];

  const objX = zone === 'gt2f' ? 85 : zone === 'eq2f' ? 130 : zone === 'between' ? 165 : 210;
  const imgX = zone === 'gt2f' ? 355 : zone === 'eq2f' ? 370 : zone === 'between' ? 430 : 120;
  const imgTopY = zone === 'gt2f' ? 115 : zone === 'eq2f' ? 130 : zone === 'between' ? 155 : 26;
  const isVirtual = zone === 'ltf';

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {([
          ['gt2f', 'u > 2f'],
          ['eq2f', 'u = 2f'],
          ['between', 'f < u < 2f'],
          ['ltf', 'u < f (Kanta Pembesar)'],
        ] as const).map(([key, lbl]) => (
          <button
            key={key}
            type="button"
            onClick={() => setZone(key)}
            className={`rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
              zone === key
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>
      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-3 py-2">
        {descriptions}
      </p>
      <svg viewBox="0 0 500 180" className="w-full h-auto" role="img" aria-label="Rajah sinar kanta cembung interaktif">
        <rect width="500" height="180" fill="var(--svg-bg)" />
        <line x1="20" y1="90" x2="480" y2="90" stroke="#64748B" strokeWidth="1.2" />
        <line x1="250" y1="15" x2="250" y2="165" stroke="var(--svg-ink)" strokeWidth="2.2" />
        <text x="255" y="25" fontSize="10" fontWeight="700" fill="var(--svg-ink)">Kanta Cembung</text>
        {/* Focal points */}
        {[
          { x: 130, lbl: '2F' },
          { x: 190, lbl: 'F' },
          { x: 250, lbl: 'O' },
          { x: 310, lbl: 'F' },
          { x: 370, lbl: '2F' },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy="90" r="2.5" fill="var(--svg-ink)" />
            <text x={pt.x} y="104" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="var(--svg-muted)">
              {pt.lbl}
            </text>
          </g>
        ))}
        {/* Object */}
        <line x1={objX} y1="90" x2={objX} y2="50" stroke="var(--svg-sky)" strokeWidth="3" />
        <polygon points={`${objX},44 ${objX - 4},52 ${objX + 4},52`} fill="var(--svg-sky)" />
        <text x={objX} y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky)">Objek</text>
        {/* Ray 1 & 2 */}
        <line x1={objX} y1="50" x2="250" y2="50" stroke="var(--svg-red)" strokeWidth="1.5" />
        <line x1="250" y1="50" x2={isVirtual ? 400 : imgX} y2={isVirtual ? 150 : imgTopY} stroke="var(--svg-red)" strokeWidth="1.5" />
        <line x1={objX} y1="50" x2={isVirtual ? 400 : imgX} y2={isVirtual ? 160 : imgTopY} stroke="var(--svg-emerald)" strokeWidth="1.5" />
        {isVirtual && (
          <>
            <line x1={imgX} y1={imgTopY} x2="250" y2="50" stroke="var(--svg-red)" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1={imgX} y1={imgTopY} x2={objX} y2="50" stroke="var(--svg-emerald)" strokeWidth="1.3" strokeDasharray="4 3" />
          </>
        )}
        {/* Image */}
        <line
          x1={imgX}
          y1="90"
          x2={imgX}
          y2={imgTopY}
          stroke="var(--svg-amber)"
          strokeWidth="3"
          strokeDasharray={isVirtual ? '4 2' : undefined}
        />
        <text
          x={imgX}
          y={isVirtual ? imgTopY - 6 : imgTopY + 13}
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="var(--svg-amber)"
        >
          {isVirtual ? 'Imej Maya' : 'Imej Nyata'}
        </text>
      </svg>
    </div>
  );
};

type RectifierMode = 'half' | 'full' | 'smoothed';

const RectifierInteractive: React.FC = () => {
  const [mode, setMode] = useState<RectifierMode>('full');

  const descriptions: Record<RectifierMode, string> = {
    half: 'Rektifikasi Gelombang Separuh (1 Diod): Hanya separuh kitar positif mengalir; kitar negatif dihalang menghasilkan jurang 0 V.',
    full: 'Rektifikasi Gelombang Penuh (4 Diod Tetimbang): Kedua-dua kitar positif & negatif diluruskan ke arah sama merentasi beban R.',
    smoothed: 'Perataan Arus (Kapasitor Selari R): Kapasitor dicas ke puncak dan menyahcas perlahan ketika voltan turun — menghasilkan a.t. hampir rata!',
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['half', '1 · Gelombang Separuh (1 Diod)'],
            ['full', '2 · Gelombang Penuh (4 Diod)'],
            ['smoothed', '3 · Perata Kapasitor (Selari)'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            data-testid={`rectifier-mode-${key}`}
            onClick={() => setMode(key)}
            className={`rounded border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
              mode === key
                ? 'border-sky-700 bg-sky-700 text-white dark:border-sky-500 dark:bg-sky-600'
                : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-3 py-2">
        {descriptions[mode]}
      </p>
      <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Simulasi rektifikasi dan perataan arus pada skrin O.S.K.">
        <rect width="540" height="165" fill="var(--svg-bg)" />
        {/* Left: Input AC */}
        <text x="115" y="20" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-muted)">Input Arus Ulang-Alik (a.u.)</text>
        <line x1="25" y1="85" x2="215" y2="85" stroke="var(--svg-axis)" strokeWidth="1.2" />
        <line x1="25" y1="35" x2="25" y2="140" stroke="var(--svg-ink)" strokeWidth="1.4" />
        <path
          d="M 25 85 Q 48 35 70 85 T 115 85 T 160 85 T 205 85"
          fill="none"
          stroke="var(--svg-sky)"
          strokeWidth="2.2"
        />
        <text x="218" y="88" fontSize="10" fill="var(--svg-muted)">t</text>

        {/* Arrow */}
        <line x1="232" y1="85" x2="275" y2="85" stroke="var(--svg-ink)" strokeWidth="2" />
        <polygon points="275,80 285,85 275,90" fill="var(--svg-ink)" />

        {/* Right: Output CRO */}
        <text x="405" y="20" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">Output Pada Skrin O.S.K.</text>
        <line x1="300" y1="115" x2="510" y2="115" stroke="var(--svg-axis)" strokeWidth="1.3" />
        <line x1="300" y1="38" x2="300" y2="135" stroke="var(--svg-ink)" strokeWidth="1.4" />

        {mode === 'half' && (
          <path
            d="M 300 115 Q 325 45 350 115 L 400 115 Q 425 45 450 115 L 500 115"
            fill="none"
            stroke="var(--svg-amber)"
            strokeWidth="2.8"
          />
        )}
        {mode === 'full' && (
          <path
            d="M 300 115 Q 325 45 350 115 Q 375 45 400 115 Q 425 45 450 115 Q 475 45 500 115"
            fill="none"
            stroke="var(--svg-emerald)"
            strokeWidth="2.8"
          />
        )}
        {mode === 'smoothed' && (
          <>
            <path
              d="M 300 115 Q 325 45 350 115 Q 375 45 400 115 Q 425 45 450 115 Q 475 45 500 115"
              fill="none"
              stroke="var(--svg-muted)"
              strokeWidth="1.3"
              strokeDasharray="3 3"
            />
            <path
              d="M 300 115 Q 315 55 325 58 L 365 72 Q 372 56 375 58 L 415 72 Q 422 56 425 58 L 465 72 Q 472 56 475 58 L 500 68"
              fill="none"
              stroke="var(--svg-red)"
              strokeWidth="2.8"
            />
          </>
        )}
        <text x="405" y="146" textAnchor="middle" fontSize="10" fill="var(--svg-ink)">
          {mode === 'half'
            ? 'Separuh kitar negatif hilang (0 V)'
            : mode === 'full'
              ? 'Semua kitar jadi positif (a.t. berdenyut)'
              : 'Kapasitor mengecas & menyahcas → riak kecil'}
        </text>
      </svg>
    </div>
  );
};

const NuclearDecayInteractive: React.FC = () => {
  const [nHalfLives, setNHalfLives] = useState<number>(2);
  const remainingPct = 100 / Math.pow(2, nHalfLives);
  const decayedPct = 100 - remainingPct;

  const points = [0, 1, 2, 3, 4, 5].map((n) => ({
    n,
    x: 60 + n * 75,
    y: 135 - (100 / Math.pow(2, n)) * 1.0,
    pct: 100 / Math.pow(2, n),
  }));

  const selectedPt = points[nHalfLives];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              data-testid={`halflife-btn-${n}`}
              onClick={() => setNHalfLives(n)}
              className={`rounded border px-2.5 py-1 font-mono text-xs font-semibold transition-colors cursor-pointer ${
                nHalfLives === n
                  ? 'border-sky-700 bg-sky-700 text-white dark:border-sky-500 dark:bg-sky-600'
                  : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              n = {n}
            </button>
          ))}
        </div>
        <span className="font-mono text-xs font-semibold text-emerald-800 dark:text-emerald-300">
          Baki Induk: {remainingPct.toFixed(2)}% · Mereput (Anak): {decayedPct.toFixed(2)}%
        </span>
      </div>
      <svg viewBox="0 0 490 170" className="w-full h-auto" role="img" aria-label="Graf lengkung reputan separuh hayat interaktif">
        <rect width="490" height="170" fill="var(--svg-bg)" />
        <line x1="60" y1="135" x2="60" y2="22" stroke="var(--svg-ink)" strokeWidth="1.6" />
        <line x1="60" y1="135" x2="465" y2="135" stroke="var(--svg-ink)" strokeWidth="1.6" />
        <path
          d={`M ${points.map((p) => `${p.x},${p.y}`).join(' L ')}`}
          fill="none"
          stroke="var(--svg-sky)"
          strokeWidth="2.4"
        />
        <line x1="60" y1={selectedPt.y} x2={selectedPt.x} y2={selectedPt.y} stroke="var(--svg-red)" strokeWidth="1.3" strokeDasharray="3 3" />
        <line x1={selectedPt.x} y1={selectedPt.y} x2={selectedPt.x} y2="135" stroke="var(--svg-red)" strokeWidth="1.3" strokeDasharray="3 3" />
        {points.map((p) => (
          <g key={p.n}>
            <circle
              cx={p.x}
              cy={p.y}
              r={p.n === nHalfLives ? 5.5 : 3.5}
              fill={p.n === nHalfLives ? 'var(--svg-red)' : 'var(--svg-sky)'}
            />
            <text x={p.x} y="150" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--svg-muted)">
              {p.n}T½
            </text>
          </g>
        ))}
        <text x="52" y="38" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">N₀</text>
        <text x="52" y="88" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">½N₀</text>
        <text x={selectedPt.x + 10} y={Math.max(28, selectedPt.y - 6)} fontSize="10.5" fontWeight="700" fill="var(--svg-red)">
          {remainingPct.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
};

export const PhysicsDiagram: React.FC<PhysicsDiagramProps> = ({ kind }) => {
  if (kind === 'graph-shapes') return <GraphShapesSvg />;
  if (kind === 'pendulum-setup') return <PendulumSetupSvg />;
  if (kind === 'linear-motion-graphs') return <LinearMotionGraphsSvg />;
  if (kind === 'ticker-tape') return <TickerTapeSvg />;
  if (kind === 'total-internal-reflection') return <TotalInternalReflectionInteractive />;
  if (kind === 'heating-curve') return <HeatingCurveInteractive />;
  if (kind === 'convex-lens-rays') return <ConvexLensInteractive />;
  if (kind === 'f5-rectifier-transistor') return <RectifierInteractive />;
  if (kind === 'f5-nuclear-decay') return <NuclearDecayInteractive />;

  // Clean vector schematics for remaining diagram kinds
  const renderGenericSchematic = () => {
    switch (kind) {
      case 'free-fall-vacuum':
        return (
          <svg viewBox="0 0 480 175" className="w-full h-auto" role="img" aria-label="Tiub Newton udara vs vakum">
            <rect width="480" height="175" fill="var(--svg-bg)" />
            <rect x="45" y="20" width="90" height="130" rx="8" fill="var(--svg-subtle)" stroke="var(--svg-muted)" strokeWidth="1.8" />
            <circle cx="75" cy="128" r="9" fill="var(--svg-sky)" />
            <path d="M 105 55 Q 115 65 105 78" stroke="var(--svg-amber)" strokeWidth="2.5" fill="none" />
            <text x="90" y="166" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-ink)">Berudara (bola dahulu)</text>
            <rect x="180" y="20" width="90" height="130" rx="8" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" strokeWidth="1.8" />
            <circle cx="210" cy="128" r="9" fill="var(--svg-sky)" />
            <path d="M 240 116 Q 250 126 240 137" stroke="var(--svg-amber)" strokeWidth="2.5" fill="none" />
            <text x="225" y="166" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-emerald)">Vakum (tiba serentak!)</text>
            <line x1="325" y1="145" x2="325" y2="30" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="325" y1="145" x2="450" y2="145" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="325" y1="145" x2="435" y2="40" stroke="var(--svg-emerald)" strokeWidth="2.5" />
            <text x="318" y="34" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">v</text>
            <text x="450" y="160" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">t</text>
            <text x="395" y="102" fontSize="10" fill="var(--svg-emerald)" fontWeight="600">Cerun = g (9.81)</text>
          </svg>
        );
      case 'inertia-balance':
        return (
          <svg viewBox="0 0 480 165" className="w-full h-auto" role="img" aria-label="Neraca inersia bilah gergaji">
            <rect width="480" height="165" fill="var(--svg-bg)" />
            <rect x="30" y="85" width="90" height="16" fill="var(--svg-muted)" />
            <rect x="55" y="70" width="22" height="45" fill="var(--svg-sky)" />
            <path d="M 77 88 Q 165 88 220 65" fill="none" stroke="var(--svg-ink)" strokeWidth="3" />
            <path d="M 77 88 Q 165 88 220 112" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="222" cy="65" r="11" fill="var(--svg-amber)" />
            <text x="155" y="45" fontSize="10.5" fontWeight="600" fill="var(--svg-ink)">Plastisin jisim m · Ayunan mengufuk</text>
            <line x1="315" y1="138" x2="315" y2="30" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="315" y1="138" x2="445" y2="138" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="315" y1="138" x2="430" y2="42" stroke="var(--svg-emerald)" strokeWidth="2.5" />
            <text x="308" y="34" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">T²</text>
            <text x="445" y="152" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">m</text>
          </svg>
        );
      case 'momentum-collision':
        return (
          <svg viewBox="0 0 540 160" className="w-full h-auto" role="img" aria-label="Perlanggaran dan letupan momentum">
            <rect width="540" height="160" fill="var(--svg-bg)" />
            <text x="15" y="25" fontSize="11" fontWeight="700" fill="var(--svg-ink)">Tak Kenyal (bercantum): m₁u₁ + m₂u₂ = (m₁ + m₂)v</text>
            <rect x="25" y="42" width="42" height="24" fill="var(--svg-sky)" rx="3" />
            <line x1="72" y1="54" x2="105" y2="54" stroke="var(--svg-sky)" strokeWidth="2" />
            <rect x="135" y="42" width="42" height="24" fill="#64748B" rx="3" />
            <text x="205" y="58" fontSize="14" fontWeight="700" fill="var(--svg-ink)">→</text>
            <rect x="240" y="42" width="84" height="24" fill="var(--svg-emerald)" rx="3" />
            <line x1="330" y1="54" x2="375" y2="54" stroke="var(--svg-emerald)" strokeWidth="2" />
            <text x="15" y="102" fontSize="11" fontWeight="700" fill="var(--svg-ink)">Letupan (berpisah arah bertentangan): m₁v₁ = −m₂v₂</text>
            <rect x="55" y="116" width="60" height="24" fill="var(--svg-muted)" rx="3" />
            <text x="205" y="132" fontSize="14" fontWeight="700" fill="var(--svg-ink)">→</text>
            <line x1="275" y1="128" x2="238" y2="128" stroke="var(--svg-red)" strokeWidth="2.5" />
            <rect x="278" y="116" width="32" height="24" fill="var(--svg-red)" rx="3" />
            <rect x="345" y="116" width="24" height="24" fill="var(--svg-sky)" rx="3" />
            <line x1="374" y1="128" x2="430" y2="128" stroke="var(--svg-sky)" strokeWidth="2.5" />
          </svg>
        );
      case 'impulse-time-graph':
        return (
          <svg viewBox="0 0 460 165" className="w-full h-auto" role="img" aria-label="Graf Daya-Masa impuls">
            <rect width="460" height="165" fill="var(--svg-bg)" />
            <line x1="50" y1="138" x2="50" y2="20" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="50" y1="138" x2="430" y2="138" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <path d="M 75 138 Q 105 20 135 138" fill="var(--svg-red)" fillOpacity="0.16" stroke="var(--svg-red)" strokeWidth="2.5" />
            <path d="M 180 138 Q 280 78 380 138" fill="var(--svg-emerald)" fillOpacity="0.16" stroke="var(--svg-emerald)" strokeWidth="2.5" />
            <text x="105" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">Keras (t singkat, F tinggi)</text>
            <text x="285" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Lembut (t panjang, F rendah)</text>
            <text x="240" y="156" textAnchor="middle" fontSize="10.5" fill="var(--svg-ink)">Luas di bawah kedua-dua lengkung sama = Impuls Ft</text>
          </svg>
        );
      case 'gravity-profile':
        return (
          <svg viewBox="0 0 480 175" className="w-full h-auto" role="img" aria-label="Graf variasi g melawan jarak r">
            <rect width="480" height="175" fill="var(--svg-bg)" />
            <line x1="60" y1="145" x2="60" y2="22" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="60" y1="145" x2="440" y2="145" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="175" y1="35" x2="175" y2="145" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="60" y1="145" x2="175" y2="35" stroke="var(--svg-sky)" strokeWidth="2.5" />
            <path d="M 175 35 Q 235 112 420 135" fill="none" stroke="var(--svg-emerald)" strokeWidth="2.5" />
            <text x="175" y="160" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">R (permukaan)</text>
            <text x="48" y="38" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">9.81</text>
            <text x="108" y="80" fontSize="10" fontWeight="600" fill="var(--svg-sky)">g ∝ r</text>
            <text x="275" y="82" fontSize="10" fontWeight="600" fill="var(--svg-emerald)">g ∝ 1/r²</text>
          </svg>
        );
      case 'kepler-ellipse':
        return (
          <svg viewBox="0 0 480 170" className="w-full h-auto" role="img" aria-label="Hukum Kepler orbit elips">
            <rect width="480" height="170" fill="var(--svg-bg)" />
            <ellipse cx="240" cy="85" rx="170" ry="62" fill="var(--svg-subtle)" stroke="var(--svg-sky)" strokeWidth="2" />
            <circle cx="135" cy="85" r="14" fill="#F59E0B" />
            <text x="135" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber)">Matahari (Fokus)</text>
            <polygon points="135,85 72,72 86,115" fill="var(--svg-emerald)" fillOpacity="0.24" stroke="var(--svg-emerald)" strokeWidth="1.3" />
            <polygon points="135,85 408,76 404,96" fill="var(--svg-emerald)" fillOpacity="0.24" stroke="var(--svg-emerald)" strokeWidth="1.3" />
            <text x="285" y="55" fontSize="10.5" fontWeight="600" fill="var(--svg-emerald)">Luas sektor A = Luas sektor B (Δt sama)</text>
          </svg>
        );
      case 'satellite-orbits':
        return (
          <svg viewBox="0 0 480 165" className="w-full h-auto" role="img" aria-label="Orbit geopegun vs bukan geopegun">
            <rect width="480" height="165" fill="var(--svg-bg)" />
            <circle cx="240" cy="82" r="26" fill="var(--svg-sky)" />
            <text x="240" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">Bumi</text>
            <ellipse cx="240" cy="82" rx="175" ry="52" fill="none" stroke="var(--svg-emerald)" strokeWidth="2" />
            <ellipse cx="240" cy="82" rx="75" ry="68" fill="none" stroke="var(--svg-amber)" strokeWidth="1.8" strokeDasharray="4 3" transform="rotate(28 240 82)" />
            <text x="365" y="34" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Geopegun (T = 24 j)</text>
            <text x="95" y="30" fontSize="10" fontWeight="700" fill="var(--svg-amber)">Bukan Geopegun (ISS/GPS)</text>
          </svg>
        );
      case 'thermal-equilibrium':
        return (
          <svg viewBox="0 0 480 140" className="w-full h-auto" role="img" aria-label="Keseimbangan terma">
            <rect width="480" height="140" fill="var(--svg-bg)" />
            <rect x="55" y="35" width="120" height="70" rx="6" fill="var(--svg-red-tint)" stroke="var(--svg-red)" strokeWidth="1.8" />
            <text x="115" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-red-text)">Objek Panas P</text>
            <rect x="295" y="35" width="120" height="70" rx="6" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1.8" />
            <text x="355" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-sky-deep)">Objek Sejuk Q</text>
            <line x1="185" y1="58" x2="285" y2="58" stroke="var(--svg-red)" strokeWidth="2.8" />
            <line x1="285" y1="82" x2="225" y2="82" stroke="var(--svg-sky)" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="235" y="126" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-ink)">Keseimbangan: T_P = T_Q &amp; aliran bersih = 0</text>
          </svg>
        );
      case 'land-sea-breeze':
        return (
          <svg viewBox="0 0 500 155" className="w-full h-auto" role="img" aria-label="Bayu laut vs bayu darat">
            <rect width="500" height="155" fill="var(--svg-bg)" />
            <rect x="20" y="105" width="110" height="35" fill="var(--svg-amber)" fillOpacity="0.28" />
            <rect x="130" y="112" width="105" height="28" fill="var(--svg-sky)" fillOpacity="0.28" />
            <text x="75" y="127" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber-text)">Darat (c rendah)</text>
            <text x="182" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-deep)">Laut (c tinggi)</text>
            <path d="M 190 95 L 95 95 Q 75 95 75 60 L 180 48" fill="none" stroke="var(--svg-emerald)" strokeWidth="2.2" />
            <text x="128" y="25" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-emerald)">SIANG: Bayu Laut (Laut → Darat)</text>
            <rect x="265" y="105" width="110" height="35" fill="var(--svg-amber)" fillOpacity="0.28" />
            <rect x="375" y="112" width="105" height="28" fill="var(--svg-sky)" fillOpacity="0.28" />
            <path d="M 320 95 L 415 95 Q 430 95 430 60 L 325 48" fill="none" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <text x="375" y="25" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-sky)">MALAM: Bayu Darat (Darat → Laut)</text>
          </svg>
        );
      case 'gas-laws-graphs':
        return (
          <svg viewBox="0 0 600 165" className="w-full h-auto" role="img" aria-label="Graf Hukum Gas Boyle, Charles, Gay-Lussac">
            <rect width="600" height="165" fill="var(--svg-bg)" />
            {/* Boyle */}
            <line x1="40" y1="125" x2="40" y2="25" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="40" y1="125" x2="165" y2="125" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="40" y1="125" x2="155" y2="35" stroke="var(--svg-sky)" strokeWidth="2.4" />
            <text x="34" y="30" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">P</text>
            <text x="160" y="140" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">1/V</text>
            <text x="102" y="155" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-sky)">Boyle (T malar)</text>
            {/* Charles */}
            <line x1="295" y1="125" x2="295" y2="25" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="215" y1="125" x2="365" y2="125" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="230" y1="125" x2="295" y2="85" stroke="var(--svg-emerald)" strokeWidth="2" strokeDasharray="4 3" />
            <line x1="295" y1="85" x2="355" y2="45" stroke="var(--svg-emerald)" strokeWidth="2.4" />
            <text x="230" y="138" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--svg-red)">-273°C</text>
            <text x="290" y="155" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-emerald)">Charles (V vs θ°C)</text>
            {/* Gay-Lussac */}
            <line x1="440" y1="125" x2="440" y2="25" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="440" y1="125" x2="570" y2="125" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="440" y1="125" x2="555" y2="35" stroke="var(--svg-amber)" strokeWidth="2.4" />
            <text x="434" y="30" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">P</text>
            <text x="565" y="140" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">T (K)</text>
            <text x="505" y="155" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-amber)">Gay-Lussac (V malar)</text>
          </svg>
        );
      case 'wave-profiles':
        return (
          <svg viewBox="0 0 500 155" className="w-full h-auto" role="img" aria-label="Profil gelombang melintang A, T dan λ">
            <rect width="500" height="155" fill="var(--svg-bg)" />
            <line x1="35" y1="82" x2="475" y2="82" stroke="#64748B" strokeWidth="1.2" />
            <line x1="35" y1="22" x2="35" y2="142" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <path d="M 35 82 Q 70 22 105 82 T 175 82 T 245 82 T 315 82 T 385 82 T 455 82" fill="none" stroke="var(--svg-sky)" strokeWidth="2.6" />
            <line x1="70" y1="82" x2="70" y2="52" stroke="var(--svg-red)" strokeWidth="1.8" />
            <text x="76" y="70" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">A</text>
            <line x1="210" y1="45" x2="350" y2="45" stroke="var(--svg-emerald)" strokeWidth="1.8" />
            <text x="280" y="38" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">λ (graf y-x) atau T (graf y-t)</text>
          </svg>
        );
      case 'damping-resonance':
        return (
          <svg viewBox="0 0 540 160" className="w-full h-auto" role="img" aria-label="Graf pelembapan dan resonans">
            <rect width="540" height="160" fill="var(--svg-bg)" />
            <line x1="35" y1="85" x2="255" y2="85" stroke="#64748B" strokeWidth="1.2" />
            <line x1="35" y1="25" x2="35" y2="140" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <path d="M 35 85 Q 52 25 70 85 T 105 85 Q 122 122 140 85 T 175 85 Q 192 65 210 85 T 245 85" fill="none" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <text x="145" y="150" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--svg-sky)">Pelembapan (A↓, f malar)</text>
            <line x1="305" y1="130" x2="305" y2="22" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <line x1="305" y1="130" x2="510" y2="130" stroke="var(--svg-ink)" strokeWidth="1.4" />
            <path d="M 315 126 Q 380 122 405 32 Q 430 122 495 126" fill="none" stroke="var(--svg-red)" strokeWidth="2.4" />
            <line x1="405" y1="32" x2="405" y2="130" stroke="#94A3B8" strokeDasharray="3 3" />
            <text x="405" y="146" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">f = f_asli (Resonans)</text>
          </svg>
        );
      case 'wave-reflection':
        return (
          <svg viewBox="0 0 460 165" className="w-full h-auto" role="img" aria-label="Pantulan gelombang pada pemantul satah">
            <rect width="460" height="165" fill="var(--svg-bg)" />
            <line x1="60" y1="135" x2="400" y2="135" stroke="var(--svg-ink)" strokeWidth="3.5" />
            <line x1="230" y1="25" x2="230" y2="135" stroke="#64748B" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="120" y1="35" x2="230" y2="135" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <line x1="230" y1="135" x2="340" y2="35" stroke="var(--svg-emerald)" strokeWidth="2.2" />
            <text x="195" y="88" fontSize="10.5" fontWeight="700" fill="var(--svg-sky)">i</text>
            <text x="258" y="88" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">r (i = r)</text>
            <text x="230" y="155" textAnchor="middle" fontSize="10.5" fill="var(--svg-ink)">λ, f dan v TIDAK berubah selepas pantulan</text>
          </svg>
        );
      case 'wave-refraction':
        return (
          <svg viewBox="0 0 480 165" className="w-full h-auto" role="img" aria-label="Pembiasan gelombang air dalam ke cetek">
            <rect width="480" height="165" fill="var(--svg-bg)" />
            <rect x="20" y="18" width="210" height="130" fill="var(--svg-blue-tint)" />
            <rect x="230" y="18" width="230" height="130" fill="var(--svg-amber-tint)" />
            <text x="120" y="36" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">Dalam (v₁ besar, λ₁ panjang)</text>
            <text x="345" y="36" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-amber-text)">Cetek (v₂ kecil, λ₂ pendek)</text>
            {[60, 100, 140, 180].map((x) => (
              <line key={x} x1={x} y1="50" x2={x - 15} y2="140" stroke="var(--svg-sky)" strokeWidth="2" />
            ))}
            {[255, 278, 301, 324, 347].map((x) => (
              <line key={x} x1={x} y1="50" x2={x - 5} y2="140" stroke="var(--svg-amber)" strokeWidth="2" />
            ))}
          </svg>
        );
      case 'wave-diffraction':
        return (
          <svg viewBox="0 0 520 160" className="w-full h-auto" role="img" aria-label="Pembelauan celah sempit vs celah lebar">
            <rect width="520" height="160" fill="var(--svg-bg)" />
            {[35, 55, 75].map((x) => (
              <line key={x} x1={x} y1="25" x2={x} y2="135" stroke="var(--svg-sky)" strokeWidth="2" />
            ))}
            <rect x="95" y="20" width="8" height="48" fill="var(--svg-ink)" />
            <rect x="95" y="92" width="8" height="48" fill="var(--svg-ink)" />
            {[25, 45, 65].map((r) => (
              <path key={r} d={`M 105 ${80 - r} A ${r} ${r} 0 0 1 105 ${80 + r}`} fill="none" stroke="var(--svg-emerald)" strokeWidth="2" />
            ))}
            <text x="120" y="152" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Celah sempit (a ≤ λ): Membulat ketara</text>
            {[295, 315, 335].map((x) => (
              <line key={x} x1={x} y1="25" x2={x} y2="135" stroke="var(--svg-sky)" strokeWidth="2" />
            ))}
            <rect x="355" y="20" width="8" height="25" fill="var(--svg-ink)" />
            <rect x="355" y="115" width="8" height="25" fill="var(--svg-ink)" />
            {[378, 398, 418].map((x) => (
              <path key={x} d={`M ${x} 48 L ${x} 112`} stroke="var(--svg-amber)" strokeWidth="2" />
            ))}
            <text x="385" y="152" fontSize="10" fontWeight="700" fill="var(--svg-amber)">Celah lebar: Sedikit lentur di tepi</text>
          </svg>
        );
      case 'wave-interference':
        return (
          <svg viewBox="0 0 480 170" className="w-full h-auto" role="img" aria-label="Interferens dwicelah a, x dan D">
            <rect width="480" height="170" fill="var(--svg-bg)" />
            <circle cx="70" cy="60" r="5" fill="var(--svg-sky)" />
            <circle cx="70" cy="110" r="5" fill="var(--svg-sky)" />
            <line x1="48" y1="60" x2="48" y2="110" stroke="var(--svg-red)" strokeWidth="2" />
            <text x="36" y="88" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-red)">a</text>
            <line x1="70" y1="150" x2="395" y2="150" stroke="var(--svg-ink)" strokeWidth="1.8" />
            <text x="232" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--svg-ink)">D</text>
            <line x1="395" y1="20" x2="395" y2="145" stroke="var(--svg-ink)" strokeWidth="2.5" />
            {[40, 70, 100, 130].map((y) => (
              <circle key={y} cx="395" cy={y} r="4.5" fill="var(--svg-emerald)" />
            ))}
            <line x1="412" y1="70" x2="412" y2="100" stroke="var(--svg-emerald)" strokeWidth="2" />
            <text x="424" y="89" fontSize="11" fontWeight="700" fill="var(--svg-emerald)">x</text>
            <text x="235" y="45" textAnchor="middle" fontSize="10.5" fill="var(--svg-muted)">λ = ax / D</text>
          </svg>
        );
      case 'em-spectrum':
        return (
          <svg viewBox="0 0 580 115" className="w-full h-auto" role="img" aria-label="Spektrum elektromagnet">
            <rect width="580" height="115" fill="var(--svg-bg)" />
            {[
              { name: 'Radio', color: '#E0F2FE', text: '#0369A1' },
              { name: 'Mikro', color: '#DBEAFE', text: '#1D4ED8' },
              { name: 'Inframerah', color: '#FEF3C7', text: '#B45309' },
              { name: 'Nampak', color: '#D1FAE5', text: '#047857' },
              { name: 'UV', color: '#EDE9FE', text: '#6D28D9' },
              { name: 'Sinar-X', color: '#FCE7F3', text: '#BE185D' },
              { name: 'Gama', color: '#FEE2E2', text: '#B91C1C' },
            ].map((b, i) => (
              <g key={b.name}>
                <rect x={16 + i * 79} y="32" width="76" height="42" rx="4" fill={b.color} stroke={b.text} strokeWidth="1" />
                <text x={54 + i * 79} y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill={b.text}>
                  {b.name}
                </text>
              </g>
            ))}
            <text x="20" y="20" fontSize="10.5" fontWeight="700" fill="var(--svg-sky)">← Panjang gelombang λ meningkat</text>
            <text x="560" y="96" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">Frekuensi f &amp; Tenaga meningkat →</text>
          </svg>
        );
      case 'light-refraction':
        return (
          <svg viewBox="0 0 480 165" className="w-full h-auto" role="img" aria-label="Pembiasan cahaya blok kaca dan dalam ketara">
            <rect width="480" height="165" fill="var(--svg-bg)" />
            <rect x="45" y="65" width="160" height="65" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1.5" />
            <line x1="115" y1="25" x2="115" y2="145" stroke="#64748B" strokeDasharray="3 3" />
            <line x1="65" y1="25" x2="115" y2="65" stroke="var(--svg-red)" strokeWidth="2.2" />
            <line x1="115" y1="65" x2="140" y2="130" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <line x1="140" y1="130" x2="180" y2="160" stroke="var(--svg-red)" strokeWidth="2.2" />
            <text x="125" y="155" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--svg-ink)">n = sin i / sin r</text>
            <rect x="275" y="55" width="175" height="90" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" strokeWidth="1.5" />
            <circle cx="360" cy="135" r="4.5" fill="var(--svg-red)" />
            <circle cx="360" cy="105" r="4.5" fill="var(--svg-emerald)" />
            <text x="372" y="138" fontSize="10" fontWeight="700" fill="var(--svg-red)">Objek (H)</text>
            <text x="372" y="108" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Imej (h = H/n)</text>
          </svg>
        );
      case 'concave-lens-rays':
        return (
          <svg viewBox="0 0 460 165" className="w-full h-auto" role="img" aria-label="Rajah sinar kanta cekung">
            <rect width="460" height="165" fill="var(--svg-bg)" />
            <line x1="20" y1="95" x2="440" y2="95" stroke="#64748B" strokeWidth="1.2" />
            <line x1="250" y1="20" x2="250" y2="150" stroke="var(--svg-ink)" strokeWidth="2.2" />
            <line x1="110" y1="95" x2="110" y2="45" stroke="var(--svg-sky)" strokeWidth="3" />
            <line x1="110" y1="45" x2="250" y2="45" stroke="var(--svg-red)" strokeWidth="1.5" />
            <line x1="250" y1="45" x2="390" y2="10" stroke="var(--svg-red)" strokeWidth="1.5" />
            <line x1="165" y1="95" x2="250" y2="45" stroke="var(--svg-red)" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="110" y1="45" x2="390" y2="145" stroke="var(--svg-emerald)" strokeWidth="1.5" />
            <line x1="196" y1="95" x2="196" y2="76" stroke="var(--svg-amber)" strokeWidth="3" strokeDasharray="3 2" />
            <text x="165" y="110" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">F</text>
            <text x="196" y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber)">Imej Maya (Tegak, Kecil)</text>
          </svg>
        );
      case 'optical-instruments':
        return (
          <svg viewBox="0 0 500 155" className="w-full h-auto" role="img" aria-label="Teleskop pelarasan normal">
            <rect width="500" height="155" fill="var(--svg-bg)" />
            <line x1="20" y1="80" x2="480" y2="80" stroke="#64748B" />
            <line x1="110" y1="20" x2="110" y2="140" stroke="var(--svg-sky)" strokeWidth="3" />
            <line x1="360" y1="35" x2="360" y2="125" stroke="var(--svg-emerald)" strokeWidth="3" />
            <circle cx="290" cy="80" r="3.5" fill="var(--svg-red)" />
            <text x="290" y="96" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">F_o = F_m</text>
            <text x="110" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky)">Kanta Objek (f_o panjang)</text>
            <text x="360" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Kanta Mata (f_m pendek)</text>
            <line x1="110" y1="138" x2="360" y2="138" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <text x="235" y="151" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">L = f_o + f_m (Pelarasan Normal)</text>
          </svg>
        );
      case 'spherical-mirrors':
        return (
          <svg viewBox="0 0 500 160" className="w-full h-auto" role="img" aria-label="Cermin cekung vs cermin cembung">
            <rect width="500" height="160" fill="var(--svg-bg)" />
            <line x1="20" y1="85" x2="230" y2="85" stroke="#64748B" />
            <path d="M 185 30 Q 210 85 185 140" fill="none" stroke="var(--svg-sky)" strokeWidth="3" />
            <line x1="150" y1="85" x2="150" y2="62" stroke="var(--svg-ink)" strokeWidth="2.5" />
            <line x1="220" y1="85" x2="220" y2="45" stroke="var(--svg-amber)" strokeWidth="2.5" strokeDasharray="3 2" />
            <text x="125" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky)">Cermin Cekung (u &lt; f: diperbesar)</text>
            <line x1="270" y1="85" x2="480" y2="85" stroke="#64748B" />
            <path d="M 380 30 Q 355 85 380 140" fill="none" stroke="var(--svg-emerald)" strokeWidth="3" />
            <line x1="300" y1="85" x2="300" y2="45" stroke="var(--svg-ink)" strokeWidth="2.5" />
            <line x1="402" y1="85" x2="402" y2="68" stroke="var(--svg-amber)" strokeWidth="2.5" strokeDasharray="3 2" />
            <text x="380" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Cermin Cembung (medan terluas)</text>
          </svg>
        );
      case 'f5-vector-forces':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Segi empat selari daya paduan dan leraian satah condong">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            {/* Left: Parallelogram addition */}
            <text x="125" y="20" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Segi Empat Selari Daya Paduan</text>
            <line x1="45" y1="130" x2="175" y2="130" stroke="var(--svg-sky)" strokeWidth="2.5" />
            <line x1="45" y1="130" x2="100" y2="48" stroke="var(--svg-emerald)" strokeWidth="2.5" />
            <line x1="100" y1="48" x2="230" y2="48" stroke="var(--svg-sky)" strokeWidth="1.4" strokeDasharray="4 3" />
            <line x1="175" y1="130" x2="230" y2="48" stroke="var(--svg-emerald)" strokeWidth="1.4" strokeDasharray="4 3" />
            <line x1="45" y1="130" x2="230" y2="48" stroke="var(--svg-red)" strokeWidth="3" />
            <text x="112" y="146" fontSize="10" fontWeight="700" fill="var(--svg-sky)">F₁</text>
            <text x="58" y="85" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">F₂</text>
            <text x="148" y="78" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">Daya Paduan F</text>
            {/* Right: Inclined plane */}
            <text x="405" y="20" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">Leraian Berat di Satah Condong</text>
            <polygon points="300,138 495,138 495,48" fill="var(--svg-subtle)" stroke="var(--svg-axis)" strokeWidth="1.6" />
            <rect x="382" y="70" width="38" height="22" transform="rotate(-24.8 401 81)" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" strokeWidth="1.6" />
            <line x1="401" y1="81" x2="401" y2="145" stroke="var(--svg-red)" strokeWidth="2.2" />
            <line x1="401" y1="81" x2="365" y2="98" stroke="var(--svg-amber)" strokeWidth="2" />
            <line x1="401" y1="81" x2="376" y2="30" stroke="var(--svg-emerald)" strokeWidth="2" />
            <text x="412" y="130" fontSize="10" fontWeight="700" fill="var(--svg-red)">W</text>
            <text x="330" y="96" fontSize="9.5" fontWeight="700" fill="var(--svg-amber)">mg sinθ</text>
            <text x="366" y="28" fontSize="9.5" fontWeight="700" fill="var(--svg-emerald)">R = mg cosθ</text>
          </svg>
        );
      case 'f5-hookes-law':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Graf Hukum Hooke F melawan x dan susunan spring">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            <line x1="55" y1="138" x2="55" y2="25" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <line x1="55" y1="138" x2="250" y2="138" stroke="var(--svg-ink)" strokeWidth="1.5" />
            <polygon points="55,138 190,42 190,138" fill="var(--svg-sky-tint)" />
            <line x1="55" y1="138" x2="190" y2="42" stroke="var(--svg-sky)" strokeWidth="2.6" />
            <path d="M 190 42 Q 218 25 235 24" fill="none" stroke="var(--svg-red)" strokeWidth="2.2" strokeDasharray="4 2" />
            <text x="48" y="30" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">F (N)</text>
            <text x="245" y="152" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--svg-ink)">x (m)</text>
            <text x="145" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-text)">Luas = ½Fx</text>
            <text x="130" y="65" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Cerun = k</text>
            {/* Series vs Parallel summary */}
            <rect x="285" y="30" width="230" height="50" rx="6" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" />
            <text x="400" y="51" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-amber-text)">Sesiri (2 spring): x = 2x₁ · k_eff = ½k</text>
            <text x="400" y="69" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">Lebih lembut, pemanjangan berganda</text>
            <rect x="285" y="92" width="230" height="50" rx="6" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" />
            <text x="400" y="113" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">Selari (2 spring): x = ½x₁ · k_eff = 2k</text>
            <text x="400" y="131" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">Lebih keras, kongsi beban sama rata</text>
          </svg>
        );
      case 'f5-pressure-pascal':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Tekanan cecair dan sistem hidraulik Prinsip Pascal">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            {/* Left: Hydrostatic depth */}
            <rect x="35" y="30" width="85" height="115" fill="var(--svg-blue-tint)" stroke="var(--svg-ink)" strokeWidth="1.6" />
            <path d="M 120 55 Q 150 62 158 145" fill="none" stroke="var(--svg-sky)" strokeWidth="2" />
            <path d="M 120 90 Q 175 96 190 145" fill="none" stroke="var(--svg-sky)" strokeWidth="2.2" />
            <path d="M 120 125 Q 205 130 225 145" fill="none" stroke="var(--svg-red)" strokeWidth="2.5" />
            <text x="130" y="158" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">P = hρg (h besar → pancutan jauh)</text>
            {/* Right: Hydraulic Pascal */}
            <path d="M 295 45 L 295 132 L 495 132 L 495 45 L 430 45 L 430 102 L 330 102 L 330 45 Z" fill="var(--svg-sky-tint)" stroke="var(--svg-ink)" strokeWidth="1.6" />
            <rect x="297" y="55" width="31" height="14" fill="var(--svg-amber)" />
            <rect x="432" y="55" width="61" height="14" fill="var(--svg-emerald)" />
            <line x1="312" y1="22" x2="312" y2="52" stroke="var(--svg-red)" strokeWidth="2.5" />
            <line x1="462" y1="52" x2="462" y2="20" stroke="var(--svg-emerald)" strokeWidth="3" />
            <text x="312" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-red)">F₁ (A₁)</text>
            <text x="462" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">F₂ = (A₂/A₁)F₁</text>
            <text x="395" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">Tekanan Seragam P₁ = P₂ (Prinsip Pascal)</text>
          </svg>
        );
      case 'f5-archimedes-bernoulli':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Prinsip Archimedes dan aerofoil Prinsip Bernoulli">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            {/* Left: Buoyancy */}
            <rect x="25" y="65" width="160" height="80" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" strokeWidth="1.4" />
            <rect x="75" y="45" width="60" height="55" rx="4" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeWidth="1.8" />
            <line x1="105" y1="115" x2="105" y2="75" stroke="var(--svg-emerald)" strokeWidth="2.6" />
            <line x1="105" y1="30" x2="105" y2="62" stroke="var(--svg-red)" strokeWidth="2.2" />
            <text x="148" y="88" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">F_B = ρVg</text>
            <text x="142" y="44" fontSize="10" fontWeight="700" fill="var(--svg-red)">W</text>
            <text x="105" y="158" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">Terapung Pegun: F_B = W</text>
            {/* Right: Aerofoil Bernoulli */}
            <path d="M 290 92 Q 350 42 465 88 Q 375 96 290 92 Z" fill="var(--svg-subtle)" stroke="var(--svg-ink)" strokeWidth="2" />
            <path d="M 240 62 Q 355 32 495 62" fill="none" stroke="var(--svg-sky)" strokeWidth="2" />
            <path d="M 240 76 Q 355 46 495 76" fill="none" stroke="var(--svg-sky)" strokeWidth="2" />
            <path d="M 240 112 Q 355 112 495 112" fill="none" stroke="var(--svg-amber)" strokeWidth="2" />
            <line x1="375" y1="125" x2="375" y2="30" stroke="var(--svg-emerald)" strokeWidth="2.6" />
            <text x="385" y="34" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">Daya Angkat (v↑ ⇒ P↓ di atas)</text>
            <text x="375" y="158" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-ink)">Prinsip Bernoulli: P_bawah &gt; P_atas</text>
          </svg>
        );
      case 'f5-emf-internal':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Graf d.g.e. V melawan I dan litar rintangan dalam">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            {/* Left: Circuit */}
            <rect x="35" y="32" width="175" height="95" rx="6" fill="none" stroke="var(--svg-ink)" strokeWidth="1.8" />
            <rect x="68" y="20" width="90" height="24" rx="4" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" strokeDasharray="3 2" />
            <text x="113" y="36" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-amber-text)">Sel (ε, r)</text>
            <rect x="85" y="116" width="60" height="22" rx="3" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
            <text x="115" y="131" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky-text)">Beban R</text>
            <text x="122" y="155" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--svg-ink)">ε = V + Ir = I(R + r)</text>
            {/* Right: V vs I graph */}
            <line x1="290" y1="138" x2="290" y2="22" stroke="var(--svg-ink)" strokeWidth="1.6" />
            <line x1="290" y1="138" x2="485" y2="138" stroke="var(--svg-ink)" strokeWidth="1.6" />
            <line x1="290" y1="38" x2="465" y2="128" stroke="var(--svg-emerald)" strokeWidth="2.8" />
            <text x="282" y="42" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--svg-emerald)">ε</text>
            <text x="282" y="25" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">V (V)</text>
            <text x="485" y="152" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">I (A)</text>
            <text x="392" y="72" fontSize="10.5" fontWeight="700" fill="var(--svg-red)">Kecerunan = −r</text>
          </svg>
        );
      case 'f5-fleming-motor':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Medan lastik dan petua Fleming motor serta penjana">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            <rect x="25" y="40" width="42" height="80" rx="4" fill="var(--svg-red-tint)" stroke="var(--svg-red)" />
            <text x="46" y="85" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-red-text)">U</text>
            <rect x="210" y="40" width="42" height="80" rx="4" fill="var(--svg-sky-tint)" stroke="var(--svg-sky)" />
            <text x="231" y="85" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--svg-sky-deep)">S</text>
            <path d="M 72 52 Q 138 35 205 52" fill="none" stroke="var(--svg-muted)" strokeWidth="1.6" />
            <path d="M 72 100 Q 138 118 205 100" fill="none" stroke="var(--svg-sky)" strokeWidth="2" />
            <path d="M 72 112 Q 138 134 205 112" fill="none" stroke="var(--svg-sky)" strokeWidth="2" />
            <circle cx="138" cy="80" r="10" fill="var(--svg-amber)" />
            <line x1="138" y1="70" x2="138" y2="25" stroke="var(--svg-emerald)" strokeWidth="3" />
            <text x="150" y="34" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">Daya F (Medan kuat → lemah)</text>
            {/* Fleming comparison */}
            <rect x="278" y="25" width="240" height="52" rx="6" fill="var(--svg-blue-tint)" stroke="var(--svg-sky)" />
            <text x="398" y="46" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky-text)">MOTOR: Tangan KIRI Fleming</text>
            <text x="398" y="64" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">Elektrik (I) + Medan (B) → Daya (F)</text>
            <rect x="278" y="88" width="240" height="52" rx="6" fill="var(--svg-amber-tint)" stroke="var(--svg-amber)" />
            <text x="398" y="109" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-amber-text)">PENJANA: Tangan KANAN Fleming</text>
            <text x="398" y="127" textAnchor="middle" fontSize="9.5" fill="var(--svg-ink)">Gerakan + Medan (B) → Arus Aruhan</text>
          </svg>
        );
      case 'f5-transformer':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Binaan transformer berteras besi lembut berlamina">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            <rect x="135" y="28" width="240" height="110" rx="8" fill="none" stroke="var(--svg-muted)" strokeWidth="22" />
            <rect x="148" y="41" width="214" height="84" rx="4" fill="var(--svg-bg)" stroke="var(--svg-axis)" strokeWidth="1" />
            {/* Primary */}
            {[46, 62, 78, 94, 110].map((y) => (
              <line key={y} x1="118" y1={y} x2="152" y2={y + 6} stroke="var(--svg-sky)" strokeWidth="3.2" />
            ))}
            <text x="65" y="68" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-sky)">Input a.u.</text>
            <text x="65" y="84" textAnchor="middle" fontSize="10" fill="var(--svg-ink)">V_P, N_P, I_P</text>
            {/* Secondary */}
            {[42, 54, 66, 78, 90, 102, 114].map((y) => (
              <line key={y} x1="358" y1={y} x2="392" y2={y + 6} stroke="var(--svg-emerald)" strokeWidth="3.2" />
            ))}
            <text x="462" y="68" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-emerald)">Output a.u.</text>
            <text x="462" y="84" textAnchor="middle" fontSize="10" fill="var(--svg-ink)">V_S, N_S, I_S</text>
            <text x="255" y="86" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--svg-amber)">Teras Besi Lembut Berlamina</text>
            <text x="255" y="156" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--svg-ink)">V_S / V_P = N_S / N_P · Hanya berfungsi dengan a.u.!</text>
          </svg>
        );
      case 'f5-photoelectric-einstein':
        return (
          <svg viewBox="0 0 540 165" className="w-full h-auto" role="img" aria-label="Graf persamaan fotoelektrik Einstein K_maks melawan f">
            <rect width="540" height="165" fill="var(--svg-bg)" />
            <line x1="80" y1="95" x2="480" y2="95" stroke="var(--svg-ink)" strokeWidth="1.6" />
            <line x1="80" y1="18" x2="80" y2="152" stroke="var(--svg-ink)" strokeWidth="1.6" />
            {/* Metal 1: Cs */}
            <line x1="80" y1="122" x2="180" y2="95" stroke="var(--svg-sky)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="180" y1="95" x2="380" y2="28" stroke="var(--svg-sky)" strokeWidth="2.8" />
            {/* Metal 2: Li */}
            <line x1="80" y1="145" x2="265" y2="95" stroke="var(--svg-emerald)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="265" y1="95" x2="465" y2="28" stroke="var(--svg-emerald)" strokeWidth="2.8" />
            <text x="72" y="25" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">K_maks</text>
            <text x="480" y="110" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--svg-ink)">f (Hz)</text>
            <text x="72" y="125" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--svg-sky)">−W_Cs</text>
            <text x="72" y="148" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--svg-emerald)">−W_Li</text>
            <text x="180" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-sky)">f₀(Cs)</text>
            <text x="265" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--svg-emerald)">f₀(Li)</text>
            <text x="355" y="58" fontSize="10" fontWeight="700" fill="var(--svg-red)">Selari: Kecerunan = h</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return <div>{renderGenericSchematic()}</div>;
};
