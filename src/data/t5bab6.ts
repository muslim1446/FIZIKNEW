import type { ChapterContent } from '../types/textbook';

export const t5bab6: ChapterContent = {
  id: 't5-bab-6',
  formLevel: 5,
  number: 6,
  title: 'Fizik Nuklear',
  pageRange: 'm.s. 198–221',
  overview:
    'Memahami reputan radioaktif alfa, beta dan gama secara spontan serta pengiraan separuh hayat dan pentarikhan batu-batuan (6.1), dan pembebasan tenaga nuklear daripada cacat jisim melalui pembelahan dan pelakuran nukleus serta kawalan reaktor nuklear (6.2).',
  subtopics: [
    {
      id: 't5-6.1',
      chapterId: 't5-bab-6',
      code: '6.1',
      title: 'Reputan Radioaktif',
      pageRef: 'm.s. 200–207',
      part1Anchor: {
        phenomenon:
          'Nukleus berat yang tidak stabil memecahkan dirinya secara spontan memancarkan zarah bertenaga tinggi atau sinar gama untuk mencapai kestabilan — proses semula jadi yang membolehkan ahli geologi menentukan usia Bumi melalui nisbah Uranium-238 kepada Plumbum-206.',
        chapterConnection:
          'Menetapkan persamaan pengimbangan nombor nukleon-proton dan konsep separuh hayat ($T_{1/2}$) sebelum mengira tenaga besar yang dibebaskan daripada kehilangan jisim dalam reaksi nuklear (6.2).',
      },
      part2SacredDefinitions: [
        {
          title: 'Reputan Radioaktif',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Reputan radioaktif ialah proses ' },
            { text: 'nukleus yang tidak stabil menjadi nukleus yang lebih stabil', keyword: true },
            { text: ' dengan ' },
            { text: 'memancarkan sinaran radioaktif', keyword: true },
            { text: ' secara ' },
            { text: 'rawak dan spontan', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Separuh Hayat ($T_{1/2}$)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Separuh hayat, $T_{1/2}$ ialah ' },
            { text: 'masa yang diambil', keyword: true },
            { text: ' untuk ' },
            { text: 'separuh daripada bilangan asal nukleus radioaktif', keyword: true },
            { text: ' bagi suatu sampel radioaktif ' },
            { text: 'mereput', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'N = \\left(\\frac{1}{2}\\right)^n N_0, \\qquad n = \\frac{t}{T_{1/2}}',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Mikroskopik Reputan Alfa, Beta, dan Gama',
            cause: 'Nisbah neutron-kepada-proton dalam nukleus induk tidak stabil atau nukleus berada dalam keadaan teruja.',
            mechanism: 'Dalam reputan $\\alpha$, nukleus melepaskan nukleus helium ($^4_2\\text{He}$: $-4$ nukleon, $-2$ proton). Dalam reputan $\\beta$, sebiji neutron mereput menjadi proton dan elektron ($^1_0\\text{n} \\to ^1_1\\text{p} + ^0_{-1}\\text{e}$: nukleon kekal, proton $+1$). Dalam reputan $\\gamma$, nukleus membebaskan lebihan tenaga elektromagnet tanpa kehilangan zarah.',
            effect: 'Unsur baharu yang lebih stabil terbentuk (bagi $\\alpha$ dan $\\beta$), manakala $A$ dan $Z$ kekal tidak berubah selepas pancaran $\\gamma$.',
          },
          {
            title: 'Mengapa Ahli Geologi Menggunakan Nisbah $\\text{Pb-206} : \\text{U-238}$ Menentukan Usia Batu',
            cause: 'Uranium-238 terperangkap semasa pembentukan batu granit dan mereput sangat perlahan ($T_{1/2} \\approx 4.5 \\times 10^9$ tahun) berakhir sebagai Plumbum-206 yang stabil.',
            mechanism: 'Setiap atom Uranium-238 yang mereput berubah menjadi satu atom Plumbum-206; maka bilangan atom asal ialah $N_0 = N_{\\text{U}} + N_{\\text{Pb}}$.',
            effect: 'Semakin tinggi nisbah Plumbum-206 kepada Uranium-238 dalam batu, semakin banyak separuh hayat telah berlalu dan semakin tua usia batu tersebut.',
          },
        ],
        tables: [
          {
            title: 'Perbandingan Persamaan Am & Kesan Terhadap $A$ dan $Z$',
            headers: ['Jenis Reputan', 'Zarah / Sinaran Dipancar', 'Persamaan Am & Contoh Buku Teks', 'Perubahan $(A, Z)$'],
            rows: [
              ['Reputan Alfa ($\\alpha$)', 'Nukleus Helium ($^4_2\\text{He}$, cas $+2e$)', '$^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2\\text{He}$ (Cth: $^{210}_{84}\\text{Po} \\to ^{206}_{82}\\text{Pb} + ^4_2\\text{He}$)', '$A - 4$, $Z - 2$'],
              ['Reputan Beta ($\\beta$)', 'Elektron pantas ($^0_{-1}\\text{e}$, cas $-1e$)', '$^A_Z X \\to ^A_{Z+1}Y + ^0_{-1}\\text{e}$ (Cth: $^{24}_{11}\\text{Na} \\to ^{24}_{12}\\text{Mg} + ^0_{-1}\\text{e}$)', '$A$ kekal, $Z + 1$'],
              ['Reputan Gama ($\\gamma$)', 'Gelombang EM berfrekuensi tinggi (tiada cas/jisim)', '$^A_Z X \\to ^A_Z X + \\gamma$ (Cth: $^{60}_{27}\\text{Co} \\to ^{60}_{27}\\text{Co} + \\gamma$)', '$A$ kekal, $Z$ kekal'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Rumus Pengiraan Separuh Hayat & Keaktifan Reputan',
            latex: 'N = \\left(\\frac{1}{2}\\right)^n N_0, \\qquad n = \\frac{t}{T_{1/2}}',
            symbols: [
              { symbol: 'N', meaning: 'Bilangan nukleus / jisim / keaktifan yang **belum mereput** selepas masa $t$', unit: 'bil / $\\text{g}$ / $\\text{s}^{-1}$' },
              { symbol: 'N_0', meaning: 'Bilangan nukleus / jisim / keaktifan asal pada $t = 0$', unit: 'bil / $\\text{g}$ / $\\text{s}^{-1}$' },
              { symbol: 'n', meaning: 'Bilangan separuh hayat yang berlalu', unit: 'tiada unit' },
              { symbol: 'T_{1/2}', meaning: 'Separuh hayat sumber radioaktif', unit: '$\\text{s}$ / minit / tahun' },
            ],
            appliesWhen: 'Menentukan baki bahan radioaktif **belum mereput** selepas $n$ selang separuh hayat ($N_0 \\to \\frac{1}{2}N_0 \\to \\frac{1}{4}N_0 \\to \\frac{1}{8}N_0$).',
            failsWhen: 'Perangkap kerap: jika alat pengesan mengukur termasuk **sinaran latar belakang** (cth: latar = $20\\text{ s}^{-1}$), wajib **TOLAK sinaran latar dahulu** daripada $N_0$ sebelum membahagi dua, dan tambah semula sinaran latar pada bacaan akhir! Juga bezakan "baki belum mereput" ($N$) dengan "yang telah mereput" ($N_0 - N$).',
          },
        ],
        diagrams: [
          {
            kind: 'f5-nuclear-decay',
            title: 'Simulasi Interaktif Lengkung Reputan Eksponen Separuh Hayat',
            whatItShows: 'Graf bilangan/keaktifan nukleus belum mereput $N$ melawan masa $t$ atau bilangan separuh hayat $n$: setiap selang $T_{1/2}$, nilai $N$ jatuh tepat kepada separuh.',
            axisOrRule: 'Ubah penggelongsor $n$ di bawah graf untuk melihat baki belum mereput $\\left(\\frac{1}{2}\\right)^n N_0$ dan peratusan nukleus anak yang terbentuk secara serentak.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Pengiraan Keaktifan Selepas 30 Minit',
          problem: 'Satu sampel radioaktif mempunyai keaktifan awal $480\\text{ s}^{-1}$ dan separuh hayat $T_{1/2} = 6\\text{ minit}$. Berapakah keaktifan sampel itu selepas $30\\text{ minit}$?',
          given: ['$A_0 = 480\\text{ s}^{-1}$', '$T_{1/2} = 6\\text{ minit}$', '$t = 30\\text{ minit}$'],
          formulaLatex: 'n = \\frac{t}{T_{1/2}}, \\qquad A = \\left(\\frac{1}{2}\\right)^n A_0',
          formulaWhy: 'Cari bilangan separuh hayat $n$ terlebih dahulu, kemudian bahagi dua keaktifan awal sebanyak $n$ kali.',
          substituteLatex: 'n = \\frac{30}{6} = 5; \\qquad A = \\left(\\frac{1}{2}\\right)^5 \\times 480 = \\frac{480}{32}',
          answer: '$15\\text{ s}^{-1}$.',
          trapAlert: 'Sentiasa semak sama ada unit masa $t$ dan $T_{1/2}$ sudah sama sebelum membahagi.',
        },
        {
          title: 'Contoh 2: Usia Batu Granit Berdasarkan Nisbah Argon-40 : Kalium-40',
          problem: 'Analisis satu sampel batu mendapati nisbah nukleus anak Argon-40 kepada nukleus induk Kalium-40 ialah $3 : 1$. Diberi separuh hayat Kalium-40 ialah $1250\\text{ juta tahun}$. Anggarkan usia batu itu.',
          given: ['$\\text{Argon-40 (anak)} : \\text{Kalium-40 (induk)} = 3 : 1$', '$T_{1/2} = 1250\\text{ juta tahun}$'],
          formulaLatex: 'N_0 = N_{\\text{anak}} + N_{\\text{induk}}, \\qquad \\frac{N_{\\text{induk}}}{N_0} = \\left(\\frac{1}{2}\\right)^n',
          formulaWhy: 'Semua nukleus Argon-40 berasal daripada reputan Kalium-40, jadi jumlah asal $N_0 = 3 + 1 = 4$ bahagian.',
          substituteLatex: '\\frac{N_{\\text{induk}}}{N_0} = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2 \\implies n = 2; \\qquad t = 2 \\times 1250\\text{ juta tahun}',
          answer: 'Usia batu $= 2500\\text{ juta tahun}$ ($2.5 \\times 10^9\\text{ tahun}$).',
          trapAlert: 'Perangkap terbesar: ramai pelajar menyangka nisbah $3:1$ bermakna $1/3$ atau $n = 3$! Ingat: baki induk ialah $1$ bahagian daripada jumlah asal $3 + 1 = 4$ bahagian ($1/4 = 2$ separuh hayat)!',
        },
      ],
      part5DecisionTable: {
        title: 'Keselamatan Penyimpanan Sumber & Pemilihan Radioisotop (Kertas 2)',
        rows: [
          {
            designChoice: 'Menyimpan sumber radioaktif di dalam bekas plumbum tebal tertutup',
            scientificReason: 'Plumbum berketumpatan sangat tinggi mampu menyerap dan menyekat sinaran mengion berkuasa penembusan tinggi termasuk sinar gama daripada terlepas keluar.',
          },
          {
            designChoice: 'Menggunakan radioisotop berseparuh hayat pendek (cth: Teknetium-99m, 6 jam) sebagai penyurih perubatan',
            scientificReason: 'Keaktifannya mereput pantas menjadi selamat selepas pengimejan perubatan selesai, meminimumkan pendedahan radiasi jangka panjang pada tisu pesakit.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Semasa reputan beta ($^0_{-1}\\text{e}$), apakah berlaku pada nombor nukleon $A$ dan nombor proton $Z$?', answer: 'Nombor nukleon $A$ kekal tidak berubah, nombor proton $Z$ bertambah sebanyak $1$ ($Z + 1$).' },
          { question: 'Nyatakan maksud separuh hayat secara verbatim.', answer: 'Masa yang diambil untuk separuh daripada bilangan asal nukleus radioaktif bagi suatu sampel radioaktif mereput.' },
          { question: 'Satu siri reputan mengubah $^{238}_{92}\\text{U}$ kepada $^{226}_{88}\\text{Ra}$. Berapakah bilangan zarah $\\alpha$ dan $\\beta$ yang dipancarkan?', answer: '$\\Delta A = 12 \\implies 3$ zarah $\\alpha$ ($Z$ turun $6$ ke $86$); untuk naik ke $88$ memerlukan $2$ zarah $\\beta$.' },
        ],
        fadedProblem: {
          prompt: 'Satu sampel radioaktif mencatatkan kadar bilangan $260\\text{ s}^{-1}$ pada $t = 0$. Kadar bilangan latar belakang di makmal ialah $20\\text{ s}^{-1}$. Selepas $24\\text{ jam}$, kadar bilangan bacaan turun menjadi $50\\text{ s}^{-1}$.',
          step1GivenAndFormula: 'Diberi: Bacaan awal bersih $A_0 = 260 - 20 = 240\\text{ s}^{-1}$; Bacaan akhir bersih $A = 50 - 20 = 30\\text{ s}^{-1}$. Rumus: $A = (1/2)^n A_0$.',
          studentTask: 'Cari bilangan separuh hayat $n$ dan hitung separuh hayat $T_{1/2}$ sampel itu.',
          answerSteps: '$\\frac{30}{240} = \\frac{1}{8} = (\\frac{1}{2})^3 \\implies n = 3$; maka $T_{1/2} = \\frac{24}{3} = 8.0\\text{ jam}$.',
        },
        transferQuestion: {
          question: 'Terangkan mengapa proses reputan radioaktif dikatakan bersifat rawak dan spontan — adakah pemanasan atau penambahan tekanan tinggi boleh mempercepatkan separuh hayatnya?',
          answer: 'Tidak boleh. Reputan berlaku di dalam nukleus atom secara rawak (tidak dapat diramal nukleus mana yang akan mereput dahulu) dan spontan (tidak dipengaruhi oleh faktor fizikal atau kimia luaran seperti suhu, tekanan, atau medan magnet/elektrik).',
        },
      },
    },
    {
      id: 't5-6.2',
      chapterId: 't5-bab-6',
      code: '6.2',
      title: 'Tenaga Nuklear',
      pageRef: 'm.s. 208–219',
      part1Anchor: {
        phenomenon:
          'Satu kilogram Uranium-235 membebaskan tenaga setara dengan pembakaran jutaan kilogram arang batu, manakala Matahari menyala selama berbilion tahun — semuanya kerana sedikit jisim lenyap dan menjelma semula sebagai tenaga tulen mengikut persamaan ikonik Einstein $E = mc^2$.',
        chapterConnection:
          'Menjelaskan sumber tenaga daripada tindak balas pembelahan dan pelakuran nukleus hasil perubahan kestabilan nukleus (6.1) serta bagaimana reaktor nuklear mengawal tindak balas berantai tersebut.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pembelahan Nukleus & Pelakuran Nukleus',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pembelahan nukleus', keyword: true },
            { text: ' ialah tindak balas nuklear apabila suatu ' },
            { text: 'nukleus yang berat membelah menjadi dua atau lebih nukleus yang lebih ringan', keyword: true },
            { text: ' apabila dibedil oleh neutron dengan membebaskan tenaga yang banyak. ' },
            { text: 'Pelakuran nukleus', keyword: true },
            { text: ' ialah tindak balas nuklear apabila ' },
            { text: 'dua nukleus yang ringan bercantum untuk membentuk satu nukleus yang lebih berat', keyword: true },
            { text: ' dengan membebaskan tenaga yang sangat banyak pada suhu dan tekanan sangat tinggi.' },
          ],
        },
        {
          title: 'Cacat Jisim & Persamaan Einstein',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Kehilangan jisim selepas tindak balas nuklear dikenali sebagai ' },
            { text: 'cacat jisim ($\\Delta m$)', keyword: true },
            { text: ', yang ditukarkan kepada ' },
            { text: 'tenaga nuklear', keyword: true },
            { text: ' mengikut persamaan kesetaraan jisim-tenaga Einstein.' },
          ],
          equationLatex: 'E = \\Delta m c^2',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Tindak Balas Berantai & Mekanisme Penjanaan Elektrik di Reaktor Nuklear',
            cause: 'Satu neutron perlahan membedil nukleus Uranium-235.',
            mechanism: 'Uranium terbelah menjadi dua nukleus lebih ringan, membebaskan haba besar dan $3$ neutron baharu yang kemudiannya membedil nukleus U-235 lain secara berantai. Di dalam reaktor, **moderator** (grafit/air) memperlahankan neutron supaya mudah ditangkap, manakala **rod pengawal** (boron/kadmium) menyerap lebihan neutron untuk mengawal kadar tindak balas.',
            effect: 'Tenaga haba daripada pembelahan memanaskan air menghasilkan stim bertekanan tinggi untuk memutarkan turbin dan penjana elektrik secara terkawal.',
          },
        ],
        tables: [
          {
            title: 'Fungsi Setiap Komponen Utama Reaktor Nuklear (Rajah 6.13)',
            headers: ['Komponen Reaktor', 'Bahan Digunakan', 'Fungsi Fizikal (Kata Kunci SPM)'],
            rows: [
              ['Bahan api nuklear', 'Rod Uranium-235', 'Mengalami tindak balas pembelahan nukleus berantai membebaskan tenaga haba'],
              ['Moderator', 'Grafit atau air berat / air biasa', 'Memperlahankan neutron pantas menjadi neutron terma perlahan supaya mudah membelah U-235'],
              ['Rod pengawal', 'Boron atau Kadmium', 'Menyerap neutron berlebihan untuk mengawal kadar tindak balas berantai (diturunkan jika kuasa terlalu tinggi)'],
              ['Agen penyejuk', 'Air / Gas CO$_2$ / Natrium cecair', 'Menyerap tenaga haba daripada teras reaktor untuk mendidihkan air menjadi stim pemutar turbin'],
              ['Perisai sinaran', 'Dinding konkrit tebal & keluli', 'Menghalang kebocoran sinaran radioaktif berbahaya ke persekitaran'],
            ],
          },
          {
            title: 'Pembelahan Nukleus vs Pelakuran Nukleus',
            headers: ['Aspek', 'Pembelahan Nukleus', 'Pelakuran Nukleus'],
            rows: [
              ['Proses', '1 nukleus berat $\\to$ 2 nukleus ringan + neutron + tenaga', '2 nukleus ringan (Deuterium + Tritium) $\\to$ 1 nukleus lebih berat (Helium) + neutron + tenaga'],
              ['Syarat berlaku', 'Neutron perlahan pada suhu bilik/reaktor', 'Suhu & tekanan lampau tinggi ($> 10^7\\text{ K}$, spt di teras Matahari) untuk mengatasi tolakan elektrostatik proton'],
              ['Sisa radioaktif', 'Banyak sisa radioaktif berseparuh hayat panjang', 'Hampir tiada sisa radioaktif jangka panjang (bersih)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tenaga Nuklear daripada Cacat Jisim',
            latex: 'E = \\Delta m c^2, \\qquad 1\\text{ u.j.a.} = 1.66 \\times 10^{-27}\\text{ kg}, \\qquad c = 3.0 \\times 10^8\\text{ m s}^{-1}',
            symbols: [
              { symbol: 'E', meaning: 'Tenaga nuklear yang dibebaskan', unit: '$\\text{J}$ ($1\\text{ MeV} = 1.6 \\times 10^{-13}\\text{ J}$)' },
              { symbol: '\\Delta m', meaning: 'Cacat jisim $= m_{\\text{bahan tindak balas}} - m_{\\text{hasil}}$', unit: '$\\text{kg}$' },
              { symbol: 'c', meaning: 'Laju cahaya dalam vakum ($3.00 \\times 10^8$)', unit: '$\\text{m s}^{-1}$' },
            ],
            appliesWhen: 'Sebarang tindak balas nuklear atau reputan radioaktif yang mengalami perubahan jisim total.',
            failsWhen: 'Perangkap paling kerap: memasukkan $\\Delta m$ dalam unit **u.j.a.** terus ke dalam $E = mc^2$ tanpa menukar kepada **kilogram ($\\text{kg}$)** ($\\times 1.66 \\times 10^{-27}$), atau terlupa mengkuasaduakan $c$!',
          },
        ],
        diagrams: [
          {
            kind: 'f5-nuclear-decay',
            title: 'Kestabilan Nukleus, Tindak Balas Nuklear & Cacat Jisim',
            whatItShows: 'Menunjukkan penurunan kuantiti nukleus induk secara berperingkat serta konsep kehilangan jisim $\\Delta m$ yang bertukar menjadi tenaga haba & sinaran mengikut $E = \\Delta m c^2$.',
            axisOrRule: 'Cacat jisim $\\Delta m = \\text{Jumlah jisim SEBELUM} - \\text{Jumlah jisim SELEPAS}$ mestilah positif bagi tindak balas yang membebaskan tenaga.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Contoh 1: Tenaga Pembelahan/Reputan Radium-226',
          problem: 'Dalam satu tindak balas nuklear, cacat jisim yang terhasil ialah $\\Delta m = 0.519\\text{ u.j.a.}$ Hitung tenaga nuklear yang dibebaskan dalam Joule. [$1\\text{ u.j.a.} = 1.66 \\times 10^{-27}\\text{ kg}$, $c = 3.0 \\times 10^8\\text{ m s}^{-1}$]',
          given: ['$\\Delta m = 0.519\\text{ u.j.a.} = 0.519 \\times 1.66 \\times 10^{-27}\\text{ kg} = 8.6154 \\times 10^{-28}\\text{ kg}$', '$c = 3.0 \\times 10^8\\text{ m s}^{-1}$'],
          formulaLatex: 'E = \\Delta m c^2',
          formulaWhy: 'Menukarkan kehilangan jisim dalam kilogram kepada tenaga melalui $c^2$.',
          substituteLatex: 'E = (8.6154 \\times 10^{-28}) \\times (3.0 \\times 10^8)^2',
          answer: '$E = 7.75 \\times 10^{-11}\\text{ J}$.',
          trapAlert: 'Sentiasa tuliskan semua angka bererti perantaraan (min 4 angka bererti) semasa menukar u.j.a. ke kg sebelum pembundaran akhir.',
        },
        {
          title: 'Contoh 2: Pelakuran Deuterium & Tritium',
          problem: 'Deuterium ($^2_1\\text{H}$) dan Tritium ($^3_1\\text{H}$) melakur menghasilkan Helium ($^4_2\\text{He}$) dan satu neutron ($^1_0\\text{n}$) dengan cacat jisim $\\Delta m = 0.018\\text{ u.j.a.}$ Hitung tenaga yang dibebaskan dalam Joule dan $\\text{MeV}$.',
          given: ['$\\Delta m = 0.018\\text{ u.j.a.} = 0.018 \\times 1.66 \\times 10^{-27}\\text{ kg}$', '$1\\text{ MeV} = 1.6 \\times 10^{-13}\\text{ J}$'],
          formulaLatex: 'E = \\Delta m c^2',
          formulaWhy: 'Cacat jisim pelakuran ditukar terus kepada tenaga kinetik hasil tindak balas.',
          substituteLatex: 'E = (2.988 \\times 10^{-29}) \\times (3.0 \\times 10^8)^2 = 2.689 \\times 10^{-12}\\text{ J}; \\quad E_{\\text{MeV}} = \\frac{2.689 \\times 10^{-12}}{1.6 \\times 10^{-13}}',
          answer: '$E = 2.69 \\times 10^{-12}\\text{ J}$ ($16.8\\text{ MeV}$).',
          trapAlert: 'Pelakuran membebaskan tenaga per unit jisim lebih besar daripada pembelahan, tetapi memerlukan suhu jutaan Kelvin untuk mengatasi daya tolakan antara dua nukleus positif.',
        },
      ],
      part5DecisionTable: {
        title: 'Keselamatan Reaktor Nuklear & Pengurangan Risiko (Kertas 2 SPM)',
        rows: [
          {
            designChoice: 'Menurunkan rod pengawal boron/kadmium lebih dalam ke dalam teras reaktor',
            scientificReason: 'Boron dan kadmium menyerap lebih banyak neutron untuk memperlahankan atau menghentikan tindak balas pembelahan berantai jika suhu meningkat terlalu tinggi.',
          },
          {
            designChoice: 'Menggunakan dinding perisai konkrit tebal setebal beberapa meter mengelilingi teras',
            scientificReason: 'Menghalang sinaran gamma dan neutron berkuasa penembusan tinggi daripada bocor keluar mencemari pekerja dan alam sekitar.',
          },
          {
            designChoice: 'Menggunakan blok grafit sebagai moderator dalam teras',
            scientificReason: 'Memperlahankan neutron pantas yang dibebaskan supaya neutron perlahan mempunyai kebarangkalian lebih tinggi untuk membelah nukleus U-235.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          { question: 'Nyatakan fungsi rod pengawal boron dan moderator grafit dalam reaktor nuklear.', answer: 'Rod pengawal menyerap lebihan neutron (mengawal kadar tindak balas); moderator memperlahankan neutron pantas.' },
          { question: 'Mengapakah pelakuran nukleus sukar dicapai di Bumi berbanding di teras Matahari?', answer: 'Kerana ia memerlukan suhu dan tekanan yang amat tinggi untuk mengatasi daya tolakan elektrostatik antara dua nukleus bercas positif.' },
          { question: 'Jika jisim bahan sebelum tindak balas lebih besar daripada jisim hasil selepas tindak balas, apakah berlaku pada selisih jisim itu?', answer: 'Ia menjadi cacat jisim $\\Delta m$ yang ditukarkan menjadi tenaga nuklear mengikut $E = \\Delta m c^2$.' },
        ],
        fadedProblem: {
          prompt: 'Pembelahan satu nukleus Uranium-235 menghasilkan cacat jisim sebanyak $0.215\\text{ u.j.a.}$ Diberi $1\\text{ u.j.a.} = 1.66 \\times 10^{-27}\\text{ kg}$ dan $c = 3.0 \\times 10^8\\text{ m s}^{-1}$.',
          step1GivenAndFormula: 'Diberi: $\\Delta m = 0.215\\text{ u.j.a.}$. Rumus: $\\Delta m_{\\text{kg}} = 0.215 \\times 1.66 \\times 10^{-27}$, $E = \\Delta m c^2$.',
          studentTask: 'Hitung tenaga yang dibebaskan bagi pembelahan satu nukleus tersebut dalam Joule.',
          answerSteps: '$\\Delta m = 3.569 \\times 10^{-28}\\text{ kg}$; $E = 3.569 \\times 10^{-28} \\times (3.0 \\times 10^8)^2 = 3.21 \\times 10^{-11}\\text{ J}$.',
        },
        transferQuestion: {
          question: 'Terangkan peranan agen penyejuk dan penukar haba dalam reaktor pembelahan nuklear supaya air yang menggerakkan turbin tidak mencemarkan alam sekitar dengan bahan radioaktif.',
          answer: 'Agen penyejuk primer mengalir dalam gelung tertutup menyerap haba dari teras reaktor dan memindahkannya melalui penukar haba kepada sistem air sekunder yang terasing. Stim daripada gelung sekunder menggerakkan turbin tanpa bersentuhan langsung dengan bahan api radioaktif teras.',
        },
      },
    },
  ],
};
