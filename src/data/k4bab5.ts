import type { ChapterContent } from '../types/textbook';

export const k4bab5: ChapterContent = {
  id: 'k4-bab-5',
  subject: 'kimia',
  formLevel: 4,
  number: 5,
  title: 'Ikatan Kimia',
  pageRange: 'm.s. 108–133',
  overview:
    'Memahami asas pembentukan sebatian stabil, ikatan ion, ikatan kovalen (tunggal, ganda dua, ganda tiga), ikatan hidrogen, ikatan datif (koordinat), ikatan logam dan perbezaan sifat fizikal sebatian ion vs sebatian kovalen.',
  subtopics: [
    {
      id: 'k4-5.1',
      chapterId: 'k4-bab-5',
      code: '5.1',
      title: 'Asas Pembentukan Sebatian',
      pageRef: 'm.s. 110–111',
      part1Anchor: {
        phenomenon:
          'Gas natrium dan klorin sangat reaktif secara berasingan, tetapi sebaik bertindak balas menjadi garam dapur ($NaCl$), ia stabil dan selamat dimakan — mengapa atom bergabung?',
        chapterConnection:
          'Menetapkan dua mekanisme teras (pemindahan elektron vs perkongsian elektron) untuk mencapai susunan elektron duplet atau oktet.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Kestabilan Pembentukan Ikatan Kimia',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Atom bergabung untuk mencapai ' },
            { text: 'susunan elektron duplet atau oktet yang stabil', keyword: true },
            { text: ' seperti gas adi melalui ' },
            { text: 'pemindahan elektron atau perkongsian elektron', keyword: true },
            { text: ' pada petala valens.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Dua Jalan Mencapai Susunan Elektron Gas Adi',
            cause: 'Atom dengan 1–3 elektron valens (logam) atau 4–7 elektron valens (bukan logam) adalah tidak stabil.',
            mechanism: 'Logam menderma elektron ($\\to$ kation), manakala bukan logam menerima elektron ($\\to$ anion) atau berkongsi elektron dengan bukan logam lain.',
            effect: 'Terbentuk ikatan ion atau ikatan kovalen dengan tenaga keupayaan lebih rendah dan stabil.',
          },
        ],
        tables: [
          {
            title: 'Ringkasan Jenis Ikatan Kimia KSSM',
            headers: ['Jenis Ikatan', 'Unsur Terlibat', 'Mekanisme Elektron'],
            rows: [
              ['Ikatan Ion', 'Logam + Bukan logam', 'Pemindahan elektron (derma & terima)'],
              ['Ikatan Kovalen', 'Bukan logam + Bukan logam', 'Perkongsian pasangan elektron valens'],
              ['Ikatan Datif (Koordinat)', 'Penderma pasangan bebas + Penerima kekurangan oktet', 'Sepasang elektron dikongsi daripada SATU atom sahaja'],
              ['Ikatan Hidrogen', '$H$ (terikat pada $N, O, F$) dengan $N, O, F$ lain', 'Tarikan elektrostatik antara molekul berkutub'],
              ['Ikatan Logam', 'Atom-atom logam', 'Tarikan elektrostatik antara ion logam positif dengan lautan elektron'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Kestabilan Duplet & Oktet',
            latex: '\\text{Petala 1 penuh} = 2e^-\\text{ (Duplet)} \\quad|\\quad \\text{Petala luar penuh} = 8e^-\\text{ (Oktet)}',
            symbols: [
              { symbol: 'e^-', meaning: 'elektron valens', unit: 'zarah' },
            ],
            appliesWhen: 'Meramal jenis ikatan daripada nombor proton atau susunan elektron.',
            failsWhen: 'Hidrogen ($H$) hanya perlukan 2 elektron (duplet), BUKAN 8 elektron!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Meramal Jenis Ikatan Daripada Susunan Elektron',
          problem:
            'Atom $P$ mempunyai susunan elektron $2.8.2$ dan atom $Q$ mempunyai susunan elektron $2.6$. Ramalkan jenis sebatian dan formula kimia sebatian yang terbentuk antara $P$ dan $Q$.',
          given: ['$P (2.8.2)$ ialah logam (derma $2e^-$)', '$Q (2.6)$ ialah bukan logam (terima $2e^-$)'],
          formulaLatex: 'P \\to P^{2+} + 2e^-, \\quad Q + 2e^- \\to Q^{2-}',
          formulaWhy: 'Pemindahan elektron antara logam dengan bukan logam menghasilkan ikatan ion.',
          substituteLatex: 'P^{2+} + Q^{2-} \\longrightarrow PQ',
          answer: 'Sebatian ion dengan formula kimia $PQ$.',
          trapAlert: 'Jangan tulis formula sebagai $P_2Q_2$ — sebatian ion sentiasa menggunakan nisbah paling ringkas ($PQ$)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua jenis susunan elektron yang stabil bagi atom?',
            answer: 'Susunan elektron duplet (2) dan susunan elektron oktet (8).',
          },
          {
            question: 'Bagaimanakah unsur bukan logam mencapai kestabilan sesama sendiri?',
            answer: 'Melalui perkongsian elektron membentuk ikatan kovalen.',
          },
          {
            question: 'Mengapakah atom gas adi seperti Neon ($2.8$) tidak membentuk ikatan kimia?',
            answer: 'Kerana petala valensnya sudah penuh dengan susunan elektron oktet yang stabil.',
          },
        ],
        fadedProblem: {
          prompt: 'Atom $X$ ($Z=6$) bertindak balas dengan atom $Y$ ($Z=17$).',
          step1GivenAndFormula: '$X = 2.4$ (bukan logam, perlukan $4e^-$); $Y = 2.8.7$ (bukan logam, perlukan $1e^-$).',
          studentTask: 'Nyatakan jenis ikatan yang terbentuk dan formula sebatiannya.',
          answerSteps: 'Ikatan kovalen (kedua-duanya bukan logam); 1 atom $X$ berkongsi 4 pasang elektron dengan 4 atom $Y$ menghasilkan formula $XY_4$.',
        },
        transferQuestion: {
          question: 'Adakah ikatan kimia melibatkan proton dan neutron dalam nukleus? Jelaskan.',
          answer: 'Tidak. Ikatan kimia hanya melibatkan elektron pada petala terluar (elektron valens); nukleus kekal tidak berubah.',
        },
      },
    },
    {
      id: 'k4-5.2',
      chapterId: 'k4-bab-5',
      code: '5.2',
      title: 'Ikatan Ion',
      pageRef: 'm.s. 111–114',
      part1Anchor: {
        phenomenon:
          'Natrium sanggup melepaskan 1 elektron manakala klorin berkeinginan kuat menangkapnya — pertukaran satu zarah kecil ini melahirkan daya tarikan elektrostatik kuat dalam hablur garam.',
        chapterConnection:
          'Mempelajari pembentukan kation dan anion berserta skema jawapan esei penuh + lukisan rajah susunan elektron ikatan ion SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ikatan Ion',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ikatan ion terbentuk melalui ' },
            { text: 'pemindahan elektron antara atom logam dengan atom bukan logam', keyword: true },
            { text: ' menghasilkan ' },
            { text: 'ion positif (kation) dan ion negatif (anion)', keyword: true },
            { text: ' yang tertarik oleh ' },
            { text: 'daya tarikan elektrostatik yang kuat', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Pembentukan Sebatian Ion (Contoh: $MgO$ atau $NaCl$)',
            cause: 'Atom logam (cth: $Na\\ 2.8.1$) bertemu atom bukan logam ($Cl\\ 2.8.7$).',
            mechanism: 'Atom $Na$ menderma 1 elektron valens membentuk ion $Na^+$ ($2.8$). Atom $Cl$ menerima 1 elektron itu membentuk ion $Cl^-$ ($2.8.8$).',
            effect: 'Ion $Na^+$ dan $Cl^-$ yang bertentangan cas ditarik oleh daya tarikan elektrostatik yang kuat membentuk ikatan ion $NaCl$.',
          },
        ],
        tables: [
          {
            title: 'Contoh Pembentukan Sebatian Ion Lazim SPM',
            headers: ['Sebatian', 'Setengah Persamaan Kation', 'Setengah Persamaan Anion', 'Nisbah & Formula'],
            rows: [
              ['Natrium fluorida ($NaF$)', '$Na (2.8.1) \\to Na^+ (2.8) + e^-$', '$F (2.7) + e^- \\to F^- (2.8)$', '$1 Na^+ : 1 F^- \\Rightarrow NaF$'],
              ['Magnesium oksida ($MgO$)', '$Mg (2.8.2) \\to Mg^{2+} (2.8) + 2e^-$', '$O (2.6) + 2e^- \\to O^{2-} (2.8)$', '$1 Mg^{2+} : 1 O^{2-} \\Rightarrow MgO$'],
              ['Natrium oksida ($Na_2O$)', '$2Na (2.8.1) \\to 2Na^+ (2.8) + 2e^-$', '$O (2.6) + 2e^- \\to O^{2-} (2.8)$', '$2 Na^+ : 1 O^{2-} \\Rightarrow Na_2O$'],
              ['Kalsium klorida ($CaCl_2$)', '$Ca (2.8.8.2) \\to Ca^{2+} (2.8.8) + 2e^-$', '$2Cl (2.8.7) + 2e^- \\to 2Cl^- (2.8.8)$', '$1 Ca^{2+} : 2 Cl^- \\Rightarrow CaCl_2$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Lukisan Rajah Ikatan Ion SPM',
            latex: '[\\text{Kation}]^{n+} \\quad [\\text{Anion}]^{m-} \\quad (\\text{Wajib ada kurungan siku, cas ion, dan semua petala})',
            symbols: [
              { symbol: '[\\;]^{n+}', meaning: 'kurungan siku & cas ion', unit: '—' },
            ],
            appliesWhen: 'Melukis rajah susunan elektron sebatian ion seperti $NaCl, MgCl_2, Na_2O$.',
            failsWhen: 'Jangan lukis pertindihan petala dalam sebatian ion! Dan gunakan simbol berbeza ($\\times$ vs $\\bullet$) untuk membezakan elektron pindahan daripada elektron asal anion.',
          },
        ],
        diagrams: [
          {
            kind: 'chem-ionic-covalent-bonds',
            title: 'Visualisasi Pemindahan Elektron Ikatan Ion ($NaCl$)',
            whatItShows: 'Pemindahan 1 elektron daripada Na ($2.8.1$) kepada Cl ($2.8.7$) membentuk $[Na]^+$ dan $[Cl]^-$.',
            axisOrRule: 'Klik tab "Ikatan Ion (NaCl)" untuk menyemak kurungan siku, cas dan susunan elektron ion.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Skema Jawapan Esei Pembentukan Magnesium Klorida ($MgCl_2$)',
          problem:
            'Terangkan bagaimana atom magnesium ($Z=12$) dan atom klorin ($Z=17$) membentuk sebatian $MgCl_2$.',
          given: ['$Mg = 2.8.2$', '$Cl = 2.8.7$'],
          formulaLatex: 'Mg \\to Mg^{2+} + 2e^-, \\qquad 2Cl + 2e^- \\to 2Cl^-',
          formulaWhy: 'Satu atom $Mg$ menderma 2 elektron kepada dua atom $Cl$ masing-masing menerima 1 elektron.',
          substituteLatex: '\\text{Ion } Mg^{2+}\\ (2.8) \\text{ dan dua ion } Cl^-\\ (2.8.8) \\text{ tertarik}',
          answer: '1. Atom $Mg$ ($2.8.2$) menderma 2 elektron valens mencapai susunan oktet ($2.8$) membentuk ion $Mg^{2+}$. 2. Dua atom $Cl$ ($2.8.7$) masing-masing menerima 1 elektron mencapai susunan oktet ($2.8.8$) membentuk dua ion $Cl^-$. 3. Ion $Mg^{2+}$ dan ion $Cl^-$ tertarik oleh daya tarikan elektrostatik yang kuat membentuk $MgCl_2$.',
          trapAlert: 'Dalam $MgCl_2$, pastikan anda nyatakan **dua atom $Cl$ menerima 1 elektron setiap satu**, bukan satu atom $Cl$ terima 2 elektron!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah daya yang memegang ion positif dan ion negatif dalam sebatian ion?',
            answer: 'Daya tarikan elektrostatik yang kuat.',
          },
          {
            question: 'Apakah susunan elektron bagi ion $Na^+$ dan ion $O^{2-}$ dalam $Na_2O$?',
            answer: 'Kedua-duanya $2.8$.',
          },
          {
            question: 'Mengapakah sebatian ion memerlukan kurungan siku dan cas dalam lukisannya?',
            answer: 'Untuk menunjukkan zarah tersebut telah berubah menjadi ion bercas selepas pemindahan elektron lengkap.',
          },
        ],
        fadedProblem: {
          prompt: 'Atom $X$ ($2.8.3$) bertindak balas dengan atom $Y$ ($2.6$).',
          step1GivenAndFormula: '$X \\to X^{3+} + 3e^-$; $Y + 2e^- \\to Y^{2-}$.',
          studentTask: 'Imbangkan bilangan elektron yang dipindahkan dan tulis formula sebatian ion yang terhasil.',
          answerSteps: '2 atom $X$ menderma $6e^-$ kepada 3 atom $Y$ (masing-masing terima $2e^-$); formula ialah $X_2Y_3$.',
        },
        transferQuestion: {
          question: 'Mengapakah petala terluar ion $Na^+$ dalam rajah susunan elektron berkurang satu berbanding atom $Na$?',
          answer: 'Kerana atom $Na$ ($2.8.1$) telah melepaskan satu-satunya elektron pada petala ketiga, maka hanya tinggal dua petala terisi elektron ($2.8$).',
        },
      },
    },
    {
      id: 'k4-5.3',
      chapterId: 'k4-bab-5',
      code: '5.3',
      title: 'Ikatan Kovalen',
      pageRef: 'm.s. 114–117',
      part1Anchor: {
        phenomenon:
          'Apabila dua atom klorin atau oksigen bertemu, tiada satu pun mahu mengalah menderma elektron — penyelesaiannya ialah berkongsi pasangan elektron secara adil membentuk molekul!',
        chapterConnection:
          'Membezakan ikatan kovalen tunggal, ganda dua dan ganda tiga serta perbandingan langsung dengan ikatan ion.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ikatan Kovalen',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ikatan kovalen terbentuk apabila ' },
            { text: 'atom-atom bukan logam berkongsi elektron valens', keyword: true },
            { text: ' untuk mencapai susunan elektron duplet atau oktet yang stabil, membentuk ' },
            { text: 'molekul neutral', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Bilangan Pasangan Elektron Berkongsi Menentukan Jenis Ikatan',
            cause: 'Setiap atom menyumbang bilangan elektron sama dengan kekurangan oktet/dupletnya.',
            mechanism: 'Berkongsi 1 pasang ($2e^-$) = ikatan tunggal; 2 pasang ($4e^-$) = ganda dua; 3 pasang ($6e^-$) = ganda tiga.',
            effect: 'Terbentuk struktur Lewis dan molekul kovalen seperti $Cl_2$, $O_2$, $N_2$, $H_2O$, $CO_2$.',
          },
        ],
        tables: [
          {
            title: 'Tiga Jenis Ikatan Kovalen & Contoh Molekul',
            headers: ['Jenis Ikatan', 'Pasangan Elektron Dikongsi', 'Contoh & Struktur Lewis'],
            rows: [
              ['Ikatan Tunggal', '1 pasang ($2$ elektron)', '$H_2$ ($H-H$), $Cl_2$ ($Cl-Cl$), $H_2O$, $CH_4$'],
              ['Ikatan Ganda Dua', '2 pasang ($4$ elektron)', '$O_2$ ($O=O$), $CO_2$ ($O=C=O$), $C_2H_4$'],
              ['Ikatan Ganda Tiga', '3 pasang ($6$ elektron)', '$N_2$ ($N\\equiv N$), $C_2H_2$'],
            ],
          },
          {
            title: 'Perbandingan Ikatan Ion vs Ikatan Kovalen',
            headers: ['Aspek', 'Ikatan Ion', 'Ikatan Kovalen'],
            rows: [
              ['Unsur terlibat', 'Logam + Bukan logam', 'Bukan logam + Bukan logam'],
              ['Kelakuan elektron', 'Pemindahan elektron (derma & terima)', 'Perkongsian pasangan elektron'],
              ['Zarah terhasil', 'Ion positif dan ion negatif', 'Molekul neutral'],
              ['Rajah susunan elektron', 'Tiada pertindihan petala; ada kurungan siku & cas', 'Petala terluar bertindih; tiada kurungan atau cas'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Mengira Elektron Disumbang oleh Atom Bukan Logam',
            latex: '\\text{Bil. } e^- \\text{ dikongsi setiap atom} = \\begin{cases} 1 & \\text{bagi } H \\\\ 8 - v & \\text{bagi unsur lain } (4 \\le v \\le 7) \\end{cases}',
            symbols: [
              { symbol: 'v', meaning: 'bilangan elektron valens asal', unit: '—' },
            ],
            appliesWhen: 'Membina formula dan lukisan pertindihan sebatian kovalen.',
            failsWhen: 'Jangan lupa tulis baki pasangan elektron menyendiri (tidak berkongsi) pada petala terluar, contohnya 6 elektron luar lagi pada setiap atom $Cl$ dalam $Cl_2$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-ionic-covalent-bonds',
            title: 'Rajah Pertindihan Petala Ikatan Kovalen ($Cl_2$)',
            whatItShows: 'Dua atom klorin ($2.8.7$) menindih petala terluar untuk berkongsi sepasang elektron membentuk ikatan tunggal $Cl-Cl$.',
            axisOrRule: 'Klik tab "Ikatan Kovalen (Cl₂)" untuk membezakannya daripada rajah ikatan ion.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Pembentukan Karbon Dioksida ($CO_2$)',
          problem:
            'Terangkan pembentukan ikatan kovalen dalam molekul karbon dioksida, $CO_2$. [Nombor proton: $C=6, O=8$]',
          given: ['$C = 2.4$ (perlukan $4e^-$)', '$O = 2.6$ (perlukan $2e^-$)'],
          formulaLatex: 'O=C=O \\quad (2\\text{ ikatan kovalen ganda dua})',
          formulaWhy: 'Satu atom $C$ berkongsi 2 pasang elektron dengan setiap satu daripada dua atom $O$.',
          substituteLatex: 'C \\text{ menyumbang } 4e^-; \\text{ setiap } O \\text{ menyumbang } 2e^-',
          answer: '1 atom karbon ($2.4$) menyumbang 4 elektron untuk berkongsi dengan 2 atom oksigen ($2.6$) yang masing-masing menyumbang 2 elektron. Dua ikatan kovalen ganda dua terbentuk supaya atom $C$ dan kedua-dua atom $O$ mencapai susunan elektron oktet yang stabil ($2.8$).',
          trapAlert: 'Dalam rajah $CO_2$, pastikan ada 4 titik/pangkah di SETIAP kawasan pertindihan antara $C$ dan $O$ (berjumlah 8 elektron sekeliling $C$ dan setiap $O$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berapakah bilangan elektron yang dikongsi dalam ikatan kovalen ganda tiga bagi gas nitrogen ($N_2$)?',
            answer: '3 pasang elektron ($6$ elektron kesemuanya).',
          },
          {
            question: 'Lukiskan struktur Lewis bagi molekul air ($H_2O$).',
            answer: '$H - \\ddot{\\underset{\\cdot\\cdot}{O}} - H$ (2 ikatan tunggal dan 2 pasangan elektron menyendiri pada $O$).',
          },
          {
            question: 'Adakah ikatan kovalen mempunyai cas ion?',
            answer: 'Tidak, sebatian kovalen wujud sebagai molekul neutral.',
          },
        ],
        fadedProblem: {
          prompt: 'Atom fosforus ($P$, $Z=15$) bertindak balas dengan atom klorin ($Cl$, $Z=17$) membentuk molekul kovalen.',
          step1GivenAndFormula: '$P = 2.8.5$ (perlukan $3e^-$); $Cl = 2.8.7$ (perlukan $1e^-$).',
          studentTask: 'Tentukan formula molekul sebatian itu dan bilangan ikatan tunggal terbentuk.',
          answerSteps: '1 atom $P$ berkongsi 1 pasang elektron dengan 3 atom $Cl$ menghasilkan formula $PCl_3$ dengan 3 ikatan kovalen tunggal.',
        },
        transferQuestion: {
          question: 'Mengapakah gas nitrogen ($N_2$) sangat lengai di udara pada suhu bilik sehingga memerlukan kilat atau mangkin besi untuk bertindak balas?',
          answer: 'Kerana dua atom nitrogen dihubungkan oleh ikatan kovalen ganda tiga ($N\\equiv N$) yang sangat kuat dan memerlukan tenaga yang sangat tinggi untuk diputuskan.',
        },
      },
    },
    {
      id: 'k4-5.4',
      chapterId: 'k4-bab-5',
      code: '5.4',
      title: 'Ikatan Hidrogen',
      pageRef: 'm.s. 117–119',
      part1Anchor: {
        phenomenon:
          'Mengapakah rambut basah melekat bersama, ais boleh terapung, helaian kertas melekat bila dibasahkan, dan etanol mudah larut dalam air sedangkan metana ialah gas?',
        chapterConnection:
          'Memperkenalkan tarikan antara molekul yang lebih kuat daripada daya van der Waals biasa apabila $H$ terikat kepada $N, O,$ atau $F$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ikatan Hidrogen',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ikatan hidrogen ialah ' },
            { text: 'daya tarikan antara atom hidrogen, H yang mempunyai ikatan dengan atom berelektronegatifan tinggi iaitu nitrogen (N), oksigen (O) atau fluorin (F)', keyword: true },
            { text: ' dengan ' },
            { text: 'atom N, O atau F dalam molekul lain', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Etanol ($C_2H_5OH$) Larut dalam Air & Bertakat Didih Tinggi',
            cause: 'Etanol mempunyai kumpulan $-OH$ dengan atom $H$ terikat secara kovalen kepada atom oksigen ($O$) yang sangat elektronegatif.',
            mechanism: 'Atom $H$ daripada etanol membentuk ikatan hidrogen dengan atom $O$ dalam molekul air (dan sesama molekul etanol).',
            effect: 'Etanol larut sepenuhnya dalam air dan memerlukan lebih banyak tenaga haba untuk memutuskan ikatan hidrogen semasa mendidih ($78\\,^\\circ\\text{C}$) berbanding etana ($-89\\,^\\circ\\text{C}$).',
          },
        ],
        tables: [
          {
            title: 'Kesan Ikatan Hidrogen dalam Kehidupan Harian',
            headers: ['Fenomena', 'Penjelasan Ikatan Hidrogen'],
            rows: [
              ['Rambut basah melekat', 'Molekul air membentuk ikatan hidrogen dengan molekul protein rambut yang juga berikatan hidrogen sesamanya'],
              ['Membelok halaman kertas basah', 'Molekul air membentuk ikatan hidrogen dengan kumpulan $-OH$ dalam molekul selulosa kertas'],
              ['Takat didih air ($100\\,^\\circ\\text{C}$) & $NH_3, HF$', 'Jisim molekul kecil tetapi mempunyai ikatan hidrogen kuat antara molekul di samping daya van der Waals'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Pembentukan Ikatan Hidrogen',
            latex: '\\text{H terikat pada } \\{N, O, F\\} \\;\\cdots\\; \\text{Pasangan } e^- \\text{ bebas pada } \\{N, O, F\\}',
            symbols: [
              { symbol: 'N, O, F', meaning: 'tiga unsur paling elektronegatif', unit: '—' },
            ],
            appliesWhen: 'Molekul seperti $H_2O, NH_3, HF, C_2H_5OH, CH_3COOH$.',
            failsWhen: 'Hidrogen klorida ($HCl$) atau metana ($CH_4$) TIDAK membentuk ikatan hidrogen kerana $Cl$ dan $C$ tidak cukup elektronegatif!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Perbezaan Takat Didih Etana vs Etanol',
          problem:
            'Jisim molekul relatif etana ($C_2H_6 = 30$) dan metanol ($CH_3OH = 32$) hampir sama, namun metanol ialah cecair ($65\\,^\\circ\\text{C}$) manakala etana ialah gas ($-89\\,^\\circ\\text{C}$). Terangkan.',
          given: ['$CH_3OH$ ada kumpulan $-OH$', '$C_2H_6$ hanya ada ikatan $C-H$'],
          formulaLatex: 'CH_3O-H \\cdots O(H)CH_3 \\quad \\text{(Ikatan hidrogen)}',
          formulaWhy: 'Ikatan hidrogen jauh lebih kuat daripada daya van der Waals lemah dalam etana.',
          substituteLatex: '\\text{Etana: daya van der Waals sahaja}',
          answer: 'Molekul metanol mempunyai atom $H$ terikat kepada atom $O$ yang boleh membentuk ikatan hidrogen antara molekul di samping daya van der Waals. Lebih banyak tenaga haba diperlukan untuk mengatasi daya tarikan ini berbanding hanya daya van der Waals yang lemah dalam etana.',
          trapAlert: 'Sentiasa sebut **kedua-dua** ikatan hidrogen DAN daya van der Waals apabila membandingkan takat didih alkohol/air!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah tiga unsur elektronegatif (FON) yang membolehkan pembentukan ikatan hidrogen?',
            answer: 'Fluorin ($F$), Oksigen ($O$) dan Nitrogen ($N$).',
          },
          {
            question: 'Mengapakah jari yang basah memudahkan kita menyelak helaian kertas?',
            answer: 'Molekul selulosa kertas mengandungi atom $H$ terikat pada $O$ yang membentuk ikatan hidrogen dengan molekul air pada jari.',
          },
          {
            question: 'Adakah ikatan hidrogen sejenis ikatan dalam molekul atau daya antara molekul?',
            answer: 'Daya tarikan antara molekul.',
          },
        ],
        fadedProblem: {
          prompt: 'Antara molekul berikut: $NH_3$, $CH_4$, $H_2S$, dan $C_2H_5OH$.',
          step1GivenAndFormula: 'Syarat ikatan hidrogen: mesti ada $H$ terikat terus kepada $N, O$ atau $F$.',
          studentTask: 'Kenal pasti molekul manakah yang boleh membentuk ikatan hidrogen dengan molekul air.',
          answerSteps: '$NH_3$ dan $C_2H_5OH$ (kerana masing-masing mempunyai ikatan $N-H$ dan $O-H$).',
        },
        transferQuestion: {
          question: 'Mengapakah ikatan hidrogen dilukis dengan garis putus-putus ($\\cdots$) di antara molekul, bukan garis penuh?',
          answer: 'Kerana ikatan hidrogen ialah daya tarikan antara molekul (bukan ikatan kovalen dalam molekul) yang kekuatannya lebih lemah daripada ikatan kovalen.',
        },
      },
    },
    {
      id: 'k4-5.5',
      chapterId: 'k4-bab-5',
      code: '5.5',
      title: 'Ikatan Datif',
      pageRef: 'm.s. 120–121',
      part1Anchor: {
        phenomenon:
          'Ion hidrogen $H^+$ langsung tidak memiliki elektron, namun apabila bertemu molekul ammonia $NH_3$ atau air $H_2O$, kedua-duanya tetap berjaya membentuk ikatan kovalen stabil $NH_4^+$ dan $H_3O^+$!',
        chapterConnection:
          'Menjelaskan pembentukan ion hidroksonium $H_3O^+$ (penting dalam Bab 6 Asid) dan ion ammonium $NH_4^+$ daripada molekul neutral.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ikatan Datif (Ikatan Koordinat)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ikatan datif ialah sejenis ikatan kovalen di mana ' },
            { text: 'pasangan elektron yang dikongsi berasal daripada satu atom sahaja', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Pembentukan Ion Ammonium ($NH_4^+$) & Hidroksonium ($H_3O^+$)',
            cause: 'Ion $H^+$ kehilangan satu-satunya elektronnya (petala kosong, perlukan 2 elektron untuk duplet).',
            mechanism: 'Atom $N$ dalam $NH_3$ (atau atom $O$ dalam $H_2O$) menyumbangkan sepasang elektron bebas untuk dikongsi bersama ion $H^+$.',
            effect: 'Terbentuk ikatan datif ($N \\to H^+$ atau $O \\to H^+$) di mana $H^+$ mencapai duplet dan $N/O$ kekal oktet.',
          },
        ],
        tables: [
          {
            title: 'Contoh Ikatan Datif dalam Sukatan KSSM',
            headers: ['Spesies', 'Penderma Pasangan Elektron', 'Penerima Pasangan Elektron'],
            rows: [
              ['Ion hidroksonium ($H_3O^+$)', 'Atom oksigen ($O$) dalam $H_2O$', 'Ion hidrogen ($H^+$)'],
              ['Ion ammonium ($NH_4^+$)', 'Atom nitrogen ($N$) dalam $NH_3$', 'Ion hidrogen ($H^+$)'],
              ['Sebatian $NH_3\\text{–}BF_3$', 'Atom nitrogen ($N$) dalam $NH_3$', 'Atom boron ($B$) dalam $BF_3$ (hanya ada $6e^-$ valens)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Pembentukan Ion Hidroksonium & Ammonium',
            latex: 'H_2O + H^+ \\longrightarrow H_3O^+ \\qquad|\\qquad NH_3 + H^+ \\longrightarrow NH_4^+',
            symbols: [
              { symbol: 'H_3O^+', meaning: 'ion hidroksonium (dalam larutan asid akueus)', unit: '—' },
              { symbol: 'NH_4^+', meaning: 'ion ammonium', unit: '—' },
            ],
            appliesWhen: 'Menerangkan pembubaran $HCl$ dalam air atau tindak balas gas $NH_3$ dengan asid.',
            failsWhen: 'Jangan katakan $H^+$ berkongsi elektronnya sendiri — $H^+$ mempunyai $0$ elektron!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-ionic-covalent-bonds',
            title: 'Skema Ikatan Datif dalam Ion Ammonium ($NH_4^+$)',
            whatItShows: 'Molekul $NH_3$ menderma sepasang elektron bebas daripada atom N kepada ion $H^+$.',
            axisOrRule: 'Klik tab "Ikatan Datif (NH₄⁺)" untuk melihat sumbangan sepasang elektron daripada satu atom sahaja.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Kedua-dua Jenis Ikatan dalam $NH_4Cl$',
          problem:
            'Pepejal ammonium klorida, $NH_4Cl$ mengandungi tiga jenis ikatan kimia yang berbeza. Namakan jenis ikatan tersebut.',
          given: ['Terdiri daripada ion $NH_4^+$ dan ion $Cl^-$'],
          formulaLatex: 'NH_4^+ \\text{ (3 kovalen tunggal } + \\text{ 1 datif)} \\;+\\; Cl^- \\text{ (ikatan ion)}',
          formulaWhy: 'Di dalam ion $NH_4^+$ ada ikatan kovalen & datif; antara $NH_4^+$ dengan $Cl^-$ ada ikatan ion.',
          substituteLatex: '\\text{1. Ikatan ion, 2. Ikatan kovalen, 3. Ikatan datif}',
          answer: 'Ikatan ion (antara $NH_4^+$ dengan $Cl^-$), ikatan kovalen tunggal (3 ikatan $N-H$), dan ikatan datif ($N \\to H^+$).',
          trapAlert: 'Dalam melukis ion $NH_4^+$, pastikan kedua-dua elektron pada ikatan keempat menggunakan simbol atom $N$ (cth: dua titik $\\bullet\\bullet$, bukan titik-pangkah)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah perbezaan ikatan datif daripada ikatan kovalen biasa?',
            answer: 'Pasangan elektron dikongsi berasal daripada satu atom sahaja, bukannya sumbangan kedua-dua atom.',
          },
          {
            question: 'Mengapakah ion $H^+$ dapat membentuk ikatan datif dengan $H_2O$?',
            answer: 'Kerana $H^+$ tidak mempunyai elektron (petala kosong) manakala atom oksigen dalam $H_2O$ mempunyai pasangan elektron bebas.',
          },
          {
            question: 'Apakah tanda anak panah yang mewakili ikatan datif dalam struktur molekul?',
            answer: 'Anak panah tunggal ($\\to$) dari atom penderma ke atom penerima.',
          },
        ],
        fadedProblem: {
          prompt: 'Gas ammonia bertindak balas dengan boron trifluorida membentuk $H_3N \\to BF_3$.',
          step1GivenAndFormula: 'Atom $N$ ($Z=7$) dalam $NH_3$ ada 1 pasangan elektron bebas; atom $B$ ($Z=5$) dalam $BF_3$ hanya ada 6 elektron di petala valensnya.',
          studentTask: 'Terangkan pembentukan ikatan datif antara $NH_3$ dengan $BF_3$.',
          answerSteps: 'Atom nitrogen dalam $NH_3$ menyumbangkan pasangan elektron bebasnya untuk dikongsi dengan atom boron dalam $BF_3$, menjadikan kedua-duanya mencapai susunan oktet yang stabil.',
        },
        transferQuestion: {
          question: 'Adakah molekul metana ($CH_4$) boleh bertindak balas dengan $H^+$ membentuk ikatan datif? Mengapa?',
          answer: 'Tidak boleh, kerana atom karbon dalam $CH_4$ telah menggunakan kesemua 4 elektron valensnya dalam ikatan kovalen dan tidak mempunyai pasangan elektron bebas.',
        },
      },
    },
    {
      id: 'k4-5.6',
      chapterId: 'k4-bab-5',
      code: '5.6',
      title: 'Ikatan Logam',
      pageRef: 'm.s. 121–122',
      part1Anchor: {
        phenomenon:
          'Bagaimanakah dawai kuprum boleh dibengkokkan tanpa patah dan pada masa yang sama mengalirkan arus elektrik sepanjang kabel rumah?',
        chapterConnection:
          'Menerangkan kekonduksian elektrik logam dalam keadaan pepejal sebelum membandingkannya dengan leburan sebatian ion dalam 5.7 dan sel elektrolisis Tingkatan 5.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ikatan Logam',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ikatan logam ialah ' },
            { text: 'daya tarikan elektrostatik antara lautan elektron valens yang dinyahsetempatkan dengan ion-ion logam bercas positif', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Logam Mengkonduksikan Elektrik (Walaupun dalam Keadaan Pepejal)',
            cause: 'Elektron valens atom logam mudah dilepaskan dan dinyahsetempatkan membentuk lautan elektron.',
            mechanism: 'Apabila beza keupayaan dibekalkan, elektron yang dinyahsetempatkan ini bergerak bebas membawa cas elektrik ke seluruh kekisi logam.',
            effect: 'Logam menjadi konduktor elektrik yang baik dalam keadaan pepejal dan cecair.',
          },
        ],
        tables: [
          {
            title: 'Perkaitan Struktur Logam dengan Sifat Fiziknya',
            headers: ['Sifat Logam', 'Penjelasan Struktur Lautan Elektron'],
            rows: [
              ['Konduktor elektrik baik', 'Elektron dinyahsetempatkan bergerak bebas membawa cas elektrik'],
              ['Takat lebur tinggi', 'Daya tarikan elektrostatik antara ion logam $+ve$ dengan lautan elektron adalah kuat'],
              ['Boleh ditempa & mulur', 'Lapisan ion logam dapat menggelongsor di antara satu sama lain tanpa memutuskan ikatan logam'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembentukan Lautan Elektron Logam',
            latex: '\\text{Atom logam tersusun rapat} \\longrightarrow \\text{Ion logam } (+ve) + \\text{Lautan } e^- \\text{ dinyahsetempatkan}',
            symbols: [
              { symbol: 'e^-\\text{ dinyahsetempatkan}', meaning: 'elektron bebas bergerak tidak terikat pada satu atom', unit: '—' },
            ],
            appliesWhen: 'Semua unsur logam tulen seperti kuprum, besi, aluminium, magnesium.',
            failsWhen: 'Jangan katakan logam mengkonduksi elektrik kerana "ion bebas bergerak"! Dalam logam pepejal, hanya ELEKTRON yang bergerak bebas (ion kekal bergetar pada kekisi).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Membezakan Mekanisme Kekonduksian Elektrik Logam vs Sebatian Ion',
          problem:
            'Pita magnesium mengkonduksikan elektrik dalam keadaan pepejal, manakala hablur magnesium klorida hanya mengkonduksikan elektrik apabila lebur atau akueus. Jelaskan perbezaannya.',
          given: ['Logam Mg: ikatan logam', 'Sebatian ion $MgCl_2$: ikatan ion'],
          formulaLatex: 'Mg\\text{: } e^-\\text{ bebas bergerak} \\quad|\\quad MgCl_2\\text{(ce): ion } Mg^{2+}, Cl^-\\text{ bebas bergerak}',
          formulaWhy: 'Pembawa cas berbeza antara konduktor logam dengan elektrolit ion.',
          substituteLatex: 'MgCl_2\\text{(p): ion terikat dalam kekisi}',
          answer: 'Magnesium mempunyai elektron dinyahsetempatkan yang bergerak bebas membawa cas dalam keadaan pepejal. Bagi pepejal $MgCl_2$, ion $Mg^{2+}$ dan $Cl^-$ terikat oleh daya elektrostatik kuat dan tidak dapat bergerak bebas; ia hanya bergerak bebas apabila dileburkan atau dilarutkan dalam air.',
          trapAlert: 'Frasa pemarkahan wajib: logam = **elektron yang dinyahsetempatkan bergerak bebas**; leburan ion = **ion-ion bergerak bebas**.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah maksud elektron yang dinyahsetempatkan?',
            answer: 'Elektron valens yang bebas bergerak di antara atom/ion logam dan tidak dimiliki oleh mana-mana atom tertentu.',
          },
          {
            question: 'Mengapakah ikatan logam sangat kuat?',
            answer: 'Kerana terdapat daya tarikan elektrostatik yang kuat antara ion logam positif dengan lautan elektron negatif.',
          },
          {
            question: 'Apakah zarah pembawa cas apabila wayar kuprum mengalirkan arus?',
            answer: 'Elektron.',
          },
        ],
        fadedProblem: {
          prompt: 'Aluminium mempunyai 3 elektron valens manakala natrium mempunyai 1 elektron valens.',
          step1GivenAndFormula: 'Bilangan elektron dinyahsetempatkan per atom $Al$ ($3$) lebih banyak daripada $Na$ ($1$) dan cas ion $Al^{3+}$ lebih tinggi daripada $Na^+$.',
          studentTask: 'Bandingkan kekuatan ikatan logam dan takat lebur antara aluminium dan natrium.',
          answerSteps: 'Daya tarikan elektrostatik antara ion $Al^{3+}$ dengan lautan elektron yang lebih banyak jauh lebih kuat; oleh itu takat lebur aluminium ($660\\,^\\circ\\text{C}$) lebih tinggi daripada natrium ($98\\,^\\circ\\text{C}$).',
        },
        transferQuestion: {
          question: 'Mengapakah kepingan kuprum boleh diketuk menjadi nipis tanpa pecah, sedangkan hablur garam $NaCl$ akan hancur berkecai apabila diketuk?',
          answer: 'Dalam kuprum, apabila lapisan ion logam menggelongsor, lautan elektron menyesuaikan diri dan mengekalkan daya tarikan ikatan logam; dalam $NaCl$, anjakan lapisan menyebabkan ion sama cas bertentangan menolak antara satu sama lain lalu hablur pecah.',
        },
      },
    },
    {
      id: 'k4-5.7',
      chapterId: 'k4-bab-5',
      code: '5.7',
      title: 'Sebatian Ion dan Sebatian Kovalen',
      pageRef: 'm.s. 122–130',
      part1Anchor: {
        phenomenon:
          'Garam dapur melarut dalam air dan langsung tidak cair di atas kuali biasa ($801\\,^\\circ\\text{C}$), sedangkan lilin dan naftalena cair serta-merta apabila dipanaskan perlahan serta hanya larut dalam pelarut organik.',
        chapterConnection:
          'Merumuskan seluruh Bab 5 dengan membandingkan struktur kekisi ion, molekul ringkas dan molekul gergasi terhadap sifat kekonduksian elektrik, takat lebur/didih dan keterlarutan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Struktur Kekisi Ion vs Struktur Molekul Ringkas vs Molekul Gergasi',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sebatian ion mempunyai kekisi ion dengan ' },
            { text: 'daya tarikan elektrostatik yang kuat antara ion', keyword: true },
            { text: '; sebatian kovalen ringkas mempunyai ' },
            { text: 'daya tarikan van der Waals yang lemah antara molekul', keyword: true },
            { text: '; sebatian kovalen gergasi ($SiO_2$, berlian) mempunyai ' },
            { text: 'ikatan kovalen yang sangat kuat merentasi struktur kekisi tiga dimensi', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Takat Lebur Sebatian Ion Jauh Lebih Tinggi Daripada Molekul Ringkas',
            cause: 'Ion positif dan negatif dalam $MgCl_2$ tertarik oleh daya tarikan elektrostatik yang kuat, manakala molekul naftalena tertarik oleh daya van der Waals yang lemah.',
            mechanism: 'Semasa peleburan, tenaga haba mesti mengatasi daya tarikan antara zarah tersebut (bukan memutuskan ikatan kovalen dalam molekul naftalena).',
            effect: 'Sebatian ion memerlukan tenaga haba jauh lebih tinggi untuk dileburkan berbanding sebatian kovalen ringkas.',
          },
        ],
        tables: [
          {
            title: 'Banding Beza Lengkap Sebatian Ion vs Sebatian Kovalen (Eksperimen 5.1)',
            headers: ['Sifat Fizik', 'Sebatian Ion (cth: $MgCl_2, PbBr_2$)', 'Sebatian Kovalen Ringkas (cth: Naftalena, Asetamida)'],
            rows: [
              ['Kekonduksian elektrik', 'Konduksi dalam keadaan **lebur & larutan akueus** (ion bebas bergerak); **tidak** dalam pepejal', '**Tidak** mengkonduksi dalam semua keadaan (wujud sebagai molekul neutral)'],
              ['Takat lebur & didih', '**Tinggi** (daya elektrostatik kuat antara ion)', '**Rendah** (daya van der Waals lemah antara molekul)'],
              ['Kemeruapan', 'Tidak meruap', 'Mudah meruap'],
              ['Keterlarutan', 'Biasanya **larut dalam air**, **tidak larut** dalam pelarut organik (sikloheksana/propanon)', 'Biasanya **larut dalam pelarut organik**, **tidak larut** dalam air (kecuali yang ada ikatan $H$)'],
            ],
          },
          {
            title: 'Pengecualian Penting: Molekul Ringkas vs Molekul Gergasi (SiO₂, Berlian, Grafit)',
            headers: ['Struktur Kovalen', 'Contoh', 'Takat Lebur & Sebab'],
            rows: [
              ['Molekul ringkas', '$CO_2, CH_4, C_{10}H_8$', 'Rendah — hanya daya van der Waals lemah antara molekul perlu diatasi'],
              ['Molekul gergasi', 'Berlian ($C$), Silikon(IV) oksida ($SiO_2$)', 'Sangat tinggi ($>1600\\,^\\circ\\text{C}$) — beribu-ribu ikatan kovalen kuat antara atom perlu diputuskan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kunci Jawapan Takat Lebur Kovalen Ringkas',
            latex: '\\text{Melebur/Mendidih molekul ringkas} = \\text{Mengatasi daya van der Waals (BUKAN putus ikatan kovalen!)}',
            symbols: [
              { symbol: '\\text{van der Waals}', meaning: 'daya tarikan antara molekul', unit: '—' },
            ],
            appliesWhen: 'Menerangkan takat lebur rendah naftalena, iodin, air, metana.',
            failsWhen: 'Perangkap nombor 1 SPM: jangan tulis "ikatan kovalen dalam molekul adalah lemah"! Ikatan kovalen dalam molekul sangat KUAT; yang lemah ialah **daya tarikan antara molekul**!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 5.1',
            title: 'Mengkaji Perbezaan Sifat Sebatian Ion dan Sebatian Kovalen',
            aim: 'Membandingkan kekonduksian elektrik, keterlarutan dan takat lebur antara sebatian ion ($MgCl_2 / PbBr_2$) dan sebatian kovalen (naftalena / asetamida).',
            inference: 'Sebatian ion dan sebatian kovalen mempunyai sifat fizik yang berbeza kerana jenis zarah dan daya tarikan berbeza.',
            hypothesis: 'Sebatian ion mengkonduksikan elektrik apabila lebur/akueus, larut dalam air dan bertakat lebur tinggi berbanding sebatian kovalen.',
            variables: {
              manipulated: 'Jenis sebatian (ion vs kovalen)',
              responding: 'Pesongan jarum ammeter / nyalaan mentol, keterlarutan dan keadaan apabila dipanaskan',
              fixed: 'Kuantiti sebatian, jenis elektrod karbon & voltan bateri',
            },
            setupLogic: 'Uji kekonduksian pepejal dahulu, kemudian panaskan hingga lebur; uji keterlarutan dalam air suling berbanding sikloheksana; panaskan dalam kukus air untuk membandingkan takat lebur.',
            expectedResult: '$PbBr_2 / MgCl_2$ hanya mengkonduksi apabila lebur/akueus; naftalena mencair cepat dalam kukus air dan larut dalam sikloheksana.',
            conclusion: 'Sebatian ion mempunyai takat lebur tinggi, larut dalam air dan mengkonduksi apabila lebur/akueus; sebatian kovalen ringkas bertakat lebur rendah dan tidak mengkonduksikan elektrik.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Skema Markah Penuh Perbandingan Kekonduksian & Takat Lebur',
          problem:
            'Natrium klorida ($NaCl$) mempunyai takat lebur $801\\,^\\circ\\text{C}$ manakala tetraklorometana ($CCl_4$) mendidih pada $77\\,^\\circ\\text{C}$. Jelaskan perbezaan ini serta kekonduksian elektrik kedua-duanya dalam keadaan cecair.',
          given: ['$NaCl$: sebatian ion', '$CCl_4$: sebatian kovalen ringkas'],
          formulaLatex: 'NaCl \\text{ (daya elektrostatik kuat)} \\quad|\\quad CCl_4 \\text{ (daya van der Waals lemah)}',
          formulaWhy: 'Bezakan jenis zarah dan jenis daya tarikan yang perlu diatasi.',
          substituteLatex: '\\text{Cecair } NaCl\\text{: ion } Na^+, Cl^- \\text{ bebas}; \\; CCl_4\\text{: molekul neutral}',
          answer: '$NaCl$ terdiri daripada ion $Na^+$ dan $Cl^-$ yang diikat oleh daya tarikan elektrostatik yang kuat, memerlukan banyak tenaga haba untuk diatasi (takat lebur tinggi), dan dalam keadaan lebur ion-ion bergerak bebas untuk mengkonduksikan elektrik. $CCl_4$ terdiri daripada molekul neutral yang hanya ditarik oleh daya van der Waals yang lemah antara molekul (takat didih rendah) dan tiada ion bebas, maka tidak mengkonduksikan elektrik.',
          trapAlert: 'Jangan lupa sebut jenis zarah (**ion** vs **molekul neutral**) dan nama daya yang tepat (**daya tarikan elektrostatik** vs **daya tarikan van der Waals antara molekul**).',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Memilih Bahan Kegunaan Kejuruteraan (Ion vs Kovalen)',
        rows: [
          {
            designChoice: 'Menggunakan silikon(IV) oksida ($SiO_2$, kuarza) sebagai lapisan relau suhu tinggi',
            scientificReason: 'Struktur molekul kovalen gergasi dengan ikatan kovalen sangat kuat memberikan takat lebur yang amat tinggi.',
          },
          {
            designChoice: 'Menggunakan pelarut organik (cth: aseton/turpentin) untuk menanggalkan kotoran gris atau cat',
            scientificReason: 'Gris dan cat ialah sebatian kovalen yang melarut baik dalam pelarut organik tetapi tidak larut dalam air.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah pepejal $NaCl$ tidak mengkonduksikan elektrik?',
            answer: 'Kerana ion $Na^+$ dan $Cl^-$ terikat rapat pada kedudukan tetap dalam kekisi dan tidak dapat bergerak bebas.',
          },
          {
            question: 'Adakah ikatan kovalen di dalam molekul naftalena putus semasa naftalena melebur?',
            answer: 'Tidak; hanya daya van der Waals yang lemah antara molekul diatasi.',
          },
          {
            question: 'Berikan dua contoh sebatian kovalen yang mempunyai struktur molekul gergasi.',
            answer: 'Berlian (karbon) dan silikon(IV) oksida ($SiO_2$).',
          },
        ],
        fadedProblem: {
          prompt: 'Sebatian $M$ tidak larut dalam air tetapi larut dalam sikloheksana, cepat melebur pada $68\\,^\\circ\\text{C}$, dan tidak menyalakan mentol semasa lebur.',
          step1GivenAndFormula: 'Sifat: takat lebur rendah, larut dlm pelarut organik, bukan konduktor elektrik.',
          studentTask: 'Kelaskan jenis ikatan dalam sebatian $M$ dan jenis zarahnya.',
          answerSteps: '$M$ ialah sebatian kovalen dengan struktur molekul ringkas yang terdiri daripada molekul-molekul neutral.',
        },
        transferQuestion: {
          question: 'Gas hidrogen klorida ($HCl$) ialah sebatian kovalen dan tidak mengkonduksikan elektrik apabila dilarutkan dalam metilbenzena, tetapi mengkonduksikan elektrik dengan baik apabila dilarutkan dalam air. Mengapa?',
          answer: 'Dalam metilbenzena, $HCl$ kekal sebagai molekul kovalen neutral tanpa ion bebas. Dalam air, molekul $HCl$ mengion menghasilkan ion $H^+$ ($H_3O^+$) dan $Cl^-$ yang bergerak bebas.',
        },
      },
    },
  ],
};
