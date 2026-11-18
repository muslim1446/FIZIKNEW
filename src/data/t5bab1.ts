import type { ChapterContent } from '../types/textbook';

export const t5bab1: ChapterContent = {
  id: 't5-bab-1',
  formLevel: 5,
  number: 1,
  title: 'Daya dan Gerakan II',
  pageRange: 'm.s. 2–33',
  overview:
    'Menggabungkan vektor daya kepada satu daya paduan, meleraikan daya kepada komponen serenjang pada satah condong, menganalisis keseimbangan daya, serta mengira tenaga keupayaan kenyal spring.',
  subtopics: [
    {
      id: 't5-1.1',
      chapterId: 't5-bab-1',
      code: '1.1',
      title: 'Daya Paduan',
      pageRef: 'm.s. 4–12',
      part1Anchor: {
        phenomenon:
          'Apabila dua atau lebih daya menarik, menolak, atau menentang pergerakan objek serentak (seperti kapal tunda menarik kapal kargo atau penumpang di dalam lif yang memecut), pecutan objek ditentukan oleh satu daya berkesan tunggal — bukan setiap daya secara berasingan.',
        chapterConnection:
          'Menjadi batu asas vektor bagi meleraikan daya (1.2) dan menentukan syarat keseimbangan jasad pegun atau bergerak seragam (1.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Daya Paduan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Daya paduan ialah ' },
            { text: 'daya tunggal', keyword: true },
            { text: ' yang mewakili ' },
            { text: 'jumlah secara vektor', keyword: true },
            { text: ' dua atau lebih daya yang bertindak ke atas sesuatu objek.' },
          ],
          equationLatex: 'F = ma',
        },
        {
          title: 'Prinsip Penambahan Vektor Daya',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Untuk dua daya tidak selari, magnitud dan arah daya paduan ditentukan melalui kaedah ' },
            { text: 'segi tiga daya', keyword: true },
            { text: ' atau kaedah ' },
            { text: 'segi empat selari daya', keyword: true },
            { text: ' mengikut skala yang dipilih.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Berat Ketara Berubah di Dalam Lif yang Memecut',
            cause: 'Lif memecut ke atas ($a > 0$) atau memecut ke bawah ($a < 0$).',
            mechanism: 'Lantai lif mengenakan tindak balas normal $R$ ke atas. Mengikut $F = ma$: ke atas memerlukan $R - mg = ma$, ke bawah memerlukan $mg - R = ma$.',
            effect: 'Bacaan penimbang ($R$) bertambah semasa memecut ke atas ($R = m(g+a)$), berkurang semasa memecut ke bawah ($R = m(g-a)$), dan sama dengan berat sebenar $mg$ jika lif pegun atau bergerak pada halaju seragam ($a = 0$).',
          },
          {
            title: 'Sistem Troli & Pemberat Bertali Takal',
            cause: 'Pemberat tergantung ditarik ke bawah oleh graviti ($W_2 = m_2 g$), manakala troli mengalami daya geseran $F_R$.',
            mechanism: 'Kedua-dua jisim terikat oleh tali tak meregang dan memecut dengan magnitud $a$ yang sama: $m_2 g - T = m_2 a$ dan $T - F_R = m_1 a$.',
            effect: 'Menambah kedua-dua persamaan menghapuskan ketegangan $T$: daya paduan bersih sistem ialah $(m_2 g - F_R) = (m_1 + m_2)a$.',
          },
        ],
        tables: [
          {
            title: 'Kes Khas Penentuan Daya Paduan & Bacaan Penimbang dalam Lif',
            headers: ['Situasi / Gerakan Lif', 'Persamaan Daya Paduan', 'Bacaan Penimbang ($R$)'],
            rows: [
              ['Dua daya sama arah ($F_1, F_2$)', '$F = F_1 + F_2$', 'Arah sama dengan kedua-dua daya'],
              ['Dua daya bertentangan arah ($F_1 > F_2$)', '$F = F_1 - F_2$', 'Mengikut arah daya lebih besar'],
              ['Dua daya bersudut tegak ($90^\\circ$)', '$F = \\sqrt{F_1^2 + F_2^2}$, $\\tan\\theta = \\frac{F_2}{F_1}$', 'Magnitud & sudut dengan Teorem Pythagoras'],
              ['Lif pegun atau halaju seragam ($a = 0$)', '$R - mg = 0$', '$R = mg$ (sama dengan berat sebenar)'],
              ['Lif memecut ke atas ($a$ ke atas)', '$R - mg = ma$', '$R = m(g + a)$ (terasa lebih berat)'],
              ['Lif memecut ke bawah ($a$ ke bawah)', '$mg - R = ma$', '$R = m(g - a)$ (terasa lebih ringan)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Hukum Gerakan Newton Kedua (Daya Paduan)',
            latex: 'F = ma',
            symbols: [
              { symbol: 'F', meaning: 'Daya paduan (daya bersih)', unit: '$\\text{N}$' },
              { symbol: 'm', meaning: 'Jumlah jisim yang dipecutkan', unit: '$\\text{kg}$' },
              { symbol: 'a', meaning: 'Pecutan objek', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Menghubungkan daya bersih vektor yang bertindak ke atas sistem jisim tetap dengan pecutannya.',
            failsWhen: 'Jangan gantikan daya gunaan tunggal sebagai $F$ jika masih terdapat geseran atau ketegangan yang menentang gerakan; tolak semua daya berlawanan dahulu.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-vector-forces',
            title: 'Gambar Rajah Vektor Daya: Penambahan Segi Empat Selari & Leraian Satah Condong',
            whatItShows: 'Menunjukkan bagaimana dua daya $F_1$ dan $F_2$ digabung menjadi daya paduan $F$ menggunakan pepenjuru segi empat selari serta penguraian daya pada komponen $x$ dan $y$.',
            axisOrRule: 'Pepenjuru dari bucu sepunya mewakili magnitud dan arah daya paduan; semua anak panah komponen mesti bertolak dari titik tindakan yang sama.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Buah Kelapa Jatuh dengan Rintangan Udara',
          problem: 'Sebiji buah kelapa berjisim $2.0\\text{ kg}$ jatuh dengan pecutan $9.0\\text{ m s}^{-2}$. Jika pecutan graviti ialah $9.81\\text{ m s}^{-2}$, hitung daya paduan pada kelapa dan rintangan udara yang bertindak ke atasnya.',
          given: ['$m = 2.0\\text{ kg}$', '$a = 9.0\\text{ m s}^{-2}$ ke bawah', '$g = 9.81\\text{ m s}^{-2}$'],
          formulaLatex: 'F = ma, \\quad W - R = F',
          formulaWhy: 'Daya paduan ke bawah ialah hasil tolak berat $W = mg$ dengan rintangan udara $R$ ke atas.',
          substituteLatex: 'F = 2.0 \\times 9.0 = 18.0\\text{ N}; \\quad W = 2.0 \\times 9.81 = 19.62\\text{ N} \\Rightarrow R = 19.62 - 18.0',
          answer: '$F = 18.0\\text{ N}$ ke bawah; rintangan udara $R = 1.62\\text{ N}$ ke atas.',
          trapAlert: 'Pelajar kerap menganggap $a = g = 9.81\\text{ m s}^{-2}$ walhal wujud rintangan udara. Gunakan nilai $a = 9.0\\text{ m s}^{-2}$ yang diberi untuk $F = ma$.',
        },
        {
          title: 'Contoh 2: Penumpang di Dalam Lif',
          problem: 'Seorang lelaki berjisim $60\\text{ kg}$ berdiri di atas penimbang di dalam lif. Hitung bacaan penimbang apabila lif: (a) pegun atau bergerak dengan halaju seragam, (b) memecut ke atas pada $1.2\\text{ m s}^{-2}$. [$g = 9.81\\text{ m s}^{-2}$]',
          given: ['$m = 60\\text{ kg}$', '$g = 9.81\\text{ m s}^{-2}$', '(a) $a = 0$, (b) $a = 1.2\\text{ m s}^{-2}$ ke atas'],
          formulaLatex: '(a)\\ R = mg \\qquad (b)\\ R - mg = ma',
          formulaWhy: 'Penimbang mengukur tindak balas normal $R$ lantai lif ke atas kaki penumpang.',
          substituteLatex: '(a)\\ R = 60(9.81) = 588.6\\text{ N}; \\qquad (b)\\ R = 60(9.81 + 1.2)',
          answer: '(a) $588.6\\text{ N}$; (b) $660.6\\text{ N}$.',
          trapAlert: 'Jika lif bergerak ke atas tetapi sedang menyahpecut (atau memecut ke bawah), daya paduan menghala ke bawah maka $R = m(g - a) < mg$.',
        },
        {
          title: 'Contoh 3: Sistem Troli & Pemberat Bertali Takal',
          problem: 'Sebuah troli berjisim $1.2\\text{ kg}$ ditarik oleh satu pemberat $m$ melalui takal licin dengan daya geseran malar $6.0\\text{ N}$ dan memecut pada $4.0\\text{ m s}^{-2}$. Hitung (a) daya paduan pada troli, (b) ketegangan tali $T$, dan (c) jisim pemberat $m$. [$g = 9.81\\text{ m s}^{-2}$]',
          given: ['$m_{\\text{troli}} = 1.2\\text{ kg}$', '$F_R = 6.0\\text{ N}$', '$a = 4.0\\text{ m s}^{-2}$'],
          formulaLatex: 'F = m_{\\text{troli}}a, \\quad T - F_R = F, \\quad mg - T = ma',
          formulaWhy: 'Asingkan jasad bebas (free-body) bagi troli mengufuk dahulu untuk memperoleh $T$, kemudian jasad bebas bagi pemberat menegak.',
          substituteLatex: 'F = 1.2 \\times 4.0 = 4.8\\text{ N}; \\quad T = 4.8 + 6.0 = 10.8\\text{ N}; \\quad m(9.81 - 4.0) = 10.8',
          answer: '(a) $4.8\\text{ N}$; (b) $10.8\\text{ N}$; (c) $m = 1.86\\text{ kg}$.',
          trapAlert: 'Kesilapan paling kerap: terlupa memasukkan daya pecutan pemberat $ma$ di sebelah kanan persamaan pemberat ($mg - T = ma$, bukan $mg = T$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan takrifan daya paduan mengikut buku teks KSSM.', answer: 'Daya tunggal yang mewakili jumlah secara vektor dua atau lebih daya yang bertindak ke atas sesuatu objek.' },
          { question: 'Apakah persamaan bacaan penimbang $R$ apabila lif memecut ke bawah dengan pecutan $a$?', answer: '$R = m(g - a)$ kerana $mg - R = ma$.' },
          { question: 'Dua daya $6\\text{ N}$ dan $8\\text{ N}$ bertindak bersudut tegak antara satu sama lain. Berapakah daya paduannya?', answer: '$\\sqrt{6^2 + 8^2} = 10\\text{ N}$.' },
        ],
        fadedProblem: {
          prompt: 'Dua daya $50\\text{ N}$ (ke timur) dan $120\\text{ N}$ (ke utara) bertindak serentak ke atas sebuah peti.',
          step1GivenAndFormula: 'Diberi: $F_x = 50\\text{ N}$, $F_y = 120\\text{ N}$, $\\theta = 90^\\circ$. Rumus: $F = \\sqrt{F_x^2 + F_y^2}$ dan $\\tan\\alpha = \\frac{F_y}{F_x}$.',
          studentTask: 'Hitung magnitud daya paduan dan sudut arahnya dari arah timur.',
          answerSteps: '$F = \\sqrt{50^2 + 120^2} = \\sqrt{16900} = 130\\text{ N}$; $\\tan\\alpha = \\frac{120}{50} = 2.4 \\Rightarrow \\alpha = 67.4^\\circ$ ke utara dari timur.',
        },
        transferQuestion: {
          question: 'Sebuah lif bergerak ke atas sambil menyahpecut pada $2.0\\text{ m s}^{-2}$. Adakah bacaan penimbang bagi seorang murid $50\\text{ kg}$ melebihi atau kurang daripada berat sebenarnya? Terangkan dan hitung bacaan itu.',
          answer: 'Kurang daripada berat sebenar. Kerana lif menyahpecut ketika naik, arah pecutan $a$ dan daya paduan adalah ke bawah ($mg > R$). Maka $R = 50(9.81 - 2.0) = 390.5\\text{ N} < 490.5\\text{ N}$.',
        },
      },
    },
    {
      id: 't5-1.2',
      chapterId: 't5-bab-1',
      code: '1.2',
      title: 'Leraian Daya',
      pageRef: 'm.s. 13–17',
      part1Anchor: {
        phenomenon:
          'Menarik beg bagasi pada sudut $30^\\circ$ ke atas mengurangkan berat berkesan beg pada lantai sekaligus menggerakkannya ke hadapan; manakala bongkah di atas satah condong menggelongsor kerana sebahagian beratnya bertindak selari dengan permukaan satah.',
        chapterConnection:
          'Operasi songsang kepada penambahan daya (1.1): memecahkan satu daya tunggal kepada dua komponen serenjang supaya persamaan gerakan $x$ dan $y$ boleh diselesaikan secara bebas dalam topik keseimbangan (1.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Leraian Daya',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Leraian daya ialah proses ' },
            { text: 'meleraikan satu daya tunggal', keyword: true },
            { text: ' kepada ' },
            { text: 'dua komponen daya yang berserenjang', keyword: true },
            { text: ' antara satu sama lain.' },
          ],
          equationLatex: 'F_x = F\\cos\\theta, \\qquad F_y = F\\sin\\theta',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Sudut Condong Mengawal Pecutan di Atas Satah Condong',
            cause: 'Objek berjisim $m$ diletakkan di atas satah condong bersudut $\\theta$ terhadap ufuk.',
            mechanism: 'Berat menegak $W = mg$ dileraikan kepada komponen selari satah $W_x = mg\\sin\\theta$ dan komponen serenjang satah $W_y = mg\\cos\\theta$.',
            effect: 'Apabila $\\theta$ bertambah, $\\sin\\theta$ bertambah lalu meningkatkan daya tarikan ke bawah satah manakala tindak balas normal $R = mg\\cos\\theta$ berkurang.',
          },
          {
            title: 'Menarik vs Menolak Mesin Rumput pada Sudut $\\theta$',
            cause: 'Daya $F$ bertindak pada sudut $\\theta$ dengan satah mengufuk.',
            mechanism: 'Menarik ke atas menghasilkan komponen menegak $F\\sin\\theta$ ke atas ($R = mg - F\\sin\\theta$); menolak ke bawah menghasilkan $F\\sin\\theta$ ke bawah ($R = mg + F\\sin\\theta$).',
            effect: 'Menarik mengurangkan tindak balas normal lantai dan daya geseran, menjadikannya lebih mudah digerakkan berbanding menolak.',
          },
        ],
        tables: [
          {
            title: 'Panduan Pantas Komponen Daya Mengikut Geometri',
            headers: ['Kes Fizikal', 'Komponen Selari Gerakan / Ufuk', 'Komponen Serenjang / Tegak'],
            rows: [
              ['Daya tarikan $T$ pada sudut $\\theta$ dari ufuk', '$T_x = T\\cos\\theta$ (menggerakkan ke hadapan)', '$T_y = T\\sin\\theta$ (ke atas, mengurangkan $R$)'],
              ['Satah condong sudut $\\theta$ dari ufuk', '$W_x = mg\\sin\\theta$ (ke bawah satah)', '$W_y = mg\\cos\\theta$ (diimbangi oleh $R$)'],
              ['Jika sudut $\\alpha$ diberi dari paksi tegak', '$F_x = F\\sin\\alpha$ (bertentangan sudut)', '$F_y = F\\cos\\alpha$ (bersebelahan sudut)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Komponen Leraian Daya bagi Daya Condong & Satah Condong',
            latex: 'F_x = F\\cos\\theta \\qquad F_y = F\\sin\\theta \\qquad\\text{dan Satah Condong: } W_{\\parallel} = mg\\sin\\theta,\\ W_{\\perp} = mg\\cos\\theta',
            symbols: [
              { symbol: 'F', meaning: 'Magnitud daya tunggal', unit: '$\\text{N}$' },
              { symbol: '\\theta', meaning: 'Sudut di antara vektor daya dengan paksi mengufuk (atau sudut satah condong)', unit: '$^\\circ$' },
              { symbol: 'W_{\\parallel}', meaning: 'Komponen berat selari permukaan satah condong', unit: '$\\text{N}$' },
            ],
            appliesWhen: 'Daya dileraikan kepada paksi-paksi yang berserenjang tepat ($90^\\circ$) antara satu sama lain.',
            failsWhen: 'Periksa kedudukan sudut $\\theta$! Komponen yang bersebelahan dengan sudut $\\theta$ sentiasa memakai $\\cos\\theta$, manakala yang bertentangan memakai $\\sin\\theta$.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-vector-forces',
            title: 'Leraian Berat $W$ di Atas Satah Condong Bersudut $\\theta$',
            whatItShows: 'Berat $W = mg$ yang menegak ke bawah diuraikan kepada $W_x = mg\\sin\\theta$ selari satah dan $W_y = mg\\cos\\theta$ berserenjang dengan satah.',
            axisOrRule: 'Sudut antara garis berat $W$ dengan paksi serenjang satah ($W_y$) adalah sama dengan sudut kecondongan satah $\\theta$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Kotak Ditarik di Atas Lantai Kasar dengan Daya Condong',
          problem: 'Sebuah kotak berjisim $2.4\\text{ kg}$ ($W = 24\\text{ N}$) ditarik dengan daya $T = 36\\text{ N}$ pada sudut $30^\\circ$ di atas ufuk. Daya geseran lantai ialah $20\\text{ N}$. Hitung komponen ufuk $T_x$, komponen tegak $T_y$, daya paduan ufuk dan pecutan kotak.',
          given: ['$T = 36\\text{ N}$, $\\theta = 30^\\circ$', '$m = 2.4\\text{ kg}$', '$F_R = 20\\text{ N}$ menentang gerakan'],
          formulaLatex: 'T_x = T\\cos\\theta, \\quad T_y = T\\sin\\theta, \\quad F = T_x - F_R = ma',
          formulaWhy: 'Hanya komponen selari permukaan lantai ($T_x$ dan $F_R$) menentukan pecutan mengufuk kotak.',
          substituteLatex: 'T_x = 36\\cos 30^\\circ = 31.18\\text{ N}; \\quad T_y = 36\\sin 30^\\circ = 18.00\\text{ N}; \\quad F = 31.18 - 20 = 11.18\\text{ N} \\Rightarrow a = \\frac{11.18}{2.4}',
          answer: '$T_x = 31.18\\text{ N}$, $T_y = 18.00\\text{ N}$, $F = 11.18\\text{ N}$, $a = 4.66\\text{ m s}^{-2}$.',
          trapAlert: 'Jangan tolak $F_R$ daripada daya penuh $36\\text{ N}$! Daya geseran mengufuk mesti ditolak daripada komponen mengufuk $T_x$ sahaja.',
        },
        {
          title: 'Contoh 2: Bongkah Meluncur di Atas Satah Condong Licin',
          problem: 'Sebuah bongkah kayu berjisim $2.4\\text{ kg}$ ($W = 24\\text{ N}$) diletakkan di atas satah condong licin bersudut $60^\\circ$ dari ufuk. Hitung tindak balas normal $R$, komponen berat selari satah $W_x$, dan pecutan bongkah menuruni satah.',
          given: ['$m = 2.4\\text{ kg}$, $W = 24\\text{ N}$', '$\\theta = 60^\\circ$', 'Satah licin ($F_R = 0$)'],
          formulaLatex: 'R = W\\cos\\theta, \\quad W_x = W\\sin\\theta, \\quad a = \\frac{W_x}{m}',
          formulaWhy: 'Bongkah tidak bergerak ke dalam satah, jadi $R = W_y = W\\cos\\theta$, manakala $W_x$ membekalkan pecutan sepanjang satah.',
          substituteLatex: 'R = 24\\cos 60^\\circ = 12.0\\text{ N}; \\quad W_x = 24\\sin 60^\\circ = 20.78\\text{ N}; \\quad a = \\frac{20.78}{2.4}',
          answer: '$R = 12.0\\text{ N}$, $W_x = 20.78\\text{ N}$, $a = 8.66\\text{ m s}^{-2}$.',
          trapAlert: 'Ramai pelajar tertukar $\\sin$ dan $\\cos$ pada satah condong: ingat bahawa apabila $\\theta \\to 0^\\circ$ (lantai rata), komponen menuruni satah mestilah sifar ($\\sin 0^\\circ = 0$), manakala tindak balas normal adalah penuh ($\\cos 0^\\circ = 1$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan komponen berat selari satah condong bagi objek berjisim $m$ pada sudut $\\theta$.', answer: '$W_{\\parallel} = mg\\sin\\theta$.' },
          { question: 'Mengapakah lebih mudah menarik berbanding menolak pemegang pemotong rumput pada sudut yang sama?', answer: 'Komponen tegak daya tarikan menghala ke atas lalu mengurangkan tindak balas normal $R$ dan geseran lantai.' },
          { question: 'Satu daya $100\\text{ N}$ bertindak pada sudut $37^\\circ$ di atas paksi-$x$. Nyatakan ungkapan komponen $x$ dan $y$.', answer: '$F_x = 100\\cos 37^\\circ$ dan $F_y = 100\\sin 37^\\circ$.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah peti berjisim $10\\text{ kg}$ berada di atas satah condong kasar bersudut $30^\\circ$ dari ufuk ($g = 9.81\\text{ m s}^{-2}$). Daya geseran yang bertindak ialah $25\\text{ N}$.',
          step1GivenAndFormula: 'Diberi: $m = 10\\text{ kg}$, $\\theta = 30^\\circ$, $F_R = 25\\text{ N}$. Rumus: $W_x = mg\\sin\\theta$, $F = W_x - F_R = ma$.',
          studentTask: 'Hitung komponen berat selari satah $W_x$, daya paduan menuruni satah $F$, dan pecutan peti $a$.',
          answerSteps: '$W_x = 10(9.81)\\sin 30^\\circ = 49.05\\text{ N}$; $F = 49.05 - 25 = 24.05\\text{ N}$; $a = \\frac{24.05}{10} = 2.41\\text{ m s}^{-2}$.',
        },
        transferQuestion: {
          question: 'Terangkan mengapa pecutan sebarang objek di atas satah condong licin ($a = g\\sin\\theta$) adalah tidak bergantung kepada jisim objek itu.',
          answer: 'Daya tarikan sepanjang satah ialah $mg\\sin\\theta$, maka $a = \\frac{F}{m} = \\frac{mg\\sin\\theta}{m} = g\\sin\\theta$. Faktor jisim $m$ terhapus dalam pengiraan.',
        },
      },
    },
    {
      id: 't5-1.3',
      chapterId: 't5-bab-1',
      code: '1.3',
      title: 'Keseimbangan Daya',
      pageRef: 'm.s. 18–23',
      part1Anchor: {
        phenomenon:
          'Lampu isyarat yang tergantung pada dua kabel, poster berbingkai, atau kapal terbang yang meluncur pada halaju seragam tidak memecut walaupun ditarik oleh berbilang daya besar — kerana semua daya tersebut membatalkan satu sama lain sepenuhnya.',
        chapterConnection:
          'Menggabungkan konsep daya paduan (1.1) dan leraian daya (1.2) bagi kes khas di mana $F_{\\text{paduan}} = 0$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Objek dalam Keseimbangan Daya',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Suatu objek dikatakan berada dalam keseimbangan daya apabila ' },
            { text: 'daya paduan yang bertindak ke atasnya adalah sifar', keyword: true },
            { text: ' ($F = 0$), menyebabkan objek itu sama ada ' },
            { text: 'pegun atau bergerak dengan halaju seragam', keyword: true },
            { text: '.' },
          ],
          equationLatex: '\\sum F_x = 0, \\qquad \\sum F_y = 0',
        },
        {
          title: 'Aturan Segi Tiga Daya Tertutup',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Jika tiga daya bersatah berada dalam keseimbangan, vektor-vektor daya yang dilukis secara bersambung hujung ke pangkal akan membentuk sebuah ' },
            { text: 'segi tiga daya yang tertutup', keyword: true },
            { text: ' mengikut satu arah kitaran yang sama.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Dua Kaedah Menyelesaikan Masalah Tiga Daya Seimbang',
            cause: 'Tiga daya (cth: berat $W$, ketegangan tali $T_1, T_2$ atau tindak balas normal $R$) mengekalkan jasad pegun.',
            mechanism: 'Kaedah 1 (Geometri): lukis segi tiga daya tertutup mengikut skala atau guna hukum sinus/trigonometri. Kaedah 2 (Analitik): leraikan setiap daya dan setkan $\\sum F_x = 0$ serta $\\sum F_y = 0$.',
            effect: 'Sebarang daya atau sudut yang tidak diketahui dapat dihitung dengan tepat tanpa ralat lukisan.',
          },
        ],
        tables: [
          {
            title: 'Syarat Keseimbangan Mengikut Komponen & Bentuk Graf Vektor',
            headers: ['Kaedah', 'Syarat Matematik / Geometri', 'Contoh Situasi Buku Teks'],
            rows: [
              ['Leraian Komponen', '$\\sum F_{\\text{kiri}} = \\sum F_{\\text{kanan}}$ dan $\\sum F_{\\text{atas}} = \\sum F_{\\text{bawah}}$', 'Lampu ditarik mendatar dengan daya $P$ pada sudut tali $60^\\circ$'],
              ['Satah Condong Pegun', '$F_R = mg\\sin\\theta$ dan $R = mg\\cos\\theta$', 'Kotak pegun di atas satah condong kasar bersudut $40^\\circ$'],
              ['Segi Tiga Daya Tertutup', 'Tiga anak panah bersambung hujung-ke-pangkal kembali ke titik mula', 'Poster digantung simetri dengan dua tali bersudut $35^\\circ$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Keseimbangan Simetri (Dua Tali Menggantung Beban $W$)',
            latex: '2T\\sin\\theta = W \\qquad (\\text{jika } \\theta \\text{ diukur dari ufuk}) \\quad\\text{atau}\\quad 2T\\cos\\alpha = W \\qquad (\\text{jika } \\alpha \\text{ dari menegak})',
            symbols: [
              { symbol: 'T', meaning: 'Ketegangan pada setiap tali simetri', unit: '$\\text{N}$' },
              { symbol: 'W', meaning: 'Berat beban yang digantung', unit: '$\\text{N}$' },
              { symbol: '\\theta', meaning: 'Sudut tali dengan garis mengufuk', unit: '$^\\circ$' },
            ],
            appliesWhen: 'Kedua-dua tali adalah simetri (sudut sama) dan jasad pegun dalam keseimbangan.',
            failsWhen: 'Apabila $\\theta \\to 0^\\circ$ (tali hampir mendatar sempurna), $\\sin\\theta \\to 0$ menyebabkan $T \\to \\infty$; mustahil menegangkan tali beban secara mendatar mutlak tanpa putus!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-vector-forces',
            title: 'Segi Tiga Daya Tertutup untuk Tiga Daya dalam Keseimbangan',
            whatItShows: 'Tiga daya $\\vec{W}$, $\\vec{T}$, dan $\\vec{P}$ (atau $\\vec{R}, \\vec{F}_R$) disambung hujung ke pangkal membentuk segi tiga tertutup apabila daya paduan sifar.',
            axisOrRule: 'Semua anak panah dalam segi tiga mesti mengikut satu pusingan kitaran yang sama (arah jam atau lawan jam) tanpa bertembung kepala-ke-kepala.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Lampu Ditarik ke Sisi dengan Tali Mengufuk',
          problem: 'Sebuah lampu digantung pada tali dengan ketegangan $T = 8.0\\text{ N}$ dan ditarik ke kanan oleh tali mengufuk $P$ sehingga tali penggantung membuat sudut $60^\\circ$ dengan ufuk (atau $30^\\circ$ dengan menegak). Hitung daya $P$ dan berat lampu $W$.',
          given: ['$T = 8.0\\text{ N}$', 'Sudut tali dengan ufuk $= 60^\\circ$'],
          formulaLatex: 'P = T\\cos 60^\\circ, \\qquad W = T\\sin 60^\\circ',
          formulaWhy: 'Dalam keseimbangan, komponen mengufuk $T$ mengimbangi $P$ dan komponen menegak $T$ mengimbangi berat $W$.',
          substituteLatex: 'P = 8.0\\cos 60^\\circ = 4.0\\text{ N}; \\qquad W = 8.0\\sin 60^\\circ',
          answer: '$P = 4.0\\text{ N}$, $W = 6.93\\text{ N}$.',
          trapAlert: 'Sentiasa semak sama ada sudut yang diberi diukur dari garis tegak atau garis mengufuk sebelum memilih $\\sin$ atau $\\cos$.',
        },
        {
          title: 'Contoh 2: Kotak Pegun di Atas Satah Condong Kasar',
          problem: 'Sebuah kotak berjisim berat $W = 50\\text{ N}$ berada dalam keadaan pegun di atas satah condong bersudut $40^\\circ$ dari ufuk. Hitung daya geseran $F_R$ dan tindak balas normal $R$.',
          given: ['$W = 50\\text{ N}$', '$\\theta = 40^\\circ$', 'Kotak pegun ($F_{\\text{paduan}} = 0$)'],
          formulaLatex: 'F_R = W\\sin 40^\\circ, \\qquad R = W\\cos 40^\\circ',
          formulaWhy: 'Geseran ke atas satah mesti sama dengan komponen berat ke bawah satah, dan $R$ sama dengan komponen berat serenjang satah.',
          substituteLatex: 'F_R = 50\\sin 40^\\circ = 32.14\\text{ N}; \\qquad R = 50\\cos 40^\\circ = 38.30\\text{ N}',
          answer: '$F_R = 32.14\\text{ N}$, $R = 38.30\\text{ N}$.',
          trapAlert: 'Dalam keadaan pegun, geseran ialah geseran statik yang tepat mengimbangi $W\\sin\\theta$ — ia tidak semestinya sama dengan nilai geseran maksimum.',
        },
        {
          title: 'Contoh 3: Poster Digantung Simetri dengan Dua Tali',
          problem: 'Sebuah poster berberat $W = 12.0\\text{ N}$ digantung oleh dua tali simetri yang setiap satunya bersudut $35^\\circ$ di atas garis mendatar bingkai poster. Hitung ketegangan $T$ dalam setiap tali.',
          given: ['$W = 12.0\\text{ N}$', 'Dua tali simetri dengan $\\theta = 35^\\circ$ dari ufuk'],
          formulaLatex: '2T\\sin 35^\\circ = W',
          formulaWhy: 'Komponen mengufuk kedua-dua tali saling membatalkan ($T\\cos 35^\\circ$ kiri $=$ kanan), manakala jumlah kedua-dua komponen menegak menyokong berat $W$.',
          substituteLatex: 'T = \\frac{12.0}{2\\sin 35^\\circ} = \\frac{12.0}{1.1472}',
          answer: '$T = 10.46\\text{ N}$ dalam setiap tali.',
          trapAlert: 'Jangan lupa faktor $2$ di hadapan $T\\sin\\theta$ kerana dua utas tali menampung berat poster itu bersama-sama.',
        },
      ],
      part5DecisionTable: {
        title: 'Pilihan Sudut Kabel Penggantung untuk Mengurangkan Ketegangan',
        rows: [
          {
            designChoice: 'Menggunakan sudut tali $\\theta$ yang lebih besar dari garis mendatar (tali lebih menegak)',
            scientificReason: 'Komponen menegak $T\\sin\\theta$ menjadi lebih besar bagi $T$ yang sama; maka ketegangan tali $T = \\frac{W}{2\\sin\\theta}$ berkurang dan mengurangkan risiko tali putus.',
          },
          {
            designChoice: 'Menambah luas sentuhan atau kecondongan lebih landai pada objek pegun',
            scientificReason: 'Mengurangkan komponen berat selari satah $mg\\sin\\theta$ supaya daya geseran statik mencukupi untuk mengekalkan keseimbangan ($F_{\\text{paduan}} = 0$).',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua keadaan gerakan yang mungkin bagi objek yang berada dalam keseimbangan daya.', answer: 'Pegun ($v = 0$) atau bergerak dengan halaju seragam ($a = 0$).' },
          { question: 'Apakah syarat geometri bagi tiga daya dalam keseimbangan?', answer: 'Ketiga-tiga vektor daya membentuk segi tiga tertutup mengikut arah kitaran yang sama.' },
          { question: 'Sebuah bingkai $20\\text{ N}$ tergantung oleh dua tali tegak menegak selari ($\\theta = 90^\\circ$). Berapakah ketegangan setiap tali?', answer: '$T = \\frac{20}{2\\sin 90^\\circ} = 10\\text{ N}$.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah blok kayu berberat $30\\text{ N}$ berada pegun di atas satah condong kasar bersudut $30^\\circ$.',
          step1GivenAndFormula: 'Diberi: $W = 30\\text{ N}$, $\\theta = 30^\\circ$, keseimbangan daya. Rumus: $F_R = W\\sin\\theta$, $R = W\\cos\\theta$.',
          studentTask: 'Hitung daya geseran $F_R$ dan tindak balas normal $R$.',
          answerSteps: '$F_R = 30\\sin 30^\\circ = 15.0\\text{ N}$; $R = 30\\cos 30^\\circ = 25.98\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Seorang murid menggantung beg sekolahnya di tengah-tengah seutas dawai ampaian yang hampir mendatar ($\\theta = 5^\\circ$). Terangkan mengapa dawai mudah putus walaupun berat beg hanya $40\\text{ N}$.',
          answer: 'Daripada $2T\\sin 5^\\circ = 40\\text{ N}$, nilai $\\sin 5^\\circ \\approx 0.087$ sangat kecil menyebabkan ketegangan dawai $T = \\frac{40}{2(0.087)} \\approx 229.5\\text{ N}$ jauh melebihi berat beg sehingga melebihi had keanjalan/kekuatan dawai.',
        },
      },
    },
    {
      id: 't5-1.4',
      chapterId: 't5-bab-1',
      code: '1.4',
      title: 'Kekenyalan',
      pageRef: 'm.s. 24–33',
      part1Anchor: {
        phenomenon:
          'Tilam berspring, penyerap hentak motosikal, dan panah memanjang atau memampat di bawah beban lalu mengembalikan bentuk asalnya serta melepaskan tenaga simpanan apabila daya dialihkan.',
        chapterConnection:
          'Menutup Bab 1 dengan menghubungkan daya kepada ubah bentuk jasad pepejal (pemanjangan $x$) serta tenaga keupayaan kenyal melalui Hukum Hooke.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kekenyalan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kekenyalan ialah sifat bahan yang membolehkan sesuatu objek ' },
            { text: 'kembali kepada bentuk dan saiz asalnya', keyword: true },
            { text: ' selepas ' },
            { text: 'daya yang bertindak ke atasnya dialihkan', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Hukum Hooke',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Hukum Hooke menyatakan bahawa ' },
            { text: 'pemanjangan sesuatu spring adalah berkadar terus dengan daya', keyword: true },
            { text: ' yang bertindak ke atas spring itu jika ' },
            { text: 'tidak melebihi had kekenyalan spring', keyword: true },
            { text: ' tersebut.' },
          ],
          equationLatex: 'F = kx',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Pemalar Spring Gabungan Berubah Mengikut Susunan',
            cause: 'Dua spring serupa berpemalar $k$ dikenakan jumlah beban $F$ yang sama.',
            mechanism: 'Dalam susunan sesiri, setiap spring menanggung daya penuh $F$ dan memanjang $x$, maka jumlah pemanjangan menjadi $2x$. Dalam susunan selari, beban dibahagi sama rata ($F/2$ setiap spring), maka pemanjangan hanyalah $x/2$.',
            effect: 'Susunan sesiri menjadi lebih lembut ($k_{\\text{berkesan}} = k/2$), manakala susunan selari menjadi dua kali ganda lebih keras ($k_{\\text{berkesan}} = 2k$).',
          },
        ],
        tables: [
          {
            title: 'Empat Faktor yang Mempengaruhi Pemalar Spring $k$ (Jadual 1.7)',
            headers: ['Faktor Fizikal Spring', 'Kesan Terhadap Pemalar Spring ($k$) / Kekerasan', 'Penjelasan Struktur'],
            rows: [
              ['Bahan spring', 'Keluli lebih keras daripada kuprum ($k_{\\text{keluli}} > k_{\\text{kuprum}}$)', 'Ikatan antara atom keluli lebih kuat menentang pemanjangan'],
              ['Panjang asal spring ($l_0$)', 'Spring pendek $\\to k$ lebih besar (lebih keras)', 'Bilangan gelung yang membahagikan regangan berkurang'],
              ['Diameter spring ($D$)', 'Diameter gelung kecil $\\to k$ lebih besar (lebih keras)', 'Momen kilasan pada dawai gelung lebih kecil'],
              ['Diameter dawai spring ($d$)', 'Dawai tebal $\\to k$ lebih besar (lebih keras)', 'Luas keratan rentas dawai lebih besar menentang ricih'],
            ],
          },
          {
            title: 'Perbandingan Susunan Spring Sesiri vs Selari ($n$ Spring Serupa)',
            headers: ['Ciri', 'Susunan Sesiri ($n$ spring)', 'Susunan Selari ($n$ spring)'],
            rows: [
              ['Daya pada setiap spring', '$F$ (penuh)', '$F / n$'],
              ['Pemanjangan berbanding 1 spring ($x$)', '$n \\times x$ (bertambah)', '$x / n$ (berkurang)'],
              ['Pemalar spring berkesan ($k_{\\text{eff}}$)', '$\\frac{k}{n}$ (lebih lembut)', '$n \\times k$ (lebih keras)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Hukum Hooke & Tenaga Keupayaan Kenyal',
            latex: 'F = kx, \\qquad E_P = \\frac{1}{2}Fx = \\frac{1}{2}kx^2',
            symbols: [
              { symbol: 'F', meaning: 'Daya regangan / mampatan', unit: '$\\text{N}$' },
              { symbol: 'k', meaning: 'Pemalar spring (kecerunan graf $F$-$x$)', unit: '$\\text{N m}^{-1}$' },
              { symbol: 'x', meaning: 'Pemanjangan spring ($l - l_0$)', unit: '$\\text{m}$' },
              { symbol: 'E_P', meaning: 'Tenaga keupayaan kenyal (luas di bawah graf $F$-$x$)', unit: '$\\text{J}$' },
            ],
            appliesWhen: 'Graf $F$ melawan $x$ berbentuk garis lurus melalui asalan (spring masih di bawah had kekenyalannya).',
            failsWhen: 'Melebihi had kekenyalan spring (mengalami ubah bentuk kekal) atau menggunakan panjang penuh $l$ menggantikan pemanjangan $x = l - l_0$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-hookes-law',
            title: 'Graf $F$-$x$ Hukum Hooke, Luas Tenaga Kenyal & Susunan Spring',
            whatItShows: 'Graf daya $F$ melawan pemanjangan $x$ menunjukkan kawasan linear (kecerunan $= k$, luas segi tiga $= \\frac{1}{2}Fx$) hingga had kekenyalan, serta perbandingan susunan sesiri vs selari.',
            axisOrRule: 'Kecerunan graf $F$-$x$ yang lebih curam bermakna pemalar spring $k$ lebih besar (spring lebih keras). Luas di bawah garis lurus sehingga $x$ ialah tenaga keupayaan kenyal.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 1.1',
            title: 'Hubungan antara Daya dengan Pemanjangan Spring',
            aim: 'Menentukan hubungan antara daya $F$ dengan pemanjangan spring $x$.',
            inference: 'Pemanjangan spring bergantung pada daya yang dikenakan ke atasnya.',
            hypothesis: 'Semakin besar daya yang dikenakan, semakin besar pemanjangan spring.',
            variables: {
              manipulated: 'Daya (berat pemberat berslot), $F = mg$',
              responding: 'Pemanjangan spring, $x = l - l_0$',
              fixed: 'Pemalar spring $k$ (jenis spring yang sama)',
            },
            setupLogic: 'Ukur panjang asal spring $l_0$ tanpa pemberat menggunakan pembaris meter bersama jarum penunjuk dan cermin anti-paralaks. Gantung jisim $20\\text{ g}$ hingga $100\\text{ g}$, rekod $l$, dan kira $x = l - l_0$. Pastikan beban dikeluarkan semula setiap kali untuk menyemak had kekenyalan.',
            expectedResult: 'Graf $F$ melawan $x$ ialah garis lurus melalui titik asalan; kecerunan graf memberi pemalar spring $k$.',
            conclusion: 'Pemanjangan spring berkadar terus dengan daya dalam had kekenyalan (Hukum Hooke dipatuhi).',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Gabungan Sistem Spring Sesiri & Selari',
          problem: 'Satu spring tunggal dengan panjang asal $l_0 = 50\\text{ mm}$ memanjang sebanyak $6\\text{ mm}$ apabila beban $12\\text{ N}$ digantungkan. (a) Hitung pemalar spring $k$. Menggunakan spring-spring serupa ini di bawah beban $12\\text{ N}$, hitung jumlah pemanjangan dan jumlah panjang bagi: (b) Susunan A (2 spring sesiri), (c) Susunan B (2 spring selari), (d) Susunan C (2 spring selari disambung sesiri dengan 1 spring).',
          given: ['$l_0 = 50\\text{ mm}$', '$F = 12\\text{ N}$', '$x_1 = 6\\text{ mm}$ bagi 1 spring'],
          formulaLatex: 'k = \\frac{F}{x}, \\quad x_{\\text{sesiri}} = 2x_1, \\quad x_{\\text{selari}} = \\frac{x_1}{2}',
          formulaWhy: 'Pemanjangan bagi setiap lapisan spring dikira berasingan mengikut bahagian daya yang ditanggungnya, kemudian dijumlahkan.',
          substituteLatex: 'k = \\frac{12}{6} = 2\\text{ N mm}^{-1};\\quad x_A = 6+6=12\\text{ mm};\\quad x_B = \\frac{6}{2}=3\\text{ mm};\\quad x_C = \\frac{6}{2} + 6 = 9\\text{ mm}',
          answer: '(a) $k = 2.0\\text{ N mm}^{-1}$ ($2000\\text{ N m}^{-1}$); (b) Susunan A: $x = 12\\text{ mm}$, $l = 100 + 12 = 112\\text{ mm}$; (c) Susunan B: $x = 3\\text{ mm}$, $l = 50 + 3 = 53\\text{ mm}$; (d) Susunan C (2 selari + 1 sesiri): $x = 3 + 6 = 9\\text{ mm}$, $l = 109\\text{ mm}$ (jika 3 selari + 1 sesiri seperti Rajah 1.43 buku teks: $x = \\frac{6}{3} + 6 = 8\\text{ mm}$, $l = 108\\text{ mm}$).',
          trapAlert: 'Sentiasa perhatikan unit tenaga! Untuk mengira $E_P = \\frac{1}{2}kx^2$ dalam joule ($\\text{J}$), pemanjangan $x$ WAJIB ditukar dari $\\text{mm}$ atau $\\text{cm}$ ke **meter ($\\text{m}$)** dan $k$ ke $\\text{N m}^{-1}$.',
        },
      ],
      part5DecisionTable: {
        title: 'Pengubahsuaian Sistem Spring Penyerap Hentak Kenderaan / Neraca',
        rows: [
          {
            designChoice: 'Spring daripada keluli dengan dawai lebih tebal ($d$ besar) dan diameter gelung lebih kecil ($D$ kecil)',
            scientificReason: 'Menghasilkan pemalar spring $k$ yang tinggi (lebih keras) supaya mampu menampung beban berat tanpa termampat sepenuhnya atau melebihi had kekenyalan.',
          },
          {
            designChoice: 'Susunan dua atau lebih spring secara selari bagi suspensi berat',
            scientificReason: 'Membahagikan daya beban di antara spring supaya pemanjangan/mampatan keseluruhan lebih kecil ($k_{\\text{eff}} = nk$) dan menstabilkan badan kenderaan.',
          },
          {
            designChoice: 'Menambah panjang asal atau menggunakan susunan sesiri untuk neraca spring bacaan kecil (peka)',
            scientificReason: 'Menurunkan pemalar spring berkesan ($k$) supaya daya kecil menghasilkan pemanjangan $x$ yang lebih besar dan mudah dibaca.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah yang diwakili oleh kecerunan dan luas di bawah graf $F$ melawan $x$?', answer: 'Kecerunan $= $ pemalar spring $k$; Luas di bawah graf $= $ tenaga keupayaan kenyal $E_P$.' },
          { question: 'Nyatakan syarat wajib bagi Hukum Hooke dipatuhi.', answer: 'Spring tidak diregang melebihi had kekenyalannya.' },
          { question: 'Bagaimana menukar $k$ jika dawai spring diganti dengan dawai yang lebih tebal?', answer: 'Pemalar spring $k$ bertambah (spring menjadi lebih keras).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah spring berpemalar $k = 400\\text{ N m}^{-1}$ dimampatkan sebanyak $5.0\\text{ cm}$ oleh sebiji bola keluli berjisim $0.10\\text{ kg}$ lalu dilepaskan secara mendatar di atas landasan licin.',
          step1GivenAndFormula: 'Diberi: $k = 400\\text{ N m}^{-1}$, $x = 5.0\\text{ cm} = 0.05\\text{ m}$, $m = 0.10\\text{ kg}$. Rumus: $E_P = \\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$.',
          studentTask: 'Hitung tenaga keupayaan kenyal tersimpan $E_P$ dan laju maksimum bola $v$ apabila dilepaskan.',
          answerSteps: '$E_P = \\frac{1}{2}(400)(0.05)^2 = 0.50\\text{ J}$; $\\frac{1}{2}(0.10)v^2 = 0.50 \\Rightarrow v = \\sqrt{10} = 3.16\\text{ m s}^{-1}$.',
        },
        transferQuestion: {
          question: 'Graf $F$-$x$ dua spring P dan Q menunjukkan garisan P lebih curam daripada Q. Jika beban $10\\text{ N}$ digantung pada kedua-duanya secara berasingan, spring manakah menyimpan lebih banyak tenaga keupayaan kenyal? Buktikan.',
          answer: 'Spring Q menyimpan lebih banyak tenaga. Pada daya $F$ yang sama, Q mempunyai $k$ yang lebih kecil maka pemanjangannya $x = F/k$ jauh lebih besar. Daripada $E_P = \\frac{1}{2}Fx$, $F$ sama tetapi $x_Q > x_P$, jadi $E_{P,Q} > E_{P,P}$.',
        },
      },
    },
  ],
};
