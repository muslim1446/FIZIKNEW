import type { ChapterContent } from '../types/textbook';

export const k5bab2: ChapterContent = {
  id: 'k5-bab-2',
  subject: 'kimia',
  formLevel: 5,
  number: 2,
  title: 'Sebatian Karbon',
  pageRange: 'm.s. 62–112',
  overview:
    'Menguasai pengelasan sebatian organik/hidrokarbon, penyulingan berperingkat & peretakan petroleum, 6 siri homolog (Alkana, Alkena, Alkuna, Alkohol, Asid karboksilik, Ester), peta saling pertukaran tindak balas, serta keisomeran rantai/kedudukan dan penamaan IUPAC.',
  subtopics: [
    {
      id: 'k5-2.1',
      chapterId: 'k5-bab-2',
      code: '2.1',
      title: 'Jenis-jenis Sebatian Karbon',
      pageRef: 'm.s. 64–70',
      part1Anchor: {
        phenomenon:
          'Daripada satu tong minyak mentah petroleum hitam pekat, kilang penapis menghasilkan gas LPG, petrol kereta, kerosin kapal terbang hinggalah tar jalan raya — hanya berdasarkan perbezaan panjang rantai karbon dan takat didih!',
        chapterConnection:
          'Membezakan sebatian organik vs tak organik, hidrokarbon tepu vs tak tepu, serta penyulingan berperingkat dan peretakan sebagai sumber bahan mentah siri homolog.',
      },
      part2SacredDefinitions: [
        {
          title: 'Hidrokarbon Tepu vs Hidrokarbon Tak Tepu',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Hidrokarbon ialah sebatian organik yang mengandungi ' },
            { text: 'unsur karbon dan hidrogen sahaja', keyword: true },
            { text: '; hidrokarbon tepu hanya mempunyai ' },
            { text: 'ikatan kovalen tunggal antara atom karbon ($C-C$)', keyword: true },
            { text: ', manakala hidrokarbon tak tepu mempunyai sekurang-kurangnya satu ' },
            { text: 'ikatan kovalen ganda dua ($C=C$) atau ganda tiga ($C\\equiv C$)', keyword: true },
            { text: ' antara atom karbon.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Prinsip Penyulingan Berperingkat Petroleum & Peretakan (Cracking)',
            cause: 'Petroleum ialah campuran pelbagai hidrokarbon dengan panjang rantai karbon yang berbeza.',
            mechanism: 'Dalam menara pemeringkatan, pecahan bertakat didih rendah (rantai pendek) naik menguap dan terkondensasi di bahagian atas menara, manakala pecahan berat di bawah. Peretakan memecahkan molekul hidrokarbon berantai panjang pada suhu tinggi bermangkin $Al_2O_3/SiO_2$.',
            effect: 'Menghasilkan petrol dan alkena pendek bernilai tinggi daripada minyak berat yang kurang permintaan.',
          },
        ],
        tables: [
          {
            title: 'Pengelasan Sebatian Karbon & Pecahan Petroleum',
            headers: ['Kategori', 'Ciri & Contoh'],
            rows: [
              ['Sebatian karbon organik vs tak organik', 'Organik (asal benda hidup/hidrokarbon: $CH_4$, etanol); Tak organik ($CO_2, CO, CaCO_3$, sianida)'],
              ['Hidrokarbon vs Bukan hidrokarbon', 'Hidrokarbon ($C$ dan $H$ sahaja: $C_2H_6, C_2H_4$); Bukan hidrokarbon ($C, H$ + unsur lain $O/N/X$: $C_2H_5OH, CH_3COOH$)'],
              ['Urutan Pecahan Petroleum (Atas $\\to$ Bawah)', 'Gas petroleum ($<40\\,^\\circ\\text{C}$) $\\to$ Petrol $\\to$ Nafta $\\to$ Kerosin $\\to$ Diesel $\\to$ Minyak pelincir $\\to$ Minyak bahan api $\\to$ Bitumen ($>350\\,^\\circ\\text{C}$)'],
              ['Sumber bahan api alternatif', 'Biojisim, bioetanol (penapaian), biodiesel (minyak sawit), biogas (metana $CH_4$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Contoh Persamaan Peretakan (Cracking) Hidrokarbon Panjang',
            latex: 'C_{10}H_{22} \\xrightarrow{Al_2O_3/SiO_2,\\; \\Delta} C_8H_{18} + C_2H_4 \\quad (\\text{Bil. } C \\& H \\text{ di kiri} = \\text{kanan})',
            symbols: [
              { symbol: 'Al_2O_3 / SiO_2', meaning: 'mangkin alumina & silika dalam peretakan bermangkin', unit: '—' },
            ],
            appliesWhen: 'Menulis persamaan peretakan molekul alkana panjang kepada alkana pendek + alkena.',
            failsWhen: 'Peretakan MESTI mengekalkan jumlah atom C dan H yang sama; hasilnya sentiasa sekurang-kurangnya satu hidrokarbon **tak tepu** (cth: etena $C_2H_4$)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Bukan Hidrokarbon & Perubahan Sifat Pecahan Petroleum',
          problem:
            'Antara $C_3H_8, CH_3OH, CO_2,$ dan $C_4H_8$, kelaskan masing-masing dan terangkan perubahan kepekatan warna, kelikatan dan kejelagaan nyalaan pecahan petroleum apabila takat didih meningkat.',
          given: ['Pecahan semakin turun menara $\\to$ molekul semakin besar'],
          formulaLatex: '\\text{Takat didih } \\uparrow \\;\\Rightarrow\\; \\text{Warna lebih gelap, kelikatan } \\uparrow, \\text{ nyalaan lebih berjelaga}',
          formulaWhy: 'Molekul lebih panjang mempunyai daya van der Waals lebih kuat dan peratus karbon lebih tinggi.',
          substituteLatex: 'C_3H_8, C_4H_8 = \\text{Hidrokarbon}; \\; CH_3OH = \\text{Bukan hidrokarbon}; \\; CO_2 = \\text{Tak organik}',
          answer: '$C_3H_8, C_4H_8$: hidrokarbon; $CH_3OH$: sebatian organik bukan hidrokarbon; $CO_2$: sebatian karbon tak organik. Semakin tinggi takat didih pecahan, semakin gelap warnanya, semakin likat cecairnya, semakin sukar menyala dan semakin berjelaga nyalaannya.',
          trapAlert: 'Jangan tersalah anggap $CO_2$ atau $CaCO_3$ sebagai sebatian organik walaupun mengandungi karbon!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua unsur sahaja yang terdapat dalam hidrokarbon?',
            answer: 'Karbon ($C$) dan Hidrogen ($H$).',
          },
          {
            question: 'Namakan mangkin yang digunakan dalam proses peretakan petroleum di makmal/industri.',
            answer: 'Aluminium oksida ($Al_2O_3$) atau silikon(IV) oksida ($SiO_2$) / serpihan porselin.',
          },
          {
            question: 'Apakah prinsip fizik yang digunakan untuk mengasingkan pecahan petroleum dalam menara pemeringkatan?',
            answer: 'Perbezaan takat didih pecahan-pecahan hidrokarbon.',
          },
        ],
        fadedProblem: {
          prompt: 'Satu molekul heksadekana ($C_{16}H_{34}$) diretakkan menghasilkan satu molekul oktana ($C_8H_{18}$) dan dua molekul hidrokarbon $Y$.',
          step1GivenAndFormula: 'Jumlah $C = 16 - 8 = 8$; jumlah $H = 34 - 18 = 16$. Maka $2Y = C_8H_{16}$.',
          studentTask: 'Tentukan formula molekul bagi $Y$ dan nyatakan siri homolognya.',
          answerSteps: '$Y = C_4H_8$ (butena, siri homolog alkena — hidrokarbon tak tepu).',
        },
        transferQuestion: {
          question: 'Mengapakah proses peretakan amat penting dalam industri penapisan petroleum?',
          answer: 'Kerana peretakan menukar pecahan petroleum berat yang kurang permintaan kepada pecahan ringan yang tinggi permintaan seperti petrol dan menghasilkan alkena kecil (etena/propena) sebagai bahan mentah industri plastik/polimer.',
        },
      },
    },
    {
      id: 'k5-2.2',
      chapterId: 'k5-bab-2',
      code: '2.2',
      title: 'Siri Homolog',
      pageRef: 'm.s. 71–79',
      part1Anchor: {
        phenomenon:
          'Walaupun terdapat jutaan sebatian organik, kesemuanya berkelompok dalam keluarga kemas yang ahlinya hanya berbeza sebanyak satu unit $-CH_2-$ ($14$) dan berkongsi sifat kimia hampir seiras!',
        chapterConnection:
          'Mempelajari 5 ciri siri homolog, kumpulan berfungsi, dan formula am bagi kesemua 6 siri homolog wajib SPM termasuk Alkuna dan Ester.',
      },
      part2SacredDefinitions: [
        {
          title: 'Lima Ciri Siri Homolog',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Siri homolog ialah kumpulan sebatian organik dengan: (1) ' },
            { text: 'formula am yang sama', keyword: true },
            { text: ', (2) ' },
            { text: 'kumpulan berfungsi yang sama', keyword: true },
            { text: ' (sifat kimia serupa), (3) ' },
            { text: 'ahli berturutan berbeza sebanyak satu unit $-CH_2-$ (JMR $= 14$)', keyword: true },
            { text: ', (4) ' },
            { text: 'sifat fizik berubah secara beransur-ansur', keyword: true },
            { text: ', dan (5) kaedah penyediaan yang serupa.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Takat Lebur & Didih Meningkat Secara Beransur Menuruni Siri Homolog',
            cause: 'Bilangan atom karbon per molekul bertambah (rantai karbon semakin panjang, JMR $+14$ setiap langkah).',
            mechanism: 'Saiz molekul bertambah menjadikan daya tarikan van der Waals antara molekul semakin kuat.',
            effect: 'Lebih banyak tenaga haba diperlukan untuk mengatasi daya antara molekul $\\to$ takat lebur & didih meningkat (gas $\\to$ cecair $\\to$ pepejal).',
          },
        ],
        tables: [
          {
            title: 'Enam Siri Homolog KSSM Tingkatan 5: Formula Am & Kumpulan Berfungsi',
            headers: ['Siri Homolog', 'Formula Am', 'Kumpulan Berfungsi & Contoh Awal'],
            rows: [
              ['1. Alkana', '$C_nH_{2n+2},\\; n \\ge 1$', 'Ikatan tunggal $C-C$ (tepu) · Metana ($CH_4$), Etana ($C_2H_6$)'],
              ['2. Alkena', '$C_nH_{2n},\\; n \\ge 2$', 'Ikatan ganda dua $-C=C-$ · Etena ($C_2H_4$), Propena ($C_3H_6$)'],
              ['3. Alkuna', '$C_nH_{2n-2},\\; n \\ge 2$', 'Ikatan ganda tiga $-C\\equiv C-$ · Etuna ($C_2H_2$), Propuna ($C_3H_4$)'],
              ['4. Alkohol', '$C_nH_{2n+1}OH,\\; n \\ge 1$', 'Kumpulan hidroksil $-OH$ · Metanol ($CH_3OH$), Etanol ($C_2H_5OH$)'],
              ['5. Asid karboksilik', '$C_nH_{2n+1}COOH,\\; n \\ge 0$', 'Kumpulan karboksil $-COOH$ · Asid metanoik ($HCOOH$), Asid etanoik ($CH_3COOH$)'],
              ['6. Ester', '$C_mH_{2m+1}COOC_nH_{2n+1}$', 'Kumpulan karboksilat $-COO-$ · Metil etanoat ($CH_3COOCH_3$), Etil etanoat'],
            ],
          },
          {
            title: 'Nama Induk IUPAC Mengikut Bilangan Atom Karbon ($1\\text{–}10$)',
            headers: ['Bil. Karbon', 'Awalan Induk', 'Bil. Karbon', 'Awalan Induk'],
            rows: [
              ['1', 'Met-', '6', 'Heks-'],
              ['2', 'Et-', '7', 'Hept-'],
              ['3', 'Prop-', '8', 'Okt-'],
              ['4', 'But-', '9', 'Non-'],
              ['5', 'Pent-', '10', 'Dek-'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Am Asid Karboksilik ($n=0$ untuk Asid Metanoik!)',
            latex: 'C_nH_{2n+1}COOH \\quad (n=0 \\Rightarrow HCOOH\\; \\text{Asid metanoik}; \\quad n=1 \\Rightarrow CH_3COOH\\; \\text{Asid etanoik})',
            symbols: [
              { symbol: 'n', meaning: 'bilangan atom C dalam rantai alkil (TIDAK termasuk C dalam $-COOH$!)', unit: '—' },
            ],
            appliesWhen: 'Menulis formula ahli siri homolog asid karboksilik dan ester.',
            failsWhen: 'Perangkap paling kerap SPM: Bagi asid propanoik ($3\\text{ C}$ kesemuanya), nilai $n$ dalam $C_nH_{2n+1}COOH$ ialah **$n = 2$** ($C_2H_5COOH$), BUKAN $n=3$! Dan bagi alkana/alkena, $n=1$ hanya wujud pada alkana, TIDAK pada alkena/alkuna ($n \\ge 2$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Ahli & Jisim Molar Siri Homolog',
          problem:
            'Sebatian $X$ ialah ahli ketiga dalam siri homolog alkuna dan sebatian $Y$ ialah ahli kedua dalam siri homolog asid karboksilik. Tulis formula molekul dan nama kedua-duanya.',
          given: ['Alkuna bermula pada $n=2$ (etuna, $C_2H_2$)', 'Asid karboksilik bermula pada $n=0$ (asid metanoik, $HCOOH$)'],
          formulaLatex: '\\text{Alkuna ke-3 } (n=4): C_4H_6 \\quad|\\quad \\text{Asid karboksilik ke-2 } (n=1): CH_3COOH',
          formulaWhy: 'Sentiasa semak ahli PERTAMA setiap siri homolog sebelum mengira ahli kedua atau ketiga.',
          substituteLatex: '\\text{Butuna } (C_4H_6) \\quad|\\quad \\text{Asid etanoik } (C_2H_4O_2)',
          answer: '$X$ ialah **butuna** ($C_4H_6$); $Y$ ialah **asid etanoik** ($CH_3COOH$).',
          trapAlert: 'Alkuna & alkena tiada ahli ber-1 karbon (tiada "metena" atau "metuna") — ahli ketiganya ialah ber-**4** karbon (**But-**)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah nama kumpulan berfungsi bagi alkena, alkohol, asid karboksilik dan ester?',
            answer: 'Alkena: ikatan ganda dua karbon-karbon ($-C=C-$); Alkohol: kumpulan hidroksil ($-OH$); Asid karboksilik: kumpulan karboksil ($-COOH$); Ester: kumpulan karboksilat ($-COO-$).',
          },
          {
            question: 'Mengapakah molekul alkohol kecil (metanol, etanol) larut sepenuhnya dalam air manakala alkana tidak?',
            answer: 'Kerana kumpulan $-OH$ dalam alkohol kecil membentuk ikatan hidrogen dengan molekul air, manakala rantai hidrokarbonnya masih pendek.',
          },
          {
            question: 'Apakah beza formula molekul dan JMR antara etana dengan propana?',
            answer: 'Berbeza sebanyak satu unit $-CH_2-$ dan JMR sebanyak $14$.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebatian organik $Z$ mempunyai formula molekul $C_4H_8O_2$ dan berbau wangi buah-buahan apabila dilarutkan dalam pelarut organik.',
          step1GivenAndFormula: 'Formula am $C_nH_{2n}O_2$ berbau wangi merujuk kepada siri homolog ester ($-COO-$).',
          studentTask: 'Cadangkan satu formula struktur termampat dan nama IUPAC bagi ester $Z$.',
          answerSteps: 'Etil etanoat ($CH_3COOC_2H_5$) atau metil propanoat ($C_2H_5COOCH_3$) atau propil metanoat ($HCOOC_3H_7$).',
        },
        transferQuestion: {
          question: 'Mengapakah keterlarutan alkohol dalam air semakin berkurang daripada metanol hingga oktanol?',
          answer: 'Kerana semakin bertambah bilangan atom karbon, bahagian rantai hidrokarbon yang hidrofobik (tidak larut air) menjadi semakin panjang berbanding satu kumpulan $-OH$ yang hidrofilik.',
        },
      },
    },
    {
      id: 'k5-2.3',
      chapterId: 'k5-bab-2',
      code: '2.3',
      title: 'Sifat Kimia dan Saling Pertukaran Sebatian antara Siri Homolog',
      pageRef: 'm.s. 80–100',
      part1Anchor: {
        phenomenon:
          'Daripada satu gas etena ($C_2H_4$), ahli kimia boleh menukarkannya kepada etana, plastik polietena, etanol, asid etanoik (cuka) dan akhirnya minyak wangi ester berbau pisang — kesemuanya melalui peta tindak balas berangkai!',
        chapterConnection:
          'Subtopik paling bernilai tinggi dalam Kimia T5: tindak balas pembakaran, penukargantian UV, 5 tindak balas penambahan alkena, penapaian/penghidratan/pendehidratan etanol, pengoksidaan alkohol, dan pengesteran.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tindak Balas Penukargantian vs Penambahan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Alkana mengalami tindak balas ' },
            { text: 'penukargantian dengan halogen ($Cl_2/Br_2$) di bawah sinaran ultraungu (UV)', keyword: true },
            { text: ', manakala alkena mengalami tindak balas ' },
            { text: 'penambahan pada ikatan ganda dua $-C=C-$', keyword: true },
            { text: ' tanpa memerlukan cahaya UV.' },
          ],
        },
        {
          title: 'Pengesteran',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pengesteran ialah tindak balas antara ' },
            { text: 'asid karboksilik dengan alkohol menggunakan asid sulfurik pekat sebagai mangkin', keyword: true },
            { text: ' (dan agen pendehidratan) untuk menghasilkan ' },
            { text: 'ester dan air', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Ujian Kimia Membezakan Alkana (Heksana) vs Alkena (Heksena)',
            cause: 'Alkena mempunyai ikatan ganda dua $-C=C-$ tak tepu, manakala alkana hanya mempunyai ikatan tunggal tepu.',
            mechanism: 'Heksena menjalani tindak balas penambahan serta-merta dengan air bromin atau larutan $KMnO_4$ berasid pada keadaan gelap/bilik.',
            effect: 'Heksena menyahwarnakan warna perang air bromin dan warna ungu $KMnO_4$ berasid; heksana tiada perubahan. Selain itu, heksena terbakar dengan nyalaan lebih berjelaga kerana peratus jisim karbon per molekulnya lebih tinggi.',
          },
        ],
        tables: [
          {
            title: 'Peta Induk Saling Pertukaran Tindak Balas Sebatian Karbon',
            headers: ['Laluan Pertukaran', 'Reagen & Syarat Wajib', 'Persamaan Contoh ($C_2$)'],
            rows: [
              ['Alkana $\\to$ Haloalkana', '$Cl_2$ / $Br_2$ + **cahaya UV** (Penukargantian)', '$CH_4 + Cl_2 \\xrightarrow{\\text{UV}} CH_3Cl + HCl$'],
              ['Alkena $\\to$ Alkana (Penghidrogenan)', '$H_2$, mangkin **Nikel ($Ni$)**, **$180\\,^\\circ\\text{C}$**', '$C_2H_4 + H_2 \\xrightarrow{Ni, 180\\,^\\circ\\text{C}} C_2H_6$'],
              ['Alkena + Halogen (Penghalogenan)', '$Br_2(ak)$ atau $Br_2/CCl_4$ (tiada UV)', '$C_2H_4 + Br_2 \\to C_2H_4Br_2$ (1,2-dibromoetana)'],
              ['Alkena + Hidrogen halida', '$HBr(g)$ atau $HCl(g)$', '$C_2H_4 + HBr \\to C_2H_5Br$'],
              ['Alkena + $KMnO_4$ berasid', '$KMnO_4/H^+$ (Pengoksidaan diol)', '$C_2H_4 + H_2O + [O] \\to C_2H_4(OH)_2$'],
              ['Alkena $\\to$ Alkohol (Penghidratan)', 'Stim ($H_2O$), mangkin **$H_3PO_4$**, **$300\\,^\\circ\\text{C}$, $60\\text{ atm}$**', '$C_2H_4 + H_2O \\xrightarrow{H_3PO_4} C_2H_5OH$'],
              ['Alkohol $\\to$ Alkena (Pendehidratan)', 'Serpihan porselin / $Al_2O_3$ panas (atau $H_2SO_4$ pekat)', '$C_2H_5OH \\xrightarrow{\\text{porselin}, \\Delta} C_2H_4 + H_2O$'],
              ['Alkohol $\\to$ Asid karboksilik (Pengoksidaan)', '$KMnO_4$ berasid atau $K_2Cr_2O_7$ berasid + **panaskan (refluks)**', '$C_2H_5OH + 2[O] \\to CH_3COOH + H_2O$'],
              ['Asid karboksilik + Alkohol $\\to$ Ester', 'Mangkin **$H_2SO_4$ pekat** + panaskan', '$CH_3COOH + C_2H_5OH \\xrightarrow{H_2SO_4\\text{ pekat}} CH_3COOC_2H_5 + H_2O$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Mengira Peratus Karbon Mengikut Jisim (Ujian Jelaga Pembakaran)',
            latex: '\\%\\ C = \\frac{12 \\times \\text{bilangan atom } C}{\\text{JMR sebatian}} \\times 100\\%',
            symbols: [
              { symbol: '\\%\\ C', meaning: 'peratus karbon mengikut jisim', unit: '$\\%$' },
            ],
            appliesWhen: 'Membuktikan mengapa alkena ($C_6H_{12} = 85.7\\%$) lebih berjelaga daripada alkana ($C_6H_{14} = 83.7\\%$).',
            failsWhen: 'Semasa menulis persamaan penapaian glukosa menghasilkan etanol, guna yis (enzim zimase) pada $30\\text{–}37\\,^\\circ\\text{C}$ dalam keadaan **anaerob (tanpa oksigen)**: $C_6H_{12}O_6 \\to 2C_2H_5OH + 2CO_2$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-homolog-flowchart',
            title: 'Carta Alir Saling Pertukaran Siri Homolog Sebatian Karbon',
            whatItShows: 'Hubungan laluan langsung antara Alkana $\\leftrightarrow$ Alkena $\\leftrightarrow$ Alkohol $\\to$ Asid karboksilik $\\to$ Ester.',
            axisOrRule: 'Hafal reagen dan syarat suhu/tekanan/mangkin pada setiap anak panah pertukaran.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Penamaan Ester daripada Pasangan Alkohol + Asid Karboksilik',
          problem:
            'Propanol bertindak balas dengan asid metanoik di bawah mangkin asid sulfurik pekat panas. Namakan ester yang terbentuk, tulis persamaannya dan nyatakan cara mengesan pembentukan ester.',
          given: ['Alkohol = **prop**anol ($C_3H_7OH$)', 'Asid = asid **metan**oik ($HCOOH$)'],
          formulaLatex: 'HCOOH + C_3H_7OH \\xrightarrow{H_2SO_4\\text{ pekat},\\; \\Delta} HCOOC_3H_7 + H_2O',
          formulaWhy: 'Bahagian alkohol menjadi akhiran "-il" di hadapan, bahagian asid menjadi "-oat" di belakang.',
          substituteLatex: '\\text{Propanol } (\\text{propil}) + \\text{asid metanoik } (\\text{metanoat})',
          answer: 'Ester yang terbentuk ialah **propil metanoat** ($HCOOC_3H_7$). Dikesan melalui bau wangi buah-buahan dan lapisan berminyak yang tidak larut terapung di atas air.',
          trapAlert: 'Peraturan emas menama ester: **Alkohol dulu ("-il"), Asid kemudian ("-oat")** walaupun dalam formula kimia asid ditulis dahulu ($CH_3COO\\text{–}C_2H_5 =$ **etil etanoat**)!',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Langkah Makmal Penyediaan Etanol & Asid Etanoik',
        rows: [
          {
            designChoice: 'Menyalurkan gas daripada kelalang penapaian glukosa + yis melalui tiub penghantar ke dalam air kapur',
            scientificReason: 'Menghalang kemasukan oksigen (mengelakkan pengoksidaan etanol kepada asid etanoik) dan membuktikan gas $CO_2$ terbebas.',
          },
          {
            designChoice: 'Menulenkan hasil campuran air-etanol daripada penapaian melalui penyulingan berperingkat pada $78\\,^\\circ\\text{C}$',
            scientificReason: 'Etanol mendidih pada takat didih lebih rendah ($78\\,^\\circ\\text{C}$) berbanding air ($100\\,^\\circ\\text{C}$).',
          },
          {
            designChoice: 'Memanaskan etanol + $K_2Cr_2O_7$ berasid di bawah penyediaan refluks',
            scientificReason: 'Mengkondensasikan wap etanol yang mudah meruap supaya mengalir balik dan bertindak balas lengkap menjadi asid etanoik.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah mangkin dan syarat suhu/tekanan untuk menukarkan etena kepada etanol dalam industri?',
            answer: 'Mangkin asid fosforik ($H_3PO_4$), suhu $300\\,^\\circ\\text{C}$, dan tekanan $60\\text{ atm}$.',
          },
          {
            question: 'Apakah perubahan warna apabila etanol direfluks dengan kalium dikromat(VI) berasid?',
            answer: 'Larutan jingga bertukar menjadi larutan hijau.',
          },
          {
            question: 'Namakan ester yang terbentuk daripada butanol dan asid etanoik.',
            answer: 'Butil etanoat ($CH_3COOC_4H_9$).',
          },
        ],
        fadedProblem: {
          prompt: 'Etanol dipanaskan kuat dan wapnya dialirkan melalui serpihan porselin panas menghasilkan gas $Q$ yang menyahwarnakan air bromin.',
          step1GivenAndFormula: 'Tindak balas pendehidratan alkohol menyingkirkan satu molekul $H_2O$: $C_2H_5OH \\to Q + H_2O$.',
          studentTask: 'Kenal pasti gas $Q$ dan lukis susunan radas utama untuk mengumpulkan gas tersebut.',
          answerSteps: '$Q$ ialah gas etena ($C_2H_4$); dikumpulkan melalui sesaran air di dalam tabung uji berisi air yang ditelangkupkan.',
        },
        transferQuestion: {
          question: 'Mengapakah metanol tidak boleh menjalani tindak balas pendehidratan untuk menghasilkan alkena walaupun etanol dan propanol boleh?',
          answer: 'Kerana metanol ($CH_3OH$) hanya mempunyai 1 atom karbon, sedangkan alkena yang paling ringkas (etena, $C=C$) memerlukan sekurang-kurangnya 2 atom karbon.',
        },
      },
    },
    {
      id: 'k5-2.4',
      chapterId: 'k5-bab-2',
      code: '2.4',
      title: 'Isomer dan Penamaan Mengikut IUPAC',
      pageRef: 'm.s. 101–109',
      part1Anchor: {
        phenomenon:
          'Dua botol berasingan mempunyai formula molekul yang sama tepat iaitu $C_4H_{10}$ (atau $C_4H_8$), namun mempunyai takat didih dan struktur bercabang berbeza — itulah keajaiban susunan semula ikatan karbon!',
        chapterConnection:
          'Melengkapkan Bab 2 dengan kemahiran melukis dan menamakan kesemua isomer struktur alkana, alkena, alkuna dan alkohol mengikut sistem penomboran IUPAC.',
      },
      part2SacredDefinitions: [
        {
          title: 'Keisomeran',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Isomer ialah ' },
            { text: 'molekul-molekul yang mempunyai formula molekul yang sama tetapi formula struktur yang berbeza', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Algoritma 4-Langkah Menama Isomer Mengikut Sistem IUPAC',
            cause: 'Diberi struktur molekul rantai lurus atau bercabang dengan kumpulan berfungsi.',
            mechanism: '1. Cari rantai karbon **paling panjang berterusan** yang mengandungi kumpulan berfungsi (induk). 2. Nomborkan rantai dari hujung yang memberi **nombor paling kecil kepada kumpulan berfungsi** ($-C=C-$, $-C\\equiv C-$, $-OH$), atau kepada cabang alkil bagi alkana. 3. Kenal pasti nama cabang alkil ($CH_3- =$ metil, $C_2H_5- =$ etil). 4. Gabung: `[nombor cabang]-[nama cabang][induk]-[nombor kump. berfungsi]-[akhiran]`.',
            effect: 'Menghasilkan nama IUPAC unik tanpa mengira bagaimana struktur dilukis atau diterbalikkan.',
          },
        ],
        tables: [
          {
            title: 'Bilangan Isomer Struktur Mengikut Siri Homolog',
            headers: ['Molekul', 'Bilangan Isomer', 'Nama Isomer IUPAC'],
            rows: [
              ['Metana, Etana, Propana', '0 (tiada isomer)', 'Hanya ada 1 struktur mungkin sahaja'],
              ['Butana ($C_4H_{10}$)', '2 isomer', 'Butana; 2-metilpropana'],
              ['Pentana ($C_5H_{12}$)', '3 isomer', 'Pentana; 2-metilbutana; 2,2-dimetilpropana'],
              ['Butena ($C_4H_8$)', '3 isomer', 'But-1-ena; But-2-ena; 2-metilpropena'],
              ['Propanol ($C_3H_7OH$)', '2 isomer', 'Propan-1-ol; Propan-2-ol'],
              ['Butanol ($C_4H_9OH$)', '4 isomer', 'Butan-1-ol; Butan-2-ol; 2-metilpropan-1-ol; 2-metilpropan-2-ol'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Dua Jenis Keisomeran Struktur KSSM',
            latex: '\\text{1. Keisomeran Rantai (lurus vs bercabang)} \\quad|\\quad \\text{2. Keisomeran Kedudukan (alih } C=C,\\; C\\equiv C \\text{ atau } -OH\\text{)}',
            symbols: [
              { symbol: 'C=C', meaning: 'kedudukan ikatan ganda dua diberi nombor terkecil', unit: '—' },
            ],
            appliesWhen: 'Melukis semua isomer bagi $C_4H_{10}, C_5H_{12}, C_4H_8, C_5H_{10}, C_3H_7OH, C_4H_9OH$.',
            failsWhen: 'Perangkap besar lukisan: Sekadar membengkokkan hujung $C_4H_{10}$ ke atas atau ke bawah TIDAK membentuk isomer baharu — ia tetap butana! Cabang metil hanya boleh diletakkan pada karbon **tengah**, BUKAN karbon terminal!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menulis Semua Isomer Butena ($C_4H_8$) & Menama IUPAC',
          problem:
            'Lukis (dalam formula struktur termampat) dan namakan kesemua 3 isomer bagi butena, $C_4H_8$ serta nyatakan kegunaan alkohol dan kesan penyalahgunaannya.',
          given: ['Rantai 4 karbon dengan satu ikatan $C=C$, atau rantai 3 karbon + 1 cabang metil'],
          formulaLatex: 'CH_2=CHCH_2CH_3 \\;(\\text{But-1-ena}) \\quad|\\quad CH_3CH=CHCH_3 \\;(\\text{But-2-ena}) \\quad|\\quad CH_2=C(CH_3)CH_3',
          formulaWhy: 'Alih kedudukan $C=C$ dari C1 ke C2 (keisomeran kedudukan), lalu pendekkan rantai induk jadi 3C + cabang metil (keisomeran rantai).',
          substituteLatex: 'CH_2=C(CH_3)CH_3 \\Rightarrow \\text{2-metilpropena}',
          answer: '1. But-1-ena; 2. But-2-ena; 3. 2-metilpropena. (Nota: Propanol/etanol digunakan sebagai pelarut minyak wangi/ubat dan bahan api bioetanol; penyalahgunaan etanol menyebabkan ketagihan, sirosis hati, kanser dan kemalangan jalan raya).',
          trapAlert: 'Jangan tulis "but-3-ena" — nomborkan rantai dari hujung KANAN jika $C=C$ di hujung kanan supaya menjadi **but-1-ena**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah metana, etana dan propana tidak mempunyai isomer?',
            answer: 'Kerana rantai karbonnya terlalu pendek ($1\\text{–}3$ atom $C$) untuk membentuk susunan rantai bercabang yang berbeza.',
          },
          {
            question: 'Apakah nama IUPAC bagi $CH_3-CH(OH)-CH_3$?',
            answer: 'Propan-2-ol.',
          },
          {
            question: 'Mengapakah isomer-isomer mempunyai sifat kimia yang sama tetapi takat didih sedikit berbeza?',
            answer: 'Sifat kimia sama kerana mempunyai kumpulan berfungsi yang sama; takat didih berbeza kerana bentuk molekul bercabang mengurangkan luas sentuhan dan melemahkan daya van der Waals antara molekul.',
          },
        ],
        fadedProblem: {
          prompt: 'Suatu alkuna mempunyai formula molekul $C_4H_6$.',
          step1GivenAndFormula: 'Rantai lurus 4 karbon dengan satu ikatan ganda tiga $-C\\equiv C-$ pada kedudukan berbeza.',
          studentTask: 'Tulis formula struktur termampat dan nama IUPAC bagi kedua-dua isomer alkuna tersebut.',
          answerSteps: '1. $HC\\equiv C-CH_2-CH_3$ (But-1-una); 2. $CH_3-C\\equiv C-CH_3$ (But-2-una).',
        },
        transferQuestion: {
          question: 'Adakah *siklobutana* (gelang 4 karbon dengan formula $C_4H_8$) juga merupakan isomer kepada but-1-ena? Mengapa?',
          answer: 'Ya, kerana siklobutana mempunyai formula molekul yang sama ($C_4H_8$) tetapi formula struktur (gelang tepu) yang berbeza daripada but-1-ena.',
        },
      },
    },
  ],
};
