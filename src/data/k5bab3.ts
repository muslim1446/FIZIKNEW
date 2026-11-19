import type { ChapterContent } from '../types/textbook';

export const k5bab3: ChapterContent = {
  id: 'k5-bab-3',
  subject: 'kimia',
  formLevel: 5,
  number: 3,
  title: 'Termokimia',
  pageRange: 'm.s. 114–140',
  overview:
    'Memahami perubahan haba tindak balas eksotermik dan endotermik, melukis gambar rajah aras tenaga, mengira 4 jenis Haba Tindak Balas (Pemendakan, Penyesaran, Peneutralan, Pembakaran) menggunakan $Q = mc\\theta$, serta mengira nilai bahan api ($\\text{kJ g}^{-1}$).',
  subtopics: [
    {
      id: 'k5-3.1',
      chapterId: 'k5-bab-3',
      code: '3.1',
      title: 'Perubahan Haba dalam Tindak Balas',
      pageRef: 'm.s. 116–119',
      part1Anchor: {
        phenomenon:
          'Apabila natrium hidroksida dilarutkan dalam air, bikar terasa panas sehingga boleh mendidihkan kopi tin automatik ("Hot Can"); sebaliknya ammonium nitrat dalam air menyebabkan termometer menjunam sejuk!',
        chapterConnection:
          'Menerangkan pemutusan ikatan (endotermik) vs pembentukan ikatan (eksotermik) dan cara melukis Gambar Rajah Aras Tenaga sebelum pengiraan haba dalam 3.2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tindak Balas Eksotermik vs Endotermik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Tindak balas eksotermik ialah tindak balas yang ' },
            { text: 'membebaskan haba ke persekitaran', keyword: true },
            { text: ' menyebabkan suhu persekitaran meningkat ($\\Delta H$ negatif); tindak balas endotermik ialah tindak balas yang ' },
            { text: 'menyerap haba daripada persekitaran', keyword: true },
            { text: ' menyebabkan suhu persekitaran menurun ($\\Delta H$ positif).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Punca Mikroskopik Mengapa Tindak Balas Bersifat Eksotermik atau Endotermik',
            cause: 'Setiap tindak balas melibatkan pemutusan ikatan bahan tindak balas (menyerap tenaga) dan pembentukan ikatan hasil (membebaskan tenaga).',
            mechanism: 'Jika tenaga dibebaskan semasa pembentukan ikatan hasil MELEBIHI tenaga diserap semasa pemutusan ikatan bahan, lebihan haba dibebaskan ke persekitaran.',
            effect: '$\\Delta H = H_{\\text{hasil}} - H_{\\text{bahan}} < 0$ (eksotermik); jika sebaliknya berlaku, $\\Delta H > 0$ (endotermik).',
          },
        ],
        tables: [
          {
            title: 'Banding Beza Tindak Balas Eksotermik vs Endotermik (Aktiviti 3A)',
            headers: ['Ciri', 'Eksotermik', 'Endotermik'],
            rows: [
              ['Aliran haba & Suhu larutan/bikar', 'Haba dibebas ke persekitaran; **suhu meningkat** (bikar panas)', 'Haba diserap drpd persekitaran; **suhu menurun** (bikar sejuk)'],
              ['Jumlah tenaga bahan vs hasil', '$H_{\\text{bahan}} > H_{\\text{hasil}}$', '$H_{\\text{bahan}} < H_{\\text{hasil}}$'],
              ['Tanda $\\Delta H$', '**Negatif** ($-x\\text{ kJ mol}^{-1}$)', '**Positif** ($+x\\text{ kJ mol}^{-1}$)'],
              ['Contoh Aktiviti 3A & Harian', 'Melarutkan $NaOH$, $CaCl_2$ kontang, pembakaran, peneutralan, pengaratan, respirasi', 'Melarutkan $NH_4NO_3$, $KNO_3$, $Na_2S_2O_3$, penguraian terma $CaCO_3$, fotosintesis'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Termokimia & Perubahan Entalpi',
            latex: '\\Delta H = \\text{Tenaga haba diserap (putus ikatan)} - \\text{Tenaga haba dibebas (bentuk ikatan)}',
            symbols: [
              { symbol: '\\Delta H', meaning: 'haba tindak balas (perubahan kandungan tenaga)', unit: '$\\text{kJ mol}^{-1}$' },
            ],
            appliesWhen: 'Menulis persamaan termokimia dan melukis gambar rajah aras tenaga.',
            failsWhen: 'Perangkap lukisan Aras Tenaga: Pada paksi menegak tulis perkataan **"Tenaga"** (dengan anak panah ke atas), tulis formula bahan dan hasil di atas garis mendatar, dan tulis nilai $\\Delta H$ lengkap dengan tanda **$-$** atau **$+$** serta unit!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-thermochemistry-levels',
            title: 'Gambar Rajah Aras Tenaga Eksotermik vs Endotermik',
            whatItShows: 'Kedudukan relatif aras tenaga bahan berbanding hasil dan arah anak panah perubahan tenaga $\\Delta H$.',
            axisOrRule: 'Anak panah $\\Delta H$ sentiasa bermula dari garis bahan tindak balas menuju ke garis hasil tindak balas.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mentafsir Data Suhu & Melukis Gambar Rajah Aras Tenaga',
          problem:
            'Apabila pepejal ammonium klorida dilarutkan dalam $50\\text{ cm}^3$ air, suhu air menurun dari $28.0\\,^\\circ\\text{C}$ kepada $22.5\\,^\\circ\\text{C}$ ($\\Delta H = +14.8\\text{ kJ mol}^{-1}$). Nyatakan jenis tindak balas dan tiga maklumat daripada gambar rajah aras tenaganya.',
          given: ['Suhu turun ($\\Delta\\theta = -5.5\\,^\\circ\\text{C}$)', '$\\Delta H$ bertanda positif'],
          formulaLatex: 'NH_4Cl(p) \\xrightarrow{H_2O} NH_4^+(ak) + Cl^-(ak) \\quad \\Delta H = +14.8\\text{ kJ mol}^{-1}',
          formulaWhy: 'Penurunan suhu persekitaran bermaksud tenaga haba diserap oleh sistem.',
          substituteLatex: 'H_{\\text{hasil }} (NH_4^+ + Cl^-) > H_{\\text{bahan }} (NH_4Cl)',
          answer: 'Tindak balas endotermik. Maklumat aras tenaga: (1) Tindak balas menyerap haba daripada persekitaran; (2) Jumlah kandungan tenaga ion $NH_4^+$ dan $Cl^-$ lebih tinggi daripada pepejal $NH_4Cl$ sebanyak $14.8\\text{ kJ mol}^{-1}$; (3) Suhu larutan menurun.',
          trapAlert: 'Dalam melukis gambar rajah aras tenaga, jangan tambah lengkung bonggol tenaga pengaktifan jika soalan hanya meminta "gambar rajah aras tenaga" (kecuali diminta "profil tenaga")!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah tindak balas peneutralan menyebabkan bacaan termometer meningkat walaupun ia membebaskan haba?',
            answer: 'Kerana haba tindak balas dibebaskan ke dalam larutan air (persekitaran), lalu menaikkan suhu larutan yang diukur oleh termometer.',
          },
          {
            question: 'Apakah tanda $\\Delta H$ bagi pembakaran dan penguraian terma kalsium karbonat?',
            answer: 'Pembakaran: negatif (eksotermik); Penguraian terma $CaCO_3$: positif (endotermik).',
          },
          {
            question: 'Antara pemutusan ikatan dan pembentukan ikatan, yang manakah proses endotermik?',
            answer: 'Pemutusan ikatan (memerlukan dan menyerap tenaga).',
          },
        ],
        fadedProblem: {
          prompt: 'Diberi $Zn(p) + CuSO_4(ak) \\to ZnSO_4(ak) + Cu(p)$, $\\Delta H = -210\\text{ kJ mol}^{-1}$.',
          step1GivenAndFormula: '$\\Delta H$ negatif menunjukkan tindak balas eksotermik ($H_{\\text{bahan}} > H_{\\text{hasil}}$).',
          studentTask: 'Nyatakan kedudukan aras tenaga $(Zn + CuSO_4)$ berbanding $(ZnSO_4 + Cu)$ dalam gambar rajah aras tenaga.',
          answerSteps: 'Aras tenaga bahan tindak balas ($Zn + CuSO_4$) diletakkan lebih TINGGI di atas, dan anak panah mengarah KE BAWAH menuju aras hasil ($ZnSO_4 + Cu$) dengan label $\\Delta H = -210\\text{ kJ mol}^{-1}$.',
        },
        transferQuestion: {
          question: 'Adakah semua tindak balas eksotermik berlaku secara serta-merta tanpa pemanasan awal? Berikan contoh.',
          answer: 'Tidak. Pembakaran metana atau pembakaran pita magnesium ialah tindak balas sangat eksotermik ($\\Delta H < 0$), namun tetap memerlukan sedikit tenaga pencucuhan awal untuk mengatasi tenaga pengaktifannya ($E_a$).',
        },
      },
    },
    {
      id: 'k5-3.2',
      chapterId: 'k5-bab-3',
      code: '3.2',
      title: 'Haba Tindak Balas',
      pageRef: 'm.s. 120–135',
      part1Anchor: {
        phenomenon:
          'Berapakah haba sebenar apabila $1\\text{ mol}$ air terbentuk daripada peneutralan asid kuat + alkali kuat ($-57\\text{ kJ mol}^{-1}$) berbanding asid lemah ($-55\\text{ kJ mol}^{-1}$), dan mengapa haba pembakaran alkohol naik secara seragam dari metanol ke butanol?',
        chapterConnection:
          'Menguasai algoritma 4-langkah termokimia ($Q = mc\\theta$) merentasi kesemua 4 jenis haba tindak balas SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrif Empat Haba Tindak Balas (Per 1 Mol)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Haba pemendakan: perubahan haba apabila ' },
            { text: '$1\\text{ mol}$ mendakan terbentuk', keyword: true },
            { text: '; Haba penyesaran: apabila ' },
            { text: '$1\\text{ mol}$ logam disesarkan', keyword: true },
            { text: '; Haba peneutralan: apabila ' },
            { text: '$1\\text{ mol}$ air terbentuk', keyword: true },
            { text: '; Haba pembakaran: apabila ' },
            { text: '$1\\text{ mol}$ bahan dibakar lengkap dalam oksigen berlebihan', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Haba Peneutralan Asid Lemah + Alkali Kuat Lebih Rendah ($-55$ vs $-57\\text{ kJ mol}^{-1}$)',
            cause: 'Asid lemah (seperti $CH_3COOH$) hanya mengion separa di dalam air; kebanyakannya masih wujud sebagai molekul.',
            mechanism: 'Sebahagian haba yang dibebaskan daripada peneutralan $H^+ + OH^-$ diserap semula untuk mengionkan lengkap molekul asid lemah tersebut.',
            effect: 'Haba bersih yang dibebaskan ke persekitaran menjadi kurang ($\\approx -55\\text{ kJ mol}^{-1}$), manakala antara asid lemah + alkali lemah lebih rendah lagi ($\\approx -50\\text{ kJ mol}^{-1}$).',
          },
          {
            title: 'Mengapa Haba Pembakaran Alkohol Meningkat Apabila Bilangan Atom Karbon Bertambah',
            cause: 'Menuruni siri alkohol ($CH_3OH \\to C_4H_9OH$), bilangan atom karbon dan hidrogen per molekul bertambah.',
            mechanism: 'Apabila 1 mol alkohol terbakar lengkap, lebih banyak molekul $CO_2$ dan $H_2O$ terbentuk, membebaskan lebih banyak tenaga ikatan.',
            effect: 'Graf haba pembakaran melawan bilangan atom karbon menaik secara garis lurus.',
          },
        ],
        tables: [
          {
            title: 'Nilai Piawai & Anggaran Haba Peneutralan Mengikut Kekuatan Asid-Alkali',
            headers: ['Pasangan Peneutralan', 'Haba Peneutralan ($\\Delta H$)', 'Sebab'],
            rows: [
              ['Asid kuat + Alkali kuat ($HCl + NaOH$)', '$\\approx -57\\text{ kJ mol}^{-1}$', 'Kedua-duanya mengion lengkap 100%; hanya $H^+ + OH^- \\to H_2O$'],
              ['Asid diprotik kuat + Alkali kuat ($H_2SO_4 + 2NaOH$)', '$\\approx -57\\text{ kJ mol}^{-1}$ per mol $H_2O$ ($-114\\text{ kJ}$ total utk 2 mol $H_2O$)', 'Masih membentuk air daripada ion $H^+$ dan $OH^-$ lengkap'],
              ['Asid lemah + Alkali kuat ($CH_3COOH + NaOH$)', '$\\approx -55\\text{ kJ mol}^{-1}$', 'Sebahagian haba diserap untuk mengionkan lengkap asid lemah'],
              ['Asid lemah + Alkali lemah ($CH_3COOH + NH_3$)', '$\\approx -50\\text{ kJ mol}^{-1}$', 'Sebahagian haba diserap untuk mengionkan kedua-dua asid & alkali lemah'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Algoritma 4-Langkah Pengiraan Haba Tindak Balas',
            latex: '\\text{(1) } Q = mc\\theta \\quad\\to\\quad \\text{(2) } n = \\frac{MV}{1000} \\text{ atau } \\frac{m_{\\text{bahan}}}{M_r} \\quad\\to\\quad \\text{(3) } \\Delta H = \\pm\\frac{Q}{1000 \\times n}\\text{ kJ mol}^{-1}',
            symbols: [
              { symbol: 'm', meaning: 'jumlah jisim air/larutan dipanaskan ($1\\text{ cm}^3 \\approx 1\\text{ g}$)', unit: '$\\text{g}$' },
              { symbol: 'c', meaning: 'muatan haba tentu air', unit: '$4.2\\text{ J g}^{-1}\\,^\\circ\\text{C}^{-1}$' },
              { symbol: '\\theta', meaning: 'perubahan suhu ($T_{\\max} - T_{\\text{awal}}$)', unit: '$^\\circ\\text{C}$' },
            ],
            appliesWhen: 'Semua soalan pengiraan haba pemendakan, penyesaran, peneutralan dan pembakaran SPM.',
            failsWhen: 'Perangkap besar SPM: (1) Dalam pembakaran alkohol, $m$ ialah jisim **AIR di dalam tin kuprum**, BUKAN jisim alkohol terbakar! Jisim alkohol hanya digunakan dalam langkah 2 untuk mencari $n$! (2) Jika $50\\text{ cm}^3$ asid dicampur dengan $50\\text{ cm}^3$ alkali, $m = 50 + 50 = 100\\text{ g}$!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 3A–3D',
            title: 'Penentuan Haba Peneutralan dan Haba Pembakaran Alkohol',
            aim: 'Menentukan haba peneutralan (cawan polistirena) dan haba pembakaran metanol hingga butanol (tin kuprum + pelindung angin).',
            inference: 'Perubahan suhu larutan/air boleh digunakan untuk mengira haba yang dibebaskan per mol hasil atau bahan terbakar.',
            hypothesis: 'Semakin bertambah bilangan atom karbon per molekul alkohol, semakin tinggi haba pembakarannya.',
            variables: {
              manipulated: 'Jenis alkohol ($CH_3OH, C_2H_5OH, C_3H_7OH, C_4H_9OH$)',
              responding: 'Haba pembakaran ($\\text{kJ mol}^{-1}$) berdasarkan kenaikan suhu air',
              fixed: 'Isi padu air dalam tin kuprum ($200\\text{ cm}^3$), kenaikan suhu air ($30\\,^\\circ\\text{C}$)',
            },
            setupLogic: 'Gunakan **cawan polistirena** untuk peneutralan/pemendakan (penebat haba baik); bagi pembakaran alkohol, gunakan **tin kuprum** (konduktor haba baik), **tanpa kasa dawai**, pasang **penghadang angin**, timbang pelita alkohol serta-merta sebelum & selepas memadamkan api.',
            expectedResult: 'Nilai eksperimen sentiasa lebih rendah daripada nilai teori kerana sebahagian haba hilang ke persekitaran & diserap radas.',
            conclusion: 'Haba pembakaran meningkat secara linear dengan bilangan atom karbon dalam molekul alkohol.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Pengiraan Lengkap Haba Pembakaran Etanol ($C_2H_5OH$)',
          problem:
            'Pembakaran lengkap $0.92\\text{ g}$ etanol memanaskan $200\\text{ cm}^3$ air dalam tin kuprum daripada $28.0\\,^\\circ\\text{C}$ ke $58.0\\,^\\circ\\text{C}$. Hitung haba pembakaran etanol. [$c = 4.2\\text{ J g}^{-1}\\,^\\circ\\text{C}^{-1}$, JMR etanol $= 46$]',
          given: ['$m_{\\text{air}} = 200\\text{ g}$, $\\theta = 58.0 - 28.0 = 30.0\\,^\\circ\\text{C}$', '$m_{\\text{etanol}} = 0.92\\text{ g}$'],
          formulaLatex: 'Q = m_{\\text{air}} c \\theta, \\qquad n(C_2H_5OH) = \\frac{0.92}{46}, \\qquad \\Delta H = -\\frac{Q}{1000n}',
          formulaWhy: 'Guna jisim air dalam $Q=mc\\theta$, jisim etanol dalam mol $n$, dan letak tanda negatif kerana pembakaran ialah eksotermik.',
          substituteLatex: 'Q = 200 \\times 4.2 \\times 30.0 = 25200\\text{ J} = 25.2\\text{ kJ}; \\quad n = 0.02\\text{ mol}; \\quad \\Delta H = -\\frac{25.2}{0.02}',
          answer: 'Haba pembakaran etanol, $\\Delta H = -1260\\text{ kJ mol}^{-1}$.',
          trapAlert: 'Sentiasa tulis tanda **negatif ($-$)** dan unit **$\\text{kJ mol}^{-1}$** pada jawapan akhir $\\Delta H$! Juga jangan campur jisim etanol ke dalam $m$ rumus $mc\\theta$.',
        },
      ],
      part5DecisionTable: {
        title: 'Langkah Mengurangkan Ralat Kehilangan Haba dalam Eksperimen Termokimia',
        rows: [
          {
            designChoice: 'Menggunakan cawan polistirena dan menutupnya dengan penutup dalam eksperimen pemendakan/peneutralan',
            scientificReason: 'Polistirena ialah penebat haba yang baik bagi mengurangkan kehilangan haba ke persekitaran.',
          },
          {
            designChoice: 'Menggunakan tin kuprum (tanpa kasa dawai) serta penghadang angin dalam eksperimen pembakaran alkohol',
            scientificReason: 'Kuprum ialah konduktor haba yang baik untuk memindahkan haba nyalaan ke air; penghadang angin menghalang tiupan angin membawa pergi haba.',
          },
          {
            designChoice: 'Menimbang pelita berisi alkohol secepat mungkin selepas memadamkan nyalaan',
            scientificReason: 'Mengelakkan kehilangan jisim akibat pengewapan alkohol yang mudah meruap.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah nilai haba pembakaran etanol di makmal ($\\approx -1100\\text{ kJ mol}^{-1}$) lebih rendah daripada nilai teori ($-1376\\text{ kJ mol}^{-1}$)?',
            answer: 'Kerana sebahagian haba hilang ke persekitaran, diserap oleh tin kuprum, dan pembakaran tidak lengkap (menghasilkan jelaga).',
          },
          {
            question: 'Apakah nilai anggaran haba peneutralan antara $50\\text{ cm}^3\\ HCl\\ 1.0\\text{ M}$ dengan $50\\text{ cm}^3\\ NaOH\\ 1.0\\text{ M}$?',
            answer: '$-57\\text{ kJ mol}^{-1}$ (suhu meningkat sekitar $6.8\\,^\\circ\\text{C}$).',
          },
          {
            question: 'Mengapakah serbuk logam berlebihan (cth: serbuk $Zn$) digunakan dalam menentukan haba penyesaran kuprum?',
            answer: 'Untuk memastikan kesemua ion $Cu^{2+}$ disesarkan sepenuhnya menjadi kuprum.',
          },
        ],
        fadedProblem: {
          prompt: '$50\\text{ cm}^3\\ AgNO_3\\ 0.5\\text{ M}$ dicampur dengan $50\\text{ cm}^3\\ NaCl\\ 0.5\\text{ M}$. Suhu meningkat sebanyak $3.0\\,^\\circ\\text{C}$.',
          step1GivenAndFormula: '$m = 50 + 50 = 100\\text{ g}$; $Q = 100 \\times 4.2 \\times 3.0 = 1260\\text{ J} = 1.26\\text{ kJ}$; $n(AgCl) = \\frac{0.5 \\times 50}{1000} = 0.025\\text{ mol}$.',
          studentTask: 'Hitung haba pemendakan bagi argentum klorida, $AgCl$.',
          answerSteps: '$\\Delta H = -\\frac{1.26}{0.025} = -50.4\\text{ kJ mol}^{-1}$.',
        },
        transferQuestion: {
          question: 'Apakah perubahan kenaikan suhu ($\\theta$) jika kepekatan kedua-dua $HCl$ dan $NaOH$ digandakan daripada $1.0\\text{ M}$ kepada $2.0\\text{ M}$ pada isi padu yang sama ($50\\text{ cm}^3 + 50\\text{ cm}^3$)?',
          answer: 'Kenaikan suhu ($\\theta$) menjadi DUA KALI ganda kerana bilangan mol air terbentuk berganda dua ($2Q$) manakala jumlah jisim larutan yang dipanaskan masih tetap sama ($100\\text{ g}$). Namun $\\Delta H$ per mol kekal sama ($-57\\text{ kJ mol}^{-1}$).',
        },
      },
    },
    {
      id: 'k5-3.3',
      chapterId: 'k5-bab-3',
      code: '3.3',
      title: 'Aplikasi Tindak Balas Eksotermik dan Endotermik dalam Kehidupan Harian',
      pageRef: 'm.s. 136–138',
      part1Anchor: {
        phenomenon:
          'Pek sejuk segera melegakan kecederaan sukan tanpa peti sejuk, pek panas menghangatkan pendaki gunung, manakala jurutera roket memilih hidrogen dengan nilai bahan api tertinggi di bumi ($143\\text{ kJ g}^{-1}$)!',
        chapterConnection:
          'Menutup Bab 3 dengan aplikasi praktikal tindak balas haba dan kaedah memilih bahan api paling efisien berdasarkan **nilai bahan api**.',
      },
      part2SacredDefinitions: [
        {
          title: 'Nilai Bahan Api (Nilai Haba)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nilai bahan api ialah ' },
            { text: 'kuantiti tenaga haba yang dibebaskan apabila $1\\text{ g}$ bahan api dibakar dengan lengkap dalam oksigen', keyword: true },
            { text: ' (diukur dalam unit $\\text{kJ g}^{-1}$).' },
          ],
          equationLatex: '\\text{Nilai bahan api (kJ g}^{-1}\\text{)} = \\frac{\\text{Haba pembakaran (kJ mol}^{-1}\\text{)}}{\\text{Jisim molar bahan api (g mol}^{-1}\\text{)}}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Pek Sejuk & Pek Panas Berfungsi Secara Segera',
            cause: 'Pek plastik mengandungi garam pepejal kering bersama kantung air nipis yang dipisahkan.',
            mechanism: 'Apabila dipicit, kantung air pecah dan garam melarut: pelarutan $NH_4NO_3$ menyerap haba (endotermik), manakala pelarutan $CaCl_2$ kontang atau tindak balas $CaO + H_2O$ membebaskan haba (eksotermik).',
            effect: 'Suhu pek segera turun menyejukkan kecederaan atau naik memanaskan makanan tin.',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Eksotermik-Endotermik & Nilai Bahan Api (Jadual 3.5)',
            headers: ['Aplikasi / Bahan Api', 'Prinsip / Nilai Bahan Api', 'Kegunaan & Catatan'],
            rows: [
              ['Pek sejuk ($NH_4NO_3$ + air)', 'Endotermik ($\\Delta H > 0$)', 'Melegakan demam & kecederaan bengkak otot segera'],
              ['Pek panas / Hot Can ($CaO$ / $CaCl_2$)', 'Eksotermik ($\\Delta H < 0$)', 'Memanaskan makanan tin kembara / tuam otot'],
              ['Hidrogen ($H_2$)', '$143\\text{ kJ g}^{-1}$ (Tertinggi)', 'Bahan api roket angkasa (bersih, hasilkan air sahaja; sukar disimpan)'],
              ['Gas asli / Metana ($CH_4$)', '$50\\text{ kJ g}^{-1}$ ($27$ kayu)', 'Memasak & jana kuasa elektrik'],
              ['Petrol ($\\approx C_8H_{18}$)', '$34\\text{ kJ g}^{-1}$', 'Kenderaan bermotor (mudah disimpan cecair)'],
              ['Etanol ($C_2H_5OH$)', '$30\\text{ kJ g}^{-1}$', 'Biofuel mesra alam (tenaga lebih rendah sedikit drpd petrol)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Haba Pembakaran ($\\text{kJ mol}^{-1}$) $\\to$ Nilai Bahan Api ($\\text{kJ g}^{-1}$)',
            latex: '\\text{Nilai bahan api} = \\frac{|\\Delta H_{\\text{pembakaran}}|}{\\text{Jisim molar}}',
            symbols: [
              { symbol: '\\text{Jisim molar}', meaning: 'jisim $1\\text{ mol}$ bahan api', unit: '$\\text{g mol}^{-1}$' },
            ],
            appliesWhen: 'Membandingkan kecekapan tenaga per gram antara bahan api berbeza (cth: oktana vs etanol vs hidrogen).',
            failsWhen: 'Perangkap SPM: Nilai bahan api sentiasa ditulis sebagai nombor **POSITIF** dalam $\\text{kJ g}^{-1}$ (tanpa tanda negatif!), manakala haba pembakaran $\\Delta H$ bertanda **NEGATIF** dalam $\\text{kJ mol}^{-1}$!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira & Membandingkan Nilai Bahan Api Metanol vs Oktana',
          problem:
            'Haba pembakaran metanol ($CH_3OH$, JMR $=32$) ialah $-725\\text{ kJ mol}^{-1}$, manakala oktana ($C_8H_{18}$, JMR $=114$) ialah $-5470\\text{ kJ mol}^{-1}$. Hitung nilai bahan api kedua-duanya dan nyatakan bahan api lebih cekap per gram.',
          given: ['Metanol: $725\\text{ kJ mol}^{-1}$, JMR $=32$', 'Oktana: $5470\\text{ kJ mol}^{-1}$, JMR $=114$'],
          formulaLatex: '\\text{Nilai bahan api} = \\frac{\\text{Haba pembakaran}}{\\text{Jisim molar}}',
          formulaWhy: 'Membandingkan tenaga dibebaskan bagi setiap $1\\text{ g}$ bahan api yang dibawa.',
          substituteLatex: '\\text{Metanol} = \\frac{725}{32} = 22.7\\text{ kJ g}^{-1}; \\qquad \\text{Oktana} = \\frac{5470}{114} = 48.0\\text{ kJ g}^{-1}',
          answer: 'Nilai bahan api metanol $= 22.7\\text{ kJ g}^{-1}$; oktana $= 48.0\\text{ kJ g}^{-1}$. Oktana membebaskan lebih banyak tenaga per gram.',
          trapAlert: 'Selain nilai bahan api tinggi, pemilihan bahan api harian turut mempertimbangkan **ketersediaan, kos, kemudahan penyimpanan** dan **kesan pencemaran alam sekitar**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah bahan kimia yang sesuai di dalam pek sejuk segera dan pek panas segera?',
            answer: 'Pek sejuk: ammonium nitrat ($NH_4NO_3$); Pek panas: kalsium klorida kontang ($CaCl_2$) atau kalsium oksida ($CaO$).',
          },
          {
            question: 'Bahan api manakah yang mempunyai nilai bahan api tertinggi tetapi tidak digunakan secara meluas dalam kereta biasa?',
            answer: 'Gas hidrogen ($143\\text{ kJ g}^{-1}$), kerana sukar disimpan di bawah tekanan amat tinggi serta berisiko meletup.',
          },
          {
            question: 'Apakah unit bagi nilai bahan api?',
            answer: '$\\text{kJ g}^{-1}$.',
          },
        ],
        fadedProblem: {
          prompt: 'Haba pembakaran propana ($C_3H_8$) ialah $-2220\\text{ kJ mol}^{-1}$. [JAR: $C=12, H=1$]',
          step1GivenAndFormula: 'Jisim molar $C_3H_8 = 3(12) + 8(1) = 44\\text{ g mol}^{-1}$.',
          studentTask: 'Hitung nilai bahan api propana dalam $\\text{kJ g}^{-1}$.',
          answerSteps: 'Nilai bahan api $= \\frac{2220}{44} = 50.45\\text{ kJ g}^{-1}$.',
        },
        transferQuestion: {
          question: 'Walaupun nilai bahan api etanol ($30\\text{ kJ g}^{-1}$) lebih rendah daripada petrol ($34\\text{ kJ g}^{-1}$), mengapakah sesetengah negara mencampurkan bioetanol ke dalam petrol?',
          answer: 'Kerana bioetanol ialah sumber tenaga boleh baharu daripada tumbuhan (tebu/jagung), membakar dengan lebih bersih (kurang jelaga dan kurang gas rumah hijau bersih) serta mengurangkan kebergantungan kepada bahan api fosil.',
        },
      },
    },
  ],
};
