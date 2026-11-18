import type { ChapterContent } from '../types/textbook';

export const t5bab3: ChapterContent = {
  id: 't5-bab-3',
  formLevel: 5,
  number: 3,
  title: 'Keelektrikan',
  pageRange: 'm.s. 90–131',
  overview:
    'Memahami medan elektrik serta kesan ke atas cas dan nyalaan lilin, hubungan arus-beza keupayaan dan Hukum Ohm, faktor kerintangan dawai $R = \\rho l/A$ dan superkonduktor, daya gerak elektrik (d.g.e.) serta rintangan dalam sel kering, dan kuasa elektrik serta kecekapan tenaga.',
  subtopics: [
    {
      id: 't5-3.1',
      chapterId: 't5-bab-3',
      code: '3.1',
      title: 'Arus dan Beza Keupayaan',
      pageRef: 'm.s. 92–99',
      part1Anchor: {
        phenomenon:
          'Kilat menyambar dan nyalaan lilin terbelah antara dua plat voltan tinggi menunjukkan cas elektrik wujud dalam medan daya tak kelihatan; dalam wayar rumah pula, cas mengalir hanya apabila bateri atau penjana membina perbezaan keupayaan antara dua hujung.',
        chapterConnection:
          'Mendirikan tiga kuantiti teras elektrik — kekuatan medan $E$, arus $I$, dan beza keupayaan $V$ — sebelum menganalisis halangan alirannya dalam Rintangan (3.2) dan sumber kuasa dalam d.g.e. (3.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Medan Elektrik & Kekuatan Medan Elektrik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Medan elektrik ialah ' },
            { text: 'kawasan di sekitar suatu zarah bercas', keyword: true },
            { text: ' di mana sebarang cas elektrik yang berada dalam kawasan tersebut akan ' },
            { text: 'mengalami daya elektrik', keyword: true },
            { text: '. Kekuatan medan elektrik, $E$ ialah ' },
            { text: 'daya elektrik yang bertindak ke atas seunit cas positif', keyword: true },
            { text: ' yang diletakkan pada titik itu.' },
          ],
          equationLatex: 'E = \\frac{F}{q} = \\frac{V}{d}',
        },
        {
          title: 'Arus Elektrik ($I$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Arus elektrik, $I$ ialah ' },
            { text: 'kadar pengaliran cas, $Q$', keyword: true },
            { text: ' dalam suatu konduktor.' },
          ],
          equationLatex: 'I = \\frac{Q}{t} \\implies Q = It',
        },
        {
          title: 'Beza Keupayaan ($V$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Beza keupayaan, $V$ di antara dua titik dalam suatu medan elektrik ialah ' },
            { text: 'kerja, $W$ yang dilakukan', keyword: true },
            { text: ' untuk menggerakkan ' },
            { text: 'satu coulomb cas', keyword: true },
            { text: ' di antara dua titik tersebut.' },
          ],
          equationLatex: 'V = \\frac{W}{Q} = \\frac{E}{Q}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Ayunan Bola Polistirena Bersalut Kerajang Aluminium dalam Medan V.L.T.',
            cause: 'Bola neutral digantung antara plat positif dan negatif, lalu disentuhkan pada plat negatif.',
            mechanism: 'Bola menerima elektron dan menjadi bercas negatif, lalu ditolak oleh plat negatif dan ditarik ke plat positif. Di plat positif, elektron dipindahkan keluar menyebabkan bola bercas positif dan ditolak semula ke plat negatif.',
            effect: 'Bola berayun berulang-alik secara berterusan selagi bekalan kuasa V.L.T. dihidupkan (frekuensi ayunan meningkat jika $V$ dinaikkan atau jarak plat $d$ dikurangkan).',
          },
          {
            title: 'Mengapa Sebaran Nyalaan Lilin Lebih Besar ke Arah Plat Negatif',
            cause: 'Lilin menyala diletakkan di antara dua plat V.L.T. bertentangan cas.',
            mechanism: 'Haba lilin mengionkan udara menjadi ion positif (berjisim & bersaiz besar) dan ion negatif (elektron ringan). Ion positif ditarik ke plat negatif manakala ion negatif ditarik ke plat positif.',
            effect: 'Kerana ion positif jauh lebih berat dan besar, tarikan udara oleh ion positif menghasilkan sebaran nyalaan yang jelas lebih besar menghala ke plat negatif.',
          },
        ],
        tables: [
          {
            title: 'Rumusan Kuantiti & Pemalar Asas Cas Elektrik',
            headers: ['Kuantiti / Pemalar', 'Simbol & Rumus', 'Unit SI & Makna'],
            rows: [
              ['Kekuatan medan elektrik', '$E = \\frac{F}{q}$ atau $E = \\frac{V}{d}$', '$\\text{N C}^{-1}$ atau $\\text{V m}^{-1}$ (seragam antara dua plat selari)'],
              ['Cas satu elektron', '$e = 1.6 \\times 10^{-19}\\text{ C}$', '$1\\text{ C} = 6.25 \\times 10^{18}$ elektron'],
              ['Arus elektrik', '$I = \\frac{Q}{t} = \\frac{ne}{t}$', '$\\text{A}$ ($\\text{C s}^{-1}$); $n$ = bilangan elektron'],
              ['Beza keupayaan', '$V = \\frac{W}{Q}$', '$\\text{V}$ ($\\text{J C}^{-1}$); $1\\text{ V} = 1\\text{ J}$ kerja menggerakkan $1\\text{ C}$ cas'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kekuatan Medan Plat Selari, Arus & Beza Keupayaan',
            latex: 'E = \\frac{V}{d}, \\qquad Q = It = ne, \\qquad W = VQ',
            symbols: [
              { symbol: 'E', meaning: 'Kekuatan medan elektrik', unit: '$\\text{V m}^{-1}$ / $\\text{N C}^{-1}$' },
              { symbol: 'd', meaning: 'Jarak pemisahan antara dua plat selari', unit: '$\\text{m}$' },
              { symbol: 'Q', meaning: 'Jumlah cas elektrik yang mengalir', unit: '$\\text{C}$' },
              { symbol: 'n', meaning: 'Bilangan elektron ($e = 1.6 \\times 10^{-19}\\text{ C}$)', unit: 'tiada unit' },
            ],
            appliesWhen: '$E = V/d$ sah bagi medan elektrik seragam di antara dua plat logam selari.',
            failsWhen: 'Masa $t$ dalam $Q = It$ wajib dalam **saat ($\\text{s}$)**, bukan minit atau jam! Jarak $d$ antara plat mesti dalam **meter ($\\text{m}$)**.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-emf-internal',
            title: 'Garis Medan Elektrik Seragam & Beza Keupayaan Litar',
            whatItShows: 'Garis medan elektrik sentiasa keluar dari cas/plat positif menuju ke cas/plat negatif (selari dan sekata di antara dua plat selari) serta konsep tenaga per cas dalam litar.',
            axisOrRule: 'Anak panah garis medan elektrik sentiasa menghala dari terminal/cas positif ($+$) ke terminal/cas negatif ($-$) dan tidak pernah bersilang.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Mengira Bilangan Elektron Mengalir Selama 3 Jam',
          problem: 'Sebuah papan iklan elektronik mengalirkan arus $4.0 \\times 10^{-2}\\text{ A}$. Berapakah bilangan elektron yang mengalir dalam litar itu apabila suis dihidupkan selama $3\\text{ jam}$? [$e = 1.6 \\times 10^{-19}\\text{ C}$]',
          given: ['$I = 4.0 \\times 10^{-2}\\text{ A}$', '$t = 3\\text{ jam} = 3 \\times 3600 = 10\\,800\\text{ s}$', '$e = 1.6 \\times 10^{-19}\\text{ C}$'],
          formulaLatex: 'Q = It = ne \\implies n = \\frac{It}{e}',
          formulaWhy: 'Jumlah cas adalah hasil darab arus dengan masa dalam saat, dan setiap elektron membawa cas $e$.',
          substituteLatex: 'Q = (4.0 \\times 10^{-2}) \\times 10\\,800 = 432\\text{ C}; \\quad n = \\frac{432}{1.6 \\times 10^{-19}}',
          answer: '$n = 2.70 \\times 10^{21}$ elektron.',
          trapAlert: 'Kesilapan klasik: mendarab $t = 3\\text{ jam}$ dengan $60$ sahaja (minit) dan terlupa darab $3600$ untuk menjadi saat!',
        },
        {
          title: 'Contoh 2: Jumlah Cas dan Tenaga Mentol',
          problem: 'Sebuah mentol berlabel $3.0\\text{ V}, 0.2\\text{ A}$ menyala selama $1\\text{ jam}$. Hitung (a) jumlah cas mengalir $Q$, dan (b) jumlah tenaga elektrik yang dijanakan $E$.',
          given: ['$V = 3.0\\text{ V}$', '$I = 0.2\\text{ A}$', '$t = 1\\text{ jam} = 3600\\text{ s}$'],
          formulaLatex: 'Q = It, \\qquad E = VQ',
          formulaWhy: 'Takrifan arus memberi $Q$, kemudian takrifan beza keupayaan memberi kerja/tenaga $E = VQ$.',
          substituteLatex: 'Q = 0.2 \\times 3600 = 720\\text{ C}; \\qquad E = 3.0 \\times 720',
          answer: '(a) $Q = 720\\text{ C}$; (b) $E = 2160\\text{ J}$.',
          trapAlert: 'Pastikan bola polistirena dalam eksperimen medan disalut kerajang aluminium supaya dapat mengalirkan/menerima cas dan digantung dengan benang nilon penebat supaya cas tidak bocor ke bumi.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan arah anak panah garis medan elektrik.', answer: 'Sentiasa menghala keluar dari cas positif menuju ke cas negatif.' },
          { question: 'Mengapakah benang nilon digunakan untuk menggantung bola polistirena bersalut kerajang aluminium dalam eksperimen medan V.L.T.?', answer: 'Benang nilon ialah penebat elektrik untuk menghalang cas daripada mengalir ke kaki retort / bumi.' },
          { question: 'Apakah maksud beza keupayaan $12\\text{ V}$ pada terminal bateri kereta?', answer: 'Tenaga sebanyak $12\\text{ J}$ digunakan untuk menggerakkan $1\\text{ C}$ cas merentasi dua titik tersebut.' },
        ],
        fadedProblem: {
          prompt: 'Dua plat logam selari terpisah sejauh $5.0\\text{ cm}$ disambungkan kepada bekalan kuasa $4000\\text{ V}$.',
          step1GivenAndFormula: 'Diberi: $d = 5.0\\text{ cm} = 0.050\\text{ m}$, $V = 4000\\text{ V}$. Rumus: $E = \\frac{V}{d}$.',
          studentTask: 'Hitung kekuatan medan elektrik $E$ antara plat dan daya ke atas elektron ($e = 1.6 \\times 10^{-19}\\text{ C}$).',
          answerSteps: '$E = \\frac{4000}{0.050} = 8.0 \\times 10^4\\text{ V m}^{-1}$; $F = eE = (1.6 \\times 10^{-19})(8.0 \\times 10^4) = 1.28 \\times 10^{-14}\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Dalam aktiviti bola polistirena di antara dua plat V.L.T., apakah perubahan kepada laju ayunan bola jika jarak di antara kedua-dua plat dikurangkan? Terangkan.',
          answer: 'Ayunan menjadi lebih laju (frekuensi bertambah). Apabila jarak $d$ berkurang, kekuatan medan elektrik $E = V/d$ meningkat lalu menghasilkan daya tarikan dan tolakan elektrik yang lebih besar ke atas bola bercas pada jarak laluan yang lebih pendek.',
        },
      },
    },
    {
      id: 't5-3.2',
      chapterId: 't5-bab-3',
      code: '3.2',
      title: 'Rintangan',
      pageRef: 'm.s. 100–113',
      part1Anchor: {
        phenomenon:
          'Wayar kuprum menghantar elektrik hampir tanpa memanas, dawai nikrom di dalam cerek menjadi merah menyala apabila arus mengalir melaluinya, manakala bahan superkonduktor seperti MRI membuang rintangan terus kepada sifar pada suhu genting.',
        chapterConnection:
          'Menerangkan nisbah antara beza keupayaan (3.1) dengan arus sebagai Rintangan $R$, menganalisis litar bersiri/selari, dan menyambungkan kerintangan kepada kecekapan penghantaran tenaga (3.4).',
      },
      part2SacredDefinitions: [
        {
          title: 'Hukum Ohm',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Ohm menyatakan bahawa ' },
            { text: 'beza keupayaan yang merentasi suatu konduktor adalah berkadar terus dengan arus elektrik', keyword: true },
            { text: ' yang mengalir melaluinya jika ' },
            { text: 'suhu dan keadaan fizik lain adalah tetap', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'V = IR',
        },
        {
          title: 'Kerintangan Dawai ($\\rho$) & Superkonduktor',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kerintangan dawai, $\\rho$ ialah suatu ukuran bagi keupayaan konduktor untuk ' },
            { text: 'menentang pengaliran arus elektrik', keyword: true },
            { text: '. ' },
            { text: 'Superkonduktor', keyword: true },
            { text: ' ialah bahan yang mengkonduksikan elektrik ' },
            { text: 'tanpa sebarang rintangan', keyword: true },
            { text: ' pada atau di bawah ' },
            { text: 'suhu genting, $T_c$', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'R = \\frac{\\rho l}{A}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Mentol Filamen Tungsten Tidak Mematuhi Hukum Ohm',
            cause: 'Arus yang mengalir melalui filamen tungsten meningkat apabila voltan dinaikkan.',
            mechanism: 'Filamen menjadi semakin panas. Suhu tinggi meningkatkan getaran atom logam, menambah perlanggaran dengan elektron mengalir.',
            effect: 'Rintangan filamen $R = V/I$ meningkat dengan suhu; graf $V$ melawan $I$ melengkung ke atas (bukan garis lurus).',
          },
          {
            title: 'Perbandingan Litar Bersiri vs Litar Selari',
            cause: 'Perintang disusun sama ada pada satu laluan tunggal (bersiri) atau cabang selari.',
            mechanism: 'Dalam litar bersiri, arus sama $I = I_1 = I_2$ manakala voltan terbahagi $V = V_1 + V_2$. Dalam litar selari, voltan merentasi setiap cabang sama $V = V_1 = V_2$ manakala arus terbahagi $I = I_1 + I_2$.',
            effect: 'Menambah perintang secara bersiri meningkatkan rintangan berkesan ($R = R_1 + R_2$); menambah cabang secara selari mengurangkan rintangan berkesan ($\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$).',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Konduktor Ohm vs Bukan Ohm & Kelas Bahan (Jadual 3.10)',
            headers: ['Jenis Bahan / Konduktor', 'Kerintangan ($\\Omega\\text{ m}$) / Graf $V$-$I$', 'Contoh & Kegunaan'],
            rows: [
              ['Konduktor Ohm (cth: dawai konstantan)', 'Graf $V$-$I$ garis lurus melalui asalan; $R$ malar', 'Perintang piawai makmal pada suhu malar'],
              ['Konduktor Bukan Ohm (cth: filamen tungsten)', 'Graf $V$-$I$ melengkung dengan kecerunan meningkat', 'Filamen mentol kerana suhunya meningkat mendadak'],
              ['Bukan konduktor (penebat)', 'Kerintangan paling tinggi ($\\gg 10^{10}$)', 'Plastik, kayu (penutup kotak fius & salutan wayar)'],
              ['Semikonduktor', 'Kerintangan antara penebat dan konduktor', 'Silikon, germanium (cip elektronik, diod, transistor)'],
              ['Konduktor logam', 'Kerintangan rendah ($\\text{Cu}: 1.68\\times 10^{-8}$, $\\text{Nikrom}: 100\\times 10^{-8}$)', 'Kuprum untuk pendawaian; nikrom untuk elemen pemanas'],
              ['Superkonduktor', 'Kerintangan tepat $0\\ \\Omega\\text{ m}$ pada $T \\le T_c$', 'Lingkaran superkonduktor pengimbas MRI & kereta api maglev'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Rintangan Dawai Mengikut Geometri & Bahan',
            latex: 'R = \\frac{\\rho l}{A}, \\qquad A = \\pi r^2 = \\frac{\\pi d^2}{4}',
            symbols: [
              { symbol: 'R', meaning: 'Rintangan konduktor', unit: '$\\Omega$' },
              { symbol: '\\rho', meaning: 'Kerintangan bahan dawai', unit: '$\\Omega\\text{ m}$' },
              { symbol: 'l', meaning: 'Panjang dawai', unit: '$\\text{m}$' },
              { symbol: 'A', meaning: 'Luas keratan rentas dawai', unit: '$\\text{m}^2$' },
            ],
            appliesWhen: 'Dawai mempunyai keratan rentas seragam pada suhu tetap.',
            failsWhen: 'Perangkap besar: menukar $\\text{mm}^2 \\to \\text{m}^2$ mestilah didarab $10^{-6}$ (bukan $10^{-3}$!), dan nilai **s.w.g. lebih besar bermakna diameter dawai lebih halus/nipis** ($A$ lebih kecil $\\implies R$ lebih besar)!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-emf-internal',
            title: 'Litar Pengukuran Hukum Ohm & Ciri Graf $V$-$I$ vs $R$-$l$ vs $R$-$1/A$',
            whatItShows: 'Graf $V$-$I$ konduktor Ohm berbentuk garis lurus melalui asalan (kecerunan $= R$); graf $R$ melawan $l$ ialah garis lurus melalui asalan; graf $R$ melawan $A$ berbentuk hiperbola songsang.',
            axisOrRule: 'Apabila graf $R$ melawan $1/A$ diplot, ia menghasilkan garis lurus melalui asalan yang membuktikan $R \\propto \\frac{1}{A}$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 3.1, 3.2, 3.3, 3.4',
            title: 'Faktor-faktor Mempengaruhi Rintangan Dawai ($l, A, \\rho$)',
            aim: 'Mengkaji hubungan antara panjang $l$, luas keratan rentas $A$, dan kerintangan $\\rho$ terhadap rintangan $R = V/I$.',
            inference: 'Rintangan suatu dawai bergantung pada panjang, luas keratan rentas, dan jenis bahan (kerintangan).',
            hypothesis: 'Semakin panjang dawai atau semakin tinggi kerintangannya, semakin besar rintangan; semakin besar luas keratan rentas, semakin kecil rintangan.',
            variables: {
              manipulated: 'Panjang dawai $l$ ($20\\text{–}100\\text{ cm}$) / s.w.g. dawai ($22\\text{–}30$) / Jenis dawai (konstantan vs nikrom)',
              responding: 'Rintangan dawai, $R = \\frac{V}{I}$',
              fixed: 'Suhu dawai (buka suis selepas rekod & tetapkan arus $0.5\\text{ A}$), serta pemboleh ubah geometri lain yang tidak dimanipulasi',
            },
            setupLogic: 'Sambungkan dawai uji merentasi klip buaya P dan Q selari dengan voltmeter, bersiri dengan ammeter, reostat dan bateri $3\\text{ V}$. Laraskan reostat supaya arus kekal $0.5\\text{ A}$ dan matikan suis serta-merta selepas mengambil bacaan untuk memastikan suhu dawai tetap.',
            expectedResult: '$R$ berkadar terus dengan $l$, berkadar songsang dengan $A$ ($R \\propto 1/A$), dan $R_{\\text{nikrom}} > R_{\\text{konstantan}}$.',
            conclusion: 'Rintangan dawai berkadar terus dengan panjang $l$ dan kerintangan $\\rho$, dan berkadar songsang dengan luas keratan rentas $A$: $R = \\rho l / A$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Litar Gabungan Bersiri-Selari',
          problem: 'Sebuah perintang $2\\ \\Omega$ disambung secara bersiri dengan satu cabang selari yang terdiri daripada perintang $4\\ \\Omega$ dan $12\\ \\Omega$, merentasi bateri $6\\text{ V}$. Hitung (a) rintangan berkesan $R$, (b) arus dari bateri $I$, (c) voltan merentasi $2\\ \\Omega$ ($V_1$) dan merentasi cabang selari ($V_2$), serta (d) arus melalui perintang $4\\ \\Omega$ dan $12\\ \\Omega$.',
          given: ['$R_1 = 2\\ \\Omega$', 'Selari: $R_2 = 4\\ \\Omega, R_3 = 12\\ \\Omega$', '$V = 6\\text{ V}$'],
          formulaLatex: '\\frac{1}{R_{23}} = \\frac{1}{4} + \\frac{1}{12}, \\quad R = R_1 + R_{23}, \\quad I = \\frac{V}{R}',
          formulaWhy: 'Ringkaskan cabang selari terlebih dahulu menjadi $R_{23}$ sebelum ditambah secara bersiri dengan $R_1$.',
          substituteLatex: 'R_{23} = \\frac{4 \\times 12}{4 + 12} = 3\\ \\Omega;\\ R = 2+3 = 5\\ \\Omega;\\ I = \\frac{6}{5} = 1.2\\text{ A};\\ V_1 = 1.2(2) = 2.4\\text{ V};\\ V_2 = 3.6\\text{ V}',
          answer: '(a) $5\\ \\Omega$; (b) $1.2\\text{ A}$; (c) $V_1 = 2.4\\text{ V}, V_2 = 3.6\\text{ V}$; (d) $I_4 = 3.6/4 = 0.9\\text{ A}$, $I_{12} = 3.6/12 = 0.3\\text{ A}$.',
          trapAlert: 'Semak sentiasa hasil tambah arus cabang: $0.9\\text{ A} + 0.3\\text{ A} = 1.2\\text{ A}$ mestilah tepat sama dengan arus utama $I$!',
        },
        {
          title: 'Contoh 2: Menghitung Kerintangan & Rintangan Dawai Kuprum/Konstantan',
          problem: 'Seutas dawai konstantan sepanjang $l = 50.0\\text{ cm}$ mempunyai luas keratan rentas $A = 0.283\\text{ mm}^2$ dan kerintangan $\\rho = 49 \\times 10^{-8}\\ \\Omega\\text{ m}$. Hitung rintangannya.',
          given: ['$l = 50.0\\text{ cm} = 0.50\\text{ m}$', '$A = 0.283\\text{ mm}^2 = 0.283 \\times 10^{-6}\\text{ m}^2$', '$\\rho = 49 \\times 10^{-8}\\ \\Omega\\text{ m}$'],
          formulaLatex: 'R = \\frac{\\rho l}{A}',
          formulaWhy: 'Hubungan langsung rintangan bahan dengan panjang dan luas keratan rentasnya dalam unit SI.',
          substituteLatex: 'R = \\frac{(49 \\times 10^{-8})(0.50)}{0.283 \\times 10^{-6}}',
          answer: '$R = 0.866\\ \\Omega$ ($\\approx 0.87\\ \\Omega$).',
          trapAlert: '$1\\text{ mm}^2 = (10^{-3}\\text{ m})^2 = 10^{-6}\\text{ m}^2$. Jangan darab dengan $10^{-3}$!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Bahan Dawai: Elemen Pemanas vs Wayar Penyambung (Rajah 3.22)',
        rows: [
          {
            designChoice: 'Dawai nikrom nipis bergelung untuk elemen pemanas (periuk nasi / cerek)',
            scientificReason: 'Kerintangan tinggi dan luas keratan rentas kecil menghasilkan rintangan $R$ tinggi supaya banyak tenaga elektrik ditukar kepada haba ($H = I^2Rt$), serta takat lebur tinggi agar tahan lama.',
          },
          {
            designChoice: 'Dawai kuprum tebal untuk wayar penyambung pendawaian rumah',
            scientificReason: 'Kuprum mempunyai kerintangan sangat rendah dan dawai tebal memberikan rintangan minimum supaya wayar tidak cepat panas dan mengurangkan kehilangan kuasa.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua faktor fizikal yang mesti dimalarkan agar Hukum Ohm dipatuhi.', answer: 'Suhu dan keadaan fizik lain (seperti ketegangan dawai) adalah tetap.' },
          { question: 'Apakah yang dimaksudkan dengan suhu genting $T_c$ bagi superkonduktor?', answer: 'Suhu di mana kerintangan suatu superkonduktor turun secara mendadak menjadi tepat sifar ($0\\ \\Omega\\text{ m}$).' },
          { question: 'Antara dawai s.w.g. 22 dengan s.w.g. 30 yang sama panjang, yang manakah berintangan lebih tinggi?', answer: 's.w.g. 30 kerana nilai s.w.g. lebih tinggi bermakna diameter dawai lebih halus (luas $A$ lebih kecil).' },
        ],
        fadedProblem: {
          prompt: 'Dua perintang $6\\ \\Omega$ dan $3\\ \\Omega$ disambungkan secara selari merentasi bekalan kuasa $5\\text{ V}$ bersama satu perintang $8\\ \\Omega$ secara bersiri.',
          step1GivenAndFormula: 'Diberi: Cabang selari $R_p: 6\\ \\Omega \\parallel 3\\ \\Omega$, bersiri dengan $R_s = 8\\ \\Omega$, $V = 5\\text{ V}$. Rumus: $R_p = \\frac{6 \\times 3}{6 + 3}$, $R = R_p + R_s$.',
          studentTask: 'Hitung rintangan berkesan litar $R$, jumlah arus $I$, dan beza keupayaan merentasi cabang selari.',
          answerSteps: '$R_p = 2\\ \\Omega$; $R = 2 + 8 = 10\\ \\Omega$; $I = \\frac{5}{10} = 0.5\\text{ A}$; $V_{\\text{selari}} = 0.5 \\times 2 = 1.0\\text{ V}$.',
        },
        transferQuestion: {
          question: 'Dalam Eksperimen 3.2 mengkaji hubungan $R$ dengan panjang dawai, nyatakan satu langkah berjaga-jaga eksperimen yang kritikal dan terangkan sebabnya.',
          answer: 'Matikan suis sejurus selepas bacaan diambil dan gunakan arus yang kecil ($0.5\\text{ A}$) supaya suhu dawai kekal malar; jika suhu meningkat, rintangan dawai turut meningkat dan merosakkan kesahan graf.',
        },
      },
    },
    {
      id: 't5-3.3',
      chapterId: 't5-bab-3',
      code: '3.3',
      title: 'Daya Gerak Elektrik (d.g.e.) dan Rintangan Dalam',
      pageRef: 'm.s. 114–122',
      part1Anchor: {
        phenomenon:
          'Bateri berlabel $1.5\\text{ V}$ hanya membaca $1.5\\text{ V}$ apabila suis litar terbuka; sebaik sahaja mentol dinyalakan, bacaan voltmeter pada terminal bateri jatuh sedikit kerana sebahagian tenaga digunakan untuk menolak arus melalui bahan kimia di dalam bateri itu sendiri.',
        chapterConnection:
          'Menghubungkan beza keupayaan litar luar (3.1–3.2) dengan realiti sumber bekalan kuasa tidak unggul melalui persamaan $\\mathcal{E} = V + Ir$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Daya Gerak Elektrik (d.g.e.), $\\mathcal{E}$',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Daya gerak elektrik (d.g.e.), $\\mathcal{E}$ ialah ' },
            { text: 'tenaga yang dibekalkan', keyword: true },
            { text: ' atau ' },
            { text: 'kerja yang dilakukan', keyword: true },
            { text: ' oleh sesuatu ' },
            { text: 'sumber elektrik untuk menggerakkan satu coulomb cas', keyword: true },
            { text: ' dalam ' },
            { text: 'satu litar yang lengkap', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\mathcal{E} = \\frac{E}{Q} = V + Ir = I(R + r)',
        },
        {
          title: 'Rintangan Dalam ($r$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Rintangan dalam, $r$ bagi suatu sel kering ialah ' },
            { text: 'rintangan terhadap pengaliran cas oleh elektrolit', keyword: true },
            { text: ' di dalam sel kering itu.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Voltan Terminal ($V$) Turun Apabila Suis Ditutup',
            cause: 'Suis ditutup membenarkan arus $I > 0$ mengalir melalui litar luar $R$ dan elektrolit bateri $r$.',
            mechanism: 'Sebahagian d.g.e. bateri hilang sebagai susutan voltan dalaman $Ir$ untuk mengatasi rintangan dalam $r$ elektrolit.',
            effect: 'Beza keupayaan merentasi terminal sel menjadi $V = \\mathcal{E} - Ir < \\mathcal{E}$. Semakin besar arus litar, semakin besar kejatuhan voltan $Ir$.',
          },
          {
            title: 'Kesan Menyambung Sel Kering secara Bersiri vs Selari',
            cause: 'Empat sel kering ($\\mathcal{E}, r$) disambungkan bersiri vs selari.',
            mechanism: 'Secara bersiri: jumlah d.g.e. bertambah ($4\\mathcal{E}$) dan rintangan dalam turut bertambah ($r_j = 4r$). Secara selari: d.g.e. kekal sama ($\\mathcal{E}$) tetapi aliran arus terbahagi menjadikan rintangan dalam berkesan sangat kecil ($\\frac{1}{r_j} = \\frac{4}{r} \\implies r_j = r/4$).',
            effect: 'Sambungan selari tahan lebih lama dan mengurangkan susutan voltan dalaman apabila membekalkan arus tinggi.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Sambungan $n$ Sel Kering Serupa ($\\mathcal{E}, r$) & Kenderaan EV vs Hibrid',
            headers: ['Konfigurasi', 'Jumlah d.g.e. Berkesan', 'Rintangan Dalam Berkesan ($r_j$)', 'Kelebihan Utama'],
            rows: [
              ['$n$ sel bersiri', '$n\\mathcal{E}$', '$nr$', 'Menghasilkan voltan/beza keupayaan jauh lebih tinggi'],
              ['$n$ sel selari', '$\\mathcal{E}$', '$\\frac{r}{n}$', 'Rintangan dalam berkesan sangat kecil; sel lebih tahan lama'],
              ['Bateri Alkali vs Zink-Karbon', '$1.5\\text{ V}$', '$r_{\\text{alkali}} < r_{\\text{zink-karbon}}$', 'Elektrolit kalium hidroksida tahan 2x lebih lama berbanding ammonia klorida'],
              ['Kereta Hibrid vs Elektrik (EV)', 'Hibrid: $100\\text{–}200\\text{ V}$ | EV: $300\\text{–}800\\text{ V}$', 'Sistem berbilang sel Li-ion selari-bersiri', 'EV mencapai kuasa pemecutan tinggi dengan susutan rintangan dalam diminimumkan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Litar Penuh & Graf Linear d.g.e.',
            latex: '\\mathcal{E} = V + Ir = I(R + r) \\quad\\implies\\quad V = -rI + \\mathcal{E}',
            symbols: [
              { symbol: '\\mathcal{E}', meaning: 'Daya gerak elektrik (pintasan paksi-$V$ apabila $I = 0$)', unit: '$\\text{V}$' },
              { symbol: 'V', meaning: 'Beza keupayaan terminal / litar luar ($IR$)', unit: '$\\text{V}$' },
              { symbol: 'r', meaning: 'Rintangan dalam ($-$kecerunan graf $V$ melawan $I$)', unit: '$\\Omega$' },
              { symbol: 'Ir', meaning: 'Susutan voltan dalaman ($\\mathcal{E} - V$)', unit: '$\\text{V}$' },
            ],
            appliesWhen: 'D.g.e. dan rintangan dalam sel kering dianggap malar sepanjang bacaan diambil.',
            failsWhen: 'Jangan baca voltmeter litar terbuka sebagai $V$ ketika beban sedang menarik arus besar; apabila suis terbuka ($I = 0$), bacaan voltmeter ialah $\\mathcal{E}$, bukan $V$ berbeban.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-emf-internal',
            title: 'Graf $V$ Melawan $I$ Menentukan d.g.e. ($\\mathcal{E}$) dan Rintangan Dalam ($r$)',
            whatItShows: 'Graf garis lurus berkecerunan negatif: pintasan paksi mencancang ($I = 0$) memberi d.g.e. $\\mathcal{E}$, manakala magnitud kecerunan ($m = -r$) memberi rintangan dalam $r$.',
            axisOrRule: 'Bandingkan $V = -rI + \\mathcal{E}$ dengan $y = mx + c$: $c = \\mathcal{E}$ dan $r = -m$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 3.5',
            title: 'Menentukan d.g.e. dan Rintangan Dalam Sel Kering',
            aim: 'Menentukan d.g.e. $\\mathcal{E}$ dan rintangan dalam $r$ suatu sel kering daripada graf $V$ melawan $I$.',
            inference: 'Beza keupayaan terminal $V$ berubah apabila arus $I$ dalam litar berubah.',
            hypothesis: 'Semakin besar arus $I$ mengalir, semakin berkurang beza keupayaan terminal $V$ secara linear.',
            variables: {
              manipulated: 'Arus yang dilaraskan oleh reostat, $I$',
              responding: 'Beza keupayaan merentasi reostat/sel, $V$',
              fixed: 'Jenis sel kering yang sama',
            },
            setupLogic: 'Sambungkan sel kering bersiri dengan suis, ammeter dan reostat, serta voltmeter selari merentasi terminal sel kering. Ubah kedudukan pelaras reostat untuk mendapatkan 5 bacaan arus $I$ dan $V$. Plot graf $V$ melawan $I$.',
            expectedResult: 'Graf garis lurus menurun diperoleh; ekstrapolasi ke $I = 0$ memberi pintasan-y $= \\mathcal{E}$, kecerunan graf memberi $-r$.',
            conclusion: 'Daripada $V = -rI + \\mathcal{E}$, d.g.e. ialah pintasan menegak graf dan rintangan dalam ialah negatif kecerunan graf.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Perbandingan Arus daripada Sambungan Sel Bersiri vs Selari',
          problem: 'Sebiji sel kering berlabel $\\mathcal{E} = 1.5\\text{ V}$ dan $r = 0.5\\ \\Omega$ disambungkan kepada sebuah perintang luar $R = 10\\ \\Omega$. Hitung arus yang mengalir bagi: (a) dua sel disambung bersiri, (b) dua sel disambung selari, (c) tiga sel disambung selari.',
          given: ['$\\mathcal{E} = 1.5\\text{ V}$, $r = 0.5\\ \\Omega$', '$R = 10\\ \\Omega$'],
          formulaLatex: 'I = \\frac{\\mathcal{E}_{\\text{eff}}}{R + r_{\\text{eff}}}',
          formulaWhy: 'Gunakan d.g.e. berkesan dan rintangan dalam berkesan mengikut jenis sambungan sel.',
          substituteLatex: '(a)\\ I = \\frac{2(1.5)}{10 + 2(0.5)} = \\frac{3.0}{11};\\ (b)\\ I = \\frac{1.5}{10 + 0.5/2} = \\frac{1.5}{10.25};\\ (c)\\ I = \\frac{1.5}{10 + 0.5/3} = \\frac{1.5}{10.167}',
          answer: '(a) Bersiri (2 sel): $0.273\\text{ A}$; (b) Selari (2 sel): $0.146\\text{ A}$; (c) Selari (3 sel): $0.148\\text{ A}$.',
          trapAlert: 'Dalam susunan selari sel serupa, JANGAN tambah d.g.e.! Dua sel $1.5\\text{ V}$ selari tetap membekalkan $\\mathcal{E} = 1.5\\text{ V}$, cuma $r_j$ yang mengecil kepada $r/2$.',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Bateri & Konfigurasi Sel Kering untuk Arus Tinggi',
        rows: [
          {
            designChoice: 'Menyambung sel-sel kering secara selari (bukan tunggal) untuk beban arus sederhana berterusan',
            scientificReason: 'Mengurangkan rintangan dalam berkesan ($r_j = r/n$) supaya susutan voltan dalaman $Ir_j$ lebih kecil dan jangka hayat bateri lebih panjang.',
          },
          {
            designChoice: 'Memilih bateri alkali berbanding bateri zink-karbon untuk peranti berkuasa tinggi',
            scientificReason: 'Elektrolit kalium hidroksida mempunyai rintangan dalam $r$ lebih rendah, menghasilkan arus puncak lebih tinggi dan bertahan dua kali ganda lebih lama.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Bezakan maksud $V$ dan $\\mathcal{E}$ pada bacaan voltmeter merentasi sel kering.', answer: 'Apabila suis terbuka ($I = 0$), voltmeter membaca d.g.e. $\\mathcal{E}$; apabila suis tertutup ($I > 0$), voltmeter membaca beza keupayaan terminal $V = \\mathcal{E} - Ir$.' },
          { question: 'Apakah yang diwakili oleh kecerunan dan pintasan-$y$ pada graf $V$ melawan $I$?', answer: 'Pintasan-$y = \\mathcal{E}$ (d.g.e.), manakala kecerunan $= -r$ ($-$rintangan dalam).' },
          { question: 'Mengapakah lampu kereta menjadi malap seketika apabila enjin dihidupkan?', answer: 'Motor penghidup menarik arus $I$ yang sangat tinggi menyebabkan susutan voltan dalaman $Ir$ besar, lalu beza keupayaan terminal bateri $V = \\mathcal{E} - Ir$ merosot seketika.' },
        ],
        fadedProblem: {
          prompt: 'Sebiji bateri dengan d.g.e. $12.0\\text{ V}$ dan rintangan dalam $0.4\\ \\Omega$ disambungkan kepada sebuah mentol berintangan $5.6\\ \\Omega$.',
          step1GivenAndFormula: 'Diberi: $\\mathcal{E} = 12.0\\text{ V}$, $r = 0.4\\ \\Omega$, $R = 5.6\\ \\Omega$. Rumus: $\\mathcal{E} = I(R + r)$ dan $V = IR$.',
          studentTask: 'Hitung arus dalam litar $I$, beza keupayaan merentasi mentol $V$, dan susutan voltan dalaman bateri.',
          answerSteps: '$I = \\frac{12.0}{5.6 + 0.4} = 2.0\\text{ A}$; $V = 2.0 \\times 5.6 = 11.2\\text{ V}$; susutan voltan $= 12.0 - 11.2 = 0.8\\text{ V}$.',
        },
        transferQuestion: {
          question: 'Graf $V$ melawan $I$ bagi dua sel kering X dan Y memintas paksi-$V$ pada $1.5\\text{ V}$ yang sama, tetapi garis X lebih curam daripada garis Y. Sel manakah yang lebih baik untuk membekalkan arus tinggi dan mengapa?',
          answer: 'Sel Y lebih baik kerana kecerunannya kurang curam bermakna rintangan dalam $r$ bagi sel Y lebih kecil ($r_Y < r_X$). Ini menyebabkan susutan voltan $Ir$ lebih kecil apabila arus tinggi ditarik.',
        },
      },
    },
    {
      id: 't5-3.4',
      chapterId: 't5-bab-3',
      code: '3.4',
      title: 'Tenaga dan Kuasa Elektrik',
      pageRef: 'm.s. 123–129',
      part1Anchor: {
        phenomenon:
          'Menukar sebiji lampu $40\\text{ W}$ kepada lampu LED $12\\text{ W}$ memberi kecerahan setara tetapi bil TNB bulanan menjunam lebih $70\\%$ — kerana kuasa menentukan kadar tenaga ditukar setiap saat dan jumlah unit kWj yang dicaj pada meter rumah.',
        chapterConnection:
          'Menutup Bab 3 dengan menyatukan voltan, arus, rintangan dan masa menjadi pengiraan tenaga ($E = VIt$), kuasa ($P = VI$), dan kos penggunaan elektrik sebenar.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tenaga Elektrik ($E$) & Kuasa Elektrik ($P$)',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Tenaga elektrik ialah hasil kerja oleh sumber elektrik: ' },
            { text: '$E = VIt$', keyword: true },
            { text: ', manakala kuasa elektrik ialah ' },
            { text: 'kadar pemindahan tenaga elektrik', keyword: true },
            { text: ': ' },
            { text: '$P = \\frac{E}{t} = VI$', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'E = VIt, \\qquad P = VI = I^2R = \\frac{V^2}{R}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Penentuan Unit Komersial Kilowatt-Jam ($\\text{kWj}$)',
            cause: 'Alat elektrik berkuasa $P$ (dalam $\\text{kW}$) dihidupkan selama $t$ (dalam $\\text{jam}$).',
            mechanism: '1 unit meter TNB $= 1\\text{ kWj} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}$.',
            effect: 'Kos bil $= \\text{Kuasa (kW)} \\times \\text{Masa (jam)} \\times \\text{Kadar tarif per kWj}$.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Kos Elektrik Lampu Pendarfluor Padat (CFL) vs LED (Buku Teks m.s. 127)',
            headers: ['Jenis Lampu (Kecerahan Setara)', 'Kuasa', 'Penggunaan 30 hari ($8\\text{ j/hari}$)', 'Kos pada RM $0.218/\\text{kWj}$'],
            rows: [
              ['Lampu Pendarfluor Padat (CFL)', '$40\\text{ W}$ ($0.040\\text{ kW}$)', '$0.040 \\times 240\\text{ j} = 9.6\\text{ kWj}$', '$\\text{RM } 2.09$ (atau $12\\text{ j/hari}$ = RM $3.14$)'],
              ['Lampu LED', '$12\\text{ W}$ ($0.012\\text{ kW}$)', '$0.012 \\times 240\\text{ j} = 2.88\\text{ kWj}$', '$\\text{RM } 0.63$ (atau $12\\text{ j/hari}$ = RM $0.94$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tiga Bentuk Rumus Kuasa Elektrik & Kos Tenaga',
            latex: 'P = VI = I^2R = \\frac{V^2}{R}, \\qquad \\text{Tenaga (kWj)} = P(\\text{kW}) \\times t(\\text{jam})',
            symbols: [
              { symbol: 'P', meaning: 'Kuasa elektrik', unit: '$\\text{W}$ ($\\text{J s}^{-1}$)' },
              { symbol: 'V', meaning: 'Beza keupayaan', unit: '$\\text{V}$' },
              { symbol: 'I', meaning: 'Arus elektrik', unit: '$\\text{A}$' },
              { symbol: 'R', meaning: 'Rintangan alat', unit: '$\\Omega$' },
            ],
            appliesWhen: '$P = I^2R$ dan $P = V^2/R$ sah bagi komponen rintangan tulen yang mematuhi $V = IR$.',
            failsWhen: 'Untuk label alat $240\\text{ V}, 32\\text{ W}$ yang disambung ke bekalan **bukan** $240\\text{ V}$ (cth. $120\\text{ V}$): kuasa TIDAK kekal $32\\text{ W}$! Kira rintangan alat tetap $R = V^2/P$ dahulu, kemudian cari kuasa baharu.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-emf-internal',
            title: 'Hubungan Kuasa $P = VI$, Rintangan dan Penggunaan Tenaga',
            whatItShows: 'Menggambarkan bagaimana tenaga sumber bateri diagihkan kepada kuasa berguna pada perintang luar $P = I^2R$ dan kuasa lesapan dalaman $I^2r$.',
            axisOrRule: 'Apabila mengira $E$ dalam Joule ($\\text{J}$), guna Watt dan saat ($\\text{W} \\times \\text{s}$); apabila mengira kos bil, guna kilowatt dan jam ($\\text{kW} \\times \\text{jam}$).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Tenaga Dihasilkan oleh Mentol',
          problem: 'Sebuah mentol disambungkan ke bateri $6.0\\text{ V}$ dan mengalirkan arus $0.70\\text{ A}$ selama $1\\text{ minit}$. Hitung tenaga yang dibekalkan.',
          given: ['$V = 6.0\\text{ V}$', '$I = 0.70\\text{ A}$', '$t = 1\\text{ minit} = 60\\text{ s}$'],
          formulaLatex: 'E = VIt',
          formulaWhy: 'Kuasa $VI$ didarab dengan masa dalam saat memberi jumlah tenaga dalam Joule.',
          substituteLatex: 'E = 6.0 \\times 0.70 \\times 60',
          answer: '$E = 252\\text{ J}$.',
          trapAlert: 'Tukarkan minit kepada saat ($\\times 60$).',
        },
        {
          title: 'Contoh 2: Label Alat Elektrik ($240\\text{ V}, 32\\text{ W}$)',
          problem: 'Sebuah kipas berlabel $240\\text{ V}, 32\\text{ W}$ dihidupkan selama $3\\text{ jam}$. Hitung (a) rintangan kipas, (b) arus kerja, dan (c) tenaga digunakan dalam $\\text{kJ}$ dan $\\text{kWj}$.',
          given: ['$V = 240\\text{ V}$', '$P = 32\\text{ W}$', '$t = 3\\text{ jam} = 10\\,800\\text{ s}$'],
          formulaLatex: 'R = \\frac{V^2}{P}, \\qquad I = \\frac{P}{V}, \\qquad E = Pt',
          formulaWhy: 'Nilai label menyatakan kuasa yang dilesapkan ketika menerima tepat $240\\text{ V}$.',
          substituteLatex: 'R = \\frac{240^2}{32} = 1800\\ \\Omega;\\quad I = \\frac{32}{240} = 0.133\\text{ A};\\quad E = 32 \\times 10\\,800 = 345\\,600\\text{ J}',
          answer: '(a) $1800\\ \\Omega$; (b) $0.13\\text{ A}$; (c) $345.6\\text{ kJ}$ ($0.096\\text{ kWj}$).',
          trapAlert: 'Sentiasa cari $R = V_{\\text{label}}^2 / P_{\\text{label}}$ jika soalan menukar voltan bekalan.',
        },
      ],
      part5DecisionTable: {
        title: 'Langkah Penjimatan Tenaga & Pemilihan Peralatan Cekap (Label Cekap Tenaga ST)',
        rows: [
          {
            designChoice: 'Memilih lampu LED ($12\\text{ W}$) berbanding lampu pijar/CFL ($40\\text{ W}$) pada lumen sama',
            scientificReason: 'Lebih tinggi kecekapan menukar tenaga elektrik kepada tenaga cahaya (kurang tenaga terbazir sebagai haba), menjimatkan $\\text{kWj}$ dan kos bil elektrik.',
          },
          {
            designChoice: 'Menggunakan penarafan fius sedikit melebihi arus kerja biasa $I = P/V$ (cth. $13\\text{ A}$ untuk $2400\\text{ W}$)',
            scientificReason: 'Membenarkan arus kerja biasa mengalir tetapi serta-merta melebur dan memutuskan litar apabila arus berlebihan/litar pintas berlaku.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Berapakah Joule dalam $1\\text{ kWj}$?', answer: '$1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}$.' },
          { question: 'Nyatakan maksud label $240\\text{ V}, 1000\\text{ W}$ pada cerek elektrik.', answer: 'Cerek menukarkan $1000\\text{ J}$ tenaga elektrik setiap saat apabila disambungkan kepada bekalan $240\\text{ V}$.' },
          { question: 'Apakah fius sesuai bagi seterika $240\\text{ V}, 1200\\text{ W}$? ($3\\text{ A}, 5\\text{ A}, 10\\text{ A}, 13\\text{ A}$)', answer: '$I = 1200/240 = 5.0\\text{ A}$, maka fius seterusnya yang lebih tinggi ialah $10\\text{ A}$ (bukan $5\\text{ A}$ supaya tidak terputus semasa arus puncak permulaan).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah penyaman udara berkuasa $1.5\\text{ kW}$ digunakan selama $6\\text{ jam}$ sehari untuk tempoh $30\\text{ hari}$. Tarif elektrik ialah $\\text{RM } 0.25$ seunit $\\text{kWj}$.',
          step1GivenAndFormula: 'Diberi: $P = 1.5\\text{ kW}$, $t = 6 \\times 30 = 180\\text{ jam}$. Rumus: $E = Pt$, Kos $= E \\times \\text{tarif}$.',
          studentTask: 'Hitung jumlah unit tenaga digunakan dan jumlah kos elektrik bagi $30\\text{ hari}$.',
          answerSteps: '$E = 1.5 \\times 180 = 270\\text{ kWj}$; Kos $= 270 \\times 0.25 = \\text{RM } 67.50$.',
        },
        transferQuestion: {
          question: 'Sebiji mentol berlabel $240\\text{ V}, 60\\text{ W}$ disambungkan secara tidak sengaja kepada bekalan $120\\text{ V}$. Hitung kuasa sebenar yang dilesapkan oleh mentol itu (anggap rintangan malar).',
          answer: 'Rintangan mentol $R = \\frac{240^2}{60} = 960\\ \\Omega$. Pada $120\\text{ V}$, kuasa baharu ialah $P = \\frac{120^2}{960} = 15\\text{ W}$ (seperempat kuasa asal, jadi menyala malap!).',
        },
      },
    },
  ],
};
