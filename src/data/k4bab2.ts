import type { ChapterContent } from '../types/textbook';

export const k4bab2: ChapterContent = {
  id: 'k4-bab-2',
  subject: 'kimia',
  formLevel: 4,
  number: 2,
  title: 'Jirim dan Struktur Atom',
  pageRange: 'm.s. 22–41',
  overview:
    'Mempelajari teori kinetik jirim, lengkung pemanasan dan penyejukan naftalena, perkembangan 5 model atom, perwakilan piawai nuklid, susunan elektron serta pengiraan jisim atom relatif isotop.',
  subtopics: [
    {
      id: 'k4-2.1',
      chapterId: 'k4-bab-2',
      code: '2.1',
      title: 'Konsep Asas Jirim',
      pageRef: 'm.s. 24–29',
      part1Anchor: {
        phenomenon:
          'Semasa naftalena dipanaskan atau disejukkan, termometer berhenti menaik/menurun secara mendatar pada $80\\,^\\circ\\text{C}$ walaupun api atau penyejukan masih berjalan — ke manakah perginya haba tersebut?',
        chapterConnection:
          'Mengaitkan tenaga haba, daya tarikan antara zarah dan jenis zarah (atom, molekul, ion) sebagai asas jirim.',
      },
      part2SacredDefinitions: [
        {
          title: 'Jirim',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Jirim ialah ' },
            { text: 'sebarang bahan yang mempunyai jisim dan memenuhi ruang', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Takat Lebur',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Takat lebur ialah ' },
            { text: 'suhu malar apabila sesuatu bahan bertukar daripada keadaan pepejal kepada cecair', keyword: true },
            { text: ' pada tekanan tertentu.' },
          ],
        },
        {
          title: 'Takat Beku',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Takat beku ialah ' },
            { text: 'suhu malar apabila sesuatu bahan bertukar daripada keadaan cecair kepada pepejal', keyword: true },
            { text: ' pada tekanan tertentu.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Suhu Malar Semasa Peleburan (Garis Mendatar BC)',
            cause: 'Tenaga haba terus dibekalkan pada takat lebur ($80\\,^\\circ\\text{C}$ bagi naftalena).',
            mechanism: 'Tenaga haba diserap oleh zarah-zarah untuk mengatasi daya tarikan antara zarah supaya berubah dari pepejal ke cecair (tenaga kinetik zarah tidak bertambah).',
            effect: 'Suhu kekal malar sepanjang B ke C sehingga semua pepejal melebur.',
          },
          {
            title: 'Mengapa Suhu Malar Semasa Pembekuan (Garis Mendatar FG)',
            cause: 'Naftalena cecair menyejuk ke takat beku ($80\\,^\\circ\\text{C}$).',
            mechanism: 'Tenaga haba yang terbebas ke persekitaran diimbangi tepat oleh tenaga haba yang dibebaskan apabila zarah menarik antara satu sama lain untuk membentuk pepejal.',
            effect: 'Suhu kekal malar dari F ke G sehingga keseluruhan cecair membeku.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Tiga Keadaan Jirim & Jenis Zarah',
            headers: ['Ciri', 'Pepejal', 'Cecair', 'Gas'],
            rows: [
              ['Susunan zarah', 'Tersusun padat & teratur', 'Tersusun rapat tetapi tidak teratur', 'Sangat jauh antara satu sama lain'],
              ['Pergerakan zarah', 'Bergetar & berputar pada kedudukan tetap', 'Bergerak bebas, menggelongsor & berlanggar', 'Bergerak bebas & rawak pada kelajuan tinggi'],
              ['Daya tarikan antara zarah', 'Sangat kuat', 'Sederhana kuat', 'Sangat lemah'],
              ['Contoh mengikut jenis zarah', 'Atom: $Cu, Fe, Ne$', 'Molekul: $H_2O, CO_2, C_{10}H_8$', 'Ion: $NaCl, MgO, CuSO_4$'],
            ],
          },
          {
            title: 'Perubahan Keadaan Jirim (6 Proses)',
            headers: ['Proses', 'Perubahan Keadaan', 'Tenaga Haba'],
            rows: [
              ['Peleburan / Pendidihan', 'Pepejal → Cecair / Cecair → Gas', 'Haba diserap (endotermik)'],
              ['Pembekuan / Kondensasi', 'Cecair → Pepejal / Gas → Cecair', 'Haba dibebaskan (eksotermik)'],
              ['Pemejalwapan / Pengendapan', 'Pepejal → Gas / Gas → Pepejal (cth: iodin, ais kering)', 'Serap (pejalwap) / Bebas (endap)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kesetaraan Takat Lebur & Takat Beku Bahan Tulen',
            latex: '\\text{Takat lebur} = \\text{Takat beku} \\;(\\text{cth: } C_{10}H_8 = 80\\,^\\circ\\text{C})',
            symbols: [
              { symbol: 'C_{10}H_8', meaning: 'Naftalena tulen', unit: '$^\\circ\\text{C}$' },
            ],
            appliesWhen: 'Bahan adalah tulen dan tekanan atmosfera malar.',
            failsWhen: 'Jika bahan mempunyai bendasing, takat lebur menjadi lebih rendah (atau satu julat suhu) dan tidak lagi tajam/malar.',
          },
        ],
        diagrams: [
          {
            kind: 'chem-heating-cooling-curve',
            title: 'Lengkung Pemanasan dan Penyejukan Naftalena (C₁₀H₈)',
            whatItShows: 'Bahagian mendatar BC (peleburan) dan FG (pembekuan) mengekalkan suhu malar pada 80°C.',
            axisOrRule: 'Klik butang untuk bertukar antara mod pemanasan dan penyejukan serta membaca penerangan tenaga zarah.',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 2.2',
            title: 'Menentukan Takat Lebur dan Takat Beku Naftalena',
            aim: 'Menentukan takat lebur dan takat beku naftalena melalui graf suhu melawan masa.',
            inference: 'Suhu bahan tulen kekal malar semasa perubahan fasa pepejal ↔ cecair.',
            hypothesis: 'Takat lebur naftalena adalah sama dengan takat bekunya iaitu sekitar $80\\,^\\circ\\text{C}$.',
            variables: {
              manipulated: 'Masa pemanasan / penyejukan (s)',
              responding: 'Suhu naftalena ($^\\circ\\text{C}$)',
              fixed: 'Kuantiti naftalena & kadar pemanasan kukus air',
            },
            setupLogic: 'Panaskan tabung didih berisi naftalena menggunakan kukus air (bukan api terus) dan kacau sentiasa; sejukkan dalam kelalang kon untuk mencegah penyejukan lampau.',
            expectedResult: 'Graf menunjukkan segmen mendatar yang jelas pada $80\\,^\\circ\\text{C}$.',
            conclusion: 'Takat lebur dan takat beku naftalena ialah $80\\,^\\circ\\text{C}$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Mentafsir Segmen Graf Penyejukan & Penyejukan Lampau',
          problem:
            'Semasa Aktiviti 2.2, pepejal asid laurik dipanaskan menggunakan kukus air sehingga cair lalu disejukkan sambil dikacau. Terangkan mengapa kukus air digunakan dan mengapa larutan perlu dikacau berterusan.',
          given: ['Takat lebur asid laurik $\\approx 43\\,^\\circ\\text{C}$, naftalena $\\approx 80\\,^\\circ\\text{C}$'],
          formulaLatex: '\\text{Kukus air} \\le 100\\,^\\circ\\text{C} \\quad|\\quad \\text{Kacau} \\Rightarrow \\text{Suhu sekata}',
          formulaWhy: 'Mencegah naftalena daripada terlampau panas/terbakar dan mengelakkan penyejukan lampau.',
          substituteLatex: '\\text{Tabung uji dimasukkan ke kelalang kon semasa penyejukan}',
          answer: 'Kukus air memastikan pemanasan sekata dan selamat (naftalena mudah terbakar); pengacauan berterusan memastikan haba tersebar sekata dan mengelakkan penyejukan lampau.',
          trapAlert: 'Untuk bahan bertakat lebur melebihi $100\\,^\\circ\\text{C}$ (seperti plumbum $327\\,^\\circ\\text{C}$), kukus air TIDAK sesuai — gunakan kukus minyak.',
        },
      ],
      part5DecisionTable: {
        title: 'Kawalan Radas Eksperimen Takat Lebur & Beku Naftalena',
        rows: [
          {
            designChoice: 'Menggunakan kukus air berbanding pemanasan terus dengan penunu Bunsen',
            scientificReason: 'Naftalena mudah terbakar dan suhu kukus air ($\\le 100\\,^\\circ\\text{C}$) memastikan pemanasan sekata.',
          },
          {
            designChoice: 'Menempatkan tabung didih ke dalam kelalang kon dan mengacau berterusan semasa penyejukan',
            scientificReason: 'Mengelakkan kehilangan haba terlalu cepat (penyejukan lampau) dan memastikan suhu sekata di seluruh cecair.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah jenis zarah yang membina gas neon ($Ne$), air ($H_2O$) dan natrium klorida ($NaCl$)?',
            answer: 'Atom ($Ne$), molekul ($H_2O$), dan ion ($NaCl$).',
          },
          {
            question: 'Apakah keadaan jirim pada garis mendatar FG lengkung penyejukan?',
            answer: 'Campuran cecair dan pepejal.',
          },
          {
            question: 'Mengapakah suhu tidak turun sepanjang FG walaupun penyejukan berterusan?',
            answer: 'Haba yang hilang ke persekitaran diimbangi oleh haba yang dibebaskan apabila zarah-zarah menarik antara satu sama lain untuk membentuk pepejal.',
          },
        ],
        fadedProblem: {
          prompt: 'Suhu naftalena pepejal meningkat dari $30\\,^\\circ\\text{C}$ ke $80\\,^\\circ\\text{C}$ (A→B), malar pada $80\\,^\\circ\\text{C}$ (B→C), dan meningkat semula ke $95\\,^\\circ\\text{C}$ (C→D).',
          step1GivenAndFormula: 'A→B: Pepejal sahaja; B→C: Pepejal + Cecair ($80\\,^\\circ\\text{C}$); C→D: Cecair sahaja.',
          studentTask: 'Nyatakan perubahan tenaga kinetik zarah bagi A→B dan B→C.',
          answerSteps: 'Dari A→B, tenaga kinetik zarah bertambah kerana suhu meningkat; dari B→C, tenaga kinetik purata zarah kekal malar kerana haba diserap untuk mengatasi daya tarikan antara zarah.',
        },
        transferQuestion: {
          question: 'Mengapakah peniaga ikan menggunakan ais bercampur garam, bukannya ais tulen semata-mata?',
          answer: 'Garam bertindak sebagai bendasing yang merendahkan takat beku/lebur air di bawah $0\\,^\\circ\\text{C}$, menjadikan campuran kekal lebih sejuk dan mengekalkan kesegaran ikan lebih lama.',
        },
      },
    },
    {
      id: 'k4-2.2',
      chapterId: 'k4-bab-2',
      code: '2.2',
      title: 'Perkembangan Model Atom',
      pageRef: 'm.s. 29–32',
      part1Anchor: {
        phenomenon:
          'Selama ribuan tahun atom dianggap sfera padat yang tidak boleh dibelah — sehingga eksperimen kerajang emas Rutherford mendedahkan bahawa atom hampir keseluruhannya ialah ruang kosong!',
        chapterConnection:
          'Memperkenalkan tiga zarah subatom ($p, n, e$) serta garis masa 5 model atom sebelum melukis struktur atom.',
      },
      part2SacredDefinitions: [
        {
          title: 'Zarah Subatom',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Atom terdiri daripada tiga zarah subatom iaitu ' },
            { text: 'proton (cas $+1$), neutron (cas $0$, neutral) di dalam nukleus dan elektron (cas $-1$)', keyword: true },
            { text: ' yang bergerak mengelilingi nukleus.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Model Atom Berubah Daripada Dalton ke Chadwick',
            cause: 'Penemuan eksperimen baharu seperti tiub sinar katod, serakan zarah alfa dan kestabilan jisim nukleus.',
            mechanism: 'Setiap penemuan mendedahkan zarah baharu ($e^-$ oleh Thomson, nukleus $+ve$ oleh Rutherford, petala oleh Bohr, neutron oleh Chadwick).',
            effect: 'Model atom moden menggabungkan nukleus padat ($p + n$) dengan petala berkuantum ($e^-$).',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Tiga Zarah Subatom',
            headers: ['Zarah Subatom', 'Simbol', 'Cas Relatif', 'Jisim Relatif', 'Lokasi dalam Atom'],
            rows: [
              ['Proton', '$p$', '$+1$', '$1$', 'Nukleus'],
              ['Neutron', '$n$', '$0$ (neutral)', '$1$', 'Nukleus'],
              ['Elektron', '$e$', '$-1$', '$\\frac{1}{1840}$', 'Bergerak dalam petala mengelilingi nukleus'],
            ],
          },
          {
            title: 'Kronologi Lima Model Struktur Atom',
            headers: ['Saintis (Tahun)', 'Penemuan Utama & Ciri Model'],
            rows: [
              ['1. John Dalton (1808)', 'Sfera kecil padat tidak boleh dibahagikan (seperti bola biliard)'],
              ['2. J.J. Thomson (1897)', 'Menemui elektron; sfera bercas positif dengan elektron bertaburan (model puding plum)'],
              ['3. Ernest Rutherford (1911)', 'Menemui nukleus bercas positif & proton di pusat; atom kebanyakannya ruang kosong'],
              ['4. Niels Bohr (1913)', 'Elektron bergerak di dalam petala tertentu mengelilingi nukleus'],
              ['5. James Chadwick (1932)', 'Menemui zarah neutral iaitu neutron di dalam nukleus (menyumbang separuh jisim atom)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Keneutralan Elektrik Atom',
            latex: '\\text{Bilangan proton } (+1) = \\text{Bilangan elektron } (-1)',
            symbols: [
              { symbol: 'p', meaning: 'bilangan proton', unit: 'zarah' },
              { symbol: 'e', meaning: 'bilangan elektron dalam atom neutral', unit: 'zarah' },
            ],
            appliesWhen: 'Hanya bagi sesuatu atom neutral (bukan ion).',
            failsWhen: 'Bagi ion, bilangan elektron $\\neq$ bilangan proton (kation hilang $e^-$, anion terima $e^-$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Model Atom Berdasarkan Eksperimen',
          problem:
            'Zarah alfa bercas positif ditembakkan ke kerajang emas nipis; kebanyakan menembusi lurus manakala sebahagian kecil terpesong atau melantun balik. Saintis manakah dan apakah kesimpulannya?',
          given: ['Zarah $\\alpha$ ($+ve$) melantun balik dari pusat kecil'],
          formulaLatex: '\\text{Ernest Rutherford (1911)}',
          formulaWhy: 'Hanya nukleus kecil padat bercas positif dapat menolak zarah alfa yang positif.',
          substituteLatex: '\\text{Kebanyakan ruang atom kosong; nukleus padat di pusat}',
          answer: 'Ernest Rutherford; atom terdiri daripada nukleus kecil bercas positif di pusat dengan ruang kosong luas di sekelilingnya.',
          trapAlert: 'Jangan tertukar Rutherford (menemui nukleus & proton) dengan Chadwick (menemui neutron).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Susun 5 ahli sains model atom mengikut urutan sejarah.',
            answer: 'Dalton → Thomson → Rutherford → Bohr → Chadwick.',
          },
          {
            question: 'Nyatakan jisim relatif bagi neutron dan elektron.',
            answer: 'Neutron = $1$; Elektron = $\\frac{1}{1840}$.',
          },
          {
            question: 'Siapakah yang mencadangkan elektron bergerak di dalam petala mengelilingi nukleus?',
            answer: 'Niels Bohr.',
          },
        ],
        fadedProblem: {
          prompt: 'Satu zarah atom mempunyai 11 proton, 12 neutron, dan 11 elektron.',
          step1GivenAndFormula: 'Jumlah cas proton $= +11$; jumlah cas elektron $= -11$; cas neutron $= 0$.',
          studentTask: 'Tentukan jumlah cas zarah ini dan nyatakan zarah manakah berada di dalam nukleus.',
          answerSteps: 'Jumlah cas bersih $= (+11) + (-11) + 0 = 0$ (atom neutral); 11 proton dan 12 neutron berada di dalam nukleus.',
        },
        transferQuestion: {
          question: 'Mengapakah jisim atom hampir keseluruhannya tertumpu pada nukleus walaupun saiz nukleus sangat kecil?',
          answer: 'Kerana proton dan neutron yang berada di dalam nukleus masing-masing berjisim relatif $1$, sedangkan elektron di luar nukleus hanya berjisim $\\frac{1}{1840}$ yang boleh diabaikan.',
        },
      },
    },
    {
      id: 'k4-2.3',
      chapterId: 'k4-bab-2',
      code: '2.3',
      title: 'Struktur Atom',
      pageRef: 'm.s. 32–36',
      part1Anchor: {
        phenomenon:
          'Mengapakah satu nombor tunggal pada bahagian bawah simbol $^{23}_{11}\\text{Na}$ sudah cukup untuk menentukan sama ada sesuatu unsur bertindak balas meletup dengan air atau kekal lengai seperti neon?',
        chapterConnection:
          'Menghubungkan nombor proton ($Z$), nombor nukleon ($A$), perwakilan piawai atom, dan susunan elektron valens yang menentukan keseluruhan Bab 4 dan 5.',
      },
      part2SacredDefinitions: [
        {
          title: 'Nombor Proton ($Z$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nombor proton ialah ' },
            { text: 'bilangan proton di dalam nukleus', keyword: true },
            { text: ' sesuatu atom.' },
          ],
        },
        {
          title: 'Nombor Nukleon ($A$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nombor nukleon ialah ' },
            { text: 'jumlah bilangan proton dan neutron di dalam nukleus', keyword: true },
            { text: ' sesuatu atom.' },
          ],
          equationLatex: 'A = Z + \\text{bilangan neutron}',
        },
        {
          title: 'Elektron Valens',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Elektron valens ialah ' },
            { text: 'elektron yang terletak pada petala terluar (petala valens)', keyword: true },
            { text: ' sesuatu atom.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Nombor Proton Menentukan Identiti & Sifat Kimia Unsur',
            cause: 'Bilangan proton ($Z$) menetapkan bilangan elektron dalam atom neutral.',
            mechanism: 'Elektron diisi dari petala terdalam ke luar ($2.8.8\\dots$), menghasilkan bilangan elektron valens tertentu.',
            effect: 'Elektron valens menentukan bagaimana atom menderma, menerima atau berkongsi elektron dalam tindak balas kimia.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Rajah Susunan Elektron vs Rajah Struktur Atom',
            headers: ['Ciri Lukisan', 'Rajah Susunan Elektron', 'Rajah Struktur Atom'],
            rows: [
              ['Pusat nukleus', 'Tulis simbol unsur sahaja (cth: $\\text{Na}$)', 'Tulis bilangan proton & neutron (cth: $11p, 12n$)'],
              ['Petala & elektron', 'Lukis semua petala terisi elektron sebagai bulatan sepusat dengan tanda pangkah ($\\times$) atau titik ($\\bullet$)', 'Sama, tetapi nukleus memaparkan komposisi zarah subatom'],
              ['Kegunaan peperiksaan', 'Menunjukkan ikatan ion/kovalen & kumpulan unsur', 'Menunjukkan struktur terperinci nukleus + elektron'],
            ],
          },
          {
            title: 'Had Muatan Elektron Mengikut Petala (Z = 1 hingga 20)',
            headers: ['Petala', 'Maksimum Elektron', 'Contoh Unsur'],
            rows: [
              ['Petala 1 (Terdalam)', '2 elektron (duplet)', 'Helium ($2$)'],
              ['Petala 2', '8 elektron', 'Neon ($2.8$), Natrium ($2.8.1$)'],
              ['Petala 3', '8 elektron (bagi $Z \\le 20$)', 'Argon ($2.8.8$), Kalsium ($2.8.8.2$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Perwakilan Piawai Atom & Pengiraan Neutron',
            latex: '^{A}_{Z}\\text{X} \\quad\\Longrightarrow\\quad n = A - Z',
            symbols: [
              { symbol: 'A', meaning: 'nombor nukleon (atas)', unit: '—' },
              { symbol: 'Z', meaning: 'nombor proton (bawah)', unit: '—' },
              { symbol: 'n', meaning: 'bilangan neutron', unit: '—' },
            ],
            appliesWhen: 'Semua atom dan isotop daripada Hidrogen ($^1_1H$) hingga Kalsium ($^{40}_{20}Ca$).',
            failsWhen: 'Jangan terbalikkan kedudukan: nombor lebih besar ($A$) di ATAS, nombor lebih kecil ($Z$) di BAWAH.',
          },
        ],
        diagrams: [
          {
            kind: 'chem-atomic-shells',
            title: 'Rajah Interaktif Struktur Atom & Susunan Elektron (Na, Cl, Ca)',
            whatItShows: 'Membandingkan bilangan proton, neutron di nukleus dengan susunan petala elektron serta elektron valens.',
            axisOrRule: 'Klik butang unsur untuk menukar atom dan perhatikan perubahan bilangan petala serta elektron valens.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menentukan Subatom & Susunan Elektron daripada Perwakilan Piawai',
          problem:
            'Atom kalium diwakili oleh $^{39}_{19}\\text{K}$. Tentukan bilangan proton, neutron, elektron, susunan elektron, dan elektron valens.',
          given: ['$A = 39$, $Z = 19$'],
          formulaLatex: 'n = A - Z',
          formulaWhy: 'Nombor nukleon ialah jumlah proton dan neutron.',
          substituteLatex: 'n = 39 - 19 = 20 \\quad|\\quad 19\\ e^- \\rightarrow 2.8.8.1',
          answer: 'Proton = $19$, Neutron = $20$, Elektron = $19$; susunan elektron $= 2.8.8.1$; elektron valens $= 1$.',
          trapAlert: 'Jangan tulis susunan elektron kalium sebagai $2.8.9$! Petala ketiga diisi maksimum 8 elektron dahulu bagi $Z=19, 20$.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah formula mencari bilangan neutron daripada perwakilan piawai $^A_ZX$?',
            answer: 'Bilangan neutron $= A - Z$.',
          },
          {
            question: 'Apakah susunan elektron bagi atom kalsium ($Z = 20$)?',
            answer: '$2.8.8.2$.',
          },
          {
            question: 'Apakah perbezaan utama di pusat bulatan antara rajah susunan elektron dan rajah struktur atom?',
            answer: 'Rajah susunan elektron menulis simbol unsur sahaja, manakala rajah struktur atom menulis bilangan proton dan neutron.',
          },
        ],
        fadedProblem: {
          prompt: 'Suatu ion $X^{2+}$ mempunyai susunan elektron $2.8$ dan $12$ neutron.',
          step1GivenAndFormula: 'Ion $X^{2+}$ terbentuk apabila atom neutral $X$ menderma $2$ elektron; maka atom $X$ mempunyai $10 + 2 = 12$ elektron.',
          studentTask: 'Tentukan nombor proton $Z$, nombor nukleon $A$, dan tulis perwakilan piawai atom $X$.',
          answerSteps: '$Z = 12$; $A = 12 + 12 = 24$; perwakilan piawai ialah $^{24}_{12}\\text{X}$.',
        },
        transferQuestion: {
          question: 'Mengapakah atom klorin ($2.8.7$) mempunyai sifat kimia berbeza sama sekali daripada ion klorida ($2.8.8$)?',
          answer: 'Atom klorin mempunyai 7 elektron valens yang tidak stabil dan cenderung menerima 1 elektron, manakala ion klorida telah mencapai susunan elektron oktet yang stabil ($2.8.8$).',
        },
      },
    },
    {
      id: 'k4-2.4',
      chapterId: 'k4-bab-2',
      code: '2.4',
      title: 'Isotop dan Penggunaannya',
      pageRef: 'm.s. 37–39',
      part1Anchor: {
        phenomenon:
          'Karbon-12 membentuk pensel dan badan manusia, manakala Karbon-14 yang hampir seiras membolehkan ahli arkeologi mengira umur fosil berusia puluhan ribu tahun. Mengapakah kedua-duanya tetap unsur karbon?',
        chapterConnection:
          'Melengkapkan Bab 2 dengan menerangkan variasi neutron pada unsur sama, pengiraan purata $JAR$, dan kegunaan radioisotop dalam industri serta perubatan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Isotop',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Isotop ialah ' },
            { text: 'atom-atom bagi unsur yang sama yang mempunyai bilangan proton yang sama tetapi bilangan neutron yang berbeza', keyword: true },
            { text: ' (atau nombor proton sama, nombor nukleon berbeza).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Persamaan Sifat Kimia tetapi Perbezaan Sifat Fizik antara Isotop',
            cause: 'Isotop mempunyai bilangan proton dan susunan elektron valens yang sama, tetapi jisim nukleon berbeza.',
            mechanism: 'Sifat kimia bergantung kepada elektron valens, manakala sifat fizik (ketumpatan, takat lebur/didih, kadar resapan) bergantung kepada jisim atom.',
            effect: 'Semua isotop unsur sama bertindak balas secara kimia dengan cara yang sama tetapi mempunyai ketumpatan sedikit berbeza.',
          },
        ],
        tables: [
          {
            title: 'Kegunaan Isotop Penting dalam Sukatan KSSM',
            headers: ['Isotop', 'Bidang', 'Kegunaan Spesifik'],
            rows: [
              ['Kobalt-60', 'Perubatan & Industri', 'Membunuh sel kanser (radioterapi) & mensterilkan alat perubatan'],
              ['Iodin-131', 'Perubatan', 'Merawat kanser/penyakit kelenjar tiroid'],
              ['Fosforus-32', 'Pertanian', 'Mengkaji kadar penyerapan & metabolisme baja fosforus oleh tumbuhan'],
              ['Karbon-14', 'Arkeologi', 'Menganggarkan usia artifak purba dan fosil'],
              ['Uranium-235', 'Tenaga', 'Menjana tenaga elektrik di stesen jana kuasa nuklear'],
              ['Natrium-24', 'Kejuruteraan', 'Mengesan kebocoran paip bawah tanah'],
              ['Hidrogen-3 (Tritium) / Plumbum-210', 'Alam Sekitar / Geologi', 'Mengesan kumbahan & sisa cecair ($^3H$); menentukan usia lapisan tanah/pasir ($^{210}Pb$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Jisim Atom Relatif (JAR) daripada Kelimpahan Semula Jadi Isotop',
            latex: '\\text{JAR} = \\frac{\\sum (\\text{\\% kelimpahan isotop} \\times \\text{jisim isotop})}{100}',
            symbols: [
              { symbol: '\\sum', meaning: 'hasil tambah bagi semua isotop unsur itu', unit: '—' },
            ],
            appliesWhen: 'Mengira JAR purata apabila diberi peratus kelimpahan (cth: $^{35}Cl$ $75\\%$ dan $^{37}Cl$ $25\\%$).',
            failsWhen: 'Jika soalan memberi nisbah (cth: $3:1$), bahagikan dengan jumlah nisbah ($4$), bukan $100$.',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira JAR Klorin daripada Peratus Kelimpahan Isotop',
          problem:
            'Klorin semula jadi terdiri daripada $75\\%$ isotop $^{35}_{17}\\text{Cl}$ dan $25\\%$ isotop $^{37}_{17}\\text{Cl}$. Hitung jisim atom relatif (JAR) klorin.',
          given: ['Isotop 1: $75\\%$, jisim $35$', 'Isotop 2: $25\\%$, jisim $37$'],
          formulaLatex: '\\text{JAR} = \\frac{(\\%_1 \\times m_1) + (\\%_2 \\times m_2)}{100}',
          formulaWhy: 'Purata wajaran mengikut kelimpahan semula jadi.',
          substituteLatex: '\\text{JAR} = \\frac{(75 \\times 35) + (25 \\times 37)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100}',
          answer: '$\\text{JAR Cl} = 35.5$',
          trapAlert: 'Pastikan hasil tambah peratusan ialah $100\\%$ sebelum membahagi; nilai JAR tidak mempunyai unit!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah perkataan wajib dalam takrif isotop?',
            answer: 'Atom unsur sama dengan bilangan proton yang sama tetapi bilangan neutron yang berbeza.',
          },
          {
            question: 'Mengapakah $^{12}_6C$ dan $^{14}_6C$ mempunyai sifat kimia yang sama?',
            answer: 'Kedua-duanya mempunyai bilangan elektron valens yang sama iaitu $4$.',
          },
          {
            question: 'Isotop manakah digunakan untuk mengesan paip bawah tanah bocor dan merawat tiroid?',
            answer: 'Natrium-24 (paip bocor) dan Iodin-131 (tiroid).',
          },
        ],
        fadedProblem: {
          prompt: 'Unsur boron mempunyai $20\\%$ isotop $^{10}B$ dan $80\\%$ isotop $^{11}B$.',
          step1GivenAndFormula: '$\\text{JAR} = \\frac{(\\%_1 \\times m_1) + (\\%_2 \\times m_2)}{100}$.',
          studentTask: 'Hitung JAR bagi boron.',
          answerSteps: '$\\text{JAR} = \\frac{(20 \\times 10) + (80 \\times 11)}{100} = \\frac{200 + 880}{100} = 10.8$.',
        },
        transferQuestion: {
          question: 'Adakah $^{40}_{18}\\text{Ar}$ dan $^{40}_{20}\\text{Ca}$ merupakan pasangan isotop? Terangkan.',
          answer: 'Bukan. Walaupun nombor nukleon kedua-duanya $40$, nombor protonnya berbeza ($18$ berbanding $20$), maka kedua-duanya adalah unsur yang berbeza.',
        },
      },
    },
  ],
};
