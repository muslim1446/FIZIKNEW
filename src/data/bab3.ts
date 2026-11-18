import type { ChapterContent } from '../types/textbook';

export const bab3: ChapterContent = {
  id: 'bab-3',
  formLevel: 4,
  number: 3,
  title: 'Kegravitian',
  pageRange: 'm.s. 76–116',
  overview:
    'Mengapa bulan mengelilingi Bumi dan planet mengelilingi Matahari: Hukum Kegravitian Semesta Newton, variasi $g$, daya memusat, Hukum Kepler I–III, orbit satelit, dan halaju lepas.',
  subtopics: [
    {
      id: '3.1',
      chapterId: 'bab-3',
      code: '3.1',
      title: 'Hukum Kegravitian Semesta Newton',
      pageRef: 'm.s. 78–95',
      part1Anchor: {
        phenomenon:
          'Daya yang menjatuhkan buah durian ke tanah ialah daya semesta yang sama yang mengekalkan Bulan dan Bumi dalam orbit masing-masing tanpa tercampak ke angkasa.',
        chapterConnection:
          'Menggeneralisasikan $g = 9.81\\text{ m s}^{-2}$ di permukaan Bumi kepada medan graviti pada sebarang ketinggian $h$ serta menimbang jisim Bumi/Matahari melalui gerakan membulat.',
      },
      part2SacredDefinitions: [
        {
          title: 'Hukum Kegravitian Semesta Newton',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Daya graviti antara dua jasad adalah ' },
            { text: 'berkadar terus dengan hasil darab jisim kedua-dua jasad', keyword: true },
            { text: ' itu dan ' },
            { text: 'berkadar songsang dengan kuasa dua jarak antara pusat dua jasad', keyword: true },
            { text: ' itu.' },
          ],
          equationLatex: 'F = \\frac{Gm_1 m_2}{r^2}',
        },
        {
          title: 'Daya Memusat',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Untuk suatu jasad yang membuat gerakan membulat, suatu daya bertindak ke atasnya yang ' },
            { text: 'arahnya sentiasa menuju ke pusat bulatan', keyword: true },
            { text: ' tersebut. Daya ini dikenali sebagai ' },
            { text: 'daya memusat', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'F = \\frac{mv^2}{r}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Satelit Tidak Jatuh Terhempas ke Bumi Walaupun Ditarik Graviti',
            cause: 'Satelit mengalami daya graviti ke arah pusat Bumi yang bertindak sebagai daya memusat ($\\frac{GMm}{r^2} = \\frac{mv^2}{r}$).',
            mechanism: 'Satelit juga mempunyai halaju linear tangen yang sangat tinggi secara mengufuk; ia sentiasa "jatuh" ke arah Bumi tetapi permukaan Bumi juga melengkung menjauhi pada kadar yang sama.',
            effect: 'Satelit kekal dalam orbit bulatan stabil mengelilingi Bumi tanpa henti.',
          },
          {
            title: 'Kesan Graviti Rendah vs Graviti Tinggi ke atas Tumbesaran Manusia',
            cause: 'Perubahan kekuatan medan graviti mengubah beban mekanikal pada tulang, otot, dan bendalir badan.',
            mechanism: 'Graviti rendah mengurangkan ketumpatan tulang, melemahkan otot dan mengecilkan jantung; graviti tinggi menaikkan beban jantung, tekanan darah ke kaki dan risiko pengsan.',
            effect: 'Angkasawan memerlukan latihan senaman harian dan perlindungan daya-$g$ tinggi semasa pelancaran roket.',
          },
        ],
        tables: [
          {
            title: 'Rumus Teras Kegravitian & Pemalar Rasmi',
            headers: ['Kuantiti / Konsep', 'Persamaan', 'Catatan Kritis'],
            rows: [
              ['Daya graviti antara 2 jasad', '$F = \\frac{Gm_1m_2}{r^2}$', '$G = 6.67 \\times 10^{-11}\\text{ N m}^2\\text{ kg}^{-2}$; $r =$ jarak antara PUSAT ke PUSAT'],
              ['Pecutan graviti pada jarak $r \\ge R$', '$g = \\frac{GM}{r^2} = \\frac{GM}{(R + h)^2}$', '$R_{\\text{Bumi}} = 6.37 \\times 10^6\\text{ m}$, $M_{\\text{Bumi}} = 5.97 \\times 10^{24}\\text{ kg}$'],
              ['Daya & pecutan memusat', '$F = \\frac{mv^2}{r}, \\quad a = \\frac{v^2}{r}$', '$v = \\frac{2\\pi r}{T}$ untuk satu pusingan orbit lengkap'],
              ['Jisim jasad pusat (Bumi/Matahari)', '$M = \\frac{4\\pi^2 r^3}{GT^2}$', 'Diterbitkan dengan menyamakan $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$ dan $v = \\frac{2\\pi r}{T}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pecutan Graviti di Dalam & Luar Bumi',
            latex: 'g = \\frac{GM}{(R + h)^2} \\quad (r \\ge R)',
            symbols: [
              { symbol: 'G', meaning: 'Pemalar kegravitian semesta ($6.67 \\times 10^{-11}$)', unit: '$\\text{N m}^2\\text{ kg}^{-2}$' },
              { symbol: 'M', meaning: 'Jisim planet / Bumi ($5.97 \\times 10^{24}$)', unit: '$\\text{kg}$' },
              { symbol: 'R', meaning: 'Jejari Bumi ($6.37 \\times 10^6$)', unit: '$\\text{m}$' },
              { symbol: 'h', meaning: 'Ketinggian di atas permukaan Bumi ($r = R + h$)', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Objek berada pada permukaan ($h = 0$) atau di atas permukaan planet ($r \\ge R$).',
            failsWhen: 'Di bawah permukaan Bumi ($r < R$): nilai $g$ TIDAK berkadar songsang dengan $r^2$, sebaliknya berkadar terus dengan $r$ ($g = 0$ di pusat Bumi!).',
          },
        ],
        diagrams: [
          {
            kind: 'gravity-profile',
            title: 'Graf Variasi Pecutan Graviti $g$ Melawan Jarak $r$ dari Pusat Bumi',
            whatItShows: 'Untuk $0 \\le r < R$, $g$ meningkat secara linear ($g \\propto r$); maksimum $9.81\\text{ m s}^{-2}$ pada permukaan $r = R$; untuk $r > R$, $g$ menyusut mengikut lengkung $g \\propto 1/r^2$.',
            axisOrRule: 'Jarak $r$ sentiasa diukur dari PUSAT Bumi ($r = R + h$), bukan dari permukaan!',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Pecutan Graviti Satelit Cuaca pada Ketinggian $h$',
          problem: 'Sebuah satelit mengorbit Bumi pada ketinggian $h = 480\\text{ km}$ di atas permukaan. Hitung pecutan graviti pada kedudukan satelit ($R = 6.37 \\times 10^6\\text{ m}$, $M = 5.97 \\times 10^{24}\\text{ kg}$, $G = 6.67 \\times 10^{-11}\\text{ N m}^2\\text{ kg}^{-2}$).',
          given: ['$h = 480\\text{ km} = 4.80 \\times 10^5\\text{ m}$', '$r = R + h = 6.37 \\times 10^6 + 0.48 \\times 10^6 = 6.85 \\times 10^6\\text{ m}$'],
          formulaLatex: 'g = \\frac{GM}{(R + h)^2}',
          formulaWhy: 'Jarak dari pusat Bumi ialah $R + h$, bukan $h$ semata-mata.',
          substituteLatex: 'g = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{(6.85 \\times 10^6)^2}',
          answer: '$g = 8.48\\text{ m s}^{-2}$',
          trapAlert: 'Jangan lupa menambah jejari Bumi $R$ kepada ketinggian $h$ DAN menukar $h$ dari $\\text{km}$ ke $\\text{m}$!',
        },
        {
          title: 'Contoh 2: Menghitung Jisim Matahari Menggunakan Orbit Bumi',
          problem: 'Bumi mengorbit Matahari pada jejari $r = 1.50 \\times 10^{11}\\text{ m}$ dengan tempoh $T = 1\\text{ tahun} = 3.156 \\times 10^7\\text{ s}$. Hitung jisim Matahari $M$.',
          given: ['$r = 1.50 \\times 10^{11}\\text{ m}$', '$T = 3.156 \\times 10^7\\text{ s}$', '$G = 6.67 \\times 10^{-11}\\text{ N m}^2\\text{ kg}^{-2}$'],
          formulaLatex: 'M = \\frac{4\\pi^2 r^3}{GT^2}',
          formulaWhy: 'Menyamakan daya graviti Matahari-Bumi dengan daya memusat orbit Bumi.',
          substituteLatex: 'M = \\frac{4\\pi^2 (1.50 \\times 10^{11})^3}{(6.67 \\times 10^{-11})(3.156 \\times 10^7)^2}',
          answer: '$M \\approx 2.00 \\times 10^{30}\\text{ kg}$',
          trapAlert: 'Pastikan tempoh $T$ ditukar kepada SAAT (bukan hari atau tahun)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Jika jarak antara dua pusat jasad digandakan dua kali, apakah berlaku pada daya graviti antaranya?', answer: 'Berkurang menjadi $\\frac{1}{4}$ kali ganda ($F \\propto 1/r^2$).' },
          { question: 'Nyatakan nilai $g$ tepat di pusat Bumi ($r = 0$).', answer: 'Sifar ($0\\text{ m s}^{-2}$) kerana jisim Bumi mengelilingi pusat secara simetri.' },
          { question: 'Apakah yang membekalkan daya memusat bagi Bulan mengorbit Bumi?', answer: 'Daya tarikan graviti antara Bumi dengan Bulan.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah roket berjisim $3.0 \\times 10^5\\text{ kg}$ berada di permukaan Bumi ($R = 6.37 \\times 10^6\\text{ m}$, $M = 5.97 \\times 10^{24}\\text{ kg}$). Hitung daya graviti yang bertindak ke atasnya.',
          step1GivenAndFormula: 'Diberi: $m_1 = 3.0 \\times 10^5\\text{ kg}$, $M = 5.97 \\times 10^{24}\\text{ kg}$, $r = 6.37 \\times 10^6\\text{ m}$. Rumus: $F = \\frac{GMm}{r^2}$.',
          studentTask: 'Kirakan nilai $F$ dalam newton.',
          answerSteps: 'Langkah 3: $F = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})(3.0 \\times 10^5)}{(6.37 \\times 10^6)^2}$ → Langkah 4: $F \\approx 2.94 \\times 10^6\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Seorang atlet membaling tukul besi dengan halaju tangen lebih tinggi pada panjang tali yang sama. Ramalkan perubahan pada tegangan tali.',
          answer: 'Tegangan tali membekalkan daya memusat $F = \\frac{mv^2}{r}$. Apabila $v$ bertambah, daya memusat (tegangan tali) meningkat mengikut $v^2$ (kuasa dua).',
        },
      },
    },
    {
      id: '3.2',
      chapterId: 'bab-3',
      code: '3.2',
      title: 'Hukum Kepler',
      pageRef: 'm.s. 96–102',
      part1Anchor: {
        phenomenon:
          'Orbit planet sebenarnya berbentuk elips dan bukan bulatan sempurna — sebab itulah Bumi bergerak sedikit lebih laju pada Januari (perihelion) berbanding Julai (afelion).',
        chapterConnection:
          'Menghubungkan geometri orbit elips kepada persamaan masa-jarak paling berkuasa bagi sistem suria dan satelit: $T^2 \\propto r^3$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Hukum Kepler Pertama (Hukum Orbit)',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Semua planet bergerak dalam ' },
            { text: 'orbit elips', keyword: true },
            { text: ' dengan ' },
            { text: 'Matahari berada di satu daripada fokusnya', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Hukum Kepler Kedua (Hukum Luas)',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Suatu garis yang menyambungkan planet dengan Matahari akan ' },
            { text: 'mencakupi luas yang sama dalam selang masa yang sama', keyword: true },
            { text: ' apabila planet bergerak dalam orbitnya.' },
          ],
        },
        {
          title: 'Hukum Kepler Ketiga (Hukum Tempoh)',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Kuasa dua tempoh orbit planet adalah ' },
            { text: 'berkadar terus dengan kuasa tiga jejari orbitnya', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'T^2 \\propto r^3 \\implies \\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Planet Bergerak Lebih Laju Apabila Dekat dengan Matahari',
            cause: 'Menurut Hukum Kepler II, luas sektor yang dicakupi dalam masa $\\Delta t$ adalah malar.',
            mechanism: 'Apabila jarak $r$ ke Matahari kecil (dekat perihelion), jejari sektor pendek; untuk mencakupi luas yang sama dalam masa $\\Delta t$ yang sama, panjang lengkok yang dilalui mestilah lebih besar.',
            effect: 'Laju linear planet adalah paling maksimum apabila terdekat dengan Matahari (perihelion) dan paling perlahan apabila terjauh (afelion).',
          },
        ],
        tables: [
          {
            title: 'Ringkasan Tiga Hukum Kepler',
            headers: ['Hukum', 'Kata Kunci SPM', 'Implikasi Fizikal'],
            rows: [
              ['Kepler I', 'Orbit elips; Matahari di satu fokus', 'Jarak planet–Matahari berubah sepanjang orbit ($r$ bukan pemalar mutlak)'],
              ['Kepler II', 'Luas sama dalam selang masa sama', 'Planet memecut bila mendekati Matahari, perlahan bila menjauhi'],
              ['Kepler III', '$T^2 \\propto r^3$ ($\\frac{T_1^2}{r_1^3} = \\frac{T_2^2}{r_2^3}$)', 'Planet lebih jauh mengambil masa orbit jauh lebih lama; sah jika mengorbit JASAD PUSAT SAMA'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Terbitan Hukum Kepler Ketiga',
            latex: 'T^2 = \\left(\\frac{4\\pi^2}{GM}\\right)r^3, \\qquad \\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}',
            symbols: [
              { symbol: 'T_1, T_2', meaning: 'Tempoh orbit dua jasad (boleh guna tahun/hari asalkan SAMA unit)', unit: '$\\text{s}$ atau tahun' },
              { symbol: 'r_1, r_2', meaning: 'Jejari orbit purata dua jasad (boleh guna $\\text{m}$ atau $\\text{AU}$ asalkan SAMA unit)', unit: '$\\text{m}$ atau $\\text{AU}$' },
              { symbol: 'M', meaning: 'Jisim jasad pusat yang dikelilingi (cth: Matahari untuk planet, Bumi untuk satelit)', unit: '$\\text{kg}$' },
            ],
            appliesWhen: 'Membandingkan dua objek yang mengorbit jasad pusat YANG SAMA (cth: Bumi vs Marikh mengorbit Matahari, atau Bulan vs ISS mengorbit Bumi).',
            failsWhen: 'Membandingkan Bulan (mengorbit Bumi) dengan Bumi (mengorbit Matahari) menggunakan nisbah $\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$ kerana nilai $M$ berbeza!',
          },
        ],
        diagrams: [
          {
            kind: 'kepler-ellipse',
            title: 'Geometri Orbit Elips & Sektor Luas Sama (Hukum Kepler I & II)',
            whatItShows: 'Matahari pada satu fokus $F_1$; sektor $AB$ (dekat, lengkok panjang, laju tinggi) dan sektor $CD$ (jauh, lengkok pendek, laju rendah) mempunyai luas yang tepat sama bagi selang masa $\\Delta t$ sama.',
            axisOrRule: 'Jejari orbit purata $r$ bagi perbandingan Kepler III ialah jarak purata antara pusat planet dengan pusat Matahari.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Mencari Tempoh Orbit Planet Marikh',
          problem: 'Jejari orbit Bumi ialah $1.50 \\times 10^{11}\\text{ m}$ dengan tempoh $1.00\\text{ tahun}$. Jejari orbit Marikh ialah $2.28 \\times 10^{11}\\text{ m}$. Hitung tempoh orbit Marikh dalam tahun.',
          given: ['$r_1 = 1.50 \\times 10^{11}\\text{ m}$, $T_1 = 1.00\\text{ tahun}$', '$r_2 = 2.28 \\times 10^{11}\\text{ m}$', 'Kedua-duanya mengorbit Matahari'],
          formulaLatex: '\\frac{T_2^2}{T_1^2} = \\frac{r_2^3}{r_1^3}',
          formulaWhy: 'Menggunakan persamaan nisbah Kepler III mengelakkan keperluan mengetahui nilai $G$ dan $M_{\\text{Matahari}}$.',
          substituteLatex: 'T_2^2 = (1.00)^2 \\times \\left(\\frac{2.28 \\times 10^{11}}{1.50 \\times 10^{11}}\\right)^3 = (1.52)^3 = 3.512',
          answer: '$T_2 = \\sqrt{3.512} = 1.87\\text{ tahun}$',
          trapAlert: 'Dalam persamaan nisbah $\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$, unit tak perlu ditukar kepada saat/meter selagi kiri dan kanan menggunakan unit yang sama, TETAPI dalam $T^2 = \\frac{4\\pi^2}{GM}r^3$, unit SI wajib!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Hukum Kepler Kedua.', answer: 'Garis yang menyambungkan planet dengan Matahari mencakupi luas yang sama dalam selang masa yang sama.' },
          { question: 'Di manakah kedudukan Matahari dalam orbit elips planet?', answer: 'Di salah satu titik fokus elips tersebut.' },
          { question: 'Mengapakah nisbah $T^2/r^3$ adalah malar bagi semua planet dalam Sistem Suria?', answer: 'Kerana semua planet mengorbit jasad pusat yang sama (Matahari), maka $\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM_{\\text{Matahari}}}$ adalah pemalar.' },
        ],
        fadedProblem: {
          prompt: 'Satelit A mengorbit Bumi pada jejari $r_A = 8000\\text{ km}$ dengan tempoh $T_A = 2.0\\text{ jam}$. Satelit B mengorbit Bumi pada jejari $r_B = 32000\\text{ km}$. Cari tempoh $T_B$ dalam jam.',
          step1GivenAndFormula: 'Diberi: $r_A = 8000\\text{ km}$, $T_A = 2.0\\text{ jam}$, $r_B = 32000\\text{ km}$. Rumus: $\\frac{T_B^2}{T_A^2} = \\frac{r_B^3}{r_A^3}$.',
          studentTask: 'Kira nilai $T_B$ (tip: $32000/8000 = 4$).',
          answerSteps: 'Langkah 3: $T_B^2 = (2.0)^2 \\times 4^3 = 4 \\times 64 = 256$ → Langkah 4: $T_B = 16.0\\text{ jam}$.',
        },
        transferQuestion: {
          question: 'Satu komet mempunyai orbit elips yang sangat bujur mengelilingi Matahari. Bandingkan tenaga kinetik komet ketika paling dekat dengan Matahari berbanding ketika paling jauh.',
          answer: 'Ketika paling dekat, halaju komet maksimum (Hukum Kepler II), maka tenaga kinetiknya ($\\frac{1}{2}mv^2$) adalah paling maksimum.',
        },
      },
    },
    {
      id: '3.3',
      chapterId: 'bab-3',
      code: '3.3',
      title: 'Satelit Buatan Manusia',
      pageRef: 'm.s. 103–109',
      part1Anchor: {
        phenomenon:
          'Satelit komunikasi MEASAT kelihatan pegun di langit Malaysia selama 24 jam sehari, sedangkan ISS melintasi langit setiap 90 minit — dan roket angkasa mesti melepasi halaju $11.2\\text{ km s}^{-1}$ untuk meninggalkan cengkaman graviti Bumi.',
        chapterConnection:
          'Aplikasi langsung 3.1 dan 3.2: menentukan kelajuan orbit stabil $v$, membezakan satelit geopegun vs bukan geopegun, dan mengira halaju lepas.',
      },
      part2SacredDefinitions: [
        {
          title: 'Satelit Geopegun',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Satelit geopegun berada dalam orbit khas di mana ' },
            { text: 'tempoh orbitnya ialah 24 jam', keyword: true },
            { text: ', mempunyai ' },
            { text: 'arah gerakan yang sama dengan arah putaran Bumi', keyword: true },
            { text: ', dan sentiasa berada di atas ' },
            { text: 'kedudukan geografi yang sama', keyword: true },
            { text: ' di permukaan Bumi.' },
          ],
        },
        {
          title: 'Halaju Lepas ($v$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Halaju lepas ialah ' },
            { text: 'halaju minimum yang perlu dicapai oleh suatu objek di permukaan Bumi', keyword: true },
            { text: ' untuk ' },
            { text: 'mengatasi daya graviti dan terlepas ke angkasa lepas', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'v = \\sqrt{\\frac{2GM}{r}}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Halaju Lepas Tidak Bergantung pada Jisim Objek',
            cause: 'Untuk terlepas ke infiniti, tenaga kinetik awal mesti mengimbangi tenaga keupayaan graviti ($\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$).',
            mechanism: 'Jisim objek $m$ wujud pada kedua-dua belah persamaan lalu termansuh secara automatik ($v = \\sqrt{2GM/R}$).',
            effect: 'Sebiji epal dan sebuah kapal angkasa besar memerlukan halaju lepas yang sama ($11.2\\text{ km s}^{-1}$) di permukaan Bumi, tetapi kapal angkasa berjisim besar memerlukan tenaga bahan api jauh lebih tinggi.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Satelit Geopegun vs Satelit Bukan Geopegun',
            headers: ['Ciri', 'Satelit Geopegun', 'Satelit Bukan Geopegun'],
            rows: [
              ['Tempoh orbit ($T$)', '$24\\text{ jam}$ (sama tempoh putaran Bumi)', 'Lebih singkat atau lebih lama daripada $24\\text{ jam}$'],
              ['Arah orbit', 'Sama arah dengan putaran Bumi (Barat ke Timur) di atas Khatulistiwa', 'Boleh melalui kutub atau condong pada sebarang sudut'],
              ['Kedudukan relatif', 'Sentiasa di atas lokasi geografi yang tetap', 'Berubah-ubah kedudukan relatif terhadap permukaan Bumi'],
              ['Ketinggian ($h$)', 'Tinggi tetap ($\\approx 35\\,786\\text{ km}$)', 'Biasanya lebih rendah (orbit rendah Bumi $\\approx 400\\text{–}20\\,200\\text{ km}$)'],
              ['Contoh kegunaan', 'Satelit komunikasi (MEASAT, Astro)', 'Pengimejan bumi, GPS, stesen angkasa (ISS, TiungSAT-1, RazakSAT, Pipit)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Laju Linear Orbit Satelit vs Halaju Lepas',
            latex: 'v_{\\text{orbit}} = \\sqrt{\\frac{GM}{R + h}}, \\qquad v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}',
            symbols: [
              { symbol: 'v_{\\text{orbit}}', meaning: 'Laju linear satelit mengekalkan orbit membulat', unit: '$\\text{m s}^{-1}$' },
              { symbol: 'v_{\\text{lepas}}', meaning: 'Halaju minimum untuk terlepas terus daripada medan graviti Bumi ($11.2 \\times 10^3\\text{ m s}^{-1}$)', unit: '$\\text{m s}^{-1}$' },
            ],
            appliesWhen: 'Satelit mengorbit dalam bulatan stabil (atau objek dilancar dari jejari $R$ untuk halaju lepas).',
            failsWhen: 'Jika laju satelit kurang daripada $v_{\\text{orbit}}$, ia berpilin jatuh; jika melebihi $v_{\\text{lepas}}$, ia meninggalkan Bumi ke angkasa lepas.',
          },
        ],
        diagrams: [
          {
            kind: 'satellite-orbits',
            title: 'Perbandingan Orbit Geopegun (MEASAT) vs Orbit Bukan Geopegun (ISS / GPS)',
            whatItShows: 'Orbit geopegun satah khatulistiwa pada jejari jauh dengan $T = 24\\text{ jam}$; orbit rendah/polar berputar laju merentasi pelbagai kawasan geografi.',
            axisOrRule: 'Semakin tinggi orbit ($r$ besar), semakin kecil laju linear satelit ($v = \\sqrt{GM/r}$).',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Laju Linear Satelit GPS pada $h = 20\\,200\\text{ km}$',
          problem: 'Sebuah satelit GPS mengorbit Bumi pada ketinggian $h = 20\\,200\\text{ km}$. Hitung laju linear satelit itu ($G = 6.67 \\times 10^{-11}$, $M = 5.97 \\times 10^{24}\\text{ kg}$, $R = 6.37 \\times 10^6\\text{ m}$).',
          given: ['$h = 20\\,200\\text{ km} = 2.02 \\times 10^7\\text{ m}$', '$r = R + h = 6.37 \\times 10^6 + 2.02 \\times 10^7 = 2.657 \\times 10^7\\text{ m}$'],
          formulaLatex: 'v = \\sqrt{\\frac{GM}{R + h}}',
          formulaWhy: 'Daya graviti membekalkan daya memusat bagi orbit membulat.',
          substituteLatex: 'v = \\sqrt{\\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{2.657 \\times 10^7}}',
          answer: '$v = 3.87 \\times 10^3\\text{ m s}^{-1}$ (atau $3.87\\text{ km s}^{-1}$)',
          trapAlert: 'Jangan tertinggal punca kuasa dua ($\\sqrt{\\dots}$) semasa menekan kalkulator!',
        },
      ],
      part5DecisionTable: {
        title: 'Manfaat & Implikasi Halaju Lepas Bumi Tinggi ($11.2\\text{ km s}^{-1}$)',
        rows: [
          { designChoice: 'Halaju lepas Bumi yang tinggi ($11.2\\text{ km s}^{-1}$)', scientificReason: 'Manfaat: Molekul udara ($O_2, N_2$) bergerak jauh lebih perlahan daripada $11.2\\text{ km s}^{-1}$, membolehkan Bumi mengekalkan lapisan atmosfera dan air untuk hidupan.' },
          { designChoice: 'Pelancaran roket berperingkat pelbagai (multi-stage rocket)', scientificReason: 'Implikasi halaju lepas tinggi: Memerlukan jumlah bahan api yang sangat besar; membuang tangki kosong mengurangkan jisim roket supaya halaju lepas mudah dicapai.' },
          { designChoice: 'Kedudukan orbit satelit komunikasi (MEASAT) di satah Khatulistiwa', scientificReason: 'Menjadikannya satelit geopegun ($T = 24\\text{ jam}$) supaya piring parabola di bumbung rumah tidak perlu diputar-putar sepanjang hari.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan tiga syarat satelit geopegun.', answer: 'Tempoh $24\\text{ jam}$, bergerak sama arah dengan putaran Bumi, dan berada tetap di atas kedudukan geografi sama di atas Khatulistiwa.' },
          { question: 'Adakah halaju lepas Bumi bergantung pada jisim roket? Jelaskan.', answer: 'Tidak; $v = \\sqrt{\\frac{2GM}{R}}$ hanya bergantung pada jisim planet $M$ dan jarak dari pusat $R$.' },
          { question: 'Nyatakan nilai halaju lepas dari permukaan Bumi.', answer: '$11.2\\text{ km s}^{-1}$ ($1.12 \\times 10^4\\text{ m s}^{-1}$).' },
        ],
        fadedProblem: {
          prompt: 'Bulan mempunyai jisim $7.35 \\times 10^{22}\\text{ kg}$ dan jejari $1.74 \\times 10^6\\text{ m}$. Hitung halaju lepas di permukaan Bulan.',
          step1GivenAndFormula: 'Diberi: $M = 7.35 \\times 10^{22}\\text{ kg}$, $R = 1.74 \\times 10^6\\text{ m}$, $G = 6.67 \\times 10^{-11}$. Rumus: $v = \\sqrt{\\frac{2GM}{R}}$.',
          studentTask: 'Kira nilai $v$ dan kaitkan mengapa Bulan tiada atmosfera.',
          answerSteps: 'Langkah 3: $v = \\sqrt{\\frac{2(6.67 \\times 10^{-11})(7.35 \\times 10^{22})}{1.74 \\times 10^6}} = \\sqrt{5.635 \\times 10^6}$ → Langkah 4: $v = 2.37 \\times 10^3\\text{ m s}^{-1}$ ($2.37\\text{ km s}^{-1}$).',
        },
        transferQuestion: {
          question: 'Kapal terbang komersial terbang pada ketinggian $10\\text{ km}$ tidak dapat kekal dalam ruang udara jika enjin dimatikan, sedangkan ISS pada $400\\text{ km}$ terus mengelilingi Bumi tanpa enjin. Mengapa?',
          answer: 'ISS berada di atas lapisan atmosfera padat (tiada geseran udara) dan bergerak pada halaju orbit tinggi ($\\approx 7.67\\text{ km s}^{-1}$) di mana daya graviti seimbang sebagai daya memusat.',
        },
      },
    },
  ],
};
