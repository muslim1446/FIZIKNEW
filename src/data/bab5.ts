import type { ChapterContent } from '../types/textbook';

export const bab5: ChapterContent = {
  id: 'bab-5',
  formLevel: 4,
  number: 5,
  title: 'Gelombang',
  pageRange: 'm.s. 170–229',
  overview:
    'Dari riak air hingga spektrum elektromagnet 5G: memahami ciri asas gelombang, pelembapan & resonans, serta empat fenomena gelombang utama (pantulan, pembiasan, pembelauan, interferens).',
  subtopics: [
    {
      id: '5.1',
      chapterId: 'bab-5',
      code: '5.1',
      title: 'Asas Gelombang',
      pageRef: 'm.s. 172–183',
      part1Anchor: {
        phenomenon:
          'Gelombang bunyi, ombak laut, dan cahaya memindahkan tenaga dari satu tempat ke tempat lain tanpa mengangkut jirim secara kekal — gabus di atas air hanya terumbang-ambing naik dan turun di tempatnya.',
        chapterConnection:
          'Menetapkan takrif amplitud, tempoh, frekuensi, dan panjang gelombang ($v = f\\lambda$) serta membezakan graf sesaran-masa dengan graf sesaran-jarak.',
      },
      part2SacredDefinitions: [
        {
          title: 'Gelombang Melintang vs Gelombang Membujur',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Gelombang melintang ialah gelombang yang zarah-zarah mediumnya ' },
            { text: 'bergetar pada arah yang berserenjang', keyword: true },
            { text: ' dengan arah perambatan gelombang. Gelombang membujur ialah gelombang yang zarah-zarah mediumnya ' },
            { text: 'bergetar pada arah yang selari', keyword: true },
            { text: ' dengan arah perambatan gelombang.' },
          ],
        },
        {
          title: 'Amplitud ($A$), Tempoh ($T$), Frekuensi ($f$), Panjang Gelombang ($\\lambda$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Amplitud ialah ' },
            { text: 'sesaran maksimum suatu zarah dari kedudukan keseimbangan', keyword: true },
            { text: '. Tempoh ialah ' },
            { text: 'masa yang diambil untuk melengkapkan satu ayunan', keyword: true },
            { text: '. Frekuensi ialah ' },
            { text: 'bilangan ayunan lengkap dalam satu saat', keyword: true },
            { text: '. Panjang gelombang ialah ' },
            { text: 'jarak antara dua titik sefasa yang berturutan', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'f = \\frac{1}{T}, \\qquad v = f\\lambda',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Graf Sesaran-Masa dan Graf Sesaran-Jarak Nampak Serupa Tetapi Berbeza Makna',
            cause: 'Kedua-dua graf berbentuk gelombang sinus, tetapi paksi mengufuknya berbeza.',
            mechanism: 'Graf sesaran-masa ($y$-$t$) menjejak satu zarah mengikut masa (jarak antara 2 puncak = Tempoh $T$); graf sesaran-jarak ($y$-$x$) ialah gambar foto sekelip mata banyak zarah (jarak antara 2 puncak = Panjang gelombang $\\lambda$).',
            effect: 'Membaca kedua-dua graf memberikan $T$ ($\\implies f = 1/T$) dan $\\lambda$ untuk mengira laju gelombang $v = f\\lambda$.',
          },
        ],
        tables: [
          {
            title: 'Pengelasan Gelombang KSSM',
            headers: ['Pengelasan', 'Jenis', 'Ciri Utama & Contoh'],
            rows: [
              ['Berdasarkan Profil', 'Progresif vs Pegun', 'Progresif: profil merambat (air, bunyi); Pegun: profil tidak merambat (tali gitar bergetar)'],
              ['Berdasarkan Keperluan Medium', 'Mekanik vs Elektromagnet', 'Mekanik: perlu medium (bunyi, air, spring); EM: merambat melalui vakum (cahaya, radio, sinar-X)'],
              ['Berdasarkan Arah Getaran', 'Melintang vs Membujur', 'Melintang: berserenjang (air, cahaya, tali); Membujur: selari dengan mampatan & regangan (bunyi, spring slinki ke depan-belakang)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Laju Gelombang',
            latex: 'v = f\\lambda = \\frac{\\lambda}{T}',
            symbols: [
              { symbol: 'v', meaning: 'Laju perambatan gelombang', unit: '$\\text{m s}^{-1}$' },
              { symbol: 'f', meaning: 'Frekuensi (ditentukan oleh SUMBER getaran sahaja)', unit: '$\\text{Hz}$ ($\\text{s}^{-1}$)' },
              { symbol: '\\lambda', meaning: 'Panjang gelombang (jarak puncak ke puncak / mampatan ke mampatan)', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Semua jenis gelombang (air, bunyi, tali, elektromagnet).',
            failsWhen: 'Terlupa menukar panjang gelombang dari $\\text{cm}$ ke $\\text{m}$ atau masa dari $\\text{ms}$ ke $\\text{s}$ sebelum mengira $v$ dalam $\\text{m s}^{-1}$.',
          },
        ],
        diagrams: [
          {
            kind: 'wave-profiles',
            title: 'Graf Sesaran-Masa ($y$-$t$) vs Sesaran-Jarak ($y$-$x$) & Tangki Riak',
            whatItShows: 'Amplitud $A$ diukur dari garis keseimbangan ke puncak (bukan puncak ke lembangan!); jarak antara puncak pada $y$-$t$ ialah $T$ manakala pada $y$-$x$ ialah $\\lambda$.',
            axisOrRule: 'Dalam tangki riak, cahaya menumpu pada puncak gelombang (membentuk jalur cerah) dan mencapah pada lembangan (membentuk jalur gelap).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Mengira Laju Gelombang daripada Graf $y$-$t$ dan $y$-$x$',
          problem: 'Sebuah penggetar menghasilkan gelombang dengan tempoh $T = 0.04\\text{ s}$ dan jarak antara 4 puncak berturutan pada suatu ketika ialah $18\\text{ cm}$. Hitung frekuensi dan laju gelombang.',
          given: ['$T = 0.04\\text{ s}$', '4 puncak berturutan mengandungi $(4 - 1) = 3$ panjang gelombang!', '$3\\lambda = 18\\text{ cm} \\implies \\lambda = 6.0\\text{ cm} = 0.060\\text{ m}$'],
          formulaLatex: 'f = \\frac{1}{T}, \\qquad v = f\\lambda',
          formulaWhy: 'Frekuensi diperoleh daripada tempoh $T$, kemudian digabungkan dengan $\\lambda$ dalam meter.',
          substituteLatex: 'f = \\frac{1}{0.04} = 25\\text{ Hz}; \\quad v = (25)(0.060)',
          answer: '$f = 25\\text{ Hz}$; $v = 1.5\\text{ m s}^{-1}$',
          trapAlert: '4 puncak berturutan ialah $3\\lambda$, BUKAN $4\\lambda$! Sentiasa kira bilangan selang antara puncak.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Adakah gabus di permukaan air bergerak jauh mengikut arah ombak? Mengapa?', answer: 'Tidak; gabus hanya bergetar naik dan turun di kedudukannya kerana gelombang memindahkan tenaga, bukan jirim.' },
          { question: 'Nyatakan contoh gelombang membujur.', answer: 'Gelombang bunyi dan getaran spring slinki yang ditolak ke depan dan ke belakang.' },
          { question: 'Apakah yang diwakili oleh jarak antara puncak ke puncak pada graf sesaran-masa?', answer: 'Tempoh ($T$), bukan panjang gelombang.' },
        ],
        fadedProblem: {
          prompt: 'Satu gelombang bunyi berfrekuensi $680\\text{ Hz}$ merambat di udara pada kelajuan $340\\text{ m s}^{-1}$. Hitung panjang gelombangnya.',
          step1GivenAndFormula: 'Diberi: $f = 680\\text{ Hz}$, $v = 340\\text{ m s}^{-1}$. Rumus: $v = f\\lambda \\implies \\lambda = \\frac{v}{f}$.',
          studentTask: 'Kira nilai $\\lambda$ dalam meter.',
          answerSteps: 'Langkah 3: $\\lambda = \\frac{340}{680}$ → Langkah 4: $\\lambda = 0.50\\text{ m}$.',
        },
        transferQuestion: {
          question: 'Apakah yang akan dilihat di skrin putih di bawah tangki riak bagi bahagian puncak dan bahagian lembangan gelombang air? Jelaskan.',
          answer: 'Puncak bertindak sebagai kanta penumpu menumpukan cahaya menjadi jalur cerah; lembangan bertindak sebagai kanta pencapah menghasilkan jalur gelap.',
        },
      },
    },
    {
      id: '5.2',
      chapterId: 'bab-5',
      code: '5.2',
      title: 'Pelembapan dan Resonans',
      pageRef: 'm.s. 184–187',
      part1Anchor: {
        phenomenon:
          'Buaian berhenti berayun apabila dibiarkan (pelembapan), tetapi apabila ditolak mengikut irama tepat, hayunannya melambung tinggi — malah angin berirama pernah meruntuhkan Jambatan Tacoma Narrows akibat resonans.',
        chapterConnection:
          'Menerangkan kehilangan tenaga sistem berayun ($A\\downarrow, f\\text{ tetap}$) dan bagaimana pemadanan frekuensi memaksimumkan pemindahan tenaga.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pelembapan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pelembapan ialah ' },
            { text: 'pengurangan amplitud suatu sistem ayunan', keyword: true },
            { text: ' akibat ' },
            { text: 'kehilangan tenaga', keyword: true },
            { text: ' secara berterusan (frekuensi kekal malar).' },
          ],
        },
        {
          title: 'Resonans',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Resonans berlaku apabila suatu sistem ayunan dikenakan ' },
            { text: 'daya luar yang berfrekuensi sama dengan frekuensi asli', keyword: true },
            { text: ' sistem tersebut, menyebabkan sistem berayun dengan ' },
            { text: 'amplitud maksimum', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Bandul X dan Bandul C (Bandul Barton) Berayun Paling Kuat Bersama',
            cause: 'Bandul pemacu $X$ mempunyai panjang yang sama tepat dengan bandul $C$ dalam susunan Bandul Barton.',
            mechanism: 'Oleh kerana panjang sama ($T = 2\\pi\\sqrt{l/g}$), frekuensi asli $C$ sama tepat dengan frekuensi ayunan paksa daripada $X$; pemindahan tenaga maksimum berlaku kepada $C$.',
            effect: 'Bandul $C$ mengalami resonans dan berayun dengan amplitud maksimum berbanding bandul lain yang berbeza panjang.',
          },
        ],
        tables: [
          {
            title: 'Pelembapan Luaran vs Pelembapan Dalaman',
            headers: ['Jenis Pelembapan', 'Punca Kehilangan Tenaga', 'Apa yang Kekal vs Berubah'],
            rows: [
              ['Pelembapan luaran', 'Sistem kehilangan tenaga untuk mengatasi daya geseran atau rintangan udara', 'Amplitud ($A$) berkurang; Frekuensi ($f$) dan Tempoh ($T$) kekal malar'],
              ['Pelembapan dalaman', 'Sistem kehilangan tenaga disebabkan regangan dan mampatan zarah-zarah di dalam sistem itu sendiri', 'Tenaga mekanikal bertukar kepada haba; sistem berhenti jika tiada daya luar'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Resonans',
            latex: 'f_{\\text{daya luar}} = f_{\\text{asli}} \\implies A = A_{\\text{maksimum}}',
            symbols: [
              { symbol: 'f_{\\text{asli}}', meaning: 'Frekuensi sistem bergetar secara bebas tanpa daya luar (bagi bandul bergantung pada panjang $l$ sahaja)', unit: '$\\text{Hz}$' },
            ],
            appliesWhen: 'Ayunan paksa dengan pemindahan tenaga maksimum (Kit Tala Bunyi, Bandul Barton, penalaan litar radio).',
            failsWhen: 'Menjangkakan tempoh $T$ membesar apabila amplitud ayunan susut akibat pelembapan — tidak, $f$ dan $T$ kekal tetap!',
          },
        ],
        diagrams: [
          {
            kind: 'damping-resonance',
            title: 'Graf Pelembapan ($A$-$t$) & Lengkung Resonans ($A$-$f$)',
            whatItShows: 'Kiri: Amplitud menyusut secara eksponen mengikut masa manakala tempoh $T$ (lebar puncak ke puncak) kekal sama. Kanan: Puncak tajam amplitud maksimum berlaku tepat pada $f = f_{\\text{asli}}$.',
            axisOrRule: 'Pelembapan mengubah amplitud, TIDAK mengubah tempoh/frekuensi sistem.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh Konseptual: Kit Tala Bunyi Berfrekuensi Sama ($256\\text{ Hz}$)',
          problem: 'Dua tala bunyi $P$ ($256\\text{ Hz}$) dan $Q$ ($256\\text{ Hz}$) diletakkan berdekatan. Apabila $P$ diketuk dan kemudian dihentikan dengan jari, $Q$ didengari masih berbunyi. Terangkan.',
          given: ['Frekuensi asli $P$ = Frekuensi asli $Q = 256\\text{ Hz}$'],
          formulaLatex: 'f_{\\text{gelombang dari } P} = f_{\\text{asli } Q}',
          formulaWhy: 'Gelombang bunyi daripada $P$ mengenakan daya ayunan paksa berfrekuensi $256\\text{ Hz}$ ke atas $Q$.',
          substituteLatex: 'f_{\\text{luar}} = 256\\text{ Hz} = f_{\\text{asli } Q}',
          answer: 'Tala bunyi $Q$ mengalami resonans dan bergetar dengan amplitud maksimum lalu menghasilkan bunyi yang jelas.',
          trapAlert: 'Dalam soalan struktur SPM, WAJIB sebut kedua-dua frasa: "frekuensi sama dengan frekuensi asli" DAN "berayun dengan amplitud maksimum".',
        },
      ],
      part5DecisionTable: {
        title: 'Mengurus Resonans & Pelembapan dalam Struktur Kejuruteraan (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Memasang peredam (damper) pada Jambatan Millenium London / struktur jambatan', scientificReason: 'Menyerap tenaga getaran (menambah pelembapan) supaya amplitud ayunan akibat langkah kaki/angin tidak memuncak ke tahap berbahaya.' },
          { designChoice: 'Mengubah jarak tali bandul dalam Bandul Barton supaya sama panjang dengan pemacu', scientificReason: 'Memastikan frekuensi asli sama dengan frekuensi pemacu supaya berlaku resonans dan amplitud maksimum.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Semasa pelembapan berlaku pada satu bandul, apakah yang berlaku kepada (a) amplitud, (b) frekuensi?', answer: '(a) Amplitud berkurang secara beransur-ansur; (b) Frekuensi kekal malar.' },
          { question: 'Apakah syarat untuk resonans berlaku?', answer: 'Frekuensi daya luar yang dikenakan mestilah sama dengan frekuensi asli sistem itu.' },
          { question: 'Namakan satu contoh kemusnahan kejuruteraan akibat resonans.', answer: 'Runtuhnya Jambatan Tacoma Narrows akibat tiupan angin yang menyamai frekuensi asli jambatan.' },
        ],
        fadedProblem: {
          prompt: 'Empat bandul P ($20\\text{ cm}$), Q ($35\\text{ cm}$), R ($50\\text{ cm}$), dan S ($35\\text{ cm}$) digantung pada tali mendatar sama. Jika Q diayunkan, bandul manakah berayun paling kuat?',
          step1GivenAndFormula: 'Diberi: Panjang $Q = 35\\text{ cm}$, panjang $S = 35\\text{ cm}$. Syarat resonans: $f_{\\text{asli}}$ sama apabila panjang bandul sama.',
          studentTask: 'Nyatakan jawapan dan tulis penjelasan lengkap 2 ayat menggunakan kata kunci SPM.',
          answerSteps: 'Jawapan: Bandul S. Kerana panjang S sama dengan Q, maka frekuensi asli S sama dengan frekuensi ayunan Q; S mengalami resonans dan berayun dengan amplitud maksimum.',
        },
        transferQuestion: {
          question: 'Mengapakah kaca wain nipis boleh pecah apabila seorang penyanyi opera menyanyikan satu not tinggi tertentu secara berterusan?',
          answer: 'Frekuensi gelombang bunyi penyanyi menyamai frekuensi asli kaca wain, menyebabkan kaca mengalami resonans dan bergetar dengan amplitud yang sangat besar sehingga melebihi had kekuatannya dan pecah.',
        },
      },
    },
    {
      id: '5.3',
      chapterId: 'bab-5',
      code: '5.3',
      title: 'Pantulan Gelombang',
      pageRef: 'm.s. 188–193',
      part1Anchor: {
        phenomenon:
          'Gema suara di dewan kosong, imej sonar kapal selam di dasar laut, dan isyarat satelit yang dipusatkan oleh piring Astro semuanya bergantung pada gelombang yang memantul apabila menghentam penghalang.',
        chapterConnection:
          'Mempelajari bagaimana muka gelombang berubah arah mengikut Hukum Pantulan ($i = r$) tanpa mengubah laju, frekuensi, atau panjang gelombang.',
      },
      part2SacredDefinitions: [
        {
          title: 'Muka Gelombang',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Muka gelombang ialah garis yang menyambungkan semua titik yang ' },
            { text: 'bergetar pada fasa yang sama', keyword: true },
            { text: ' (dan sentiasa ' },
            { text: 'berserenjang dengan arah perambatan', keyword: true },
            { text: ' gelombang).' },
          ],
        },
        {
          title: 'Hukum Pantulan Gelombang',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Sudut tuju, $i$ adalah sama dengan sudut pantulan, $r$', keyword: true },
            { text: ' ($i = r$).' },
          ],
          equationLatex: 'i = r',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Laju, Frekuensi & Panjang Gelombang Kekal Sama Selepas Pantulan',
            cause: 'Gelombang memantul pada penghalang keras dan kekal merambat dalam medium yang sama (kedalaman air sama).',
            mechanism: 'Sumber getaran tidak berubah ($f$ tetap) dan sifat medium/kedalaman air tidak berubah ($v$ tetap), maka $\\lambda = v/f$ juga tetap.',
            effect: 'Hanya arah perambatan gelombang berubah; sedikit tenaga mungkin diserap penghalang menyebabkan amplitud sedikit berkurang.',
          },
        ],
        tables: [
          {
            title: 'Kesan Pantulan ke atas Kuantiti Gelombang',
            headers: ['Kuantiti', 'Perubahan Selepas Pantulan', 'Sebab'],
            rows: [
              ['Arah perambatan', 'Berubah ($i = r$)', 'Dihalakan semula oleh pemantul mengikut garis normal'],
              ['Frekuensi ($f$)', 'Tidak berubah', 'Bergantung pada sumber penggetar sahaja'],
              ['Laju ($v$)', 'Tidak berubah', 'Merambat dalam medium/kedalaman air yang sama'],
              ['Panjang gelombang ($\\lambda$)', 'Tidak berubah', 'Kerana $v$ dan $f$ kedua-duanya malar ($\\lambda = v/f$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pengiraan Gema / SONAR (Jarak Pergi-Balik)',
            latex: '2d = v \\times t \\implies d = \\frac{vt}{2}',
            symbols: [
              { symbol: 'd', meaning: 'Kedalaman laut / jarak sehala ke sasaran', unit: '$\\text{m}$' },
              { symbol: 'v', meaning: 'Laju bunyi / ultrasonik dalam air atau udara', unit: '$\\text{m s}^{-1}$' },
              { symbol: 't', meaning: 'Jumlah masa dari isyarat dipancar hingga gema dikesan', unit: '$\\text{s}$' },
            ],
            appliesWhen: 'Mengukur kedalaman laut (SONAR), mengesan kawanan ikan, atau kelawar mengesan mangsa.',
            failsWhen: 'Terlupa membahagi 2! Masa $t$ ialah masa pergi DAN balik ($2d$).',
          },
        ],
        diagrams: [
          {
            kind: 'wave-reflection',
            title: '4 Langkah Melukis Rajah Pantulan Muka Gelombang pada Tangki Riak',
            whatItShows: '(1) Lukis anak panah tuju berserenjang muka gelombang tuju; (2) Lukis garis normal pada pemantul; (3) Lukis sinar pantulan dengan $r = i$; (4) Lukis muka gelombang terpantul berserenjang sinar pantulan dengan jarak $\\lambda$ SAMA.',
            axisOrRule: 'Sudut tuju $i$ diukur antara sinar tuju dengan GARIS NORMAL (bukan dengan permukaan pemantul!).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Mengukur Kedalaman Laut dengan SONAR',
          problem: 'Sebuah kapal memancarkan gelombang ultrasonik ke dasar laut dan menerima gema selepas $0.80\\text{ s}$. Jika laju ultrasonik dalam air laut ialah $1500\\text{ m s}^{-1}$, hitung kedalaman laut.',
          given: ['$t = 0.80\\text{ s}$ (pergi + balik)', '$v = 1500\\text{ m s}^{-1}$'],
          formulaLatex: 'd = \\frac{vt}{2}',
          formulaWhy: 'Gelombang melalui jarak $2d$ (ke dasar dan memantul semula ke kapal) dalam masa $0.80\\text{ s}$.',
          substituteLatex: 'd = \\frac{1500 \\times 0.80}{2}',
          answer: '$d = 600\\text{ m}$',
          trapAlert: 'Sentiasa semak sama ada masa diberi ialah masa pergi-balik (bahagi 2) atau masa sehala!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Pantulan Gelombang (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Antena parabola melengkung dengan penerima diletakkan di titik fokus', scientificReason: 'Menumpukan gelombang mikro/radio selari yang dipantulkan oleh permukaan cekung ke satu titik fokus untuk isyarat kuat.' },
          { designChoice: 'Penggunaan gelombang ultrasonik berfrekuensi tinggi ($> 20\\text{ kHz}$) untuk SONAR & imbasan janin', scientificReason: 'Frekuensi tinggi memberikan panjang gelombang pendek supaya pantulan lebih tajam, tenaga dipancarkan dalam alur sempit dan tidak memudaratkan.' },
          { designChoice: 'Dinding dewan konsert dilapik panel lembut/kain berliang', scientificReason: 'Menyerap gelombang bunyi dan mengurangkan pantulan berganda (gema) supaya bunyi kedengaran jelas.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua kuantiti gelombang yang TIDAK berubah selepas pantulan.', answer: 'Frekuensi, panjang gelombang, dan laju (mana-mana dua).' },
          { question: 'Apakah sudut antara muka gelombang dengan arah perambatannya?', answer: '$90^\\circ$ (berserenjang).' },
          { question: 'Jika sudut antara muka gelombang tuju dengan pemantul satah ialah $35^\\circ$, berapakah sudut tuju $i$?', answer: '$35^\\circ$ (kerana sudut antara muka gelombang dengan pemantul $=$ sudut antara sinar dengan garis normal!).' },
        ],
        fadedProblem: {
          prompt: 'Seekor kelawar memancarkan gelombang bunyi ultrasonik ($v = 340\\text{ m s}^{-1}$) dan mengesan gema dari dinding gua $0.15\\text{ s}$ kemudian. Cari jarak kelawar dari dinding gua.',
          step1GivenAndFormula: 'Diberi: $v = 340\\text{ m s}^{-1}$, $t = 0.15\\text{ s}$. Rumus: $d = \\frac{vt}{2}$.',
          studentTask: 'Kira jarak $d$.',
          answerSteps: 'Langkah 3: $d = \\frac{340 \\times 0.15}{2}$ → Langkah 4: $d = 25.5\\text{ m}$.',
        },
        transferQuestion: {
          question: 'Terangkan perbezaan antara menggunakan cahaya laser vs ultrasonik untuk pengimbasan organ dalaman janin di hospital.',
          answer: 'Laser tidak dapat menembusi tisu badan dan berisiko merosakkan sel; ultrasonik menembusi tisu lembut dan memantul pada sempadan ketumpatan berbeza tanpa sinaran mengion berbahaya.',
        },
      },
    },
    {
      id: '5.4',
      chapterId: 'bab-5',
      code: '5.4',
      title: 'Pembiasan Gelombang',
      pageRef: 'm.s. 194–201',
      part1Anchor: {
        phenomenon:
          'Ombak di tengah lautan kelihatan rawak arahnya, tetapi apabila menghampiri pantai yang cetek garis ombaknya melengkung menjadi selari dengan pantai dan menumpu ganas di tanjung!',
        chapterConnection:
          'Menjelaskan perubahan laju dan panjang gelombang ($\\frac{v_1}{\\lambda_1} = \\frac{v_2}{\\lambda_2}$) apabila gelombang melintasi sempadan medium atau kedalaman berbeza.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pembiasan Gelombang',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pembiasan gelombang ialah ' },
            { text: 'perubahan arah perambatan gelombang', keyword: true },
            { text: ' yang disebabkan oleh ' },
            { text: 'perubahan halaju gelombang', keyword: true },
            { text: ' apabila gelombang merambat dari satu medium ke medium yang lain.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Ombak Membias ke Tanjung (Ombak Tinggi) vs Teluk (Air Tenang)',
            cause: 'Dasar laut lebih cetek di hadapan tanjung berbanding teluk.',
            mechanism: 'Bahagian muka gelombang di hadapan tanjung memasuki air cetek terlebih dahulu lalu melambat ($v\\downarrow, \\lambda\\downarrow$), manakala bahagian di hadapan teluk kekal laju di air dalam; muka gelombang membengkok mengikut bentuk garis pantai.',
            effect: 'Tenaga ombak ditumpukan di tanjung (ombak besar & hakisan kuat) dan disebarkan di teluk (air tenang, sesuai untuk pelabuhan/perkampungan nelayan).',
          },
          {
            title: 'Mengapa Bunyi Lebih Jelas Kedengaran pada Waktu Malam Berbanding Waktu Siang',
            cause: 'Pada waktu malam, udara berhampiran permukaan bumi lebih sejuk berbanding lapisan udara di atasnya (siang: permukaan panas, atas sejuk).',
            mechanism: 'Laju bunyi lebih rendah dalam udara sejuk ($v_{\\text{sejuk}} < v_{\\text{panas}}$). Pada waktu malam, gelombang bunyi yang merambat ke atas (udara panas lebih laju) membias melengkung KEMBALI ke arah bumi.',
            effect: 'Bunyi ditumpukan ke permukaan tanah pada waktu malam dan kedengaran jauh lebih kuat berbanding waktu siang (yang membias ke atas menjauhi tanah).',
          },
        ],
        tables: [
          {
            title: 'Pembiasan Gelombang Air: Dalam $\\leftrightarrow$ Cetek',
            headers: ['Arah Perambatan', 'Laju ($v$) & $\\lambda$', 'Frekuensi ($f$)', 'Pembengkokan Sinar terhadap Normal'],
            rows: [
              ['Air Dalam $\\to$ Air Cetek', 'Berkurang ($v\\downarrow, \\lambda\\downarrow$)', 'TIDAK berubah', 'Membias MENDEKATI garis normal ($i > r$)'],
              ['Air Cetek $\\to$ Air Dalam', 'Bertambah ($v\\uparrow, \\lambda\\uparrow$)', 'TIDAK berubah', 'Membias MENJAUHI garis normal ($i < r$)'],
              ['Tuju serenjang ($i = 0^\\circ$)', 'Berubah ($v, \\lambda$)', 'TIDAK berubah', 'Tiada perubahan arah ($r = 0^\\circ$), hanya $\\lambda$ berubah!'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Pembiasan Gelombang (Frekuensi Malar)',
            latex: '\\frac{v_1}{\\lambda_1} = \\frac{v_2}{\\lambda_2} = f',
            symbols: [
              { symbol: 'v_1, \\lambda_1', meaning: 'Laju & panjang gelombang dalam kawasan dalam / medium 1', unit: '$\\text{m s}^{-1}, \\text{m}$' },
              { symbol: 'v_2, \\lambda_2', meaning: 'Laju & panjang gelombang dalam kawasan cetek / medium 2', unit: '$\\text{m s}^{-1}, \\text{m}$' },
            ],
            appliesWhen: 'Gelombang air, bunyi, atau cahaya melintasi sempadan medium berlainan.',
            failsWhen: 'Menukar nilai $f$ selepas pembiasan! Frekuensi $f$ TIDAK PERNAH berubah semasa pembiasan.',
          },
        ],
        diagrams: [
          {
            kind: 'wave-refraction',
            title: 'Pembiasan Gelombang Air dari Kawasan Dalam ke Kawasan Cetek & Tanjung/Teluk',
            whatItShows: 'Di atas plat perspeks (kawasan cetek) dalam tangki riak, jalur muka gelombang menjadi lebih rapat ($\\lambda_2 < \\lambda_1$) dan sinar terbias mendekati garis normal.',
            axisOrRule: 'Ingat akronim **DC-DN**: **D**alam ke **C**etek $\\to$ panjang gelombang lebih pen**D**ek, mendekati **N**ormal!',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Panjang Gelombang Air di Kawasan Dalam vs Kawasan Cetek',
          problem: 'Gelombang air berfrekuensi $10\\text{ Hz}$ merambat dari kawasan dalam dengan panjang gelombang $4.0\\text{ cm}$ ke kawasan cetek di mana lajunya menjadi $0.25\\text{ m s}^{-1}$. Hitung panjang gelombang di kawasan cetek dan laju di kawasan dalam.',
          given: ['$f = 10\\text{ Hz}$ (malar)', '$\\lambda_1 = 4.0\\text{ cm} = 0.040\\text{ m}$', '$v_2 = 0.25\\text{ m s}^{-1}$'],
          formulaLatex: 'v_1 = f\\lambda_1, \\qquad \\lambda_2 = \\frac{v_2}{f}',
          formulaWhy: 'Frekuensi kekal malar merentas kedua-dua kedalaman.',
          substituteLatex: 'v_1 = 10(0.040) = 0.40\\text{ m s}^{-1}; \\quad \\lambda_2 = \\frac{0.25}{10}',
          answer: '$v_1 = 0.40\\text{ m s}^{-1}$; $\\lambda_2 = 0.025\\text{ m}$ ($2.5\\text{ cm}$)',
          trapAlert: 'Dalam tangki riak, plat perspeks diletakkan di dasar untuk menjadikan air lebih CETEK (bukan lebih dalam)!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Geografi Pantai & Pembinaan Pelabuhan (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Membina pelabuhan atau jeti nelayan di kawasan TELUK', scientificReason: 'Pembiasan gelombang menyebarkan tenaga ombak di teluk menjadikan amplitud ombak kecil dan air lebih tenang.' },
          { designChoice: 'Membina benteng batu penahan hakisan di kawasan TANJUNG', scientificReason: 'Pembiasan gelombang menumpukan tenaga ombak di tanjung menjadikan ombak tinggi dan menghakis pantai.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah kuantiti yang TIDAK berubah semasa pembiasan gelombang?', answer: 'Frekuensi.' },
          { question: 'Apabila gelombang air bergerak dari kawasan cetek ke dalam, adakah ia mendekati atau menjauhi garis normal?', answer: 'Menjauhi garis normal (kerana laju bertambah).' },
          { question: 'Jika gelombang air memasuki air cetek secara bersudut $90^\\circ$ dengan sempadan ($i = 0^\\circ$), apakah yang berubah?', answer: 'Laju dan panjang gelombang berkurang; arah perambatan tidak berubah.' },
        ],
        fadedProblem: {
          prompt: 'Gelombang air mempunyai laju $12\\text{ cm s}^{-1}$ dan panjang gelombang $3.0\\text{ cm}$ di kawasan dalam. Apabila memasuki kawasan cetek, panjang gelombangnya menjadi $2.0\\text{ cm}$. Cari laju gelombang di kawasan cetek.',
          step1GivenAndFormula: 'Diberi: $v_1 = 12\\text{ cm s}^{-1}$, $\\lambda_1 = 3.0\\text{ cm}$, $\\lambda_2 = 2.0\\text{ cm}$. Rumus: $\\frac{v_1}{\\lambda_1} = \\frac{v_2}{\\lambda_2}$.',
          studentTask: 'Kira nilai $v_2$.',
          answerSteps: 'Langkah 3: $\\frac{12}{3.0} = \\frac{v_2}{2.0}$ → Langkah 4: $v_2 = 8.0\\text{ cm s}^{-1}$ ($0.08\\text{ m s}^{-1}$).',
        },
        transferQuestion: {
          question: 'Kapal terbang supersonik dan bunyi guruh lebih sukar didengari pada jarak jauh pada tengah hari yang terik berbanding malam yang dingin. Mengapa?',
          answer: 'Pada tengah hari, udara dekat tanah panas (bunyi laju) dan udara di atas lebih sejuk (bunyi perlahan), menyebabkan gelombang bunyi membias melengkung ke atas menjauhi pendengar di tanah.',
        },
      },
    },
    {
      id: '5.5',
      chapterId: 'bab-5',
      code: '5.5',
      title: 'Pembelauan Gelombang',
      pageRef: 'm.s. 202–209',
      part1Anchor: {
        phenomenon:
          'Kita boleh mendengar rakan bercakap dari balik dinding walaupun tidak dapat melihatnya — kerana gelombang bunyi berpanjang gelombang besar melentur luas melepasi celah pintu, manakala cahaya berpanjang gelombang terlalu halus!',
        chapterConnection:
          'Menjelaskan penyebaran gelombang melalui celah/penghalang serta reka bentuk benteng pemecah ombak pelabuhan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pembelauan Gelombang',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pembelauan gelombang ialah ' },
            { text: 'penyebaran gelombang apabila gelombang itu merambat melalui satu celah atau tepi suatu penghalang', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Dua Faktor Menentukan Ketara atau Tidaknya Pembelauan',
            cause: 'Gelombang dengan panjang gelombang $\\lambda$ melalui celah bersaiz $a$ (atau penghalang).',
            mechanism: 'Apabila saiz celah $a \\le \\lambda$ (celah sempit berbanding $\\lambda$), penyebaran membulat adalah maksimum; apabila $a \\gg \\lambda$, gelombang hanya melentur sedikit di tepi.',
            effect: 'Semakin SEMPIT celah dan semakin PANJANG panjang gelombang $\\lambda$, semakin ketara kesan pembelauan (tenaga tersebar luas menyebabkan amplitud gelombang terbelau berkurang).',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Pembiasan vs Pembelauan',
            headers: ['Kuantiti Selepas Fenomena', 'Pembiasan', 'Pembelauan'],
            rows: [
              ['Panjang gelombang ($\\lambda$)', 'Berubah', 'TIDAK berubah'],
              ['Laju ($v$)', 'Berubah', 'TIDAK berubah'],
              ['Frekuensi ($f$)', 'Tidak berubah', 'TIDAK berubah'],
              ['Amplitud ($A$)', 'Berkurang sedikit', 'BERKURANG (tenaga disebar ke kawasan lebih luas)'],
              ['Bentuk & Arah muka gelombang', 'Membengkok mengikut halaju baharu', 'Menyebar membulat keluar dari celah/tepi penghalang'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Pembelauan Ketara',
            latex: 'a \\lesssim \\lambda \\implies \\text{Pembelauan Maksimum (muka gelombang membulat)}',
            symbols: [
              { symbol: 'a', meaning: 'Lebar celah atau saiz penghalang', unit: '$\\text{m}$' },
              { symbol: '\\lambda', meaning: 'Panjang gelombang tuju', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Menilai mengapa gajah menggunakan infrasonik ($\\lambda$ sangat panjang) atau mengapa celah sempit menghasilkan corak bulatan.',
            failsWhen: 'Melukis $\\lambda$ gelombang terbelau menjadi lebih panjang/pendek daripada $\\lambda$ tuju — dalam pembelauan, jarak antara muka gelombang MESTI kekal SAMA!',
          },
        ],
        diagrams: [
          {
            kind: 'wave-diffraction',
            title: 'Kesan Saiz Celah ($a$) dan Panjang Gelombang ($\\lambda$) ke atas Pembelauan',
            whatItShows: 'Celah lebar ($a > \\lambda$): hampir lurus dengan lenturan tepi sahaja; Celah sempit ($a \\le \\lambda$): muka gelombang membulat penuh dengan jarak $\\lambda$ kekal sama.',
            axisOrRule: 'Celah sempit $\\to$ pembelauan ketara, amplitud turun; Celah lebar $\\to$ pembelauan kurang ketara.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh Konseptual: Mengapa Bunyi Gajah Infrasonik Mampu Merentas Hutan Lebat',
          problem: 'Gajah menghasilkan bunyi infrasonik berfrekuensi sangat rendah ($\\approx 15\\text{ Hz}$) untuk berkomunikasi jarak jauh merentasi hutan tebal. Jelaskan kelebihannya.',
          given: ['Laju bunyi $v \\approx 340\\text{ m s}^{-1}$', 'Frekuensi rendah $f = 15\\text{ Hz} \\implies \\lambda = \\frac{340}{15} \\approx 22.7\\text{ m}$'],
          formulaLatex: '\\lambda = \\frac{v}{f}',
          formulaWhy: 'Panjang gelombang $\\lambda$ lebih besar daripada saiz batang pokok.',
          substituteLatex: '\\lambda \\approx 22.7\\text{ m} \\gg d_{\\text{pokok}}',
          answer: 'Bunyi infrasonik mempunyai $\\lambda$ sangat panjang, membolehkannya mengalami pembelauan ketara mengelilingi pokok dan bukit untuk sampai jauh.',
          trapAlert: 'Jangan lupa mengaitkan frekuensi rendah $\\to$ panjang gelombang panjang $\\to$ pembelauan lebih ketara!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Pembelauan Gelombang (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Benteng pemecah ombak dibina dengan celah bukaan bersaiz sesuai (Pelabuhan Marang / Pantai Kok)', scientificReason: 'Gelombang laut mengalami pembelauan melalui bukaan sempit, menyebarkan tenaga ke kawasan luas supaya amplitud ombak menjadi kecil dan air tenang untuk bot.' },
          { designChoice: 'Benteng pemecah ombak dibuat daripada konkrit tebal dengan cerun / binaan berliang', scientificReason: 'Menahan hentaman ombak tinggi di luar (pantulan & penyerapan tenaga) serta memecahkan tenaga ombak.' },
          { designChoice: 'Hologram pada kad bank / wang kertas', scientificReason: 'Menggunakan prinsip pembelauan cahaya pada parutan halus untuk menghasilkan corak keselamatan tiga dimensi yang sukar dipalsukan.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan tiga kuantiti gelombang yang tidak berubah selepas melalui celah pembelauan.', answer: 'Panjang gelombang ($\\lambda$), frekuensi ($f$), dan laju ($v$).' },
          { question: 'Mengapakah amplitud gelombang terbelau berkurang?', answer: 'Kerana tenaga gelombang tersebar ke kawasan yang lebih luas.' },
          { question: 'Bagaimanakah cara menjadikan corak pembelauan cahaya laser lebih lebar dan ketara?', answer: 'Gunakan celah yang lebih sempit atau cahaya berpanjang gelombang lebih panjang (cth: merah menggantikan biru).' },
        ],
        fadedProblem: {
          prompt: 'Ombak laut berpanjang gelombang $4.0\\text{ m}$ menuju ke tembok pemecah ombak pelabuhan. Dua cadangan lebar pintu masuk diberikan: Reka bentuk P ($3.5\\text{ m}$) atau Q ($25\\text{ m}$). Yang manakah menenangkan air di dalam pelabuhan dengan lebih baik?',
          step1GivenAndFormula: 'Diberi: $\\lambda = 4.0\\text{ m}$; lebar bukaan P ($3.5\\text{ m} < \\lambda$) berbanding Q ($25\\text{ m} \\gg \\lambda$).',
          studentTask: 'Pilih reka bentuk terbaik dan tulis hujah fizik 2 ayat.',
          answerSteps: 'Jawapan: Reka bentuk P ($3.5\\text{ m}$). Lebar bukaan lebih sempit ($\\le \\lambda$) menyebabkan pembelauan lebih ketara, menyebarkan tenaga gelombang dan mengurangkan amplitud ombak di dalam pelabuhan.',
        },
        transferQuestion: {
          question: 'Seorang pendengar berdiri di luar bilik yang pintunya terbuka $0.80\\text{ m}$. Mengapakah dia dapat mendengar muzik ($f = 340\\text{ Hz}, v = 340\\text{ m s}^{-1}$) tetapi tidak melihat lampu suluh dari sudut tepi pintu?',
          answer: '$\\lambda_{\\text{bunyi}} = 340/340 = 1.0\\text{ m} \\approx$ lebar pintu ($0.80\\text{ m}$), maka bunyi membelau ketara. $\\lambda_{\\text{cahaya}} \\approx 5\\times 10^{-7}\\text{ m} \\ll 0.80\\text{ m}$, maka cahaya hampir tidak membelau.',
        },
      },
    },
    {
      id: '5.6',
      chapterId: 'bab-5',
      code: '5.6',
      title: 'Interferens Gelombang',
      pageRef: 'm.s. 210–219',
      part1Anchor: {
        phenomenon:
          'Fon kepala pembatal hingar mampu menghapuskan deruman enjin kapal terbang dengan menjana gelombang bunyi yang bertentangan fasa tepat — menggunakan prinsip dua gelombang bertindih untuk saling memadamkan.',
        chapterConnection:
          'Mengaplikasikan Prinsip Superposisi dan eksperimen dwicelah Young ($\\lambda = \\frac{ax}{D}$) untuk gelombang air, bunyi, dan cahaya.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Superposisi',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Prinsip superposisi menyatakan bahawa apabila dua gelombang bertindih, ' },
            { text: 'sesaran paduan ialah hasil tambah sesaran kedua-dua gelombang individu', keyword: true },
            { text: ' itu pada masa dan titik yang sama.' },
          ],
        },
        {
          title: 'Sumber Koheren',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sumber koheren ialah sumber gelombang yang menghasilkan gelombang dengan ' },
            { text: 'frekuensi yang sama', keyword: true },
            { text: ' dan ' },
            { text: 'beza fasa yang tetap', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Terbentuknya Garis Antinod (Membina) vs Garis Nod (Memusnah)',
            cause: 'Dua pencelup sfera koheren bergetar serentak di dalam tangki riak.',
            mechanism: 'Apabila puncak bertembung puncak atau lembangan bertembung lembangan, sesaran bertambah menjadi $+2A$ atau $-2A$ (Interferens Membina $\\to$ Antinod). Apabila puncak bertembung lembangan, sesaran saling menghapuskan menjadi $0$ (Interferens Memusnah $\\to$ Nod).',
            effect: 'Terbentuk corak garis antinod (air berombak kuat / bunyi kuat / pinggir cerah) dan garis nod (air tenang / bunyi lemah / pinggir gelap) berselang-seli.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Interferens Membina vs Interferens Memusnah',
            headers: ['Jenis Interferens', 'Pertindihan Gelombang', 'Kesan Tangki Riak / Bunyi / Cahaya'],
            rows: [
              ['Interferens Membina (Antinod)', 'Puncak + Puncak ($+2A$) ATAU Lembangan + Lembangan ($-2A$)', 'Ombak amplitud maksimum / Bunyi kuat ($L$) / Pinggir cerah'],
              ['Interferens Memusnah (Nod)', 'Puncak + Lembangan ($+A + (-A) = 0$)', 'Air tenang rata / Bunyi perlahan atau senyap ($P$) / Pinggir gelap'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Interferens Dwicelah Young',
            latex: '\\lambda = \\frac{ax}{D}',
            symbols: [
              { symbol: '\\lambda', meaning: 'Panjang gelombang', unit: '$\\text{m}$' },
              { symbol: 'a', meaning: 'Jarak pemisahan antara dua sumber koheren / dua celah', unit: '$\\text{m}$' },
              { symbol: 'x', meaning: 'Jarak pemisahan antara dua garis antinod / pinggir cerah (atau dua nod / gelap) YANG BERTURUTAN', unit: '$\\text{m}$' },
              { symbol: 'D', meaning: 'Jarak serenjang dari sumber / dwicelah ke skrin atau garis ukuran', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Dwicelah cahaya laser, dua pembesar suara koheren, atau dua pencelup koheren ($D \\gg a$).',
            failsWhen: 'Menukar ukuran: jika jarak daripada 5 pinggir cerah berturutan ialah $2.0\\text{ cm}$, ingat bahawa jarak itu mengandungi $(5 - 1) = 4$ selang $x$, maka $x = 2.0 / 4 = 0.50\\text{ cm}$!',
          },
        ],
        diagrams: [
          {
            kind: 'wave-interference',
            title: 'Corak Interferens Dua Sumber Koheren ($a, x, D$)',
            whatItShows: 'Muka gelombang dua sumber bertindih membentuk garis antinod (membina) dan garis nod (memusnah) berselang-seli; simbol $a, x, D$ ditunjukkan dengan tepat.',
            axisOrRule: 'Dari $\\lambda = \\frac{ax}{D} \\implies x = \\frac{\\lambda D}{a}$: mengecilkan jarak sumber $a$ akan MEMBESARKAN jarak pinggir $x$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Interferens Dwicelah Cahaya Laser Merah',
          problem: 'Dalam eksperimen dwicelah Young, jarak antara dua celah ialah $0.50\\text{ mm}$ dan skrin diletakkan $2.0\\text{ m}$ dari celah. Jarak antara 6 pinggir cerah berturutan pada skrin ialah $1.30\\text{ cm}$. Hitung panjang gelombang cahaya dalam nanometer.',
          given: ['$a = 0.50\\text{ mm} = 5.0 \\times 10^{-4}\\text{ m}$', '$D = 2.0\\text{ m}$', '6 pinggir cerah berturutan $= 5$ selang $x \\implies x = \\frac{1.30\\text{ cm}}{5} = 0.26\\text{ cm} = 2.6 \\times 10^{-3}\\text{ m}$'],
          formulaLatex: '\\lambda = \\frac{ax}{D}',
          formulaWhy: 'Hubungan geometri dwicelah dengan semua panjang dalam meter.',
          substituteLatex: '\\lambda = \\frac{(5.0 \\times 10^{-4})(2.6 \\times 10^{-3})}{2.0}',
          answer: '$\\lambda = 6.5 \\times 10^{-7}\\text{ m} = 650\\text{ nm}$ (cahaya merah)',
          trapAlert: 'Bahagi jarak jumlah pinggir dengan $(N - 1)$, BUKAN $N$, dan tukar semua $\\text{mm}$ serta $\\text{cm}$ kepada $\\text{m}$!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Interferens Memusnah & Membina dalam Teknologi (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Luan bebuli (bulbous bow) di hadapan haluan kapal besar', scientificReason: 'Menjana gelombang air di hadapan kapal yang berinterferens memusnah dengan gelombang terhasil oleh badan kapal, mengurangkan seretan air dan menjimatkan bahan api.' },
          { designChoice: 'Salutan nipis anti-pantulan pada kanta kamera / cermin mata', scientificReason: 'Cahaya terpantul dari permukaan depan dan belakang salutan berinterferens memusnah untuk menghapuskan silau dan meningkatkan kejelasan imej.' },
          { designChoice: 'Fon kepala pembatal hingar aktif (ANC)', scientificReason: 'Mikrofon mengesan bunyi bising luar lalu menghasilkan gelombang bunyi berlawanan fasa ($180^\\circ$) untuk menghasilkan interferens memusnah di telinga.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua ciri sumber gelombang yang koheren.', answer: 'Frekuensi yang sama dan beza fasa yang tetap.' },
          { question: 'Dalam persamaan $x = \\frac{\\lambda D}{a}$, apakah berlaku kepada jarak antara dua bunyi kuat berturutan $x$ jika jarak antara dua pembesar suara $a$ dirapatkan?', answer: '$x$ bertambah besar ($x \\propto 1/a$).' },
          { question: 'Apakah yang terhasil apabila puncak bertembung dengan lembangan?', answer: 'Interferens memusnah (titik/garis nod).' },
        ],
        fadedProblem: {
          prompt: 'Dua pembesar suara koheren dipisahkan sejauh $1.2\\text{ m}$ memancarkan bunyi berpanjang gelombang $0.40\\text{ m}$. Seorang pendengar berjalan selari pada jarak $6.0\\text{ m}$ di hadapannya. Hitung jarak antara dua bunyi kuat berturutan ($x$).',
          step1GivenAndFormula: 'Diberi: $a = 1.2\\text{ m}$, $\\lambda = 0.40\\text{ m}$, $D = 6.0\\text{ m}$. Rumus: $x = \\frac{\\lambda D}{a}$.',
          studentTask: 'Kira nilai $x$ dalam meter.',
          answerSteps: 'Langkah 3: $x = \\frac{(0.40)(6.0)}{1.2}$ → Langkah 4: $x = 2.0\\text{ m}$.',
        },
        transferQuestion: {
          question: 'Eksperimen dwicelah diulang dengan menukar penapis cahaya merah ($650\\text{ nm}$) kepada penapis cahaya biru ($450\\text{ nm}$). Ramalkan perubahan corak pinggir di skrin.',
          answer: 'Oleh kerana $\\lambda_{\\text{biru}} < \\lambda_{\\text{merah}}$ dan $x = \\frac{\\lambda D}{a}$, jarak pemisahan antara pinggir cerah $x$ akan menjadi lebih rapat (lebih kecil).',
        },
      },
    },
    {
      id: '5.7',
      chapterId: 'bab-5',
      code: '5.7',
      title: 'Gelombang Elektromagnet',
      pageRef: 'm.s. 220–224',
      part1Anchor: {
        phenomenon:
          'Daripada gelombang radio Wi-Fi hingga cahaya matahari dan sinar-X hospital, kesemuanya ialah getaran medan elektrik dan magnet yang sama sifatnya — hanya berbeza panjang gelombang dan frekuensinya.',
        chapterConnection:
          'Menyatukan keseluruhan Bab 5 kepada spektrum elektromagnet selanjar yang semuanya merambat pada laju cahaya $c = 3.00 \\times 10^8\\text{ m s}^{-1}$ dalam vakum.',
      },
      part2SacredDefinitions: [
        {
          title: 'Sifat Asas Gelombang Elektromagnet',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Gelombang elektromagnet ialah ' },
            { text: 'gelombang melintang', keyword: true },
            { text: ' yang terdiri daripada ayunan medan elektrik dan medan magnet yang berserenjang, ' },
            { text: 'tidak memerlukan medium untuk merambat', keyword: true },
            { text: ' dan merambat dalam vakum pada laju $c = 3.00 \\times 10^8\\text{ m s}^{-1}$.' },
          ],
          equationLatex: 'c = f\\lambda = 3.00 \\times 10^8\\text{ m s}^{-1}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Frekuensi Tinggi Lebih Menembusi & Lebih Berbahaya',
            cause: 'Apabila bergerak dari Gelombang Radio menuju ke Sinar Gama, panjang gelombang $\\lambda$ mengecil dan frekuensi $f$ melonjak tinggi.',
            mechanism: 'Tenaga foton gelombang berkadar terus dengan frekuensinya; gelombang berfrekuensi tinggi (UV, Sinar-X, Sinar Gama) mampu mengionkan atom dan merosakkan DNA sel hidup.',
            effect: 'Gelombang frekuensi tinggi mempunyai kuasa penembusan tinggi dan memerlukan perisai plumbum/perlindungan ketat.',
          },
        ],
        tables: [
          {
            title: 'Spektrum Elektromagnet Selanjar (Susunan $\\lambda$ Mengecil / $f$ Membesar — Jadual 5.11)',
            headers: ['Komponen Spektrum', 'Julat $\\lambda$ / Ciri', 'Aplikasi Utama', 'Kesan Sampingan / Bahaya'],
            rows: [
              ['1. Gelombang Radio', '$\\lambda$ terpanjang ($> 10^{-1}\\text{ m}$)', 'Penyiaran TV/radio, komunikasi tanpa wayar, walkie-talkie', 'Kesan pemanasan sangat minimum pada tisu'],
              ['2. Gelombang Mikro', '$10^{-3}\\text{ – }10^{-1}\\text{ m}$', 'Ketuhar gelombang mikro, radar, Wi-Fi, satelit GPS', 'Pemanasan dalaman sel badan jika pendedahan terlampau'],
              ['3. Sinaran Inframerah', '$10^{-6}\\text{ – }10^{-3}\\text{ m}$', 'Alat kawalan jauh, kamera penglihatan malam, rawatan haba', 'Melecur kulit jika keamatan tinggi'],
              ['4. Cahaya Nampak', '$400\\text{ nm (ungu) – }750\\text{ nm (merah)}$', 'Penglihatan manusia, gentian optik, fotosintesis', 'Cahaya laser amat terang merosakkan retina mata'],
              ['5. Sinaran Ultraungu (UV)', '$10^{-8}\\text{ – }10^{-6}\\text{ m}$', 'Pensterilan alatan perubatan, pengesan wang palsu, vitamin D', 'Selaran matahari, katarak mata, kanser kulit'],
              ['6. Sinar-X', '$10^{-11}\\text{ – }10^{-8}\\text{ m}$', 'Radiografi tulang patah, imbasan bagasi lapangan terbang', 'Sinaran mengion: mutasi sel & kanser jika kerap terdedah'],
              ['7. Sinar Gama', '$\\lambda$ terpendek, $f$ tertinggi', 'Radioterapi membunuh sel kanser, pensterilan alatan bedah', 'Sinaran mengion paling kuat: kerosakan organ teruk'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Hubungan Halaju Cahaya dalam Vakum',
            latex: 'c = f\\lambda = 3.00 \\times 10^8\\text{ m s}^{-1}',
            symbols: [
              { symbol: 'c', meaning: 'Laju semua gelombang EM dalam vakum / udara', unit: '$\\text{m s}^{-1}$' },
              { symbol: 'f', meaning: 'Frekuensi gelombang EM', unit: '$\\text{Hz}$' },
              { symbol: '\\lambda', meaning: 'Panjang gelombang ($1\\text{ nm} = 10^{-9}\\text{ m}$)', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Mengira $f$ atau $\\lambda$ mana-mana gelombang dalam spektrum EM di vakum/udara.',
            failsWhen: 'Apabila cahaya memasuki kaca atau air ($n > 1$), lajunya berkurang menjadi $v = c/n < 3.00 \\times 10^8\\text{ m s}^{-1}$!',
          },
        ],
        diagrams: [
          {
            kind: 'em-spectrum',
            title: 'Peta Spektrum Elektromagnet: Arah $\\lambda$ vs $f$ & Tenaga',
            whatItShows: 'Susunan berturutan Radio $\\to$ Mikro $\\to$ Inframerah $\\to$ Cahaya Nampak ($750\\text{–}400\\text{ nm}$) $\\to$ UV $\\to$ Sinar-X $\\to$ Gama.',
            axisOrRule: 'Ingat susunan frekuensi meningkat: **R**adio $\\to$ **M**ikro $\\to$ **I**nframerah $\\to$ **C**ahaya **N**ampak $\\to$ **U**V $\\to$ **X** $\\to$ **G**ama.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Panjang Gelombang Siaran Radio FM',
          problem: 'Sebuah stesen radio memancarkan gelombang pada frekuensi $98.5\\text{ MHz}$. Hitung panjang gelombangnya di udara ($c = 3.00 \\times 10^8\\text{ m s}^{-1}$).',
          given: ['$f = 98.5\\text{ MHz} = 98.5 \\times 10^6\\text{ Hz}$', '$c = 3.00 \\times 10^8\\text{ m s}^{-1}$'],
          formulaLatex: '\\lambda = \\frac{c}{f}',
          formulaWhy: 'Semua gelombang radio merambat pada laju cahaya $c$ di udara.',
          substituteLatex: '\\lambda = \\frac{3.00 \\times 10^8}{98.5 \\times 10^6}',
          answer: '$\\lambda = 3.05\\text{ m}$',
          trapAlert: 'Tukarkan MHz ($10^6\\text{ Hz}$) atau GHz ($10^9\\text{ Hz}$) kepada $\\text{Hz}$ sebelum membahagi!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Susunkan sinaran berikut mengikut urutan frekuensi MENINGKAT: Sinar-X, Gelombang Mikro, Cahaya Hijau, Sinar Gama.', answer: 'Gelombang Mikro < Cahaya Hijau < Sinar-X < Sinar Gama.' },
          { question: 'Adakah Sinar Gama merambat lebih laju daripada Gelombang Radio dalam vakum?', answer: 'Tidak; semua gelombang elektromagnet merambat pada laju yang sama ($3.00 \\times 10^8\\text{ m s}^{-1}$) dalam vakum.' },
          { question: 'Apakah julat panjang gelombang cahaya nampak?', answer: 'Kira-kira $400\\text{ nm}$ (ungu) hingga $750\\text{ nm}$ (merah).' },
        ],
        fadedProblem: {
          prompt: 'Sinar-X perubatan mempunyai panjang gelombang $1.5 \\times 10^{-10}\\text{ m}$. Hitung frekuensinya.',
          step1GivenAndFormula: 'Diberi: $\\lambda = 1.5 \\times 10^{-10}\\text{ m}$, $c = 3.00 \\times 10^8\\text{ m s}^{-1}$. Rumus: $f = \\frac{c}{\\lambda}$.',
          studentTask: 'Kira nilai frekuensi $f$ dalam $\\text{Hz}$.',
          answerSteps: 'Langkah 3: $f = \\frac{3.00 \\times 10^8}{1.5 \\times 10^{-10}}$ → Langkah 4: $f = 2.0 \\times 10^{18}\\text{ Hz}$.',
        },
        transferQuestion: {
          question: 'Mengapakah gelombang mikro ($\\lambda \\approx \\text{cm}$) dipilih untuk komunikasi satelit berbanding gelombang radio AM berpanjang gelombang panjang?',
          answer: 'Gelombang mikro berfrekuensi lebih tinggi membolehkannya menembusi lapisan ionosfera tanpa dipantulkan balik serta membawa kadar penghantaran data yang jauh lebih tinggi.',
        },
      },
    },
  ],
};
