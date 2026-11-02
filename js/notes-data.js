// ============================================================
// BasaLoka — Unit Notes, Key Takeaways & Exam Question Hacks
// ============================================================

const UNIT_NOTES_DATA = {
  // ─── TOEFL FAST TRACK HARI 1 & MODUL 1: LISTENING PART A ───
  "toefl-fast3-d1": {
    unitTitle: "Hari 1: Listening Fast Track (Trik Orang Kedua & Percakapan Kampus)",
    badge: "🎧 Listening Mastery",
    icon: "🎧",
    color: "#38bdf8",
    summary: "Fokus utama Listening Part A adalah percakapan singkat 2 orang di kampus. Kunci jawaban 85% berada di ucapan orang kedua (second speaker). Jangan tertipu oleh kata yang bunyinya mirip!",
    goldenRules: [
      {
        rule: "Trik Orang Kedua (Second Speaker Rule)",
        explanation: "Pembicara pertama hanya melempar masalah atau pertanyaan. Pembicara kedua memberikan jawaban, penolakan, atau solusi yang menjadi inti pertanyaan narrator.",
        example: "Man: 'Are you going to the concert tonight?' | Woman: 'I wish I could, but I have a chem exam tomorrow.' -> Makna: Wanita tersebut tidak bisa datang karena harus belajar ujian.",
        formula: "Kalimat 1 (Latar/Situasi) + Kalimat 2 (KUNCI JAWABAN) -> Cari Sinonim Respon Kalimat 2"
      },
      {
        rule: "Jebakan Bunyi Mirip (Anti-Sound-Alike Trap)",
        explanation: "ETS sengaja memasukkan kata-kata di opsi jawaban yang bunyinya sangat mirip dengan kata di audio untuk menjebak yang mendengarkan setengah-setengah. Jawaban benar hampir selalu menggunakan SINONIM (paraphrase), bukan kata yang bunyinya sama.",
        example: "Audio: 'The coffee is cold.' -> Opsi jebakan: 'He bought a gold ring' (cold vs gold) ❌. Opsi benar: 'The beverage has cooled down' ✅.",
        formula: "Bunyi Opsi Mirip Audio = 90% Jebakan Distractor ❌ | Sinonim/Parafrase = 90% Kunci Jawaban ✅"
      },
      {
        rule: "Kamus Idiom Populer Kampus TOEFL",
        explanation: "TOEFL ITP sangat sering menguji ungkapan kiasan bahasa Inggris percakapan sehari-hari.",
        example: "• 'under the weather' = kurang enak badan / sakit ringan\n• 'cost an arm and a leg' = sangat mahal\n• 'take a rain check' = menunda tawaran ke lain waktu\n• 'sleep on it' = menunda keputusan sampai besok pagi\n• 'touch and go' = situasi genting / belum pasti",
        formula: "Hafalkan makna utuh idiom, jangan artikan kata per kata!"
      }
    ],
    questionTips: [
      {
        pattern: "Tipe Soal 'What does the woman/man mean?'",
        hack: "Fokus 100% pada nada intonasi dan ucapan orang kedua. Segera eliminasi opsi yang mengulang kata kunci audio secara persis.",
        trapAlert: "⚠️ Jebakan: Mengulang kata berima sama (misal 'department' dan 'apartment')."
      },
      {
        pattern: "Tipe Soal Ekspresi Kesepakatan ('You can say that again!')",
        hack: "Jika pembicara kedua berkata 'You can say that again!' atau 'Neither do I' atau 'I'll second that', artinya PEMBICARA KEDUA SANGAT SETUJU dengan pembicara pertama.",
        trapAlert: "⚠️ Jebakan: Mengira dia meminta orang pertama mengulangi ucapannya lagi."
      },
      {
        pattern: "Tipe Soal Saran ('Why don't you...')",
        hack: "Frasa 'Why don't you...', 'If I were you...', 'You'd better...' adalah pola rekomendasi. Jawaban benar biasanya diawali kata kerja tindakan yang disarankan.",
        trapAlert: "⚠️ Jebakan: Mengira pembicara sedang menanyakan alasan (kenapa), padahal sedang memberi saran halus."
      }
    ],
    cheatSheet: [
      { label: "Kunci Jawaban Terletak Di", value: "Ucapan pembicara kedua (second speaker)" },
      { label: "Pola Jawaban Benar", value: "Sinonim / Restatement (Makna sama, kata beda)" },
      { label: "Pilihan Wajib Dihindari", value: "Opsi yang bunyinya mirip audio percakapan" },
      { label: "You can say that again!", value: "Bermakna SANGAT SETUJU" }
    ],
    lucaMessage: "Ingat trik Luca: Pas audio berputar, pejamkan mata sejenak dan pasang telinga di kalimat orang kedua. Cari sinonimnya di kertas ujianmu! 🚀"
  },

  // ─── TOEFL FAST TRACK HARI 2 & MODUL 3: STRUCTURE S+V ───────
  "toefl-fast3-d2": {
    unitTitle: "Hari 2: Structure Crash Course (Rumus S+V & 5 Dosa Error)",
    badge: "📐 Structure Mastery",
    icon: "📐",
    color: "#f59e0b",
    summary: "Structure 1–15 adalah soal kelengkapan kalimat. Kalimat bahasa Inggris baku WAJIB punya 1 Subject dan 1 Verb. Hati-hati dengan frasa preposisi dan keterangan yang menyamar!",
    goldenRules: [
      {
        rule: "Hukum Mutlak Subjek & Verb (S+V Rule)",
        explanation: "Setiap klausa bahasa Inggris wajib memiliki minimal SATU Subjek dan SATU Kata Kerja Utama (Finite Verb). Jika kalimat belum punya Subjek atau Verb, cari opsi yang melengkapinya.",
        example: "The telescope _______ distant galaxies. -> Butuh Verb! Opsi benar: 'detects' (Bukan 'detecting' karena -ing tanpa 'to be' bukan verb).",
        formula: "Kalimat = [Subjek] + [Verb Utama]"
      },
      {
        rule: "Jebakan Frasa Preposisi (Prepositional Trap)",
        explanation: "Kata benda yang berada setelah preposisi (in, on, at, of, with, by, for, under) BUKAN SUBJEK! Jangan jadikan kata itu patokan menentukan Verb tunggal/jamak.",
        example: "A thick layer [of clouds] _______ the mountain. -> Subjeknya adalah 'A thick layer' (tunggal), BUKAN 'clouds'! Maka verbnya 'covers', bukan 'cover'.",
        formula: "Subject + [Preposition + Noun] + Verb -> Verb mengikuti Noun sebelum preposisi!"
      },
      {
        rule: "Keterangan Tambahan / Appositive",
        explanation: "Frasa penjelas yang diapit dua tanda koma (, ... ,) bukan subjek kalimat, melainkan hanya keterangan tambahan.",
        example: "Dr. Robert, [a famous biologist], _______ the seminar. -> Subjek adalah Dr. Robert, butuh Verb: 'attended'.",
        formula: "S , [Appositive] , V  atau  [Appositive] , S + V"
      }
    ],
    questionTips: [
      {
        pattern: "Soal Nomor 1–15 (Sentence Completion)",
        hack: "Gunakan trik detektif 3 detik: 1. Cari Verb-nya mana? 2. Cari Subjek-nya mana? 3. Cek apakah ada konektor klausa? Lalu lengkapi bagian yang bolong.",
        trapAlert: "⚠️ Jebakan: Memilih kata kerja berakhiran -ing atau to+V1 tanpa modal/to be (itu bukan verb utama!)."
      },
      {
        pattern: "Menghitung Konektor Klausa",
        hack: "Rumus matematis ETS: Jumlah Verb - 1 = Jumlah Konektor. Jika ada 2 Verb, WAJIB ada 1 Konektor (Because, Although, Which, That, Since).",
        trapAlert: "⚠️ Jebakan: Dua klausa digabung hanya pakai tanda koma tanpa konektor (Comma Splice)."
      }
    ],
    cheatSheet: [
      { label: "Komponen Wajib", value: "1 Subject + 1 Finite Verb per klausa" },
      { label: "Bukan Verb Utama", value: "-ing sendirian (walking) & to+V1 (to walk)" },
      { label: "Setelah Preposisi (of, in, at)", value: "Objek preposisi, BUKAN Subjek kalimat" },
      { label: "Rumus 2 Klausa", value: "Connector + S + V, S + V" }
    ],
    lucaMessage: "Structure itu matematika bahasa Inggris! Hitung Verb-nya, hitung Subjek-nya. Kalau kurang verb, pilih verb. Gak perlu hafal semua arti kata! 📐"
  },

  // ─── TOEFL FAST TRACK HARI 3 & READING NINJA ────────────────
  "toefl-fast3-d3": {
    unitTitle: "Hari 3: Reading Ninja & Sprint Practice (Skim, Scan & Simulasi)",
    badge: "📖 Reading Ninja",
    icon: "🚀",
    color: "#10b981",
    summary: "Waktu Reading TOEFL sangat sempit (50 soal dalam 55 menit). Rahasianya: JANGAN BACA SELURUH TEKS! Baca pertanyaannya dulu, lalu gunakan teknik Skimming & Scanning.",
    goldenRules: [
      {
        rule: "Trik Ide Pokok 10 Detik (Main Idea Hack)",
        explanation: "Sebanyak 85% paragraf esai akademik TOEFL dirancang deduktif. Kalimat topik ditaruh tepat di kalimat pertama Paragraf 1 dan Paragraf 2.",
        example: "Pertanyaan: 'What is the main topic of the passage?' -> Baca cuma baris pertama paragraf 1 dan baris pertama paragraf 2. Cocokkan gagasan umumnya.",
        formula: "Kalimat Pertama Paragraf 1 + Kalimat Pertama Paragraf 2 = MAIN IDEA"
      },
      {
        rule: "Teknik Scanning Kata Kunci Unik",
        explanation: "Untuk soal rincian fakta ('According to the passage...'), jangan baca ulang teks. Gerakkan mata cepat mencari kata kunci unik: Angka Tahun (1850), Huruf Kapital (Nama Orang/Tempat), Istilah Teknis Bergaris Miring.",
        example: "Soal menanyakan Gutenberg. Scan teks sampai ketemu kata 'Gutenberg', lalu baca 1 kalimat utuh di sekitar kata itu.",
        formula: "Cari Kata Kunci Unik di Teks -> Baca 1 Kalimat Konteks -> Jawab Soal"
      },
      {
        rule: "Aturan Emas: Tanpa Nilai Minus!",
        explanation: "Di tes TOEFL ITP TIDAK ADA PENALTI SALAH. Jawaban salah bernilai 0, bukan minus. Menjawab asal memiliki peluang benar 25%, mengosongkannya pasti 0%.",
        example: "Saat waktu tersisa 1 menit dan masih ada 5 soal belum dijawab, hitamkan semua dengan satu huruf yang sama (misal C semua).",
        formula: "Pantang Mengosongkan Jawaban! Isi 100% Lembar Jawaban."
      }
    ],
    questionTips: [
      {
        pattern: "Soal 'EXCEPT' atau 'NOT mentioned'",
        hack: "Tiga pilihan ada di teks, satu pilihan SALAH atau tidak dibahas. Scan ketiga opsi yang ada, lalu pilih opsi yang tidak pernah disebut.",
        trapAlert: "⚠️ Jebakan: Terburu-buru memilih opsi pertama yang terlihat familiar di teks."
      },
      {
        pattern: "Hindari Opsi Jawaban Ekstrem",
        hack: "Pilihan jawaban yang mengandung kata mutlak seperti 'always', 'never', 'impossible', 'completely' hampir pasti SALAH. Jawaban teks ilmiah biasanya bernada moderat ('often', 'tends to', 'may').",
        trapAlert: "⚠️ Jebakan: Opsi ekstrem yang terkesan sangat meyakinkan."
      }
    ],
    cheatSheet: [
      { label: "Waktu Rata-rata per Soal", value: "±55 detik per soal" },
      { label: "Urutan Kerja Paling Efektif", value: "Baca Soal Dulu -> Scan Teks -> Jawab" },
      { label: "Letak Ide Pokok", value: "Kalimat pembuka (baris 1-2) tiap paragraf" },
      { label: "Sisa Waktu Menipis", value: "Tembak 1 huruf konsisten (misal C semua)" }
    ],
    lucaMessage: "Kunci reading ninja itu hemat waktu! Jangan nikmati membaca seperti baca novel, cari mangsa informasinya dengan scanning mata elang! 🥷"
  },

  // ─── TOEFL MODUL 1: LISTENING PART A LENGKAP ────────────────
  "toefl-u-hack": {
    unitTitle: "Modul 1: Listening Part A (Trik Second Speaker & Anti-Bunyi Mirip)",
    badge: "🎧 Listening Part A",
    icon: "🎧",
    color: "#06b6d4",
    summary: "Pendalaman komprehensif Listening Part A 30 soal. Kuasai trik respon tidak langsung, ekspresi terkejut, penolakan sopan, dan pola percakapan perpustakaan/kampus.",
    goldenRules: [
      {
        rule: "Respon Negatif Halus (Negative Suggestion)",
        explanation: "Dalam bahasa Inggris akademik, penolakan sering disampaikan dengan ungkapan halus seperti 'I'm afraid...', 'I wish I could...', 'Not really'.",
        example: "'I'm afraid closed-toe shoes are required' artinya orang tersebut menolak/melarang memakai sandal.",
        formula: "'I'm afraid...' = 'Maaf, tidak bisa / dilarang'"
      },
      {
        rule: "Pola Percakapan Khas Kampus",
        explanation: "Hampir semua skenario berkisar tentang: tugas makalah (research paper), buku cadangan di perpustakaan (reserve desk), bimbingan dosen (office hours), dan izin parkir (parking permit).",
        example: "Petugas pustaka: 'That book is on two-hour reserve.' -> Makna: Buku tidak boleh dibawa pulang, hanya boleh dibaca di ruang baca selama 2 jam.",
        formula: "Pahami terminologi kampus: Reserve Desk, Syllabus, Registrar, Prerequisite"
      }
    ],
    questionTips: [
      {
        pattern: "Tipe Soal 'What will the speaker probably do next?'",
        hack: "Dengarkan aksi konkret terakhir yang disebut pembicara. Biasanya berupa janji mengecek buku, menelepon kantor, atau menemui profesor.",
        trapAlert: "⚠️ Jebakan: Opsi yang menyebutkan tindakan yang sudah selesai dilakukan tadi."
      }
    ],
    cheatSheet: [
      { label: "Fokus Utama", value: "Percakapan 30 soal singkat orang kedua" },
      { label: "Topik Terpopuler", value: "Deadline tugas, perpustakaan, nilai ujian" },
      { label: "Trik Emas", value: "Pilih sinonim, buang opsi bunyi mirip" }
    ],
    lucaMessage: "Listening Part A itu lumbung poin termudah! Kuasai modul ini dan skor listeningmu langsung tembus 50+! 💪"
  },

  // ─── TOEFL MODUL 2: LISTENING PART B & C ────────────────────
  "toefl-day2": {
    unitTitle: "Modul 2: Listening Part B & C (Percakapan Panjang & Diskusi Akademis)",
    badge: "🎙️ Listening Part B & C",
    icon: "🎙️",
    color: "#6366f1",
    summary: "Part B (Percakapan Panjang) & Part C (Ceramah Dosen). Kuncinya adalah mengintip opsi jawaban sebelum rekaman berputar untuk memprediksi topik bahasan.",
    goldenRules: [
      {
        rule: "Trik Intip Pilihan Jawaban (Previewing Options)",
        explanation: "Saat narrator membaca petunjuk, mata kamu WAJIB membaca cepat opsi pilihan A, B, C, D dari 3–4 soal di depan. Dengan begitu otakmu sudah tahu topik apa yang sedang dibahas.",
        example: "Opsi jawaban menyebut: photosynthesis, sunlight, chloroplasts. Otakmu langsung bersiap menangkap kuliah Biologi tentang fotosintesis!",
        formula: "Intip Opsi -> Tebak Topik Kuliah -> Dengarkan Fakta Kunci Saat Audio Berjalan"
      },
      {
        rule: "Alur Soal Berurutan (Chronological Order)",
        explanation: "Pertanyaan di Part B dan Part C SELALU bergerak berurutan dari awal ceramah, tengah, hingga kesimpulan akhir. Soal 1 ada di kalimat pembuka dosen.",
        example: "Soal pertama hampir selalu menanyakan: 'What is the lecture mainly about?' yang dijawab di 2 kalimat awal dosen.",
        formula: "Soal 1 = Awal Kuliah | Soal 2-3 = Fakta Tengah | Soal 4 = Kesimpulan / Tugas"
      }
    ],
    questionTips: [
      {
        pattern: "Catatan Sederhana (Mental Notes)",
        hack: "Fokus pada kata-kata transisi dosen: 'First, ...', 'In contrast, ...', 'The most important reason is...'. Itu adalah sinyal kuat munculnya soal!",
        trapAlert: "⚠️ Jebakan: Menulis terlalu banyak catatan sampai lupa mendengarkan alur pembicaraan."
      }
    ],
    cheatSheet: [
      { label: "Part B", value: "2 Percakapan panjang (masing-masing 3-4 soal)" },
      { label: "Part C", value: "3 Kuliah dosen akademis (masing-masing 4-5 soal)" },
      { label: "Strategi", value: "Intip opsi jawaban mendahului narrator" }
    ],
    lucaMessage: "Di Part C, bayangkan kamu mahasiswa yang duduk di baris depan kelas Harvard. Simak kalimat pembuka dosen untuk kantongi soal pertama! 🎓"
  },

  // ─── TOEFL MODUL 3: STRUCTURE KONEKTOR KLAUSA ───────────────
  "toefl-day3": {
    unitTitle: "Modul 3: Structure 1–15 (Rumus S+V & Konektor Klausa)",
    badge: "📐 Clause Connectors",
    icon: "📐",
    color: "#f59e0b",
    summary: "Konektor klausa koordinatif (FANBOYS) dan adverbial (Because, Although, If, When). Kuasai posisi koma dan keseimbangan klausa.",
    goldenRules: [
      {
        rule: "Konektor Koordinatif: FANBOYS",
        explanation: "Konektor setara: For, And, Nor, But, Or, Yet, So. Posisi tanda koma harus tepat sebelum konektor jika menggabungkan dua klausa utuh.",
        example: "The experiment was complex, BUT the results were promising.",
        formula: "S + V , [FANBOYS] S + V"
      },
      {
        rule: "Konektor Adverbial (Waktu & Sebab-Akibat)",
        explanation: "Jika konektor ada di depan, WAJIB pakai koma di tengah. Jika konektor ada di tengah, TIDAK PERLU koma.",
        example: "Because it was raining, we stayed indoors. ATAU We stayed indoors because it was raining.",
        formula: "Connector + S + V , S + V   VS   S + V + Connector + S + V"
      }
    ],
    questionTips: [
      {
        pattern: "Soal Kalimat Ber-Koma Tanpa Konektor",
        hack: "Jika ada 2 pasang S+V yang hanya dipisahkan koma, cari opsi jawaban yang menyediakan KONEKTOR.",
        trapAlert: "⚠️ Jebakan: Memilih opsi yang hanya menambah Subjek lagi tanpa konektor."
      }
    ],
    cheatSheet: [
      { label: "FANBOYS", value: "For, And, Nor, But, Or, Yet, So" },
      { label: "Posisi Koma", value: "Di depan FANBOYS jika menghubungkan 2 klausa" },
      { label: "Konektor Adverb", value: "Because, Although, Since, If, When, While" }
    ],
    lucaMessage: "Konektor itu seperti lem perekat dua kalimat. Kalau ada dua kalimat tapi gak ada lemnya, kalimatnya roboh! 🏗️"
  },

  // ─── TOEFL MODUL 4: WRITTEN EXPRESSION DETEKTIF ERROR ───────
  "toefl-day4": {
    unitTitle: "Modul 4: Written Expression 16–40 (Detektif 5 Dosa Error)",
    badge: "🕵️ Error Identification",
    icon: "🕵️",
    color: "#ec4899",
    summary: "25 Soal mencari kata bergaris bawah yang keliru. 5 Dosa Error terbesar: Subject-Verb Agreement, Paralelisme, Word Form, Pronoun, dan Kata Kerja.",
    goldenRules: [
      {
        rule: "Dosa 1: Subject-Verb Agreement Jamak vs Tunggal",
        explanation: "Subjek tunggal wajib berpasangan dengan Verb tunggal (akhiran -s/es untuk present tense). Hati-hati kata yang berakhiran -s tapi tunggal (economics, news, physics, measles).",
        example: "The number of applicants HAS increased (bukan 'have').",
        formula: "The number of + Noun Jamak + Verb TUNGGAL | A number of + Noun Jamak + Verb JAMAK"
      },
      {
        rule: "Dosa 2: Hukum Paralelisme Mutlak",
        explanation: "Kata sambung berpasangan atau deret koma mewajibkan bentuk gramatikal yang setara.",
        example: "She likes swimming, dancing, and TO READ ❌ -> Seharusnya: 'reading' ✅.",
        formula: "Neither A nor B  |  Either A or B  |  Not only A but also B (A dan B wajib sejenis!)"
      },
      {
        rule: "Dosa 3: Tertukar Antara Adjective dan Adverb",
        explanation: "Kata sifat (Adjective) menjelaskan kata benda. Kata keterangan (Adverb, berakhiran -ly) menjelaskan kata kerja, kata sifat lain, atau kalimat utuh.",
        example: "She sings BEAUTIFUL ❌ -> Seharusnya: 'beautifully' ✅ karena menerangkan kata kerja sings.",
        formula: "Adjective + Noun (careful driver) | Verb + Adverb (drives carefully)"
      }
    ],
    questionTips: [
      {
        pattern: "Cek Kata Bergaris Bawah di Sebelah 'and / or'",
        hack: "Jika ada kata bergaris bawah di dekat kata 'and', periksa kata sebelum 'and'. Bentuknya harus sama persis (noun-noun, ing-ing, ed-ed).",
        trapAlert: "⚠️ Jebakan: Bentuk paralel yang disamarkan dengan kata keterangan panjang."
      }
    ],
    cheatSheet: [
      { label: "Nomor Soal", value: "Soal 16 sampai 40 (Written Expression)" },
      { label: "Tugas Peserta", value: "Cari 1 kata yang SALAH (bukan yang benar)" },
      { label: "Cek Pertama", value: "Cek Subject-Verb Agreement & Paralelisme" }
    ],
    lucaMessage: "Jadilah detektif yang jeli! Cari kata yang merusak keharmonisan kalimat. Seringnya ada di paralelisme atau salah pakai kata sifat! 🕵️"
  },

  // ─── TOEFL MODUL 5: JURUS LANJUTAN 550+ ─────────────────────
  "toefl-day5": {
    unitTitle: "Modul 5: Jurus Lanjutan 550+ (Inversi, Reduced Clauses & Subjunctive)",
    badge: "⚡ Advanced Grammar 550+",
    icon: "⚡",
    color: "#8b5cf6",
    summary: "Materi penentu untuk mendongkrak skor dari 500 menuju 550-600+. Meliputi pola pembalikan kata (Inversion), pemadatan klausa, dan kalimat pengandaian tingkat tinggi.",
    goldenRules: [
      {
        rule: "Negative Inversion (Pembalikan Kata Negatif)",
        explanation: "Jika kalimat diawali kata negatif atau pembatas (Rarely, Seldom, Never, Scarcely, Hardly, Barely, Not only), posisi Subjek dan Kata Bantu (Auxiliary) WAJIB DIBALIK.",
        example: "Rarely WE SEE ❌ -> Seharusnya: 'Rarely DO WE SEE such talent' ✅.",
        formula: "Negative Word + [Auxiliary: do/does/did/is/has/can] + Subject + Verb"
      },
      {
        rule: "Reduced Clauses (Pemadatan Klausa)",
        explanation: "Klausa aktif diringkas menggunakan V-ing (Present Participle), sedangkan klausa pasif diringkas menggunakan V3 (Past Participle).",
        example: "Pasif: '[Constructed in 1889], the Eiffel Tower remains an icon.' (dari 'After it was constructed...')",
        formula: "Aktif = V-ing + Object | Pasif = V3 (Past Participle) + Preposition"
      },
      {
        rule: "Subjunctive Mood (Kata Kerja Mandat/Desakan)",
        explanation: "Kata kerja desakan (suggest, demand, insist, require, recommend) diikuti klausa 'that + Subject + V1 MURNI' tanpa tambahan s/es/ed walau subjeknya he/she/it.",
        example: "The doctor insisted that he TAKE the medicine (bukan 'takes' atau 'took').",
        formula: "Verb of Urgency + that + Subject + [Bare Infinitive / V1 Murni]"
      }
    ],
    questionTips: [
      {
        pattern: "Soal diawali 'Not only...' atau 'Rarely...'",
        hack: "Langsung cari opsi jawaban yang formatnya seperti kalimat tanya: Ada kata bantu (does, did, was, can) sebelum Subjek.",
        trapAlert: "⚠️ Jebakan: Memilih opsi dengan susunan normal S+V (misal 'Rarely he went' ❌)."
      }
    ],
    cheatSheet: [
      { label: "Kata Pemicu Inversi", value: "Rarely, Seldom, Never, Little, Scarcely, Not only" },
      { label: "Bentuk Reduced Aktif", value: "V-ing (Knowing the truth, he left)" },
      { label: "Bentuk Reduced Pasif", value: "V3 (Built of wood, the house burned)" },
      { label: "Subjunctive Verb", value: "Wajib V1 murni tanpa s/es (that he be, that she go)" }
    ],
    lucaMessage: "Kuasai modul inversi ini dan kamu resmi masuk ke kelompok 550+ elite TOEFL! Soal-soal ini yang membedakan skor rata-rata dengan skor beasiswa! 🌟"
  },

  // ─── TOEFL MODUL 6 & 7: READING COMPREHENSION PRACTICE ───────
  "toefl-day6": {
    unitTitle: "Modul 6: Reading Ninja (Scan & Skim Cepat Tanpa Baca Semua)",
    badge: "📖 Reading Strategies",
    icon: "📖",
    color: "#10b981",
    summary: "Teknik membaca cepat teks biologi, sejarah peradaban, geologi, dan astronomi. Strategi menjawab soal kosa kata konteks dan simpulan tersirat (inference).",
    goldenRules: [
      {
        rule: "Soal Simpulan Tersirat (Inference Questions)",
        explanation: "Soal dengan kata 'infer', 'imply', 'suggest' menanyakan fakta yang TIDAK ditulis terang-terangan di teks, tapi merupakan kesimpulan logis yang tak terbantahkan.",
        example: "Teks: 'The mammal only comes out after sunset.' -> Inference: Hewan tersebut adalah hewan nokturnal (nocturnal animal).",
        formula: "Fakta di Teks + Logika Sehat = Kesimpulan Tersirat (Inference)"
      },
      {
        rule: "Trik Kosakata dalam Konteks (Vocabulary in Context)",
        explanation: "Jangan pilih arti kamus harfiah! Masukkan keempat pilihan ke kalimat asli di teks. Pilihan yang paling mempertahankan logika kalimat adalah jawaban benar.",
        example: "Kata 'percolates' dalam teks geologi air tanah berarti 'filters / seeps down' (merembes), bukan mendidih.",
        formula: "Ganti kata di teks dengan 4 opsi -> Pilih yang paling masuk akal!"
      }
    ],
    questionTips: [
      {
        pattern: "Soal Referensi Kata Ganti ('The word 'they' in line 8 refers to...')",
        hack: "Cari kata benda jamak yang berada 1 kalimat SEBELUM kata 'they' tersebut muncul.",
        trapAlert: "⚠️ Jebakan: Memilih kata benda yang muncul setelah kata ganti tersebut."
      }
    ],
    cheatSheet: [
      { label: "Tipe Teks", value: "Sejarah, Biologi, Astronomi, Geologi, Seni" },
      { label: "Soal Inference", value: "Cari kesimpulan logis yang didukung bukti teks" },
      { label: "Soal Pronoun", value: "Lihat kata benda 1 kalimat ke belakang" }
    ],
    lucaMessage: "Di reading, jangan terjebak kata-kata ilmiah yang rumit. Fokus pada kata benda inti dan kata kerja aksinya! 🔍"
  },

  "toefl-u2": {
    unitTitle: "Modul 7: Reading Comprehension Practice (Bank Teks Sains & Sejarah)",
    badge: "🔬 Academic Passages",
    icon: "🔬",
    color: "#14b8a6",
    summary: "Latihan intensif teks sains laut dalam (deep-sea hatchetfish), peradaban kuno, dan revolusi industri. Mempertajam akurasi pada soal-soal paragraf panjang.",
    goldenRules: [
      {
        rule: "Struktur Paragraf Sebab-Akibat (Cause and Effect)",
        explanation: "Penulis teks ilmiah menggunakan kata transisi penanda akibat: 'Consequently', 'As a result', 'Leads to', 'Triggers'. Di sanalah rincian penting sering diujikan.",
        example: "The sudden drop in temperature triggered a mass migration.",
        formula: "Penyebab + Transisi (leads to / triggers) + Akibat"
      }
    ],
    questionTips: [
      {
        pattern: "Soal Author's Purpose ('Why does the author mention X?')",
        hack: "Penulis menyebutkan contoh kecil (X) untuk MEMBUKTIKAN atau MENGILUSTRASIKAN gagasan besar di kalimat sebelumnya.",
        trapAlert: "⚠️ Jebakan: Opsi yang hanya mengulang definisi X tanpa menjelaskan tujuannya."
      }
    ],
    cheatSheet: [
      { label: "Author's Purpose", value: "Untuk memberi contoh / menguatkan ide utama" },
      { label: "Negative Detail", value: "Pilih fakta yang TIDAK sesuai teks" }
    ],
    lucaMessage: "Teks sains itu penuh pola! Kenali polanya, dan kamu bisa menebak pertanyaannya bahkan sebelum membaca soalnya! 🔬"
  },

  // ─── TOEFL MODUL 8: BANK KOSAKATA AKADEMIK (AWL) ────────────
  "toefl-u1": {
    unitTitle: "Modul 8: Bank Kosakata Akademik (Academic Word List - AWL)",
    badge: "📚 Vocabulary AWL",
    icon: "📚",
    color: "#6366f1",
    summary: "Kosakata akademik level universitas: establish, indicate, consistent, derive, assess, constitute. Fondasi mutlak untuk memahami Reading dan Structure.",
    goldenRules: [
      {
        rule: "Awalan (Prefixes) Pengubah Makna",
        explanation: "Kuasai awalan kunci: in-/im-/un- (tidak), pre- (sebelum), post- (sesudah), inter- (antara), sub- (bawah), re- (kembali).",
        example: "'inviolability' -> in- (tidak) + violate (dilanggar) + -ability (kemampuan) = kesucian / tidak dapat diganggu gugat.",
        formula: "Prefix (Awalan) + Root Word (Akar Kata) + Suffix (Akhiran) = Makna Kata"
      }
    ],
    questionTips: [
      {
        pattern: "Tebak Makna Kata Lewat Konteks",
        hack: "Jika kamu belum pernah melihat kata tersebut, perhatikan kata sambung di sekitarnya. Jika ada 'unlike' atau 'however', maknanya berlawanan dengan kata sebelumnya.",
        trapAlert: "⚠️ Jebakan: Panik saat melihat kata ilmiah panjang."
      }
    ],
    cheatSheet: [
      { label: "AWL", value: "Academic Word List (570 kelompok kata universitas)" },
      { label: "Fungsi Utama", value: "Kunci menjawab 20% soal Reading & Vocabulary" }
    ],
    lucaMessage: "Kosakata itu amunisi belajarmu! Kuasai akar kata dan awalan, maka kamu bisa menebak ribuan kata baru dengan mudah! 💡"
  },

  // ─── TOEFL MODUL 9: KETERAMPILAN STRUKTUR ESAI ───────────────
  "toefl-u4": {
    unitTitle: "Modul 9: Keterampilan Struktur Esai & Kalimat Akademik",
    badge: "✍️ Academic Syntax",
    icon: "✍️",
    color: "#8b5cf6",
    summary: "Kohesi paragraf, klausa relatif (Relative Pronoun: Who, Whom, Which, Whose), dan konstruksi kalimat bertingkat bebas ambigu.",
    goldenRules: [
      {
        rule: "Who vs Whom vs Whose vs Which",
        explanation: "• Who = menggantikan orang sebagai Subjek\n• Whom = menggantikan orang sebagai Objek preposisi / kata kerja\n• Whose = kepemilikan (posesif)\n• Which = menggantikan benda / konsep",
        example: "The scientist WHOM the university honored... (Dr. Miller was honored by the university).",
        formula: "Who + Verb | Whom + Subject + Verb | Whose + Noun"
      }
    ],
    questionTips: [
      {
        pattern: "Konektor Relatif yang Berlebihan (Double Subject)",
        hack: "Waspadai kalimat yang sudah punya Subjek tapi ditambah kata ganti lagi: 'The book [which I bought it] yesterday' ❌. Kata 'it' berlebihan karena sudah ada 'which'!",
        trapAlert: "⚠️ Jebakan: Double pronoun (which ... it / who ... him)."
      }
    ],
    cheatSheet: [
      { label: "Who", value: "Orang (Subjek) -> The person WHO helped me" },
      { label: "Whom", value: "Orang (Objek) -> The student WHOM I taught" },
      { label: "Whose", value: "Kepemilikan -> The woman WHOSE car broke down" }
    ],
    lucaMessage: "Tata kalimat yang rapi bikin skormu melesat! Jangan biarkan ada subjek ganda di kalimatmu! ✍️"
  },

  // ─── TOEFL MODUL 10: SIMULASI LENGKAP 115 MENIT ─────────────
  "toefl-day7": {
    unitTitle: "Modul 10: Simulasi Ujian Lengkap & Prediksi Skor Resmi (310–677)",
    badge: "🎓 Full Simulation",
    icon: "🎓",
    color: "#f59e0b",
    summary: "Simulasi resmi 140 soal (50 Listening, 40 Structure, 50 Reading). Manajemen stamina mental, trik pacing timer, dan checklist kelulusan.",
    goldenRules: [
      {
        rule: "Manajemen Waktu Resmi ETS",
        explanation: "• Section 1 (Listening): 50 soal dalam ±35 menit (kecepatan dikontrol audio)\n• Section 2 (Structure): 40 soal dalam 25 menit (37 detik per soal!)\n• Section 3 (Reading): 50 soal dalam 55 menit (55 detik per soal)",
        example: "Di Structure, jika bingung di satu nomor lebih dari 45 detik, segera tebak dan beri tanda untuk lanjut nomor berikutnya!",
        formula: "Structure = 37s/soal | Reading = 55s/soal | Listening = Fokus Audio 1x"
      }
    ],
    questionTips: [
      {
        pattern: "Strategi 5 Menit Terakhir",
        hack: "Saat pengawas/timer menandakan 5 menit tersisa, cek lembar jawaban. Pastikan tidak ada satupun nomor yang kosong!",
        trapAlert: "⚠️ Jebakan: Kehabisan waktu saat lembar jawaban masih ada yang kosong."
      }
    ],
    cheatSheet: [
      { label: "Total Soal", value: "140 Soal Pilihan Ganda (A, B, C, D)" },
      { label: "Skala Skor", value: "310 (Minimum) sampai 677 (Maksimum)" },
      { label: "Target BUMN", value: "Minimal 500" },
      { label: "Target LPDP", value: "Minimal 550" }
    ],
    lucaMessage: "Ujian TOEFL itu bukan tes kepintaran, tapi tes kecepatan dan strategi! Kamu sudah menguasai ilmunya, saatnya buktikan di simulasi! 🏆"
  },

  // ─── KOREAN MODULE NOTES ─────────────────────────────────────
  "kr-u1": {
    unitTitle: "Huruf Vokal Hangul (모음)",
    badge: "🔤 Hangul Basics",
    icon: "🔤",
    color: "#f43f5e",
    summary: "Fondasi 10 vokal dasar Hangul (ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ). Prinsip filosofi Langit (•), Bumi (ㅡ), dan Manusia (ㅣ).",
    goldenRules: [
      {
        rule: "Huruf Vokal Berdiri Sendiri Butuh 'ㅇ'",
        explanation: "Vokal tidak boleh ditulis sendirian di awal suku kata. Wajib ditemani konsonan silent 'ㅇ' (ieung) sebagai wadah penampung suara vokal.",
        example: "Huruf 'a' ditulis '아' (bukan 'ㅏ'). Suaranya tetap murni 'a'.",
        formula: "ㅇ + ㅏ = 아 (a) | ㅇ + ㅗ = 오 (o)"
      },
      {
        rule: "Arah Garis Menentukan Bunyi (Luar vs Dalam)",
        explanation: "Garis mengarah ke kanan/luar adalah vokal cerah (ㅏ = a, ㅗ = o). Garis mengarah ke kiri/dalam adalah vokal gelap (ㅓ = eo, ㅜ = u).",
        example: "ㅏ (a) vs ㅓ (eo) | ㅗ (o) vs ㅜ (u)",
        formula: "1 Garis Tambahan = Menambah bunyi 'Y' (ㅏ [a] + 1 garis = ㅑ [ya])"
      }
    ],
    questionTips: [
      {
        pattern: "Membedakan ㅓ (eo) dan ㅗ (o)",
        hack: "ㅓ (eo) dibaca dengan mulut terbuka santai seperti 'o' pada kata 'orang'. ㅗ (o) dibaca dengan bibir membulat maju seperti 'o' pada kata 'toko'.",
        trapAlert: "⚠️ Jebakan: Menyamakan pelafalan ㅓ dan ㅗ."
      }
    ],
    cheatSheet: [
      { label: "ㅏ / ㅑ", value: "a / ya" },
      { label: "ㅓ / ㅕ", value: "eo / yeo" },
      { label: "ㅗ / ㅛ", value: "o / yo" },
      { label: "ㅜ / ㅠ", value: "u / yu" },
      { label: "ㅡ / ㅣ", value: "eu / i" }
    ],
    lucaMessage: "Hangul itu alfabet paling ilmiah di dunia! Diciptakan Raja Sejong agar rakyat bisa membacanya hanya dalam hitungan jam! 파이팅! 🇰🇷"
  },

  "kr-u2": {
    unitTitle: "Huruf Konsonan Hangul (자음)",
    badge: "🔤 Hangul Consonants",
    icon: "🔡",
    color: "#06b6d4",
    summary: "14 Konsonan dasar Hangul (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ) dan konsep Batchim (konsonan akhir).",
    goldenRules: [
      {
        rule: "Konsonan Meniru Bentuk Organ Mulut",
        explanation: "Huruf ㄱ meniru bentuk pangkal lidah menyentuh langit-langit mulut. Huruf ㄴ meniru ujung lidah menyentuh gigi atas. Huruf ㅁ meniru bentuk bibir tertutup.",
        example: "ㅁ = mulut tertutup (m) | ㅇ = tenggorokan terbuka (ng/silent)",
        formula: "Bentuk Huruf = Posisi Lidah & Bibir Saat Bersuara"
      },
      {
        rule: "Konsep Batchim (Konsonan Bawah/Akhir)",
        explanation: "Konsonan yang diletakkan di bagian bawah suku kata disebut Batchim. Huruf 'ㅇ' di bawah dibaca 'ng', sedangkan di atas silent.",
        example: "강 (k-a-ng = sungai). Di atas ada ㄱ (k), tengah ㅏ (a), bawah ㅇ (ng).",
        formula: "Konsonan Awal + Vokal Tengah + [Batchim Bawah]"
      }
    ],
    questionTips: [
      {
        pattern: "Perubahan Bunyi Konsonan Awal vs Batchim",
        hack: "Konsonan ㄷ, ㅅ, ㅈ, ㅊ, ㅎ jika berada di posisi Batchim (bawah) semuanya melunak menjadi bunyi 't'.",
        trapAlert: "⚠️ Jebakan: Membaca 'ㅅ' di bawah sebagai 's'. Kata '옷' dibaca 'ot' (baju), bukan 'os'!"
      }
    ],
    cheatSheet: [
      { label: "ㄱ / ㄴ / ㄷ / ㄹ", value: "g/k / n / d/t / r/l" },
      { label: "ㅁ / ㅂ / ㅅ / ㅇ", value: "m / b/p / s / silent (atas) atau ng (bawah)" },
      { label: "Batchim ㅇ", value: "Selalu berbunyi 'NG'" }
    ],
    lucaMessage: "Kuasai vokal dan konsonan, maka kamu sudah bisa membaca menu makanan Korea favoritmu seperti Tteokbokki dan Bibimbap! 🍲"
  },

  "kr-u3": {
    unitTitle: "Kosakata Dasar Korea & Angka",
    badge: "💬 Vocabulary & Numbers",
    icon: "🔢",
    color: "#3b82f6",
    summary: "Kosakata benda sehari-hari dan dua sistem angka Korea: Angka Sino-Korea (일, 이, 삼) untuk tanggal/uang/menit dan Angka Asli Korea (하나, 둘, 셋) untuk jam/umur/jumlah barang.",
    goldenRules: [
      {
        rule: "Dua Sistem Angka Korea",
        explanation: "Angka Sino (berasal dari huruf Mandarin) dipakai untuk Uang (Won), Nomor Telepon, Tanggal, dan Menit. Angka Asli Korea dipakai untuk Jam dan Satuan Benda.",
        example: "Pukul 3:30 = '세 시' (jam 3 pakai angka asli) '삼십 분' (30 menit pakai angka sino).",
        formula: "Jam = Angka Asli (하나, 둘, 셋) + 시 | Menit = Angka Sino (일, 이, 삼) + 분"
      }
    ],
    questionTips: [
      {
        pattern: "Menyebut Harga dan Menit",
        hack: "Ingat kata kunci: Uang (원 / won) dan Menit (분 / bun) selalu menggunakan Angka Sino (일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십).",
        trapAlert: "⚠️ Jebakan: Menggunakan angka asli '하나 원' untuk uang (salah!). Yang benar '일원'."
      }
    ],
    cheatSheet: [
      { label: "Sino 1-5", value: "일 (il), 이 (i), 삼 (sam), 사 (sa), 오 (o)" },
      { label: "Asli 1-5", value: "하나 (hana), 둘 (dul), 셋 (set), 넷 (net), 다섯 (daseot)" },
      { label: "Jam vs Menit", value: "Jam = Asli | Menit = Sino" }
    ],
    lucaMessage: "Gak usah pusing dengan dua sistem angka. Kuncinya: Jam itu Asli, Menit dan Uang itu Sino! ⏰"
  },

  "kr-u4": {
    unitTitle: "Salam Formal & Partikel Kalimat",
    badge: "🗣️ Formal Greetings",
    icon: "🗣️",
    color: "#8b5cf6",
    summary: "Ungkapan salam resmi (안녕하세요, 감사합니다), partikel subjek (-이/가), partikel topik (-은/는), dan partikel objek (-을/를).",
    goldenRules: [
      {
        rule: "Partikel Topik (-은/는) vs Partikel Subjek (-이/가)",
        explanation: "Jika kata benda berakhiran vokal gunakan '는' atau '가'. Jika berakhiran konsonan (batchim) gunakan '은' atau '이'.",
        example: "저 (saya, akhiran vokal) -> 저는 (jeoneun). 책 (buku, akhiran konsonan k) -> 책이 (chaegi).",
        formula: "Akhiran Vokal = -는 / -가 | Akhiran Konsonan (Batchim) = -은 / -이"
      }
    ],
    questionTips: [
      {
        pattern: "Memilih Akhiran Partikel yang Tepat",
        hack: "Cek huruf terakhir kata bendanya! Ada konsonan bawah (batchim) atau tidak? Itu penentu mutlaknya.",
        trapAlert: "⚠️ Jebakan: Menempelkan '은' pada kata yang berakhiran vokal (misal '나은' ❌ -> harusnya '나는' ✅)."
      }
    ],
    cheatSheet: [
      { label: "Partikel Topik", value: "-은 (ada batchim) / -는 (tanpa batchim)" },
      { label: "Partikel Subjek", value: "-이 (ada batchim) / -가 (tanpa batchim)" },
      { label: "Partikel Objek", value: "-을 (ada batchim) / -를 (tanpa batchim)" },
      { label: "Halo / Terima Kasih", value: "안녕하세요 (annyeonghaseyo) / 감사합니다 (gamsahamnida)" }
    ],
    lucaMessage: "Partikel itu ciri khas tata bahasa Korea. Begitu kamu paham aturan batchim, memasang partikel jadi semudah main puzzle! 🧩"
  },

  // ─── ENGLISH MODULE NOTES ─────────────────────────────────────
  "en-u1": {
    unitTitle: "Tenses Overview (Waktu & Aksi Kalimat)",
    badge: "⏱️ Grammar Tenses",
    icon: "⏱️",
    color: "#38bdf8",
    summary: "Tiga tenses pondasi utama: Simple Present (kebiasaan/fakta), Simple Past (kejadian masa lalu tuntas), dan Present Perfect (pengalaman/hasil hingga sekarang).",
    goldenRules: [
      {
        rule: "Simple Present: Tambahan -s/es untuk He/She/It",
        explanation: "Jika subjeknya orang ketiga tunggal (He, She, It, nama orang tunggal), kata kerja wajib diberi akhiran -s atau -es pada kalimat positif.",
        example: "They work every day. | She WORK-S every day.",
        formula: "He / She / It + Verb-s/es"
      },
      {
        rule: "Present Perfect (have/has + V3) vs Simple Past (V2)",
        explanation: "Gunakan Simple Past jika waktu di masa lalu spesifik (yesterday, in 2020, 2 days ago). Gunakan Present Perfect jika waktu tidak spesifik atau masih berpengaruh ke masa kini (already, since, for, ever).",
        example: "I SAW the movie yesterday (Past V2). | I HAVE SEEN that movie twice (Perfect V3).",
        formula: "Past = Waktu Spesifik (yesterday, ago) | Perfect = have/has + V3 (since, already)"
      }
    ],
    questionTips: [
      {
        pattern: "Perhatikan Keterangan Waktu (Time Signals)",
        hack: "Keterangan waktu adalah petunjuk tenses terkuat: 'yesterday / last week' = pasti V2. 'every day / usually' = pasti Present V1. 'since / for 3 years' = pasti have/has + V3.",
        trapAlert: "⚠️ Jebakan: Menggunakan 'have + V3' bersama kata 'yesterday' (salah!)."
      }
    ],
    cheatSheet: [
      { label: "Simple Present", value: "S + V1(-s/es) -> Fakta / Kebiasaan" },
      { label: "Simple Past", value: "S + V2 -> Kejadian lampau tuntas" },
      { label: "Present Perfect", value: "S + have/has + V3 -> Hasil / Pengalaman" }
    ],
    lucaMessage: "Tenses bahasa Inggris itu cuma soal sudut pandang waktu. Lihat kata penunjuk waktunya, dan rumusnya langsung ketemu! ⏱️"
  },

  "en-u2": {
    unitTitle: "Irregular Verbs V1-V2-V3",
    badge: "📖 Verb Conjugation",
    icon: "📖",
    color: "#f59e0b",
    summary: "Daftar kata kerja tidak beraturan yang sering menjebak dalam percakapan dan tes: go-went-gone, write-wrote-written, take-took-taken, speak-spoke-spoken.",
    goldenRules: [
      {
        rule: "Kelompok Kata Kerja Tidak Berubah Sama Sekali",
        explanation: "Beberapa kata kerja memiliki bentuk V1, V2, dan V3 yang sama persis: cut-cut-cut, put-put-put, cost-cost-cost, read-read-read (bacaan 'red').",
        example: "Yesterday he CUT the paper (bukan 'cutted'!).",
        formula: "Put - Put - Put | Cut - Cut - Cut | Cost - Cost - Cost"
      }
    ],
    questionTips: [
      {
        pattern: "Kata Kerja Berpola -en di V3",
        hack: "Banyak kata kerja berakhiran -en pada V3 (Past Participle): write-wrote-WRITTEN, break-broke-BROKEN, choose-chose-CHOSEN, speak-spoke-SPOKEN.",
        trapAlert: "⚠️ Jebakan: Memilih bentuk V2 setelah kata 'has / have'."
      }
    ],
    cheatSheet: [
      { label: "Go - Went - Gone", value: "Pergi" },
      { label: "See - Saw - Seen", value: "Melihat" },
      { label: "Do - Did - Done", value: "Mengerjakan" },
      { label: "Take - Took - Taken", value: "Mengambil" }
    ],
    lucaMessage: "Hafalkan irregular verbs lewat pola bunyinya seperti bernyanyi: sing-sang-sung, ring-rang-rung. Menyenangkan dan cepat nempel! 🎵"
  },

  "en-u3": {
    unitTitle: "Kalimat Profesional & Email Bisnis",
    badge: "💼 Business English",
    icon: "💼",
    color: "#10b981",
    summary: "Etiket menulis email profesional, permohonan sopan (Could you please, I would appreciate), dan frasa penutup formal (Sincerely, Best regards).",
    goldenRules: [
      {
        rule: "Tingkat Kesopanan: Modal Auxiliaries",
        explanation: "Gunakan 'Could you...' atau 'Would you be able to...' daripada 'Can you...' atau 'You must...' untuk komunikasi bisnis yang santun dan berbobot.",
        example: "'Could you please review the attached document at your earliest convenience?'",
        formula: "Could you please + V1 ... ?"
      }
    ],
    questionTips: [
      {
        pattern: "Menyampaikan Berita Buruk atau Penolakan Sopan",
        hack: "Gunakan frasa pembuka penyangga (buffer): 'Unfortunately, ...', 'I regret to inform you that...', 'Due to unforeseen circumstances...'.",
        trapAlert: "⚠️ Jebakan: Menolak secara frontal 'I reject your offer'."
      }
    ],
    cheatSheet: [
      { label: "Permohonan Sopan", value: "Could you please / Would it be possible to..." },
      { label: "Lampiran File", value: "Please find attached the file..." },
      { label: "Salam Penutup", value: "Sincerely, / Best regards," }
    ],
    lucaMessage: "Bahasa Inggris profesional itu kuncinya di kesopanan dan kejelasan pesan. Jadikan emailmu elegan dan percaya diri! 💼"
  }
};

// Expose globally
if (typeof window !== 'undefined') {
  window.UNIT_NOTES_DATA = UNIT_NOTES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UNIT_NOTES_DATA;
}

