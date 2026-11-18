import type { ChapterContent } from '../types/textbook';

export const t5bab5: ChapterContent = {
  id: 't5-bab-5',
  formLevel: 5,
  number: 5,
  title: 'Elektronik',
  pageRange: 'm.s. 172–197',
  overview:
    'Memahami pembebasan elektron melalui pancaran termion dan halaju sinar katod (5.1), tindakan injap sehala diod semikonduktor dalam rektifikasi gelombang penuh & perataan kapasitor (5.2), serta fungsi transistor sebagai amplifier arus dan suis automatik terkawal LDR/termistor (5.3).',
  subtopics: [
    {
      id: 't5-5.1',
      chapterId: 't5-bab-5',
      code: '5.1',
      title: 'Elektron',
      pageRef: 'm.s. 174–180',
      part1Anchor: {
        phenomenon:
          'Memanaskan filamen logam dalam tiub vakum mendidihkan keluar elektron bebas yang kemudian dipecutkan pada kelajuan jutaan meter sesaat oleh voltan tinggi V.L.T. — membentuk alur sinar katod yang melukis imej pada skrin pendarfluor osiloskop.',
        chapterConnection:
          'Memperkenalkan pembebasan dan kawalan aliran elektron dalam vakum sebelum mengawal elektron dalam bahan pepejal semikonduktor (diod 5.2 dan transistor 5.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Pancaran Termion',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pancaran termion ialah proses ' },
            { text: 'pemancaran elektron bebas', keyword: true },
            { text: ' daripada ' },
            { text: 'permukaan logam yang dipanaskan', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Sinar Katod',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sinar katod ialah ' },
            { text: 'alur elektron yang bergerak dengan halaju tinggi', keyword: true },
            { text: ' dalam ruang vakum.' },
          ],
          equationLatex: 'eV = \\frac{1}{2}m v_{\\text{maks}}^2',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Tiub Sinar Katod Mesti Divakumkan & Katod Disalut Oksida Logam',
            cause: 'Elektron dipancarkan dari katod panas dan dipecut ke anod melalui beza keupayaan $V$.',
            mechanism: 'Jika wujud molekul udara, elektron akan berlanggar dengan molekul gas lalu kehilangan tenaga kinetik sebelum sampai ke anod atau skrin.',
            effect: 'Dalam tiub vakum, $100\\%$ tenaga keupayaan elektrik $eV$ ditukar menjadi tenaga kinetik maksimum $\\frac{1}{2}mv_{\\text{maks}}^2$.',
          },
        ],
        tables: [
          {
            title: 'Rumusan Pemerhatian Tiub Pemesongan & Tiub Palang Maltese (Jadual 5.1)',
            headers: ['Radas & Suis Dihidupkan', 'Pemerhatian', 'Kesimpulan Saintifik'],
            rows: [
              ['$S_1$ (filamen $6\\text{ V}$) sahaja', 'Bayang cahaya filamen sahaja pada skrin (tiada pendarfluor hijau penuh)', 'Cahaya dari filamen tungsten panas bergerak lurus tetapi tidak menyebabkan pendarfluor penuh seperti alur elektron'],
              ['$S_1$ + $S_2$ (V.L.T. anod)', 'Bayang-bayang tajam palang Maltese dikelilingi skrin hijau berpendarfluor', 'Sinar katod **bergerak lurus** serta membawa **tenaga kinetik dan momentum** untuk mengeksitasi skrin'],
              ['$S_1$ + $S_2$ + Medan Elektrik ($S_3$)', 'Alur sinar katod terpesong mengikut laluan parabola menghala ke **plat positif**', 'Sinar katod **bercas negatif** ($e = -1.6 \\times 10^{-19}\\text{ C}$) dan tertarik ke plat positif'],
              ['$S_1$ + $S_2$ + Magnet Bar didekatkan', 'Dua bayang-bayang berbeza terbentuk: bayang cahaya kekal, bayang sinar katod terpesong', 'Sinar katod dipesongkan oleh medan magnet; arah pemesongan mematuhi **Petua Tangan Kiri Fleming** (arus berlawanan arah gerakan elektron!)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Halaju Maksimum Elektron dalam Tiub Sinar Katod',
            latex: 'eV = \\frac{1}{2}m v_{\\text{maks}}^2 \\implies v_{\\text{maks}} = \\sqrt{\\frac{2eV}{m}}',
            symbols: [
              { symbol: 'e', meaning: 'Cas satu elektron ($1.6 \\times 10^{-19}$)', unit: '$\\text{C}$' },
              { symbol: 'V', meaning: 'Beza keupayaan V.L.T. antara katod dan anod', unit: '$\\text{V}$' },
              { symbol: 'm', meaning: 'Jisim satu elektron ($9.11 \\times 10^{-31}$)', unit: '$\\text{kg}$' },
              { symbol: 'v_{\\text{maks}}', meaning: 'Halaju maksimum elektron tiba di anod', unit: '$\\text{m s}^{-1}$' },
            ],
            appliesWhen: 'Ruang antara katod dan anod ialah vakum sempurna.',
            failsWhen: 'Perangkap besar Petua Tangan Kiri Fleming bagi elektron: jari tengah menunjuk arah arus konvensional — iaitu **BERTENTANGAN** dengan arah gerakan sinar katod/elektron!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-rectifier-transistor',
            title: 'Komponen Semikonduktor & Kawalan Elektron',
            whatItShows: 'Menunjukkan komponen elektronik dan gelombang output (pilih mod untuk mengkaji rektifikasi dan perataan arus elektron selepas tiub/bekalan a.u.).',
            axisOrRule: 'Ingat arah aliran arus konvensional sentiasa bertentangan dengan arah pergerakan sebenar elektron.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Tenaga Kinetik & Halaju Maksimum Sinar Katod pada $550\\text{ V}$',
          problem: 'Alur elektron dari katod dipecut ke anod melalui beza keupayaan $550\\text{ V}$ dalam ruang vakum. Hitung: (a) tenaga keupayaan elektrik bagi satu elektron, (b) tenaga kinetik diperoleh di anod, dan (c) halaju maksimum elektron di anod. [$e = 1.6 \\times 10^{-19}\\text{ C}, m = 9.11 \\times 10^{-31}\\text{ kg}$]',
          given: ['$V = 550\\text{ V}$', '$e = 1.6 \\times 10^{-19}\\text{ C}$', '$m = 9.11 \\times 10^{-31}\\text{ kg}$'],
          formulaLatex: 'E = eV = \\frac{1}{2}m v_{\\text{maks}}^2',
          formulaWhy: 'Di dalam vakum, tiada tenaga hilang akibat perlanggaran udara maka $E_k = eV$.',
          substituteLatex: 'E = (1.6 \\times 10^{-19})(550) = 8.8 \\times 10^{-17}\\text{ J}; \\quad v_{\\text{maks}} = \\sqrt{\\frac{2 \\times 8.8 \\times 10^{-17}}{9.11 \\times 10^{-31}}}',
          answer: '(a) $8.80 \\times 10^{-17}\\text{ J}$; (b) $8.80 \\times 10^{-17}\\text{ J}$; (c) $v_{\\text{maks}} = 1.39 \\times 10^7\\text{ m s}^{-1}$.',
          trapAlert: 'Jangan lupa mengambi punca kuasa dua ($\\sqrt{\\dots}$) pada langkah terakhir mencari $v_{\\text{maks}}$ dan pastikan jari tengah Tangan Kiri Fleming menghala **ke belakang** arah gerak elektron apabila mencari pemesongan magnet.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan takrifan pancaran termion secara verbatim.', answer: 'Proses pemancaran elektron bebas daripada permukaan logam yang dipanaskan.' },
          { question: 'Sekiranya elektron bergerak dari kiri ke kanan memasuki medan magnet menghala keluar daripada kertas, ke manakah ia terpesong?', answer: 'Arus konvensional ke kiri (telunjuk keluar kertas, tengah ke kiri) $\\implies$ ibu jari ke **atas**.' },
          { question: 'Mengapakah permukaan katod sering disalut oksida barium/strontium dan berada dalam vakum?', answer: 'Oksida logam membebaskan lebih banyak elektron pada suhu lebih rendah; vakum mengelakkan perlanggaran elektron dengan molekul udara.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah tiub sinar katod beroperasi dengan voltan pecutan $2.5\\text{ kV}$ antara katod dan anod.',
          step1GivenAndFormula: 'Diberi: $V = 2500\\text{ V}$, $e = 1.6 \\times 10^{-19}\\text{ C}$, $m = 9.11 \\times 10^{-31}\\text{ kg}$. Rumus: $v_{\\text{maks}} = \\sqrt{\\frac{2eV}{m}}$.',
          studentTask: 'Hitung tenaga kinetik elektron dan halaju maksimumnya apabila tiba di anod.',
          answerSteps: '$E_k = (1.6 \\times 10^{-19})(2500) = 4.0 \\times 10^{-16}\\text{ J}$; $v_{\\text{maks}} = \\sqrt{\\frac{2(4.0 \\times 10^{-16})}{9.11 \\times 10^{-31}}} = 2.96 \\times 10^7\\text{ m s}^{-1}$.',
        },
        transferQuestion: {
          question: 'Terangkan perbezaan pemerhatian pada bayang palang Maltese apabila magnet didekatkan kepada tiub: mengapa satu bayang kekal di tempat asal manakala satu lagi bergerak?',
          answer: 'Bayang cahaya daripada filamen panas tidak bercas, maka ia tidak terjejas oleh medan magnet dan kekal di posisi asal. Bayang sinar katod terbentuk daripada elektron bercas negatif yang mengalami daya magnetik apabila bergerak merentasi medan magnet, menyebabkan bayang elektron itu beralih arah.',
        },
      },
    },
    {
      id: 't5-5.2',
      chapterId: 't5-bab-5',
      code: '5.2',
      title: 'Diod Semikonduktor',
      pageRef: 'm.s. 181–186',
      part1Anchor: {
        phenomenon:
          'Soket dinding membekalkan arus ulang-alik $50\\text{ Hz}$ yang bertukar arah 100 kali sesaat, sedangkan telefon pintar dan komputer riba akan rosak jika menerima arus terbalik — diod bertindak sebagai injap sehala elektrik dan kapasitor meratakan denyutan menjadi arus terus yang mantap.',
        chapterConnection:
          'Menunjukkan bagaimana simpang semikonduktor p-n membenarkan arus dalam satu arah sahaja sebelum menggabungkan dua simpang menjadi transistor tiga terminal (5.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Diod Semikonduktor & Rektifikasi',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Diod semikonduktor ialah suatu komponen elektronik yang ' },
            { text: 'membenarkan arus elektrik mengalir dalam satu arah sahaja', keyword: true },
            { text: '. ' },
            { text: 'Rektifikasi', keyword: true },
            { text: ' ialah proses ' },
            { text: 'menukarkan arus ulang-alik (a.u.) kepada arus terus (a.t.)', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Pincang Depan vs Pincang Songsang pada Simpang p-n',
            cause: 'Semikonduktor jenis-p disambung ke punca $+$/$-$ dan jenis-n ke punca $-$/$+$ bateri.',
            mechanism: 'Dalam **pincang depan** ($p$ ke $+$, $n$ ke $-$), lapisan susutan mengecil/menipis kerana pembawa cas majoriti ditolak merentasi simpang $\\to$ rintangan rendah. Dalam **pincang songsang** ($p$ ke $-$, $n$ ke $+$), pembawa cas ditarik menjauhi simpang $\\to$ lapisan susutan melebar.',
            effect: 'Arus mengalir mudah semasa pincang depan, dan terhalang hampir sifar semasa pincang songsang.',
          },
          {
            title: 'Bagaimana Kapasitor Meratakan Output Rektifikasi',
            cause: 'Kapasitor $C$ disambungkan **secara selari** dengan perintang beban $R$ selepas litar rektifikasi.',
            mechanism: 'Semasa beza keupayaan output meningkat ke puncak, kapasitor **dicas** dan menyimpan tenaga elektrik. Apabila voltan output menurun menuju sifar, kapasitor **dinyahcas** melalui $R$ untuk menampung kekurangan arus.',
            effect: 'Voltan output pada skrin O.S.K. tidak jatuh ke sifar, menghasilkan arus terus yang jauh lebih rata dan mantap.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Rektifikasi Gelombang Separuh vs Gelombang Penuh (Tetimbang 4 Diod)',
            headers: ['Ciri', 'Rektifikasi Gelombang Separuh (1 Diod)', 'Rektifikasi Gelombang Penuh (4 Diod Tetimbang)'],
            rows: [
              ['Separuh kitar positif', 'Diod pincang depan $\\to$ arus mengalir melalui $R$', 'Pasangan diod $D_1, D_2$ pincang depan $\\to$ arus mengalir melalui $R$'],
              ['Separuh kitar negatif', 'Diod pincang songsang $\\to$ arus dihalang ($V = 0$)', 'Pasangan diod $D_3, D_4$ pincang depan $\\to$ arus mengalir melalui $R$ pada **arah yang sama**'],
              ['Bentuk gelombang O.S.K.', 'Separuh kitar sahaja wujud, jurang rata $0\\text{ V}$ berselang-seli', 'Semua puncak berada di atas paksi masa (tiada jurang sifar besar)'],
              ['Kesan jika 1 diod terbakar/terputus dalam tetimbang', '—', 'Litar bertukar menjadi **rektifikasi gelombang separuh** (hanya sebelah kitar mempunyai laluan)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Faktor Perataan Arus oleh Kapasitor',
            latex: '\\text{Kapasitans } C \\text{ lebih besar } \\implies \\text{ nyahcas lebih perlahan } \\implies \\text{ riak voltan lebih kecil (a.t. lebih rata)}',
            symbols: [
              { symbol: 'C', meaning: 'Kapasitans kapasitor (disambung selari dengan beban $R$)', unit: '$\\text{F}$ (farad)' },
              { symbol: 'R', meaning: 'Perintang beban merentasi terminal output O.S.K.', unit: '$\\Omega$' },
            ],
            appliesWhen: 'Kapasitor disambung **selari** dengan beban di output litar rektifier.',
            failsWhen: 'Jika kapasitor disambung **bersiri** dengan beban, ia menghalang terus arus terus (a.t.) daripada mengalir ke beban!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-rectifier-transistor',
            title: 'Simulasi Interaktif Gelombang Rektifikasi: Separuh, Penuh & Perata Kapasitor',
            whatItShows: 'Klik butang mod di bawah untuk melihat perbezaan gelombang output O.S.K. antara rektifier 1 diod (separuh), 4 diod tetimbang (penuh), dan kesan sambungan selari kapasitor perata.',
            axisOrRule: 'Dalam rektifikasi tetimbang, arus sentiasa memasuki terminal atas perintang beban $R$ dalam arah sama untuk kedua-dua kitar positif dan negatif.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menganalisis Kerosakan Diod dalam Litar Tetimbang 4 Diod',
          problem: 'Sebuah litar rektifier tetimbang 4 diod ($D_1, D_2$ aktif pada kitar positif; $D_3, D_4$ aktif pada kitar negatif) mengalami kerosakan diod $D_3$ yang terbakar (litar terbuka). Lakarkan dan terangkan perubahan bentuk gelombang output pada skrin O.S.K.',
          given: ['Pada kitar $+$: $D_1, D_2$ pincang depan', 'Pada kitar $-$: $D_3, D_4$ sepatutnya pincang depan, tetapi $D_3$ terputus'],
          formulaLatex: 'D_1, D_2 \\text{ OK} \\implies \\text{Kitar } + \\text{ lulus}; \\qquad D_3 \\text{ putus} \\implies \\text{Kitar } - \\text{ terhalang } (V = 0)',
          formulaWhy: 'Tanpa $D_3$, tiada laluan lengkap bagi kitar negatif merentasi perintang beban $R$.',
          substituteLatex: '\\text{Gelombang penuh (puncak berterusan)} \\longrightarrow \\text{Gelombang separuh (puncak berselang sela garis } 0\\text{ V)}',
          answer: 'Paparan O.S.K. berubah menjadi **rektifikasi gelombang separuh** (satu puncak diikuti selang rata pada $0\\text{ V}$, berulang).',
          trapAlert: 'Jangan kata litar tidak berfungsi langsung — separuh kitar lagi masih mempunyai laluan lengkap melalui $D_1$ dan $D_2$!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Komponen Penukaran Kuasa a.u. kepada a.t. Mantap',
        rows: [
          {
            designChoice: 'Menggunakan 4 diod dalam susunan tetimbang (rektifikasi gelombang penuh)',
            scientificReason: 'Kedua-dua separuh kitar positif dan negatif ditukarkan kepada arus terus searah, memanfaatkan tenaga input sepenuhnya tanpa selang terputus.',
          },
          {
            designChoice: 'Menyambung kapasitor berkapasitans besar secara selari dengan perintang beban $R$',
            scientificReason: 'Kapasitor dicas semasa voltan meningkat dan menyahcas semasa voltan menyusut untuk mengekalkan beza keupayaan merentasi $R$ supaya arus output rata.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan sambungan bateri kepada semikonduktor p dan n untuk keadaan pincang songsang.', answer: 'Semikonduktor p ke terminal negatif ($-$) dan semikonduktor n ke terminal positif ($+$).' },
          { question: 'Apakah fungsi kapasitor dalam litar rektifikasi gelombang penuh?', answer: 'Sebagai perata arus (menyimpan cas ketika voltan naik dan menyahcas ketika voltan menyusut supaya arus output tidak turun ke sifar).' },
          { question: 'Bagaimanakah susunan kapasitor berbanding perintang beban dalam litar perata arus?', answer: 'Disambungkan secara **selari** dengan perintang beban $R$.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah transformer membekalkan voltan a.u. puncak $6.0\\text{ V}$ pada frekuensi $50\\text{ Hz}$ kepada litar rektifier tetimbang 4 diod bersama kapasitor perata.',
          step1GivenAndFormula: 'Diberi: $f = 50\\text{ Hz}$, rektifikasi gelombang penuh. Rumus: $T = 1/f$.',
          studentTask: 'Hitung tempoh satu kitar a.u. input ($T$) dan selang masa antara dua puncak berturutan output gelombang penuh.',
          answerSteps: '$T = 1/50 = 0.02\\text{ s}$ ($20\\text{ ms}$); kerana kitar negatif turut terbalik ke atas, jarak masa antara dua puncak output ialah $T/2 = 0.01\\text{ s}$ ($10\\text{ ms}$).',
        },
        transferQuestion: {
          question: 'Dalam satu bekalan kuasa a.t., juruteknik mendapati output masih beriak terlalu besar walaupun rektifier 4 diod berfungsi baik. Cadangkan dua cara untuk meratakan lagi output tersebut.',
          answer: '(1) Sambungkan kapasitor selari dengan beban $R$ jika belum dipasang, atau (2) ganti kapasitor dengan kapasitor bernilai kapasitans $C$ yang lebih besar supaya kadar nyahcas lebih perlahan.',
        },
      },
    },
    {
      id: 't5-5.3',
      chapterId: 't5-bab-5',
      code: '5.3',
      title: 'Transistor',
      pageRef: 'm.s. 187–195',
      part1Anchor: {
        phenomenon:
          'Lampu jalan menyala sendiri apabila senja menjelang dan penggera kebakaran berbunyi serta-merta apabila suhu meningkat — tanpa sebarang suis mekanikal disentuh tangan, kerana arus tapak yang sangat kecil pada transistor menghidupkan arus pengumpul yang beratus kali lebih besar.',
        chapterConnection:
          'Menyatukan pembahagi voltan (Bab 3) dan simpang semikonduktor (5.2) bagi membina amplifier arus dan suis automatik elektronik moden.',
      },
      part2SacredDefinitions: [
        {
          title: 'Fungsi Terminal & Persamaan Arus Transistor',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Transistor mempunyai tiga terminal: ' },
            { text: 'Pengeluar ($E$)', keyword: true },
            { text: ' membekalkan pembawa cas kepada pengumpul; ' },
            { text: 'Tapak ($B$)', keyword: true },
            { text: ' ialah lapisan nipis di tengah untuk ' },
            { text: 'mengawal aliran pembawa cas', keyword: true },
            { text: ' dari $E$ ke $C$; ' },
            { text: 'Pengumpul ($C$)', keyword: true },
            { text: ' menerima pembawa cas daripada pengeluar. Arus tapak $I_B$ yang kecil mengawal arus pengumpul $I_C$ yang besar.' },
          ],
          equationLatex: 'I_E = I_B + I_C, \\qquad \\beta = \\frac{I_C}{I_B}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Suis Kawalan Cahaya (LDR di Bahagian Bawah Pembahagi Voltan)',
            cause: 'Hari bertukar gelap pada waktu malam.',
            mechanism: 'Rintangan Perintang Peka Cahaya ($R_{\\text{LDR}}$) meningkat sangat tinggi dalam gelap. Mengikut rumus pembahagi voltan $V_{\\text{tapak}} = \\frac{R_{\\text{LDR}}}{R_1 + R_{\\text{LDR}}} V_{\\text{in}}$, beza keupayaan merentasi LDR meningkat sehingga $V_{BE} \\ge V_{\\text{min}}$ ($0.7\\text{ V}$ bagi silikon).',
            effect: 'Arus tapak $I_B$ mula mengalir, menghidupkan litar pengumpul dengan arus $I_C$ yang besar lalu menyalakan lampu jalan secara automatik.',
          },
          {
            title: 'Mekanisme Suis Penggera Kawalan Suhu (Termistor di Atas, Perintang $R$ di Bawah)',
            cause: 'Suhu persekitaran meningkat apabila berlaku kebakaran.',
            mechanism: 'Rintangan termistor $R_T$ **menurun** secara mendadak apabila panas. Voltan merentasi termistor jatuh, menyebabkan bahagian voltan merentasi perintang $R$ di bawah pembahagi meningkat ($V_R = \\frac{R}{R_T + R}V_{\\text{in}}$) melebihi voltan minimum $V_{BE}$.',
            effect: 'Arus tapak $I_B$ mengalir menghidupkan litar pengumpul dan membunyikan siren/loceng penggera.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Transistor npn vs Transistor pnp & Kedudukan Perintang Peka',
            headers: ['Ciri', 'Transistor npn', 'Transistor pnp'],
            rows: [
              ['Arah anak panah pada terminal E', 'Menunjuk **KELUAR** ($B \\to E$)', 'Menunjuk **MASUK** ($E \\to B$)'],
              ['Kekutuban bateri litar pengumpul', 'Pengumpul $C$ ke $+$ bateri, Pengeluar $E$ ke $-$ bateri', 'Kekutuban bateri dan arah arus $I_B, I_C, I_E$ disongsangkan'],
              ['Faktor penggandaan amplifier ($\\beta$)', '$\\beta = \\frac{I_C}{I_B}$ ($I_B = 0 \\implies I_C = 0$; $I_B \\ll I_C < I_E$)', 'Voltan hidup minimum $V_{BE}$: Silikon $= 0.7\\text{ V}$, Germanium $= 0.3\\text{ V}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembahagi Voltan Suis Transistor & Faktor Penggandaan',
            latex: 'V_{\\text{out}} = \\left(\\frac{R_2}{R_1 + R_2}\\right) V_{\\text{in}}, \\qquad \\beta = \\frac{I_C}{I_B}, \\qquad I_E = I_B + I_C',
            symbols: [
              { symbol: 'V_{\\text{out}}', meaning: 'Voltan tapak merentasi komponen bawah ($R_2$)', unit: '$\\text{V}$' },
              { symbol: 'R_1, R_2', meaning: 'Perintang atas & komponen bawah pembahagi voltan', unit: '$\\Omega$' },
              { symbol: '\\beta', meaning: 'Faktor penggandaan arus (kecerunan graf $I_C$ melawan $I_B$)', unit: 'tiada unit' },
            ],
            appliesWhen: 'Komponen $R_2$ disambung selari dengan simpang tapak-pengeluar ($B$–$E$) transistor.',
            failsWhen: 'Perangkap besar! Perintang **di bawah ($R_2$)** menerima voltan yang meningkat apabila rintangannya **meningkat**. Jadi: untuk lampu menyala dalam **GELAP**, letak LDR di **bawah**; untuk penggera berbunyi bila **PANAS** ($R_T$ turun), letak Termistor di **atas** (dan perintang tetap di bawah)!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-rectifier-transistor',
            title: 'Litar Transistor npn sebagai Amplifier Arus & Suis Pembahagi Voltan',
            whatItShows: 'Menunjukkan komponen pembahagi voltan $R_1, R_2$ mengawal voltan tapak $V_{BE}$ transistor serta graf linear $I_C$ melawan $I_B$ dengan kecerunan $\\beta$.',
            axisOrRule: 'Selagi $V_{BE} < 0.7\\text{ V}$ (silikon), $I_B = 0$ dan $I_C = 0$ (litar pengumpul mati); perintang tapak $R_B$ berintangan tinggi diperlukan untuk mengehadkan $I_B$ agar transistor tidak terbakar.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Faktor Penggandaan Amplifier daripada Graf $I_C$-$I_B$',
          problem: 'Graf garis lurus melalui asalan $I_C$ melawan $I_B$ bagi satu transistor mencatatkan $I_C = 78.0\\text{ mA}$ apabila $I_B = 0.5\\text{ mA}$. Hitung faktor penggandaan $\\beta$ dan nyatakan maksudnya.',
          given: ['$I_C = 78.0\\text{ mA}$', '$I_B = 0.5\\text{ mA}$', 'Garis lurus melalui $(0,0)$'],
          formulaLatex: '\\beta = \\frac{I_C}{I_B}',
          formulaWhy: 'Kecerunan graf $I_C$ melawan $I_B$ memberi faktor penggandaan arus $\\beta$.',
          substituteLatex: '\\beta = \\frac{78.0 - 0}{0.5 - 0}',
          answer: '$\\beta = 156$ (perubahan $1\\text{ mA}$ dalam $I_B$ menghasilkan perubahan $156\\text{ mA}$ dalam $I_C$).',
          trapAlert: 'Pastikan unit $I_C$ dan $I_B$ adalah SAMA (misalnya kedua-duanya $\\text{mA}$ atau kedua-duanya $\\text{A}$) sebelum membahagi!',
        },
        {
          title: 'Contoh 2: Mengira Voltan Hidup Suis Automatik Pembahagi Voltan',
          problem: 'Sebuah litar pengesan cahaya menggunakan bekalan $6.0\\text{ V}$, perintang tetap atas $R_1 = 10\\text{ k}\\Omega$, dan LDR di bawah. Pada waktu senja, rintangan LDR meningkat menjadi $2.0\\text{ k}\\Omega$. Adakah transistor silikon ($V_{BE,\\text{min}} = 0.7\\text{ V}$) akan dihidupkan?',
          given: ['$V_{\\text{in}} = 6.0\\text{ V}$', '$R_1 = 10\\text{ k}\\Omega$', '$R_2 = R_{\\text{LDR}} = 2.0\\text{ k}\\Omega$'],
          formulaLatex: 'V_{\\text{out}} = \\left(\\frac{R_2}{R_1 + R_2}\\right) V_{\\text{in}}',
          formulaWhy: 'Voltan pada tapak ialah bahagian voltan yang dibahagikan kepada perintang bawah $R_2$.',
          substituteLatex: 'V_{\\text{out}} = \\left(\\frac{2.0}{10 + 2.0}\\right) \\times 6.0 = \\frac{12.0}{12.0}',
          answer: '$V_{\\text{out}} = 1.0\\text{ V} > 0.7\\text{ V}$ $\\implies$ **YA, transistor dihidupkan**!',
          trapAlert: 'Sentiasa letak rintangan komponen yang merentasi tapak-pengeluar ($B$–$E$) sebagai pengangka ($R_2$), bukan $R_1$.',
        },
      ],
      part5DecisionTable: {
        title: 'Reka Bentuk Litar Suis Automatik Bertransistor (Kertas 2 SPM)',
        rows: [
          {
            designChoice: 'Menyambung perintang tapak $R_B$ berintangan tinggi secara bersiri dengan tapak transistor',
            scientificReason: 'Mengehadkan arus tapak $I_B$ supaya tidak terlalu besar dan mengelakkan transistor daripada menjadi terlalu panas dan terbakar.',
          },
          {
            designChoice: 'Meletakkan LDR di bahagian bawah pembahagi voltan untuk lampu malam automatik',
            scientificReason: 'Apabila gelap, rintangan LDR meningkat tinggi lalu meningkatkan voltan tapak $V_{\\text{out}} \\ge 0.7\\text{ V}$, membolehkan arus tapak mengalir dan menghidupkan lampu.',
          },
          {
            designChoice: 'Meletakkan termistor di bahagian atas & perintang tetap di bawah untuk penggera kebakaran, bersama geganti (relay)',
            scientificReason: 'Apabila panas, rintangan termistor menurun mendadak menyebabkan voltan merentasi perintang bawah meningkat melebihi $0.7\\text{ V}$; geganti membolehkan litar pengumpul arus rendah menghidupkan siren berkuasa tinggi $240\\text{ V}$ dengan selamat.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan voltan tapak-pengeluar minimum ($V_{BE}$) untuk menghidupkan transistor silikon dan germanium.', answer: 'Silikon: $0.7\\text{ V}$; Germanium: $0.3\\text{ V}$.' },
          { question: 'Antara $I_B, I_C, I_E$, susunkan mengikut tertib menaik magnitud arus.', answer: '$I_B < I_C < I_E$ (dengan $I_E = I_B + I_C$).' },
          { question: 'Mengapakah mentol dalam litar pengumpul ($L_2$) menyala jauh lebih terang berbanding mentol di litar tapak ($L_1$)?', answer: 'Kerana arus pengumpul $I_C$ digandakan jauh lebih besar daripada arus tapak $I_B$ yang sangat kecil.' },
        ],
        fadedProblem: {
          prompt: 'Satu transistor npn mempunyai arus tapak $I_B = 20\\ \\mu\\text{A}$ dan faktor penggandaan $\\beta = 200$.',
          step1GivenAndFormula: 'Diberi: $I_B = 20\\ \\mu\\text{A} = 0.020\\text{ mA}$, $\\beta = 200$. Rumus: $I_C = \\beta I_B$ dan $I_E = I_B + I_C$.',
          studentTask: 'Hitung arus pengumpul $I_C$ dan arus pengeluar $I_E$ dalam unit $\\text{mA}$.',
          answerSteps: '$I_C = 200 \\times 0.020 = 4.00\\text{ mA}$; $I_E = 0.020 + 4.00 = 4.02\\text{ mA}$.',
        },
        transferQuestion: {
          question: 'Dalam satu litar pengesan cahaya malam, lampu menyala pada waktu siang dan padam pada waktu malam (songsang daripada sepatutnya). Apakah kesilapan susunan dalam pembahagi voltan itu dan bagaimana membaikinya?',
          answer: 'LDR telah diletakkan di bahagian atas pembahagi voltan (dan perintang tetap di bawah). Untuk membaikinya, tukar kedudukan supaya **LDR berada di bahagian bawah** merentasi tapak-pengeluar dan perintang tetap di bahagian atas.',
        },
      },
    },
  ],
};
