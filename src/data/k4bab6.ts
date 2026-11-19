import type { ChapterContent } from '../types/textbook';

export const k4bab6: ChapterContent = {
  id: 'k4-bab-6',
  subject: 'kimia',
  formLevel: 4,
  number: 6,
  title: 'Asid, Bes dan Garam',
  pageRange: 'm.s. 134–217',
  overview:
    'Bab terbesar Kimia Tingkatan 4: peranan air dalam pengionan asid/alkali, skala pH & kekuatan asid/alkali, sifat kimia, kemolaran & larutan piawai, pentitratan peneutralan, penyediaan garam terlarutkan/tak terlarutkan, tindakan haba ke atas garam & ujian gas, serta analisis kualitatif anion dan kation.',
  subtopics: [
    {
      id: 'k4-6.1',
      chapterId: 'k4-bab-6',
      code: '6.1',
      title: 'Peranan Air dalam Menunjukkan Keasidan dan Kealkalian',
      pageRef: 'm.s. 136–142',
      part1Anchor: {
        phenomenon:
          'Serbuk asid oksalik kering langsung tidak menukarkan kertas litmus biru, tetapi sebaik sahaja air dititiskan di atasnya, warna kertas bertukar merah! Mengapakah air wajib hadir?',
        chapterConnection:
          'Meletakkan definisi Arrhenius bagi asid ($H^+/H_3O^+$), kebesan asid dan alkali ($OH^-$) sebelum mengira nilai pH dalam 6.2.',
      },
      part2SacredDefinitions: [
        {
          title: 'Asid & Kebesan Asid',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Asid ialah bahan kimia yang ' },
            { text: 'mengion di dalam air untuk menghasilkan ion hidrogen, $H^+$', keyword: true },
            { text: ' (atau ion hidroksonium $H_3O^+$); ' },
            { text: 'kebesan asid ialah bilangan ion $H^+$ yang boleh dihasilkan oleh satu molekul asid', keyword: true },
            { text: ' apabila mengion di dalam air.' },
          ],
        },
        {
          title: 'Bes vs Alkali',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Bes ialah bahan yang bertindak balas dengan asid menghasilkan garam dan air sahaja; ' },
            { text: 'alkali ialah bes yang larut di dalam air dan mengion menghasilkan ion hidroksida, $OH^-$', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Asid Kering atau Asid dalam Pelarut Organik Tidak Menunjukkan Sifat Asid',
            cause: 'Asid oksalik pepejal atau gas $HCl$ dalam metilbenzena/propanon tidak bercampur air.',
            mechanism: 'Asid kekal dalam bentuk molekul kovalen neutral tanpa berlaku pengionan untuk membebaskan ion $H^+$.',
            effect: 'Tiada ion hidrogen bebas $\\to$ kertas litmus biru tidak berubah warna dan tiada gelembung gas dengan $CaCO_3$.',
          },
        ],
        tables: [
          {
            title: 'Kebesan Asid (Monoprotik, Diprotik, Triprotik)',
            headers: ['Kebesan', 'Bilangan $H^+$ per molekul', 'Contoh & Persamaan Pengionan'],
            rows: [
              ['Asid monoprotik', '$1$ ion $H^+$', '$HCl \\to H^+ + Cl^-$, $HNO_3$, $CH_3COOH$'],
              ['Asid diprotik', '$2$ ion $H^+$', '$H_2SO_4 \\to 2H^+ + SO_4^{2-}$'],
              ['Asid triprotik', '$3$ ion $H^+$', '$H_3PO_4 \\to 3H^+ + PO_4^{3-}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Pengionan Gas Ammonia ($NH_3$) dan Hidrogen Klorida ($HCl$) dalam Air',
            latex: 'HCl(g) + H_2O(ce) \\longrightarrow H_3O^+(ak) + Cl^-(ak) \\qquad|\\qquad NH_3(g) + H_2O(ce) \\rightleftharpoons NH_4^+(ak) + OH^-(ak)',
            symbols: [
              { symbol: 'H_3O^+', meaning: 'ion hidroksonium (mewakili $H^+$)', unit: '—' },
              { symbol: 'OH^-', meaning: 'ion hidroksida', unit: '—' },
            ],
            appliesWhen: 'Menerangkan mengapa air diperlukan untuk menghasilkan sifat asid atau alkali.',
            failsWhen: 'Jangan tertukar: $CuO$ dan $Fe(OH)_3$ ialah **bes** tetapi BUKAN **alkali** kerana kedua-duanya tidak larut dalam air!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 6.1 & 6.2',
            title: 'Peranan Air dalam Menunjukkan Sifat Asid dan Alkali',
            aim: 'Mengkaji peranan air bagi membolehkan asid oksalik dan alkali ($NaOH$/$NH_3$) menunjukkan sifat masing-masing.',
            inference: 'Air diperlukan supaya asid mengion menghasilkan $H^+$ dan alkali mengion menghasilkan $OH^-$.',
            hypothesis: 'Asid dan alkali hanya menunjukkan sifatnya dengan kehadiran air (menukar warna kertas litmus).',
            variables: {
              manipulated: 'Kehadiran air (pepejal kering / pelarut organik vs larutan akueus)',
              responding: 'Perubahan warna kertas litmus biru (asid) / merah (alkali)',
              fixed: 'Jenis asid/alkali & kertas litmus kering',
            },
            setupLogic: 'Uji asid oksalik kontang atau $HCl$ dalam metilbenzena menggunakan kertas litmus biru KERING dahulu, kemudian tambahkan air suling.',
            expectedResult: 'Tiada perubahan tanpa air; dengan air, litmus biru bertukar merah (asid) dan litmus merah bertukar biru (alkali).',
            conclusion: 'Kehadiran air adalah wajib untuk pengionan menghasilkan ion $H^+$ dan $OH^-$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Menerangkan Kegagalan Asid Etanoik Glasial Mengubah Litmus Kering',
          problem:
            'Asid etanoik glasial ($100\\%$ tulen) tidak menukarkan warna kertas litmus biru kering, tetapi larutan asid etanoik menukarkannya kepada merah. Jelaskan.',
          given: ['Asid etanoik glasial tiada air', 'Larutan asid etanoik mengandungi air'],
          formulaLatex: 'CH_3COOH(ak) \\rightleftharpoons CH_3COO^-(ak) + H^+(ak)',
          formulaWhy: 'Air membolehkan molekul asid etanoik mengion menghasilkan ion $H^+$.',
          substituteLatex: '\\text{Glasial: molekul neutral sahaja}',
          answer: 'Asid etanoik glasial wujud sebagai molekul neutral tanpa kehadiran ion $H^+$, maka litmus biru kekal biru. Apabila air hadir, molekul $CH_3COOH$ mengion separa menghasilkan ion hidrogen, $H^+$, yang menyebabkan sifat keasidan dan menukar litmus biru menjadi merah.',
          trapAlert: 'Pastikan guna kertas litmus **KERING** dalam eksperimen kawalan tanpa air — kertas litmus lembap sudah mempunyai air!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah ion yang bertanggungjawab terhadap sifat keasidan dan kealkalian?',
            answer: 'Ion hidrogen ($H^+$ atau $H_3O^+$) bagi asid; ion hidroksida ($OH^-$) bagi alkali.',
          },
          {
            question: 'Apakah kebesan bagi asid etanoik, $CH_3COOH$?',
            answer: 'Monoprotik (kebesan = 1), kerana hanya satu atom $H$ pada kumpulan $-COOH$ mengion menjadi $H^+$.',
          },
          {
            question: 'Adakah semua alkali merupakan bes, dan adakah semua bes merupakan alkali?',
            answer: 'Semua alkali ialah bes (yang larut dalam air), tetapi bukan semua bes ialah alkali (cth: $CuO$ tidak larut).',
          },
        ],
        fadedProblem: {
          prompt: 'Gas hidrogen klorida dilarutkan dalam dua bikar: Bikar X berisi air suling, Bikar Y berisi propanon.',
          step1GivenAndFormula: 'Dalam air: $HCl$ mengion lengkap menjadi $H^+$ dan $Cl^-$. Dalam propanon: kekal sebagai molekul $HCl$.',
          studentTask: 'Bikar manakah dapat menyalakan mentol dan menghasilkan gas dengan pita magnesium?',
          answerSteps: 'Bikar X sahaja kerana mengandungi ion $H^+$ dan $Cl^-$ bebas bergerak untuk mengkonduksikan elektrik dan bertindak balas dengan $Mg$.',
        },
        transferQuestion: {
          question: 'Mengapakah serbuk penaik (soda bikarbonat) + asid sitrik kering di dalam sebiji pil gastrik hanya membuak sebaik sahaja dimasukkan ke dalam air?',
          answer: 'Air membolehkan asid sitrik mengion menghasilkan ion $H^+$ bebas yang kemudiannya bertindak balas dengan ion karbonat/hidrogenkarbonat untuk membebaskan gas $CO_2$.',
        },
      },
    },
    {
      id: 'k4-6.2',
      chapterId: 'k4-bab-6',
      code: '6.2',
      title: 'Nilai pH',
      pageRef: 'm.s. 143–148',
      part1Anchor: {
        phenomenon:
          'Daripada nilai kepekatan sekecil $0.00001\\text{ mol dm}^{-3}$ yang sukar dibaca, ahli kimia memampatkannya kepada satu angka ringkas pada skala logaritma $0$ hingga $14$: nilai pH!',
        chapterConnection:
          'Menukar kepekatan $[H^+]$ dan $[OH^-]$ secara kuantitatif kepada pH serta menyokong perbandingan kekuatan asid dan alkali dalam 6.3.',
      },
      part2SacredDefinitions: [
        {
          title: 'Skala pH & pOH',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Nilai pH ialah ' },
            { text: 'ukuran logaritma ke atas kepekatan ion hidrogen, $[H^+]$', keyword: true },
            { text: ' dalam suatu larutan akueus.' },
          ],
          equationLatex: '\\text{pH} = -\\log[H^+], \\qquad \\text{pOH} = -\\log[OH^-], \\qquad \\text{pH} + \\text{pOH} = 14',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Hubungan Songsang antara Kepekatan $H^+$ dengan Nilai pH',
            cause: 'Kepekatan ion hidrogen $[H^+]$ meningkat ($10^{-4} \\to 10^{-1}\\text{ mol dm}^{-3}$).',
            mechanism: 'Disebabkan tanda negatif pada rumus $\\text{pH} = -\\log[H^+]$, nilai pH menurun daripada $4$ ke $1$.',
            effect: 'Semakin tinggi kepekatan ion $H^+$, semakin RENDAH nilai pH (asid lebih kuat/pekat); semakin tinggi $[OH^-]$, semakin TINGGI nilai pH.',
          },
        ],
        tables: [
          {
            title: 'Julat Skala pH & Hubungan dengan Ion',
            headers: ['Julat pH', 'Sifat Larutan', 'Perbandingan Kepekatan Ion'],
            rows: [
              ['$0 \\le \\text{pH} < 7$', 'Berasid', '$[H^+] > [OH^-]$'],
              ['$\\text{pH} = 7$', 'Neutral (air suling tulen $25\\,^\\circ\\text{C}$)', '$[H^+] = [OH^-] = 1.0 \\times 10^{-7}\\text{ mol dm}^{-3}$'],
              ['$7 < \\text{pH} \\le 14$', 'Beralkali', '$[OH^-] > [H^+]$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Rumus Mengira pH Asid & Alkali Kuat',
            latex: '\\text{pH} = -\\log[H^+] \\quad|\\quad \\text{pH} = 14 - (-\\log[OH^-])',
            symbols: [
              { symbol: '[H^+]', meaning: 'kepekatan molar ion hidrogen', unit: '$\\text{mol dm}^{-3}$' },
              { symbol: '[OH^-]', meaning: 'kepekatan molar ion hidroksida', unit: '$\\text{mol dm}^{-3}$' },
            ],
            appliesWhen: 'Mengira nilai pH larutan asid kuat monoprotik/diprotik ($H_2SO_4: [H^+] = 2M$) atau alkali kuat.',
            failsWhen: 'Perangkap asid diprotik! Bagi $0.05\\text{ mol dm}^{-3}\\ H_2SO_4$, $[H^+] = 2 \\times 0.05 = 0.1\\text{ mol dm}^{-3}$, maka $\\text{pH} = -\\log(0.1) = 1.0$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-ph-titration',
            title: 'Skala pH (0–14) dan Perubahan pH Semasa Pentitratan',
            whatItShows: 'Hubungan antara nilai pH, kepekatan relatif $[H^+]$ dan $[OH^-]$, serta titik neutral pada pH 7.',
            axisOrRule: 'Lihat bar atas untuk julat asid-neutral-alkali dan lengkung bawah untuk lonjakan pH pada takat akhir.',
          },
        ],
        experiments: [
          {
            code: 'Eksperimen 6.3 & 6.4',
            title: 'Hubungan Kepekatan Asid dan Alkali dengan Nilai pH',
            aim: 'Mengkaji hubungan antara kepekatan ion $H^+$ dan ion $OH^-$ dengan nilai pH menggunakan meter pH.',
            inference: 'Nilai pH bergantung kepada kepekatan ion $H^+$ dalam asid dan ion $OH^-$ dalam alkali.',
            hypothesis: 'Semakin tinggi kepekatan asid, semakin rendah pH; semakin tinggi kepekatan alkali, semakin tinggi pH.',
            variables: {
              manipulated: 'Kemolaran larutan asid $HCl$ / alkali $NaOH$ ($0.1, 0.01, 0.001\\text{ mol dm}^{-3}$)',
              responding: 'Bacaan nilai pH pada meter pH',
              fixed: 'Jenis asid/alkali dan suhu bilik ($25\\,^\\circ\\text{C}$)',
            },
            setupLogic: 'Bilas elektrod meter pH dengan air suling antara setiap ukuran untuk mengelakkan pencemaran kepekatan.',
            expectedResult: '$HCl$ $0.1\\text{ M} \\to \\text{pH } 1$; $0.01\\text{ M} \\to \\text{pH } 2$; $NaOH$ $0.1\\text{ M} \\to \\text{pH } 13$.',
            conclusion: 'Peningkatan $[H^+]$ menurunkan pH manakala peningkatan $[OH^-]$ menaikkan nilai pH.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira pH Bagi Alkali & Asid Diprotik',
          problem:
            'Hitung nilai pH bagi (a) larutan kalium hidroksida, $KOH\\ 0.01\\text{ mol dm}^{-3}$, dan (b) asid sulfurik, $H_2SO_4\\ 0.005\\text{ mol dm}^{-3}$.',
          given: ['$KOH \\to K^+ + OH^-$: $[OH^-] = 0.01$', '$H_2SO_4 \\to 2H^+ + SO_4^{2-}$: $[H^+] = 2 \\times 0.005 = 0.01$'],
          formulaLatex: '\\text{pOH} = -\\log[OH^-], \\quad \\text{pH} = 14 - \\text{pOH}',
          formulaWhy: 'Tentukan kepekatan sebenar $OH^-$ atau $H^+$ dahulu mengikut kebesan.',
          substituteLatex: '(a)\\ \\text{pOH} = -\\log(0.01) = 2 \\Rightarrow \\text{pH} = 14 - 2 = 12 \\quad|\\quad (b)\\ \\text{pH} = -\\log(0.01) = 2',
          answer: '(a) $\\text{pH} = 12.0$; (b) $\\text{pH} = 2.0$.',
          trapAlert: 'Jangan terus masukkan $0.01$ sebagai $[H^+]$ bagi $KOH$ (nanti dapat $\\text{pH}=2$ bagi alkali!) — sentiasa tolak daripada $14$ untuk alkali.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Jika kepekatan ion $H^+$ meningkat sebanyak 10 kali ganda, apakah perubahan nilai pH?',
            answer: 'Nilai pH menurun sebanyak $1$ unit.',
          },
          {
            question: 'Berapakah nilai $\\text{pH} + \\text{pOH}$ pada $25\\,^\\circ\\text{C}$?',
            answer: '$14$.',
          },
          {
            question: 'Mengapakah prob meter pH mesti dibilas dengan air suling sebelum setiap ukuran baharu?',
            answer: 'Untuk mengelakkan sisa larutan terdahulu mengubah kepekatan larutan seterusnya.',
          },
        ],
        fadedProblem: {
          prompt: 'Suatu larutan asid nitrik mempunyai nilai $\\text{pH} = 3$.',
          step1GivenAndFormula: '$\\text{pH} = -\\log[H^+] \\Rightarrow [H^+] = 10^{-\\text{pH}}$.',
          studentTask: 'Tentukan kemolaran larutan asid nitrik tersebut.',
          answerSteps: '$[H^+] = 10^{-3} = 0.001\\text{ mol dm}^{-3}$; kerana $HNO_3$ ialah asid kuat monoprotik, kemolarannya ialah $0.001\\text{ mol dm}^{-3}$.',
        },
        transferQuestion: {
          question: 'Adakah asid hidroklorik $0.1\\text{ mol dm}^{-3}$ dan asid etanoik $0.1\\text{ mol dm}^{-3}$ mempunyai nilai pH yang sama? Jelaskan.',
          answer: 'Tidak. Walaupun kemolaran sama, $HCl$ mengion lengkap menghasilkan $[H^+] = 0.1\\text{ M}$ ($\\text{pH}=1$), manakala $CH_3COOH$ mengion separa menghasilkan $[H^+]$ jauh lebih rendah ($\\text{pH} \\approx 2.9$).',
        },
      },
    },
    {
      id: 'k4-6.3',
      chapterId: 'k4-bab-6',
      code: '6.3',
      title: 'Kekuatan Asid dan Alkali',
      pageRef: 'm.s. 149–151',
      part1Anchor: {
        phenomenon:
          'Pada kepekatan yang sama $0.1\\text{ mol dm}^{-3}$, asid hidroklorik menunjukkan pH $1.0$ sedangkan cuka (asid etanoik) hanya pH $2.9$ — rahsianya terletak pada darjah pengionan di dalam air.',
        chapterConnection:
          'Membezakan istilah **asid kuat vs asid lemah** (darjah pengionan) daripada **asid pekat vs asid cair** (kemolaran).',
      },
      part2SacredDefinitions: [
        {
          title: 'Asid Kuat & Asid Lemah',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Asid kuat ialah asid yang ' },
            { text: 'mengion lengkap di dalam air untuk menghasilkan kepekatan ion hidrogen, $H^+$ yang tinggi', keyword: true },
            { text: '; asid lemah ialah asid yang ' },
            { text: 'mengion separa di dalam air untuk menghasilkan kepekatan ion $H^+$ yang rendah', keyword: true },
            { text: '.' },
          ],
        },
        {
          title: 'Alkali Kuat & Alkali Lemah',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Alkali kuat ($NaOH, KOH$) ' },
            { text: 'mengion lengkap di dalam air menghasilkan kepekatan ion hidroksida, $OH^-$ yang tinggi', keyword: true },
            { text: '; alkali lemah ($NH_3(ak)$) ' },
            { text: 'mengion separa menghasilkan kepekatan ion $OH^-$ yang rendah', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Nilai pH Berbeza Antara Asid Kuat & Asid Lemah pada Kemolaran Sama',
            cause: 'Asid $HCl$ mengion lengkap ($100\\%$), manakala $CH_3COOH$ hanya mengion separa (kira-kira $1\\%$, kebanyakannya kekal sebagai molekul).',
            mechanism: 'Kepekatan ion $H^+$ bebas dalam $HCl$ jauh lebih tinggi daripada dalam $CH_3COOH$ pada kemolaran sama.',
            effect: '$HCl$ mempunyai nilai pH lebih rendah dan bertindak balas lebih cergas dengan logam/karbonat.',
          },
        ],
        tables: [
          {
            title: 'Pengelasan Asid & Alkali Kuat vs Lemah KSSM',
            headers: ['Kategori', 'Darjah Pengionan & Anak Panah', 'Contoh Wajib Hafal'],
            rows: [
              ['Asid Kuat', 'Pengionan lengkap ($\\longrightarrow$)', '$HCl$, $HNO_3$, $H_2SO_4$'],
              ['Asid Lemah', 'Pengionan separa ($\\rightleftharpoons$)', '$CH_3COOH$ (asid etanoik), asid karbonik ($H_2CO_3$)'],
              ['Alkali Kuat', 'Pengionan lengkap ($\\longrightarrow$)', '$NaOH$, $KOH$'],
              ['Alkali Lemah', 'Pengionan separa ($\\rightleftharpoons$)', 'Larutan ammonia ($NH_3(ak)$)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Pengionan Lengkap vs Separa',
            latex: 'NaOH(ak) \\longrightarrow Na^+(ak) + OH^-(ak) \\qquad|\\qquad NH_3(ak) + H_2O(ce) \\rightleftharpoons NH_4^+(ak) + OH^-(ak)',
            symbols: [
              { symbol: '\\rightleftharpoons', meaning: 'tindak balas berbalik / pengionan separa', unit: '—' },
            ],
            appliesWhen: 'Membandingkan pH antara $NaOH$ ($\\approx 13$) dengan $NH_3$ ($\\approx 11$) pada kemolaran $0.1\\text{ M}$.',
            failsWhen: 'Jangan keliru antara **kuat/lemah** (darjah pengionan) dengan **pekat/cair** (bilangan mol per isi padu)! Asid lemah masih boleh menjadi pekat (cth: asid etanoik $2.0\\text{ M}$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Skema Markah Membandingkan pH Larutan $NH_3$ vs $KOH$',
          problem:
            'Larutan kalium hidroksida $0.1\\text{ mol dm}^{-3}$ mempunyai $\\text{pH} = 13$ manakala larutan ammonia $0.1\\text{ mol dm}^{-3}$ mempunyai $\\text{pH} = 11$. Jelaskan perbezaan ini.',
          given: ['Kemolaran sama ($0.1\\text{ M}$)', '$KOH$ = alkali kuat; $NH_3$ = alkali lemah'],
          formulaLatex: 'KOH \\rightarrow K^+ + OH^- \\quad\\text{vs}\\quad NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-',
          formulaWhy: 'Gunakan frasa darjah pengionan $\\to$ kepekatan ion $OH^-$ $\\to$ nilai pH.',
          substituteLatex: '[OH^-]_{KOH} > [OH^-]_{NH_3}',
          answer: '$KOH$ ialah alkali kuat yang mengion lengkap di dalam air menghasilkan kepekatan ion $OH^-$ yang tinggi, maka nilai pH lebih tinggi ($13$). $NH_3$ ialah alkali lemah yang mengion separa di dalam air menghasilkan kepekatan ion $OH^-$ yang lebih rendah, maka nilai pH lebih rendah ($11$).',
          trapAlert: 'Jangan lupa tulis perkataan **mengion lengkap** vs **mengion separa** dan kaitkan dengan **kepekatan ion $OH^-$**!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berikan dua contoh asid kuat dan satu contoh asid lemah.',
            answer: 'Asid kuat: $HCl, HNO_3$ (atau $H_2SO_4$); Asid lemah: asid etanoik ($CH_3COOH$).',
          },
          {
            question: 'Apakah perbezaan antara simbol $\\to$ dengan $\\rightleftharpoons$ dalam persamaan pengionan?',
            answer: '$\\to$ menunjukkan pengionan lengkap (bahan kuat), manakala $\\rightleftharpoons$ menunjukkan pengionan separa (bahan lemah).',
          },
          {
            question: 'Antara $0.1\\text{ M } HCl$ dan $0.1\\text{ M } CH_3COOH$, yang manakah mempunyai pH lebih tinggi?',
            answer: '$0.1\\text{ M } CH_3COOH$ (kerana $[H^+]$ lebih rendah).',
          },
        ],
        fadedProblem: {
          prompt: 'Dua tabung uji mengandungi $50\\text{ cm}^3$ asid $P\\ (0.1\\text{ M}, \\text{pH } 1)$ dan asid $Q\\ (0.1\\text{ M}, \\text{pH } 3)$. Serbuk kalsium karbonat berlebihan dimasukkan ke dalam kedua-duanya.',
          step1GivenAndFormula: 'Asid $P$ ialah asid kuat ($[H^+]$ tinggi) manakala asid $Q$ ialah asid lemah ($[H^+]$ rendah).',
          studentTask: 'Bandingkan kadar awal pembebasan gas $CO_2$ dan jumlah isi padu akhir gas $CO_2$ jika kedua-duanya asid monoprotik.',
          answerSteps: 'Kadar awal tindak balas asid $P$ lebih tinggi kerana kepekatan awal $H^+$ lebih tinggi; namun jumlah isi padu gas $CO_2$ akhirnya adalah SAMA kerana jumlah bilangan mol $H^+$ yang boleh dihasilkan adalah sama ($0.005\\text{ mol}$).',
        },
        transferQuestion: {
          question: 'Adakah asid hidroklorik cair $0.001\\text{ mol dm}^{-3}$ berubah menjadi asid lemah? Terangkan.',
          answer: 'Tidak. $HCl$ tetap merupakan asid kuat kerana $100\\%$ molekulnya masih mengion lengkap dalam air walaupun kepekatannya cair.',
        },
      },
    },
    {
      id: 'k4-6.4',
      chapterId: 'k4-bab-6',
      code: '6.4',
      title: 'Sifat-sifat Kimia Asid dan Alkali',
      pageRef: 'm.s. 152–158',
      part1Anchor: {
        phenomenon:
          'Daripada membuaknya asid ke atas kulit telur ($CaCO_3$) hinggalah bau sengit ammonia apabila baja urea/ammonium dicampur kapur — kesemua tindak balas ini mematuhi hanya 6 templat persamaan yang boleh diramal!',
        chapterConnection:
          'Menyediakan persamaan kimia asas untuk kaedah penyediaan garam dalam 6.9 dan ujian kation/anion dalam 6.11.',
      },
      part2SacredDefinitions: [
        {
          title: 'Tiga Sifat Kimia Asid & Tiga Sifat Kimia Alkali',
          category: 'Persamaan',
          verbatimSegments: [
            { text: 'Asid bertindak balas dengan: (1) ' },
            { text: 'bes $\\to$ garam + air', keyword: true },
            { text: ', (2) ' },
            { text: 'logam reaktif $\\to$ garam + gas hidrogen', keyword: true },
            { text: ', (3) ' },
            { text: 'karbonat logam $\\to$ garam + air + gas karbon dioksida', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Logam Kuprum dan Argentum Tidak Bertindak Balas dengan Asid Cair',
            cause: 'Logam seperti $Cu, Ag, Au$ terletak di bawah hidrogen dalam Siri Elektrokimia.',
            mechanism: 'Atom kuprum kurang elektropositif daripada hidrogen dan tidak dapat menyesarkan ion $H^+$ daripada larutan asid cair.',
            effect: 'Tiada gelembung gas $H_2$ terhasil apabila kuprum dimasukkan ke dalam $HCl$ atau $H_2SO_4$ cair.',
          },
        ],
        tables: [
          {
            title: 'Enam Tindak Balas Kimia Wajib Asid dan Alkali',
            headers: ['Tindak Balas', 'Templat Umum', 'Contoh Persamaan Seimbang'],
            rows: [
              ['Asid + Bes/Alkali', 'Garam + Air', '$H_2SO_4 + CuO \\to CuSO_4 + H_2O$'],
              ['Asid + Logam reaktif', 'Garam + Gas $H_2$', '$Zn + 2HCl \\to ZnCl_2 + H_2$'],
              ['Asid + Karbonat logam', 'Garam + Air + Gas $CO_2$', '$CaCO_3 + 2HNO_3 \\to Ca(NO_3)_2 + H_2O + CO_2$'],
              ['Alkali + Asid', 'Garam + Air (Peneutralan)', '$NaOH + HCl \\to NaCl + H_2O$'],
              ['Alkali + Garam ammonium (dipanaskan)', 'Garam + Air + Gas $NH_3$', '$NH_4Cl + NaOH \\xrightarrow{\\Delta} NaCl + H_2O + NH_3$'],
              ['Alkali + Larutan ion logam', 'Mendakan hidroksida logam tak larut + Kation alkali', '$CuSO_4 + 2NaOH \\to Cu(OH)_2\\downarrow + Na_2SO_4$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Ujian Gas Hasil Sifat Kimia Asid & Alkali',
            latex: 'H_2\\text{: Bunyi ``pop\'\' (kayu uji menyala)} \\quad|\\quad CO_2\\text{: Air kapur keruh} \\quad|\\quad NH_3\\text{: Litmus merah lembap} \\to \\text{biru}',
            symbols: [
              { symbol: 'H_2, CO_2, NH_3', meaning: 'tiga gas utama tindak balas asid/alkali', unit: '—' },
            ],
            appliesWhen: 'Menulis prosedur pengesahan gas dalam eksperimen sifat kimia asid & alkali.',
            failsWhen: 'Perangkap SPM: Untuk menguji gas $H_2$, guna kayu uji **MENYALA** (bukan kayu uji berbara!); untuk $NH_3$, kertas litmus merah mesti **LEMBAP**!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Menulis Persamaan & Pemerhatian Tindak Balas Garam Ammonium + Alkali',
          problem:
            'Pepejal ammonium sulfat dipanaskan bersama larutan natrium hidroksida. Tulis persamaan kimia seimbang dan nyatakan ujian pengesahan gas yang terbebas.',
          given: ['Bahan: $(NH_4)_2SO_4 + NaOH$', 'Hasil: garam + air + gas ammonia'],
          formulaLatex: '(NH_4)_2SO_4 + 2NaOH \\xrightarrow{\\Delta} Na_2SO_4 + 2H_2O + 2NH_3(g)',
          formulaWhy: 'Setiap ion $NH_4^+$ bertindak balas dengan $OH^-$ menghasilkan $NH_3 + H_2O$.',
          substituteLatex: '\\text{Persamaan ion: } NH_4^+ + OH^- \\to NH_3 + H_2O',
          answer: '$(NH_4)_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O + 2NH_3$. Ujian: dekatkan kertas litmus merah lembap ke mulut tabung uji; ia bertukar menjadi biru.',
          trapAlert: 'Jangan lupa panaskan campuran apabila menguji garam ammonium dengan alkali — gas $NH_3$ sangat larut dalam air sejuk!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah gas yang terbebas apabila magnesium bertindak balas dengan asid sulfurik cair?',
            answer: 'Gas hidrogen, $H_2$.',
          },
          {
            question: 'Tulis persamaan kimia antara kalsium karbonat dengan asid hidroklorik.',
            answer: '$CaCO_3 + 2HCl \\to CaCl_2 + H_2O + CO_2$.',
          },
          {
            question: 'Mengapakah campuran larutan garam $Cu^{2+}$ dengan $NaOH$ menghasilkan mendakan biru?',
            answer: 'Terbentuk mendakan kuprum(II) hidroksida, $Cu(OH)_2$, yang tidak larut dalam air.',
          },
        ],
        fadedProblem: {
          prompt: 'Serbuk kuprum(II) karbonat bertindak balas lengkap dengan asid nitrik cair.',
          step1GivenAndFormula: '$CuCO_3(p) + 2HNO_3(ak) \\to Cu(NO_3)_2(ak) + H_2O(ce) + CO_2(g)$.',
          studentTask: 'Nyatakan dua pemerhatian yang dapat dilihat sepanjang tindak balas ini.',
          answerSteps: 'Pembuakan/gelembung gas tidak berwarna terbebas (mengeruhkan air kapur) dan serbuk hijau $CuCO_3$ larut membentuk larutan berwarna biru.',
        },
        transferQuestion: {
          question: 'Seorang pekebun menabur baja ammonium nitrat tidak lama selepas menabur kapur tohor ($CaO$) ke atas tanah basah. Mengapakah tindakan ini membazirkan nutrien baja?',
          answer: '$CaO$ dalam tanah basah membentuk alkali $Ca(OH)_2$ yang bertindak balas dengan ion $NH_4^+$ membebaskan gas ammonia ($NH_3$) ke udara, mengurangkan kandungan nitrogen dalam tanah.',
        },
      },
    },
    {
      id: 'k4-6.5',
      chapterId: 'k4-bab-6',
      code: '6.5',
      title: 'Kepekatan Larutan Akueus',
      pageRef: 'm.s. 158–161',
      part1Anchor: {
        phenomenon:
          'Dalam makmal kimia, "pekat" atau "cair" tidak cukup tepat — ahli kimia menggunakan dua unit kuantitatif iaitu $\\text{g dm}^{-3}$ dan kemolaran ($\\text{mol dm}^{-3}$) bagi mengira bilangan mol sebenar ion dalam bikar.',
        chapterConnection:
          'Menghubungkan isi padu larutan ($\\text{cm}^3 / \\text{dm}^3$) terus kepada bilangan mol ($n$) untuk penyediaan larutan piawai dan pentitratan.',
      },
      part2SacredDefinitions: [
        {
          title: 'Kepekatan ($\\text{g dm}^{-3}$) & Kemolaran ($\\text{mol dm}^{-3}$ / M)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Kepekatan ialah ' },
            { text: 'jisim zat terlarut dalam gram per $1\\text{ dm}^3$ larutan', keyword: true },
            { text: '; kemolaran ialah ' },
            { text: 'bilangan mol zat terlarut dalam $1\\text{ dm}^3$ larutan', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Penukaran Unit antara $\\text{g dm}^{-3}$ dengan $\\text{mol dm}^{-3}$',
            cause: 'Jisim molar mengaitkan gram dengan mol ($n = \\frac{m}{\\text{jisim molar}}$).',
            mechanism: 'Untuk menukar $\\text{g dm}^{-3} \\to \\text{mol dm}^{-3}$, bahagi dengan jisim molar; untuk menukar $\\text{mol dm}^{-3} \\to \\text{g dm}^{-3}$, darab dengan jisim molar.',
            effect: 'Membolehkan penentuan tepat jisim pepejal yang perlu ditimbang untuk mendapatkan kemolaran tertentu.',
          },
        ],
        tables: [
          {
            title: 'Rumus Kuantitatif Larutan Akueus',
            headers: ['Kuantiti', 'Formula', 'Unit'],
            rows: [
              ['Kepekatan jisim', '$\\frac{\\text{Jisim zat terlarut (g)}}{\\text{Isi padu larutan (dm}^3\\text{)}}$', '$\\text{g dm}^{-3}$'],
              ['Kemolaran ($M$)', '$\\frac{\\text{Bilangan mol zat terlarut (mol)}}{\\text{Isi padu larutan (dm}^3\\text{)}}$', '$\\text{mol dm}^{-3}$ atau $\\text{M}$'],
              ['Bilangan mol daripada kemolaran', '$n = \\frac{MV}{1000}$ (apabila $V$ dalam $\\text{cm}^3$)', '$\\text{mol}$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penukaran Kemolaran ↔ Kepekatan & Pengiraan Mol Larutan',
            latex: '\\text{Kemolaran (mol dm}^{-3}\\text{)} = \\frac{\\text{Kepekatan (g dm}^{-3}\\text{)}}{\\text{Jisim molar (g mol}^{-1}\\text{)}} \\qquad|\\qquad n = \\frac{MV}{1000}',
            symbols: [
              { symbol: 'M', meaning: 'kemolaran larutan', unit: '$\\text{mol dm}^{-3}$' },
              { symbol: 'V', meaning: 'isi padu larutan dalam $\\text{cm}^3$', unit: '$\\text{cm}^3$' },
            ],
            appliesWhen: 'Mengira bilangan mol zat terlarut dalam larutan akueus.',
            failsWhen: 'Perangkap unit isi padu: $1\\text{ dm}^3 = 1000\\text{ cm}^3$! Jika $V$ sudah dalam $\\text{dm}^3$, JANGAN bahagi dengan $1000$ lagi ($n = MV$).',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira Kemolaran dan Jisim Zat Terlarut',
          problem:
            'Hitung kemolaran larutan yang terhasil apabila $4.0\\text{ g}$ natrium hidroksida, $NaOH$ dilarutkan dalam air suling untuk membentuk $250\\text{ cm}^3$ larutan. [JAR: $H=1, O=16, Na=23$]',
          given: ['$m(NaOH) = 4.0\\text{ g}$, $V = 250\\text{ cm}^3 = 0.25\\text{ dm}^3$', 'Jisim molar $NaOH = 23+16+1 = 40\\text{ g mol}^{-1}$'],
          formulaLatex: 'n = \\frac{m}{\\text{Jisim molar}}, \\qquad M = \\frac{n}{V(\\text{dm}^3)}',
          formulaWhy: 'Cari mol $NaOH$ dahulu, kemudian bahagikan dengan isi padu dalam $\\text{dm}^3$.',
          substituteLatex: 'n = \\frac{4.0}{40} = 0.10\\text{ mol} \\Rightarrow M = \\frac{0.10}{0.25}',
          answer: 'Kemolaran $= 0.40\\text{ mol dm}^{-3}$ (atau kepekatan $= 16\\text{ g dm}^{-3}$).',
          trapAlert: 'Sentiasa bahagi isi padu dalam $\\text{cm}^3$ dengan $1000$ untuk menukar ke $\\text{dm}^3$ sebelum membahagi.',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Berapakah bilangan mol $HCl$ dalam $50\\text{ cm}^3$ larutan $HCl\\ 2.0\\text{ mol dm}^{-3}$?',
            answer: '$n = \\frac{2.0 \\times 50}{1000} = 0.10\\text{ mol}$.',
          },
          {
            question: 'Tukar kepekatan $21.2\\text{ g dm}^{-3}$ larutan $Na_2CO_3$ kepada kemolaran. [JFR $Na_2CO_3 = 106$]',
            answer: '$\\frac{21.2}{106} = 0.20\\text{ mol dm}^{-3}$.',
          },
          {
            question: 'Berapakah $\\text{cm}^3$ dalam $0.5\\text{ dm}^3$?',
            answer: '$500\\text{ cm}^3$.',
          },
        ],
        fadedProblem: {
          prompt: 'Hitung jisim pepejal kalium karbonat, $K_2CO_3$ yang diperlukan untuk menyediakan $500\\text{ cm}^3$ larutan $0.2\\text{ mol dm}^{-3}$. [JFR $K_2CO_3 = 138$]',
          step1GivenAndFormula: '$n = \\frac{MV}{1000} = \\frac{0.2 \\times 500}{1000} = 0.1\\text{ mol}$.',
          studentTask: 'Hitung jisim $K_2CO_3$ yang perlu ditimbang.',
          answerSteps: 'Jisim $= n \\times \\text{JFR} = 0.1 \\times 138 = 13.8\\text{ g}$.',
        },
        transferQuestion: {
          question: 'Apakah perubahan kepada kemolaran larutan jika lebih banyak air suling ditambah kepada suatu larutan garam tanpa menambah garam?',
          answer: 'Kemolaran menurun kerana bilangan mol zat terlarut kekal tetap manakala jumlah isi padu larutan meningkat ($M \\propto 1/V$).',
        },
      },
    },
    {
      id: 'k4-6.6',
      chapterId: 'k4-bab-6',
      code: '6.6',
      title: 'Larutan Piawai',
      pageRef: 'm.s. 162–167',
      part1Anchor: {
        phenomenon:
          'Dalam pentitratan hospital atau makmal forensik, kepekatan larutan rujukan mesti tepat ke beberapa titik perpuluhan — itulah sebabnya kelalang volumetrik berleher sempit (bukan bikar!) digunakan untuk menyediakannya.',
        chapterConnection:
          'Mempelajari dua kaedah rasmi penyediaan larutan piawai: daripada pepejal tulen dan kaedah pencairan ($M_1V_1 = M_2V_2$).',
      },
      part2SacredDefinitions: [
        {
          title: 'Larutan Piawai',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Larutan piawai ialah larutan yang ' },
            { text: 'kepekatannya diketahui dengan tepat', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa Kelalang Volumetrik (Bukan Bikar atau Silinder Penyukat) Digunakan',
            cause: 'Leher kelalang volumetrik sangat sempit dan mempunyai satu tanda senggatan tunggal yang dikalibrasi jitu.',
            mechanism: 'Sebarang perubahan kecil isi padu kelihatan jelas pada meniskus, mengurangkan ralat pengukuran isi padu akhir larutan.',
            effect: 'Kepekatan larutan piawai yang disediakan adalah amat jitu.',
          },
        ],
        tables: [
          {
            title: 'Dua Kaedah Menyediakan Larutan Piawai',
            headers: ['Kaedah', 'Langkah Kritikal Makmal', 'Alat Jitu Utama'],
            rows: [
              ['1. Daripada pepejal tulen (cth: $Na_2CO_3$, asid oksalik)', 'Timbang jisim tepat $\\to$ Larut dlm bikar $\\to$ Pindah ke kelalang volumetrik + **bilas bikar & corong turas 2–3 kali dengan air suling** $\\to$ Tambah air suling hingga tanda senggatan (penitis untuk titis akhir) $\\to$ Tutup & telangkupkan beberapa kali', 'Neraca elektronik + Kelalang volumetrik'],
              ['2. Kaedah pencairan ($M_1V_1 = M_2V_2$)', 'Kira $V_1$ larutan stok $\\to$ Sedut $V_1$ dengan **pipet** $\\to$ Pindah ke kelalang volumetrik $\\to$ Tambah air suling hingga tanda senggatan & telangkupkan hingga sebati', 'Pipet + Kelalang volumetrik'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Pencairan Larutan Piawai',
            latex: 'M_1V_1 = M_2V_2 \\quad (\\text{Mol zat terlarut sebelum pencairan} = \\text{Mol selepas pencairan})',
            symbols: [
              { symbol: 'M_1, V_1', meaning: 'kemolaran & isi padu larutan stok diambil', unit: '$\\text{M},\\;\\text{cm}^3$' },
              { symbol: 'M_2, V_2', meaning: 'kemolaran & jumlah isi padu akhir larutan cair', unit: '$\\text{M},\\;\\text{cm}^3$' },
            ],
            appliesWhen: 'Menyediakan larutan cair daripada larutan stok yang lebih pekat.',
            failsWhen: 'Ingat: $V_2$ ialah **JUMLAH isi padu larutan akhir** (saiz kelalang volumetrik), BUKAN isi padu air yang ditambah! Isi padu air ditambah $= V_2 - V_1$.',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengira Isi Padu Stok & Air untuk Pencairan',
          problem:
            'Anda dikehendaki menyediakan $250\\text{ cm}^3$ larutan asid nitrik $0.20\\text{ mol dm}^{-3}$ daripada larutan stok $2.0\\text{ mol dm}^{-3}$. Hitung isi padu larutan stok $V_1$ yang perlu dipipetkan dan isi padu air suling yang ditambah.',
          given: ['$M_1 = 2.0$, $M_2 = 0.20$, $V_2 = 250\\text{ cm}^3$'],
          formulaLatex: 'M_1V_1 = M_2V_2',
          formulaWhy: 'Bilangan mol asid tidak berubah apabila air ditambah.',
          substituteLatex: '2.0 \\times V_1 = 0.20 \\times 250 \\Rightarrow V_1 = \\frac{50}{2.0} = 25.0\\text{ cm}^3',
          answer: 'Pipetkan **$25.0\\text{ cm}^3$** larutan stok ke dalam kelalang volumetrik $250\\text{ cm}^3$ (bersamaan tambah $225.0\\text{ cm}^3$ air suling sehingga tanda senggatan).',
          trapAlert: 'Mengapa pepejal $NaOH$ TIDAK sesuai dijadikan piawai primer dengan menimbang terus? Kerana $NaOH$ bersifat **higroskopik** (menyerap wap air udara) dan menyerap gas $CO_2$ udara, menjadikan jisim tertimbang tidak tepat!',
        },
      ],
      part5DecisionTable: {
        title: 'Langkah Kritis Penyediaan Larutan Piawai SPM',
        rows: [
          {
            designChoice: 'Membilas bikar dan corong turas dengan air suling ke dalam kelalang volumetrik',
            scientificReason: 'Memastikan semua sisa pepejal/larutan zat terlarut dipindahkan sepenuhnya tanpa kehilangan mol.',
          },
          {
            designChoice: 'Menggunakan penitis apabila aras air hampir ke tanda senggatan dan melihat meniskus pada aras mata',
            scientificReason: 'Mengelakkan penambahan air melebihi tanda senggatan dan menghapuskan ralat paralaks.',
          },
          {
            designChoice: 'Menutup dengan penyumbat lalu menelangkupkan kelalang volumetrik beberapa kali',
            scientificReason: 'Memastikan larutan bercampur sekata menjadi homogen.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Namakan dua radas pengukur isi padu berketepatan tinggi dalam kaedah pencairan.',
            answer: 'Pipet (menyukat $V_1$) dan kelalang volumetrik (menyediakan $V_2$).',
          },
          {
            question: 'Mengapakah bikar asal perlu dibilas dengan air suling dan dituang ke dalam kelalang volumetrik?',
            answer: 'Supaya tiada zat terlarut yang tertinggal pada dinding bikar agar kemolaran larutan akhir kekal tepat.',
          },
          {
            question: 'Mengapakah pepejal $NaOH$ tidak sesuai untuk menyediakan larutan piawai secara terus?',
            answer: 'Kerana $NaOH$ menyerap lembapan udara (higroskopik) dan karbon dioksida, mengubah jisim sebenarnya.',
          },
        ],
        fadedProblem: {
          prompt: '$50\\text{ cm}^3$ larutan $CuSO_4\\ 1.5\\text{ mol dm}^{-3}$ dicairkan dengan menambahkan $200\\text{ cm}^3$ air suling.',
          step1GivenAndFormula: 'Jumlah isi padu akhir $V_2 = 50 + 200 = 250\\text{ cm}^3$; $M_1V_1 = M_2V_2$.',
          studentTask: 'Hitung kemolaran akhir larutan $M_2$.',
          answerSteps: '$1.5 \\times 50 = M_2 \\times 250 \\Rightarrow M_2 = \\frac{75}{250} = 0.30\\text{ mol dm}^{-3}$.',
        },
        transferQuestion: {
          question: 'Apakah yang mesti anda lakukan jika terlanjur menambah air suling melepasi tanda senggatan kelalang volumetrik?',
          answer: 'Larutan tersebut mesti dibuang dan penyediaan perlu diulang semula dari awal — jangan sekali-kali menyedut keluar air berlebihan kerana sebahagian zat terlarut yang telah bercampur akan turut tersingkir!',
        },
      },
    },
    {
      id: 'k4-6.7',
      chapterId: 'k4-bab-6',
      code: '6.7',
      title: 'Peneutralan',
      pageRef: 'm.s. 167–174',
      part1Anchor: {
        phenomenon:
          'Ubat gigi beralkali meneutralkan asid mulut, sengat tebuan beralkali diredakan dengan cuka, manakala satu titik asid berlebihan menukarkan kelalang merah jambu menjadi jernih sekelip mata di makmal pentitratan!',
        chapterConnection:
          'Menyatukan stoikiometri larutan dengan teknik pentitratan buret-pipet yang merupakan jantung pengiraan Kertas 2 dan Kertas 3.',
      },
      part2SacredDefinitions: [
        {
          title: 'Peneutralan',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Peneutralan ialah tindak balas antara ' },
            { text: 'asid dan alkali (atau bes) untuk menghasilkan garam dan air sahaja', keyword: true },
            { text: '.' },
          ],
          equationLatex: 'H^+(ak) + OH^-(ak) \\longrightarrow H_2O(ce)',
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mekanisme Takat Akhir dalam Pentitratan Asid-Alkali',
            cause: 'Asid dari buret dititiskan perlahan ke dalam alkali berpetunjuk (cth: fenolftalein merah jambu) di kelalang kon.',
            mechanism: 'Ion $H^+$ bergabung dengan ion $OH^-$ membentuk molekul air neutral sehingga kesemua ion $OH^-$ habis bertindak balas tepat pada takat akhir.',
            effect: 'Satu titik tambahan seterusnya menyebabkan petunjuk berubah warna secara kekal (merah jambu $\\to$ tidak berwarna), menandakan isi padu tepat $V_a$.',
          },
        ],
        tables: [
          {
            title: 'Perubahan Warna Petunjuk Asid-Alkali Utama',
            headers: ['Petunjuk', 'Warna dalam Alkali', 'Warna pada Takat Akhir (Neutral)', 'Warna dalam Asid'],
            rows: [
              ['Fenolftalein', 'Merah jambu', 'Tidak berwarna (pudar serta-merta)', 'Tidak berwarna'],
              ['Metil jingga', 'Kuning', 'Jingga', 'Merah'],
            ],
          },
          {
            title: 'Aplikasi Peneutralan Harian',
            headers: ['Bidang', 'Situasi & Bahan Digunakan'],
            rows: [
              ['Perubatan', 'Tablet antasid ($Mg(OH)_2$/$Al(OH)_3$) meneutralkan asid hidroklorik berlebihan dalam perut; ubat gigi meneutralkan asid plak gigi'],
              ['Pertanian', 'Kapur mati ($Ca(OH)_2$) atau batu kapur ($CaCO_3$) meneutralkan tanah berasid'],
              ['Rawatan sengatan', 'Sengat lebah berasid dirawat dengan baking soda ($NaHCO_3$); sengat tebuan beralkali dirawat dengan cuka'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Formula Pentitratan Peneutralan',
            latex: '\\frac{M_a V_a}{M_b V_b} = \\frac{a}{b}',
            symbols: [
              { symbol: 'M_a, V_a', meaning: 'kemolaran & isi padu asid', unit: '$\\text{M}, \\text{cm}^3$' },
              { symbol: 'M_b, V_b', meaning: 'kemolaran & isi padu alkali', unit: '$\\text{M}, \\text{cm}^3$' },
              { symbol: 'a : b', meaning: 'nisbah pekali mol asid : alkali daripada persamaan kimia seimbang', unit: 'mol' },
            ],
            appliesWhen: 'Sebarang tindak balas peneutralan lengkap antara asid dan alkali.',
            failsWhen: 'Perangkap terbesar SPM: Menganggap $a/b = 1$ bagi semua soalan! Bagi $H_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O$, nisbah $a/b = 1/2$!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-ph-titration',
            title: 'Lengkung Pentitratan & Perubahan Warna Petunjuk',
            whatItShows: 'Penurunan pH mendadak melepasi pH 7 tepat pada takat akhir pentitratan.',
            axisOrRule: 'Semak kotak kanan untuk formula $\\frac{M_aV_a}{M_bV_b}=\\frac{a}{b}$ dan perubahan warna fenolftalein serta metil jingga.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Pengiraan Pentitratan Asid Diprotik ($H_2SO_4$) dengan $KOH$',
          problem:
            '$25.0\\text{ cm}^3$ larutan $KOH\\ 0.20\\text{ mol dm}^{-3}$ dititratkan dengan asid sulfurik, $H_2SO_4$. Bacaan purata buret ialah $20.0\\text{ cm}^3$. Hitung kemolaran asid sulfurik tersebut.',
          given: ['$V_b = 25.0\\text{ cm}^3$, $M_b = 0.20$', '$V_a = 20.0\\text{ cm}^3$'],
          formulaLatex: 'H_2SO_4 + 2KOH \\longrightarrow K_2SO_4 + 2H_2O \\quad\\Longrightarrow\\quad \\frac{M_a V_a}{M_b V_b} = \\frac{1}{2}',
          formulaWhy: 'Tulis persamaan kimia seimbang dahulu untuk mendapatkan nisbah tepat $a=1, b=2$.',
          substituteLatex: '\\frac{M_a (20.0)}{0.20 (25.0)} = \\frac{1}{2} \\Rightarrow M_a = \\frac{5.0}{40.0}',
          answer: 'Kemolaran $H_2SO_4 = 0.125\\text{ mol dm}^{-3}$.',
          trapAlert: 'Dalam pentitratan, pastikan kelalang kon dibilas dengan **air suling sahaja** (bukan alkali), manakala buret dibilas dahulu dengan sedikit **asid** yang bakal diisi!',
        },
      ],
      part5DecisionTable: {
        title: 'Prosedur Jitu Teknik Pentitratan Makmal (Kertas 3)',
        rows: [
          {
            designChoice: 'Meletakkan jubin putih di bawah kelalang kon',
            scientificReason: 'Menjadikan perubahan warna petunjuk pada takat akhir lebih jelas dan mudah dikesan.',
          },
          {
            designChoice: 'Membilas dinding dalaman kelalang kon dengan sedikit air suling menghampiri takat akhir',
            scientificReason: 'Memastikan titisan asid yang terpercik pada dinding turun bertindak balas tanpa mengubah bilangan mol asal alkali.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Tulis persamaan ion bagi SEMUA tindak balas peneutralan antara asid kuat dan alkali kuat.',
            answer: '$H^+(ak) + OH^-(ak) \\to H_2O(ce)$.',
          },
          {
            question: 'Apakah perubahan warna metil jingga apabila asid ditambahkan ke dalam alkali sehingga takat akhir?',
            answer: 'Kuning kepada jingga.',
          },
          {
            question: 'Adakah penambahan air suling ke dalam kelalang kon mengubah isi padu asid buret yang diperlukan untuk meneutralkan $25\\text{ cm}^3$ $NaOH$?',
            answer: 'Tidak, kerana bilangan mol $NaOH$ di dalam kelalang kon kekal sama.',
          },
        ],
        fadedProblem: {
          prompt: '$25.0\\text{ cm}^3$ larutan $NaOH\\ 0.1\\text{ M}$ dineutralkan oleh $12.5\\text{ cm}^3$ asid $H_2X$.',
          step1GivenAndFormula: '$H_2X + 2NaOH \\to Na_2X + 2H_2O \\Rightarrow \\frac{a}{b} = \\frac{1}{2}$.',
          studentTask: 'Hitung kemolaran asid $H_2X$.',
          answerSteps: '$\\frac{M_a(12.5)}{0.1(25.0)} = \\frac{1}{2} \\Rightarrow M_a = \\frac{2.5}{25.0} = 0.10\\text{ mol dm}^{-3}$.',
        },
        transferQuestion: {
          question: 'Mengapakah serbuk kalsium karbonat digunakan untuk merawat tasik berasid tetapi bukan natrium hidroksida pekat?',
          answer: '$CaCO_3$ tidak larut berlebihan dan hanya bertindak balas apabila ada asid (tidak menjadikan tasik terlalu beralkali), manakala $NaOH$ yang terlalu beralkali dan mengakis akan membahayakan hidupan akuatik.',
        },
      },
    },
    {
      id: 'k4-6.8',
      chapterId: 'k4-bab-6',
      code: '6.8',
      title: 'Garam, Hablur dan Kegunaan dalam Kehidupan Harian',
      pageRef: 'm.s. 174–178',
      part1Anchor: {
        phenomenon:
          'Selain natrium klorida di dapur, plaster gipsum ($CaSO_4$) membalut tulang patah, natrium nitrit mengawet daging, dan garam Epsom ($MgSO_4$) merawat kesakitan otot — apakah maksud sebenar "garam" dalam kimia?',
        chapterConnection:
          'Mentakrifkan garam sebagai hasil penggantian $H^+$ asid oleh ion logam/$NH_4^+$, serta memperkenalkan ciri fizikal hablur sebelum penyediaannya dalam 6.9.',
      },
      part2SacredDefinitions: [
        {
          title: 'Takrif Garam',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Garam ialah ' },
            { text: 'sebatian ion yang terbentuk apabila ion hidrogen, $H^+$ daripada asid digantikan oleh ion logam atau ion ammonium, $NH_4^+$', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Bagaimana Garam Berbeza Dihasilkan oleh Pasangan Asid + Kation',
            cause: 'Asid membekalkan bahagian anion garam ($Cl^-$ daripada $HCl$, $SO_4^{2-}$ daripada $H_2SO_4$, $NO_3^-$ daripada $HNO_3$).',
            mechanism: 'Ion $H^+$ asid disingkirkan dan diganti dengan kation logam atau $NH_4^+$.',
            effect: 'Terbentuk garam klorida, sulfat, nitrat atau etanoat dengan bentuk geometri hablur yang tetap.',
          },
        ],
        tables: [
          {
            title: 'Lima Ciri Fizikal Hablur Garam & Kegunaan Garam Harian',
            headers: ['Aspek', 'Fakta Penting KSSM'],
            rows: [
              ['Ciri fizikal hablur', '1. Bentuk geometri tertentu (kubus, heksagon, rombus) · 2. Permukaan rata · 3. Sisi lurus & bucu tajam · 4. Sudut tetap antara dua muka bersebelahan · 5. Hablur garam sama boleh berbeza saiz tetapi bentuk geometri tetap sama'],
              ['Pertanian', 'Ammonium nitrat ($NH_4NO_3$) & ammonium sulfat sebagai baja; kuprum(II) sulfat ($CuSO_4$) sebagai racun kulat'],
              ['Perubatan', 'Kalsium sulfat ($CaSO_4$, plaster Paris) membalut tulang patah; barium sulfat ($BaSO_4$) hidangan kontras sinar-X usus; garam Epsom ($MgSO_4$)'],
              ['Makanan & Pengawetan', 'Natrium klorida ($NaCl$) perisa & pengawet ikan; natrium benzoat (sos); natrium nitrit (daging proses)'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Anion Garam Mengikut Asid Induk',
            latex: 'HCl \\to Cl^- \\quad|\\quad H_2SO_4 \\to SO_4^{2-} \\quad|\\quad HNO_3 \\to NO_3^- \\quad|\\quad CH_3COOH \\to CH_3COO^-',
            symbols: [
              { symbol: 'Cl^-, SO_4^{2-}, NO_3^-', meaning: 'radikal asid / anion garam', unit: '—' },
            ],
            appliesWhen: 'Memilih asid yang tepat untuk menyediakan suatu garam.',
            failsWhen: 'Jangan tertukar: $NaOH$ dan $CuO$ BUKAN garam kerana anionnya ialah $OH^-$ dan $O^{2-}$ (ia adalah bes/oksida)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mengenal Pasti Garam vs Bukan Garam & Faktor Saiz Hablur',
          problem:
            'Antara $CaO, Mg(NO_3)_2, NH_4Cl,$ dan $KOH$, yang manakah garam? Dan bagaimana membentuk hablur $CuSO_4$ yang lebih besar?',
          given: ['Garam terbentuk daripada asid apabila $H^+$ diganti oleh kation logam/$NH_4^+$'],
          formulaLatex: '\\text{Penyejukan perlahan} \\Rightarrow \\text{Hablur lebih besar}',
          formulaWhy: 'Penyejukan perlahan memberi lebih masa bagi ion menyusun diri secara teratur pada kekisi hablur.',
          substituteLatex: '\\text{Garam: } Mg(NO_3)_2 \\text{ dan } NH_4Cl',
          answer: '$Mg(NO_3)_2$ dan $NH_4Cl$ ialah garam. Hablur bersaiz lebih besar diperoleh dengan **menyejukkan larutan tepu secara perlahan-lahan**.',
          trapAlert: 'Penghabluran terlalu cepat (direndam ais) menghasilkan hablur yang kecil dan halus, manakala penyejukan perlahan pada suhu bilik menghasilkan hablur yang besar!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Mengapakah $Cu(OH)_2$ bukan sejenis garam?',
            answer: 'Kerana $Cu(OH)_2$ ialah bes (oksida/hidroksida logam), bukan hasil penggantian ion $H^+$ daripada suatu asid.',
          },
          {
            question: 'Apakah perbezaan antara dua hablur $CuSO_4$ yang satu besar dan satu kecil?',
            answer: 'Saiznya berbeza tetapi kedua-duanya mempunyai bentuk geometri dan sudut antara muka yang sama.',
          },
          {
            question: 'Namakan garam yang digunakan dalam sinar-X saluran pencernaan dan plaster tulang patah.',
            answer: 'Barium sulfat ($BaSO_4$) untuk sinar-X; kalsium sulfat ($CaSO_4$) untuk plaster Paris.',
          },
        ],
        fadedProblem: {
          prompt: 'Anda ingin menyediakan garam kalium sulfat dan ammonium nitrat di makmal.',
          step1GivenAndFormula: 'Anion sulfat ($SO_4^{2-}$) daripada $H_2SO_4$; anion nitrat ($NO_3^-$) daripada $HNO_3$.',
          studentTask: 'Namakan pasangan asid dan alkali yang diperlukan untuk menyediakan kedua-dua garam tersebut.',
          answerSteps: 'Kalium sulfat: $H_2SO_4 + KOH$; Ammonium nitrat: $HNO_3 + NH_3(ak)$.',
        },
        transferQuestion: {
          question: 'Mengapakah barium sulfat ($BaSO_4$) selamat diminum oleh pesakit untuk ujian sinar-X usus walaupun ion $Ba^{2+}$ sebenarnya sangat beracun?',
          answer: 'Kerana barium sulfat langsung tidak larut di dalam air mahupun asid perut, maka ia tidak mengion membebaskan ion $Ba^{2+}$ toksik ke dalam aliran darah.',
        },
      },
    },
    {
      id: 'k4-6.9',
      chapterId: 'k4-bab-6',
      code: '6.9',
      title: 'Penyediaan Garam',
      pageRef: 'm.s. 178–190',
      part1Anchor: {
        phenomenon:
          'Bolehkah anda menyediakan kuprum(II) sulfat dengan melarutkan serbuk kuprum ke dalam asid sulfurik? Tidak — kuprum langsung tidak bertindak balas dengan $H_2SO_4$! Memilih kaedah penyediaan garam yang betul bergantung kepada keterlarutan garam dan kereaktifan bahan.',
        chapterConnection:
          'Menguasai Jadual Keterlarutan Garam (**NO ANaK**, **PBC** sulfat, **HPA** klorida) untuk memilih salah satu daripada 3 laluan sintesis garam SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Jadual Keterlarutan Garam KSSM',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Semua garam ' },
            { text: 'Nitrat ($NO_3^-$), Ammonium ($NH_4^+$), Natrium ($Na^+$) dan Kalium ($K^+$) [NO ANaK] adalah LARUT', keyword: true },
            { text: '; garam sulfat larut kecuali ' },
            { text: '$PbSO_4, BaSO_4, CaSO_4$ [PBC]', keyword: true },
            { text: '; garam klorida larut kecuali ' },
            { text: '$HgCl_2, PbCl_2, AgCl$ [HPA]', keyword: true },
            { text: '; semua karbonat tak larut kecuali garam ANaK.' },
          ],
        },
        {
          title: 'Tindak Balas Penguraian Ganda Dua (Pemendakan)',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Garam tak terlarutkan disediakan melalui tindak balas ' },
            { text: 'penguraian ganda dua', keyword: true },
            { text: ' dengan mencampurkan ' },
            { text: 'dua larutan garam terlarutkan yang masing-masing membekalkan kation dan anion garam tak larut tersebut', keyword: true },
            { text: '.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Carta Keputusan 3 Laluan Penyediaan Garam Tulen',
            cause: 'Kenal pasti keterlarutan garam sasaran terlebih dahulu.',
            mechanism: '1. Garam terlarutkan **ANaK** ($NH_4^+, Na^+, K^+$): **Kaedah Pentitratan** (asid + alkali). 2. Garam terlarutkan **bukan ANaK** ($ZnSO_4, Cu(NO_3)_2$): **Tindak balas asid + logam/oksida/karbonat pepejal berlebihan** lalu turas. 3. Garam **tak terlarutkan** ($PbSO_4, AgCl, BaSO_4$): **Penguraian ganda dua**.',
            effect: 'Hablur garam tulen kering diperoleh tanpa bahan pencemar.',
          },
        ],
        tables: [
          {
            title: 'Tiga Kaedah Penyediaan Garam & Langkah Penulenan',
            headers: ['Jenis Garam Sasaran', 'Bahan Digunakan', 'Langkah Kritikal Penulenan'],
            rows: [
              ['Terlarutkan **ANaK** (cth: $NaCl, KNO_3, (NH_4)_2SO_4$)', 'Asid + Alkali (Pentitratan)', 'Titrat dengan penunjuk untuk dapatkan $V_a$ tepat $\\to$ Ulang campur $V_a + V_b$ **tanpa penunjuk** $\\to$ Sejatkan hingga tepu $\\to$ Sejukkan $\\to$ Turas & keringkan hablur'],
              ['Terlarutkan **bukan ANaK** (cth: $CuSO_4, MgCl_2, Zn(NO_3)_2$)', 'Asid + Pepejal oksida logam / karbonat logam / logam reaktif berlebihan', 'Tambah pepejal **sedikit demi sedikit hingga berlebihan** (supaya semua asid habis) $\\to$ **Turas** buang pepejal berlebihan $\\to$ Sejat hasil turasan hingga tepu $\\to$ Sejuk $\\to$ Turas & tekan antara kertas turas'],
              ['**Tak Terlarutkan** (cth: $PbI_2, BaSO_4, AgCl, CaCO_3$)', 'Dua larutan garam larut (selalunya garam nitrat + garam natrium/kalium)', 'Campur kedua-dua larutan $\\to$ Kacau $\\to$ **Turas** mendakan $\\to$ **Bilas baki mendakan dengan air suling** untuk singkir ion bendasing $\\to$ Keringkan antara kertas turas'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Penghabluran Semula & Persamaan Ion Garam Tak Larut',
            latex: 'Pb^{2+}(ak) + 2I^-(ak) \\longrightarrow PbI_2(p\\text{ kuning}) \\qquad|\\qquad Ag^+(ak) + Cl^-(ak) \\longrightarrow AgCl(p\\text{ putih})',
            symbols: [
              { symbol: 'PbCl_2, PbI_2', meaning: 'tak larut dalam air sejuk, tetapi LARUT dalam air panas!', unit: '—' },
            ],
            appliesWhen: 'Menulis persamaan ion bagi kaedah penguraian ganda dua atau Eksperimen 6.6 (Kaedah Perubahan Berterusan).',
            failsWhen: 'Perangkap SPM besar: Jangan tulis $Cu + H_2SO_4 \\to CuSO_4 + H_2$ (tidak berlaku!) atau $Na + HCl$ (berbahaya/meletup!) — guna **$CuO$ / $CuCO_3$** untuk garam kuprum dan **pentitratan** untuk garam ANaK!',
          },
        ],
        diagrams: [],
        experiments: [
          {
            code: 'Eksperimen 6.6',
            title: 'Menentukan Persamaan Ion Pembentukan Plumbum(II) Iodida (Kaedah Perubahan Berterusan)',
            aim: 'Membina persamaan ion bagi pemendakan plumbum(II) iodida menggunakan nisbah ketinggian mendakan.',
            inference: 'Ketinggian mendakan berkadar terus dengan bilangan mol mendakan sehingga semua ion bertindak balas lengkap.',
            hypothesis: 'Ketinggian mendakan maksimum dicapai apabila $1\\text{ mol}$ ion $Pb^{2+}$ bertindak balas lengkap dengan $2\\text{ mol}$ ion $I^-$.',
            variables: {
              manipulated: 'Isi padu larutan kalium iodida $0.5\\text{ M}$ ($1\\text{–}7\\text{ cm}^3$)',
              responding: 'Ketinggian mendakan kuning $PbI_2$ dalam tabung uji (cm)',
              fixed: 'Isi padu & kemolaran $Pb(NO_3)_2$ ($5\\text{ cm}^3, 0.5\\text{ M}$) serta diameter tabung uji',
            },
            setupLogic: 'Masukkan $5\\text{ cm}^3$ $Pb(NO_3)_2\\ 0.5\\text{ M}$ ke dalam 7 tabung uji seragam, tambah $1, 2, \\dots, 7\\text{ cm}^3$ $KI\\ 0.5\\text{ M}$, tutup dan goncang; biarkan mendakan mendap 30 minit dan ukur tingginya.',
            expectedResult: 'Ketinggian mendakan meningkat linear sehingga $10\\text{ cm}^3\\ KI$ ($0.005\\text{ mol } I^-$ bagi $0.0025\\text{ mol } Pb^{2+}$; nisbah $1:2$), kemudian mendatar malar.',
            conclusion: 'Persamaan ion ialah $Pb^{2+}(ak) + 2I^-(ak) \\to PbI_2(p)$.',
          },
        ],
      },
      part4WorkedExamples: [
        {
          title: 'Merancang Penyediaan Garam Plumbum(II) Sulfat & Kuprum(II) Nitrat',
          problem:
            'Nyatakan bahan kimia yang sesuai dan persamaan kimia untuk menyediakan (a) garam kuprum(II) nitrat, dan (b) garam plumbum(II) sulfat.',
          given: ['$Cu(NO_3)_2$: larut, bukan ANaK', '$PbSO_4$: tak terlarutkan (PBC sulfat)'],
          formulaLatex: '(a)\\ CuO + 2HNO_3 \\to Cu(NO_3)_2 + H_2O \\quad|\\quad (b)\\ Pb(NO_3)_2 + Na_2SO_4 \\to PbSO_4 + 2NaNO_3',
          formulaWhy: 'Pilih kaedah asid + oksida/karbonat bagi $Cu(NO_3)_2$ dan penguraian ganda dua bagi $PbSO_4$.',
          substituteLatex: '\\text{Persamaan ion (b): } Pb^{2+} + SO_4^{2-} \\to PbSO_4(p)',
          answer: '(a) Gunakan serbuk kuprum(II) oksida (atau karbonat) berlebihan dengan asid nitrik cair, turas dan sejukkan larutan tepu untuk penghabluran. (b) Campurkan larutan plumbum(II) nitrat dengan larutan natrium sulfat (atau asid sulfurik), turas, bilas mendakan $PbSO_4$ dengan air suling dan keringkan.',
          trapAlert: 'Untuk menyediakan $PbSO_4$ atau $PbCl_2$, **JANGAN** gunakan $PbO + H_2SO_4$ secara terus kerana lapisan $PbSO_4$ tak larut akan menyaluti $PbO$ dan menghentikan tindak balas! Sentiasa guna larutan **$Pb(NO_3)_2$**!',
        },
      ],
      part5DecisionTable: {
        title: 'Langkah Penulenan dalam Penyediaan Garam SPM',
        rows: [
          {
            designChoice: 'Menambah serbuk $CuO$ atau $ZnCO_3$ secara berlebihan ke dalam asid panas (Kaedah 2)',
            scientificReason: 'Memastikan kesemua asid bertindak balas lengkap supaya hasil turasan tidak tercemar oleh lebihan asid.',
          },
          {
            designChoice: 'Mengulang pentitratan tanpa penunjuk fenolftalein menggunakan isi padu $V_a$ yang diketahui (Kaedah 1)',
            scientificReason: 'Menghasilkan hablur garam ANaK yang tulen dan putih tanpa dicemari warna petunjuk.',
          },
          {
            designChoice: 'Membilas mendakan tak larut di atas kertas turas dengan air suling dan mengeringkan hablur tanpa pemanasan melampau',
            scientificReason: 'Menyingkirkan ion garam larut yang melekat pada permukaan mendakan; elakkan pemanasan terus supaya air penghabluran tidak hilang atau garam terurai.',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Senaraikan 3 garam sulfat dan 3 garam klorida yang TIDAK larut dalam air sejuk.',
            answer: 'Sulfat (PBC): $PbSO_4, BaSO_4, CaSO_4$; Klorida (HPA): $HgCl_2, PbCl_2, AgCl$.',
          },
          {
            question: 'Apakah 2 garam halida yang tidak larut dalam air sejuk tetapi larut dalam air panas?',
            answer: 'Plumbum(II) klorida ($PbCl_2$) dan plumbum(II) iodida ($PbI_2$).',
          },
          {
            question: 'Mengapakah kita perlu memanaskan garam terlarutkan hingga tepu lalu menyejukkannya (bukan menyejatkan hingga kering)?',
            answer: 'Penyejatan hingga kering akan merosakkan bentuk hablur (jadi serbuk) dan memerangkap bendasing atau menguraikan garam (seperti nitrat/terhidrat).',
          },
        ],
        fadedProblem: {
          prompt: 'Anda ingin menyediakan hablur garam zink sulfat ($ZnSO_4$) daripada serbuk zink karbonat dan asid sulfurik cair.',
          step1GivenAndFormula: '$ZnCO_3(p) + H_2SO_4(ak) \\to ZnSO_4(ak) + H_2O(ce) + CO_2(g)$.',
          studentTask: 'Susun 4 langkah penting selepas serbuk $ZnCO_3$ berlebihan ditambah ke dalam asid sulfurik.',
          answerSteps: '1. Kacau dan turaskan campuran untuk membuang lebihan $ZnCO_3$. 2. Panaskan hasil turasan hingga menjadi larutan tepu ($\\approx \\frac{1}{3}$ isi padu asal). 3. Sejukkan larutan pada suhu bilik untuk menghablur. 4. Turaskan hablur, bilas sedikit air suling sejuk dan keringkan antara dua helai kertas turas.',
        },
        transferQuestion: {
          question: 'Dalam penyediaan $NaCl$ melalui pentitratan $HCl + NaOH$, seorang pelajar terlupa menuras dan terus mengewapkan hasil tanpa mengulang tanpa metil jingga. Apakah yang terjadi kepada hablur $NaCl$ tersebut?',
          answer: 'Hablur garam $NaCl$ tidak tulen dan berwarna merah/jingga kerana dicemari oleh petunjuk metil jingga.',
        },
      },
    },
    {
      id: 'k4-6.10',
      chapterId: 'k4-bab-6',
      code: '6.10',
      title: 'Tindakan Haba ke atas Garam',
      pageRef: 'm.s. 190–197',
      part1Anchor: {
        phenomenon:
          'Apabila garam putih dipanaskan kuat, ada yang meletup membebaskan gas perang beracun ($NO_2$), ada yang mengeruhkan air kapur ($CO_2$), dan ada baki yang bertukar kuning semasa panas tetapi kembali putih apabila sejuk ($ZnO$)!',
        chapterConnection:
          'Menyediakan petunjuk warna baki dan 8 ujian pengesahan gas sebelum menjalankan analisis kualitatif penuh dalam 6.11.',
      },
      part2SacredDefinitions: [
        {
          title: 'Corak Penguraian Garam Karbonat & Nitrat oleh Haba',
          category: 'Prinsip',
          verbatimSegments: [
            { text: 'Kebanyakan garam karbonat terurai membentuk ' },
            { text: 'oksida logam dan gas $CO_2$', keyword: true },
            { text: ' (kecuali $Na_2CO_3, K_2CO_3$); kebanyakan garam nitrat terurai membentuk ' },
            { text: 'oksida logam, gas $NO_2$ (perang) dan gas $O_2$', keyword: true },
            { text: ' (kecuali $NaNO_3, KNO_3 \\to$ garam nitrit + $O_2$).' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengenal Pasti Identiti Garam Daripada Warna Baki Panas-Sejuk & Gas',
            cause: 'Pemanasan kuat menguraikan garam karbonat/nitrat meninggalkan oksida logam serta membebaskan gas tertentu.',
            mechanism: 'Oksida logam tertentu mempamerkan termokromisme (berubah warna mengikut suhu) dan setiap gas bertindak balas khusus dengan kertas litmus/kayu uji/air kapur.',
            effect: 'Gabungan warna baki + ujian gas mendedahkan kedua-dua kation dan anion garam secara serentak!',
          },
        ],
        tables: [
          {
            title: 'Lapan Ujian Pengesahan Gas Wajib SPM',
            headers: ['Gas', 'Sifat Warna & Bau', 'Ujian Pengesahan & Pemerhatian Positif'],
            rows: [
              ['Oksigen ($O_2$)', 'Tidak berwarna, tiada bau', '**Kayu uji berbara** menyala semula'],
              ['Hidrogen ($H_2$)', 'Tidak berwarna, tiada bau', '**Kayu uji menyala** menghasilkan bunyi "pop"'],
              ['Karbon dioksida ($CO_2$)', 'Tidak berwarna, tiada bau', 'Mengalir ke dalam **air kapur** $\\to$ air kapur menjadi keruh'],
              ['Ammonia ($NH_3$)', 'Tidak berwarna, bau sengit', 'Kertas **litmus merah lembap** $\\to$ biru'],
              ['Klorin ($Cl_2$)', 'Kuning kehijauan, bau sengit', 'Kertas **litmus biru lembap** $\\to$ merah lalu dilunturkan (putih)'],
              ['Hidrogen klorida ($HCl$)', 'Tidak berwarna, bau sengit', 'Rod kaca dicelup **$NH_3$ pekat** menghasilkan wasap putih tebal ($NH_4Cl$)'],
              ['Sulfur dioksida ($SO_2$)', 'Tidak berwarna, bau sengit', 'Menyahwarnakan larutan **$KMnO_4$ berasid** (ungu $\\to$ tidak berwarna) atau $K_2Cr_2O_7$ (jingga $\\to$ hijau)'],
              ['Nitrogen dioksida ($NO_2$)', 'Gas **perang**, bau sengit', 'Kertas **litmus biru lembap** $\\to$ merah (berasid)'],
            ],
          },
          {
            title: 'Warna Baki Oksida Logam Semasa Panas & Sejuk',
            headers: ['Oksida Logam (Baki)', 'Warna Semasa Panas', 'Warna Semasa Sejuk', 'Contoh Garam Asal'],
            rows: [
              ['Zink oksida ($ZnO$)', '**Kuning**', '**Putih**', '$ZnCO_3$ atau $Zn(NO_3)_2$'],
              ['Plumbum(II) oksida ($PbO$)', '**Perang**', '**Kuning**', '$PbCO_3$ atau $Pb(NO_3)_2$'],
              ['Kuprum(II) oksida ($CuO$)', '**Hitam**', '**Hitam**', '$CuCO_3$ (hijau) atau $Cu(NO_3)_2$ (biru)'],
              ['Ferum(III) oksida ($Fe_2O_3$)', 'Perang', 'Perang', '$Fe_2(SO_4)_3$ atau $Fe(NO_3)_3$'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Persamaan Penguraian Terma Plumbum(II) Nitrat & Natrium Nitrat',
            latex: '2Pb(NO_3)_2 \\xrightarrow{\\Delta} 2PbO + 4NO_2 + O_2 \\qquad|\\qquad 2NaNO_3 \\xrightarrow{\\Delta} 2NaNO_2 + O_2',
            symbols: [
              { symbol: 'NO_2', meaning: 'gas perang nitrogen dioksida', unit: '—' },
            ],
            appliesWhen: 'Menulis persamaan pemanasan garam nitrat dan karbonat.',
            failsWhen: 'Ingat dua pengecualian Kumpulan 1: $Na_2CO_3$ dan $K_2CO_3$ **TIDAK terurai** apabila dipanaskan; $NaNO_3$ dan $KNO_3$ **TIDAK** membebaskan gas perang $NO_2$ (hanya membebaskan $O_2$)!',
          },
        ],
        diagrams: [],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Mendeduksi Identiti Garam Daripada Tindakan Haba',
          problem:
            'Pepejal putih $P$ dipanaskan dengan kuat. Gas perang $R$ yang menukarkan litmus biru lembap kepada merah dan gas $S$ yang menyalakan kayu uji berbara dibebaskan. Baki pepejal $Q$ berwarna kuning semasa panas dan putih apabila sejuk. Kenal pasti $P, Q, R, S$ dan tulis persamaannya.',
          given: ['Baki kuning (panas) / putih (sejuk) $= ZnO$', 'Gas perang $= NO_2$; gas nyala kayu uji berbara $= O_2$'],
          formulaLatex: '2Zn(NO_3)_2(p) \\xrightarrow{\\Delta} 2ZnO(p) + 4NO_2(g) + O_2(g)',
          formulaWhy: 'Hanya garam nitrat menghasilkan gas perang $NO_2 + O_2$.',
          substituteLatex: 'P = Zn(NO_3)_2, \\; Q = ZnO, \\; R = NO_2, \\; S = O_2',
          answer: '$P$ ialah zink nitrat; $Q$ ialah zink oksida; $R$ ialah nitrogen dioksida; $S$ ialah oksigen.',
          trapAlert: 'Jangan tertukar $ZnO$ (**kuning panas → putih sejuk**) dengan $PbO$ (**perang panas → kuning sejuk**)!',
        },
      ],
      part5DecisionTable: null,
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah dua gas yang dibebaskan apabila kuprum(II) nitrat dipanaskan?',
            answer: 'Gas perang nitrogen dioksida ($NO_2$) dan gas oksigen ($O_2$).',
          },
          {
            question: 'Apakah baki yang berwarna perang semasa panas dan kuning semasa sejuk?',
            answer: 'Plumbum(II) oksida ($PbO$).',
          },
          {
            question: 'Apakah reagen yang digunakan untuk mengesahkan gas sulfur dioksida ($SO_2$)?',
            answer: 'Larutan kalium manganat(VII) berasid ($KMnO_4$ ungu $\\to$ tidak berwarna) atau kalium dikromat(VI) berasid (jingga $\\to$ hijau).',
          },
        ],
        fadedProblem: {
          prompt: 'Serbuk hijau $CuCO_3$ dipanaskan dalam tabung uji dan gas yang terhasil disalurkan ke dalam air kapur.',
          step1GivenAndFormula: '$CuCO_3(p) \\xrightarrow{\\Delta} CuO(p) + CO_2(g)$.',
          studentTask: 'Nyatakan perubahan warna pepejal dan pemerhatian ke atas air kapur.',
          answerSteps: 'Serbuk hijau bertukar menjadi baki pepejal berwarna hitam ($CuO$), manakala gas $CO_2$ mengeruhkan air kapur.',
        },
        transferQuestion: {
          question: 'Seorang pelajar memanaskan kalium nitrat ($KNO_3$) dan kalium karbonat ($K_2CO_3$). Ramalkan ujian kayu uji berbara dan air kapur bagi kedua-dua garam.',
          answer: 'Bagi $KNO_3$, gas $O_2$ terbebas lalu menyalakan semula kayu uji berbara (tiada gas perang). Bagi $K_2CO_3$, tiada penguraian berlaku maka air kapur kekal jernih.',
        },
      },
    },
    {
      id: 'k4-6.11',
      chapterId: 'k4-bab-6',
      code: '6.11',
      title: 'Analisis Kualitatif',
      pageRef: 'm.s. 197–215',
      part1Anchor: {
        phenomenon:
          'Seorang penyiasat kimia diberi sebotol larutan garam tidak berlabel — tanpa mesin canggih, beberapa titik asid, larutan $NaOH$, dan $NH_3$ sudah cukup untuk mendedahkan identiti tepat kedua-dua anion dan kationnya!',
        chapterConnection:
          'Kemuncak Bab 6 yang menggabungkan ujian warna, pemendakan tak larut, pembentukan ion kompleks dan ujian pengesahan untuk Kertas 2 dan Kertas 3 SPM.',
      },
      part2SacredDefinitions: [
        {
          title: 'Analisis Kualitatif Garam',
          category: 'Takrifan',
          verbatimSegments: [
            { text: 'Analisis kualitatif ialah satu ' },
            { text: 'teknik kimia untuk mengenal pasti ion-ion (kation dan anion)', keyword: true },
            { text: ' yang hadir dalam sesuatu bahan melalui pemerhatian sifat fizik dan tindak balas kimia tertentu.' },
          ],
        },
      ],
      part3Mechanics: {
        causalChains: [
          {
            title: 'Mengapa $Zn^{2+}, Al^{3+}, Pb^{2+}$ Larut dalam $NaOH$ Berlebihan tetapi Berbeza dalam $NH_3$ Berlebihan',
            cause: 'Hidroksida amfoterik ($Zn(OH)_2, Al(OH)_3, Pb(OH)_2$) bertindak balas dengan ion $OH^-$ berkepekatan tinggi dalam $NaOH$ berlebihan membentuk ion kompleks larut.',
            mechanism: 'Dalam $NH_3(ak)$ berlebihan (alkali lemah), hanya $Zn^{2+}$ (dan $Cu^{2+}$) dapat membentuk ion kompleks amina terlarut ($[Zn(NH_3)_4]^{2+}$, $[Cu(NH_3)_4]^{2+}$), manakala $Al(OH)_3$ dan $Pb(OH)_2$ kekal tak larut.',
            effect: 'Kombinasi $NaOH$ + $NH_3$ serta ujian pengesahan $KI$ memisahkan kesemua 9 kation wajib SPM secara unik.',
          },
        ],
        tables: [
          {
            title: 'Ujian Pengesahan Empat Anion Wajib SPM ($CO_3^{2-}, Cl^-, SO_4^{2-}, NO_3^-$)',
            headers: ['Anion', 'Reagen & Langkah', 'Pemerhatian Positif & Sebab'],
            rows: [
              ['Karbonat ($CO_3^{2-}$)', 'Tambah asid cair ($HCl/HNO_3/H_2SO_4$) $\\to$ salur gas ke air kapur', 'Pembuakan berlaku; gas $CO_2$ mengeruhkan air kapur'],
              ['Klorida ($Cl^-$)', 'Tambah $HNO_3$ cair + larutan $AgNO_3$', '**Mendakan putih** $AgCl$ terbentuk ($Ag^+ + Cl^- \\to AgCl$)'],
              ['Sulfat ($SO_4^{2-}$)', 'Tambah $HCl/HNO_3$ cair + larutan $BaCl_2/Ba(NO_3)_2$', '**Mendakan putih** $BaSO_4$ terbentuk ($Ba^{2+} + SO_4^{2-} \\to BaSO_4$)'],
              ['Nitrat ($NO_3^-$)', 'Tambah $H_2SO_4$ cair + larutan $FeSO_4$ baharu $\\to$ titis $H_2SO_4$ pekat perlahan di tepi tabung uji condong', '**Cincin perang** terbentuk antara dua lapisan larutan'],
            ],
          },
          {
            title: 'Ujian Kation ($Ca^{2+}, Mg^{2+}, Al^{3+}, Pb^{2+}, Zn^{2+}, Fe^{2+}, Fe^{3+}, Cu^{2+}, NH_4^+$) & Pengesahan',
            headers: ['Kation', 'Dengan $NaOH(ak)$ (+ berlebihan)', 'Dengan $NH_3(ak)$ (+ berlebihan)', 'Ujian Pengesahan Khusus'],
            rows: [
              ['$NH_4^+$', 'Tiada mendakan; panaskan $\\to$ gas $NH_3$ (litmus merah lembap $\\to$ biru)', 'Tiada perubahan', 'Reagen Nessler $\\to$ mendakan perang'],
              ['$Ca^{2+}$', 'Mendakan putih (tak larut dlm lebihan)', '**Tiada mendakan** ($[OH^-]$ terlalu rendah)', '—'],
              ['$Mg^{2+}$', 'Mendakan putih (tak larut dlm lebihan)', 'Mendakan putih (tak larut dlm lebihan)', 'Bezakan dgn $Ca^{2+}$ guna $NH_3$'],
              ['$Zn^{2+}$', 'Mendakan putih, **larut** dlm lebihan $NaOH$', 'Mendakan putih, **larut** dlm lebihan $NH_3$', '—'],
              ['$Al^{3+}$', 'Mendakan putih, **larut** dlm lebihan $NaOH$', 'Mendakan putih, **tak larut** dlm lebihan $NH_3$', 'Guna $KI$: tiada mendakan kuning'],
              ['$Pb^{2+}$', 'Mendakan putih, **larut** dlm lebihan $NaOH$', 'Mendakan putih, **tak larut** dlm lebihan $NH_3$', '+ $KI$ $\\to$ mendakan kuning $PbI_2$ (larut bila panas, hablur kuning emas bila sejuk)'],
              ['$Fe^{2+}$', 'Mendakan **hijau** (tak larut)', 'Mendakan **hijau** (tak larut)', '+ $K_3Fe(CN)_6$ $\\to$ mendakan biru tua'],
              ['$Fe^{3+}$', 'Mendakan **perang** (tak larut)', 'Mendakan **perang** (tak larut)', '+ $KSCN$ $\\to$ larutan merah darah; + $K_4Fe(CN)_6$ $\\to$ biru tua'],
              ['$Cu^{2+}$', 'Mendakan **biru** (tak larut)', 'Mendakan biru, **larut** dlm lebihan $\\to$ **larutan biru tua**', '—'],
            ],
          },
        ],
        formulas: [
          {
            title: 'Mengapa Asid Ditambah Sebelum $AgNO_3$ dan $BaCl_2$',
            latex: '\\text{Asid } HNO_3/HCl \\text{ menyingkirkan ion } CO_3^{2-} \\text{ agar tidak membentuk mendakan putih palsu } Ag_2CO_3 \\text{ atau } BaCO_3',
            symbols: [
              { symbol: 'HNO_3', meaning: 'asid nitrik cair untuk ujian $Cl^-$ & $SO_4^{2-}$', unit: '—' },
            ],
            appliesWhen: 'Semua ujian pengesahan klorida ($AgNO_3$) dan sulfat ($BaCl_2$).',
            failsWhen: 'Perangkap maut SPM: JANGAN tambah $HCl$ sebelum $AgNO_3$ (nanti $HCl$ bawa $Cl^-$ palsu!), dan JANGAN tambah $H_2SO_4$ sebelum $BaCl_2$ (nanti bawa $SO_4^{2-}$ palsu)!',
          },
        ],
        diagrams: [
          {
            kind: 'chem-qualitative-analysis',
            title: 'Peta Keputusan Ujian Kation ($NaOH$, $NH_3$ dan Pengesahan $KI$)',
            whatItShows: 'Pengelasan pantas 9 kation mengikut pembentukan mendakan, keterlarutan dalam reagen berlebihan dan warna khas.',
            axisOrRule: 'Ikut aliran: Warna mendakan → Larut dalam $NaOH$ lebih → Larut dalam $NH_3$ lebih → Uji $KI$ untuk $Pb^{2+}$ vs $Al^{3+}$.',
          },
        ],
        experiments: [],
      },
      part4WorkedExamples: [
        {
          title: 'Membezakan Tiga Ion Mendakan Putih dalam $NaOH$ ($Zn^{2+}, Al^{3+}, Pb^{2+}$)',
          problem:
            'Anda diberi dua tabung uji tidak berlabel mengandungi larutan $Al(NO_3)_3$ dan $Pb(NO_3)_2$. Terangkan bagaimana membezakan kedua-duanya apabila ujian $NaOH$ dan $NH_3$ memberi keputusan yang sama.',
          given: ['Kedua-duanya membentuk mendakan putih larut dlm $NaOH$ lebih, tetapi tak larut dlm $NH_3$ lebih'],
          formulaLatex: 'Pb^{2+}(ak) + 2I^-(ak) \\longrightarrow PbI_2(p\\text{ kuning})',
          formulaWhy: 'Ion iodida (atau klorida/sulfat) memendakkan $Pb^{2+}$ tetapi tidak memendakkan $Al^{3+}$.',
          substituteLatex: 'Al^{3+} + KI \\longrightarrow \\text{Tiada perubahan (larutan jernih)}',
          answer: 'Tambahkan beberapa titis larutan kalium iodida ($KI$) ke dalam kedua-dua larutan. Larutan yang menghasilkan **mendakan kuning** ($PbI_2$) mengandungi ion $Pb^{2+}$, manakala larutan yang tiada perubahan mengandungi ion $Al^{3+}$.',
          trapAlert: 'Dalam ujian cincin perang ($NO_3^-$), pastikan menggunakan larutan **$FeSO_4$ yang baharu disediakan** dan **asid sulfurik pekat** dialirkan perlahan menyusur dinding tabung uji yang dicondongkan!',
        },
      ],
      part5DecisionTable: {
        title: 'Keputusan Pemilihan Reagen dalam Analisis Kualitatif SPM',
        rows: [
          {
            designChoice: 'Menambahkan asid nitrik cair ($HNO_3$) sebelum larutan argentum nitrat dalam ujian $Cl^-$',
            scientificReason: 'Menghapuskan ion karbonat (yang juga menghasilkan mendakan putih dengan $AgNO_3$) dan tidak memperkenalkan ion klorida asing.',
          },
          {
            designChoice: 'Menggunakan larutan kalium tiosianat ($KSCN$) untuk mengesahkan ion $Fe^{3+}$',
            scientificReason: 'Menghasilkan larutan berwarna merah darah yang amat sensitif dan khusus bagi ion ferum(III).',
          },
          {
            designChoice: 'Menguji $Ca^{2+}$ dan $Mg^{2+}$ menggunakan larutan ammonia $NH_3(ak)$',
            scientificReason: 'Kepekatan ion $OH^-$ rendah dalam $NH_3(ak)$ cukup untuk memendakkan $Mg(OH)_2$ (putih) tetapi tidak memendakkan $Ca(OH)_2$ (tiada mendakan).',
          },
        ],
      },
      part6Checkpoint: {
        quickRecall: [
          {
            question: 'Apakah pemerhatian positif bagi ujian cincin perang untuk ion nitrat?',
            answer: 'Terbentuk gelang/cincin berwarna perang di antara dua lapisan cecair.',
          },
          {
            question: 'Kation manakah yang menghasilkan mendakan putih dan larut dalam KEDUA-DUA $NaOH$ berlebihan dan $NH_3$ berlebihan?',
            answer: 'Ion zink, $Zn^{2+}$.',
          },
          {
            question: 'Apakah warna mendakan dan larutan apabila $NH_3(ak)$ ditambah sedikit demi sedikit hingga berlebihan ke dalam $CuSO_4$?',
            answer: 'Mendakan biru terbentuk dan larut dalam $NH_3(ak)$ berlebihan membentuk larutan biru tua.',
          },
        ],
        fadedProblem: {
          prompt: 'Larutan garam $X$ membentuk mendakan putih dengan larutan $BaCl_2$ yang tidak larut dalam asid $HCl$ cair. Apabila diuji dengan $NaOH(ak)$, mendakan hijau terbentuk dan tidak larut dalam berlebihan.',
          step1GivenAndFormula: 'Mendakan putih dgn $Ba^{2+}$ tak larut dlm asid $\\Rightarrow SO_4^{2-}$. Mendakan hijau dgn $NaOH$ $\\Rightarrow Fe^{2+}$.',
          studentTask: 'Kenal pasti nama garam $X$ dan cadangkan satu reagen pengesahan bagi kationnya.',
          answerSteps: 'Garam $X$ ialah ferum(II) sulfat ($FeSO_4$); sahkan ion $Fe^{2+}$ menggunakan larutan kalium heksasianoferat(III) yang menghasilkan mendakan biru tua.',
        },
        transferQuestion: {
          question: 'Mengapakah ujian nyalaan atau analisis kualitatif larutan garam $Fe^{2+}$ mesti menggunakan reagen baharu dan tidak dibiarkan terdedah lama di udara?',
          answer: 'Kerana ion $Fe^{2+}$ mudah dioksidakan oleh oksigen udara menjadi ion $Fe^{3+}$, yang kemudian menghasilkan mendakan perang/jingga serta keputusan palsu.',
        },
      },
    },
  ],
};
