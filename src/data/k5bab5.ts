import type { ChapterContent } from '../types/textbook';

export const k5bab5: ChapterContent = {
  id: 'k5-bab-5',
  subject: 'kimia',
  formLevel: 5,
  number: 5,
  title: 'Kimia Konsumer dan Industri',
  pageRange: 'm.s. 164–197',
  overview:
    'Mengaplikasikan pengetahuan kimia kepada produk pengguna dan teknologi terkini: minyak vs lemak serta penghidrogenan marjerin, saponifikasi sabun dan tindakan pencucian misel sabun vs detergen dalam air liat, 7 bahan tambah makanan, ubat moden vs kosmetik berbahaya, nanoteknologi grafen, dan teknologi hijau elektro-penggumpalan air sisa.',
  subtopics: [
    {
      id: 'k5-5.1',
      chapterId: 'k5-bab-5',
      code: '5.1',
      title: 'Minyak dan Lemak',
      pageRef: 'm.s. 166–168',
      part1Anchor: {
        phenomenon:
          'Minyak kelapa sawit dan minyak zaitun kekal cair di dalam botol pada suhu bilik, tetapi mentega dan lemak daging menjadi pepejal; kilang makanan pula menukarkan minyak sawit cecair menjadi marjerin pepejal hanya dengan meniupkan gas hidrogen!',
        chapterConnection:
          'Menjelaskan struktur ester trigliserida dan perbezaan tepu vs tak tepu yang juga menjadi bahan mentah utama pembuatan sabun dalam 5.2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrifan Kimia Minyak dan Lemak (Trigliserida)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Minyak dan lemak ialah ' },
            { text: 'ester semula jadi (trigliserida) yang terbentuk daripada tindak balas pengesteran antara satu molekul gliserol dengan tiga molekul asid lemak', keyword: true },
            { text: ', di mana ' },
            { text: 'minyak kaya dengan asid lemak tak tepu (ikatan ganda dua $C=C$) manakala lemak kaya dengan asid lemak tepu ($C-C$)', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\text{Gliserol (propa-1,2,3-triol)} + 3\\,\\text{Asid Lemak} \\longrightarrow \\text{Trigliserida (Minyak/Lemak)} + 3\\,H_2O',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Minyak Berbentuk Cecair Manakala Lemak Berbentuk Pepejal pada Suhu Bilik',
            cause: 'Minyak tumbuhan mengandungi peratus asid lemak tak tepu yang tinggi (ada ikatan ganda dua $C=C$ yang membengkokkan rantai hidrokarbon), manakala lemak haiwan kaya asid lemak tepu berantai lurus.',
            mechanism: 'Rantai lurus asid lemak tepu dapat disusun rapat antara satu sama lain menghasilkan daya tarikan van der Waals yang lebih kuat; rantai bengkok tak tepu menghalang susunan rapat.',
            effect: 'Lemak mempunyai takat lebur lebih tinggi (pepejal pada suhu bilik), manakala minyak mempunyai takat lebur lebih rendah (cecair pada suhu bilik).',
          },
          {
            title: 'Mekanisme Penukaran Minyak Tak Tepu $\\to$ Lemak Tepu (Penghidrogenan)',
            cause: 'Gas hidrogen ($H_2$) dilalukan ke dalam minyak tumbuhan panas pada $180\\,^\\circ\\text{C}$ dengan kehadiran serbuk nikel ($Ni$) sebagai mangkin.',
            mechanism: 'Atom hidrogen melakukan tindak balas penambahan merentasi ikatan ganda dua $C=C$ dalam rantai asid lemak tak tepu sehingga menjadi ikatan tunggal $C-C$.',
            effect: 'Jisim molekul relatif dan keteraturan susunan rantai meningkat, menaikkan takat lebur supaya minyak cecair bertukar menjadi pepejal lembut (marjerin).',
          },
        ],
        tables: [
          {
            title: 'Banding Beza Minyak vs Lemak (Jadual 5.1)',
            headers: ['Ciri', 'Minyak', 'Lemak'],
            rows: [
              ['Sumber utama', 'Tumbuhan (sawit, zaitun, jagung, soya)', 'Haiwan (mentega, lemak lembu/ayam)'],
              ['Keadaan fizik pada suhu bilik', '**Cecair**', '**Pepejal**'],
              ['Takat lebur', 'Rendah ($< 25\\,^\\circ\\text{C}$)', 'Tinggi ($> 25\\,^\\circ\\text{C}$)'],
              ['Kandungan asid lemak dominan', 'Tinggi **asid lemak tak tepu** (ada $C=C$)', 'Tinggi **asid lemak tepu** (hanya $C-C$)'],
              ['Kesan kesihatan jika berlebihan', 'Membantu mengekalkan paras kolesterol baik (HDL); elakkan *lemak trans* penghidrogenan separa', 'Meningkatkan kolesterol jahat (LDL), menyumbat arteri (aterosklerosis) & penyakit jantung'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Penghidrogenan Bermangkin dalam Pembuatan Marjerin',
            latex: '\\text{Minyak tak tepu } (-CH=CH-) + H_2 \\xrightarrow[180\\,^\\circ\\text{C}]{\\text{Mangkin Ni}} \\text{Lemak tepu } (-CH_2-CH_2-)',
            symbols: [
              { symbol: '\\text{Mangkin}', meaning: 'serbuk nikel ($Ni$)', unit: 'mangkin logam' },
              { symbol: '\\text{Suhu}', meaning: 'sekitar $180\\,^\\circ\\text{C}$', unit: 'suhu operasi' },
            ],
            appliesWhen: 'Menukar minyak sayuran (contohnya minyak kelapa sawit) kepada marjerin atau lemak lepa.',
            failsWhen: 'Perangkap SPM: Penghidrogenan TIDAK menukar minyak menjadi sabun! Penghidrogenan menambah $H_2$ pada $180\\,^\\circ\\text{C}$ dengan mangkin **Ni** untuk menghasilkan marjerin, manakala saponifikasi mendidihkan minyak dengan **NaOH/KOH** untuk menghasilkan sabun!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menaakul Eksperimen Keadaan Penghidrogenan & Ujian Air Bromin ke atas Minyak',
          problem:
            'Dua sampel $X$ (minyak jagung) dan $Y$ (marjerin) dititiskan air bromin ke dalam tabung uji masing-masing lalu digoncang. Sampel $X$ menyahwarnakan warna perang air bromin dengan cepat, manakala $Y$ hampir tidak berubah. Terangkan pemerhatian ini.',
          given: ['Minyak jagung ($X$) kaya ikatan $C=C$', 'Marjerin ($Y$) terhasil daripada penghidrogenan sehingga tepu'],
          formulaLatex: '-CH=CH- + Br_2 \\longrightarrow -CHBr-CHBr- \\quad (\\text{perang } \\to \\text{ tidak berwarna})',
          formulaWhy: 'Air bromin bertindak balas secara penambahan dengan ikatan ganda dua $C=C$.',
          substituteLatex: 'X \\text{ tinggi } C=C \\implies \\text{nyahwarna } Br_2; \\qquad Y \\text{ rendah/tiada } C=C',
          answer: '$X$ mengandungi banyak ikatan ganda dua karbon-karbon ($C=C$) daripada asid lemak tak tepu yang melakukan tindak balas penambahan dengan bromin sehingga menyahwarnakan air bromin. $Y$ telah melalui penghidrogenan menukar $C=C$ menjadi $C-C$ tepu.',
          trapAlert: 'Sentiasa nyatakan frasa penuh: **"menyahwarnakan warna perang air bromin"** (bukan sekadar "air bromin menjadi jernih").',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua jenis komponen molekul yang membentuk satu molekul trigliserida?',
            answer: 'Satu molekul gliserol dan tiga molekul asid lemak.',
          },
          {
            question: 'Nyatakan mangkin dan suhu bagi proses penghidrogenan minyak kepada marjerin.',
            answer: 'Mangkin nikel ($Ni$) pada suhu $180\\,^\\circ\\text{C}$.',
          },
          {
            question: 'Mengapakah pengambilan lemak tepu dan lemak trans yang berlebihan berbahaya kepada jantung?',
            answer: 'Kerana ia meningkatkan paras kolesterol jahat (LDL) dalam darah, menyebabkan pemendapan plak di dinding arteri (aterosklerosis) dan serangan jantung.',
          },
        ],
        fadedProblem: {
          prompt: 'Minyak sawit cair mahu diproses di kilang makanan menjadi lemak separa pepejal.',
          step1GivenAndFormula: 'Penghidrogenan menambahkan gas $H_2$ merentasi ikatan ganda dua $C=C$ dengan mangkin nikel pada $180\\,^\\circ\\text{C}$.',
          studentTask: 'Terangkan bagaimana penambahan hidrogen tersebut meningkatkan takat lebur minyak sawit.',
          answerSteps: 'Penambahan hidrogen menukarkan ikatan $C=C$ kepada ikatan tunggal $C-C$ menjadikan rantai asid lemak lebih lurus dan mudah disusun rapat, meningkatkan kekuatan daya tarikan van der Waals antara molekul serta menaikkan takat lebur.',
        },
        transferQuestion: {
          question: 'Minyak masak yang digunakan berulang kali pada suhu menggoreng sangat tinggi berisiko menghasilkan radikal bebas dan sebatian beracun. Bagaimana perubahan sifat fizikal minyak dapat dilihat apabila ia mula rosak?',
          answer: 'Minyak menjadi lebih gelap, lebih likat, mengeluarkan asap pada suhu lebih rendah dan berbau tengik (hasil pengoksidaan dan pemecahan ikatan $C=C$ asid lemak tak tepu).',
        },
      },
    },
    {
      id: 'k5-5.2',
      chapterId: 'k5-bab-5',
      code: '5.2',
      title: 'Bahan Pencuci',
      pageRef: 'm.s. 169–176',
      part1Anchor: {
        phenomenon:
          'Air sahaja menggulung di atas kotoran gris kerana minyak dan air tidak bercampur, tetapi setitik sabun atau detergen menghancurkan tompok gris menjadi emulsi terampai; namun apabila menggunakan air perigi (air liat), sabun gagal berbuih dan meninggalkan kekat kelabu!',
        chapterConnection:
          'Menghubungkan ester trigliserida dari 5.1 kepada tindak balas saponifikasi serta mekanisme dwikutub kepala hidrofilik–ekor hidrofobik.',
      },
      part2SacredDefinitions: [
        {
          title: 'Sabun, Saponifikasi dan Detergen',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sabun ialah ' },
            { text: 'garam natrium atau kalium bagi asid lemak ($RCOO^-Na^+$ / $RCOO^-K^+$) yang disediakan melalui hidrolisis beralkali minyak atau lemak yang dinamakan saponifikasi', keyword: true },
            { text: '; detergen ialah ' },
            { text: 'garam natrium bagi asid sulfonik ($ROSO_3^-Na^+$ atau $R-C_6H_4-SO_3^-Na^+$) yang dihasilkan daripada pecahan petroleum', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\text{Minyak/Lemak} + 3NaOH \\xrightarrow{\\text{panaskan}} \\text{Gliserol} + 3\\,\\text{Sabun (}RCOO^-Na^+\\text{)}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Tindakan Pencucian Sabun / Detergen (Misel Mengelilingi Gris)',
            cause: 'Anion sabun/detergen terdiri daripada dua bahagian berbeza: ekor hidrokarbon berantai panjang yang **hidrofobik** (larut dalam gris/minyak) dan kepala ionik ($-COO^-$ atau $-SO_3^-$) yang **hidrofilik** (larut dalam air).',
            mechanism: 'Sabun merendahkan tegangan permukaan air agar air membasahi kain. Ekor hidrofobik melarut ke dalam titisan gris manakala kepala hidrofilik kekal terkeluar menghadap air; apabila digosok/dikocak, tarikan air mengangkat gris daripada permukaan kain dan kepala bercas negatif membentuk misel yang saling menolak.',
            effect: 'Titisan gris terampai sebagai emulsi kekal di dalam air (tidak melekat semula pada kain) lalu dibilas bersih bersama air.',
          },
          {
            title: 'Mengapa Sabun Membentuk Kekat dalam Air Liat tetapi Detergen Kekal Berkesan',
            cause: 'Air liat mengandungi kepekatan tinggi ion kalsium ($Ca^{2+}$) dan ion magnesium ($Mg^{2+}$), manakala air berasid mempunyai ion $H^+$.',
            mechanism: 'Anion sabun ($RCOO^-$) bertindak balas dengan $Ca^{2+}$ dan $Mg^{2+}$ membentuk garam kalsium/magnesium asid lemak yang **tidak larut dalam air** (mendakan kekat), membazirkan sabun. Sebaliknya, garam kalsium dan magnesium bagi detergen ($ROSO_3^-$) **larut dalam air**.',
            effect: 'Detergen tidak membentuk kekat dan kekal aktif mencuci dalam air liat, air sejuk, dan air berasid.',
          },
        ],
        tables: [
          {
            title: '8 Bahan Tambah Detergen & Fungsinya (Jadual 5.3)',
            headers: ['Bahan Tambah Detergen', 'Contoh Bahan', 'Fungsi Khusus'],
            rows: [
              ['Pelembut air & pembina', 'Natrium tripolifosfat ($Na_5P_3O_{10}$)', 'Menyingkirkan ion $Ca^{2+}$/$Mg^{2+}$ air liat & meningkatkan pH alkali'],
              ['Enzim biologi', 'Amilase, protease, selulase, lipase', 'Menguraikan kotoran protein (darah), kanji dan lemak pada suhu rendah'],
              ['Agen pemutih', 'Natrium perborat, natrium hipoklorit', 'Mengoksidakan kotoran warna menjadi sebatian tidak berwarna'],
              ['Agen pendafluor / pencerah optik', 'Sebatian stilbena pendafluor', 'Menyerap sinar UV dan memancarkan cahaya biru supaya kain putih tampak lebih berseri'],
              ['Agen pengampaian', 'Karboksimetilselulosa (CMC)', 'Menghalang kotoran yang telah tertanggal daripada melekat semula ke kain'],
              ['Pengisi', 'Natrium sulfat kontang, natrium silikat', 'Menambah isi padu serbuk detergen supaya mudah disukat & sentiasa kering'],
              ['Pengawal buih', 'Alkanolamida / silikon', 'Mengawal aras buih khususnya untuk mesin basuh muatan hadapan'],
              ['Pewangi & pewarna', 'Ester minyak pati sintetik', 'Memberi bau segar pada pakaian dan tarikan visual'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembentukan Kekat (Air Liat) vs Penyediaan Detergen (Pensulfonan & Peneutralan)',
            latex: '2RCOO^-(ak) + Ca^{2+}(ak) \\longrightarrow (RCOO)_2Ca(p)\\text{ [kekat tak larut]}',
            symbols: [
              { symbol: 'RCOO^-', meaning: 'anion sabun (karboksilat rantai panjang)', unit: 'anion aktif' },
              { symbol: 'NaCl', meaning: 'natrium klorida ditambah selepas saponifikasi untuk **memendakkan sabun** (mengurangkan keterlarutan sabun)', unit: 'garam' },
            ],
            appliesWhen: 'Menulis persamaan pembentukan kekat, penyediaan sabun di makmal (Aktiviti 5A), dan pembandingan keberkesanan sabun vs detergen.',
            failsWhen: 'Perangkap besar SPM: (1) Mengapakah **serbuk natrium klorida ($NaCl$)** ditambah pada akhir saponifikasi? Jawapan wajib: **"Untuk mengurangkan keterlarutan sabun di dalam air supaya sabun termendak sebagai pepejal putih!"** (2) Dua langkah penyediaan detergen dari alkohol rantai panjang: Langkah 1 **Pensulfonan** (dengan $H_2SO_4$ pekat) $\\to$ Langkah 2 **Peneutralan** (dengan $NaOH$).',
          },
        ],
        diagrams: [
          {
            kind: 'chem-soap-micelle',
            title: 'Struktur Dwikutub Sabun & Pembentukan Misel Menanggalkan Kotoran Gris',
            whatItShows: 'Ekor hidrokarbon hidrofobik menyusup ke dalam tompok gris manakala kepala ionik hidrofilik menghadap air, mengangkat dan mengemulsikan gris.',
            axisOrRule: 'Bahagian hidrofobik = tidak polar (larut minyak); Bahagian hidrofilik = ionik bercas negatif (larut air).',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 5A & Eksperimen 5A',
            title: 'Penyediaan Sabun (Saponifikasi) & Membandingkan Pencucian Sabun vs Detergen dalam Air Liat',
            aim: 'Menyediakan sabun daripada minyak sawit serta membandingkan tindakan pencucian sabun dan detergen dalam air lembut dan air liat ($MgSO_4$ / $CaCl_2$).',
            inference: 'Tindak balas antara asid lemak minyak dengan alkali menghasilkan sabun; ion $Ca^{2+}/Mg^{2+}$ mengurangkan keberkesanan sabun.',
            hypothesis: 'Detergen mencuci kotoran gris pada kain lebih berkesan daripada sabun di dalam air liat.',
            variables: {
              manipulated: 'Jenis bahan pencuci (sabun vs detergen) dalam air liat ($MgSO_4(ak)$)',
              responding: 'Kehilangan kotoran minyak pada kain dan pembentukan kekat',
              fixed: 'Isi padu & kepekatan larutan bahan pencuci, isi padu larutan $MgSO_4$, saiz kain berminyak',
            },
            setupLogic: 'Campuran $5\\text{ cm}^3$ minyak sawit + $50\\text{ cm}^3\\ NaOH\\ 5.0\\text{ mol dm}^{-3}$ dididihkan perlahan 10 minit sambil dikacau; tambah $50\\text{ cm}^3$ air + $3\\text{ spatula } NaCl$, didihkan 5 minit lagi lalu sejukkan dan turas mendakan sabun.',
            expectedResult: 'Dalam air liat ($Mg^{2+}/Ca^{2+}$), sabun membentuk kekat putih dan kesan gris kekal; detergen tiada kekat dan kesan gris hilang bersih.',
            conclusion: 'Detergen lebih berkesan daripada sabun dalam air liat kerana garam magnesium/kalsiumnya larut dalam air dan tidak membentuk kekat.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Menaakul Kaedah Penyediaan Sabun Makmal & Masalah Alam Sekitar Detergen',
          problem:
            'Dalam penyediaan sabun daripada minyak kelapa sawit dan $KOH$ pekat, jelaskan mengapa (a) campuran perlu dididihkan agak lama dan (b) natrium klorida pepejal ditambah sebelum penurasan. Nyatakan juga satu kelebihan sabun berbanding detergen kepada alam sekitar.',
          given: ['Tindak balas saponifikasi berlaku perlahan tanpa haba', 'Sabun yang terbentuk sebahagiannya terlarut dalam campuran air-gliserol'],
          formulaLatex: '\\text{Minyak} + 3KOH \\xrightarrow{\\Delta} \\text{Gliserol} + 3RCOO^-K^+ \\xrightarrow{+NaCl} \\text{Mendakan sabun}',
          formulaWhy: 'Pemanasan melengkapkan hidrolisis ester dan $NaCl$ memisahkan sabun secara penggaraman keluar (*salting out*).',
          substituteLatex: '\\text{Sabun terbiodegradasi} \\quad\\text{vs}\\quad \\text{Detergen berantai bercabang sukar terurai}',
          answer: '(a) Membekalkan tenaga haba supaya hidrolisis lengkap ester oleh alkali (saponifikasi) berlaku dengan cepat; (b) Mengurangkan keterlarutan sabun supaya sabun memendak keluar dan mudah diasingkan melalui penurasan. Kelebihan sabun: 100% terbiodegradasi oleh bakteria dan tidak menyebabkan pencemaran buih berpanjangan atau eutrofikasi fosfat.',
          trapAlert: 'Dalam penyediaan sabun, $NaOH$ menghasilkan **sabun buku keras**, manakala $KOH$ menghasilkan **sabun cecair/lembut**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah nama tindak balas kimia untuk menghasilkan sabun daripada minyak tumbuhan dan alkali?',
            answer: 'Saponifikasi (hidrolisis beralkali ester).',
          },
          {
            question: 'Bahagian manakah pada ion sabun yang larut dalam gris, dan bahagian manakah yang larut dalam air?',
            answer: 'Ekor hidrokarbon hidrofobik larut dalam gris; kepala ionik ($-COO^-$) hidrofilik larut dalam air.',
          },
          {
            question: 'Mengapakah detergen berantai lurus moden lebih baik daripada detergen berantai bercabang lama?',
            answer: 'Kerana detergen berantai lurus mudah diuraikan oleh bakteria (terbiodegradasi), mengurangkan masalah buih tebal di sungai.',
          },
        ],
        fadedProblem: {
          prompt: 'Dua helai kain dengan tompok minyak masak sama dicuci masing-masing dengan larutan sabun dan larutan detergen di dalam air yang mengandungi ion $Ca^{2+}$.',
          step1GivenAndFormula: 'Ion $Ca^{2+}$ bertindak balas dengan anion sabun ($RCOO^-$) membentuk $(RCOO)_2Ca$ tak larut, manakala garam kalsium detergen larut.',
          studentTask: 'Nyatakan pemerhatian bagi kedua-dua bikar selepas dicuci dan jelaskan perbezaan tersebut.',
          answerSteps: 'Bikar sabun: kekat putih terbentuk, sedikit buih, tompok minyak masih tertinggal. Bikar detergen: tiada kekat, banyak buih, tompok minyak hilang bersih kerana ion $ROSO_3^-$ tidak termendak oleh $Ca^{2+}$.',
        },
        transferQuestion: {
          question: 'Sesetengah serbuk pencuci mengandungi bahan pembina natrium tripolifosfat ($Na_5P_3O_{10}$). Mengapakah penggunaannya kini dikurangkan di banyak negara?',
          answer: 'Air buangan yang kaya ion fosfat mengalir ke sungai dan tasik lalu merangsang pertumbuhan alga secara mendadak (**eutrofikasi**). Apabila alga mati dan mereput oleh bakteria aerobik, kandungan oksigen terlarut ($BOD$ tinggi) merosot lalu membunuh hidupan akuatik.',
        },
      },
    },
    {
      id: 'k5-5.3',
      chapterId: 'k5-bab-5',
      code: '5.3',
      title: 'Bahan Tambah Makanan',
      pageRef: 'm.s. 177–180',
      part1Anchor: {
        phenomenon:
          'Aiskrim kekal lembut berkrim tanpa hablur ais kasar, sos cili tahan berbulan-bulan di atas rak kedai, dan mentega kacang tidak terpisah antara minyak dan pejalnya—semuanya dijayakan oleh tujuh kelas bahan tambah makanan yang dilabel rapi pada bungkusan!',
        chapterConnection:
          'Menguasai pengelasan 7 fungsi bahan tambah makanan mengikut Akta Makanan 1983 beserta contoh spesifik, kelebihan dan kesan sampingan kesihatan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrifan Bahan Tambah Makanan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Bahan tambah makanan ialah ' },
            { text: 'bahan semula jadi atau sintetik yang ditambah dalam kuantiti kecil kepada makanan untuk mengelakkannya daripada rosak, memperbaiki rupa, rasa, tekstur atau nilai khasiatnya', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Pengawet, Pengantioksida dan Pengemulsi Mengekalkan Kualiti Makanan',
            cause: 'Makanan rosak disebabkan oleh dua punca berbeza: pertumbuhan mikroorganisma (bakteria/kulat) serta pengoksidaan lemak/vitamin oleh oksigen udara; makanan bercampur minyak-air pula mudah terpisah lapisan.',
            mechanism: 'Pengawet menyekat pertumbuhan bakteria melalui dehidrasi osmosis (gula/garam) atau merendahkan pH (cuka/asid benzoik); pengantioksida mengoksidakan dirinya terlebih dahulu sebelum lemak/makanan teroksida; pengemulsi bertindak seperti sabun makanan yang menggabungkan titisan minyak dan air menjadi emulsi stabil.',
            effect: 'Jangka hayat makanan dipanjangkan, rasa tidak tengik, dan tekstur kekal sekata serta menarik.',
          },
        ],
        tables: [
          {
            title: 'Tujuh Jenis Bahan Tambah Makanan, Contoh & Fungsi (Jadual 5.4)',
            headers: ['Jenis Bahan Tambah', 'Contoh Semula Jadi & Sintetik', 'Fungsi & Aplikasi Makanan'],
            rows: [
              ['1. **Pengawet**', 'Garam, gula, cuka ($CH_3COOH$), **natrium nitrit** ($NaNO_2$), **natrium benzoat**, sulfur dioksida', 'Melambatkan/mencegah pertumbuhan bakteria & kulat (daging burger, jem, sos cili, buah kering)'],
              ['2. **Pengantioksida**', '**Asid askorbik (Vitamin C)**, asid sitrik, BHA / BHT, tokoferol (Vitamin E)', 'Mengelakkan makanan berlemak/jus teroksida oleh udara menjadi tengik atau perang'],
              ['3. **Perisa**', '**Mononatrium glutamat (MSG)**, gula, vanilin, **aspartam** (pemanis tanpa kalori), **etil etanoat** (ester)', 'Menambah atau menggantikan rasa asli yang hilang semasa pemprosesan'],
              ['4. **Penstabil**', '**Pektin**, **gam akasia**, gelatin, agar-agar', 'Menghalang pemendapan atau pemisahan bahan dalam suspensi dan menambah kelikatan (sos, jus, aiskrim)'],
              ['5. **Pengemulsi**', '**Lesitin** (daripada kuning telur/soya), monogliserida, asid lemak', 'Mengemulsikan dua cecair tidak bercampur seperti minyak dan air (mayonis, marjerin, coklat)'],
              ['6. **Pemekat**', '**Kanji** (tepung jagung), **xantan gam**, gelatin, pektin', 'Memekatkan cecair sup, sos dan gravies supaya konsistensi seragam'],
              ['7. **Pewarna**', 'Daun pandan, kunyit, karamel; **tartrazina** (sebatian azo kuning), **brilliant blue** (sebatian trifenil)', 'Menambah atau menyeragamkan warna makanan supaya lebih menyelerakan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Perbezaan Fungsi Pengawet vs Pengantioksida vs Penstabil/Pengemulsi',
            latex: '\\text{Mikroorganisma (kulat/bakteria)} \\to \\text{Pengawet} \\quad|\\quad \\text{Oksigen (tengik)} \\to \\text{Pengantioksida}',
            symbols: [
              { symbol: '\\text{Kod E (E-numbers)}', meaning: 'kod piawai keselamatan bahan tambah makanan yang diluluskan (cth: E211 natrium benzoat, E300 asid askorbik)', unit: 'label makanan' },
            ],
            appliesWhen: 'Menjawab soalan pemilihan bahan tambah dalam senario pembungkusan makanan SPM.',
            failsWhen: 'Perangkap kerap SPM: Jangan keliru antara **Penstabil** (contoh: pektin, gam akasia dalam sos/aiskrim) dengan **Pengemulsi** (contoh: lesitin dalam mayonis untuk mencampurkan minyak + cuka/air)! Jika dua fasa ialah minyak + air, jawapan paling tepat ialah **pengemulsi**.',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menganalisis Label Ramuan Makanan Proses (Sos Cili & Mayonis)',
          problem:
            'Label sebotol mayonis mencatatkan ramuan: *minyak sayuran, air, cuka, kuning telur (lesitin), natrium benzoat, asid askorbik, xantan gam*. Kenal pasti bahan bagi fungsi: (a) mengemulsikan minyak dan air, (b) mencegah pembiakan kulat, dan (c) mencegah pengoksidaan minyak.',
          given: ['Minyak + air perlukan pengemulsi', 'Pencegahan kulat/bakteria = pengawet', 'Pencegahan pengoksidaan = pengantioksida'],
          formulaLatex: '\\text{Lesitin} \\to \\text{Pengemulsi}; \\quad \\text{Natrium benzoat} \\to \\text{Pengawet}; \\quad \\text{Asid askorbik} \\to \\text{Pengantioksida}',
          formulaWhy: 'Padankan setiap molekul dengan mekanisme perlindungannya.',
          substituteLatex: '\\text{Xantan gam} \\to \\text{Pemekat/Penstabil}',
          answer: '(a) **Lesitin** (pengemulsi); (b) **Natrium benzoat** (pengawet); (c) **Asid askorbik** (pengantioksida). (Manakala cuka juga berfungsi sebagai pengawet & perisa masam, dan xantan gam sebagai pemekat).',
          trapAlert: 'Ketahui juga kesan sampingan pengambilan berlebihan bahan tambah sintetik: **MSG** boleh menyebabkan sakit kepala/loya, **natrium nitrit** berkait dengan karsinogen nitrosamina, dan sesetengah **pewarna azo (tartrazina)** mencetuskan hiperaktiviti/asma pada kanak-kanak.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah peranan lesitin dalam pembuatan coklat dan mayonis?',
            answer: 'Sebagai pengemulsi untuk mencampurkan komponen lemak/minyak dengan komponen air secara stabil tanpa terpisah.',
          },
          {
            question: 'Mengapakah asid askorbik (Vitamin C) disembur pada hirisan epal segar atau ditambah ke dalam jus tin?',
            answer: 'Sebagai pengantioksida untuk menghalang pengoksidaan bahan makanan oleh oksigen udara (mengelakkan keperangan).',
          },
          {
            question: 'Namakan dua contoh bahan pengawet tradisional yang digunakan oleh masyarakat dahulu.',
            answer: 'Garam (ikan masin), gula (jem buah), atau cuka (jeruk).',
          },
        ],
        fadedProblem: {
          prompt: 'Sebuah syarikat ingin menghasilkan jem strawberi yang pekat, tahan 12 bulan tanpa berkulat, dan berwarna merah menarik.',
          step1GivenAndFormula: 'Memerlukan 3 kategori: pemekat/penstabil buah (pektin), pengawet (gula pekat/natrium benzoat), dan pewarna (atau perisa).',
          studentTask: 'Cadangkan satu bahan spesifik bagi setiap peranan dan terangkan fungsinya.',
          answerSteps: '(1) **Pektin** sebagai penstabil/pemekat bagi membentuk tekstur gel jem yang sekata; (2) **Gula pekat / natrium benzoat** sebagai pengawet untuk menyekat pertumbuhan kulat dan bakteria; (3) **Pewarna makanan** untuk mengembalikan warna merah menarik selepas dimasak.',
        },
        transferQuestion: {
          question: 'Mengapakah individu penghidap fenilketonuria (PKU) perlu mengelakkan minuman bergas "bebas gula" yang mengandungi aspartam?',
          answer: 'Aspartam ialah pemanis sintetik yang dimetabolismekan dalam badan menghasilkan asid amino fenilalanina; pesakit PKU tidak mempunyai enzim untuk memecahkan fenilalanina sehingga ia terkumpul ke paras toksik yang boleh merosakkan otak.',
        },
      },
    },
    {
      id: 'k5-5.4',
      chapterId: 'k5-bab-5',
      code: '5.4',
      title: 'Ubat-ubatan dan Bahan Kosmetik',
      pageRef: 'm.s. 181–186',
      part1Anchor: {
        phenomenon:
          'Daripada rebusan halia dan gel lidah buaya hingga suntikan penisilin, tablet parasetamol dan krim pemutih kulit—namun ada krim pemutih haram di pasaran yang mengandungi merkuri dan hidrokuinon sehingga merosakkan buah pinggang pengguna!',
        chapterConnection:
          'Membandingkan ubat tradisional vs 5 kelas ubat moden serta etika penggunaannya, diikuti pengelasan kosmetik dan 4 bahan kimia terlarang KKM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Ubat Tradisional vs Ubat Moden & Kosmetik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Ubat ialah ' },
            { text: 'bahan kimia yang digunakan untuk mencegah, melegakan atau menyembuhkan penyakit', keyword: true },
            { text: '; kosmetik ialah ' },
            { text: 'bahan atau produk yang digunakan secara luaran pada tubuh manusia untuk membersihkan, melindungi atau menyerlahkan penampilan diri', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bahaya Penyalahgunaan Antibiotik (Mengapa Mesti Menghabiskan Dos Penuh)',
            cause: 'Pesakit berhenti memakan antibiotik (seperti penisilin) sebaik sahaja rasa sihat selepas 2–3 hari, sebelum tempoh preskripsi 5–7 hari tamat.',
            mechanism: 'Sebahagian kecil bakteria yang paling kuat dan separa tahan masih hidup lalu terus membiak sambil mewariskan mutasi rintangan antibiotik kepada generasi bakteria baharu.',
            effect: 'Terbentuknya strain **bakteria rintang antibiotik ("superbug")** sehingga antibiotik yang sama tidak lagi berkesan pada jangkitan akan datang.',
          },
          {
            title: 'Mekanisme Bahaya Bahan Kimia Terlarang dalam Kosmetik Tidak Berdaftar',
            cause: 'Pengilang haram mencampurkan **merkuri**, **hidrokuinon**, **betamethasone valerate** atau **tretinoin** untuk memberi kesan pemutihan serta-merta.',
            mechanism: 'Merkuri meresap melalui kulit dan terkumpul di dalam buah pinggang dan sistem saraf; hidrokuinon menghakis lapisan pigmen melanin pelindung sinar UV; kortikosteroid steroid (*betamethasone*) menipiskan epidermis kulit.',
            effect: 'Menyebabkan keracunan/kegagalan buah pinggang, ruam kekal, hiperpigmentasi teruk, risiko kanser kulit serta kecacatan janin.',
          },
        ],
        tables: [
          {
            title: 'Ubat Tradisional, Lima Kelas Ubat Moden & Bahan Kosmetik Terlarang (Jadual 5.5–5.7)',
            headers: ['Kategori', 'Contoh Bahan / Produk', 'Fungsi & Amaran Penting'],
            rows: [
              ['**Ubat Tradisional**', 'Halia (angin/loya), lidah buaya/aloe vera (luka melecur), ginseng (tenaga), asam jawa (batuk/sakit tekak)', 'Diperoleh terus drpd tumbuhan/haiwan tanpa proses sintesis kimia kompleks'],
              ['**Analgesik** (Moden)', '**Aspirin** (asid asetilsalisilik), **Parasetamol**, **Kodeina**', 'Melegakan kesakitan; **elak beri aspirin kepada kanak-kanak** (risiko Sindrom Reye & ulser perut kerana berasid)'],
              ['**Antimikrob** (Moden)', 'Antibiotik (**penisilin, streptomisin**); Antiseptik (iodin/hidrogen peroksida pd luka luar); Disinfektan (alkohol/klorin pd lantai)', 'Membunuh atau merencat pertumbuhan bakteria/mikroorganisma; **habiskan dos antibiotik**'],
              ['**Ubat Psikotik** (Moden)', '**Haloperidol, klorpromazina, klozapina** (antipsikotik) & antidepresan', 'Merawat gangguan mental (skizofrenia/halusinasi/kemurungan); hanya melalui preskripsi ketat doktor'],
              ['**Antialergi** (Moden)', '**Antihistamin** (cth: loratadina, cetirizina)', 'Melegakan simptom alahan (gatal, bersin, bengkak) namun sesetengahnya menyebabkan mengantuk'],
              ['**Kortikosteroid** (Moden)', '**Betametason, prednisolon**', 'Mengurangkan keradangan teruk, asma & ekzema; penyalahgunaan menipiskan kulit & melemahkan imun'],
              ['**Kosmetik** (3 jenis)', 'Rias (gincu/bedak), Perawatan (krim pelembap/pencuci muka), Pewangi (minyak wangi)', 'Mengandungi 7 bahan asas: air, pengemulsi, pemekat, pewarna, pelembap, pengawet, pewangi'],
              ['**4 Bahan Terlarang Kosmetik**', '**Merkuri**, **Hidrokuinon**, **Betamethasone valerate**, **Tretinoin**', 'Merkuri (rosak buah pinggang & saraf); Hidrokuinon (hiperpigmentasi & kanser kulit); Betamethasone (nipis kulit); Tretinoin (menggelupas teruk & cacat janin)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Perbandingan Analgesik Utama & Antimikrob Luaran vs Dalaman',
            latex: '\\text{Antibiotik (telan/suntik: bakteria dlm badan)} \\;\\neq\\; \\text{Antiseptik (kulit/luka)} \\;\\neq\\; \\text{Disinfektan (objek bukan hidup)}',
            symbols: [
              { symbol: '\\text{Aspirin}', meaning: 'bersifat asid, boleh merengsa dinding perut; tidak sesuai untuk pesakit ulser & kanak-kanak', unit: 'analgesik berasid' },
              { symbol: '\\text{Parasetamol}', meaning: 'lebih lembut pada perut, sesuai untuk demam & sakit ringan kanak-kanak/dewasa mengikut dos', unit: 'analgesik neutral' },
            ],
            appliesWhen: 'Memilih ubat moden mengikut situasi pesakit dalam soalan Kertas 1 dan Kertas 2 SPM.',
            failsWhen: 'Perangkap besar SPM: Ramai pelajar menjawab "parasetamol membunuh bakteria demam" atau "disinfektan disapu pada luka kulit"—salah! Parasetamol hanya **melegakan sakit/demam** (analgesik), manakala **antiseptik** sahaja untuk luka kulit dan **disinfektan** hanya untuk permukaan lantai/alat (merosakkan sel hidup jika disapu pada luka)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Pemilihan Ubat untuk Kanak-Kanak Demam & Kesan Bahan Kosmetik Haram',
          problem:
            'Seorang kanak-kanak berumur 8 tahun menghidap demam panas dan sakit tekak akibat jangkitan bakteria. Doktor memberi parasetamol dan antibiotik penisilin, tetapi melarang aspirin. (a) Mengapakah aspirin tidak diberikan? (b) Mengapakah ibu bapa mesti memastikan penisilin dihabiskan sehingga habis papan walaupun demam sudah kebah?',
          given: ['Pesakit ialah kanak-kanak (berisiko ulser perut & Sindrom Reye terhadap aspirin)', 'Jangkitan bakteria memerlukan penghapusan menyeluruh oleh penisilin'],
          formulaLatex: '\\text{Parasetamol (melegakan sakit/demam)} + \\text{Penisilin (membunuh bakteria hingga tuntas)}',
          formulaWhy: 'Analgesik merawat simptom kesakitan manakala antibiotik membasmi punca jangkitan bakteria.',
          substituteLatex: '\\text{Berhenti awal} \\implies \\text{bakteria bermutasi menjadi rintang antibiotik}',
          answer: '(a) Aspirin bersifat asid yang boleh menyebabkan pendarahan/ulser perut serta berisiko mencetuskan Sindrom Reye yang berbahaya kepada kanak-kanak; parasetamol lebih selamat. (b) Untuk memastikan kesemua bakteria patogen mati sepenuhnya dan mencegah pembentukan bakteria rintang antibiotik.',
          trapAlert: 'Dalam kosmetik, pastikan anda dapat menamakan sekurang-kurangnya **2 daripada 4 bahan terlarang** (**merkuri, hidrokuinon, betamethasone valerate, tretinoin**) serta kesan khusus setiap satunya!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah perbezaan penggunaan antara antiseptik dan disinfektan?',
            answer: 'Antiseptik disapu pada tisu hidup/luka kulit untuk membunuh mikroorganisma, manakala disinfektan digunakan pada benda bukan hidup seperti lantai dan tandas.',
          },
          {
            question: 'Namakan dua bahan terlarang yang sering ditemui dalam krim pemutih kulit tidak berdaftar.',
            answer: 'Merkuri dan hidrokuinon (atau betamethasone valerate / tretinoin).',
          },
          {
            question: 'Apakah kegunaan kodeina dan haloperidol?',
            answer: 'Kodeina ialah analgesik kuat (ubat tahan sakit & ubat batuk terkawal); haloperidol ialah ubat psikotik untuk merawat pesakit gangguan mental.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebuah krim pencerah wajah viral di media sosial menjanjikan kulit putih cerah dalam masa 3 hari, namun pengguna mengadu kulit menjadi sangat nipis, kemerahan apabila terkena matahari dan mengalami kerosakan buah pinggang.',
          step1GivenAndFormula: 'Kerosakan buah pinggang dikaitkan dengan penyerapan logam berat toksik; penipisan kulit disebabkan steroid atau bahan pengelupas.',
          studentTask: 'Kenal pasti dua bahan kimia terlarang yang mungkin terdapat dalam krim tersebut beserta kesannya.',
          answerSteps: '**Merkuri** (menyebabkan kerosakan buah pinggang dan sistem saraf) serta **hidrokuinon / betamethasone valerate** (menipiskan kulit, menyebabkan kemerahan dan meningkatkan risiko kanser kulit).',
        },
        transferQuestion: {
          question: 'Mengapakah kosmetik buatan sendiri (*homemade*) yang tidak mengandungi bahan pengawet sering rosak dengan cepat apabila disimpan di bilik mandi yang lembap?',
          answer: 'Kosmetik mengandungi air dan bahan organik yang menyediakan medium lembap dan berkhasiat bagi pembiakan bakteria dan kulat tanpa kehadiran bahan pengawet (seperti paraben/fenoksietanol yang diluluskan pada dos selamat).',
        },
      },
    },
    {
      id: 'k5-5.5',
      chapterId: 'k5-bab-5',
      code: '5.5',
      title: 'Aplikasi Nanoteknologi dalam Industri',
      pageRef: 'm.s. 187–190',
      part1Anchor: {
        phenomenon:
          'Sehelai helaian karbon setebal SATU atom bernama **grafen** adalah 200 kali lebih kuat daripada keluli, lebih ringan daripada kertas, lut sinar hampir 98%, dan menghantar elektrik lebih pantas daripada kuprum—mengubah masa depan skrin telefon boleh lipat, bateri cas pantas dan penapisan air laut!',
        chapterConnection:
          'Memahami skala nanometer ($10^{-9}\\text{ m}$), sebab zarah nano berkelakuan luar biasa berbanding bahan pukal, dan sifat serta kegunaan grafen.',
      },
      part2SacredDefinitions: [
        {
          title: 'Nanosains, Nanoteknologi dan Grafen',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nanoteknologi ialah ' },
            { text: 'pembangunan bahan atau peranti dengan memanfaatkan ciri-ciri zarah bersaiz nano antara $1\\text{ nm}$ hingga $100\\text{ nm}$', keyword: true },
            { text: '; grafen ialah ' },
            { text: 'alotrop karbon dua dimensi yang terdiri daripada satu lapisan tunggal atom karbon yang terikat secara kovalen membentuk jaringan heksagon sarang lebah', keyword: true },
            { text: '.' },
          ],
          equationLatex: '1\\text{ nanometer (nm)} = 1 \\times 10^{-9}\\text{ m}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Zarah Nano Menunjukkan Sifat Fizik & Kimia Lebih Unggul Daripada Bahan Pukal',
            cause: 'Apabila saiz zarah bahan dikecilkan ke julat $1\\text{–}100\\text{ nm}$, nisbah jumlah luas permukaan kepada isi padu meningkat secara mendadak.',
            mechanism: 'Peratusan atom yang terdedah di permukaan jauh lebih tinggi untuk berinteraksi dengan cahaya, haba, mangkin atau bakteria sekeliling berbanding atom yang terperangkap di dalam bongkah besar.',
            effect: 'Bahan nano mempunyai kadar tindak balas pemangkinan lebih tinggi, pengaliran elektrik/haba lebih cekap, dan kesan optik unik (cth: $TiO_2$ & $ZnO$ nano lut sinar pada krim pelindung UV).',
          },
          {
            title: 'Hubungan Ikatan Hibrid Karbon dalam Grafen dengan Kekuatan dan Kekonduksiannya',
            cause: 'Dalam kepingan grafen ($0.1\\text{ nm}$), setiap atom karbon terikat secara kovalen kuat kepada tiga atom karbon lain membentuk gelang heksagon rata, meninggalkan satu elektron valens tak setempat per atom.',
            mechanism: 'Ikatan kovalen $C-C$ satah amat kukuh menghalang koyakan manakala lautan elektron terdelokalisasi bebas bergerak merentasi seluruh satah dengan rintangan minimum.',
            effect: 'Grafen menjadi bahan paling kuat (200× keluli), fleksibel, lut sinar kerana tebal cuma 1 atom, serta konduktor elektrik dan haba terbaik.',
          },
        ],
        tables: [
          {
            title: 'Sifat Fizik & Kimia Grafen serta 6 Bidang Kegunaan Industri (Jadual 5.8)',
            headers: ['Kategori', 'Ciri Khusus / Aplikasi Grafen', 'Kelebihan Praktikal'],
            rows: [
              ['**Sifat Fizik Grafen**', 'Nipis ($0.1\\text{ nm}$), keras & kuat (200× keluli), lut sinar, fleksibel, tidak telap molekul gas/air', 'Membolehkan peranti ultra-nipis dan tahan hentaman'],
              ['**Sifat Kimia Grafen**', 'Konduktor elektrik & haba amat baik, kereaktifan kimia rendah (stabil)', 'Sesuai sebagai elektrod bateri dan perintang pengoksidaan'],
              ['1. **Elektronik & Fotonik**', 'Transistor berkelajuan tinggi, skrin sentuh lentur boleh lipat', 'Menggantikan silikon dan oksida indium timah yang rapuh'],
              ['2. **Polimer & Komposit**', 'Menambah grafen sedikit ke dalam plastik, getah tayar & gentian karbon', 'Bahan lebih ringan, lebih kuat dan konduktif'],
              ['3. **Tenaga & Bateri**', 'Anod bateri ion-litium & superkapasitor', 'Masa pengecasan jauh lebih pantas & kapasiti storan tinggi'],
              ['4. **Membran Penapisan**', 'Membran grafen oksida untuk penyahgaraman air laut', 'Menapis ion garam $Na^+/Cl^-$ sambil membenarkan molekul $H_2O$ meresap laju'],
              ['5. **Sensor & Bioperubatan**', 'Pengesan gas toksik, biosensor DNA, penghantaran ubat bersasar', 'Kepekaan mengesan hingga tahap molekul tunggal'],
              ['6. **Teknologi Harian Lain**', 'Krim pelindung matahari ($ZnO$/$TiO_2$ nano), stokin antibakteria (zarah perak Ag nano)', 'Lut sinar pada kulit (tiada kesan putih); Ag nano membunuh bakteria punca bau'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Skala Nano & Peningkatan Nisbah Luas Permukaan kepada Isi Padu',
            latex: '1\\text{ nm} = 10^{-9}\\text{ m} = 10^{-7}\\text{ cm} \\qquad;\\qquad \\frac{\\text{Luas Permukaan}}{\\text{Isi Padu}} \\propto \\frac{1}{\\text{jejari zarah}}',
            symbols: [
              { symbol: '1\\text{–}100\\text{ nm}', meaning: 'julat rasmi saiz zarah nano (lebih kurang 10 kali ganda saiz atom hingga virus kecil)', unit: 'nanometer' },
            ],
            appliesWhen: 'Menilai mengapa zarah bersaiz nano berfungsi sebagai mangkin, penapis atau agen antibakteria jauh lebih cekap.',
            failsWhen: 'Perangkap SPM: Grafen ialah satu lapisan tunggal (2D) heksagon atom karbon, manakala **grafit** ialah timbunan ribuan lapisan grafen yang dipegang oleh daya van der Waals lemah dan **tiub nano karbon** ialah helaian grafen yang digulung menjadi silinder!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Membandingkan Krim Pelindung Matahari Nano vs Biasa & Kegunaan Grafen',
          problem:
            'Krim pelindung suria tradisional yang mengandungi zink oksida ($ZnO$) biasa meninggalkan lapisan kapur putih tebal di wajah, manakala krim moden menggunakan $ZnO$ bersaiz nano ($30\\text{ nm}$) kelihatan lut sinar dan masih menyekat sinar UV dengan berkesan. Terangkan mengapa.',
          given: ['Saiz zarah $ZnO$ nano ($30\\text{ nm}$) lebih kecil daripada panjang gelombang cahaya nampak ($400\\text{–}700\\text{ nm}$)', 'Zarah lebih kecil mempunyai jumlah luas permukaan per jisim lebih besar'],
          formulaLatex: '\\text{Saiz zarah } (30\\text{ nm}) \\ll \\lambda_{\\text{cahaya nampak}} (400\\text{–}700\\text{ nm})',
          formulaWhy: 'Zarah yang jauh lebih kecil daripada panjang gelombang cahaya nampak tidak menyerakkan cahaya putih secara ketara.',
          substituteLatex: '\\text{Luas permukaan besar} \\implies \\text{serapan sinaran UV lebih sekata \\& tinggi}',
          answer: 'Zarah $ZnO$ nano terlalu kecil untuk menyerakkan gelombang cahaya nampak sehingga kelihatan lut sinar pada kulit, namun nisbah luas permukaan kepada isi padunya yang amat tinggi masih membolehkan penyerapan dan pantulan sinar UV ($100\\text{–}400\\text{ nm}$) yang sangat cekap.',
          trapAlert: 'Dalam soalan grafen, sentiasa kaitkan **satu lapisan atom karbon berbentuk heksagon** dengan ciri konduktor, kekuatan tinggi dan sifat lut sinarnya!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berapakah julat saiz zarah yang diklasifikasikan sebagai zarah nano?',
            answer: '$1\\text{ nm}$ hingga $100\\text{ nm}$ ($1\\text{ nm} = 10^{-9}\\text{ m}$).',
          },
          {
            question: 'Mengapakah grafen boleh mengalirkan arus elektrik lebih baik daripada kebanyakan logam?',
            answer: 'Kerana setiap atom karbon dalam rangkaian heksagon 2D hanya membentuk 3 ikatan kovalen, meninggalkan elektron tak setempat yang bebas bergerak merentasi satah grafen.',
          },
          {
            question: 'Berikan dua contoh produk harian di Malaysia yang menggunakan nanoteknologi selain bateri.',
            answer: 'Krim pelindung UV ($ZnO$/$TiO_2$ nano), stokin antibakteria (zarah perak nano), cat penyucian kendiri, atau fabrik kalis air.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebuah syarikat air ingin membina membran penapisan baharu untuk menukar air payau kepada air minum menggunakan kepingan grafen oksida.',
          step1GivenAndFormula: 'Grafen tulen tidak telap sebarang molekul, tetapi grafen oksida terubahsuai mempunyai liang bersaiz sub-nanometer.',
          studentTask: 'Nyatakan sifat grafen yang menjadikannya sesuai menahan tekanan pam air yang tinggi serta menapis ion garam terlarut.',
          answerSteps: 'Grafen mempunyai **kekuatan mekanikal yang amat tinggi** (200× lebih kuat daripada keluli) untuk menahan tekanan tinggi pam air, dan saiz liang nano terkawal hanya membenarkan molekul air ($H_2O$) lalu sambil menyekat ion garam ($Na^+$, $Cl^-$) yang bersaiz lebih besar bersama kulit penghidratannya.',
        },
        transferQuestion: {
          question: 'Selain manfaatnya, pakar keselamatan pekerjaan memberi amaran tentang penyedutan habuk zarah nano bebas di kilang. Mengapakah zarah nano bebas lebih berisiko kepada paru-paru berbanding habuk biasa?',
          answer: 'Saiznya yang teramat halus ($<100\\text{ nm}$) membolehkannya menembusi penapis semula jadi saluran pernafasan hingga ke alveolus paru-paru malah merentasi membran sel ke dalam aliran darah, selain kereaktifan permukaannya yang tinggi boleh mencetuskan keradangan tisu.',
        },
      },
    },
    {
      id: 'k5-5.6',
      chapterId: 'k5-bab-5',
      code: '5.6',
      title: 'Aplikasi Teknologi Hijau dalam Pengurusan Sisa Industri',
      pageRef: 'm.s. 191–195',
      part1Anchor: {
        phenomenon:
          'Air sisa kilang batik, kilang getah dan tapak pelupusan sampah berwarna hitam keruh serta bertoksik kepada sungai—namun dengan memasang elektrod aluminium/besi ke dalam tangki air sisa (**elektro-penggumpalan**), bendasing terlarut menggumpal lalu terapung dan air jernih pun terhasil dalam beberapa minit!',
        chapterConnection:
          'Menutup keseluruhan sukatan Kimia KSSM dengan menghubungkan tindak balas redoks/elektrokimia kepada kelestarian 6 sektor Teknologi Hijau dan pengolahan air sisa.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrifan Teknologi Hijau & Pengurusan Air Sisa',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Teknologi Hijau ialah ' },
            { text: 'pembangunan dan aplikasi produk, peralatan serta sistem untuk memulihara alam sekitar serta meminimumkan kesan negatif aktiviti manusia', keyword: true },
            { text: '; elektro-penggumpalan ialah ' },
            { text: 'kaedah merawat air sisa menggunakan proses elektrolisis dengan anod logam (seperti aluminium atau besi) untuk menggumpalkan bahan pencemar menjadi flok', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Kimia Proses Elektro-Penggumpalan Merawat Air Sisa Industri',
            cause: 'Dua elektrod logam aktif (contohnya aluminium $Al$ atau ferum $Fe$) direndam ke dalam air sisa lalu disambungkan kepada bekalan kuasa arus terus.',
            mechanism: 'Di **anod**, logam teroksida membebaskan kation ($Al \\to Al^{3+} + 3e^-$), manakala di **katod**, air mengalami penurunan menghasilkan gelembung gas hidrogen dan ion hidroksida ($2H_2O + 2e^- \\to H_2 + 2OH^-$). Ion $Al^{3+}$ dan $OH^-$ bertindak balas membentuk mendakan agar-agar aluminium hidroksida $Al(OH)_3$ yang memerangkap bahan pencemar, logam berat dan bakteria menjadi gumpalan (**flok**).',
            effect: 'Gelembung gas $H_2$ halus melekat dan mengapungkan flok ke permukaan air sebagai enapcemar terawat untuk diasingkan, meninggalkan air efluen yang jernih dan selamat disalurkan ke sungai.',
          },
        ],
        tables: [
          {
            title: 'Enam Sektor Teknologi Hijau & Strategi Pengurusan Sisa (Jadual 5.9)',
            headers: ['Bidang / Sektor Teknologi Hijau', 'Fokus & Aplikasi Utama dalam Kimia / Industri'],
            rows: [
              ['1. **Tenaga**', 'Tenaga boleh baharu (solar, angin, hidro, biojisim) & kecekapan tenaga tanpa gas rumah hijau'],
              ['2. **Bangunan**', 'Penggunaan bahan binaan mesra alam, pencahayaan semula jadi & reka bentuk cekap tenaga'],
              ['3. **Pengangkutan**', 'Kenderaan elektrik, hidrogen & penggunaan bahan api bio (biodiesel minyak sawit, bioetanol)'],
              ['4. **Pertanian dan Perhutanan**', 'Pengkomposan sisa organik menjadi baja kompos, baja biologi & pengurangan racun perosak sintetik'],
              ['5. **Pengurusan Sisa dan Air Sisa**', 'Konsep **5R** (Rethink, Refuse, Reduce, Reuse, Recycle), rawatan larutlesapan, **elektro-penggumpalan** & penukaran enapcemar kumbahan kepada biogas ($CH_4$)/baja'],
              ['6. **Perindustrian**', 'Menggantikan bahan kimia toksik (cth: pelarut organik berbahaya) dengan proses pemangkinan hijau & penjimatan air'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Setengah Elektrod dalam Rawatan Air Sisa Elektro-Penggumpalan (Anod Aluminium)',
            latex: '\\text{Anod: } Al(p) \\to Al^{3+}(ak) + 3e^- \\quad;\\quad \\text{Katod: } 2H_2O(ce) + 2e^- \\to H_2(g) + 2OH^-(ak)',
            symbols: [
              { symbol: 'Al(OH)_3', meaning: 'flok koagulan agar-agar yang memerangkap zarah pencemar ($Al^{3+} + 3OH^- \\to Al(OH)_3$)', unit: 'flok mendakan' },
              { symbol: 'H_2(g)', meaning: 'gelembung mikro hidrogen yang mengapungkan flok ke permukaan (*electroflotation*)', unit: 'gas' },
            ],
            appliesWhen: 'Menerangkan cara air sisa kilang tekstil, batik atau larutlesapan tapak pelupusan dirawat secara elektrokimia tanpa menambah banyak garam kimia luaran.',
            failsWhen: 'Perangkap SPM: Ingat bahawa elektrod anod ($Al$ atau $Fe$) dalam elektro-penggumpalan **mengkakis/terlarut** dari semasa ke semasa (kerana anod aktif mengion!) dan perlu diganti secara berkala, tidak seperti elektrod karbon/platinum lengai dalam elektrolisis biasa!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengaplikasikan Elektro-Penggumpalan & Pengolahan Enapcemar di Kilang Batik',
          problem:
            'Sebuah kilang batik menghasilkan air sisa berwarna pekat yang mengandungi pewarna sintetik dan zarah terampai sebelum dibuang. Cadangkan bagaimana sistem elektro-penggumpalan menggunakan plat aluminium membersihkan air tersebut dan apa yang boleh dilakukan terhadap enapcemar (sludge) yang terhasil.',
          given: ['Elektrod aluminium berfungsi sebagai anod aktif dan katod', 'Air sisa mengandungi zarah terampai dan pewarna bercas'],
          formulaLatex: 'Al^{3+}(ak) + 3OH^-(ak) \\longrightarrow Al(OH)_3(p) \\text{ [memerangkap pewarna]}',
          formulaWhy: 'Flok $Al(OH)_3$ memerangkap zarah warna dan diapungkan oleh gelembung gas $H_2$ dari katod.',
          substituteLatex: '\\text{Efluen jernih (dialir/guna semula)} + \\text{Enapcemar terawat (baja/bata selepas pengeringan)}',
          answer: 'Di anod, $Al$ teroksida menjadi ion $Al^{3+}$ manakala di katod air turun menghasilkan $OH^-$ dan gas $H_2$. Ion $Al^{3+}$ dan $OH^-$ membentuk flok $Al(OH)_3$ yang mengikat dan menggumpalkan pewarna batik lalu diapungkan ke permukaan oleh gelembung $H_2$ untuk dikaut. Efluen bersih boleh digunakan semula untuk mencuci lantai/kilang, manakala enapcemar organik yang selamat dirawat boleh dikompos menjadi baja atau bahan binaan.',
          trapAlert: 'Jangan lupa menyebut peranan **dua produk katod**: **$OH^-$** membentuk flok $Al(OH)_3$, manakala gelembung gas **$H_2$** mengapungkan flok ke permukaan!',
        },
      ],
      part5DecisionTable: {
        title: 'Hierarki Pengurusan Sisa Pepejal & Gas Rumah Hijau Tapak Pelupusan',
        rows: [
          {
            designChoice: 'Menangkap gas metana ($CH_4$) daripada pereputan anaerobik sisa makanan di tapak pelupusan sanitari',
            scientificReason: 'Metana ialah gas rumah hijau 25× lebih kuat daripada $CO_2$; mengumpulnya untuk penjanaan tenaga elektrik mengelakkan pencemaran haba atmosfera dan menghasilkan elektrik hijau.',
          },
          {
            designChoice: 'Merawat larutlesapan (*leachate*) tapak pelupusan sebelum dilepaskan ke sungai',
            scientificReason: 'Larutlesapan mengandungi ammonia, logam berat dan bahan organik terlarut tinggi yang akan meracuni air bawah tanah dan membunuh hidupan akuatik jika bocor.',
          },
          {
            designChoice: 'Mengguna semula sisa pertanian (tandan kosong kelapa sawit, sekam padi) untuk membuat plastik komposit/briket tenaga',
            scientificReason: 'Menukar sisa industri kepada produk bernilai tambah (konsep ekonomi kitaran) dan mengelakkan pembakaran terbuka pertanian.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua jenis bahan elektrod anod yang lazim digunakan dalam rawatan air sisa elektro-penggumpalan?',
            answer: 'Aluminium ($Al$) atau Ferum/Besi ($Fe$).',
          },
          {
            question: 'Mengapakah tapak pelupusan moden membakar atau menukar gas metana kepada elektrik daripada melepaskannya terus ke udara?',
            answer: 'Kerana gas metana ialah gas rumah hijau yang amat kuat memerangkap haba dan mudah terbakar di tapak pelupusan.',
          },
          {
            question: 'Senaraikan sekurang-kurangnya 4 daripada 6 sektor utama Teknologi Hijau.',
            answer: 'Tenaga, Bangunan, Pengangkutan, Pertanian & Perhutanan, Pengurusan Sisa & Air Sisa, dan Perindustrian.',
          },
        ],
        fadedProblem: {
          prompt: 'Dalam tangki elektro-penggumpalan, plat ferum ($Fe$) digunakan sebagai anod dan plat grafit sebagai katod dalam air sisa.',
          step1GivenAndFormula: 'Anod: $Fe(p) \\to Fe^{2+}(ak) + 2e^-$ (seterusnya boleh teroksida menjadi $Fe^{3+}$); Katod: $2H_2O(ce) + 2e^- \\to H_2(g) + 2OH^-(ak)$.',
          studentTask: 'Terangkan bagaimana tindak balas kedua-dua elektrod ini bekerjasama menyingkirkan bendasing daripada air sisa.',
          answerSteps: 'Ion $Fe^{2+}/Fe^{3+}$ dari anod bertindak balas dengan ion $OH^-$ dari katod membentuk mendakan hidroksida besi ($Fe(OH)_2$/$Fe(OH)_3$) yang memerangkap bendasing menjadi flok, manakala gelembung gas $H_2$ di katod menolak flok terapung ke permukaan untuk disingkirkan.',
        },
        transferQuestion: {
          question: 'Mengapakah kaedah elektro-penggumpalan dianggap lebih selaras dengan prinsip Teknologi Hijau berbanding kaedah penggumpalan kimia konvensional yang menambah serbuk tawas ($Al_2(SO_4)_3$) dalam jumlah besar?',
          answer: 'Elektro-penggumpalan hanya melarutkan ion logam secara tepat mengikut arus elektrik tanpa menambah anion berlebihan (seperti sulfat $SO_4^{2-}$ atau klorida $Cl^-$) ke dalam sungai, menghasilkan isi padu enapcemar yang jauh lebih kecil dan kurang berasid serta mudah dikawal secara automatik.',
        },
      },
    },
  ],
};
