import type { ChapterContent } from '../types/textbook';

export const bab4: ChapterContent = {
  id: 'bab-4',
  formLevel: 4,
  number: 4,
  title: 'Haba',
  pageRange: 'm.s. 118–168',
  overview:
    'Memahami aliran haba dan tenaga dalaman jirim: keseimbangan terma, penentukuran termometer, muatan haba tentu, haba pendam tentu perubahan fasa, serta tiga hukum gas.',
  subtopics: [
    {
      id: '4.1',
      chapterId: 'bab-4',
      code: '4.1',
      title: 'Keseimbangan Terma',
      pageRef: 'm.s. 120–124',
      part1Anchor: {
        phenomenon:
          'Secawan kopi panas menjadi suam dan minuman panas yang diletak ais menyejuk hingga mencapai suhu bilik — kerana haba sentiasa mengalir secara bersih daripada panas ke sejuk sehingga seimbang.',
        chapterConnection:
          'Menjelaskan prinsip kerja semua termometer dan syarat utama sebelum suhu atau muatan haba boleh diukur dengan tepat.',
      },
      part2SacredDefinitions: [
        {
          title: 'Keseimbangan Terma',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Dua objek berada dalam ' },
            { text: 'keseimbangan terma', keyword: true },
            { text: ' apabila ' },
            { text: 'kadar pemindahan haba bersih antara kedua-dua objek adalah sifar', keyword: true },
            { text: ' dan kedua-duanya mempunyai ' },
            { text: 'suhu yang sama', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Termometer Klinik Mengukur Suhu Badan',
            cause: 'Termometer bersuhu bilik diletakkan di bawah lidah pesakit yang bersuhu lebih tinggi ($\\approx 37^\\circ\\text{C}$).',
            mechanism: 'Haba bersih mengalir dari badan pesakit ke bebuli merkuri sehingga kedua-duanya mencapai keseimbangan terma; merkuri mengembang naik di tiub kapilari (dan pencerutan menghalang merkuri turun apabila dikeluarkan).',
            effect: 'Bacaan termometer menunjukkan suhu sebenar badan apabila keseimbangan terma tercapai.',
          },
        ],
        tables: [
          {
            title: 'Penentu Ukuran Termometer Cecair-dalam-Kaca (Tanpa Skala)',
            headers: ['Titik Tetap', 'Keadaan Piawai', 'Panjang Turus Merkuri'],
            rows: [
              ['Titik tetap bawah ($0^\\circ\\text{C}$)', 'Ais tulen sedang melebur pada tekanan atmosfera piawai', '$L_0$'],
              ['Titik tetap atas ($100^\\circ\\text{C}$)', 'Stim di atas air tulen sedang mendidih pada tekanan atmosfera piawai', '$L_{100}$'],
              ['Suhu tidak diketahui ($\\theta$)', 'Termometer direndam dalam cecair diuji', '$L_\\theta$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Penentu Ukuran Termometer',
            latex: '\\theta = \\frac{L_\\theta - L_0}{L_{100} - L_0} \\times 100^\\circ\\text{C}',
            symbols: [
              { symbol: 'L_0', meaning: 'Panjang turus merkuri pada $0^\\circ\\text{C}$', unit: '$\\text{cm}$' },
              { symbol: 'L_{100}', meaning: 'Panjang turus merkuri pada $100^\\circ\\text{C}$', unit: '$\\text{cm}$' },
              { symbol: 'L_\\theta', meaning: 'Panjang turus merkuri pada suhu $\\theta$', unit: '$\\text{cm}$' },
            ],
            appliesWhen: 'Sifat termometrik (panjang turus merkuri/alkohol) berubah secara linear dengan suhu.',
            failsWhen: 'Menggunakan hanya $L_\\theta / L_{100}$ jika $L_0 \\neq 0$ (panjang diukur dari bebuli, bukan dari tanda sifar)!',
          },
        ],
        diagrams: [
          {
            kind: 'thermal-equilibrium',
            title: 'Aliran Haba Bersih Menuju Keseimbangan Terma',
            whatItShows: 'Objek panas $P$ memindahkan lebih banyak haba ke objek sejuk $Q$ berbanding sebaliknya sehingga $T_P = T_Q$ (kadar pemindahan bersih $= 0$, walaupun pertukaran mikroskopik masih berlaku secara sama kadar).',
            axisOrRule: 'Keseimbangan terma $\\neq$ tiada pemindahan haba; maksud tepat ialah kadar pemindahan haba BERSIH $= 0$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Suhu Menggunakan Termometer Tanpa Skala',
          problem: 'Panjang turus merkuri bagi satu termometer ialah $4.0\\text{ cm}$ pada $0^\\circ\\text{C}$ dan $24.0\\text{ cm}$ pada $100^\\circ\\text{C}$. Berapakah suhu cecair apabila panjang turus merkuri ialah $16.0\\text{ cm}$?',
          given: ['$L_0 = 4.0\\text{ cm}$', '$L_{100} = 24.0\\text{ cm}$', '$L_\\theta = 16.0\\text{ cm}$'],
          formulaLatex: '\\theta = \\frac{L_\\theta - L_0}{L_{100} - L_0} \\times 100^\\circ\\text{C}',
          formulaWhy: 'Panjang turus berubah secara seragam antara dua titik tetap $0^\\circ\\text{C}$ dan $100^\\circ\\text{C}$.',
          substituteLatex: '\\theta = \\frac{16.0 - 4.0}{24.0 - 4.0} \\times 100^\\circ\\text{C} = \\frac{12.0}{20.0} \\times 100',
          answer: '$\\theta = 60.0^\\circ\\text{C}$',
          trapAlert: 'Sentiasa tolak $L_0$ pada kedua-dua pengangka dan penyebut!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Keseimbangan Terma (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Bebuli termometer diperbuat daripada kaca berdinding nipis', scientificReason: 'Mempercepatkan pengaliran haba supaya termometer cepat mencapai keseimbangan terma dengan bahan yang diukur.' },
          { designChoice: 'Tiub kapilari termometer sangat sempit', scientificReason: 'Meningkatkan kepekaan termometer kerana pengembangan isi padu merkuri yang kecil menghasilkan kenaikan panjang yang besar.' },
          { designChoice: 'Memasukkan makanan panas ke dalam peti sejuk hanya selepas sejuk', scientificReason: 'Jika diletakkan panas, pemindahan haba bersih besar berlaku kepada udara peti sejuk, menaikkan suhu dalam peti sejuk dan membazirkan tenaga elektrik pemampat.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua syarat dua objek dikatakan berada dalam keseimbangan terma.', answer: 'Suhu kedua-dua objek adalah sama, dan kadar pemindahan haba bersih antara kedua-duanya adalah sifar.' },
          { question: 'Mengapakah termometer diletakkan di dalam mulut selama beberapa saat sebelum dibaca?', answer: 'Supaya merkuri dan badan mencapai keseimbangan terma.' },
          { question: 'Apakah dua titik tetap untuk menentukur skala Celsius?', answer: 'Takat lebur ais tulen ($0^\\circ\\text{C}$) dan takat didih air tulen ($100^\\circ\\text{C}$) pada $1\\text{ atm}$.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah termometer mempunyai panjang turus alkohol $5.0\\text{ cm}$ dalam ais melebur dan $25.0\\text{ cm}$ dalam stim mendidih. Cari panjang turus alkohol pada suhu bilik $25^\\circ\\text{C}$.',
          step1GivenAndFormula: 'Diberi: $L_0 = 5.0\\text{ cm}$, $L_{100} = 25.0\\text{ cm}$, $\\theta = 25^\\circ\\text{C}$. Rumus: $\\frac{25}{100} = \\frac{L_\\theta - 5.0}{25.0 - 5.0}$.',
          studentTask: 'Selesaikan untuk mencari $L_\\theta$.',
          answerSteps: 'Langkah 3: $0.25 = \\frac{L_\\theta - 5.0}{20.0} \\implies L_\\theta - 5.0 = 5.0$ → Langkah 4: $L_\\theta = 10.0\\text{ cm}$.',
        },
        transferQuestion: {
          question: 'Seketul ais $0^\\circ\\text{C}$ dimasukkan ke dalam segelas air teh panas $80^\\circ\\text{C}$. Terangkan proses aliran haba sehingga minuman mencapai keseimbangan terma.',
          answer: 'Haba mengalir dari teh panas ke ais. Ais menyerap haba untuk melebur dan menjadi air sejuk $0^\\circ\\text{C}$, kemudian air sejuk dan teh bertukar haba sehingga keseluruhan campuran mencapai satu suhu akhir sepunya (kadar aliran haba bersih $= 0$).',
        },
      },
    },
    {
      id: '4.2',
      chapterId: 'bab-4',
      code: '4.2',
      title: 'Muatan Haba Tentu',
      pageRef: 'm.s. 125–136',
      part1Anchor: {
        phenomenon:
          'Pasir di pantai memanas dan menyejuk dengan pantas manakala air laut kekal sederhana suhunya — kerana bahan berbeza memerlukan jumlah tenaga haba yang jauh berbeza untuk menaikkan suhu $1^\\circ\\text{C}$.',
        chapterConnection:
          'Menjelaskan bayu laut, bayu darat, radiator air kereta, dan pengiraan pemindahan haba tanpa perubahan fasa ($Q = mc\\Delta\\theta$).',
      },
      part2SacredDefinitions: [
        {
          title: 'Muatan Haba ($C$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Muatan haba suatu objek ialah ' },
            { text: 'kuantiti haba yang diperlukan untuk menaikkan suhu objek itu sebanyak $1^\\circ\\text{C}$', keyword: true },
            { text: ' (atau $1\\text{ K}$).' },
          ],
          equationLatex: 'C = \\frac{Q}{\\Delta\\theta}',
        },
        {
          title: 'Muatan Haba Tentu ($c$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Muatan haba tentu suatu bahan ialah ' },
            { text: 'kuantiti haba yang diperlukan untuk menaikkan suhu $1\\text{ kg}$ jisim bahan itu sebanyak $1^\\circ\\text{C}$', keyword: true },
            { text: ' (atau $1\\text{ K}$).' },
          ],
          equationLatex: 'c = \\frac{Q}{m\\Delta\\theta}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Bayu Laut (Siang) vs Bayu Darat (Malam)',
            cause: 'Muatan haba tentu daratan (tanah/pasir, $c$ rendah) jauh lebih kecil daripada air laut ($c = 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$).',
            mechanism: 'Waktu siang: darat panas lebih cepat $\\to$ udara panas di darat naik (tekanan rendah) $\\to$ udara sejuk dari laut bergerak ke darat. Waktu malam: darat sejuk lebih cepat, laut masih panas $\\to$ udara naik di laut $\\to$ udara dari darat bergerak ke laut.',
            effect: 'Angin bertiup dari laut ke darat pada waktu siang (Bayu Laut) dan dari darat ke laut pada waktu malam (Bayu Darat).',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Muatan Haba ($C$) vs Muatan Haba Tentu ($c$)',
            headers: ['Aspek', 'Muatan Haba ($C$)', 'Muatan Haba Tentu ($c$)'],
            rows: [
              ['Rumus & Unit SI', '$C = \\frac{Q}{\\Delta\\theta}$ ($\\text{J }^\\circ\\text{C}^{-1}$ atau $\\text{J K}^{-1}$)', '$c = \\frac{Q}{m\\Delta\\theta}$ ($\\text{J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$ atau $\\text{J kg}^{-1}\\text{ K}^{-1}$)'],
              ['Bergantung pada jisim?', 'Ya ($C = mc$)', 'Tidak (sifat tetap bagi jenis bahan tulen tertentu)'],
              ['Contoh nilai', 'Bergantung pada saiz bongkah', 'Air $= 4200$, Aluminium $= 900$, Kuprum $= 390$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tenaga Haba dan Kuasa Pemanas Elektrik',
            latex: 'Q = mc\\Delta\\theta, \\qquad Pt = mc(\\theta_2 - \\theta_1)',
            symbols: [
              { symbol: 'P', meaning: 'Kuasa pemanas rendam', unit: '$\\text{W}$ ($\\text{J s}^{-1}$)' },
              { symbol: 't', meaning: 'Masa pemanasan (mesti dalam saat!)', unit: '$\\text{s}$' },
              { symbol: 'm', meaning: 'Jisim bahan', unit: '$\\text{kg}$' },
              { symbol: 'c', meaning: 'Muatan haba tentu', unit: '$\\text{J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$' },
              { symbol: '\\Delta\\theta', meaning: 'Perubahan suhu ($\\theta_2 - \\theta_1$, sama nilai dalam $^\\circ\\text{C}$ atau $\\text{K}$)', unit: '$^\\circ\\text{C}$ atau $\\text{K}$' },
            ],
            appliesWhen: 'Tiada kehilangan haba ke persekitaran dan tiada perubahan fasa (lebur/didih) berlaku.',
            failsWhen: 'Dalam eksperimen sebenar, $c_{\\text{eksperimen}}$ biasanya lebih besar daripada nilai teori kerana sebahagian haba hilang ke persekitaran.',
          },
        ],
        diagrams: [
          {
            kind: 'land-sea-breeze',
            title: 'Kitaran Perolakan Bayu Laut (Siang) dan Bayu Darat (Malam)',
            whatItShows: 'Perbezaan $c$ antara daratan dan lautan memacu arus perolakan berlawanan arah antara siang dengan malam.',
            axisOrRule: '$c_{\\text{darat}} < c_{\\text{laut}} \\implies$ darat cepat panas (siang) & cepat sejuk (malam).',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 4.1 & 4.2',
            title: 'Menentukan Muatan Haba Tentu Air dan Aluminium',
            aim: 'Menentukan muatan haba tentu air dan bongkah aluminium menggunakan pemanas rendam.',
            inference: 'Bahan berlainan mempunyai muatan haba tentu yang berlainan.',
            hypothesis: 'Muatan haba tentu air adalah lebih besar daripada muatan haba tentu aluminium ($c_{\\text{air}} > c_{\\text{Al}}$).',
            variables: {
              manipulated: 'Jenis bahan (air vs aluminium)',
              responding: 'Nilai muatan haba tentu, $c$ (melalui kenaikan suhu $\\Delta\\theta$)',
              fixed: 'Kuasa pemanas $P$ dan masa pemanasan $t$',
            },
            setupLogic: 'Balut bikar/bongkah aluminium dengan kain felt/polistirena (mengurangkan kehilangan haba) dan letak sedikit minyak di lubang bongkah untuk sentuhan terma baik. Rekod $\\theta_{\\text{awal}}$ dan $\\theta_{\\text{akhir}}$ tertinggi selepas suis dimatikan.',
            expectedResult: '$c_{\\text{air}} \\approx 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$, $c_{\\text{Al}} \\approx 900\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$ (nilai makmal sedikit lebih tinggi kerana kehilangan haba).',
            conclusion: 'Air mempunyai muatan haba tentu yang jauh lebih tinggi daripada aluminium.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Memanaskan Bongkah Aluminium dengan Pemanas Rendam',
          problem: 'Sebuah pemanas rendam $50\\text{ W}$ digunakan untuk memanaskan bongkah aluminium $1.0\\text{ kg}$ selama $5\\text{ minit}$. Jika suhu meningkat daripada $28^\\circ\\text{C}$ ke $43^\\circ\\text{C}$, hitung muatan haba tentu aluminium.',
          given: ['$P = 50\\text{ W}$', '$t = 5\\text{ min} = 5 \\times 60 = 300\\text{ s}$', '$m = 1.0\\text{ kg}$', '$\\Delta\\theta = 43 - 28 = 15^\\circ\\text{C}$'],
          formulaLatex: 'Pt = mc\\Delta\\theta \\implies c = \\frac{Pt}{m\\Delta\\theta}',
          formulaWhy: 'Tenaga elektrik dibekalkan sama dengan tenaga haba yang diserap bongkah.',
          substituteLatex: 'c = \\frac{(50)(300)}{(1.0)(15)} = \\frac{15000}{15}',
          answer: '$c = 1000\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$',
          trapAlert: 'Jangan lupa menukar masa daripada minit kepada SAAT ($5 \\times 60 = 300\\text{ s}$)!',
        },
        {
          title: 'Contoh 2: Kaedah Campuran (Haba Hilang = Haba Diterima)',
          problem: '$0.20\\text{ kg}$ air panas pada $80^\\circ\\text{C}$ dicampurkan dengan $0.30\\text{ kg}$ air sejuk pada $20^\\circ\\text{C}$. Hitung suhu akhir campuran $\\theta$ ($c_{\\text{air}} = 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$).',
          given: ['$m_1 = 0.20\\text{ kg}, \\theta_1 = 80^\\circ\\text{C}$', '$m_2 = 0.30\\text{ kg}, \\theta_2 = 20^\\circ\\text{C}$'],
          formulaLatex: 'm_1 c (80 - \\theta) = m_2 c (\\theta - 20)',
          formulaWhy: 'Haba yang dibebaskan oleh air panas sama dengan haba yang diserap oleh air sejuk ($c$ sama, termansuh).',
          substituteLatex: '0.20(80 - \\theta) = 0.30(\\theta - 20) \\implies 16 - 0.2\\theta = 0.3\\theta - 6',
          answer: '$0.5\\theta = 22 \\implies \\theta = 44.0^\\circ\\text{C}$',
          trapAlert: 'Sentiasa tulis $(T_{\\text{tinggi}} - T_{\\text{rendah}})$ di kedua-dua belah supaya kedua-duanya bernilai positif!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Bahan Berdasarkan Muatan Haba Tentu (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Air digunakan sebagai agen penyejuk dalam radiator enjin kereta', scientificReason: 'Air mempunyai muatan haba tentu yang sangat tinggi ($4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$), membolehkannya menyerap sejumlah besar haba dengan kenaikan suhu yang kecil.' },
          { designChoice: 'Badan kuali diperbuat daripada logam ($c$ rendah), pemegang daripada plastik ($c$ tinggi)', scientificReason: 'Logam ($c$ rendah) cepat panas dan cepat masak makanan; plastik ($c$ tinggi dan penebat haba) lambat panas supaya selamat dipegang.' },
          { designChoice: 'Periuk tanah liat mengekalkan makanan panas lebih lama selepas api dipadam', scientificReason: 'Tanah liat mempunyai muatan haba tentu tinggi dan konduksi haba rendah, maka ia menyimpan haba dan menyejuk dengan perlahan.' },
          { designChoice: 'Dinding berpenebat konkrit & polistirena pada Bangunan Berlian / rumah kayu tradisional', scientificReason: 'Membantutkan pemindahan haba dari luar ke dalam (bangunan kekal sejuk tanpa beban penyaman udara berlebihan).' },
          { designChoice: 'Perisai haba kapsul angkasa daripada jubin seramik $c$ tinggi & takat lebur tinggi', scientificReason: 'Menyerap sejumlah besar haba geseran apabila memasuki atmosfera dengan peningkatan suhu kecil serta tidak mudah melebur.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah maksud muatan haba tentu kuprum $= 390\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$?', answer: '$390\\text{ J}$ tenaga haba diperlukan untuk menaikkan suhu $1\\text{ kg}$ kuprum sebanyak $1^\\circ\\text{C}$.' },
          { question: 'Nyatakan dua langkah mengurangkan ralat kehilangan haba dalam Eksperimen 4.2.', answer: 'Membalut bongkah dengan penebat (felt/polistirena), meletakkan alas penebat di bawahnya, dan meletakkan sedikit minyak di lubang termometer.' },
          { question: 'Mengapakah pasir terasa lebih panas daripada air laut pada tengah hari?', answer: 'Muatan haba tentu pasir jauh lebih rendah daripada air, maka dengan haba matahari yang sama suhunya naik jauh lebih tinggi.' },
        ],
        fadedProblem: {
          prompt: 'Berapakah tenaga haba diperlukan untuk memanaskan $2.5\\text{ kg}$ air dari $25^\\circ\\text{C}$ hingga mendidih pada $100^\\circ\\text{C}$ ($c_{\\text{air}} = 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$)?',
          step1GivenAndFormula: 'Diberi: $m = 2.5\\text{ kg}$, $\\Delta\\theta = 100 - 25 = 75^\\circ\\text{C}$, $c = 4200$. Rumus: $Q = mc\\Delta\\theta$.',
          studentTask: 'Kira $Q$ dalam joule atau kilojoule.',
          answerSteps: 'Langkah 3: $Q = (2.5)(4200)(75)$ → Langkah 4: $Q = 787\\,500\\text{ J} = 787.5\\text{ kJ}$.',
        },
        transferQuestion: {
          question: 'Mengapakah suhu akhir maksimum bongkah aluminium dicatat selepas pemanas rendam dimatikan, bukan sejurus suis ditutup?',
          answer: 'Kerana haba masih mengambil masa untuk mengalir dari pemanas rendam ke seluruh bongkah dan ke bebuli termometer sehingga keseimbangan terma dicapai.',
        },
      },
    },
    {
      id: '4.3',
      chapterId: 'bab-4',
      code: '4.3',
      title: 'Haba Pendam Tentu',
      pageRef: 'm.s. 137–147',
      part1Anchor: {
        phenomenon:
          'Air mendidih kekal pada $100^\\circ\\text{C}$ walaupun api terus menyala, dan ketul ais $0^\\circ\\text{C}$ mendinginkan air jauh lebih baik daripada air $0^\\circ\\text{C}$ — ke mana perginya haba yang "tersembunyi" itu?',
        chapterConnection:
          'Menjelaskan perubahan fasa pada suhu tetap ($Q = ml$), lengkung pemanasan/penyejukan, mekanisme peluh serta kitaran penyejukan peti sejuk.',
      },
      part2SacredDefinitions: [
        {
          title: 'Haba Pendam Tentu ($l$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Haba pendam tentu, $l$ ialah ' },
            { text: 'kuantiti haba yang diserap atau dibebaskan semasa perubahan fasa bagi $1\\text{ kg}$ bahan tanpa perubahan suhu', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'l = \\frac{Q}{m}',
        },
        {
          title: 'Haba Pendam Tentu Pelakuran ($l_f$) vs Pengewapan ($l_v$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: '$l_f$ ialah kuantiti haba untuk menukar $1\\text{ kg}$ ' },
            { text: 'pepejal kepada cecair', keyword: true },
            { text: ' (atau sebaliknya) tanpa perubahan suhu. $l_v$ ialah kuantiti haba untuk menukar $1\\text{ kg}$ ' },
            { text: 'cecair kepada gas', keyword: true },
            { text: ' (atau sebaliknya) tanpa perubahan suhu.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Suhu Kekal Malar Semasa Peleburan / Pendidihan (Fasa Datar)',
            cause: 'Haba dibekalkan secara berterusan semasa bahan berubah fasa (cth: ais $0^\\circ\\text{C} \\to$ air $0^\\circ\\text{C}$, atau air $100^\\circ\\text{C} \\to$ stim $100^\\circ\\text{C}$).',
            mechanism: 'Tenaga haba yang diserap digunakan sepenuhnya untuk melemahkan atau memutuskan daya tarikan antara molekul (meningkatkan tenaga keupayaan molekul), BUKAN untuk menaikkan tenaga kinetik purata molekul.',
            effect: 'Oleh kerana suhu bergantung pada tenaga kinetik purata molekul, suhu kekal malar sepanjang perubahan fasa.',
          },
        ],
        tables: [
          {
            title: 'Pemalar Haba Pendam Air & Perbandingan $l_f$ vs $l_v$',
            headers: ['Pemalar', 'Nilai Piawai Air', 'Mengapa $l_v \\gg l_f$?'],
            rows: [
              ['Haba pendam tentu pelakuran ais ($l_f$)', '$3.34 \\times 10^5\\text{ J kg}^{-1}$', 'Melebur hanya melonggarkan ikatan molekul kekisi pepejal menjadi cecair'],
              ['Haba pendam tentu pengewapan air ($l_v$)', '$2.26 \\times 10^6\\text{ J kg}^{-1}$', 'Mendidih/mengewap memutuskan ikatan sepenuhnya dan menolak atmosfera semasa mengembang jadi gas'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pengiraan Haba Pendam & Gabungan dengan $Q = mc\\Delta\\theta$',
            latex: 'Q = ml, \\qquad Q_{\\text{jumlah}} = mc\\Delta\\theta + ml',
            symbols: [
              { symbol: 'l', meaning: 'Haba pendam tentu ($l_f$ atau $l_v$)', unit: '$\\text{J kg}^{-1}$' },
              { symbol: 'm', meaning: 'Jisim bahan yang BERUBAH FASA sahaja ($m_1 - m_2$ dalam eksperimen)', unit: '$\\text{kg}$' },
            ],
            appliesWhen: 'Menukar fasa pada takat lebur atau takat didih tetap, atau penyejatan.',
            failsWhen: 'Menggabungkan $\\Delta\\theta$ ke dalam $Q = ml$ — rumus $Q = ml$ TIADA $\\Delta\\theta$ kerana suhu tetap!',
          },
        ],
        diagrams: [
          {
            kind: 'heating-curve',
            title: 'Lengkung Pemanasan & Lengkung Penyejukan (Suhu vs Masa)',
            whatItShows: 'Bahagian condong ($PQ, RS, TU$): satu fasa memanas/menyejuk ($Q = mc\\Delta\\theta$, $E_k$ berubah); Bahagian mendatar ($QR$ melebur, $ST$ mendidih): perubahan fasa pada suhu tetap ($Q = ml$, tenaga keupayaan berubah).',
            axisOrRule: 'Bahagian datar $ST$ (pendidihan) lebih panjang daripada $QR$ (peleburan) kerana $l_v > l_f$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 4.3',
            title: 'Menentukan Haba Pendam Tentu Pelakuran Ais & Pengewapan Air',
            aim: 'Menentukan $l_f$ ais dan $l_v$ air menggunakan pemanas elektrik berkuasa $P$.',
            inference: 'Haba pendam tertentu diperlukan untuk mengubah fasa $1\\text{ kg}$ jirim pada suhu tetap.',
            hypothesis: 'Nilai $l_f \\approx 3.34 \\times 10^5\\text{ J kg}^{-1}$ dan $l_v \\approx 2.26 \\times 10^6\\text{ J kg}^{-1}$.',
            variables: {
              manipulated: 'Kuasa dan masa pemanasan ($Pt$)',
              responding: 'Jisim ais yang melebur disebabkan pemanas ($m = m_{\\text{eksperimen}} - m_{\\text{kawalan}}$)',
              fixed: 'Ais pada takat lebur $0^\\circ\\text{C}$ dan corong turas serupa',
            },
            setupLogic: 'Wajib ada **set kawalan** (pemanas tidak dihidupkan) di sebelah set eksperimen untuk menyukat jisim ais yang melebur akibat haba persekitaran ($m_2$). Maka $m_{\\text{sebenar}} = m_1 - m_2$, dan $l_f = \\frac{Pt}{m_1 - m_2}$.',
            expectedResult: 'Nilai eksperimen diperoleh; set kawalan menghapuskan ralat peleburan oleh suhu bilik.',
            conclusion: 'Haba diserap pada suhu tetap $0^\\circ\\text{C}$ untuk meleburkan ais ($l_f$) dan $100^\\circ\\text{C}$ untuk mengewapkan air ($l_v$).',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Haba untuk Menukar Ais $-10^\\circ\\text{C}$ kepada Air $30^\\circ\\text{C}$',
          problem: 'Hitung jumlah haba yang diserap oleh $0.50\\text{ kg}$ ais pada $-10^\\circ\\text{C}$ untuk bertukar menjadi air pada $30^\\circ\\text{C}$ ($c_{\\text{ais}} = 2100$, $l_f = 3.34 \\times 10^5$, $c_{\\text{air}} = 4200$ dalam unit SI).',
          given: ['$Q_1$: Ais $-10^\\circ\\text{C} \\to 0^\\circ\\text{C}$ ($\\Delta\\theta = 10^\\circ\\text{C}$)', '$Q_2$: Ais $0^\\circ\\text{C} \\to$ Air $0^\\circ\\text{C}$', '$Q_3$: Air $0^\\circ\\text{C} \\to 30^\\circ\\text{C}$ ($\\Delta\\theta = 30^\\circ\\text{C}$)'],
          formulaLatex: 'Q_{\\text{jumlah}} = mc_{\\text{ais}}\\Delta\\theta_1 + ml_f + mc_{\\text{air}}\\Delta\\theta_2',
          formulaWhy: 'Pecahkan kepada segmen condong ($mc\\Delta\\theta$) dan segmen datar ($ml$) mengikut lengkung pemanasan.',
          substituteLatex: 'Q = 0.5(2100)(10) + 0.5(3.34 \\times 10^5) + 0.5(4200)(30) = 10\\,500 + 167\\,000 + 63\\,000',
          answer: '$Q_{\\text{jumlah}} = 240\\,500\\text{ J} = 240.5\\text{ kJ}$',
          trapAlert: 'Jangan guna $c_{\\text{air}} = 4200$ untuk fasa pepejal ais; fasa ais menggunakan $c_{\\text{ais}} = 2100$!',
        },
        {
          title: 'Contoh 2: Eksperimen Set Kawalan Ais Melebur',
          problem: 'Dalam Eksperimen 4.3 selama $5\\text{ minit}$ menggunakan pemanas $100\\text{ W}$, jisim air terkumpul di bikar eksperimen ialah $0.11\\text{ kg}$ dan bikar kawalan ialah $0.02\\text{ kg}$. Cari $l_f$ ais.',
          given: ['$P = 100\\text{ W}$, $t = 300\\text{ s}$', '$m_{\\text{sebenar}} = 0.11 - 0.02 = 0.09\\text{ kg}$'],
          formulaLatex: 'l_f = \\frac{Pt}{m_1 - m_2}',
          formulaWhy: 'Tolak jisim air daripada set kawalan untuk mengeluarkan kesan haba bilik.',
          substituteLatex: 'l_f = \\frac{100 \\times 300}{0.09}',
          answer: '$l_f = 3.33 \\times 10^5\\text{ J kg}^{-1}$',
          trapAlert: 'Jika pelajar terlupa menolak $m_2$ (bikar kawalan), nilai $l_f$ yang dikira akan menjadi lebih kecil daripada nilai sebenar.',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Haba Pendam dalam Kejuruteraan & Kehidupan (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Menggunakan ketulan ais $0^\\circ\\text{C}$ untuk menyejukkan minuman berbanding air sejuk $0^\\circ\\text{C}$', scientificReason: 'Ais menyerap haba pendam pelakuran yang besar ($3.34 \\times 10^5\\text{ J kg}^{-1}$) dari minuman semasa melebur sebelum suhunya mula meningkat.' },
          { designChoice: 'Mengukus makanan dengan wap air $100^\\circ\\text{C}$ (mengapa melecur akibat stim lebih teruk daripada air mendidih)', scientificReason: 'Stim membebaskan haba pendam tentu pengewapan yang sangat besar ($2.26 \\times 10^6\\text{ J kg}^{-1}$) apabila terkondensasi di atas kulit/makanan pada $100^\\circ\\text{C}$.' },
          { designChoice: 'Menyejukkan badan melalui penyejatan peluh / menyapu alkohol pada kulit', scientificReason: 'Molekul cecair menyerap haba pendam pengewapan daripada kulit untuk meruap menjadi wap, menurunkan suhu permukaan kulit.' },
          { designChoice: 'Kitaran peti sejuk (Penyejat $\\to$ Pemampat $\\to$ Kondenser $\\to$ Injap Pengembang)', scientificReason: 'Agen penyejuk menyejat dalam penyejat (menyerap haba pendam dari ruang peti sejuk) dan terkondensasi di kondenser luar (membebaskan haba pendam ke bilik).' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah tujuan set kawalan dalam eksperimen menentukan $l_f$ ais?', answer: 'Menentukan jisim ais yang melebur disebabkan haba dari persekitaran supaya dapat ditolak daripada bacaan eksperimen.' },
          { question: 'Semasa air mendidih pada $100^\\circ\\text{C}$, adakah tenaga kinetik purata molekul air meningkat?', answer: 'Tidak; suhu malar bermakna tenaga kinetik purata tetap. Tenaga digunakan untuk memutuskan ikatan molekul (menambah tenaga keupayaan).' },
          { question: 'Bandingkan tenaga yang dibebaskan oleh $10\\text{ g}$ stim $100^\\circ\\text{C}$ dengan $10\\text{ g}$ air mendidih $100^\\circ\\text{C}$ apabila kedua-duanya menyejuk ke $50^\\circ\\text{C}$.', answer: 'Stim membebaskan jauh lebih banyak tenaga kerana ia turut membebaskan haba pendam pengewapan $ml_v$ semasa kondensasi.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah cerek elektrik $2.0\\text{ kW}$ mendidihkan air pada $100^\\circ\\text{C}$. Berapakah jisim air yang bertukar menjadi stim dalam masa $2\\text{ minit}$ ($l_v = 2.26 \\times 10^6\\text{ J kg}^{-1}$)?',
          step1GivenAndFormula: 'Diberi: $P = 2000\\text{ W}$, $t = 120\\text{ s}$, $l_v = 2.26 \\times 10^6\\text{ J kg}^{-1}$. Rumus: $Pt = ml_v$.',
          studentTask: 'Kira jisim stim $m$ yang terhasil.',
          answerSteps: 'Langkah 3: $2000(120) = m(2.26 \\times 10^6) \\implies m = \\frac{240\\,000}{2.26 \\times 10^6}$ → Langkah 4: $m = 0.106\\text{ kg}$ ($106\\text{ g}$).',
        },
        transferQuestion: {
          question: 'Terangkan mengapa ikan dan makanan laut di pasar sering ditabur dengan kepingan ais dan bukannya direndam dalam air berais $0^\\circ\\text{C}$ sahaja.',
          answer: 'Ais dapat menyerap jumlah haba yang sangat banyak dari persekitaran sebagai haba pendam pelakuran ($3.34 \\times 10^5\\text{ J kg}^{-1}$) sambil mengekalkan suhu pada $0^\\circ\\text{C}$ lebih lama berbanding air sejuk.',
        },
      },
    },
    {
      id: '4.4',
      chapterId: 'bab-4',
      code: '4.4',
      title: 'Hukum Gas',
      pageRef: 'm.s. 148–163',
      part1Anchor: {
        phenomenon:
          'Gelembung udara membesar ketika naik dari dasar akuarium, belon mengempis dalam ais, dan tekanan tayar kereta meningkat selepas perjalanan jauh — semuanya dikawal oleh perlanggaran molekul gas dengan dinding bekas.',
        chapterConnection:
          'Menghubungkan tiga pemboleh ubah gas — Tekanan ($P$), Isi padu ($V$), dan Suhu Mutlak ($T$ dalam Kelvin) — melalui Teori Kinetik Gas.',
      },
      part2SacredDefinitions: [
        {
          title: 'Hukum Boyle',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Boyle menyatakan bahawa ' },
            { text: 'tekanan berkadar songsang dengan isi padu', keyword: true },
            { text: ' bagi suatu gas ' },
            { text: 'berjisim tetap pada suhu malar', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'P_1V_1 = P_2V_2',
        },
        {
          title: 'Hukum Charles',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Charles menyatakan bahawa ' },
            { text: 'isi padu berkadar terus dengan suhu mutlak', keyword: true },
            { text: ' bagi suatu gas ' },
            { text: 'berjisim tetap pada tekanan malar', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
        },
        {
          title: 'Hukum Gay-Lussac',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Gay-Lussac menyatakan bahawa ' },
            { text: 'tekanan berkadar terus dengan suhu mutlak', keyword: true },
            { text: ' bagi suatu gas ' },
            { text: 'berjisim tetap pada isi padu malar', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Penjelasan Teori Kinetik Gas bagi Ketiga-Tiga Hukum',
            cause: 'Memampatkan isi padu (Boyle) atau memanaskan gas (Charles & Gay-Lussac).',
            mechanism: 'Boyle ($V\\downarrow, T\\text{ malar}$): ruang mengecil $\\to$ bilangan molekul per unit isi padu naik $\\to$ kekerapan perlanggaran dinding naik ($P\\uparrow$). Charles ($T\\uparrow, P\\text{ malar}$): laju molekul naik $\\to$ untuk kekalkan $P$ malar, dinding bergerak mengembang ($V\\uparrow$). Gay-Lussac ($T\\uparrow, V\\text{ malar}$): tenaga kinetik & kekerapan langgaran naik ($P\\uparrow$).',
            effect: 'Hanya suhu mutlak dalam Kelvin ($T = \\theta + 273$) berkadar terus dengan tenaga kinetik purata molekul; $-273^\\circ\\text{C} = 0\\text{ K}$ ialah Sifar Mutlak.',
          },
        ],
        tables: [
          {
            title: 'Jadual Ringkasan Tiga Hukum Gas (Jisim Gas Tetap)',
            headers: ['Hukum Gas', 'Pemalar', 'Hubungan & Persamaan', 'Graf Garis Lurus melalui Asalan'],
            rows: [
              ['Hukum Boyle (Eksp 4.4)', 'Suhu ($T$)', '$P \\propto \\frac{1}{V} \\implies P_1V_1 = P_2V_2$', '$P$ melawan $\\frac{1}{V}$'],
              ['Hukum Charles (Eksp 4.5)', 'Tekanan ($P$)', '$V \\propto T \\implies \\frac{V_1}{T_1} = \\frac{V_2}{T_2}$', '$V$ melawan $T(\\text{K})$ (pintasan $-273^\\circ\\text{C}$ jika $\\theta^\\circ\\text{C}$)'],
              ['Hukum Gay-Lussac (Eksp 4.6)', 'Isi padu ($V$)', '$P \\propto T \\implies \\frac{P_1}{T_1} = \\frac{P_2}{T_2}$', '$P$ melawan $T(\\text{K})$ (pintasan $-273^\\circ\\text{C}$ jika $\\theta^\\circ\\text{C}$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Suhu Kelvin Wajib',
            latex: 'T\\text{ (K)} = \\theta\\text{ }(^\\circ\\text{C}) + 273',
            symbols: [
              { symbol: 'T', meaning: 'Suhu mutlak (WAJIB dalam Kelvin untuk Charles & Gay-Lussac)', unit: '$\\text{K}$' },
              { symbol: '\\theta', meaning: 'Suhu dalam darjah Celsius', unit: '$^\\circ\\text{C}$' },
            ],
            appliesWhen: 'Setiap pengiraan Hukum Charles, Hukum Gay-Lussac, atau perubahan suhu mutlak.',
            failsWhen: 'Memasukkan $\\theta$ dalam $^\\circ\\text{C}$ terus ke dalam $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ — ini kesalahan paling fatal dalam Bab 4!',
          },
        ],
        diagrams: [
          {
            kind: 'gas-laws-graphs',
            title: 'Graf Hukum Boyle ($P$-$V$ & $P$-$1/V$), Hukum Charles ($V$-$\\theta$ & $V$-$T$), dan Gay-Lussac ($P$-$T$)',
            whatItShows: 'Ekstrapolasi garis $V$-$\\theta$ dan $P$-$\\theta$ memotong paksi suhu tepat pada $-273^\\circ\\text{C}$ (Sifar Mutlak $0\\text{ K}$).',
            axisOrRule: 'Graf dalam $^\\circ\\text{C}$ memintas paksi-$y$ positif; graf dalam Kelvin ($T$) melalui asalan $(0,0)$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 4.4–4.6',
            title: 'Penyiasatan Hukum Boyle, Charles & Gay-Lussac',
            aim: 'Mengkaji hubungan antara $P$-$V$ (suhu malar), $V$-$T$ (tekanan malar), dan $P$-$T$ (isi padu malar).',
            inference: 'Tekanan, isi padu, dan suhu mutlak gas saling berkait apabila jisim gas tetap.',
            hypothesis: 'Untuk jisim tetap: $P \\propto 1/V$ ($T$ malar); $V \\propto T$ ($P$ malar); $P \\propto T$ ($V$ malar).',
            variables: {
              manipulated: 'Eksp 4.4: Isi padu $V$; Eksp 4.5 & 4.6: Suhu air $T$',
              responding: 'Eksp 4.4: Tekanan $P$ (tolok Bourdon); Eksp 4.5: Panjang turus udara $L$ ($\\propto V$); Eksp 4.6: Tekanan $P$',
              fixed: 'Jisim gas terperangkap serta $T$ (4.4) / $P$ (4.5) / $V$ (4.6)',
            },
            setupLogic: 'Eksp 4.5: Tiub kapilari terbuka di atas mengandungi turus udara diperangkap oleh titisan asid sulfurik pekat (pengering udara & penunjuk isi padu pada $1\\text{ atm}$ tetap); kacau air sentiasa sebelum bacaan.',
            expectedResult: 'Eksp 4.4: $P$-$1/V$ garis lurus melalui $(0,0)$; Eksp 4.5 & 4.6: garisan ekstrapolasi memotong $-273^\\circ\\text{C}$.',
            conclusion: 'Ketiga-tiga hukum gas disahkan secara eksperimen.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Gelembung Udara di Dasar Laut (Hukum Boyle)',
          problem: 'Sebiji gelembung udara berisi padu $2.0\\text{ cm}^3$ dilepaskan di dasar kolam pada tekanan $150\\text{ kPa}$. Berapakah isi padunya apabila tiba di permukaan ($P = 100\\text{ kPa}$, suhu malar)?',
          given: ['$P_1 = 150\\text{ kPa}, V_1 = 2.0\\text{ cm}^3$', '$P_2 = 100\\text{ kPa}$', 'Suhu malar $\\to$ Hukum Boyle'],
          formulaLatex: 'P_1V_1 = P_2V_2',
          formulaWhy: 'Jisim dan suhu udara malar.',
          substituteLatex: '(150)(2.0) = (100)V_2',
          answer: '$V_2 = 3.0\\text{ cm}^3$',
          trapAlert: 'Dalam $P_1V_1 = P_2V_2$, unit kiri dan kanan boleh kekal $\\text{kPa}$ dan $\\text{cm}^3$ asalkan sepadan; tetapi jika soalan minta tekanan total di bawah air, ingat $P_{\\text{total}} = P_{\\text{atm}} + h\\rho g$!',
        },
        {
          title: 'Contoh 2: Tekanan Tayar Kereta Selepas Perjalanan (Hukum Gay-Lussac)',
          problem: 'Tekanan udara dalam tayar sebelum perjalanan ialah $210\\text{ kPa}$ pada suhu $27^\\circ\\text{C}$. Selepas memandu, suhu naik ke $57^\\circ\\text{C}$. Cari tekanan baharu (andaikan isi padu tayar tetap).',
          given: ['$P_1 = 210\\text{ kPa}$', '$T_1 = 27 + 273 = 300\\text{ K}$', '$T_2 = 57 + 273 = 330\\text{ K}$', 'Isi padu malar $\\to$ Hukum Gay-Lussac'],
          formulaLatex: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2}',
          formulaWhy: 'Isi padu tetap dan jisim udara dalam tayar tetap.',
          substituteLatex: '\\frac{210}{300} = \\frac{P_2}{330} \\implies P_2 = 210 \\times \\frac{330}{300}',
          answer: '$P_2 = 231\\text{ kPa}$',
          trapAlert: 'JANGAN sekali-kali menulis $\\frac{210}{27} = \\frac{P_2}{57}$! Tukar $^\\circ\\text{C}$ kepada Kelvin ($+273$) dahulu!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Hukum Gas & Langkah Berjaga-jaga Eksperimen (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Menggunakan asid sulfurik pekat sebagai penunjuk dalam tiub kapilari Hukum Charles', scientificReason: 'Menyerap wap air supaya udara terperangkap kekal kering dan tidak membeku/meruap dengan cepat sambil mengekalkan tekanan malar ($P_{\\text{atm}}$).' },
          { designChoice: 'Mengacau air rendaman sentiasa sebelum mengambil bacaan suhu dan isi padu/tekanan', scientificReason: 'Memastikan taburan suhu air seragam supaya udara di dalam kelalang/tiub mencapai keseimbangan terma dengan termometer.' },
          { designChoice: 'Tiub getah penyambung antara kelalang dan tolok Bourdon mestilah sependek mungkin (Hukum Gay-Lussac)', scientificReason: 'Mengurangkan isi padu udara di luar kukusan air yang tidak dipanaskan pada suhu yang sama.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan suhu Sifar Mutlak dalam darjah Celsius dan Kelvin.', answer: '$-273^\\circ\\text{C}$ atau $0\\text{ K}$.' },
          { question: 'Apakah pemalar yang ditetapkan dalam Hukum Charles?', answer: 'Jisim gas dan tekanan gas.' },
          { question: 'Mengapakah tekanan gas meningkat apabila suhu meningkat pada isi padu tetap?', answer: 'Molekul bergerak lebih laju dan melanggar dinding bekas dengan lebih kerap dan lebih kuat.' },
        ],
        fadedProblem: {
          prompt: 'Suatu gas berjisim tetap menduduki isi padu $400\\text{ cm}^3$ pada $27^\\circ\\text{C}$. Hitung isi padunya apabila dipanaskan hingga $177^\\circ\\text{C}$ pada tekanan malar.',
          step1GivenAndFormula: 'Diberi: $V_1 = 400\\text{ cm}^3$, $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 177 + 273 = 450\\text{ K}$. Rumus: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$.',
          studentTask: 'Kira nilai $V_2$ dalam $\\text{cm}^3$.',
          answerSteps: 'Langkah 3: $\\frac{400}{300} = \\frac{V_2}{450}$ → Langkah 4: $V_2 = 600\\text{ cm}^3$.',
        },
        transferQuestion: {
          question: 'Seorang penunggang basikal mendapati tekanan tayarnya lebih rendah pada pagi yang sejuk berbanding tengah hari yang panas. Jelaskan menggunakan teori kinetik gas.',
          answer: 'Pada pagi sejuk, suhu mutlak lebih rendah maka tenaga kinetik purata molekul udara rendah. Molekul melanggar dinding tayar dengan halaju lebih kecil dan kurang kerap, menghasilkan tekanan lebih rendah.',
        },
      },
    },
  ],
};
