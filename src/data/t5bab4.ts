import type { ChapterContent } from '../types/textbook';

export const t5bab4: ChapterContent = {
  id: 't5-bab-4',
  formLevel: 5,
  number: 4,
  title: 'Keelektromagnetan',
  pageRange: 'm.s. 134–171',
  overview:
    'Memahami interaksi dua medan magnet menghasilkan daya lastik dan motor elektrik (4.1), penjanaan arus aruhan melalui pemotongan fluks magnet dengan Hukum Faraday & Hukum Lenz dalam dinamo/penjana (4.2), serta pemindahan voltan cekap oleh transformer dan Rangkaian Grid Nasional (4.3).',
  subtopics: [
    {
      id: 't5-4.1',
      chapterId: 't5-bab-4',
      code: '4.1',
      title: 'Daya ke Atas Konduktor Pembawa Arus dalam Suatu Medan Magnet',
      pageRef: 'm.s. 136–148',
      part1Anchor: {
        phenomenon:
          'Arus elektrik yang mengalir melalui gegelung di antara magnet kekal dalam kipas siling, mesin basuh, dan kereta api elektrik ditolak dengan daya mekanikal yang kuat sehingga menghasilkan putaran berterusan tanpa pembakaran bahan api.',
        chapterConnection:
          'Menukar tenaga elektrik menjadi tenaga kinetik/gerakan (prinsip **motor** menggunakan Petua Tangan Kiri Fleming) sebelum mempelajari kesan songsangnya dalam Aruhan Elektromagnet (4.2).',
      },
      part2SacredDefinitions: [
        {
          title: 'Medan Lastik',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Medan lastik ialah ' },
            { text: 'medan magnet paduan', keyword: true },
            { text: ' yang dihasilkan oleh ' },
            { text: 'interaksi antara medan magnet daripada konduktor pembawa arus dengan medan magnet daripada magnet kekal', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Petua Tangan Kiri Fleming (Arah Daya / Motor)',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Regangkan ibu jari, jari telunjuk dan jari tengah tangan kiri secara berserenjang: ' },
            { text: 'Jari telunjuk = arah medan magnet (U ke S)', keyword: true },
            { text: ', ' },
            { text: 'Jari tengah = arah arus konvensional ($+$ ke $-$)', keyword: true },
            { text: ', dan ' },
            { text: 'Ibu jari = arah daya / gerakan konduktor', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Medan Lastik Menghasilkan Daya ke Atas Konduktor',
            cause: 'Dawai pembawa arus menghasilkan garis medan magnet bulat mengelilinginya (Petua Genggaman Tangan Kanan) di dalam medan magnet kekal (U ke S).',
            mechanism: 'Di satu sisi dawai, kedua-dua medan magnet searah dan menguatkan satu sama lain (garis rapat/medan kuat); di sisi bertentangan, kedua-dua medan berlawanan arah dan melemah (garis jarang).',
            effect: 'Konduktor ditolak dari kawasan medan magnet kuat ke kawasan medan magnet lemah — arah ini tepat sepadan dengan Ibu Jari Petua Tangan Kiri Fleming.',
          },
          {
            title: 'Mengapa Komutator Gelang Terbelah Wajib dalam Motor a.t.',
            cause: 'Gegelung motor berputar $180^\\circ$ melepasi kedudukan tegak.',
            mechanism: 'Setiap separuh putaran, dua bahagian gelang terbelah bertukar sentuhan dengan berus karbon untuk menyongsangkan arah arus di dalam gegelung.',
            effect: 'Sisi gegelung yang berada di sebelah kutub Utara sentiasa menerima daya ke atas (atau ke bawah), memastikan gegelung terus berputar dalam **satu arah yang sama**.',
          },
        ],
        tables: [
          {
            title: 'Empat Faktor Meningkatkan Magnitud Daya & Laju Putaran Motor a.t.',
            headers: ['Faktor Pengubahsuaian', 'Cara Tindakan Fizikal', 'Kesan ke Atas Gegelung Motor'],
            rows: [
              ['Magnitud arus ($I$)', 'Naikkan voltan bekalan a.t. / kurangkan rintangan', 'Medan magnet dawai lebih kuat $\\to$ daya lebih besar'],
              ['Kekuatan medan magnet ($B$)', 'Guna magnet lebih kuat / rapatkan kutub / guna kutub melengkung', 'Ketumpatan fluks lebih tinggi $\\to$ daya putaran lebih besar'],
              ['Bilangan lilitan gegelung ($N$)', 'Tambah bilangan lilitan dawai pada angker', 'Jumlah panjang dawai berarus dalam medan berganda $\\to$ tork bertambah'],
              ['Teras besi lembut berlamina', 'Masukkan teras besi lembut di dalam gegelung', 'Menumpukan garis medan magnet merentasi gegelung'],
            ],
          },
          {
            title: 'Motor a.t. Berberus vs Motor Tanpa Berus (Brushless)',
            headers: ['Ciri', 'Motor a.t. Berberus', 'Motor Tanpa Berus (BLDC)'],
            rows: [
              ['Bahagian berputar', 'Gegelung (angker) berputar', 'Magnet kekal berputar, gegelung pegun di luar'],
              ['Komutator & Berus karbon', 'Ada (bergesel secara mekanikal)', 'Tiada (pensuisan arus dikawal litar elektronik)'],
              ['Penyelenggaraan & Bunyi', 'Berus haus, menghasilkan percikan api & lebih bising', 'Tiada geseran berus, lebih senyap, tahan lama & kecekapan tinggi'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kebergantungan Kualitatif Magnitud Daya Magnetik',
            latex: 'F \\propto B \\cdot I \\cdot l \\cdot N',
            symbols: [
              { symbol: 'F', meaning: 'Daya magnet pada konduktor', unit: '$\\text{N}$' },
              { symbol: 'B', meaning: 'Kekuatan medan magnet (ketumpatan fluks)', unit: '$\\text{T}$' },
              { symbol: 'I', meaning: 'Arus elektrik dalam dawai', unit: '$\\text{A}$' },
              { symbol: 'N', meaning: 'Bilangan lilitan gegelung', unit: 'tiada unit' },
            ],
            appliesWhen: 'Dawai berserenjang dengan arah garis medan magnet.',
            failsWhen: 'Jika arus mengalir **selari** dengan garis medan magnet (sudut $0^\\circ$ atau $180^\\circ$), TIADA medan lastik terhasil dan daya $F = 0$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-fleming-motor',
            title: 'Petua Tangan Kiri Fleming & Corak Medan Lastik Motor',
            whatItShows: 'Gabungan medan magnet lurus (U ke S) dengan medan magnet bulat dawai menghasilkan garisan rapat di sebelah bawah dan jarang di atas (menolak dawai ke atas), serta asas putaran gegelung motor dengan komutator.',
            axisOrRule: 'Ibu Jari = Daya/Gerakan (F), Jari Telunjuk = Medan U→S (B), Jari Tengah = Arus $+\\to -$ (I). Medan menolak dari kawasan garis rapat ke kawasan garis jarang.',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 4.1 & 4.3',
            title: 'Kesan & Faktor Magnitud Daya ke Atas Dawai Pembawa Arus (Neraca Elektronik)',
            aim: 'Mengkaji arah serta faktor arus dan kekuatan medan magnet terhadap daya pada konduktor pembawa arus.',
            inference: 'Magnitud daya pada konduktor bergantung pada arus dan kekuatan medan magnet.',
            hypothesis: 'Semakin besar arus elektrik atau kekuatan medan magnet, semakin besar daya yang terhasil.',
            variables: {
              manipulated: 'Voltan bekalan a.t. ($1\\text{ V} \\to 2\\text{ V}$) dan bilangan magnet Magnadur (1 pasang $\\to$ 2 pasang)',
              responding: 'Bacaan jisim pada neraca elektronik (mewakili daya tindak balas ke bawah)',
              fixed: 'Panjang dawai dalam medan magnet',
            },
            setupLogic: 'Letakkan dening keluli bermagnet di atas neraca elektronik dan sifarkan bacaan (tare). Apabila arus mengalir dan dawai ditolak ke atas oleh medan lastik, hukum Newton ketiga menyebabkan daya tindak balas sama kuat menekan magnet ke bawah menghasilkan bacaan positif pada neraca.',
            expectedResult: 'Bacaan neraca meningkat apabila voltan ditambah ke $2\\text{ V}$ atau apabila dua pasang magnet Magnadur digunakan.',
            conclusion: 'Daya ke atas konduktor pembawa arus bertambah apabila magnitud arus dan kekuatan medan magnet bertambah.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Arah Gerakan Gegelung Motor a.t.',
          problem: 'Sebuah gegelung segi empat ABCD terletak antara kutub Utara (kiri) dan Selatan (kanan). Arus mengalir dari A ke B (masuk ke dalam kertas) dan C ke D (keluar dari kertas). Tentukan arah daya pada sisi AB dan CD serta arah putaran gegelung.',
          given: ['Medan magnet $B$: Kiri (U) $\\to$ Kanan (S)', 'Arus di AB: Masuk ke dalam satah', 'Arus di CD: Keluar dari satah'],
          formulaLatex: '\\text{Petua Tangan Kiri Fleming: } (\\text{Telunjuk} = B,\\ \\text{Tengah} = I \\implies \\text{Ibu jari} = F)',
          formulaWhy: 'Motor menggunakan elektrik untuk menjana gerakan, maka wajib guna Tangan KIRI.',
          substituteLatex: '\\text{AB: } B\\text{ kanan}, I\\text{ masuk} \\Rightarrow F_{\\text{AB}}\\text{ ke BAWAH};\\quad \\text{CD: } B\\text{ kanan}, I\\text{ keluar} \\Rightarrow F_{\\text{CD}}\\text{ ke ATAS}',
          answer: 'Daya pada AB ke bawah, daya pada CD ke atas; gegelung berputar mengikut arah **lawan jam**.',
          trapAlert: 'Kesalahan maut pelajar SPM: terkeliru menggunakan Tangan Kanan (untuk penjana) dalam soalan **motor**, menghasilkan putaran yang terbalik!',
        },
      ],
      part5DecisionTable: {
        title: 'Pengubahsuaian Motor Elektrik a.t. untuk Putaran Lebih Laju & Tahan Lama',
        rows: [
          {
            designChoice: 'Menggunakan magnet kutub melengkung (medan jejarian) + teras besi lembut',
            scientificReason: 'Menumpukan fluks magnet secara jejarian supaya garis medan sentiasa berserenjang dengan gegelung lalu menghasilkan daya putaran seragam yang lebih kuat.',
          },
          {
            designChoice: 'Menambah bilangan lilitan gegelung dawai kuprum berpenebat',
            scientificReason: 'Rintangan kuprum rendah membenarkan arus besar; lilitan lebih banyak menggandakan daya magnet dan kelajuan putaran motor.',
          },
          {
            designChoice: 'Beralih kepada motor tanpa berus (brushless) untuk dron/kenderaan EV',
            scientificReason: 'Menghapuskan geseran dan kehausan berus karbon serta tiada percikan api, memberikan kecekapan lebih tinggi dan jangka hayat jauh lebih panjang.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Petua tangan manakah menentukan arah daya bagi motor elektrik?', answer: 'Petua Tangan Kiri Fleming (Ibu jari = Daya, Telunjuk = Medan U→S, Tengah = Arus).' },
          { question: 'Apakah fungsi komutator gelang terbelah dalam motor a.t.?', answer: 'Menyongsangkan arah aliran arus di dalam gegelung setiap separuh putaran supaya motor terus berputar pada satu arah yang sama.' },
          { question: 'Nyatakan tiga cara meningkatkan kelajuan putaran motor.', answer: 'Tambah arus ($I$), guna magnet lebih kuat ($B$), tambah bilangan lilitan gegelung ($N$), atau guna teras besi lembut.' },
        ],
        fadedProblem: {
          prompt: 'Sebatang rod kuprum diletakkan di antara kutub magnet U (atas) dan S (bawah) sambil arus mengalir menghala ke dalam skrin.',
          step1GivenAndFormula: 'Diberi: Medan $B$ ke bawah (U$\\to$S), arus $I$ ke dalam satah. Guna: Petua Tangan Kiri Fleming.',
          studentTask: 'Tentukan arah daya magnet ke atas rod dan ke mana kawasan garis medan magnet lebih rapat.',
          answerSteps: 'Jari telunjuk ke bawah, jari tengah masuk $\\implies$ ibu jari menunjuk ke **kiri**. Daya menolak rod ke kiri; garis medan lebih rapat (kuat) berada di sebelah kanan rod.',
        },
        transferQuestion: {
          question: 'Terangkan apa yang akan berlaku jika komutator gelang terbelah dalam sebuah motor a.t. digantikan dengan dua gelang gelincir penuh seperti dalam penjana a.u., manakala bekalan kuasa bateri a.t. dikekalkan.',
          answer: 'Arus dalam gegelung tidak akan disongsangkan setiap separuh putaran. Selepas gegelung melepasi kedudukan menegak, arah daya akan membalikkan putaran gegelung; akibatnya gegelung hanya berayun ke hadapan dan ke belakang sehingga berhenti pada kedudukan tegak (gagal berputar penuh).',
        },
      },
    },
    {
      id: 't5-4.2',
      chapterId: 't5-bab-4',
      code: '4.2',
      title: 'Aruhan Elektromagnet',
      pageRef: 'm.s. 149–161',
      part1Anchor: {
        phenomenon:
          'Menolak magnet ke dalam gegelung atau memutarkan turbin di empangan hidroelektrik memaksa elektron di dalam wayar bergerak menghasilkan arus elektrik tanpa sebarang bateri — inilah sumber $99\\%$ tenaga elektrik di grid dunia.',
        chapterConnection:
          'Kesan berlawanan bagi 4.1: menggunakan **gerakan relatif** dalam medan magnet untuk menjana elektrik (prinsip penjana a.t./a.u.) dan membolehkan transformer (4.3) beroperasi.',
      },
      part2SacredDefinitions: [
        {
          title: 'Aruhan Elektromagnet',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Aruhan elektromagnet ialah penghasilan ' },
            { text: 'daya gerak elektrik (d.g.e.) aruhan', keyword: true },
            { text: ' merentasi suatu konduktor apabila terdapat ' },
            { text: 'gerakan relatif antara konduktor itu dengan suatu medan magnet', keyword: true },
            { text: ' atau konduktor berada dalam medan magnet yang berubah.' },
          ],
        },
        {
          title: 'Hukum Faraday',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Faraday menyatakan bahawa ' },
            { text: 'magnitud d.g.e. aruhan adalah berkadar terus dengan kadar pemotongan fluks magnet', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Hukum Lenz',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Lenz menyatakan bahawa ' },
            { text: 'arah arus aruhan sentiasa bertindak menentang perubahan yang menghasilkannya', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Aplikasi Hukum Lenz pada Magnet & Solenoid',
            cause: 'Kutub Utara magnet bar ditolak mendekati hujung solenoid A.',
            mechanism: 'Untuk menentang kemasukan kutub Utara (Hukum Lenz), arus aruhan mengalir di solenoid sehingga hujung A menghasilkan **kutub Utara** bagi menolak magnet bar. Apabila kutub Utara ditarik menjauhi, hujung A bertukar menjadi **kutub Selatan** untuk menariknya semula.',
            effect: 'Kerja mekanikal diperlukan untuk menggerakkan magnet menentang daya magnetik, membuktikan Keabadian Tenaga ($\\text{Kerja Mekanikal} \\to \\text{Tenaga Elektrik}$).',
          },
          {
            title: 'Mengapa Penjana a.u. vs Penjana a.t. Menghasilkan Gelombang Berbeza',
            cause: 'Gegelung berputar berterusan dalam medan magnet kekal memotong fluks magnet.',
            mechanism: 'Penjana a.u. menggunakan **dua gelang gelincir** supaya setiap hujung gegelung kekal disambung ke berus yang sama (arus menyongsang setiap separuh pusingan). Penjana a.t. menggunakan **komutator gelang terbelah** yang menukar sambungan berus setiap separuh pusingan.',
            effect: 'Penjana a.u. menghasilkan output arus ulang-alik sinus ($+$ dan $-$); penjana a.t. menghasilkan output arus terus satu arah berdenyut (sentiasa $+$).',
          },
        ],
        tables: [
          {
            title: 'Petua Tangan Kanan Fleming vs Hukum Lenz & Perbandingan Penjana',
            headers: ['Alat / Situasi', 'Kaedah Menentukan Arah Arus Aruhan', 'Ciri Binaan / Gelombang Output'],
            rows: [
              ['Dawai lurus bergerak dalam medan magnet', 'Petua Tangan **KANAN** Fleming (Ibu jari = Gerakan dawai, Telunjuk = Medan U→S, Tengah = Arus aruhan)', 'Tiada arus jika dawai digerakkan selari dengan garis medan (tiada pemotongan fluks)'],
              ['Magnet bergerak terhadap solenoid', 'Hukum Lenz (dekati $\\to$ kutub sama menolak; jauhi $\\to$ kutub berlawanan menarik)', 'Guna Petua Genggaman Tangan Kanan untuk menukar kekutuban hujung solenoid kepada arah arus'],
              ['Penjana Arus Ulang-Alik (a.u.)', 'Dua gelang gelincir lengkap + berus karbon', 'Graf arus melawan masa: gelombang sinus berselang-seli positif dan negatif'],
              ['Penjana Arus Terus (a.t.)', 'Komutator gelang terbelah + berus karbon', 'Graf arus melawan masa: puncak berkembar semua positif (searah)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Faktor Magnitud d.g.e. Aruhan (Hukum Faraday)',
            latex: '|\\mathcal{E}_{\\text{aruhan}}| \\propto N \\times \\text{laju pemotongan fluks magnet } \\left(\\frac{\\Delta \\Phi}{\\Delta t}\\right)',
            symbols: [
              { symbol: '\\mathcal{E}_{\\text{aruhan}}', meaning: 'Magnitud daya gerak elektrik aruhan', unit: '$\\text{V}$' },
              { symbol: 'N', meaning: 'Bilangan lilitan gegelung / solenoid', unit: 'tiada unit' },
              { symbol: '\\Delta \\Phi / \\Delta t', meaning: 'Kadar perubahan / pemotongan fluks magnet', unit: '$\\text{Wb s}^{-1}$' },
            ],
            appliesWhen: 'Wujud gerakan relatif atau perubahan kekuatan medan magnet yang memotong konduktor.',
            failsWhen: 'Apabila magnet dan gegelung **pegun relatif antara satu sama lain** (walaupun magnet sangat kuat berada di dalam solenoid!), kadar pemotongan fluks adalah SIFAR, maka d.g.e. aruhan $= 0$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-fleming-motor',
            title: 'Pemotongan Fluks Magnet & Prinsip Aruhan Elektromagnet',
            whatItShows: 'Menggambarkan bagaimana interaksi gerakan konduktor melintasi garis fluks magnet antara kutub U dan S menjana d.g.e. aruhan apabila bilangan garis medan dipotong berubah.',
            axisOrRule: 'Motor = Tangan KIRI (Elektrik $\\to$ Daya); Penjana/Dawai digerakkan = Tangan KANAN (Gerakan $\\to$ Arus Aruhan).',
          },
        ],
        experiments: [
          {
            code: 'Aktiviti 4.11 & 4.13',
            title: 'Faktor Magnitud d.g.e. Aruhan & Hukum Lenz dalam Solenoid',
            aim: 'Mengkaji faktor yang mempengaruhi magnitud d.g.e. aruhan dan menentukan arah arus aruhan menggunakan Hukum Lenz.',
            inference: 'Magnitud d.g.e. aruhan bergantung pada kelajuan gerakan magnet, bilangan lilitan solenoid, dan kekuatan medan magnet.',
            hypothesis: 'Semakin laju gerakan magnet, semakin banyak lilitan solenoid, atau semakin kuat medan magnet, semakin besar pesongan galvanometer.',
            variables: {
              manipulated: 'Kelajuan menolak magnet (perlahan vs pantas), bilangan lilitan solenoid ($400$ vs $800$), bilangan magnet ($1$ vs $2$)',
              responding: 'Bacaan pesongan maksimum galvanometer berpusat sifar (mewakili d.g.e. aruhan)',
              fixed: 'Saiz diameter solenoid dan wayar penyambung',
            },
            setupLogic: 'Sambungkan solenoid terus kepada galvanometer berpusat sifar. Tolak kutub Utara magnet bar pada kelajuan berbeza serta rekodkan arah dan magnitud pesongan maksimum.',
            expectedResult: 'Tolakan pantas, lilitan $800$, dan 2 batang magnet memberi pesongan terbesar; menarik keluar magnet memberi pesongan ke arah bertentangan.',
            conclusion: 'Magnitud d.g.e. aruhan berkadar terus dengan kadar pemotongan fluks magnet (Hukum Faraday) dan arah arus sentiasa menentang perubahan gerakan magnet (Hukum Lenz).',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Menentukan Arah Pesongan Galvanometer dengan Hukum Lenz',
          problem: 'Kutub Selatan ($S$) sebatang magnet bar ditolak dengan pantas ke arah hujung kiri A sebuah solenoid yang disambungkan kepada galvanometer berpusat sifar. Terangkan kekutuban di hujung A dan apa berlaku apabila magnet itu dipegang pegun di dalam solenoid.',
          given: ['Kutub menghampiri hujung A = Selatan ($S$)', 'Gerakan = mendekati solenoid'],
          formulaLatex: '\\text{Hukum Lenz: Hujung A menentang kemasukan kutub } S \\implies \\text{Kutub A ialah } S',
          formulaWhy: 'Menghasilkan kutub sama menolak kemasukan magnet supaya prinsip keabadian tenaga dipatuhi.',
          substituteLatex: '\\text{Melihat muka A: arus mengikut arah JAM } (\\text{Selatan } S);\\quad \\text{Pegun } \\Rightarrow \\frac{\\Delta \\Phi}{\\Delta t} = 0',
          answer: 'Hujung A menjadi kutub **Selatan** untuk menolak magnet; jarum galvanometer terpesong ke satu sisi dan segera kembali kepada **sifar ($0$)** apabila magnet pegun di dalam solenoid.',
          trapAlert: 'Ramai murid menyangka semasa magnet berada pegun di tengah solenoid, galvanometer kekal terpesong. Ingat: arus aruhan hanya wujud **ketika magnet sedang bergerak** (ada perubahan fluks)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Hukum Faraday secara verbatim.', answer: 'Magnitud d.g.e. aruhan adalah berkadar terus dengan kadar pemotongan fluks magnet.' },
          { question: 'Apakah perbezaan binaan fizikal antara penjana a.u. dengan penjana a.t.?', answer: 'Penjana a.u. menggunakan dua gelang gelincir penuh, manakala penjana a.t. menggunakan komutator gelang terbelah.' },
          { question: 'Jika dawai digerakkan selari dengan garis medan magnet, berapakah d.g.e. aruhan terhasil?', answer: 'Sifar ($0\\text{ V}$) kerana tiada pemotongan garis medan magnet berlaku.' },
        ],
        fadedProblem: {
          prompt: 'Kutub Utara sebuah magnet bar ditarik keluar menjauhi hujung P sebuah solenoid ber lilitan $500$.',
          step1GivenAndFormula: 'Diberi: Kutub menjauhi = Utara ($U$), gerakan = menjauhi P. Guna: Hukum Lenz.',
          studentTask: 'Nyatakan kekutuban magnet aruhan di hujung P, arah arus (jika dilihat dari hujung P), dan kesannya jika magnet ditarik dua kali lebih pantas.',
          answerSteps: 'Hujung P menjadi kutub **Selatan ($S$)** untuk menarik semula kutub Utara yang menjauh; arus mengalir mengikut **arah jam** dilihat dari hujung P; menarik 2x lebih pantas meningkatkan kadar pemotongan fluks maka magnitud arus aruhan dan pesongan galvanometer menjadi jauh lebih besar.',
        },
        transferQuestion: {
          question: 'Terangkan prinsip pembrekan elektromagnet pada menara jatuh (drop tower) yang mempunyai magnet kekal di bawah kerusi dan jalur kuprum tetap di dasar menara.',
          answer: 'Apabila kerusi bergerak laju melintasi jalur kuprum, berlaku pemotongan fluks magnet yang menghasilkan arus aruhan (arus pusar) besar dalam jalur kuprum. Mengikut Hukum Lenz, medan magnet daripada arus aruhan itu bertindak menentang gerakan magnet kekal pada kerusi lalu memperlahankan kerusi secara lancar tanpa geseran fizikal.',
        },
      },
    },
    {
      id: 't5-4.3',
      chapterId: 't5-bab-4',
      code: '4.3',
      title: 'Transformer',
      pageRef: 'm.s. 162–170',
      part1Anchor: {
        phenomenon:
          'Pengecas telefon menukar $240\\text{ V}$ soket dinding kepada $5\\text{ V}$ tanpa membakar bateri, manakala pencawang elektrik menaikkan voltan sehingga $275\\text{ kV}$ sebelum menghantarnya merentas semenanjung supaya kabel tidak mencair akibat pemanasan haba.',
        chapterConnection:
          'Aplikasi langsung aruhan elektromagnet (4.2) menggunakan perubahan arus ulang-alik dalam gegelung primer untuk mengaruh voltan dalam gegelung sekunder, melengkapkan sistem penghantaran tenaga Grid Nasional.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Kerja Transformer & Transformer Unggul',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Transformer hanya berfungsi menggunakan ' },
            { text: 'arus ulang-alik (a.u.)', keyword: true },
            { text: ' yang menghasilkan ' },
            { text: 'fluks magnet yang sentiasa berubah-ubah arah dan magnitudnya', keyword: true },
            { text: ' dalam teras besi lembut untuk mengaruh d.g.e. dalam gegelung sekunder. Bagi transformer unggul (kecekapan $100\\%$), ' },
            { text: 'kuasa output sama dengan kuasa input', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\frac{V_S}{V_P} = \\frac{N_S}{N_P}, \\qquad V_P I_P = V_S I_S \\text{ (unggul)}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Transformer Gagal Berfungsi dengan Bekalan Arus Terus (a.t.)',
            cause: 'Bateri a.t. disambungkan ke gegelung primer sebuah transformer.',
            mechanism: 'Arus terus mengalir malar pada satu arah sahaja lalu menghasilkan medan magnet yang malar dan tetap (kecuali seketika suis dibuka/ditutup).',
            effect: 'Tiada perubahan atau pemotongan fluks magnet berlaku di gegelung sekunder; maka voltan output sekunder ialah **sifar ($0\\text{ V}$)**.',
          },
          {
            title: 'Mengapa Penghantaran Kuasa Grid Nasional Menggunakan Voltan Sangat Tinggi ($275\\text{ kV}$)',
            cause: 'Kuasa elektrik $P = VI$ hendak dihantar melalui kabel panjang berintangan $R$.',
            mechanism: 'Menaikkan voltan penghantaran $V$ melalui transformer injak naik mengecilkan arus $I = P/V$ dalam kabel. Kehilangan kuasa akibat pemanasan kabel ialah $P_{\\text{hilang}} = I^2 R$.',
            effect: 'Mengurangkan arus sebanyak $10$ kali mengurangkan kehilangan haba kabel sebanyak $10^2 = 100$ kali ganda!',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Transformer Injak Naik vs Injak Turun & Rangkaian Grid',
            headers: ['Jenis / Peringkat', 'Nisbah Lilitan & Voltan', 'Penerangan / Peranan dalam Grid Nasional'],
            rows: [
              ['Transformer Injak Naik', '$N_S > N_P$ maka $V_S > V_P$ ($I_S < I_P$)', 'Di stesen jana kuasa ($20\\text{ kV} \\to 132\\text{ kV} / 275\\text{ kV}$) untuk mengurangkan kehilangan haba $I^2R$'],
              ['Transformer Injak Turun', '$N_S < N_P$ maka $V_S < V_P$ ($I_S > I_P$)', 'Di pencawang ($275\\text{ kV} \\to 33\\text{ kV}$ industri berat $\\to 11\\text{ kV}$ industri ringan $\\to 230\\text{ V}$ rumah)'],
            ],
          },
          {
            title: 'Empat Sumber Kehilangan Tenaga Transformer & Langkah Mengatasinya (Jadual 4.9 & 4.10)',
            headers: ['Sumber Kehilangan Tenaga', 'Punca Fizikal', 'Cara Mengurangkan (Pengubahsuaian)'],
            rows: [
              ['1. Rintangan gegelung', 'Pemanasan Joule $I^2R$ dalam dawai gegelung primer dan sekunder', 'Guna **dawai kuprum yang lebih tebal** untuk mengurangkan rintangan'],
              ['2. Arus pusar (Eddy currents)', 'Fluks berubah mengaruh arus berpusar dalam teras besi padu, memanaskan teras', 'Guna **teras besi lembut berlamina** (kepingan nipis disalut penebat)'],
              ['3. Histerisis', 'Tenaga terbazir memagnet dan menyahmagnetkan teras berulang kali 50 kali sesaat', 'Guna **teras besi lembut** yang mudah dimagnet dan mudah dinyahmagnetkan'],
              ['4. Kebocoran fluks magnet', 'Tidak semua fluks dari primer memotong gegelung sekunder', 'Lilit gegelung primer dan sekunder **bertindih/rapat** pada teras berbentuk U/O tertutup'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Transformer & Kecekapan Transformer',
            latex: '\\frac{V_S}{V_P} = \\frac{N_S}{N_P}, \\qquad \\eta = \\frac{P_{\\text{output}}}{P_{\\text{input}}} \\times 100\\% = \\frac{V_S I_S}{V_P I_P} \\times 100\\%',
            symbols: [
              { symbol: 'V_P, V_S', meaning: 'Voltan input (primer) & output (sekunder)', unit: '$\\text{V}$' },
              { symbol: 'N_P, N_S', meaning: 'Bilangan lilitan gegelung primer & sekunder', unit: 'lilitan' },
              { symbol: '\\eta', meaning: 'Kecekapan transformer', unit: '$\\%$' },
            ],
            appliesWhen: '$V_S/V_P = N_S/N_P$ bagi sebarang transformer a.u.; $V_P I_P = V_S I_S$ HANYA sah jika transformer **unggul ($100\\%$ cekap)**.',
            failsWhen: 'Perangkap kerap: apabila soalan menyatakan kecekapan (cth. $\\eta = 80\\%$), JANGAN guna $V_P I_P = V_S I_S$! Wajib guna $V_S I_S = 0.80 \\times V_P I_P$.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-transformer',
            title: 'Binaan Transformer Berteras Besi Lembut Berlamina & Arus Grid',
            whatItShows: 'Bekalan a.u. pada gegelung primer ($N_P$) menghasilkan fluks magnet berubah-ubah melalui teras besi lembut berlamina tertutup untuk mengaruh voltan sekunder ($N_S$).',
            axisOrRule: 'Nisbah voltan mengikut tepat nisbah lilitan ($V_S/V_P = N_S/N_P$); arus pula songsang ($I_S < I_P$ pada injak naik) agar kuasa abadi.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Transformer Unggul Menggerakkan Mentol $18\\text{ V}, 27\\text{ W}$',
          problem: 'Sebuah transformer unggul disambungkan kepada bekalan $240\\text{ V}$ a.u. untuk menyalakan mentol $18\\text{ V}, 27\\text{ W}$ pada kecerahan normal. Jika bilangan lilitan gegelung sekunder ialah $N_S = 60$, hitung: (a) $N_P$, (b) arus sekunder $I_S$, (c) arus primer $I_P$.',
          given: ['$V_P = 240\\text{ V}$, $V_S = 18\\text{ V}$', '$P_{\\text{output}} = 27\\text{ W}$', '$N_S = 60$, kecekapan $= 100\\%$'],
          formulaLatex: '\\frac{N_P}{N_S} = \\frac{V_P}{V_S}, \\quad I_S = \\frac{P_S}{V_S}, \\quad V_P I_P = V_S I_S',
          formulaWhy: 'Transformer unggul mempunyai kuasa input sama dengan kuasa output ($27\\text{ W}$).',
          substituteLatex: 'N_P = \\frac{240}{18} \\times 60 = 800;\\quad I_S = \\frac{27}{18} = 1.5\\text{ A};\\quad I_P = \\frac{27}{240}',
          answer: '(a) $N_P = 800$ lilitan; (b) $I_S = 1.50\\text{ A}$; (c) $I_P = 0.1125\\text{ A}$ ($0.113\\text{ A}$).',
          trapAlert: 'Jika transformer ini BUKAN unggul (misalnya kecekapan $\\eta = 75\\%$), nilai $N_P = 800$ dan $I_S = 1.5\\text{ A}$ tetap sama, tetapi kuasa input ialah $27 / 0.75 = 36\\text{ W}$ menjadikan $I_P = 36/240 = 0.15\\text{ A}$.',
        },
      ],
      part5DecisionTable: {
        title: 'Pengubahsuaian Transformer untuk Kecekapan Maksimum (Kertas 2 SPM)',
        rows: [
          {
            designChoice: 'Menggunakan teras besi lembut (berbanding keluli)',
            scientificReason: 'Besi lembut mudah dimagnetkan dan mudah dinyahmagnetkan, meminimumkan kehilangan tenaga akibat histerisis.',
          },
          {
            designChoice: 'Menggunakan teras besi berlamina (kepingan nipis berpenebat)',
            scientificReason: 'Menambah rintangan merentasi kepingan teras untuk mengurangkan arus pusar dan mengurangkan pemanasan teras.',
          },
          {
            designChoice: 'Melilit gegelung dengan dawai kuprum yang tebal',
            scientificReason: 'Mengurangkan rintangan dawai gegelung untuk mengurangkan kehilangan haba ($P = I^2R$).',
          },
          {
            designChoice: 'Melilit gegelung sekunder bertindih di atas gegelung primer pada teras tertutup',
            scientificReason: 'Mengurangkan kebocoran fluks magnet supaya hampir semua fluks primer memotong gegelung sekunder.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan empat punca kehilangan tenaga dalam transformer.', answer: 'Rintangan gegelung dawai, arus pusar, histerisis, dan kebocoran fluks magnet.' },
          { question: 'Mengapakah arus ulang-alik digunakan dalam penghantaran elektrik Grid Nasional?', answer: 'Kerana voltan a.u. boleh dinaikkan dan diturunkan dengan mudah dan cekap menggunakan transformer untuk mengurangkan kehilangan kuasa $I^2R$.' },
          { question: 'Bagaimanakah dapur aruhan (induction cooker) memanaskan periuk keluli tetapi tidak permukaan seramik?', answer: 'Gegelung menghasilkan medan magnet berubah yang mengaruh arus pusar besar hanya di dalam dasar periuk logam berkonduktor (menjana haba $I^2R$), manakala seramik ialah penebat.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah transformer berkecekapan $80\\%$ menurunkan voltan $240\\text{ V}$ kepada $12\\text{ V}$ untuk membekalkan arus $4.0\\text{ A}$ kepada pemanas kecil.',
          step1GivenAndFormula: 'Diberi: $V_P = 240\\text{ V}$, $V_S = 12\\text{ V}$, $I_S = 4.0\\text{ A}$, $\\eta = 80\\%$. Rumus: $\\eta = \\frac{V_S I_S}{V_P I_P} \\times 100\\%$.',
          studentTask: 'Hitung kuasa output, kuasa input, dan arus primer $I_P$.',
          answerSteps: '$P_{\\text{out}} = 12 \\times 4.0 = 48\\text{ W}$; $P_{\\text{in}} = \\frac{48}{0.80} = 60\\text{ W}$; $I_P = \\frac{60}{240} = 0.25\\text{ A}$.',
        },
        transferQuestion: {
          question: 'Seorang murid menyambungkan gegelung primer sebuah transformer injak naik kepada bateri $12\\text{ V}$ a.t., dan meletakkan sebiji mentol $24\\text{ V}$ di gegelung sekunder. Terangkan pemerhatian pada mentol apabila suis dihidupkan secara berterusan.',
          answer: 'Mentol mungkin berkelip sangat singkat sewaktu suis baru ditutup (kerana fluks berubah seketika dari 0 ke maksimum), kemudian terpadam sepenuhnya dan kekal tidak menyala kerana arus terus malar tidak menghasilkan perubahan fluks magnet di dalam teras.',
        },
      },
    },
  ],
};
