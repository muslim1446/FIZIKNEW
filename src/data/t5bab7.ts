import type { ChapterContent } from '../types/textbook';

export const t5bab7: ChapterContent = {
  id: 't5-bab-7',
  formLevel: 5,
  number: 7,
  title: 'Fizik Kuantum',
  pageRange: 'm.s. 222–252',
  overview:
    'Memahami kelahiran teori kuantum daripada masalah jasad hitam, kuanta tenaga Planck ($E = hf$), dan kedualan gelombang-zarah de Broglie ($\\lambda = h/mv$) (7.1), ciri-ciri eksperimen kesan fotoelektrik serta penentuan pemalar Planck melalui LED (7.2), dan persamaan fotoelektrik Einstein ($hf = W + \\frac{1}{2}mv_{\\text{maks}}^2$) beserta fungsi kerja logam dan sel suria (7.3).',
  subtopics: [
    {
      id: 't5-7.1',
      chapterId: 't5-bab-7',
      code: '7.1',
      title: 'Teori Kuantum Cahaya',
      pageRef: 'm.s. 224–233',
      part1Anchor: {
        phenomenon:
          'Teori fizik klasik meramalkan jasad panas patut memancarkan tenaga sinar ultraungu tak terhingga ("malapetaka ultraungu"), yang jelas palsu. Max Planck menyelesaikan misteri ini dengan mencadangkan tenaga cahaya terpancar dalam bungkusan diskrit yang dipanggil kuanta (foton), bukan aliran berterusan.',
        chapterConnection:
          'Membina konsep asas paket tenaga foton $E = hf$ dan sifat zarah cahaya serta sifat gelombang elektron ($\\lambda = h/p$) yang menjadi kunci memahami kesan fotoelektrik (7.2–7.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Jasad Hitam & Kuantum Tenaga',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Jasad hitam ialah suatu ' },
            { text: 'penyerap dan pemancar sinaran elektromagnet yang unggul', keyword: true },
            { text: '. Kuantum tenaga ialah ' },
            { text: 'paket tenaga diskrit', keyword: true },
            { text: ' dan bukan tenaga selanjar, dengan setiap foton membawa tenaga ' },
            { text: '$E = hf$', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'E = hf = \\frac{hc}{\\lambda}, \\qquad P = nhf',
        },
        {
          title: 'Kedualan Gelombang-Zarah (Hipotesis de Broglie)',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Semua zarah dan sinaran elektromagnet mempamerkan ' },
            { text: 'sifat gelombang dan sifat zarah', keyword: true },
            { text: '. Panjang gelombang de Broglie bagi suatu zarah berjisim $m$ dan berhalaju $v$ diberikan oleh ' },
            { text: '$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Spektrum Jasad Hitam Mengikut Suhu (Teori Kuantum vs Klasik)',
            cause: 'Suhu jasad hitam dinaikkan ($T$ meningkat, cth. $3000\\text{ K} \\to 6000\\text{ K}$).',
            mechanism: 'Dalam teori kuantum, keamatan puncak sinaran meningkat mendadak dan panjang gelombang puncak $\\lambda_{\\text{puncak}}$ beralih ke panjang gelombang lebih pendek (frekuensi lebih tinggi) tanpa menuju infiniti di julat UV.',
            effect: 'Objek panas bertukar warna daripada merah ($\\lambda$ panjang) $\\to$ kuning $\\to$ putih kebiruan apabila suhunya semakin tinggi.',
          },
          {
            title: 'Mengapa Elektron Boleh Digunakan dalam Mikroskop Elektron Berkuasa Tinggi',
            cause: 'Elektron dipecut pada laju sangat tinggi ($v \\sim 10^7\\text{ m s}^{-1}$).',
            mechanism: 'Mengikut $\\lambda = h/(mv)$, jisim elektron yang amat kecil menghasilkan panjang gelombang de Broglie ribuan kali lebih pendek daripada cahaya tampak.',
            effect: 'Panjang gelombang ultra-pendek mengurangkan pembelauan, membolehkan mikroskop elektron menyelesaikan struktur skala atom yang mustahil dilihat mikroskop cahaya.',
          },
        ],
        tables: [
          {
            title: 'Kuantum Tenaga Foton & Sifat Gelombang-Zarah',
            headers: ['Konsep', 'Rumus Matematik', 'Pemalar & Nota Kritis'],
            rows: [
              ['Tenaga satu foton', '$E = hf = \\frac{hc}{\\lambda}$', '$h = 6.63 \\times 10^{-34}\\text{ J s}$, $c = 3.00 \\times 10^8\\text{ m s}^{-1}$'],
              ['Kuasa pancaran $n$ foton sesaat', '$P = \\left(\\frac{n}{t}\\right)hf = n_s \\frac{hc}{\\lambda}$', '$n_s = \\frac{n}{t}$ ialah bilangan foton terpancar per saat'],
              ['Panjang gelombang de Broglie', '$\\lambda = \\frac{h}{mv}$', 'Hanya signifikan bagi zarah mikroskopik (elektron/proton), terlampau kecil untuk bola makroskopik'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tenaga Foton, Kuasa Pancaran Laser & Panjang Gelombang de Broglie',
            latex: 'E = hf = \\frac{hc}{\\lambda}, \\qquad P = \\frac{nhc}{\\lambda t}, \\qquad \\lambda = \\frac{h}{mv}',
            symbols: [
              { symbol: 'h', meaning: 'Pemalar Planck ($6.63 \\times 10^{-34}$)', unit: '$\\text{J s}$' },
              { symbol: 'E', meaning: 'Tenaga satu foton tunggal', unit: '$\\text{J}$' },
              { symbol: 'n/t', meaning: 'Bilangan foton dipancarkan sesaat', unit: '$\\text{s}^{-1}$' },
              { symbol: '\\lambda', meaning: 'Panjang gelombang cahaya / de Broglie', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Menukar panjang gelombang $\\lambda$ kepada meter ($1\\text{ nm} = 10^{-9}\\text{ m}$) dan memastikan tenaga dalam Joule ($1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$).',
            failsWhen: 'Perangkap kerap: jika lampu $100\\text{ W}$ mempunyai kecekapan $10\\%$ cahaya tampak, hanya $10\\text{ W}$ digunakan sebagai kuasa foton $P$, bukannya $100\\text{ W}$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-photoelectric-einstein',
            title: 'Kuantum Foton $E = hf$ & Pengesanan Pemalar Planck',
            whatItShows: 'Menggambarkan bagaimana tenaga satu foton bertambah secara linear dengan frekuensi $f$ dan bagaimana graf $K_{\\text{maks}}$ melawan $f$ memulangkan pemalar Planck $h$.',
            axisOrRule: 'Cahaya berfrekuensi lebih tinggi (ungu/UV) membawa tenaga PER FOTON lebih besar berbanding cahaya merah.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Membandingkan Tenaga Foton Cahaya Ungu ($400\\text{ nm}$) vs Merah ($750\\text{ nm}$)',
          problem: 'Hitung tenaga satu foton cahaya ungu ($\\lambda = 400\\text{ nm}$) dan bandingkan dengan cahaya merah ($\\lambda = 750\\text{ nm}$). [$h = 6.63 \\times 10^{-34}\\text{ J s}, c = 3.0 \\times 10^8\\text{ m s}^{-1}$]',
          given: ['$\\lambda_1 = 400\\text{ nm} = 4.00 \\times 10^{-7}\\text{ m}$', '$\\lambda_2 = 750\\text{ nm} = 7.50 \\times 10^{-7}\\text{ m}$'],
          formulaLatex: 'E = \\frac{hc}{\\lambda}',
          formulaWhy: 'Frekuensi cahaya boleh digantikan melalui $f = c/\\lambda$.',
          substituteLatex: 'E_1 = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{4.00 \\times 10^{-7}} = 4.97 \\times 10^{-19}\\text{ J};\\quad E_2 = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{7.50 \\times 10^{-7}} = 2.65 \\times 10^{-19}\\text{ J}',
          answer: 'Foton ungu $= 4.97 \\times 10^{-19}\\text{ J}$; foton merah $= 2.65 \\times 10^{-19}\\text{ J}$ (ungu membawa hampir $1.9\\times$ tenaga per foton).',
          trapAlert: 'Tukarkan $\\text{nm}$ kepada $\\text{m}$ ($\\times 10^{-9}$) sebelum mengira!',
        },
        {
          title: 'Contoh 2: Kuasa Pancaran Laser Merah & Contoh 3 Kecekapan Lampu $100\\text{ W}$',
          problem: '(a) Pen laser merah berpanjang gelombang $670\\text{ nm}$ memancarkan $3.37 \\times 10^{18}$ foton setiap saat. Hitung kuasa output laser. (b) Sebuah lampu $100\\text{ W}$ menukar $10\\%$ tenaga kepada cahaya yang memancarkan $2.92 \\times 10^{19}$ foton sesaat. Hitung panjang gelombang cahaya itu.',
          given: ['(a) $\\lambda = 6.70 \\times 10^{-7}\\text{ m}$, $n/t = 3.37 \\times 10^{18}\\text{ s}^{-1}$', '(b) $P_{\\text{cahaya}} = 10\\% \\times 100\\text{ W} = 10\\text{ W}$, $n/t = 2.92 \\times 10^{19}\\text{ s}^{-1}$'],
          formulaLatex: 'P = \\left(\\frac{n}{t}\\right)\\frac{hc}{\\lambda}',
          formulaWhy: 'Jumlah tenaga sesaat ialah bilangan foton sesaat didarab tenaga sebiji foton.',
          substituteLatex: 'P_a = (3.37 \\times 10^{18})\\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{6.70 \\times 10^{-7}};\\quad \\lambda_b = \\frac{(2.92 \\times 10^{19})(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{10}',
          answer: '(a) $P = 1.00\\text{ W}$; (b) $\\lambda = 5.81 \\times 10^{-7}\\text{ m}$ ($581\\text{ nm}$).',
          trapAlert: 'Jangan sesekali gunakan $100\\text{ W}$ penuh dalam (b) — hanya $10\\%$ ($10\\text{ W}$) menjadi foton cahaya!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan hubungan antara suhu jasad hitam dengan panjang gelombang puncak sinarannya.', answer: 'Semakin tinggi suhu mutlak jasad hitam, semakin pendek panjang gelombang pada keamatan puncak.' },
          { question: 'Nyatakan rumus panjang gelombang de Broglie bagi elektron berjisim $m$ dan berhalaju $v$.', answer: '$\\lambda = \\frac{h}{mv}$.' },
          { question: 'Mengapakah kita tidak dapat memerhatikan pembelauan sebuah kereta yang bergerak melalui celah selebar jalan raya?', answer: 'Kerana jisim kereta amat besar menyebabkan panjang gelombang de Broglie $\\lambda = h/mv$ terlalu kecil ($\\sim 10^{-38}\\text{ m}$) jauh lebih kecil daripada saiz celah.' },
        ],
        fadedProblem: {
          prompt: 'Sebiji elektron ($m = 9.11 \\times 10^{-31}\\text{ kg}$) bergerak pada halaju $2.0 \\times 10^6\\text{ m s}^{-1}$. ($h = 6.63 \\times 10^{-34}\\text{ J s}$).',
          step1GivenAndFormula: 'Diberi: $m = 9.11 \\times 10^{-31}\\text{ kg}$, $v = 2.0 \\times 10^6\\text{ m s}^{-1}$. Rumus: $\\lambda = \\frac{h}{mv}$.',
          studentTask: 'Hitung panjang gelombang de Broglie elektron itu.',
          answerSteps: '$\\lambda = \\frac{6.63 \\times 10^{-34}}{(9.11 \\times 10^{-31})(2.0 \\times 10^6)} = 3.64 \\times 10^{-10}\\text{ m}$ ($0.364\\text{ nm}$).',
        },
        transferQuestion: {
          question: 'Terangkan perbezaan antara teori gelombang klasik dengan teori kuantum cahaya mengenai bagaimana kecerahan (keamatan) dan warna (frekuensi) mempengaruhi tenaga pancaran.',
          answer: 'Dalam teori kuantum, frekuensi menentukan tenaga setiap satu foton ($E = hf$), manakala keamatan (kecerahan) yang lebih tinggi hanya menambah **bilangan foton per saat**, bukan tenaga setiap foton tunggal.',
        },
      },
    },
    {
      id: 't5-7.2',
      chapterId: 't5-bab-7',
      code: '7.2',
      title: 'Kesan Fotoelektrik',
      pageRef: 'm.s. 234–237',
      part1Anchor: {
        phenomenon:
          'Menyinarkan lampu merah yang sangat terang ke atas plat zink gagal mengeluarkan walau sebiji elektron pun, namun seberkas sinar ultraungu yang amat malap memancarkan elektron secara serta-merta — fenomena yang meruntuhkan fizik gelombang klasik dan membuktikan cahaya bertindak sebagai zarah foton.',
        chapterConnection:
          'Menghubungkan konsep kuantum foton (7.1) kepada eksperimen sel foto dan pengukuran pemalar Planck melalui LED sebelum menyelesaikannya secara kuantitatif dengan Persamaan Einstein (7.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Kesan Fotoelektrik & Frekuensi Ambang ($f_0$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kesan fotoelektrik ialah proses ' },
            { text: 'pemancaran elektron daripada permukaan logam', keyword: true },
            { text: ' apabila ' },
            { text: 'disinari oleh alur cahaya yang mempunyai frekuensi tertentu', keyword: true },
            { text: ' (melebihi ' },
            { text: 'frekuensi ambang, $f_0$', keyword: true },
            { text: '). Frekuensi ambang ialah ' },
            { text: 'frekuensi minimum cahaya yang dapat menghasilkan kesan fotoelektrik', keyword: true },
            { text: ' pada suatu jenis logam.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Keamatan Tinggi pada Frekuensi $f < f_0$ Tetap Gagal Memancarkan Fotoelektron',
            cause: 'Cahaya dengan frekuensi $f < f_0$ berkeamatan sangat tinggi menyinari permukaan logam.',
            mechanism: 'Satu elektron di permukaan hanya menyerap tenaga daripada **satu foton sahaja** ($E = hf$). Jika $hf$ lebih kecil daripada tenaga pengikat elektron logam (fungsi kerja $W$), elektron tidak mempunyai tenaga cukup untuk membebaskan diri walaupun berjuta-juta foton berfrekuensi rendah tiba.',
            effect: 'Tiada fotoelektron terpancar ($I_{\\text{foto}} = 0$). Sebaliknya, apabila $f > f_0$, fotoelektron terpancar secara **serta-merta** walaupun keamatan cahaya sangat malap.',
          },
        ],
        tables: [
          {
            title: 'Empat Ciri Utama Kesan Fotoelektrik (Gagal Dijelaskan Fizik Klasik)',
            headers: ['Ciri Pemerhatian Eksperimen', 'Kesan Kepada Fotoelektron', 'Penjelasan Kuantum'],
            rows: [
              ['1. Kewujudan frekuensi ambang ($f_0$)', 'Tiada elektron terpancar jika $f < f_0$, tidak kira seberapa terang cahaya', 'Satu foton mesti mempunyai tenaga minimum $hf_0$ untuk melepaskan satu elektron'],
              ['2. Tenaga kinetik maks ($K_{\\text{maks}}$) vs Frekuensi ($f$)', 'Semakin tinggi $f$, semakin tinggi $K_{\\text{maks}}$ fotoelektron', 'Lebihan tenaga foton ($hf - W$) ditukar terus menjadi tenaga kinetik elektron'],
              ['3. Pemancaran serta-merta', 'Berlaku serta-merta ($< 10^{-9}\\text{ s}$) sebaik disinari apabila $f \\ge f_0$', 'Pemindahan tenaga berlaku 1-lawan-1 antara 1 foton dengan 1 elektron, tidak perlu masa mengumpul tenaga'],
              ['4. Kesan keamatan cahaya apabila $f \\ge f_0$', 'Menambah keamatan menambah **bilangan fotoelektron** (arus fotoelektrik), TIDAK menambah $K_{\\text{maks}}$', 'Cahaya lebih terang hanya membawa lebih banyak foton sesaat pada tenaga foton $hf$ yang tetap sama'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penentuan Pemalar Planck Menggunakan Graf Voltan Pengaktifan LED ($V_a$-$1/\\lambda$)',
            latex: 'e V_a = \\frac{hc}{\\lambda} \\implies V_a = \\left(\\frac{hc}{e}\\right)\\frac{1}{\\lambda} \\implies h = \\frac{m e}{c}',
            symbols: [
              { symbol: 'V_a', meaning: 'Voltan pengaktifan minimum LED untuk menyala', unit: '$\\text{V}$' },
              { symbol: 'm', meaning: 'Kecerunan graf garis lurus $V_a$ melawan $1/\\lambda$', unit: '$\\text{V m}$' },
              { symbol: 'h', meaning: 'Pemalar Planck', unit: '$\\text{J s}$' },
            ],
            appliesWhen: 'Aktiviti 7.5 makmal menggunakan set LED pelbagai warna (merah, oren, kuning, hijau, biru) berpanjang gelombang diketahui.',
            failsWhen: 'Periksa paksi-$x$ graf! Jika paksi-$x$ ialah $1/\\lambda$, kecerunan $m = \\frac{hc}{e}$; jika paksi-$x$ ialah frekuensi $f$, kecerunan $m = \\frac{h}{e}$.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-photoelectric-einstein',
            title: 'Ciri Kesan Fotoelektrik: Kesan Frekuensi ($f$) vs Keamatan ($I$) & Graf LED',
            whatItShows: 'Graf tenaga kinetik maksimum melawan frekuensi memaparkan pemotongan pada frekuensi ambang $f_0$ dengan kecerunan malar $h$, terpisah daripada kesan keamatan cahaya.',
            axisOrRule: 'Menambah keamatan cahaya hanya menaikkan arus tepu fotoelektrik (bilangan elektron sesaat), TIDAK mengubah frekuensi ambang $f_0$ atau tenaga kinetik maksimum.',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 7.5',
            title: 'Menentukan Nilai Pemalar Planck ($h$) Menggunakan LED',
            aim: 'Menentukan nilai pemalar Planck $h$ daripada graf voltan pengaktifan $V_a$ melawan $1/\\lambda$ bagi beberapa jenis LED.',
            inference: 'Voltan pengaktifan LED bergantung pada panjang gelombang cahaya yang dipancarkan.',
            hypothesis: 'Semakin pendek panjang gelombang cahaya LED (semakin besar $1/\\lambda$), semakin tinggi voltan pengaktifan $V_a$.',
            variables: {
              manipulated: 'Jenis / panjang gelombang LED ($\\lambda$) — merah, oren, kuning, hijau, biru',
              responding: 'Voltan pengaktifan minimum LED mula menyala, $V_a$',
              fixed: 'Rintangan perintang pelindung dan tiub gelap pemerhati',
            },
            setupLogic: 'Sambungkan LED melalui reostat/potensiometer kepada bekalan bateri di dalam bilik/tiub gelap. Tingkatkan voltan perlahan-lahan sehingga cahaya malap pertama kelihatan pada LED dan rekod $V_a$. Plot graf $V_a$ melawan $1/\\lambda$.',
            expectedResult: 'Graf garis lurus menaik dengan kecerunan $m = hc/e$, menghasilkan $h = me/c \\approx 6.63 \\times 10^{-34}\\text{ J s}$.',
            conclusion: 'Pemalar Planck $h$ boleh ditentukan daripada hubungan $eV_a = hc/\\lambda$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Pemalar Planck daripada Kecerunan Graf LED $V_a$ melawan $1/\\lambda$',
          problem: 'Dalam Aktiviti 7.5, graf voltan pengaktifan LED $V_a$ melawan $1/\\lambda$ memberikan garis lurus dengan kecerunan $m = 1.24 \\times 10^{-6}\\text{ V m}$. Hitung nilai pemalar Planck $h$ eksperimen itu. [$e = 1.60 \\times 10^{-19}\\text{ C}, c = 3.00 \\times 10^8\\text{ m s}^{-1}$]',
          given: ['Kecerunan $m = 1.24 \\times 10^{-6}\\text{ V m}$', '$e = 1.60 \\times 10^{-19}\\text{ C}$', '$c = 3.00 \\times 10^8\\text{ m s}^{-1}$'],
          formulaLatex: 'h = \\frac{me}{c}',
          formulaWhy: 'Daripada $V_a = (\\frac{hc}{e})(\\frac{1}{\\lambda})$, kecerunan graf sama dengan $hc/e$.',
          substituteLatex: 'h = \\frac{(1.24 \\times 10^{-6})(1.60 \\times 10^{-19})}{3.00 \\times 10^8}',
          answer: '$h = 6.61 \\times 10^{-34}\\text{ J s}$.',
          trapAlert: 'Jangan lupa $1/\\lambda$ mempunyai unit $\\text{m}^{-1}$ (jika graf diberi dalam $\\mu\\text{m}^{-1}$ atau $\\text{nm}^{-1}$, wajib tukar ke $\\text{m}^{-1}$ dahulu sebelum mengira kecerunan!).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah yang berlaku kepada arus fotoelektrik dan tenaga kinetik maksimum fotoelektron apabila keamatan cahaya ($f > f_0$) digandakan?', answer: 'Arus fotoelektrik (bilangan fotoelektron sesaat) berganda, manakala tenaga kinetik maksimum $K_{\\text{maks}}$ kekal tidak berubah.' },
          { question: 'Apakah maksud frekuensi ambang $f_0$?', answer: 'Frekuensi minimum cahaya yang diperlukan untuk memancarkan elektron daripada permukaan suatu logam.' },
          { question: 'Dalam eksperimen LED Aktiviti 7.5, LED warna apakah (antara biru dan merah) memerlukan voltan pengaktifan $V_a$ paling tinggi?', answer: 'LED biru kerana $\\lambda$ paling pendek dan tenaga foton $hf$ paling tinggi.' },
        ],
        fadedProblem: {
          prompt: 'Satu logam mempunyai frekuensi ambang $f_0 = 5.0 \\times 10^{14}\\text{ Hz}$. Logam ini disinari oleh cahaya biru berfrekuensi $6.5 \\times 10^{14}\\text{ Hz}$ dan kemudian cahaya merah $4.2 \\times 10^{14}\\text{ Hz}$ berkeamatan 10 kali lebih tinggi.',
          step1GivenAndFormula: 'Diberi: $f_0 = 5.0 \\times 10^{14}\\text{ Hz}$; $f_{\\text{biru}} > f_0$, $f_{\\text{merah}} < f_0$. Syarat kesan fotoelektrik: $f \\ge f_0$.',
          studentTask: 'Nyatakan cahaya manakah berjaya mengeluarkan fotoelektron dan apakah kesannya jika keamatan cahaya biru digandakan.',
          answerSteps: 'Hanya **cahaya biru** berjaya mengeluarkan fotoelektron ($f_{\\text{biru}} > f_0$); cahaya merah gagal walaupun amat terang. Menggandakan keamatan cahaya biru meningkatkan arus fotoelektrik dua kali ganda tetapi $K_{\\text{maks}}$ tetap sama.',
        },
        transferQuestion: {
          question: 'Mengapakah teori gelombang klasik meramalkan kesan fotoelektrik sepatutnya berlaku pada SEBARANG frekuensi asalkan keamatan cahaya cukup tinggi dan diberi masa yang lama?',
          answer: 'Mengikut teori klasik, gelombang cahaya menyebarkan tenaga secara berterusan ke semua elektron pada permukaan logam; maka dengan masa cukup lama atau amplitud (keamatan) tinggi, elektron patut dapat mengumpul tenaga cukup untuk terlepas tanpa mengira frekuensi — ramalan ini disangkal oleh eksperimen!',
        },
      },
    },
    {
      id: 't5-7.3',
      chapterId: 't5-bab-7',
      code: '7.3',
      title: 'Teori Fotoelektrik Einstein',
      pageRef: 'm.s. 238–250',
      part1Anchor: {
        phenomenon:
          'Albert Einstein menggunakan prinsip keabadian tenaga untuk menuliskan persamaan fotoelektrik paling jitu dalam fizik moden: tenaga satu foton digunakan untuk membayar "tol keluar" logam (fungsi kerja $W$), dan bakinya menjadi laju kinetik elektron — teknologi yang menggerakkan panel sel suria dan pintu lif automatik hari ini.',
        chapterConnection:
          'Kemuncak seluruh sukatan Fizik KSSM Tingkatan 4 & 5: menyelesaikan kuantitatif graf fotoelektrik ($K_{\\text{maks}}$ vs $f$), fungsi kerja logam, panjang gelombang ambang $\\lambda_0$, dan aplikasi sel foto/sel suria.',
      },
      part2SacredDefinitions: [
        {
          title: 'Fungsi Kerja ($W$) & Persamaan Fotoelektrik Einstein',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Fungsi kerja, $W$ ialah ' },
            { text: 'tenaga minimum yang diperlukan untuk membebaskan fotoelektron', keyword: true },
            { text: ' daripada ' },
            { text: 'permukaan suatu logam', keyword: true },
            { text: '. Mengikut Teori Fotoelektrik Einstein: ' },
            { text: 'Tenaga foton = Fungsi kerja + Tenaga kinetik maksimum fotoelektron', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'hf = W + K_{\\text{maks}} = h f_0 + \\frac{1}{2}m v_{\\text{maks}}^2',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Tafsiran Matematik Graf Garis Lurus $K_{\\text{maks}}$ Melawan $f$',
            cause: 'Persamaan Einstein disusun semula dalam bentuk linear $y = mx + c$: $K_{\\text{maks}} = h f - W$.',
            mechanism: 'Bandingkan dengan $y = mx + c$: kecerunan graf ialah $h$ (malar bagi semua logam!), pintasan paksi-$x$ ($K_{\\text{maks}} = 0$) ialah frekuensi ambang $f_0$, dan pintasan paksi-$y$ negatif ($f = 0$) ialah $-W$.',
            effect: 'Garis graf bagi logam berlainan (cth. Cesium vs Litium) sentiasa **selari** antara satu sama lain kerana kecerunannya sama ($h = 6.63 \\times 10^{-34}\\text{ J s}$), hanya teranjak mengikut nilai $W$ dan $f_0$ masing-masing.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Logam Fotoelektrik (Cesium vs Litium) & Aplikasi Sel Foto',
            headers: ['Logam / Aplikasi', 'Fungsi Kerja ($W$) / Panjang Gelombang Ambang ($\\lambda_0$)', 'Kepentingan Praktikal'],
            rows: [
              ['Cesium (Cs)', '$W = 2.14\\text{ eV}$ ($3.42 \\times 10^{-19}\\text{ J}$), $\\lambda_0 = 579\\text{ nm}$', 'Mudah memancarkan elektron menggunakan **cahaya nampak** biasa ($< 579\\text{ nm}$); sesuai untuk sel foto & pengesan cahaya'],
              ['Litium (Li)', '$W = 2.50\\text{ eV}$ ($4.00 \\times 10^{-19}\\text{ J}$), $\\lambda_0 = 496\\text{ nm}$', 'Memerlukan cahaya biru/ultraungu bertenaga lebih tinggi untuk kesan fotoelektrik'],
              ['Sel Suria (Fotovoltaik)', 'Semikonduktor silikon menukar foton matahari kepada arus elektrik terus', 'Bekalan tenaga bersih boleh baharu untuk satelit ISS, kalkulator dan bumbung rumah'],
              ['Pengesan cahaya / pintu lif automatik / sel foto lampu jalan', 'Alur cahaya memutuskan/menyambungkan arus fotoelektrik sel bersalut cesium', 'Mengesan halangan atau tahap kecerahan persekitaran secara serta-merta tanpa sentuhan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Fotoelektrik Einstein Lengkap',
            latex: 'hf = W + \\frac{1}{2}m v_{\\text{maks}}^2, \\qquad W = h f_0 = \\frac{hc}{\\lambda_0}',
            symbols: [
              { symbol: 'hf', meaning: 'Tenaga satu foton tuju ($hc/\\lambda$)', unit: '$\\text{J}$' },
              { symbol: 'W', meaning: 'Fungsi kerja logam (pintasan paksi-$y$ negatif)', unit: '$\\text{J}$ ($1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$)' },
              { symbol: 'f_0, \\lambda_0', meaning: 'Frekuensi ambang & panjang gelombang ambang maksimum', unit: '$\\text{Hz}$ / $\\text{m}$' },
              { symbol: 'v_{\\text{maks}}', meaning: 'Halaju maksimum fotoelektron terpancar', unit: '$\\text{m s}^{-1}$' },
            ],
            appliesWhen: 'Frekuensi cahaya $f \\ge f_0$ (atau panjang gelombang tuju $\\lambda \\le \\lambda_0$).',
            failsWhen: 'AWAS tanda songsang bagi $\\lambda_0$! Kerana $W = hc/\\lambda_0$, kesan fotoelektrik HANYA berlaku apabila panjang gelombang tuju **LEBIH PENDEK atau SAMA** dengan panjang gelombang ambang ($\\lambda \\le \\lambda_0$). Juga WAJIB tukar $\\text{eV} \\to \\text{J}$ ($\\times 1.60 \\times 10^{-19}$) sebelum mengira $v_{\\text{maks}}$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-photoelectric-einstein',
            title: 'Graf $K_{\\text{maks}}$ Melawan $f$ bagi Persamaan Einstein (Logam Cs vs Li)',
            whatItShows: 'Dua garis lurus selari berkecerunan sama $h$: Cesium mempunyai $f_0$ dan pintasan $W$ lebih kecil daripada Litium, membuktikan foton berfrekuensi sama memberi $K_{\\text{maks}}$ lebih tinggi pada Cesium.',
            axisOrRule: 'Kecerunan $= h$; Pintasan-$x = f_0$; Pintasan-$y = -W$; jika $\\lambda > \\lambda_0$ atau $f < f_0$, nilai $K_{\\text{maks}} = 0$ (tiada pemancaran).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1 & 2: Mengira Fungsi Kerja Cesium & daripada Graf Litium',
          problem: '(a) Panjang gelombang ambang bagi logam Cesium (dalam kajian fotoelektrik asas) menghasilkan fungsi kerja apabila $f_0 = 1.50 \\times 10^{14}\\text{ Hz}$ (contoh makmal: $W = hf_0$) atau daripada graf $K_{\\text{maks}}$-$f$ logam Litium dengan pintasan $f_0 = 5.6 \\times 10^{14}\\text{ Hz}$. Hitung fungsi kerja $W$ dalam kedua-dua kes. [$h = 6.63 \\times 10^{-34}\\text{ J s}$]',
          given: ['(a) $f_0 = 1.50 \\times 10^{14}\\text{ Hz}$', '(b) Litium graf $f_0 = 5.6 \\times 10^{14}\\text{ Hz}$'],
          formulaLatex: 'W = h f_0',
          formulaWhy: 'Pada frekuensi ambang, keseluruhan tenaga foton tepat sama dengan fungsi kerja ($K_{\\text{maks}} = 0$).',
          substituteLatex: 'W_a = (6.63 \\times 10^{-34})(1.50 \\times 10^{14}) = 9.95 \\times 10^{-20}\\text{ J}; \\quad W_{\\text{Li}} = (6.63 \\times 10^{-34})(5.6 \\times 10^{14})',
          answer: '(a) $9.95 \\times 10^{-20}\\text{ J}$ (Cesium tulen di jadual: $2.14\\text{ eV}$ pada $579\\text{ nm}$); (b) Litium graf: $3.71 \\times 10^{-19}\\text{ J}$ ($2.32\\text{ eV}$).',
          trapAlert: 'Sentiasa semak unit jawapan yang diminta — sama ada dalam **Joule ($\\text{J}$)** atau **elektron-volt ($\\text{eV}$)**.',
        },
        {
          title: 'Contoh 3: Halaju Maksimum Fotoelektron bagi Fungsi Kerja $2.00\\text{ eV}$',
          problem: 'Satu permukaan logam mempunyai fungsi kerja $W = 2.00\\text{ eV}$ disinari dengan cahaya hijau berpanjang gelombang $\\lambda = 550\\text{ nm}$. Hitung halaju maksimum fotoelektron yang terpancar. [$h = 6.63 \\times 10^{-34}\\text{ J s}, c = 3.0 \\times 10^8\\text{ m s}^{-1}, m = 9.11 \\times 10^{-31}\\text{ kg}, 1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$]',
          given: ['$\\lambda = 550\\text{ nm} = 5.50 \\times 10^{-7}\\text{ m}$', '$W = 2.00 \\times 1.60 \\times 10^{-19} = 3.20 \\times 10^{-19}\\text{ J}$'],
          formulaLatex: '\\frac{hc}{\\lambda} = W + \\frac{1}{2}m v_{\\text{maks}}^2',
          formulaWhy: 'Cari tenaga foton tuju dalam Joule, tolak fungsi kerja dalam Joule, dan tukarkan baki $K_{\\text{maks}}$ kepada laju.',
          substituteLatex: 'E = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{5.50 \\times 10^{-7}} = 3.616 \\times 10^{-19}\\text{ J}; \\quad K_{\\text{maks}} = (3.616 - 3.20) \\times 10^{-19} = 4.16 \\times 10^{-20}\\text{ J}',
          answer: '$v_{\\text{maks}} = \\sqrt{\\frac{2(4.16 \\times 10^{-20})}{9.11 \\times 10^{-31}}} = 3.02 \\times 10^5\\text{ m s}^{-1}$.',
          trapAlert: 'Jika tenaga foton $E$ didapati lebih kecil daripada $W$, tiada elektron akan terlepas — jangan sekali-kali ambil punca kuasa dua nombor negatif!',
        },
        {
          title: 'Contoh 4: Mencari Fungsi Kerja & $\\lambda_0$ daripada Dua Panjang Gelombang Berbeza',
          problem: 'Apabila sejenis logam disinari oleh cahaya berpanjang gelombang $750\\text{ nm}$ dan $460\\text{ nm}$, tenaga kinetik maksimum fotoelektron masing-masing ialah $E_{k1}$ dan $E_{k2}$ dengan $E_{k2} = 2 E_{k1}$ (jika $E_{k1} = 1.67 \\times 10^{-19}\\text{ J}$). Hitung fungsi kerja $W$ dan panjang gelombang ambang $\\lambda_0$ logam tersebut.',
          given: ['$\\lambda_1 = 750\\text{ nm}$', '$\\lambda_2 = 460\\text{ nm}$', '$E_{k2} = 2E_{k1}$'],
          formulaLatex: '\\frac{hc}{\\lambda_1} - W = E_{k1}, \\qquad \\frac{hc}{\\lambda_2} - W = 2E_{k1} \\implies W = 2\\frac{hc}{\\lambda_1} - \\frac{hc}{\\lambda_2}, \\qquad \\lambda_0 = \\frac{hc}{W}',
          formulaWhy: 'Gunakan persamaan serentak Persamaan Fotoelektrik Einstein bagi menghapuskan $E_{k1}$ dan memperoleh $W$, kemudian kira $\\lambda_0 = hc/W$.',
          substituteLatex: 'W = 2(2.652 \\times 10^{-19}) - 4.324 \\times 10^{-19} = 9.80 \\times 10^{-20}\\text{ J}; \\qquad \\lambda_0 = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{9.80 \\times 10^{-20}}',
          answer: '$W = 9.80 \\times 10^{-20}\\text{ J}$, panjang gelombang ambang $\\lambda_0 = 2.03 \\times 10^{-6}\\text{ m}$.',
          trapAlert: 'Semak konsistensi: sebarang panjang gelombang $\\lambda \\le 2.03\\ \\mu\\text{m}$ dapat mencetuskan kesan fotoelektrik pada logam tersebut.',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Bahan Katod Sel Foto & Panel Suria (Kertas 2 SPM)',
        rows: [
          {
            designChoice: 'Menggunakan logam ber fungsi kerja $W$ rendah (seperti Cesium, $2.14\\text{ eV}$) pada katod sel foto',
            scientificReason: 'Mempunyai frekuensi ambang $f_0$ yang rendah (atau $\\lambda_0$ panjang sehingga $579\\text{ nm}$) supaya mudah memancarkan fotoelektron di bawah cahaya nampak biasa.',
          },
          {
            designChoice: 'Menyalut panel suria dengan permukaan gelap tak memantul & luas permukaan besar',
            scientificReason: 'Memaksimumkan penyerapan bilangan foton cahaya matahari per saat supaya lebih banyak pasangan elektron-lohong terhasil dan arus elektrik output tinggi.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah yang diwakili oleh kecerunan dan pintasan paksi-$y$ pada graf $K_{\\text{maks}}$ melawan $f$?', answer: 'Kecerunan $= $ pemalar Planck $h$; Pintasan paksi-$y = -W$ (negatif fungsi kerja logam).' },
          { question: 'Jika Cesium mempunyai $\\lambda_0 = 579\\text{ nm}$, adakah cahaya kuning ($590\\text{ nm}$) dapat membebaskan elektron daripadanya?', answer: 'Tidak! Kerana $\\lambda_{\\text{kuning}} = 590\\text{ nm} > \\lambda_0$ bermakna frekuensinya lebih rendah daripada $f_0$.' },
          { question: 'Nyatakan fungsi kerja dalam Joule jika diberi $W = 2.50\\text{ eV}$.', answer: '$2.50 \\times 1.60 \\times 10^{-19} = 4.00 \\times 10^{-19}\\text{ J}$.' },
        ],
        fadedProblem: {
          prompt: 'Permukaan Litium dengan fungsi kerja $W = 2.50\\text{ eV}$ ($4.00 \\times 10^{-19}\\text{ J}$) disinari cahaya ultraungu berpanjang gelombang $\\lambda = 300\\text{ nm}$. ($h = 6.63 \\times 10^{-34}\\text{ J s}, c = 3.0 \\times 10^8\\text{ m s}^{-1}$).',
          step1GivenAndFormula: 'Diberi: $\\lambda = 3.00 \\times 10^{-7}\\text{ m}$, $W = 4.00 \\times 10^{-19}\\text{ J}$. Rumus: $K_{\\text{maks}} = \\frac{hc}{\\lambda} - W$.',
          studentTask: 'Hitung tenaga foton tuju, tenaga kinetik maksimum fotoelektron dalam Joule, dan panjang gelombang ambang $\\lambda_0$ Litium.',
          answerSteps: '$E = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{3.00 \\times 10^{-7}} = 6.63 \\times 10^{-19}\\text{ J}$; $K_{\\text{maks}} = (6.63 - 4.00) \\times 10^{-19} = 2.63 \\times 10^{-19}\\text{ J}$; $\\lambda_0 = \\frac{hc}{W} = 4.97 \\times 10^{-7}\\text{ m}$ ($497\\text{ nm}$).',
        },
        transferQuestion: {
          question: 'Dua graf selari $K_{\\text{maks}}$ melawan $f$ dilukis untuk logam P ($f_{0,P} = 4.5 \\times 10^{14}\\text{ Hz}$) dan logam Q ($f_{0,Q} = 6.0 \\times 10^{14}\\text{ Hz}$). Jika cahaya berfrekuensi $7.0 \\times 10^{14}\\text{ Hz}$ menyinari kedua-dua logam, logam manakah memancarkan elektron dengan halaju maksimum lebih tinggi? Jelaskan.',
          answer: 'Logam **P**. Kerana $f_{0,P} < f_{0,Q}$, fungsi kerja logam P ($W_P = h f_{0,P}$) adalah lebih kecil daripada Q. Oleh itu, bagi tenaga foton tuju $hf$ yang sama, baki tenaga kinetik $K_{\\text{maks}} = hf - W$ pada logam P adalah lebih besar, menghasilkan $v_{\\text{maks}}$ yang lebih tinggi.',
        },
      },
    },
  ],
};
