import type { ChapterContent } from '../types/textbook';

export const k5bab4: ChapterContent = {
  id: 'k5-bab-4',
  subject: 'kimia',
  formLevel: 5,
  number: 4,
  title: 'Polimer',
  pageRange: 'm.s. 142–163',
  overview:
    'Menguasai monomer, tindak balas pempolimeran penambahan dan kondensasi, sifat serta kegunaan polimer semula jadi dan sintetik, struktur serta pemvulkanan getah asli poliisoprena (termasuk mekanisme penggumpalan lateks), dan kepelbagaian getah sintetik moden.',
  subtopics: [
    {
      id: 'k5-4.1',
      chapterId: 'k5-bab-4',
      code: '4.1',
      title: 'Polimer',
      pageRef: 'm.s. 144–150',
      part1Anchor: {
        phenomenon:
          'Daripada beg plastik polietena yang nipis, paip PVC yang tegar, tali nilon yang tahan regangan hingga kanji dalam nasi dan protein dalam daging—kesemuanya ialah rantai raksasa yang dibina daripada ribuan unit kecil berulang!',
        chapterConnection:
          'Asas pengkelasan polimer (semula jadi vs sintetik; termoplastik, termoset, elastomer) dan dua mekanisme sintesisnya sebelum mendalami kes khusus elastomer dalam 4.2 dan 4.3.',
      },
      part2SacredDefinitions: [
        {
          title: 'Polimer, Monomer dan Pempolimeran',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Polimer ialah ' },
            { text: 'molekul berantai panjang yang terbina daripada gabungan banyak unit asas berulang yang dinamakan monomer', keyword: true },
            { text: ', melalui ' },
            { text: 'tindak balas penggabungan monomer yang disebut pempolimeran', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'n(\\text{Monomer}) \\longrightarrow -(\\text{Unit Berulang})_n-',
        },
        {
          title: 'Pempolimeran Penambahan vs Pempolimeran Kondensasi',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Pempolimeran penambahan berlaku apabila ' },
            { text: 'monomer tidak tepu (ikatan ganda dua $C=C$) bergabung bersama tanpa penyingkiran sebarang molekul kecil', keyword: true },
            { text: '; pempolimeran kondensasi melibatkan ' },
            { text: 'monomer berlainan dengan dua kumpulan berfungsi yang bergabung sambil menyingkirkan molekul kecil seperti $H_2O$ atau $HCl$', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Termoplastik Boleh Diforma Semula Manakala Termoset Hangus Apabila Dipanaskan',
            cause: 'Termoplastik (seperti polietena, PVC) mempunyai rantai polimer linear tanpa rangkai silang kovalen antara rantai, manakala termoset (bakelit, melamina) mempunyai jaringan rangkai silang kovalen tiga dimensi yang kukuh.',
            mechanism: 'Apabila dipanaskan, daya van der Waals lemah antara rantai termoplastik mudah diatasi supaya rantai menggelongsor dan melebur; sebaliknya rangkai silang kovalen dalam termoset menghalang gelongsoran rantai sehingga ikatan putus dan terurai hangus.',
            effect: 'Termoplastik boleh dikitar semula (dilebur dan dibentuk semula berulang kali), manakala termoset keras, tahan haba tinggi tetapi tidak boleh dilebur semula.',
          },
          {
            title: 'Mekanisme Pembukaan Ikatan Ganda Dua dalam Pempolimeran Penambahan',
            cause: 'Molekul monomer (seperti etena $CH_2=CH_2$) mengandungi ikatan kovalen ganda dua $C=C$.',
            mechanism: 'Di bawah suhu, tekanan dan mangkin tertentu, satu daripada ikatan $\\pi$ dalam $C=C$ terbuka membentuk dua ikatan tunggal baru ke atom karbon monomer bersebelahan secara berantai.',
            effect: 'Rantai polimer tepu panjang $-(-CH_2-CH_2-)_n-$ terbentuk tanpa sebarang hasil sampingan.',
          },
        ],
        tables: [
          {
            title: 'Pengelasan Polimer & Jenis Pempolimeran Utama (SPM KSSM)',
            headers: ['Polimer & Sumber', 'Monomer', 'Jenis Pempolimeran & Ciri / Kegunaan'],
            rows: [
              ['Kanji / Selulosa (Semula jadi)', 'Glukosa ($C_6H_{12}O_6$)', 'Kondensasi (singkir $H_2O$); simpanan tenaga & dinding sel tumbuhan'],
              ['Protein (Semula jadi)', 'Asid amino', 'Kondensasi (singkir $H_2O$); membina tisu otot & enzim'],
              ['Getah asli (Semula jadi)', 'Isoprena (2-metilbut-1,3-diena)', 'Penambahan; elastomer kenyal untuk sarung tangan & tayar'],
              ['Polietena / Politena (Sintetik)', 'Etena ($C_2H_4$)', 'Penambahan; termoplastik ringan untuk beg plastik & botol'],
              ['Polipropena (Sintetik)', 'Propena ($C_3H_6$)', 'Penambahan; termoplastik kuat untuk tali, botol & bampar kereta'],
              ['Polivinil klorida, PVC (Sintetik)', 'Kloroetena ($CH_2=CHCl$)', 'Penambahan; termoplastik keras penebat untuk paip air & salutan kabel'],
              ['Polistirena (Sintetik)', 'Stirena / Feniletena', 'Penambahan; penebat haba (pembungkus makanan & cawan)'],
              ['Terilena / Poliester (Sintetik)', 'Etana-1,2-diol + Asid benzena-1,4-dikarboksilik', 'Kondensasi (singkir $H_2O$); gentian tekstil baju kalis kedut'],
              ['Nilon-6,6 (Sintetik)', 'Heksana-1,6-diamina + Heksanadioik diklorida / asid', 'Kondensasi (singkir $HCl$ atau $H_2O$); tali pancing, payung terjun & berus'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Am Pempolimeran Penambahan Alkena',
            latex: 'n\\, CH_2=CHX \\longrightarrow -\\left(CH_2-CHX\\right)_n-',
            symbols: [
              { symbol: 'n', meaning: 'bilangan unit monomer yang bergabung (nilai besar)', unit: 'tiada unit' },
              { symbol: 'X', meaning: 'kumpulan sisi ($-H$ etena, $-CH_3$ propena, $-Cl$ kloroetena, $-C_6H_5$ stirena)', unit: 'kumpulan atom' },
            ],
            appliesWhen: 'Menulis persamaan kimia atau melukis formula struktur polimer penambahan daripada monomer alkena.',
            failsWhen: 'Perangkap besar SPM: (1) Ikatan ganda dua $C=C$ MESTI bertukar menjadi ikatan tunggal $C-C$ pada polimer! (2) Mesti ada ikatan memanjang keluar menembusi tanda kurung $[\\dots]_n$ pada kedua-dua hujung! (3) Untuk monomer seperti propena $CH_3-CH=CH_2$, sentiasa lukis $C=C$ secara mendatar dan lipat $-CH_3$ sebagai cabang ke atas/bawah!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Monomer daripada Formula Struktur Polimer Penambahan',
          problem:
            'Satu polimer sintetik mempunyai unit berulang $-[CH_2-CH(CH_3)]_n-$. Nyatakan nama monomer, nama polimer, jenis tindak balas pempolimeran dan lukis formula struktur monomernya.',
          given: ['Unit berulang mempunyai tulang belakang 2 atom karbon sahaja ($-CH_2-CH(CH_3)-$) tanpa unsur $O$ atau $N$ di tulang belakang'],
          formulaLatex: '-\\left(CH_2-CH(CH_3)\\right)_n- \\xleftarrow{\\text{penambahan}} n\\, CH_2=CH(CH_3)',
          formulaWhy: 'Untuk mencari monomer polimer penambahan, buang ikatan hujung dan tukar ikatan tunggal $C-C$ di tengah menjadi ikatan ganda dua $C=C$.',
          substituteLatex: 'n\\, CH_2=CH-CH_3 \\longrightarrow -\\left(CH_2-CH(CH_3)\\right)_n-',
          answer: 'Monomer: propena ($CH_2=CHCH_3$); Polimer: polipropena; Jenis pempolimeran: pempolimeran penambahan.',
          trapAlert: 'Jangan tulis "propilena" jika skema KSSM menghendaki nama IUPAC **"propena"** dan **"polipropena"**. Pastikan juga hanya karbon bersebelahan pada tulang belakang menerima ikatan ganda dua.',
        },
      ],
      part5DecisionTable: {
        title: 'Pengurusan Sisa Polimer Sintetik & Pilihan Polimer Mesra Alam',
        rows: [
          {
            designChoice: 'Menggunakan polimer terbiodegradasi (seperti asid polilaktik, PLA daripada kanji jagung) bagi pembungkus makanan sekali guna',
            scientificReason: 'Dapat diuraikan oleh bakteria dan kulat secara semula jadi kepada $CO_2$, air dan biojisim tanpa mencemarkan tapak pelupusan jangka panjang.',
          },
          {
            designChoice: 'Mengitar semula termoplastik berkod (PET #1, HDPE #2, PP #5) berbanding membakar secara terbuka',
            scientificReason: 'Termoplastik tiada rangkai silang dan boleh dilebur semula, manakala pembakaran terbuka membebaskan gas bertoksik seperti $HCl$, dioksin (dari PVC) dan gas rumah hijau.',
          },
          {
            designChoice: 'Memilih plastik fotodegradasi untuk lapisan mulsa pertanian',
            scientificReason: 'Kumpulan sensitif cahaya UV dalam rantai polimer memecahkan rantai polimer apabila terdedah kepada cahaya matahari.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah perbezaan utama hasil tindak balas antara pempolimeran penambahan dengan pempolimeran kondensasi?',
            answer: 'Pempolimeran penambahan menghasilkan polimer SAHAJA (tiada molekul kecil disingkirkan), manakala kondensasi menyingkirkan molekul kecil seperti $H_2O$ atau $HCl$.',
          },
          {
            question: 'Namakan monomer bagi kanjidan protein.',
            answer: 'Kanji: glukosa; Protein: asid amino.',
          },
          {
            question: 'Mengapakah bakelit (termoset) tidak boleh dileburkan dan dikitar semula?',
            answer: 'Kerana bakelit mempunyai rangkai silang kovalen yang kuat antara rantai polimernya yang menghalang rantai daripada menggelongsor apabila dipanaskan.',
          },
        ],
        fadedProblem: {
          prompt: 'Polivinil klorida (PVC) dihasilkan daripada pempolimeran kloroetena, $CH_2=CHCl$.',
          step1GivenAndFormula: 'Kloroetena mengandungi satu ikatan ganda dua $C=C$ dan satu atom klorin sebagai kumpulan sisi.',
          studentTask: 'Tulis persamaan pempolimeran pembentukan PVC daripada $n$ molekul kloroetena.',
          answerSteps: '$n\\,CH_2=CHCl \\longrightarrow -(CH_2-CHCl)_n-$ (dengan ikatan memanjang melepasi tanda kurung pada kedua-dua sisi).',
        },
        transferQuestion: {
          question: 'Terangkan mengapa beg plastik polietena lebih fleksibel tetapi kurang teguh berbanding paip air PVC walaupun kedua-duanya ialah polimer penambahan.',
          answer: 'Dalam polietena, hanya atom hidrogen kecil terikat pada tulang belakang karbon sehingga daya tarikan van der Waals antara rantai lebih lemah. Dalam PVC, atom klorin yang lebih elektronegatif mewujudkan kutub separa ($C^{\\delta+}-Cl^{\\delta-}$), menghasilkan tarikan antara molekul yang lebih kuat dan menjadikan paip PVC lebih keras dan tegar.',
        },
      },
    },
    {
      id: 'k5-4.2',
      chapterId: 'k5-bab-4',
      code: '4.2',
      title: 'Getah Asli',
      pageRef: 'm.s. 151–158',
      part1Anchor: {
        phenomenon:
          'Susu getah (lateks) yang menitis dari pokok *Hevea brasiliensis* ialah cecair putih licin, tetapi dalam beberapa jam sahaja ia bertukar menjadi gumpalan pepejal kenyal jika tidak dicampur ammonia; apabila dipanaskan bersama sulfur, getah lembik itu bertukar menjadi tayar kenderaan yang amat kuat!',
        chapterConnection:
          'Menjelaskan kimia koloid zarah getah (penggumpalan oleh asid vs pencegahan oleh alkali ammonia) dan kejuruteraan rangkai silang sulfur dalam pemvulkanan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Struktur Monomer Getah Asli & Proses Pemvulkanan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Getah asli ialah polimer semula jadi yang terdiri daripada monomer ' },
            { text: 'isoprena (nama IUPAC: 2-metilbut-1,3-diena)', keyword: true },
            { text: ' membentuk poliisoprena; pemvulkanan ialah proses ' },
            { text: 'pemanasan getah asli bersama sulfur atau tindak balas dengan disulfur diklorida ($S_2Cl_2$) untuk membentuk rangkai silang sulfur antara rantai polimer getah', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'n\\,\\text{CH}_2\\text{=C(CH}_3\\text{)-CH=CH}_2 \\longrightarrow -\\left(\\text{CH}_2\\text{-C(CH}_3\\text{)=CH-CH}_2\\right)_n-',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Penggumpalan Lateks oleh Asid vs Tindakan Bakteria',
            cause: 'Setiap zarah getah dalam lateks dibaluti oleh membran protein yang bercas negatif ($-$) di permukaannya, menyebabkan zarah-zarah getah saling menolak antara satu sama lain.',
            mechanism: 'Apabila asid (cth: asid metanoik, $HCOOH$) ditambah atau apabila bakteria di udara menguraikan protein/gula menghasilkan asid laktik selepas 1–2 hari, ion hidrogen ($H^+$) bercas positif daripada asid meneutralkan cas negatif pada membran protein.',
            effect: 'Zarah getah tidak lagi saling menolak, lalu berlanggar sesama sendiri sehingga membran protein pecah; rantai polimer getah membebaskan diri dan berbelit bersama menyebabkan lateks menggumpal menjadi pepejal!',
          },
          {
            title: 'Bagaimana Larutan Ammonia ($NH_3$) Menghalang Penggumpalan & Bagaimana Pemvulkanan Menguatkan Getah',
            cause: 'Penambahan larutan ammonia ($NH_3(ak)$) membekalkan ion hidroksida ($OH^-$), manakala pemvulkanan bertindak balas dengan ikatan ganda dua $C=C$ pada rantai poliisoprena.',
            mechanism: 'Ion $OH^-$ meneutralkan sebarang ion $H^+$ yang dihasilkan oleh bakteria supaya cas negatif membran protein kekal terpelihara. Semasa pemvulkanan, atom sulfur membentuk rangkai silang disulfida ($-S-S-$) antara rantai polimer poliisoprena bersebelahan.',
            effect: 'Ammonia mengekalkan lateks dalam keadaan cecair; pemvulkanan pula menghalang rantai polimer daripada menggelongsor terlalu jauh apabila diregangkan dan menarik rantai kembali ke kedudukan asal apabila dilepaskan.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Getah Tak Tervulkan vs Getah Tervulkan (Jadual 4.2)',
            headers: ['Sifat', 'Getah Asli Tak Tervulkan', 'Getah Asli Tervulkan'],
            rows: [
              ['Struktur rantai', 'Tiada rangkai silang sulfur; banyak ikatan ganda dua $C=C$', 'Ada **rangkai silang sulfur ($-S-S-$)** antara rantai; kurang $C=C$'],
              ['Kekuatan & Kekerasan', 'Lembut, kurang kuat dan mudah haus', '**Lebih keras, lebih kuat** dan tahan geseran'],
              ['Kekenyalan', 'Kurang kenyal (mudah berubah bentuk kekal jika diregang melampau)', '**Lebih kenyal** (kembali tepat ke bentuk asal selepas diregang)'],
              ['Rintangan haba', 'Mudah menjadi lembut dan melekit apabila dipanaskan', '**Lebih tahan haba** (tidak mudah melebur/melekit)'],
              ['Rintangan pengoksidaan', 'Mudah teroksida oleh oksigen udara (banyak $C=C$)', '**Lebih tahan pengoksidaan** (kurang $C=C$ terdedah)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Struktur & Tindak Balas Penggumpalan / Antigumpal Lateks',
            latex: '\\text{Penggumpalan: } H^+ + \\text{Membran}(-\\text{cas}) \\to \\text{Neutral} \\quad|\\quad \\text{Antigumpal: } OH^- + H^+ \\to H_2O',
            symbols: [
              { symbol: 'H^+', meaning: 'ion hidrogen daripada asid metanoik/etanoik/laktik bakteria', unit: 'kation asid' },
              { symbol: 'OH^-', meaning: 'ion hidroksida daripada larutan ammonia $NH_3(ak)$', unit: 'anion alkali' },
            ],
            appliesWhen: 'Menerangkan eksperimen menggumpalkan lateks dan mengekalkan lateks dalam bentuk cecair di ladang getah.',
            failsWhen: 'Perangkap besar SPM: Jangan hanya jawab "asid menggumpalkan lateks"—mesti sebut 4 kata kunci penuh: **(1) ion $H^+$ meneutralkan cas negatif pada membran protein**, **(2) zarah getah berlanggar**, **(3) membran protein pecah**, dan **(4) polimer getah berbelit/bergumpal**!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-latex-coagulation',
            title: 'Zarah Koloid Lateks: Tolakan Cas Negatif vs Penggumpalan oleh Asid ($H^+$) & Pemvulkanan',
            whatItShows: 'Mengapa lateks kekal cair apabila bercas negatif dan bagaimana ion $H^+$ mencetuskan penggumpalan, serta peranan rangkai silang sulfur.',
            axisOrRule: 'Membran protein bercas negatif menolak sesama sendiri; pemvulkanan menggantikan sebahagian ikatan $C=C$ dengan jambatan $-S-S-$.',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 4B & 4C',
            title: 'Penggumpalan Lateks oleh Asid & Penghasilan Getah Tervulkan (Tanpa Pemanasan Keras)',
            aim: 'Mengkaji kesan asid etanoik dan larutan ammonia terhadap penggumpalan lateks serta menyediakan getah tervulkan menggunakan larutan disulfur diklorida dalam metilbenzena.',
            inference: 'Ion $H^+$ menyebabkan penggumpalan manakala ion $OH^-$ menghalangnya; sulfur merangkai silang rantai poliisoprena.',
            hypothesis: 'Asid menggumpalkan lateks dengan cepat manakala larutan ammonia menghalang penggumpalan; getah tervulkan lebih kenyal daripada getah tak tervulkan.',
            variables: {
              manipulated: 'Kehadiran asid etanoik vs larutan ammonia / Jenis jalur getah (tervulkan vs tak tervulkan)',
              responding: 'Keadaan lateks (menggumpal / kekal cecair) / Pemanjangan kekal selepas pemberat dialihkan',
              fixed: 'Isi padu lateks / Panjang asal jalur getah dan jisim pemberat digantung',
            },
            setupLogic: 'Dalam makmal sekolah, jalur getah asli dicelup sebentar ke dalam **larutan disulfur diklorida ($S_2Cl_2$) dalam pelarut metilbenzena** (di dalam kebuk wasap kerana wapnya bertoksik) lalu dikeringkan sebagai kaedah selamat pemvulkanan pada suhu bilik.',
            expectedResult: 'Jalur getah tervulkan kembali tepat ke panjang asal selepas pemberat ditanggalkan, manakala getah tak tervulkan kekal memanjang.',
            conclusion: 'Asid menggumpalkan lateks melalui peneutralan cas membran protein; pemvulkanan meningkatkan kekenyalan melalui pembentukan rangkai silang sulfur.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Menaakul Eksperimen Kekenyalan Getah Tervulkan vs Tak Tervulkan',
          problem:
            'Dua jalur getah $P$ dan $Q$ sepanjang $10.0\\text{ cm}$ digantung pemberat $100\\text{ g}$ selama 2 minit kemudian pemberat ditanggalkan. Panjang $P$ selepas beban ditanggalkan ialah $10.0\\text{ cm}$, manakala $Q$ ialah $11.4\\text{ cm}$. Kenal pasti $P$ dan $Q$ serta terangkan perbezaannya pada peringkat molekul.',
          given: ['$P$: panjang akhir $10.0\\text{ cm}$ (kembali sepenuhnya ke panjang asal)', '$Q$: panjang akhir $11.4\\text{ cm}$ (mengalami pemanjangan kekal $1.4\\text{ cm}$)'],
          formulaLatex: '\\text{Getah } P \\text{ mempunyai rangkai silang } -S-S- \\implies \\text{kembali ke asal}',
          formulaWhy: 'Rangkai silang sulfur bertindak sebagai "tali ingatan" yang menarik balik rantai polimer selepas beban dibuang.',
          substituteLatex: 'P = \\text{Getah tervulkan}; \\qquad Q = \\text{Getah asli tak tervulkan}',
          answer: '$P$ ialah getah tervulkan; $Q$ ialah getah asli tak tervulkan. Dalam $P$, rangkai silang sulfur menghalang rantai polimer daripada menggelongsor secara kekal melepasi satu sama lain dan menarik rantai kembali ke kedudukan asal apabila daya regangan dialihkan.',
          trapAlert: 'Selain rangkai silang sulfur ($S_2Cl_2$/sulfur), ketahui juga pemvulkanan bebas sulfur terkini (menggunakan **peroksida, sinaran gama, atau oksida logam** seperti $ZnO$/$MgO$) yang menghasilkan getah perubatan bebas alahan sulfur!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah nama IUPAC bagi monomer getah asli?',
            answer: '2-metilbut-1,3-diena (isoprena).',
          },
          {
            question: 'Mengapakah pekebun kecil mencampurkan larutan ammonia ke dalam baldi lateks sebelum dihantar ke kilang?',
            answer: 'Ion $OH^-$ daripada ammonia meneutralkan ion $H^+$ yang terhasil oleh bakteria supaya lateks kekal bercair dan tidak menggumpal.',
          },
          {
            question: 'Mengapakah getah asli menjadi keras dan rapuh jika dibiarkan terdedah lama di bawah cahaya matahari dan udara?',
            answer: 'Ikatan ganda dua $C=C$ pada rantai poliisoprena mudah dioksidakan oleh oksigen udara (terurai menjadi rantai pendek).',
          },
        ],
        fadedProblem: {
          prompt: 'Lateks dibiarkan terdedah semalaman di atas meja makmal tanpa sebarang bahan kimia tambahan.',
          step1GivenAndFormula: 'Bakteria daripada udara memasuki lateks dan menghasilkan asid laktik yang membebaskan ion $H^+$.',
          studentTask: 'Terangkan 3 langkah seterusnya yang menyebabkan lateks tersebut akhirnya menggumpal menjadi pepejal.',
          answerSteps: '(1) Ion $H^+$ meneutralkan cas negatif pada membran protein zarah getah; (2) Zarah-zarah getah tidak lagi saling menolak lalu berlanggar sesama sendiri sehingga membran protein pecah; (3) Molekul polimer getah membebaskan diri dan berbelit bersama membentuk gumpalan pepejal.',
        },
        transferQuestion: {
          question: 'Kilang sarung tangan pembedahan hospital memilih pemvulkanan menggunakan peroksida/sinaran berbanding sulfur konvensional. Berikan satu sebab kimia dan keselamatan pengguna.',
          answer: 'Pemvulkanan bebas sulfur membentuk ikatan rangkai silang karbon-karbon ($C-C$) terus antara rantai polimer tanpa residu sebatian sulfur/pemecut yang boleh mencetuskan tindak balas alahan kulit (dermatitis) pada doktor dan pesakit, di samping mengekalkan ketahanan haba yang lebih tinggi.',
        },
      },
    },
    {
      id: 'k5-4.3',
      chapterId: 'k5-bab-4',
      code: '4.3',
      title: 'Getah Sintetik',
      pageRef: 'm.s. 159–161',
      part1Anchor: {
        phenomenon:
          'Getah asli akan mengembang dan rosak jika terkena petrol, namun hos pam minyak petrol dan sarung tangan makmal nitril kekal utuh bertahun-tahun—kerana ahli kimia mereka bentuk getah sintetik khusus bagi setiap persekitaran ekstrem!',
        chapterConnection:
          'Melengkapkan Bab Polimer dengan mengenal pasti 5 jenis getah sintetik utama, padanan ciri-kegunaan dalam Kertas 2, serta inisiatif pengurusan sisa tayar & getah mesra alam.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrifan Getah Sintetik (Elastomer Buatan Manusia)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Getah sintetik ialah ' },
            { text: 'polimer sintetik yang bersifat kenyal (elastomer) yang dihasilkan melalui pempolimeran bahan kimia berasaskan petroleum', keyword: true },
            { text: ' untuk memiliki ketahanan lebih tinggi terhadap haba, minyak, pelarut organik dan pengoksidaan berbanding getah asli.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Getah Sintetik Tahan Minyak, Haba & Bahan Kimia Berbanding Getah Asli',
            cause: 'Monomer getah sintetik mengandungi kumpulan polar atau atom tidak reaktif seperti klorin (dalam neoprena), kumpulan nitril $-C\\equiv N$ (dalam nitril), atau tulang belakang ikatan kuat $Si-O$ (dalam getah silikon).',
            mechanism: 'Kumpulan polar dan struktur tepu/kurang $C=C$ ini tidak mudah bertindak balas dengan oksigen, ozon atau melarut/mengembang dalam pelarut hidrokarbon bukan polar seperti petrol dan minyak.',
            effect: 'Getah sintetik mengekalkan keanjalan dan kekuatan mekanikal pada suhu tinggi serta sentuhan berterusan dengan bahan api dan bahan kimia.',
          },
        ],
        tables: [
          {
            title: 'Lima Jenis Getah Sintetik Utama, Ciri Khas & Kegunaan (Jadual 4.3)',
            headers: ['Jenis Getah Sintetik', 'Sifat Khusus Unggul', 'Kegunaan Utama'],
            rows: [
              ['**Neoprena** (polikloroprena)', 'Tahan haba, tahan api, tahan minyak & pelarut organik', 'Hos bahan api petrol, tali sawat penghantar, pakaian menyelam, sarung tangan tahan api'],
              ['**Getah stirena-butadiena (SBR)**', 'Sangat tahan lasak & geseran, tahan haba lebih baik drpd getah asli', 'Tayar kenderaan, tapak kasut sukan'],
              ['**Getah silikon**', 'Tahan suhu ekstrem ($-60\\,^\\circ\\text{C}$ hingga $+250\\,^\\circ\\text{C}$), lengai secara biologi', 'Implan perubatan, tiub perubatan, acuan kek & peralatan masak'],
              ['**Tiokol**', 'Rintangan amat tinggi terhadap minyak, petrol & pelarut organik', 'Hos pam minyak, pengedap tangki bahan api kapal terbang'],
              ['**Getah nitril**', 'Amat tahan minyak, gris dan pelarut serta kalis koyak', 'Sarung tangan makmal & perubatan (alternatif bebas alahan lateks), pengedap minyak (O-ring)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Perbandingan Cepat Pemilihan Getah: Asli vs Sintetik vs Mesra Alam',
            latex: '\\text{Getah Asli (kekenyalan/serapan kejutan)} \\;\\longleftrightarrow\\; \\text{Getah Sintetik (tahan minyak/haba/lasak)}',
            symbols: [
              { symbol: '\\text{Ekoprena \\& Pureprena}', meaning: 'getah asli terubahsuai mesra alam oleh Lembaga Getah Malaysia (LGM)', unit: 'getah lestari' },
            ],
            appliesWhen: 'Menjawab soalan pemilihan bahan tayar, hos, sarung tangan makmal dan implan perubatan.',
            failsWhen: 'Perangkap SPM: Untuk **tayar pesawat atau kenderaan berat**, gabungan **getah asli + SBR** sering digunakan (getah asli menyerap hentakan kuat & kurang penumpukan haba dalaman; SBR memberikan ketahanan lasak permukaan bunga tayar!).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Memilih Getah Sesuai untuk Hos Pam Stesen Minyak vs Sarung Tangan Makmal',
          problem:
            'Seorang jurutera perlu memilih bahan bagi (i) hos pam minyak petrol dan (ii) acuan kek ketuhar suhu $220\\,^\\circ\\text{C}$. Cadangkan getah sintetik paling sesuai bagi kedua-dua kes dan terangkan sebabnya.',
          given: ['Kes (i): sentuhan berterusan dengan petrol (pelarut hidrokarbon)', 'Kes (ii): suhu tinggi $220\\,^\\circ\\text{C}$ dan sentuhan makanan'],
          formulaLatex: '\\text{(i) Neoprena / Tiokol} \\quad;\\quad \\text{(ii) Getah Silikon}',
          formulaWhy: 'Padankan kekangan persekitaran (pelarut petrol vs suhu tinggi tidak toksik) dengan kelebihan unik setiap polimer.',
          substituteLatex: '\\text{Getah asli gagal kerana mengembang dalam petrol dan melebur pada haba tinggi}',
          answer: '(i) **Neoprena atau Tiokol**, kerana tahan lasak serta tidak mengembang atau rosak apabila terdedah kepada minyak dan petrol; (ii) **Getah silikon**, kerana stabil dan tahan suhu sangat tinggi sehingga melebihi $220\\,^\\circ\\text{C}$ serta lengai/tidak bertoksik.',
          trapAlert: 'Elakkan menulis "getah sintetik" secara umum jika soalan mahukan nama khusus—namakan **Neoprena, SBR, Getah silikon, Tiokol atau Getah nitril** mengikut fungsi!',
        },
      ],
      part5DecisionTable: {
        title: 'Pengurusan Lestari Sisa Getah & Tayar Terpakai',
        rows: [
          {
            designChoice: 'Menoreh semula/menjadikan tayar lama sebagai serbuk getah untuk turapan jalan raya bergetah dan trek sukan',
            scientificReason: 'Getah sintetik tervulkan tidak terbiodegradasi; guna semula fizikal mengelakkan pembuangan di tapak pelupusan dan mengurangkan pembiakan nyamuk Aedes.',
          },
          {
            designChoice: 'Pirolisis terkawal (pemanasan tanpa oksigen) tayar terpakai di loji industri',
            scientificReason: 'Menukar tayar terpakai kepada minyak bahan api, karbon hitam dan keluli tanpa membebaskan asap toksik ke udara berbanding pembakaran terbuka.',
          },
          {
            designChoice: 'Penggunaan getah mesra alam seperti Ekoprena (getah asli terepoksida) dalam tayar hijau',
            scientificReason: 'Dihasilkan daripada sumber boleh baharu (pokok getah) dengan rintangan golekan rendah untuk menjimatkan bahan api kenderaan.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah jenis getah sintetik utama dalam pembuatan tayar kenderaan?',
            answer: 'Getah stirena-butadiena (SBR).',
          },
          {
            question: 'Sarung tangan berwarna biru/ungu di makmal kimia dan klinik diperbuat daripada getah sintetik apa, dan mengapa ia dipilih?',
            answer: 'Getah nitril, kerana ia sangat tahan minyak/pelarut serta tidak menyebabkan alahan protein lateks.',
          },
          {
            question: 'Apakah keburukan utama penggunaan getah sintetik terhadap alam sekitar?',
            answer: 'Kebanyakan getah sintetik tidak terbiodegradasi (kekal berpuluh tahun di tapak pelupusan) dan membebaskan asap bertoksik jika dibakar secara terbuka.',
          },
        ],
        fadedProblem: {
          prompt: 'Hos getah asli yang dipasang pada pam petrol mula membengkak, menjadi lembut dan bocor selepas seminggu.',
          step1GivenAndFormula: 'Petrol ialah pelarut organik bukan polar yang meresap ke dalam rantai poliisoprena getah asli.',
          studentTask: 'Cadangkan satu getah sintetik gantian yang sesuai dan jelaskan dua kelebihannya.',
          answerSteps: 'Gantikan dengan **neoprena** (atau tiokol) kerana ia tahan terhadap petrol/minyak pelarut organik serta lebih tahan haba dan pengoksidaan berbanding getah asli.',
        },
        transferQuestion: {
          question: 'Mengapakah getah silikon digunakan untuk implan perubatan dalam badan manusia berbanding getah asli tervulkan atau PVC?',
          answer: 'Getah silikon mempunyai tulang belakang siloksan ($-Si-O-$) yang sangat lengai secara kimia dan serasi dengan tisu biologi (biocompatible), tahan proses pensterilan wap suhu tinggi, serta tidak membebaskan sebatian sulfur atau pemplastik toksik ke dalam badan.',
        },
      },
    },
  ],
};
