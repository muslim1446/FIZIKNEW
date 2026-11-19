import type { ChapterContent } from '../types/textbook';

export const k5bab1: ChapterContent = {
  id: 'k5-bab-1',
  subject: 'kimia',
  formLevel: 5,
  number: 1,
  title: 'Keseimbangan Redoks',
  pageRange: 'm.s. 2–60',
  overview:
    'Menguasai 4 takrifan pengoksidaan dan penurunan, pemindahan elektron pada suatu jarak (Tiub-U), siri keupayaan elektrod piawai ($E^0$), sel kimia (Sel Daniell), sel elektrolisis (leburan & larutan akueus), pengekstrakan logam ($Al$ & $Fe$), serta mekanisme pengaratan dan perlindungannya.',
  subtopics: [
    {
      id: 'k5-1.1',
      chapterId: 'k5-bab-1',
      code: '1.1',
      title: 'Pengoksidaan dan Penurunan',
      pageRef: 'm.s. 4–21',
      part1Anchor: {
        phenomenon:
          'Setiap kali buah epal bertukar perang, bateri telefon menjana arus, atau larutan kalium manganat(VII) ungu melunturkan warnanya dalam Tiub-U, dua proses berlawanan sentiasa berlaku serentak: satu zarah kehilangan elektron manakala pasangannya menerimanya.',
        chapterConnection:
          'Menetapkan keempat-empat takrifan redoks, pengiraan nombor pengoksidaan & penamaan IUPAC, pertukaran $Fe^{2+} \\leftrightarrow Fe^{3+}$, serta tindak balas penyesaran logam dan halogen.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tindak Balas Redoks (4 Perspektif SPM)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Tindak balas redoks ialah tindak balas kimia di mana ' },
            { text: 'pengoksidaan dan penurunan berlaku secara serentak', keyword: true },
            { text: ': pengoksidaan melibatkan ' },
            { text: 'penerimaan oksigen, kehilangan hidrogen, kehilangan elektron atau peningkatan nombor pengoksidaan', keyword: true },
            { text: '; penurunan melibatkan ' },
            { text: 'kehilangan oksigen, penerimaan hidrogen, penerimaan elektron atau pengurangan nombor pengoksidaan', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Agen Pengoksidaan vs Agen Penurunan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Agen pengoksidaan ialah bahan yang ' },
            { text: 'mengoksidakan bahan lain dan dirinya mengalami penurunan', keyword: true },
            { text: ' (menerima elektron); agen penurunan ialah bahan yang ' },
            { text: 'menurunkan bahan lain dan dirinya mengalami pengoksidaan', keyword: true },
            { text: ' (melepaskan elektron).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Pemindahan Elektron pada Suatu Jarak dalam Tiub-U',
            cause: 'Agen penurunan ($FeSO_4$) dan agen pengoksidaan ($KMnO_4$ berasid) dipisahkan oleh asid sulfurik cair dalam Tiub-U.',
            mechanism: '$Fe^{2+}$ membebaskan elektron ($Fe^{2+} \\to Fe^{3+} + e^-$) yang mengalir melalui wayar luar (menggerakkan jarum galvanometer) ke elektrod positif untuk diterima oleh ion $MnO_4^-$ ($MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$).',
            effect: 'Larutan $FeSO_4$ hijau pucat bertukar perang ($Fe^{3+}$), manakala $KMnO_4$ ungu bertukar tidak berwarna; asid $H_2SO_4$ melengkapkan litar melalui pergerakan ion.',
          },
        ],
        tables: [
          {
            title: 'Empat Takrifan Redoks & Penanda Nombor Pengoksidaan',
            headers: ['Kriteria', 'Pengoksidaan (OIL)', 'Penurunan (RIG)'],
            rows: [
              ['Oksigen', 'Menerima oksigen', 'Kehilangan oksigen'],
              ['Hidrogen', 'Kehilangan hidrogen', 'Menerima hidrogen'],
              ['Elektron', 'Kehilangan / melepaskan elektron ($e^-$ di kanan)', 'Menerima elektron ($e^-$ di kiri)'],
              ['Nombor Pengoksidaan', 'Nombor pengoksidaan **bertambah** (cth: $0 \\to +2$)', 'Nombor pengoksidaan **berkurang** (cth: $+7 \\to +2$)'],
            ],
          },
          {
            title: 'Penyesaran Halogen dengan 1,1,1-Trikloroetana ($CH_3CCl_3$)',
            headers: ['Halogen Terbentuk dalam $CH_3CCl_3$ (Lapisan Bawah)', 'Warna Lapisan Akueus', 'Warna Lapisan Organik $CH_3CCl_3$'],
            rows: [
              ['Klorin ($Cl_2$)', 'Kuning pucat / tidak berwarna', 'Kuning pucat / hampir tidak berwarna'],
              ['Bromin ($Br_2$)', 'Perang / jingga', '**Perang**',],
              ['Iodin ($I_2$)', 'Perang', '**Ungu** (pengesahan jelas $I_2$ vs $Br_2$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Setengah Persamaan Redoks Utama SPM (Pertukaran $Fe^{2+} \\leftrightarrow Fe^{3+}$ & Pengoksidaan)',
            latex: 'Fe^{2+} \\to Fe^{3+} + e^- \\quad|\\quad MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O \\quad|\\quad Cr_2O_7^{2-} + 14H^+ + 6e^- \\to 2Cr^{3+} + 7H_2O',
            symbols: [
              { symbol: 'MnO_4^-', meaning: 'ungu $\\to$ tidak berwarna ($Mn^{2+}$)', unit: '—' },
              { symbol: 'Cr_2O_7^{2-}', meaning: 'jingga $\\to$ hijau ($Cr^{3+}$)', unit: '—' },
            ],
            appliesWhen: 'Menulis setengah persamaan ionik dan persamaan redoks keseluruhan.',
            failsWhen: 'Perangkap besar SPM: Tindak balas penguraian ganda dua ($NaOH + HCl$) dan pemendakan ($Ag^+ + Cl^-$) BUKAN tindak balas redoks kerana tiada perubahan nombor pengoksidaan!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-redox-u-tube',
            title: 'Pemindahan Elektron pada Suatu Jarak dalam Tiub-U',
            whatItShows: 'Aliran elektron dari terminal negatif (pengoksidaan $Fe^{2+} \\to Fe^{3+}$) ke terminal positif (penurunan $MnO_4^- \\to Mn^{2+}$).',
            axisOrRule: 'Elektron mengalir melalui wayar luar dari agen penurunan ke agen pengoksidaan; $H_2SO_4$ membenarkan ion bergerak dalam larutan.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira Nombor Pengoksidaan, Menama IUPAC & Mengenal Pasti Agen Redoks',
          problem:
            'Kira nombor pengoksidaan mangan dalam $KMnO_4$ dan kromium dalam $K_2Cr_2O_7$, kemudian berikan nama IUPAC bagi $FeSO_4$ dan $FeCl_3$.',
          given: ['Nombor pengoksidaan tetap: $K=+1$, $O=-2$, sebatian neutral jumlah $=0$'],
          formulaLatex: '(+1) + x + 4(-2) = 0 \\quad|\\quad 2(+1) + 2y + 7(-2) = 0',
          formulaWhy: 'Jumlah nombor pengoksidaan bagi sebatian neutral ialah $0$.',
          substituteLatex: 'x = +7\\;(\\text{Kalium manganat(VII)}); \\qquad 2y = +12 \\Rightarrow y = +6\\;(\\text{Kalium dikromat(VI)})',
          answer: '$Mn = +7$, $Cr = +6$; $FeSO_4$ = **ferum(II) sulfat** ($Fe=+2$); $FeCl_3$ = **ferum(III) klorida** ($Fe=+3$).',
          trapAlert: 'Sentiasa tulis tanda $+$ atau $-$ pada nombor pengoksidaan (cth: $+7$, bukan $7$), dan angka Roman dalam kurungan tanpa jarak selepas nama unsur untuk IUPAC!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah arah aliran elektron dalam Tiub-U yang mengandungi larutan $KI$ dan air bromin?',
            answer: 'Dari elektrod karbon dalam larutan $KI$ (terminal negatif, tempat $2I^- \\to I_2 + 2e^-$) ke elektrod dalam air bromin (terminal positif).',
          },
          {
            question: 'Apakah fungsi 1,1,1-trikloroetana dalam tindak balas penyesaran halogen?',
            answer: 'Untuk membezakan kehadiran bromin (lapisan bawah perang) daripada iodin (lapisan bawah ungu) dengan jelas.',
          },
          {
            question: 'Berikan satu agen penurunan untuk menukarkan $Fe^{3+}$ kembali kepada $Fe^{2+}$.',
            answer: 'Serbuk zink atau serbuk magnesium (atau gas sulfur dioksida / hidrogen sulfida).',
          },
        ],
        fadedProblem: {
          prompt: 'Air klorin dititiskan ke dalam larutan kalium iodida.',
          step1GivenAndFormula: '$Cl_2 + 2I^- \\to 2Cl^- + I_2$. Nombor pengoksidaan $Cl: 0 \\to -1$; $I: -1 \\to 0$.',
          studentTask: 'Kenal pasti bahan yang dioksidakan, bahan yang diturunkan, agen pengoksidaan dan agen penurunan.',
          answerSteps: 'Ion iodida ($I^-$) dioksidakan (sebagai agen penurunan); Klorin ($Cl_2$) diturunkan (sebagai agen pengoksidaan).',
        },
        transferQuestion: {
          question: 'Adakah tindak balas $CaCO_3 + 2HCl \\to CaCl_2 + H_2O + CO_2$ merupakan tindak balas redoks? Buktikan dengan nombor pengoksidaan.',
          answer: 'Bukan. Nombor pengoksidaan setiap unsur kekal tidak berubah ($Ca=+2, C=+4, O=-2, H=+1, Cl=-1$).',
        },
      },
    },
    {
      id: 'k5-1.2',
      chapterId: 'k5-bab-1',
      code: '1.2',
      title: 'Keupayaan Elektrod Piawai ($E^0$)',
      pageRef: 'm.s. 22–26',
      part1Anchor: {
        phenomenon:
          'Bagaimana kita tahu tanpa meneka di makmal sama ada zink boleh menyesarkan kuprum, atau sama ada air bromin cukup kuat untuk mengoksidakan ion $Fe^{2+}$ kepada $Fe^{3+}$? Jawapannya terletak pada tangga voltan rujukan: Siri $E^0$.',
        chapterConnection:
          'Menggantikan "hafalan buta" Siri Elektrokimia dengan nilai keupayaan elektrod piawai ($E^0$) yang diukur terhadap Elektrod Hidrogen Piawai (SHE).',
      },
      part2SacredDefinitions: [
        {
          title: 'Keupayaan Elektrod Piawai ($E^0$) & Elektrod Hidrogen Piawai (SHE)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Keupayaan elektrod piawai ($E^0$) ialah keupayaan elektrod sesuatu sel setengah pada ' },
            { text: 'keadaan piawai: kepekatan ion $1.0\\text{ mol dm}^{-3}$, tekanan gas $1\\text{ atm}$ ($101\\text{ kPa}$), suhu $25\\,^\\circ\\text{C}$ ($298\\text{ K}$)', keyword: true },
            { text: ' dan menggunakan ' },
            { text: 'Elektrod Hidrogen Piawai ($E^0 = 0.00\\text{ V}$)', keyword: true },
            { text: ' berplatinum bersadur $PtO_2$ sebagai rujukan.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Aturan Emas Meramal Kekuatan Agen & Kebolehlakuan Tindak Balas daripada Siri $E^0$',
            cause: 'Semua setengah persamaan dalam Siri $E^0$ ditulis sebagai setengah tindak balas PENURUNAN (spesies teroksida $+ ne^- \\rightleftharpoons$ spesies terturun).',
            mechanism: 'Spesies di sebelah KIRI dengan $E^0$ lebih POSITIF sangat mudah menerima elektron (agen pengoksidaan kuat); spesies di sebelah KANAN dengan $E^0$ lebih NEGATIF sangat mudah membebaskan elektron (agen penurunan kuat).',
            effect: 'Tindak balas spontan berlaku apabila agen pengoksidaan ($E^0$ lebih positif, sebelah kiri) bertemu agen penurunan ($E^0$ lebih negatif, sebelah kanan).',
          },
        ],
        tables: [
          {
            title: 'Petikan Siri $E^0$ Lazim SPM (Susunan $E^0$ Menaik)',
            headers: ['Setengah Tindak Balas Penurunan', '$E^0$ ($\\text{V}$)', 'Kecenderungan'],
            rows: [
              ['$Mg^{2+}(ak) + 2e^- \\rightleftharpoons Mg(p)$', '$-2.38$', 'Di kanan ($Mg$) = agen penurunan sangat kuat'],
              ['$Zn^{2+}(ak) + 2e^- \\rightleftharpoons Zn(p)$', '$-0.76$', 'Lebih mudah derma $e^-$ (pengoksidaan ke kiri)'],
              ['$Fe^{2+}(ak) + 2e^- \\rightleftharpoons Fe(p)$', '$-0.44$', '—'],
              ['$2H^+(ak) + 2e^- \\rightleftharpoons H_2(g)$', '$0.00$', 'Rujukan Elektrod Hidrogen Piawai (SHE)'],
              ['$Cu^{2+}(ak) + 2e^- \\rightleftharpoons Cu(p)$', '$+0.34$', '—'],
              ['$I_2(p) + 2e^- \\rightleftharpoons 2I^-(ak)$', '$+0.54$', '—'],
              ['$Fe^{3+}(ak) + e^- \\rightleftharpoons Fe^{2+}(ak)$', '$+0.77$', '—'],
              ['$Ag^+(ak) + e^- \\rightleftharpoons Ag(p)$', '$+0.80$', '—'],
              ['$Br_2(ce) + 2e^- \\rightleftharpoons 2Br^-(ak)$', '$+1.07$', '—'],
              ['$Cl_2(g) + 2e^- \\rightleftharpoons 2Cl^-(ak)$', '$+1.36$', 'Di kiri ($Cl_2$) = agen pengoksidaan sangat kuat'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Syarat Kebolehlakuan Tindak Balas Penyesaran/Redoks',
            latex: 'E^0_{\\text{agen pengoksidaan (kiri)}} > E^0_{\\text{agen penurunan (kanan)}} \\quad\\Longrightarrow\\quad \\text{Tindak balas BERLAKU}',
            symbols: [
              { symbol: 'E^0', meaning: 'keupayaan elektrod piawai', unit: '$\\text{V}$' },
            ],
            appliesWhen: 'Meramal sama ada logam boleh menyesarkan ion logam lain atau halogen menyesarkan halida.',
            failsWhen: 'Perangkap SPM: Tentukan sama ada bahan yang bercampur berada di **sebelah KIRI** (cth: $Cu^{2+}$) atau **sebelah KANAN** (cth: $Zn$)! Dua bahan yang kedua-duanya di kiri (cth: $Cu^{2+} + Cl_2$) TIDAK boleh bertindak balas redoks!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Meramal Sama Ada Tindak Balas Berlaku Menggunakan Nilai $E^0$',
          problem:
            'Diberi $E^0(Cu^{2+}/Cu) = +0.34\\text{ V}$ dan $E^0(Ag^+/Ag) = +0.80\\text{ V}$. Ramalkan sama ada tindak balas berlaku jika kepingan kuprum dimasukkan ke dalam larutan $AgNO_3$.',
          given: ['Bahan hadir: $Cu(p)$ [di kanan] dan $Ag^+(ak)$ [di kiri]'],
          formulaLatex: 'E^0(Ag^+/Ag) = +0.80\\text{ V} > E^0(Cu^{2+}/Cu) = +0.34\\text{ V}',
          formulaWhy: 'Nilai $E^0$ bagi ion $Ag^+$ lebih positif daripada $Cu$, maka $Ag^+$ lebih mudah menerima elektron.',
          substituteLatex: 'Cu(p) + 2Ag^+(ak) \\longrightarrow Cu^{2+}(ak) + 2Ag(p)',
          answer: 'Ya, tindak balas berlaku. $Cu$ bertindak sebagai agen penurunan (nilai $E^0$ lebih negatif, melepaskan elektron kepada $Ag^+$), manakala $Ag^+$ ialah agen pengoksidaan (nilai $E^0$ lebih positif, menerima elektron).',
          trapAlert: 'Sentiasa nyatakan frasa **"nilai $E^0$ lebih negatif / lebih kurang positif, lebih mudah melepaskan elektron"** dan **"nilai $E^0$ lebih positif, lebih mudah menerima elektron"**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah 3 keadaan piawai bagi mengukur $E^0$?',
            answer: 'Kepekatan ion akueus $1.0\\text{ mol dm}^{-3}$, tekanan gas $1\\text{ atm}$, dan suhu $25\\,^\\circ\\text{C}$ ($298\\text{ K}$).',
          },
          {
            question: 'Mengapakah platinum digunakan dalam Elektrod Hidrogen Piawai?',
            answer: 'Kerana platinum lengai secara kimia dan bertindak sebagai konduktor elektron (disadur $PtO_2$ untuk meningkatkan luas permukaan penjerapan $H_2$).',
          },
          {
            question: 'Antara $Mg$ ($-2.38\\text{ V}$) dan $Zn$ ($-0.76\\text{ V}$), yang manakah agen penurunan yang lebih kuat?',
            answer: 'Magnesium ($Mg$), kerana nilai $E^0$-nya lebih negatif dan lebih mudah melepaskan elektron.',
          },
        ],
        fadedProblem: {
          prompt: 'Diberi $E^0(Fe^{3+}/Fe^{2+}) = +0.77\\text{ V}$ dan $E^0(I_2/I^-) = +0.54\\text{ V}$.',
          step1GivenAndFormula: 'Campuran: ion $Fe^{3+}$ (sebelah kiri) + ion $I^-$ (sebelah kanan).',
          studentTask: 'Ramalkan sama ada $Fe^{3+}$ dapat mengoksidakan $I^-$ menjadi $I_2$ dan tulis persamaan ionnya.',
          answerSteps: 'Ya, kerana $E^0(Fe^{3+}/Fe^{2+}) = +0.77\\text{ V} > +0.54\\text{ V}$. Persamaan: $2Fe^{3+} + 2I^- \\to 2Fe^{2+} + I_2$.',
        },
        transferQuestion: {
          question: 'Adakah gas hidrogen ($H_2$) boleh terhasil apabila kepingan perak ($Ag$) dimasukkan ke dalam asid hidroklorik cair? Rujuk nilai $E^0$.',
          answer: 'Tidak. $E^0(Ag^+/Ag) = +0.80\\text{ V}$ lebih positif daripada $E^0(H^+/H_2) = 0.00\\text{ V}$, maka $Ag$ tidak dapat melepaskan elektron kepada ion $H^+$.',
        },
      },
    },
    {
      id: 'k5-1.3',
      chapterId: 'k5-bab-1',
      code: '1.3',
      title: 'Sel Kimia',
      pageRef: 'm.s. 27–30',
      part1Anchor: {
        phenomenon:
          'Daripada buah lemon yang ditanam dua logam berbeza hinggalah bateri kereta dan sel Daniell di makmal — sel kimia menukarkan tenaga kimia terus kepada tenaga elektrik secara spontan.',
        chapterConnection:
          'Menggunakan nilai $E^0$ untuk mengenal pasti anod/katod, menulis notasi sel rasmi, dan menghitung voltan teori $E^0_{\\text{sel}}$.',
      },
      part2SacredDefinitions: [
        {
          title: 'Sel Kimia (Sel Voltik / Sel Galvani)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Sel kimia menukarkan ' },
            { text: 'tenaga kimia kepada tenaga elektrik', keyword: true },
            { text: ' melalui tindak balas redoks spontan antara dua elektrod yang berlainan nilai $E^0$: ' },
            { text: 'terminal negatif ialah anod (tempat pengoksidaan, $E^0$ lebih negatif)', keyword: true },
            { text: ' dan ' },
            { text: 'terminal positif ialah katod (tempat penurunan, $E^0$ lebih positif)', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Sel Daniell ($Zn \\,|\\, ZnSO_4 \\,||\\, CuSO_4 \\,|\\, Cu$) Menjana Arus Elektrik',
            cause: '$E^0(Zn^{2+}/Zn) = -0.76\\text{ V}$ lebih negatif daripada $E^0(Cu^{2+}/Cu) = +0.34\\text{ V}$.',
            mechanism: 'Atom zink di anod mengion melepaskan elektron ($Zn \\to Zn^{2+} + 2e^-$) yang mengalir melalui litar luar ke elektrod kuprum (katod), di mana ion $Cu^{2+}$ menerima elektron menjadi logam kuprum ($Cu^{2+} + 2e^- \\to Cu$).',
            effect: 'Elektrod $Zn$ menipis, enapan perang $Cu$ menebal di katod, warna biru $CuSO_4$ memudar, dan titian garam ($KNO_3$/$NaCl$) atau pasu berliang membenarkan pengaliran ion melengkapkan litar serta mengasingkan kedua-dua larutan.',
          },
        ],
        tables: [
          {
            title: 'Konvensi Notasi Sel & Kutub Sel Kimia',
            headers: ['Komponen', 'Anod (Kiri Notasi)', 'Katod (Kanan Notasi)'],
            rows: [
              ['Terminal dalam Sel Kimia', 'Terminal **Negatif** ($-$)', 'Terminal **Positif** ($+$)'],
              ['Nilai $E^0$', '**Lebih negatif** (atau kurang positif)', '**Lebih positif** (atau kurang negatif)'],
              ['Proses Redoks', '**Pengoksidaan** (lepas $e^-$)', '**Penurunan** (terima $e^-$)'],
              ['Format Notasi Sel', '$\\text{Anod(p)} \\mid \\text{Elektrolit(ak)} \\parallel \\text{Elektrolit(ak)} \\mid \\text{Katod(p)}$', 'Contoh: $Zn(p) \\mid Zn^{2+}(ak, 1.0\\text{ M}) \\parallel Cu^{2+}(ak, 1.0\\text{ M}) \\mid Cu(p)$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pengiraan Voltan Piawai Sel Kimia ($E^0_{\\text{sel}}$)',
            latex: 'E^0_{\\text{sel}} = E^0_{\\text{katod (positif)}} - E^0_{\\text{anod (negatif)}}',
            symbols: [
              { symbol: 'E^0_{\\text{katod}}', meaning: 'nilai $E^0$ yang lebih positif', unit: '$\\text{V}$' },
              { symbol: 'E^0_{\\text{anod}}', meaning: 'nilai $E^0$ yang lebih negatif', unit: '$\\text{V}$' },
            ],
            appliesWhen: 'Semua sel kimia dua elektrod pada keadaan piawai ($1.0\\text{ M}, 25\\,^\\circ\\text{C}$).',
            failsWhen: 'Perangkap tanda negatif! JANGAN terbalikkan tanda $E^0$ sendiri dan JANGAN darab nilai $E^0$ walaupun setengah persamaan didarabkan dengan 2! Contoh Daniell: $(+0.34) - (-0.76) = +1.10\\text{ V}$.',
          },
        ],
        diagrams: [
          {
            kind: 'chem-daniell-cell',
            title: 'Rajah Sel Kimia (Sel Daniell $Zn / Cu$) & Aliran Elektron',
            whatItShows: 'Aliran elektron melalui wayar dari anod ($Zn$) ke katod ($Cu$) dan peranan titian garam.',
            axisOrRule: 'Semak rumus $E^0_{\\text{sel}} = E^0_{\\text{katod}} - E^0_{\\text{anod}}$ dan perubahan pada kedua-dua elektrod.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menulis Notasi Sel & Mengira $E^0_{\\text{sel}}$ untuk Sel $Mg / Ag$',
          problem:
            'Satu sel kimia dibina menggunakan sel setengah $Mg(p)/Mg^{2+}(ak)\\; [E^0 = -2.38\\text{ V}]$ dan $Ag(p)/Ag^+(ak)\\; [E^0 = +0.80\\text{ V}]$. Tentukan anod, katod, notasi sel, persamaan keseluruhan dan bacaan voltmeter piawai.',
          given: ['$E^0(Mg^{2+}/Mg) = -2.38\\text{ V}$ (lebih negatif)', '$E^0(Ag^+/Ag) = +0.80\\text{ V}$ (lebih positif)'],
          formulaLatex: 'E^0_{\\text{sel}} = E^0_{\\text{katod}} - E^0_{\\text{anod}}',
          formulaWhy: 'Elektrod $E^0$ lebih negatif menjadi anod ($-$); elektrod $E^0$ lebih positif menjadi katod ($+$).',
          substituteLatex: 'E^0_{\\text{sel}} = (+0.80) - (-2.38) = +3.18\\text{ V}',
          answer: 'Anod ($-$): Magnesium; Katod ($+$): Argentum. Notasi sel: $Mg(p) \\mid Mg^{2+}(ak) \\parallel Ag^+(ak) \\mid Ag(p)$. Persamaan: $Mg + 2Ag^+ \\to Mg^{2+} + 2Ag$. $E^0_{\\text{sel}} = +3.18\\text{ V}$.',
          trapAlert: 'Dalam **Sel Kimia**, Anod ialah terminal **NEGATIF** (berbeza dengan Sel Elektrolisis di mana Anod ialah terminal **POSITIF**)! Tetapi ingat hukum sejagat: **AN**od sentiasa **P**eng**O**ksidaan (AN-OX), **KAT**od sentiasa **PEN**urunan (RED-CAT)!',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Reka Bentuk Sel Kimia SPM',
        rows: [
          {
            designChoice: 'Menggunakan titian garam ($KNO_3$) atau pasu berliang antara dua bikar elektrolit',
            scientificReason: 'Membenarkan pergerakan ion untuk melengkapkan litar elektrik sambil menghalang kedua-dua elektrolit daripada bercampur.',
          },
          {
            designChoice: 'Memilih pasangan elektrod yang mempunyai perbezaan nilai $E^0$ paling besar',
            scientificReason: 'Menghasilkan nilai voltan sel ($E^0_{\\text{sel}}$) yang paling tinggi.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah fungsi titian garam dalam Sel Daniell?',
            answer: 'Membenarkan pengaliran ion melaluinya untuk melengkapkan litar elektrik.',
          },
          {
            question: 'Pada elektrod manakah proses pengoksidaan sentiasa berlaku dalam sel kimia?',
            answer: 'Di anod (terminal negatif dalam sel kimia).',
          },
          {
            question: 'Mengapakah warna larutan biru kuprum(II) sulfat dalam Sel Daniell semakin pudar selepas beberapa jam?',
            answer: 'Kerana kepekatan ion $Cu^{2+}$ berkurang apabila dinyahcaskan menjadi atom kuprum pada katod.',
          },
        ],
        fadedProblem: {
          prompt: 'Sel kimia mempunyai notasi sel: $Fe(p) \\mid Fe^{2+}(ak) \\parallel Cu^{2+}(ak) \\mid Cu(p)$. [$E^0(Fe^{2+}/Fe) = -0.44\\text{ V}$, $E^0(Cu^{2+}/Cu) = +0.34\\text{ V}$]',
          step1GivenAndFormula: 'Sebelah kiri $\\parallel$ ialah anod ($Fe$); sebelah kanan ialah katod ($Cu$).',
          studentTask: 'Hitung $E^0_{\\text{sel}}$ dan nyatakan arah pengaliran elektron di litar luar.',
          answerSteps: '$E^0_{\\text{sel}} = (+0.34) - (-0.44) = +0.78\\text{ V}$; elektron mengalir daripada elektrod ferum ke elektrod kuprum.',
        },
        transferQuestion: {
          question: 'Apakah yang berlaku jika larutan natrium klorida atau kalium nitrat dalam titian garam digantikan dengan air suling atau wayar kuprum?',
          answer: 'Air suling tiada ion bebas (litar terputus, bacaan voltmeter $0\\text{ V}$); wayar kuprum tidak membenarkan pemindahan ion antara dua bikar untuk mengimbangi cas larutan, maka tindak balas terhenti.',
        },
      },
    },
    {
      id: 'k5-1.4',
      chapterId: 'k5-bab-1',
      code: '1.4',
      title: 'Sel Elektrolisis',
      pageRef: 'm.s. 31–47',
      part1Anchor: {
        phenomenon:
          'Daripada menyadur sudu besi dengan logam perak berkilat sehinggalah menulenkan jongkong kuprum mentah dan memisahkan garam lebur kepada logam tulen — arus elektrik memaksa tindak balas redoks tidak spontan berlaku!',
        chapterConnection:
          'Menguasai elektrolisis leburan ($PbBr_2$), 3 faktor pemilihan ion dinyahcas dalam larutan akueus, perbezaan Sel Kimia vs Sel Elektrolisis, serta aplikasi industri.',
      },
      part2SacredDefinitions: [
        {
          title: 'Elektrolit & Elektrolisis',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Elektrolit ialah bahan yang ' },
            { text: 'dapat mengkonduksikan arus elektrik dalam keadaan lebur atau larutan akueus dan mengalami perubahan kimia', keyword: true },
            { text: '; elektrolisis ialah proses ' },
            { text: 'penguraian sesuatu sebatian dalam keadaan lebur atau akueus kepada unsur juzuknya apabila arus elektrik mengalir melaluinya', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Tiga Faktor Pemilihan Ion untuk Dinyahcaskan dalam Larutan Akueus',
            cause: 'Dalam larutan akueus, terdapat kation & anion daripada zat terlarut DAN ion $H^+$ & $OH^-$ daripada penceraian separa air.',
            mechanism: '1. **Nilai $E^0$**: Di anod ($+$), anion ber-**$E^0$ lebih negatif/rendah** dipilih; di katod ($-$), kation ber-**$E^0$ lebih positif/tinggi** dipilih. 2. **Kepekatan halida**: Jika $Cl^-, Br^-, I^-$ pekat ($\\ge 1.0\\text{ M}$), ion halida dipilih mengatasi $OH^-$ di anod. 3. **Jenis elektrod aktif** (cth: elektrod $Cu$ dlm $CuSO_4$): Anod kuprum sendiri mengion ($Cu \\to Cu^{2+} + 2e^-$) dan tiada anion dinyahcas.',
            effect: 'Menentukan tepat gas, enapan logam atau perubahan warna yang terhasil pada anod dan katod.',
          },
        ],
        tables: [
          {
            title: 'Banding Beza Sel Kimia vs Sel Elektrolisis',
            headers: ['Ciri Perbandingan', 'Sel Kimia', 'Sel Elektrolisis'],
            rows: [
              ['Perubahan tenaga', 'Tenaga kimia $\\to$ Tenaga elektrik', 'Tenaga elektrik $\\to$ Tenaga kimia'],
              ['Sumber arus', 'Tiada bateri (hanya voltmeter/mentol)', 'Memerlukan bateri / bekalan kuasa DC'],
              ['Elektrod', 'Dua logam berlainan ($E^0$ berbeza)', 'Boleh logam sama (cth: karbon lengai) atau berbeza'],
              ['Kutub Anod (Pengoksidaan)', 'Terminal **Negatif ($-$)**', 'Terminal **Positif ($+$)**'],
              ['Kutub Katod (Penurunan)', 'Terminal **Positif ($+$)**', 'Terminal **Negatif ($-$)**'],
              ['Arah aliran elektron', 'Dari Anod ($-$) ke Katod ($+$)', 'Dari terminal negatif bateri $\\to$ Katod ($-$); Anod ($+$) $\\to$ terminal positif bateri'],
            ],
          },
          {
            title: 'Aplikasi Industri Sel Elektrolisis',
            headers: ['Aplikasi', 'Susunan Radas Wajib (Anod, Katod, Elektrolit)', 'Tujuan & Pemerhatian'],
            rows: [
              ['Penyaduran logam (cth: kunci besi disadur kuprum)', 'Anod: **Kepingan $Cu$**; Katod: **Kunci besi**; Elektrolit: **$CuSO_4(ak)$**', 'Gunakan arus kecil untuk lapisan sekata & melekat kuat; anod $Cu$ menipis, kunci bersalut perang'],
              ['Penulenan kuprum ($Cu$)', 'Anod: **$Cu$ tak tulen**; Katod: **$Cu$ tulen**; Elektrolit: **$CuSO_4(ak)$**', 'Anod $Cu$ tak tulen menipis (bendasing $Ag/Au$ mendap sebagai enapcemar); katod $Cu$ tulen menebal; warna biru $CuSO_4$ kekal'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Setengah Persamaan Elektrolisis Penting (Leburan vs Akueus)',
            latex: '\\text{Anod } OH^-:\\; 4OH^- \\to O_2 + 2H_2O + 4e^- \\quad|\\quad \\text{Katod } H^+:\\; 2H^+ + 2e^- \\to H_2',
            symbols: [
              { symbol: '4OH^-', meaning: 'menghasilkan gas oksigen di anod (jika bukan halida pekat/elektrod aktif)', unit: '—' },
            ],
            appliesWhen: 'Larutan akueus cair menggunakan elektrod karbon atau platinum.',
            failsWhen: 'Perangkap SPM: Dalam elektrolisis **leburan $PbBr_2$**, elektrolit TIDAK mengandungi air — jadi jangan masukkan ion $H^+$ atau $OH^-$! Anod hasilkan wap perang $Br_2$ ($2Br^- \\to Br_2 + 2e^-$), katod hasilkan kelabu $Pb$ ($Pb^{2+} + 2e^- \\to Pb$).',
          },
        ],
        diagrams: [
          {
            kind: 'chem-electrolysis-cell',
            title: 'Sel Elektrolisis Larutan $NaCl$ Cair vs $NaCl$ Pekat',
            whatItShows: 'Menunjukkan kesan faktor kepekatan ion klorida ($Cl^-$) ke atas hasil di anod ($O_2$ vs $Cl_2$).',
            axisOrRule: 'Klik butang untuk membandingkan pemilihan ion dinyahcaskan di anod antara $NaCl$ cair dan $NaCl$ pekat.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Elektrolisis $CuSO_4$ Menggunakan Elektrod Karbon vs Elektrod Kuprum',
          problem:
            'Bandingkan pemerhatian pada anod dan warna larutan $CuSO_4$ apabila dielektrolisis menggunakan (a) elektrod karbon, dan (b) elektrod kuprum.',
          given: ['Ion hadir dalam $CuSO_4(ak)$: $Cu^{2+}, SO_4^{2-}, H^+, OH^-$'],
          formulaLatex: '(a)\\ 4OH^- \\to O_2 + 2H_2O + 4e^- \\quad|\\quad (b)\\ Cu \\to Cu^{2+} + 2e^-',
          formulaWhy: 'Karbon ialah elektrod lengai ($OH^-$ dipilih di anod); kuprum ialah elektrod aktif (atom $Cu$ mengion).',
          substituteLatex: '(a)\\ [Cu^{2+}] \\downarrow \\Rightarrow \\text{biru pudar}; \\quad (b)\\ \\text{Kadar } Cu \\text{ mengion} = \\text{kadar } Cu^{2+} \\text{ dinyahcas}',
          answer: '(a) Dengan karbon: gelembung gas tak berwarna ($O_2$) di anod dan warna biru larutan menjadi semakin pudar kerana kepekatan ion $Cu^{2+}$ berkurang. (b) Dengan kuprum: anod kuprum semakin nipis dan keamatan warna biru larutan kekal tidak berubah kerana kepekatan ion $Cu^{2+}$ kekal malar.',
          trapAlert: 'Frasa wajib SPM bagi elektrod kuprum: **"kadar pengionan atom kuprum di anod sama dengan kadar penyahcasan ion $Cu^{2+}$ di katod, maka kepekatan ion $Cu^{2+}$ kekal malar"**!',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Proses Penyaduran Logam Berkualiti SPM',
        rows: [
          {
            designChoice: 'Menjadikan objek yang hendak disadur (cth: sudu besi) sebagai KATOD',
            scientificReason: 'Ion logam penyadur ($Ag^+$ atau $Cu^{2+}$) bergerak ke katod bercas negatif dan diturunkan menjadi lapisan logam di atas permukaannya.',
          },
          {
            designChoice: 'Menggunakan arus elektrik yang kecil dan memutar objek perlahan-lahan',
            scientificReason: 'Menghasilkan lapisan penyaduran yang nipis, sekata, licin dan melekat kuat tanpa mudah tertanggal.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah pepejal $PbBr_2$ mesti dipanaskan hingga lebur sebelum elektrolisis boleh berlaku?',
            answer: 'Supaya ion $Pb^{2+}$ dan $Br^-$ dapat bergerak bebas menuju ke elektrod.',
          },
          {
            question: 'Apakah hasil di anod apabila larutan $HCl\\ 1.0\\text{ mol dm}^{-3}$ dielektrolisis dengan elektrod karbon?',
            answer: 'Gas klorin ($Cl_2$) kuning kehijauan kerana kepekatan ion $Cl^-$ adalah tinggi.',
          },
          {
            question: 'Di elektrod manakah objek yang hendak disadur diletakkan?',
            answer: 'Di katod (terminal negatif).',
          },
        ],
        fadedProblem: {
          prompt: 'Larutan $AgNO_3\\ 0.1\\text{ mol dm}^{-3}$ dielektrolisis menggunakan elektrod karbon. [$E^0(Ag^+/Ag) = +0.80\\text{ V}$, $E^0(H^+/H_2) = 0.00\\text{ V}$]',
          step1GivenAndFormula: 'Kation hadir: $Ag^+, H^+$; Anion hadir: $NO_3^-, OH^-$.',
          studentTask: 'Nyatakan ion yang dipilih untuk dinyahcaskan di anod dan katod serta tulis setengah persamaannya.',
          answerSteps: 'Anod: $OH^-$ dipilih ($4OH^- \\to O_2 + 2H_2O + 4e^-$); Katod: $Ag^+$ dipilih kerana $E^0$ lebih positif ($Ag^+ + e^- \\to Ag$).',
        },
        transferQuestion: {
          question: 'Adakah elektrolisis larutan natrium sulfat ($Na_2SO_4$) cair menggunakan elektrod karbon sebenarnya hanyalah elektrolisis air? Jelaskan.',
          answer: 'Ya, kerana di anod ion $OH^-$ dipilih menghasilkan gas $O_2$ dan di katod ion $H^+$ dipilih menghasilkan gas $H_2$, meninggalkan ion $Na^+$ dan $SO_4^{2-}$ dalam larutan yang semakin pekat.',
        },
      },
    },
    {
      id: 'k5-1.5',
      chapterId: 'k5-bab-1',
      code: '1.5',
      title: 'Pengekstrakan Logam daripada Bijihnya',
      pageRef: 'm.s. 48–51',
      part1Anchor: {
        phenomenon:
          'Logam di bumi jarang wujud tulen — aluminium terperangkap dalam batu bauksit ($Al_2O_3$) manakala besi terperangkap dalam hematit ($Fe_2O_3$). Mengapakah besi diekstrak dengan karbon murah dalam relau bagas sedangkan aluminium perlukan arus elektrik raksasa?',
        chapterConnection:
          'Menghubungkan kedudukan logam dalam Siri Kereaktifan Logam (di atas vs di bawah karbon) kepada kaedah pengekstrakan industri.',
      },
      part2SacredDefinitions: [
        {
          title: 'Prinsip Pemilihan Kaedah Pengekstrakan Logam',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Logam lebih reaktif daripada karbon ($K, Na, Ca, Mg, Al$) diekstrak melalui ' },
            { text: 'elektrolisis leburan oksidanya', keyword: true },
            { text: '; logam kurang reaktif daripada karbon ($Zn, Fe, Sn, Pb$) diekstrak melalui ' },
            { text: 'penurunan oksida logam oleh karbon (kok)', keyword: true },
            { text: ' dalam relau bagas.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Kriolit ($Na_3AlF_6$) Dicampur dengan Bauksit dalam Pengekstrakan Aluminium',
            cause: 'Aluminium oksida ($Al_2O_3$) tulen mempunyai takat lebur yang amat tinggi iaitu sekitar $2045\\,^\\circ\\text{C}$.',
            mechanism: 'Kriolit merendahkan takat lebur campuran kepada sekitar $950\\,^\\circ\\text{C}$ melalui penurunan takat beku campuran.',
            effect: 'Menjimatkan kos tenaga elektrik secara besar-besaran; anod karbon mesti kerap diganti kerana oksigen panas membakar karbon membentuk $CO_2$.',
          },
          {
            title: 'Fungsi Batu Kapur ($CaCO_3$) dalam Relau Bagas Pengekstrakan Besi',
            cause: 'Bijih hematit bercampur bendasing berasid iaitu pasir/silika ($SiO_2$).',
            mechanism: 'Batu kapur terurai menjadi kalsium oksida bes ($CaO$), yang kemudiannya bertindak balas dengan $SiO_2$ membentuk kalsium silikat ($CaSiO_3$, sanga).',
            effect: 'Sanga lebur berketumpatan lebih rendah terapung di atas besi lebur dan mudah disalurkan keluar.',
          },
        ],
        tables: [
          {
            title: 'Ringkasan Dua Proses Pengekstrakan Logam Industri',
            headers: ['Aspek', 'Pengekstrakan Aluminium (Bauksit $Al_2O_3$)', 'Pengekstrakan Besi (Hematit $Fe_2O_3$)'],
            rows: [
              ['Kaedah', 'Elektrolisis leburan ($Al_2O_3$ + kriolit $Na_3AlF_6$)', 'Penurunan oleh karbon/CO dalam relau bagas'],
              ['Tindak balas utama', 'Katod: $Al^{3+} + 3e^- \\to Al(ce)$<br>Anod: $2O^{2-} \\to O_2 + 4e^-$ ($+ C \\to CO_2$)', '$C + O_2 \\to CO_2$; $CO_2 + C \\to 2CO$;<br>$Fe_2O_3 + 3CO \\to 2Fe + 3CO_2$ (atau $+ C$)'],
              ['Bahan tambahan khas', 'Kriolit ($Na_3AlF_6$) — merendahkan takat lebur', 'Batu kapur ($CaCO_3$) — menyingkir $SiO_2$ sbg sanga $CaSiO_3$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Termit & Penyingkiran Bendasing Relau Bagas',
            latex: 'Fe_2O_3(p) + 2Al(p) \\longrightarrow 2Fe(ce) + Al_2O_3(p) \\qquad|\\qquad CaO(p) + SiO_2(p) \\longrightarrow CaSiO_3(ce)',
            symbols: [
              { symbol: 'CaSiO_3', meaning: 'kalsium silikat (sanga)', unit: '—' },
            ],
            appliesWhen: 'Pengimpalan landasan kereta api (termit) dan relau bagas.',
            failsWhen: 'Jangan guna karbon untuk mengekstrak $Al$ atau $Mg$ — karbon tidak cukup kuat menurunkan oksida logam yang berada di ATAS karbon!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menjawab Peranan Kok, Udara Panas & Batu Kapur dalam Relau Bagas',
          problem:
            'Namakan tiga bahan pepejal yang dimasukkan dari bahagian atas relau bagas bersama udara panas di bawah, serta nyatakan fungsi setiap satu.',
          given: ['Bijih besi (hematit, $Fe_2O_3$)', 'Arang kok ($C$)', 'Batu kapur ($CaCO_3$)'],
          formulaLatex: 'Fe_2O_3 + 3CO \\to 2Fe + 3CO_2 \\quad|\\quad CaCO_3 \\to CaO + CO_2',
          formulaWhy: 'Kok bertindak sebagai bahan api dan agen penurunan; batu kapur menyingkirkan bendasing silika.',
          substituteLatex: 'CaO + SiO_2 \\longrightarrow CaSiO_3\\text{ (sanga)}',
          answer: '1. Hematit ($Fe_2O_3$): sumber bijih besi. 2. Kok ($C$): bertindak balas dengan oksigen menjana haba dan membentuk karbon monoksida ($CO$) sebagai agen penurunan. 3. Batu kapur ($CaCO_3$): terurai membentuk $CaO$ untuk bertindak balas dengan bendasing $SiO_2$ menjadi sanga lebur $CaSiO_3$.',
          trapAlert: 'Dalam elektrolisis aluminium, pastikan tulis kedua-dua kegunaan anod karbon: menyalurkan arus DAN bertindak balas dengan $O_2$ terhasil menjadi gas $CO_2$ sehingga anod perlu diganti secara berkala!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah fungsi kriolit ($Na_3AlF_6$) dalam pengekstrakan aluminium?',
            answer: 'Untuk merendahkan takat lebur aluminium oksida ($Al_2O_3$) daripada $2045\\,^\\circ\\text{C}$ ke sekitar $950\\,^\\circ\\text{C}$.',
          },
          {
            question: 'Mengapakah anod karbon dalam sel pengekstrakan aluminium mesti kerap diganti?',
            answer: 'Kerana gas oksigen yang terhasil di anod bertindak balas dengan karbon panas membentuk gas karbon dioksida ($CO_2$), menghakis anod.',
          },
          {
            question: 'Apakah formula kimia bagi sanga yang terbentuk dalam relau bagas?',
            answer: 'Kalsium silikat, $CaSiO_3$.',
          },
        ],
        fadedProblem: {
          prompt: 'Logam zink terletak di bawah karbon dan di atas besi dalam siri kereaktifan logam.',
          step1GivenAndFormula: 'Oksida logam di bawah karbon boleh diturunkan oleh karbon melalui pemanasan.',
          studentTask: 'Cadangkan kaedah pengekstrakan zink daripada bijih zink oksida ($ZnO$) dan tulis persamaannya.',
          answerSteps: 'Penurunan menggunakan karbon (arang kok): $2ZnO(p) + C(p) \\xrightarrow{\\Delta} 2Zn(ce) + CO_2(g)$ (atau $ZnO + C \\to Zn + CO$).',
        },
        transferQuestion: {
          question: 'Mengapakah mengitar semula tin minuman aluminium menjimatkan sehingga 95% tenaga berbanding mengekstraknya daripada bauksit?',
          answer: 'Kerana pengekstrakan aluminium daripada bauksit memerlukan proses elektrolisis suhu tinggi ($950\\,^\\circ\\text{C}$) yang menggunakan tenaga elektrik amat besar, sedangkan mengitar semula hanya memerlukan peleburan semula aluminium pada $660\\,^\\circ\\text{C}$.',
        },
      },
    },
    {
      id: 'k5-1.6',
      chapterId: 'k5-bab-1',
      code: '1.6',
      title: 'Pengaratan',
      pageRef: 'm.s. 52–57',
      part1Anchor: {
        phenomenon:
          'Mengapakah paku besi yang dililit dengan jalur magnesium kekal berkilat di dalam agar-agar, sedangkan paku besi yang dililit jalur kuprum berkarat dengan teruk sekali disertai warna biru tua?',
        chapterConnection:
          'Menjelaskan kakisan dan pengaratan besi sebagai sel kimia mikroskopik redoks serta membuktikan kaedah perlindungan logam korban secara eksperimen.',
      },
      part2SacredDefinitions: [
        {
          title: 'Pengaratan Besi (Proses Redoks)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Pengaratan ialah kakisan logam besi yang berlaku dengan kehadiran ' },
            { text: 'air dan oksigen', keyword: true },
            { text: ', di mana besi dioksidakan ($Fe \\to Fe^{2+} + 2e^-$) dan oksigen diturunkan ($O_2 + 2H_2O + 4e^- \\to 4OH^-$) membentuk pepejal perang ' },
            { text: 'ferum(III) oksida terhidrat, $Fe_2O_3\\cdot xH_2O$ (karat)', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Pengaratan & Kesan Sentuhan Logam Lain (Eksperimen 1E)',
            cause: 'Besi bersentuhan dengan logam lain di dalam agar-agar mengandungi $K_3Fe(CN)_6$ dan fenolftalein.',
            mechanism: 'Jika disentuh logam **lebih elektropositif** ($Mg, Zn$): $Mg/Zn$ teroksida mengorbankan diri dan membekalkan elektron kepada besi, menghalang pengoksidaan besi (warna **merah jambu** terhasil daripada $OH^-$, tiada biru). Jika disentuh logam **kurang elektropositif** ($Sn, Pb, Cu$): besi dipaksa teroksida lebih cepat membentuk banyak ion $Fe^{2+}$ (warna **biru tua** pekat dengan $K_3Fe(CN)_6$).',
            effect: 'Logam lebih elektropositif melambatkan/mencegah pengaratan besi; logam kurang elektropositif mempercepatkan pengaratan besi!',
          },
        ],
        tables: [
          {
            title: 'Penunjuk Agar-Agar dalam Eksperimen 1E Kesan Logam ke atas Pengaratan Besi',
            headers: ['Pasangan Paku Besi ($Fe$)', 'Logam Teroksida', 'Warna Tompok dalam Agar-agar', 'Kesimpulan Pengaratan Besi'],
            rows: [
              ['$Fe$ sahaja (Kawalan)', 'Besi ($Fe$)', 'Sedikit biru tua + merah jambu', 'Besi berkarat perlahan'],
              ['$Fe + Mg$ atau $Fe + Zn$', '$Mg$ / $Zn$ (lebih elektropositif)', '**Merah jambu tinggi** ($OH^-$); **tiada biru**', '**Tidak berkarat** (perlindungan korban)'],
              ['$Fe + Sn$ atau $Fe + Cu$', 'Besi ($Fe$ lebih elektropositif drpd $Sn/Cu$)', '**Biru tua pekat** (banyak $Fe^{2+}$)', '**Berkarat lebih cepat**'],
            ],
          },
          {
            title: 'Tiga Kaedah Utama Pencegahan Pengaratan',
            headers: ['Kaedah', 'Contoh & Mekanisme'],
            rows: [
              ['1. Permukaan perlindungan', 'Cat, gris, saduran plastik, penyaduran timah ($Sn$, tin makanan) atau zink/penggalvanian ($Zn$) menghalang sentuhan dengan air & oksigen'],
              ['2. Perlindungan logam korban', 'Blok magnesium ($Mg$) atau zink ($Zn$) disambung pada badan kapal/paip besi bawah tanah; $Mg/Zn$ terkorban (teroksida) menggantikan besi'],
              ['3. Pengaloian', 'Keluli nirkarat ($Fe + Cr + Ni + C$): kromium membentuk lapisan oksida nipis tahan kakisan'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Tindak Balas Pengaratan Besi di Tengah & Hujung Titisan Air',
            latex: '\\text{Anod: } Fe \\to Fe^{2+} + 2e^- \\quad|\\quad \\text{Katod: } O_2 + 2H_2O + 4e^- \\to 4OH^- \\quad|\\quad Fe(OH)_2 \\xrightarrow{O_2, H_2O} Fe_2O_3 \\cdot xH_2O',
            symbols: [
              { symbol: 'K_3Fe(CN)_6', meaning: 'mengesan kehadiran ion $Fe^{2+}$ (mendakan biru tua)', unit: '—' },
              { symbol: 'Fenolftalein', meaning: 'mengesan kehadiran ion $OH^-$ (warna merah jambu)', unit: '—' },
            ],
            appliesWhen: 'Menerangkan mekanisme pengaratan dan tafsiran Eksperimen 1E.',
            failsWhen: 'Perangkap SPM: Tin makanan disadur **timah ($Sn$)** selamat selagi tidak kemik/tercalar; sebaik sahaja tercalar, besi berkarat **LEBIH CEPAT** kerana $Fe$ lebih elektropositif daripada $Sn$! Sebaliknya bumbung besi tergalvani ($Zn$) tetap terlindung walaupun tercalar kerana $Zn$ lebih elektropositif daripada $Fe$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-rusting-cell',
            title: 'Sel Elektrokimia Pengaratan Besi di Bawah Titisan Air',
            whatItShows: 'Bahagian tengah titisan (kurang $O_2$) menjadi anod ($Fe \\to Fe^{2+}$), manakala hujung titisan (kaya $O_2$) menjadi katod ($OH^-$).',
            axisOrRule: 'Elektron mengalir melalui logam besi ke tepi titisan air; ion $Fe^{2+}$ dan $OH^-$ bergabung membentuk karat.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 1E',
            title: 'Kesan Logam yang Bersentuhan dengan Besi Terhadap Pengaratan',
            aim: 'Mengkaji bagaimana logam lebih elektropositif ($Mg, Zn$) dan kurang elektropositif ($Sn, Cu$) mempengaruhi pengaratan besi.',
            inference: 'Pengaratan besi dicegah oleh logam lebih elektropositif dan dipercepatkan oleh logam kurang elektropositif.',
            hypothesis: 'Apabila besi bersentuhan dengan logam lebih elektropositif, besi tidak berkarat; apabila bersentuhan dengan logam kurang elektropositif, besi berkarat lebih cepat.',
            variables: {
              manipulated: 'Jenis logam yang dililit pada paku besi ($Mg, Zn, Sn, Cu$)',
              responding: 'Keamatan warna biru tua dalam agar-agar',
              fixed: 'Jenis paku besi, larutan agar-agar + $K_3Fe(CN)_6$ + fenolftalein, suhu & masa (1 hari)',
            },
            setupLogic: 'Gosok paku besi & jalur logam dengan kertas pasir (buang oksida), lilit ketat, letak dalam tabung uji beragar-agar panas berisi kedua-dua penunjuk dan biar semalaman.',
            expectedResult: 'Paku + $Mg$/$Zn$: merah jambu (tiada biru). Paku + $Sn$/$Cu$: warna biru tua sangat pekat.',
            conclusion: 'Logam lebih elektropositif mencegah pengaratan besi melalui pengorbanan logam, manakala logam kurang elektropositif mempercepatkannya.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Banding Beza Tin Makanan ($Fe+Sn$) vs Bumbung Tergalvani ($Fe+Zn$) Apabila Tercalar',
          problem:
            'Kedua-dua tin makanan (disadur timah $Sn$) dan bumbung besi tergalvani (disadur zink $Zn$) tercalar sehingga besi terdedah kepada hujan dan udara. Ramal dan terangkan apa yang berlaku kepada kedua-duanya.',
          given: ['$E^0$: $Zn\\ (-0.76\\text{ V}) < Fe\\ (-0.44\\text{ V}) < Sn\\ (-0.14\\text{ V})$'],
          formulaLatex: 'Zn \\to Zn^{2+} + 2e^- \\;(\\text{korban}) \\quad\\text{vs}\\quad Fe \\to Fe^{2+} + 2e^- \\;(\\text{karat lebih cepat})',
          formulaWhy: 'Logam dengan $E^0$ lebih negatif akan sentiasa mengion dahulu.',
          substituteLatex: 'Zn \\text{ lebih elektropositif drpd } Fe; \\; Fe \\text{ lebih elektropositif drpd } Sn',
          answer: 'Bumbung tergalvani kekal tidak berkarat kerana zink ($Zn$) lebih elektropositif daripada besi, maka $Zn$ yang teroksida dan membebaskan elektron melindungi besi. Sebaliknya, tin makanan berkarat jauh lebih cepat kerana besi lebih elektropositif daripada timah ($Sn$), maka besi teroksida melepaskan elektron.',
          trapAlert: 'Jelaskan **mengapa kedua-duanya terhalang daripada air sebelum tercalar**, dan kemudian terangkan **perbezaan keelektropositifan/nilai $E^0$ selepas tercalar**!',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Perlindungan Kakisan Struktur Kejuruteraan',
        rows: [
          {
            designChoice: 'Memasang blok zink atau magnesium pada badan kapal keluli atau paip besi bawah tanah',
            scientificReason: '$Mg/Zn$ lebih elektropositif (nilai $E^0$ lebih negatif) daripada besi, maka ia bertindak sebagai anod korban yang teroksida melindungi besi.',
          },
          {
            designChoice: 'Menggunakan paku keluli nirkarat di kawasan pantai yang lembap dan bergaram',
            scientificReason: 'Ion klorida garam mempercepatkan pengaliran cas dalam pengaratan biasa, manakala keluli nirkarat dilindungi lapisan oksida kromium yang tahan kakisan.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua fungsi larutan kalium heksasianoferat(III) dan fenolftalein dalam Eksperimen 1E?',
            answer: '$K_3Fe(CN)_6$ mengesan ion $Fe^{2+}$ (mendakan biru tua); fenolftalein mengesan ion $OH^-$ (warna merah jambu).',
          },
          {
            question: 'Apakah syarat kehadiran yang wajib supaya besi berkarat?',
            answer: 'Kehadiran kedua-dua air dan oksigen.',
          },
          {
            question: 'Mengapakah pepejal agar-agar digunakan menggantikan larutan cair dalam Eksperimen 1E?',
            answer: 'Untuk memerangkap dan mengurangkan resapan warna biru dan merah jambu supaya pemerhatian lebih jelas dilihat di sekeliling logam.',
          },
        ],
        fadedProblem: {
          prompt: 'Sebatang paku besi dililit dengan dawai magnesium dan diletakkan dalam agar-agar berisi penunjuk.',
          step1GivenAndFormula: '$Mg$ lebih elektropositif daripada $Fe$ ($E^0 = -2.38\\text{ V} < -0.44\\text{ V}$).',
          studentTask: 'Tulis setengah persamaan pada magnesium dan di kawasan air/oksigen, serta nyatakan warna yang diperhatikan.',
          answerSteps: '$Mg \\to Mg^{2+} + 2e^-$ dan $O_2 + 2H_2O + 4e^- \\to 4OH^-$; warna merah jambu diperhatikan tanpa sebarang warna biru tua.',
        },
        transferQuestion: {
          question: 'Mengapakah bangkai kapal besi yang tenggelam jauh di dasar laut yang amat dalam dan sejuk berkarat jauh lebih perlahan daripada bangkai kapal di pesisir pantai?',
          answer: 'Kerana kepekatan oksigen terlarut dan suhu air di dasar laut dalam adalah sangat rendah, melambatkan tindak balas penurunan oksigen dan pengoksidaan besi.',
        },
      },
    },
  ],
};
