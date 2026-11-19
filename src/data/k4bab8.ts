import type { ChapterContent } from '../types/textbook';

export const k4bab8: ChapterContent = {
  id: 'k4-bab-8',
  subject: 'kimia',
  formLevel: 4,
  number: 8,
  title: 'Bahan Buatan dalam Industri',
  pageRange: 'm.s. 252–274',
  overview:
    'Mempelajari tujuan pengaloian, susunan atom aloi vs logam tulen, komposisi dan kegunaan 4 jenis kaca, seramik tradisional vs seramik termaju, serta bahan komposit berprestasi tinggi termasuk superkonduktor YBCO.',
  subtopics: [
    {
      id: 'k4-8.1',
      chapterId: 'k4-bab-8',
      code: '8.1',
      title: 'Aloi dan Kepentingannya',
      pageRef: 'm.s. 254–259',
      part1Anchor: {
        phenomenon:
          'Besi tulen mudah membengkok dan berkarat, manakala aluminium tulen terlalu lembut untuk dijadikan badan kapal terbang — dengan mencampurkan beberapa peratus atom asing sahaja, terhasillah keluli dan duralumin yang luar biasa kuat!',
        chapterConnection:
          'Menghubungkan konsep susunan atom logam kepada kejuruteraan bahan (aloi dan superkonduktor) dalam industri pembinaan dan pengangkutan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrif Aloi',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Aloi ialah ' },
            { text: 'campuran dua atau lebih unsur yang mana unsur utamanya ialah logam', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Aloi Lebih Keras daripada Logam Tulen (Skema 4-Markah SPM)',
            cause: 'Atom-atom dalam logam tulen mempunyai saiz yang sama dan tersusun teratur dalam lapisan sehingga mudah menggelongsor apabila dikenakan daya.',
            mechanism: 'Dalam aloi, kehadiran atom asing yang berlainan saiz mengganggu susunan teratur lapisan atom logam.',
            effect: 'Lapisan atom menjadi sukar untuk menggelongsor apabila daya dikenakan $\\to$ aloi lebih keras dan kuat.',
          },
        ],
        tables: [
          {
            title: 'Enam Aloi Wajib KSSM: Komposisi, Sifat & Kegunaan (Jadual 8.3)',
            headers: ['Aloi', 'Komposisi Utama', 'Sifat & Kegunaan'],
            rows: [
              ['Duralumin', '$93\\%\\ Al, 3\\%\\ Cu, 3\\%\\ Mg, 1\\%\\ Mn$', 'Ringan, kuat, tahan karat → Badan kapal terbang, kereta api laju'],
              ['Gangsa', '$90\\%\\ Cu, 10\\%\\ Sn$', 'Keras, tahan kakisan, berkilat → Tugu, pingat, loceng, duit syiling'],
              ['Loyang', '$70\\%\\ Cu, 30\\%\\ Zn$', 'Lebih keras daripada kuprum, berkilat → Alat muzik, tombol pintu, kunci'],
              ['Keluli', '$98\\%\\ Fe, 0.2\\text{–}2\\%\\ C$', 'Sangat keras dan kuat → Landasan kereta api, jambatan, rangka bangunan'],
              ['Keluli nirkarat', '$73\\%\\ Fe, 18\\%\\ Cr, 8\\%\\ Ni, 1\\%\\ C$', 'Berkilat, tidak berkarat → Peralatan pembedahan, sudu garpu, singki'],
              ['Piuter', '$95\\%\\ Sn, 3.5\\%\\ Sb, 1.5\\%\\ Cu$', 'Berkilat, tidak mudah pudar → Cenderamata, piala, barang hiasan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tiga Tujuan Utama Pengaloian',
            latex: '\\text{Aloi} \\Rightarrow \\text{(1) Menambah kekerasan/kekuatan, (2) Mencegah kakisan, (3) Memperbaiki rupa bentuk}',
            symbols: [
              { symbol: '\\text{Atom asing}', meaning: 'saiz lebih besar atau kecil daripada atom logam induk', unit: '—' },
            ],
            appliesWhen: 'Menjawab tujuan pengaloian atau melukis susunan atom aloi.',
            failsWhen: 'Perangkap lukisan rajah aloi: pastikan atom-atom logam induk tidak lagi tersusun dalam barisan lurus sempurna — mesti nampak terganggu oleh atom asing yang nyata berbeza saiz!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-alloy-lattice',
            title: 'Susunan Atom Logam Tulen vs Aloi',
            whatItShows: 'Kehadiran atom asing berlainan saiz mengganggu keteraturan lapisan atom dan menyekat gelongsoran apabila diketuk.',
            axisOrRule: 'Bandingkan lapisan lurus logam tulen di kiri dengan kekisi terganggu aloi di kanan.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 8.1',
            title: 'Membandingkan Ketahanan Kakisan dan Kekerasan Aloi dengan Logam Tulen',
            aim: 'Membandingkan kekerasan (diameter lekuk bebola keluli) dan ketahanan kakisan antara gangsa/keluli nirkarat dengan kuprum/besi tulen.',
            inference: 'Aloi lebih keras dan lebih tahan kakisan daripada logam tulennya.',
            hypothesis: 'Gangsa menghasilkan diameter lekuk yang lebih kecil daripada kuprum apabila pemberat dijatuhkan ke atas bebola keluli.',
            variables: {
              manipulated: 'Jenis bongkah logam (gangsa vs kuprum tulen)',
              responding: 'Diameter purata lekuk pada bongkah logam (mm)',
              fixed: 'Jisim pemberat ($1\\text{ kg}$), ketinggian jatuhan ($50\\text{ cm}$), saiz bebola keluli',
            },
            setupLogic: 'Lekatkan bebola keluli di atas bongkah kuprum dan jatuhkan pemberat $1\\text{ kg}$ dari ketinggian tetap $50\\text{ cm}$; ukur diameter lekuk dan ulang di kawasan berlainan untuk min, kemudian ulang pada bongkah gangsa.',
            expectedResult: 'Diameter lekuk pada gangsa lebih kecil daripada kuprum; paku keluli nirkarat tidak berkarat dalam air.',
            conclusion: 'Aloi lebih keras dan lebih tahan kakisan berbanding logam tulennya.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Skema Lengkap Kekerasan Keluli Berbanding Besi Tulen',
          problem:
            'Keluli terbentuk apabila sejumlah kecil atom karbon dimasukkan di celah-celah atom besi. Terangkan mengapa keluli jauh lebih keras daripada besi tulen.',
          given: ['Atom besi ($Fe$) jauh lebih besar daripada atom karbon ($C$)'],
          formulaLatex: '\\text{Atom } C \\text{ lebih kecil} \\Rightarrow \\text{Ganggu susunan teratur } Fe',
          formulaWhy: 'Saiz atom asing yang berbeza menghalang lapisan daripada menggelongsor.',
          substituteLatex: '\\text{Besi tulen: saiz atom sama, mudah menggelongsor}',
          answer: 'Dalam besi tulen, atom bersaiz sama dan tersusun secara teratur dalam lapisan yang mudah menggelongsor apabila daya dikenakan. Dalam keluli, atom karbon yang berlainan saiz (lebih kecil) mengganggu susunan teratur lapisan atom besi, menghalang lapisan atom daripada menggelongsor antara satu sama lain.',
          trapAlert: 'Sentiasa sebut **kedua-dua** pihak: mengapa logam tulen lembut DAN bagaimana atom asing dalam aloi menghalang gelongsoran!',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Aloi dalam Kejuruteraan & Pengangkutan',
        rows: [
          {
            designChoice: 'Memilih Duralumin bagi badan pesawat berbanding keluli atau aluminium tulen',
            scientificReason: 'Duralumin jauh lebih ringan (ketumpatan rendah) daripada keluli dan jauh lebih kuat serta tahan karat daripada aluminium tulen.',
          },
          {
            designChoice: 'Memilih Keluli nirkarat bagi peralatan pembedahan dan singki dapur',
            scientificReason: 'Kromium membentuk lapisan oksida pelindung yang menjadikan keluli nirkarat tahan karat dan mudah disterilkan.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah unsur asing yang dicampur dengan kuprum untuk membentuk gangsa dan loyang?',
            answer: 'Gangsa: Stanum/timah ($Sn$); Loyang: Zink ($Zn$).',
          },
          {
            question: 'Mengapakah pemberat dijatuhkan dari ketinggian yang sama dalam Eksperimen 8.1?',
            answer: 'Untuk memastikan daya/tenaga hentaman ke atas bebola keluli dimalarkan bagi ujian yang adil.',
          },
          {
            question: 'Namakan aloi yang digunakan dalam badan kapal terbang dan alat pembedahan.',
            answer: 'Duralumin (kapal terbang) dan keluli nirkarat (alat pembedahan).',
          },
        ],
        fadedProblem: {
          prompt: 'Diameter lekuk pada bongkah kuprum ialah $3.4\\text{ mm}$ manakala pada loyang ialah $2.1\\text{ mm}$.',
          step1GivenAndFormula: 'Diameter lekuk lebih kecil menandakan rintangan terhadap lekukan lebih tinggi (lebih keras).',
          studentTask: 'Nyatakan bongkah manakah lebih keras dan terangkan sebabnya pada aras atom.',
          answerSteps: 'Loyang lebih keras. Kehadiran atom zink yang berlainan saiz dengan atom kuprum mengganggu susunan teratur lapisan atom kuprum dan menghalangnya daripada mudah menggelongsor.',
        },
        transferQuestion: {
          question: 'Mengapakah pengaloian tidak mengubah hakikat bahawa logam masih boleh mengkonduksikan elektrik?',
          answer: 'Kerana dalam aloi, ikatan logam dengan lautan elektron yang dinyahsetempatkan masih wujud membolehkan elektron bergerak bebas membawa cas elektrik.',
        },
      },
    },
    {
      id: 'k4-8.2',
      chapterId: 'k4-bab-8',
      code: '8.2',
      title: 'Komposisi Kaca dan Kegunaannya',
      pageRef: 'm.s. 260–262',
      part1Anchor: {
        phenomenon:
          'Tingkap rumah pecah apabila disiram air mendidih, tetapi kelalang kon makmal boleh diletakkan terus di atas api penunu Bunsen! Apakah bahan tambahan yang mengubah rintangan haba kaca?',
        chapterConnection:
          'Membandingkan komponen utama silika ($SiO_2$) serta 4 jenis kaca dalam industri dan makmal.',
      },
      part2SacredDefinitions: [
        {
          title: 'Komponen Asas & Sifat Kaca',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kaca dihasilkan dengan meleburkan ' },
            { text: 'silika (silikon dioksida, $SiO_2$)', keyword: true },
            { text: ' bersama bahan kimia lain; sifat asasnya ialah ' },
            { text: 'keras tetapi rapuh, lut sinar, lengai secara kimia dan penebat haba/elektrik', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Penambahan Boron Trioksida ($B_2O_3$) Menghasilkan Kaca Borosilikat',
            cause: 'Kaca soda kapur mengembang banyak apabila dipanaskan dan mudah retak akibat kejutan haba.',
            mechanism: 'Boron trioksida menurunkan pekali pengembangan terma kaca.',
            effect: 'Kaca borosilikat tahan haba melampau serta perubahan suhu mendadak tanpa retak (sesuai untuk kelalang makmal dan bekas ketuhar).',
          },
        ],
        tables: [
          {
            title: 'Empat Jenis Kaca KSSM: Komposisi, Sifat & Kegunaan',
            headers: ['Jenis Kaca', 'Komposisi', 'Sifat Khas & Kegunaan'],
            rows: [
              ['1. Kaca silika terlakur', 'Silika ($SiO_2$) tulen ($\\approx 100\\%$)', 'Takat lebur amat tinggi, membenarkan sinar UV menembusi → Kanta teleskop, gentian optik'],
              ['2. Kaca soda kapur', 'Silika + Natrium karbonat ($Na_2CO_3$) + Kalsium karbonat ($CaCO_3$)', 'Takat lebur rendah, mudah dibentuk tetapi tidak tahan kejutan haba → Botol, cermin tingkap, mentol'],
              ['3. Kaca borosilikat (Pyrex)', 'Silika + Boron trioksida ($B_2O_3$) + $Na_2O$ + $Al_2O_3$', 'Tahan suhu tinggi, tidak mudah pecah oleh perubahan suhu mendadak, tahan bahan kimia → Radas kaca makmal, peralatan dapur ketuhar'],
              ['4. Kaca plumbum (Kaca kristal)', 'Silika + Plumbum(II) oksida ($PbO$) + $Na_2O$', 'Indeks biasan tinggi (berkilau/berkilat), ketumpatan tinggi → Prisma kaca, kanta optik, barangan kristal hiasan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Komponen Utama Semua Kaca',
            latex: '\\text{Pasir (Silika)} = SiO_2 \\;(\\text{Struktur kovalen gergasi})',
            symbols: [
              { symbol: 'SiO_2', meaning: 'silikon(IV) oksida', unit: '—' },
            ],
            appliesWhen: 'Mengenal pasti bahan mentah asas semua 4 jenis kaca.',
            failsWhen: 'Jangan kelirukan kaca soda kapur (botol & tingkap) dengan kaca borosilikat (bikar & kelalang makmal)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Memilih Jenis Kaca yang Tepat untuk Makmal vs Prisma',
          problem:
            'Mengapakah bikar makmal diperbuat daripada kaca borosilikat dan bukannya kaca soda kapur? Dan kaca manakah sesuai dijadikan prisma kaca yang memancarkan pelangi berkilau?',
          given: ['Bikar makmal sentiasa dipanaskan dan disejukkan', 'Prisma perlukan indeks biasan tinggi'],
          formulaLatex: '\\text{Bikar} \\to \\text{Borosilikat} \\;(+B_2O_3) \\quad|\\quad \\text{Prisma} \\to \\text{Kaca plumbum} \\;(+PbO)',
          formulaWhy: 'Setiap bahan tambah memberikan sifat terma atau optik tertentu.',
          substituteLatex: '\\text{Pekali pengembangan rendah vs Indeks biasan tinggi}',
          answer: 'Bikar menggunakan kaca borosilikat kerana tahan suhu tinggi serta tidak mudah retak akibat perubahan suhu mendadak. Prisma menggunakan kaca plumbum kerana mempunyai indeks biasan yang tinggi.',
          trapAlert: 'Sebut nama bahan kimia tambahannya apabila soalan meminta komposisi: **$B_2O_3$** untuk borosilikat dan **$PbO$** untuk kaca plumbum.',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Pemilihan Jenis Kaca dalam Industri',
        rows: [
          {
            designChoice: 'Menggunakan kaca borosilikat untuk membuat radas makmal dan bekas ketuhar',
            scientificReason: 'Mempunyai pekali pengembangan terma rendah, tahan kejutan suhu mendadak dan lengai terhadap asid/bahan kimia.',
          },
          {
            designChoice: 'Menggunakan kaca plumbum untuk kanta dan candelier kristal',
            scientificReason: 'Kandungan $PbO$ menghasilkan indeks biasan cahaya yang sangat tinggi supaya kelihatan berkilauan.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah komponen kimia utama yang terdapat dalam semua jenis kaca?',
            answer: 'Silika atau silikon(IV) oksida ($SiO_2$).',
          },
          {
            question: 'Namakan sebatian yang ditambahkan kepada kaca untuk menghasilkan kaca borosilikat dan kaca plumbum.',
            answer: 'Boron trioksida ($B_2O_3$) untuk borosilikat; Plumbum(II) oksida ($PbO$) untuk kaca plumbum.',
          },
          {
            question: 'Jenis kaca manakah digunakan untuk membuat tingkap dan botol minuman?',
            answer: 'Kaca soda kapur.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebuah kelalang kaca pecah apabila diletakkan di atas penunu Bunsen manakala kelalang lain kekal utuh.',
          step1GivenAndFormula: 'Kaca yang tidak tahan perubahan suhu mendadak ialah kaca soda kapur.',
          studentTask: 'Kenal pasti jenis kaca kelalang yang pecah dan kelalang yang tahan api itu.',
          answerSteps: 'Kelalang yang pecah ialah kaca soda kapur; kelalang yang utuh ialah kaca borosilikat.',
        },
        transferQuestion: {
          question: 'Mengapakah lampu UV di makmal pensterilan menggunakan sarung kaca silika terlakur dan bukannya kaca tingkap biasa?',
          answer: 'Kerana kaca silika terlakur membenarkan cahaya ultraungu (UV) menembusinya dengan baik dan tahan haba yang sangat tinggi.',
        },
      },
    },
    {
      id: 'k4-8.3',
      chapterId: 'k4-bab-8',
      code: '8.3',
      title: 'Komposisi Seramik dan Kegunaannya',
      pageRef: 'm.s. 262–265',
      part1Anchor: {
        phenomenon:
          'Daripada pasu tanah liat sehinggalah cakera brek kereta lumba, sendi tulang tiruan dan perisai haba kapal angkasa — seramik bukan sekadar tembikar dapur!',
        chapterConnection:
          'Membezakan seramik tradisional (kaolin) dengan seramik termaju ($Al_2O_3, SiC$) yang menggantikan logam dalam kejuruteraan ekstrem.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrif Seramik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Seramik ialah ' },
            { text: 'pepejal yang terdiri daripada bahan bukan organik dan bukan logam', keyword: true },
            { text: ' yang dihasilkan melalui ' },
            { text: 'pembentukan dan pengerasan menggunakan pemanasan pada suhu yang tinggi', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Seramik Keras, Tahan Haba Tinggi dan Penebat Elektrik',
            cause: 'Atom-atom dalam seramik diikat oleh ikatan ion yang kuat dan ikatan kovalen yang kuat.',
            mechanism: 'Tiada elektron bebas bergerak dan memerlukan tenaga haba amat tinggi untuk mengatasi ikatan kuat tersebut, tetapi sukar dibengkokkan (rapuh).',
            effect: 'Seramik mempunyai takat lebur amat tinggi, tahan mampatan, lengai secara kimia dan bertindak sebagai penebat haba serta elektrik.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Seramik Tradisional vs Seramik Termaju',
            headers: ['Kategori', 'Bahan Mentah', 'Sifat & Contoh Kegunaan'],
            rows: [
              ['Seramik Tradisional', 'Tanah liat (kaolin: aluminium silikat terhidrat, $Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O$)', 'Penebat elektrik & haba, murah, mudah dibentuk bila basah → Bata, jubin, tembikar, pinggan mangkuk, simen'],
              ['Seramik Termaju', 'Bahan bukan organik tulen seperti alumina ($Al_2O_3$), zirkonia ($ZrO_2$), silikon karbida ($SiC$), titanium karbida ($TiC$)', 'Rintangan haba & lelasan ekstrem, superkonduktor → Cakera pemotong ($SiC$), cakera brek, sendi pinggul tiruan/gigi ($ZrO_2$), magnet pengimejan MRI'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Ikatan dalam Seramik',
            latex: '\\text{Seramik} = \\text{Ikatan ion kuat} + \\text{Ikatan kovalen kuat (Tiada } e^- \\text{ bebas)}',
            symbols: [
              { symbol: 'Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O', meaning: 'kaolin (tanah liat putih)', unit: '—' },
            ],
            appliesWhen: 'Menerangkan sifat fizik seramik (penebat, keras, rapuh, takat lebur tinggi).',
            failsWhen: 'Jangan tertukar: seramik BUKAN aloi dan TIDAK boleh ditempa seperti logam!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Aplikasi Seramik Termaju dalam Perubatan & Kejuruteraan',
          problem:
            'Nyatakan mengapa zirkonia dan alumina dipilih untuk implan tulang/gigi serta cakera brek berprestasi tinggi berbanding logam biasa.',
          given: ['Seramik termaju: lengai kimia, tahan lelasan, tahan haba melampau'],
          formulaLatex: '\\text{Implan} \\to \\text{Lengai/biokeserasian}; \\quad \\text{Cakera brek} \\to SiC \\text{ tahan haba}',
          formulaWhy: 'Tidak bertindak balas dengan bendalir badan dan tidak cair pada suhu geseran melampau.',
          substituteLatex: '\\text{Ikatan ion \\& kovalen kuat}',
          answer: 'Alumina dan zirkonia bersifat lengai secara kimia (tidak berkarat atau bertindak balas dengan bendalir badan) dan sangat keras. Silikon karbida ($SiC$) tahan haba tinggi dan geseran melampau tanpa ubah bentuk.',
          trapAlert: 'Dalam Kertas 1, pastikan tahu **kaolin** ($Al_2O_3\\cdot 2SiO_2\\cdot 2H_2O$) ialah bahan asas seramik tradisional, manakala **$SiC$ / $Al_2O_3$** ialah seramik termaju.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua jenis bahan yang TIDAK membentuk seramik mengikut takrif rasminya?',
            answer: 'Seramik terdiri daripada bahan BUKAN organik dan BUKAN logam.',
          },
          {
            question: 'Namakan mineral utama dalam tanah liat bagi seramik tradisional.',
            answer: 'Kaolin (aluminium silikat terhidrat).',
          },
          {
            question: 'Berikan dua contoh kegunaan seramik termaju.',
            answer: 'Cakera pemotong ($SiC$), cakera brek kereta lumba, sendi tulang/implan gigi, atau penebat haba ulang-alik angkasa.',
          },
        ],
        fadedProblem: {
          prompt: 'Palam pencucuh enjin dan penebat tiang kabel voltan tinggi dibuat daripada seramik alumina ($Al_2O_3$).',
          step1GivenAndFormula: 'Alumina mempunyai takat lebur sangat tinggi dan tiada elektron atau ion bebas bergerak pada keadaan pepejal.',
          studentTask: 'Nyatakan dua sifat seramik yang menjadikannya sesuai bagi kedua-dua kegunaan tersebut.',
          answerSteps: 'Penebat elektrik yang baik (mencegah kebocoran arus voltan tinggi) dan tahan suhu yang sangat tinggi tanpa melebur.',
        },
        transferQuestion: {
          question: 'Mengapakah seramik tradisional mempunyai sifat keras tetapi rapuh apabila dijatuhkan?',
          answer: 'Kerana ion-ion dalam seramik diikat kuat dalam kedudukan tetap; apabila dikenakan hentakan kuat, lapisan ion tergelincir dan ion yang sama cas bertentangan menolak antara satu sama lain sehingga retak serta pecah.',
        },
      },
    },
    {
      id: 'k4-8.4',
      chapterId: 'k4-bab-8',
      code: '8.4',
      title: 'Bahan Komposit dan Kepentingannya',
      pageRef: 'm.s. 265–271',
      part1Anchor: {
        phenomenon:
          'Konkrit kuat menahan mampatan tetapi patah apabila diregangkan; plastik ringan tetapi mudah retak. Dengan menggabungkan dua bahan berbeza dalam satu struktur, jurutera mencipta bahan komposit yang mengatasi prestasi kedua-dua komponen asalnya!',
        chapterConnection:
          'Melengkapkan Bab 8 dengan lima bahan komposit utama dalam pembinaan, telekomunikasi, kanta dan perubatan moden.',
      },
      part2SacredDefinitions: [
        {
          title: 'Bahan Komposit',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Bahan komposit ialah bahan baharu yang dihasilkan daripada ' },
            { text: 'gabungan dua atau lebih bahan bukan homogen', keyword: true },
            { text: ' iaitu ' },
            { text: 'bahan matriks dan bahan pengukuhan', keyword: true },
            { text: ', yang menghasilkan ' },
            { text: 'sifat lebih baik daripada komponen asalnya', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Komponen Matriks + Pengukuhan Mengatasi Bahan Asal',
            cause: 'Setiap bahan tunggal mempunyai kelemahan tersendiri (cth: konkrit lemah daya regangan; gentian kaca rapuh jika bersendirian).',
            mechanism: 'Bahan matriks mengelilingi dan mengikat bahan pengukuhan bersama, menyebarkan beban dan melindungi gentian daripada kerosakan.',
            effect: 'Terhasil bahan komposit yang serentak ringan, tahan regangan, tahan mampatan dan tahan kakisan.',
          },
        ],
        tables: [
          {
            title: 'Lima Bahan Komposit Wajib KSSM & Komponennya',
            headers: ['Bahan Komposit', 'Matriks + Bahan Pengukuhan', 'Sifat Baharu & Kegunaan'],
            rows: [
              ['1. Konkrit diperkukuhkan', 'Konkrit (simen+pasir+batu) + Tetulang keluli/jejaring dawai', 'Menahan daya mampatan & daya regangan amat tinggi → Jambatan, empangan, bangunan pencakar langit'],
              ['2. Kaca gentian', 'Plastik/resin poliester + Gentian kaca', 'Ringan, kuat regangan, tahan kakisan, mudah dibentuk → Badan bot, topi keledar, raket, tangki air'],
              ['3. Gentian optik', 'Kaca/plastik berindeks biasan berbeza (Teras silika + Salutan kaca + Jaket plastik)', 'Menghantar data kelajuan cahaya via pantulan dalam penuh, ringan → Kabel telekomunikasi & endoskop'],
              ['4. Kaca fotokromik', 'Kaca silika + Hablur argentum klorida ($AgCl$) & kuprum(I) klorida ($CuCl$)', 'Menjadi gelap dalam cahaya UV terang dan cerah semula dalam gelap → Kanta cermin mata pelindung UV'],
              ['5. Superkonduktor (YBCO)', 'Komposit seramik $YBa_2Cu_3O_7$ (Ytrium-Barium-Kuprum-Oksida)', 'Tiada rintangan elektrik ($R=0$) pada suhu rendah ($N_2$ cecair) → Kereta api apungan Maglev, mesin MRI, pemecut zarah'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Berbalik dalam Kaca Fotokromik',
            latex: 'Ag^+ + Cl^- \\xrightleftharpoons[\\text{Gelap } (Cu^+)]{ \\text{Cahaya UV} } Ag\\text{ (gelap)} + Cl',
            symbols: [
              { symbol: 'AgCl', meaning: 'argentum klorida peka cahaya UV', unit: '—' },
              { symbol: 'CuCl', meaning: 'kuprum(I) klorida membantu pembalikan semula', unit: '—' },
            ],
            appliesWhen: 'Menerangkan bagaimana kaca fotokromik berubah warna mengikut keamatan UV.',
            failsWhen: 'Jangan keliru antara **Kaca gentian** (bot, topi keledar) dengan **Gentian optik** (kabel internet pantulan dalam penuh)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Banding Beza Komponen Asal vs Bahan Komposit (Kaca Gentian)',
          problem:
            'Kaca gentian digunakan untuk membina badan bot laju. Bandingkan sifat kaca gentian dengan dua komponen asalnya (plastik dan gentian kaca).',
          given: ['Komponen 1: Plastik (ringan tetapi lemah)', 'Komponen 2: Gentian kaca (kuat regangan tetapi rapuh)'],
          formulaLatex: '\\text{Matriks plastik} + \\text{Pengukuhan gentian kaca} \\longrightarrow \\text{Kaca gentian}',
          formulaWhy: 'Gabungan menghasilkan kekuatan tegangan tinggi dengan ketumpatan rendah.',
          substituteLatex: '\\text{Lebih kuat daripada plastik; tidak mudah pecah berbanding kaca}',
          answer: 'Plastik tulen lemah dan mudah lentur, manakala gentian kaca mudah retak dan rapuh. Apabila digabungkan, kaca gentian menjadi jauh lebih kuat, ringan, tidak berkarat dan tahan hentakan.',
          trapAlert: 'Dalam Kertas 2, nyatakan sifat kedua-dua bahan asal dahulu SEBELUM menyatakan sifat unggul bahan komposit tersebut.',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Memilih Bahan Komposit dalam Kejuruteraan',
        rows: [
          {
            designChoice: 'Menanam batang keluli di dalam tiang konkrit jambatan (Konkrit diperkukuhkan)',
            scientificReason: 'Konkrit tahan mampatan tetapi lemah daya regangan; keluli memberikan kekuatan regangan yang tinggi.',
          },
          {
            designChoice: 'Menggunakan kabel gentian optik menggantikan kabel kuprum telekomunikasi',
            scientificReason: 'Menghantar data berkapasiti tinggi dengan kehilangan isyarat amat minimum pada kelajuan cahaya tanpa gangguan elektromagnet.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua komponen struktur utama dalam setiap bahan komposit?',
            answer: 'Bahan matriks dan bahan pengukuhan.',
          },
          {
            question: 'Apakah bahan kimia yang terbenam di dalam kaca fotokromik?',
            answer: 'Argentum klorida ($AgCl$) dan kuprum(I) klorida ($CuCl$).',
          },
          {
            question: 'Mengapakah kereta api Maglev menggunakan bahan superkonduktor seperti YBCO?',
            answer: 'Superkonduktor mempunyai sifar rintangan elektrik ($R=0$) pada suhu genting, menghasilkan medan magnet amat kuat tanpa pembaziran haba.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebuah bot rekreasi mahu dibina dengan bahan yang ringan, kalis air, tidak berkarat dan sangat tahan hentakan.',
          step1GivenAndFormula: 'Matriks = resin plastik poliester; Pengukuhan = gentian kaca.',
          studentTask: 'Namakan bahan komposit sesuai dan berikan sebab pemilihannya berbanding keluli.',
          answerSteps: 'Kaca gentian; ia lebih ringan daripada keluli, tidak berkarat dalam air laut, dan mudah dibentuk kepada lengkungan badan bot.',
        },
        transferQuestion: {
          question: 'Adakah aloi seperti loyang boleh dikelaskan sebagai bahan komposit? Jelaskan perbezaannya.',
          answer: 'Tidak. Aloi ialah campuran atom logam yang bercampur secara homogen pada peringkat atom selepas dileburkan bersama, sedangkan bahan komposit menggabungkan dua bahan berbeza (bukan homogen) di mana matriks dan bahan pengukuhan masih kekal terpisah secara fizikal.',
        },
      },
    },
  ],
};
