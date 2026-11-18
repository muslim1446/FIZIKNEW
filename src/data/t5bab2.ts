import type { ChapterContent } from '../types/textbook';

export const t5bab2: ChapterContent = {
  id: 't5-bab-2',
  formLevel: 5,
  number: 2,
  title: 'Tekanan',
  pageRange: 'm.s. 38–85',
  overview:
    'Memahami tekanan hidrostatik cecair $h\\rho g$, tekanan atmosfera dan alat pengukurannya, tekanan gas dalam manometer, penggandaan daya melalui Prinsip Pascal, daya apungan Prinsip Archimedes, serta daya angkat bendalir Prinsip Bernoulli.',
  subtopics: [
    {
      id: 't5-2.1',
      chapterId: 't5-bab-2',
      code: '2.1',
      title: 'Tekanan Cecair',
      pageRef: 'm.s. 40–47',
      part1Anchor: {
        phenomenon:
          'Semakin dalam seseorang menyelam di dasar laut atau empangan, semakin kuat tekanan air menekan gegendang telinga kerana berat turus cecair di atasnya — tanpa mengira sama ada ia di dalam laut terbuka atau kolah sempit.',
        chapterConnection:
          'Menetapkan rumus teras $P = h\\rho g$ yang menjadi asas pengukuran tekanan atmosfera (2.2), tekanan gas manometer (2.3), penghantaran tekanan Pascal (2.4), dan keapungan Archimedes (2.5).',
      },
      part2SacredDefinitions: [
        {
          title: 'Tekanan Cecair',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Tekanan cecair bertindak ke ' },
            { text: 'semua arah', keyword: true },
            { text: ' dan bertambah dengan ' },
            { text: 'kedalaman cecair ($h$)', keyword: true },
            { text: ' serta ' },
            { text: 'ketumpatan cecair ($\\rho$)', keyword: true },
            { text: ', dan ' },
            { text: 'tidak bergantung kepada bentuk atau luas tapak bekas', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'P = h\\rho g',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Terbitan & Mekanisme Tekanan Hidrostatik',
            cause: 'Turus cecair berketumpatan $\\rho$ setinggi $h$ berada di atas suatu luas tapak $A$.',
            mechanism: 'Berat turus cecair ialah $W = mg = (\\rho V)g = \\rho A h g$. Tekanan ditakrifkan sebagai daya per unit luas, $P = \\frac{W}{A}$.',
            effect: 'Luas $A$ terhapus menghasilkan $P = h\\rho g$ — tekanan pada kedalaman sama adalah seragam tidak kira bentuk bekas.',
          },
          {
            title: 'Keseimbangan Dua Cecair Tak Tercampur dalam Tiub-U',
            cause: 'Dua cecair berbeza ketumpatan ($\\rho_1, \\rho_2$) dituang ke dalam kedua-dua lengan tiub-U.',
            mechanism: 'Pada aras sempadan yang sama di bawah kedua-dua turus, tekanan cecair kiri menyamai tekanan cecair kanan: $P_1 = P_2$.',
            effect: '$h_1\\rho_1 g = h_2\\rho_2 g \\Rightarrow h_1\\rho_1 = h_2\\rho_2$; cecair kurang tumpat mempunyai turus lebih tinggi.',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Tekanan Cecair dalam Kejuruteraan & Perubatan',
            headers: ['Aplikasi', 'Kedudukan / Reka Bentuk Fizikal', 'Penjelasan $P = h\\rho g$'],
            rows: [
              ['Tangki air di bumbung rumah', 'Diletakkan pada kedudukan tinggi di bumbung', 'Menambah kedalaman $h$ dari paip keluar supaya tekanan air paip tinggi dan aliran deras'],
              ['Beg cecair intravena (IV)', 'Digantung lebih tinggi daripada lengan pesakit', 'Membina tekanan cecair yang melebihi tekanan darah vena supaya ubat/larutan mengalir masuk'],
              ['Dinding empangan air', 'Lebih tebal di dasar berbanding bahagian atas; empis keluar di bahagian bawah', 'Menahan tekanan hidrostatik $P = h\\rho g$ yang sangat besar pada kedalaman maksimum di dasar'],
              ['Tiub sifon', 'Hujung keluar berada lebih rendah ($h$ besar) daripada permukaan cecair tangki', 'Wujud perbezaan tekanan yang menolak cecair mengalir keluar secara berterusan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tekanan Cecair & Tekanan Sebenar di Dalam Cecair',
            latex: 'P = h\\rho g, \\qquad P_{\\text{sebenar}} = h\\rho g + P_{\\text{atm}}',
            symbols: [
              { symbol: 'P', meaning: 'Tekanan cecair (tekanan tolok)', unit: '$\\text{Pa}$ ($\\text{N m}^{-2}$)' },
              { symbol: 'h', meaning: 'Kedalaman menegak dari permukaan terbuka cecair', unit: '$\\text{m}$' },
              { symbol: '\\rho', meaning: 'Ketumpatan cecair', unit: '$\\text{kg m}^{-3}$' },
              { symbol: 'g', meaning: 'Kekuatan medan graviti ($9.81$)', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Cecair berada dalam keadaan pegun (hidrostatik) dan tidak termampat ($\\rho$ malar).',
            failsWhen: 'Jangan keliru antara tinggi dari dasar dengan **kedalaman $h$ dari permukaan air**! Juga bezakan soalan yang meminta tekanan air sahaja ($h\\rho g$) vs tekanan sebenar/jumlah ($h\\rho g + P_{\\text{atm}}$).',
          },
        ],
        diagrams: [
          {
            kind: 'f5-pressure-pascal',
            title: 'Prinsip Tekanan Cecair ($P = h\\rho g$) & Penghantaran Tekanan Seragam',
            whatItShows: 'Pancutan air keluar paling jauh dari lubang paling bawah kerana tekanan bertambah secara linear dengan kedalaman $h$; di bahagian kanan, sistem omboh memindahkan tekanan sama $P_1 = P_2$.',
            axisOrRule: 'Kedalaman $h$ sentiasa diukur secara menegak ke bawah dari permukaan bebas cecair.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 2.1 & 2.2',
            title: 'Faktor Kedalaman ($h$) & Ketumpatan ($\\rho$) terhadap Tekanan Cecair',
            aim: 'Mengkaji hubungan antara kedalaman dan ketumpatan cecair dengan tekanan cecair.',
            inference: 'Tekanan cecair bergantung pada kedalaman dan ketumpatan cecair.',
            hypothesis: 'Semakin bertambah kedalaman atau ketumpatan cecair, semakin tinggi tekanan cecair.',
            variables: {
              manipulated: 'Kedalaman corong tisel $h$ (Eksp. 2.1) / Ketumpatan cecair $\\rho$ (Eksp. 2.2)',
              responding: 'Perbezaan paras air dalam tiub-U manometer, $\\Delta h$ (mewakili tekanan)',
              fixed: 'Ketumpatan cecair (Eksp. 2.1) / Kedalaman corong tisel (Eksp. 2.2)',
            },
            setupLogic: 'Corong tisel bertutup membran getah ditenggelamkan ke dalam silinder penyukat berisi cecair dan disambung ke tiub-U manometer. Baca perbezaan ketinggian turus air dalam manometer.',
            expectedResult: 'Semakin dalam corong ditenggelamkan atau semakin tumpat cecair (gliserin vs air vs alkohol), semakin besar perbezaan paras tiub-U.',
            conclusion: 'Tekanan cecair bertambah apabila kedalaman dan ketumpatan cecair bertambah.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Tekanan Air & Tekanan Sebenar pada Seekor Ikan',
          problem: 'Seekor ikan berenang pada kedalaman $1.5\\text{ m}$ di dalam kolam air tawar berketumpatan $\\rho = 1050\\text{ kg m}^{-3}$. Jika tekanan atmosfera ialah $100\\text{ kPa}$ dan $g = 9.81\\text{ m s}^{-2}$, hitung: (a) tekanan air ke atas ikan, (b) tekanan sebenar ke atas ikan.',
          given: ['$h = 1.5\\text{ m}$', '$\\rho = 1050\\text{ kg m}^{-3}$', '$P_{\\text{atm}} = 100\\,000\\text{ Pa}$'],
          formulaLatex: 'P_{\\text{air}} = h\\rho g, \\qquad P_{\\text{sebenar}} = h\\rho g + P_{\\text{atm}}',
          formulaWhy: 'Permukaan kolam terdedah kepada atmosfera, maka tekanan total ialah hasil tambah tekanan hidrostatik dengan tekanan udara di permukaan.',
          substituteLatex: 'P_{\\text{air}} = 1.5 \\times 1050 \\times 9.81 = 15\\,450.75\\text{ Pa} \\approx 15.5\\text{ kPa};\\quad P_{\\text{sebenar}} = 15.5 + 100',
          answer: '(a) $15.5\\text{ kPa}$; (b) $115.5\\text{ kPa}$.',
          trapAlert: 'Pastikan $P_{\\text{atm}}$ dan $h\\rho g$ berada dalam unit yang sama (kedua-duanya $\\text{Pa}$ atau kedua-duanya $\\text{kPa}$) sebelum ditambah.',
        },
        {
          title: 'Contoh 2: Tiub-U Berisi Air dan Minyak Zaitun',
          problem: 'Sebuah tiub-U mengandungi air ($\\rho_1 = 1000\\text{ kg m}^{-3}$) dan minyak zaitun yang tidak bercampur. Diukur dari garis sempadan sepunya, ketinggian turus air ialah $h_1 = 15.0\\text{ cm}$ dan ketinggian turus minyak zaitun ialah $h_2 = 16.5\\text{ cm}$. Hitung ketumpatan minyak zaitun $\\rho_2$.',
          given: ['$h_1 = 15.0\\text{ cm}$', '$\\rho_1 = 1000\\text{ kg m}^{-3}$', '$h_2 = 16.5\\text{ cm}$'],
          formulaLatex: 'h_1\\rho_1 = h_2\\rho_2',
          formulaWhy: 'Tekanan pada garis mendatar yang sama di sempadan minyak-air adalah sama di kedua-dua lengan tiub-U.',
          substituteLatex: '15.0 \\times 1000 = 16.5 \\times \\rho_2 \\Rightarrow \\rho_2 = \\frac{15000}{16.5}',
          answer: '$\\rho_2 = 909.1\\text{ kg m}^{-3}$.',
          trapAlert: 'Ukuran $h_1$ dan $h_2$ wajib diambil dari **paras sempadan pertemuan kedua-dua cecair**, bukan dari paras bawah tiub-U.',
        },
      ],
      part5DecisionTable: {
        title: 'Reka Bentuk Empangan Air & Bekalan Tekanan Tinggi',
        rows: [
          {
            designChoice: 'Dinding empangan dibina paling tebal di bahagian dasar dan tirus ke atas',
            scientificReason: 'Tekanan air $P = h\\rho g$ bertambah dengan kedalaman $h$; dinding dasar yang lebih tebal mampu menahan daya tujah air yang jauh lebih besar tanpa pecah.',
          },
          {
            designChoice: 'Terowong empis/penjana kuasa dipasang pada dasar empangan',
            scientificReason: 'Kedalaman $h$ maksimum menghasilkan tekanan cecair paling tinggi untuk memancutkan air dengan tenaga kinetik maksimum ke turbin.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan tiga faktor yang tidak dan yang ya mempengaruhi tekanan cecair pegun.', answer: 'Bergantung pada kedalaman $h$, ketumpatan cecair $\\rho$, dan kekuatan medan graviti $g$; TIDAK bergantung pada bentuk atau luas bekas.' },
          { question: 'Jika ketinggian turus minyak $20\\text{ cm}$ mengimbangi $16\\text{ cm}$ air dalam tiub-U, hitung ketumpatan minyak.', answer: '$\\rho = \\frac{16}{20}(1000) = 800\\text{ kg m}^{-3}$.' },
          { question: 'Di manakah kedudukan beg cecair IV berbanding lengan pesakit supaya cecair boleh mengalir masuk?', answer: 'Lebih tinggi daripada lengan pesakit untuk mewujudkan tekanan cecair melebihi tekanan darah.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah tangki membekalkan air ke sebuah paip yang terletak $8.0\\text{ m}$ secara menegak di bawah paras air tangki. ($\\rho = 1000\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$).',
          step1GivenAndFormula: 'Diberi: $h = 8.0\\text{ m}$, $\\rho = 1000\\text{ kg m}^{-3}$. Rumus: $P = h\\rho g$.',
          studentTask: 'Hitung tekanan tolok air yang keluar di paip itu.',
          answerSteps: '$P = 8.0 \\times 1000 \\times 9.81 = 78\\,480\\text{ Pa}$ ($78.48\\text{ kPa}$).',
        },
        transferQuestion: {
          question: 'Tiga bekas berlainan bentuk (silinder, kon tirus, corong lebar) diisi air hingga paras tinggi $12\\text{ cm}$ yang sama. Bandingkan tekanan air pada dasar ketiga-tiga bekas tersebut.',
          answer: 'Tekanan pada dasar ketiga-tiga bekas adalah sama ($P = 0.12 \\times 1000 \\times 9.81$) kerana tekanan cecair hanya bergantung pada kedalaman menegak $h$, ketumpatan $\\rho$, dan $g$, bukannya bentuk atau isi padu bekas.',
        },
      },
    },
    {
      id: 't5-2.2',
      chapterId: 't5-bab-2',
      code: '2.2',
      title: 'Tekanan Atmosfera',
      pageRef: 'm.s. 48–55',
      part1Anchor: {
        phenomenon:
          'Kita hidup di dasar "lautan udara" setebal puluhan kilometer yang menekan setiap permukaan dengan daya kira-kira $10^5\\text{ N}$ setiap meter persegi — sebab penyedut minuman menolak air ke atas apabila tekanan dalam tiub disedut turun, dan sebab telinga berdengung ketika pesawat mendaki.',
        chapterConnection:
          'Meluaskan $P = h\\rho g$ daripada cecair kepada turus merkuri/air dalam barometer dan membekalkan nilai rujukan $P_{\\text{atm}}$ bagi manometer gas (2.3).',
      },
      part2SacredDefinitions: [
        {
          title: 'Tekanan Atmosfera',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Tekanan atmosfera ialah tekanan yang disebabkan oleh ' },
            { text: 'berat lapisan udara', keyword: true },
            { text: ' yang bertindak ke atas ' },
            { text: 'permukaan bumi', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'P_{\\text{atm}} = 760\\text{ mm Hg} = 101\\,396\\text{ Pa} \\approx 1.01 \\times 10^5\\text{ Pa}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Prinsip Kerja Barometer Merkuri Torricelli',
            cause: 'Tiub kaca panjang diisi penuh merkuri dan diterbalikkan ke dalam takungan merkuri tanpa udara.',
            mechanism: 'Sebahagian merkuri turun meninggalkan ruang vakum Torricelli di bahagian atas tiub. Tekanan atmosfera di permukaan takungan menyokong turus merkuri menegak setinggi $h = 760\\text{ mm}$.',
            effect: 'Pada keseimbangan, $P_{\\text{atm}} = h\\rho_{\\text{Hg}}g$. Ketinggian menegak $760\\text{ mm}$ kekal sama walaupun tiub dicondongkan atau berbeza diameter (selagi wujud ruang vakum).',
          },
          {
            title: 'Kesan Altitud Tinggi vs Kedalaman Laut Lampau pada Manusia',
            cause: 'Naik ke altitud tinggi (udara menipis, $P_{\\text{atm}}$ rendah) vs menyelam ke laut dalam ($P_{\\text{jumlah}}$ meningkat $+1\\text{ atm}$ setiap $10\\text{ m}$).',
            mechanism: 'Di puncak tinggi (cth. Gunung Kinabalu $60\\%$ $P_{\\text{atm}}$), penyerapan $O_2$ menurun lalu menaikkan kadar pernafasan & metabolisme. Di laut dalam ($30\\text{ m} = 4\\text{ atm}$), tisu dan darah menyerap gas nitrogen berlebihan.',
            effect: 'Pesawat menekan semula kabin ($\\approx P_{\\text{aras laut}}$); penyelam mesti naik perlahan ke permukaan supaya gelembung gas nitrogen tidak terbentuk di dalam saluran darah.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Barometer Fortin vs Barometer Aneroid (Jadual 2.3)',
            headers: ['Ciri', 'Barometer Fortin', 'Barometer Aneroid'],
            rows: [
              ['Komponen utama', 'Tiub kaca berisi merkuri & skru pelaras takungan kulit', 'Kotak logam separa vakum kenyal + spring + penunjuk mekanikal'],
              ['Kejituan', 'Tinggi ($\\pm 0.1\\text{ mm Hg}$)', 'Lebih rendah ($\\pm 1\\text{ mm Hg}$)'],
              ['Kemudahalihan', 'Besar, berat, sukar dibawa, merkuri mudah tumpah', 'Kecil, ringan, mudah alih, sesuai sebagai altimeter pesawat'],
            ],
          },
          {
            title: 'Unit-unit Piawai Tekanan Atmosfera',
            headers: ['Unit', 'Nilai pada Aras Laut (1 atm)', 'Kegunaan Lazim'],
            rows: [
              ['Pascal ($\\text{Pa}$ / $\\text{N m}^{-2}$)', '$101\\,396\\text{ Pa} \\approx 1.01 \\times 10^5\\text{ Pa}$', 'Pengiraan SI fizik & kejuruteraan'],
              ['Milimeter merkuri ($\\text{mm Hg}$)', '$760\\text{ mm Hg}$ ($76\\text{ cm Hg}$)', 'Barometer merkuri & tekanan darah'],
              ['Meter air ($\\text{m H}_2\\text{O}$)', '$\\approx 10.3\\text{ m H}_2\\text{O}$', 'Had pengepaman air & penyelaman ($+1\\text{ atm}$ per $10\\text{ m}$)'],
              ['Milibar ($\\text{mbar}$) / Hektopascal ($\\text{hPa}$)', '$1013\\text{ mbar} = 1013\\text{ hPa}$', 'Peta meteorologi & ramalan cuaca'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Ketinggian Turus Merkuri kepada Pascal',
            latex: 'P_{\\text{atm}} = h\\rho_{\\text{Hg}} g \\qquad (\\rho_{\\text{Hg}} = 1.36 \\times 10^4\\text{ kg m}^{-3})',
            symbols: [
              { symbol: 'h', meaning: 'Ketinggian menegak turus merkuri', unit: '$\\text{m}$' },
              { symbol: '\\rho_{\\text{Hg}}', meaning: 'Ketumpatan merkuri ($13\\,600$)', unit: '$\\text{kg m}^{-3}$' },
              { symbol: 'g', meaning: 'Pecutan graviti ($9.81$)', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Ruang di bahagian atas tiub barometer adalah vakum mutlak ($P_{\\text{ruang}} = 0$).',
            failsWhen: 'Jika udara terperangkap di ruang atas tiub, bacaan tinggi merkuri menjadi lebih rendah daripada $760\\text{ mm}$ kerana tekanan udara terperangkap menolak turus ke bawah ($P_{\\text{atm}} = P_{\\text{udara}} + h\\rho g$).',
          },
        ],
        diagrams: [
          {
            kind: 'f5-pressure-pascal',
            title: 'Barometer Merkuri & Prinsip Kesamaan Tekanan Aras',
            whatItShows: 'Tekanan atmosfera menekan permukaan merkuri di dalam besen supaya mengimbangi turus merkuri menegak setinggi $760\\text{ mm}$ di bawah ruang vakum.',
            axisOrRule: 'Ukur ketinggian menegak $h$ dari **permukaan merkuri di takungan** ke meniskus atas merkuri dalam tiub — bukan panjang kaca yang dicondongkan.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Menukar Bacaan Tekanan Darah ($\\text{mm Hg}$) kepada $\\text{Pa}$',
          problem: 'Tekanan darah seorang pesakit diukur pada $160\\text{ mm Hg}$. Nyatakan tekanan ini dalam unit $\\text{Pa}$. [$\\rho_{\\text{Hg}} = 1.36 \\times 10^4\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$]',
          given: ['$h = 160\\text{ mm} = 0.160\\text{ m}$', '$\\rho_{\\text{Hg}} = 1.36 \\times 10^4\\text{ kg m}^{-3}$'],
          formulaLatex: 'P = h\\rho g',
          formulaWhy: 'Menukarkan tinggi turus merkuri ke tekanan SI memerlukan $h$ dalam meter.',
          substituteLatex: 'P = 0.160 \\times (1.36 \\times 10^4) \\times 9.81 = 21\\,346.56\\text{ Pa}',
          answer: '$2.13 \\times 10^4\\text{ Pa}$ ($21.3\\text{ kPa}$).',
          trapAlert: 'Sentiasa tukar $\\text{mm}$ ke $\\text{m}$ dengan membahagi $1000$ ($\\times 10^{-3}$), bukannya $100$!',
        },
        {
          title: 'Contoh 2: Menyatakan Tekanan Dalam Unit Meter Air ($\\text{m H}_2\\text{O}$)',
          problem: 'Sebuah pam air menghasilkan tekanan sebanyak $3.6 \\times 10^5\\text{ Pa}$. Nyatakan nilai tekanan tersebut dalam unit $\\text{m H}_2\\text{O}$. [$\\rho_{\\text{air}} = 1000\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$]',
          given: ['$P = 3.6 \\times 10^5\\text{ Pa}$', '$\\rho = 1000\\text{ kg m}^{-3}$'],
          formulaLatex: 'h = \\frac{P}{\\rho g}',
          formulaWhy: 'Nilai $\\text{m H}_2\\text{O}$ ialah ketinggian turus air setara yang menghasilkan tekanan tersebut.',
          substituteLatex: 'h = \\frac{3.6 \\times 10^5}{1000 \\times 9.81}',
          answer: '$36.7\\text{ m H}_2\\text{O}$.',
          trapAlert: 'Pastikan ketumpatan yang digunakan ialah ketumpatan air ($1000\\text{ kg m}^{-3}$) dan bukannya ketumpatan merkuri.',
        },
      ],
      part5DecisionTable: {
        title: 'Penyesuaian Kejuruteraan pada Altitud Tinggi & Kedalaman Laut Lampau',
        rows: [
          {
            designChoice: 'Kabina pesawat komersial & kapal angkasa diberi tekanan hampir sama dengan aras laut',
            scientificReason: 'Mengelakkan kekurangan oksigen darah, dehidrasi dan ketidakseimbangan tekanan dalam badan manusia apabila udara luar sangat nipis.',
          },
          {
            designChoice: 'Badan kapal selam diperbuat daripada keluli/titanium dengan keratan rentas membulat',
            scientificReason: 'Kekuatan bahan tinggi dan bentuk silinder/bulat mengagihkan tekanan air luar yang ekstrem ($25\\text{ atm}$ pada $240\\text{ m}$) secara seragam tanpa runtuh.',
          },
          {
            designChoice: 'Penyelam laut dalam memakai sut menyelam dan naik semula secara perlahan-lahan',
            scientificReason: 'Sut melambatkan kehilangan haba; naik perlahan mengelakkan penurunan tekanan mendadak yang menyebabkan gelembung gas nitrogen terbentuk di dalam salur darah (penyakit dekompresi).',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan dua unit meteorologi bagi tekanan atmosfera pada aras laut ($1\\text{ atm}$).', answer: '$1013\\text{ mbar}$ atau $1013\\text{ hPa}$ ($760\\text{ mm Hg}$ / $\\approx 10.3\\text{ m H}_2\\text{O}$).' },
          { question: 'Jika tiub barometer merkuri dicondongkan $30^\\circ$, apakah berlaku pada ketinggian menegak turus merkuri?', answer: 'Ketinggian menegak kekal sama ($760\\text{ mm}$) selagi masih ada ruang vakum di atas tiub (panjang turus sepanjang tiub bertambah).' },
          { question: 'Setiap tambahan kedalaman $10\\text{ m}$ dalam air laut menambah tekanan kira-kira berapa atmosfera?', answer: '$+1\\text{ atm}$.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah barometer merkuri dibawa ke puncak sebuah bukit dan mencatatkan bacaan $680\\text{ mm Hg}$. ($\\rho_{\\text{Hg}} = 13\\,600\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$).',
          step1GivenAndFormula: 'Diberi: $h = 680\\text{ mm} = 0.680\\text{ m}$, $\\rho = 13\\,600\\text{ kg m}^{-3}$. Rumus: $P = h\\rho g$.',
          studentTask: 'Hitung tekanan atmosfera di puncak bukit itu dalam $\\text{Pa}$ dan $\\text{kPa}$.',
          answerSteps: '$P = 0.680 \\times 13600 \\times 9.81 = 90\\,722.9\\text{ Pa} \\approx 90.7\\text{ kPa}$.',
        },
        transferQuestion: {
          question: 'Mengapakah barometer menggunakan merkuri dan bukannya air untuk mengukur tekanan atmosfera di makmal?',
          answer: 'Ketumpatan merkuri ($13\\,600\\text{ kg m}^{-3}$) adalah $13.6$ kali lebih tinggi daripada air, jadi turus merkuri hanya setinggi $0.76\\text{ m}$ berbanding turus air yang memerlukan tiub melebihi $10.3\\text{ m}$ (lebih tinggi daripada bangunan 3 tingkat!).',
        },
      },
    },
    {
      id: 't5-2.3',
      chapterId: 't5-bab-2',
      code: '2.3',
      title: 'Tekanan Gas',
      pageRef: 'm.s. 56–59',
      part1Anchor: {
        phenomenon:
          'Gas di dalam tangki bekalan atau belon sentiasa menghentam dinding bekas; membandingkan ketinggian turus merkuri dalam tiub-U manometer mendedahkan sama ada tekanan gas itu lebih tinggi atau lebih rendah daripada udara bilik.',
        chapterConnection:
          'Mengaplikasikan perbandingan aras tekanan cecair (2.1) terhadap nilai rujukan tekanan atmosfera (2.2) untuk mengukur tekanan gas sebenar.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Pengukuran Manometer Merkuri',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Pada aras cecair yang sama, tekanan pada kedua-dua lengan tiub-U adalah sama. Oleh itu, tekanan gas ' },
            { text: '$P_{\\text{gas}} = P_{\\text{atm}} + h$', keyword: true },
            { text: ' apabila turus di lengan terbuka lebih tinggi, dan ' },
            { text: '$P_{\\text{gas}} = P_{\\text{atm}} - h$', keyword: true },
            { text: ' apabila turus di lengan bekalan gas lebih tinggi.' },
          ],
          equationLatex: 'P_{\\text{gas}} = P_{\\text{atm}} \\pm h\\rho g',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Menentukan Tanda $+$ atau $-$ dalam Manometer',
            cause: 'Satu hujung manometer disambung ke bekalan gas ($P_{\\text{gas}}$), hujung lagi terbuka ke atmosfera ($P_{\\text{atm}}$).',
            mechanism: 'Bandingkan paras bendalir pada kedua-dua lengan. Pihak yang mempunyai tekanan lebih besar akan menolak cecair di bahagiannya ke bawah sehingga paras di pihak lawan naik lebih tinggi sejauh $h$.',
            effect: 'Jika lengan terbuka lebih tinggi $\\to P_{\\text{gas}} > P_{\\text{atm}}$ ($+h$); jika lengan bersambung gas lebih tinggi $\\to P_{\\text{gas}} < P_{\\text{atm}}$ ($-h$).',
          },
        ],
        tables: [
          {
            title: 'Tiga Kes Bacaan Manometer Merkuri ($P_{\\text{atm}} = 76\\text{ cm Hg}$)',
            headers: ['Kedudukan Aras Merkuri', 'Hubungan Tekanan', 'Formula Pengiraan'],
            rows: [
              ['Kedua-dua aras sama tinggi ($h = 0$)', '$P_{\\text{gas}} = P_{\\text{atm}}$', '$P_{\\text{gas}} = 76\\text{ cm Hg}$'],
              ['Lengan terbuka lebih tinggi sebanyak $h$', '$P_{\\text{gas}} > P_{\\text{atm}}$', '$P_{\\text{gas}} = P_{\\text{atm}} + h$ (dalam $\\text{cm Hg}$) atau $P_{\\text{atm}} + h\\rho g$ (dalam $\\text{Pa}$)'],
              ['Lengan bersambung gas lebih tinggi sebanyak $h$', '$P_{\\text{gas}} < P_{\\text{atm}}$', '$P_{\\text{gas}} = P_{\\text{atm}} - h$ (dalam $\\text{cm Hg}$) atau $P_{\\text{atm}} - h\\rho g$ (dalam $\\text{Pa}$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tekanan Gas Mutlak dalam Manometer',
            latex: 'P_{\\text{gas}} = P_{\\text{atm}} \\pm h \\quad (\\text{dalam cm Hg}) \\qquad\\text{atau}\\qquad P_{\\text{gas}} = P_{\\text{atm}} \\pm h\\rho g \\quad (\\text{dalam Pa})',
            symbols: [
              { symbol: 'P_{\\text{gas}}', meaning: 'Tekanan gas di dalam bekas', unit: '$\\text{cm Hg}$ / $\\text{Pa}$' },
              { symbol: 'P_{\\text{atm}}', meaning: 'Tekanan atmosfera sekitar', unit: '$\\text{cm Hg}$ / $\\text{Pa}$' },
              { symbol: 'h', meaning: 'Beza ketinggian turus cecair antara kedua-dua lengan', unit: '$\\text{cm}$ / $\\text{m}$' },
            ],
            appliesWhen: 'Hujung bertentangan manometer terbuka ke atmosfera (untuk manometer tertutup hujung vakum, $P_{\\text{atm}} = 0$).',
            failsWhen: 'Jangan terus menambah unit bercampur seperti $76\\text{ cm Hg} + 40\\text{ cm air}$! Jika cecair manometer ialah air, wajib tukar $h\\rho_{\\text{air}}g$ ke $\\text{Pa}$ dahulu sebelum ditambah pada $P_{\\text{atm}}$ dalam $\\text{Pa}$.',
          },
        ],
        diagrams: [
          {
            kind: 'f5-pressure-pascal',
            title: 'Skema Manometer & Keseimbangan Tekanan Cecair',
            whatItShows: 'Menggambarkan keseimbangan aras tekanan pada cecair bersambung dan bagaimana perbezaan ketinggian $h$ mengukur lebihan atau kekurangan tekanan gas.',
            axisOrRule: 'Sentiasa pilih garisan mendatar rujukan merentasi **paras cecair yang lebih rendah** untuk menyamakan tekanan kiri dan kanan.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Manometer Merkuri dengan Lengan Terbuka Lebih Tinggi',
          problem: 'Satu manometer merkuri disambungkan ke bekalan gas dan perbezaan ketinggian turus merkuri ialah $h = 40\\text{ cm}$ dengan lengan terbuka lebih tinggi. Diberi $P_{\\text{atm}} = 76\\text{ cm Hg}$, $\\rho_{\\text{Hg}} = 1.36 \\times 10^4\\text{ kg m}^{-3}$ dan $g = 9.81\\text{ m s}^{-2}$. Hitung tekanan gas dalam $\\text{cm Hg}$ dan $\\text{Pa}$.',
          given: ['$P_{\\text{atm}} = 76\\text{ cm Hg}$', '$h = 40\\text{ cm}$ (lengan terbuka lebih tinggi)', '$\\rho_{\\text{Hg}} = 13\\,600\\text{ kg m}^{-3}$'],
          formulaLatex: 'P_{\\text{gas}} = P_{\\text{atm}} + h, \\qquad P_{\\text{Pa}} = h_{\\text{jumlah}}\\rho_{\\text{Hg}} g',
          formulaWhy: 'Gas menolak merkuri turun di lengannya dan menaikkan merkuri di lengan terbuka, bermakna $P_{\\text{gas}} > P_{\\text{atm}}$.',
          substituteLatex: 'P_{\\text{gas}} = 76 + 40 = 116\\text{ cm Hg} = 1.16\\text{ m Hg}; \\quad P_{\\text{Pa}} = 1.16 \\times (1.36 \\times 10^4) \\times 9.81',
          answer: '$116\\text{ cm Hg}$ atau $1.55 \\times 10^5\\text{ Pa}$.',
          trapAlert: 'Jika lengan terbuka lebih rendah (lengan gas yang lebih tinggi), wajib TOLAK ($P_{\\text{atm}} - h$), bukan tambah!',
        },
        {
          title: 'Contoh 2: Manometer Merkuri Condong / Perbezaan Paras Tegak',
          problem: 'Sebuah manometer merkuri mempunyai beza paras menegak antara kedua-dua lengan $h = 25\\text{ cm}$ di mana lengan kanan (terbuka) berada lebih tinggi. Jika $P_{\\text{atm}} = 75\\text{ cm Hg}$, tentukan tekanan gas dalam $\\text{cm Hg}$ dan $\\text{Pa}$.',
          given: ['$P_{\\text{atm}} = 75\\text{ cm Hg}$', 'Beza ketinggian menegak $h = 25\\text{ cm}$'],
          formulaLatex: 'P_{\\text{gas}} = P_{\\text{atm}} + h',
          formulaWhy: 'Walaupun satu lengan tiub mungkin condong atau bengkok, tekanan hidrostatik hanya bergantung pada beza tinggi **menegak** $h$.',
          substituteLatex: 'P_{\\text{gas}} = 75 + 25 = 100\\text{ cm Hg} = 1.00\\text{ m Hg}; \\quad P_{\\text{Pa}} = 1.00 \\times 13600 \\times 9.81',
          answer: '$100\\text{ cm Hg}$ atau $1.33 \\times 10^5\\text{ Pa}$.',
          trapAlert: 'Jangan ambil panjang turus sepanjang tiub condong; sentiasa ukur ketinggian **menegak** antara kedua-dua meniskus.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Jika paras merkuri dalam lengan yang bersambung dengan tong gas lebih tinggi $15\\text{ cm}$ daripada lengan terbuka ($P_{\\text{atm}} = 76\\text{ cm Hg}$), berapakah $P_{\\text{gas}}$?', answer: '$76 - 15 = 61\\text{ cm Hg}$.' },
          { question: 'Apakah alat yang digunakan untuk mengukur tekanan gas dalam paip makmal menggunakan tiub-U?', answer: 'Manometer (atau Tolok Bourdon untuk tekanan tinggi industri).' },
          { question: 'Mengapakah manometer air lebih peka untuk mengukur perbezaan tekanan gas yang sangat kecil berbanding manometer merkuri?', answer: 'Kerana ketumpatan air jauh lebih kecil ($1000$ vs $13\\,600\\text{ kg m}^{-3}$), maka perubahan tekanan kecil menghasilkan perbezaan ketinggian $h$ yang $13.6$ kali lebih besar dan mudah dibaca.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah manometer air ($\\rho = 1000\\text{ kg m}^{-3}$) disambungkan ke bekalan gas. Paras air di lengan terbuka lebih tinggi $35\\text{ cm}$ berbanding lengan gas. Diberi $P_{\\text{atm}} = 1.01 \\times 10^5\\text{ Pa}$ dan $g = 9.81\\text{ m s}^{-2}$.',
          step1GivenAndFormula: 'Diberi: $h = 35\\text{ cm} = 0.35\\text{ m}$, $\\rho = 1000\\text{ kg m}^{-3}$. Rumus: $P_{\\text{gas}} = P_{\\text{atm}} + h\\rho g$.',
          studentTask: 'Hitung tekanan gas sebenar dalam unit $\\text{Pa}$.',
          answerSteps: '$h\\rho g = 0.35 \\times 1000 \\times 9.81 = 3433.5\\text{ Pa}$; $P_{\\text{gas}} = 101\\,000 + 3433.5 = 104\\,433.5\\text{ Pa}$ ($1.044 \\times 10^5\\text{ Pa}$).',
        },
        transferQuestion: {
          question: 'Seorang murid menggantikan merkuri dalam sebuah manometer dengan minyak zaitun ($\\rho = 910\\text{ kg m}^{-3}$) untuk mengukur tekanan gas yang sama. Ramalkan perubahan pada nilai $h$ dan berikan sebabnya.',
          answer: 'Nilai $h$ bertambah sangat besar ($\\approx 15$ kali ganda) kerana $P_{\\text{beza}} = h\\rho g$; apabila $\\rho$ minyak jauh lebih kecil daripada merkuri, tinggi turus $h$ mestilah jauh lebih besar untuk mengimbangi perbezaan tekanan yang sama.',
        },
      },
    },
    {
      id: 't5-2.4',
      chapterId: 't5-bab-2',
      code: '2.4',
      title: 'Prinsip Pascal',
      pageRef: 'm.s. 60–65',
      part1Anchor: {
        phenomenon:
          'Menekan pedal brek dengan daya kaki yang sederhana dapat memberhentikan kereta seberat satu tan, dan pam tangan jek hidraulik mampu mengangkat kereta ke udara hanya dengan menekan tuas kecil.',
        chapterConnection:
          'Memanfaatkan sifat cecair tak boleh mampat untuk menyalurkan tekanan (2.1) secara seragam lalu menggandakan daya mengikut nisbah luas keratan rentas omboh.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Pascal',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Prinsip Pascal menyatakan bahawa ' },
            { text: 'tekanan yang dikenakan ke atas bendalir tertutup', keyword: true },
            { text: ' akan ' },
            { text: 'dipindahkan secara seragam', keyword: true },
            { text: ' ke ' },
            { text: 'semua arah', keyword: true },
            { text: ' dalam bendalir itu.' },
          ],
          equationLatex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = \\left(\\frac{A_2}{A_1}\\right)F_1',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Penggandaan Daya dalam Sistem Hidraulik',
            cause: 'Daya input kecil $F_1$ dikenakan pada omboh kecil berluas $A_1$.',
            mechanism: 'Tekanan $P_1 = F_1/A_1$ dipindahkan secara seragam melalui bendalir hidraulik tak termampat ke omboh output berluas besar $A_2$ sehingga $P_2 = P_1$.',
            effect: 'Daya output terganda sebanyak faktor penggandaan $A_2 / A_1$, menghasilkan $F_2 = (A_2/A_1)F_1 \\gg F_1$ (namun jarak gerakan omboh output lebih pendek supaya kerja tetap abadi: $F_1 d_1 = F_2 d_2$).',
          },
        ],
        tables: [
          {
            title: 'Operasi Brek Hidraulik & Jek Hidraulik',
            headers: ['Sistem', 'Komponen Input $\\to$ Output', 'Peranan Injap / Bendalir'],
            rows: [
              ['Brek hidraulik kereta', 'Pedal brek $\\to$ Silinder induk ($A_1$ kecil) $\\to$ Silinder hamba di roda ($A_2$ besar)', 'Tekanan seragam menolak kasut brek/pelapik brek serentak pada keempat-empat roda; minyak brek digunakan kerana tidak termampat dan takat didih tinggi'],
              ['Jek hidraulik', 'Pemegang jek $\\to$ Omboh kecil ($A_1$) $\\to$ Omboh besar ($A_2$)', 'Injap A membuka semasa tuas naik (menyedut minyak dari takungan) dan menutup semasa tuas ditekan; Injap B sehala menahan beban tidak turun balik; Injap pelepas dibuka untuk menurunkan beban'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Rumus Pengganda Daya Prinsip Pascal',
            latex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2}, \\qquad \\text{Faktor Penggandaan} = \\frac{A_2}{A_1} = \\left(\\frac{d_2}{d_1}\\right)^2',
            symbols: [
              { symbol: 'F_1, F_2', meaning: 'Daya input (omboh kecil) & daya output (omboh besar)', unit: '$\\text{N}$' },
              { symbol: 'A_1, A_2', meaning: 'Luas keratan rentas omboh kecil & besar', unit: '$\\text{m}^2$ atau $\\text{cm}^2$' },
              { symbol: 'd_1, d_2', meaning: 'Diameter omboh kecil & besar (jika bulat)', unit: '$\\text{m}$ atau $\\text{cm}$' },
            ],
            appliesWhen: 'Bendalir tertutup tidak boleh mampat (tiada gelembung udara) dan omboh pada paras mendatar yang sama.',
            failsWhen: 'Jika diberi **diameter $d$ atau jejari $r$** bukan luas $A$: JANGAN buat $F_2/F_1 = d_2/d_1$! Luas bulatan berkadaran dengan $d^2$ ($A = \\pi r^2$), maka faktor penggandaan ialah $(d_2/d_1)^2$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-pressure-pascal',
            title: 'Sistem Hidraulik Pengganda Daya Prinsip Pascal',
            whatItShows: 'Daya kecil $F_1$ pada luas $A_1$ menjana tekanan $P_1$ yang dipindahkan seragam oleh bendalir hidraulik ke omboh besar $A_2$ untuk mengangkat beban besar $F_2$.',
            axisOrRule: 'Unit bagi $A_1$ dan $A_2$ (cth. $\\text{cm}^2$ dengan $\\text{cm}^2$) tidak perlu ditukar ke $\\text{m}^2$ selagi kedua-duanya menggunakan unit yang sama dalam nisbah $A_2/A_1$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Faktor Penggandaan & Daya Output Hidraulik',
          problem: 'Sebuah sistem hidraulik mempunyai omboh input berluas permukaan $A_1 = 10\\text{ cm}^2$ dan omboh output berluas permukaan $A_2 = 50\\text{ cm}^2$. Jika daya input $F_1 = 12\\text{ N}$ dikenakan, hitung (a) faktor penggandaan dan (b) daya output $F_2$.',
          given: ['$A_1 = 10\\text{ cm}^2$', '$A_2 = 50\\text{ cm}^2$', '$F_1 = 12\\text{ N}$'],
          formulaLatex: '\\text{Faktor Penggandaan} = \\frac{A_2}{A_1}, \\qquad F_2 = \\frac{A_2}{A_1} \\times F_1',
          formulaWhy: 'Tekanan sama $P_1 = P_2$ menyebabkan daya output bertambah mengikut nisbah luas permukaan.',
          substituteLatex: '\\text{Faktor} = \\frac{50}{10} = 5; \\qquad F_2 = 5 \\times 12',
          answer: '(a) Faktor penggandaan $= 5$; (b) $F_2 = 60\\text{ N}$.',
          trapAlert: 'Jika terdapat gelembung udara di dalam paip hidraulik, sebahagian daya digunakan untuk memampatkan udara, lalu mengurangkan daya output $F_2$.',
        },
        {
          title: 'Contoh 2: Sistem Brek Hidraulik Basikal',
          problem: 'Penunggang basikal mengenakan daya input $60\\text{ N}$ pada silinder induk berluas keratan rentas $0.80\\text{ cm}^2$. Hitung luas keratan rentas silinder output untuk menghasilkan daya membrek $840\\text{ N}$.',
          given: ['$F_1 = 60\\text{ N}$', '$A_1 = 0.80\\text{ cm}^2$', '$F_2 = 840\\text{ N}$'],
          formulaLatex: '\\frac{F_2}{A_2} = \\frac{F_1}{A_1}',
          formulaWhy: 'Tekanan dari silinder induk dipindahkan seragam oleh minyak brek ke silinder output.',
          substituteLatex: '\\frac{840}{A_2} = \\frac{60}{0.80} \\Rightarrow A_2 = \\frac{840 \\times 0.80}{60}',
          answer: '$A_2 = 11.2\\text{ cm}^2$.',
          trapAlert: 'Berhati-hati jika soalan meminta **diameter** dan bukannya luas! Jika $d_1 = 1.5\\text{ cm}$ dan daya diganda $12$ kali ($6\\text{ N} \\to 72\\text{ N}$), maka $(d_2/1.5)^2 = 12 \\Rightarrow d_2 = \\sqrt{12} \\times 1.5 = 5.20\\text{ cm}$.',
        },
      ],
      part5DecisionTable: {
        title: 'Pemilihan Ciri Bendalir & Omboh Sistem Hidraulik (Kertas 2)',
        rows: [
          {
            designChoice: 'Bendalir hidraulik jenis minyak (bukan air atau udara)',
            scientificReason: 'Tidak boleh dimampatkan (pemindahan tekanan seragam), takat didih tinggi (tidak mudah mengewap menghasilkan gelembung udara), serta tidak menyebabkan pengaratan paip.',
          },
          {
            designChoice: 'Omboh input berluas keratan rentas kecil ($A_1$ kecil) & omboh output besar ($A_2$ besar)',
            scientificReason: 'Menghasilkan faktor penggandaan $\\frac{A_2}{A_1}$ yang besar supaya daya input kecil mampu menghasilkan daya output yang besar.',
          },
          {
            designChoice: 'Dinding paip diperbuat daripada keluli tegar (bukan hos plastik lembut)',
            scientificReason: 'Tidak mengembang di bawah tekanan tinggi supaya tiada kehilangan tekanan ke dinding saluran.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Prinsip Pascal secara verbatim.', answer: 'Tekanan yang dikenakan ke atas bendalir tertutup akan dipindahkan secara seragam ke semua arah dalam bendalir itu.' },
          { question: 'Jika omboh input ditekan ke bawah sejauh $10\\text{ cm}$ dan nisbah luas $A_2/A_1 = 5$, sejauh manakah omboh besar naik?', answer: '$A_1 d_1 = A_2 d_2 \\Rightarrow d_2 = \\frac{10}{5} = 2\\text{ cm}$ (keabadian isi padu bendalir).' },
          { question: 'Apakah kesan kehadiran gelembung udara di dalam minyak brek?', answer: 'Daya membrek berkurang / brek rasa lembut kerana sebahagian kerja membazir untuk memampatkan udara.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah jek hidraulik mempunyai omboh kecil berdiameter $d_1 = 2.0\\text{ cm}$ dan omboh besar berdiameter $d_2 = 10.0\\text{ cm}$. Daya input $30\\text{ N}$ dikenakan pada omboh kecil.',
          step1GivenAndFormula: 'Diberi: $d_1 = 2.0\\text{ cm}$, $d_2 = 10.0\\text{ cm}$, $F_1 = 30\\text{ N}$. Rumus: $F_2 = \\left(\\frac{d_2}{d_1}\\right)^2 F_1$.',
          studentTask: 'Hitung daya angkat output $F_2$.',
          answerSteps: 'Faktor penggandaan $= (10.0/2.0)^2 = 25$; $F_2 = 25 \\times 30 = 750\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Terangkan mengikut Prinsip Pascal bagaimana satu pedal brek kereta dapat menghentikan keempat-empat tayar serentak dengan daya cengkaman yang kuat.',
          answer: 'Menekan pedal mengenakan daya pada omboh kecil silinder induk menghasilkan tekanan tinggi. Mengikut Prinsip Pascal, tekanan dalam minyak brek tak termampat dipindahkan secara seragam ke semua silinder hamba di empat roda yang mempunyai luas keratan rentas lebih besar, lalu menggandakan daya membrek serentak.',
        },
      },
    },
    {
      id: 't5-2.5',
      chapterId: 't5-bab-2',
      code: '2.5',
      title: 'Prinsip Archimedes',
      pageRef: 'm.s. 66–77',
      part1Anchor: {
        phenomenon:
          'Kapal kargo keluli seberat ribuan tan terapung di lautan, kapal selam menyelam dan timbul sesuka hati, dan belon udara panas melayang ke langit — semuanya kerana bendalir di sekeliling menolak objek ke atas seberat bendalir yang berjaya disesarkannya.',
        chapterConnection:
          'Menghubungkan perbezaan tekanan hidrostatik atas-bawah ($P_{\\text{bawah}} > P_{\\text{atas}}$) dari 2.1 kepada daya apungan $F_B = \\rho V g$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Daya Apungan ($F_B$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Daya apungan ialah daya yang bertindak ' },
            { text: 'ke atas', keyword: true },
            { text: ' ke atas sesuatu objek yang berada dalam suatu bendalir kerana wujudnya ' },
            { text: 'perbezaan tekanan', keyword: true },
            { text: ' antara permukaan atas dengan permukaan bawah objek itu.' },
          ],
        },
        {
          title: 'Prinsip Archimedes',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Prinsip Archimedes menyatakan bahawa suatu objek yang ' },
            { text: 'terendam sebahagian atau sepenuhnya', keyword: true },
            { text: ' di dalam suatu bendalir mengalami ' },
            { text: 'daya apungan yang sama dengan berat bendalir yang disesarkan', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'F_B = \\rho V g',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Syarat Keapungan: Terapung, Tenggelam atau Naik',
            cause: 'Objek berberat $W = mg$ berada dalam bendalir dan mengalami daya apungan $F_B = \\rho V g$.',
            mechanism: 'Daya paduan tegak ialah perbandingan antara $F_B$ dengan $W$: apabila $F_B = W$, objek terapung pegun (seimbang); apabila $W > F_B$, daya paduan ke bawah menyebabkannya tenggelam.',
            effect: 'Kapal selam mengisi tangki balast dengan air untuk menambah $W$ ($W > F_B \\implies$ menyelam) dan mengepam keluar air menggunakan udara termampat untuk mengurangkan $W$ ($W < F_B \\implies$ naik).',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Prinsip Archimedes & Mekanisme Kawalan',
            headers: ['Alat / Sistem', 'Mekanisme Kerja ($F_B$ vs $W$)', 'Ciri Reka Bentuk Kritis'],
            rows: [
              ['Hidrometer', 'Terapung pada kedalaman berbeza mengikut ketumpatan cecair ($W = \\rho V g$)', 'Bebuli besar diisi bebola plumbum di bawah (pusat graviti rendah supaya tegak); tiub sempit di atas dengan skala kecil di atas & besar di bawah'],
              ['Kapal laut & Garis Plimsoll', 'Isi padu besar lunas kapal menyesarkan isi padu air yang besar ($F_B = W$)', 'Garis Plimsoll menandakan had muatan selamat bagi air tawar/panas (kurang tumpat, tenggelam lebih dalam) vs air laut sejuk (lebih tumpat)'],
              ['Kapal selam', 'Tangki balast mengawal berat keseluruhan kapal ($W$) pada isi padu luaran tetap', 'Isi air $\\to W > F_B$ (tenggelam); hembus keluar air dengan udara termampat $\\to W < F_B$ (timbul)'],
              ['Belon udara panas', 'Pembakar memanaskan udara di dalam belon sehingga ketumpatan udara panas lebih rendah daripada udara luar', 'Berat jumlah belon + udara panas lebih kecil daripada daya apungan udara sejuk yang disesarkan ($F_B > W_{\\text{jumlah}}$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Daya Apungan & Keseimbangan Terapung',
            latex: 'F_B = \\rho V g, \\qquad F_B = W_{\\text{udara}} - W_{\\text{air}} = W_{\\text{bendalir sesar}}, \\qquad\\text{Jika terapung pegun: } F_B = W_{\\text{objek}}',
            symbols: [
              { symbol: 'F_B', meaning: 'Daya apungan (tujah ke atas)', unit: '$\\text{N}$' },
              { symbol: '\\rho', meaning: 'Ketumpatan **bendalir** (air/udara), bukan objek!', unit: '$\\text{kg m}^{-3}$' },
              { symbol: 'V', meaning: 'Isi padu objek yang **terendam sahaja** ($= V_{\\text{bendalir sesar}}$)', unit: '$\\text{m}^3$' },
            ],
            appliesWhen: 'Sebarang jasad tenggelam sepenuhnya atau terapung sebahagian di dalam cecair atau gas.',
            failsWhen: 'Perangkap paling popular: memasukkan ketumpatan objek sebagai $\\rho$ atau memakai keseluruhan isi padu bongkah walhal hanya sebahagiannya terendam!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-archimedes-bernoulli',
            title: 'Prinsip Archimedes ($F_B = \\rho V g$) & Perbandingan Prinsip Bernoulli',
            whatItShows: 'Bahagian kiri menggambarkan keseimbangan daya apungan $F_B = \\rho V_{\\text{terendam}}g$ menampung berat $W$; bahagian kanan menunjukkan penurunan tekanan apabila halaju bendalir meningkat (Bernoulli).',
            axisOrRule: 'Apabila bongkah terapung pegun, daya paduan ialah sifar ($F_B = W$): isi padu terendam bertambah jika bendalir menjadi kurang tumpat.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 2.3 (Aktiviti 2.9)',
            title: 'Mengaitkan Daya Apungan dengan Berat Bendalir Tersesar (Tin Eureka)',
            aim: 'Menentukan hubungan antara daya apungan dengan berat air yang disesarkan.',
            inference: 'Daya apungan yang bertindak ke atas jasad terendam berkait dengan berat air yang disesarkan.',
            hypothesis: 'Daya apungan sama dengan berat air yang disesarkan.',
            variables: {
              manipulated: 'Kedalaman rendaman silinder logam dalam air',
              responding: 'Kehilangan berat ketara ($W_U - W_A$) dan berat air disesarkan ($W_S$)',
              fixed: 'Ketumpatan air dan isi padu penuh silinder',
            },
            setupLogic: 'Timbang beban pemberat di udara ($W_U$) menggunakan neraca spring. Rendamkan ke dalam tin Eureka berisi penuh air sehingga muncungnya, kumpul air limpahan ke dalam bikar yang telah ditimbang, dan rekod bacaan neraca baharu ($W_A$).',
            expectedResult: 'Nilai $W_U - W_A$ adalah sama dengan berat air limpahan yang dikumpul ($W_S$).',
            conclusion: 'Daya apungan sama dengan berat bendalir yang disesarkan (Prinsip Archimedes disahkan).',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Berat Muatan Maksimum Sebuah Bot (Garis Plimsoll)',
          problem: 'Sebuah bot mempunyai tanda garis keselamatan L di sisinya. Isi padu bahagian bot di bawah garis L ialah $2.8\\text{ m}^3$ dan jisim bot kosong ialah $600\\text{ kg}$. Hitung berat muatan maksimum yang boleh dibawa oleh bot itu di dalam air ($\\rho = 1000\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$).',
          given: ['$V_{\\text{maks}} = 2.8\\text{ m}^3$', '$m_{\\text{bot}} = 600\\text{ kg}$', '$\\rho = 1000\\text{ kg m}^{-3}$'],
          formulaLatex: 'F_B = \\rho V g = W_{\\text{bot}} + W_{\\text{muatan}}',
          formulaWhy: 'Ketika terapung pada had garis L, daya apungan maksimum menyamai jumlah berat bot dan berat muatan maksimum.',
          substituteLatex: 'F_B = 1000 \\times 2.8 \\times 9.81 = 27\\,468\\text{ N};\\quad W_{\\text{bot}} = 600 \\times 9.81 = 5886\\text{ N};\\quad W_{\\text{muatan}} = 27\\,468 - 5886',
          answer: 'Berat muatan maksimum $= 21\\,582\\text{ N}$ ($2.20 \\times 10^3\\text{ kg}$).',
          trapAlert: 'Ramai pelajar terlupa menolak berat bot kosong ($600 \\times 9.81$) lalu menyamakan jawapan muatan dengan daya apungan penuh $F_B$.',
        },
        {
          title: 'Contoh 2: Isi Padu Bahagian Rakit Terendam',
          problem: 'Sebuah rakit berjisim $54\\text{ kg}$ terapung pegun di atas air laut ($\\rho = 1080\\text{ kg m}^{-3}$, $g = 9.81\\text{ m s}^{-2}$). Hitung berat rakit dan isi padu bahagian rakit yang tenggelam di dalam air laut.',
          given: ['$m = 54\\text{ kg}$', '$\\rho_{\\text{laut}} = 1080\\text{ kg m}^{-3}$'],
          formulaLatex: 'W = mg, \\qquad F_B = W \\implies \\rho V g = mg',
          formulaWhy: 'Untuk objek terapung pegun, daya apungan tepat menyamai berat objek.',
          substituteLatex: 'W = 54 \\times 9.81 = 529.74\\text{ N};\\quad V = \\frac{54}{1080}',
          answer: '$W = 529.74\\text{ N}$, isi padu terendam $V = 0.050\\text{ m}^3$.',
          trapAlert: 'Jangan lupa $V$ yang diperoleh ialah isi padu bahagian yang **tenggelam sahaja**, bukannya keseluruhan isi padu rakit.',
        },
      ],
      part5DecisionTable: {
        title: 'Pengubahsuaian Kapal Laut, Hidrometer & Belon Udara Panas',
        rows: [
          {
            designChoice: 'Bebuli besar diisi bebola plumbum di bahagian bawah hidrometer dan batang atas yang sempit',
            scientificReason: 'Bebuli besar menghasilkan daya apungan tinggi dan plumbum merendahkan pusat graviti agar tegak; batang sempit meningkatkan kepekaan skala.',
          },
          {
            designChoice: 'Menanda Garis Plimsoll berperingkat (TF, F, T, S, W, WNA) pada sisi badan kapal',
            scientificReason: 'Air tawar/panas kurang tumpat menyebabkan kapal tenggelam lebih dalam untuk memperoleh $F_B$ yang sama berbanding air laut sejuk/masin.',
          },
          {
            designChoice: 'Menggunakan sampul nilon berisi padu besar pada belon udara panas',
            scientificReason: 'Menyesarkan isi padu udara sejuk luar yang lebih besar supaya daya apungan $F_B = \\rho_{\\text{udara}}Vg$ melebihi jumlah berat belon dan penumpang.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Prinsip Archimedes secara verbatim.', answer: 'Suatu objek yang terendam sebahagian atau sepenuhnya dalam suatu bendalir mengalami daya apungan yang sama dengan berat bendalir yang disesarkan.' },
          { question: 'Seketul besi berberat $15\\text{ N}$ di udara memberi bacaan $11\\text{ N}$ apabila direndam penuh dalam air. Berapakah daya apungan?', answer: '$F_B = 15 - 11 = 4\\text{ N}$.' },
          { question: 'Apabila kapal laut belayar dari sungai air tawar masuk ke lautan masin, adakah kapal itu timbul lebih tinggi atau tenggelam lebih dalam?', answer: 'Timbul lebih tinggi kerana ketumpatan air laut lebih tinggi, maka isi padu air tersesar yang diperlukan ($V = \\frac{W}{\\rho g}$) menjadi lebih kecil.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah bongkah aluminium berisi padu $2.0 \\times 10^{-3}\\text{ m}^3$ terendam sepenuhnya di dalam minyak berketumpatan $800\\text{ kg m}^{-3}$. ($g = 9.81\\text{ m s}^{-2}$).',
          step1GivenAndFormula: 'Diberi: $V = 2.0 \\times 10^{-3}\\text{ m}^3$, $\\rho_{\\text{minyak}} = 800\\text{ kg m}^{-3}$. Rumus: $F_B = \\rho V g$.',
          studentTask: 'Hitung daya apungan yang bertindak ke atas bongkah itu dan berat air/minyak yang disesarkan.',
          answerSteps: '$F_B = 800 \\times (2.0 \\times 10^{-3}) \\times 9.81 = 15.70\\text{ N}$; berat minyak disesarkan $= F_B = 15.70\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Terangkan bagaimana sebuah kapal selam yang sedang berada di dasar laut dapat naik semula ke permukaan tanpa mengubah isi padu luarannya.',
          answer: 'Udara termampat dihembus ke dalam tangki balast untuk menolak keluar air laut. Jumlah berat kapal selam berkurang sehingga menjadi lebih kecil daripada daya apungan yang tetap ($F_B > W$). Satu daya paduan ke atas dihasilkan lalu menggerakkan kapal selam naik ke permukaan.',
        },
      },
    },
    {
      id: 't5-2.6',
      chapterId: 't5-bab-2',
      code: '2.6',
      title: 'Prinsip Bernoulli',
      pageRef: 'm.s. 78–83',
      part1Anchor: {
        phenomenon:
          'Bumbung rumah boleh terangkat ke atas ketika angin taufan melintang laju di atasnya, sayap pesawat menjana daya angkat beratus-ratus tan, dan tendangan bebas bola sepak dapat melengkung melepasi benteng pemain pertahanan — semuanya akibat bendalir yang laju menurunkan tekanannya.',
        chapterConnection:
          'Melengkapkan Bab 2 dengan memindahkan fokus daripada bendalir pegun (2.1–2.5) kepada **bendalir bergerak** (dinamik bendalir).',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Bernoulli',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Prinsip Bernoulli menyatakan bahawa apabila ' },
            { text: 'halaju pengaliran suatu bendalir bertambah', keyword: true },
            { text: ', ' },
            { text: 'tekanan dalam bendalir tersebut akan berkurang', keyword: true },
            { text: ', dan sebaliknya.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Bentuk Aerofoil Menjana Daya Angkat pada Sayap Pesawat',
            cause: 'Sayap berbentuk aerofoil (permukaan atas melengkung cembung, permukaan bawah lebih rata) bergerak meredah udara pada sudut serang positif.',
            mechanism: 'Aliran udara di bahagian atas menempuh laluan lebih panjang pada masa sama lalu bergerak dengan halaju lebih tinggi berbanding udara di bawah. Mengikut Prinsip Bernoulli, tekanan udara di atas sayap ($P_{\\text{atas}}$) menjadi lebih rendah daripada tekanan di bawah ($P_{\\text{bawah}}$).',
            effect: 'Perbezaan tekanan ($P_{\\text{bawah}} - P_{\\text{atas}}$) merentasi luas sayap menghasilkan daya angkat bersih ke atas (dibantu juga oleh Hukum Gerakan Newton Ketiga apabila sayap memesongkan udara ke bawah).',
          },
          {
            title: 'Aliran dalam Tiub Venturi',
            cause: 'Bendalir mengalir melalui tiub mendatar yang mempunyai bahagian keratan rentas sempit di tengah.',
            mechanism: 'Untuk mengekalkan kadar aliran isi padu yang sama, halaju bendalir meningkat tinggi di bahagian leher yang sempit.',
            effect: 'Tekanan cecair pada bahagian sempit jatuh paling rendah, ditunjukkan oleh paras tiub tegak paling rendah di atas leher sempit.',
          },
        ],
        tables: [
          {
            title: 'Aplikasi Harian & Sukan Prinsip Bernoulli',
            headers: ['Aplikasi', 'Kawasan Halaju Tinggi (Tekanan Rendah)', 'Kesan Fizikal Terhasil'],
            rows: [
              ['Penunu Bunsen', 'Pancutan gas laju melalui jet sempit di pangkal penunu', 'Menghasilkan kawasan bertekanan rendah yang menyedut masuk udara luar untuk pembakaran lengkap (nyalaan biru)'],
              ['Spoiler kereta lumba (aerofoil terbalik)', 'Permukaan melengkung di bawah spoiler membuat udara di bawah lebih laju', 'Tekanan di atas lebih tinggi $\\to$ menjana daya tekan ke bawah (*downforce*) untuk cengkaman tayar pada kelajuan tinggi'],
              ['Sepakan bola melengkung (Kesan Magnus)', 'Sisi bola di mana arah putaran sehaluan dengan arah aliran udara', 'Kelajuan udara relatif lebih tinggi di sisi itu (tekanan rendah) $\\to$ daya paduan membelokkan laluan bola'],
              ['Penyembur racun serangga / minyak wangi', 'Udara dipam laju merentasi hujung atas tiub menegak', 'Tekanan rendah di hujung atas menyebabkan tekanan atmosfera menolak cecair naik lalu tersembur menjadi titisan halus'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Daya Angkat Bersih daripada Perbezaan Tekanan Bernoulli',
            latex: 'F_{\\text{angkat}} = (P_{\\text{bawah}} - P_{\\text{atas}}) \\times A',
            symbols: [
              { symbol: 'F_{\\text{angkat}}', meaning: 'Daya angkat bersih', unit: '$\\text{N}$' },
              { symbol: 'P_{\\text{bawah}} - P_{\\text{atas}}', meaning: 'Perbezaan tekanan antara permukaan bawah dan atas', unit: '$\\text{Pa}$' },
              { symbol: 'A', meaning: 'Luas permukaan sayap / bumbung', unit: '$\\text{m}^2$' },
            ],
            appliesWhen: 'Aliran bendalir mantap (laminar) mengalir merentasi dua permukaan pada halaju berbeza.',
            failsWhen: 'Jika sudut serang aerofoil terlalu curam, aliran menjadi bergolak (*turbulent*) menyebabkan pesawat kehilangan daya angkat (*stall*).',
          },
        ],
        diagrams: [
          {
            kind: 'f5-archimedes-bernoulli',
            title: 'Tiub Venturi & Aliran Udara Merentasi Aerofoil (Prinsip Bernoulli)',
            whatItShows: 'Garis aliran udara lebih rapat dan laju di atas aerofoil serta di leher sempit tiub Venturi, menghasilkan kawasan bertekanan rendah yang menjana daya angkat.',
            axisOrRule: 'Jarak garis arus lebih rapat = halaju bendalir lebih tinggi = tekanan bendalir lebih rendah.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Daya Angkat ke Atas Bumbung Semasa Ribut',
          problem: 'Angin ribut bertiup secara mengufuk di atas bumbung rata sebuah rumah seluas $45\\text{ m}^2$. Halaju tinggi di atas bumbung mengurangkan tekanan udara di atasnya kepada $99\\,200\\text{ Pa}$ manakala udara pegun di dalam rumah kekal pada tekanan atmosfera $101\\,000\\text{ Pa}$. Hitung daya angkat bersih ke atas bumbung.',
          given: ['$P_{\\text{bawah}} = 101\\,000\\text{ Pa}$', '$P_{\\text{atas}} = 99\\,200\\text{ Pa}$', '$A = 45\\text{ m}^2$'],
          formulaLatex: 'F = (P_{\\text{bawah}} - P_{\\text{atas}}) A',
          formulaWhy: 'Udara laju di atas bumbung merendahkan tekanan di atas sehingga tekanan atmosfera di dalam rumah menolak bumbung ke atas.',
          substituteLatex: 'F = (101\\,000 - 99\\,200) \\times 45 = 1800 \\times 45',
          answer: '$F = 81\\,000\\text{ N}$ ($81\\text{ kN}$) menghala ke atas.',
          trapAlert: 'Dalam soalan struktur SPM, JANGAN sebut "angin menyedut bumbung dari atas"; sentiasa nyatakan "**tekanan lebih tinggi di bawah/dalam menolak bumbung ke atas**"!',
        },
      ],
      part5DecisionTable: {
        title: 'Reka Bentuk Aerodinamik Pesawat & Kereta Lumba (Kertas 2)',
        rows: [
          {
            designChoice: 'Bentuk sayap aerofoil dengan permukaan atas melengkung dan sudut serang kecil',
            scientificReason: 'Halaju udara di atas lebih tinggi lalu merendahkan tekanan udara di atas sayap (Prinsip Bernoulli), menghasilkan daya angkat bersih ke atas.',
          },
          {
            designChoice: 'Spoiler kereta lumba berbentuk aerofoil terbalik (permukaan bawah melengkung)',
            scientificReason: 'Halaju udara di bawah spoiler lebih tinggi (tekanan lebih rendah), menghasilkan daya tekan ke bawah yang meningkatkan cengkaman dan kestabilan kereta.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Prinsip Bernoulli secara verbatim.', answer: 'Apabila halaju pengaliran suatu bendalir bertambah, tekanan dalam bendalir tersebut berkurang, dan sebaliknya.' },
          { question: 'Dalam tiub Venturi berisi air mengalir, di bahagian manakah paras air dalam tiub tegak paling rendah?', answer: 'Di atas bahagian tiub mendatar yang paling sempit kerana halaju aliran di situ paling tinggi maka tekanan paling rendah.' },
          { question: 'Selain Prinsip Bernoulli, hukum gerakan manakah yang turut menyumbang kepada daya angkat sayap pesawat pada sudut serang?', answer: 'Hukum Gerakan Newton Ketiga (sayap menolak udara ke bawah, udara bertindak balas menolak sayap ke atas).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah pesawat mempunyai jumlah luas sayap $50\\text{ m}^2$. Perbezaan tekanan udara di bawah dan di atas sayap semasa terbang ialah $2.4\\text{ kPa}$.',
          step1GivenAndFormula: 'Diberi: $A = 50\\text{ m}^2$, $\\Delta P = 2.4\\text{ kPa} = 2400\\text{ Pa}$. Rumus: $F_{\\text{angkat}} = \\Delta P \\times A$.',
          studentTask: 'Hitung jumlah daya angkat yang dihasilkan oleh sayap pesawat itu.',
          answerSteps: '$F_{\\text{angkat}} = 2400 \\times 50 = 120\\,000\\text{ N}$ ($1.2 \\times 10^5\\text{ N}$).',
        },
        transferQuestion: {
          question: 'Apabila dua buah kapal bergerak selari dan terlalu rapat antara satu sama lain, kedua-dua kapal cenderung tertarik untuk berlanggar. Terangkan fenomena ini.',
          answer: 'Air yang mengalir melalui saluran sempit di antara kedua-dua kapal menjadi lebih laju. Mengikut Prinsip Bernoulli, tekanan air di antara kapal menjadi lebih rendah daripada tekanan air di sebelah luar kedua-dua kapal. Perbezaan tekanan menolak kedua-dua kapal ke arah satu sama lain.',
        },
      },
    },
  ],
};
