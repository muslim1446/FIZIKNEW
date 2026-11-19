import type { ChapterContent } from '../types/textbook';

export const k4bab1: ChapterContent = {
  id: 'k4-bab-1',
  subject: 'kimia',
  formLevel: 4,
  number: 1,
  title: 'Pengenalan kepada Kimia',
  pageRange: 'm.s. 2–21',
  overview:
    'Memahami bidang kimia dalam kehidupan harian, langkah penyiasatan saintifik, alat pelindung diri, pengurusan radas, penyimpanan bahan kimia reaktif, dan pelupusan sisa makmal.',
  subtopics: [
    {
      id: 'k4-1.1',
      chapterId: 'k4-bab-1',
      code: '1.1',
      title: 'Perkembangan Bidang Kimia dan Kepentingan dalam Kehidupan',
      pageRef: 'm.s. 4–8',
      part1Anchor: {
        phenomenon:
          'Daripada ubat tahan sakit, pengawet makanan, baja urea hinggalah skrin nanokimia telefon pintar ($10^{-9}\\text{ m}$), setiap bahan moden wujud hasil pemahaman tentang bagaimana zarah berinteraksi dan berubah sifat.',
        chapterConnection:
          'Meletakkan definisi rasmi kimia dan cabang aplikasinya sebelum pelajar menjalankan eksperimen serta mengenali bahan di makmal.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrif Kimia',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kimia ialah bidang ilmu yang mengkaji ' },
            { text: 'struktur, sifat, komposisi dan interaksi antara jirim', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Nanokimia',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nanokimia mengkaji aplikasi ' },
            { text: 'zarah bersaiz nano ($1\\text{–}100\\text{ nm}$ / $10^{-9}\\text{ m}$)', keyword: true },
            { text: ' yang mempamerkan sifat unik berbanding bahan pukal.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Kesan Perkembangan Kimia Terhadap Kesejahteraan Harian',
            cause: 'Penyelidikan komposisi dan tindak balas antara molekul baharu.',
            mechanism: 'Sintesis bahan kimia terkawal dalam bidang perubatan, pertanian, makanan dan industri.',
            effect: 'Penghasilan antibiotik, baja bernitrogen, polimer ringan, serta pemangkin mesra alam.',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Bahan Kimia Harian Mengikut Bidang',
            headers: ['Bidang', 'Contoh Bahan Kimia', 'Fungsi Utama'],
            rows: [
              ['Makanan', 'Asid askorbik, cuka (asid etanoik), monosodium glutamat (MSG)', 'Pengantioksida, pengawet, penambah perisa'],
              ['Perubatan', 'Parasetamol, antibiotik (penisilin), antiseptik', 'Analgesik tahan sakit, membunuh bakteria'],
              ['Pertanian', 'Ammonium sulfat, urea, racun perosak', 'Membekalkan nutrien nitrogen & kawalan serangga'],
              ['Industri', 'Cat, polimer sintetik, aloi keluli, simen', 'Bahan binaan tahan karat & penebat'],
            ],
          },
          {
            title: 'Kerjaya Berkaitan Bidang Kimia',
            headers: ['Bidang Sektor', 'Contoh Kerjaya'],
            rows: [
              ['Kesihatan & Farmasi', 'Ahli farmasi, ahli toksikologi, ahli kimia klinikal'],
              ['Industri & Kejuruteraan', 'Jurutera kimia, ahli kimia polimer, ahli metalurgi'],
              ['Pertanian & Alam Sekitar', 'Ahli kimia tanah, penganalisis kualiti air, saintis forensik'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Skala Saiz Nanokimia',
            latex: '1\\text{ nm} = 10^{-9}\\text{ m} = 0.000000001\\text{ m}',
            symbols: [
              { symbol: '\\text{nm}', meaning: 'nanometer', unit: '$10^{-9}\\text{ m}$' },
            ],
            appliesWhen: 'Menyatakan julat saiz zarah nano dalam nanokimia ($1\\text{–}100\\text{ nm}$).',
            failsWhen: 'Jangan keliru dengan mikrometer ($\\mu\\text{m} = 10^{-6}\\text{ m}$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Cabang & Bahan Kimia Harian',
          problem:
            'Seorang petani mendapati daun tanaman kekuningan dan tanah terlalu berasid. Nyatakan bahan kimia pertanian yang sesuai ditambah dan bidang kimia yang terlibat.',
          given: ['Masalah 1: Kekurangan nutrien nitrogen', 'Masalah 2: Tanah berasid (pH rendah)'],
          formulaLatex: '\\text{Baja ammonium/urea} + \\text{Kapur tohor (CaO)}',
          formulaWhy: 'Baja membekalkan unsur $N$, manakala kalsium oksida/kalsium karbonat meneutralkan asid tanah.',
          substituteLatex: '\\text{Bidang: Kimia Pertanian (Agrikimia)}',
          answer: 'Tambah baja urea/ammonium nitrat dan kapur pertanian ($CaCO_3$ atau $CaO$).',
          trapAlert: 'Jangan mencampurkan baja ammonium terus dengan kapur serentak kerana alkali akan membebaskan gas ammonia $NH_3$ yang hilang ke udara!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah empat perkataan teras dalam takrif kimia?',
            answer: 'Struktur, sifat, komposisi dan interaksi antara jirim.',
          },
          {
            question: 'Berapakah nilai $1\\text{ nanometer}$ dalam meter?',
            answer: '$10^{-9}\\text{ m}$.',
          },
          {
            question: 'Berikan dua contoh bahan kimia dalam bidang perubatan.',
            answer: 'Parasetamol (analgesik) dan penisilin (antibiotik).',
          },
        ],
        fadedProblem: {
          prompt: 'Asal perkataan "kimia" datang daripada istilah Arab "al-kimiya". Nyatakan perkaitan bahan kimia harian dalam pengawetan makanan.',
          step1GivenAndFormula: 'Bahan kimia makanan: Garam ($NaCl$), gula, cuka ($CH_3COOH$), asid benzoik.',
          studentTask: 'Terangkan peranan bahan kimia tersebut terhadap jangka hayat makanan.',
          answerSteps: 'Pengawet seperti cuka atau natrium benzoat merencatkan atau membunuh pertumbuhan mikroorganisma supaya makanan tahan lebih lama.',
        },
        transferQuestion: {
          question: 'Mengapakah salap pelindung matahari menggunakan zink oksida ($ZnO$) bersaiz nano berbanding serbuk biasa?',
          answer: 'Zarah $ZnO$ bersaiz nano sangat halus sehingga lut sinar pada kulit (tidak meninggalkan lapisan putih) sambil menyerap sinaran ultraungu (UV) dengan lebih berkesan kerana jumlah luas permukaan per isi padu yang tinggi.',
        },
      },
    },
    {
      id: 'k4-1.2',
      chapterId: 'k4-bab-1',
      code: '1.2',
      title: 'Penyiasatan Saintifik dalam Kimia',
      pageRef: 'm.s. 8–10',
      part1Anchor: {
        phenomenon:
          'Mengapakah gula melarut jauh lebih cepat dalam teh panas berbanding air sejuk? Untuk membuktikannya secara objektif tanpa tekaan, ahli kimia menggunakan kawalan pemboleh ubah berdisiplin.',
        chapterConnection:
          'Menetapkan format 11 langkah kaedah saintifik bagi semua eksperimen wajib dalam Tingkatan 4 dan 5.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kaedah Saintifik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kaedah saintifik ialah ' },
            { text: 'kaedah sistematik yang digunakan oleh ahli sains untuk menyelesaikan masalah berkaitan sains', keyword: true },
            { text: ' melalui pemerhatian, hipotesis dan eksperimen terkawal.' },
          ],
        },
        {
          title: 'Hipotesis',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Hipotesis ialah ' },
            { text: 'pernyataan umum tentang hubungan antara pemboleh ubah dimanipulasi dengan pemboleh ubah bergerak balas', keyword: true },
            { text: ' yang perlu diuji kesahihannya.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Kesan Suhu ke atas Keterlarutan Garam dalam Air',
            cause: 'Suhu air ditingkatkan.',
            mechanism: 'Zarah air bergerak lebih laju dengan tenaga kinetik lebih tinggi, memecahkan kekisi garam dengan lebih kerap.',
            effect: 'Masa untuk garam larut sepenuhnya berkurang (keterlarutan meningkat).',
          },
        ],
        tables: [
          {
            title: 'Urutan 11 Langkah Penyiasatan Saintifik Kimia',
            headers: ['Fasa', 'Langkah Rasmi KSSM'],
            rows: [
              ['1–4 (Perancangan)', '1. Membuat pemerhatian → 2. Membuat inferens → 3. Mengenal pasti masalah → 4. Membuat hipotesis'],
              ['5–7 (Rekaan)', '5. Mengenal pasti pemboleh ubah → 6. Mengawal pemboleh ubah → 7. Merancang eksperimen'],
              ['8–11 (Pelaksanaan & Pelaporan)', '8. Mengumpul data → 9. Mentafsir data → 10. Membuat kesimpulan → 11. Menulis laporan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Format Menulis Hipotesis SPM (Kertas 3)',
            latex: '\\text{Semakin [bertambah/berkurang] } \\mathbf{PM}, \\text{ semakin [bertambah/berkurang] } \\mathbf{PB}.',
            symbols: [
              { symbol: 'PM', meaning: 'Pemboleh ubah dimanipulasi', unit: '—' },
              { symbol: 'PB', meaning: 'Pemboleh ubah bergerak balas', unit: '—' },
            ],
            appliesWhen: 'Semua soalan merancang atau melaporkan eksperimen kimia SPM.',
            failsWhen: 'Jangan gunakan perkataan "dipengaruhi oleh" tanpa menyatakan arah perubahan yang jelas.',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 1.1',
            title: 'Kesan Suhu Air ke atas Keterlarutan Garam',
            aim: 'Mengkaji kesan suhu air ke atas masa yang diambil oleh garam untuk larut sepenuhnya.',
            inference: 'Keterlarutan garam dalam air bergantung kepada suhu air.',
            hypothesis: 'Semakin tinggi suhu air, semakin singkat masa yang diambil untuk garam larut sepenuhnya.',
            variables: {
              manipulated: 'Suhu air ($30\\,^\\circ\\text{C}, 40\\,^\\circ\\text{C}, 50\\,^\\circ\\text{C}, 60\\,^\\circ\\text{C}$)',
              responding: 'Masa untuk garam larut sepenuhnya (s)',
              fixed: 'Isi padu air ($50\\text{ cm}^3$), jisim & jenis garam ($2\\text{ g}$ natrium klorida), kadar kacauan',
            },
            setupLogic: 'Panaskan air suling ke suhu sasaran, masukkan garam serentak dengan memulakan jam randik, kacau pada kadar malar sehingga tiada hablur kelihatan.',
            expectedResult: 'Masa larut menurun apabila suhu meningkat.',
            conclusion: 'Semakin tinggi suhu air, semakin cepat garam melarut; hipotesis diterima.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti 3 Pemboleh Ubah & Cara Mengawalnya',
          problem:
            'Seorang pelajar mengkaji kesan suhu ke atas keterlarutan kalium nitrat dalam $100\\text{ cm}^3$ air. Nyatakan cara mengawal setiap pemboleh ubah.',
          given: ['PM: Suhu air', 'PB: Jisim kalium nitrat terlarut / masa melarut'],
          formulaLatex: '\\text{Ganti/Ubah } PM \\rightarrow \\text{Ukur } PB \\rightarrow \\text{Malar } PD',
          formulaWhy: 'Prinsip ujian adil memastikan hanya satu faktor mempengaruhi keputusan.',
          substituteLatex: '\\text{PD: Isi padu air } (100\\text{ cm}^3) \\text{ disukat dengan silinder penyukat}',
          answer: 'PM: Gunakan kukus air bersuhu $30\\text{–}70\\,^\\circ\\text{C}$; PB: Ukur masa menggunakan jam randik; PD: Kekalkan isi padu air $100\\text{ cm}^3$ dan jisim garam.',
          trapAlert: 'Sentiasa nyatakan alat pengukur atau kuantiti khusus apabila diminta menyatakan "cara mengawal pemboleh ubah"!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah langkah pertama selepas membuat pemerhatian dalam kaedah saintifik?',
            answer: 'Membuat inferens (tafsiran awal terhadap pemerhatian).',
          },
          {
            question: 'Dalam Eksperimen 1.1, apakah pemboleh ubah dimalarkan yang paling penting selain isi padu air?',
            answer: 'Jisim dan jenis garam serta kadar kacauan.',
          },
          {
            question: 'Nyatakan perbezaan antara inferens dengan hipotesis.',
            answer: 'Inferens ialah penerangan awal bagi pemerhatian, manakala hipotesis ialah pernyataan hubungan antara PM dan PB yang boleh diuji.',
          },
        ],
        fadedProblem: {
          prompt: 'Eksperimen dijalankan untuk menyiasat hubungan antara suhu air dan keterlarutan kuprum(II) sulfat.',
          step1GivenAndFormula: 'PM = suhu air; PB = jisim kuprum(II) sulfat yang dapat larut dalam $50\\text{ cm}^3$ air.',
          studentTask: 'Tulis satu hipotesis lengkap yang sah untuk penyiasatan ini.',
          answerSteps: 'Semakin tinggi suhu air, semakin bertambah jisim kuprum(II) sulfat yang boleh melarut di dalam $50\\text{ cm}^3$ air.',
        },
        transferQuestion: {
          question: 'Mengapakah mengacau larutan dengan kelajuan berbeza antara bikar A dan bikar B membatalkan kesahihan Eksperimen 1.1?',
          answer: 'Pengacauan ialah pemboleh ubah yang mesti dimalarkan; kelajuan kacauan lebih tinggi mempercepatkan pelarutan dan menghasilkan data tidak adil.',
        },
      },
    },
    {
      id: 'k4-1.3',
      chapterId: 'k4-bab-1',
      code: '1.3',
      title: 'Penggunaan, Pengurusan dan Pengendalian Radas serta Bahan Kimia',
      pageRef: 'm.s. 11–18',
      part1Anchor: {
        phenomenon:
          'Natrium meletup jika terkena kelembapan udara, asid nitrik pekat terurai di bawah cahaya matahari, manakala merkuri daripada termometer pecah menghasilkan wap toksik. Pengurusan makmal menyelamatkan nyawa.',
        chapterConnection:
          'Membentuk tabiat keselamatan makmal wajib sebelum mengendalikan asid kuat, halogen dan logam reaktif dalam bab seterusnya.',
      },
      part2SacredDefinitions: [
        {
          title: 'Lembaran Data Keselamatan Bahan (CSDS / SDS)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'CSDS ialah dokumen rasmi yang mengandungi ' },
            { text: 'maklumat terperinci sifat fizikal, kimia, bahaya, pengendalian selamat dan langkah kecemasan', keyword: true },
            { text: ' bagi sesuatu bahan kimia.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Logam Alkali (Li, Na, K) Disimpan dalam Minyak Parafin',
            cause: 'Logam Kumpulan 1 sangat elektropositif dan reaktif.',
            mechanism: 'Minyak parafin bertindak sebagai penghalang fizikal daripada oksigen dan wap air udara.',
            effect: 'Mencegah pengoksidaan dan letupan tindak balas spontan dengan lembapan.',
          },
          {
            title: 'Mengapa Merkuri Tumpah Ditutup dengan Serbuk Sulfur',
            cause: 'Termometer merkuri pecah membebaskan cecair merkuri dan wap toksik.',
            mechanism: 'Sulfur bertindak balas dengan merkuri membentuk sebatian pepejal merkuri(II) sulfida ($HgS$) yang stabil.',
            effect: 'Menghalang pengewapan merkuri beracun sementara menunggu pihak Bomba.',
          },
        ],
        tables: [
          {
            title: 'Alat Pelindung Diri (PPE) dan Peralatan Keselamatan Makmal',
            headers: ['Peralatan', 'Fungsi Khusus'],
            rows: [
              ['Gogal keselamatan', 'Melindungi mata daripada percikan asid, alkali atau bahan kimia merengsa'],
              ['Kebuk wasap (Fume chamber)', 'Menyedut keluar gas beracun, mudah terbakar atau berbau sengit ($Cl_2, NO_2, NH_3$)'],
              ['Pancuran air & Pembilas mata', 'Membilas badan atau mata segera sekurang-kurangnya 15 minit jika terkena bahan kimia'],
              ['Sarung tangan & Baju makmal', 'Melindungi kulit dan pakaian daripada bahan mengakis serta haba'],
            ],
          },
          {
            title: 'Tatacara Penyimpanan Bahan Kimia Khas',
            headers: ['Jenis Bahan Kimia', 'Kaedah Penyimpanan', 'Sebab Saintifik'],
            rows: [
              ['Logam reaktif ($Li, Na, K$)', 'Direndam dalam botol berisi minyak parafin', 'Mengelakkan sentuhan dengan air dan oksigen udara'],
              ['Hidrokarbon & pelarut mudah meruap ($C_2H_5OH$, eter)', 'Bekas tertutup rapat jauh daripada sumber haba/api', 'Mudah meruap dan sangat mudah terbakar'],
              ['Bahan peka cahaya ($HNO_3$ pekat, $H_2O_2, AgNO_3, Br_2, Cl_2$)', 'Disimpan di dalam botol kaca berwarna gelap', 'Cahaya matahari menguraikan bahan kimia ini'],
              ['Bahan mengakis ($pH < 5$ atau $pH > 9$)', 'Kabinet khas yang berkunci', 'Mengelakkan kecederaan terbakar kimia atau penyalahgunaan'],
              ['Logam berat & bahan toksik ($Hg, Pb$, sianida)', 'Bilik atau almari khas bertutup dan berlabel', 'Sangat beracun dan merbahaya kepada kesihatan'],
            ],
          },
          {
            title: 'Langkah Pengurusan Tumpahan Merkuri & Pelupusan Sisa',
            headers: ['Situasi', 'Tindakan Betul'],
            rows: [
              ['Tumpahan merkuri', '1. Maklumkan guru → 2. Jadikan kawasan larangan → 3. Taburkan serbuk sulfur menutupi tumpahan → 4. Hubungi Jabatan Bomba'],
              ['Sisa kimia toksik / organik / logam berat', 'Jangan buang ke dalam singki; kumpul dalam botol sisa berlabel khusus untuk pelupusan berjadual'],
              ['Bahan meruap & asid kuat cair (<0.5 M)', 'Boleh dicairkan dengan banyak air sebelum dilupuskan (mengikut garis panduan makmal); pelarut organik masuk ke botol sisa organik'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Meneutralkan Tumpahan Merkuri',
            latex: '\\text{Hg(ce)} + \\text{S(p)} \\longrightarrow \\text{HgS(p)}',
            symbols: [
              { symbol: '\\text{Hg}', meaning: 'merkuri cecair toksik', unit: '—' },
              { symbol: '\\text{S}', meaning: 'serbuk sulfur', unit: '—' },
            ],
            appliesWhen: 'Mengawal tumpahan merkuri kecil sebelum ketibaan pasukan hazmat/Bomba.',
            failsWhen: 'Jangan sekali-kali menyentuh merkuri dengan tangan kosong atau menggunakan penyedut vakum biasa!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Memilih Pengendalian & Penyimpanan Betul di Makmal',
          problem:
            'Anda perlu mengendalikan larutan bromin ($Br_2$) dan menguji tindak balas kalium ($K$) dengan air. Terangkan langkah keselamatan dan penyimpanan kedua-dua bahan.',
          given: ['Bromin: meruap, wap beracun & terurai oleh cahaya', 'Kalium: sangat reaktif dengan air dan oksigen'],
          formulaLatex: '\\text{Kebuk wasap} + \\text{Botol gelap} \\quad|\\quad \\text{Minyak parafin} + \\text{Penyepit}',
          formulaWhy: 'Menghalang penyedutan wap bromin dan sentuhan kulit/air dengan kalium.',
          substituteLatex: '\\text{Gunakan gogal, sarung tangan dan penghadang keselamatan}',
          answer: 'Simpan $Br_2$ dalam botol kaca gelap dan kendalikan di dalam kebuk wasap; simpan $K$ dalam minyak parafin dan ambil cebisan kecil menggunakan penyepit.',
          trapAlert: 'Jangan sesekali membuang lebihan asid pekat, merkuri atau pelarut organik seperti heksana terus ke dalam singki makmal.',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Keselamatan Pengurusan Makmal Kimia SPM',
        rows: [
          {
            designChoice: 'Menjalankan penyediaan gas klorin atau bromin di dalam kebuk wasap',
            scientificReason: 'Menyedut keluar wap/gas beracun dan merengsa supaya tidak terhidu oleh pelajar.',
          },
          {
            designChoice: 'Menyimpan argentum nitrat ($AgNO_3$) dan hidrogen peroksida ($H_2O_2$) dalam botol kaca gelap',
            scientificReason: 'Menghalang sinaran cahaya daripada menguraikan bahan kimia yang peka cahaya.',
          },
          {
            designChoice: 'Menaburkan serbuk sulfur pada tumpahan merkuri daripada termometer pecah',
            scientificReason: 'Sulfur bertindak balas dengan merkuri membentuk merkuri sulfida stabil dan menyekat wap toksik.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah natrium dan kalium mesti direndam di dalam minyak parafin?',
            answer: 'Untuk mengelakkan logam reaktif tersebut bertindak balas dengan oksigen dan wap air di udara.',
          },
          {
            question: 'Apakah bahan yang ditaburkan di atas tumpahan merkuri?',
            answer: 'Serbuk sulfur.',
          },
          {
            question: 'Namakan tiga bahan kimia yang mesti disimpan dalam botol kaca berwarna gelap.',
            answer: 'Asid nitrik pekat ($HNO_3$), larutan argentum nitrat ($AgNO_3$), dan hidrogen peroksida ($H_2O_2$).',
          },
        ],
        fadedProblem: {
          prompt: 'Seorang pelajar terpecahkan termometer merkuri di atas meja makmal.',
          step1GivenAndFormula: 'Langkah 1: Maklumkan kepada guru dan arahkan rakan menjauhi kawasan tumpahan.',
          studentTask: 'Lengkapkan dua langkah seterusnya dengan bahan yang tepat.',
          answerSteps: 'Jadikan kawasan tumpahan kawasan larangan, taburkan serbuk sulfur menutupinya, dan hubungi Jabatan Bomba untuk pembersihan profesional.',
        },
        transferQuestion: {
          question: 'Mengapakah penyedut hampagas (vakum) biasa DILARANG digunakan untuk menyedut tumpahan merkuri?',
          answer: 'Aliran udara dan haba motor vakum akan mengewapkan merkuri cecair menjadi aerosol/wap merkuri beracun dan menyebarkannya ke seluruh bilik makmal.',
        },
      },
    },
  ],
};
