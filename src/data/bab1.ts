import type { ChapterContent } from '../types/textbook';

export const bab1: ChapterContent = {
  id: 'bab-1',
  formLevel: 4,
  number: 1,
  title: 'Pengukuran',
  pageRange: 'm.s. 2–22',
  overview:
    'Asas bahasa fizik: mempiawaikan kuantiti asas, unit SI, pengelasan skalar-vektor, dan teknik mentafsir graf eksperimen secara tepat.',
  subtopics: [
    {
      id: '1.1',
      chapterId: 'bab-1',
      code: '1.1',
      title: 'Kuantiti Fizik',
      pageRef: 'm.s. 4–9',
      part1Anchor: {
        phenomenon:
          'Tanpa unit piawai yang seragam, ukuran saintifik dan kejuruteraan gagal berkomunikasi — kesilapan unit metrik vs imperial pernah memusnahkan kapal angkasa Mars Climate Orbiter bernilai jutaan dolar.',
        chapterConnection:
          'Menetapkan 7 kuantiti asas SI, kaedah menerbitkan semua kuantiti fizik lain, dan membezakan kuantiti skalar dengan vektor sebelum mempelajari gerakan dan daya.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kuantiti Fizik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kuantiti fizik ialah ' },
            { text: 'kuantiti yang boleh diukur', keyword: true },
            { text: ' dan mempunyai ' },
            { text: 'nilai berangka serta unit', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Kuantiti Asas',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kuantiti asas ialah ' },
            { text: 'kuantiti fizik yang tidak dapat ditakrifkan', keyword: true },
            { text: ' dalam sebutan ' },
            { text: 'kuantiti fizik yang lain', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Kuantiti Terbitan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kuantiti terbitan ialah ' },
            { text: 'kuantiti fizik yang diterbitkan daripada gabungan kuantiti asas', keyword: true },
            { text: ' melalui operasi ' },
            { text: 'pendaraban atau pembahagian', keyword: true },
            { text: ' atau kedua-duanya.' },
          ],
        },
        {
          title: 'Kuantiti Skalar',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kuantiti skalar ialah kuantiti fizik yang mempunyai ' },
            { text: 'magnitud sahaja', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Kuantiti Vektor',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kuantiti vektor ialah kuantiti fizik yang mempunyai ' },
            { text: 'magnitud dan arah', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Unit SI Wajib dalam Pengiraan Fizik',
            cause: 'Penggunaan sistem unit bercampur (imperial seperti inci/paun vs metrik m/kg).',
            mechanism: 'Perisian atau rumus fizikal mentafsir nombor tanpa faktor penukaran unit yang betul.',
            effect: 'Ralat magnitud besar berlaku (cth: kegagalan Mars Climate Orbiter 1999); penukaran awal ke unit SI menghapuskan kekeliruan.',
          },
          {
            title: 'Menerbitkan Unit Asas SI bagi Kuantiti Terbitan',
            cause: 'Setiap kuantiti terbitan ditakrifkan oleh rumus melibatkan kuantiti asas.',
            mechanism: 'Gantikan setiap simbol rumus dengan unit SI asasnya ($m, kg, s, A, K$) secara darab/bahagi.',
            effect: 'Unit terbitan rasmi (seperti $\\text{N} = \\text{kg m s}^{-2}$) boleh dibuktikan konsisten secara dimensi.',
          },
        ],
        tables: [
          {
            title: 'Tujuh Kuantiti Asas dan Unit SI (Jadual 1.1)',
            headers: ['Kuantiti Asas', 'Simbol Kuantiti', 'Unit SI', 'Simbol Unit'],
            rows: [
              ['Panjang', '$l$', 'meter', '$\\text{m}$'],
              ['Jisim', '$m$', 'kilogram', '$\\text{kg}$'],
              ['Masa', '$t$', 'saat', '$\\text{s}$'],
              ['Suhu termodinamik', '$T$', 'kelvin', '$\\text{K}$'],
              ['Arus elektrik', '$I$', 'ampere', '$\\text{A}$'],
              ['Keamatan berluminositi', '$I_v$', 'candela', '$\\text{cd}$'],
              ['Kuantiti bahan', '$n$', 'mol', '$\\text{mol}$'],
            ],
          },
          {
            title: 'Kuantiti Terbitan Penting & Sebutan Unit Asas SI (Jadual 1.2)',
            headers: ['Kuantiti Terbitan', 'Rumus Asas', 'Sebutan Unit Asas SI', 'Unit Khas'],
            rows: [
              ['Luas ($A$)', '$l \\times l$', '$\\text{m}^2$', '—'],
              ['Isi padu ($V$)', '$l \\times l \\times l$', '$\\text{m}^3$', '—'],
              ['Ketumpatan ($\\rho$)', '$\\frac{m}{V}$', '$\\text{kg m}^{-3}$', '—'],
              ['Halaju ($v$)', '$\\frac{s}{t}$', '$\\text{m s}^{-1}$', '—'],
              ['Pecutan ($a$)', '$\\frac{v - u}{t}$', '$\\text{m s}^{-2}$', '—'],
              ['Daya ($F$)', '$m \\times a$', '$\\text{kg m s}^{-2}$', '$\\text{N}$ (newton)'],
              ['Momentum ($p$)', '$m \\times v$', '$\\text{kg m s}^{-1}$', '$\\text{N s}$'],
              ['Tekanan ($P$)', '$\\frac{F}{A}$', '$\\text{kg m}^{-1}\\text{ s}^{-2}$', '$\\text{Pa}$ (pascal)'],
              ['Kerja / Tenaga ($W, E$)', '$F \\times s$', '$\\text{kg m}^2\\text{ s}^{-2}$', '$\\text{J}$ (joule)'],
              ['Kuasa ($P$)', '$\\frac{W}{t}$', '$\\text{kg m}^2\\text{ s}^{-3}$', '$\\text{W}$ (watt)'],
              ['Cas elektrik ($Q$)', '$I \\times t$', '$\\text{A s}$', '$\\text{C}$ (coulomb)'],
            ],
          },
          {
            title: 'Perbandingan Kuantiti Skalar vs Kuantiti Vektor',
            headers: ['Aspek', 'Kuantiti Skalar', 'Kuantiti Vektor'],
            rows: [
              ['Ciri', 'Magnitud sahaja', 'Magnitud dan arah'],
              ['Operasi matematik', 'Tambah/tolak secara aritmetik biasa', 'Mengambil kira arah ($+$ atau $-$, kaedah segi tiga/segi empat selari)'],
              ['Contoh Fizik T4', 'Jarak, laju, jisim, masa, suhu, ketumpatan, isi padu, kerja, tenaga, kuasa, haba', 'Sesaran, halaju, pecutan, daya, momentum, impuls, berat, kekuatan medan graviti'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Imbuhan SI Lazim',
            latex: '\\text{M } (10^6) \\leftrightarrow \\text{k } (10^3) \\leftrightarrow \\text{asas } (10^0) \\leftrightarrow \\text{c } (10^{-2}) \\leftrightarrow \\text{m } (10^{-3}) \\leftrightarrow \\mu \\ (10^{-6})',
            symbols: [
              { symbol: 'k', meaning: 'kilo ($10^3$)', unit: 'cth: $1\\text{ km} = 1000\\text{ m}$' },
              { symbol: 'c', meaning: 'senti ($10^{-2}$)', unit: 'cth: $1\\text{ cm} = 0.01\\text{ m}$' },
              { symbol: 'm', meaning: 'mili ($10^{-3}$)', unit: 'cth: $1\\text{ mm} = 10^{-3}\\text{ m}$' },
            ],
            appliesWhen: 'Menukar ukuran makmal (cm, g, km, jam) kepada unit SI sebelum menggantikan ke dalam rumus.',
            failsWhen: 'Menukar luas ($\\text{cm}^2 \\to \\text{m}^2$ darab $10^{-4}$) atau isi padu ($\\text{cm}^3 \\to \\text{m}^3$ darab $10^{-6}$): jangan lupa kuasa 2 atau 3!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Mengungkapkan Unit Terbitan dalam Unit Asas SI',
          problem: 'Ungkapkan unit bagi tenaga kinetik, $E_k = \\frac{1}{2}mv^2$, dalam sebutan unit asas SI dan seterusnya dalam joule.',
          given: ['Jisim $m$ dalam unit $\\text{kg}$', 'Halaju $v$ dalam unit $\\text{m s}^{-1}$', 'Pemalar $\\frac{1}{2}$ tidak berunit'],
          formulaLatex: '[E_k] = [m] \\times [v]^2',
          formulaWhy: 'Pemalar tanpa dimensi digugurkan semasa analisis unit.',
          substituteLatex: '[E_k] = \\text{kg} \\times (\\text{m s}^{-1})^2 = \\text{kg m}^2\\text{ s}^{-2}',
          answer: '$\\text{kg m}^2\\text{ s}^{-2}$ atau $\\text{J}$ (joule)',
          trapAlert: 'Jangan lupa mengkuasaduakan kedua-dua $\\text{m}$ dan $\\text{s}^{-1}$: $(\\text{m s}^{-1})^2 = \\text{m}^2\\text{ s}^{-2}$, bukannya $\\text{m s}^{-2}$!',
        },
        {
          title: 'Contoh 2: Penukaran Laju kepada Unit SI',
          problem: 'Sebuah kereta bergerak dengan halaju $90\\text{ km j}^{-1}$. Tukarkan kepada unit SI $\\text{m s}^{-1}$.',
          given: ['$1\\text{ km} = 1000\\text{ m}$', '$1\\text{ jam} = 3600\\text{ s}$'],
          formulaLatex: 'v = \\frac{90\\text{ km}}{1\\text{ j}}',
          formulaWhy: 'Tukarkan pengangka kepada meter dan penyebut kepada saat secara berasingan.',
          substituteLatex: 'v = \\frac{90 \\times 1000\\text{ m}}{3600\\text{ s}} = \\frac{90}{3.6}',
          answer: '$25\\text{ m s}^{-1}$',
          trapAlert: 'Ramai pelajar mendarab $3.6$ dan bukannya membahagi $3.6$. Ingat: nilai $\\text{m s}^{-1}$ sentiasa lebih kecil daripada $\\text{km j}^{-1}$.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan 7 kuantiti asas berserta unit SI masing-masing.', answer: 'Panjang (m), Jisim (kg), Masa (s), Suhu termodinamik (K), Arus elektrik (A), Keamatan berluminositi (cd), Kuantiti bahan (mol).' },
          { question: 'Apakah perbezaan antara kuantiti skalar dengan kuantiti vektor?', answer: 'Kuantiti skalar mempunyai magnitud sahaja, manakala kuantiti vektor mempunyai magnitud dan arah.' },
          { question: 'Nyatakan unit asas SI bagi tekanan ($P = F/A$).', answer: '$\\text{kg m}^{-1}\\text{ s}^{-2}$ (bersamaan $\\text{N m}^{-2}$ atau $\\text{Pa}$).' },
        ],
        fadedProblem: {
          prompt: 'Ketumpatan merkuri ialah $13.6\\text{ g cm}^{-3}$. Tukarkan nilai ini kepada unit asas SI ($\\text{kg m}^{-3}$).',
          step1GivenAndFormula: 'Diberi: $1\\text{ g} = 10^{-3}\\text{ kg}$, $1\\text{ cm}^3 = (10^{-2}\\text{ m})^3 = 10^{-6}\\text{ m}^3$.',
          studentTask: 'Kira penggantian langkah 2–4 pada kertas kosong sebelum membuka skema.',
          answerSteps: 'Langkah 3: $\\rho = \\frac{13.6 \\times 10^{-3}\\text{ kg}}{10^{-6}\\text{ m}^3}$ → Langkah 4: $\\rho = 1.36 \\times 10^4\\text{ kg m}^{-3}$.',
        },
        transferQuestion: {
          question: 'Seorang pelari berlari $30\\text{ m}$ ke timur dan kemudian $40\\text{ m}$ ke utara dalam masa $10\\text{ s}$. Bandingkan laju purata (skalar) dan magnitud halaju purata (vektor) pelari itu.',
          answer: 'Jarak = $30 + 40 = 70\\text{ m}$ ⇒ Laju purata = $70/10 = 7.0\\text{ m s}^{-1}$. Sesaran = $\\sqrt{30^2 + 40^2} = 50\\text{ m}$ ⇒ Magnitud halaju purata = $50/10 = 5.0\\text{ m s}^{-1}$.',
        },
      },
    },
    {
      id: '1.2',
      chapterId: 'bab-1',
      code: '1.2',
      title: 'Penyiasatan Saintifik',
      pageRef: 'm.s. 10–19',
      part1Anchor: {
        phenomenon:
          'Data jadual mentah sukar menampakkan corak hukum alam; hanya graf yang mendedahkan hubungan tepat antara pemboleh ubah serta membenarkan ramalan di dalam dan luar julat ukuran.',
        chapterConnection:
          'Kemahiran membaca bentuk graf, mengira kecerunan/luas, dan menulis laporan eksperimen bandul ringkas digunakan sepanjang Bab 2 hingga Bab 6.',
      },
      part2SacredDefinitions: [
        {
          title: 'Berkadar Terus ($y \\propto x$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: '$y$ ' },
            { text: 'berkadar terus', keyword: true },
            { text: ' dengan $x$ apabila graf $y$ melawan $x$ ialah ' },
            { text: 'garis lurus yang melalui asalan $(0,0)$', keyword: true },
            { text: ' dengan kecerunan positif.' },
          ],
          equationLatex: 'y = mx',
        },
        {
          title: 'Interpolasi',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Interpolasi ialah proses menentukan nilai suatu kuantiti ' },
            { text: 'di dalam julat data', keyword: true },
            { text: ' yang direkodkan daripada graf.' },
          ],
        },
        {
          title: 'Ekstrapolasi',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ekstrapolasi ialah proses menentukan nilai suatu kuantiti ' },
            { text: 'di luar julat data', keyword: true },
            { text: ' dengan ' },
            { text: 'memanjangkan garis graf', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Cara Memilih Panjang Bandul & Kiraan 20 Ayunan dalam Eksperimen 1.1',
            cause: 'Mengukur masa 1 ayunan tunggal secara manual menghasilkan ralat tindak balas manusia yang besar.',
            mechanism: 'Catat masa $t_1$ dan $t_2$ untuk 20 ayunan lengkap ($T = t_{\\text{purata}}/20$) dengan sudut ayunan kecil ($\\theta < 10^\\circ$).',
            effect: 'Ralat rawak dibahagi 20 kali ganda dan ayunan kekal dalam satah gerakan harmonik ringkas yang tepat.',
          },
        ],
        tables: [
          {
            title: 'Enam Bentuk Graf Piawai KSSM & Cara Mentafsirnya',
            headers: ['Bentuk Graf $y$ melawan $x$', 'Persamaan', 'Hubungan Tepat SPM'],
            rows: [
              ['Garis lurus melalui asalan $(0,0)$, cerun $+$', '$y = mx$', '$y$ berkadar terus dengan $x$ ($y \\propto x$)'],
              ['Garis lurus dengan pintasan-$y$ positif, cerun $+$', '$y = mx + c$', '$y$ bertambah secara linear dengan $x$'],
              ['Garis lurus dengan pintasan-$y$ positif, cerun $-$', '$y = -mx + c$', '$y$ berkurang secara linear dengan $x$'],
              ['Lengkung menaik dari asalan / condong ke atas', '$y = ax^2$ dll.', '$y$ bertambah dengan $x$ (bukan linear)'],
              ['Lengkung menurun tidak menyentuh paksi', '$y = k/x$', '$y$ berkadar songsang dengan $x$ ($y \\propto 1/x$)'],
              ['Plot $y$ melawan $1/x$: garis lurus melalui $(0,0)$', '$y = k(1/x)$', 'Mengesahkan $y$ berkadar songsang dengan $x$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kecerunan Graf & Persamaan Bandul Ringkas',
            latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}, \\qquad T = 2\\pi\\sqrt{\\frac{l}{g}} \\implies T^2 = \\left(\\frac{4\\pi^2}{g}\\right)l',
            symbols: [
              { symbol: 'm', meaning: 'Kecerunan graf (mesti ada unit = unit $y$ / unit $x$)', unit: '$\\text{s}^2\\text{ m}^{-1}$ (bagi $T^2$-$l$)' },
              { symbol: 'T', meaning: 'Tempoh satu ayunan lengkap', unit: '$\\text{s}$' },
              { symbol: 'l', meaning: 'Panjang bandul dari titik gantung ke pusat ladung', unit: '$\\text{m}$' },
              { symbol: 'g', meaning: 'Pecutan graviti ($g = \\frac{4\\pi^2}{m}$)', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Segi tiga kecerunan dilukis besar ($\\ge 8\\text{ cm} \\times 8\\text{ cm}$ pada kertas graf) menggunakan dua titik di atas garis penyuaian terbaik.',
            failsWhen: 'Mengambil dua titik terus daripada jadual data yang tidak terletak tepat pada garis penyuaian terbaik, atau sudut ayunan $> 10^\\circ$.',
          },
        ],
        diagrams: [
          {
            kind: 'graph-shapes',
            title: 'Penyahkodan Bentuk Graf Asas (Kecerunan vs Luas)',
            whatItShows: 'Perbandingan garis berkadar terus ($y \\propto x$), bertambah linear ($y = mx + c$), berkurang linear ($y = -mx + c$), dan berkadar songsang ($y \\propto 1/x$).',
            axisOrRule: 'Unit kecerunan = $\\frac{\\text{unit paksi-}y}{\\text{unit paksi-}x}$; Unit luas di bawah graf = $\\text{unit paksi-}y \\times \\text{unit paksi-}x$.',
          },
          {
            kind: 'pendulum-setup',
            title: 'Susunan Radas Eksperimen 1.1: Bandul Ringkas',
            whatItShows: 'Benang diapit antara dua kepingan kayu/gabus pada kaki retort; panjang $l$ diukur hingga ke pusat jisim ladung.',
            axisOrRule: 'Graf $T^2$ melawan $l$ ialah garis lurus melalui asalan; $g = \\frac{4\\pi^2}{\\text{kecerunan}}$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 1.1',
            title: 'Tempoh Ayunan Bandul Ringkas',
            aim: 'Mengkaji hubungan antara panjang bandul, $l$ dengan tempoh ayunan, $T$ bagi satu bandul ringkas.',
            inference: 'Tempoh ayunan bandul ringkas bergantung pada panjang bandul.',
            hypothesis: 'Semakin bertambah panjang bandul, semakin bertambah tempoh ayunan (atau $T^2$ berkadar terus dengan $l$).',
            variables: {
              manipulated: 'Panjang bandul, $l$',
              responding: 'Tempoh ayunan, $T$ (dan $T^2$)',
              fixed: 'Jisim ladung bandul dan sudut ayunan ($< 10^\\circ$)',
            },
            setupLogic: 'Apit benang antara dua kepingan papan lapis pada kaki retort. Ukur masa 20 ayunan lengkap dua kali ($t_1, t_2$), hitung $t_{\\text{purata}}$ dan $T = t_{\\text{purata}}/20$. Ulang untuk $l = 20.0, 30.0, 40.0, 50.0, 60.0\\text{ cm}$.',
            expectedResult: 'Graf $T$ melawan $l$ melengkung ke atas; graf $T^2$ melawan $l$ ialah garis lurus melalui asalan.',
            conclusion: '$T^2$ berkadar terus dengan $l$. Hipotesis diterima.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Pecutan Graviti $g$ daripada Graf $T^2$ melawan $l$',
          problem: 'Daripada graf $T^2$ melawan $l$ bandul ringkas, garis lurus melalui asalan dan titik $(0.75\\text{ m}, 3.02\\text{ s}^2)$. Hitung pecutan graviti $g$.',
          given: ['Titik 1: $(0, 0)$', 'Titik 2: $(0.75\\text{ m}, 3.02\\text{ s}^2)$'],
          formulaLatex: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{4\\pi^2}{g}',
          formulaWhy: 'Bandingkan $T^2 = \\left(\\frac{4\\pi^2}{g}\\right)l$ dengan $y = mx$ untuk memadankan kecerunan $m$.',
          substituteLatex: 'm = \\frac{3.02 - 0}{0.75 - 0} = 4.027\\text{ s}^2\\text{ m}^{-1}; \\quad g = \\frac{4\\pi^2}{4.027}',
          answer: '$g \\approx 9.80\\text{ m s}^{-2}$',
          trapAlert: 'Pastikan panjang $l$ ditukar daripada $\\text{cm}$ kepada $\\text{m}$ sebelum mengira $g$!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan syarat untuk $y$ dikatakan "berkadar terus" dengan $x$.', answer: 'Graf $y$ melawan $x$ ialah garis lurus yang melalui asalan $(0,0)$.' },
          { question: 'Apakah perbezaan antara interpolasi dengan ekstrapolasi?', answer: 'Interpolasi mencari nilai di dalam julat data graf; ekstrapolasi memanjangkan garis untuk mencari nilai di luar julat data.' },
          { question: 'Mengapakah masa bagi 20 ayunan diukur dalam Eksperimen 1.1?', answer: 'Untuk mengurangkan peratusan ralat rawak akibat masa tindak balas manusia semasa menekan jam randik.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah bandul ringkas berayun sebanyak 20 kali dalam masa $28.4\\text{ s}$ apabila panjangnya $0.50\\text{ m}$. Anggarkan nilai $g$.',
          step1GivenAndFormula: 'Diberi: $n = 20$, $t = 28.4\\text{ s} \\implies T = \\frac{28.4}{20} = 1.42\\text{ s}$, $l = 0.50\\text{ m}$. Rumus: $g = \\frac{4\\pi^2 l}{T^2}$.',
          studentTask: 'Lengkapkan langkah penggantian dan jawapan dengan unit yang betul.',
          answerSteps: 'Langkah 3: $g = \\frac{4\\pi^2 (0.50)}{(1.42)^2}$ → Langkah 4: $g = 9.79\\text{ m s}^{-2}$.',
        },
        transferQuestion: {
          question: 'Seorang murid menggantikan ladung bandul besi ($50\\text{ g}$) dengan ladung tembaga ($100\\text{ g}$) pada panjang benang yang sama. Ramalkan perubahan pada kecerunan graf $T^2$ melawan $l$. Terangkan.',
          answer: 'Kecerunan tidak berubah kerana $T^2 = \\left(\\frac{4\\pi^2}{g}\\right)l$ tidak bergantung pada jisim ladung bandul.',
        },
      },
    },
  ],
};
