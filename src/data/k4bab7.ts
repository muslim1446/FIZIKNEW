import type { ChapterContent } from '../types/textbook';

export const k4bab7: ChapterContent = {
  id: 'k4-bab-7',
  subject: 'kimia',
  formLevel: 4,
  number: 7,
  title: 'Kadar Tindak Balas',
  pageRange: 'm.s. 218–251',
  overview:
    'Menguasai pengukuran kadar tindak balas purata dan kadar pada masa tertentu (kecerunan tangen), 4+1 faktor yang mempengaruhi kadar tindak balas, aplikasi harian, serta Teori Perlanggaran dan gambar rajah profil tenaga ($E_a$ vs $E_a\'$).',
  subtopics: [
    {
      id: 'k4-7.1',
      chapterId: 'k4-bab-7',
      code: '7.1',
      title: 'Penentuan Kadar Tindak Balas',
      pageRef: 'm.s. 220–229',
      part1Anchor: {
        phenomenon:
          'Besi berkarat mengambil masa berbulan-bulan, manakala bunga api meletup dalam sekelip mata — bagaimana ahli kimia mengukur kelajuan perubahan sesuatu tindak balas secara kuantitatif?',
        chapterConnection:
          'Menetapkan definisi kadar tindak balas serta teknik pengiraan kadar purata dan kadar serta-merta daripada kecerunan lengkung graf.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kadar Tindak Balas',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kadar tindak balas ialah ' },
            { text: 'perubahan kuantiti bahan tindak balas atau hasil tindak balas per unit masa', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\text{Kadar tindak balas} = \\frac{\\text{Perubahan kuantiti bahan atau hasil}}{\\text{Masa yang diambil}}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Kecerunan Graf Gas Melawan Masa Berkurang Hingga Mendatar',
            cause: 'Pada awal tindak balas ($t=0$), kepekatan bahan tindak balas adalah maksimum.',
            mechanism: 'Semakin masa bertambah, bahan tindak balas semakin berkurang menyebabkan kepekatan menurun sehingga salah satu atau semua bahan habis bertindak balas.',
            effect: 'Kadar tindak balas paling tinggi pada awalnya, kemudian berkurang secara beransur-ansur dan menjadi sifar apabila graf mendatar (tindak balas tamat).',
          },
        ],
        tables: [
          {
            title: 'Jenis Perubahan Boleh Diukur & Perbezaan Kadar Purata vs Kadar Seketika',
            headers: ['Konsep', 'Formula / Kaedah Pengiraan', 'Contoh Pengukuran'],
            rows: [
              ['Kadar purata keseluruhan', '$\\frac{\\text{Jumlah isi padu gas}}{\\text{Jumlah masa hingga tamat}}$', 'Gas $H_2$ terkumpul dalam buret ($Zn + H_2SO_4$)'],
              ['Kadar purata dalam sela masa ($t_1 \\to t_2$)', '$\\frac{V_2 - V_1}{t_2 - t_1}$', 'Purata antara minit ke-2 hingga minit ke-4'],
              ['Kadar pada masa tertentu ($t$)', '**Kecerunan garis tangen** pada lengkung pada masa $t$: $\\frac{\\Delta y}{\\Delta x}$', 'Lukis tangen sentuh 1 titik di lengkung pada $t$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kadar Tindak Balas dengan Masa Tanda "X" Hilang',
            latex: '\\text{Kadar tindak balas} \\propto \\frac{1}{\\text{Masa yang diambil untuk tanda X hilang}} \\quad (\\text{Unit: } \\text{s}^{-1})',
            symbols: [
              { symbol: 't', meaning: 'masa untuk kuantiti mendakan sulfur tetap terbentuk', unit: 's' },
            ],
            appliesWhen: 'Tindak balas $Na_2S_2O_3 + H_2SO_4$ yang menghasilkan mendakan kuning sulfur ($S$).',
            failsWhen: 'Jangan keliru: nilai $1/t$ ialah ukuran KADAR (lebih besar = lebih cepat), bukannya masa!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira Kadar Purata Keseluruhan vs Dalam Minit Ketiga',
          problem:
            'Gas $CO_2$ daripada $CaCO_3 + 2HCl$ dikumpul setiap minit: $t=0\\ (0\\text{ cm}^3)$, $t=1\\ (20\\text{ cm}^3)$, $t=2\\ (34\\text{ cm}^3)$, $t=3\\ (42\\text{ cm}^3)$, $t=4\\ (45\\text{ cm}^3)$, $t=5\\ (45\\text{ cm}^3)$. Hitung (a) kadar purata keseluruhan dan (b) kadar purata dalam minit kedua.',
          given: ['Tindak balas tamat pada $t = 4\\text{ min}$ (isi padu malar $45\\text{ cm}^3$)', 'Minit kedua bermaksud dari $t=1$ hingga $t=2$'],
          formulaLatex: '\\text{Kadar} = \\frac{\\Delta V}{\\Delta t}',
          formulaWhy: 'Gunakan masa TEPAT tindak balas berhenti ($4\\text{ min}$), bukan masa terakhir jadual ($5\\text{ min}$)!',
          substituteLatex: '(a)\\ \\frac{45 - 0}{4 - 0} = 11.25\\text{ cm}^3\\text{ min}^{-1} \\quad|\\quad (b)\\ \\frac{34 - 20}{2 - 1} = 14.0\\text{ cm}^3\\text{ min}^{-1}',
          answer: '(a) $11.25\\text{ cm}^3\\text{ min}^{-1}$; (b) $14.0\\text{ cm}^3\\text{ min}^{-1}$.',
          trapAlert: 'Perangkap klasik Kertas 1 & 2: JANGAN bahagi $45$ dengan $5$ minit! Gas berhenti keluar pada minit ke-4, maka jumlah masa tindak balas ialah **4 minit**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah kaedah mencari kadar tindak balas pada saat ke-30 daripada graf isi padu gas melawan masa?',
            answer: 'Menghitung kecerunan garis tangen yang menyentuh lengkung pada $t = 30\\text{ s}$.',
          },
          {
            question: 'Namakan tiga kuantiti yang boleh diukur untuk menentukan kadar tindak balas.',
            answer: 'Isi padu gas terbebas, pengurangan jisim kelalang, atau masa bagi jisim tetap mendakan terbentuk.',
          },
          {
            question: 'Apakah maksud garis mendatar pada penghujung graf isi padu gas melawan masa?',
            answer: 'Tindak balas telah tamat kerana salah satu atau semua bahan tindak balas telah habis.',
          },
        ],
        fadedProblem: {
          prompt: 'Isi padu gas hidrogen ialah $28\\text{ cm}^3$ pada $t=60\\text{ s}$ dan $40\\text{ cm}^3$ pada $t=120\\text{ s}$.',
          step1GivenAndFormula: '$\\text{Kadar purata} = \\frac{V_2 - V_1}{t_2 - t_1}$.',
          studentTask: 'Hitung kadar tindak balas purata antara $60\\text{ s}$ dan $120\\text{ s}$ dalam $\\text{cm}^3\\text{ s}^{-1}$.',
          answerSteps: '$\\frac{40 - 28}{120 - 60} = \\frac{12}{60} = 0.20\\text{ cm}^3\\text{ s}^{-1}$.',
        },
        transferQuestion: {
          question: 'Dalam eksperimen mengumpul gas, kadangkala graf $V$ melawan $t$ menunjukkan kadar paling tinggi bukan pada $t=0\\text{ s}$, tetapi pada $t=15\\text{ s}$. Mengapa?',
          answer: 'Kerana tindak balas ini adalah eksotermik (membebaskan haba) sehingga menaikkan suhu campuran pada peringkat awal dan meningkatkan kadar tindak balas, atau kerana lapisan oksida pada logam perlu ditanggalkan dahulu.',
        },
      },
    },
    {
      id: 'k4-7.2',
      chapterId: 'k4-bab-7',
      code: '7.2',
      title: 'Faktor yang Mempengaruhi Kadar Tindak Balas',
      pageRef: 'm.s. 230–239',
      part1Anchor: {
        phenomenon:
          'Serbuk kalsium karbonat membuak ganas dalam asid berbanding ketulan marmar bersaiz besar pada jisim yang sama, dan asid panas menghabiskan magnesium dalam beberapa saat sahaja!',
        chapterConnection:
          'Menjalankan 4 eksperimen wajib (Saiz, Kepekatan, Suhu, Mangkin + Tekanan) sebelum menerangkan mekanisme mikroskopiknya menggunakan Teori Perlanggaran dalam 7.4.',
      },
      part2SacredDefinitions: [
        {
          title: 'Mangkin',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Mangkin ialah bahan kimia yang ' },
            { text: 'mengubah kadar tindak balas kimia tanpa mengalami sebarang perubahan kimia pada akhir tindak balas', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Lima Faktor Kadar Tindak Balas (S-K-S-M-T)',
            cause: 'Saiz bahan pepejal dikecilkan, kepekatan dinaikkan, suhu dinaikkan, mangkin ditambah, atau tekanan gas dinaikkan.',
            mechanism: 'Meningkatkan frekuensi perlanggaran berkesan antara zarah-zarah bahan tindak balas.',
            effect: 'Kadar tindak balas meningkat (masa tindak balas menjadi lebih singkat), tetapi jumlah hasil maksimum kekal sama jika mol bahan pengehad tidak berubah.',
          },
        ],
        tables: [
          {
            title: 'Ringkasan 4 Eksperimen Faktor Kadar Tindak Balas (Eksperimen 7.1–7.4)',
            headers: ['Faktor', 'Pasangan Bahan Ujian', 'Kesan ke atas Kadar & Jumlah Hasil'],
            rows: [
              ['Saiz bahan pepejal (Eks 7.1)', 'Ketulan $CaCO_3$ besar vs ketulan kecil/serbuk + $HCl$', 'Saiz lebih kecil (jumlah luas permukaan besar) $\\to$ kecerunan awal lebih curam; jumlah gas maksimum SAMA jika jisim $CaCO_3$ & mol $HCl$ sama'],
              ['Kepekatan larutan (Eks 7.2)', 'Larutan $Na_2S_2O_3$ ($0.20\\text{–}0.04\\text{ mol dm}^{-3}$) + $H_2SO_4$', 'Kepekatan lebih tinggi $\\to$ masa tanda X hilang lebih singkat ($1/t$ lebih besar)'],
              ['Suhu (Eks 7.3)', 'Larutan $Na_2S_2O_3$ pada $30\\text{–}55\\,^\\circ\\text{C}$ + $H_2SO_4$', 'Suhu lebih tinggi $\\to$ graf $1/t$ melawan suhu meningkat secara mendadak'],
              ['Mangkin (Eks 7.4)', '$Zn + H_2SO_4$ (atau penguraian $H_2O_2$) dengan vs tanpa $CuSO_4$ (atau $MnO_2$)', 'Mangkin meningkatkan kadar; jisim dan sifat kimia mangkin tidak berubah di akhir eksperimen'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Faktor Penentu Jumlah Isi Padu Gas Maksimum ($V_{\\max}$)',
            latex: 'V_{\\max} \\propto \\text{Bilangan mol bahan pengehad } (n = MV \\text{ atau } \\frac{m}{\\text{JFR}})',
            symbols: [
              { symbol: 'V_{\\max}', meaning: 'isi padu gas akhir apabila graf mendatar', unit: '$\\text{cm}^3$' },
            ],
            appliesWhen: 'Melakar dua atau lebih graf perbandingan pada paksi yang sama!',
            failsWhen: 'Perangkap graf SPM: Mengubah SUHU, SAIZ atau MANGKIN tidak mengubah $V_{\\max}$! Hanya mengubah **kepekatan $\\times$ isi padu ($MV$)** atau **jisim bahan pengehad** akan mengubah ketinggian mendatar graf!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 7.2 & 7.3',
            title: 'Kesan Kepekatan dan Suhu ke atas Kadar Tindak Balas (Natrium Tiosulfat)',
            aim: 'Mengkaji kesan kepekatan dan suhu larutan natrium tiosulfat terhadap masa yang diambil untuk tanda X hilang.',
            inference: 'Kadar tindak balas bergantung kepada kepekatan dan suhu bahan tindak balas.',
            hypothesis: 'Semakin tinggi kepekatan (atau suhu) larutan natrium tiosulfat, semakin tinggi kadar tindak balas.',
            variables: {
              manipulated: 'Kepekatan larutan $Na_2S_2O_3$ (Eks 7.2) / Suhu larutan $Na_2S_2O_3$ (Eks 7.3)',
              responding: 'Masa untuk tanda "X" tidak kelihatan lagi (s); Kadar $= 1/t$',
              fixed: 'Jumlah isi padu larutan ($50\\text{ cm}^3$), saiz kelalang kon, kertas tanda "X" yang sama',
            },
            setupLogic: 'Campurkan $5\\text{ cm}^3$ asid sulfurik $1.0\\text{ mol dm}^{-3}$ ke dalam $45\\text{ cm}^3$ larutan $Na_2S_2O_3$, goncang seketika dan mula jam randik; perhatikan tanda X secara menegak dari atas sehingga tepat hilang akibat mendakan kuning sulfur.',
            expectedResult: 'Graf $\\frac{1}{\\text{masa}}$ melawan kepekatan ialah garis lurus; graf $\\frac{1}{\\text{masa}}$ melawan suhu meningkat melengkung ke atas.',
            conclusion: 'Kadar tindak balas berkadar terus dengan kepekatan dan meningkat apabila suhu bertambah.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Mentafsir Graf Perbandingan Lengkung I vs II',
          problem:
            'Eksperimen I: $1\\text{ g}$ ketulan zink berlebihan + $50\\text{ cm}^3$ $HCl\\ 1.0\\text{ mol dm}^{-3}$ pada $30\\,^\\circ\\text{C}$. Bagaimana lengkung II berubah jika digantikan dengan $50\\text{ cm}^3$ $HCl\\ 0.5\\text{ mol dm}^{-3}$?',
          given: ['Bahan pengehad ialah $HCl$ kerana zink berlebihan', '$n(HCl)_I = 0.05\\text{ mol}$; $n(HCl)_{II} = 0.025\\text{ mol}$'],
          formulaLatex: 'n = \\frac{MV}{1000}',
          formulaWhy: 'Bilangan mol $HCl$ menentukan $V_{\\max}$, manakala kepekatan $M$ menentukan kecerunan awal.',
          substituteLatex: 'M_{II} = 0.5 < 1.0 \\Rightarrow \\text{Kecerunan lebih landai}; \\quad n_{II} = \\frac{1}{2}n_I \\Rightarrow V_{\\max, II} = \\frac{1}{2}V_{\\max, I}',
          answer: 'Lengkung II mempunyai **kecerunan awal lebih landai** (kadar lebih rendah) dan mendatar pada **separuh isi padu gas maksimum** Lengkung I.',
          trapAlert: 'Sentiasa semak bahan manakah yang **berlebihan** dan bahan manakah yang **pengehad** sebelum melakar aras mendatar graf!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah mendakan yang menyebabkan tanda "X" hilang dalam eksperimen natrium tiosulfat dengan asid?',
            answer: 'Mendakan kuning sulfur ($S$).',
          },
          {
            question: 'Adakah penambahan mangkin meningkatkan hasil akhir maksimum tindak balas?',
            answer: 'Tidak; mangkin hanya mempercepatkan pencapaian hasil akhir, bukan menambah jumlah hasil.',
          },
          {
            question: 'Faktor tekanan hanya mempengaruhi tindak balas yang melibatkan bahan dalam keadaan apa?',
            answer: 'Gas sahaja.',
          },
        ],
        fadedProblem: {
          prompt: 'Eksperimen A: $2.0\\text{ g}$ serbuk $CaCO_3$ (berlebihan) + $25\\text{ cm}^3$ $HNO_3\\ 1.0\\text{ mol dm}^{-3}$. Eksperimen B: $2.0\\text{ g}$ ketulan $CaCO_3$ + $25\\text{ cm}^3$ $HNO_3\\ 1.0\\text{ mol dm}^{-3}$ + pemanasan ke $50\\,^\\circ\\text{C}$.',
          step1GivenAndFormula: 'Bilangan mol $HNO_3$ dalam A dan B adalah sama ($0.025\\text{ mol}$).',
          studentTask: 'Bandingkan isi padu maksimum gas $CO_2$ yang dikumpul dalam Eksperimen A dan B.',
          answerSteps: 'Isi padu maksimum gas $CO_2$ bagi kedua-duanya adalah SAMA kerana bilangan mol asid nitrik sebagai bahan pengehad adalah sama.',
        },
        transferQuestion: {
          question: 'Mengapakah saiz kelalang kon mesti dikekalkan sama apabila mengkaji kesan kepekatan $Na_2S_2O_3$ terhadap kadar tindak balas?',
          answer: 'Kelalang kon lebih lebar menghasilkan kedalaman larutan yang lebih cetek, memerlukan lebih banyak mendakan sulfur terbentuk sebelum tanda X tertutup dari pandangan atas.',
        },
      },
    },
    {
      id: 'k4-7.3',
      chapterId: 'k4-bab-7',
      code: '7.3',
      title: 'Aplikasi Faktor yang Mempengaruhi Kadar Tindak Balas dalam Kehidupan',
      pageRef: 'm.s. 240–242',
      part1Anchor: {
        phenomenon:
          'Mengapa daging yang dipotong kecil empuk lebih cepat dalam periuk tekanan, manakala ubat gastrik dikunyah sebelum ditelan dan pengubah bermangkin dipasang pada ekzos kereta?',
        chapterConnection:
          'Memindahkan 4 faktor makmal terus kepada situasi harian dan proses industri kimia utama (Haber, Sentuh, Ostwald).',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Kawalan Kadar dalam Kehidupan & Industri',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Pengetahuan tentang kadar tindak balas digunakan untuk ' },
            { text: 'mempercepatkan tindak balas yang berfaedah', keyword: true },
            { text: ' (masakan, industri) dan ' },
            { text: 'memperlahankan tindak balas yang tidak diingini', keyword: true },
            { text: ' (pembusukan makanan, kakisan).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Peti Sejuk Memperlahankan Pembusukan Makanan',
            cause: 'Suhu rendah di dalam peti sejuk ($\\approx 4\\,^\\circ\\text{C}$).',
            mechanism: 'Aktiviti enzim dan bakteria perosak makanan berlaku jauh lebih perlahan pada suhu rendah.',
            effect: 'Penghasilan toksin dan pereputan makanan dilambatkan.',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Faktor Kadar Tindak Balas Harian & Industri',
            headers: ['Faktor', 'Contoh Aplikasi Harian / Industri', 'Kesan'],
            rows: [
              ['Saiz bahan', 'Mengunyah tablet antasid ($Mg(OH)_2$/$CaCO_3$), menghiris kentang/daging nipis, membakar arang ketulan kecil', 'Jumlah luas permukaan meningkat $\\to$ tindak balas lebih cepat'],
              ['Kepekatan', 'Hujan asid ($H_2SO_4$/$HNO_3$) lebih pekat mengakis batu kapur/besi bangunan lebih cepat', 'Bilangan zarah $H^+$ per unit isi padu bertambah'],
              ['Suhu', 'Peti sejuk (lambat basi); Periuk tekanan (tekanan tinggi menaikkan takat didih air $>100\\,^\\circ\\text{C}$)', 'Suhu rendah melambatkan; suhu tinggi mempercepatkan'],
              ['Mangkin & Tekanan', 'Proses Haber ($Fe, 450\\,^\\circ\\text{C}, 200\\text{ atm}$); Proses Sentuh ($V_2O_5, 450\\,^\\circ\\text{C}$); Pengubah bermangkin ($Pt/Rh$)', 'Merendahkan tenaga pengaktifan & menukar gas ekzos toksik ($CO, NO_x$) kepada $CO_2, N_2$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Penyingkiran Gas Beracun dalam Pengubah Bermangkin',
            latex: '2CO(g) + 2NO(g) \\xrightarrow{Pt/Rh} 2CO_2(g) + N_2(g)',
            symbols: [
              { symbol: 'Pt/Rh', meaning: 'mangkin platinum/rodium pada sarang lebah ekzos', unit: '—' },
            ],
            appliesWhen: 'Soalan aplikasi faktor mangkin dalam kenderaan bermotor.',
            failsWhen: 'Jangan tertukar mangkin Proses Haber ($Fe$), Sentuh ($V_2O_5$), dan Ostwald ($Pt$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Kelebihan Periuk Tekanan dalam Memasak',
          problem:
            'Terangkan bagaimana periuk tekanan memasak daging liat lebih cepat berbanding periuk biasa.',
          given: ['Penutup periuk tekanan kedap udara memerangkap stim'],
          formulaLatex: 'P \\uparrow \\;\\Rightarrow\\; \\text{Takat didih air } \\uparrow (>100\\,^\\circ\\text{C})',
          formulaWhy: 'Suhu memasak lebih tinggi mempercepatkan tindak balas kimia melembutkan gentian daging.',
          substituteLatex: '\\text{Tenaga kinetik molekul air } \\uparrow',
          answer: 'Stim yang terperangkap meningkatkan tekanan di dalam periuk, lalu menaikkan takat didih air melebihi $100\\,^\\circ\\text{C}$. Pada suhu lebih tinggi, makanan menyerap lebih banyak haba dan tindak balas kimia memasak berlaku pada kadar yang jauh lebih tinggi.',
          trapAlert: 'Jelaskan hubung kait lengkap: tekanan tinggi $\\to$ **takat didih air meningkat melebihi $100\\,^\\circ\\text{C}$** $\\to$ kadar tindak balas meningkat.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah pesakit gastrik digalakkan mengunyah tablet antasid sebelum menelannya?',
            answer: 'Untuk memecahkan tablet menjadi cebisan lebih kecil supaya jumlah luas permukaan bertambah dan meneutralkan asid perut dengan lebih cepat.',
          },
          {
            question: 'Nyatakan suhu, tekanan dan mangkin optimum bagi Proses Haber.',
            answer: 'Suhu $450\\,^\\circ\\text{C}$, tekanan $200\\text{ atm}$, dan mangkin serbuk ferum ($Fe$).',
          },
          {
            question: 'Apakah mangkin yang digunakan dalam Proses Ostwald (penghasilan $HNO_3$)?',
            answer: 'Platinum ($Pt$).',
          },
        ],
        fadedProblem: {
          prompt: 'Sate yang diperap dan dipotong kiub kecil masak jauh lebih cepat berbanding ketulan ayam utuh.',
          step1GivenAndFormula: 'Pemotongan menjadi ketulan kecil meningkatkan jumlah luas permukaan yang terdedah kepada haba.',
          studentTask: 'Kaitkan amalan ini dengan faktor kadar tindak balas.',
          answerSteps: 'Semakin kecil saiz bahan pepejal, semakin besar jumlah luas permukaan terdedah kepada haba/tindak balas, maka kadar memasak meningkat.',
        },
        transferQuestion: {
          question: 'Mengapakah kilang tepung gandum perlu mencegah debu tepung halus daripada terkumpul di udara berhampiran percikan api?',
          answer: 'Debu tepung mempunyai saiz zarah amat halus dan jumlah luas permukaan sangat besar; satu percikan api boleh mencetuskan tindak balas pembakaran hampir serta-merta lalu menyebabkan letupan debu!',
        },
      },
    },
    {
      id: 'k4-7.4',
      chapterId: 'k4-bab-7',
      code: '7.4',
      title: 'Teori Perlanggaran',
      pageRef: 'm.s. 243–249',
      part1Anchor: {
        phenomenon:
          'Berbilion zarah berlanggar setiap saat di dalam bikar, namun hanya sebahagian kecil yang benar-benar bertindak balas! Mengapakah kebanyakan perlanggaran hanya melantun tanpa kesan?',
        chapterConnection:
          'Membekalkan kerangka jawapan esei markah penuh Kertas 2 SPM bagi keempat-empat faktor kadar tindak balas melalui konsep Tenaga Pengaktifan ($E_a$) dan orientasi.',
      },
      part2SacredDefinitions: [
        {
          title: 'Dua Syarat Perlanggaran Berkesan (Teori Perlanggaran)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Untuk tindak balas kimia berlaku, zarah-zarah bahan tindak balas mesti berlanggar dengan: (1) ' },
            { text: 'tenaga yang mencukupi atau melebihi tenaga pengaktifan ($E_a$)', keyword: true },
            { text: ', dan (2) ' },
            { text: 'orientasi perlanggaran yang betul', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Tenaga Pengaktifan ($E_a$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Tenaga pengaktifan ($E_a$) ialah ' },
            { text: 'tenaga minimum yang perlu dicapai oleh zarah bahan tindak balas apabila berlanggar', keyword: true },
            { text: ' supaya tindak balas kimia dapat berlaku.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Templat 4-Langkah Esei Teori Perlanggaran untuk Setiap Faktor',
            cause: 'Saiz mengecil (luas permukaan $\\uparrow$) ATAU Kepekatan $\\uparrow$ (bil. zarah per unit isi padu $\\uparrow$) ATAU Suhu $\\uparrow$ (tenaga kinetik $\\uparrow$) ATAU Mangkin ($E_a \\to E_a\'$ lebih rendah).',
            mechanism: 'Frekuensi perlanggaran antara zarah meningkat (atau bagi mangkin: lebih banyak zarah mencapai tenaga pengaktifan baharu $E_a\'$).',
            effect: 'Frekuensi perlanggaran BERKESAN meningkat $\\to$ kadar tindak balas meningkat.',
          },
        ],
        tables: [
          {
            title: 'Skrip Wajib Teori Perlanggaran Mengikut Faktor (Kertas 2 SPM)',
            headers: ['Faktor', 'Fakta Pencetus', 'Kesimpulan Wajib Akhir'],
            rows: [
              ['Saiz bahan pepejal lebih kecil', '**Jumlah luas permukaan** bahan pepejal terdedah kepada perlanggaran bertambah', '$\\to$ Frekuensi perlanggaran bertambah $\\to$ **Frekuensi perlanggaran berkesan meningkat**'],
              ['Kepekatan lebih tinggi', '**Bilangan zarah per unit isi padu** bertambah', '$\\to$ Frekuensi perlanggaran bertambah $\\to$ **Frekuensi perlanggaran berkesan meningkat**'],
              ['Suhu lebih tinggi', '**Tenaga kinetik purata zarah** meningkat; zarah bergerak lebih laju & **lebih banyak zarah mempunyai tenaga $\\ge E_a$**', '$\\to$ Frekuensi perlanggaran bertambah $\\to$ **Frekuensi perlanggaran berkesan meningkat**'],
              ['Kehadiran mangkin', 'Menyediakan **laluan alternatif dengan tenaga pengaktifan yang lebih rendah ($E_a\'$)**; lebih banyak zarah mencapai $E_a\'$', '$\\to$ **Frekuensi perlanggaran berkesan meningkat** (walaupun frekuensi perlanggaran tidak berubah)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Haba Tindak Balas ($\\Delta H$) pada Gambar Rajah Profil Tenaga',
            latex: '\\Delta H = H_{\\text{hasil}} - H_{\\text{bahan}} \\quad (\\text{Eksotermik: } \\Delta H < 0; \\; \\text{Endotermik: } \\Delta H > 0)',
            symbols: [
              { symbol: 'E_a', meaning: 'beza aras puncak ke aras bahan tindak balas', unit: '$\\text{kJ mol}^{-1}$' },
            ],
            appliesWhen: 'Melukis atau membaca gambar rajah profil tenaga bermangkin dan tanpa mangkin.',
            failsWhen: 'Perangkap besar SPM: Anak panah $E_a$ sentiasa dari aras **BAHAN tindak balas** ke **PUNCAK lengkung** (BUKAN dari sifar/paksi-x!), dan mangkin TIDAK mengubah nilai $\\Delta H$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-collision-energy',
            title: 'Gambar Rajah Profil Tenaga & Kesan Mangkin ($E_a \\to E_a\'$)',
            whatItShows: 'Mangkin merendahkan puncak tenaga pengaktifan tanpa mengubah aras tenaga bahan, aras hasil atau $\\Delta H$.',
            axisOrRule: 'Klik butang untuk menogol laluan mangkin $E_a\'$ dan perhatikan bahawa $\\Delta H$ kekal sama.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Jawapan Penuh Perbandingan Kepekatan + Suhu Berdasarkan Teori Perlanggaran',
          problem:
            'Eksperimen I ($HCl\\ 0.5\\text{ M}, 30\\,^\\circ\\text{C}$) lebih perlahan daripada Eksperimen II ($HCl\\ 1.0\\text{ M}, 45\\,^\\circ\\text{C}$) apabila bertindak balas dengan pita $Mg$. Terangkan menggunakan Teori Perlanggaran.',
          given: ['Kedua-dua kepekatan dan suhu meningkat dalam Eksperimen II'],
          formulaLatex: 'M_{II} > M_I \\;\\text{ DAN }\\; T_{II} > T_I',
          formulaWhy: 'Mesti huraikan kedua-dua faktor secara berasingan sebelum menggabungkannya ke frekuensi perlanggaran berkesan.',
          substituteLatex: '\\text{Bil. } H^+ \\text{ per unit isi padu } \\uparrow \\;+\\; KE\\text{ zarah } \\uparrow',
          answer: '1. Kepekatan $HCl$ dalam Eksperimen II lebih tinggi, maka bilangan ion $H^+$ per unit isi padu lebih banyak. 2. Suhu Eksperimen II lebih tinggi, maka tenaga kinetik purata zarah lebih tinggi dan lebih banyak zarah mempunyai tenaga $\\ge E_a$. 3. Frekuensi perlanggaran antara ion $H^+$ dan atom $Mg$ bertambah. 4. Oleh itu, frekuensi perlanggaran berkesan meningkat dan kadar tindak balas Eksperimen II lebih tinggi.',
          trapAlert: 'JANGAN tertinggal perkataan **"berkesan"** dalam frasa **"frekuensi perlanggaran berkesan"** — kehilangan perkataan ini sering memotong markah terakhir esei SPM!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua syarat untuk menghasilkan perlanggaran berkesan?',
            answer: 'Zarah mempunyai tenaga sama atau melebihi tenaga pengaktifan ($E_a$) DAN berlanggar pada orientasi yang betul.',
          },
          {
            question: 'Adakah penambahan mangkin mengubah nilai $\\Delta H$ tindak balas?',
            answer: 'Tidak; $\\Delta H$ kekal tidak berubah.',
          },
          {
            question: 'Nyatakan zarah-zarah yang berlanggar dalam tindak balas $Zn + 2HCl \\to ZnCl_2 + H_2$.',
            answer: 'Atom zink ($Zn$) dan ion hidrogen ($H^+$) — bukan molekul $HCl$ atau $Cl^-$.',
          },
        ],
        fadedProblem: {
          prompt: 'Penguraian hidrogen peroksida $2H_2O_2 \\to 2H_2O + O_2$ berlaku jauh lebih pantas apabila serbuk mangan(IV) oksida ($MnO_2$) ditambah.',
          step1GivenAndFormula: '$MnO_2$ bertindak sebagai mangkin dengan merendahkan tenaga pengaktifan ($E_a \\to E_a\'$).',
          studentTask: 'Lengkapkan penerangan menggunakan istilah Teori Perlanggaran.',
          answerSteps: '$MnO_2$ menyediakan laluan tindak balas alternatif dengan tenaga pengaktifan lebih rendah ($E_a\'$). Lebih banyak molekul $H_2O_2$ mempunyai tenaga mencapai atau melebihi $E_a\'$, maka frekuensi perlanggaran berkesan bertambah dan kadar penguraian meningkat.',
        },
        transferQuestion: {
          question: 'Mengapakah dalam sesetengah soalan esei tindak balas antara ion-ion seperti $S_2O_3^{2-}$ dan $H^+$, penggunaan nama zarah yang tepat dalam penerangan amat kritikal?',
          answer: 'Kerana dalam larutan akueus, hanya ion reaktif ($S_2O_3^{2-}$ dan $H^+$) yang bertindak balas dan berlanggar; menulis "perlanggaran antara molekul natrium tiosulfat" tidak tepat secara kimia.',
        },
      },
    },
  ],
};
