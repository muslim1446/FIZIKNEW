import type { ChapterContent } from '../types/textbook';

export const bab2: ChapterContent = {
  id: 'bab-2',
  formLevel: 4,
  number: 2,
  title: 'Daya dan Gerakan I',
  pageRange: 'm.s. 24–75',
  overview:
    'Memahami bagaimana daya mengubah gerakan: kinematik garis lurus, tafsiran pita detik dan graf, jatuh bebas, hukum Newton, inersia, momentum, impuls, dan berat.',
  subtopics: [
    {
      id: '2.1',
      chapterId: 'bab-2',
      code: '2.1',
      title: 'Gerakan Linear',
      pageRef: 'm.s. 26–36',
      part1Anchor: {
        phenomenon:
          'Untuk meramal di mana kereta atau roket berada pada saat tertentu, fizik membezakan laluan sebenar (jarak) dengan perubahan kedudukan terpendek (sesaran) serta kadar perubahan halaju.',
        chapterConnection:
          'Menjadi asas pengiraan kinematik dan analisis pita detik $50\\text{ Hz}$ bagi semua topik daya, momentum, dan tenaga mekanik.',
      },
      part2SacredDefinitions: [
        {
          title: 'Jarak dan Sesaran',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Jarak ialah ' },
            { text: 'jumlah panjang lintasan', keyword: true },
            { text: ' yang dilalui oleh suatu objek (skalar). Sesaran ialah ' },
            { text: 'jarak terpendek antara kedudukan awal dengan kedudukan akhir', keyword: true },
            { text: ' pada suatu ' },
            { text: 'arah tertentu', keyword: true },
            { text: ' (vektor).' },
          ],
        },
        {
          title: 'Laju dan Halaju',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Laju ialah ' },
            { text: 'kadar perubahan jarak', keyword: true },
            { text: '. Halaju ialah ' },
            { text: 'kadar perubahan sesaran', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'v = \\frac{s}{t}',
        },
        {
          title: 'Pecutan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pecutan ialah ' },
            { text: 'kadar perubahan halaju', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'a = \\frac{v - u}{t}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Prinsip Kerja Jangka Masa Detik ($50\\text{ Hz}$)',
            cause: 'Bekalan kuasa a.u. $50\\text{ Hz}$ menggetarkan bilah keluli sebanyak 50 kali sesaat.',
            mechanism: 'Setiap ketukan menandakan satu titik pada pita kertas; jarak antara 2 titik berturutan ialah 1 detik $= \\frac{1}{50}\\text{ s} = 0.02\\text{ s}$.',
            effect: 'Jalur 10 detik bersamaan $10 \\times 0.02 = 0.2\\text{ s}$; corak jarak titik mendedahkan halaju seragam, pecutan, atau nyahpecutan.',
          },
        ],
        tables: [
          {
            title: 'Empat Persamaan Gerakan Linear (Pecutan Seragam)',
            headers: ['Persamaan', 'Kuantiti Tiada', 'Kegunaan Pantas'],
            rows: [
              ['$v = u + at$', '$s$', 'Mencari halaju akhir atau masa tanpa sesaran'],
              ['$s = \\frac{1}{2}(u + v)t$', '$a$', 'Mencari sesaran apabila $u, v, t$ diketahui'],
              ['$s = ut + \\frac{1}{2}at^2$', '$v$', 'Mencari sesaran apabila $u, a, t$ diketahui'],
              ['$v^2 = u^2 + 2as$', '$t$', 'Mengaitkan halaju dengan sesaran tanpa masa'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pecutan daripada Carta Pita Detik',
            latex: 'u = \\frac{s_{\\text{awal}}}{t_{\\text{jalur}}}, \\quad v = \\frac{s_{\\text{akhir}}}{t_{\\text{jalur}}}, \\quad a = \\frac{v - u}{(n - 1) \\times t_{\\text{jalur}}}',
            symbols: [
              { symbol: 's_{\\text{awal}}, s_{\\text{akhir}}', meaning: 'Panjang jalur pertama dan jalur terakhir (biasanya 10 detik = $0.2\\text{ s}$)', unit: '$\\text{m}$ atau $\\text{cm}$' },
              { symbol: 'n', meaning: 'Bilangan jalur pita pada carta', unit: '—' },
              { symbol: 'a', meaning: 'Pecutan (positif) atau nyahpecutan (negatif)', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Jalur pita dipotong mengikut selang detik yang sama dan gerakan mempunyai pecutan seragam.',
            failsWhen: 'Menggunakan $n$ dan bukannya $(n - 1)$ untuk sela masa antara halaju purata jalur pertama ke jalur terakhir!',
          },
        ],
        diagrams: [
          {
            kind: 'ticker-tape',
            title: 'Penyahkodan Corak Titik & Carta Pita Detik',
            whatItShows: 'Jarak titik seragam = halaju malar; jarak titik bertambah = pecutan; jarak titik berkurang = nyahpecutan; tinggi jalur carta = halaju purata setiap sela.',
            axisOrRule: '1 detik = $0.02\\text{ s}$ pada $50\\text{ Hz}$. Masa perubahan halaju antara jalur pertama ke ke-$n$ ialah $(n - 1)t_{\\text{jalur}}$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Mengira Pecutan daripada Carta Pita Detik',
          problem: 'Satu carta pita detik terdiri daripada 5 jalur berurutan (setiap jalur mengandungi 10 detik pada $50\\text{ Hz}$). Panjang jalur pertama ialah $2.0\\text{ cm}$ dan jalur ke-5 ialah $10.0\\text{ cm}$. Cari pecutan.',
          given: ['1 jalur = $10 \\times 0.02\\text{ s} = 0.2\\text{ s}$', '$u = \\frac{2.0\\text{ cm}}{0.2\\text{ s}} = 10\\text{ cm s}^{-1} = 0.10\\text{ m s}^{-1}$', '$v = \\frac{10.0\\text{ cm}}{0.2\\text{ s}} = 50\\text{ cm s}^{-1} = 0.50\\text{ m s}^{-1}$', 'Sela masa antara $u$ dengan $v$: $t = (5 - 1) \\times 0.2\\text{ s} = 0.8\\text{ s}$'],
          formulaLatex: 'a = \\frac{v - u}{t}',
          formulaWhy: 'Pecutan ialah kadar perubahan halaju dari titik tengah jalur 1 ke titik tengah jalur 5.',
          substituteLatex: 'a = \\frac{0.50 - 0.10}{0.8}',
          answer: '$+0.50\\text{ m s}^{-2}$ (atau $50\\text{ cm s}^{-2}$)',
          trapAlert: 'Kesilapan paling kerap SPM: membahagi dengan $5 \\times 0.2 = 1.0\\text{ s}$. Gunakan $(n - 1) = 4$ sela!',
        },
        {
          title: 'Contoh 2: Basikal Memecut Secara Seragam',
          problem: 'Sebuah basikal memecut secara seragam dari keadaan pegun hingga mencapai halaju $12\\text{ m s}^{-1}$ dalam masa $4\\text{ s}$. Hitung sesarannya.',
          given: ['$u = 0\\text{ m s}^{-1}$ ("keadaan pegun")', '$v = 12\\text{ m s}^{-1}$', '$t = 4\\text{ s}$'],
          formulaLatex: 's = \\frac{1}{2}(u + v)t',
          formulaWhy: 'Tidak perlu mengira $a$ dahulu kerana $u, v, t$ sudah diberi.',
          substituteLatex: 's = \\frac{1}{2}(0 + 12)(4)',
          answer: '$24\\text{ m}$',
          trapAlert: 'Sentiasa nyatakan $u = 0$ apabila soalan menyebut "bermula dari keadaan pegun" atau $v = 0$ apabila "berhenti".',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Berapakah selang masa 1 detik bagi jangka masa detik $50\\text{ Hz}$?', answer: '$0.02\\text{ s}$.' },
          { question: 'Tuliskan keempat-empat persamaan gerakan linear.', answer: '$v=u+at$, $s=\\frac{1}{2}(u+v)t$, $s=ut+\\frac{1}{2}at^2$, $v^2=u^2+2as$.' },
          { question: 'Apakah maksud nilai pecutan negatif ($-3\\text{ m s}^{-2}$)?', answer: 'Objek mengalami nyahpecutan (halaju berkurang $3\\text{ m s}^{-1}$ setiap saat) atau memecut ke arah bertentangan.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah kereta bergerak pada $20\\text{ m s}^{-1}$ membrek dan berhenti selepas melalui jarak $40\\text{ m}$. Hitung nyahpecutan kereta itu.',
          step1GivenAndFormula: 'Diberi: $u = 20\\text{ m s}^{-1}$, $v = 0\\text{ m s}^{-1}$, $s = 40\\text{ m}$. Rumus: $v^2 = u^2 + 2as$.',
          studentTask: 'Gantikan nilai dan nyatakan jawapan berserta maksud tanda.',
          answerSteps: 'Langkah 3: $0 = 20^2 + 2a(40) \\implies 80a = -400$ → Langkah 4: $a = -5.0\\text{ m s}^{-2}$ (nyahpecutan $5.0\\text{ m s}^{-2}$).',
        },
        transferQuestion: {
          question: 'Satu jalur pita detik mempunyai panjang yang semakin berkurang dari kiri ke kanan (arah tarikan ke kanan). Jelaskan jenis gerakan troli.',
          answer: 'Jika ditarik ke kanan, titik paling awal berada di kanan. Maka jalur kanan lebih pendek atau kiri lebih panjang — periksa tanda awal: jika jarak antara titik awal ke titik akhir makin rapat, troli mengalami nyahpecutan.',
        },
      },
    },
    {
      id: '2.2',
      chapterId: 'bab-2',
      code: '2.2',
      title: 'Graf Gerakan Linear',
      pageRef: 'm.s. 37–45',
      part1Anchor: {
        phenomenon:
          'Graf sesaran-masa ($s$-$t$) dan halaju-masa ($v$-$t$) menterjemah keseluruhan sejarah perjalanan — termasuk berhenti, berpatah balik, dan memecut — dalam satu pandangan ruang.',
        chapterConnection:
          'Mengubah persamaan 2.1 menjadi tafsiran kecerunan dan luas di bawah graf yang hampir pasti diuji dalam SPM Kertas 1 dan 2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tafsiran Kecerunan dan Luas Graf Gerakan',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Bagi graf $s$-$t$: ' },
            { text: 'kecerunan graf ialah halaju', keyword: true },
            { text: '. Bagi graf $v$-$t$: ' },
            { text: 'kecerunan graf ialah pecutan', keyword: true },
            { text: ' dan ' },
            { text: 'luas di bawah graf ialah sesaran', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Membezakan "Berhenti" vs "Patah Balik" pada Graf $s$-$t$ dan $v$-$t$',
            cause: 'Graf melintang atau menyilang paksi masa sering disalah baca oleh pelajar.',
            mechanism: 'Garis mengufuk pada $s$-$t$ bermakna kecerunan $= 0$ (pegun), sedangkan garis mengufuk pada $v$-$t$ (di atas $v=0$) bermakna halaju malar (masih bergerak!). Patah balik berlaku apabila kecerunan $s$-$t$ bertukar negatif ATAU graf $v$-$t$ melintasi $v=0$ ke kawasan negatif.',
            effect: 'Jumlah jarak = jumlah magnitud luas atas + luas bawah; jumlah sesaran = luas atas $-$ luas bawah.',
          },
        ],
        tables: [
          {
            title: 'Jadual Terjemahan Graf $s$-$t$, $v$-$t$ dan $a$-$t$',
            headers: ['Jenis Gerakan', 'Graf $s$-$t$', 'Graf $v$-$t$', 'Graf $a$-$t$'],
            rows: [
              ['Pegun ($v = 0$)', 'Garis mengufuk ($s$ malar)', 'Garis pada $v = 0$', '$a = 0$'],
              ['Halaju seragam ($v > 0$)', 'Garis lurus cerun positif malar', 'Garis mengufuk ($v$ malar $> 0$)', '$a = 0$'],
              ['Pecutan seragam ($a > 0$)', 'Lengkung cerun makin curam', 'Garis lurus cerun positif malar', 'Garis mengufuk ($a$ malar $> 0$)'],
              ['Nyahpecutan seragam ($a < 0$)', 'Lengkung cerun makin landai', 'Garis lurus cerun negatif malar', 'Garis mengufuk ($a$ malar $< 0$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Kecerunan & Luas Graf $v$-$t$',
            latex: 'a = \\frac{v_2 - v_1}{t_2 - t_1}, \\qquad s_{\\text{trapezium}} = \\frac{1}{2}(a + b)t',
            symbols: [
              { symbol: 'a, b', meaning: 'Dua sisi selari trapezium pada paksi halaju', unit: '$\\text{m s}^{-1}$' },
              { symbol: 't', meaning: 'Lebar selang masa pada paksi-$x$', unit: '$\\text{s}$' },
            ],
            appliesWhen: 'Mengira jarak atau sesaran daripada kawasan segi tiga, segi empat tepat, atau trapezium di bawah graf $v$-$t$.',
            failsWhen: 'Mengira luas di bawah graf $s$-$t$ — luas di bawah graf $s$-$t$ TIDAK mempunyai makna fizik.',
          },
        ],
        diagrams: [
          {
            kind: 'linear-motion-graphs',
            title: 'Hubungan Penterjemahan Antara Graf $s$-$t$, $v$-$t$ dan $a$-$t$',
            whatItShows: 'Perbandingan serentak tiga fasa gerakan: pecutan seragam ($0\\to t_1$), halaju seragam ($t_1\\to t_2$), dan nyahpecutan hingga berhenti ($t_2\\to t_3$).',
            axisOrRule: 'Graf $s$-$t$ (kecerunan = $v$) $\\to$ Graf $v$-$t$ (kecerunan = $a$, luas = $s$) $\\to$ Graf $a$-$t$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Jumlah Jarak vs Sesaran Bersih daripada Graf $v$-$t$',
          problem: 'Sebuah motosikal memecut dari $0$ ke $20\\text{ m s}^{-1}$ dalam $5\\text{ s}$, bergerak pada halaju malar selama $10\\text{ s}$, dan berpatah balik dengan halaju $-10\\text{ m s}^{-1}$ selama $4\\text{ s}$. Cari jumlah jarak dan sesaran akhir.',
          given: ['Kawasan positif: trapezium dengan sisi selari $10\\text{ s}$ dan $15\\text{ s}$, tinggi $20\\text{ m s}^{-1}$', 'Kawasan negatif: segi empat tepat lebar $4\\text{ s}$, tinggi $-10\\text{ m s}^{-1}$'],
          formulaLatex: 's = \\text{Luas di bawah graf } v\\text{-}t',
          formulaWhy: 'Sesaran mengambil kira arah ($+$ dan $-$); jarak menjumlahkan semua magnitud.',
          substituteLatex: 's_+ = \\frac{1}{2}(10 + 15)(20) = +250\\text{ m}; \\quad s_- = 4(-10) = -40\\text{ m}',
          answer: 'Jumlah jarak $= 250 + 40 = 290\\text{ m}$; Sesaran bersih $= 250 - 40 = +210\\text{ m}$',
          trapAlert: 'Jangan tolak kawasan negatif apabila soalan meminta **jumlah jarak**; tolak hanya untuk **sesaran bersih**.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah yang diwakili oleh kecerunan graf $s$-$t$?', answer: 'Halaju.' },
          { question: 'Apakah yang diwakili oleh luas di bawah graf $v$-$t$?', answer: 'Sesaran (atau jarak jika satu arah sahaja).' },
          { question: 'Bagaimanakah objek pegun ditunjukkan pada graf $v$-$t$?', answer: 'Garis mengufuk tepat di atas paksi masa ($v = 0$).' },
        ],
        fadedProblem: {
          prompt: 'Sebuah basikal pada graf $v$-$t$ bergerak dengan pecutan malar dari $4\\text{ m s}^{-1}$ pada $t=0\\text{ s}$ ke $16\\text{ m s}^{-1}$ pada $t=6\\text{ s}$. Hitung sesaran dalam $6\\text{ s}$ itu.',
          step1GivenAndFormula: 'Diberi: trapezium dengan $u = 4\\text{ m s}^{-1}$, $v = 16\\text{ m s}^{-1}$, $t = 6\\text{ s}$. Rumus: $s = \\frac{1}{2}(u+v)t$.',
          studentTask: 'Selesaikan Langkah 3 dan 4.',
          answerSteps: 'Langkah 3: $s = \\frac{1}{2}(4 + 16)(6)$ → Langkah 4: $s = 60\\text{ m}$.',
        },
        transferQuestion: {
          question: 'Graf $s$-$t$ menunjukkan garis lurus menurun dari $s = 30\\text{ m}$ ($t=0$) ke $s = 0\\text{ m}$ ($t=5\\text{ s}$). Lukiskan secara lisan bentuk graf $v$-$t$ sepadannya.',
          answer: 'Garis mengufuk pada nilai halaju malar negatif $v = -6\\text{ m s}^{-1}$ dari $t=0$ hingga $t=5\\text{ s}$.',
        },
      },
    },
    {
      id: '2.3',
      chapterId: 'bab-2',
      code: '2.3',
      title: 'Gerakan Jatuh Bebas',
      pageRef: 'm.s. 46–51',
      part1Anchor: {
        phenomenon:
          'Dalam udara, bulu pelepah jatuh perlahan berbanding bola logam — bukan kerana beratnya berbeza, tetapi kerana rintangan udara. Apabila udara disingkirkan (vakum), kedua-duanya tiba di dasar serentak!',
        chapterConnection:
          'Mengaplikasikan persamaan gerakan linear (2.1) bagi kes khusus pecutan graviti malar $g = 9.81\\text{ m s}^{-2}$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Jatuh Bebas',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Suatu objek dikatakan mengalami ' },
            { text: 'jatuh bebas', keyword: true },
            { text: ' apabila ia jatuh di bawah pengaruh ' },
            { text: 'daya graviti sahaja', keyword: true },
            { text: ' tanpa dipengaruhi daya luar seperti ' },
            { text: 'rintangan udara', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Pecutan Graviti Piawai',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Semua objek yang jatuh bebas dekat permukaan Bumi memecut pada kadar seragam iaitu ' },
            { text: 'pecutan graviti', keyword: true },
            { text: ', $g = 9.81\\text{ m s}^{-2}$, ' },
            { text: 'tidak bergantung pada jisim', keyword: true },
            { text: ' objek.' },
          ],
          equationLatex: 'g = 9.81\\text{ m s}^{-2}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bulu Pelepah vs Bola Logam: Udara vs Vakum',
            cause: 'Di dalam tiub berisi udara, luas permukaan bulu pelepah besar berbanding beratnya.',
            mechanism: 'Rintangan udara bertindak ke atas lebih signifikan terhadap bulu pelepah, mengurangkan daya bersihnya; apabila udara dipam keluar, tiada rintangan udara.',
            effect: 'Dalam vakum, kedua-duanya mengalami daya graviti sahaja dan jatuh dengan pecutan sama $g = 9.81\\text{ m s}^{-2}$, tiba serentak.',
          },
        ],
        tables: [
          {
            title: 'Konvensi Tanda Gerakan Menegak ($+$ Ke Atas, $-$ Ke Bawah)',
            headers: ['Kuantiti', 'Objek Dilontar Ke Atas', 'Pada Puncak Tertinggi', 'Objek Dijatuhkan Ke Bawah'],
            rows: [
              ['Halaju awal / semasa ($u, v$)', 'Positif ($+$)', '$v = 0\\text{ m s}^{-1}$', 'Negatif ($-$) (atau $u=0$ jika dilepas)'],
              ['Pecutan graviti ($g$)', 'Sentiasa $-9.81\\text{ m s}^{-2}$', 'Sentiasa $-9.81\\text{ m s}^{-2}$ (TIDAK sifar!)', 'Sentiasa $-9.81\\text{ m s}^{-2}$'],
              ['Sesaran ($s$)', 'Positif di atas titik asal', 'Sesaran maksimum ($+$)', 'Negatif jika di bawah titik asal'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Rumus Jatuh Bebas (Eksperimen 2.1 Photogate)',
            latex: 'v = u + gt, \\quad s = ut + \\frac{1}{2}gt^2, \\quad g = \\frac{2h}{t_2^2 - t_1^2}',
            symbols: [
              { symbol: 'g', meaning: 'Pecutan graviti ($9.81\\text{ m s}^{-2}$; Khatulistiwa $9.78$, Kutub $9.83$)', unit: '$\\text{m s}^{-2}$' },
              { symbol: 'h', meaning: 'Jarak menegak antara dua photogate', unit: '$\\text{m}$' },
            ],
            appliesWhen: 'Rintangan udara boleh diabaikan dan objek dekat permukaan Bumi.',
            failsWhen: 'Menggunakan $g = +9.81$ bagi gerakan lontar ke atas apabila $u$ bertanda positif — ia mesti berlawanan tanda!',
          },
        ],
        diagrams: [
          {
            kind: 'free-fall-vacuum',
            title: 'Tiub Newton: Bola Logam vs Bulu Pelepah',
            whatItShows: 'Perbandingan jatuh dalam tiub berudara (bola mendahului) vs tiub vakum (jatuh seiring dengan pecutan sama $9.81\\text{ m s}^{-2}$).',
            axisOrRule: 'Graf $v$-$t$ jatuh bebas (bawah sebagai $+$): garis lurus dari $(0,0)$ dengan kecerunan malar $+9.81\\text{ m s}^{-2}$.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 2.1',
            title: 'Menentukan Nilai Pecutan Graviti ($g$)',
            aim: 'Menentukan nilai pecutan graviti, $g$ menggunakan sistem photogate.',
            inference: 'Objek yang jatuh bebas memecut akibat tarikan graviti Bumi.',
            hypothesis: 'Nilai pecutan graviti bagi bola keluli yang jatuh bebas menghampiri $9.81\\text{ m s}^{-2}$.',
            variables: {
              manipulated: 'Ketinggian / jarak jatuh bola keluli, $h$',
              responding: 'Masa jatuh melalui dua photogate ($t_1, t_2$) dan nilai $g$',
              fixed: 'Lokasi makmal (medan graviti tempatan)',
            },
            setupLogic: 'Elektromagnet melepaskan bola keluli melalui photogate 1 dan 2 yang terpisah sejauh $h$. Pemasa elektronik mencatat $t_1$ dan $t_2$. Ulang untuk beberapa nilai $h$.',
            expectedResult: 'Nilai $g$ yang diperoleh hampir malar sekitar $9.8\\text{ m s}^{-2}$ walaupun $h$ berubah.',
            conclusion: 'Semua objek jatuh bebas memecut pada kadar seragam $g \\approx 9.81\\text{ m s}^{-2}$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Bola Dilontar Menegak Ke Atas',
          problem: 'Sebiji bola dilontar menegak ke atas dengan halaju awal $15\\text{ m s}^{-1}$. Hitung ketinggian maksimum yang dicapai ($g = 9.81\\text{ m s}^{-2}$).',
          given: ['$u = +15\\text{ m s}^{-1}$', '$v = 0\\text{ m s}^{-1}$ di puncak tertinggi', '$a = g = -9.81\\text{ m s}^{-2}$'],
          formulaLatex: 'v^2 = u^2 + 2as',
          formulaWhy: 'Masa tidak diberikan dan tidak diperlukan untuk mencari tinggi maksimum $s$.',
          substituteLatex: '0^2 = 15^2 + 2(-9.81)s \\implies 19.62s = 225',
          answer: '$s = +11.47\\text{ m}$ (di atas titik lontaran)',
          trapAlert: 'Pada puncak tertinggi, halaju $v = 0$, TETAPI pecutan kekal $-9.81\\text{ m s}^{-2}$ (daya graviti masih menarik ke bawah)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan maksud jatuh bebas.', answer: 'Jatuh di bawah pengaruh daya graviti sahaja tanpa rintangan udara.' },
          { question: 'Antara batu $5\\text{ kg}$ dengan syiling $5\\text{ g}$ yang dilepaskan serentak dalam vakum dari tinggi sama, yang manakah tiba dahulu?', answer: 'Tiba serentak kerana pecutan graviti tidak bergantung pada jisim.' },
          { question: 'Apakah nilai pecutan bola tepat pada ketinggian maksimumnya?', answer: '$9.81\\text{ m s}^{-2}$ ke bawah (bukan sifar!).' },
        ],
        fadedProblem: {
          prompt: 'Sebiji kelapa gugur dari dahan setinggi $12\\text{ m}$. Hitung halajunya tepat sebelum menyentuh tanah.',
          step1GivenAndFormula: 'Diberi: $u = 0$, $s = -12\\text{ m}$, $a = -9.81\\text{ m s}^{-2}$. Rumus: $v^2 = u^2 + 2as$.',
          studentTask: 'Kira nilai $v$ dan terangkan maksud arah gerakan.',
          answerSteps: 'Langkah 3: $v^2 = 0 + 2(-9.81)(-12) = 235.44$ → Langkah 4: $v = -15.34\\text{ m s}^{-1}$ (arah ke bawah).',
        },
        transferQuestion: {
          question: 'Nilai $g$ di Kutub Utara ($9.83\\text{ m s}^{-2}$) sedikit lebih tinggi berbanding di Khatulistiwa ($9.78\\text{ m s}^{-2}$). Jelaskan punca fizik perbezaan ini.',
          answer: 'Bentuk Bumi sedikit leper di kutub ($R_{\\text{kutub}} < R_{\\text{khatulistiwa}}$). Oleh kerana $g = GM/R^2$, jarak lebih dekat ke pusat Bumi menghasilkan tarikan graviti lebih kuat.',
        },
      },
    },
    {
      id: '2.4',
      chapterId: 'bab-2',
      code: '2.4',
      title: 'Inersia',
      pageRef: 'm.s. 52–57',
      part1Anchor: {
        phenomenon:
          'Penumpang terhumban ke hadapan apabila bas membrek mengejut dan sos tomato keluar apabila botol digoncang lalu diberhentikan tiba-tiba — jirim sentiasa menentang perubahan keadaannya.',
        chapterConnection:
          'Memperkenalkan Hukum Gerakan Newton Pertama yang menjelaskan mengapa daya diperlukan untuk memulakan atau menghentikan gerakan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Inersia',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Inersia ialah ' },
            { text: 'kecenderungan suatu objek untuk kekal dalam keadaan asal', keyword: true },
            { text: ', sama ada ' },
            { text: 'pegun atau bergerak dalam garis lurus dengan halaju malar', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Hukum Gerakan Newton Pertama',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Sesuatu objek akan ' },
            { text: 'kekal dalam keadaan pegun atau bergerak dengan halaju malar dalam garis lurus', keyword: true },
            { text: ' jika ' },
            { text: 'tiada daya paduan', keyword: true },
            { text: ' bertindak ke atasnya.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Penumpang Terhumban Ke Hadapan Apabila Bas Membrek',
            cause: 'Bas yang sedang bergerak ke hadapan membrek secara tiba-tiba.',
            mechanism: 'Bahagian bawah badan penumpang berhenti bersama kerusi bas melalui geseran, tetapi bahagian atas badan mempunyai inersia untuk mengekalkan gerakan ke hadapan.',
            effect: 'Penumpang terhumban ke hadapan; tali pinggang keledar dan beg udara diperlukan untuk menahan inersia ini.',
          },
        ],
        tables: [
          {
            title: 'Hubungan Jisim dan Inersia',
            headers: ['Faktor', 'Kesan ke atas Inersia', 'Contoh Harian'],
            rows: [
              ['Jisim besar', 'Inersia besar (sukar digerakkan dan sukar dihentikan)', 'Lori muatan penuh memerlukan jarak membrek jauh lebih panjang berbanding kereta'],
              ['Jisim kecil', 'Inersia kecil (mudah diubah keadaan gerakannya)', 'Troli kosong mudah ditolak dan dihentikan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Hubungan Eksperimen Neraca Inersia ($T^2$ vs $m$)',
            latex: 'T^2 \\propto m',
            symbols: [
              { symbol: 'T', meaning: 'Tempoh ayunan bilah gergaji', unit: '$\\text{s}$' },
              { symbol: 'm', meaning: 'Jisim plastisin (ukuran kuantitatif inersia)', unit: '$\\text{g}$ atau $\\text{kg}$' },
            ],
            appliesWhen: 'Mengukur jisim angkasawan dalam keadaan sifar graviti di Stesen Angkasa Antarabangsa (ISS) di mana penimbang berat biasa gagal berfungsi.',
            failsWhen: 'Menimbang di tempat tanpa graviti menggunakan neraca spring ($W = mg = 0$), sedangkan inersia sentiasa wujud.',
          },
        ],
        diagrams: [
          {
            kind: 'inertia-balance',
            title: 'Susunan Eksperimen 2.2: Neraca Inersia Bilah Gergaji',
            whatItShows: 'Bilah gergaji diapit oleh pengapit-G pada kaki meja dengan jisim plastisin $m$ di hujungnya; ayunan mengufuk diukur dengan jam randik.',
            axisOrRule: 'Graf $T^2$ melawan $m$ ialah garis lurus meningkat; semakin besar $m$, semakin besar tempoh $T$ (semakin besar inersia).',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 2.2',
            title: 'Hubungan Antara Jisim dengan Inersia',
            aim: 'Mengkaji hubungan antara jisim dengan inersia suatu objek menggunakan neraca inersia.',
            inference: 'Inersia suatu objek bergantung pada jisimnya.',
            hypothesis: 'Semakin besar jisim objek, semakin besar inersianya (semakin lama tempoh ayunan).',
            variables: {
              manipulated: 'Jisim plastisin, $m$',
              responding: 'Tempoh ayunan bilah gergaji, $T$',
              fixed: 'Panjang bilah gergaji yang berayun dan sesaran awal ayunan',
            },
            setupLogic: 'Apit satu hujung bilah gergaji dengan pengapit-G; lekatkan plastisin $20\\text{ g}$ pada hujung bebas. Sesarkan sedikit mengufuk dan catat masa 10 ayunan lengkap. Ulang untuk $m = 40, 60, 80, 100\\text{ g}$.',
            expectedResult: 'Graf $T^2$ melawan $m$ menaik secara linear/berkadar terus.',
            conclusion: 'Semakin bertambah jisim, semakin bertambah inersia. Hipotesis diterima.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh Konseptual: Mengeringkan Payung Basah Secara Pantas',
          problem: 'Terangkan bagaimana memutarkan atau menghentak payung basah ke bawah dan memberhentikannya secara tiba-tiba dapat menanggalkan titisan air.',
          given: ['Pada mulanya payung dan titisan air bergerak ke bawah bersama-sama', 'Payung diberhentikan secara mendadak'],
          formulaLatex: '\\text{Hukum Newton I: } \\sum F = 0 \\implies v = \\text{malar}',
          formulaWhy: 'Tiada daya ikatan yang cukup kuat menarik titisan air berhenti bersama fabrik payung.',
          substituteLatex: 'Inersia titisan air mengekalkan keadaan gerakannya ke bawah',
          answer: 'Titisan air terpisah daripada permukaan payung dan jatuh ke bawah akibat inersianya.',
          trapAlert: 'Jangan tulis "inersia ialah suatu daya"! Inersia ialah sifat semula jadi jisim, BUKAN daya.',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Kejuruteraan Mengurus Inersia (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Tangki lori minyak dibahagikan kepada beberapa ruang kecil bersekat', scientificReason: 'Mengurangkan kesan inersia cecair yang besar agar minyak tidak merempuh ke hadapan/belakang dengan kuat apabila lori memecut atau membrek (mengekalkan kestabilan).' },
          { designChoice: 'Tali pinggang keledar & penyandar kepala di dalam kereta', scientificReason: 'Tali pinggang menahan penumpang daripada terhumban ke hadapan apabila berhenti mengejut; penyandar kepala menghalang leher terhentak ke belakang semasa perlanggaran dari belakang (mengelak kecederaan whiplash).' },
          { designChoice: 'Batang penyambung & pelindung struktur treler berat untuk muatan keluli', scientificReason: 'Menghalang muatan berjisim besar (inersia tinggi) daripada terus bergerak ke hadapan menghentam kabin pemandu apabila treler membrek mengejut.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Hukum Gerakan Newton Pertama.', answer: 'Sesuatu objek akan kekal pegun atau bergerak dengan halaju malar dalam garis lurus jika tiada daya paduan bertindak ke atasnya.' },
          { question: 'Apakah satu-satunya faktor yang mempengaruhi magnitud inersia?', answer: 'Jisim objek.' },
          { question: 'Mengapakah angkasawan di ISS menggunakan neraca inersia dan bukan penimbang spring untuk menyukat jisim badan?', answer: 'Dalam keadaan jatuh bebas/mikrograviti, bacaan berat pada penimbang adalah sifar, tetapi inersia (bergantung pada jisim) tetap wujud.' },
        ],
        fadedProblem: {
          prompt: 'Sebuah neraca inersia mempunyai tempoh $T_1 = 0.80\\text{ s}$ bagi jisim $40\\text{ g}$. Jika jisim digandakan kepada $160\\text{ g}$ (andaikan $T^2 \\propto m$), anggarkan tempoh baharu $T_2$.',
          step1GivenAndFormula: 'Diberi: $m_1 = 40\\text{ g}$, $T_1 = 0.80\\text{ s}$, $m_2 = 160\\text{ g}$. Hubungan: $\\frac{T_2^2}{T_1^2} = \\frac{m_2}{m_1}$.',
          studentTask: 'Kirakan $T_2$ pada Langkah 3 dan 4.',
          answerSteps: 'Langkah 3: $T_2^2 = (0.80)^2 \\times \\frac{160}{40} = 0.64 \\times 4 = 2.56$ → Langkah 4: $T_2 = 1.60\\text{ s}$.',
        },
        transferQuestion: {
          question: 'Seorang murid menarik sehelai kertas di bawah sebiji gelas berisi air dengan perlahan vs dengan sentakan pantas. Ramalkan hasil kedua-duanya dan terangkan.',
          answer: 'Tarikan perlahan: geseran statik menarik gelas bergerak bersama kertas. Sentakan pantas: masa tindakan daya sangat singkat, maka inersia gelas mengekalkannya kekal pegun di tempat asal.',
        },
      },
    },
    {
      id: '2.5',
      chapterId: 'bab-2',
      code: '2.5',
      title: 'Momentum',
      pageRef: 'm.s. 58–63',
      part1Anchor: {
        phenomenon:
          'Sebiji peluru kecil berkelajuan tinggi dan sebuah kapal tangki bergerak perlahan kedua-duanya amat sukar dihentikan — gabungan jisim dan halaju menentukan kesukaran memberhentikan objek.',
        chapterConnection:
          'Menerangkan perlanggaran kenyal, perlanggaran tak kenyal, dan letupan (roket & senapang) menggunakan satu prinsip keabadian universal.',
      },
      part2SacredDefinitions: [
        {
          title: 'Momentum',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Momentum linear ialah ' },
            { text: 'hasil darab jisim dengan halaju', keyword: true },
            { text: ' suatu objek yang bergerak (kuantiti vektor).' },
          ],
          equationLatex: 'p = mv',
        },
        {
          title: 'Prinsip Keabadian Momentum',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Jumlah momentum' , keyword: true },
            { text: ' sebelum perlanggaran (atau letupan) adalah ' },
            { text: 'sama dengan jumlah momentum selepas perlanggaran', keyword: true },
            { text: ' (atau letupan) jika ' },
            { text: 'tiada daya luar bertindak', keyword: true },
            { text: ' ke atas sistem tersebut.' },
          ],
          equationLatex: 'm_1u_1 + m_2u_2 = m_1v_1 + m_2v_2',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Prinsip Tujahan Roket & Sentakan Senapang (Letupan)',
            cause: 'Sistem pegun pada awalnya mempunyai jumlah momentum awal $= 0$.',
            mechanism: 'Apabila gas ekzos ditolak ke belakang dengan momentum besar ($m_1 v_1$), roket mesti memperoleh momentum yang sama magnitud tetapi arah bertentangan ($-m_2 v_2$) supaya jumlah momentum kekal sifar.',
            effect: 'Roket memecut ke hadapan ($m_1 v_1 + m_2 v_2 = 0$); roket berfungsi di vakum angkasa tanpa memerlukan udara luar untuk ditolak.',
          },
        ],
        tables: [
          {
            title: 'Tiga Situasi Perlanggaran & Letupan (Aktiviti 2.11)',
            headers: ['Situasi', 'Ciri Fizikal', 'Persamaan Keabadian Momentum'],
            rows: [
              ['Perlanggaran Kenyal', 'Objek berpisah selepas berlanggar; tenaga kinetik diabadikan', '$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$'],
              ['Perlanggaran Tak Kenyal', 'Objek melekat dan bergerak bersama dengan halaju sepunya $v$', '$m_1u_1 + m_2u_2 = (m_1 + m_2)v$'],
              ['Letupan', 'Kedua-dua objek pegun pada awalnya, berpisah ke arah bertentangan', '$0 = m_1v_1 + m_2v_2 \\implies m_1v_1 = -m_2v_2$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Momentum & Keabadian Momentum',
            latex: 'p = mv, \\qquad m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2',
            symbols: [
              { symbol: 'p', meaning: 'Momentum linear', unit: '$\\text{kg m s}^{-1}$ atau $\\text{N s}$' },
              { symbol: 'm', meaning: 'Jisim objek', unit: '$\\text{kg}$' },
              { symbol: 'u, v', meaning: 'Halaju awal & halaju akhir (mesti guna tanda $+$ / $-$ mengikut arah!)', unit: '$\\text{m s}^{-1}$' },
            ],
            appliesWhen: 'Sistem tertutup tanpa daya luar bersih (landasan troli terpampas geseran dalam Aktiviti 2.11).',
            failsWhen: 'Mengabaikan tanda negatif bagi halaju yang bergerak ke arah bertentangan (cth: berlanggar secara berhadapan atau lantun balik).',
          },
        ],
        diagrams: [
          {
            kind: 'momentum-collision',
            title: 'Visualisasi Perlanggaran Kenyal, Tak Kenyal & Letupan',
            whatItShows: 'Arah vektor halaju sebelum dan selepas interaksi serta pengabadian jumlah momentum bersih dalam kesemua tiga kes.',
            axisOrRule: 'Tetapkan arah ke kanan sebagai $+$ dan ke kiri sebagai $-$ sebelum menyusun persamaan.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Perlanggaran Tak Kenyal (Lori & Kereta)',
          problem: 'Sebuah kereta berjisim $1000\\text{ kg}$ bergerak ke kanan pada $20\\text{ m s}^{-1}$ melanggar belakang lori $3000\\text{ kg}$ yang bergerak ke kanan pada $8\\text{ m s}^{-1}$. Kedua-duanya melekat selepas perlanggaran. Cari halaju sepunya.',
          given: ['$m_1 = 1000\\text{ kg}, u_1 = +20\\text{ m s}^{-1}$', '$m_2 = 3000\\text{ kg}, u_2 = +8\\text{ m s}^{-1}$'],
          formulaLatex: 'm_1u_1 + m_2u_2 = (m_1 + m_2)v',
          formulaWhy: 'Kedua-dua kenderaan bergerak bersama selepas berlanggar (tak kenyal).',
          substituteLatex: '(1000)(20) + (3000)(8) = (1000 + 3000)v \\implies 44000 = 4000v',
          answer: '$v = +11\\text{ m s}^{-1}$ ke kanan',
          trapAlert: 'Dalam perlanggaran tak kenyal, jumlah momentum diabadikan tetapi jumlah tenaga kinetik TIDAK diabadikan (sebahagian bertukar kepada haba dan bunyi).',
        },
        {
          title: 'Contoh 2: Sentakan Hos Bomba / Meriam (Letupan)',
          problem: 'Sebiji peluru berjisim $20\\text{ g}$ ditembak keluar daripada selaras senapang berjisim $2.5\\text{ kg}$ pada halaju $300\\text{ m s}^{-1}$ ke kanan. Hitung halaju sentakan senapang.',
          given: ['$m_1 = 0.020\\text{ kg}$ (tukar g ke kg!), $v_1 = +300\\text{ m s}^{-1}$', '$m_2 = 2.5\\text{ kg}$', '$u_1 = u_2 = 0$'],
          formulaLatex: '0 = m_1v_1 + m_2v_2',
          formulaWhy: 'Peluru dan senapang pegun sebelum letupan.',
          substituteLatex: '0 = (0.020)(300) + (2.5)v_2 \\implies 2.5v_2 = -6.0',
          answer: '$v_2 = -2.4\\text{ m s}^{-1}$ ($2.4\\text{ m s}^{-1}$ ke kiri / arah bertentangan)',
          trapAlert: 'Tukar $20\\text{ g}$ kepada $0.02\\text{ kg}$ supaya selaras dengan jisim senapang dalam $\\text{kg}$!',
        },
      ],
      part5DecisionTable: {
        title: 'Aplikasi Prinsip Keabadian Momentum (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Enjin roket menggunakan tangki bahan api cecair & oksigen cecair sendiri', scientificReason: 'Memancutkan jisim gas ekzos pada halaju sangat tinggi ke belakang menghasilkan momentum ke belakang yang besar, memberikan momentum ke hadapan yang sama magnitud kepada roket walaupun di angkasa vakum.' },
          { designChoice: 'Landasan dicondongkan sedikit dalam Aktiviti 2.11 (landasan terpampas geseran)', scientificReason: 'Komponen berat troli mengimbangi daya geseran supaya troli bergerak dengan halaju seragam (daya luar bersih $= 0$).' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah dua unit SI yang sah bagi momentum?', answer: '$\\text{kg m s}^{-1}$ atau $\\text{N s}$.' },
          { question: 'Nyatakan syarat wajib untuk Prinsip Keabadian Momentum dipatuhi.', answer: 'Tiada daya luar bersih bertindak ke atas sistem.' },
          { question: 'Dalam perlanggaran berhadapan di mana objek A bergerak ke kanan ($+5\\text{ m s}^{-1}$) dan objek B bergerak ke kiri ($3\\text{ m s}^{-1}$), apakah nilai $u_B$?', answer: '$-3\\text{ m s}^{-1}$.' },
        ],
        fadedProblem: {
          prompt: 'Dua troli sama jisim $1.5\\text{ kg}$ bergerak bertentangan arah pada kelajuan $4\\text{ m s}^{-1}$ dan $2\\text{ m s}^{-1}$ lalu bercantum. Cari halaju sepunya selepas perlanggaran.',
          step1GivenAndFormula: 'Diberi: $m_1 = m_2 = 1.5\\text{ kg}$, $u_1 = +4\\text{ m s}^{-1}$, $u_2 = -2\\text{ m s}^{-1}$. Rumus: $m_1u_1 + m_2u_2 = (m_1+m_2)v$.',
          studentTask: 'Lengkapkan pengiraan dan nyatakan arah gerakan.',
          answerSteps: 'Langkah 3: $(1.5)(4) + (1.5)(-2) = (3.0)v \\implies 3.0 = 3.0v$ → Langkah 4: $v = +1.0\\text{ m s}^{-1}$ (ke arah troli pertama).',
        },
        transferQuestion: {
          question: 'Seorang ahli bomba perlu memegang hos air bertekanan tinggi dengan kuat sambil berdiri condong ke hadapan. Jelaskan mengapa menggunakan konsep momentum.',
          answer: 'Air berjisim besar dipancutkan ke hadapan pada halaju tinggi menghasilkan momentum ke hadapan yang besar. Mengikut keabadian momentum, daya/momentum tindak balas ke belakang yang sama magnitud terhasil ke atas hos dan ahli bomba.',
        },
      },
    },
    {
      id: '2.6',
      chapterId: 'bab-2',
      code: '2.6',
      title: 'Daya',
      pageRef: 'm.s. 64–66',
      part1Anchor: {
        phenomenon:
          'Daya bersih yang menolak objek tidak sekadar menggerakkannya — ia menentukan seberapa pantas momentumnya berubah setiap saat.',
        chapterConnection:
          'Menyatukan takrifan momentum (2.5) dengan pecutan (2.1) ke dalam Hukum Gerakan Newton Kedua ($F = ma$).',
      },
      part2SacredDefinitions: [
        {
          title: 'Hukum Gerakan Newton Kedua',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Kadar perubahan momentum', keyword: true },
            { text: ' adalah ' },
            { text: 'berkadar terus dengan daya paduan', keyword: true },
            { text: ' yang bertindak dan berlaku pada ' },
            { text: 'arah tindakan daya', keyword: true },
            { text: ' tersebut.' },
          ],
          equationLatex: 'F = ma',
        },
        {
          title: 'Takrifan Satu Newton ($1\\text{ N}$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: '$1\\text{ N}$ ialah daya yang menghasilkan pecutan ' },
            { text: '$1\\text{ m s}^{-2}$', keyword: true },
            { text: ' apabila bertindak ke atas objek berjisim ' },
            { text: '$1\\text{ kg}$', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Terbitan $F = ma$ daripada Kadar Perubahan Momentum',
            cause: 'Daya paduan $F$ bertindak selama masa $t$ ke atas jisim $m$ untuk mengubah halaju daripada $u$ kepada $v$.',
            mechanism: 'Mengikut Hukum Newton II, $F \\propto \\frac{mv - mu}{t} = m\\left(\\frac{v - u}{t}\\right) = ma$, dengan pemalar $k = 1$ mengikut takrif $1\\text{ N}$.',
            effect: 'Terbentuk rumus teras mekanik $F = ma$: bagi daya tetap, $a \\propto 1/m$; bagi jisim tetap, $a \\propto F$ (Aktiviti 2.13).',
          },
        ],
        tables: [
          {
            title: 'Kesan Daya Seimbang vs Daya Tak Seimbang',
            headers: ['Keadaan Daya', 'Daya Paduan ($F_{\\text{bersih}}$)', 'Pecutan ($a$)', 'Keadaan Gerakan'],
            rows: [
              ['Seimbang', '$0\\text{ N}$', '$0\\text{ m s}^{-2}$', 'Pegun ATAU bergerak dengan halaju malar'],
              ['Tak Seimbang', '$\\neq 0\\text{ N}$', '$a = F_{\\text{bersih}}/m$', 'Memecut, menyahpecut, atau berubah arah'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Daya Paduan dan Pecutan',
            latex: 'F_{\\text{paduan}} = ma',
            symbols: [
              { symbol: 'F_{\\text{paduan}}', meaning: 'Daya bersih (tolak daya rintangan/geseran daripada daya pacuan)', unit: '$\\text{N}$' },
              { symbol: 'm', meaning: 'Jisim objek', unit: '$\\text{kg}$' },
              { symbol: 'a', meaning: 'Pecutan pada arah daya paduan', unit: '$\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Daya paduan diketahui selepas menolaknya dengan sebarang daya geseran/rintangan.',
            failsWhen: 'Memasukkan terus daya enjin sebagai $F$ tanpa menolak daya geseran apabila geseran wujud!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Kereta Bergerak Melawan Geseran',
          problem: 'Sebuah kereta berjisim $1200\\text{ kg}$ menghasilkan daya tujahan enjin $4000\\text{ N}$ dan mengalami daya geseran $400\\text{ N}$. Hitung pecutan kereta itu.',
          given: ['$m = 1200\\text{ kg}$', '$F_{\\text{tujahan}} = 4000\\text{ N}$', '$F_{\\text{geseran}} = 400\\text{ N}$'],
          formulaLatex: 'F_{\\text{paduan}} = F_{\\text{tujahan}} - F_{\\text{geseran}} = ma',
          formulaWhy: 'Hanya daya bersih (paduan) yang menghasilkan pecutan.',
          substituteLatex: '4000 - 400 = 1200a \\implies 3600 = 1200a',
          answer: '$a = 3.0\\text{ m s}^{-2}$ ke hadapan',
          trapAlert: 'Jika kereta bergerak dengan halaju seragam, maka $a = 0$, bermakna daya tujahan enjin sama tepat dengan daya geseran ($F_{\\text{paduan}} = 0$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan Hukum Gerakan Newton Kedua.', answer: 'Kadar perubahan momentum berkadar terus dengan daya paduan dan berlaku pada arah tindakan daya itu.' },
          { question: 'Jika daya paduan pada kapal terbang ialah sifar semasa ia berada di udara, apakah jenis gerakannya?', answer: 'Ia boleh pegun atau terbang dengan halaju malar dalam garis lurus.' },
          { question: 'Dalam Aktiviti 2.13, jika dua pita gelung getah serupa ditarik serentak pada troli berjisim sama, bagaimanakah pecutan berubah?', answer: 'Pecutan bertambah menjadi dua kali ganda ($a \\propto F$).' },
        ],
        fadedProblem: {
          prompt: 'Satu blok kayu $4\\text{ kg}$ ditarik oleh daya $20\\text{ N}$ dan memecut pada $3.5\\text{ m s}^{-2}$. Cari magnitud daya geseran yang bertindak.',
          step1GivenAndFormula: 'Diberi: $m = 4\\text{ kg}$, $F_{\\text{tarik}} = 20\\text{ N}$, $a = 3.5\\text{ m s}^{-2}$. Rumus: $F_{\\text{tarik}} - f = ma$.',
          studentTask: 'Kira nilai geseran $f$.',
          answerSteps: 'Langkah 3: $20 - f = (4)(3.5) = 14$ → Langkah 4: $f = 6\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Graf $a$ melawan $F$ dua troli P dan Q menunjukkan kedua-duanya garis lurus melalui asalan, tetapi garis P lebih curam daripada Q. Troli manakah berjisim lebih besar? Terangkan.',
          answer: 'Kecerunan graf $a$-$F$ ialah $\\frac{a}{F} = \\frac{1}{m}$. Garis Q lebih landai bermakna $\\frac{1}{m}$ lebih kecil, maka Q mempunyai jisim $m$ yang lebih besar.',
        },
      },
    },
    {
      id: '2.7',
      chapterId: 'bab-2',
      code: '2.7',
      title: 'Impuls dan Daya Impuls',
      pageRef: 'm.s. 67–69',
      part1Anchor: {
        phenomenon:
          'Menjatuhkan telefon ke lantai simen memecahkannya tetapi jatuh ke atas permaidani menyelamatkannya — walaupun perubahan momentumnya sama, tempoh masa perlanggaran menentukan magnitud daya pemusnah.',
        chapterConnection:
          'Mengubah suai Hukum Newton II kepada tempoh hentaman singkat ($F = \\frac{mv-mu}{t}$) dan menjadi topik kegemaran soalan modifikasi keselamatan Kertas 2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Impuls ($J$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Impuls ialah ' },
            { text: 'perubahan momentum', keyword: true },
            { text: ' (atau hasil darab daya impuls dengan masa hentaman).' },
          ],
          equationLatex: 'J = Ft = mv - mu',
        },
        {
          title: 'Daya Impuls ($F$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Daya impuls ialah ' },
            { text: 'kadar perubahan momentum dalam perlanggaran atau hentaman dalam masa yang singkat', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'F = \\frac{mv - mu}{t}',
        },
        {
          title: 'Hukum Gerakan Newton Ketiga',
          category: 'Hukum',
          verbatimSegments: [
            { text: 'Untuk setiap ' },
            { text: 'daya tindakan', keyword: true },
            { text: ', terdapat satu ' },
            { text: 'daya tindak balas yang sama magnitud tetapi bertentangan arah', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengawal Daya Impuls Melalui Masa Hentaman ($F \\propto \\frac{1}{t}$)',
            cause: 'Bagi perubahan momentum $(mv - mu)$ yang malar, masa perlanggaran $t$ diubah melalui ciri permukaan.',
            mechanism: 'Permukaan lembut/anjal memanjangkan $t$ ($F$ menjadi kecil); permukaan keras memendekkan $t$ ($F$ menjadi sangat besar); teknik ikut lajak (follow-through) pula memanjangkan $t$ ketika $F$ malar untuk memaksimumkan impuls $Ft$.',
            effect: 'Kecederaan dielakkan apabila $t$ dipanjangkan, manakala kerja menumbuk/memecah dipermudah apabila $t$ dipendekkan.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Impuls vs Daya Impuls',
            headers: ['Ciri', 'Impuls ($J = Ft = mv - mu$)', 'Daya Impuls ($F = \\frac{mv - mu}{t}$)'],
            rows: [
              ['Maksud', 'Perubahan momentum', 'Kadar perubahan momentum'],
              ['Unit SI', '$\\text{N s}$ atau $\\text{kg m s}^{-1}$', '$\\text{N}$ atau $\\text{kg m s}^{-2}$'],
              ['Kesan luas graf $F$-$t$', 'Luas di bawah graf daya-masa', 'Puncak/magnitud pada paksi-$y$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Impuls dan Daya Impuls',
            latex: 'J = mv - mu = Ft, \\qquad F = \\frac{mv - mu}{t}',
            symbols: [
              { symbol: 'F', meaning: 'Daya impuls', unit: '$\\text{N}$' },
              { symbol: 't', meaning: 'Masa hentaman', unit: '$\\text{s}$' },
              { symbol: 'mv - mu', meaning: 'Perubahan momentum (wajib semak arah lantunan balik!)', unit: '$\\text{kg m s}^{-1}$' },
            ],
            appliesWhen: 'Daya besar bertindak dalam sela masa sangat singkat semasa hentaman, tendangan, atau pendaratan.',
            failsWhen: 'Terlupa tanda negatif apabila bola melantun balik: jika $u = +10$ dan lantun $v = -8$, perubahan momentum ialah $(-8) - (+10) = -18$, bukan $-2$!',
          },
        ],
        diagrams: [
          {
            kind: 'impulse-time-graph',
            title: 'Graf Daya-Masa ($F$-$t$): Permukaan Keras vs Permukaan Lembut',
            whatItShows: 'Dua lengkung dengan luas di bawah graf (impuls $mv - mu$) yang sama, tetapi puncak tinggi dengan tapak sempit (keras, $t$ singkat) berbanding puncak rendah dengan tapak lebar (lembut, $t$ lama).',
            axisOrRule: 'Luas di bawah graf $F$-$t$ = Impuls ($\\text{N s}$); $F_{\\text{maks}} \\propto \\frac{1}{t}$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Bola Tenis Melantun Balik dari Dinding',
          problem: 'Sebiji bola tenis berjisim $60\\text{ g}$ mengenai dinding pada halaju $25\\text{ m s}^{-1}$ dan melantun balik dalam arah bertentangan pada $15\\text{ m s}^{-1}$. Masa sentuhan ialah $0.04\\text{ s}$. Cari impuls dan daya impuls.',
          given: ['$m = 0.060\\text{ kg}$', '$u = +25\\text{ m s}^{-1}$', '$v = -15\\text{ m s}^{-1}$ (arah bertentangan!)', '$t = 0.04\\text{ s}$'],
          formulaLatex: 'J = m(v - u), \\qquad F = \\frac{J}{t}',
          formulaWhy: 'Arah halaju berubah semasa lantunan, jadi tanda vektor mesti dipelihara.',
          substituteLatex: 'J = 0.060(-15 - 25) = -2.4\\text{ N s}; \\quad F = \\frac{-2.4}{0.04}',
          answer: 'Impuls $= -2.4\\text{ N s}$; Daya impuls $= -60\\text{ N}$ ($60\\text{ N}$ bertentangan arah tuju awal)',
          trapAlert: '90% pelajar silap menulis $15 - 25 = -10$ dan bukannya $-15 - 25 = -40$. Lukis anak panah arah sebelum mengira!',
        },
      ],
      part5DecisionTable: {
        title: 'Pengubahsuaian Kejuruteraan Daya Impuls (Kertas 2 SPM)',
        rows: [
          { designChoice: 'Zon mudah remuk (crumple zone) & beg udara pada kereta', scientificReason: 'Memanjangkan masa hentaman semasa perlanggaran supaya daya impuls ke atas penumpang berkurang ($F = \\frac{mv-mu}{t}$).' },
          { designChoice: 'Tilam tebal untuk acara lompat tinggi / membengkokkan lutut semasa mendarat', scientificReason: 'Memanjangkan masa pemberhentian badan apabila menyentuh permukaan, mengurangkan daya impuls yang boleh mencederakan.' },
          { designChoice: 'Pembungkusan polistirena / pembalut gelembung untuk barangan kaca', scientificReason: 'Menyerap hentakan dengan memanjangkan masa perlanggaran apabila terjatuh supaya daya impuls kecil.' },
          { designChoice: 'Alu dan lesung batu (atau kepala tukul besi berat yang keras)', scientificReason: 'Permukaan keras memendekkan masa hentaman supaya daya impuls maksimum terhasil untuk menghancurkan bahan / memacu paku.' },
          { designChoice: 'Teknik ikut lajak (follow-through) dalam golf / tenis / bola sepak', scientificReason: 'Memanjangkan masa sentuhan antara raket/kayu dengan bola bagi menghasilkan impuls ($Ft$) dan halaju akhir yang lebih besar.' },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Apakah hubungan antara daya impuls dengan masa hentaman bagi perubahan momentum yang tetap?', answer: 'Berkadar songsang ($F \\propto 1/t$).' },
          { question: 'Apakah yang diwakili oleh luas di bawah graf Daya-Masa ($F$-$t$)?', answer: 'Impuls (perubahan momentum).' },
          { question: 'Nyatakan dua cara meminimumkan kecederaan menggunakan konsep daya impuls.', answer: 'Gunakan bahan lembut/anjal dan reka bentuk zon mudah remuk untuk memanjangkan masa hentaman.' },
        ],
        fadedProblem: {
          prompt: 'Seorang pemain menendang bola pegun $0.45\\text{ kg}$ sehingga ia bergerak pada halaju $20\\text{ m s}^{-1}$. Masa sentuhan kaki ialah $0.015\\text{ s}$. Hitung daya impuls yang bertindak.',
          step1GivenAndFormula: 'Diberi: $m = 0.45\\text{ kg}$, $u = 0$, $v = 20\\text{ m s}^{-1}$, $t = 0.015\\text{ s}$. Rumus: $F = \\frac{mv - mu}{t}$.',
          studentTask: 'Lengkapkan pengiraan untuk mencari $F$.',
          answerSteps: 'Langkah 3: $F = \\frac{0.45(20 - 0)}{0.015}$ → Langkah 4: $F = 600\\text{ N}$.',
        },
        transferQuestion: {
          question: 'Penukul kayu dan penukul besi sama jisim digunakan untuk mengetuk paku ke dalam kayu pada kelajuan hentaman sama. Penukul manakah lebih berkesan? Terangkan menggunakan konsep fizik.',
          answer: 'Penukul besi lebih keras, maka ia memendekkan masa hentaman $t$ semasa perlanggaran dengan paku. Oleh itu daya impuls $F = \\frac{mv-mu}{t}$ yang terhasil lebih besar.',
        },
      },
    },
    {
      id: '2.8',
      chapterId: 'bab-2',
      code: '2.8',
      title: 'Berat',
      pageRef: 'm.s. 70–71',
      part1Anchor: {
        phenomenon:
          'Jisim anda kekal $60\\text{ kg}$ di Bumi mahupun di Bulan, tetapi berat anda di Bulan jatuh menjadi satu perenam — kerana berat bergantung pada kekuatan medan graviti tempatan.',
        chapterConnection:
          'Menghubungkan konsep daya ($F = ma$) dengan tarikan graviti ($W = mg$) sebagai jambatan terus ke Bab 3: Kegravitian.',
      },
      part2SacredDefinitions: [
        {
          title: 'Berat ($W$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Berat ialah ' },
            { text: 'daya graviti yang bertindak ke atas suatu objek', keyword: true },
            { text: ' (kuantiti vektor ke arah pusat Bumi).' },
          ],
          equationLatex: 'W = mg',
        },
        {
          title: 'Kekuatan Medan Graviti ($g$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kekuatan medan graviti ialah ' },
            { text: 'daya yang bertindak per unit jisim', keyword: true },
            { text: ' disebabkan oleh ' },
            { text: 'tarikan graviti', keyword: true },
            { text: ' ($g = 9.81\\text{ N kg}^{-1}$ di permukaan Bumi).' },
          ],
          equationLatex: 'g = \\frac{W}{m}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Berat Berubah Menurut Lokasi Sedangkan Jisim Tetap',
            cause: 'Objek berpindah dari Bumi ($g = 9.81\\text{ N kg}^{-1}$) ke Bulan ($g \\approx 1.64\\text{ N kg}^{-1}$, iaitu $\\frac{1}{6} g_{\\text{Bumi}}$).',
            mechanism: 'Bilangan zarah jirim ($m$) tidak berubah, tetapi tarikan graviti pada setiap kilogram jisim berkurang enam kali ganda.',
            effect: 'Jisim kekal malar di seluruh alam semesta, manakala berat $W = mg$ berubah mengikut nilai $g$ tempatan.',
          },
        ],
        tables: [
          {
            title: 'Perbezaan Jisim vs Berat',
            headers: ['Ciri', 'Jisim ($m$)', 'Berat ($W$)'],
            rows: [
              ['Takrifan', 'Kuantiti jirim dalam objek', 'Daya graviti yang bertindak ke atas objek'],
              ['Kuantiti fizik', 'Kuantiti asas & skalar', 'Kuantiti terbitan & vektor'],
              ['Unit SI', 'kilogram ($\\text{kg}$)', 'newton ($\\text{N}$)'],
              ['Kemalaran', 'Malar di mana-mana lokasi', 'Berubah mengikut nilai $g$ tempatan'],
              ['Alat penyukat', 'Neraca tuas / neraca alur tiga', 'Neraca spring / penimbang Newton'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Berat dan Kekuatan Medan Graviti',
            latex: 'W = mg, \\qquad g = \\frac{W}{m}',
            symbols: [
              { symbol: 'W', meaning: 'Berat objek', unit: '$\\text{N}$' },
              { symbol: 'm', meaning: 'Jisim objek', unit: '$\\text{kg}$' },
              { symbol: 'g', meaning: 'Kekuatan medan graviti ($9.81\\text{ N kg}^{-1}$ di Bumi; $1.64\\text{ N kg}^{-1}$ di Bulan)', unit: '$\\text{N kg}^{-1}$ atau $\\text{m s}^{-2}$' },
            ],
            appliesWhen: 'Menukar antara jisim dengan berat di permukaan mana-mana planet atau satelit.',
            failsWhen: 'Menyamakan "berat saya 60 kg" dalam pengiraan fizik — $60\\text{ kg}$ ialah jisim; berat ialah $60 \\times 9.81 = 588.6\\text{ N}$!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh: Berat Peralatan Angkasawan di Bumi dan di Bulan',
          problem: 'Sebuah pek peralatan mempunyai jisim $12\\text{ kg}$. Hitung beratnya di Bumi ($g = 9.81\\text{ N kg}^{-1}$) dan di Bulan ($g = \\frac{1}{6} g_{\\text{Bumi}}$).',
          given: ['$m = 12\\text{ kg}$', '$g_{\\text{Bumi}} = 9.81\\text{ N kg}^{-1}$', '$g_{\\text{Bulan}} = \\frac{9.81}{6} = 1.635\\text{ N kg}^{-1}$'],
          formulaLatex: 'W = mg',
          formulaWhy: 'Berat berkadar terus dengan kekuatan medan graviti tempatan.',
          substituteLatex: 'W_{\\text{Bumi}} = 12(9.81) = 117.72\\text{ N}; \\quad W_{\\text{Bulan}} = 12(1.635)',
          answer: 'Di Bumi: $117.7\\text{ N}$; Di Bulan: $19.6\\text{ N}$ (jisim kekal $12\\text{ kg}$)',
          trapAlert: 'Unit kekuatan medan graviti ialah $\\text{N kg}^{-1}$ (setara secara dimensi dengan pecutan graviti $\\text{m s}^{-2}$).',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan takrifan berat dan unit SI-nya.', answer: 'Berat ialah daya graviti yang bertindak ke atas suatu objek; unit SI ialah newton ($\\text{N}$).' },
          { question: 'Mengapakah berat ialah kuantiti vektor?', answer: 'Kerana ia mempunyai magnitud dan arah (sentiasa menuju ke pusat Bumi).' },
          { question: 'Berapakah berat sebiji epal $100\\text{ g}$ di Bumi?', answer: '$0.1\\text{ kg} \\times 9.81 = 0.981\\text{ N}$.' },
        ],
        fadedProblem: {
          prompt: 'Berat seorang angkasawan lengkap sut angkasa di sebuah planet lain ialah $444\\text{ N}$. Jika jisim totalnya ialah $120\\text{ kg}$, hitung kekuatan medan graviti planet itu.',
          step1GivenAndFormula: 'Diberi: $W = 444\\text{ N}$, $m = 120\\text{ kg}$. Rumus: $g = \\frac{W}{m}$.',
          studentTask: 'Kira nilai $g$ dengan unit yang tepat.',
          answerSteps: 'Langkah 3: $g = \\frac{444}{120}$ → Langkah 4: $g = 3.70\\text{ N kg}^{-1}$ (planet Marikh!).',
        },
        transferQuestion: {
          question: 'Adakah lebih mudah untuk menolak kereta sorong berisi batu $50\\text{ kg}$ secara mengufuk di Bulan berbanding di Bumi? Beri alasan berbeza antara "mengangkat ke atas" dengan "menolak secara mengufuk".',
          answer: 'Mengangkat ke atas lebih mudah di Bulan kerana berat $W=mg$ ialah $1/6$ lebih kecil. Namun memulakan gerakan mengufuk menghadapi rintangan inersia yang sama besar kerana jisim ($50\\text{ kg}$) tidak berubah (kecuali geseran pada roda lebih kecil).',
        },
      },
    },
  ],
};
