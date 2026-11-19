import type { ChapterContent } from '../types/textbook';

export const k4bab3: ChapterContent = {
  id: 'k4-bab-3',
  subject: 'kimia',
  formLevel: 4,
  number: 3,
  title: 'Konsep Mol, Formula dan Persamaan Kimia',
  pageRange: 'm.s. 42–77',
  overview:
    'Menguasai skala karbon-12 ($JAR, JMR, JFR$), jambatan konsep mol ($N_A$, jisim molar, isi padu molar STP & keadaan bilik), penentuan formula empirik (MgO vs CuO), formula sebatian ion dan pengiraan stoikiometri.',
  subtopics: [
    {
      id: 'k4-3.1',
      chapterId: 'k4-bab-3',
      code: '3.1',
      title: 'Jisim Atom Relatif dan Jisim Molekul Relatif',
      pageRef: 'm.s. 44–49',
      part1Anchor: {
        phenomenon:
          'Satu atom hidrogen hanya berjisim $1.67 \\times 10^{-24}\\text{ g}$ — terlalu kecil untuk ditimbang oleh mana-mana neraca. Ahli kimia menggantikan timbangan mutlak dengan perbandingan relatif terhadap $\\frac{1}{12}$ jisim satu atom Karbon-12.',
        chapterConnection:
          'Menyediakan nilai tanpa unit $JAR$, $JMR$ dan $JFR$ yang menjadi asas kepada jisim molar dalam subtopik 3.2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Jisim Atom Relatif ($JAR$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Jisim atom relatif sesuatu unsur ialah ' },
            { text: 'jisim purata satu atom unsur itu berbanding dengan $\\frac{1}{12}$ daripada jisim satu atom karbon-12', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\text{JAR} = \\frac{\\text{Jisim purata satu atom unsur}}{\\frac{1}{12} \\times \\text{jisim satu atom karbon-12}}',
        },
        {
          title: 'Jisim Molekul Relatif ($JMR$) & Jisim Formula Relatif ($JFR$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'JMR digunakan bagi bahan ' },
            { text: 'sebatian kovalen (molekul)', keyword: true },
            { text: ', manakala JFR digunakan bagi ' },
            { text: 'sebatian ion', keyword: true },
            { text: ' dengan menjumlahkan semua JAR atom dalam formulanya.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Karbon-12 Dipilih Sebagai Piawai Antarabangsa',
            cause: 'Keperluan satu atom piawai yang stabil dan mudah dikendalikan.',
            mechanism: 'Karbon-12 berbentuk pepejal pada suhu bilik, sangat stabil, paling melimpah (98.9%), dan memberikan nilai JAR hampir kepada nombor bulat (C-12 = 12 tepat, H $\\approx 1$).',
            effect: 'Semua skala jisim atom sedunia menjadi seragam dan jitu.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan JAR, JMR dan JFR',
            headers: ['Istilah', 'Jenis Bahan', 'Contoh Pengiraan'],
            rows: [
              ['Jisim Atom Relatif ($JAR$)', 'Unsur atom tunggal', '$O = 16$, $Mg = 24$, $Na = 23$'],
              ['Jisim Molekul Relatif ($JMR$)', 'Molekul kovalen ($H_2O, CO_2, NH_3$)', '$JMR(CO_2) = 12 + 2(16) = 44$'],
              ['Jisim Formula Relatif ($JFR$)', 'Sebatian ion ($NaCl, CuSO_4\\cdot 5H_2O$)', '$JFR(Na_2CO_3) = 2(23) + 12 + 3(16) = 106$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pengiraan JMR / JFR Sebatian Terhidrat',
            latex: '\\text{JFR}(CuSO_4 \\cdot 5H_2O) = 64 + 32 + 4(16) + 5[2(1) + 16] = 250',
            symbols: [
              { symbol: '\\cdot 5H_2O', meaning: '5 molekul air penghabluran', unit: 'tiada unit' },
            ],
            appliesWhen: 'Mengira jisim formula relatif garam terhidrat seperti $CuSO_4\\cdot 5H_2O$ atau $Na_2CO_3\\cdot 10H_2O$.',
            failsWhen: 'Tanda titik ($\\cdot$) bermaksud TAMBAH jisim air penghabluran, BUKAN darab antara $CuSO_4$ dan $5H_2O$!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira JFR Sebatian Ion Kompleks',
          problem:
            'Hitung jisim formula relatif bagi aluminium sulfat, $Al_2(SO_4)_3$. [JAR: $Al=27, S=32, O=16$]',
          given: ['Bilangan atom: $2\\ Al$, $3\\ S$, $3 \\times 4 = 12\\ O$'],
          formulaLatex: '\\text{JFR} = 2(\\text{JAR Al}) + 3(\\text{JAR S} + 4\\text{ JAR O})',
          formulaWhy: 'Subskrip 3 di luar kurungan mendarabkan semua atom di dalam $(SO_4)$.',
          substituteLatex: '\\text{JFR} = 2(27) + 3(32 + 64) = 54 + 288',
          answer: '$\\text{JFR} = 342$ (tiada unit)',
          trapAlert: 'Kesilapan paling kerap: hanya mendarab $O_4$ dengan 3 tanpa mendarab atom $S$ di dalam kurungan!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berikan dua sebab mengapa karbon-12 dipilih sebagai atom piawai.',
            answer: 'Berbentuk pepejal mudah dikendali dan merupakan isotop karbon paling stabil/melimpah.',
          },
          {
            question: 'Apakah istilah yang betul bagi $MgCl_2$: JMR atau JFR?',
            answer: 'JFR (Jisim Formula Relatif) kerana $MgCl_2$ ialah sebatian ion.',
          },
          {
            question: 'Adakah $JAR$, $JMR$ dan $JFR$ mempunyai unit?',
            answer: 'Tiada unit kerana ia merupakan nilai nisbah perbandingan.',
          },
        ],
        fadedProblem: {
          prompt: 'Hitung JMR bagi glukosa, $C_6H_{12}O_6$ dan JFR bagi ammonium karbonat, $(NH_4)_2CO_3$. [JAR: $H=1, C=12, N=14, O=16$]',
          step1GivenAndFormula: '$JMR(C_6H_{12}O_6) = 6(12) + 12(1) + 6(16)$.',
          studentTask: 'Kira kedua-dua nilai tersebut dengan tepat.',
          answerSteps: '$JMR(C_6H_{12}O_6) = 72 + 12 + 96 = 180$; $JFR((NH_4)_2CO_3) = 2(14 + 4) + 12 + 3(16) = 36 + 12 + 48 = 96$.',
        },
        transferQuestion: {
          question: 'Berapa kalikah lebih beratkah satu atom kalsium ($JAR = 40$) berbanding satu atom neon ($JAR = 20$)?',
          answer: 'Dua kali ganda ($\\frac{40}{20} = 2$), iaitu 2 atom neon mempunyai jisim yang sama dengan 1 atom kalsium.',
        },
      },
    },
    {
      id: 'k4-3.2',
      chapterId: 'k4-bab-3',
      code: '3.2',
      title: 'Konsep Mol',
      pageRef: 'm.s. 49–58',
      part1Anchor: {
        phenomenon:
          'Sebagaimana peniaga mengira telur dengan "dozen" ($12$) atau kertas dengan "rim" ($500$), ahli kimia mengira atom dan molekul menggunakan unit "mol" ($6.02 \\times 10^{23}$ zarah).',
        chapterConnection:
          'Menyatukan bilangan zarah, jisim (gram) dan isi padu gas ($dm^3$) melalui jambatan bilangan mol ($n$) untuk semua pengiraan stoikiometri SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Mol ($n$) & Pemalar Avogadro ($N_A$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Satu mol ialah ' },
            { text: 'kuantiti bahan yang mengandungi bilangan zarah sebanyak bilangan atom dalam 12 g karbon-12', keyword: true },
            { text: ', iaitu ' },
            { text: '$6.02 \\times 10^{23}$ zarah ($N_A$)', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Jisim Molar & Isi Padu Molar',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Jisim molar ialah ' },
            { text: 'jisim bagi satu mol bahan ($\\text{g mol}^{-1}$)', keyword: true },
            { text: '; isi padu molar ialah ' },
            { text: 'isi padu yang ditempati oleh 1 mol gas ($22.4\\text{ dm}^3\\text{ mol}^{-1}$ pada STP; $24\\text{ dm}^3\\text{ mol}^{-1}$ pada keadaan bilik)', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Semua Gas Mempunyai Isi Padu Molar Sama pada Suhu & Tekanan Sama',
            cause: 'Jarak antara molekul gas sangat jauh berbanding saiz sebenar molekul gas itu sendiri.',
            mechanism: 'Isi padu gas ditentukan oleh ruang kosong antara zarah yang bergantung hanya kepada suhu, tekanan dan bilangan mol ($V \\propto n$).',
            effect: '$1\\text{ mol}$ gas $H_2$ dan $1\\text{ mol}$ gas $CO_2$ menempati tepat $24\\text{ dm}^3$ pada keadaan bilik walaupun jisim molarnya jauh berbeza.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan STP vs Keadaan Bilik',
            headers: ['Keadaan', 'Suhu & Tekanan', 'Isi Padu Molar ($V_m$)'],
            rows: [
              ['STP (Suhu dan Tekanan Piawai)', '$0\\,^\\circ\\text{C}$ ($273\\text{ K}$), $1\\text{ atm}$', '$22.4\\text{ dm}^3\\text{ mol}^{-1}$'],
              ['Keadaan bilik', '$25\\,^\\circ\\text{C}$ ($298\\text{ K}$), $1\\text{ atm}$', '$24\\text{ dm}^3\\text{ mol}^{-1}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Jambatan Tiga Hala Konsep Mol ($n$)',
            latex: 'n = \\frac{\\text{Bilangan zarah}}{N_A} = \\frac{\\text{Jisim (g)}}{\\text{Jisim molar (g mol}^{-1}\\text{)}} = \\frac{\\text{Isi padu gas (dm}^3\\text{)}}{V_m}',
            symbols: [
              { symbol: 'N_A', meaning: 'pemalar Avogadro', unit: '$6.02 \\times 10^{23}\\text{ mol}^{-1}$' },
              { symbol: 'V_m', meaning: 'isi padu molar gas', unit: '$22.4$ (STP) / $24\\text{ dm}^3\\text{ mol}^{-1}$ (bilik)' },
            ],
            appliesWhen: 'Menukar antara jisim, bilangan zarah (atom/molekul/ion) dan isi padu gas.',
            failsWhen: 'Jangan guna $V_m$ untuk CECAIR (seperti air atau etanol) atau PEPEJAL! Dan tukar $\\text{cm}^3 \\to \\text{dm}^3$ dengan membahagi $1000$.',
          },
        ],
        diagrams: [
          {
            kind: 'chem-mole-bridge',
            title: 'Peta Jambatan Konsep Mol ($n$)',
            whatItShows: 'Semua penukaran antara zarah, jisim, isi padu gas dan kemolaran mesti melalui bilangan mol ($n$) di pusat.',
            axisOrRule: 'Menuju KE pusat ($n$): BAHAGI pemalar. Keluar DARI pusat ($n$): DARAB pemalar.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Penukaran Dua Langkah (Isi Padu Gas → Bilangan Atom)',
          problem:
            'Hitung jumlah bilangan atom yang terdapat dalam $6.0\\text{ dm}^3$ gas ammonia, $NH_3$ pada keadaan bilik. [$N_A = 6.02 \\times 10^{23}\\text{ mol}^{-1}$, $V_m = 24\\text{ dm}^3\\text{ mol}^{-1}$]',
          given: ['$V(NH_3) = 6.0\\text{ dm}^3$', '1 molekul $NH_3$ mengandungi $1 + 3 = 4$ atom'],
          formulaLatex: 'n = \\frac{V}{V_m}, \\quad \\text{Bil. atom} = n \\times N_A \\times 4',
          formulaWhy: 'Soalan meminta bilangan ATOM, bukan bilangan molekul $NH_3$.',
          substituteLatex: 'n = \\frac{6.0}{24} = 0.25\\text{ mol} \\Rightarrow \\text{Atom} = 0.25 \\times 6.02 \\times 10^{23} \\times 4',
          answer: '$6.02 \\times 10^{23}$ atom.',
          trapAlert: 'Ramai pelajar berhenti selepas mengira $0.25 \\times 6.02 \\times 10^{23}$ (itu hanya bilangan MOLEKUL!). Sentiasa semak sama ada soalan tanya atom, molekul atau ion.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah nilai $N_A$ dan $V_m$ pada STP?',
            answer: '$N_A = 6.02 \\times 10^{23}\\text{ mol}^{-1}$; $V_m(\\text{STP}) = 22.4\\text{ dm}^3\\text{ mol}^{-1}$.',
          },
          {
            question: 'Berapakah mol ion yang terdapat dalam $1\\text{ mol}$ $CaCl_2$?',
            answer: '$3\\text{ mol}$ ion ($1\\text{ mol } Ca^{2+}$ dan $2\\text{ mol } Cl^-$).',
          },
          {
            question: 'Berapakah jisim $0.5\\text{ mol}$ gas oksigen, $O_2$? [JAR: $O=16$]',
            answer: '$0.5 \\times 32 = 16\\text{ g}$.',
          },
        ],
        fadedProblem: {
          prompt: 'Hitung isi padu yang ditempati oleh $8.8\\text{ g}$ gas karbon dioksida, $CO_2$ pada keadaan STP. [JAR: $C=12, O=16$; $V_m(\\text{STP})=22.4\\text{ dm}^3\\text{ mol}^{-1}$]',
          step1GivenAndFormula: 'Jisim molar $CO_2 = 12 + 2(16) = 44\\text{ g mol}^{-1}$; $n = \\frac{\\text{jisim}}{\\text{jisim molar}}$.',
          studentTask: 'Kira bilangan mol $CO_2$, kemudian darabkan dengan $V_m$ pada STP.',
          answerSteps: '$n = \\frac{8.8}{44} = 0.2\\text{ mol}$; $V = 0.2 \\times 22.4 = 4.48\\text{ dm}^3$.',
        },
        transferQuestion: {
          question: 'Adakah $1\\text{ dm}^3$ air cecair mempunyai bilangan mol yang sama dengan $1\\text{ dm}^3$ gas oksigen pada keadaan bilik?',
          answer: 'Tidak. Formula $V/V_m$ hanya sah bagi gas. Ketumpatan air cecair ($1\\text{ g cm}^{-3}$) jauh lebih tinggi; $1\\text{ dm}^3$ air mempunyai jisim $1000\\text{ g}$ ($\\approx 55.6\\text{ mol}$), berbanding gas $O_2$ ($\\approx 0.042\\text{ mol}$).',
        },
      },
    },
    {
      id: 'k4-3.3',
      chapterId: 'k4-bab-3',
      code: '3.3',
      title: 'Formula Kimia',
      pageRef: 'm.s. 59–69',
      part1Anchor: {
        phenomenon:
          'Glukosa ialah $C_6H_{12}O_6$, tetapi analisis pembakaran hanya mendedahkan nisbah paling ringkas $CH_2O$. Bagaimana ahli kimia menentukan kedua-dua formula empirik ($MgO$ vs $CuO$) dan membina formula sebatian ion?',
        chapterConnection:
          'Menghubungkan konsep mol terus kepada eksperimen penentuan formula empirik oksida logam dan penulisan formula kimia yang tepat sebelum mengimbang persamaan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Formula Empirik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Formula empirik ialah formula kimia yang menunjukkan ' },
            { text: 'nisbah paling ringkas bagi bilangan atom setiap jenis unsur', keyword: true },
            { text: ' dalam suatu sebatian.' },
          ],
        },
        {
          title: 'Formula Molekul',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Formula molekul ialah formula kimia yang menunjukkan ' },
            { text: 'bilangan sebenar atom bagi setiap jenis unsur', keyword: true },
            { text: ' yang terdapat dalam satu molekul sebatian.' },
          ],
          equationLatex: '\\text{Formula Molekul} = (\\text{Formula Empirik})_n',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Penutup Mangkuk Pijar Dibuka & Ditutup Sekali-sekala dalam Aktiviti MgO',
            cause: 'Magnesium bertindak balas cergas dengan oksigen udara di dalam mangkuk pijar.',
            mechanism: 'Membuka penutup seketika membenarkan oksigen masuk, manakala menutupnya segera menghalang wasap putih magnesium oksida terbebas keluar.',
            effect: 'Semua magnesium terbakar lengkap dan jisim $MgO$ yang ditimbang kekal tepat.',
          },
          {
            title: 'Mengapa Gas $H_2$ Kering Dialirkan Sebelum & Semasa Penyejukan dalam Aktiviti CuO',
            cause: 'Udara di dalam tiub pembakaran mengandungi oksigen, manakala kuprum panas mudah teroksida semula.',
            mechanism: 'Aliran awal menyingkirkan semua udara (mengelakkan letupan campuran $H_2 + O_2$); aliran semasa sejuk menghalang kuprum panas bertindak balas semula dengan udara membentuk $CuO$ hitam.',
            effect: 'Eksperimen selamat dan pepejal kuprum perang tulen diperoleh.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Dua Kaedah Menentukan Formula Empirik Oksida Logam',
            headers: ['Aspek', 'Aktiviti 3.12: Pembakaran Mg ($MgO$)', 'Aktiviti 3.13: Penurunan $CuO$ oleh $H_2$ ($CuO$)'],
            rows: [
              ['Kereaktifan logam', 'Logam lebih reaktif daripada $H_2$ ($Mg, Zn, Al$)', 'Logam kurang reaktif daripada $H_2$ ($Cu, Pb, Sn$)'],
              ['Prinsip tindak balas', 'Logam dibakar dengan oksigen ($2Mg + O_2 \\to 2MgO$)', 'Oksida logam diturunkan oleh gas $H_2$ ($CuO + H_2 \\to Cu + H_2O$)'],
              ['Langkah pengulangan', 'Panaskan, sejukkan, timbang sehingga jisim tetap', 'Alirkan $H_2$, panaskan, sejukkan dlm aliran $H_2$, timbang hingga jisim tetap'],
              ['Pemerhatian khas', 'Nyalaan putih berkilau, wasap/serbuk putih', 'Serbuk hitam $CuO$ bertukar kepada pepejal perang $Cu$'],
            ],
          },
          {
            title: 'Senarai Ion Poliatom Wajib Hafal SPM',
            headers: ['Kation ($+ve$)', 'Anion ($-ve$)', 'Anion Poliatom'],
            rows: [
              ['$NH_4^+$ (ammonium)', '$O^{2-}$ (oksida), $Cl^-$ (klorida)', '$OH^-$ (hidroksida), $NO_3^-$ (nitrat)'],
              ['$Cu^{2+}, Fe^{2+}, Fe^{3+}$', '$Br^-$ (bromida), $I^-$ (iodida)', '$SO_4^{2-}$ (sulfat), $CO_3^{2-}$ (karbonat)'],
              ['$Ag^+, Zn^{2+}, Pb^{2+}, Al^{3+}$', '$S^{2-}$ (sulfida)', '$PO_4^{3-}$ (fosfat), $MnO_4^-$ (manganat(VII))'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Mencari Nilai $n$ Formula Molekul',
            latex: 'n = \\frac{\\text{JMR Sebatian}}{\\text{Jisim Formula Empirik}}',
            symbols: [
              { symbol: 'n', meaning: 'integer positif ($1, 2, 3\\dots$)', unit: '—' },
            ],
            appliesWhen: 'Diberi formula empirik dan jisim molekul relatif ($JMR$).',
            failsWhen: 'Jangan lupa darabkan SETIAP subskrip unsur dalam formula empirik dengan $n$.',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Aktiviti 3.12 & 3.13',
            title: 'Penentuan Formula Empirik Magnesium Oksida & Kuprum(II) Oksida',
            aim: 'Menentukan formula empirik $MgO$ (pembakaran) dan $CuO$ (penurunan oleh hidrogen).',
            inference: 'Formula empirik diperoleh daripada nisbah mol paling ringkas logam kepada oksigen.',
            hypothesis: 'Nisbah mol $Mg:O$ ialah $1:1$ ($MgO$) dan nisbah mol $Cu:O$ ialah $1:1$ ($CuO$).',
            variables: {
              manipulated: 'Unsur logam berbeza ($Mg$ reaktif vs $Cu$ kurang reaktif)',
              responding: 'Jisim logam dan jisim oksigen yang bergabung',
              fixed: 'Pemanasan dan penimbangan berulang sehingga jisim tetap',
            },
            setupLogic: 'Bagi $Mg$, gosok pita magnesium dengan kertas pasir untuk menyingkirkan lapisan oksida, bakar dalam mangkuk pijar bertutup (buka sekali-sekala). Bagi $CuO$, hasilkan $H_2$ daripada $Zn + HCl$ (bermangkin $CuSO_4$) dan keringkan dengan $CaCl_2$ kontang sebelum mengalir ke atas $CuO$.',
            expectedResult: 'Nisbah mol terhitung menghampiri $1:1$ bagi kedua-dua oksida.',
            conclusion: 'Formula empirik magnesium oksida ialah $MgO$ dan kuprum(II) oksida ialah $CuO$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira Formula Empirik & Formula Molekul daripada Jisim',
          problem:
            'Suatu sebatian hidrokarbon mengandungi $85.7\\%$ karbon dan $14.3\\%$ hidrogen mengikut jisim. JMR sebatian ialah $56$. Tentukan formula empirik dan formula molekulnya. [JAR: $C=12, H=1$]',
          given: ['Dalam $100\\text{ g}$: $m(C) = 85.7\\text{ g}$, $m(H) = 14.3\\text{ g}$'],
          formulaLatex: 'n(C) = \\frac{85.7}{12} = 7.14, \\quad n(H) = \\frac{14.3}{1} = 14.3',
          formulaWhy: 'Bahagi setiap bilangan mol dengan nilai mol paling kecil ($7.14$).',
          substituteLatex: '\\text{Nisbah } C:H = \\frac{7.14}{7.14} : \\frac{14.3}{7.14} = 1 : 2 \\Rightarrow (CH_2)_n = 56 \\Rightarrow 14n = 56',
          answer: 'Formula empirik = $CH_2$; $n = 4$; Formula molekul = $C_4H_8$.',
          trapAlert: 'Jika nisbah mol menghasilkan pecahan $.5$ (cth: $1 : 1.5$), JANGAN bundarkan menjadi $1:2$! Darab kedua-dua nombor dengan $2$ supaya menjadi $2:3$.',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Langkah Kritis Aktiviti 3.12 (MgO) & Aktiviti 3.13 (CuO)',
        rows: [
          {
            designChoice: 'Menggosok pita magnesium dengan kertas pasir sebelum menimbang',
            scientificReason: 'Menyingkirkan lapisan magnesium oksida pada permukaan pita supaya hanya magnesium tulen ditimbang.',
          },
          {
            designChoice: 'Mengulang pemanasan, penyejukan dan penimbangan hingga jisim tetap',
            scientificReason: 'Memastikan tindak balas berlaku lengkap dan semua $Mg$ bertukar menjadi $MgO$ (atau semua $CuO$ diturunkan kepada $Cu$).',
          },
          {
            designChoice: 'Mengalirkan gas $H_2$ kering sebelum pemanasan dan diteruskan semasa penyejukan $Cu$',
            scientificReason: 'Menyingkirkan udara untuk mengelakkan letupan serta mencegah kuprum panas teroksida semula menjadi $CuO$.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah kaedah pembakaran terus sesuai untuk $MgO$ tetapi kaedah penurunan hidrogen digunakan untuk $CuO$?',
            answer: 'Kerana $Mg$ lebih reaktif daripada hidrogen, manakala $Cu$ kurang reaktif daripada hidrogen (maka $H_2$ boleh menurunkan $CuO$).',
          },
          {
            question: 'Tulis formula kimia bagi kalsium nitrat dan ferum(III) oksida.',
            answer: '$Ca(NO_3)_2$ dan $Fe_2O_3$.',
          },
          {
            question: 'Apakah fungsi kalsium klorida kontang ($CaCl_2$) dalam Aktiviti 3.13?',
            answer: 'Mengeringkan gas hidrogen sebelum dialirkan ke atas kuprum(II) oksida.',
          },
        ],
        fadedProblem: {
          prompt: '$2.4\\text{ g}$ magnesium bergabung lengkap dengan $1.6\\text{ g}$ oksigen. [JAR: $Mg=24, O=16$]',
          step1GivenAndFormula: '$n(Mg) = \\frac{2.4}{24} = 0.1\\text{ mol}$; $n(O) = \\frac{1.6}{16} = 0.1\\text{ mol}$.',
          studentTask: 'Tentukan nisbah paling ringkas dan tulis formula empirik sebatian itu.',
          answerSteps: 'Nisbah $Mg:O = 0.1:0.1 = 1:1$, maka formula empirik ialah $MgO$.',
        },
        transferQuestion: {
          question: 'Apakah yang berlaku kepada keputusan formula empirik $MgO$ jika penutup mangkuk pijar tidak ditutup dan banyak wasap putih terbebas keluar?',
          answer: 'Jisim hasil $MgO$ tertimbang akan kurang daripada nilai sebenar, menyebabkan jisim oksigen terhitung berkurang dan nisbah mol $O$ menjadi terlampau rendah.',
        },
      },
    },
    {
      id: 'k4-3.4',
      chapterId: 'k4-bab-3',
      code: '3.4',
      title: 'Persamaan Kimia',
      pageRef: 'm.s. 69–75',
      part1Anchor: {
        phenomenon:
          'Dalam tindak balas kimia, atom tidak dicipta mahupun dimusnahkan — hanya disusun semula. Persamaan kimia seimbang berfungsi sebagai resipi kuantitatif tepat untuk meramal jisim hasil atau isi padu gas.',
        chapterConnection:
          'Melengkapkan Bab 3 dengan menggabungkan formula kimia dan konsep mol ke dalam pengiraan stoikiometri 3-langkah yang digunakan dalam seluruh Kimia SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Persamaan Kimia Seimbang',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Persamaan kimia seimbang menunjukkan ' },
            { text: 'bahan tindak balas di sebelah kiri, hasil tindak balas di sebelah kanan, serta bilangan atom setiap unsur yang sama di kedua-dua belah', keyword: true },
            { text: ' beserta simbol keadaan fizik: ' },
            { text: '$(p), (ce), (g), (ak)$', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Algoritma 3-Langkah Pengiraan Stoikiometri SPM',
            cause: 'Diberi kuantiti bahan A dan diminta kuantiti bahan B.',
            mechanism: 'Langkah 1: Kira $n(A)$ daripada jisim/isi padu/zarah. Langkah 2: Gunakan nisbah pekali stoikiometri dalam persamaan seimbang untuk dapat $n(B)$. Langkah 3: Tukar $n(B)$ ke unit diminta.',
            effect: 'Menyelesaikan sebarang soalan kuantitatif tindak balas kimia secara kalis kesilapan.',
          },
        ],
        tables: [
          {
            title: 'Tafsiran Kualitatif & Kuantitatif Persamaan Kimia',
            headers: ['Jenis Tafsiran', 'Contoh: $2H_2(g) + O_2(g) \\longrightarrow 2H_2O(ce)$'],
            rows: [
              ['Kualitatif', 'Gas hidrogen bertindak balas dengan gas oksigen menghasilkan cecair air'],
              ['Kuantitatif (Mol)', '$2\\text{ mol}$ molekul $H_2$ bertindak balas dengan $1\\text{ mol}$ molekul $O_2$ menghasilkan $2\\text{ mol}$ molekul $H_2O$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Perbandingan Nisbah Stoikiometri',
            latex: 'aA + bB \\longrightarrow cC \\quad\\Longrightarrow\\quad \\frac{n(A)}{a} = \\frac{n(B)}{b} = \\frac{n(C)}{c}',
            symbols: [
              { symbol: 'a, b, c', meaning: 'pekali imbangan di hadapan formula', unit: 'mol' },
            ],
            appliesWhen: 'Hanya selepas persamaan kimia dipastikan seimbang sempurna.',
            failsWhen: 'Jangan ubah nombor subskrip formula (cth: ubah $H_2O$ jadi $H_2O_2$) semata-mata untuk mengimbang persamaan!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Pengiraan Stoikiometri Lengkap 3-Langkah',
          problem:
            'Magnesium bertindak balas dengan asid hidroklorik berlebihan: $Mg(p) + 2HCl(ak) \\to MgCl_2(ak) + H_2(g)$. Hitung isi padu gas hidrogen terbebas pada keadaan bilik apabila $1.2\\text{ g}$ magnesium bertindak balas lengkap. [JAR: $Mg=24$, $V_m = 24\\text{ dm}^3\\text{ mol}^{-1}$]',
          given: ['$m(Mg) = 1.2\\text{ g}$, $V_m = 24\\text{ dm}^3\\text{ mol}^{-1}$'],
          formulaLatex: 'n(Mg) = \\frac{m}{\\text{JAR}}, \\quad \\text{Nisbah } 1\\text{ mol } Mg : 1\\text{ mol } H_2',
          formulaWhy: 'Tukarkan jisim bahan diketahui kepada mol, pindah ikut nisbah pekali, lalu tukar kepada isi padu.',
          substituteLatex: 'n(Mg) = \\frac{1.2}{24} = 0.05\\text{ mol} \\Rightarrow n(H_2) = 0.05\\text{ mol} \\Rightarrow V(H_2) = 0.05 \\times 24',
          answer: '$1.2\\text{ dm}^3$ (atau $1200\\text{ cm}^3$).',
          trapAlert: 'Sentiasa seimbangkan persamaan dahulu! Jika guna $Al + HCl$, nisbahnya ialah $2Al : 3H_2$, bukan $1:1$.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah maksud simbol keadaan fizik $(p), (ce), (g), (ak)$?',
            answer: 'Pepejal $(p)$, cecair $(ce)$, gas $(g)$, dan larutan akueus $(ak)$.',
          },
          {
            question: 'Seimbangkan persamaan: $\\_Fe(p) + \\_Cl_2(g) \\to \\_FeCl_3(p)$.',
            answer: '$2Fe(p) + 3Cl_2(g) \\to 2FeCl_3(p)$.',
          },
          {
            question: 'Bolehkah subskrip dalam formula kimia diubah semasa mengimbang persamaan?',
            answer: 'Tidak boleh; hanya pekali di hadapan formula kimia boleh diubah.',
          },
        ],
        fadedProblem: {
          prompt: '$CaCO_3(p) \\xrightarrow{\\Delta} CaO(p) + CO_2(g)$. Hitung jisim $CaO$ terhasil jika $20\\text{ g}$ $CaCO_3$ dipanaskan hingga terurai lengkap. [JAR: $C=12, O=16, Ca=40$]',
          step1GivenAndFormula: '$JFR(CaCO_3) = 40+12+48 = 100$; $JFR(CaO) = 40+16 = 56$; $n(CaCO_3) = \\frac{20}{100} = 0.2\\text{ mol}$.',
          studentTask: 'Cari $n(CaO)$ berdasarkan nisbah $1:1$, kemudian hitung jisimnya.',
          answerSteps: '$n(CaO) = 0.2\\text{ mol}$; jisim $CaO = 0.2 \\times 56 = 11.2\\text{ g}$.',
        },
        transferQuestion: {
          question: 'Mengapakah apabila $1.0\\text{ mol}$ zink dicampur dengan hanya $1.0\\text{ mol}$ asid hidroklorik ($Zn + 2HCl \\to ZnCl_2 + H_2$), gas hidrogen yang terhasil hanyalah $0.5\\text{ mol}$ dan bukan $1.0\\text{ mol}$?',
          answer: 'Kerana mengikut nisbah $1:2$, $1.0\\text{ mol}$ zink memerlukan $2.0\\text{ mol}$ $HCl$. Maka $HCl$ ialah bahan pengehad (habis bertindak balas dahulu) dan hanya menghasilkan $0.5\\text{ mol}$ $H_2$, meninggalkan $0.5\\text{ mol}$ zink berlebihan.',
        },
      },
    },
  ],
};
