import type { ChapterContent } from '../types/textbook';

export const bab6: ChapterContent = {
  id: 'bab-6',
  formLevel: 4,
  number: 6,
  title: 'Cahaya dan Optik',
  pageRange: 'm.s. 230–282',
  overview:
    'Bagaimana cahaya membengkok, terperangkap, dan membentuk imej: pembiasan & Hukum Snell, pantulan dalam penuh, kanta cembung/cekung, formula kanta nipis, peralatan optik, dan cermin sfera.',
  subtopics: [
    {
      id: '6.1',
      chapterId: 'bab-6',
      code: '6.1',
      title: 'Pembiasan Cahaya',
      pageRef: 'm.s. 232–241',
      part1Anchor: {
        phenomenon:
          'Sebatang pensel kelihatan bengkok di dalam air dan dasar kolam renang sentiasa nampak lebih cetek daripada kedalaman sebenar — ilusi optik akibat cahaya melambat dan membengkok merentas bahan berketumpatan optik berbeza.',
        chapterConnection:
          'Menerapkan prinsip pembiasan gelombang (Bab 5) khusus kepada cahaya melalui indeks biasan ($n$), Hukum Snell, dan dalam ketara ($n = H/h$).',
      },
      part2SacredDefinitions: [
        {
          title: 'Indeks Biasan ($n$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Indeks biasan, $n$ suatu medium ialah ' },
            { text: 'nisbah laju cahaya dalam vakum kepada laju cahaya dalam medium', keyword: true },
            { text: ' tersebut.' },
          ],
          equationLatex: 'n = \\frac{c}{v}',
        },
        {
          title: 'Hukum Snell',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Sinar tuju, sinar biasan dan garis normal berada pada satah yang sama, dan ' },
            { text: 'nisbah $\\sin i$ kepada $\\sin r$ adalah pemalar', keyword: true },
            { text: ' ($n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$).' },
          ],
          equationLatex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies n = \\frac{\\sin i}{\\sin r}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Dasar Kolam Renang Kelihatan Lebih Cetek (Dalam Ketara $h < H$)',
            cause: 'Sinar cahaya dari duit syiling / dasar kolam di dalam air ($n$ tinggi) keluar ke udara ($n$ rendah) menuju ke mata pemerhati.',
            mechanism: 'Apabila cahaya melaju di udara, sinar cahaya membias MENJAUHI garis normal; mata mengunjurkan sinar terbias itu secara garis lurus ke belakang ke titik persilangan yang lebih tinggi.',
            effect: 'Imej maya terbentuk pada kedalaman ketara $h$ yang lebih cetek daripada dalam nyata $H$ ($n = H/h$).',
          },
        ],
        tables: [
          {
            title: 'Tiga Rumus Indeks Biasan ($n \\ge 1$ Sentiasa!)',
            headers: ['Rumus', 'Bilakah Digunakan', 'Amaran Kertas 1 & 2'],
            rows: [
              ['$n = \\frac{c}{v}$', 'Apabila diberi laju cahaya dalam vakum ($c = 3.00 \\times 10^8\\text{ m s}^{-1}$) & dalam medium ($v$)', 'Sentiasa bahagi $c$ dengan $v$, bukan $v/c$'],
              ['$n = \\frac{\\sin i}{\\sin r}$', 'Cahaya dari udara ($n_1 \\approx 1$) ke medium $n$', 'Jika cahaya keluar dari medium ke udara, $i$ ialah sudut dalam medium — guna $n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$!'],
              ['$n = \\frac{H}{h}$', 'Diberi Dalam Nyata ($H$) dan Dalam Ketara ($h$)', 'Ketebalan kaca atau kedalaman air ialah $H$; kedudukan imej dari permukaan ialah $h$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Ketumpatan Optik vs Ketumpatan Jisim',
            latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2',
            symbols: [
              { symbol: 'n', meaning: 'Indeks biasan (ketumpatan optik — tiada unit!)', unit: 'tiada unit' },
              { symbol: 'H, h', meaning: 'Dalam nyata & dalam ketara (diukur dari permukaan pemisah)', unit: '$\\text{cm}$ atau $\\text{m}$' },
            ],
            appliesWhen: 'Menentukan ketumpatan optik: minyak masak mempunyai ketumpatan jisim lebih rendah daripada air (terapung), TETAPI ketumpatan optik ($n \\approx 1.47$) lebih tinggi daripada air ($n = 1.33$)!',
            failsWhen: 'Menganggap bahan berketumpatan jisim tinggi sentiasa mempunyai indeks biasan $n$ lebih tinggi — ini salah!',
          },
        ],
        diagrams: [
          {
            kind: 'light-refraction',
            title: 'Pembiasan Cahaya dalam Blok Kaca & Dalam Nyata vs Dalam Ketara',
            whatItShows: 'Kiri: Sinar dari udara ke kaca mendekati normal ($r < i$) dan keluar sejajar dengan sinar asal. Kanan: Pembentukan imej maya pada kedalaman ketara $h = H/n$.',
            axisOrRule: 'Graf $\\sin i$ melawan $\\sin r$ ialah garis lurus melalui $(0,0)$ dengan kecerunan $= n$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 6.1 & 6.2',
            title: 'Menentukan Indeks Biasan Blok Kaca & Kaedah Tanpa Paralaks',
            aim: 'Mengkaji hubungan antara sudut tuju $i$ dengan sudut biasan $r$ (Eksp 6.1) serta menentukan $n$ air melalui dalam nyata dan dalam ketara (Eksp 6.2).',
            inference: 'Sudut biasan bergantung pada sudut tuju; imej objek di dalam air kelihatan lebih cetek.',
            hypothesis: '$\\sin i$ berkadar terus dengan $\\sin r$; $H$ berkadar terus dengan $h$.',
            variables: {
              manipulated: 'Eksp 6.1: Sudut tuju, $i$; Eksp 6.2: Dalam nyata pin $O$, $H$',
              responding: 'Eksp 6.1: Sudut biasan, $r$; Eksp 6.2: Dalam ketara imej, $h$',
              fixed: 'Blok kaca / air dengan indeks biasan $n$ tetap',
            },
            setupLogic: 'Eksp 6.2: Laraskan pin rujukan $I$ di luar bikar secara naik/turun sehingga tiada paralaks apabila dilihat sebaris dengan imej pin $O$ dari atas (gerakkan mata ke kiri-kanan; kedua-duanya bergerak bersama).',
            expectedResult: 'Graf $\\sin i$ melawan $\\sin r$ (dan graf $H$ melawan $h$) berbentuk garis lurus melalui asalan; kecerunan $= n$.',
            conclusion: 'Indeks biasan $n = \\frac{\\sin i}{\\sin r} = \\frac{H}{h}$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Cahaya Memasuki Berlian ($n = 2.42$)',
          problem: 'Seberkas cahaya merambat dari udara memasuki berlian ($n = 2.42$) dengan sudut tuju $40^\\circ$. Hitung sudut biasan $r$ dan laju cahaya di dalam berlian.',
          given: ['$n_1 = 1.00$ (udara), $\\theta_1 = 40^\\circ$', '$n_2 = 2.42$', '$c = 3.00 \\times 10^8\\text{ m s}^{-1}$'],
          formulaLatex: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2, \\qquad v = \\frac{c}{n}',
          formulaWhy: 'Hukum Snell bentuk umum sentiasa sah tanpa mengira arah cahaya.',
          substituteLatex: '1.00\\sin 40^\\circ = 2.42\\sin r \\implies \\sin r = \\frac{0.6428}{2.42} = 0.2656; \\quad v = \\frac{3.00 \\times 10^8}{2.42}',
          answer: '$r = 15.4^\\circ$; $v = 1.24 \\times 10^8\\text{ m s}^{-1}$',
          trapAlert: 'Pastikan kalkulator ditetapkan pada mod **DEG** (darjah), bukan **RAD**!',
        },
        {
          title: 'Contoh 2: Mengira Kedudukan Imej Ikan di Dalam Akuarium',
          problem: 'Seekor ikan berenang pada kedalaman sebenar $60\\text{ cm}$ di dalam air ($n = 1.33$). Berapa jauhkah ikan itu kelihatan diangkat ke atas dari kedudukan sebenarnya?',
          given: ['$H = 60\\text{ cm}$', '$n = 1.33$'],
          formulaLatex: 'n = \\frac{H}{h} \\implies h = \\frac{H}{n}',
          formulaWhy: 'Cari dalam ketara $h$ dari permukaan air dahulu, kemudian tolak dari $H$.',
          substituteLatex: 'h = \\frac{60}{1.33} = 45.1\\text{ cm}; \\quad \\Delta h = H - h = 60 - 45.1',
          answer: 'Dalam ketara $= 45.1\\text{ cm}$; kelihatan terangkat $14.9\\text{ cm}$ ke atas',
          trapAlert: 'Baca soalan teliti: adakah soalan meminta jarak imej dari permukaan ($h$) ATAU anjakan menegak ($H - h$)?',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Adakah nilai indeks biasan $n$ bagi kaca boleh menjadi $0.75$? Mengapa?', answer: 'Tidak boleh; $n = c/v$ dan laju cahaya dalam mana-mana medium sentiasa lebih perlahan daripada dalam vakum, maka $n \\ge 1$.' },
          { question: 'Nyatakan cara menentukan kesegarisan tanpa paralaks dalam Eksperimen 6.2.', answer: 'Gerakkan mata ke kiri dan kanan; kedudukan tiada paralaks dicapai apabila objek dan imej bergerak seiring tanpa berpisah.' },
          { question: 'Mengapakah frekuensi cahaya tidak berubah semasa memasuki kaca walaupun halajunya berkurang?', answer: 'Frekuensi ditentukan oleh sumber cahaya; apabila $v$ berkurang, panjang gelombang $\\lambda$ berkurang secara berkadar supaya $f = v/\\lambda$ kekal.' },
        ],
        fadedProblem: {
          prompt: 'Sebiji blok kaca mempunyai indeks biasan $1.50$ dan ketebalan $12.0\\text{ cm}$. Apabila satu tanda dakwat di bawah blok dilihat tegak dari atas, berapakah dalam ketaranya?',
          step1GivenAndFormula: 'Diberi: $H = 12.0\\text{ cm}$, $n = 1.50$. Rumus: $n = \\frac{H}{h}$.',
          studentTask: 'Kira nilai $h$ dalam $\\text{cm}$.',
          answerSteps: 'Langkah 3: $1.50 = \\frac{12.0}{h} \\implies h = \\frac{12.0}{1.50}$ → Langkah 4: $h = 8.0\\text{ cm}$.',
        },
        transferQuestion: {
          question: 'Minyak terapung di atas permukaan air, tetapi apabila laser dipancarkan dari minyak ke air, sinar membias MENJAUHI garis normal. Mengapa?',
          answer: 'Minyak mempunyai indeks biasan (ketumpatan optik) lebih tinggi ($n \\approx 1.47$) daripada air ($1.33$) walaupun ketumpatan jisimnya lebih rendah. Cahaya dari medium ketumpatan optik tinggi ke rendah melaju lalu membias menjauhi normal.',
        },
      },
    },
    {
      id: '6.2',
      chapterId: 'bab-6',
      code: '6.2',
      title: 'Pantulan Dalam Penuh',
      pageRef: 'm.s. 242–250',
      part1Anchor: {
        phenomenon:
          'Kilauan berlian, lopak air palsu di atas jalan tar panas (logamaya), dan isyarat internet berkapasiti tinggi di dalam gentian optik semuanya berlaku kerana cahaya terperangkap dan memantul $100\%$ di sempadan bahan!',
        chapterConnection:
          'Kes had pembiasan ($r = 90^\\circ$ pada sudut genting $c$) yang menghasilkan pemantul sempurna melebihi cermin perak biasa.',
      },
      part2SacredDefinitions: [
        {
          title: 'Sudut Genting ($c$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sudut genting, $c$ ialah ' },
            { text: 'sudut tuju dalam medium yang berketumpatan optik tinggi', keyword: true },
            { text: ' apabila ' },
            { text: 'sudut biasan di dalam medium berketumpatan optik rendah ialah $90^\\circ$', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'n = \\frac{1}{\\sin c}',
        },
        {
          title: 'Dua Syarat Wajib Pantulan Dalam Penuh',
          category: 'Prinsip',
          verbatimSegments: [
            { text: '1. Cahaya mesti merambat dari ' },
            { text: 'medium berketumpatan optik tinggi ke medium berketumpatan optik rendah', keyword: true },
            { text: '. 2. Sudut tuju mesti ' },
            { text: 'melebihi sudut genting', keyword: true },
            { text: ' ($i > c$).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Logamaya Terbentuk di Jalan Tar Panas',
            cause: 'Matahari memanaskan permukaan jalan tar, menjadikan lapisan udara dekat jalan panas (kurang tumpat secara optik) berbanding udara sejuk di atasnya.',
            mechanism: 'Cahaya dari langit bergerak ke bawah merentas lapisan udara daripada tumpat optik tinggi ke rendah semakin membias menjauhi normal sehingga $i > c$.',
            effect: 'Pantulan dalam penuh berlaku ke atas menuju mata pemandu, menampakkan imej langit biru di atas jalan yang disangka lopak air.',
          },
        ],
        tables: [
          {
            title: 'Sudut Tuju vs Kelakuan Cahaya (Kaca $n=1.50, c \\approx 42^\\circ \\to$ Udara)',
            headers: ['Sudut Tuju ($i$)', 'Kelakuan Sinar Cahaya'],
            rows: [
              ['$i < c$ (cth: $30^\\circ$)', 'Sebahagian besar cahaya membias keluar ($r > i$); sedikit pantulan lemah berlaku'],
              ['$i = c$ ($42^\\circ$)', 'Sinar biasan merambat menyusuri sempadan kaca-udara ($r = 90^\\circ$)'],
              ['$i > c$ (cth: $45^\\circ$)', 'Tiada pembiasan! $100\%$ cahaya mengalami Pantulan Dalam Penuh ($i = r_{\\text{pantul}}$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Hubungan Indeks Biasan & Sudut Genting',
            latex: 'n = \\frac{1}{\\sin c}',
            symbols: [
              { symbol: 'n', meaning: 'Indeks biasan medium tumpat (relatif kepada udara)', unit: 'tiada unit' },
              { symbol: 'c', meaning: 'Sudut genting', unit: 'darjah ($^\\circ$)' },
            ],
            appliesWhen: 'Medium kedua ialah udara ($n_{\\text{udara}} = 1.00$).',
            failsWhen: 'Jika kedua-dua medium bukan udara (cth: teras gentian optik $n_1$ ke penyalut $n_2$), wajib guna Hukum Snell: $n_1 \\sin c = n_2 \\sin 90^\\circ \\implies \\sin c = \\frac{n_2}{n_1}$!',
          },
        ],
        diagrams: [
          {
            kind: 'total-internal-reflection',
            title: 'Tiga Kes Sudut Tuju ($i < c$, $i = c$, $i > c$) & Periskop Berprisma',
            whatItShows: 'Prisma kaca bersudut $45^\\circ$-$90^\\circ$-$45^\\circ$ memantulkan cahaya pada permukaan serong ($i = 45^\\circ > c = 42^\\circ$) tanpa memerlukan lapisan bersadur perak.',
            axisOrRule: 'Semakin tinggi $n$ bahan, semakin KECIL sudut genting $c$ (cth: berlian $n=2.42 \\implies c=24.4^\\circ$, cahaya amat mudah terperangkap dan berkilau!).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Sudut Genting Prisma Kaca dan Periskop',
          problem: 'Sebuah prisma kaca mempunyai indeks biasan $1.52$. Hitung sudut gentingnya dan jelaskan sama ada sinar yang menghentam permukaan dalam prisma pada sudut tuju $45^\\circ$ akan keluar ke udara.',
          given: ['$n = 1.52$', '$i = 45^\\circ$ (dari kaca ke udara)'],
          formulaLatex: 'n = \\frac{1}{\\sin c}',
          formulaWhy: 'Cahaya cuba keluar daripada kaca berketumpatan optik tinggi ke udara.',
          substituteLatex: '\\sin c = \\frac{1}{1.52} = 0.6579 \\implies c = \\sin^{-1}(0.6579)',
          answer: '$c = 41.1^\\circ$; kerana $i = 45^\\circ > c = 41.1^\\circ$, sinar TIDAK keluar tetapi mengalami Pantulan Dalam Penuh ($r_{\\text{pantul}} = 45^\\circ$).',
          trapAlert: 'Jangan lupa menyemak arah cahaya: jika cahaya masuk dari udara ke kaca, pantulan dalam penuh TIDAK mungkin berlaku!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Pantulan Dalam Penuh & Kejuruteraan Gentian Optik (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Teras dalam gentian optik mempunyai indeks biasan ($n_{\\text{teras}}$) lebih tinggi daripada penyalut ($n_{\\text{penyalut}}$)', scientificReason: 'Memenuhi syarat pertama pantulan dalam penuh supaya cahaya yang memancar pada $i > c$ kekal terperangkap di dalam teras walaupun kabel dilentur.' },
          { designChoice: 'Periskop menggunakan prisma $45^\\circ$-$90^\\circ$-$45^\\circ$ berbanding cermin satah biasa', scientificReason: 'Pantulan dalam penuh memantulkan $100\%$ cahaya menghasilkan imej lebih terang, tajam, dan tiada imej berganda berbanding cermin satah berlapisan kaca depan.' },
          { designChoice: 'Pemantul mata jalan raya (cat\'s eye) / binokular berprisma', scientificReason: 'Memantulkan semula cahaya lampu kereta tepat ke arah pemandu melalui dua kali pantulan dalam penuh pada prisma.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua syarat wajib untuk pantulan dalam penuh berlaku.', answer: '(1) Cahaya merambat dari medium berketumpatan optik tinggi ke rendah; (2) Sudut tuju lebih besar daripada sudut genting ($i > c$).' },
          { question: 'Mengapakah berlian berkilau lebih terang daripada kaca?', answer: 'Berlian mempunyai indeks biasan sangat tinggi ($2.42$), menghasilkan sudut genting sangat kecil ($24.4^\\circ$) sehingga cahaya banyak mengalami pantulan dalam penuh di dalamnya.' },
          { question: 'Dalam gentian optik, antara teras dengan penyalut, yang manakah berketumpatan optik lebih tinggi?', answer: 'Teras dalam ($n_{\\text{teras}} > n_{\\text{penyalut}}$).' },
        ],
        fadedProblem: {
          prompt: 'Air mempunyai indeks biasan $1.33$. Hitung sudut genting bagi sempadan air-udara.',
          step1GivenAndFormula: 'Diberi: $n = 1.33$. Rumus: $\\sin c = \\frac{1}{n}$.',
          studentTask: 'Kira nilai $c$ dalam darjah.',
          answerSteps: 'Langkah 3: $\\sin c = \\frac{1}{1.33} = 0.7519$ → Langkah 4: $c = 48.8^\\circ$.',
        },
        transferQuestion: {
          question: 'Seorang penyelam melihat ke atas permukaan air tasik yang tenang dan mendapati langit hanya kelihatan dalam satu bulatan cahaya di atas kepalanya, dikelilingi kawasan gelap/seperti cermin. Terangkan.',
          answer: 'Cahaya yang datang dari tepi melebihi sudut genting air ($48.8^\\circ$) mengalami pantulan dalam penuh di permukaan air, manakala hanya sinar dengan $i < 48.8^\\circ$ membias masuk membentuk bulatan pandangan langit.',
        },
      },
    },
    {
      id: '6.3',
      chapterId: 'bab-6',
      code: '6.3',
      title: 'Pembentukan Imej oleh Kanta',
      pageRef: 'm.s. 251–258',
      part1Anchor: {
        phenomenon:
          'Satu kepingan kaca melengkung yang sama boleh membakar kertas menjadi titik cahaya, membesarkan huruf buku menjadi kanta pembesar, atau membetulkan rabun jauh — bergantung pada bentuk dan kedudukan objek ($u$ relatif kepada $f$).',
        chapterConnection:
          'Menguasai 3 sinar utama dan melukis gambar rajah sinar untuk kesemua 6 kes kanta cembung (Jadual 6.7) serta 2 kes kanta cekung (Jadual 6.8).',
      },
      part2SacredDefinitions: [
        {
          title: 'Istilah Optik Kanta ($O, F, f, u, v$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pusat optik ($O$): titik di pusat kanta di mana sinar cahaya yang melaluinya ' },
            { text: 'tidak terbias', keyword: true },
            { text: '. Titik fokus ($F$): titik di atas paksi utama di mana sinar cahaya selari paksi utama ' },
            { text: 'menumpu (cembung) atau kelihatan mencapah (cekung)', keyword: true },
            { text: ' selepas melalui kanta. Panjang fokus ($f$): ' },
            { text: 'jarak antara pusat optik $O$ dengan titik fokus $F$', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Pembesaran Linear ($m$)',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Pembesaran linear ialah ' },
            { text: 'nisbah ketinggian imej kepada ketinggian objek', keyword: true },
            { text: ' (atau nisbah jarak imej $v$ kepada jarak objek $u$).' },
          ],
          equationLatex: 'm = \\frac{h_i}{h_o} = \\frac{v}{u}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Tiga Sinar Utama untuk Melukis Sebarang Rajah Sinar Kanta (Pilih 2 Sahaja)',
            cause: 'Setiap sinar dari hujung atas objek mematuhi aturan pembiasan tetap apabila melalui kanta nipis.',
            mechanism: 'Sinar 1: Selari paksi utama $\\to$ membias melalui $F$ (cembung) / mencapah seolah-olah dari $F$ (cekung). Sinar 2: Melalui pusat optik $O$ $\\to$ terus lurus tanpa terbias. Sinar 3: Melalui $F$ $\\to$ membias keluar selari paksi utama.',
            effect: 'Titik persilangan sinar (garis padu = Imej Nyata; unjuran garis putus-putus = Imej Maya) menetapkan kedudukan, saiz, dan orientasi imej tepat 100%.',
          },
        ],
        tables: [
          {
            title: 'Jadual 6.7 & 6.8: Ciri Imej Kanta Cembung (6 Kes) & Kanta Cekung (2 Kes)',
            headers: ['Kanta & Jarak Objek ($u$)', 'Kedudukan Imej ($v$)', 'Ciri Imej (Nyata/Maya, Tegak/Songsang, Saiz)', 'Alat Optik'],
            rows: [
              ['Cembung: $u = \\infty$', 'Pada $F$', 'Nyata, songsang, sangat diperkecil', 'Teleskop (kanta objek)'],
              ['Cembung: $u > 2f$', 'Antara $F$ dan $2F$', 'Nyata, songsang, diperkecil ($m < 1$)', 'Kamera, mata manusia'],
              ['Cembung: $u = 2f$', 'Pada $2F$', 'Nyata, songsang, sama saiz ($m = 1$)', 'Mesin fotostat'],
              ['Cembung: $f < u < 2f$', 'Lebih daripada $2F$', 'Nyata, songsang, diperbesar ($m > 1$)', 'Projektor LCD, kanta objek mikroskop'],
              ['Cembung: $u = f$', 'Di infiniti ($\\infty$)', 'Maya, tegak, diperbesar (sinar selari)', 'Lampu sorot / kanta mata teleskop'],
              ['Cembung: $u < f$', 'Di sebelah sama dengan objek', 'Maya, tegak, diperbesar ($m > 1$)', 'Kanta pembesar'],
              ['Cekung: Sebarang $u$ ($\\infty$ atau dekat)', 'Antara $O$ dan $F$ (di hadapan kanta)', 'SENTIASA Maya, tegak, diperkecil ($m < 1$)', 'Cermin mata rabun jauh, pengintip pintu'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Menentukan Pembesaran daripada Ketinggian atau Jarak',
            latex: 'm = \\frac{h_i}{h_o} = \\frac{|v|}{|u|}',
            symbols: [
              { symbol: 'm', meaning: 'Pembesaran linear (tiada unit!)', unit: 'tiada unit' },
              { symbol: 'h_i, h_o', meaning: 'Tinggi imej & tinggi objek', unit: '$\\text{cm}$' },
            ],
            appliesWhen: '$m < 1$ (diperkecil), $m = 1$ (sama saiz), $m > 1$ (diperbesar).',
            failsWhen: 'Melupakan anak panah arah pada sinar cahaya dalam lukisan SPM atau melukis imej maya dengan garis padu (imej maya WAJIB garis putus-putus!).',
          },
        ],
        diagrams: [
          {
            kind: 'convex-lens-rays',
            title: 'Pembinaan Sinar Kanta Cembung (Imej Nyata $u > f$ vs Kanta Pembesar $u < f$)',
            whatItShows: 'Perubahan sifat imej apabila objek bergerak melintasi $2F$ hingga masuk ke dalam $F$.',
            axisOrRule: 'Semua imej nyata adalah SONGSANG; semua imej maya daripada kanta tunggal adalah TEGAK.',
          },
          {
            kind: 'concave-lens-rays',
            title: 'Pembinaan Sinar Kanta Cekung (Sentiasa Maya, Tegak, Diperkecil)',
            whatItShows: 'Sinar selari mencapah seolah-olah dari $F$ di hadapan kanta; persilangan dengan sinar melalui $O$ sentiasa menghasilkan imej maya tegak antara $O$ dan $F$.',
            axisOrRule: 'Kanta cekung TIDAK pernah membentuk imej nyata bagi objek nyata.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Saiz dan Ciri Imej dengan Kanta Pembesar',
          problem: 'Satu objek setinggi $2.0\\text{ cm}$ diletakkan $6.0\\text{ cm}$ dari sebuat kanta cembung dan menghasilkan imej maya pada jarak $18.0\\text{ cm}$ dari kanta. Hitung pembesaran linear dan ketinggian imej.',
          given: ['$h_o = 2.0\\text{ cm}$', '$u = 6.0\\text{ cm}$', '$|v| = 18.0\\text{ cm}$'],
          formulaLatex: 'm = \\frac{|v|}{u} = \\frac{h_i}{h_o}',
          formulaWhy: 'Pembesaran linear menghubungkan nisbah jarak dengan nisbah ketinggian.',
          substituteLatex: 'm = \\frac{18.0}{6.0} = 3.0; \\quad h_i = 3.0 \\times 2.0',
          answer: '$m = 3.0$ (tiada unit); Tinggi imej $h_i = 6.0\\text{ cm}$ (maya, tegak, diperbesar)',
          trapAlert: 'Dalam melukis rajah sinar di SPM, sentiasa lukis kanta sebagai garis tegak berserta simbol cembung/cekung di paksi utama dan anak panah pada kedua-dua sinar!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Di manakah objek mesti diletakkan di hadapan kanta cembung untuk menghasilkan imej nyata yang SAMA SAIZ?', answer: 'Tepat pada $u = 2f$.' },
          { question: 'Nyatakan tiga ciri imej yang sentiasa dihasilkan oleh kanta cekung.', answer: 'Maya, tegak, dan diperkecil.' },
          { question: 'Apakah yang berlaku kepada sifat imej apabila objek bergerak dari $u > 2f$ menghampiri $F$ pada kanta cembung?', answer: 'Jarak imej $v$ bertambah jauh dan saiz imej membesar (kekal nyata dan songsang selagi $u > f$).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah projektor menghasilkan imej pada skrin sejauh $2.4\\text{ m}$ bagi slaid yang diletakkan $8.0\\text{ cm}$ dari kanta. Hitung pembesaran linear projektor.',
          step1GivenAndFormula: 'Diberi: $v = 2.4\\text{ m} = 240\\text{ cm}$, $u = 8.0\\text{ cm}$. Rumus: $m = \\frac{v}{u}$.',
          studentTask: 'Kira $m$ dan nyatakan ciri orientasi imej di skrin.',
          answerSteps: 'Langkah 3: $m = \\frac{240}{8.0}$ → Langkah 4: $m = 30$ (nyata, songsang, diperbesar 30 kali).',
        },
        transferQuestion: {
          question: 'Jika separuh bahagian atas kanta cembung ditutup dengan kad hitam legap semasa membentuk imej mentol di atas skrin, apakah yang berlaku kepada imej?',
          answer: 'Keseluruhan imej mentol masih terbentuk lengkap pada skrin, tetapi kecerahannya berkurang separuh kerana kurang sinar cahaya melalui kanta.',
        },
      },
    },
    {
      id: '6.4',
      chapterId: 'bab-6',
      code: '6.4',
      title: 'Formula Kanta Nipis',
      pageRef: 'm.s. 259–262',
      part1Anchor: {
        phenomenon:
          'Selain melukis skala di atas kertas graf, ahli fizik boleh meramal jarak imej, jenis imej (nyata vs maya), dan saiz imej tepat ke milimeter hanya dengan satu persamaan algebra mudah.',
        chapterConnection:
          'Menterjemahkan Jadual 6.7 dan 6.8 kepada formula $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ bersama peraturan tanda positif-negatif wajib SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Formula Kanta Nipis',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Hubungan antara jarak objek ($u$), jarak imej ($v$), dan panjang fokus ($f$) bagi kanta nipis ialah ' },
            { text: '$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$', keyword: true },
            { text: ' dengan syarat mematuhi ' },
            { text: 'peraturan tanda optik', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Menentukan Panjang Fokus $f$ daripada Eksperimen 6.3 (Graf $\\frac{1}{v}$ melawan $\\frac{1}{u}$)',
            cause: 'Persamaan $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ disusun menjadi persamaan garis lurus $\\frac{1}{v} = -\\frac{1}{u} + \\frac{1}{f}$.',
            mechanism: 'Plot graf $\\frac{1}{v}$ melawan $\\frac{1}{u}$ menghasilkan garis lurus berkecerunan $-1$ yang memotong paksi-$y$ dan paksi-$x$ tepat pada $\\frac{1}{f}$.',
            effect: 'Panjang fokus kanta diperoleh dengan mengambil salingan pintasan paksi: $f = \\frac{1}{\\text{pintasan}}$.',
          },
        ],
        tables: [
          {
            title: 'Jadual 6.10: Peraturan Tanda Formula Kanta Nipis (WAJIB HAFAL!)',
            headers: ['Kuantiti', 'Tanda Positif ($+$)', 'Tanda Negatif ($-$)'],
            rows: [
              ['Panjang fokus ($f$)', 'Kanta Cembung (penumpu)', 'Kanta Cekung (pencapah)'],
              ['Jarak objek ($u$)', 'Objek Nyata (sentiasa $+$ dalam silibus KSSM)', 'Objek Maya'],
              ['Jarak imej ($v$)', 'Imej Nyata (sebelah bertentangan kanta, boleh terpapar di skrin)', 'Imej Maya (sebelah sama dengan objek, tidak dapat terpapar di skrin)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Kanta Nipis & Kuasa Kanta',
            latex: '\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}, \\qquad P = \\frac{1}{f\\text{ (dalam meter)}}',
            symbols: [
              { symbol: 'f', meaning: 'Panjang fokus ($+$ cembung, $-$ cekung)', unit: '$\\text{cm}$ atau $\\text{m}$' },
              { symbol: 'u, v', meaning: 'Jarak objek & jarak imej (mesti sama unit dengan $f$)', unit: '$\\text{cm}$ atau $\\text{m}$' },
              { symbol: 'P', meaning: 'Kuasa kanta (jika diminta)', unit: '$\\text{D}$ (diopter $= \\text{m}^{-1}$)' },
            ],
            appliesWhen: 'Kanta nipis; pastikan tanda $+$ dan $-$ dimasukkan mengikut jenis kanta dan jenis imej.',
            failsWhen: 'Terlupa membalikkan jawapan akhir! Ramai pelajar mengira $\\frac{1}{v} = 0.05$ lalu menulis $v = 0.05\\text{ cm}$, sedangkan $v = \\frac{1}{0.05} = 20\\text{ cm}$!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 6.3',
            title: 'Hubungan Antara Jarak Objek ($u$) dengan Jarak Imej ($v$) bagi Kanta Cembung',
            aim: 'Mengkaji hubungan antara $u$ dengan $v$ dan menentukan panjang fokus $f$ kanta cembung.',
            inference: 'Jarak imej nyata bergantung pada jarak objek dari kanta.',
            hypothesis: 'Semakin bertambah jarak objek $u$, semakin berkurang jarak imej $v$ (atau $\\frac{1}{v}$ berkadar linear dengan $\\frac{1}{u}$).',
            variables: {
              manipulated: 'Jarak objek, $u$',
              responding: 'Jarak imej tajam di atas skrin putih, $v$',
              fixed: 'Panjang fokus kanta cembung, $f$',
            },
            setupLogic: 'Letakkan objek berwayar silang di hadapan kotak sinar pada jarak $u = 15, 20, 25, 30, 35\\text{ cm}$ ($u > f$). Gerakkan skrin putih sehingga imej paling tajam terbentuk dan ukur $v$.',
            expectedResult: 'Graf $\\frac{1}{v}$ melawan $\\frac{1}{u}$ ialah garis lurus cerun negatif $-1$; $f = \\frac{1}{\\text{pintasan-}y}$.',
            conclusion: 'Hubungan $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ disahkan.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Imej Melalui Kanta Cekung (Awas Tanda Negatif!)',
          problem: 'Satu objek diletakkan $30\\text{ cm}$ di hadapan sebuat kanta cekung yang panjang fokusnya $15\\text{ cm}$. Cari jarak imej $v$ dan ciri imejnya.',
          given: ['Kanta CEKUNG $\\implies f = -15\\text{ cm}$!', '$u = +30\\text{ cm}$'],
          formulaLatex: '\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}',
          formulaWhy: 'Gantikan tanda negatif bagi kanta cekung ke dalam $f$.',
          substituteLatex: '\\frac{1}{-15} = \\frac{1}{30} + \\frac{1}{v} \\implies \\frac{1}{v} = -\\frac{1}{15} - \\frac{1}{30} = -\\frac{3}{30} = -\\frac{1}{10}',
          answer: '$v = -10.0\\text{ cm}$ (tanda $-$ bermakna imej MAYA, tegak, dan berada $10.0\\text{ cm}$ di sebelah sama dengan objek)',
          trapAlert: 'Jika anda meletakkan $f = +15\\text{ cm}$ untuk kanta cekung, jawapan anda akan bertukar menjadi imej nyata $+30\\text{ cm}$ — salah sepenuhnya!',
        },
        {
          title: 'Contoh 2: Kanta Pembesar Cembung ($u < f$)',
          problem: 'Sebuah kanta cembung dengan $f = 20\\text{ cm}$ diletakkan $12\\text{ cm}$ di hadapan setem kecil. Cari kedudukan imej dan pembesarannya.',
          given: ['Kanta cembung $\\implies f = +20\\text{ cm}$', '$u = +12\\text{ cm}$'],
          formulaLatex: '\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}',
          formulaWhy: 'Susun formula kanta nipis untuk mencari $v$.',
          substituteLatex: '\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{12} = \\frac{3 - 5}{60} = -\\frac{2}{60} = -\\frac{1}{30}',
          answer: '$v = -30.0\\text{ cm}$ (imej maya $30\\text{ cm}$ di hadapan kanta); $m = \\frac{30}{12} = 2.5$ kali',
          trapAlert: 'Apabila mengira pembesaran $m$, gunakan magnitud jarak ($m = |v|/u = 2.5$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan peraturan tanda bagi panjang fokus $f$ untuk kanta cembung vs kanta cekung.', answer: '$+f$ untuk kanta cembung; $-f$ untuk kanta cekung.' },
          { question: 'Apakah maksud nilai jarak imej $v = -24\\text{ cm}$?', answer: 'Imej ialah imej maya yang terbentuk $24\\text{ cm}$ dari kanta pada sisi yang sama dengan objek.' },
          { question: 'Apakah kecerunan graf $\\frac{1}{v}$ melawan $\\frac{1}{u}$ bagi Eksperimen 6.3?', answer: '$-1$.' },
        ],
        fadedProblem: {
          prompt: 'Sebiji mentol kecil diletakkan $30\\text{ cm}$ di hadapan kanta cembung berpanjang fokus $10\\text{ cm}$. Hitung jarak imej $v$ dan pembesaran $m$.',
          step1GivenAndFormula: 'Diberi: $f = +10\\text{ cm}$, $u = +30\\text{ cm}$. Rumus: $\\frac{1}{10} = \\frac{1}{30} + \\frac{1}{v}$.',
          studentTask: 'Kira $v$ (jangan lupa salingan!) dan $m = \\frac{v}{u}$.',
          answerSteps: 'Langkah 3: $\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30} = \\frac{1}{15}$ → Langkah 4: $v = +15\\text{ cm}$ (nyata); $m = \\frac{15}{30} = 0.5$.',
        },
        transferQuestion: {
          question: 'Seorang murid menguji dua kanta ($f_A = 10\\text{ cm}$, $f_B = 20\\text{ cm}$) dengan meletakkan objek jauh di infiniti ($u = \\infty$). Terangkan mengapa jarak skrin ke kanta terus memberikan nilai $f$.',
          answer: 'Apabila $u = \\infty$, $\\frac{1}{u} = 0$, maka $\\frac{1}{f} = 0 + \\frac{1}{v} \\implies v = f$. Sinar selari dari objek jauh menumpu tepat di satah fokus.',
        },
      },
    },
    {
      id: '6.5',
      chapterId: 'bab-6',
      code: '6.5',
      title: 'Peralatan Optik',
      pageRef: 'm.s. 263–269',
      part1Anchor: {
        phenomenon:
          'Satu kanta hanya mampu membesarkan imej sehingga had tertentu sebelum mengalami herotan; menggabungkan DUA kanta cembung ($f_o$ dan $f_m$) membuka dunia mikroskopik sel dan galaksi jauh melalui teleskop.',
        chapterConnection:
          'Mengaplikasikan 6.3 & 6.4 untuk mereka bentuk mikroskop majmuk, teleskop astronomi pada pelarasan normal, serta memahami had kanta kamera telefon pintar.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pelarasan Normal Teleskop Astronomi',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Pada pelarasan normal teleskop astronomi, jarak antara kanta objek dengan kanta mata ialah ' },
            { text: '$L = f_o + f_m$', keyword: true },
            { text: ' dan ' },
            { text: 'imej akhir terbentuk di infiniti', keyword: true },
            { text: ' supaya mata dapat melihat dalam keadaan paling selesa.' },
          ],
          equationLatex: 'L = f_o + f_m, \\qquad M = \\frac{f_o}{f_m}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Laluan Imej 2 Peringkat dalam Mikroskop Majmuk vs Teleskop Astronomi',
            cause: 'Dua kanta cembung disusun sepaksi: Kanta Objek ($f_o$) dan Kanta Mata ($f_m$).',
            mechanism: 'Mikroskop: $f_o < f_m$; objek diletakkan di antara $f_o$ dengan $2f_o$ supaya imej pertama ($I_1$) nyata, songsang, diperbesar jatuh DI DALAM $f_m$; kanta mata bertindak sebagai kanta pembesar. Teleskop: $f_o > f_m$; objek di infiniti membentuk $I_1$ tepat di $F_o$ dan $F_m$ yang bertindih ($L = f_o + f_m$).',
            effect: 'Kedua-duanya menghasilkan imej akhir yang MAYA, SONGSANG, dan DIPERBESAR.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Mikroskop Majmuk vs Teleskop Astronomi',
            headers: ['Ciri Reka Bentuk', 'Mikroskop Majmuk', 'Teleskop Astronomi (Pelarasan Normal)'],
            rows: [
              ['Perbandingan panjang fokus', '$f_o < f_m$ (kedua-duanya pendek)', '$f_o > f_m$ ($f_o$ panjang, $f_m$ pendek)'],
              ['Jarak antara dua kanta ($L$)', '$L > f_o + f_m$', '$L = f_o + f_m$'],
              ['Kedudukan objek asal', 'Antara $f_o$ dengan $2f_o$', 'Di infiniti ($\\infty$)'],
              ['Ciri imej pertama ($I_1$)', 'Nyata, songsang, diperbesar (antara $O_m$ dan $F_m$)', 'Nyata, songsang, diperkecil (tepat pada $F_o$ & $F_m$)'],
              ['Ciri imej akhir ($I_2$)', 'Maya, songsang, diperbesar (pada jarak penglihatan jelas $25\\text{ cm}$)', 'Maya, songsang, diperbesar (di infiniti)'],
              ['Rumus pembesaran', '$M = m_o \\times m_m$', '$M = \\frac{f_o}{f_m}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembesaran & Panjang Tiub Teleskop (Pelarasan Normal)',
            latex: 'M = \\frac{f_o}{f_m}, \\qquad L = f_o + f_m',
            symbols: [
              { symbol: 'f_o', meaning: 'Panjang fokus kanta objek (lebih besar bagi teleskop)', unit: '$\\text{cm}$' },
              { symbol: 'f_m', meaning: 'Panjang fokus kanta mata (lebih kecil bagi teleskop)', unit: '$\\text{cm}$' },
              { symbol: 'M', meaning: 'Pembesaran teleskop pada pelarasan normal', unit: 'tiada unit' },
            ],
            appliesWhen: 'Teleskop astronomi melihat bintang/objek sangat jauh.',
            failsWhen: 'Menukar terbalik $f_o < f_m$ untuk teleskop ($M$ jadi $< 1$, mengecilkan imej!) atau lupa menambah jarak lebih daripada $f_o + f_m$ untuk mikroskop.',
          },
        ],
        diagrams: [
          {
            kind: 'optical-instruments',
            title: 'Rajah Sinar Mikroskop Majmuk vs Teleskop Astronomi (Pelarasan Normal)',
            whatItShows: 'Kedudukan bertindih $F_o$ dan $F_m$ dalam teleskop ($L = f_o + f_m$) berbanding jarak berasingan dalam mikroskop ($L > f_o + f_m$).',
            axisOrRule: 'Ingat: **M**ikroskop $\\to$ **M**ata lebih besar ($f_m > f_o$); **T**eleskop $\\to$ **O**bjek jauh lebih besar ($f_o > f_m$).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Mereka Bentuk Teleskop Astronomi daripada Dua Kanta',
          problem: 'Seorang pelajar mempunyai dua kanta cembung berpanjang fokus $5\\text{ cm}$ dan $60\\text{ cm}$ untuk membina teleskop astronomi pada pelarasan normal. Nyatakan pilihan kanta objek, kanta mata, panjang tiub $L$, dan pembesarannya.',
          given: ['Dua kanta: $5\\text{ cm}$ dan $60\\text{ cm}$', 'Syarat teleskop: $f_o > f_m$'],
          formulaLatex: 'L = f_o + f_m, \\qquad M = \\frac{f_o}{f_m}',
          formulaWhy: 'Pembesaran maksimum memerlukan $f_o$ terbesar dan $f_m$ terkecil.',
          substituteLatex: 'L = 60 + 5 = 65\\text{ cm}; \\quad M = \\frac{60}{5}',
          answer: 'Kanta objek $f_o = 60\\text{ cm}$, kanta mata $f_m = 5\\text{ cm}$; Jarak kanta $L = 65\\text{ cm}$; Pembesaran $M = 12$ kali',
          trapAlert: 'Jika pelajar tersilap guna $5\\text{ cm}$ sebagai kanta objek, pembesaran menjadi $1/12$ (mengecil)!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Kanta dalam Kamera Telefon Pintar, CCTV & Teleskop (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Kanta objek teleskop berdiameter besar & $f_o$ panjang', scientificReason: 'Diameter besar mengumpul lebih banyak cahaya supaya imej bintang malap menjadi cerah dan tajam; $f_o$ panjang memaksimumkan pembesaran $M = f_o/f_m$.' },
          { designChoice: 'Kamera telefon pintar & CCTV menggunakan kanta nipis dengan $f$ sangat pendek ($\\approx 4\\text{ mm}$)', scientificReason: 'Supaya imej nyata objek jauh ($v \\approx f$) muat terbentuk di atas penderia dalam ketebalan badan telefon pintar yang nipis (ketebalan minimum $\\ge f$).' },
          { designChoice: 'Menggabungkan kanta bersaiz kecil dengan aperture beresolusi tinggi dalam CCTV', scientificReason: 'Memberikan medan penglihatan luas untuk memantau ruang besar tanpa mengambil ruang fizikal besar.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan ciri-ciri imej akhir yang terbentuk dalam mikroskop majmuk.', answer: 'Maya, songsang, dan diperbesar.' },
          { question: 'Bagi teleskop astronomi pada pelarasan normal, di manakah imej akhir terbentuk?', answer: 'Di infiniti.' },
          { question: 'Antara dua kanta cembung $f = 4\\text{ cm}$ dengan $f = 10\\text{ cm}$, yang manakah patut dipilih sebagai kanta objek untuk membina mikroskop majmuk?', answer: '$f_o = 4\\text{ cm}$ (kerana mikroskop memerlukan $f_o < f_m$).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah teleskop astronomi mempunyai pembesaran $15$ kali pada pelarasan normal dan kanta matanya mempunyai panjang fokus $4.0\\text{ cm}$. Hitung jarak antara kedua-dua kanta.',
          step1GivenAndFormula: 'Diberi: $M = 15$, $f_m = 4.0\\text{ cm}$. Rumus: $M = \\frac{f_o}{f_m}$ dan $L = f_o + f_m$.',
          studentTask: 'Cari $f_o$ dahulu, kemudian hitung $L$.',
          answerSteps: 'Langkah 3: $15 = \\frac{f_o}{4.0} \\implies f_o = 60.0\\text{ cm}$; $L = 60.0 + 4.0$ → Langkah 4: $L = 64.0\\text{ cm}$.',
        },
        transferQuestion: {
          question: 'Mengapakah sebuah telefon pintar berketebalan $7\\text{ mm}$ tidak boleh menggunakan kanta kamera tunggal berpanjang fokus $15\\text{ mm}$ tanpa membonggol keluar?',
          answer: 'Untuk memfokuskan objek jauh ($u \\gg f$), penderia kamera mesti berada pada jarak sekurang-kurangnya sama dengan panjang fokus ($v \\ge f = 15\\text{ mm}$), yang melebihi ketebalan $7\\text{ mm}$ badan telefon.',
        },
      },
    },
    {
      id: '6.6',
      chapterId: 'bab-6',
      code: '6.6',
      title: 'Pembentukan Imej oleh Cermin Sfera',
      pageRef: 'm.s. 270–277',
      part1Anchor: {
        phenomenon:
          'Cermin doktor gigi membesarkan imej gigi secara tegak, manakala cermin selekoh jalan raya mengecilkan kereta tetapi mendedahkan selekoh penuh — memantul cahaya pada permukaan melengkung memberi kawalan medan penglihatan dan saiz imej.',
        chapterConnection:
          'Menutup Bab 6 dengan hukum pantulan pada cermin cekung dan cembung ($r = 2f$) serta aplikasi keselamatan jalan raya dan lampu kereta.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pusat Kelengkungan ($C$) dan Panjang Fokus ($f$) Cermin Sfera',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pusat kelengkungan ($C$) ialah pusat sfera bagi permukaan cermin sfera tersebut. Jarak antara kutub cermin ($P$) dengan titik fokus ($F$) ialah panjang fokus ($f$), dengan hubungan ' },
            { text: '$r = 2f$', keyword: true },
            { text: ' (di mana $r$ ialah jejari kelengkungan).' },
          ],
          equationLatex: 'r = 2f \\implies f = \\frac{r}{2}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Perbezaan Fungsi Cermin Cekung (Penumpu Cahaya) vs Cermin Cembung (Pencapah)',
            cause: 'Cermin cekung melengkung ke dalam (memantul sinar selari menumpu pada $F$); cermin cembung melengkung ke luar (mencapah sinar seolah-olah dari $F$ maya di belakang cermin).',
            mechanism: 'Pencapahan sinar cermin cembung menangkap sinar dari sudut sangat lebar dan menukarkannya kepada satu imej kecil tegak di belakang cermin.',
            effect: 'Cermin cembung memberikan MEDAN PENGLIHATAN PALING LUAS berbanding cermin satah dan cermin cekung.',
          },
        ],
        tables: [
          {
            title: 'Jadual 6.16 & 6.17: Ciri Imej Cermin Cekung & Cermin Cembung',
            headers: ['Jenis Cermin & Kedudukan Objek ($u$)', 'Ciri Imej', 'Aplikasi Utama'],
            rows: [
              ['Cermin Cekung: $u = \\infty$', 'Nyata, songsang, sangat kecil (pada $F$)', 'Cermin penerima tenaga suria / teleskop pantulan'],
              ['Cermin Cekung: $u > 2f$ ($u > r$)', 'Nyata, songsang, diperkecil (antara $F$ & $C$)', '—'],
              ['Cermin Cekung: $u = 2f$ ($u = r$)', 'Nyata, songsang, sama saiz (pada $C$)', '—'],
              ['Cermin Cekung: $f < u < 2f$', 'Nyata, songsang, diperbesar (lebih jauh drpd $C$)', '—'],
              ['Cermin Cekung: $u = f$', 'Imej di infiniti (sinar pantulan selari)', 'Pemantul lampu depan kereta / lampu suluh (mentol di $F$)'],
              ['Cermin Cekung: $u < f$', 'Maya, tegak, diperbesar (di belakang cermin)', 'Cermin solek, cermin bercukur, cermin pergigian'],
              ['Cermin Cembung: Sebarang jarak $u$', 'SENTIASA Maya, tegak, diperkecil (antara $P$ & $F$)', 'Cermin selekoh jalan, cermin keselamatan kedai, cermin pandang sisi/belakang'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tiga Sinar Utama Cermin Sfera (Pilih 2 Sahaja untuk Lukisan)',
            latex: 'f = \\frac{r}{2}',
            symbols: [
              { symbol: 'Sinar 1', meaning: 'Selari paksi utama $\\to$ terpantul melalui $F$ (cekung) / mencapah dari $F$ (cembung)', unit: '—' },
              { symbol: 'Sinar 2', meaning: 'Melalui $F$ $\\to$ terpantul selari paksi utama', unit: '—' },
              { symbol: 'Sinar 3', meaning: 'Melalui pusat kelengkungan $C$ $\\to$ terpantul balik mengikut lintasan sama ($i = 0^\\circ$)', unit: '—' },
            ],
            appliesWhen: 'Melukis rajah sinar cermin cekung atau cembung.',
            failsWhen: 'Membiarkan sinar menembusi cermin seperti kanta! Cermin MEMANTUL cahaya balik ke sisi hadapan; hanya unjuran maya garis putus-putus berada di belakang cermin.',
          },
        ],
        diagrams: [
          {
            kind: 'spherical-mirrors',
            title: 'Rajah Sinar Cermin Cekung ($u < f$) vs Cermin Cembung (Medan Penglihatan Luas)',
            whatItShows: 'Kiri: Cermin cekung dengan objek $u < f$ menghasilkan imej maya tegak diperbesar. Kanan: Cermin cembung menghasilkan imej maya tegak diperkecil dengan medan penglihatan terluas.',
            axisOrRule: 'Cermin cekung berpadanan ciri imejnya dengan kanta cembung; Cermin cembung berpadanan dengan kanta cekung!',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh Konseptual: Kedudukan Mentol dalam Pemantul Lampu Kereta',
          problem: 'Sebuah pemantul lampu hadapan kereta berbentuk cekung/parabola mempunyai jejari kelengkungan $12.0\\text{ cm}$. Di manakah mentol lampu mesti diletakkan supaya alur cahaya yang dipantulkan bergerak jauh ke hadapan tanpa mencapah?',
          given: ['$r = 12.0\\text{ cm}$'],
          formulaLatex: 'f = \\frac{r}{2}',
          formulaWhy: 'Meletakkan sumber cahaya di titik fokus $F$ memantulkan semua sinar menjadi alur selari.',
          substituteLatex: 'f = \\frac{12.0}{2}',
          answer: 'Mentol mesti diletakkan tepat pada titik fokus $f = 6.0\\text{ cm}$ di hadapan kutub pemantul.',
          trapAlert: 'Menggunakan pemantul parabola (bukan sfera bulat sepenuhnya) mengelakkan aberasi sfera supaya alur cahaya kekal selari lebih tajam!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Cermin Sfera Mengikut Fungsi (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Cermin cembung dipasang di selekoh tajam jalan raya dan sudut kedai serbaneka', scientificReason: 'Menghasilkan imej yang tegak, diperkecil, dan memberikan medan penglihatan yang sangat luas untuk melihat kenderaan/pelanggan dari sudut tersembunyi.' },
          { designChoice: 'Cermin cekung digunakan oleh doktor gigi dan sebagai cermin solek', scientificReason: 'Apabila objek berada dekat ($u < f$), ia menghasilkan imej yang maya, tegak, dan diperbesar untuk melihat butiran halus.' },
          { designChoice: 'Pemantul parabola cekung dengan mentol di titik fokus $F$ untuk lampu kereta', scientificReason: 'Sinar cahaya dari $F$ dipantulkan selari dengan paksi utama untuk membentuk alur cahaya terang yang memancar jauh ke hadapan.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan hubungan antara jejari kelengkungan $r$ dengan panjang fokus $f$ cermin sfera.', answer: '$r = 2f$ (atau $f = r/2$).' },
          { question: 'Susunkan tiga jenis cermin mengikut lebar medan penglihatan daripada paling sempit ke paling luas.', answer: 'Cermin cekung < Cermin satah < Cermin cembung.' },
          { question: 'Apakah tiga ciri imej yang sentiasa dihasilkan oleh cermin cembung?', answer: 'Maya, tegak, dan diperkecil.' },
        ],
        fadedProblem: {
          prompt: 'Seorang doktor gigi memegang cermin cekung berpanjang fokus $4.0\\text{ cm}$ pada jarak $2.5\\text{ cm}$ dari gigi pesakit. Berapakah jejari kelengkungan cermin itu dan nyatakan tiga ciri imej gigi yang dilihat.',
          step1GivenAndFormula: 'Diberi: $f = 4.0\\text{ cm}$, $u = 2.5\\text{ cm}$ ($u < f$). Rumus: $r = 2f$.',
          studentTask: 'Kira $r$ dan senaraikan ciri imej gigi.',
          answerSteps: 'Langkah 3 & 4: $r = 2(4.0) = 8.0\\text{ cm}$. Kerana $u < f$, ciri imej ialah maya, tegak, dan diperbesar.',
        },
        transferQuestion: {
          question: 'Mengapakah cermin pandang sisi kereta sering tertera amaran "Objek di dalam cermin kelihatan lebih jauh daripada jarak sebenar"?',
          answer: 'Cermin cembung menghasilkan imej yang diperkecil. Otak manusia mentafsirkan saiz imej yang kecil seolah-olah objek tersebut berada lebih jauh daripada kedudukan sebenar.',
        },
      },
    },
  ],
};
