import type { ChapterContent } from '../types/textbook';

export const k4bab4: ChapterContent = {
  id: 'k4-bab-4',
  subject: 'kimia',
  formLevel: 4,
  number: 4,
  title: 'Jadual Berkala Unsur',
  pageRange: 'm.s. 78–107',
  overview:
    'Memahami sejarah perkembangan Jadual Berkala Unsur, pengelasan Kumpulan 1–18 dan Kala 1–7, trend fizik serta kereaktifan Kumpulan 18, 1 dan 17, perubahan sifat merentasi Kala 3 (oksida bes → amfoterik → asid), serta 4 ciri istimewa Unsur Peralihan.',
  subtopics: [
    {
      id: 'k4-4.1',
      chapterId: 'k4-bab-4',
      code: '4.1',
      title: 'Perkembangan Jadual Berkala Unsur',
      pageRef: 'm.s. 80–82',
      part1Anchor: {
        phenomenon:
          'Sebelum tahun 1869, berpuluh-puluh unsur kelihatan seperti senarai rawak. Mendeleev begitu yakin dengan susunan berkalanya sehingga berani meninggalkan ruang kosong untuk meramal sifat galium dan germanium sebelum unsur itu ditemui!',
        chapterConnection:
          'Menjelaskan bagaimana penyusunan daripada jisim atom kepada nombor proton ($Z$) oleh Henry Moseley menghasilkan Jadual Berkala Moden.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Penyusunan Jadual Berkala Moden (Henry Moseley)',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Unsur-unsur dalam Jadual Berkala Unsur Moden disusun mengikut ' },
            { text: 'tertib nombor proton yang menaik', keyword: true },
            { text: ' dari kiri ke kanan dan atas ke bawah.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Henry Moseley Menggantikan Jisim Atom dengan Nombor Proton',
            cause: 'Mendeleev menyusun mengikut jisim atom menaik tetapi terpaksa menyongsangkan kedudukan seperti $Ar\\ (39.9)$ dan $K\\ (39.1)$.',
            mechanism: 'Kajian sinar-X Moseley membuktikan nombor proton ($Z$), bukan jisim atom, yang menentukan sifat berkala unsur.',
            effect: 'Argon ($Z=18$) berada di Kumpulan 18 dan Kalium ($Z=19$) di Kumpulan 1 secara konsisten tanpa pengecualian.',
          },
        ],
        tables: [
          {
            title: 'Sejarah 6 Ahli Sains Jadual Berkala Unsur',
            headers: ['Saintis', 'Sumbangan Utama'],
            rows: [
              ['1. Antoine Lavoisier', 'Mengelaskan unsur kepada 4 kumpulan (gas, bukan logam, logam, oksida logam)'],
              ['2. Johann Dobereiner', 'Mengelaskan unsur bertiga-tiga mengikut sifat kimia serupa (Hukum Triad)'],
              ['3. John Newlands', 'Menyusun ikut jisim atom menaik; sifat berulang pada setiap unsur kelapan (Hukum Oktaf)'],
              ['4. Lothar Meyer', 'Memplot graf isi padu atom melawan jisim atom untuk menunjukkan keberkalaan sifat fizik'],
              ['5. Dmitri Mendeleev', 'Menyusun ikut jisim atom menaik, meninggalkan ruang kosong & meramal unsur belum ditemui'],
              ['6. Henry Moseley', 'Menemui kepentingan nombor proton ($Z$); menyusun mengikut tertib nombor proton menaik (Jadual Moden)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Asas Hukum Berkala Moden',
            latex: '\\text{Sifat kimia unsur} \\longleftarrow \\text{Nombor proton } (Z) \\longrightarrow \\text{Susunan elektron valens}',
            symbols: [
              { symbol: 'Z', meaning: 'nombor proton', unit: '—' },
            ],
            appliesWhen: 'Semua 118 unsur dalam Jadual Berkala Unsur Moden.',
            failsWhen: 'Jangan katakan Jadual Berkala Moden disusun mengikut nombor nukleon atau jisim atom relatif menaik!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menilai Kelebihan Jadual Mendeleev vs Moseley',
          problem:
            'Mengapakah Mendeleev meninggalkan beberapa ruang kosong dalam jadual berkalanya?',
          given: ['Sebahagian unsur pada abad ke-19 belum lagi ditemui'],
          formulaLatex: '\\text{Ruang kosong} \\Rightarrow \\text{Ramalan sifat unsur baharu (cth: Eka-silikon = Ge)}',
          formulaWhy: 'Keberkalaan sifat menegak membolehkan ramalan jitu.',
          substituteLatex: '\\text{Mendeleev: jisim atom; Moseley: nombor proton}',
          answer: 'Untuk mengelakkan unsur diletakkan dalam kumpulan yang berlainan sifat kimia serta meramal sifat unsur yang belum ditemui pada waktu itu.',
          trapAlert: 'Dalam soalan SPM, bezakan Mendeleev (meninggalkan ruang kosong, ikut jisim atom) daripada Moseley (ikut nombor proton menaik).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah asas penyusunan Jadual Berkala Unsur Moden oleh Henry Moseley?',
            answer: 'Tertib nombor proton yang menaik.',
          },
          {
            question: 'Siapakah yang mencadangkan Hukum Triad dan Hukum Oktaf?',
            answer: 'Dobereiner (Triad) dan Newlands (Oktaf).',
          },
          {
            question: 'Apakah keberanian utama Dmitri Mendeleev dalam jadualnya?',
            answer: 'Meninggalkan ruang kosong untuk unsur yang belum ditemui serta meramalkan sifatnya.',
          },
        ],
        fadedProblem: {
          prompt: 'Telurium ($Te$, jisim atom $127.6$, $Z=52$) dan Iodin ($I$, jisim atom $126.9$, $Z=53$) menimbulkan masalah dalam susunan jisim atom.',
          step1GivenAndFormula: 'Susunan Moden bergantung pada nombor proton $Z$, bukan jisim atom.',
          studentTask: 'Terangkan mengapa Iodin diletakkan selepas Telurium dalam Jadual Berkala Moden.',
          answerSteps: 'Kerana unsur disusun mengikut tertib nombor proton menaik ($52 \\to 53$), dan sifat Iodin ($Z=53$) sepadan dengan halogen Kumpulan 17.',
        },
        transferQuestion: {
          question: 'Mengapakah Hukum Oktaf Newlands gagal bagi unsur selepas Kalsium ($Z > 20$)?',
          answer: 'Selepas kalsium, wujud unsur peralihan (10 unsur setiap siri) yang menyebabkan sifat kimia unsur tidak lagi berulang setiap lapan unsur.',
        },
      },
    },
    {
      id: 'k4-4.2',
      chapterId: 'k4-bab-4',
      code: '4.2',
      title: 'Susunan Unsur dalam Jadual Berkala Unsur Moden',
      pageRef: 'm.s. 82–84',
      part1Anchor: {
        phenomenon:
          'Daripada susunan elektron $2.8.7$ sahaja, anda boleh meneka serta-merta "alamat" klorin dalam Jadual Berkala tanpa menghafalnya: baris ke-3, lajur ke-17!',
        chapterConnection:
          'Menetapkan peraturan matematik tepat untuk menukar susunan elektron kepada nombor Kumpulan dan nombor Kala.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kumpulan & Kala',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Turus menegak dalam Jadual Berkala disebut ' },
            { text: 'Kumpulan (1 hingga 18)', keyword: true },
            { text: ' yang ditentukan oleh ' },
            { text: 'bilangan elektron valens', keyword: true },
            { text: '; baris mengufuk disebut ' },
            { text: 'Kala (1 hingga 7)', keyword: true },
            { text: ' yang ditentukan oleh ' },
            { text: 'bilangan petala berisi elektron', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Unsur dalam Kumpulan Sama Mempunyai Sifat Kimia Serupa',
            cause: 'Semua unsur dalam Kumpulan sama mempunyai bilangan elektron valens yang sama.',
            mechanism: 'Tindak balas kimia hanya melibatkan pemindahan atau perkongsian elektron valens untuk mencapai susunan stabil.',
            effect: 'Unsur sekumpulan (cth: Li, Na, K masing-masing 1 elektron valens) bertindak balas dengan cara serupa.',
          },
        ],
        tables: [
          {
            title: 'Formula Menentukan Kumpulan dan Kala daripada Susunan Elektron',
            headers: ['Bilangan Elektron Valens', 'Formula Nombor Kumpulan', 'Contoh'],
            rows: [
              ['1 atau 2 elektron valens', 'Kumpulan = Bilangan elektron valens', '$Na (2.8.1) \\to$ Kumpulan 1; $Mg (2.8.2) \\to$ Kumpulan 2'],
              ['3 hingga 8 elektron valens', 'Kumpulan = Bilangan elektron valens $+ 10$', '$Al (2.8.3) \\to$ Kumpulan 13; $Cl (2.8.7) \\to$ Kumpulan 17'],
              ['Pengecualian Helium ($2$)', 'Kumpulan 18 (bukan Kumpulan 2)', 'Petala pertama penuh (duplet stabil), sifat gas adi lengai'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penentuan Alamat Unsur ($Z = 1..20$)',
            latex: '\\text{Kala} = \\text{Bil. petala berisi } e^-, \\quad \\text{Kumpulan} = \\begin{cases} v & \\text{jika } v \\in \\{1,2\\} \\\\ v + 10 & \\text{jika } 3 \\le v \\le 8 \\end{cases}',
            symbols: [
              { symbol: 'v', meaning: 'bilangan elektron valens', unit: '—' },
            ],
            appliesWhen: 'Semua unsur utama kecuali Helium ($2 \\to$ Kumpulan 18).',
            failsWhen: 'Jangan campur 10 bagi Kumpulan 1 & 2, dan jangan letak Helium ($2$) di Kumpulan 2!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menentukan Kumpulan & Kala daripada Nombor Nukleon/Proton',
          problem:
            'Unsur $Y$ diwakili sebagai $^{31}_{15}Y$. Tentukan susunan elektron, Kumpulan, dan Kala bagi unsur $Y$.',
          given: ['$Z = 15$ (15 elektron bagi atom neutral $Y$)'],
          formulaLatex: '15\\ e^- \\rightarrow 2.8.5',
          formulaWhy: 'Ada 3 petala dan 5 elektron valens ($3 \\le 5 \\le 8$).',
          substituteLatex: '\\text{Kala} = 3, \\quad \\text{Kumpulan} = 5 + 10 = 15',
          answer: 'Susunan elektron $= 2.8.5$; berada dalam **Kumpulan 15** dan **Kala 3**.',
          trapAlert: 'Sentiasa kira daripada bilangan elektron ATOM NEUTRAL ($Z$), bukan daripada bilangan elektron ION (cth: jangan guna $2.8$ bagi $Mg^{2+}$ untuk mencari kedudukan $Mg$)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berapakah bilangan Kumpulan dan Kala dalam Jadual Berkala Moden?',
            answer: '18 Kumpulan dan 7 Kala.',
          },
          {
            question: 'Apakah kedudukan unsur yang mempunyai susunan elektron $2.8.4$?',
            answer: 'Kumpulan 14, Kala 3.',
          },
          {
            question: 'Mengapakah Helium ($2$) diletakkan di Kumpulan 18 walaupun mempunyai 2 elektron valens?',
            answer: 'Kerana petala pertamanya sudah penuh mencapai susunan elektron duplet yang stabil dan lengai.',
          },
        ],
        fadedProblem: {
          prompt: 'Ion $Q^-$ mempunyai susunan elektron $2.8.8$.',
          step1GivenAndFormula: 'Ion $Q^-$ terbentuk setelah atom $Q$ menerima $1$ elektron; maka atom $Q$ mempunyai $17$ elektron ($2.8.7$).',
          studentTask: 'Nyatakan Kumpulan dan Kala bagi unsur $Q$.',
          answerSteps: 'Atom $Q$ ($2.8.7$) mempunyai 3 petala dan 7 elektron valens $\\Rightarrow$ Kala 3, Kumpulan 17 ($7+10$).',
        },
        transferQuestion: {
          question: 'Adakah unsur $P$ ($Z=11$) dan unsur $R$ ($Z=19$) bertindak balas serupa dengan air? Jelaskan.',
          answer: 'Ya, kerana susunan elektron $P$ ialah $2.8.1$ dan $R$ ialah $2.8.8.1$; kedua-duanya mempunyai 1 elektron valens (Kumpulan 1).',
        },
      },
    },
    {
      id: 'k4-4.3',
      chapterId: 'k4-bab-4',
      code: '4.3',
      title: 'Unsur dalam Kumpulan 18',
      pageRef: 'm.s. 84–87',
      part1Anchor: {
        phenomenon:
          'Belon cuaca diisi dengan helium yang langsung tidak terbakar, lampu papan iklan bersinar dengan neon, manakala mentol filamen diisi dengan argon supaya filamen tidak terputus terbakar.',
        chapterConnection:
          'Menunjukkan takrif kestabilan elektron duplet/oktet yang menjadi matlamat setiap atom lain dalam Bab 5 (Ikatan Kimia).',
      },
      part2SacredDefinitions: [
        {
          title: 'Kestabilan Gas Adi (Lengai secara Kimia)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Unsur Kumpulan 18 wujud sebagai ' },
            { text: 'zarah monoatom dan lengai secara kimia', keyword: true },
            { text: ' kerana petala terluarnya sudah penuh mencapai ' },
            { text: 'susunan elektron duplet (He) atau oktet (Ne, Ar, Kr, Xe, Rn) yang stabil', keyword: true },
            { text: ', maka atom tidak menderma, menerima atau berkongsi elektron.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Takat Lebur & Takat Didih Gas Adi Meningkat Menuruni Kumpulan 18',
            cause: 'Menuruni Kumpulan 18 ($He \\to Rn$), bilangan petala berisi elektron bertambah.',
            mechanism: 'Saiz atom bertambah menyebabkan daya tarikan van der Waals antara atom menjadi lebih kuat.',
            effect: 'Lebih banyak tenaga haba diperlukan untuk mengatasi daya tarikan tersebut; takat lebur, takat didih dan ketumpatan meningkat.',
          },
        ],
        tables: [
          {
            title: 'Sifat Fizik dan Kegunaan Unsur Kumpulan 18',
            headers: ['Gas Adi', 'Susunan Elektron', 'Kegunaan Utama'],
            rows: [
              ['Helium ($He$)', '$2$ (duplet)', 'Mengisi belon kaji cuaca & tangki udara penyelam (ringan & tidak terbakar)'],
              ['Neon ($Ne$)', '$2.8$ (oktet)', 'Mengisi lampu papan iklan (cahaya merah jingga)'],
              ['Argon ($Ar$)', '$2.8.8$ (oktet)', 'Mengisi mentol elektrik & atmosfera lengai semasa mengimpal logam'],
              ['Kripton ($Kr$)', '$2.8.18.8$', 'Lampu denyar kamera kelajuan tinggi & laser rawatan retina mata'],
              ['Xenon ($Xe$)', '$2.8.18.18.8$', 'Lampu rumah api dan ubat bius perubatan'],
              ['Radon ($Rn$)', '$2.8.18.32.18.8$', 'Radioaktif; digunakan dalam rawatan radioterapi kanser tertentu'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Keadaan Zarah Kumpulan 18',
            latex: '\\text{Formula kimia gas adi} = \\text{He, Ne, Ar, Kr, Xe, Rn (Monoatom, bukan } He_2 \\text{)}',
            symbols: [
              { symbol: '\\text{Monoatom}', meaning: 'wujud sebagai atom tunggal', unit: '—' },
            ],
            appliesWhen: 'Menulis persamaan atau formula bagi mana-mana gas adi Kumpulan 18.',
            failsWhen: 'Jangan tulis $He_2$ atau $Ar_2$! Hanya Kumpulan 17, $H_2, N_2, O_2$ wujud dwiatom.',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Kelengainan & Trend Takat Didih Gas Adi',
          problem:
            'Terangkan mengapa gas argon tidak bertindak balas dengan wayar filamen tungsten panas di dalam mentol, dan mengapa takat didih argon ($-186\\,^\\circ\\text{C}$) lebih tinggi daripada neon ($-246\\,^\\circ\\text{C}$).',
          given: ['$Ne: 2.8$, $Ar: 2.8.8$'],
          formulaLatex: '\\text{Oktet stabil } (2.8.8) \\quad|\\quad \\text{Saiz atom } \\uparrow \\Rightarrow \\text{Daya tarikan antara atom } \\uparrow',
          formulaWhy: 'Bezakan penjelasan KIMIA (elektron valens oktet) dengan penjelasan FIZIK (saiz atom & daya tarikan).',
          substituteLatex: 'Ar \\text{ mempunyai 3 petala (saiz lebih besar daripada } Ne \\text{ dengan 2 petala)}',
          answer: 'Argon mempunyai susunan elektron oktet yang stabil ($2.8.8$), maka tidak menderma, menerima atau berkongsi elektron. Saiz atom $Ar$ lebih besar daripada $Ne$, menyebabkan daya tarikan antara atom $Ar$ lebih kuat dan memerlukan lebih banyak tenaga haba untuk diatasi.',
          trapAlert: 'Untuk menerangkan takat didih gas adi, JANGAN sebut "ikatan kovalen" atau "ikatan antara atom dalam molekul" — sebut **daya tarikan antara atom** (van der Waals)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah unsur Kumpulan 18 wujud sebagai zarah monoatom?',
            answer: 'Kerana atomnya telah mencapai susunan elektron duplet atau oktet yang stabil dan tidak perlu berkongsi atau memindahkan elektron.',
          },
          {
            question: 'Apakah yang berlaku kepada ketumpatan dan takat didih menuruni Kumpulan 18?',
            answer: 'Kedua-duanya meningkat menuruni kumpulan.',
          },
          {
            question: 'Nyatakan gas adi yang digunakan dalam mentol filamen elektrik.',
            answer: 'Argon ($Ar$).',
          },
        ],
        fadedProblem: {
          prompt: 'Helium lebih selamat digunakan dalam belon udara berbanding gas hidrogen walaupun kedua-duanya lebih tumpat rendah daripada udara.',
          step1GivenAndFormula: 'Helium mempunyai susunan elektron duplet stabil ($2$), manakala hidrogen sangat mudah terbakar.',
          studentTask: 'Terangkan perbezaan kestabilan kimia kedua-dua gas tersebut.',
          answerSteps: 'Helium bersifat lengai secara kimia dan tidak bertindak balas dengan oksigen udara, manakala hidrogen mudah meletup apabila dinyalakan dengan oksigen.',
        },
        transferQuestion: {
          question: 'Adakah argon boleh mengkonduksikan elektrik dalam keadaan gas atau cecair? Jelaskan.',
          answer: 'Tidak, kerana argon terdiri daripada atom-atom neutral tanpa elektron bebas atau ion yang bergerak bebas.',
        },
      },
    },
    {
      id: 'k4-4.4',
      chapterId: 'k4-bab-4',
      code: '4.4',
      title: 'Unsur dalam Kumpulan 1',
      pageRef: 'm.s. 87–92',
      part1Anchor: {
        phenomenon:
          'Litium mendesis perlahan di atas air, natrium melebur menjadi bebola perak yang berlari pantas, dan kalium terus menyala dengan nyalaan ungu! Mengapa kereaktifan melonjak ke bawah?',
        chapterConnection:
          'Mempelajari sifat logam alkali dan rantaian punca-mekanisme-kesan perubahan kereaktifan menuruni kumpulan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Logam Alkali (Kumpulan 1)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Unsur Kumpulan 1 ($Li, Na, K, Rb, Cs, Fr$) mempunyai ' },
            { text: '1 elektron valens', keyword: true },
            { text: ' dan membentuk larutan beralkali ($MOH$) apabila bertindak balas dengan air sambil membebaskan ' },
            { text: 'gas hidrogen', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Kereaktifan Logam Kumpulan 1 Meningkat Menuruni Kumpulan',
            cause: 'Menuruni Kumpulan 1 ($Li \\to Na \\to K$), bilangan petala berisi elektron bertambah.',
            mechanism: 'Saiz atom bertambah menyebabkan jarak antara nukleus dengan elektron valens semakin jauh, maka daya tarikan nukleus terhadap elektron valens semakin lemah.',
            effect: 'Atom lebih mudah melepaskan satu elektron valens untuk membentuk ion $+1$, menjadikan kereaktifan meningkat.',
          },
          {
            title: 'Mengapa Takat Lebur & Takat Didih Menurun Menuruni Kumpulan 1',
            cause: 'Saiz atom logam bertambah menuruni kumpulan.',
            mechanism: 'Ikatan logam antara ion positif dengan lautan elektron semakin lemah.',
            effect: 'Kurang tenaga haba diperlukan untuk mengatasi ikatan logam; takat lebur dan didih berkurang.',
          },
        ],
        tables: [
          {
            title: '3 Tindak Balas Kimia Wajib Logam Kumpulan 1 ($M = Li, Na, K$)',
            headers: ['Tindak Balas dengan', 'Persamaan Am', 'Pemerhatian & Hasil'],
            rows: [
              ['Air ($H_2O$)', '$2M(p) + 2H_2O(ce) \\to 2MOH(ak) + H_2(g)$', 'Larutan tidak berwarna terhasil menukarkan litmus merah kepada biru (alkali); bunyi "hisss"/nyalaan; gas $H_2$ terbebas'],
              ['Gas Oksigen ($O_2$)', '$4M(p) + O_2(g) \\to 2M_2O(p)$', 'Terbakar cergas menghasilkan pepejal putih oksida logam; $M_2O$ larut dlm air membentuk $MOH$'],
              ['Gas Klorin ($Cl_2$)', '$2M(p) + Cl_2(g) \\to 2MCl(p)$', 'Terbakar terang membentuk wasap/pepejal putih halida logam (cth: $NaCl$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembentukan Kation Kumpulan 1',
            latex: 'M \\longrightarrow M^+ + e^- \\quad (\\text{cth: } Na \\;2.8.1 \\longrightarrow Na^+ \\;2.8 + e^-)',
            symbols: [
              { symbol: 'M', meaning: 'atom logam Kumpulan 1', unit: '—' },
            ],
            appliesWhen: 'Setiap tindak balas kimia logam Kumpulan 1 (kecuali Hidrogen).',
            failsWhen: 'Jangan tulis persamaan dengan air menghasilkan oksida logam ($M_2O$); tindak balas dengan air menghasilkan HIDROKSIDA ($MOH$) + gas $H_2$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-periodic-trends',
            title: 'Trend Saiz Atom & Kereaktifan Kumpulan 1, 17 dan Kala 3',
            whatItShows: 'Memvisualkan peningkatan saiz atom menuruni Kumpulan 1 yang melemahkan tarikan nukleus terhadap elektron valens.',
            axisOrRule: 'Pilih tab "Kumpulan 1 (Logam Alkali)" untuk menyemak 4 langkah jawapan esei SPM.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 4.1',
            title: 'Tindak Balas Logam Kumpulan 1 dengan Air, Oksigen dan Klorin',
            aim: 'Mengkaji sifat kimia $Li, Na, K$ dan membandingkan kecergasan tindak balasnya.',
            inference: 'Kecergasan tindak balas logam Kumpulan 1 meningkat menuruni kumpulan.',
            hypothesis: 'Semakin menuruni Kumpulan 1, semakin reaktif logam bertindak balas dengan air, oksigen dan klorin ($K > Na > Li$).',
            variables: {
              manipulated: 'Jenis logam Kumpulan 1 ($Li, Na, K$)',
              responding: 'Kecergasan tindak balas',
              fixed: 'Saiz cebisan logam yang kecil & isi padu air/gas',
            },
            setupLogic: 'Potong logam dengan pisau di atas kertas turas untuk membuang minyak parafin; gunakan penyepit (jangan sentuh tangan) dan letakkan di atas permukaan air dalam besen atau masukkan ke dalam balang gas berisi $O_2$/$Cl_2$.',
            expectedResult: '$Li$ bergerak perlahan; $Na$ melebur membentuk bebola perak dan bergerak laju (nyalaan kuning); $K$ terbakar serta-merta dengan nyalaan ungu.',
            conclusion: 'Semua logam Kumpulan 1 mempunyai sifat kimia serupa tetapi kereaktifan meningkat menuruni kumpulan.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Skema Esei 4-Markah: Mengapa Kalium Lebih Reaktif daripada Litium',
          problem:
            'Banding dan terangkan kereaktifan antara litium ($^7_3Li$) dengan kalium ($^{39}_{19}K$) apabila bertindak balas dengan air.',
          given: ['$Li: 2.1$ (2 petala)', '$K: 2.8.8.1$ (4 petala)'],
          formulaLatex: '2K(p) + 2H_2O(ce) \\longrightarrow 2KOH(ak) + H_2(g)',
          formulaWhy: 'Gunakan 4 fakta berturutan: petala → saiz → daya tarikan nukleus → kemudahan derma elektron.',
          substituteLatex: '\\text{Bil. petala } K (4) > Li (2) \\Rightarrow \\text{Saiz atom } K > Li',
          answer: 'Kalium lebih reaktif daripada litium. Atom kalium mempunyai lebih banyak petala berisi elektron (4 petala berbanding 2), maka saiz atomnya lebih besar. Jarak antara nukleus dengan elektron valens lebih jauh dan daya tarikan nukleus ke atas elektron valens lebih lemah. Oleh itu, atom kalium lebih mudah melepaskan satu elektron valens.',
          trapAlert: 'Wajib tulis frasa **"daya tarikan nukleus ke atas elektron valens"** dan **"melepaskan/menderma satu elektron valens"** — jangan sekadar tulis "senang hilang elektron"!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah warna nyalaan apabila $Li, Na,$ dan $K$ terbakar dalam oksigen?',
            answer: 'Litium: merah; Natrium: kuning; Kalium: ungu/lilac.',
          },
          {
            question: 'Mengapakah minyak parafin perlu diserap dengan kertas turas sebelum meletakkan natrium di dalam balang gas oksigen?',
            answer: 'Untuk mengelakkan minyak parafin daripada terbakar bersama dan mencemari pemerhatian.',
          },
          {
            question: 'Mengapakah takat lebur menurun menuruni Kumpulan 1 sedangkan takat lebur meningkat menuruni Kumpulan 17?',
            answer: 'Ikatan logam Kumpulan 1 melemah apabila saiz atom bertambah; daya antara molekul dwiatom Kumpulan 17 menguat apabila saiz molekul bertambah.',
          },
        ],
        fadedProblem: {
          prompt: '$0.23\\text{ g}$ natrium bertindak balas lengkap dengan air berlebihan. [JAR: $Na=23$; $V_m = 24\\text{ dm}^3\\text{ mol}^{-1}$]',
          step1GivenAndFormula: '$2Na + 2H_2O \\to 2NaOH + H_2$; $n(Na) = \\frac{0.23}{23} = 0.01\\text{ mol}$.',
          studentTask: 'Hitung isi padu gas hidrogen terbebas dalam $\\text{cm}^3$ pada keadaan bilik.',
          answerSteps: 'Nisbah $2Na : 1H_2 \\Rightarrow n(H_2) = 0.005\\text{ mol}$; $V = 0.005 \\times 24\\text{ dm}^3 = 0.12\\text{ dm}^3 = 120\\text{ cm}^3$.',
        },
        transferQuestion: {
          question: 'Rubidium ($Rb$) berada di bawah kalium dalam Kumpulan 1. Ramalkan sifat fizik dan kecergasan tindak balas rubidium dengan air.',
          answer: 'Rubidium ialah logam lembut berwarna kelabu berkilat, bertakat lebur lebih rendah daripada kalium, dan bertindak balas lebih cergas (meletup serta-merta) apabila terkena air menghasilkan larutan $RbOH$ dan gas $H_2$.',
        },
      },
    },
    {
      id: 'k4-4.5',
      chapterId: 'k4-bab-4',
      code: '4.5',
      title: 'Unsur dalam Kumpulan 17',
      pageRef: 'm.s. 92–96',
      part1Anchor: {
        phenomenon:
          'Daripada gas kuning kehijauan ($Cl_2$), cecair perang kemerahan ($Br_2$) hinggalah hablur hitam keunguan ($I_2$), halogen berubah daripada gas ke pepejal menuruni kumpulan tetapi semakin malas bertindak balas!',
        chapterConnection:
          'Berlawanan arah kereaktifan dengan Kumpulan 1 — membuktikan perbezaan antara atom yang menderma elektron ($M$) dengan atom yang menarik elektron ($X$).',
      },
      part2SacredDefinitions: [
        {
          title: 'Halogen (Kumpulan 17)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Unsur Kumpulan 17 ($F_2, Cl_2, Br_2, I_2$) mempunyai ' },
            { text: '7 elektron valens', keyword: true },
            { text: ' dan wujud sebagai ' },
            { text: 'molekul dwiatom ($X_2$)', keyword: true },
            { text: ' yang menarik ' },
            { text: '1 elektron', keyword: true },
            { text: ' untuk mencapai susunan elektron oktet.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Kereaktifan Halogen Berkurang Menuruni Kumpulan 17',
            cause: 'Menuruni Kumpulan 17 ($Cl \\to Br \\to I$), bilangan petala berisi elektron bertambah.',
            mechanism: 'Saiz atom bertambah menjadikan petala terluar semakin jauh daripada nukleus, maka daya tarikan nukleus untuk menarik satu elektron ke petala terluar menjadi lebih lemah.',
            effect: 'Atom menjadi lebih sukar menerima elektron; kereaktifan berkurang menuruni kumpulan ($F_2 > Cl_2 > Br_2 > I_2$).',
          },
          {
            title: 'Mengapa Takat Lebur & Didih Meningkat Menuruni Kumpulan 17',
            cause: 'Saiz molekul dwiatom $X_2$ bertambah menuruni kumpulan.',
            mechanism: 'Daya tarikan van der Waals antara molekul menjadi semakin kuat.',
            effect: 'Lebih banyak tenaga haba diperlukan untuk mengatasinya (gas $Cl_2 \\to$ cecair $Br_2 \\to$ pepejal $I_2$).',
          },
        ],
        tables: [
          {
            title: 'Sifat Fizik dan Warna Unsur Kumpulan 17 (Suhu Bilik)',
            headers: ['Halogen', 'Keadaan Fizik', 'Warna'],
            rows: [
              ['Klorin ($Cl_2$)', 'Gas', 'Kuning kehijauan'],
              ['Bromin ($Br_2$)', 'Cecair', 'Perang kemerahan'],
              ['Iodin ($I_2$)', 'Pepejal', 'Hitam keunguan (wap ungu)'],
            ],
          },
          {
            title: '3 Tindak Balas Kimia Wajib Halogen ($X_2 = Cl_2, Br_2, I_2$)',
            headers: ['Tindak Balas dengan', 'Persamaan Kimia', 'Pemerhatian Penting'],
            rows: [
              ['Air ($H_2O$)', '$X_2 + H_2O \\rightleftharpoons HX + HOX$', 'Kertas litmus biru bertukar merah (asid) lalu dilunturkan menjadi putih oleh $HOCl/HOBr$ (peluntur); $I_2$ tidak melunturkan'],
              ['Wul besi panas ($Fe$)', '$2Fe + 3X_2 \\to 2FeX_3$', 'Wul besi membara terang menghasilkan pepejal perang ferum(III) halida'],
              ['Larutan $NaOH$', '$X_2 + 2NaOH \\to NaX + NaOX + H_2O$', 'Warna halogen luntur membentuk larutan tidak berwarna mengandungi dua jenis garam natrium'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pembentukan Ion Halida ($X^-$)',
            latex: 'X_2 + 2e^- \\longrightarrow 2X^- \\quad (\\text{cth: } Cl_2 + 2e^- \\longrightarrow 2Cl^-)',
            symbols: [
              { symbol: 'X^-', meaning: 'ion halida ($Cl^-, Br^-, I^-$)', unit: '—' },
            ],
            appliesWhen: 'Halogen menerima elektron daripada logam atau air/alkali.',
            failsWhen: 'Jangan lupa tulis halogen sebagai dwiatom ($Cl_2, Br_2, I_2$) dalam semua persamaan kimia!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-periodic-trends',
            title: 'Banding Beza Kereaktifan Kumpulan 17 vs Kumpulan 1',
            whatItShows: 'Walaupun saiz atom sama-sama bertambah menuruni kedua-dua kumpulan, kesan ke atas kebolehan menderma vs menerima elektron adalah bertentangan.',
            axisOrRule: 'Klik tab "Kumpulan 17 (Halogen)" untuk melihat mekanisme tarikan nukleus ke atas elektron luar.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Meramal & Menerangkan Tindak Balas Halogen dengan Wul Besi',
          problem:
            'Gas klorin dialirkan ke atas wul besi panas, manakala eksperimen diulang dengan wap iodin. Bandingkan kecergasan kedua-dua tindak balas dan jelaskan.',
          given: ['$Cl: 2.8.7$ (3 petala)', '$I$: 5 petala'],
          formulaLatex: '2Fe(p) + 3Cl_2(g) \\longrightarrow 2FeCl_3(p)',
          formulaWhy: 'Wul besi bertindak balas membentuk ferum(III) halida berwarna perang.',
          substituteLatex: '\\text{Saiz atom } Cl < I \\Rightarrow \\text{Tarikan nukleus } Cl > I',
          answer: 'Klorin bertindak balas lebih cergas daripada iodin. Saiz atom klorin lebih kecil daripada iodin, maka jarak nukleus ke petala terluar lebih dekat dan daya tarikan nukleus untuk menarik satu elektron ke petala terluar lebih kuat.',
          trapAlert: 'Dalam tindak balas halogen dengan wul besi, hasil sentiasa **ferum(III) halida** ($FeCl_3$, $FeBr_3$, $FeI_3$), BUKAN ferum(II) halida!',
        },
      ],
      part5DecisionTable: {
        title: 'Langkah Keselamatan & Radas Tindak Balas Halogen ($Cl_2, Br_2, I_2$)',
        rows: [
          {
            designChoice: 'Menjalankan semua eksperimen halogen di dalam kebuk wasap',
            scientificReason: 'Gas klorin, wap bromin dan wap iodin adalah beracun serta merengsa sistem pernafasan.',
          },
          {
            designChoice: 'Menggunakan kapur soda atau menyalurkan gas berlebihan ke dalam larutan $NaOH$',
            scientificReason: 'Kapur soda / $NaOH$ menyerap gas halogen atau asid berlebihan yang beracun supaya tidak terlepas ke atmosfera.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah formula kimia asid yang melunturkan kertas litmus apabila gas klorin dilarutkan dalam air?',
            answer: 'Asid hipoklorus, $HOCl$ (bersama $HCl$).',
          },
          {
            question: 'Apakah warna pepejal $FeCl_3$, $FeBr_3$ dan $FeI_3$ yang terhasil?',
            answer: 'Pepejal perang.',
          },
          {
            question: 'Mengapakah astatin ($At$) jauh kurang reaktif berbanding fluorin ($F$)?',
            answer: 'Saiz atom astatin sangat besar, maka daya tarikan nukleusnya terhadap elektron luar untuk diterima sangat lemah.',
          },
        ],
        fadedProblem: {
          prompt: 'Gas klorin dialirkan ke dalam larutan natrium hidroksida, $NaOH$ panas.',
          step1GivenAndFormula: '$Cl_2 + 2NaOH \\to NaCl + NaOCl + H_2O$.',
          studentTask: 'Nyatakan perubahan warna dan nama bagi kedua-dua garam yang terhasil.',
          answerSteps: 'Gas kuning kehijauan melarut membentuk larutan tidak berwarna yang mengandungi natrium klorida ($NaCl$) dan natrium klorat(I) ($NaOCl$).',
        },
        transferQuestion: {
          question: 'Mengapakah bromin tidak melunturkan kertas litmus sekuat klorin, manakala iodin hampir tidak melunturkan langsung?',
          answer: 'Kerana kereaktifan halogen dengan air berkurang menuruni Kumpulan 17; hanya sedikit $HOBr$ dan hampir tiada $HOI$ terbentuk untuk bertindak sebagai agen peluntur.',
        },
      },
    },
    {
      id: 'k4-4.6',
      chapterId: 'k4-bab-4',
      code: '4.6',
      title: 'Unsur dalam Kala 3',
      pageRef: 'm.s. 96–100',
      part1Anchor: {
        phenomenon:
          'Apabila bergerak dari kiri ke kanan merentasi Kala 3 ($Na \\to Ar$), saiz atom mengecut walaupun bilangan elektronnya semakin banyak, dan sifatnya bertukar daripada logam konduktor kepada semikonduktor silikon lalu menjadi gas bukan logam!',
        chapterConnection:
          'Melengkapkan peta Jadual Berkala secara mengufuk dan menghubungkan sifat asid-bes oksida Kala 3 kepada tindak balas garam dalam Bab 6.',
      },
      part2SacredDefinitions: [
        {
          title: 'Oksida Amfoterik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Oksida amfoterik (seperti aluminium oksida, $Al_2O_3$) ialah oksida yang boleh ' },
            { text: 'bertindak balas dengan kedua-dua asid dan alkali', keyword: true },
            { text: ' untuk menghasilkan garam dan air.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Jejari Atom Berkurang dari Kiri ke Kanan Merentasi Kala 3',
            cause: 'Dari $Na$ ($Z=11$) ke $Cl$ ($Z=17$), nombor proton bertambah sebanyak $+1$ bagi setiap unsur tetapi bilangan petala berisi elektron kekal $3$.',
            mechanism: 'Cas positif dalam nukleus meningkat lalu mengenakan daya tarikan elektrostatik yang lebih kuat ke atas elektron dalam 3 petala tersebut.',
            effect: 'Petala elektron ditarik lebih rapat ke nukleus, maka saiz (jejari) atom berkurang dari kiri ke kanan.',
          },
          {
            title: 'Peningkatan Keelektronegatifan Merentasi Kala 3',
            cause: 'Saiz atom mengecut dan cas positif nukleus bertambah dari kiri ke kanan.',
            mechanism: 'Nukleus mempunyai tarikan yang lebih kuat terhadap elektron luar.',
            effect: 'Kecenderungan menerima elektron (keelektronegatifan) bertambah dan sifat kelogaman bertukar menjadi bukan logam.',
          },
        ],
        tables: [
          {
            title: 'Perubahan Sifat Unsur Kala 3 (Na → Ar)',
            headers: ['Unsur', 'Susunan e⁻', 'Jenis Unsur', 'Sifat Oksida'],
            rows: [
              ['$Na$ (11), $Mg$ (12)', '$2.8.1, 2.8.2$', 'Logam', 'Oksida bes ($Na_2O, MgO$) — bertindak balas dengan asid'],
              ['$Al$ (13)', '$2.8.3$', 'Logam', 'Oksida amfoterik ($Al_2O_3$) — larut dalam asid & alkali'],
              ['$Si$ (14)', '$2.8.4$', 'Metaloid (Separuh logam)', 'Oksida asid ($SiO_2$) — bertindak balas dengan alkali pekat'],
              ['$P$ (15), $S$ (16), $Cl$ (17)', '$2.8.5 \\dots 2.8.7$', 'Bukan logam', 'Oksida asid ($P_4O_{10}, SO_2, Cl_2O_7$) — larut dalam alkali'],
              ['$Ar$ (18)', '$2.8.8$', 'Gas adi', 'Tidak membentuk oksida'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Oksida Amfoterik $Al_2O_3$',
            latex: 'Al_2O_3 + 6HNO_3 \\to 2Al(NO_3)_3 + 3H_2O \\quad|\\quad Al_2O_3 + 2NaOH + 3H_2O \\to 2NaAl(OH)_4',
            symbols: [
              { symbol: 'Al_2O_3', meaning: 'aluminium oksida (amfoterik)', unit: '—' },
            ],
            appliesWhen: 'Mengenal pasti sifat oksida kala ke-3 melalui Eksperimen 4.2.',
            failsWhen: 'Jangan anggap $MgO$ atau $SiO_2$ sebagai oksida amfoterik; hanya $Al_2O_3$ (bersama $ZnO$ dan $PbO$) bersifat amfoterik dalam KSSM!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-periodic-trends',
            title: 'Perubahan Jejari Atom & Sifat Oksida Merentasi Kala 3',
            whatItShows: 'Mengecutnya jejari atom dari $Na$ ke $Ar$ serta peralihan oksida bes → amfoterik → oksida asid.',
            axisOrRule: 'Klik tab "Merentasi Kala 3 (Na → Ar)" untuk membandingkan sifat oksida.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 4.2',
            title: 'Mengkaji Sifat Oksida Unsur Kala 3',
            aim: 'Mengelaskan oksida unsur Kala 3 kepada oksida bes, amfoterik dan oksida asid.',
            inference: 'Sifat oksida unsur Kala 3 berubah daripada bes kepada amfoterik kepada asid dari kiri ke kanan.',
            hypothesis: 'Natrium/magnesium oksida ialah oksida bes, aluminium oksida ialah amfoterik, dan sulfur dioksida/silikon(IV) oksida ialah oksida asid.',
            variables: {
              manipulated: 'Jenis oksida Kala 3 ($MgO, Al_2O_3, SiO_2$)',
              responding: 'Keterlarutan oksida dalam asid $HNO_3$ dan alkali $NaOH$',
              fixed: 'Isi padu dan kepekatan asid/alkali yang digunakan',
            },
            setupLogic: 'Masukkan serbuk oksida ke dalam dua tabung uji berasingan: satu dengan $HNO_3$, satu dengan $NaOH$, panaskan perlahan dan perhatikan sama ada serbuk melarut.',
            expectedResult: '$MgO$ larut dalam $HNO_3$ sahaja; $Al_2O_3$ larut dalam kedua-dua $HNO_3$ dan $NaOH$; $SiO_2$ bertindak balas dengan $NaOH$ sahaja.',
            conclusion: 'Merentasi Kala 3, sifat oksida berubah daripada oksida bes $\\to$ amfoterik $\\to$ oksida asid.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Pengecutan Saiz Atom Merentasi Kala 3',
          problem:
            'Nombor proton klorin ($17$) lebih besar daripada natrium ($11$), namun jejari atom klorin lebih kecil daripada natrium. Jelaskan.',
          given: ['$Na (2.8.1)$: 3 petala, $Z=11$', '$Cl (2.8.7)$: 3 petala, $Z=17$'],
          formulaLatex: '\\text{Bilangan petala kekal 3, tetapi cas nukleus } Z \\uparrow',
          formulaWhy: 'Cas nukleus lebih besar menarik 3 petala elektron lebih rapat ke pusat.',
          substituteLatex: 'Z_{Cl} (+17) > Z_{Na} (+11)',
          answer: 'Kedua-dua atom mempunyai bilangan petala berisi elektron yang sama iaitu 3 petala. Namun atom klorin mempunyai nombor proton (cas positif nukleus) yang lebih besar, maka daya tarikan nukleus ke atas elektron pada 3 petala lebih kuat dan menarik petala lebih rapat ke nukleus.',
          trapAlert: 'Jangan kata "klorin lebih kecil kerana ia ada lebih sedikit petala" — $Na$ hingga $Ar$ SEMUANYA ada 3 petala!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah jenis unsur bagi silikon ($Si$) dan satu kegunaannya?',
            answer: 'Metaloid (separuh logam); digunakan sebagai semikonduktor dalam cip mikroelektronik.',
          },
          {
            question: 'Oksida Kala 3 manakah yang larut dalam kedua-dua asid nitrik dan natrium hidroksida?',
            answer: 'Aluminium oksida, $Al_2O_3$ (oksida amfoterik).',
          },
          {
            question: 'Apakah trend keelektronegatifan dari natrium ke klorin dalam Kala 3?',
            answer: 'Meningkat dari kiri ke kanan.',
          },
        ],
        fadedProblem: {
          prompt: 'Serbuk putih $P$ bertindak balas dengan $NaOH$ membentuk larutan tidak berwarna, tetapi tidak larut dalam asid hidroklorik.',
          step1GivenAndFormula: 'Bahan yang bertindak balas dengan alkali tetapi tidak bertindak balas dengan asid ialah oksida asid.',
          studentTask: 'Kenal pasti jenis oksida bagi $P$ dan berikan satu contoh oksida Kala 3 tersebut.',
          answerSteps: '$P$ ialah oksida asid (bukan logam), contohnya silikon(IV) oksida ($SiO_2$) atau fosforus(V) oksida ($P_4O_{10}$).',
        },
        transferQuestion: {
          question: 'Mengapakah $Na_2O$ dan $MgO$ mempunyai takat lebur yang sangat tinggi berbanding $SO_2$ dan $Cl_2O_7$?',
          answer: '$Na_2O$ dan $MgO$ ialah sebatian ion dengan daya tarikan elektrostatik kuat antara ion, manakala $SO_2$ dan $Cl_2O_7$ ialah molekul kovalen ringkas dengan daya van der Waals lemah antara molekul.',
        },
      },
    },
    {
      id: 'k4-4.7',
      chapterId: 'k4-bab-4',
      code: '4.7',
      title: 'Unsur Peralihan',
      pageRef: 'm.s. 101–104',
      part1Anchor: {
        phenomenon:
          'Permata delima merah ($Cr^{3+}$), zamrud hijau ($Cr^{3+}/V^{3+}$), dan larutan kuprum(II) sulfat biru semuanya berasal daripada blok tengah Jadual Berkala yang juga menjadi nadi pemangkin industri kimia moden.',
        chapterConnection:
          'Menutup Bab 4 dengan 4 ciri istimewa unsur peralihan (Kumpulan 3–12) yang penting untuk pemangkinan Bab 7 dan redoks Tingkatan 5.',
      },
      part2SacredDefinitions: [
        {
          title: 'Empat Ciri Istimewa Unsur Peralihan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Unsur peralihan terletak di antara ' },
            { text: 'Kumpulan 3 hingga Kumpulan 12', keyword: true },
            { text: ' dan mempamerkan empat ciri istimewa: bertindak sebagai ' },
            { text: 'mangkin, membentuk ion atau sebatian berwarna, mempunyai lebih daripada satu nombor pengoksidaan, dan membentuk ion kompleks', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Peranan Mangkin Unsur Peralihan dalam Industri',
            cause: 'Proses industri seperti pembuatan ammonia (Haber) dan asid sulfurik (Sentuh) sangat perlahan pada suhu sederhana.',
            mechanism: 'Logam peralihan atau oksidanya ($Fe, V_2O_5, Pt, Ni$) menyediakan laluan alternatif dengan tenaga pengaktifan lebih rendah tanpa dimusnahkan.',
            effect: 'Penghasilan produk industri berlangsung pada kadar tinggi dan kos tenaga yang lebih ekonomik.',
          },
        ],
        tables: [
          {
            title: 'Warna Ion Unsur Peralihan dalam Larutan Akueus',
            headers: ['Ion Unsur Peralihan', 'Warna Larutan Akueus', 'Ion Kompleks Terkait'],
            rows: [
              ['$Fe^{2+}$ (Ferum(II))', 'Hijau pucat', '$[Fe(CN)_6]^{4-}$ (heksasianoferat(II))'],
              ['$Fe^{3+}$ (Ferum(III))', 'Perang kekuningan', '$[Fe(CN)_6]^{3-}$ (heksasianoferat(III))'],
              ['$Cu^{2+}$ (Kuprum(II))', 'Biru', '$[Cu(NH_3)_4]^{2+}$ (tetraaminakuprum(II) — biru tua)'],
              ['$Cr^{3+}$ / $Cr_2O_7^{2-}$', 'Hijau ($Cr^{3+}$) / Jingga ($Cr_2O_7^{2-}$)', '$CrO_4^{2-}$ (kuning)'],
              ['$Mn^{2+}$ / $MnO_4^-$', 'Merah jambu ($Mn^{2+}$) / Ungu ($MnO_4^-$)', '—'],
            ],
          },
          {
            title: 'Mangkin Industri & Pelbagai Nombor Pengoksidaan',
            headers: ['Unsur Peralihan / Sebatian', 'Kegunaan Mangkin Industri', 'Contoh Nombor Pengoksidaan'],
            rows: [
              ['Ferum ($Fe$)', 'Proses Haber (penghasilan $NH_3$)', '$Fe^{2+}$ ($+2$), $Fe^{3+}$ ($+3$)'],
              ['Vanadium(V) oksida ($V_2O_5$)', 'Proses Sentuh (penghasilan $H_2SO_4$)', '$V$: $+2, +3, +4, +5$'],
              ['Platinum ($Pt$)', 'Proses Ostwald (penghasilan $HNO_3$) & pengubah bermangkin', '$Pt$: $+2, +4$'],
              ['Nikel ($Ni$)', 'Penghidrogenan minyak sayuran kepada marjerin', '$Cu$: $+1, +2$; $Mn$: $+2, +4, +7$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Proses Haber (Mangkin Ferum)',
            latex: 'N_2(g) + 3H_2(g) \\xrightarrow{Fe,\\; 450\\,^\\circ\\text{C},\\; 200\\text{ atm}} 2NH_3(g)',
            symbols: [
              { symbol: 'Fe', meaning: 'serbuk ferum sebagai mangkin', unit: '—' },
            ],
            appliesWhen: 'Contoh aplikasi unsur peralihan sebagai mangkin industri.',
            failsWhen: 'Skandium ($Sc$) dan Zink ($Zn$) berada di blok-d tetapi TIDAK tergolong sebagai unsur peralihan sempurna kerana hanya ada satu keadaan pengoksidaan dan ionnya tidak berwarna!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Ciri Unsur Peralihan dalam Sebatian',
          problem:
            'Kromium menghasilkan sebatian kalium dikromat(VI), $K_2Cr_2O_7$ berwarna jingga dan larutan kromium(III) klorida, $CrCl_3$ berwarna hijau. Nyatakan dua ciri istimewa unsur peralihan yang ditunjukkan.',
          given: ['Kalium dikromat(VI) mempunyai nombor pengoksidaan $+6$; kromium(III) ialah $+3$', 'Kedua-duanya berwarna jingga dan hijau'],
          formulaLatex: 'K_2Cr_2O_7\\ (Cr = +6, \\text{jingga}) \\quad|\\quad CrCl_3\\ (Cr = +3, \\text{hijau})',
          formulaWhy: 'Menunjukkan kepelbagaian keadaan pengoksidaan dan warna ion.',
          substituteLatex: '\\text{Bil. pengoksidaan } +6 \\text{ dan } +3',
          answer: '(1) Mempunyai lebih daripada satu nombor pengoksidaan ($+3$ dan $+6$); (2) Membentuk ion atau sebatian berwarna.',
          trapAlert: 'Dalam Kertas 2 SPM, jangan tulis "unsur peralihan keras dan berkilat" sebagai *ciri istimewa*! Sifat logam biasa itu turut dimiliki oleh Kumpulan 1 dan 2.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Senaraikan 4 ciri istimewa unsur peralihan.',
            answer: 'Bertindak sebagai mangkin, membentuk ion/sebatian berwarna, mempunyai lebih daripada satu nombor pengoksidaan, dan membentuk ion kompleks.',
          },
          {
            question: 'Namakan mangkin dalam Proses Haber dan Proses Sentuh.',
            answer: 'Ferum ($Fe$) untuk Proses Haber; Vanadium(V) oksida ($V_2O_5$) untuk Proses Sentuh.',
          },
          {
            question: 'Apakah warna larutan $Cu^{2+}$, $Fe^{2+}$, $Fe^{3+}$ dan $MnO_4^-$?',
            answer: '$Cu^{2+}$ biru, $Fe^{2+}$ hijau pucat, $Fe^{3+}$ perang, $MnO_4^-$ ungu.',
          },
        ],
        fadedProblem: {
          prompt: 'Zink oksida ($ZnO$) membentuk larutan zink sulfat ($ZnSO_4$) yang tidak berwarna.',
          step1GivenAndFormula: 'Zink hanya mempunyai satu nombor pengoksidaan ($+2$) dan ion $Zn^{2+}$ tidak berwarna.',
          studentTask: 'Nyatakan sama ada zink tergolong sebagai unsur peralihan atau tidak mengikut ciri khas SPM.',
          answerSteps: 'Tidak, kerana zink tidak mempamerkan ciri istimewa unsur peralihan seperti membentuk ion berwarna atau mempunyai lebih daripada satu nombor pengoksidaan.',
        },
        transferQuestion: {
          question: 'Mengapakah natrium hidroksida hanya membentuk mendakan biru dengan larutan kuprum(II) sulfat, tetapi larutan ammonia berlebihan melarutkan mendakan tersebut menjadi larutan biru tua?',
          answer: 'Ion $Cu^{2+}$ bertindak balas dengan molekul $NH_3$ membentuk ion kompleks tetraaminakuprum(II), $[Cu(NH_3)_4]^{2+}$, yang larut dalam air dengan warna biru tua.',
        },
      },
    },
  ],
};
