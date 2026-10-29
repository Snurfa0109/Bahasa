const APP_DATA = {
  "korean": {
    "units": [
      {
        "id": "kr-u1",
        "title": "Huruf Vokal",
        "titleNative": "모음 (Mo-eum)",
        "icon": "🔤",
        "color": "#f43f5e",
        "month": 1,
        "description": "Pelajari 10 huruf vokal dasar Hangul. Ini fondasi segalanya!",
        "lessons": [
          {
            "id": "kr-u1-l1",
            "title": "Vokal ㅏ ㅑ ㅓ ㅕ",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "ㅏ",
                "romanization": "a",
                "pronunciation": "ah",
                "example": "아",
                "exampleRomanization": "a",
                "exampleMeaning": "Ah! (ekspresi vokal murni)",
                "whyRule": {
                  "badge": "⚠️ ATURAN EMAS HANGUL: Mengapa ditulis \"아\" pakai lingkaran \"ㅇ\"?",
                  "desc": "Dalam bahasa Korea, huruf vokal TIDAK BOLEH berdiri sendirian! Setiap suku kata WAJIB berbentuk balok minimal [Konsonan Awal + Vokal]. Karena bunyi \"a\" tidak punya konsonan awal, huruf lingkaran \"ㅇ\" (Ieung) dimasukkan sebagai \"konsonan bisu / placeholder (bunyi 0)\". Suaranya tetap murni \"a\", bukan \"nga\"!"
                },
                "tip": "Vokal vertikal (tegak lurus). Lingkaran \"ㅇ\" ditaruh di sebelah KIRI vokal -> jadi \"아\"!",
                "ttsText": "아",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅑ",
                "romanization": "ya",
                "pronunciation": "yah",
                "example": "야",
                "exampleRomanization": "ya",
                "exampleMeaning": "Hey! (panggil orang akrab)",
                "whyRule": {
                  "badge": "💡 Posisi \"ㅇ\" di Vokal Vertikal",
                  "desc": "Sama seperti ㅏ, huruf ㅑ juga berbentuk vertikal, sehingga konsonan bisu \"ㅇ\" diletakkan di KIRI -> jadi \"야\". Bunyinya murni \"ya\"!"
                },
                "tip": "Garis vertikal dengan 2 garis kecil = ada bunyi \"y\" di depan. Tetap pakai ㅇ di kiri!",
                "ttsText": "야",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅓ",
                "romanization": "eo",
                "pronunciation": "uh / oh terbuka",
                "example": "어",
                "exampleRomanization": "eo",
                "exampleMeaning": "Oh? / Hmm (ekspresi)",
                "tip": "Vokal vertikal (garis kecil ke kiri). Diberi konsonan bisu \"ㅇ\" di samping kiri -> jadi \"어\".",
                "ttsText": "어",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅕ",
                "romanization": "yeo",
                "pronunciation": "yuh",
                "example": "여기",
                "exampleRomanization": "yeo-gi",
                "exampleMeaning": "Di sini",
                "tip": "Perhatikan: suku kata \"여\" pakai ㅇ bisu di kiri karena bunyi vokal \"yeo\", sedangkan \"기\" pakai konsonan ㄱ + vokal ㅣ.",
                "ttsText": "여기",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "Kenapa huruf vokal ㅏ ditulis sebagai 아?",
                "char": null,
                "options": [
                  "Karena huruf vokal wajib ditemani konsonan awal (ㅇ sebagai konsonan bisu)",
                  "Karena ㅇ dibaca \"ng\"",
                  "Karena biar hurufnya kelihatan lebih besar",
                  "Hanya variasi gaya tulisan"
                ],
                "answer": 0
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅏ",
                "options": [
                  "a",
                  "ya",
                  "eo",
                  "yeo"
                ],
                "answer": 0
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅑ",
                "options": [
                  "a",
                  "ya",
                  "eo",
                  "yeo"
                ],
                "answer": 1
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅓ",
                "options": [
                  "a",
                  "ya",
                  "eo",
                  "yo"
                ],
                "answer": 2
              },
              {
                "q": "Huruf mana yang berbunyi \"a\"?",
                "char": null,
                "options": [
                  "ㅑ",
                  "ㅓ",
                  "ㅏ",
                  "ㅕ"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "kr-u1-l2",
            "title": "Vokal ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "ㅗ",
                "romanization": "o",
                "pronunciation": "oh",
                "example": "오다",
                "exampleRomanization": "o-da",
                "exampleMeaning": "Datang",
                "whyRule": {
                  "badge": "📐 Posisi \"ㅇ\" pada Vokal Horizontal (Mendatar)",
                  "desc": "Huruf ㅗ berbentuk horizontal (tidur mendatar). Untuk vokal horizontal, konsonan bisu \"ㅇ\" ditaruh di ATAS vokal, bukan di samping! Jadi ditulis \"오\" (dibaca \"o\")."
                },
                "tip": "Vokal horizontal: \"ㅇ\" diletakkan di ATAS -> \"오\". Datang = 오다 (o-da).",
                "ttsText": "오다",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅛ",
                "romanization": "yo",
                "pronunciation": "yoh",
                "example": "요리",
                "exampleRomanization": "yo-ri",
                "exampleMeaning": "Memasak",
                "tip": "Vokal horizontal: \"ㅇ\" di ATAS -> \"요\". Memasak = 요리 (yo-ri).",
                "ttsText": "요리",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅜ",
                "romanization": "u",
                "pronunciation": "oo",
                "example": "우유",
                "exampleRomanization": "u-yu",
                "exampleMeaning": "Susu",
                "tip": "Dua-duanya vokal horizontal! \"우\" dan \"유\" sama-sama punya ㅇ bisu di atas. Susu = 우유 (u-yu).",
                "ttsText": "우유",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅠ",
                "romanization": "yu",
                "pronunciation": "yoo",
                "example": "유리",
                "exampleRomanization": "yu-ri",
                "exampleMeaning": "Kaca / nama orang",
                "tip": "Vokal horizontal: \"ㅇ\" di ATAS -> \"유\". Kaca = 유리 (yu-ri).",
                "ttsText": "유리",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅡ",
                "romanization": "eu",
                "pronunciation": "eu (mulut datar)",
                "example": "으...",
                "exampleRomanization": "eu...",
                "exampleMeaning": "Hmm... (ekspresi menahan)",
                "tip": "Vokal horizontal murni: garis datar saja. \"ㅇ\" di ATAS -> \"으\". Tarik sudut bibir ke samping.",
                "ttsText": "으",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅣ",
                "romanization": "i",
                "pronunciation": "ee",
                "example": "이름",
                "exampleRomanization": "i-reum",
                "exampleMeaning": "Nama",
                "tip": "Kembali ke vokal vertikal (garis tegak)! \"ㅇ\" diletakkan di KIRI -> \"이\". Nama = 이름 (i-reum).",
                "ttsText": "이름",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "Di mana posisi konsonan bisu ㅇ untuk vokal horizontal (seperti ㅗ atau ㅜ)?",
                "char": null,
                "options": [
                  "Di atas vokal",
                  "Di bawah vokal",
                  "Di sebelah kanan",
                  "Di sebelah kiri"
                ],
                "answer": 0
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅗ",
                "options": [
                  "u",
                  "o",
                  "yo",
                  "yu"
                ],
                "answer": 1
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅜ",
                "options": [
                  "u",
                  "o",
                  "yo",
                  "yu"
                ],
                "answer": 0
              },
              {
                "q": "Apa bunyi dari huruf ini?",
                "char": "ㅣ",
                "options": [
                  "eu",
                  "u",
                  "i",
                  "ya"
                ],
                "answer": 2
              },
              {
                "q": "Huruf mana yang berbunyi \"yo\"?",
                "char": null,
                "options": [
                  "ㅗ",
                  "ㅛ",
                  "ㅜ",
                  "ㅠ"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "kr-u1-l3",
            "title": "Review Vokal — Match Game",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "ㅏ",
                "right": "a"
              },
              {
                "left": "ㅓ",
                "right": "eo"
              },
              {
                "left": "ㅗ",
                "right": "o"
              },
              {
                "left": "ㅜ",
                "right": "u"
              },
              {
                "left": "ㅣ",
                "right": "i"
              },
              {
                "left": "ㅡ",
                "right": "eu"
              }
            ]
          }
        ]
      },
      {
        "id": "kr-u2",
        "title": "Huruf Konsonan",
        "titleNative": "자음 (Ja-eum)",
        "icon": "🔠",
        "color": "#a855f7",
        "month": 1,
        "description": "Pelajari 14 konsonan dasar. Gabungin dengan vokal = kata!",
        "lessons": [
          {
            "id": "kr-u2-l1",
            "title": "Konsonan ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "ㄱ",
                "romanization": "g/k",
                "pronunciation": "g (awal) / k (akhir)",
                "example": "가방 (gabang)",
                "exampleMeaning": "Tas",
                "tip": "Berbentuk sudut — bunyi \"g\" di awal kata, \"k\" di akhir",
                "ttsText": "가방",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㄴ",
                "romanization": "n",
                "pronunciation": "n",
                "example": "나 (na)",
                "exampleMeaning": "Aku (informal)",
                "tip": "Berbentuk L terbalik — bunyi \"n\" seperti dalam \"nasi\"",
                "ttsText": "나",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㄷ",
                "romanization": "d/t",
                "pronunciation": "d (awal) / t (akhir)",
                "example": "도시 (dosi)",
                "exampleMeaning": "Kota",
                "tip": "Seperti kotak terbuka di atas — bunyi \"d\" di awal",
                "ttsText": "도시",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㄹ",
                "romanization": "r/l",
                "pronunciation": "r (awal) / l (akhir)",
                "example": "라면 (ramyeon)",
                "exampleMeaning": "Ramen (mi instan Korea)",
                "tip": "Bunyi di antara r dan l — lidah sedikit bergetar",
                "ttsText": "라면",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅁ",
                "romanization": "m",
                "pronunciation": "m",
                "example": "물 (mul)",
                "exampleMeaning": "Air",
                "tip": "Berbentuk kotak — bunyi \"m\" seperti dalam \"makan\"",
                "ttsText": "물",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅂ",
                "romanization": "b/p",
                "pronunciation": "b (awal) / p (akhir)",
                "example": "밥 (bap)",
                "exampleMeaning": "Nasi",
                "tip": "Seperti kotak dengan garis di atas — bunyi \"b\" di awal",
                "ttsText": "밥",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅅ",
                "romanization": "s",
                "pronunciation": "s / sh",
                "example": "사람 (saram)",
                "exampleMeaning": "Orang",
                "tip": "Seperti huruf V terbalik — bunyi \"s\" atau \"sh\" sebelum i/y",
                "ttsText": "사람",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "Bunyi konsonan ㄱ di awal kata adalah?",
                "char": "ㄱ",
                "options": [
                  "k",
                  "g",
                  "n",
                  "d"
                ],
                "answer": 1
              },
              {
                "q": "Kata apa ini artinya? 물",
                "char": null,
                "options": [
                  "Nasi",
                  "Orang",
                  "Air",
                  "Kota"
                ],
                "answer": 2
              },
              {
                "q": "Kata apa ini artinya? 밥",
                "char": null,
                "options": [
                  "Air",
                  "Nasi",
                  "Tas",
                  "Ramen"
                ],
                "answer": 1
              },
              {
                "q": "Apa bunyi dari huruf ㄹ?",
                "char": "ㄹ",
                "options": [
                  "n",
                  "m",
                  "r/l",
                  "s"
                ],
                "answer": 2
              },
              {
                "q": "Apa bunyi dari huruf ㄴ?",
                "char": "ㄴ",
                "options": [
                  "m",
                  "n",
                  "b",
                  "r"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "kr-u2-l2",
            "title": "Konsonan ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "ㅇ",
                "romanization": "Ieung (이응)",
                "pronunciation": "Bisu (di awal) / \"ng\" (di akhir)",
                "example": "앙 / 아이",
                "exampleRomanization": "ang / a-i",
                "exampleMeaning": "Perbandingan: 앙 (ang) vs 아이 (a-i)",
                "whyRule": {
                  "badge": "🌟 MISTERI HURUF \"ㅇ\": Kapan Bisu & Kapan Berbunyi \"NG\"?",
                  "desc": "Huruf ㅇ punya DUA peran jenius:\n1️⃣ DI AWAL/ATAS SUKU KATA: 100% BISU (SILENT / Bunyi 0)! Fungsinya cuma jadi \"placeholder\" menemani vokal karena vokal tidak boleh telanjang (contoh: 아 = \"a\", 오 = \"o\", 아이 = \"a-i\").\n2️⃣ DI BAWAH (BATCHIM / Konsonan Akhir): Berbunyi \"NG\" seperti dalam kata \"senang\"!\nContoh mahakarya: \"앙\"\n• ㅇ atas = bisu (0)\n• ㅏ tengah = a\n• ㅇ bawah = ng\n👉 Dibaca: \"ang\"!"
                },
                "tip": "Ingat kuncinya: Di ATAS/AWAL = BISU (0). Di BAWAH/AKHIR = \"NG\"!",
                "ttsText": "앙. 아이.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅈ",
                "romanization": "j",
                "pronunciation": "j",
                "example": "저",
                "exampleRomanization": "jeo",
                "exampleMeaning": "Saya (sopan/formal)",
                "tip": "Bunyi \"j\" seperti dalam \"jalan\"",
                "ttsText": "저",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅊ",
                "romanization": "ch",
                "pronunciation": "ch (aspirated)",
                "example": "책",
                "exampleRomanization": "chaek",
                "exampleMeaning": "Buku",
                "tip": "Bunyi \"ch\" dengan hembusan napas",
                "ttsText": "책",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅋ",
                "romanization": "k",
                "pronunciation": "k (aspirated)",
                "example": "커피",
                "exampleRomanization": "keo-pi",
                "exampleMeaning": "Kopi",
                "tip": "Bunyi \"k\" keras dengan hembusan napas kuat",
                "ttsText": "커피",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅌ",
                "romanization": "t",
                "pronunciation": "t (aspirated)",
                "example": "타다",
                "exampleRomanization": "ta-da",
                "exampleMeaning": "Naik (kendaraan)",
                "tip": "Bunyi \"t\" keras dengan hembusan napas",
                "ttsText": "타다",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅍ",
                "romanization": "p",
                "pronunciation": "p (aspirated)",
                "example": "피자",
                "exampleRomanization": "pi-ja",
                "exampleMeaning": "Pizza",
                "tip": "Bunyi \"p\" keras dengan hembusan napas",
                "ttsText": "피자",
                "ttsLang": "ko-KR"
              },
              {
                "front": "ㅎ",
                "romanization": "h",
                "pronunciation": "h",
                "example": "학교",
                "exampleRomanization": "hak-gyo",
                "exampleMeaning": "Sekolah",
                "tip": "Bunyi \"h\" — mirip \"h\" dalam bahasa Indonesia",
                "ttsText": "학교",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "Kapan huruf ㅇ berbunyi \"NG\"?",
                "char": "ㅇ",
                "options": [
                  "Hanya saat di bawah (sebagai konsonan akhir / batchim)",
                  "Selalu berbunyi \"ng\" di mana saja",
                  "Hanya saat di depan huruf vokal",
                  "Tidak pernah berbunyi \"ng\""
                ],
                "answer": 0
              },
              {
                "q": "Bagaimana bunyi huruf ㅇ jika diletakkan di AWAL suku kata (seperti pada \"아\")?",
                "char": "ㅇ",
                "options": [
                  "Bisu / Silent (bunyi 0, hanya pelengkap vokal)",
                  "Berbunyi \"ng\"",
                  "Berbunyi \"h\"",
                  "Berbunyi \"g\""
                ],
                "answer": 0
              },
              {
                "q": "Kata apa ini artinya? 책",
                "char": null,
                "options": [
                  "Kopi",
                  "Buku",
                  "Sekolah",
                  "Pizza"
                ],
                "answer": 1
              },
              {
                "q": "Kata apa ini artinya? 커피",
                "char": null,
                "options": [
                  "Teh",
                  "Air",
                  "Kopi",
                  "Susu"
                ],
                "answer": 2
              },
              {
                "q": "Huruf mana yang berbunyi \"h\"?",
                "char": null,
                "options": [
                  "ㅊ",
                  "ㅋ",
                  "ㅌ",
                  "ㅎ"
                ],
                "answer": 3
              }
            ]
          },
          {
            "id": "kr-u2-l3",
            "title": "Review Konsonan — Match Game",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "ㄱ",
                "right": "g/k"
              },
              {
                "left": "ㄴ",
                "right": "n"
              },
              {
                "left": "ㅁ",
                "right": "m"
              },
              {
                "left": "ㅅ",
                "right": "s"
              },
              {
                "left": "ㅎ",
                "right": "h"
              },
              {
                "left": "ㅊ",
                "right": "ch"
              }
            ]
          }
        ]
      },
      {
        "id": "kr-u3",
        "title": "Kosakata Dasar",
        "titleNative": "기본 단어 (Gibon Daneo)",
        "icon": "📖",
        "color": "#06b6d4",
        "month": 1,
        "description": "Kata-kata paling umum dalam bahasa Korea. Dengar & hafal!",
        "lessons": [
          {
            "id": "kr-u3-l1",
            "title": "Kata Benda Sehari-hari",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "물",
                "romanization": "mul",
                "pronunciation": "mool",
                "example": "물 주세요",
                "exampleRomanization": "mul ju-se-yo",
                "exampleMeaning": "Tolong beri air",
                "tip": "Kata paling penting! Air.",
                "ttsText": "물 주세요",
                "ttsLang": "ko-KR"
              },
              {
                "front": "밥",
                "romanization": "bap",
                "pronunciation": "bap",
                "example": "밥 먹었어요?",
                "exampleRomanization": "bap meo-geo-sseo-yo?",
                "exampleMeaning": "Sudah makan?",
                "tip": "Sapaan umum di Korea adalah menanyakan ini!",
                "ttsText": "밥 먹었어요?",
                "ttsLang": "ko-KR"
              },
              {
                "front": "사람",
                "romanization": "saram",
                "pronunciation": "sa-ram",
                "example": "좋은 사람",
                "exampleRomanization": "jo-eun sa-ram",
                "exampleMeaning": "Orang yang baik",
                "tip": "Orang / manusia.",
                "ttsText": "좋은 사람",
                "ttsLang": "ko-KR"
              },
              {
                "front": "친구",
                "romanization": "chingu",
                "pronunciation": "chin-gu",
                "example": "친구 있어요?",
                "exampleRomanization": "chin-gu i-sseo-yo?",
                "exampleMeaning": "Punya teman?",
                "tip": "Teman.",
                "ttsText": "친구 있어요?",
                "ttsLang": "ko-KR"
              },
              {
                "front": "회사",
                "romanization": "hoesa",
                "pronunciation": "hoe-sa",
                "example": "회사에 가요",
                "exampleRomanization": "hoe-sa-e ga-yo",
                "exampleMeaning": "Pergi ke kantor",
                "tip": "Kantor / perusahaan. Penting untuk konteks kerja!",
                "ttsText": "회사에 가요",
                "ttsLang": "ko-KR"
              },
              {
                "front": "일",
                "romanization": "il",
                "pronunciation": "il",
                "example": "일 잘 해요",
                "exampleRomanization": "il jal hae-yo",
                "exampleMeaning": "Bekerja dengan baik",
                "tip": "Pekerjaan / hari. Bisa dua arti!",
                "ttsText": "일 잘 해요",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "Apa arti dari 물?",
                "char": null,
                "options": [
                  "Nasi",
                  "Teman",
                  "Air",
                  "Kantor"
                ],
                "answer": 2
              },
              {
                "q": "Apa arti dari 친구?",
                "char": null,
                "options": [
                  "Keluarga",
                  "Teman",
                  "Orang",
                  "Musuh"
                ],
                "answer": 1
              },
              {
                "q": "Kata apa yang berarti \"kantor\"?",
                "char": null,
                "options": [
                  "일",
                  "밥",
                  "회사",
                  "사람"
                ],
                "answer": 2
              },
              {
                "q": "Apa arti dari 밥?",
                "char": null,
                "options": [
                  "Minum",
                  "Nasi/Makan",
                  "Masak",
                  "Beli"
                ],
                "answer": 1
              },
              {
                "q": "사람 artinya?",
                "char": null,
                "options": [
                  "Orang",
                  "Tempat",
                  "Waktu",
                  "Hal"
                ],
                "answer": 0
              }
            ]
          },
          {
            "id": "kr-u3-l2",
            "title": "Match: Korea ↔ Indonesia",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "물",
                "right": "Air"
              },
              {
                "left": "밥",
                "right": "Nasi"
              },
              {
                "left": "친구",
                "right": "Teman"
              },
              {
                "left": "회사",
                "right": "Kantor"
              },
              {
                "left": "사람",
                "right": "Orang"
              },
              {
                "left": "일",
                "right": "Pekerjaan"
              }
            ]
          }
        ]
      },
      {
        "id": "kr-u4",
        "title": "Salam Formal",
        "titleNative": "공식 인사 (Gongsik Insa)",
        "icon": "🤝",
        "color": "#f59e0b",
        "month": 2,
        "description": "Sapaan & ungkapan formal — WAJIB untuk konteks kerja di Korea!",
        "lessons": [
          {
            "id": "kr-u4-l1",
            "title": "Salam Dasar Formal",
            "type": "flashcard-quiz",
            "xpReward": 25,
            "cards": [
              {
                "front": "안녕하세요",
                "romanization": "annyeonghaseyo",
                "pronunciation": "an-nyeong-ha-se-yo",
                "example": "안녕하세요! 처음 뵙겠습니다.",
                "exampleRomanization": "an-nyeong-ha-se-yo! cheo-eum boep-get-seum-ni-da",
                "exampleMeaning": "Halo! Senang bertemu dengan Anda.",
                "tip": "Salam formal paling umum. Gunakan ini SELALU di tempat kerja.",
                "ttsText": "안녕하세요! 처음 뵙겠습니다.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "감사합니다",
                "romanization": "gamsahamnida",
                "pronunciation": "gam-sa-ham-ni-da",
                "example": "도와주셔서 감사합니다.",
                "exampleRomanization": "do-wa-ju-syeo-seo gam-sa-ham-ni-da",
                "exampleMeaning": "Terima kasih sudah membantu.",
                "tip": "Terima kasih (sangat formal). Gunakan ini di kantor, bukan 고마워요.",
                "ttsText": "도와주셔서 감사합니다.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "죄송합니다",
                "romanization": "joesonghamnida",
                "pronunciation": "joe-song-ham-ni-da",
                "example": "늦어서 죄송합니다.",
                "exampleRomanization": "neu-jeo-seo joe-song-ham-ni-da",
                "exampleMeaning": "Maaf sudah terlambat.",
                "tip": "Maaf (sangat formal). Lebih sopan dari 미안해요.",
                "ttsText": "늦어서 죄송합니다.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "잘 부탁드립니다",
                "romanization": "jal butakdeurimnida",
                "pronunciation": "jal bu-tak-deu-rim-ni-da",
                "example": "앞으로 잘 부탁드립니다.",
                "exampleRomanization": "a-peu-ro jal bu-tak-deu-rim-ni-da",
                "exampleMeaning": "Mohon bimbingannya ke depan.",
                "tip": "Ungkapan penting di tempat kerja — diucapkan saat perkenalan atau memulai kerjasama.",
                "ttsText": "앞으로 잘 부탁드립니다.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "알겠습니다",
                "romanization": "algesseumnida",
                "pronunciation": "al-ges-seum-ni-da",
                "example": "네, 알겠습니다.",
                "exampleRomanization": "ne, al-ges-seum-ni-da",
                "exampleMeaning": "Baik, saya mengerti.",
                "tip": "Jawaban formal ketika menerima instruksi dari atasan.",
                "ttsText": "네, 알겠습니다.",
                "ttsLang": "ko-KR"
              },
              {
                "front": "처음 뵙겠습니다",
                "romanization": "cheoeum boepgesseumnida",
                "pronunciation": "cheo-eum boep-ges-seum-ni-da",
                "example": "처음 뵙겠습니다. 저는 {userName}입니다.",
                "exampleRomanization": "cheo-eum boep-get-seum-ni-da. jeo-neun {userName}-im-ni-da",
                "exampleMeaning": "Salam kenal. Saya {userName}.",
                "tip": "Perkenalan formal. Otomatis memakai nama kamu saat berkenalan di tempat kerja!",
                "ttsText": "처음 뵙겠습니다. 저는 {userName}입니다.",
                "ttsLang": "ko-KR"
              }
            ],
            "quiz": [
              {
                "q": "감사합니다 artinya?",
                "char": null,
                "options": [
                  "Halo",
                  "Maaf",
                  "Terima kasih",
                  "Permisi"
                ],
                "answer": 2
              },
              {
                "q": "Mana ungkapan yang tepat ketika TERLAMBAT ke rapat?",
                "char": null,
                "options": [
                  "감사합니다",
                  "죄송합니다",
                  "알겠습니다",
                  "안녕하세요"
                ],
                "answer": 1
              },
              {
                "q": "Atasan memberi instruksi. Jawaban formal yang tepat?",
                "char": null,
                "options": [
                  "감사합니다",
                  "죄송합니다",
                  "알겠습니다",
                  "안녕하세요"
                ],
                "answer": 2
              },
              {
                "q": "\"잘 부탁드립니다\" diucapkan saat?",
                "char": null,
                "options": [
                  "Pamit pulang",
                  "Minta maaf",
                  "Perkenalan/mulai kerjasama",
                  "Makan siang"
                ],
                "answer": 2
              },
              {
                "q": "Ungkapan perkenalan formal pertama kali bertemu?",
                "char": null,
                "options": [
                  "안녕하세요",
                  "처음 뵙겠습니다",
                  "감사합니다",
                  "알겠습니다"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "kr-u4-l2",
            "title": "Match: Situasi ↔ Ungkapan",
            "type": "match",
            "xpReward": 25,
            "pairs": [
              {
                "left": "Halo (formal)",
                "right": "안녕하세요"
              },
              {
                "left": "Terima kasih",
                "right": "감사합니다"
              },
              {
                "left": "Maaf (formal)",
                "right": "죄송합니다"
              },
              {
                "left": "Saya mengerti",
                "right": "알겠습니다"
              },
              {
                "left": "Salam kenal",
                "right": "처음 뵙겠습니다"
              },
              {
                "left": "Mohon bimbingannya",
                "right": "잘 부탁드립니다"
              }
            ]
          },
          {
            "id": "kr-u4-l3",
            "title": "Fill in the Blank — Formal",
            "type": "fill-blank",
            "xpReward": 30,
            "questions": [
              {
                "context": "Kamu baru datang ke kantor di pagi hari. Kamu menyapa rekan kerja:",
                "sentence": "_________! 오늘도 잘 부탁드립니다.",
                "hint": "Salam pagi formal",
                "answer": "안녕하세요",
                "options": [
                  "안녕하세요",
                  "감사합니다",
                  "죄송합니다",
                  "알겠습니다"
                ],
                "ttsText": "안녕하세요! 오늘도 잘 부탁드립니다.",
                "ttsLang": "ko-KR"
              },
              {
                "context": "Atasanmu membantu menyelesaikan masalah. Kamu berkata:",
                "sentence": "도와주셔서 _________.",
                "hint": "Terima kasih sudah membantu",
                "answer": "감사합니다",
                "options": [
                  "죄송합니다",
                  "감사합니다",
                  "알겠습니다",
                  "안녕하세요"
                ],
                "ttsText": "도와주셔서 감사합니다.",
                "ttsLang": "ko-KR"
              },
              {
                "context": "Bosmu memberi tugas baru. Kamu menjawab dengan sopan:",
                "sentence": "네, _________.",
                "hint": "Menyatakan bahwa kamu mengerti",
                "answer": "알겠습니다",
                "options": [
                  "감사합니다",
                  "죄송합니다",
                  "알겠습니다",
                  "처음 뵙겠습니다"
                ],
                "ttsText": "네, 알겠습니다.",
                "ttsLang": "ko-KR"
              }
            ]
          }
        ]
      }
    ]
  },
  "english": {
    "units": [
      {
        "id": "en-u1",
        "title": "Tenses Overview",
        "titleNative": "Waktu dalam Bahasa Inggris",
        "icon": "⏰",
        "color": "#3b82f6",
        "month": 1,
        "description": "Present, Past, Future — kapan pakai yang mana? Visualisasi dulu!",
        "lessons": [
          {
            "id": "en-u1-l1",
            "title": "Present Tenses",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "Simple Present",
                "romanization": "S + V1 (+ s/es)",
                "pronunciation": "I work / She works",
                "example": "I work at a company. / She works every day.",
                "exampleMeaning": "Saya bekerja di perusahaan. / Dia bekerja setiap hari.",
                "tip": "✅ Untuk: kebiasaan, fakta, rutinitas. Tambah -s/-es untuk he/she/it.",
                "ttsText": "I work at a company. She works every day.",
                "ttsLang": "en-US"
              },
              {
                "front": "Present Continuous",
                "romanization": "S + is/am/are + V-ing",
                "pronunciation": "I am working",
                "example": "I am working on the report now. / She is attending a meeting.",
                "exampleMeaning": "Saya sedang mengerjakan laporan. / Dia sedang rapat.",
                "tip": "✅ Untuk: yang sedang terjadi SEKARANG. Pakai is/am/are + kata kerja-ing.",
                "ttsText": "I am working on the report now. She is attending a meeting.",
                "ttsLang": "en-US"
              },
              {
                "front": "Present Perfect",
                "romanization": "S + have/has + V3",
                "pronunciation": "I have worked",
                "example": "I have finished the project. / She has sent the email.",
                "exampleMeaning": "Saya sudah menyelesaikan proyek. / Dia sudah mengirim email.",
                "tip": "✅ Untuk: sesuatu yang SUDAH selesai dan berpengaruh sekarang. Pakai have/has + V3.",
                "ttsText": "I have finished the project. She has sent the email.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Pilih kalimat Simple Present yang benar:",
                "char": null,
                "options": [
                  "She work every day.",
                  "She works every day.",
                  "She is work every day.",
                  "She has work every day."
                ],
                "answer": 1
              },
              {
                "q": "Kalimat mana yang menunjukkan sesuatu yang SEDANG terjadi?",
                "char": null,
                "options": [
                  "I work on it.",
                  "I worked on it.",
                  "I am working on it.",
                  "I have worked on it."
                ],
                "answer": 2
              },
              {
                "q": "\"Saya sudah mengirim email\" dalam bahasa Inggris:",
                "char": null,
                "options": [
                  "I send the email.",
                  "I sent the email.",
                  "I have sent the email.",
                  "I am sending the email."
                ],
                "answer": 2
              },
              {
                "q": "Simple Present digunakan untuk:",
                "char": null,
                "options": [
                  "Sesuatu yg sedang terjadi",
                  "Kebiasaan & fakta",
                  "Sesuatu yang sudah selesai",
                  "Rencana masa depan"
                ],
                "answer": 1
              },
              {
                "q": "\"She ___ a meeting right now.\" (attend)",
                "char": null,
                "options": [
                  "attend",
                  "attends",
                  "is attending",
                  "has attended"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "en-u1-l2",
            "title": "Past Tenses",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "Simple Past",
                "romanization": "S + V2",
                "pronunciation": "I worked / I went",
                "example": "I sent the report yesterday. / She attended the conference last week.",
                "exampleMeaning": "Saya mengirim laporan kemarin. / Dia menghadiri konferensi minggu lalu.",
                "tip": "✅ Untuk: kejadian di masa lalu yang sudah selesai. Kata kunci: yesterday, last week, ago.",
                "ttsText": "I sent the report yesterday. She attended the conference last week.",
                "ttsLang": "en-US"
              },
              {
                "front": "Past Continuous",
                "romanization": "S + was/were + V-ing",
                "pronunciation": "I was working",
                "example": "I was working when she called. / They were having a meeting.",
                "exampleMeaning": "Saya sedang bekerja saat dia menelepon. / Mereka sedang rapat.",
                "tip": "✅ Untuk: aksi yang SEDANG berlangsung di masa lalu saat ada kejadian lain.",
                "ttsText": "I was working when she called. They were having a meeting.",
                "ttsLang": "en-US"
              },
              {
                "front": "Past Perfect",
                "romanization": "S + had + V3",
                "pronunciation": "I had worked",
                "example": "I had finished the report before the meeting started.",
                "exampleMeaning": "Saya sudah selesai laporan sebelum rapat dimulai.",
                "tip": "✅ Untuk: aksi yang selesai SEBELUM aksi lain di masa lalu. Selalu pakai had + V3.",
                "ttsText": "I had finished the report before the meeting started.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "\"Saya pergi ke kantor kemarin.\" Yang benar:",
                "char": null,
                "options": [
                  "I go to the office yesterday.",
                  "I went to the office yesterday.",
                  "I was go to the office yesterday.",
                  "I have gone to the office yesterday."
                ],
                "answer": 1
              },
              {
                "q": "Kapan pakai Past Continuous?",
                "char": null,
                "options": [
                  "Fakta umum",
                  "Kebiasaan dulu",
                  "Aksi yg sedang berlangsung di masa lalu",
                  "Aksi sebelum aksi lain di masa lalu"
                ],
                "answer": 2
              },
              {
                "q": "\"I ___ the email when the internet died.\" (send)",
                "char": null,
                "options": [
                  "sent",
                  "was sending",
                  "had sent",
                  "have sent"
                ],
                "answer": 1
              },
              {
                "q": "Past Perfect memakai:",
                "char": null,
                "options": [
                  "have + V3",
                  "had + V3",
                  "was/were + V-ing",
                  "V2"
                ],
                "answer": 1
              },
              {
                "q": "\"Before she arrived, I ___ the presentation.\" (finish)",
                "char": null,
                "options": [
                  "finished",
                  "was finishing",
                  "had finished",
                  "have finished"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "en-u1-l3",
            "title": "Future Tenses",
            "type": "flashcard-quiz",
            "xpReward": 15,
            "cards": [
              {
                "front": "Simple Future",
                "romanization": "S + will + V1",
                "pronunciation": "I will work",
                "example": "I will send the report tomorrow. / She will attend the meeting.",
                "exampleMeaning": "Saya akan mengirim laporan besok. / Dia akan menghadiri rapat.",
                "tip": "✅ Untuk: keputusan spontan atau prediksi. Kata kunci: tomorrow, next week, soon.",
                "ttsText": "I will send the report tomorrow. She will attend the meeting.",
                "ttsLang": "en-US"
              },
              {
                "front": "Be Going To",
                "romanization": "S + am/is/are + going to + V1",
                "pronunciation": "I am going to work",
                "example": "I am going to present the results next week.",
                "exampleMeaning": "Saya akan mempresentasikan hasilnya minggu depan.",
                "tip": "✅ Untuk: rencana yang SUDAH diputuskan sebelumnya.",
                "ttsText": "I am going to present the results next week.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Keputusan spontan: \"Oke, saya akan bantu kamu.\" Yang benar:",
                "char": null,
                "options": [
                  "I am going to help you.",
                  "I will help you.",
                  "I help you.",
                  "I helped you."
                ],
                "answer": 1
              },
              {
                "q": "Rencana yang sudah direncanakan sebelumnya:",
                "char": null,
                "options": [
                  "will",
                  "going to",
                  "V-ing",
                  "had"
                ],
                "answer": 1
              },
              {
                "q": "\"She ___ present the project tomorrow.\" (rencana yg sudah diputuskan)",
                "char": null,
                "options": [
                  "will present",
                  "is going to present",
                  "presents",
                  "presented"
                ],
                "answer": 1
              },
              {
                "q": "Simple Future rumusnya:",
                "char": null,
                "options": [
                  "S + have + V3",
                  "S + will + V1",
                  "S + was + V-ing",
                  "S + V2"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "en-u1-l4",
            "title": "Tenses Challenge — Match!",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "I work every day",
                "right": "Simple Present"
              },
              {
                "left": "I am working now",
                "right": "Present Continuous"
              },
              {
                "left": "I have finished",
                "right": "Present Perfect"
              },
              {
                "left": "I worked yesterday",
                "right": "Simple Past"
              },
              {
                "left": "I was working",
                "right": "Past Continuous"
              },
              {
                "left": "I will work tomorrow",
                "right": "Simple Future"
              }
            ]
          }
        ]
      },
      {
        "id": "en-u2",
        "title": "Irregular Verbs V1V2V3",
        "titleNative": "Kata Kerja Tidak Beraturan",
        "icon": "⚡",
        "color": "#8b5cf6",
        "month": 1,
        "description": "Hafal V1-V2-V3 dengan cara yang fun! Drill sampai jadi refleks.",
        "lessons": [
          {
            "id": "en-u2-l1",
            "title": "V1V2V3: Essential Verbs Part 1",
            "type": "verb-drill",
            "xpReward": 25,
            "verbs": [
              {
                "v1": "be",
                "v2": "was/were",
                "v3": "been",
                "meaning": "adalah/ada",
                "example": "She was at the office. → She has been here.",
                "ttsText": "be, was, were, been",
                "ttsLang": "en-US"
              },
              {
                "v1": "have",
                "v2": "had",
                "v3": "had",
                "meaning": "punya/memiliki",
                "example": "I had a meeting. → I have had many meetings.",
                "ttsText": "have, had, had",
                "ttsLang": "en-US"
              },
              {
                "v1": "do",
                "v2": "did",
                "v3": "done",
                "meaning": "melakukan",
                "example": "She did the work. → The work is done.",
                "ttsText": "do, did, done",
                "ttsLang": "en-US"
              },
              {
                "v1": "go",
                "v2": "went",
                "v3": "gone",
                "meaning": "pergi",
                "example": "I went to Korea. → She has gone to the office.",
                "ttsText": "go, went, gone",
                "ttsLang": "en-US"
              },
              {
                "v1": "make",
                "v2": "made",
                "v3": "made",
                "meaning": "membuat",
                "example": "She made a decision. → I have made a plan.",
                "ttsText": "make, made, made",
                "ttsLang": "en-US"
              },
              {
                "v1": "get",
                "v2": "got",
                "v3": "gotten/got",
                "meaning": "mendapat",
                "example": "I got the job! → She has gotten the promotion.",
                "ttsText": "get, got, gotten",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "V2 dari \"go\" adalah?",
                "char": null,
                "options": [
                  "goed",
                  "went",
                  "gone",
                  "goes"
                ],
                "answer": 1
              },
              {
                "q": "V3 dari \"do\" adalah?",
                "char": null,
                "options": [
                  "did",
                  "does",
                  "done",
                  "doing"
                ],
                "answer": 2
              },
              {
                "q": "V2 dari \"have\" adalah?",
                "char": null,
                "options": [
                  "has",
                  "had",
                  "have",
                  "having"
                ],
                "answer": 1
              },
              {
                "q": "\"She ___ a great presentation yesterday.\" (make)",
                "char": null,
                "options": [
                  "make",
                  "makes",
                  "made",
                  "has made"
                ],
                "answer": 2
              },
              {
                "q": "V3 dari \"get\" adalah?",
                "char": null,
                "options": [
                  "get",
                  "got",
                  "gotten",
                  "getten"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "en-u2-l2",
            "title": "V1V2V3: Essential Verbs Part 2",
            "type": "verb-drill",
            "xpReward": 25,
            "verbs": [
              {
                "v1": "say",
                "v2": "said",
                "v3": "said",
                "meaning": "berkata",
                "example": "She said yes. → He has said nothing.",
                "ttsText": "say, said, said",
                "ttsLang": "en-US"
              },
              {
                "v1": "know",
                "v2": "knew",
                "v3": "known",
                "meaning": "mengetahui",
                "example": "I knew the answer. → She has known him for years.",
                "ttsText": "know, knew, known",
                "ttsLang": "en-US"
              },
              {
                "v1": "think",
                "v2": "thought",
                "v3": "thought",
                "meaning": "berpikir",
                "example": "I thought about it. → She has thought of a solution.",
                "ttsText": "think, thought, thought",
                "ttsLang": "en-US"
              },
              {
                "v1": "write",
                "v2": "wrote",
                "v3": "written",
                "meaning": "menulis",
                "example": "She wrote the email. → I have written the report.",
                "ttsText": "write, wrote, written",
                "ttsLang": "en-US"
              },
              {
                "v1": "send",
                "v2": "sent",
                "v3": "sent",
                "meaning": "mengirim",
                "example": "I sent the document. → She has sent the invitation.",
                "ttsText": "send, sent, sent",
                "ttsLang": "en-US"
              },
              {
                "v1": "meet",
                "v2": "met",
                "v3": "met",
                "meaning": "bertemu",
                "example": "I met the client. → We have met before.",
                "ttsText": "meet, met, met",
                "ttsLang": "en-US"
              },
              {
                "v1": "take",
                "v2": "took",
                "v3": "taken",
                "meaning": "mengambil",
                "example": "She took notes. → I have taken the exam.",
                "ttsText": "take, took, taken",
                "ttsLang": "en-US"
              },
              {
                "v1": "give",
                "v2": "gave",
                "v3": "given",
                "meaning": "memberi",
                "example": "He gave feedback. → She has given permission.",
                "ttsText": "give, gave, given",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "V2 dari \"write\" adalah?",
                "char": null,
                "options": [
                  "writed",
                  "written",
                  "wrote",
                  "writes"
                ],
                "answer": 2
              },
              {
                "q": "V3 dari \"send\" adalah?",
                "char": null,
                "options": [
                  "sended",
                  "sent",
                  "send",
                  "sents"
                ],
                "answer": 1
              },
              {
                "q": "V2 dari \"think\" adalah?",
                "char": null,
                "options": [
                  "thinked",
                  "thought",
                  "thinks",
                  "thinking"
                ],
                "answer": 1
              },
              {
                "q": "\"I ___ the email 5 minutes ago.\" (send)",
                "char": null,
                "options": [
                  "send",
                  "sent",
                  "have sent",
                  "sending"
                ],
                "answer": 1
              },
              {
                "q": "V3 dari \"take\" adalah?",
                "char": null,
                "options": [
                  "took",
                  "taked",
                  "taken",
                  "taking"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "en-u2-l3",
            "title": "Verb Match: V1 ↔ V2",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "go",
                "right": "went"
              },
              {
                "left": "make",
                "right": "made"
              },
              {
                "left": "write",
                "right": "wrote"
              },
              {
                "left": "send",
                "right": "sent"
              },
              {
                "left": "think",
                "right": "thought"
              },
              {
                "left": "give",
                "right": "gave"
              }
            ]
          },
          {
            "id": "en-u2-l4",
            "title": "Verb Match: V1 ↔ V3",
            "type": "match",
            "xpReward": 20,
            "pairs": [
              {
                "left": "go",
                "right": "gone"
              },
              {
                "left": "do",
                "right": "done"
              },
              {
                "left": "write",
                "right": "written"
              },
              {
                "left": "take",
                "right": "taken"
              },
              {
                "left": "know",
                "right": "known"
              },
              {
                "left": "give",
                "right": "given"
              }
            ]
          }
        ]
      },
      {
        "id": "en-u3",
        "title": "Kalimat Profesional",
        "titleNative": "Professional English",
        "icon": "💼",
        "color": "#10b981",
        "month": 2,
        "description": "Kalimat siap pakai untuk email, rapat, dan percakapan kerja.",
        "lessons": [
          {
            "id": "en-u3-l1",
            "title": "Email Profesional",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "Dear [Name],",
                "romanization": "Pembuka email formal",
                "pronunciation": "deer...",
                "example": "Dear Mr. Kim, / Dear Ms. Park, / Dear Team,",
                "exampleMeaning": "Kepada Bapak Kim, / Kepada Ibu Park, / Kepada Tim,",
                "tip": "Selalu mulai email formal dengan \"Dear\". Hindari \"Hello\" untuk email resmi.",
                "ttsText": "Dear Mr. Kim, I hope this email finds you well.",
                "ttsLang": "en-US"
              },
              {
                "front": "I hope this email finds you well.",
                "romanization": "Kalimat pembuka sopan",
                "pronunciation": "",
                "example": "Dear Mr. Kim,\nI hope this email finds you well.",
                "exampleMeaning": "Kepada Bapak Kim,\nSemoga Anda dalam keadaan baik.",
                "tip": "Kalimat pembuka standar email profesional. Selalu lebih baik daripada langsung ke inti.",
                "ttsText": "I hope this email finds you well.",
                "ttsLang": "en-US"
              },
              {
                "front": "Please find attached...",
                "romanization": "Menyebutkan lampiran",
                "pronunciation": "",
                "example": "Please find attached the report you requested.",
                "exampleMeaning": "Terlampir laporan yang Anda minta.",
                "tip": "Gunakan saat melampirkan dokumen. Lebih formal dari \"I attached...\".",
                "ttsText": "Please find attached the report you requested.",
                "ttsLang": "en-US"
              },
              {
                "front": "I am writing to...",
                "romanization": "Menyatakan tujuan email",
                "pronunciation": "",
                "example": "I am writing to inform you about... / I am writing to request...",
                "exampleMeaning": "Saya menulis untuk menginformasikan... / Saya menulis untuk meminta...",
                "tip": "Cara sopan menyatakan tujuan email. Langsung, jelas, profesional.",
                "ttsText": "I am writing to inform you about the upcoming meeting.",
                "ttsLang": "en-US"
              },
              {
                "front": "Best regards,",
                "romanization": "Penutup email formal",
                "pronunciation": "",
                "example": "Best regards, / Sincerely, / Kind regards,",
                "exampleMeaning": "Salam hormat, / Dengan hormat, / Salam ramah,",
                "tip": "Selalu akhiri email formal dengan salah satu penutup ini diikuti nama kamu.",
                "ttsText": "Best regards, Rina.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Kalimat pembuka yang tepat untuk email formal:",
                "char": null,
                "options": [
                  "Hey there!",
                  "Yo Kim,",
                  "Dear Mr. Kim,",
                  "Whats up?"
                ],
                "answer": 2
              },
              {
                "q": "Cara profesional menyebutkan lampiran:",
                "char": null,
                "options": [
                  "I attached it.",
                  "Here is the file.",
                  "Please find attached the document.",
                  "Look at this."
                ],
                "answer": 2
              },
              {
                "q": "\"I ___ to request a meeting.\" Yang paling formal:",
                "char": null,
                "options": [
                  "want",
                  "am writing",
                  "need",
                  "would like"
                ],
                "answer": 1
              },
              {
                "q": "Penutup email formal yang tepat:",
                "char": null,
                "options": [
                  "Bye!",
                  "See ya!",
                  "Best regards,",
                  "Later,"
                ],
                "answer": 2
              },
              {
                "q": "\"Semoga Anda dalam keadaan baik\" dalam email formal:",
                "char": null,
                "options": [
                  "Hope you are OK.",
                  "I hope this email finds you well.",
                  "Are you fine?",
                  "How are you doing?"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "en-u3-l2",
            "title": "Frasa Rapat & Presentasi",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "Could you please...?",
                "romanization": "Permintaan sopan",
                "pronunciation": "",
                "example": "Could you please send me the document? / Could you please clarify that?",
                "exampleMeaning": "Bisakah Anda mengirimkan dokumennya? / Bisakah Anda menjelaskan itu?",
                "tip": "\"Could you please\" jauh lebih sopan dari \"Can you\" atau \"Send me\". Wajib di tempat kerja.",
                "ttsText": "Could you please send me the document?",
                "ttsLang": "en-US"
              },
              {
                "front": "I would like to...",
                "romanization": "Menyatakan keinginan formal",
                "pronunciation": "",
                "example": "I would like to discuss the proposal. / I would like to present our findings.",
                "exampleMeaning": "Saya ingin mendiskusikan proposalnya. / Saya ingin mempresentasikan temuan kami.",
                "tip": "\"I would like\" lebih formal dan sopan dari \"I want\".",
                "ttsText": "I would like to discuss the proposal.",
                "ttsLang": "en-US"
              },
              {
                "front": "Let me clarify...",
                "romanization": "Klarifikasi dalam diskusi",
                "pronunciation": "",
                "example": "Let me clarify what I meant. / Allow me to clarify the process.",
                "exampleMeaning": "Izinkan saya menjelaskan maksud saya. / Izinkan saya menjelaskan prosesnya.",
                "tip": "Gunakan saat ada kesalahpahaman atau ingin menjelaskan sesuatu dengan lebih jelas.",
                "ttsText": "Let me clarify what I meant.",
                "ttsLang": "en-US"
              },
              {
                "front": "That is a great point.",
                "romanization": "Merespons positif",
                "pronunciation": "",
                "example": "That is a great point, and I would like to add...",
                "exampleMeaning": "Itu poin yang bagus, dan saya ingin menambahkan...",
                "tip": "Cara sopan menyetujui dan membangun dari pendapat orang lain.",
                "ttsText": "That is a great point, and I would like to add something.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Cara paling sopan meminta sesuatu di tempat kerja:",
                "char": null,
                "options": [
                  "Give me the report.",
                  "Send me the report.",
                  "Could you please send me the report?",
                  "I need the report."
                ],
                "answer": 2
              },
              {
                "q": "\"Saya ingin mempresentasikan hasil kami\" yang formal:",
                "char": null,
                "options": [
                  "I want to present.",
                  "I would like to present our results.",
                  "I will present.",
                  "Let me present."
                ],
                "answer": 1
              },
              {
                "q": "Saat ada kesalahpahaman dalam rapat, kamu bisa berkata:",
                "char": null,
                "options": [
                  "No, you are wrong.",
                  "That is incorrect.",
                  "Let me clarify what I meant.",
                  "You misunderstood."
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "en-u3-l3",
            "title": "Profesional Phrase Match",
            "type": "match",
            "xpReward": 25,
            "pairs": [
              {
                "left": "Pembuka email formal",
                "right": "Dear [Name],"
              },
              {
                "left": "Menyebutkan lampiran",
                "right": "Please find attached..."
              },
              {
                "left": "Tujuan email",
                "right": "I am writing to..."
              },
              {
                "left": "Permintaan sopan",
                "right": "Could you please...?"
              },
              {
                "left": "Penutup email",
                "right": "Best regards,"
              },
              {
                "left": "Menyatakan keinginan",
                "right": "I would like to..."
              }
            ]
          }
        ]
      }
    ]
  },
  "toefl": {
    "units": [
      {
        "id": "toefl-fast3-d1",
        "track": "fast3",
        "title": "🎧 Hari 1: Listening Fast Track (Trik Orang Kedua & Percakapan Kampus)",
        "titleNative": "Second Speaker Mastery, Similar Sounds & Campus Dialogues",
        "icon": "🎧",
        "color": "#f59e0b",
        "month": 1,
        "description": "Hari ke-1 Sprint 3 Hari: Kuasai 80% soal Listening Part A & B! Trik menyimak orang kedua, mengabaikan jebakan kata mirip, dan latihan percakapan audio dua penutur.",
        "lessons": [
          {
            "id": "toefl-fast3-l1",
            "title": "Jurus 1: Anti-Bunyi Mirip & Trik Orang Kedua",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "⚠️ JEBAKAN BUNYI MIRIP",
                "romanization": "Aturan Emas Listening Part A",
                "pronunciation": "Avoid Similar Sounds!",
                "example": "Audio: \"I was in serious pain.\" -> Opsi Jebakan: \"He boarded a plane.\"",
                "exampleMeaning": "Kata \"plane\" (pesawat) sengaja dimunculkan karena bunyinya mirip \"pain\" (sakit)! Ini 90% jebakan!",
                "tip": "💡 Ingat: Jangan pernah pilih kata yang bunyinya sama persis dengan audio. Jawaban benar SELALU pakai sinonim (misal: \"He was hurt\").",
                "ttsText": "I was in serious pain.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 TRIK ORANG KEDUA",
                "romanization": "Kunci Rahasia 80% Soal",
                "pronunciation": "Focus on the 2nd Speaker",
                "example": "Man: \"Did you buy the tickets?\" / Woman: \"I barely had enough cash on me.\"",
                "exampleMeaning": "Pria bertanya tiket, Wanita menjawab uangnya nyaris tidak cukup. Jawaban soal ada di ucapan WANITA!",
                "tip": "💡 Buka telinga lebar-lebar untuk PEMBICARA KEDUA! Pertanyaan \"What does the woman/man mean?\" selalu menanyakan maksud kalimat orang kedua.",
                "ttsText": "I barely had enough cash on me.",
                "ttsLang": "en-US"
              },
              {
                "front": "🔄 JURUS PARAPHRASE",
                "romanization": "Ganti Kata = Jawaban Benar",
                "pronunciation": "Restatement & Synonyms",
                "example": "Audio: \"turn in the paper\" -> Jawaban: \"submit the assignment\"",
                "exampleMeaning": "\"Turn in\" artinya mengumpulkan (= submit), \"paper\" artinya tugas karya tulis (= assignment).",
                "tip": "💡 Cari opsi yang artinya sama tapi susunan katanya beda. Kalau ada kata yang sama persis seperti di audio, curigai sebagai jebakan!",
                "ttsText": "Don't forget to turn in your paper before five.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Man: \"Are you going to the physics seminar this afternoon?\"\nWoman: \"I'd love to, but I'm completely swamped with lab reports.\"\nWhat does the woman mean?",
                "options": [
                  "She will go to the swamp near the laboratory.",
                  "She is too busy finishing lab reports to attend.",
                  "She loves going to physics seminars alone.",
                  "She is inviting the man to help her write reports."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'swamped with' berarti 'sangat sibuk / kewalahan'. Opsi A sengaja memunculkan kata 'swamp' (rawa) sebagai jebakan bunyi mirip!"
              },
              {
                "q": "Woman: \"Did Mark finish the financial analysis on time?\"\nMan: \"He barely managed to get it in under the wire.\"\nWhat does the man say about Mark?",
                "options": [
                  "Mark damaged the electrical wires in the office.",
                  "Mark completed the report just before the deadline.",
                  "Mark was not able to submit the work today.",
                  "Mark called the financial manager on the wire."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'under the wire' berarti 'tepat sebelum batas waktu berakhir'. Opsi A & D adalah jebakan kata 'wire'!"
              },
              {
                "q": "Man: \"I thought you said the concert tickets were fifty dollars.\"\nWoman: \"Well, they cost an arm and a leg, didn't they?\"\nWhat does the woman imply?",
                "options": [
                  "She injured her arm and leg at the concert hall.",
                  "The concert tickets were extremely expensive.",
                  "They only bought half of the required tickets.",
                  "The man forgot to bring enough medical supplies."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ungkapan 'cost an arm and a leg' adalah idiom umum bermakna 'sangat mahal sekali'. Opsi A adalah jebakan makna harfiah!"
              }
            ]
          },
          {
            "id": "toefl-fast3-l2",
            "title": "Drill Part A: Situasi Kampus & Negosiasi Cepat",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "f3-c1",
                "title": "Registrar Office Transcript Request",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Excuse me, I need an official transcript for graduate school, but the online portal says there's a hold on my account.",
                    "translation": "Permisi, saya butuh transkrip resmi untuk pendaftaran S2, tapi portal online menunjukkan ada penangguhan di akun saya."
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Let me check. Yes, you still have an unreturned chemistry handbook from last semester. Once you clear that with the science library, the hold will be lifted immediately.",
                    "translation": "Biar saya periksa. Ya, kamu masih punya buku panduan kimia semester lalu yang belum dikembalikan. Begitu kamu selesaikan di perpustakaan sains, penangguhannya langsung dicabut."
                  }
                ],
                "narrator": "What must the man do to obtain his transcript?",
                "question": "What must the man do to obtain his transcript? (Apa yang harus pria lakukan agar memperoleh transkripnya?)",
                "options": [
                  "Pay a fine directly to the graduate school admissions office.",
                  "Return an overdue book to the science library.",
                  "Submit a formal appeal to the registrar officer.",
                  "Retake his chemistry course in the coming term."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Petugas menjelaskan ada 'unreturned chemistry handbook'. Pria harus menyelesaikannya di 'science library' agar transkrip bisa dicetak."
              },
              {
                "id": "f3-c2",
                "title": "Dormitory Roommate Consideration",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Have you talked to your roommate about playing loud music while you're studying?",
                    "translation": "Sudahkah kamu bicara dengan teman sekamarmu tentang musik keras saat kamu lagi belajar?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I was hesitant at first, but once I brought it up politely, he was more than happy to use his headphones.",
                    "translation": "Awalnya aku ragu, tapi begitu aku bicarakan secara sopan, dia dengan senang hati langsung memakai headphone."
                  }
                ],
                "narrator": "What did the man's roommate do?",
                "question": "What did the man's roommate do? (Apa reaksi teman sekamar pria tersebut?)",
                "options": [
                  "He refused to lower the volume of the stereo.",
                  "He agreed cooperatively to wear headphones.",
                  "He demanded that the man move to another dorm.",
                  "He stopped studying music altogether."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Frasa 'more than happy to use his headphones' menunjukkan teman sekamarnya menyetujui secara kooperatif tanpa keberatan."
              },
              {
                "id": "f3-c3",
                "title": "Chemistry Lab Safety Protocol",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Professor Davis, is it okay if I wear sandals today since the temperature outside is over ninety degrees?",
                    "translation": "Profesor Davis, bolehkah saya memakai sandal hari ini karena suhu di luar lebih dari 32 derajat?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "I'm afraid not, Michael. Closed-toe shoes are an absolute requirement whenever hazardous reagents are out on the lab counters.",
                    "translation": "Sayangnya tidak boleh, Michael. Sepatu tertutup adalah kewajiban mutlak setiap kali reagen berbahaya ada di meja lab."
                  }
                ],
                "narrator": "What does the professor tell Michael?",
                "question": "What does the professor tell Michael? (Apa yang disampaikan profesor kepada Michael?)",
                "options": [
                  "He can wear sandals only if he stays near the door.",
                  "He is strictly prohibited from wearing open shoes in the lab.",
                  "He should postpone his experiment until the weather cools down.",
                  "He needs to wear safety goggles instead of shoes."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ungkapan 'I'm afraid not' diikuti 'closed-toe shoes are an absolute requirement' menegaskan Michael dilarang memakai sandal di laboratorium sains demi keselamatan."
              },
              {
                "id": "f3-c4",
                "title": "Midterm Study Group Proposal",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Are you free to join our macroeconomics review session tonight at the student center?",
                    "translation": "Apakah kamu ada waktu luang untuk ikut sesi ulasan makroekonomi malam ini di student center?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I really wish I could, but my part-time shift at the campus bookstore doesn't wrap up until ten.",
                    "translation": "Aku ingin sekali bisa ikut, tapi giliran kerja paruh waktuku di toko buku kampus baru kelar jam sepuluh."
                  }
                ],
                "narrator": "What does the man imply?",
                "question": "What does the man imply? (Apa yang disiratkan oleh sang pria?)",
                "options": [
                  "He will lead the review group starting at ten o'clock.",
                  "He cannot attend the study session because of work commitments.",
                  "He wants the woman to buy textbooks at his bookstore.",
                  "He prefers studying macroeconomics completely on his own."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Pola 'I wish I could, but...' adalah cara halus menolak undangan karena adanya jadwal lain yang bertabrakan (shift kerja)."
              }
            ]
          },
          {
            "id": "toefl-fast3-l3",
            "title": "Drill Part B: Diskusi Akademis & Masalah Tugas",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "f3-c5",
                "title": "Biology Field Trip Rescheduling",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Did you hear that the coastal wetland excursion has been pushed back due to the severe thunderstorm forecast?",
                    "translation": "Kamu dengar tidak kalau ekskursi lahan basah pesisir diundur karena ramalan badai petir lebat?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "That works out great for me! It gives me the extra weekend I needed to finish my research proposal on mangrove biodiversity.",
                    "translation": "Bagus sekali bagiku! Itu memberiku tambahan akhir pekan yang kubutuhkan untuk menyelesaikan proposal riset tentang keanekaragaman mangrove."
                  }
                ],
                "narrator": "How does the man feel about the delay?",
                "question": "How does the man feel about the delay? (Bagaimana perasaan pria terkait penundaan tersebut?)",
                "options": [
                  "He is disappointed because he bought camping gear.",
                  "He welcomes the extra time to work on his proposal.",
                  "He worries the thunderstorms will damage the mangroves.",
                  "He thinks the trip should be cancelled permanently."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ucapan pria 'That works out great for me!' dan 'It gives me the extra weekend...' menunjukkan ia sangat menyambut baik penundaan tersebut."
              },
              {
                "id": "f3-c6",
                "title": "Art History Term Paper Topic",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Professor Vance, I'm finding it difficult to narrow down my topic on Renaissance art; it just feels overwhelmingly broad.",
                    "translation": "Profesor Vance, saya merasa sulit mempersempit topik seni Renaisans; rasanya terlalu luas."
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Why don't you focus specifically on how linear perspective evolved between Giotto and Brunelleschi? That will give your paper a clear, concrete comparative spine.",
                    "translation": "Mengapa kamu tidak fokus secara spesifik pada evolusi perspektif linier antara Giotto dan Brunelleschi? Itu akan memberi makalahmu kerangka perbandingan yang konkret dan jelas."
                  }
                ],
                "narrator": "What does Professor Vance suggest the student do?",
                "question": "What does Professor Vance suggest the student do? (Apa saran Profesor Vance?)",
                "options": [
                  "Abandon the Renaissance topic and study Modern Art.",
                  "Compare linear perspective techniques between two specific historical artists.",
                  "Write a comprehensive overview of all Italian Renaissance painters.",
                  "Submit an outline instead of a complete term paper."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Profesor menyarankan fokus spesifik: 'how linear perspective evolved between Giotto and Brunelleschi' (membandingkan teknik dua seniman)."
              },
              {
                "id": "f3-c7",
                "title": "Library Reserve Loan Policy",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Can I check out this anthropology reserve reading for the weekend?",
                    "translation": "Bisakah saya meminjam buku bacaan antropologi cadangan ini untuk akhir pekan?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Unfortunately, reserve readings have a two-hour in-library limit during the day. However, if you come back after five on Friday, you can borrow it overnight until Monday morning.",
                    "translation": "Sayangnya, bacaan cadangan dibatasi dua jam di dalam perpustakaan saat siang. Namun, jika kamu kembali setelah jam lima pada hari Jumat, kamu bisa meminjamnya semalaman hingga Senin pagi."
                  }
                ],
                "narrator": "When may the woman borrow the book overnight?",
                "question": "When may the woman borrow the book overnight? (Kapan sang wanita boleh meminjam buku tersebut semalaman?)",
                "options": [
                  "Only during regular weekday afternoon hours.",
                  "Starting late Friday afternoon after five o'clock.",
                  "Any time as long as she deposits her student ID card.",
                  "Never, because reserve books cannot leave the building."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Petugas menjelaskan aturan 'overnight checkout': 'if you come back after five on Friday, you can borrow it overnight until Monday morning'."
              }
            ]
          }
        ]
      },
      {
        "id": "toefl-fast3-d2",
        "track": "fast3",
        "title": "📐 Hari 2: Structure & Error Crash Course (Rumus S+V & 5 Dosa Error)",
        "titleNative": "Subject-Verb Formula, Sentence Connectors & Error Detection",
        "icon": "📐",
        "color": "#3b82f6",
        "month": 1,
        "description": "Hari ke-2 Sprint 3 Hari: Kuasai 40 soal Section 2! Rumus 3 detik S+V, trik coret preposisi pengecoh, konektor klausa (FANBOYS), dan deteksi 5 Dosa Error terbesar.",
        "lessons": [
          {
            "id": "toefl-fast3-l4",
            "title": "Jurus 2: Rumus 3 Detik S + V & Konektor FANBOYS",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "⚡ RUMUS 3 DETIK S + V",
                "romanization": "Kunci Emas Structure 1-15",
                "pronunciation": "1 Klausa = 1 Subjek + 1 Verb",
                "example": "Soal: \"_________ was appointed ambassador to France in 1785.\"",
                "exampleMeaning": "Ada Verb \"was appointed\", tapi Subjek di depan KOSONG! Cari opsi yang berisi Subjek murni.",
                "tip": "💡 Kalimat baku bahasa Inggris WAJIB punya 1 Subjek dan 1 Verb utama. Jangan pilih opsi yang ada Verb dobel tanpa konektor!",
                "ttsText": "Thomas Jefferson was appointed ambassador to France.",
                "ttsLang": "en-US"
              },
              {
                "front": "✂️ JURUS CORET PREPOSISI",
                "romanization": "Hapus Pengecoh Subjek",
                "pronunciation": "Prepositional Phrases are NOT Subjects",
                "example": "\"The discovery [of new deep-sea hydrothermal vents] _________ marine biologists.\"",
                "exampleMeaning": "Frasa dalam kurung yang diawali \"of\" HANYA keterangan! Subjek aslinya adalah \"The discovery\" (tunggal) -> butuh Verb tunggal \"astonished\".",
                "tip": "💡 Coret kata setelah: in, at, on, of, for, with, by. Subjek asli SELALU di depan preposisi!",
                "ttsText": "The discovery of hydrothermal vents astonished marine biologists.",
                "ttsLang": "en-US"
              },
              {
                "front": "🔗 JURUS KONEKTOR FANBOYS",
                "romanization": "Menghubungkan 2 Kalimat Utuh",
                "pronunciation": "For, And, Nor, But, Or, Yet, So",
                "example": "\"The proposal was approved, _________ implementation will begin immediately.\"",
                "exampleMeaning": "Ada 2 klausa utuh (S1+V1 dan S2+V2). Kita butuh konektor setara: \"and\".",
                "tip": "💡 Rumus: [S1 + V1] + KONEKTOR + [S2 + V2]. Jumlah Verb selalu = Jumlah Konektor + 1!",
                "ttsText": "The proposal was approved, and implementation will begin immediately.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Structure: \"_________ the dominant architectural style of Medieval European cathedrals for over three centuries.\"",
                "options": [
                  "Gothic was",
                  "That Gothic was",
                  "Although Gothic was",
                  "The Gothic style being"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Kalimat belum memiliki Subjek maupun Verb utama. Opsi A 'Gothic was' langsung melengkapi [S + V] secara tepat tanpa konektor yang menggantung."
              },
              {
                "q": "Structure: \"The telescope at Mount Palomar has a 200-inch mirror, _________ astronomers to observe distant galaxies with unprecedented clarity.\"",
                "options": [
                  "enables",
                  "which enables",
                  "and it enables",
                  "that it enables"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kalimat pertama sudah memiliki S+V ('The telescope has'). Untuk menyambung klausa kedua dengan Verb 'enables', dibutuhkan konektor relatif 'which'."
              },
              {
                "q": "Structure: \"A thick layer of blubber beneath the skin _________ marine mammals from hypothermia in arctic waters.\"",
                "options": [
                  "protects",
                  "protecting",
                  "protection",
                  "is protected"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Subjek kalimat adalah 'A thick layer' (tunggal). Frasa 'of blubber beneath the skin' hanyalah keterangan preposisi. Kalimat butuh Verb aktif tunggal 'protects'."
              }
            ]
          },
          {
            "id": "toefl-fast3-l5",
            "title": "Jurus 3: Detektif 5 Dosa Error & Parallel Structure",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "⚖️ DOSA PARALELISME",
                "romanization": "A, B, and C Wajib Setara",
                "pronunciation": "Parallel Structure Rule",
                "example": "\"The job requires dedication, integrity, and [to be creative].\"",
                "exampleMeaning": "Dedication (Noun), integrity (Noun), tapi ujungnya pakai infinitive! Harusnya Noun juga: \"creativity\".",
                "tip": "💡 Kata yang dihubungkan 'and', 'but', 'or' bentuk tata bahasanya harus kembar identik: V-ing dengan V-ing, Adjective dengan Adjective, Noun dengan Noun!",
                "ttsText": "The job requires dedication, integrity, and creativity.",
                "ttsLang": "en-US"
              },
              {
                "front": "🤝 DOSA SUBJECT-VERB AGREEMENT",
                "romanization": "Subjek Tunggal vs Jamak",
                "pronunciation": "Singular Subject = Singular Verb",
                "example": "\"Each of the participating laboratories [are] required to submit monthly reports.\"",
                "exampleMeaning": "Subjeknya adalah \"Each\" (tunggal), bukan \"laboratories\"! Jadi to be yang benar adalah \"is required\".",
                "tip": "💡 Kata: Each, Every, Neither, Either, One of SELALU dianggap tunggal (singular) dan butuh Verb berakhiran -s/es atau is/was/has!",
                "ttsText": "Each of the laboratories is required to submit monthly reports.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎭 DOSA ADJECTIVE VS ADVERB",
                "romanization": "Bentuk Kata yang Tertukar",
                "pronunciation": "Adjectives modify nouns; Adverbs modify verbs",
                "example": "\"The cheetah moved [rapid] across the savannah to catch its prey.\"",
                "exampleMeaning": "Kata kerja \"moved\" menerangkan tindakan, jadi harus diterangkan oleh Adverb: \"rapidly\", bukan kata sifat \"rapid\"!",
                "tip": "💡 Cek kata yang bergaris bawah: jika menerangkan kata kerja (Verb) atau kata sifat (Adj), bentuknya harus berakhiran -ly (Adverb)!",
                "ttsText": "The cheetah moved rapidly across the savannah.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Written Expression: \"The research team conducted extensive field experiments, analyzed the raw data, and [publishing] their findings in an international scientific journal.\"",
                "options": [
                  "conducted",
                  "extensive",
                  "publishing",
                  "findings"
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Melanggar hukum Paralelisme! Deret kata kerja lampau: 'conducted' (V2), 'analyzed' (V2), and... maka bentuk ketiga harus setara: 'published' (V2), bukan 'publishing'."
              },
              {
                "q": "Written Expression: \"The number of endangered bird species in the southern wetlands [have increased] dramatically over the past five years.\"",
                "options": [
                  "endangered",
                  "have increased",
                  "dramatically",
                  "over"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Frasa 'The number of...' selalu diikuti Verb tunggal ('has increased'), berbeda dengan 'A number of...' yang bermakna jamak."
              },
              {
                "q": "Written Expression: \"Geothermal energy systems provide an [extreme] reliable source of continuous power for residential communities.\"",
                "options": [
                  "provide",
                  "extreme",
                  "continuous",
                  "for"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata 'reliable' adalah kata sifat (Adjective). Untuk menerangkan kata sifat, kita memerlukan Adverb ('extremely reliable'), bukan Adjective 'extreme'."
              }
            ]
          },
          {
            "id": "toefl-fast3-l6",
            "title": "Drill Cepat 5 Soal Struktur & Error TOEFL",
            "type": "fill-blank",
            "xpReward": 35,
            "questions": [
              {
                "id": "f3-q1",
                "text": "Neither the professor nor his assistants ___________ able to locate the archival documents yesterday.",
                "options": [
                  "was",
                  "were",
                  "is",
                  "are"
                ],
                "answer": 1,
                "explanation": "💡 Aturan 'Neither... nor...': Verb mengikuti subjek terdekat. Karena 'his assistants' jamak dan waktunya lampau ('yesterday'), bentuk yang benar adalah 'were'."
              },
              {
                "id": "f3-q2",
                "text": "Not only ___________ the final exam with distinction, but she also earned a full graduate scholarship.",
                "options": [
                  "she passed",
                  "did she pass",
                  "passed she",
                  "she had passed"
                ],
                "answer": 1,
                "explanation": "💡 Rumus Inversi: Ketika kalimat diawali kata negatif 'Not only', pola Subjek dan Kata Bantu dibalik menjadi 'did she pass'."
              },
              {
                "id": "f3-q3",
                "text": "The architectural monument, ___________ during the fourteenth century, still attracts millions of tourists annually.",
                "options": [
                  "which built",
                  "built",
                  "it was built",
                  "was building"
                ],
                "answer": 1,
                "explanation": "💡 Reduced Relative Clause: Bentuk pasif yang disederhanakan dari 'which was built' cukup disingkat menjadi participle 'built'."
              },
              {
                "id": "f3-q4",
                "text": "The committee recommended that the proposal ___________ submitted before the upcoming fiscal audit.",
                "options": [
                  "is",
                  "be",
                  "was",
                  "being"
                ],
                "answer": 1,
                "explanation": "💡 Subjunctive Mood: Kata kerja saran seperti 'recommend, suggest, insist that...' selalu mewajibkan bentuk infinitive dasar tanpa perubahan: 'be submitted'."
              },
              {
                "id": "f3-q5",
                "text": "The Pacific ocean trench is substantially ___________ than any geological formation found on the continental landmass.",
                "options": [
                  "deep",
                  "deeper",
                  "deepest",
                  "more deep"
                ],
                "answer": 1,
                "explanation": "💡 Komparatif: Keberadaan kata 'than' menandakan perbandingan komparatif kata sifat 1 suku kata: 'deep' menjadi 'deeper'."
              }
            ]
          }
        ]
      },
      {
        "id": "toefl-fast3-d3",
        "track": "fast3",
        "title": "🚀 Hari 3: Reading Ninja & Sprint Practice (Skim, Scan & Simulasi)",
        "titleNative": "Reading Ninja Hacks, Academic Passage & Final Exam Readiness",
        "icon": "🚀",
        "color": "#10b981",
        "month": 1,
        "description": "Hari ke-3 Sprint 3 Hari: Tuntaskan Section Reading! Trik skimming baris pertama untuk Main Idea, scan kata kunci tanpa baca semua, latihan teks komprehensif, dan siap simulasi prediksi skor 310–677.",
        "lessons": [
          {
            "id": "toefl-fast3-l7",
            "title": "Jurus 4: Ninja Scan Reading & Pertanyaan Main Idea",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "🥷 TEKNIK NINJA MAIN IDEA",
                "romanization": "Jawab Soal 1 Tanpa Baca Semua",
                "pronunciation": "First Sentence Rule",
                "example": "Soal: \"What is the main topic of the passage?\"",
                "exampleMeaning": "BACA CUMA kalimat pertama paragraf 1 dan kalimat pertama paragraf 2! 90% ide pokok teks TOEFL ditaruh di awal paragraf.",
                "tip": "💡 Jangan buang waktu baca seluruh bacaan dari awal sampai habis. Baca baris pertama tiap paragraf, lalu langsung tembak jawaban!",
                "ttsText": "The invention of movable type revolutionized communication in Europe.",
                "ttsLang": "en-US"
              },
              {
                "front": "🔍 SCAN KATA KUNCI TERTARGET",
                "romanization": "Mata Elang Mencari Fakta",
                "pronunciation": "Targeted Keyword Scanning",
                "example": "Soal: \"According to paragraph 2, what year was the telescope invented?\"",
                "exampleMeaning": "JANGAN baca ulang! Gerakkan mata cepat cari angka tahun (misal: \"1608\") atau huruf kapital seperti radar.",
                "tip": "💡 Kata kunci terbaik untuk di-scan: Angka, tahun, nama orang (huruf kapital), nama tempat, dan istilah ilmiah berhuruf miring.",
                "ttsText": "In 1608, Dutch spectacle makers designed the first optical telescope.",
                "ttsLang": "en-US"
              },
              {
                "front": "🚫 SOAL JEBAKAN EXCEPT / NOT",
                "romanization": "Cari 1 Opsi yang Salah / Absen",
                "pronunciation": "Negative Factual Elimination",
                "example": "\"All of the following are mentioned EXCEPT...\"",
                "exampleMeaning": "3 opsi disebutkan di teks, HANYA 1 opsi yang tidak ada atau bertolak belakang dengan teks.",
                "tip": "💡 Eliminasi: Tandai 3 opsi yang kamu temukan di paragraf. Opsi yang tersisa (yang tidak disebutkan sama sekali) adalah JAWABAN BENAR!",
                "ttsText": "All of the following factors contributed to urban growth EXCEPT rapid climate warming.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Reading Hack: Di mana letak ide pokok (Main Idea) paling sering ditemukan dalam teks akademik TOEFL?",
                "options": [
                  "Di kalimat terakhir pada paragraf paling bawah.",
                  "Di kalimat pertama paragraf pertama dan kalimat topik awal tiap paragraf.",
                  "Di catatan kaki (footnote) pada bagian akhir naskah.",
                  "Tersebar acak di tengah-tengah tabel data."
                ],
                "answer": 1,
                "explanation": "💡 Trik Emas Reading: Paragraf esai akademik TOEFL dirancang deduktif. Kalimat pertama paragraf pengantar selalu memuat thesis statement atau ide pokok utama."
              },
              {
                "q": "Reading Hack: Jika menemukan soal 'Which of the following is NOT true according to paragraph 3?', strategi paling efisien adalah:",
                "options": [
                  "Membaca ulang seluruh teks dari judul sampai akhir.",
                  "Memilih opsi terpanjang tanpa memeriksa teks.",
                  "Mencari dan mencocokkan tiap opsi ke paragraf 3, lalu memilih satu-satunya opsi yang tidak didukung teks.",
                  "Menebak huruf C karena biasanya huruf C paling sering benar."
                ],
                "answer": 2,
                "explanation": "💡 Trik Eliminasi: Tipe soal Negative Factual diselesaikan dengan eliminasi 3 opsi yang benar berdasarkan paragraf 3; opsi sisanya adalah kunci jawaban."
              },
              {
                "q": "Reading Hack: Pada soal kosakata 'The word \"pivotal\" in line 4 is closest in meaning to:', bagaimana cara menebak jika kamu lupa artinya?",
                "options": [
                  "Gantikan kata tersebut dengan masing-masing pilihan jawaban dan lihat mana yang paling logis dalam konteks kalimat.",
                  "Cari kata yang ejaannya paling mirip dengan kata 'pivotal'.",
                  "Hitung jumlah suku kata dalam kata tersebut.",
                  "Pilih sinonim yang paling jarang digunakan dalam bahasa sehari-hari."
                ],
                "answer": 0,
                "explanation": "💡 Context Clue Hack: Masukkan satu per satu pilihan (crucial, minor, decorative, rapid) ke dalam kalimat asli. Opsi yang mempertahankan makna utuh kalimat adalah jawaban tepat."
              }
            ]
          },
          {
            "id": "toefl-fast3-l8",
            "title": "Reading Sprint: The Origins of Modern Printing",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "The Origins of Modern Printing and Information Flow",
              "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
            },
            "questions": [
              {
                "q": "What is the primary topic of the passage?",
                "options": [
                  "The life and personal struggles of Johannes Gutenberg.",
                  "The historical transition from handwritten manuscripts to mechanical printing and its societal impact.",
                  "A technical comparison of East Asian and Western European papermaking.",
                  "The role of medieval monasteries in preserving ancient classical texts."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kalimat pembuka paragraf 1 dan paragraf 2 menyoroti bagaimana pencetakan mekanik menggantikan naskah tulisan tangan serta dampak sosialnya yang masif."
              },
              {
                "q": "According to paragraph 1, why were books accessible almost exclusively to wealthy institutions before 1440?",
                "options": [
                  "Monasteries prohibited public access to classical literature.",
                  "Paper had not yet been introduced to continental Europe.",
                  "Each copy had to be laboriously reproduced by hand, making them scarce and costly.",
                  "Most secular universities discouraged students from purchasing books."
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Paragraf 1 menyatakan: 'Every manuscript had to be meticulously copied by hand... Consequently, books remained scarce luxury items'."
              },
              {
                "q": "The word \"pivotal\" in paragraph 3 is closest in meaning to:",
                "options": [
                  "crucial",
                  "accidental",
                  "gradual",
                  "temporary"
                ],
                "answer": 0,
                "explanation": "💡 Analisis Kosakata: Kata 'pivotal' berarti 'sangat penting / menjadi titik tolak krusial' (= crucial)."
              },
              {
                "q": "The word \"His\" in paragraph 2 refers to:",
                "options": [
                  "A scribe in an urban workshop",
                  "Johannes Gutenberg",
                  "A wine merchant from Mainz",
                  "An East Asian printer"
                ],
                "answer": 1,
                "explanation": "💡 Analisis Pronoun Reference: Kata ganti 'His invention' secara langsung merujuk pada subjek yang diperkenalkan sebelumnya: 'Johannes Gutenberg, a German goldsmith'."
              },
              {
                "q": "Which of the following is NOT mentioned in the passage as one of Gutenberg's technical innovations?",
                "options": [
                  "Durable lead-alloy metal type pieces",
                  "Specially formulated oil-based printing ink",
                  "Steam-powered automated rotary machinery",
                  "An adapted wooden screw press"
                ],
                "answer": 2,
                "explanation": "💡 Soal Negative Factual: Mesin bertenaga uap ('steam-powered') baru muncul berabad-abad kemudian saat Revolusi Industri, bukan bagian dari inovasi Gutenberg tahun 1440."
              }
            ]
          },
          {
            "id": "toefl-fast3-l9",
            "title": "Final Sprint Drill: Trik Eliminasi Cepat & Mental Juara",
            "type": "flashcard-quiz",
            "xpReward": 40,
            "cards": [
              {
                "front": "⏱️ PACING 30 DETIK PER SOAL",
                "romanization": "Manajemen Waktu Section 2",
                "pronunciation": "Never get stuck on one question",
                "example": "Structure 1-15 (maks 30 dtk) / Written 16-40 (maks 25 dtk).",
                "exampleMeaning": "Jika dalam 25 detik kamu ragu, pilih tebakan terbaik (eliminasi 2 opsi salah) lalu LANJUT!",
                "tip": "💡 Di TOEFL ITP TIDAK ADA NILAI MINUS! Jangan pernah kosongkan lembar jawaban satu nomor pun.",
                "ttsText": "Never leave any answer blank on the TOEFL ITP test.",
                "ttsLang": "en-US"
              },
              {
                "front": "🏆 SIMULASI PREDIKSI SKOR RESMI",
                "romanization": "Evaluasi Akhir Sprint 3 Hari",
                "pronunciation": "Full CBT Simulation Ready",
                "example": "Kerjakan Simulasi 30 Soal di BasaLoka: Listening, Structure, Reading.",
                "exampleMeaning": "Setelah selesai, sistem akan mengonversi skor mentahmu ke skala resmi 310–677 lengkap dengan analisis kelemahan.",
                "tip": "💡 Pasang headphone, siapkan kertas coretan, dan kerjakan simulasi penuh di banner atas untuk menguji mental ujianmu!",
                "ttsText": "Take the full simulation test to assess your readiness for the official exam.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Manajemen Waktu: Jika kamu kehabisan waktu pada 1 menit terakhir dan masih ada 4 soal belum terisi, apa tindakan terbaik?",
                "options": [
                  "Membiarkan soal tersebut kosong karena takut ada penalti nilai minus.",
                  "Mengisi semua nomor yang tersisa dengan satu pilihan konsisten karena TOEFL tidak memiliki sistem nilai minus.",
                  "Menutup layar aplikasi sebelum waktu ujian habis.",
                  "Meminta pengawas memundurkan waktu ujian."
                ],
                "answer": 1,
                "explanation": "💡 Aturan Emas TOEFL: Tidak ada penalti salah di TOEFL ITP! Selalu isi seluruh soal sampai 100% tuntas."
              },
              {
                "q": "Strategi Eliminasi: Dari 4 pilihan ganda, kamu yakin opsi A dan C salah total, tapi ragu antara B dan D. Apa yang harus kamu lakukan?",
                "options": [
                  "Berhenti membaca soal lain sampai menemukan kepastian 100%.",
                  "Pilih salah satu di antara B atau D dengan insting tercepat, lalu segera beralih ke soal berikutnya agar waktu tidak habis.",
                  "Mengosongkan lembar jawaban.",
                  "Mengulangi audio dari awal."
                ],
                "answer": 1,
                "explanation": "💡 Trik Eliminasi 50:50: Mempersempit pilihan ke 2 opsi melipatgandakan peluang benar menjadi 50%. Jangan buang waktu lebih dari 30 detik pada satu soal."
              }
            ]
          }
        ]
      },
      {
        "id": "toefl-u-hack",
        "title": "🎧 Modul 1: Listening Part A (Trik Second Speaker & Anti-Bunyi Mirip)",
        "titleNative": "Second Speaker Focus, Similar Sound Traps & Campus Idioms",
        "icon": "🎧",
        "color": "#f59e0b",
        "month": 1,
        "description": "Modul Listening Part A: Kuasai 80% soal Listening Part A! Pelajari cara mengabaikan bunyi mirip, menangkap intisari orang kedua, dan idiom kampus sehari-hari.",
        "lessons": [
          {
            "id": "toefl-hack-l1",
            "title": "Jurus 1: Anti-Bunyi Mirip (Listening Hack)",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "⚠️ JEBAKAN BUNYI MIRIP",
                "romanization": "Aturan Emas Listening Part A",
                "pronunciation": "Avoid Similar Sounds!",
                "example": "Audio: \"I was in serious pain.\" -> Opsi Jebakan: \"He boarded a plane.\"",
                "exampleMeaning": "Kata \"plane\" (pesawat) sengaja dimunculkan karena bunyinya mirip \"pain\" (sakit)! Ini 90% jebakan!",
                "tip": "💡 Ingat: Jangan pernah pilih kata yang bunyinya sama persis dengan audio. Jawaban benar SELALU pakai KATA LAIN (sinonim) tapi artinya sama (misal: \"He was hurt\").",
                "ttsText": "I was in serious pain.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 TRIK ORANG KEDUA",
                "romanization": "Kunci Rahasia 80% Soal",
                "pronunciation": "Focus on the 2nd Speaker",
                "example": "Man: \"Did you buy the tickets?\" / Woman: \"I barely had enough cash on me.\"",
                "exampleMeaning": "Pria bertanya tiket, Wanita menjawab uangnya nyaris tidak cukup. Jawaban soal ada di ucapan WANITA!",
                "tip": "💡 Buka telinga lebar-lebar untuk PEMBICARA KEDUA! Pertanyaan \"What does the woman/man mean?\" selalu menanyakan maksud kalimat orang kedua.",
                "ttsText": "I barely had enough cash on me.",
                "ttsLang": "en-US"
              },
              {
                "front": "🔄 JURUS PARAPHRASE",
                "romanization": "Ganti Kata = Jawaban Benar",
                "pronunciation": "Restatement & Synonyms",
                "example": "Audio: \"turn in the paper\" -> Jawaban: \"submit the assignment\"",
                "exampleMeaning": "\"Turn in\" artinya mengumpulkan (= submit), \"paper\" artinya tugas karya tulis (= assignment).",
                "tip": "💡 Cari opsi yang artinya sama tapi susunan katanya beda. Kalau ada kata yang sama persis seperti di audio, curigai sebagai jebakan!",
                "ttsText": "Don't forget to turn in your paper before five.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Audio: \"The professor's lecture was really heavy.\" — Manakah yang merupakan JEBAKAN bunyi mirip yang HARUS DIHINDARI?",
                "options": [
                  "He carried a heavy suitcase.",
                  "The course content was difficult to understand.",
                  "The professor explained complex topics.",
                  "The material required a lot of study."
                ],
                "answer": 0,
                "explanation": "💡 Opsi A (\"heavy suitcase\") adalah jebakan bunyi mirip! Di audio \"heavy lecture\" artinya materi berat/sulit, bukan koper yang berat."
              },
              {
                "q": "Audio Pembicara Kedua: \"I wouldn't miss the concert for the world!\" — Apa arti sebenarnya?",
                "options": [
                  "Dia ingin berkeliling dunia.",
                  "Dia pasti akan datang ke konser itu karena sangat ingin nonton.",
                  "Dia tersesat saat menuju konser.",
                  "Dia merindukan dunia musik."
                ],
                "answer": 1,
                "explanation": "💡 Idiom \"not miss something for the world\" artinya tidak akan melewatkannya demi apa pun (pasti datang)."
              },
              {
                "q": "Audio Pembicara Kedua: \"Under the weather today.\" — Manakah jawaban yang benar tanpa kata jebakan?",
                "options": [
                  "Dia sedang memeriksa ramalan cuaca (weather).",
                  "Dia sedang berada di bawah payung.",
                  "Dia sedang merasa kurang enak badan / sakit ringan (feeling sick).",
                  "Cuaca hari ini sangat dingin."
                ],
                "answer": 2,
                "explanation": "💡 \"Under the weather\" adalah idiom TOEFL populer yang berarti tidak enak badan (sick/unwell). Hindari kata \"weather\"!"
              },
              {
                "q": "Man: \"Are you going to the seminar today?\" / Woman: \"I'll say!\" — Apa maksud ucapan wanita?",
                "options": [
                  "Dia ingin memberikan ceramah.",
                  "Dia sangat setuju dan antusias untuk hadir.",
                  "Dia lupa apa yang ingin dikatakan.",
                  "Dia belum memutuskan apakah akan hadir."
                ],
                "answer": 1,
                "explanation": "💡 Idiom persetujuan singkat: \"I'll say!\" artinya \"Saya sangat setuju / Tentu saja!\". Pembicara kedua sangat antusias."
              },
              {
                "q": "Man: \"This textbook was surprisingly affordable.\" / Woman: \"You can say that again!\" — Apa makna respon wanita?",
                "options": [
                  "Meminta pria mengulang kalimatnya karena suaranya kecil.",
                  "Menyetujui bahwa buku teks tersebut memang murah harganya.",
                  "Mengeluh bahwa harga buku terlalu mahal.",
                  "Mengatakan bahwa dia tidak mendengar apa yang dikatakan pria."
                ],
                "answer": 1,
                "explanation": "💡 Trik Ekspresi Sepakat: \"You can say that again!\" di TOEFL TIDAK BERARTI minta diulang, melainkan bermakna \"Aku sangat setuju denganmu!\"."
              },
              {
                "q": "Audio: \"The plane arrived late due to dense fog.\" — Manakah opsi yang merupakan PARAPHRASE BENAR (tanpa jebakan bunyi)?",
                "options": [
                  "The flight was delayed because of poor weather visibility.",
                  "The man felt a lot of pain during the fog.",
                  "The plain coffee tasted very dense.",
                  "The crane arrived late at the docks."
                ],
                "answer": 0,
                "explanation": "💡 Paraphrase benar: \"plane arrived late\" -> \"flight delayed\", \"dense fog\" -> \"poor weather visibility\". Opsi B (pain), C (plain), D (crane) adalah jebakan bunyi mirip!"
              },
              {
                "q": "Woman: \"Did Mark finish the assignment?\" / Man: \"Hardly! He hasn't even opened the book.\" — Apa yang dimaksud pria?",
                "options": [
                  "Mark bekerja sangat keras untuk tugas itu.",
                  "Mark hampir tidak mengerjakan sama sekali tugasnya.",
                  "Tugas Mark sangat sulit dipahami.",
                  "Mark sudah selesai membaca bukunya."
                ],
                "answer": 1,
                "explanation": "💡 Kata \"Hardly!\" bermakna negatif halus (hampir tidak sama sekali). Opsi \"bekerja keras\" adalah jebakan kata \"hardly\" vs \"hard\"!"
              }
            ]
          },
          {
            "id": "toefl-u0-l1",
            "title": "Campus Life & Deadlines",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "c1",
                "title": "Postponed Paper Deadline",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Did you hear that Professor Adams postponed the term paper deadline to next Friday?",
                    "translation": "Kamu dengar tidak kalau Profesor Adams menunda batas waktu makalah sampai Jumat depan?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Really? That's a huge relief! I was worried I'd have to pull an all-nighter tonight.",
                    "translation": "Benarkah? Lega sekali mendengarnya! Tadinya aku khawatir harus begadang semalaman malam ini."
                  }
                ],
                "narrator": "What does the woman mean?",
                "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
                "options": [
                  "She had planned to go to sleep early tonight.",
                  "She is relieved because she has more time to finish her paper.",
                  "She will ask Professor Adams for another extension.",
                  "She already submitted her paper this morning."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ungkapan 'That's a huge relief!' (Lega sekali) dan idiom 'pull an all-nighter' (begadang semalaman suntuk tanpa tidur) menunjukkan wanita tersebut bersyukur karena batas waktu tugas diundur sehingga ia tidak perlu begadang malam ini."
              },
              {
                "id": "c2",
                "title": "Course Registration Full",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I really wanted to take Dr. Miller's Psychology seminar, but the registrar said the class is completely capped.",
                    "translation": "Aku sangat ingin mengambil seminar Psikologi Dr. Miller, tapi bagian akademik bilang kelasnya sudah penuh kuota."
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Why don't you talk to Dr. Miller in person during office hours? Professors can often sign an override slip.",
                    "translation": "Kenapa kamu tidak menemui langsung Dr. Miller di jam kantornya? Dosen sering kali bisa menandatangani surat dispensasi penambahan kuota."
                  }
                ],
                "narrator": "What does the woman suggest the man do?",
                "question": "What does the woman suggest the man do? (Apa saran sang wanita kepada pria tersebut?)",
                "options": [
                  "Wait until next semester to take the course.",
                  "Switch his major to Psychology.",
                  "Ask the instructor directly for permission to join the course.",
                  "Complain to the university registrar office."
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Frasa saran 'Why don't you talk to Dr. Miller in person... sign an override slip' menyarankan sang pria untuk menemui langsung dosen pengampu agar mendapatkan izin khusus (override) masuk ke kelas yang kuotanya sudah penuh."
              },
              {
                "id": "c3",
                "title": "Expensive Textbook",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "The campus bookstore wants ninety dollars for this used chemistry textbook!",
                    "translation": "Toko buku kampus mematok harga sembilan puluh dolar untuk buku kimia bekas ini!"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Have you checked the student co-op bulletin board? Seniors usually sell theirs for next to nothing.",
                    "translation": "Sudahkah kamu mengecek papan pengumuman koperasi mahasiswa? Mahasiswa tingkat akhir biasanya menjual milik mereka dengan harga sangat murah."
                  }
                ],
                "narrator": "What does the woman imply about the textbook?",
                "question": "What does the woman imply about the textbook? (Apa yang diimplikasikan sang wanita?)",
                "options": [
                  "The chemistry textbook is no longer required for the class.",
                  "The man can likely find a much cheaper copy through other students.",
                  "The campus bookstore offers the best discount in town.",
                  "She wants to buy the textbook from the man."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'for next to nothing' berarti 'sangat murah sekali / hampir gratis'. Sang wanita mengindikasikan sang pria bisa menghemat uang dengan membeli buku bekas dari mahasiswa senior di papan koperasi."
              },
              {
                "id": "c4",
                "title": "Computer Lab Printer Jam",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "The printer in the computer lab jammed again, and my presentation handout is due in twenty minutes!",
                    "translation": "Mesin cetak di lab komputer macet lagi, padahal makalah presentasiku harus dikumpulkan dua puluh menit lagi!"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Don't panic. The copy center in the basement of the student union has high-speed printers and almost no line right now.",
                    "translation": "Jangan panik. Pusat fotokopi di ruang bawah tanah gedung mahasiswa punya printer berkecepatan tinggi dan hampir tidak ada antrean saat ini."
                  }
                ],
                "narrator": "What will the man probably do next?",
                "question": "What will the man probably do next? (Apa yang kemungkinan besar akan dilakukan sang pria?)",
                "options": [
                  "Try to repair the jammed printer by himself.",
                  "Postpone his presentation until tomorrow.",
                  "Go to the student union copy center to print his handout.",
                  "Ask his classmates to lend him their handouts."
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Dalam tipe soal 'What will the speaker probably do next', tindakan logis sang pria setelah mendengar saran darurat adalah segera menuju ke pusat fotokopi gedung mahasiswa ('student union copy center')."
              }
            ]
          },
          {
            "id": "toefl-u0-l2",
            "title": "Idioms & Everyday Reactions",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "c5",
                "title": "Under the Weather",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Are you coming with us to the downtown jazz concert tonight?",
                    "translation": "Apakah kamu ikut bersama kami ke konser jazz di pusat kota malam ini?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "I'd love to, but I've been feeling under the weather all afternoon. I think I'll just turn in early.",
                    "translation": "Aku sebenarnya mau sekali, tapi badanku merasa kurang enak sepanjang siang ini. Sepertinya aku akan tidur lebih awal saja."
                  }
                ],
                "narrator": "What does the woman mean?",
                "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
                "options": [
                  "The stormy weather will ruin the outdoor concert.",
                  "She cannot attend the concert because she feels unwell.",
                  "She prefers listening to classical music rather than jazz.",
                  "She will meet them downtown later in the evening."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'under the weather' adalah salah satu idiom paling sering muncul di TOEFL yang berarti 'kurang sehat / sakit ringan' (feeling sick/unwell). 'Turn in early' bermakna tidur lebih awal."
              },
              {
                "id": "c6",
                "title": "Group Project Disagreement",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "How is the biology group project going with Kevin and Lisa?",
                    "translation": "Bagaimana perkembangan tugas kelompok biologi bersama Kevin dan Lisa?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "To be honest, we just don't see eye to eye on how to organize the research findings.",
                    "translation": "Jujur saja, kami tidak sependapat mengenai cara menyusun hasil temuan penelitian."
                  }
                ],
                "narrator": "What problem does the woman describe?",
                "question": "What problem does the woman describe? (Masalah apa yang diceritakan sang wanita?)",
                "options": [
                  "The group members disagree on how to present their data.",
                  "One of the students has problems with their eyesight.",
                  "They have not found enough research material in the library.",
                  "Kevin and Lisa refused to attend the group meetings."
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sepaham / berbeda pendapat' (to disagree). Pilihan B adalah jebakan harfiah kata 'eye' yang umum diujikan dalam tes TOEFL."
              },
              {
                "id": "c7",
                "title": "Rain Check on Lunch",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Would you like to grab lunch at the new Thai restaurant across from the stadium?",
                    "translation": "Mau makan siang bersama di restoran Thailand baru di seberang stadion?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Can I take a rain check? My midterm exam in Economics starts in less than an hour.",
                    "translation": "Bolehkah aku tunda lain waktu? Ujian tengah semester Ekonomiku dimulai kurang dari satu jam lagi."
                  }
                ],
                "narrator": "What does the man imply?",
                "question": "What does the man imply? (Apa yang diimplikasikan sang pria?)",
                "options": [
                  "It is raining too hard to walk to the restaurant.",
                  "He does not like Thai food.",
                  "He wants to postpone lunch with her to a later date.",
                  "He already finished taking his Economics exam."
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Idiom 'take a rain check' berarti 'menunda tawaran atau ajakan ke lain waktu' (to postpone an invitation). Opsi A adalah jebakan bunyi kata 'rain'."
              },
              {
                "id": "c8",
                "title": "Cost an Arm and a Leg",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Did you end up buying that new laptop you were looking at for your computer science classes?",
                    "translation": "Apakah kamu akhirnya membeli laptop baru yang kamu incar untuk kuliah ilmu komputer?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I decided against it. It would have cost me an arm and a leg, so I'll stick with my old one for now.",
                    "translation": "Aku putuskan tidak jadi beli. Harganya selangit, jadi aku tetap pakai yang lama saja untuk sekarang."
                  }
                ],
                "narrator": "What does the man mean?",
                "question": "What does the man mean? (Apa yang dimaksud oleh sang pria?)",
                "options": [
                  "He injured himself while carrying the heavy laptop.",
                  "The laptop was far too expensive for his budget.",
                  "The computer store did not have the model in stock.",
                  "He prefers desktop computers for programming."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ungkapan 'cost an arm and a leg' berarti 'sangat mahal harganya' (extremely expensive). Pria itu batal membeli laptop karena harganya melebihi anggarannya."
              }
            ]
          },
          {
            "id": "toefl-list-extra1",
            "title": "Part A Extended Drill: Idiom Kampus & Makna Tersirat",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "le1-c1",
                "title": "Decision on Summer Internship Offer",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Have you accepted the summer research internship offer from the environmental agency yet?",
                    "translation": "Apakah kamu sudah menerima tawaran magang riset musim panas dari dinas lingkungan hidup?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Not quite yet. It's a fantastic opportunity, but I promised myself I'd sleep on it before signing anything.",
                    "translation": "Belum sepenuhnya. Ini kesempatan luar biasa, tapi aku berjanji pada diriku sendiri untuk memikirkannya semalam dulu sebelum menandatangani apa pun."
                  }
                ],
                "narrator": "What will the woman probably do?",
                "question": "What will the woman probably do? (Apa yang kemungkinan akan dilakukan wanita tersebut?)",
                "options": [
                  "Go to bed immediately and decline the internship tomorrow.",
                  "Take overnight time to carefully consider the decision before responding.",
                  "Sign the contract right now without reading the details.",
                  "Ask the man to take the internship position instead."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'sleep on it' berarti 'menunda keputusan sampai besok pagi agar bisa berpikir dengan kepala jernih'. Opsi A adalah jebakan makna harfiah 'sleep'!"
              },
              {
                "id": "le1-c2",
                "title": "Surprise Retirement Gathering",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Are you sure Dean Richardson doesn't know anything about the farewell party we're planning?",
                    "translation": "Kamu yakin Dekan Richardson belum tahu apa-apa soal pesta perpisahan yang sedang kita rencanakan?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Well, somebody let the cat out of the bag during the faculty lunch yesterday, so the secret is definitely out.",
                    "translation": "Wah, seseorang sudah membocorkan rahasianya saat makan siang dosen kemarin, jadi rahasianya sudah pasti terbongkar."
                  }
                ],
                "narrator": "What does the woman mean?",
                "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
                "options": [
                  "A stray cat was found inside the faculty dining hall.",
                  "Dean Richardson already knows about the upcoming party.",
                  "The faculty decided to cancel the farewell gathering.",
                  "She forgot to deliver the party invitations."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom populer 'let the cat out of the bag' berarti 'membocorkan rahasia'. Opsi A adalah jebakan kata 'cat' secara harfiah!"
              },
              {
                "id": "le1-c3",
                "title": "Heavy Course Load Warning",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I've registered for six honors courses this term and signed up for twenty hours of campus tutoring.",
                    "translation": "Aku mendaftar enam mata kuliah kelas kehormatan semester ini dan mengambil 20 jam bimbingan belajar di kampus."
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Don't you think you might be biting off more than you can chew?",
                    "translation": "Tidakkah kamu berpikir bahwa kamu mungkin mengambil beban melebihi apa yang sanggup kamu tanggung?"
                  }
                ],
                "narrator": "What does the woman suggest to the man?",
                "question": "What does the woman suggest to the man? (Apa yang disiratkan oleh sang wanita kepada pria tersebut?)",
                "options": [
                  "He should chew his cafeteria food more slowly.",
                  "He is taking on far more responsibilities than he can handle.",
                  "He needs to register for even more academic credits.",
                  "He should resign from his university courses immediately."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'bite off more than you can chew' berarti 'mengambil komitmen/beban terlalu banyak melebihi kesanggupan'. Opsi A adalah jebakan harfiah kata 'chew'."
              },
              {
                "id": "le1-c4",
                "title": "Weekend Mountain Hike Weather",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Are we still heading up to Mount Mitchell this Saturday morning, or should we book hotel reservations now?",
                    "translation": "Apakah kita tetap mendaki ke Gunung Mitchell Sabtu pagi ini, atau kita harus pesan hotel sekarang?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Given how unpredictable the meteorology forecast has been, let's just play it by ear.",
                    "translation": "Mengingat ramalan cuaca masih tidak menentu, mari kita lihat situasinya nanti saat hari H saja."
                  }
                ],
                "narrator": "What does the man suggest doing?",
                "question": "What does the man suggest doing? (Apa saran sang pria?)",
                "options": [
                  "Buying audio equipment before going hiking.",
                  "Deciding what to do later depending on how circumstances develop.",
                  "Canceling the entire weekend trip immediately.",
                  "Going to a musical concert at Mount Mitchell instead."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Ungkapan 'play it by ear' berarti 'menentukan keputusan secara fleksibel saat situasi berjalan (wait and see)'. Opsi A & D adalah jebakan kata 'ear'!"
              }
            ]
          },
          {
            "id": "toefl-list-extra3",
            "title": "Part A Master Drill: Idiom Kampus, Reaksi & Nasihat",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "le3-c1",
                "title": "Indecision on Major Declaration",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Have you decided whether to declare your major in political science or international relations?",
                    "translation": "Apakah kamu sudah memutuskan untuk memilih jurusan ilmu politik atau hubungan internasional?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Honestly, I'm still on the fence about it. Both departments offer such compelling curriculum tracks.",
                    "translation": "Jujur saja, aku masih ragu-ragu dan belum bisa memutuskan. Kedua departemen menawarkan kurikulum yang sangat menarik."
                  }
                ],
                "narrator": "What does the woman mean?",
                "question": "What does the woman mean? (Apa maksud wanita tersebut?)",
                "options": [
                  "She climbed over the campus security fence.",
                  "She has not yet made up her mind about her major.",
                  "She decided to quit university altogether.",
                  "She dislikes both academic departments equally."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'on the fence' bermakna 'ragu-ragu / belum bisa menentukan pilihan'. Opsi A adalah jebakan harfiah kata 'fence'!"
              },
              {
                "id": "le3-c2",
                "title": "Lab Report Accuracy Verification",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Are our biochemistry titration results consistent with the theoretical benchmarks?",
                    "translation": "Apakah hasil titrasi biokimia kita konsisten dengan tolok ukur teoritis?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "It was touch and go for a while when the pH meter drifted, but our final averages hit the bullseye.",
                    "translation": "Tadi sempat tidak menentu dan kritis ketika alat pH meter bergeser, tapi rata-rata akhir kita tepat sasaran."
                  }
                ],
                "narrator": "What does the man imply about the experiment?",
                "question": "What does the man imply about the experiment?",
                "options": [
                  "The experiment was a total disaster and failed.",
                  "There was a period of severe uncertainty, but the final results were highly accurate.",
                  "The students must repeat the titration next semester.",
                  "The man prefers to use a broken thermometer."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'touch and go' berarti 'situasi kritis/tidak menentu', sedangkan 'hit the bullseye' berarti 'tepat sasaran/akurat'."
              },
              {
                "id": "le3-c3",
                "title": "Group Presentation Division of Labor",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Did you and Brian manage to agree on who presents the case study slides?",
                    "translation": "Apakah kamu dan Brian berhasil sepakat tentang siapa yang membawakan slide studi kasus?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "Not really. We don't see eye to eye on how the statistical charts should be interpreted.",
                    "translation": "Belum juga. Kami tidak sependapat mengenai bagaimana grafik statistik seharusnya diinterpretasikan."
                  }
                ],
                "narrator": "What does the woman say about her and Brian?",
                "question": "What does the woman say about her and Brian?",
                "options": [
                  "They both need to visit an optometrist for eye exams.",
                  "They have differing viewpoints and disagree on the charts.",
                  "They already submitted the slides to the professor.",
                  "They decided to cancel the presentation."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sependapat / bertolak belakang pandangan'. Opsi A adalah jebakan harfiah kata 'eye'!"
              },
              {
                "id": "le3-c4",
                "title": "Exam Preparation Intensity",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "You look exhausted, Kevin! Did you get any rest before this morning's architecture critique?",
                    "translation": "Kamu kelihatan lelah sekali, Kevin! Apakah kamu sempat istirahat sebelum sesi kritik arsitektur pagi ini?"
                  },
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "Hardly any. I had to burn the midnight oil to assemble the structural cardboard model.",
                    "translation": "Nyaris tidak sama sekali. Aku harus begadang bekerja sampai larut malam untuk merakit maket kardus struktur."
                  }
                ],
                "narrator": "What did Kevin do last night?",
                "question": "What did Kevin do last night? (Apa yang Kevin lakukan semalam?)",
                "options": [
                  "He accidentally caused an oil fire in the studio.",
                  "He stayed up working late into the night.",
                  "He slept soundly for ten consecutive hours.",
                  "He purchased kerosene lamps for his dormitory."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'burn the midnight oil' berarti 'bekerja atau belajar sampai larut malam'. Opsi A & D adalah jebakan harfiah kata 'oil'!"
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day2",
        "title": "🎙️ Modul 2: Listening Part B & C (Percakapan Panjang & Diskusi Akademis)",
        "titleNative": "Campus Negotiations, Professor Consultations & Academic Science",
        "icon": "🎧",
        "color": "#06b6d4",
        "month": 1,
        "description": "Latihan intensif menyimak percakapan panjang seputar negosiasi kampus, konsultasi dosen, dan diskusi sains dengan audio penutur Pria & Wanita langsung lewat headphone.",
        "lessons": [
          {
            "id": "toefl-d2-l1",
            "title": "Part A & B Drill: Campus Problems & Academic Negotiations",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "c13",
                "title": "Library Closed Reserve Policy",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Excuse me, I'm trying to find the reading assignment for Professor Baker's European history seminar, but the shelf is empty.",
                    "translation": "Permisi, saya sedang mencari buku bacaan wajib untuk seminar sejarah Eropa Profesor Baker, tetapi raknya kosong."
                  },
                  {
                    "speaker": "man",
                    "label": "Petugas Pustaka",
                    "avatar": "👨‍💼",
                    "text": "Those titles are on two-hour closed reserve behind the circulation desk. You can photocopy chapters here, but they cannot be checked out overnight.",
                    "translation": "Buku-buku itu ada di bagian cadangan tertutup 2 jam di belakang meja sirkulasi. Anda bisa memfotokopi bab di sini, tetapi tidak boleh dipinjam bawa pulang."
                  }
                ],
                "narrator": "What does the librarian explain to the student?",
                "question": "What does the librarian explain to the student? (Apa yang dijelaskan petugas perpustakaan kepada mahasiswi?)",
                "options": [
                  "The requested books have been permanently removed from the library catalog.",
                  "The books are on reserve and can only be used inside the library for two hours.",
                  "Professor Baker has canceled the reading assignment for this week.",
                  "She must purchase her own copy from the campus bookstore."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Petugas menjelaskan bahwa buku tugas disimpan di 'closed reserve' di belakang meja sirkulasi dengan batasan waktu 2 jam dan tidak boleh dipinjam bawa pulang ('cannot be checked out overnight')."
              },
              {
                "id": "c14",
                "title": "Dormitory Roommate Issue",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "I really need to request a room transfer. My new roommate stays up studying with the overhead lights on until three in the morning every night.",
                    "translation": "Aku benar-benar harus mengajukan pindah kamar. Teman sekamar baruku selalu begadang belajar dengan lampu utama menyala sampai jam 3 pagi setiap malam."
                  },
                  {
                    "speaker": "woman",
                    "label": "Petugas Asrama",
                    "avatar": "👩‍💼",
                    "text": "The housing office has a mandatory two-week freeze on room swaps at the start of the term. You'll need to speak with your resident advisor first.",
                    "translation": "Kantor asrama memberlakukan pembekuan pertukaran kamar wajib selama dua minggu di awal semester. Kamu harus berbicara dengan pembimbing asramamu terlebih dahulu."
                  }
                ],
                "narrator": "What does the woman imply the man should do?",
                "question": "What does the woman imply the man should do? (Apa yang disarankan wanita tersebut kepada mahasiswa tersebut?)",
                "options": [
                  "Consult his resident advisor because immediate room changes are frozen.",
                  "Move into an off-campus apartment immediately.",
                  "Ask the housing office to refund his dormitory fees.",
                  "Study with his roommate until late at night."
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Petugas menjelaskan adanya 'two-week freeze' (penundaan perubahan kamar 2 minggu di awal semester) dan menyarankan sang mahasiswa berkonsultasi terlebih dahulu dengan 'resident advisor' (pembimbing asrama)."
              },
              {
                "id": "c15",
                "title": "Microbiology Lab Deadline Extension",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Professor Miller, our centrifuge machine malfunctioned during the microbiology lab yesterday. Could our team have until Friday to submit the report?",
                    "translation": "Profesor Miller, mesin sentrifus kami rusak saat praktikum mikrobiologi kemarin. Bisakah kelompok kami diberi waktu hingga hari Jumat untuk mengumpulkan laporannya?"
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor Miller",
                    "avatar": "👨‍🏫",
                    "text": "As long as you submit the raw data by Wednesday afternoon to show your progress, a Friday deadline for the full write-up is acceptable.",
                    "translation": "Sepanjang kalian mengumpulkan data mentah pada hari Rabu sore untuk menunjukkan progres kalian, tenggat hari Jumat untuk laporan lengkapnya bisa saya terima."
                  }
                ],
                "narrator": "Under what condition will the professor grant an extension?",
                "question": "Under what condition will the professor grant an extension? (Dengan syarat apa profesor memberikan perpanjangan waktu?)",
                "options": [
                  "If the students repair the centrifuge machine themselves.",
                  "If the team submits their initial raw data by Wednesday afternoon.",
                  "If all team members score full marks on the upcoming exam.",
                  "If they conduct the experiment in a different laboratory."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata kunci bersyarat ('As long as...'): Profesor mengizinkan perpanjangan waktu hingga hari Jumat dengan syarat data mentah ('raw data') dikumpulkan pada hari Rabu sore."
              },
              {
                "id": "c16",
                "title": "Financial Aid Scholarship Status",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "I'm worried my grade point average from last semester dropped just enough to put my merit scholarship at risk.",
                    "translation": "Aku khawatir IPK-ku dari semester lalu turun dan membuat beasiswa prestasiku terancam."
                  },
                  {
                    "speaker": "woman",
                    "label": "Petugas Beasiswa",
                    "avatar": "👩‍💼",
                    "text": "The financial aid office allows a one-semester probationary period before revoking aid. You should schedule a meeting with a counselor to verify your standing.",
                    "translation": "Kantor bantuan keuangan memberikan masa percobaan satu semester sebelum mencabut beasiswa. Kamu sebaiknya menjadwalkan pertemuan dengan konselor untuk memastikan statusmu."
                  }
                ],
                "narrator": "What does the woman tell the man about his scholarship?",
                "question": "What does the woman tell the man about his scholarship? (Apa yang diberitahukan wanita tersebut mengenai beasiswa sang pria?)",
                "options": [
                  "His scholarship has already been canceled permanently.",
                  "There is a one-semester probation period before scholarships are revoked.",
                  "He must repay all the financial aid funds he received.",
                  "Counselor meetings are only available for freshmen students."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Sang wanita menenangkan pria tersebut dengan mengabarkan adanya masa percobaan satu semester ('one-semester probationary period') sebelum beasiswa dicabut, dan menyarankan pria tersebut menemui konselor."
              },
              {
                "id": "c17",
                "title": "Campus Parking & Shuttle Bus",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Parking permits for the central commuter lot completely sold out within ten minutes of online registration opening.",
                    "translation": "Izin parkir untuk lahan komuter utama terjual habis dalam waktu sepuluh menit sejak pendaftaran daring dibuka."
                  },
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "You can still get a perimeter pass for half the price. The express campus shuttle runs from that lot every seven minutes.",
                    "translation": "Kamu masih bisa membeli izin parkir pinggir dengan harga separuhnya. Bus antar-jemput kampus beroperasi dari lahan tersebut setiap tujuh menit."
                  }
                ],
                "narrator": "What alternative does the man suggest?",
                "question": "What alternative does the man suggest? (Alternatif apa yang disarankan sang pria?)",
                "options": [
                  "Walking to campus instead of driving a car.",
                  "Buying a cheaper perimeter parking permit and taking the frequent campus shuttle.",
                  "Parking illegally in the central faculty parking lot.",
                  "Waiting until next semester to bring her car to university."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Pria menawarkan solusi praktis: membeli izin parkir pinggir ('perimeter pass') yang harganya separuh lebih murah dan menaiki bus antar-jemput kampus ('shuttle') yang berangkat setiap 7 menit."
              }
            ]
          },
          {
            "id": "toefl-u0-l3",
            "title": "Academic Consultations & Professors",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "c9",
                "title": "Office Hours Appointment",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Professor Higgins, I was hoping to go over my draft thesis with you today, but I have a lab class during your regular office hours.",
                    "translation": "Profesor Higgins, saya tadinya berharap bisa membahas draf skripsi dengan Anda hari ini, tetapi saya ada kelas praktikum saat jam konsultasi reguler Anda."
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor Higgins",
                    "avatar": "👨‍🏫",
                    "text": "My schedule is pretty packed this afternoon, but my door is open tomorrow morning between nine and eleven.",
                    "translation": "Jadwal saya cukup padat siang ini, tetapi pintu saya terbuka besok pagi antara pukul sembilan sampai sebelas."
                  }
                ],
                "narrator": "What does Professor Higgins mean?",
                "question": "What does Professor Higgins mean? (Apa yang dimaksud oleh Profesor Higgins?)",
                "options": [
                  "He will not be able to review the student's thesis at all.",
                  "The student should come back tomorrow morning to meet him.",
                  "He wants the student to cancel her lab class.",
                  "The office door is broken and needs to be repaired."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Idiom 'my door is open' bermakna 'saya tersedia untuk ditemui/berkonsultasi'. Profesor menyarankan mahasiswi tersebut datang besok pagi antara pukul 09.00 - 11.00."
              },
              {
                "id": "c10",
                "title": "Chemistry Sensor Calibration",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "Professor Vance, I got a completely unexpected reading during the titration step of today's chemistry experiment.",
                    "translation": "Profesor Vance, saya mendapat angka yang sangat tak terduga pada tahap titrasi eksperimen kimia hari ini."
                  },
                  {
                    "speaker": "woman",
                    "label": "Profesor Vance",
                    "avatar": "👩‍🏫",
                    "text": "Did you calibrate the digital pH meter before starting? If the sensor isn't zeroed out, your measurements will be off.",
                    "translation": "Apakah kamu mengkalibrasi pH meter digital sebelum mulai? Kalau sensornya belum dinolkan, pengukuranmu akan meleset."
                  }
                ],
                "narrator": "What does the professor suggest was the cause of the problem?",
                "question": "What does the professor suggest was the cause of the problem? (Apa dugaan penyebab masalah menurut sang profesor?)",
                "options": [
                  "The student used the wrong chemical solution.",
                  "The equipment was not properly calibrated prior to testing.",
                  "The experiment was conducted at the wrong temperature.",
                  "The student arrived too late to complete the lab."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Pertanyaan retoris profesor ('Did you calibrate... if the sensor isn't zeroed out...') mengindikasikan bahwa instrumen digital kemungkinan belum dikalibrasi dengan benar sebelum eksperimen dimulai."
              },
              {
                "id": "c11",
                "title": "Recommendation Letter Request",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Excuse me, Professor Daniels. Would you be willing to write a letter of recommendation for my graduate school application?",
                    "translation": "Permisi, Profesor Daniels. Apakah Anda bersedia menuliskan surat rekomendasi untuk pendaftaran program pascasarjana saya?"
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor Daniels",
                    "avatar": "👨‍🏫",
                    "text": "I'd be glad to. Just email me your current resume and a copy of your statement of purpose so I have some details to highlight.",
                    "translation": "Tentu dengan senang hati. Tolong kirimkan resume terbaru dan salinan esai tujuan studi Anda ke email saya agar ada rincian yang bisa saya tonjolkan."
                  }
                ],
                "narrator": "What must the student provide to the professor?",
                "question": "What must the student provide to the professor? (Apa yang harus diberikan mahasiswi kepada profesor?)",
                "options": [
                  "Her undergraduate diploma and official transcripts.",
                  "Her resume and statement of purpose.",
                  "A draft of the recommendation letter itself.",
                  "A list of graduate schools that rejected her."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Profesor menyatakan bersedia ('I'd be glad to') dengan syarat mahasiswi mengirimkan dokumen pendukung: 'your current resume' dan 'a copy of your statement of purpose'."
              },
              {
                "id": "c12",
                "title": "Career Center Workshop",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Pria",
                    "avatar": "👨",
                    "text": "I've sent out twenty applications for summer internships, but haven't received a single interview callback.",
                    "translation": "Aku sudah mengirimkan dua puluh lamaran magang musim panas, tapi belum menerima panggilan wawancara satu pun."
                  },
                  {
                    "speaker": "woman",
                    "label": "Wanita",
                    "avatar": "👩",
                    "text": "The university Career Center is hosting a resume polishing workshop tomorrow. Several recruiters will be reviewing drafts on the spot.",
                    "translation": "Pusat Karir universitas mengadakan lokakarya pemolesan resume besok. Beberapa perekrut akan meninjau draf secara langsung."
                  }
                ],
                "narrator": "Why does the woman mention the workshop?",
                "question": "Why does the woman mention the workshop? (Mengapa sang wanita menyebutkan lokakarya tersebut?)",
                "options": [
                  "To suggest a place where the man can get help improving his job applications.",
                  "To invite the man to conduct job interviews with her.",
                  "To warn the man that internship positions have already closed.",
                  "To explain why she is not looking for a summer internship."
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Sang wanita menyebut lokakarya pemolesan resume ('resume polishing workshop') di Career Center sebagai saran konstruktif agar sang pria mendapatkan bimbingan langsung dari perekrut untuk memperbaiki berkas lamaran kerjanya."
              }
            ]
          },
          {
            "id": "toefl-d2-l3",
            "title": "Part C Drill: Academic Science Discussions & Fieldwork",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "c18",
                "title": "Desert Plant Photosynthesis",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Professor, I'm reading about desert cacti. How do they perform photosynthesis during hot daylight hours without losing all their moisture?",
                    "translation": "Profesor, saya membaca tentang kaktus gurun. Bagaimana mereka berfotosintesis di siang hari yang panas tanpa kehilangan seluruh kelembapannya?"
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor Biologi",
                    "avatar": "👨‍🏫",
                    "text": "They utilize a specialized cycle called CAM photosynthesis. They keep their pores closed during the scorching day and only open them at night to capture carbon dioxide.",
                    "translation": "Mereka menggunakan siklus khusus bernama fotosintesis CAM. Mereka menutup pori-porinya di siang hari yang terik dan hanya membukanya di malam hari untuk menangkap karbon dioksida."
                  }
                ],
                "narrator": "How do desert plants conserve water while photosynthesizing?",
                "question": "How do desert plants conserve water while photosynthesizing? (Bagaimana tumbuhan gurun menghemat air saat fotosintesis?)",
                "options": [
                  "By growing deeply submerged underground near aquifers.",
                  "By keeping their pores closed during the day and capturing carbon dioxide at night.",
                  "By shedding all of their stems during the dry season.",
                  "By absorbing water directly from passing birds and insects."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Dosen menjelaskan adaptasi CAM: tumbuhan gurun menutup pori-porinya di siang hari yang terik ('closed during the scorching day') dan hanya membukanya di malam hari untuk menyerap CO2."
              },
              {
                "id": "c19",
                "title": "Geology Glacial Moraines",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "During our hiking field trip, we noticed enormous ridges of unsorted boulders and gravel piled up across the valley.",
                    "translation": "Saat kuliah lapangan mendaki kemarin, kami melihat gundukan batu besar dan kerikil tak beraturan yang menumpuk di sepanjang lembah."
                  },
                  {
                    "speaker": "woman",
                    "label": "Asisten Dosen",
                    "avatar": "👩‍🏫",
                    "text": "Those are terminal moraines. As a massive glacier advances and subsequently retreats, it deposits all the pulverized rock material it pushed forward.",
                    "translation": "Itu adalah endapan morain glasial. Saat gletser es raksasa bergerak maju dan kemudian menyusut mundur, gletser mengendapkan seluruh material batuan yang didorongnya."
                  }
                ],
                "narrator": "What created the rock ridges observed by the student?",
                "question": "What created the rock ridges observed by the student? (Apa yang menciptakan gundukan batuan yang diamati mahasiswa tersebut?)",
                "options": [
                  "Volcanic eruptions that occurred during the last century.",
                  "The advance and retreat of a massive prehistoric glacier.",
                  "Man-made excavation for highway construction.",
                  "Strong desert winds depositing fine sand particles."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Asisten dosen menjelaskan bahwa gundukan batu tersebut adalah 'terminal moraines' yang diendapkan oleh pergerakan maju dan menyusutnya gletser es raksasa ('glacier advances and subsequently retreats')."
              },
              {
                "id": "c20",
                "title": "Astronomy Observatory Solar Eclipse",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi",
                    "avatar": "👩",
                    "text": "Is it true that the campus observatory is distributing specialized solar filters for this Thursday's partial eclipse?",
                    "translation": "Apakah benar observatorium kampus membagikan filter matahari khusus untuk pengamatan gerhana parsial hari Kamis ini?"
                  },
                  {
                    "speaker": "man",
                    "label": "Petugas Observatorium",
                    "avatar": "👨‍🔬",
                    "text": "Yes, but remember that looking through standard sunglasses or camera lenses without an ISO-certified filter can cause irreversible retinal burns.",
                    "translation": "Benar, tetapi ingat bahwa melihat melalui kacamata hitam biasa atau lensa kamera tanpa filter bersertifikat ISO dapat menyebabkan luka bakar retina permanen."
                  }
                ],
                "narrator": "What warning does the man give about viewing the eclipse?",
                "question": "What warning does the man give about viewing the eclipse? (Peringatan apa yang diberikan pria tersebut mengenai pengamatan gerhana?)",
                "options": [
                  "Regular sunglasses do not provide adequate eye protection against retinal injury.",
                  "The observatory will be closed to undergraduate students.",
                  "The solar eclipse can only be viewed from mountain peaks.",
                  "Camera filters are too expensive for the astronomy department."
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Pria memperingatkan bahwa kacamata hitam biasa ('standard sunglasses') tidak aman dan dapat menyebabkan luka bakar retina permanen ('irreversible retinal burns') tanpa filter bersertifikat ISO."
              },
              {
                "id": "c21",
                "title": "Marine Biology Coral Bleaching",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Mahasiswa",
                    "avatar": "👨",
                    "text": "The documentary claimed that warming sea surface temperatures cause corals to expel their symbiotic algae.",
                    "translation": "Film dokumenter itu menyatakan bahwa kenaikan suhu permukaan air laut menyebabkan karang mengeluarkan alga simbiosisnya."
                  },
                  {
                    "speaker": "woman",
                    "label": "Profesor Kelautan",
                    "avatar": "👩‍🏫",
                    "text": "Precisely. Without the microscopic algae providing nutrients and coloration, the coral skeleton turns stark white and faces starvation.",
                    "translation": "Tepat sekali. Tanpa alga mikroskopis yang menyuplai nutrisi dan warna, rangka karang menjadi putih pucat dan terancam kelaparan."
                  }
                ],
                "narrator": "What occurs when ocean temperatures rise significantly?",
                "question": "What occurs when ocean temperatures rise significantly? (Apa yang terjadi saat suhu laut meningkat drastis?)",
                "options": [
                  "Corals multiply much faster across shallow waters.",
                  "Corals expel their essential algae, turning white and risking starvation.",
                  "Algae create protective shells that strengthen the coral reefs.",
                  "Ocean currents cool down automatically to heal the reef."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: 'Coral bleaching' terjadi ketika karang mengeluarkan alga simbiosisnya ('expel symbiotic algae'), sehingga karang memutih dan menghadapi kematian/kelaparan ('faces starvation')."
              }
            ]
          },
          {
            "id": "toefl-list-extra2",
            "title": "Part C Extended Drill: Kuliah Sains Populer & Sejarah",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "le2-c1",
                "title": "Geology Lecture: Glacial Landforms & Moraines",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "Today we will examine glacial deposition. As continental glaciers advance, they act like colossal bulldozers, carving rock and gathering massive debris known as till.",
                    "translation": "Hari ini kita akan mengulas pengendapan glasial. Saat gletser benua bergerak maju, mereka bertindak seperti buldoser raksasa, mengikis batu dan mengumpulkan serpihan masif yang disebut till."
                  },
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi (Wanita)",
                    "avatar": "👩",
                    "text": "So when the ice retreats due to warming, that accumulated unsorted sediment forms terminal moraines that mark the glacier's furthest boundary?",
                    "translation": "Jadi ketika es mencair mundur akibat pemanasan, sedimen tak tersortir yang terakumulasi itu membentuk moraine terminal yang menandai batas terjauh pergerakan gletser?"
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "Precisely, Sarah! Long Island and Cape Cod are prime geographic examples of terminal moraines deposited during the last Ice Age.",
                    "translation": "Tepat sekali, Sarah! Long Island dan Cape Cod adalah contoh geografis utama dari moraine terminal yang terendapkan selama Zaman Es terakhir."
                  }
                ],
                "narrator": "What is the primary function of a terminal moraine in geological studies?",
                "question": "What does a terminal moraine indicate to geologists? (Apa yang ditunjukkan moraine terminal kepada ahli geologi?)",
                "options": [
                  "The fastest speed at which liquid water flows under ice sheets.",
                  "The maximum extent or furthest boundary reached by an advancing glacier.",
                  "The exact chemical salinity of ancient ocean basins.",
                  "The presence of active volcanic magma chambers below the ice."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Percakapan menegaskan bahwa terminal moraine 'marks the glacier's furthest boundary' (batas terjauh yang dicapai gletser sebelum mencair mundur)."
              },
              {
                "id": "le2-c2",
                "title": "Ecology Lecture: Wetland Bio-Filtration",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Profesor (Wanita)",
                    "avatar": "👩",
                    "text": "Ecologists frequently describe coastal marshes and wetlands as nature's kidneys. Why do you think that physiological metaphor is so fitting?",
                    "translation": "Para ahli ekologi sering menggambarkan rawa pesisir dan lahan basah sebagai ginjal alami. Menurut kalian mengapa metafora fisiologis itu sangat tepat?"
                  },
                  {
                    "speaker": "man",
                    "label": "Mahasiswa (Pria)",
                    "avatar": "👨",
                    "text": "Because wetland vegetation slows down surface runoff, allowing dense root networks to trap suspended sediments and absorb agricultural excess nitrates before they reach open waters.",
                    "translation": "Karena vegetasi lahan basah memperlambat aliran air permukaan, memungkinkan jaringan akar lebat memerangkap sedimen tersuspensi dan menyerap kelebihan nitrat pertanian sebelum mencapai perairan terbuka."
                  }
                ],
                "narrator": "Why are wetlands compared to human kidneys?",
                "question": "Why are wetlands compared to kidneys? (Mengapa lahan basah diibaratkan ginjal?)",
                "options": [
                  "They regulate blood pressure in aquatic mammals.",
                  "They filter out harmful pollutants, toxins, and excess nutrients from runoff water.",
                  "They store vast quantities of drinking water during extreme droughts.",
                  "They produce vital enzymes required by freshwater fish."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Analogi 'nature's kidneys' digunakan karena lahan basah menyaring sedimen dan menyerap zat pencemar beracun/nitrat dari air limpasan."
              },
              {
                "id": "le2-c3",
                "title": "Astronomy Lecture: Exoplanet Transit Method",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "How do astronomers detect planets orbiting stars hundreds of light-years away when the planets themselves emit virtually no visible light?",
                    "translation": "Bagaimana para astronom mendeteksi planet yang mengorbit bintang ratusan tahun cahaya jauhnya ketika planet itu sendiri hampir tidak memancarkan cahaya tampak?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi (Wanita)",
                    "avatar": "👩",
                    "text": "By observing the transit method! When an exoplanet crosses directly between its host star and our telescope, it causes a tiny, periodic dip in the star's measured brightness.",
                    "translation": "Dengan metode transit! Ketika sebuah eksoplanet melintas tepat di antara bintang induknya dan teleskop kita, ia menyebabkan penurunan kecil yang berkala pada kecerahan bintang yang terukur."
                  }
                ],
                "narrator": "How does the transit method detect exoplanets?",
                "question": "What phenomenon indicates the presence of an exoplanet in the transit method?",
                "options": [
                  "A sudden explosion of cosmic radio frequencies from the star.",
                  "A periodic slight decrease in the observed brightness of the star.",
                  "A visible change in the chemical color spectrum of neighboring galaxies.",
                  "A measurable gravitational pull that pulls telescopes closer to the planet."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Mahasiswi menjelaskan bahwa metode transit bekerja saat eksoplanet melintas dan menimbulkan 'tiny, periodic dip in the star's measured brightness' (penurunan kecil kecerahan cahaya bintang)."
              }
            ]
          },
          {
            "id": "toefl-list-extra4",
            "title": "Part C Lecture Drill: Antropologi, Ekologi & Sejarah Seni",
            "type": "conversation-listening",
            "xpReward": 35,
            "conversations": [
              {
                "id": "le4-c1",
                "title": "Oceanography: Deep-Sea Hydrothermal Vents & Chemosynthesis",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "Prior to 1977, marine biologists assumed that all oceanic life ultimately depended on photosynthetic sunlight. However, the discovery of hydrothermal vents at the Galapagos Rift radically overturned that doctrine.",
                    "translation": "Sebelum tahun 1977, para ahli biologi laut berasumsi bahwa semua kehidupan laut bergantung pada sinar matahari fotosintesis. Namun, penemuan lubang hidrotermal di Celah Galapagos membalikkan doktrin tersebut secara radikal."
                  },
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi (Wanita)",
                    "avatar": "👩",
                    "text": "Because vent ecosystems thrive in perpetual pitch darkness, utilizing chemosynthetic bacteria that metabolize toxic hydrogen sulfide spewing from volcanic fissures as their primary energy engine?",
                    "translation": "Karena ekosistem lubang hidrotermal berkembang dalam kegelapan abadi, memanfaatkan bakteri kemosintetik yang memetabolisme hidrogen sulfida beracun dari celah vulkanik sebagai mesin energi utama mereka?"
                  },
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "Spot on! Giant tube worms and vent crabs form an entire food pyramid completely decoupled from solar photosynthesis.",
                    "translation": "Tepat sekali! Cacing tabung raksasa dan kepiting ventilasi membentuk seluruh piramida makanan yang terlepas sama sekali dari fotosintesis matahari."
                  }
                ],
                "narrator": "What biological process powers hydrothermal vent ecosystems?",
                "question": "What biological process powers hydrothermal vent ecosystems?",
                "options": [
                  "Solar photosynthesis from surface algae.",
                  "Bacterial chemosynthesis using volcanic hydrogen sulfide.",
                  "Nuclear radiation absorption by tube worms.",
                  "Atmospheric nitrogen fixation."
                ],
                "answer": 1,
                "explanation": "💡 Analisis Kuliah Sains: Organisme lubang hidrotermal hidup dari kemosintesis bakteri ('chemosynthetic bacteria that metabolize toxic hydrogen sulfide') tanpa sinar matahari."
              },
              {
                "id": "le4-c2",
                "title": "Anthropology: The Neolithic Agricultural Transition",
                "dialogue": [
                  {
                    "speaker": "woman",
                    "label": "Profesor (Wanita)",
                    "avatar": "👩",
                    "text": "When human societies transitioned from nomadic hunter-gatherer bands to sedentary agricultural settlements around 10,000 BCE, what was the most profound sociological byproduct?",
                    "translation": "Ketika masyarakat manusia bertransisi dari kelompok pemburu-peramu nomaden ke permukiman pertanian menetap sekitar 10.000 SM, apa konsekuensi sosiologis yang paling mendalam?"
                  },
                  {
                    "speaker": "man",
                    "label": "Mahasiswa (Pria)",
                    "avatar": "👨",
                    "text": "Food surpluses allowed for occupational specialization. For the first time, individuals could become full-time artisans, priests, and administrators rather than everyone needing to forage for sustenance.",
                    "translation": "Surplus pangan memungkinkan spesialisasi pekerjaan. Untuk pertama kalinya, individu bisa menjadi pengrajin purnawaktu, pendeta, dan administrator alih-alih semua orang harus mencari makan."
                  }
                ],
                "narrator": "According to the discussion, how did farming transform social structures?",
                "question": "How did agriculture transform social structures in ancient civilizations?",
                "options": [
                  "It forced everyone to become nomadic seasonal foragers.",
                  "Food surpluses enabled the emergence of occupational specialization and complex administration.",
                  "It eliminated social classes and property ownership.",
                  "It caused human populations to decline sharply."
                ],
                "answer": 1,
                "explanation": "💡 Analisis Antropologi: Mahasiswa menjelaskan bahwa surplus pangan pertanian memicu 'occupational specialization' (spesialisasi profesi seperti pengrajin dan administrator)."
              },
              {
                "id": "le4-c3",
                "title": "Art History: The Prehistoric Murals of Lascaux",
                "dialogue": [
                  {
                    "speaker": "man",
                    "label": "Profesor (Pria)",
                    "avatar": "👨",
                    "text": "Consider the Upper Paleolithic cave paintings of Lascaux in southwestern France. How did ancient artists achieve such vibrant ochre reds and velvety charcoal blacks deep in subterranean caves without daylight?",
                    "translation": "Perhatikan lukisan gua Paleolitik Atas di Lascaux di Prancis barat daya. Bagaimana para seniman purba menghasilkan warna merah oker menyala dan hitam arang yang pekat jauh di dalam gua bawah tanah tanpa sinar matahari?"
                  },
                  {
                    "speaker": "woman",
                    "label": "Mahasiswi (Wanita)",
                    "avatar": "👩",
                    "text": "They ground iron oxide minerals and charcoal into fine powder, mixed them with animal fat binders, and painted by the flickering illumination of crude tallow lamps made from hollowed stones.",
                    "translation": "Mereka menumbuk mineral besi oksida dan arang menjadi bubuk halus, mencampurnya dengan perekat lemak hewani, dan melukis dengan penerangan lampu lemak dari batu berongga."
                  }
                ],
                "narrator": "What technique did prehistoric artists use to create cave pigments?",
                "question": "What method did prehistoric painters employ at Lascaux?",
                "options": [
                  "Imported synthetic oil paints from Mediterranean traders.",
                  "Grinding natural minerals like iron oxide and charcoal and binding them with animal fat.",
                  "Using chemical dyes extracted from tropical rainforest flowers.",
                  "Carving stone walls using iron chisels without applying pigment."
                ],
                "answer": 1,
                "explanation": "💡 Analisis Sejarah Seni: Seniman gua Lascaux menumbuk mineral alami (besi oksida dan arang) yang dicampur lemak hewan ('ground iron oxide minerals and charcoal mixed with animal fat')."
              }
            ]
          },
          {
            "id": "toefl-d2-l4",
            "title": "Trik Rahasia Listening Part B & C: Note-Taking & Antisipasi",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "📋 ANTISIPASI SOAL DARI OPSI",
                "romanization": "Scan Opsi Sebelum Audio Mulai",
                "pronunciation": "Predict Topics from Answer Choices",
                "example": "Opsi memuat: A. Photosynthesis, B. Soil erosion, C. Desertification, D. Plant respiration.",
                "exampleMeaning": "Kamu langsung tahu topiknya adalah Biologi Tumbuhan / Lingkungan! Telinga langsung siap menyimak istilah botani.",
                "tip": "💡 Manfaatkan jeda 12 detik antar audio untuk melirik kata benda (nouns) di pilihan jawaban soal berikutnya!",
                "ttsText": "Glance at the answer options before the audio begins to predict the lecture topic.",
                "ttsLang": "en-US"
              },
              {
                "front": "✍️ SHORTHAND NOTETAKING CEPAT",
                "romanization": "Tulis Simbol, Bukan Kalimat",
                "pronunciation": "Shorthand Symbols Save Time",
                "example": "Audio: \"The temperature increased rapidly causing sea levels to rise.\"",
                "exampleMeaning": "Catat di kertas buram: \"T ↑ -> sea level ↑\". Cukup 3 detik!",
                "tip": "💡 Gunakan simbol: ↑ (naik), ↓ (turun), = (sama/artinya), ≠ (beda/kontras), b/c (karena), w/ (dengan). Jangan tulis kata lengkap!",
                "ttsText": "Use arrows and shorthand abbreviations to take notes efficiently.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 KATA TRANSISI KRITIS DOSEN",
                "romanization": "Sinyal Munculnya Soal Ujian",
                "pronunciation": "Signpost Words Signal Exam Questions",
                "example": "Dosen: \"Now, the crucial point to remember is...\" atau \"In contrast to previous theories...\"",
                "exampleMeaning": "Kalimat tepat setelah frasa ini 95% MENJADI SOAL UJIAN!",
                "tip": "💡 Buka telinga saat dosen bilang: \"Most importantly\", \"However\", \"Consequently\", \"What surprises researchers is...\".",
                "ttsText": "Pay close attention to transitional signpost words used by the professor.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Listening Strategy: Mengapa mencatat kalimat utuh kata-per-kata saat menyimak kuliah dosen TOEFL adalah kesalahan fatal?",
                "options": [
                  "Karena pengawas ujian akan menyita lembar coretanmu.",
                  "Karena tanganmu tidak akan mampu mengejar kecepatan bicara dosen, sehingga kamu kehilangan poin-poin berikutnya.",
                  "Karena di TOEFL dilarang menggunakan pena hitam.",
                  "Karena semua soal TOEFL hanya menguji nama dan tanggal."
                ],
                "answer": 1,
                "explanation": "💡 Note-Taking Hack: Menulis kalimat lengkap memecah konsentrasi pendengaran. Gunakan simbol dan kata kunci (keywords) saja!"
              },
              {
                "q": "Listening Strategy: Jika dosen berkata: \"Although early astronomers believed the canals on Mars were artificial, modern spectral data completely disproved this.\", apa ide pokoknya?",
                "options": [
                  "Kanal di Mars memang dibangun oleh peradaban purba.",
                  "Data spektral modern membuktikan bahwa kanal di Mars bukan buatan (ide pokok selalu pada fakta terbaru).",
                  "Astronom purba memiliki teleskop yang lebih canggih daripada teleskop modern.",
                  "Planet Mars tidak memiliki atmosfer."
                ],
                "answer": 1,
                "explanation": "💡 Trik Kontras Ide Pokok: Pada kalimat kontras ('Although X believed..., recent evidence shows Y'), ide pokok dan kunci jawaban SELALU berada pada bukti terbaru (Y)."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day3",
        "title": "📐 Modul 3: Structure 1–15 (Rumus S+V & Konektor Klausa)",
        "titleNative": "Subject-Verb Formula, Appositive Traps & Multi-Clause Connectors",
        "icon": "📐",
        "color": "#10b981",
        "month": 1,
        "description": "Modul Structure: Lumbung poin tercepat! Setiap kalimat wajib punya 1 Subjek & 1 Kata Kerja. Waspada jebakan koma (Appositive) dan rumus konektor klausa.",
        "lessons": [
          {
            "id": "toefl-hack-l2",
            "title": "Jurus 2: Rumus 3 Detik S + V (Structure Hack)",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "⚡ RUMUS SAKTI: S + V",
                "romanization": "Subjek & Kata Kerja Tunggal",
                "pronunciation": "1 Clause = 1 Subject + 1 Verb",
                "example": "The telescope [S] ... [V] distant stars.",
                "exampleMeaning": "Setiap kalimat dasar bahasa Inggris WAJIB punya 1 Subjek dan 1 Verb.",
                "tip": "💡 Jangan baca artinya! Cek dulu: Mana S? Mana V? Kalau kalimat belum punya Verb -> langsung cari opsi yang ada Verb murni!",
                "ttsText": "The telescope observes distant stars.",
                "ttsLang": "en-US"
              },
              {
                "front": "✂️ JURUS CORET PREPOSISI",
                "romanization": "Object of Preposition",
                "pronunciation": "in, on, at, of, with, by, under, from",
                "example": "The color [of the ocean flowers in the bay] is blue.",
                "exampleMeaning": "Semua kata di dalam kurung preposisi [of... in...] BUKAN SUBJEK! Coret semuanya!",
                "tip": "💡 Begitu kamu coret preposisi, subjek aslinya langsung kelihatan jelas: \"The color\" (tunggal) -> maka butuh verb \"is\" (bukan \"are\"!).",
                "ttsText": "The color of the ocean flowers in the bay is blue.",
                "ttsLang": "en-US"
              },
              {
                "front": "🚫 WASPADA KATA KERJA PALSU",
                "romanization": "V-ing & V3 Sendirian",
                "pronunciation": "Participle is NOT a Verb",
                "example": "\"The boy playing soccer.\" (SALAH - bukan kalimat utuh!)",
                "exampleMeaning": "V-ing (playing) sendirian TANPA to be (is/was) BUKANLAH kata kerja (Verb), melainkan kata sifat!",
                "tip": "💡 Jangan pilih V-ing atau \"to + Verb\" kalau kalimatmu kekurangan Verb utama! Pilih Verb asli (plays / is playing / played).",
                "ttsText": "The boy is playing soccer in the garden.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Soal TOEFL: \"The collection of rare Mesoamerican artifacts ________ on display at the national museum.\" — Manakah pilihan yang melengkapi kalimat?",
                "options": [
                  "is",
                  "are",
                  "being",
                  "were"
                ],
                "answer": 0,
                "explanation": "💡 Rumus S+V: Subject kalimat ini adalah kata tunggal \"The collection\" (bukan artifacts!). Prepositional phrase \"of rare Mesoamerican artifacts\" hanya pengecoh. Subject tunggal butuh Verb tunggal (\"is\")."
              },
              {
                "q": "Soal TOEFL: \"________, Thomas Edison invented the phonograph and the incandescent light bulb.\" — Manakah pengisi posisi sebelum koma?",
                "options": [
                  "A prolific American inventor",
                  "He was a prolific American inventor",
                  "Because was a prolific American inventor",
                  "Inventor was prolific American"
                ],
                "answer": 0,
                "explanation": "💡 Rumus Appositive: Frasa sebelum koma menjelaskan Subject \"Thomas Edison\". Tidak boleh ada Subject atau Verb ganda di dalam appositive (jangan pilih opsi B yang ada \"He was\")."
              },
              {
                "q": "Soal TOEFL: \"Although the hurricane struck the coastal barrier islands with immense fury, the central control tower ________ intact.\" — Lengkapi kalimat:",
                "options": [
                  "remained",
                  "remaining",
                  "was remaining to",
                  "it remained"
                ],
                "answer": 0,
                "explanation": "💡 Klausa Utama butuh Main Verb: Klausa anak dipimpin \"Although...\". Klausa utama memiliki Subject \"the central control tower\", sehingga hanya butuh Verb lampau murni: \"remained\". Hindari \"it remained\" karena akan menghasilkan Double Subject!"
              },
              {
                "q": "Soal TOEFL: \"________ in the outer solar system, Pluto possesses a highly eccentric orbit.\" — Pilihan terbaik:",
                "options": [
                  "Located",
                  "It is located",
                  "Locating it",
                  "Location"
                ],
                "answer": 0,
                "explanation": "💡 Participle Phrase: \"Located in the outer solar system\" adalah reduced adjective clause pasif dari \"Which is located...\". Opsi B salah karena menghasilkan double subject tanpa konektor."
              },
              {
                "q": "Soal TOEFL: \"Neither the lead researcher nor his laboratory assistants ________ able to reproduce the experimental results.\" — Pilihan verb:",
                "options": [
                  "were",
                  "was",
                  "is",
                  "being"
                ],
                "answer": 0,
                "explanation": "💡 Aturan Neither... Nor: Verb mengikuti subjek yang PALING DEKAT dengan verb. Subjek terdekat adalah jamak (\"his laboratory assistants\"), maka verb harus jamak lampau (\"were\")."
              },
              {
                "q": "Soal TOEFL: \"Every citizen in the democratic nation ________ the constitutional right to vote.\" — Pilihan:",
                "options": [
                  "has",
                  "have",
                  "having",
                  "are having"
                ],
                "answer": 0,
                "explanation": "💡 Rumus Indefinite Pronoun: Kata \"Every\" dan \"Each\" selalu diikuti kata benda tunggal dan MEMBUTUHKAN VERB TUNGGAL (\"has\", bukan \"have\")."
              },
              {
                "q": "Soal TOEFL: \"Not only the director ________ also the board members supported the financial reform.\" — Lengkapi konektor korelatif:",
                "options": [
                  "but",
                  "and",
                  "or",
                  "with"
                ],
                "answer": 0,
                "explanation": "💡 Pasangan Korelatif Wajib: Pasangan resmi dari \"Not only...\" adalah SELALU \"but also...\"! Tidak boleh dipasangkan dengan \"and\" atau \"or\"."
              }
            ]
          },
          {
            "id": "toefl-d3-l2",
            "title": "Konektor Koordinatif (FANBOYS) & Klausa Keterangan (Adverb Clauses)",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "🌉 RUMUS KONEKTOR KLAUSA",
                "romanization": "Aturan 2 Klausa = 1 Konektor",
                "pronunciation": "S + V, connector + S + V",
                "example": "\"The experiment failed, but the researchers gathered valuable data.\"",
                "exampleMeaning": "Ada 2 Subjek (experiment, researchers) & 2 Verb (failed, gathered) -> WAJIB ada 1 konektor (\"but\").",
                "tip": "💡 Rumus Sakti: Jumlah Konektor = Jumlah Kata Kerja dikurangi 1 (Connectors = Verbs - 1).",
                "ttsText": "The experiment failed, but the researchers gathered valuable data.",
                "ttsLang": "en-US"
              },
              {
                "front": "⚡ KONEKTOR KOORDINATIF (FANBOYS)",
                "romanization": "For, And, Nor, But, Or, Yet, So",
                "pronunciation": "Coordinate Connectors with Comma",
                "example": "\"The library was closed, so students studied at the local café.\"",
                "exampleMeaning": "Konektor FANBOYS selalu ditaruh di tengah diapit koma di depan: [, so], [, but], [, and].",
                "tip": "💡 Hati-hati: Jangan pilih opsi yang memasukkan konektor ganda seperti \"Although... but...\" (salah besar!).",
                "ttsText": "The library was closed, so students studied at the local café.",
                "ttsLang": "en-US"
              },
              {
                "front": "📐 KLAUSA KETERANGAN (ADVERB CONNECTORS)",
                "romanization": "Although, Because, Since, While, When",
                "pronunciation": "Connector at Beginning or Middle",
                "example": "\"Although the results were preliminary, they offered promising insights.\"",
                "exampleMeaning": "Jika konektor adverbia di awal kalimat, harus ada tanda koma pemisah setelah klausa pertama.",
                "tip": "💡 Pola A: [Konektor S + V, S + V]. Pola B: [S + V + konektor + S + V (tanpa koma)].",
                "ttsText": "Although the results were preliminary, they offered promising insights.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Soal TOEFL: \"The financial audit was thorough, ________ no major discrepancies were discovered.\" — Manakah Coordinate Connector (FANBOYS) yang tepat secara logika makna?",
                "options": [
                  "yet",
                  "so",
                  "or",
                  "for"
                ],
                "answer": 0,
                "explanation": "💡 Makna Kontras FANBOYS: Audit sangat mendalam, NAMUN (yet / but) tidak ditemukan kejanggalan besar. \"Yet\" berfungsi sebagai konektor kontras yang setara dengan \"but\"."
              },
              {
                "q": "Soal TOEFL: \"________ the geothermal power plant was expensive to construct, it provides remarkably cheap electricity in the long run.\" — Konektor adverbial:",
                "options": [
                  "Although",
                  "Because",
                  "Despite",
                  "In spite of"
                ],
                "answer": 0,
                "explanation": "💡 Connector vs Preposition: Diikuti klausa lengkap (Subject + Verb: \"the plant was...\"), maka wajib gunakan CONJUNCTION (\"Although\"). \"Despite\" dan \"In spite of\" hanya diikuti Noun Phrase!"
              },
              {
                "q": "Soal TOEFL: \"The committee must decide ________ the surplus funds will be allocated to infrastructure or academic scholarships.\" — Noun clause connector:",
                "options": [
                  "whether",
                  "that",
                  "which",
                  "what"
                ],
                "answer": 0,
                "explanation": "💡 Pasangan Whether... Or: Ketika ada pilihan biner dua hal (\"...allocated to X or Y\"), konektor noun clause yang tepat adalah \"whether\"."
              },
              {
                "q": "Soal TOEFL: \"The ancient manuscript, ________ authorship remains a mystery, was discovered in a monastery library.\" — Adjective clause connector:",
                "options": [
                  "whose",
                  "which",
                  "that",
                  "whom"
                ],
                "answer": 0,
                "explanation": "💡 Kepemilikan (Whose): Diikuti kata benda (\"authorship\"), menunjukkan penulis dari manuskrip tersebut. Konektor kepemilikan adalah \"whose\"."
              },
              {
                "q": "Soal TOEFL: \"Solar panels produce direct current electricity, ________ an inverter is needed to convert it to alternating current for home use.\" — Pilihan konektor:",
                "options": [
                  "so",
                  "but",
                  "nor",
                  "yet"
                ],
                "answer": 0,
                "explanation": "💡 Sebab - Akibat (Cause & Effect): Panel menghasilkan arus DC, SEHINGGA (so) dibutuhkan inverter untuk mengubahnya menjadi arus AC."
              },
              {
                "q": "Soal TOEFL: \"________ severe winter storms swept through the midwest, air travel was grounded nationwide.\" — Pilihan:",
                "options": [
                  "When",
                  "During",
                  "Because of",
                  "In case"
                ],
                "answer": 0,
                "explanation": "💡 Conjunction Klausa: Karena diikuti Subject + Verb (\"storms swept\"), wajib menggunakan Conjunction waktu (\"When\"). \"During\" dan \"Because of\" hanya diikuti kata benda."
              }
            ]
          },
          {
            "id": "toefl-u3-l3",
            "title": "Sentence Structure Fix — Fill Blank",
            "type": "fill-blank",
            "xpReward": 25,
            "questions": [
              {
                "context": "Pilih opsi yang memiliki tata bahasa (grammar) benar:",
                "sentence": "The study revealed that exercise not only improves physical health _________ enhances mental well-being.",
                "hint": "Pasangan konjungsi korelatif: not only... ___ (pilih: but also)",
                "answer": "but also",
                "options": [
                  "but also",
                  "and also",
                  "or also",
                  "however also"
                ],
                "ttsText": "The study revealed that exercise not only improves physical health but also enhances mental well-being.",
                "ttsLang": "en-US"
              },
              {
                "context": "Pilih pasangan artikel (a/an/the/Ø) yang tepat:",
                "sentence": "_________ deforestation is one of _________ most pressing environmental issues of our time.",
                "hint": "Konsep umum (tanpa artikel Ø) vs. bentuk superlatif (pakai \"the\")",
                "answer": "Ø / the",
                "options": [
                  "The / a",
                  "Ø / the",
                  "A / the",
                  "Ø / a"
                ],
                "ttsText": "Deforestation is one of the most pressing environmental issues of our time.",
                "ttsLang": "en-US"
              },
              {
                "context": "Pilih kata dengan bentuk paralel yang setara:",
                "sentence": "Effective leaders must be decisive, communicative, and _________.",
                "hint": "Semua kata dalam daftar harus berjenis kata sifat (adjective): decisive, communicative, and...",
                "answer": "adaptable",
                "options": [
                  "adapting",
                  "to adapt",
                  "adaptable",
                  "adaptation"
                ],
                "ttsText": "Effective leaders must be decisive, communicative, and adaptable.",
                "ttsLang": "en-US"
              }
            ]
          },
          {
            "id": "toefl-d3-extra",
            "title": "Drill 8 Soal Structure 1–15: Appositive, Inversi & Klausa",
            "type": "fill-blank",
            "xpReward": 40,
            "questions": [
              {
                "id": "s-ex-1",
                "text": "___________, a pioneer in the field of radioactivity, was the first person to win two Nobel Prizes in different scientific categories.",
                "options": [
                  "Marie Curie",
                  "That Marie Curie was",
                  "It was Marie Curie",
                  "Because Marie Curie"
                ],
                "answer": 0,
                "explanation": "💡 Appositive: Frasa 'a pioneer in the field...' diapit koma adalah penjelas. Kalimat membutuhkan Subjek murni tanpa kata sambung: 'Marie Curie'."
              },
              {
                "id": "s-ex-2",
                "text": "Seldom ___________ such magnificent biodiversity as that found in pristine tropical coral reef formations.",
                "options": [
                  "biologists observe",
                  "do biologists observe",
                  "have observed biologists",
                  "biologists are observing"
                ],
                "answer": 1,
                "explanation": "💡 Inversi Negatif: Kata 'Seldom' di awal kalimat mewajibkan inversi Aux + Subject: 'do biologists observe'."
              },
              {
                "id": "s-ex-3",
                "text": "___________ the volcanic eruption was catastrophic, nearby soil eventually became exceptionally fertile for agriculture.",
                "options": [
                  "Although",
                  "Despite",
                  "In spite of",
                  "Because of"
                ],
                "answer": 0,
                "explanation": "💡 Konektor Klausa: 'the volcanic eruption was catastrophic' adalah klausa utuh (S+V). Membutuhkan konjungsi 'Although', bukan preposisi 'Despite'."
              },
              {
                "id": "s-ex-4",
                "text": "The giant redwood trees ___________ in the coastal fog belt of Northern California can reach heights exceeding three hundred feet.",
                "options": [
                  "they grow",
                  "growing",
                  "are growing",
                  "growth"
                ],
                "answer": 1,
                "explanation": "💡 Reduced Adjective Clause: Singkatan dari 'which grow' menjadi active present participle 'growing'."
              },
              {
                "id": "s-ex-5",
                "text": "___________ struck the Atlantic coastline in 1938 caused unprecedented infrastructural devastation.",
                "options": [
                  "The hurricane that",
                  "The hurricane",
                  "That the hurricane",
                  "When the hurricane"
                ],
                "answer": 0,
                "explanation": "💡 Noun Clause / Relative Clause: Kalimat sudah memiliki predikat utama 'caused'. Subjek yang tepat adalah 'The hurricane that struck the Atlantic coastline in 1938'."
              },
              {
                "id": "s-ex-6",
                "text": "Not until the late nineteenth century ___________ electric lighting become widespread in commercial establishments.",
                "options": [
                  "did",
                  "when",
                  "that",
                  "it was"
                ],
                "answer": 0,
                "explanation": "💡 Inversi 'Not until': Pola 'Not until [time] + Aux + Subject + Verb'. Kata bantu yang tepat untuk bentuk lampau adalah 'did'."
              },
              {
                "id": "s-ex-7",
                "text": "The Federal Reserve dictates monetary policy, ___________ commercial interest rates throughout the national banking system.",
                "options": [
                  "which directly influences",
                  "influences directly it",
                  "that directly influences it",
                  "directly influencing it was"
                ],
                "answer": 0,
                "explanation": "💡 Non-restrictive Relative Clause: Membutuhkan relative pronoun 'which' untuk menerangkan dampak klausa sebelumnya: 'which directly influences'."
              },
              {
                "id": "s-ex-8",
                "text": "Deep within subterranean caves, bats navigate with extreme precision by ___________ high-frequency ultrasonic vocalizations.",
                "options": [
                  "emit",
                  "emitting",
                  "emitted",
                  "emission of they"
                ],
                "answer": 1,
                "explanation": "💡 Preposition + Gerund: Setelah preposisi 'by', kata kerja wajib berakhiran -ing (Gerund): 'by emitting'."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day4",
        "title": "🕵️ Modul 4: Written Expression 16–40 (Detektif 5 Dosa Error)",
        "titleNative": "Subject-Verb Agreement, Parallel Structure & Word Form Traps",
        "icon": "🕵️",
        "color": "#ec4899",
        "month": 1,
        "description": "Modul Written Expression: Temukan kata yang salah digarisbawahi dalam 20 detik! 5 Dosa: Agreement, Parallel Structure, Verb Form tertukar, Adjective vs Adverb, dan Countable Nouns.",
        "lessons": [
          {
            "id": "toefl-hack-l3",
            "title": "Jurus 3: Detektif 4 Dosa Error (Written Expression)",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "🕵️ DOSA 1: SUBJEK VS VERB",
                "romanization": "Subject-Verb Agreement",
                "pronunciation": "Singular Subject = Singular Verb",
                "example": "Each of the participants (A) [were] (B) given a badge. -> SALAH!",
                "exampleMeaning": "\"Each\" artinya \"setiap satu\" (tunggal), seharusnya memakai \"was\", bukan \"were\"!",
                "tip": "💡 Cari kata \"Each\", \"Every\", \"One of\", \"Someone\" -> mereka SELALU TUNGGAL! Kalau ada verb jamak (are/were/have), itu pasti salah!",
                "ttsText": "Each of the participants was given a badge.",
                "ttsLang": "en-US"
              },
              {
                "front": "🕵️ DOSA 2: KATA SIFAT VS KETERANGAN",
                "romanization": "Adjective vs Adverb",
                "pronunciation": "Word Form Confusion",
                "example": "She made a (A) [quickly] (B) [decision]. -> SALAH!",
                "exampleMeaning": "\"Decision\" adalah kata benda (Noun). Noun harus diterangkan oleh Adjective (quick), bukan Adverb (quickly)!",
                "tip": "💡 Rumus cepat: [Adjective + Noun] (quick decision) & [Verb + Adverb] (decided quickly). Kalau posisinya terbalik, itu jawabannya!",
                "ttsText": "She made a quick decision yesterday.",
                "ttsLang": "en-US"
              },
              {
                "front": "🕵️ DOSA 3: PASANGAN KEMBAR",
                "romanization": "Correlative Conjunctions",
                "pronunciation": "Both... and | Either... or | Neither... nor",
                "example": "Both John (A) [or] (B) Mary were present. -> SALAH!",
                "exampleMeaning": "Pasangan \"Both\" harus \"and\", BUKAN \"or\"! \"Either\" baru berpasangan dengan \"or\".",
                "tip": "💡 Hafalkan rumus jodoh abadi: Both... AND, Either... OR, Neither... NOR, Not only... BUT ALSO. Kalau pasangannya ditukar, itu pasti bagian yang salah!",
                "ttsText": "Both John and Mary were present at the meeting.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Cari Bagian Salah: \"The (A) university committee have (B) decided to postpone the annual conference until (C) next November (D).\"",
                "options": [
                  "The (A)",
                  "have (B)",
                  "until (C)",
                  "next (D)"
                ],
                "answer": 1,
                "explanation": "💡 Dosa 1: Subject-Verb Agreement! Subjek \"The university committee\" adalah kata benda kolektif tunggal dalam standar TOEFL ETS, sehingga verb harus \"has decided\", bukan \"have decided\"."
              },
              {
                "q": "Cari Bagian Salah: \"Modern architecture emphasizes simplicity, functional (A), and the innovative (B) use of natural (C) daylight (D).\"",
                "options": [
                  "functional (A)",
                  "innovative (B)",
                  "natural (C)",
                  "daylight (D)"
                ],
                "answer": 0,
                "explanation": "💡 Dosa 2: Parallel Structure! Sebelum dan sesudah tanda koma harus setara: \"simplicity\" (noun), maka (A) harus berupa noun \"functionality\", bukan adjective \"functional\"."
              },
              {
                "q": "Cari Bagian Salah: \"The driver steered the heavy transport vehicle very careful (A) around the dangerous (B) icy curve (C) on the highway (D).\"",
                "options": [
                  "careful (A)",
                  "dangerous (B)",
                  "curve (C)",
                  "on the (D)"
                ],
                "answer": 0,
                "explanation": "💡 Dosa 3: Word Form (Adj vs Adv)! Kata \"steered\" (mengemudi) adalah VERB, sehingga harus diterangkan oleh ADVERB (\"carefully\"), bukan adjective (\"careful\")."
              },
              {
                "q": "Cari Bagian Salah: \"The research team collected many (A) valuable informations (B) regarding the atmospheric (C) changes in the Arctic (D).\"",
                "options": [
                  "many (A)",
                  "informations (B)",
                  "atmospheric (C)",
                  "Arctic (D)"
                ],
                "answer": 1,
                "explanation": "💡 Dosa 4: Uncountable Noun! Kata \"information\" adalah UNCOUNTABLE (tidak bisa dihitung). Tidak boleh ada akhiran \"-s\" (informations) dan tidak boleh memakai \"many\" (harus \"much information\")."
              },
              {
                "q": "Cari Bagian Salah: \"Professor Clark was capable to solve (A) the complex aerodynamic (B) problem using advanced (C) computer simulations (D).\"",
                "options": [
                  "capable to solve (A)",
                  "aerodynamic (B)",
                  "advanced (C)",
                  "simulations (D)"
                ],
                "answer": 0,
                "explanation": "💡 Dosa 5: Preposition Idiom! Pola kata \"capable\" SELALU berpasangan dengan \"OF + V-ing\" (\"capable of solving\"), BUKAN \"capable to solve\"."
              },
              {
                "q": "Cari Bagian Salah: \"Neither the president nor the senators was (A) willing to compromise on (B) the proposed tax legislation (C) during yesterday's debate (D).\"",
                "options": [
                  "was (A)",
                  "on (B)",
                  "legislation (C)",
                  "during (D)"
                ],
                "answer": 0,
                "explanation": "💡 Neither... Nor Agreement: Subjek terdekat ke verb adalah \"senators\" (jamak), maka verb harus berbentuk jamak \"were\", bukan \"was\"!"
              },
              {
                "q": "Cari Bagian Salah: \"Plants absorb water and nutrients from the soil through (A) their root systems, which (B) anchor them firm (C) in the ground (D).\"",
                "options": [
                  "through (A)",
                  "which (B)",
                  "firm (C)",
                  "ground (D)"
                ],
                "answer": 2,
                "explanation": "💡 Word Form: Kata kerja \"anchor\" membutuhkan adverb untuk menerangkan bagaimana tanaman menancap: harus \"firmly\" (dengan kokoh), bukan adjective \"firm\"."
              }
            ]
          },
          {
            "id": "toefl-u3-l2",
            "title": "Parallel Structure",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "Parallel Structure",
                "romanization": "Struktur Paralel / Setara",
                "pronunciation": "",
                "example": "✅ She likes reading, writing, and studying.\n❌ She likes to read, writing, and to study.",
                "exampleMeaning": "Dalam satu daftar atau deretan, semua elemen harus dalam bentuk tata bahasa yang SAMA.",
                "tip": "🎯 Aturan Struktur Paralel: Dalam sebuah daftar (list) atau perbandingan, semua elemen kata WAJIB memiliki bentuk tata bahasa yang sama persis (misal: semua kata kerja berakhiran -ing, semua kata sifat, atau semua to-infinitive).",
                "ttsText": "She likes reading, writing, and studying. All items must be in the same grammatical form.",
                "ttsLang": "en-US"
              },
              {
                "front": "Parallel with Correlatives",
                "romanization": "Konjungsi Berpasangan",
                "pronunciation": "",
                "example": "✅ Not only did she write the report, but she also presented it.\n❌ Not only did she write the report, but also presenting it.",
                "exampleMeaning": "Konjungsi berpasangan seperti \"not only...but also\" harus diikuti struktur kalimat yang setara.",
                "tip": "🎯 Konjungsi berpasangan (both...and | either...or | neither...nor | not only...but also) WAJIB seimbang di kedua sisinya! Jika sisi kiri kata kerja, maka sisi kanan juga harus kata kerja setara.",
                "ttsText": "Not only did she write the report, but she also presented it clearly.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Kalimat manakah yang memiliki struktur paralel (parallel structure) yang BENAR?",
                "char": null,
                "options": [
                  "He enjoys swimming, to hike, and cycling.",
                  "He enjoys swimming, hiking, and cycling.",
                  "He enjoys swim, hiking, and to cycle.",
                  "He enjoys to swim, to hiking, and cycle."
                ],
                "answer": 1
              },
              {
                "q": "Pilihlah kalimat dengan struktur paralel yang PALING TEPAT:",
                "char": null,
                "options": [
                  "The policy aims to reduce pollution, creating jobs, and to improve infrastructure.",
                  "The policy aims to reduce pollution, to create jobs, and to improve infrastructure.",
                  "The policy aims reducing pollution, to create jobs, and improved infrastructure.",
                  "The policy aims to reduce pollution, creating jobs, and improved infrastructure."
                ],
                "answer": 1
              },
              {
                "q": "\"Not only is she intelligent, ___ she is also hardworking.\"",
                "char": null,
                "options": [
                  "and",
                  "but",
                  "or",
                  "nor"
                ],
                "answer": 1
              },
              {
                "q": "Manakah dari pilihan berikut yang strukturnya SALAH (tidak paralel)?",
                "char": null,
                "options": [
                  "Both reading and writing are important.",
                  "Either he goes, or she will go.",
                  "Neither they nor we are ready.",
                  "Both study and to practice are needed."
                ],
                "answer": 3
              }
            ]
          },
          {
            "id": "toefl-d4-l3",
            "title": "Word Form Traps: Adjective vs Adverb & Singular/Plural Nouns",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "🔍 JEBAKAN ADJECTIVE VS ADVERB",
                "romanization": "Kata Sifat (-ive, -al) vs Keterangan (-ly)",
                "pronunciation": "Extremely well vs Extreme well",
                "example": "\"The newly developed engine runs extremely efficiently.\"",
                "exampleMeaning": "\"Efficiently\" (adverb) menerangkan kata kerja \"runs\". \"Extremely\" (adverb) menerangkan \"efficiently\".",
                "tip": "💡 Adjective menerangkan Kata Benda (Noun). Adverb (-ly) menerangkan Kata Kerja (Verb), Kata Sifat (Adjective), atau Adverb lain.",
                "ttsText": "The newly developed engine runs extremely efficiently.",
                "ttsLang": "en-US"
              },
              {
                "front": "📦 COUNTABLE VS UNCOUNTABLE NOUNS",
                "romanization": "Kata Benda Tak Boleh Diberi -s",
                "pronunciation": "Information, Equipment, Evidence, Research",
                "example": "\"The scientist collected vital information (BUKAN informations!) for the study.\"",
                "exampleMeaning": "Information, equipment, furniture, luggage, research, evidence SELALU tunggal tak terhitung.",
                "tip": "💡 Bila di soal Written Expression kata \"informations\", \"equipments\", atau \"researches\" digarisbawahi, itu 100% SALAH!",
                "ttsText": "The scientist collected vital information for the study.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Temukan bagian yang SALAH: \"The architect designed a (A) remarkably (B) beauty building that (C) attracted visitors (D) worldwide.\"",
                "options": [
                  "(A) remarkably",
                  "(B) beauty",
                  "(C) attracted",
                  "(D) worldwide"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata \"building\" adalah kata benda (noun). Di depannya harus ada kata sifat (Adjective) yaitu \"beautiful\", bukan kata benda \"beauty\"! Opsi (B) salah."
              },
              {
                "q": "Temukan bagian yang SALAH: \"Recent (A) medical (B) researches have revealed that (C) regular exercise (D) improves cognitive health.\"",
                "options": [
                  "(A) medical",
                  "(B) researches",
                  "(C) regular",
                  "(D) improves"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata \"research\" dalam bahasa Inggris akademik adalah Uncountable Noun (kata benda tak terhitung) sehingga TIDAK PERNAH memiliki akhiran jamak \"-es\". Seharusnya \"Recent medical research has revealed...\"."
              },
              {
                "q": "Lengkapi kalimat: \"The soprano sang _________ during the opening performance of the opera.\"",
                "options": [
                  "beautiful",
                  "beautifully",
                  "beauty",
                  "beautify"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata \"sang\" (bernyanyi) adalah kata kerja (verb). Untuk menerangkan bagaimana ia bernyanyi, diperlukan kata keterangan (adverb) berakhiran -ly yaitu \"beautifully\"."
              }
            ]
          },
          {
            "id": "toefl-d4-extra",
            "title": "Drill Detektif Error 16–40: 6 Jebakan Paling Sering Muncul",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "🚫 DOUBLE COMPARATIVES & SUPERLATIVES",
                "romanization": "Dosa Pemborosan Kata Tingkat",
                "pronunciation": "Never say 'more bigger' or 'most highest'",
                "example": "\"The Atlantic trench is [more deeper] than the surrounding continental shelf.\"",
                "exampleMeaning": "\"more deeper\" salah besar! Kata 1 suku kata cukup pakai akhiran -er: \"deeper\".",
                "tip": "💡 Jangan pernah gabungkan 'more' dengan kata berakhiran -er, atau 'most' dengan kata berakhiran -est!",
                "ttsText": "The trench is deeper than the surrounding continental shelf.",
                "ttsLang": "en-US"
              },
              {
                "front": "👥 BENTUK KATA KERJA PASIF VS AKTIF",
                "romanization": "Passive Voice Confusion",
                "pronunciation": "Subject is receiver, not doer",
                "example": "\"The declaration [was signed] in 1776, not [was signing].\"",
                "exampleMeaning": "Dokumen tidak bisa menandatangani dirinya sendiri; dokumen \"ditandatangani\" (be + V3).",
                "tip": "💡 Cek subjeknya: jika benda mati (buku, dokumen, piramida, jembatan), kata kerjanya hampir pasti pasif (be + V3)!",
                "ttsText": "The declaration was signed by colonial representatives in 1776.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Written Expression: \"The ancient architectural aqueduct in Rome was [careful] designed to transport millions of gallons of freshwater daily.\"",
                "options": [
                  "ancient",
                  "was",
                  "careful",
                  "daily"
                ],
                "answer": 2,
                "explanation": "💡 Dosa Bentuk Kata: Kata 'designed' adalah Verb pasif. Untuk menerangkan kata kerja, kita memerlukan Adverb ('carefully designed'), bukan Adjective 'careful'."
              },
              {
                "q": "Written Expression: \"Neither the lead researcher nor her graduate assistants [was] able to replicate the laboratory findings in subsequent trials.\"",
                "options": [
                  "Neither",
                  "graduate",
                  "was",
                  "subsequent"
                ],
                "answer": 2,
                "explanation": "💡 Dosa Agreement 'Neither... nor': Verb menyesuaikan dengan subjek terdekat ('her graduate assistants' = jamak). Maka to be yang benar adalah 'were', bukan 'was'."
              },
              {
                "q": "Written Expression: \"The new turbine design operates [more efficiently], generates higher output, and [reducing] maintenance costs significantly.\"",
                "options": [
                  "operates",
                  "more efficiently",
                  "higher",
                  "reducing"
                ],
                "answer": 3,
                "explanation": "💡 Dosa Paralelisme: Rangkaian kata kerja setara: 'operates' (V1s), 'generates' (V1s), and... maka bentuk ketiga harus 'reduces' (V1s), bukan bentuk gerund 'reducing'."
              },
              {
                "q": "Written Expression: \"Of all the mountain peaks in North America, Mount Denali is the [most highest] elevation above sea level.\"",
                "options": [
                  "peaks",
                  "the",
                  "most highest",
                  "above"
                ],
                "answer": 2,
                "explanation": "💡 Dosa Double Superlative: 'high' adalah kata sifat satu suku kata yang bentuk superlatifnya cukup 'highest'. Penggunaan 'most highest' adalah pemborosan yang salah."
              },
              {
                "q": "Written Expression: \"A series of unexpected geological [discovery] in the Great Rift Valley has transformed historical timelines.\"",
                "options": [
                  "series",
                  "unexpected",
                  "discovery",
                  "has transformed"
                ],
                "answer": 2,
                "explanation": "💡 Dosa Singular/Plural: Frasa 'A series of...' selalu diikuti kata benda jamak ('geological discoveries')."
              },
              {
                "q": "Written Expression: \"Despite the committee members debated for hours, they failed [reaching] a definitive consensus on the budgetary policy.\"",
                "options": [
                  "Despite",
                  "debated",
                  "reaching",
                  "budgetary"
                ],
                "answer": 0,
                "explanation": "💡 Dosa Preposition vs Conjunction: 'the committee members debated for hours' adalah klausa utuh (S+V). Kata yang benar adalah konjungsi 'Although / Even though', bukan preposisi 'Despite'."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day5",
        "title": "⚡ Modul 5: Jurus Lanjutan 550+ (Inversi, Reduced Clauses & Tanpa If)",
        "titleNative": "Inverted Word Order, Reduced Participles & Conditionals without If",
        "icon": "⚡",
        "color": "#8b5cf6",
        "month": 1,
        "description": "Modul Jurus Lanjutan 550+: Kunci tembus skor 550 ke atas! Soal-soal tingkat dewa yang sering mengecoh: Inversi kata negatif (Never, Seldom), pemendekan klausa partisipel, dan pengandaian tanpa If.",
        "lessons": [
          {
            "id": "toefl-d5-l1",
            "title": "Inversi Subjek & Predikat: Kata Negatif & Keterangan Tempat",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "🔄 ATURAN EMAS INVERSI NEGATIF",
                "romanization": "Kata Negatif di Awal = Kata Kerja Mundur ke Depan",
                "pronunciation": "Never, Seldom, Rarely, Hardly, Not only",
                "example": "\"Never has the university witnessed such high enrollment numbers.\"",
                "exampleMeaning": "Bila \"Never\" ditaruh di depan, susunannya bukan \"the university has witnessed\", melainkan \"has the university witnessed\" (seperti kalimat tanya!).",
                "tip": "💡 Pola Inversi Negatif: [Kata Negatif] + [Auxiliary Verb (has/did/can)] + [Subject] + [Verb utama].",
                "ttsText": "Never has the university witnessed such high enrollment numbers.",
                "ttsLang": "en-US"
              },
              {
                "front": "📍 INVERSI KETERANGAN TEMPAT",
                "romanization": "Preposisi Tempat di Awal Kalimat",
                "pronunciation": "On the hill stands the observatory",
                "example": "\"In the center of the campus stands the historic clock tower.\"",
                "exampleMeaning": "Bila keterangan tempat menduduki posisi awal dan tidak ada koma, kata kerja langsung mendahului subjek (\"stands\" sebelum \"the clock tower\").",
                "tip": "💡 Hati-hati: Subjeknya ada di BELAKANG kata kerja! Pastikan kesesuaian tunggal/jamak (stands = clock tower tunggal).",
                "ttsText": "In the center of the campus stands the historic clock tower.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Soal TOEFL: \"Seldom ________ such breathtaking geological formations as those found in Bryce Canyon.\" — Pilihan jawaban:",
                "options": [
                  "does one see",
                  "one sees",
                  "one does see",
                  "sees one"
                ],
                "answer": 0,
                "explanation": "💡 Jurus Inversi Negatif: Kalimat diawali adverb negatif (\"Seldom\", \"Rarely\", \"Never\"). Rumus wajib INVERSI: Adverb Negatif + Auxiliary/Modal + Subject + Verb murni -> \"Seldom does one see\"."
              },
              {
                "q": "Soal TOEFL: \"Not only ________ immense pressure during deep-sea dives, but they also experience freezing water temperatures.\" — Lengkapi:",
                "options": [
                  "do submarines endure",
                  "submarines endure",
                  "submarines do endure",
                  "endure submarines"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Not Only\": Pola \"Not only + Auxiliary + Subject + Main Verb\". Opsi A adalah satu-satunya susunan inversi yang benar!"
              },
              {
                "q": "Soal TOEFL: \"Beyond the dense pine forest ________ the ancient ruins of an abandoned silver mining town.\" — Pilihan verb:",
                "options": [
                  "lay",
                  "did it lie",
                  "it lay",
                  "lying"
                ],
                "answer": 0,
                "explanation": "💡 Inversi Tempat (Place Inversion): Ketika kalimat diawali keterangan tempat/arah (\"Beyond the forest\"), susunan kalimat diinversi menjadi Verb + Subject: \"Beyond the forest lay (verb) the ancient ruins (subject)\"."
              },
              {
                "q": "Soal TOEFL: \"Only after extensive geological surveying ________ the engineers begin excavation on the mountain tunnel.\" — Pilihan:",
                "options": [
                  "did",
                  "was",
                  "have",
                  "were"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Only After\": Frasa \"Only after...\" memicu inversi di klausa utama: Auxiliary (\"did\") + Subject (\"the engineers\") + Verb murni (\"begin\")."
              },
              {
                "q": "Soal TOEFL: \"Under no circumstances ________ laboratory chemicals without wearing proper protective goggles.\" — Pilihan:",
                "options": [
                  "should students handle",
                  "students should handle",
                  "students handle",
                  "handle should students"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Under no circumstances\": Ungkapan negatif mutlak ini mewajibkan inversi modal + subject: \"should students handle\"."
              },
              {
                "q": "Soal TOEFL: \"Hardly ________ into the departure terminal when the boarding announcement was broadcast.\" — Lengkapi:",
                "options": [
                  "had the passengers stepped",
                  "the passengers had stepped",
                  "passengers stepped",
                  "did the passengers stepped"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Hardly... When\": Rumus klasik TOEFL: \"Hardly + had + Subject + V3 + when...\". Hanya opsi A yang memenuhi kaidah."
              }
            ]
          },
          {
            "id": "toefl-d5-l2",
            "title": "Klausa Partisipel yang Disederhanakan (Reduced Clauses: V-ing vs V3)",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "✂️ PENYEDERHANAAN KLAUSA AKTIF (V-ING)",
                "romanization": "Present Participle Reduction",
                "pronunciation": "Active meaning = V-ing",
                "example": "\"The students entering the library must present their ID cards.\"",
                "exampleMeaning": "Berasal dari: \"The students who enter the library...\". Karena aktif melakukan tindakan masuk -> disingkat jadi \"entering\".",
                "tip": "💡 Jika subjek melakukan sendiri tindakannya, gunakan bentuk Verb-ing tanpa \"who/which is\".",
                "ttsText": "The students entering the library must present their ID cards.",
                "ttsLang": "en-US"
              },
              {
                "front": "🛡️ PENYEDERHANAAN KLAUSA PASIF (V3)",
                "romanization": "Past Participle Reduction",
                "pronunciation": "Passive meaning = Past Participle (V3)",
                "example": "\"The artifacts discovered in the cave date back to 3000 BC.\"",
                "exampleMeaning": "Berasal dari: \"The artifacts which were discovered in the cave...\". Dihilangkan \"which were\", menyisakan \"discovered\" (ditemukan).",
                "tip": "💡 Jebakan maut: \"discovered\" di sini BUKAN kata kerja utama kalimat! Kata kerja utamanya adalah \"date back\".",
                "ttsText": "The artifacts discovered in the cave date back to 3000 BC.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Soal TOEFL: \"________ the severe weather conditions earlier, the flight would have been rerouted to another airport.\" — Inverted Conditional Type 3:",
                "options": [
                  "Had the air traffic controllers known",
                  "If the controllers had know",
                  "Did the controllers know",
                  "Have the controllers known"
                ],
                "answer": 0,
                "explanation": "💡 Inversi Kondisional Tanpa \"If\": \"If the controllers had known...\" diinversi menjadi \"Had the controllers known...\". Hilangkan kata 'If' dan letakkan 'Had' di awal!"
              },
              {
                "q": "Soal TOEFL: \"________ any further complications arise during the procedure, contact the supervising surgeon immediately.\" — Inverted Conditional Type 1:",
                "options": [
                  "Should",
                  "If should",
                  "Were",
                  "Had"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Should\" (Pengganti If): Kalimat pengandaian \"If any complications arise...\" dapat ditulis menjadi \"Should any complications arise...\". Sangat sering muncul di TOEFL!"
              },
              {
                "q": "Soal TOEFL: \"The historical documents ________ during the restoration project will be cataloged by the university archive.\" — Reduced Relative Clause:",
                "options": [
                  "discovered",
                  "which discovered",
                  "were discovered",
                  "discovering"
                ],
                "answer": 0,
                "explanation": "💡 Reduced Relative Clause Pasif: Bentuk lengkap \"which were discovered\" disederhanakan menjadi kata kerja bentuk ketiga pasif saja: \"discovered\". Opsi C salah karena membuat double main verb."
              },
              {
                "q": "Soal TOEFL: \"________ the highest mountain peak in North America, Denali rises over 20,000 feet above sea level.\" — Reduced Appositive Clause:",
                "options": [
                  "Being",
                  "It is",
                  "Because it is",
                  "Was"
                ],
                "answer": 0,
                "explanation": "💡 Participle Phrase: \"Being the highest mountain peak...\" menerangkan subjek \"Denali\". Opsi B salah karena menghasilkan dua klausa independen tanpa konjungsi."
              },
              {
                "q": "Soal TOEFL: \"________ he here with us today, he would undoubtedly agree with our proposed environmental policy.\" — Inverted Conditional Type 2:",
                "options": [
                  "Were",
                  "Was",
                  "Had",
                  "Should"
                ],
                "answer": 0,
                "explanation": "💡 Inversi \"Were\" (Kondisional Lampau): \"If he were here...\" diinversi menjadi \"Were he here...\". Dalam conditional formal TOEFL, selalu gunakan \"were\" untuk semua subjek."
              },
              {
                "q": "Soal TOEFL: \"The committee members recommended that the treasurer ________ a detailed monthly expenditure report.\" — Subjunctive Mood:",
                "options": [
                  "submit",
                  "submits",
                  "submitted",
                  "submitting"
                ],
                "answer": 0,
                "explanation": "💡 Subjunctive Mood: Setelah kata kerja perintah/saran seperti \"recommended that...\", kata kerja berikutnya WAJIB berbentuk VERB DASAR BARE INFINITIVE (\"submit\", bukan \"submits\")."
              }
            ]
          },
          {
            "id": "toefl-d5-l3",
            "title": "Pengandaian Tingkat Tinggi Tanpa \"If\" (Had, Were, Should)",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "💎 CONDITIONAL TIPE 3 TANPA IF",
                "romanization": "Had + Subject + V3",
                "pronunciation": "Had I known = If I had known",
                "example": "\"Had the engineer noticed the structural flaw, the bridge collapse would have been averted.\"",
                "exampleMeaning": "Artinya sama persis dengan: \"If the engineer had noticed...\". Kata \"If\" dibuang dan kata kerja bantu \"Had\" melompat ke depan subjek.",
                "tip": "💡 Trik Cepat: Kalau ada \"Had + S + V3\" di awal kalimat, pasangannya di klausa kedua SELALU \"would have + V3\".",
                "ttsText": "Had the engineer noticed the structural flaw, the bridge collapse would have been averted.",
                "ttsLang": "en-US"
              },
              {
                "front": "🪄 CONDITIONAL TIPE 2 TANPA IF",
                "romanization": "Were + Subject + to + Verb",
                "pronunciation": "Were she present = If she were present",
                "example": "\"Were the committee to approve the grant, research could begin immediately.\"",
                "exampleMeaning": "Artinya sama dengan: \"If the committee approved / were to approve...\". Bentuk lampau hipotesis formal.",
                "tip": "💡 Di TOEFL, kata \"Were\" selalu dipakai untuk semua subjek tunggal maupun jamak (Were I, Were he, Were she).",
                "ttsText": "Were the committee to approve the grant, research could begin immediately.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Lengkapi kalimat: \"_________ the flight earlier, we would have attended the opening symposium on time.\"",
                "options": [
                  "Had we booked",
                  "If we booked",
                  "We had booked",
                  "Did we book"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Klausa kedua menggunakan \"would have attended\" (Conditional Tipe 3). Bentuk pengandaian tanpa \"if\" yang benar adalah inversi \"Had we booked\" (= If we had booked)."
              },
              {
                "q": "Lengkapi kalimat: \"_________ any questions arise regarding the contract, please contact legal counsel.\"",
                "options": [
                  "Should",
                  "Had",
                  "Would",
                  "Unless"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Ini adalah bentuk pengandaian sopan tanpa if untuk Tipe 1: \"Should any questions arise...\" yang setara dengan \"If any questions should arise...\"."
              }
            ]
          },
          {
            "id": "toefl-d5-extra",
            "title": "Bank Soal Jurus 550+: Inversi Tempat, Had/Were & Kausatif",
            "type": "fill-blank",
            "xpReward": 40,
            "questions": [
              {
                "id": "adv-1",
                "text": "Beyond the perimeter of the ancient settlement ___________ the remnants of an expansive irrigation canal system.",
                "options": [
                  "lay",
                  "did lie",
                  "it was lying",
                  "where laid"
                ],
                "answer": 0,
                "explanation": "💡 Inversi Keterangan Tempat: Ketika kalimat diawali keterangan tempat ('Beyond the perimeter...'), posisi Verb langsung mendahului Subjek: 'lay the remnants'."
              },
              {
                "id": "adv-2",
                "text": "___________ the volcanic warning sirens sounded sooner, thousands of villagers could have evacuated to safety.",
                "options": [
                  "Had",
                  "If had",
                  "Were",
                  "Should"
                ],
                "answer": 0,
                "explanation": "💡 Pengandaian Type 3 Tanpa 'If': Bentuk inversi dari 'If the sirens had sounded' dibalik menjadi 'Had the sirens sounded'."
              },
              {
                "id": "adv-3",
                "text": "The chief aerospace engineer had the technician ___________ the hydraulic pressure valves before final liftoff.",
                "options": [
                  "inspect",
                  "to inspect",
                  "inspected",
                  "inspecting"
                ],
                "answer": 0,
                "explanation": "💡 Causative Active 'Have': Pola 'have + someone + Verb dasar (bare infinitive)': 'had the technician inspect'."
              },
              {
                "id": "adv-4",
                "text": "The university provost insisted that every faculty department ___________ its curriculum standards by the end of the academic year.",
                "options": [
                  "align",
                  "aligns",
                  "aligned",
                  "aligning"
                ],
                "answer": 0,
                "explanation": "💡 Subjunctive Mood: Kata kerja saran/tuntutan 'insist that...' selalu mewajibkan bentuk infinitive dasar tanpa akhiran -s: 'align'."
              },
              {
                "id": "adv-5",
                "text": "The more aerodynamic the exterior body of an automobile, ___________ fuel efficiency it achieves during highway cruising.",
                "options": [
                  "the greater",
                  "greater",
                  "is the greater",
                  "the greatest"
                ],
                "answer": 0,
                "explanation": "💡 Double Comparative: Pola 'The more [X], the greater [Y]'."
              },
              {
                "id": "adv-6",
                "text": "Were the global climate ___________ by even two degrees Celsius, polar ice caps would experience catastrophic melting.",
                "options": [
                  "to warm",
                  "warm",
                  "warmed",
                  "warming"
                ],
                "answer": 0,
                "explanation": "💡 Pengandaian Type 2 Tanpa 'If': Bentuk inversi dari 'If the climate were to warm' dibalik menjadi 'Were the climate to warm'."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day6",
        "title": "📖 Modul 6: Reading Ninja (Scan & Skim Cepat Tanpa Baca Semua)",
        "titleNative": "Main Idea, Negative Factual EXCEPT, Pronoun Reference & Context Vocab",
        "icon": "📖",
        "color": "#3b82f6",
        "month": 1,
        "description": "Modul Reading Ninja: Habiskan 50 soal reading tanpa kehabisan waktu! Jawab Main Idea dari baris pertama, scan opsi EXCEPT, lacak rujukan Pronoun, dan tebak arti kata dari konteks.",
        "lessons": [
          {
            "id": "toefl-hack-l4",
            "title": "Jurus 4: Ninja Scan Reading (Tanpa Baca Semua)",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "🥷 JURUS TOPIC / MAIN IDEA",
                "romanization": "Selesai dalam 15 Detik",
                "pronunciation": "First Sentence Technique",
                "example": "Soal: \"What is the main topic of the passage?\"",
                "exampleMeaning": "CUKUP BACA KALIMAT PERTAMA dari Paragraf 1 dan Paragraf 2!",
                "tip": "💡 85% teks ilmiah TOEFL meletakkan ide pokok di kalimat pembuka (Topic Sentence). Jangan baca paragraf sampai habis kalau ditanya topik utama!",
                "ttsText": "The main topic is usually in the first sentence of each paragraph.",
                "ttsLang": "en-US"
              },
              {
                "front": "🥷 JURUS SCAN NOMOR & TAHUN",
                "romanization": "Detail Question Shortcut",
                "pronunciation": "Capital Letters, Numbers, Years",
                "example": "Soal: \"In what year did the telescope discover Kepler-22b?\"",
                "exampleMeaning": "Langsung gerakkan mata mencari angka \"Kepler-22b\" atau tahun 4 digit!",
                "tip": "💡 Gerakkan mata zigzag seperti mencari nama teman di buku telepon. Begitu ketemu kata uniknya, baca 1 kalimat tepat di depan atau belakangnya.",
                "ttsText": "Scan for capital letters and four-digit years directly.",
                "ttsLang": "en-US"
              },
              {
                "front": "🥷 JURUS VOCAB IN CONTEXT",
                "romanization": "Trik Substitusi Opsi",
                "pronunciation": "Word in Line X is closest in meaning to...",
                "example": "Soal: \"The word 'fragile' in line 4 is closest in meaning to...\"",
                "exampleMeaning": "Lompat ke line 4, masukkan 4 pilihan kata ke kalimat, mana yang paling masuk akal.",
                "tip": "💡 Jangan langsung pilih arti kamus yang kamu hafal! Pilih kata yang kalau dimasukkan ke kalimat itu, maknanya tetap nyambung.",
                "ttsText": "Substitute each choice into the sentence to test its meaning.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Trik Cepat Reading: Di manakah letak jawaban dari pertanyaan \"What is the main topic of the passage?\" pada 90% teks TOEFL?",
                "options": [
                  "1–2 kalimat pertama pada paragraf pertama.",
                  "Di baris paling bawah teks.",
                  "Di tengah-tengah paragraf kedua.",
                  "Harus membaca seluruh teks dari kata pertama sampai terakhir."
                ],
                "answer": 0,
                "explanation": "💡 Trik Paragraf Akademik: Paragraf akademik bahasa Inggris selalu menganut struktur deduktif. Ide utama selalu diletakkan di kalimat 1 atau 2 paragraf pertama (Topic Sentence)."
              },
              {
                "q": "Jika ada soal vocabulary: \"The word 'ubiquitous' in line 12 is closest in meaning to...\", apa langkah tercepat tanpa menghafal kamus?",
                "options": [
                  "Membaca 1 kalimat sebelum dan 1 kalimat sesudah untuk menemukan kata petunjuk konteks (context clues).",
                  "Memilih kata yang bunyinya paling rumit dan panjang.",
                  "Menerjemahkan kata demi kata ke bahasa Indonesia.",
                  "Melewatkan soal karena tidak pernah menghafal kata itu."
                ],
                "answer": 0,
                "explanation": "💡 Jurus Context Clues: Baca kalimat tempat kata itu berada! Konteks teks TOEFL selalu memberi petunjuk sinonim atau contoh di sekitarnya."
              },
              {
                "q": "Pertanyaan: \"The pronoun 'it' in line 8 refers to...\" — Cara paling akurat untuk menjawab:",
                "options": [
                  "Mencari kata benda tunggal (singular noun) yang muncul tepat sebelum kata ganti tersebut.",
                  "Mencari kata benda jamak di akhir paragraf.",
                  "Memilih kata benda pertama yang ada di judul teks.",
                  "Menebak secara acak."
                ],
                "answer": 0,
                "explanation": "💡 Pronoun Reference Hack: Pronoun \"it\" merujuk pada kata benda tunggal (singular) yang baru saja disebutkan pada klausa tepat sebelumnya."
              },
              {
                "q": "Dalam soal \"Which of the following is NOT mentioned in the passage?\" — Trik terbaik menghemat waktu adalah:",
                "options": [
                  "Gunakan Scanning (cari kata kunci di 4 opsi secara cepat dalam teks, opsi yang tidak ada adalah jawabannya).",
                  "Membaca ulang seluruh teks dengan perlahan.",
                  "Memilih opsi yang paling panjang tulisannya.",
                  "Memilih opsi A secara otomatis."
                ],
                "answer": 0,
                "explanation": "💡 Scanning Strategy: Cari kata kunci spesifik (nama tokoh, angka, tahun, istilah teknis) dari opsi ke dalam paragraf untuk mencocokkan mana yang disebutkan."
              },
              {
                "q": "Jika soal menanyakan: \"Why does the author mention 'ancient Roman aqueducts' in paragraph 3?\" — Jawaban benar biasanya adalah:",
                "options": [
                  "Sebagai ilustrasi atau contoh pendukung untuk memperkuat argumen utama di paragraf tersebut.",
                  "Karena penulis ingin beralih membahas sejarah kekaisaran Romawi.",
                  "Untuk membantah bahwa Roma pernah membangun saluran air.",
                  "Hanya sebagai pengisi ruang tulisan."
                ],
                "answer": 0,
                "explanation": "💡 Author's Purpose Hack: Contoh spesifik (nama kota, nama alat, peradaban) hampir selalu berfungsi sebagai BUKTI / CONTOH PENDUKUNG untuk ide pokok paragraf tersebut."
              },
              {
                "q": "Kata \"plausible\" dalam teks ilmiah TOEFL paling sering bersinonim dengan:",
                "options": [
                  "believable / reasonable (masuk akal)",
                  "impossible (mustahil)",
                  "expensive (mahal)",
                  "dangerous (berbahaya)"
                ],
                "answer": 0,
                "explanation": "💡 Kosakata Akademik AWL: \"Plausible\" artinya masuk akal atau dapat dipercaya (credible/believable)."
              }
            ]
          },
          {
            "id": "toefl-u2-l1",
            "title": "Question Types — Overview",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "Main Idea Question",
                "romanization": "Menentukan Ide Pokok",
                "pronunciation": "",
                "example": "\"What is the main purpose of the passage?\" / \"The passage primarily discusses...\"",
                "exampleMeaning": "Apa tujuan utama teks? / Teks ini terutama membahas...",
                "tip": "🎯 Strategi: Baca kalimat pertama dan terakhir setiap paragraf. Pilihan jawaban yang terlalu sempit atau hanya contoh kecil bukanlah ide pokok.",
                "ttsText": "What is the main purpose of the passage?",
                "ttsLang": "en-US"
              },
              {
                "front": "Vocabulary in Context",
                "romanization": "Makna Kata dalam Konteks",
                "pronunciation": "",
                "example": "\"The word X in paragraph 2 is closest in meaning to...\"",
                "exampleMeaning": "\"Kata X di paragraf 2 paling mendekati artinya...\"",
                "tip": "🎯 Strategi: Masukkan pilihan jawaban ke dalam kalimat aslinya. Pilih kata yang paling pas dan alami sesuai konteks kalimat itu.",
                "ttsText": "The word significant in paragraph two is closest in meaning to important.",
                "ttsLang": "en-US"
              },
              {
                "front": "Inference Question",
                "romanization": "Menarik Kesimpulan Tersirat",
                "pronunciation": "",
                "example": "\"It can be inferred from paragraph 3 that...\" / \"The author implies that...\"",
                "exampleMeaning": "\"Dapat disimpulkan dari paragraf 3 bahwa...\" / \"Penulis mengimplikasikan bahwa...\"",
                "tip": "🎯 Strategi: Kesimpulan tersirat tidak dituliskan secara mentah di teks, melainkan disimpulkan secara logis dari fakta yang ada.",
                "ttsText": "It can be inferred from the passage that the author supports renewable energy.",
                "ttsLang": "en-US"
              },
              {
                "front": "Factual Detail Question",
                "romanization": "Mencari Fakta & Rincian",
                "pronunciation": "",
                "example": "\"According to paragraph 2...\" / \"Which of the following is mentioned as...?\"",
                "exampleMeaning": "\"Menurut paragraf 2...\" / \"Mana dari berikut ini yang disebutkan sebagai...?\"",
                "tip": "🎯 Strategi: Cari kata kunci pada pertanyaan, lalu telusuri langsung paragraf yang memuat fakta tersebut. Jawabannya tertulis jelas di teks.",
                "ttsText": "According to paragraph two, deforestation causes soil erosion.",
                "ttsLang": "en-US"
              },
              {
                "front": "Purpose / Rhetorical Function",
                "romanization": "Tujuan Penulis",
                "pronunciation": "",
                "example": "\"Why does the author mention X in paragraph 3?\"",
                "exampleMeaning": "\"Mengapa penulis menyebutkan X di paragraf 3?\"",
                "tip": "🎯 Strategi: Pikirkan apa alasan penulis menyebutkan contoh atau data tersebut (apakah untuk mendukung argumen, membandingkan, atau memberi ilustrasi).",
                "ttsText": "Why does the author mention the industrial revolution in paragraph three?",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Pertanyaan \"The word X is closest in meaning to...\" adalah tipe soal:",
                "char": null,
                "options": [
                  "Main idea",
                  "Vocabulary in context",
                  "Inference",
                  "Factual detail"
                ],
                "answer": 1
              },
              {
                "q": "Untuk soal INFERENCE, jawabannya:",
                "char": null,
                "options": [
                  "Dinyatakan langsung di teks",
                  "Harus disimpulkan secara logis dari teks",
                  "Ada di kamus",
                  "Selalu di paragraf pertama"
                ],
                "answer": 1
              },
              {
                "q": "\"According to paragraph 2...\" adalah tipe soal:",
                "char": null,
                "options": [
                  "Inference",
                  "Purpose",
                  "Vocabulary",
                  "Factual detail"
                ],
                "answer": 3
              },
              {
                "q": "Strategi TERBAIK untuk soal ide pokok (main idea):",
                "char": null,
                "options": [
                  "Baca seluruh teks kata per kata",
                  "Baca kalimat pertama dan terakhir tiap paragraf",
                  "Pilih jawaban terpanjang",
                  "Pilih jawaban pertama"
                ],
                "answer": 1
              },
              {
                "q": "\"Why does the author mention X?\" adalah soal tipe:",
                "char": null,
                "options": [
                  "Factual detail",
                  "Vocabulary",
                  "Rhetorical function / Purpose",
                  "Main idea"
                ],
                "answer": 2
              }
            ]
          },
          {
            "id": "toefl-d6-l2",
            "title": "Negative Factual (EXCEPT/NOT) & Pronoun Reference Drill",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "❌ TRIK SOAL \"EXCEPT / NOT TRUE\"",
                "romanization": "Mencari 1 yang Salah di Antara 3 Benar",
                "pronunciation": "All of the following are true EXCEPT...",
                "example": "Teks menyebut 3 manfaat hutan: (1) Oksigen, (2) Kayu, (3) Habitat fauna.",
                "exampleMeaning": "Pertanyaan: \"Which is NOT mentioned as a benefit?\" Opsi A, B, C ada di teks. Jawaban yang kamu pilih adalah opsi D yang TIDAK ADA di teks!",
                "tip": "💡 Trik Eliminasi Cepat: Jangan cari jawaban benar! Cari 3 opsi yang ADA di teks dan coret. Sisa 1 opsi adalah jawabannya.",
                "ttsText": "All of the following are mentioned in the passage EXCEPT...",
                "ttsLang": "en-US"
              },
              {
                "front": "🔗 TRIK SOAL \"PRONOUN REFERENCE\"",
                "romanization": "The word \"it / they / them\" in line X refers to...",
                "pronunciation": "Nearest Plural or Singular Noun",
                "example": "\"Marine biologists study coral reefs because they provide shelter for diverse organisms.\"",
                "exampleMeaning": "Kata \"they\" adalah jamak. Kata benda jamak terdekat sebelumnya adalah \"coral reefs\" (bukan biologists).",
                "tip": "💡 Aturan Emas: Pronoun selalu merujuk ke kata benda TERDEKAT di kalimat yang sama atau kalimat persis sebelumnya yang cocok gender & jumlahnya (tunggal vs jamak).",
                "ttsText": "Marine biologists study coral reefs because they provide shelter for diverse organisms.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Teks: \"Honeybees communicate navigation data through an elaborate waggle dance. This ritual conveys both the direction and distance to nectar sources, enabling fellow foragers to locate blossoms efficiently.\"\n\nPertanyaan: The word \"This ritual\" refers to:",
                "options": [
                  "Navigation data",
                  "An elaborate waggle dance",
                  "Nectar sources",
                  "Fellow foragers"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Kata ganti demonstratif \"This ritual\" merujuk ke tindakan tarian komunikasi yang baru saja disebutkan pada kalimat sebelumnya: \"an elaborate waggle dance\"."
              },
              {
                "q": "Dalam soal bertipe \"Which of the following is NOT true according to paragraph 2?\", langkah taktis pertama yang harus dilakukan adalah:",
                "options": [
                  "Membaca seluruh teks dari paragraf 1 sampai akhir kata demi kata.",
                  "Membaca 4 opsi pilihan, mengidentifikasi kata kunci unik tiap opsi, lalu mencocokkan ke paragraf 2.",
                  "Memilih opsi yang paling panjang kalimatnya.",
                  "Menebak secara acak karena teks terlalu panjang."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Efisiensi waktu membaca adalah kunci. Ambil kata kunci unik di opsi A, B, C, D lalu scan langsung ke Paragraf 2 untuk mengeliminasi opsi yang terbukti ada di teks."
              }
            ]
          },
          {
            "id": "toefl-d6-l3",
            "title": "Master Class: 4 Jurus Ninja Reading & Bank Soal Kilat",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "⚡ JURUS MAIN IDEA 15 DETIK",
                "romanization": "Skim Kalimat Topik",
                "pronunciation": "First Sentence Deduction",
                "example": "Baca baris pertama paragraf 1 dan baris pertama paragraf 2.",
                "exampleMeaning": "Paragraf akademik TOEFL selalu bersifat deduktif: ide pokok ditaruh di awal, bukan disembunyikan di akhir.",
                "tip": "💡 Jika opsi jawaban mengandung kata yang terlalu spesifik (hanya ada di satu contoh kalimat), itu 100% jebakan detail, BUKAN main idea!",
                "ttsText": "Read the first sentence of each paragraph to determine the main idea quickly.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 JURUS ANTI-OPSI EKSTREM",
                "romanization": "Eliminasi Kata Mutlak",
                "pronunciation": "Avoid Absolute Statements",
                "example": "Opsi A: \"All species completely vanished.\" vs Opsi B: \"Certain species experienced significant decline.\"",
                "exampleMeaning": "Opsi A memakai kata mutlak \"All\" dan \"completely\"! Opsi B lebih ilmiah dan moderat.",
                "tip": "💡 Waspadai kata mutlak: ALWAYS, NEVER, ALL, COMPLETELY, IMPOSSIBLE. Peneliti sains selalu memakai kata santun: MAY, LIKELY, OFTEN, SUGGESTS.",
                "ttsText": "Avoid absolute choices that contain words like always or completely.",
                "ttsLang": "en-US"
              },
              {
                "front": "🔍 JURUS PRONOUN REFERENCE",
                "romanization": "Mencari Rujukan Kata Ganti",
                "pronunciation": "Check 1-2 Sentences Before",
                "example": "\"The word 'it' in line 12 refers to...\"",
                "exampleMeaning": "Kandidat rujukan SELALU ada di 1 kalimat sebelumnya! Cek apakah kata bendanya tunggal (it) atau jamak (they).",
                "tip": "💡 Masukkan kata benda kandidat ke dalam kalimat yang memuat 'it'. Jika kalimatnya masuk akal secara logika, itulah jawabannya!",
                "ttsText": "Look at the preceding sentence to identify the noun that agrees in number.",
                "ttsLang": "en-US"
              },
              {
                "front": "💡 JURUS CONTEXT CLUES",
                "romanization": "Menebak Kosakata Tanpa Kamus",
                "pronunciation": "Punctuation & Transition Clues",
                "example": "\"The animal was nocturnal—active exclusively during night hours.\"",
                "exampleMeaning": "Tanda strip (—), koma, atau kata \"or\" sering langsung memberikan definisi kata sulit tersebut!",
                "tip": "💡 Jika ada kata kontras: \"Unlike X, Y is ...\", maka arti Y adalah lawan kata dari X!",
                "ttsText": "Use punctuation and transition words to deduce the meaning of unfamiliar words.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Reading Hack: Di antara pilihan berikut, manakah opsi yang PALING MUNGKIN BENAR dalam soal Reading sains TOEFL?",
                "options": [
                  "The climate change entirely eliminated all mammalian life in North America.",
                  "The fossil evidence suggests that climate variations may have influenced mammal distribution.",
                  "Ancient mammals always migrated south regardless of geographical barriers.",
                  "Geologists have conclusively proven that temperature never changed during the Pleistocene."
                ],
                "answer": 1,
                "explanation": "💡 Jurus Anti-Opsi Ekstrem: Opsi B memakai bahasa ilmiah berhati-hati ('suggests', 'may have influenced'). Opsi A, C, dan D memakai kata mutlak yang tidak ilmiah ('entirely eliminated all', 'always', 'never')."
              },
              {
                "q": "Reading Hack: Soal menanyakan: \"The word 'they' in line 8 refers to:\". Apa langkah tercepat untuk menemukan jawabannya?",
                "options": [
                  "Mencari kata benda jamak (plural noun) pada kalimat tepat sebelum baris 8 dan mencocokkannya ke dalam kalimat.",
                  "Membaca paragraf terakhir teks.",
                  "Memilih kata benda pertama yang ada di baris 1 teks.",
                  "Mencari kata benda tunggal yang berawalan huruf vokal."
                ],
                "answer": 0,
                "explanation": "💡 Jurus Pronoun Reference: Kata ganti jamak 'they' WAJIB merujuk pada kata benda jamak (plural noun) di kalimat sebelumnya."
              },
              {
                "q": "Reading Hack: Jika sebuah kata sulit diikuti oleh frasa dalam tanda kurung atau dua tanda koma (misal: 'The lichen, a symbiotic organism composed of fungi and algae, ...'), fungsi frasa tersebut adalah:",
                "options": [
                  "Membantah keberadaan lichen.",
                  "Memberikan definisi atau penjelasan langsung makna kata sulit tersebut (Appositive).",
                  "Menandakan bahwa kalimat tersebut mengandung kesalahan ketik.",
                  "Mengindikasikan opini pengarang yang tidak dapat dipercaya."
                ],
                "answer": 1,
                "explanation": "💡 Jurus Context Clue: Frasa di antara koma atau tanda strip memberikan definisi langsung kata sulit tanpa perlu menebak-nebak."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-u2",
        "title": "🔬 Modul 7: Reading Comprehension Practice (Bank Teks Sains & Sejarah)",
        "titleNative": "Academic Reading Practice Passages",
        "icon": "📖",
        "color": "#06b6d4",
        "month": 2,
        "description": "Latihan mendalam membaca artikel ilmiah seputar perubahan iklim, geologi bumi, dan sejarah peradaban kuno.",
        "lessons": [
          {
            "id": "toefl-u2-l2",
            "title": "Reading Practice — Passage 1",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "Deforestation and Global Ecosystems",
              "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
            },
            "questions": [
              {
                "q": "What is the main idea of the passage? (Apa ide pokok bacaan di atas?)",
                "options": [
                  "Hutan hujan tropis memiliki banyak spesies",
                  "Deforestasi mengancam ekosistem global dan terus terjadi meski berdampak buruk",
                  "Pemerintah harus melarang semua aktivitas penebangan pohon",
                  "Karbon dioksida adalah penyebab utama perubahan iklim"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: Bacaan membahas berbagai dampak kerusakan akibat deforestasi DAN menegaskan bahwa aktivitas ini masih terus meningkat — menjadikan opsi ke-2 sebagai ide pokok (main idea) yang paling lengkap dan akurat."
              },
              {
                "q": "The word \"crucial\" in paragraph 1 is closest in meaning to:",
                "options": [
                  "minor (kecil/sepele)",
                  "essential / critical (sangat penting / krusial)",
                  "difficult (sulit)",
                  "surprising (mengejutkan)"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: \"Crucial\" bermakna sangat penting / vital (extremely important/essential). Pohon memainkan peran penting dalam menyerap gas karbon dioksida di atmosfer."
              },
              {
                "q": "According to the passage, what percentage of Earth's surface do tropical rainforests cover?",
                "options": [
                  "18%",
                  "More than half (Lebih dari separuh)",
                  "6%",
                  "Less than 1% (Kurang dari 1%)"
                ],
                "answer": 2,
                "explanation": "💡 Penjelasan: Paragraf 2 menyatakan secara langsung: \"Tropical rainforests, which cover only 6% of Earth's surface...\" (Hutan hujan tropis hanya menutupi 6% permukaan Bumi)."
              },
              {
                "q": "It can be inferred from the passage that the author believes: (Dapat disimpulkan bahwa penulis meyakini:)",
                "options": [
                  "Deforestasi mustahil untuk dihentikan",
                  "Ekspansi pertanian adalah satu-satunya penyebab deforestasi",
                  "Tindakan dan regulasi yang lebih tegas sangat diperlukan untuk mengatasi deforestasi",
                  "Kehilangan keanekaragaman hayati bukan masalah serius"
                ],
                "answer": 2,
                "explanation": "💡 Penjelasan: Kalimat penutup \"...calling for stricter regulations and sustainable land-use practices\" (mendesak regulasi yang lebih ketat) mengindikasikan bahwa penulis mendukung adanya tindakan nyata yang lebih tegas."
              },
              {
                "q": "Why does the author mention \"18 million acres\" in paragraph 1? (Mengapa penulis menyebutkan angka ini?)",
                "options": [
                  "Untuk membandingkan luas hutan di berbagai negara",
                  "Untuk memberikan bukti data nyata mengenai besarnya skala deforestasi",
                  "Untuk menjelaskan mengapa keanekaragaman hayati itu penting",
                  "Untuk menggambarkan ukuran hutan hujan tropis"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: Angka statistik 18 juta hektar hutan disajikan sebagai bukti konkret (evidence) untuk mendukung pernyataan bahwa deforestasi terjadi dalam skala yang luar biasa besar."
              }
            ]
          },
          {
            "id": "toefl-u2-l3",
            "title": "Reading Practice — Passage 2",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "The Rise of Artificial Intelligence",
              "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
            },
            "questions": [
              {
                "q": "What is the passage primarily about? (Apa topik utama bacaan ini?)",
                "options": [
                  "Cara memprogram kecerdasan buatan",
                  "Keuntungan sekaligus kekhawatiran seputar perkembangan AI",
                  "Mengapa AI lebih unggul daripada kecerdasan manusia",
                  "Sejarah komputer dan teknologi digital"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: Teks menyajikan KEDUA sisi secara objektif: manfaat positif AI (efisiensi, medis) dan kekhawatiran yang dihadapi (hilangnya lapangan kerja, etika keputusan mandiri)."
              },
              {
                "q": "The word \"proponents\" in paragraph 2 is closest in meaning to:",
                "options": [
                  "critics (penentang/pengkritik)",
                  "supporters (para pendukung/pembela)",
                  "researchers (peneliti)",
                  "opponents (lawan)"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: \"Proponents\" artinya para pendukung / advokat ide tersebut (supporters/advocates). Mereka berargumen mengenai dampak positif peningkatan efisiensi."
              },
              {
                "q": "According to the passage, what concern do critics have about AI?",
                "options": [
                  "AI tidak dapat mendeteksi penyakit secara akurat",
                  "Biaya pengembangan sistem AI terlalu mahal",
                  "AI dapat menggantikan tenaga kerja manusia dan memicu masalah etika",
                  "AI hanya bermanfaat di bidang transportasi"
                ],
                "answer": 2,
                "explanation": "💡 Penjelasan: Paragraf 3 secara eksplisit menyebutkan ancaman hilangnya lapangan pekerjaan (job displacement) dan dilema etika sebagai kekhawatiran utama para kritikus."
              },
              {
                "q": "The word \"obsolete\" in paragraph 3 is closest in meaning to:",
                "options": [
                  "lebih berharga",
                  "ketinggalan zaman / tidak lagi terpakai (out of date / no longer useful)",
                  "sangat kompetitif",
                  "tumbuh dengan cepat"
                ],
                "answer": 1,
                "explanation": "💡 Penjelasan: \"Obsolete\" berarti usang, ketinggalan zaman, atau tidak lagi digunakan karena tergantikan oleh teknologi baru."
              },
              {
                "q": "It can be inferred that the author's attitude toward AI is: (Sikap penulis terhadap AI:)",
                "options": [
                  "Sangat negatif — AI harus dilarang sepenuhnya",
                  "Sangat positif — AI selalu bermanfaat tanpa risiko",
                  "Berimbang (balanced) — menyajikan sisi manfaat dan tantangan etika",
                  "Netral tanpa pemahaman materi"
                ],
                "answer": 2,
                "explanation": "💡 Penjelasan: Penulis memaparkan sudut pandang para pendukung (proponents) dan kritikus (critics) dengan porsi adil tanpa memihak secara ekstrem, sehingga sikapnya adalah berimbang (balanced)."
              }
            ]
          },
          {
            "id": "toefl-u2-l4",
            "title": "Reading Practice — Passage 3: Honeybee Waggle Dance",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "Honeybee Communication and the Waggle Dance",
              "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
            },
            "questions": [
              {
                "q": "What is the main topic of the passage?",
                "options": [
                  "The chemical composition of honeybee royal jelly.",
                  "How honeybees transmit precise location data about food sources through symbolic dancing.",
                  "The evolutionary history of wild bee species in Western Europe.",
                  "Methods used by beekeepers to increase commercial honey production."
                ],
                "answer": 1,
                "explanation": "💡 Main Idea: Paragraf pertama dan kedua secara eksplisit menjelaskan bagaimana tarian 'waggle dance' menyandikan koordinat arah dan jarak sumber makanan."
              },
              {
                "q": "According to paragraph 2, how does the dancer indicate the direction of the food source?",
                "options": [
                  "By the intensity of the scent she releases from her sting gland.",
                  "By the angle of her central straight run relative to the vertical line.",
                  "By the total number of semicircular loops performed per minute.",
                  "By flying directly towards the sun inside the hive."
                ],
                "answer": 1,
                "explanation": "💡 Fact Detail: Paragraf 2 menyatakan: 'The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the sun'."
              },
              {
                "q": "The word \"intricate\" in paragraph 1 is closest in meaning to:",
                "options": [
                  "complex",
                  "aggressive",
                  "useless",
                  "frequent"
                ],
                "answer": 0,
                "explanation": "💡 Vocabulary in Context: Kata 'intricate' berarti rumit, penuh detail terkoordinasi (= complex)."
              },
              {
                "q": "Which of the following is NOT mentioned as a way recruit bees receive information during the dance?",
                "options": [
                  "Detecting mechanical vibrations using their sensitive antennae.",
                  "Tasting nectar samples regurgitated by the dancing forager.",
                  "Watching the dance visually through sunlight illuminated windows.",
                  "Feeling the angle and duration of the central straight run in the dark hive."
                ],
                "answer": 2,
                "explanation": "💡 Negative Factual: Paragraf 3 menyatakan sarang lebah bagian dalam berada dalam kondisi gelap gulita ('in the dark interior of the hive'), sehingga lebah tidak memakai penglihatan sinar matahari melainkan antena dan getaran mekanik."
              },
              {
                "q": "What can be inferred about a waggle dance that features a three-second straight run compared to a one-second run?",
                "options": [
                  "The food source is located significantly farther away from the hive.",
                  "The food source has a much lower sugar concentration.",
                  "The dancer is exhausted and needs assistance from other bees.",
                  "The flight must be conducted exclusively during night hours."
                ],
                "answer": 0,
                "explanation": "💡 Inference: Teks menyebutkan 'duration of the waggle phase conveys distance... with each second translating to approximately one kilometer'. Durasi 3 detik berarti jaraknya jauh lebih jauh (~3 km) dibanding 1 detik (~1 km)."
              }
            ]
          },
          {
            "id": "toefl-u2-l5",
            "title": "Reading Practice — Passage 4: The Rosetta Stone",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "The Rosetta Stone and Ancient Hieroglyphs",
              "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
            },
            "questions": [
              {
                "q": "What is the primary focus of the passage?",
                "options": [
                  "Napoleon's strategic military campaigns across North Africa.",
                  "The architectural design of temples during the fourth century CE.",
                  "The discovery of the Rosetta Stone and how it enabled the decipherment of Egyptian hieroglyphs.",
                  "The diplomatic agreements between Macedonian rulers and ancient Greece."
                ],
                "answer": 2,
                "explanation": "💡 Main Idea: Teks mengulas misteri hieroglif yang terkunci berabad-abad, penemuan Batu Rosetta tahun 1799, dan terobosan Champollion dalam menguraikan maknanya."
              },
              {
                "q": "According to paragraph 2, why was the presence of Ancient Greek on the stone so crucial for researchers?",
                "options": [
                  "It proved that Napoleon had visited Egypt before 1799.",
                  "Scholars already knew how to read Ancient Greek, providing a translation reference for the other scripts.",
                  "Greek was the only script on the stone that described mathematical equations.",
                  "It demonstrated that hieroglyphs originated directly from the Greek alphabet."
                ],
                "answer": 1,
                "explanation": "💡 Factual Detail: Teks menyebutkan: 'Because scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key'."
              },
              {
                "q": "The word \"enigma\" in paragraph 1 is closest in meaning to:",
                "options": [
                  "mystery",
                  "tradition",
                  "triumph",
                  "disaster"
                ],
                "answer": 0,
                "explanation": "💡 Vocabulary in Context: 'Impenetrable enigma' berarti 'teka-teki misteri yang tak terpecahkan' (= mystery)."
              },
              {
                "q": "The word \"it\" in paragraph 1 refers to:",
                "options": [
                  "The fourth century CE",
                  "The pictorial script",
                  "The Roman Empire",
                  "Non-Christian temples"
                ],
                "answer": 1,
                "explanation": "💡 Pronoun Referent: Frasa 'how to read and write the pictorial script vanished... The inscriptions... were perceived... rather than a language' merujuk pada tulisan bergambar / aksara hieroglif."
              },
              {
                "q": "What fundamental insight did Jean-François Champollion achieve that broke previous scholarly assumptions?",
                "options": [
                  "Hieroglyphs were solely decorative art without grammatical rules.",
                  "Hieroglyphic signs functioned as phonetic symbols representing spoken sounds rather than purely mystical concepts.",
                  "The inscriptions were written backwards from right to left.",
                  "The decree had been fabricated by medieval scribes."
                ],
                "answer": 1,
                "explanation": "💡 Inference & Key Detail: Paragraf 3 menjelaskan terobosan Champollion: 'hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds'."
              }
            ]
          },
          {
            "id": "toefl-u2-l6",
            "title": "Reading Practice — Passage 5: Geothermal Energy",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "Geothermal Energy and Plate Tectonics",
              "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
            },
            "questions": [
              {
                "q": "What is the primary advantage of geothermal energy over solar and wind power mentioned in paragraph 1?",
                "options": [
                  "It generates substantially lower construction costs than wind farms.",
                  "It provides a continuous and reliable baseload output regardless of atmospheric weather conditions.",
                  "It can be extracted without any drilling machinery.",
                  "It produces high-grade radioactive minerals for commercial sale."
                ],
                "answer": 1,
                "explanation": "💡 Comparison Detail: Paragraf 1 menyatakan: 'Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night'."
              },
              {
                "q": "Where are economical geothermal reservoirs overwhelmingly concentrated?",
                "options": [
                  "In the center of stable continental plains far from mountains.",
                  "Along tectonic plate boundaries and volcanic zones like the Pacific Ring of Fire.",
                  "Underneath ancient limestone caves in desert regions.",
                  "At high atmospheric altitudes near polar ice caps."
                ],
                "answer": 1,
                "explanation": "💡 Fact Detail: Paragraf 2 menyatakan: 'Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire'."
              },
              {
                "q": "The word \"ubiquitously\" in paragraph 2 is closest in meaning to:",
                "options": [
                  "everywhere",
                  "rarely",
                  "dangerously",
                  "temporarily"
                ],
                "answer": 0,
                "explanation": "💡 Vocabulary in Context: 'ubiquitously' berarti 'ada di mana-mana' (= everywhere)."
              },
              {
                "q": "Why is condensed water reinjected into the subterranean reservoir via injection wells?",
                "options": [
                  "To cool down the electrical generators above ground.",
                  "To prevent aquifer depletion and maintain a sustainable closed-loop cycle.",
                  "To extinguish subterranean volcanic eruptions.",
                  "To dissolve valuable gold and silver minerals."
                ],
                "answer": 1,
                "explanation": "💡 Process Detail: Paragraf 3 menjelaskan: 'condensed steam is reinjected back... creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion'."
              },
              {
                "q": "According to the passage, all of the following contribute to geothermal heat EXCEPT:",
                "options": [
                  "Primordial thermal energy from planetary formation",
                  "Radioactive decay of uranium isotopes",
                  "Radioactive decay of potassium isotopes",
                  "Solar ultraviolet radiation absorbed by magma"
                ],
                "answer": 3,
                "explanation": "💡 Negative Factual: Radiasi ultraviolet matahari tidak menembus ke dalam magma bawah tanah; sumber panas bumi murni berasal dari panas primordial pembentukan bumi dan peluruhan radioaktif alami."
              }
            ]
          },
          {
            "id": "toefl-u2-l7",
            "title": "Reading Practice — Passage 6: The James Webb Space Telescope",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "The James Webb Space Telescope and Infrared Astronomy",
              "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
            },
            "questions": [
              {
                "q": "What is the primary topic of the passage?",
                "options": [
                  "The retirement and decommission of the Hubble Space Telescope.",
                  "The technological design of the James Webb Space Telescope and its capabilities in infrared astrophysics.",
                  "Methods for building optical mirrors using gold-plated beryllium alloys.",
                  "The geographical locations of international rocket launch pads."
                ],
                "answer": 1,
                "explanation": "💡 Main Idea: Paragraf 1 dan 2 mengulas lompatan teknologi teleskop James Webb dalam astronomi inframerah, orbitnya di L2, serta signifikansi ilmiahnya."
              },
              {
                "q": "According to paragraph 1, why is infrared capability crucial for observing the earliest galaxies?",
                "options": [
                  "Infrared radiation travels substantially faster through space than visible light.",
                  "Cosmic expansion has stretched the light of ancient galaxies into longer infrared wavelengths (cosmological redshift).",
                  "Stars in early galaxies only emitted thermal radio signals.",
                  "The Earth's ozone layer completely reflects optical starlight."
                ],
                "answer": 1,
                "explanation": "💡 Factual Detail: Teks menyebutkan: 'light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves'."
              },
              {
                "q": "The word \"unprecedented\" in paragraph 1 is closest in meaning to:",
                "options": [
                  "never before seen or matched",
                  "heavily criticized",
                  "extremely expensive",
                  "temporarily delayed"
                ],
                "answer": 0,
                "explanation": "💡 Vocabulary in Context: 'Unprecedented' berarti belum pernah ada sebelumnya / tiada bandingnya (= never before seen)."
              },
              {
                "q": "Why was the James Webb telescope placed at the L2 Lagrange point rather than in low Earth orbit?",
                "options": [
                  "To allow astronauts to easily service the instruments every month.",
                  "To escape thermal radiation and atmospheric interference from the Earth, Sun, and Moon.",
                  "Because space debris in low Earth orbit destroyed previous space telescopes.",
                  "To utilize solar wind currents to propel the telescope between planetary systems."
                ],
                "answer": 1,
                "explanation": "💡 Factual Detail: Paragraf 2 menyatakan bahwa Webb tidak bisa berada di orbit Bumi karena panas Bumi akan menyilaukan sensornya; di L2, perisai matahari melindunginya dari radiasi matahari, Bumi, dan bulan."
              },
              {
                "q": "Which of the following is NOT mentioned as a research capability of the James Webb telescope?",
                "options": [
                  "Peering through interstellar dust clouds to observe star formation.",
                  "Analyzing the chemical composition of exoplanet atmospheres via spectroscopy.",
                  "Transporting astronauts to colonize candidate exoplanets.",
                  "Detecting traces of water vapor, carbon dioxide, and methane on distant worlds."
                ],
                "answer": 2,
                "explanation": "💡 Negative Factual: James Webb adalah teleskop observatorium tak berawak, bukan wahana pengangkut astronaut ('transporting astronauts')."
              }
            ]
          },
          {
            "id": "toefl-u2-l8",
            "title": "Reading Practice — Passage 7: Cognitive Dissonance",
            "type": "reading-quiz",
            "xpReward": 35,
            "passage": {
              "title": "Cognitive Dissonance and Human Behavior",
              "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
            },
            "questions": [
              {
                "q": "What is the primary focus of the passage?",
                "options": [
                  "The biography and academic career of Leon Festinger.",
                  "The psychological mechanism of cognitive dissonance and how people cope with contradictory beliefs and actions.",
                  "A comparative study of marketing strategies used by automobile manufacturers.",
                  "Medical therapies designed to assist patients in quitting smoking."
                ],
                "answer": 1,
                "explanation": "💡 Main Idea: Paragraf 1 mendefinisikan disonansi kognitif, paragraf 2 menguraikan strategi rasionalisasi perilaku, dan paragraf 3 menjelaskan aplikasinya pada pengambilan keputusan."
              },
              {
                "q": "According to paragraph 1, why do individuals feel motivated to resolve cognitive dissonance?",
                "options": [
                  "Societal laws penalize inconsistent opinions.",
                  "Humans possess an innate drive for internal consistency, making dissonance inherently uncomfortable.",
                  "Contradictory thoughts trigger immediate physical pain in the nervous system.",
                  "Peer pressure forces everyone to agree on common principles."
                ],
                "answer": 1,
                "explanation": "💡 Detail Fact: Paragraf 1 menyatakan: 'Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable'."
              },
              {
                "q": "The word \"rationalize\" in paragraph 2 is closest in meaning to:",
                "options": [
                  "justify with plausible excuses",
                  "condemn publicly",
                  "calculate mathematically",
                  "forget completely"
                ],
                "answer": 0,
                "explanation": "💡 Vocabulary in Context: 'Rationalize' berarti membenarkan tindakan dengan alasan atau pembelaan diri (= justify with plausible excuses)."
              },
              {
                "q": "The word \"their\" in paragraph 3 refers to:",
                "options": [
                  "Deficiencies in automobile engines",
                  "Individuals who commit to a decision",
                  "Alternative choices that were rejected",
                  "Medical researchers"
                ],
                "answer": 1,
                "explanation": "💡 Pronoun Referent: Dalam kalimat 'Once individuals commit to an irreversible decision... they often emphasize the superior qualities of their chosen option', kata 'their' merujuk pada 'individuals'."
              },
              {
                "q": "Which of the following can be inferred about a person experiencing buyer's remorse?",
                "options": [
                  "They will immediately return the product to the store without explanation.",
                  "They tend to focus on the attractive features of the purchased item to reassure themselves that they made the right choice.",
                  "They never consult reviews before making major financial commitments.",
                  "They experience total memory loss regarding the price they paid."
                ],
                "answer": 1,
                "explanation": "💡 Inference: Paragraf 3 menjelaskan bahwa pembeli menepis keraguan dengan 'emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative'."
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-u1",
        "title": "📚 Modul 8: Bank Kosakata Akademik (Academic Word List - AWL)",
        "titleNative": "570 Academic Words Sublists 1–10",
        "icon": "🧠",
        "color": "#8b5cf6",
        "month": 2,
        "description": "Kosakata akademik berfrekuensi tinggi dari Averil Coxhead yang paling sering keluar di Reading & Listening TOEFL.",
        "lessons": [
          {
            "id": "toefl-u1-l1",
            "title": "Core Verbs: analyze → derive",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "analyze",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "AN-uh-lyze",
                "example": "Researchers analyze data to find patterns.",
                "exampleMeaning": "Para peneliti menganalisis data untuk menemukan pola.",
                "tip": "💡 Arti: Menganalisis atau memeriksa sesuatu secara cermat untuk memahami pola atau cara kerjanya. Bentuk kata benda: analysis.",
                "ttsText": "Researchers analyze data to find patterns.",
                "ttsLang": "en-US"
              },
              {
                "front": "assess",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "uh-SESS",
                "example": "The study assesses the impact of climate change.",
                "exampleMeaning": "Studi ini mengevaluasi dampak perubahan iklim.",
                "tip": "💡 Arti: Menilai atau mengevaluasi keadaan, dampak, atau mutu suatu hal untuk mengambil keputusan. Bentuk kata benda: assessment.",
                "ttsText": "The study assesses the impact of climate change.",
                "ttsLang": "en-US"
              },
              {
                "front": "assume",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "uh-SYOOM",
                "example": "Scientists assumed that the results were accurate.",
                "exampleMeaning": "Para ilmuwan berasumsi bahwa hasilnya akurat.",
                "tip": "💡 Arti: Mengira, berasumsi, atau menduga sesuatu hal tanpa bukti langsung. Bentuk kata benda: assumption.",
                "ttsText": "Scientists assumed that the results were accurate.",
                "ttsLang": "en-US"
              },
              {
                "front": "establish",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "ih-STAB-lish",
                "example": "Darwin established the theory of evolution.",
                "exampleMeaning": "Darwin menetapkan teori evolusi.",
                "tip": "💡 Arti: Membuktikan, mendirikan, atau menegaskan suatu aturan/fakta secara resmi dan kuat. Bentuk kata benda: establishment.",
                "ttsText": "Darwin established the theory of evolution.",
                "ttsLang": "en-US"
              },
              {
                "front": "evaluate",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "ih-VAL-yoo-ayt",
                "example": "The committee evaluated several approaches.",
                "exampleMeaning": "Komite mengevaluasi beberapa pendekatan.",
                "tip": "💡 Arti: Mengevaluasi atau menilai kualitas, nilai, atau keberhasilan suatu hal. Bentuk kata benda: evaluation.",
                "ttsText": "The committee evaluated several approaches.",
                "ttsLang": "en-US"
              },
              {
                "front": "derive",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "dih-RYVE",
                "example": "The word \"biology\" is derived from Greek.",
                "exampleMeaning": "Kata \"biologi\" berasal dari bahasa Yunani.",
                "tip": "💡 Arti: Berasal dari atau memperoleh sesuatu dari sumber tertentu. Sering dipakai bersama \"derive from\". Bentuk kata benda: derivation.",
                "ttsText": "The word biology is derived from Greek.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "\"The scientist ___ the experiment results carefully.\" (analyze)",
                "char": null,
                "options": [
                  "analyzes",
                  "analyzation",
                  "analytical",
                  "analyzed into"
                ],
                "answer": 0
              },
              {
                "q": "Apa arti dari kata \"assess\"?",
                "char": null,
                "options": [
                  "Menciptakan (to create)",
                  "Menilai / mengevaluasi (to evaluate/judge)",
                  "Menghancurkan (to destroy)",
                  "Menghindari (to avoid)"
                ],
                "answer": 1
              },
              {
                "q": "Bentuk kata benda (noun) dari \"assume\" adalah:",
                "char": null,
                "options": [
                  "assumtion",
                  "assumption",
                  "assumed",
                  "assuming"
                ],
                "answer": 1
              },
              {
                "q": "\"The theory was ___ by Newton in 1687.\" (establish)",
                "char": null,
                "options": [
                  "establishing",
                  "establishment",
                  "established",
                  "establishes"
                ],
                "answer": 2
              },
              {
                "q": "Arti kata \"derive\" yang paling tepat:",
                "char": null,
                "options": [
                  "Menyetir cepat",
                  "Berasal dari / memperoleh (to come from / obtain)",
                  "Mengurangi",
                  "Merusak"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "toefl-u1-l2",
            "title": "Key Nouns: concept → theory",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "concept",
                "romanization": "Kata Benda (Noun)",
                "pronunciation": "KON-sept",
                "example": "The concept of democracy has evolved over centuries.",
                "exampleMeaning": "Konsep demokrasi telah berkembang selama berabad-abad.",
                "tip": "💡 Arti: Konsep atau ide pokok tentang bagaimana sesuatu dipahami dan dijalankan. Bentuk kata sifat: conceptual.",
                "ttsText": "The concept of democracy has evolved over centuries.",
                "ttsLang": "en-US"
              },
              {
                "front": "evidence",
                "romanization": "Kata Benda (Noun)",
                "pronunciation": "EV-ih-dense",
                "example": "There is strong evidence that exercise improves mental health.",
                "exampleMeaning": "Ada bukti kuat bahwa olahraga meningkatkan kesehatan mental.",
                "tip": "💡 Arti: Bukti atau fakta nyata yang mendukung kebenaran suatu klaim atau pernyataan.",
                "ttsText": "There is strong evidence that exercise improves mental health.",
                "ttsLang": "en-US"
              },
              {
                "front": "factor",
                "romanization": "Kata Benda (Noun)",
                "pronunciation": "FAK-ter",
                "example": "Pollution is a major factor in climate change.",
                "exampleMeaning": "Polusi adalah faktor utama dalam perubahan iklim.",
                "tip": "💡 Arti: Faktor atau unsur yang turut mempengaruhi terjadinya suatu peristiwa atau hasil. Bentuk jamak: factors.",
                "ttsText": "Pollution is a major factor in climate change.",
                "ttsLang": "en-US"
              },
              {
                "front": "policy",
                "romanization": "Kata Benda (Noun)",
                "pronunciation": "POL-ih-see",
                "example": "The government implemented a new environmental policy.",
                "exampleMeaning": "Pemerintah menerapkan kebijakan lingkungan baru.",
                "tip": "💡 Arti: Kebijakan atau aturan resmi yang menjadi pedoman dalam organisasi, perusahaan, atau lembaga.",
                "ttsText": "The government implemented a new environmental policy.",
                "ttsLang": "en-US"
              },
              {
                "front": "theory",
                "romanization": "Kata Benda (Noun)",
                "pronunciation": "THEE-uh-ree",
                "example": "Einstein's theory of relativity changed physics.",
                "exampleMeaning": "Teori relativitas Einstein mengubah fisika.",
                "tip": "💡 Arti: Teori atau penjelasan sistematis berdasarkan pengamatan dan prinsip ilmiah untuk menerangkan fenomena.",
                "ttsText": "Einstein's theory of relativity changed physics.",
                "ttsLang": "en-US"
              },
              {
                "front": "significant",
                "romanization": "Kata Sifat (Adjective)",
                "pronunciation": "sig-NIF-ih-kunt",
                "example": "There was a significant increase in temperature.",
                "exampleMeaning": "Ada peningkatan suhu yang signifikan.",
                "tip": "💡 Arti: Signifikan, sangat penting, atau dampaknya nyata terlihat. Bentuk kata keterangan: significantly (secara nyata/bermakna).",
                "ttsText": "There was a significant increase in temperature.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Arti kata \"evidence\" dalam bahasa Inggris:",
                "char": null,
                "options": [
                  "Jenis teori baru",
                  "Bukti / fakta pendukung suatu klaim (proof)",
                  "Faktor pengganggu",
                  "Kebijakan pemerintah"
                ],
                "answer": 1
              },
              {
                "q": "Makna yang tepat untuk kata \"theory\" adalah:",
                "char": null,
                "options": [
                  "Tebakan semata",
                  "Ide tanpa dasar",
                  "Penjelasan sistematis berdasarkan prinsip dan bukti",
                  "Opini pribadi"
                ],
                "answer": 2
              },
              {
                "q": "Kata \"significant\" paling dekat maknanya dengan:",
                "char": null,
                "options": [
                  "Kecil (small)",
                  "Penting / bermakna nyata (important / notable)",
                  "Umum (common)",
                  "Sulit (difficult)"
                ],
                "answer": 1
              },
              {
                "q": "\"Pollution is a major ___ in climate change.\"",
                "char": null,
                "options": [
                  "policy",
                  "concept",
                  "factor",
                  "theory"
                ],
                "answer": 2
              },
              {
                "q": "Bentuk kata sifat (adjective) dari \"significance\" adalah:",
                "char": null,
                "options": [
                  "signify",
                  "significant",
                  "significantly",
                  "signification"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "toefl-u1-l3",
            "title": "Vocab Match: Word ↔ Meaning",
            "type": "match",
            "xpReward": 25,
            "pairs": [
              {
                "left": "analyze",
                "right": "Menganalisis / memeriksa teliti"
              },
              {
                "left": "evidence",
                "right": "Bukti / fakta pendukung"
              },
              {
                "left": "significant",
                "right": "Penting / berdampak nyata"
              },
              {
                "left": "establish",
                "right": "Membuktikan / menetapkan"
              },
              {
                "left": "assess",
                "right": "Menilai / mengevaluasi"
              },
              {
                "left": "derive",
                "right": "Berasal dari / memperoleh"
              }
            ]
          },
          {
            "id": "toefl-u1-l4",
            "title": "Advanced Vocab: function → vary",
            "type": "flashcard-quiz",
            "xpReward": 20,
            "cards": [
              {
                "front": "function",
                "romanization": "Kata Benda / Kerja",
                "pronunciation": "FUNK-shun",
                "example": "The primary function of the brain is to process information.",
                "exampleMeaning": "Fungsi utama otak adalah memproses informasi.",
                "tip": "💡 Sebagai Kata Benda (Noun) = kegunaan, peran, atau tujuan. Sebagai Kata Kerja (Verb) = berfungsi atau berjalan dengan baik.",
                "ttsText": "The primary function of the brain is to process information.",
                "ttsLang": "en-US"
              },
              {
                "front": "indicate",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "IN-dih-kayt",
                "example": "The data indicates a rise in sea levels.",
                "exampleMeaning": "Data menunjukkan kenaikan permukaan laut.",
                "tip": "💡 Arti: Menunjukkan atau menandakan sesuatu (show / point to). Bentuk kata benda: indication (tanda/petunjuk). Contoh: \"The data indicates...\" (Data menunjukkan...).",
                "ttsText": "The data indicates a rise in sea levels.",
                "ttsLang": "en-US"
              },
              {
                "front": "involve",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "in-VOLV",
                "example": "The research involved 500 participants.",
                "exampleMeaning": "Penelitian ini melibatkan 500 peserta.",
                "tip": "💡 Arti: Melibatkan seseorang atau mengikutsertakan suatu hal dalam aktivitas. Bentuk kata sifat: involved (terlibat atau kompleks).",
                "ttsText": "The research involved five hundred participants.",
                "ttsLang": "en-US"
              },
              {
                "front": "vary",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "VAIR-ee",
                "example": "Temperatures vary significantly across different regions.",
                "exampleMeaning": "Suhu bervariasi secara signifikan di berbagai wilayah.",
                "tip": "💡 Arti: Bervariasi, beraneka ragam, atau berubah tergantung kondisi. Kata benda: variation. Kata sifat: various (beraneka macam).",
                "ttsText": "Temperatures vary significantly across different regions.",
                "ttsLang": "en-US"
              },
              {
                "front": "contribute",
                "romanization": "Kata Kerja (Verb)",
                "pronunciation": "kun-TRIB-yoot",
                "example": "Several factors contribute to global warming.",
                "exampleMeaning": "Beberapa faktor berkontribusi pada pemanasan global.",
                "tip": "💡 Arti: Berkontribusi atau turut membantu menyebabkan terjadinya sesuatu (biasanya berpasangan: \"contribute to\"). Bentuk kata benda: contribution.",
                "ttsText": "Several factors contribute to global warming.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "\"The data ___ a strong correlation between the two variables.\"",
                "char": null,
                "options": [
                  "indicates",
                  "indication",
                  "indicative",
                  "indicate to"
                ],
                "answer": 0
              },
              {
                "q": "Makna kata \"vary\" paling dekat dengan:",
                "char": null,
                "options": [
                  "Tetap sama (remain the same)",
                  "Berbeda / berubah-ubah (differ / change)",
                  "Meningkat cepat",
                  "Mengurangi"
                ],
                "answer": 1
              },
              {
                "q": "\"Several factors ___ to climate change.\" (contribute)",
                "char": null,
                "options": [
                  "contributes",
                  "contributing",
                  "contribute",
                  "contribution"
                ],
                "answer": 2
              },
              {
                "q": "Kata yang memiliki makna \"tujuan atau peran (purpose or role)\":",
                "char": null,
                "options": [
                  "factor",
                  "theory",
                  "function",
                  "policy"
                ],
                "answer": 2
              },
              {
                "q": "\"The study ___ over 1,000 participants.\" (involve)",
                "char": null,
                "options": [
                  "involving",
                  "involved",
                  "involves in",
                  "involvement"
                ],
                "answer": 1
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-u4",
        "title": "✍️ Modul 9: Keterampilan Struktur Esai & Kalimat Akademik",
        "titleNative": "Essay Structure & Academic Transitions",
        "icon": "✍️",
        "color": "#10b981",
        "month": 2,
        "description": "Fondasi penulisan esai terstruktur 5 paragraf dan kata transisi akademis tingkat lanjut.",
        "lessons": [
          {
            "id": "toefl-u4-l1",
            "title": "Essay Structure — 5 Paragraphs",
            "type": "flashcard-quiz",
            "xpReward": 25,
            "cards": [
              {
                "front": "Introduction Paragraph",
                "romanization": "3 Bagian Paragraf Pembuka",
                "pronunciation": "",
                "example": "Hook → Background → Thesis Statement\n\nEx: \"In today's rapidly changing world, artificial intelligence has become a transformative force. While some view it as a threat, AI offers significant benefits to modern society. This essay will argue that the advantages of AI outweigh its disadvantages.\"",
                "exampleMeaning": "Kalimat pembuka (Hook) → Latar belakang topik → Pernyataan tesis (Thesis statement)",
                "tip": "🎯 Thesis statement adalah kalimat inti tulisanmu! Berada di akhir paragraf pembuka. Harus jelas, spesifik, dan menyatakan posisi pandanganmu secara tegas.",
                "ttsText": "A strong introduction has three parts: a hook, background information, and a clear thesis statement.",
                "ttsLang": "en-US"
              },
              {
                "front": "Body Paragraph Structure",
                "romanization": "Metode P-I-E (Body Paragraph)",
                "pronunciation": "",
                "example": "Point → Illustration → Explanation\n\nP: \"First, AI significantly improves medical diagnosis.\"\nI: \"For instance, AI algorithms can detect cancer with 95% accuracy.\"\nE: \"This means patients receive faster, more accurate diagnoses.\"",
                "exampleMeaning": "Poin (Topic Sentence) → Ilustrasi / Bukti Contoh → Penjelasan Dampaknya",
                "tip": "🎯 Setiap paragraf isi sebaiknya memuat 3 elemen PIE: Point (klaim/ide utama) + Illustration (bukti data atau contoh konkret) + Explanation (analisis mendalam mengenai maknanya).",
                "ttsText": "Each body paragraph should include a main point, an example or evidence, and an explanation.",
                "ttsLang": "en-US"
              },
              {
                "front": "Conclusion Paragraph",
                "romanization": "Kesimpulan (3 Elemen)",
                "pronunciation": "",
                "example": "\"In conclusion, artificial intelligence presents both opportunities and challenges for society. While job displacement remains a concern, the benefits in healthcare and efficiency are undeniable. Ultimately, responsible AI development and thoughtful regulation will be key to maximizing its positive impact.\"",
                "exampleMeaning": "Ulangi tesis (Paraphrase) → Ringkas argumen utama → Pandangan / rekomendasi akhir",
                "tip": "🎯 Di bagian kesimpulan, jangan menambahkan argumen atau topik baru yang melenceng. Tulis ulang poin inti dengan kalimat berbeda dan berikan penutup yang meyakinkan.",
                "ttsText": "A strong conclusion restates the thesis, summarizes main points, and ends with a final thought.",
                "ttsLang": "en-US"
              },
              {
                "front": "Transition Words",
                "romanization": "Kata Transisi Penghubung Ide",
                "pronunciation": "",
                "example": "Adding (Menambah): Furthermore, Moreover, In addition, Additionally\nContrasting (Kontras): However, Nevertheless, On the other hand, Despite\nConcluding (Menyimpulkan): In conclusion, Therefore, Thus, Consequently",
                "exampleMeaning": "Kata penghubung untuk menambah poin, membandingkan, dan menyimpulkan",
                "tip": "🎯 Gunakan kata penghubung (transition words) agar alur ide antarkalimat dan antarparagraf terasa mengalir halus, runtut, logis, dan nyaman dibaca.",
                "ttsText": "Use transition words like furthermore, however, and in conclusion to connect your ideas.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Bagian tulisan yang berisi \"thesis statement\" adalah:",
                "char": null,
                "options": [
                  "Body paragraph",
                  "Introduction",
                  "Conclusion",
                  "Transition"
                ],
                "answer": 1
              },
              {
                "q": "PIE method untuk body paragraph = Point, Illustration, dan:",
                "char": null,
                "options": [
                  "Introduction",
                  "Explanation",
                  "Evidence only",
                  "Example only"
                ],
                "answer": 1
              },
              {
                "q": "Mana transition word untuk KONTRAS/pertentangan?",
                "char": null,
                "options": [
                  "Furthermore",
                  "In addition",
                  "However",
                  "Consequently"
                ],
                "answer": 2
              },
              {
                "q": "Kesalahan yang HARUS dihindari di conclusion:",
                "char": null,
                "options": [
                  "Meringkas argumen",
                  "Mengulangi thesis",
                  "Memasukkan ide baru",
                  "Menggunakan transition"
                ],
                "answer": 2
              },
              {
                "q": "Urutan esai atau artikel 5 paragraf yang BENAR:",
                "char": null,
                "options": [
                  "Body → Intro → Conclusion",
                  "Intro → Body (x3) → Conclusion",
                  "Intro → Conclusion → Body",
                  "Body → Conclusion → Intro"
                ],
                "answer": 1
              }
            ]
          },
          {
            "id": "toefl-u4-l2",
            "title": "Transition Words Match",
            "type": "match",
            "xpReward": 25,
            "pairs": [
              {
                "left": "Menambah informasi",
                "right": "Furthermore / Moreover"
              },
              {
                "left": "Kontras / pertentangan",
                "right": "However / Nevertheless"
              },
              {
                "left": "Memberikan contoh",
                "right": "For instance / For example"
              },
              {
                "left": "Menyimpulkan",
                "right": "In conclusion / Therefore"
              },
              {
                "left": "Menyebabkan",
                "right": "Consequently / As a result"
              },
              {
                "left": "Memperjelas",
                "right": "In other words / That is"
              }
            ]
          },
          {
            "id": "toefl-u4-l3",
            "title": "Writing Task Fill in the Blank",
            "type": "fill-blank",
            "xpReward": 30,
            "questions": [
              {
                "context": "Menulis pengantar tulisan opini — pilih frasa terbaik untuk mengawali pandangan:",
                "sentence": "While some argue that technology isolates people, _________ technology, when used responsibly, strengthens human connections.",
                "hint": "Menyatakan sudut pandang atau opini pribadi (\"Saya berpendapat bahwa\")",
                "answer": "I believe that",
                "options": [
                  "I believe that",
                  "it is said that",
                  "nobody knows if",
                  "it might be possible"
                ],
                "ttsText": "While some argue that technology isolates people, I believe that technology, when used responsibly, strengthens human connections.",
                "ttsLang": "en-US"
              },
              {
                "context": "Menghubungkan dua kalimat pada paragraf isi — pilih kata transisi pertentangan:",
                "sentence": "AI has revolutionized medical diagnosis. _________, it has also created ethical concerns about data privacy.",
                "hint": "Menambahkan argumen yang berlawanan / kontras (\"Namun / Akan tetapi\")",
                "answer": "However",
                "options": [
                  "Furthermore",
                  "However",
                  "Therefore",
                  "For instance"
                ],
                "ttsText": "AI has revolutionized medical diagnosis. However, it has also created ethical concerns about data privacy.",
                "ttsLang": "en-US"
              },
              {
                "context": "Menulis kalimat penutup tulisan — pilih frasa pembuka yang paling tepat:",
                "sentence": "_________, the evidence clearly shows that renewable energy is essential for a sustainable future.",
                "hint": "Memulai kalimat kesimpulan (\"Sebagai kesimpulan\")",
                "answer": "In conclusion",
                "options": [
                  "For example",
                  "However",
                  "In conclusion",
                  "Furthermore"
                ],
                "ttsText": "In conclusion, the evidence clearly shows that renewable energy is essential for a sustainable future.",
                "ttsLang": "en-US"
              }
            ]
          }
        ],
        "track": "full"
      },
      {
        "id": "toefl-day7",
        "title": "🎓 Modul 10: Simulasi Ujian Lengkap & Prediksi Skor Resmi (310–677)",
        "titleNative": "Pacing Strategy, 10-Question High-Yield Drill & Diagnostic Scaled Score",
        "icon": "🏆",
        "color": "#f59e0b",
        "month": 1,
        "description": "Modul Simulasi Ujian Lengkap: Gladi bersih hari H! Alokasi waktu 37 detik per soal, trik eliminasi cerdas tanpa minus nilai, drill kilat 10 soal standar ETS, dan cek prediksi skormu.",
        "lessons": [
          {
            "id": "toefl-d7-l1",
            "title": "Manajemen Waktu 37 Detik & Trik Eliminasi Jawaban Cepat",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "⏱️ ALOKASI WAKTU RESMI ETS",
                "romanization": "Batas Menit per Butir Soal",
                "pronunciation": "Section 1: 35m | Section 2: 25m | Section 3: 55m",
                "example": "Section 2: 40 soal dalam 25 menit = 37.5 detik per soal!",
                "exampleMeaning": "Jika kamu terjebak di 1 soal grammar lebih dari 45 detik, kamu kehilangan peluang menjawab 2 soal mudah berikutnya!",
                "tip": "💡 Aturan 40 Detik: Jika belum yakin setelah 40 detik, eliminasi 2 opsi terburuk, tebak 1 opsi terbaik, lalu langsung NEXT!",
                "ttsText": "Time management is the single most decisive factor in achieving high TOEFL scores.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 TANPA NILAI MINUS (NO PENALTY)",
                "romanization": "Jangan Pernah Kosongkan Lembar Jawaban",
                "pronunciation": "Always fill every single bubble",
                "example": "Di TOEFL ITP, salah menjawab bernilai 0 (TIDAK ADA MINUS!).",
                "exampleMeaning": "Jika waktu sisa 1 menit dan masih ada 5 soal tersisa, langsung isi semua dengan 1 huruf konsisten (misal: B semua). Peluang tebakan benar adalah 25%!",
                "tip": "💡 Pastikan 140 soal semuanya terisi penuh. 1 soal tebakan yang benar bisa menaikkan skor skalasi hingga 5–8 poin!",
                "ttsText": "Never leave any question unanswered on the TOEFL exam.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Strategi Manajemen Waktu TOEFL ITP: Berapa detik waktu ideal maksimal yang boleh kamu habiskan untuk 1 soal Structure (nomor 1–15)?",
                "options": [
                  "Maksimal 30–35 detik per soal (agar sisa waktu cukup untuk Error Identification).",
                  "2 menit per soal.",
                  "5 menit per soal sampai benar-benar yakin.",
                  "Bebas tanpa batas waktu."
                ],
                "answer": 0,
                "explanation": "💡 Aturan Kecepatan 35 Detik: Bagian Structure memiliki 40 soal dalam 25 menit. Rata-rata kamu hanya punya waktu 37 detik per soal! Jangan pernah terjebak lebih dari 45 detik di satu soal."
              },
              {
                "q": "Golden Rule TOEFL ETS: Jika waktu ujian tinggal 1 menit dan kamu masih memiliki 5 soal kosong yang belum sempat dibaca, apa yang HARUS kamu lakukan?",
                "options": [
                  "Tembak/isi SEMUA nomor dengan satu huruf konsisten (misal: semua B atau semua C), JANGAN PERNAH kosongkan lembar jawaban!",
                  "Biarkan lembar jawaban kosong karena takut kena nilai minus.",
                  "Mengisi secara pola zigzag A-B-C-D.",
                  "Menangis dan pasrah."
                ],
                "answer": 0,
                "explanation": "💡 NO PENALTY RULE: TOEFL ITP TIDAK ADA SISTEM MINUS! Jawaban salah bernilai 0, bukan -1. Mengosongkan jawaban adalah kesalahan paling fatal!"
              },
              {
                "q": "Trik Eliminasi Soal Sulit: Jika kamu ragu antara 4 pilihan, langkah pertama yang meningkatkan peluang benar hingga 50% adalah:",
                "options": [
                  "Eliminasi 2 opsi yang jelas-jelas melanggar rumus dasar (misal double subject atau salah bentuk verb).",
                  "Pilih opsi yang paling panjang tanpa dibaca.",
                  "Pilih opsi yang memiliki kata paling akrab.",
                  "Tutup mata dan gunakan intuisi."
                ],
                "answer": 0,
                "explanation": "💡 50-50 Elimination: Buang 2 opsi sampah yang jelas melanggar kaidah S+V atau ada jebakan bunyi. Memilih di antara 2 opsi sisa meningkatkan peluang benar dari 25% menjadi 50%!"
              },
              {
                "q": "Di bagian Listening Part A, jika kamu tidak mendengar kalimat pembicara pertama sama sekali karena terdistraksi, apa yang harus kamu lakukan?",
                "options": [
                  "Tenang, fokus dengarkan kalimat PEMBICARA KEDUA karena 80% kunci jawaban ada di orang kedua!",
                  "Menyerah dan tidak mendengarkan pembicara kedua.",
                  "Meminta pengawas memutar ulang kaset rekaman.",
                  "Menebak jawaban pembicara pertama."
                ],
                "answer": 0,
                "explanation": "💡 Second Speaker Savior: Jangan panik jika ketinggalan orang pertama! Jawaban pertanyaan hampir selalu merupakan parafrasa dari apa yang diucapkan ORANG KEDUA."
              },
              {
                "q": "Dalam sesi Reading Comprehension (50 soal dalam 55 menit), urutan pengerjaan yang paling efektif adalah:",
                "options": [
                  "Baca soal terlebih dahulu untuk menemukan kata kunci / nomor baris, baru lakukan scanning ke dalam teks.",
                  "Baca seluruh bacaan dari awal sampai selesai dengan sangat teliti, baru lihat soal.",
                  "Kerjakan soal nomor 50 terlebih dahulu mundur ke nomor 1.",
                  "Lewati semua teks bergambar."
                ],
                "answer": 0,
                "explanation": "💡 Question-First Reading: Baca pertanyaannya dulu! Soal kosakata dan rujukan baris bisa dijawab dalam 15 detik tanpa harus membaca seluruh teks."
              }
            ]
          },
          {
            "id": "toefl-d7-l2",
            "title": "Drill 10 Soal Pilihan Standar ETS (High-Yield Practice)",
            "type": "flashcard-quiz",
            "xpReward": 40,
            "cards": [
              {
                "front": "🏆 DRILL UJIAN INTENSIF",
                "romanization": "Kompilasi 3 Section Standar ETS",
                "pronunciation": "Listening, Structure, and Reading Review",
                "example": "Uji penguasaan seluruh konsep penting dalam 1 set soal kurasi penentu skor 500+.",
                "exampleMeaning": "Terapkan seluruh cheat codes: Trik Orang Kedua, Rumus S+V, Deteksi 5 Dosa, dan Inversi.",
                "tip": "💡 Kerjakan dengan tenang dan catat waktu pengerjaanmu.",
                "ttsText": "Apply all the strategies you have learned across the seven days.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Structure: \"_________ received his degree from Harvard University, the renowned botanist began his field research.\"",
                "options": [
                  "Having",
                  "He had",
                  "Although had",
                  "There was"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Klausa partisipel sempurna (Perfect Participle): \"Having received his degree...\" (= After he had received his degree). Subjek kalimat utama adalah \"the renowned botanist\"."
              },
              {
                "q": "Written Expression: \"The committee has (A) decided to postpone (B) their annual meeting (C) because of (D) severe weather warnings.\"",
                "options": [
                  "(A) decided",
                  "(B) their",
                  "(C) because of",
                  "(D) severe"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: \"The committee\" adalah kata benda kolektif tunggal yang memakai kata kerja \"has decided\" (tunggal). Kata ganti kepemilikannya harus tunggal yaitu \"its\", bukan jamak \"their\"!"
              },
              {
                "q": "Structure: \"Hardly _________ the laboratory when the fire alarm began sounding.\"",
                "options": [
                  "the scientist entered",
                  "had the scientist entered",
                  "entered the scientist",
                  "the scientist had entered"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Pola inversi waktu: [Hardly] + [had] + [Subject] + [V3] + [when...]. Jawaban benar B."
              },
              {
                "q": "Written Expression: \"Elephants use (A) their trunks (B) not only for smelling and breathing (C) but also to drink (D) water.\"",
                "options": [
                  "(A) their",
                  "(B) not only",
                  "(C) but also to drink",
                  "(D) water"
                ],
                "answer": 2,
                "explanation": "💡 Analisis TOEFL: Dosa Struktur Paralel! Setelah \"not only\" ada bentuk gerund \"for smelling and breathing\". Maka setelah \"but also\" harus paralel berbentuk \"for drinking\", bukan infinitive \"to drink\"!"
              },
              {
                "q": "Structure: \"_________ by thick ice caps, Antarctica contains ninety percent of the world’s fresh water.\"",
                "options": [
                  "Covered",
                  "Covering",
                  "It is covered",
                  "When covered is"
                ],
                "answer": 0,
                "explanation": "💡 Analisis TOEFL: Antartika tertutup oleh lapisan es tebal (makna pasif). Partisipel pasif tereduksi: \"Covered by thick ice caps...\"."
              }
            ]
          },
          {
            "id": "toefl-d7-l3",
            "title": "Panduan Membaca Prediksi Skor 310–677 & Evaluasi Kelemahan",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "📊 TABEL KONVERSI SKOR RESMI",
                "romanization": "Dari Jumlah Benar ke Skor Skala 310–677",
                "pronunciation": "Raw Score to Scaled Score",
                "example": "Formula ETS: Skor Akhir = [(Skor Section 1 + Section 2 + Section 3) × 10] ÷ 3",
                "exampleMeaning": "Setiap section memiliki skala nilai terkonversi antara 31 sampai 68.",
                "tip": "💡 Target Skor Umum: Lolos S1/S2 Dalam Negeri = 450–500. Beasiswa LPDP / AAS = 500–550+. Beasiswa Luar Negeri Bergengsi = 550–600+.",
                "ttsText": "Your converted TOEFL score reflects your proficiency benchmark across all sections.",
                "ttsLang": "en-US"
              },
              {
                "front": "🎯 LANGKAH LANJUTAN HARI INI",
                "romanization": "Ambil Simulasi Penuh 30 Soal",
                "pronunciation": "Start the Official Simulation Test",
                "example": "Klik tombol \"Mulai Simulasi Resmi\" di bagian bawah layar TOEFL.",
                "exampleMeaning": "Kerjakan ujian berwaktu 25 menit untuk mendapatkan lembar laporan skor instan lengkap dengan CEFR Level (B1/B2/C1).",
                "tip": "💡 Ulangi simulasi bila skormu masih di bawah 480 untuk mengasah kecepatan reflek menjawab.",
                "ttsText": "Take the full diagnostic simulation test to evaluate your final score.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Jika kamu menargetkan beasiswa magister (S2) dalam negeri atau syarat kelulusan sidang skripsi, berapakah rata-rata skor minimum TOEFL ITP yang umum dipersyaratkan?",
                "options": [
                  "310 – 350",
                  "450 – 500",
                  "650 – 677",
                  "800 – 900"
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Skor 450–500 (setara CEFR B1/B2) adalah syarat baku mayoritas universitas negeri dan kementerian di Indonesia."
              },
              {
                "q": "Bagaimana cara terbaik mengevaluasi hasil tes simulasi agar skormu naik pesat pada tes ulang?",
                "options": [
                  "Hanya melihat skor total lalu melupakannya.",
                  "Melihat bagian (section) yang skornya paling rendah, lalu membuka kembali trik materi hari terkait untuk latihan ulang.",
                  "Menghafal kunci jawaban tanpa memahami konsep kenapa opsi itu benar.",
                  "Membeli buku baru yang tebal tanpa pernah dibaca."
                ],
                "answer": 1,
                "explanation": "💡 Analisis TOEFL: Pendekatan diagnostik berbasis kelemahan adalah cara tercepat: jika nilai Section 2 paling rendah, drill ulang Day 3 & Day 4!"
              }
            ]
          }
        ],
        "track": "full"
      }
    ]
  },
  "dialogues": [
    {
      "id": "kr-diag-cafe",
      "lang": "korean",
      "badge": "🇰🇷 Seoul Cafe",
      "title": "Pesan Kopi di Hongdae",
      "titleNative": "홍대 카페에서 주문하기",
      "icon": "☕",
      "level": "Pemula",
      "partner": {
        "name": "민준 (Min-jun)",
        "role": "Barista Kafe Hongdae",
        "avatar": "☕"
      },
      "scenarioDesc": "Kamu sedang mampir ke sebuah kafe estetik di kawasan Hongdae, Seoul. Pelajari cara memesan kopi dingin favorit orang Korea (아이스 아메리카노), memilih tempat duduk, dan menanyakan WiFi.",
      "xpReward": 35,
      "turns": [
        {
          "speaker": "partner",
          "text": "어서오세요! 주문하시겠어요?",
          "romanization": "Eoseo-oseyo! Jumunhasigesseoyo?",
          "meaning": "Selamat datang! Mau pesan apa?",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 \"어서오세요\" adalah sapaan ramah wajib di setiap toko/kafe Korea. Akhiran \"-시겠어요?\" adalah bentuk pertanyaan yang sangat sopan kepada pelanggan."
        },
        {
          "speaker": "user",
          "prompt": "Pilih cara memesan 1 es americano dengan sopan dan alami:",
          "options": [
            {
              "text": "아이스 아메리카노 한 잔 주세요.",
              "romanization": "Aiseu amerikano han jan juseyo.",
              "meaning": "Tolong es americano satu gelas.",
              "isCorrect": true,
              "feedback": "✅ Tepat sekali! Menggunakan satuan \"한 잔\" (satu gelas) dan akhiran sopan \"주세요\" (tolong berikan)."
            },
            {
              "text": "커피 내놔.",
              "romanization": "Keopi naenwa.",
              "meaning": "Beri aku kopi.",
              "isCorrect": false,
              "feedback": "❌ Terlalu kasar! Ini bentuk tidak sopan (Banmal). Kepada barista selalu gunakan \"-주세요\"."
            },
            {
              "text": "물 있어?",
              "romanization": "Mul isseo?",
              "meaning": "Ada air?",
              "isCorrect": false,
              "feedback": "❌ Kurang tepat dan tidak memesan minuman kopi yang diinginkan."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "네, 아이스 아메리카노 한 잔이요. 드시고 가세요, 아니면 포장이세요?",
          "romanization": "Ne, aiseu amerikano han jan-iyo. Deusigo gaseyo, animyeon pojang-iseyo?",
          "meaning": "Baik, es americano satu gelas. Mau minum di sini atau dibungkus (takeaway)?",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 \"드시고 가세요\" = makan/minum di tempat. \"포장\" = bungkus/takeaway. Di kafe Korea selalu ditanyakan karena ada aturan pajak & cangkir sekali pakai."
        },
        {
          "speaker": "user",
          "prompt": "Pilih respon: \"Bungkus tolong. Dan apa kata sandi WiFi-nya?\":",
          "options": [
            {
              "text": "포장해 주세요. 와이파이 비밀번호가 뭐예요?",
              "romanization": "Pojanghae juseyo. Waipai bimilbeonhoga mwoyeyo?",
              "meaning": "Tolong dibungkus. Apa kata sandi WiFi-nya?",
              "isCorrect": true,
              "feedback": "✅ Sempurna! \"포장해 주세요\" (tolong dibungkus) dan \"비밀번호\" (kata sandi/password) adalah kosakata penting harian."
            },
            {
              "text": "여기서 마실래. 인터넷 안 돼.",
              "romanization": "Yeogiseo masillae. Inteonet an dwae.",
              "meaning": "Mau minum di sini. Internetnya ga bisa.",
              "isCorrect": false,
              "feedback": "❌ Nada bicaranya santai/kurang sopan dan tidak sesuai instruksi takeaway."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "영수증 하단에 와이파이 비밀번호가 적혀 있습니다. 주문하신 음료 금방 준비해 드릴게요!",
          "romanization": "Yeongsujeung hadan-e waipai bimilbeonhoga jeokhyeo isseumnida. Jumunhasin eumryo geumbang junbihae deurilgeyo!",
          "meaning": "Kata sandi WiFi tertulis di bagian bawah struk. Minuman Anda akan segera kami siapkan!",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 Tips Nyata: Di Korea, password WiFi dan kode pintu toilet kafe hampir selalu tercetak di bagian paling bawah struk pembayaran (영수증 하단)."
        }
      ]
    },
    {
      "id": "kr-diag-mart",
      "lang": "korean",
      "badge": "🇰🇷 Convenience Store",
      "title": "Belanja di Minimarket (편의점)",
      "titleNative": "편의점에서 T-Money 충전하기",
      "icon": "🏪",
      "level": "Pemula",
      "partner": {
        "name": "수진 (Su-jin)",
        "role": "Kasir GS25 Gangnam",
        "avatar": "🏪"
      },
      "scenarioDesc": "Kamu sedang berada di minimarket Korea (CU / GS25) untuk membeli kantong belanja dan mengisi saldo kartu transportasi T-Money untuk naik subway.",
      "xpReward": 35,
      "turns": [
        {
          "speaker": "partner",
          "text": "어서오세요~ 봉투 필요하세요?",
          "romanization": "Eoseo-oseyo~ Bongtu piryohaseyo?",
          "meaning": "Selamat datang~ Apakah Anda butuh kantong plastik belanja?",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 Di Korea, kantong plastik tidak gratis karena aturan lingkungan. Kasir minimarket akan selalu menanyakan \"봉투 필요하세요?\" (butuh kantong?)."
        },
        {
          "speaker": "user",
          "prompt": "Katakan: \"Ya, tolong satu kantong. Dan bisakah isi saldo T-Money di sini?\":",
          "options": [
            {
              "text": "네, 봉투 하나 주세요. 그리고 티머니 충전도 되나요?",
              "romanization": "Ne, bongtu hana juseyo. Geurigo timoni chungjeondo doenayo?",
              "meaning": "Ya, tolong satu kantong. Dan bisakah isi ulang T-Money?",
              "isCorrect": true,
              "feedback": "✅ Tepat sekali! \"충전\" (isi saldo/charge) dan \"되나요?\" (apakah bisa?) adalah frasa yang sangat natural."
            },
            {
              "text": "봉투 싫어. 버스 탈 거야.",
              "romanization": "Bongtu sileo. Beoseu tal geoya.",
              "meaning": "Tidak mau kantong. Mau naik bus.",
              "isCorrect": false,
              "feedback": "❌ Terlalu mendadak dan tidak menggunakan tata bahasa sopan."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "네, 가능합니다! 얼마 충전해 드릴까요? 카드를 단말기 위에 올려주세요.",
          "romanization": "Ne, ganeunghamnida! Eolma chungjeonhae deurilkkayo? Kadeureul danmalgi wie ollyeojuseyo.",
          "meaning": "Ya, bisa! Mau diisi berapa? Tolong letakkan kartu di atas mesin pembaca.",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 Kasir biasanya meminta kita menempelkan kartu T-Money di atas sensor kecil di meja kasir."
        },
        {
          "speaker": "user",
          "prompt": "Pilih jawaban: \"Tolong isi 10.000 won. Ini uang tunainya\":",
          "options": [
            {
              "text": "만 원 충전해 주세요. 여기 현금 있어요.",
              "romanization": "Man won chungjeonhae juseyo. Yeogi hyeongeum isseoyo.",
              "meaning": "Tolong isi 10.000 won. Ini uang tunainya.",
              "isCorrect": true,
              "feedback": "✅ Sangat bagus! \"만 원\" = 10.000 won (sekitar Rp 115.000). Untuk isi T-Money di minimarket biasanya harus pakai uang tunai (현금)."
            },
            {
              "text": "돈 없어, 그냥 줘.",
              "romanization": "Don eopseo, geunyang jwo.",
              "meaning": "Gak ada uang, beri gratis aja.",
              "isCorrect": false,
              "feedback": "❌ Bercanda yang kurang tepat di situasi transaksi resmi!"
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "네, 만 원 충전 완료되었습니다. 영수증 챙겨드릴까요? 안녕히 가세요~!",
          "romanization": "Ne, man won chungjeon wanryo-doe-eotseumnida. Yeongsujeung chaenggyeodeurilkkayo? Annyeonghi gaseyo~!",
          "meaning": "Baik, isi saldo 10.000 won selesai. Mau dibawakan struknya? Selamat jalan~!",
          "ttsLang": "ko-KR",
          "culturalNote": "💡 \"안녕히 가세요\" digunakan oleh orang yang tinggal di tempat kepada orang yang pergi meninggalkan toko."
        }
      ]
    },
    {
      "id": "en-diag-coffee",
      "lang": "english",
      "badge": "🇬🇧 London Cafe",
      "title": "Ordering at a London Coffee Shop",
      "titleNative": "Memesan Kopi di London",
      "icon": "🥐",
      "level": "Pemula",
      "partner": {
        "name": "Oliver",
        "role": "Barista in Covent Garden",
        "avatar": "☕"
      },
      "scenarioDesc": "Kamu sedang menikmati pagi di kafe lokal di London. Latih percakapan santai namun sopan untuk memesan kopi susu oat dan kue pastry.",
      "xpReward": 35,
      "turns": [
        {
          "speaker": "partner",
          "text": "Good morning! How are you doing today? What can I get started for you?",
          "romanization": "",
          "meaning": "Selamat pagi! Bagaimana kabarmu hari ini? Mau pesan apa?",
          "ttsLang": "en-US",
          "culturalNote": "💡 Di negara berbahasa Inggris, barista hampir selalu menyapa dengan ramah (\"How are you doing?\") sebelum menanyakan pesanan."
        },
        {
          "speaker": "user",
          "prompt": "Pesan satu oat latte sedang dan satu croissant dengan sopan:",
          "options": [
            {
              "text": "Could I get a medium oat latte and a warm croissant, please?",
              "romanization": "",
              "meaning": "Bisakah saya pesan oat latte ukuran sedang dan croissant hangat?",
              "isCorrect": true,
              "feedback": "✅ Sangat sopan dan natural! Menggunakan \"Could I get...\" dan diakhiri dengan \"please\"."
            },
            {
              "text": "Give me coffee and bread now.",
              "romanization": "",
              "meaning": "Beri aku kopi dan roti sekarang.",
              "isCorrect": false,
              "feedback": "❌ Terlalu kaku dan terkesan memerintah. Selalu gunakan \"Could I have...\" atau \"I would like...\"."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "Lovely choice! Would you like that to drink in or takeaway?",
          "romanization": "",
          "meaning": "Pilihan yang bagus! Mau diminum di sini atau dibawa pulang?",
          "ttsLang": "en-US",
          "culturalNote": "💡 Di Inggris, frasa yang umum dipakai adalah \"drink in or takeaway\", sedangkan di Amerika sering memakai \"for here or to go\"."
        },
        {
          "speaker": "user",
          "prompt": "Pilih respon: \"Minum di sini, tolong. Bisakah bayar pakai kartu nirkontak?\":",
          "options": [
            {
              "text": "To drink in, please. Can I pay by contactless card?",
              "romanization": "",
              "meaning": "Minum di sini, tolong. Bisakah saya bayar pakai kartu nirkontak?",
              "isCorrect": true,
              "feedback": "✅ Sempurna! \"Contactless\" adalah metode pembayaran paling umum di kafe-kafe perkotaan modern."
            },
            {
              "text": "I drink here. No money only phone.",
              "romanization": "",
              "meaning": "Aku minum di sini. Gak ada uang cuma hp.",
              "isCorrect": false,
              "feedback": "❌ Tata bahasanya kurang tepat."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "Of course! That comes to £6.20. You can tap right here on the terminal. Have a seat and we will call your name!",
          "romanization": "",
          "meaning": "Tentu saja! Totalnya £6.20. Silakan tempelkan kartu di mesin ini. Silakan duduk dan kami akan panggil namamu!",
          "ttsLang": "en-US",
          "culturalNote": "💡 \"Tap right here\" artinya menempelkan kartu atau HP (Apple/Google Pay) pada mesin pembaca kartu."
        }
      ]
    },
    {
      "id": "en-diag-directions",
      "lang": "english",
      "badge": "🇺🇸 New York City",
      "title": "Asking for Directions in New York",
      "titleNative": "Menanyakan Arah Jalan",
      "icon": "🗺️",
      "level": "Menengah",
      "partner": {
        "name": "Sarah",
        "role": "Local Resident in Manhattan",
        "avatar": "🗽"
      },
      "scenarioDesc": "Kamu sedang berjalan-jalan di Manhattan dan ingin menemukan stasiun subway terdekat. Pelajari cara membuka percakapan dengan sopan kepada orang yang lewat.",
      "xpReward": 35,
      "turns": [
        {
          "speaker": "partner",
          "text": "Hi there! You look a bit lost, need some help with directions?",
          "romanization": "",
          "meaning": "Halo! Anda terlihat sedikit bingung, butuh bantuan petunjuk arah?",
          "ttsLang": "en-US",
          "culturalNote": "💡 Sapaan santai warga lokal yang ramah saat melihat turis memegang peta atau melihat tanda jalan."
        },
        {
          "speaker": "user",
          "prompt": "Tanyakan dengan sopan di mana letak stasiun subway terdekat:",
          "options": [
            {
              "text": "Excuse me! Yes, could you tell me where the nearest subway station is?",
              "romanization": "",
              "meaning": "Permisi! Ya, bisakah Anda memberi tahu di mana stasiun subway terdekat?",
              "isCorrect": true,
              "feedback": "✅ Sangat tepat! Selalu awali dengan \"Excuse me\" saat bertanya arah kepada orang yang baru dijumpai."
            },
            {
              "text": "Where is train? Tell me fast.",
              "romanization": "",
              "meaning": "Di mana kereta? Kasih tahu cepat.",
              "isCorrect": false,
              "feedback": "❌ Terkesan mendesak dan tidak ramah."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "Sure thing! Just walk two blocks straight down this avenue, take a right at the pharmacy, and you will see the green entrance right there.",
          "romanization": "",
          "meaning": "Tentu! Cukup jalan lurus dua blok di jalan ini, belok kanan di apotek, dan kamu akan melihat pintu masuk hijau stasiun di sana.",
          "ttsLang": "en-US",
          "culturalNote": "💡 \"Block\" adalah satuan petak jalan khas tata kota Amerika. Stasiun subway di New York ditandai dengan lampu bola bulat warna hijau di pintu masuknya."
        },
        {
          "speaker": "user",
          "prompt": "Ulangi arah secara singkat untuk memastikan, lalu ucapkan terima kasih:",
          "options": [
            {
              "text": "Two blocks straight, then right at the pharmacy. Got it, thank you so much for your help!",
              "romanization": "",
              "meaning": "Dua blok lurus, lalu kanan di apotek. Paham, terima kasih banyak atas bantuannya!",
              "isCorrect": true,
              "feedback": "✅ Teknik komunikasi yang sangat bagus! Mengulang petunjuk (\"Got it\") memastikan tidak salah arah."
            },
            {
              "text": "Okay whatever, bye.",
              "romanization": "",
              "meaning": "Oke terserah, dah.",
              "isCorrect": false,
              "feedback": "❌ Kurang sopan kepada orang yang telah meluangkan waktu membantu."
            }
          ]
        },
        {
          "speaker": "partner",
          "text": "No problem at all! Enjoy your time in New York and stay safe!",
          "romanization": "",
          "meaning": "Sama-sama! Nikmati waktumu di New York dan hati-hati di jalan!",
          "ttsLang": "en-US",
          "culturalNote": "💡 \"No problem at all\" atau \"You are welcome\" adalah balasan ramah sehari-hari."
        }
      ]
    }
  ],
  "toeflSimulation": {
    "id": "toefl-sim-diagnostic-1",
    "title": "TOEFL ITP Diagnostic Simulation Test 1",
    "durationMinutes": 25,
    "totalQuestions": 30,
    "sections": [
      {
        "id": "listening",
        "title": "Section 1: Listening Comprehension",
        "icon": "🎧",
        "questionCount": 10,
        "range": [
          0,
          9
        ]
      },
      {
        "id": "structure",
        "title": "Section 2: Structure & Written Expression",
        "icon": "📐",
        "questionCount": 10,
        "range": [
          10,
          19
        ]
      },
      {
        "id": "reading",
        "title": "Section 3: Reading Comprehension",
        "icon": "📖",
        "questionCount": 10,
        "range": [
          20,
          29
        ]
      }
    ],
    "questions": [
      {
        "id": "ts-q1",
        "section": "listening",
        "number": 1,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Did you hear that Professor Adams postponed the term paper deadline to next Friday?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Really? That's a huge relief! I was worried I'd have to pull an all-nighter tonight."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean?",
        "options": [
          "She had planned to go to sleep early tonight.",
          "She is relieved because she has more time to finish her paper.",
          "She will ask Professor Adams for another extension.",
          "She already submitted her paper this morning."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'That's a huge relief!' (Lega sekali) dan idiom 'pull an all-nighter' (begadang semalaman suntuk) menunjukkan wanita tersebut bersyukur karena batas waktu diundur sehingga ia tidak perlu begadang malam ini."
      },
      {
        "id": "ts-q2",
        "section": "listening",
        "number": 2,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I really wanted to take Dr. Miller's Psychology seminar, but the registrar said the class is completely capped."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Why don't you talk to Dr. Miller in person during office hours? Professors can often sign an override slip."
          }
        ],
        "narrator": "What does the woman suggest the man do?",
        "question": "What does the woman suggest the man do?",
        "options": [
          "Wait until next semester to take the course.",
          "Switch his major to Psychology.",
          "Ask the instructor directly for permission to join the course.",
          "Complain to the university registrar office."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Kalimat saran 'Why don't you talk to Dr. Miller in person... sign an override slip' menyarankan sang pria untuk meminta izin khusus langsung kepada dosen yang bersangkutan."
      },
      {
        "id": "ts-q3",
        "section": "listening",
        "number": 3,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The campus bookstore wants ninety dollars for this used chemistry textbook!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Have you checked the student co-op bulletin board? Seniors usually sell theirs for next to nothing."
          }
        ],
        "narrator": "What does the woman imply about the textbook?",
        "question": "What does the woman imply about the textbook?",
        "options": [
          "The chemistry textbook is no longer required for the class.",
          "The man can likely find a much cheaper copy through other students.",
          "The campus bookstore offers the best discount in town.",
          "She wants to buy the textbook from the man."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'for next to nothing' berarti 'hampir gratis / sangat murah'. Wanita tersebut menyarankan sang pria mencari buku bekas di koperasi mahasiswa dari kakak tingkat."
      },
      {
        "id": "ts-q4",
        "section": "listening",
        "number": 4,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The printer in the computer lab jammed again, and my presentation handout is due in twenty minutes!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Don't panic. The copy center in the basement of the student union has high-speed printers and almost no line right now."
          }
        ],
        "narrator": "What will the man probably do next?",
        "question": "What will the man probably do next?",
        "options": [
          "Try to repair the jammed printer by himself.",
          "Postpone his presentation until tomorrow.",
          "Go to the student union copy center to print his handout.",
          "Ask his classmates to lend him their handouts."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Dalam tipe soal 'What will the speaker probably do next', tindakan logis sang pria setelah mendengar saran darurat adalah segera menuju ke pusat fotokopi gedung mahasiswa ('student union copy center')."
      },
      {
        "id": "ts-q5",
        "section": "listening",
        "number": 5,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are you coming with us to the downtown jazz concert tonight?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'd love to, but I've been feeling under the weather all afternoon. I think I'll just turn in early."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean?",
        "options": [
          "The stormy weather will ruin the outdoor concert.",
          "She cannot attend the concert because she feels unwell.",
          "She prefers listening to classical music rather than jazz.",
          "She will meet them downtown later in the evening."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'under the weather' berarti 'kurang sehat / sakit ringan' (feeling sick/unwell). 'Turn in early' bermakna tidur lebih awal."
      },
      {
        "id": "ts-q6",
        "section": "listening",
        "number": 6,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "How is the biology group project going with Kevin and Lisa?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "To be honest, we just don't see eye to eye on how to organize the research findings."
          }
        ],
        "narrator": "What problem does the woman describe?",
        "question": "What problem does the woman describe?",
        "options": [
          "The group members disagree on how to present their data.",
          "One of the students has problems with their eyesight.",
          "They have not found enough research material in the library.",
          "Kevin and Lisa refused to attend the group meetings."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sepaham / berbeda pendapat' (to disagree). Pilihan B adalah jebakan harfiah kata 'eye'."
      },
      {
        "id": "ts-q7",
        "section": "listening",
        "number": 7,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Would you like to grab lunch at the new Thai restaurant across from the stadium?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Can I take a rain check? My midterm exam in Economics starts in less than an hour."
          }
        ],
        "narrator": "What does the man imply?",
        "question": "What does the man imply?",
        "options": [
          "It is raining too hard to walk to the restaurant.",
          "He does not like Thai food.",
          "He wants to postpone lunch with her to a later date.",
          "He already finished taking his Economics exam."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Idiom 'take a rain check' berarti 'menunda tawaran atau ajakan ke lain waktu' (to postpone an invitation). Pilihan A adalah perangkap bunyi kata 'rain'."
      },
      {
        "id": "ts-q8",
        "section": "listening",
        "number": 8,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Did you end up buying that new laptop you were looking at for your computer science classes?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I decided against it. It would have cost me an arm and a leg, so I'll stick with my old one for now."
          }
        ],
        "narrator": "What does the man mean?",
        "question": "What does the man mean?",
        "options": [
          "He injured himself while carrying the heavy laptop.",
          "The laptop was far too expensive for his budget.",
          "The computer store did not have the model in stock.",
          "He prefers desktop computers for programming."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'cost an arm and a leg' berarti 'sangat mahal harganya' (extremely expensive). Pria itu batal membeli laptop karena harganya terlalu mahal."
      },
      {
        "id": "ts-q9",
        "section": "listening",
        "number": 9,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Professor Higgins, I was hoping to go over my draft thesis with you today, but I have a lab class during your regular office hours."
          },
          {
            "speaker": "man",
            "label": "Profesor Higgins",
            "avatar": "👨‍🏫",
            "text": "My schedule is pretty packed this afternoon, but my door is open tomorrow morning between nine and eleven."
          }
        ],
        "narrator": "What does Professor Higgins mean?",
        "question": "What does Professor Higgins mean?",
        "options": [
          "He will not be able to review the student's thesis at all.",
          "The student should come back tomorrow morning to meet him.",
          "He wants the student to cancel her lab class.",
          "The office door is broken and needs to be repaired."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'my door is open' bermakna 'saya tersedia untuk ditemui/berkonsultasi'. Profesor menyarankan mahasiswi tersebut datang besok pagi antara pukul 09.00 - 11.00."
      },
      {
        "id": "ts-q10",
        "section": "listening",
        "number": 10,
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I've sent out twenty applications for summer internships, but haven't received a single interview callback."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "The university Career Center is hosting a resume polishing workshop tomorrow. Several recruiters will be reviewing drafts on the spot."
          }
        ],
        "narrator": "Why does the woman mention the workshop?",
        "question": "Why does the woman mention the workshop?",
        "options": [
          "To suggest a place where the man can get help improving his job applications.",
          "To invite the man to conduct job interviews with her.",
          "To warn the man that internship positions have already closed.",
          "To explain why she is not looking for a summer internship."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Sang wanita menyebut lokakarya resume di Career Center sebagai saran agar berkas lamaran temannya bisa ditinjau dan diperbaiki bersama perekrut."
      },
      {
        "id": "ts-q11",
        "section": "structure",
        "number": 11,
        "part": "Part A: Sentence Completion",
        "questionText": "Not until the late nineteenth century __________ to illuminate city streets and factories.",
        "options": [
          "was electricity harnessed",
          "electricity was harnessed",
          "harnessed electricity was",
          "when electricity was harnessed"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Pola Inversi Negatif (Negative Inversion). Jika sebuah kalimat diawali dengan frasa negatif atau restriktif seperti 'Not until...', maka klausa utama wajib mengalami pembalikan urutan (Auxiliary Verb + Subject): 'was electricity harnessed'."
      },
      {
        "id": "ts-q12",
        "section": "structure",
        "number": 12,
        "part": "Part A: Sentence Completion",
        "questionText": "The behavior of individual gas molecules under extremely high pressures and temperatures __________ quite complex.",
        "options": [
          "is",
          "are",
          "being",
          "to be"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesesuaian Subjek & Kata Kerja (Subject-Verb Agreement). Inti subjek dari kalimat ini adalah kata benda tunggal 'The behavior' (bukan 'molecules' yang berada di dalam frasa preposisi), sehingga memerlukan kata kerja tunggal 'is'."
      },
      {
        "id": "ts-q13",
        "section": "structure",
        "number": 13,
        "part": "Part A: Sentence Completion",
        "questionText": "Geologists study igneous rocks __________ beneath the Earth's crust through the slow cooling of magma.",
        "options": [
          "forming",
          "formed",
          "are formed",
          "which formed by"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Klausa Relatif Tereduksi (Reduced Relative Clause). Kalimat sudah memiliki predikat utama 'study'. Frasa setelah 'rocks' berasal dari bentuk pasif 'rocks [which were] formed beneath...', sehingga disederhanakan menjadi past participle (V3) 'formed'."
      },
      {
        "id": "ts-q14",
        "section": "structure",
        "number": 14,
        "part": "Part A: Sentence Completion",
        "questionText": "A truly successful entrepreneur must possess not only strategic vision __________ the resilience to overcome frequent setbacks.",
        "options": [
          "and also",
          "as well as",
          "but also",
          "or also"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Konjungsi Berpasangan (Correlative Conjunction). Pasangan gramatikal baku untuk 'not only' adalah 'but also' ('not only X but also Y')."
      },
      {
        "id": "ts-q15",
        "section": "structure",
        "number": 15,
        "part": "Part A: Sentence Completion",
        "questionText": "The committee recommended that each university department __________ its graduation requirements to reflect industry demands.",
        "options": [
          "revises",
          "revise",
          "revised",
          "will revise"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Bentuk Subjunctive Mandatif. Setelah kata kerja rekomendasi atau tuntutan seperti 'recommend that', 'demand that', 'require that', kata kerja klausa berikutnya wajib menggunakan bentuk kata kerja dasar (base form / bare infinitive), yaitu 'revise' (tanpa akhiran -s)."
      },
      {
        "id": "ts-q16",
        "section": "structure",
        "number": 16,
        "part": "Part B: Error Identification",
        "questionText": "Pilihlah satu bagian bergaris bawah yang secara tata bahasa SALAH:",
        "sentenceHighlighted": "Although [iron is](A) the most abundant metal on Earth, pure elemental iron is [rarely find](B) in nature [because](C) it reacts readily [with](D) oxygen.",
        "options": [
          "(A) iron is",
          "(B) rarely find",
          "(C) because",
          "(D) with"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kesalahan bentuk pasif (Passive Voice). Kalimat 'is rarely find' harus menggunakan bentuk Past Participle (V3), yaitu 'is rarely found' (jarang ditemukan)."
      },
      {
        "id": "ts-q17",
        "section": "structure",
        "number": 17,
        "part": "Part B: Error Identification",
        "questionText": "Pilihlah satu bagian bergaris bawah yang secara tata bahasa SALAH:",
        "sentenceHighlighted": "The honeybee scout [conveys](A) detailed information about [the direction](B), distance, and [abundant](C) of nectar sources [to](D) the hive.",
        "options": [
          "(A) conveys",
          "(B) the direction",
          "(C) abundant",
          "(D) to"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Struktur Paralel (Parallel Structure). Dalam daftar 'direction, distance, and...', semua elemen harus berjenis kata benda (noun). Kata 'abundant' adalah kata sifat (adjective), sehingga harus diubah menjadi kata benda 'abundance'."
      },
      {
        "id": "ts-q18",
        "section": "structure",
        "number": 18,
        "part": "Part B: Error Identification",
        "questionText": "Pilihlah satu bagian bergaris bawah yang secara tata bahasa SALAH:",
        "sentenceHighlighted": "[Despite of](A) recent advancements [in](B) satellite meteorology, sudden microbursts [remain](C) extremely difficult [to forecast](D) accurately.",
        "options": [
          "(A) Despite of",
          "(B) in",
          "(C) remain",
          "(D) to forecast"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesalahan preposisi ganda. Kata 'Despite' tidak pernah diikuti kata 'of'. Bentuk yang benar adalah 'Despite' saja, atau jika ingin memakai 'of' harus menggunakan frasa 'In spite of'."
      },
      {
        "id": "ts-q19",
        "section": "structure",
        "number": 19,
        "part": "Part B: Error Identification",
        "questionText": "Pilihlah satu bagian bergaris bawah yang secara tata bahasa SALAH:",
        "sentenceHighlighted": "[Each of](A) the clinical trials [were](B) conducted [under](C) the strict supervision of [licensed](D) medical professionals.",
        "options": [
          "(A) Each of",
          "(B) were",
          "(C) under",
          "(D) licensed"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Subjek kata ganti 'Each' selalu dianggap tunggal (singular). Oleh karena itu, kata kerja bantu 'were' salah dan seharusnya adalah 'was conducted'."
      },
      {
        "id": "ts-q20",
        "section": "structure",
        "number": 20,
        "part": "Part B: Error Identification",
        "questionText": "Pilihlah satu bagian bergaris bawah yang secara tata bahasa SALAH:",
        "sentenceHighlighted": "Coral reefs provide [essential](A) habitats [for](B) thousands of marine species, [protect](C) coastal shorelines, and [supporting](D) local fishing economies.",
        "options": [
          "(A) essential",
          "(B) for",
          "(C) protect",
          "(D) supporting"
        ],
        "answer": 3,
        "explanation": "💡 Analisis TOEFL: Struktur Paralel Kata Kerja. Deretan predikat dalam kalimat ini adalah 'provide...', 'protect...', dan seharusnya 'support...' (bentuk kata kerja dasar jamak), bukan bentuk gerund '-ing' ('supporting')."
      },
      {
        "id": "ts-q21",
        "section": "reading",
        "number": 21,
        "passageTitle": "Bioluminescence in Deep-Sea Organisms",
        "passageText": "Bioluminescence, the production and emission of light by living organisms, is predominantly found in marine environments, ranging from coastal waters to the abyssal depths of the ocean. Unlike human-made light, which relies on incandescence and produces substantial heat, bioluminescence is 'cold light,' in which less than twenty percent of the generated energy is lost as thermal radiation. The chemical mechanism typically involves a light-emitting molecule termed luciferin and an enzyme known as luciferase, which catalyzes the oxidation of luciferin in the presence of oxygen and adenosine triphosphate (ATP).\n\nIn the deep sea, where sunlight cannot penetrate beyond a depth of two hundred meters, bioluminescence serves essential survival functions. Predatory species, such as the anglerfish, utilize glowing lures suspended from their heads to attract unsuspecting prey in the pitch-black abyss. Conversely, many smaller organisms utilize bioluminescence for defensive purposes. Certain species of deep-sea squid discharge a luminescent cloud of glowing fluid to disorient predators, allowing the squid to escape undetected. Furthermore, counter-illumination is employed by hatchetfish, which emit light from their bellies that precisely matches the intensity and wavelength of downwelling sunlight, effectively camouflaging their silhouettes from predators lurking below.",
        "question": "What is the primary purpose of the passage?",
        "options": [
          "To describe the history of oceanographic exploration in the deep sea",
          "To explain the chemical mechanism and ecological functions of marine bioluminescence",
          "To prove that luciferin can be synthesized for commercial human lighting",
          "To argue that anglerfish are the most efficient predators in the ocean"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ide Pokok (Main Idea). Paragraf 1 menjelaskan mekanisme kimiawi ('chemical mechanism'), dan paragraf 2 menguraikan berbagai fungsi ekologis (menangkap mangsa, pertahanan diri, dan kamuflase) dari bioluminesensi laut."
      },
      {
        "id": "ts-q22",
        "section": "reading",
        "number": 22,
        "passageRef": "ts-q21",
        "question": "The word 'predominantly' in paragraph 1 is closest in meaning to:",
        "options": [
          "occasionally",
          "mostly / mainly",
          "partially",
          "artificially"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Makna Kosakata dalam Konteks. 'Predominantly' bermakna sebagian besar atau terutama (mostly/chiefly/mainly)."
      },
      {
        "id": "ts-q23",
        "section": "reading",
        "number": 23,
        "passageRef": "ts-q21",
        "question": "According to paragraph 1, why is bioluminescence referred to as 'cold light'?",
        "options": [
          "Because it only occurs in freezing polar ocean waters",
          "Because less than twenty percent of its energy is dissipated as heat",
          "Because luciferin requires low temperatures to ignite",
          "Because it produces no visible colors other than blue"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Rincian Fakta (Factual Detail). Teks menyatakan secara eksplisit: '...bioluminescence is 'cold light,' in which less than twenty percent of the generated energy is lost as thermal radiation' (kurang dari 20% energi hilang menjadi radiasi panas)."
      },
      {
        "id": "ts-q24",
        "section": "reading",
        "number": 24,
        "passageRef": "ts-q21",
        "question": "It can be inferred from paragraph 2 that counter-illumination is effective because:",
        "options": [
          "It blinds predators with an intensely bright flash of light",
          "It eliminates the dark shadow that would otherwise be visible from underneath",
          "It raises the water temperature around the prey",
          "It allows fish to communicate complex hunting strategies"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Soal Kesimpulan Tersirat (Inference). Hatchetfish memancarkan cahaya dari perutnya yang cocok dengan intensitas sinar matahari dari atas ('camouflaging their silhouettes from predators lurking below'), sehingga bayangan gelap mereka tidak terlihat oleh pemangsa di bawahnya."
      },
      {
        "id": "ts-q25",
        "section": "reading",
        "number": 25,
        "passageRef": "ts-q21",
        "question": "Why does the author mention the 'hatchetfish' in paragraph 2?",
        "options": [
          "To provide an example of an organism that uses light for camouflage",
          "To contrast deep-sea fish with shallow freshwater species",
          "To demonstrate that bioluminescence causes rapid extinction",
          "To illustrate how anglerfish hunt their prey"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Tujuan Retoris (Author's Purpose). Hatchetfish dihadirkan sebagai contoh konkret dari hewan laut yang memanfaatkan bioluminesensi untuk kamuflase bayangan (counter-illumination)."
      },
      {
        "id": "ts-q26",
        "section": "reading",
        "number": 26,
        "passageTitle": "Urban Heat Islands and Sustainable Architecture",
        "passageText": "The Urban Heat Island (UHI) effect is a phenomenon in which metropolitan areas experience significantly higher temperatures than their surrounding rural peripheries. This thermal disparity arises primarily from the extensive replacement of natural vegetation with conventional building materials, such as concrete and asphalt, which possess high thermal mass and low solar reflectance (albedo). During daylight hours, these dark, impervious surfaces absorb vast quantities of shortwave solar radiation, storing it as heat and re-emitting it into the lower atmosphere during the evening and night. Compounding this problem is the anthropogenic heat generated by motor vehicles, air conditioning compressors, and industrial manufacturing plants.\n\nThe consequences of urban heat islands extend beyond mere discomfort for metropolitan inhabitants. Elevated urban temperatures dramatically accelerate the formation of ground-level tropospheric ozone, a hazardous air pollutant that exacerbates respiratory ailments such as asthma and chronic bronchitis. Furthermore, as municipal cooling demand surges during heatwaves, electrical grids face unprecedented stress, frequently triggering brownouts and necessitating the increased combustion of fossil fuels at peak-load power plants.\n\nIn response, contemporary urban planners and architects are adopting innovative mitigation strategies. Among the most promising is the installation of extensive green roofs — rooftop gardens covered with sedum and drought-tolerant foliage that facilitate evaporative cooling while insulating interior living spaces. Additionally, the widespread deployment of 'cool pavements' and reflective cool-roof coatings with high solar reflectance index (SRI) values can redirect solar energy back into space before it can be absorbed. When integrated with expansive urban tree canopies, these nature-based solutions can suppress urban ambient temperatures by as much as three to five degrees Celsius.",
        "question": "What is the passage primarily concerned with?",
        "options": [
          "The history of building materials from ancient times to the present",
          "The causes, impacts, and architectural mitigation strategies of urban heat islands",
          "How green roofs reduce residential water consumption in arid regions",
          "Why electricity grids fail during winter snowstorms in cities"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ide Pokok Teks (Main Idea). Teks secara lengkap membahas: penyebab (paragraf 1), dampak berbahaya (paragraf 2), dan strategi mitigasi arsitektur hijau (paragraf 3) dari fenomena Urban Heat Island."
      },
      {
        "id": "ts-q27",
        "section": "reading",
        "number": 27,
        "passageRef": "ts-q26",
        "question": "The word 'disparity' in paragraph 1 is closest in meaning to:",
        "options": [
          "difference / inequality",
          "equilibrium",
          "similarity",
          "fluctuation"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Makna Kosakata (Vocabulary in Context). 'Thermal disparity' merujuk pada perbedaan atau kesenjangan suhu yang kontras antara area perkotaan dan pedesaan (difference/gap)."
      },
      {
        "id": "ts-q28",
        "section": "reading",
        "number": 28,
        "passageRef": "ts-q26",
        "question": "According to paragraph 1, all of the following contribute to the Urban Heat Island effect EXCEPT:",
        "options": [
          "High solar reflectance (albedo) of rural pastures",
          "Anthropogenic heat generated by automobiles and air conditioners",
          "Storage and re-emission of solar radiation by asphalt and concrete",
          "Extensive replacement of natural vegetation"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Soal Pengecualian (Negative Factual Detail / EXCEPT). Paragraf 1 menyebutkan bahwa UHI disebabkan oleh bahan berdaya pantul rendah ('low solar reflectance'), panas antropogenik kendaraan, dan hilangnya tumbuhan. Daya pantul tinggi daerah pedesaan (rural albedo) justru merupakan faktor kebalikan (bukan penyebab UHI)."
      },
      {
        "id": "ts-q29",
        "section": "reading",
        "number": 29,
        "passageRef": "ts-q26",
        "question": "According to paragraph 2, what hazardous air pollutant is accelerated by elevated urban temperatures?",
        "options": [
          "Carbon monoxide gas",
          "Ground-level tropospheric ozone",
          "Sulfur dioxide compounds",
          "Chlorofluorocarbons (CFCs)"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Rincian Fakta Teks (Factual Detail). Paragraf 2 menyatakan: 'Elevated urban temperatures dramatically accelerate the formation of ground-level tropospheric ozone...'"
      },
      {
        "id": "ts-q30",
        "section": "reading",
        "number": 30,
        "passageRef": "ts-q26",
        "question": "It can be inferred from paragraph 3 that green roofs mitigate urban heat primarily through:",
        "options": [
          "Evaporative cooling from vegetation and interior insulation",
          "Reflecting 100% of all solar energy into deep space",
          "Eliminating the need for municipal electrical power grids",
          "Attracting continuous rainfall to downtown centers"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesimpulan Logis (Inference). Paragraf 3 menerangkan bahwa atap hijau ('green roofs') bekerja dengan cara memfasilitasi pendinginan evaporatif dari tanaman ('evaporative cooling') sekaligus mengisolasi ruang bangunan bagian dalam ('insulating interior living spaces')."
      }
    ]
  },
  "toeflQuestionBank": {
    "listening": [
      {
        "id": "ts-q1",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Did you hear that Professor Adams postponed the term paper deadline to next Friday?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Really? That's a huge relief! I was worried I'd have to pull an all-nighter tonight."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean?",
        "options": [
          "She had planned to go to sleep early tonight.",
          "She is relieved because she has more time to finish her paper.",
          "She will ask Professor Adams for another extension.",
          "She already submitted her paper this morning."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'That's a huge relief!' (Lega sekali) dan idiom 'pull an all-nighter' (begadang semalaman suntuk) menunjukkan wanita tersebut bersyukur karena batas waktu diundur sehingga ia tidak perlu begadang malam ini."
      },
      {
        "id": "ts-q2",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I really wanted to take Dr. Miller's Psychology seminar, but the registrar said the class is completely capped."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Why don't you talk to Dr. Miller in person during office hours? Professors can often sign an override slip."
          }
        ],
        "narrator": "What does the woman suggest the man do?",
        "question": "What does the woman suggest the man do?",
        "options": [
          "Wait until next semester to take the course.",
          "Switch his major to Psychology.",
          "Ask the instructor directly for permission to join the course.",
          "Complain to the university registrar office."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Kalimat saran 'Why don't you talk to Dr. Miller in person... sign an override slip' menyarankan sang pria untuk meminta izin khusus langsung kepada dosen yang bersangkutan."
      },
      {
        "id": "ts-q3",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The campus bookstore wants ninety dollars for this used chemistry textbook!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Have you checked the student co-op bulletin board? Seniors usually sell theirs for next to nothing."
          }
        ],
        "narrator": "What does the woman imply about the textbook?",
        "question": "What does the woman imply about the textbook?",
        "options": [
          "The chemistry textbook is no longer required for the class.",
          "The man can likely find a much cheaper copy through other students.",
          "The campus bookstore offers the best discount in town.",
          "She wants to buy the textbook from the man."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'for next to nothing' berarti 'hampir gratis / sangat murah'. Wanita tersebut menyarankan sang pria mencari buku bekas di koperasi mahasiswa dari kakak tingkat."
      },
      {
        "id": "ts-q4",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The printer in the computer lab jammed again, and my presentation handout is due in twenty minutes!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Don't panic. The copy center in the basement of the student union has high-speed printers and almost no line right now."
          }
        ],
        "narrator": "What will the man probably do next?",
        "question": "What will the man probably do next?",
        "options": [
          "Try to repair the jammed printer by himself.",
          "Postpone his presentation until tomorrow.",
          "Go to the student union copy center to print his handout.",
          "Ask his classmates to lend him their handouts."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Dalam tipe soal 'What will the speaker probably do next', tindakan logis sang pria setelah mendengar saran darurat adalah segera menuju ke pusat fotokopi gedung mahasiswa ('student union copy center')."
      },
      {
        "id": "ts-q5",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are you coming with us to the downtown jazz concert tonight?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'd love to, but I've been feeling under the weather all afternoon. I think I'll just turn in early."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean?",
        "options": [
          "The stormy weather will ruin the outdoor concert.",
          "She cannot attend the concert because she feels unwell.",
          "She prefers listening to classical music rather than jazz.",
          "She will meet them downtown later in the evening."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'under the weather' berarti 'kurang sehat / sakit ringan' (feeling sick/unwell). 'Turn in early' bermakna tidur lebih awal."
      },
      {
        "id": "ts-q6",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "How is the biology group project going with Kevin and Lisa?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "To be honest, we just don't see eye to eye on how to organize the research findings."
          }
        ],
        "narrator": "What problem does the woman describe?",
        "question": "What problem does the woman describe?",
        "options": [
          "The group members disagree on how to present their data.",
          "One of the students has problems with their eyesight.",
          "They have not found enough research material in the library.",
          "Kevin and Lisa refused to attend the group meetings."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sepaham / berbeda pendapat' (to disagree). Pilihan B adalah jebakan harfiah kata 'eye'."
      },
      {
        "id": "ts-q7",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Would you like to grab lunch at the new Thai restaurant across from the stadium?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Can I take a rain check? My midterm exam in Economics starts in less than an hour."
          }
        ],
        "narrator": "What does the man imply?",
        "question": "What does the man imply?",
        "options": [
          "It is raining too hard to walk to the restaurant.",
          "He does not like Thai food.",
          "He wants to postpone lunch with her to a later date.",
          "He already finished taking his Economics exam."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Idiom 'take a rain check' berarti 'menunda tawaran atau ajakan ke lain waktu' (to postpone an invitation). Pilihan A adalah perangkap bunyi kata 'rain'."
      },
      {
        "id": "ts-q8",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Did you end up buying that new laptop you were looking at for your computer science classes?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I decided against it. It would have cost me an arm and a leg, so I'll stick with my old one for now."
          }
        ],
        "narrator": "What does the man mean?",
        "question": "What does the man mean?",
        "options": [
          "He injured himself while carrying the heavy laptop.",
          "The laptop was far too expensive for his budget.",
          "The computer store did not have the model in stock.",
          "He prefers desktop computers for programming."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'cost an arm and a leg' berarti 'sangat mahal harganya' (extremely expensive). Pria itu batal membeli laptop karena harganya terlalu mahal."
      },
      {
        "id": "ts-q9",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Professor Higgins, I was hoping to go over my draft thesis with you today, but I have a lab class during your regular office hours."
          },
          {
            "speaker": "man",
            "label": "Profesor Higgins",
            "avatar": "👨‍🏫",
            "text": "My schedule is pretty packed this afternoon, but my door is open tomorrow morning between nine and eleven."
          }
        ],
        "narrator": "What does Professor Higgins mean?",
        "question": "What does Professor Higgins mean?",
        "options": [
          "He will not be able to review the student's thesis at all.",
          "The student should come back tomorrow morning to meet him.",
          "He wants the student to cancel her lab class.",
          "The office door is broken and needs to be repaired."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'my door is open' bermakna 'saya tersedia untuk ditemui/berkonsultasi'. Profesor menyarankan mahasiswi tersebut datang besok pagi antara pukul 09.00 - 11.00."
      },
      {
        "id": "ts-q10",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I've sent out twenty applications for summer internships, but haven't received a single interview callback."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "The university Career Center is hosting a resume polishing workshop tomorrow. Several recruiters will be reviewing drafts on the spot."
          }
        ],
        "narrator": "Why does the woman mention the workshop?",
        "question": "Why does the woman mention the workshop?",
        "options": [
          "To suggest a place where the man can get help improving his job applications.",
          "To invite the man to conduct job interviews with her.",
          "To warn the man that internship positions have already closed.",
          "To explain why she is not looking for a summer internship."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Sang wanita menyebut lokakarya resume di Career Center sebagai saran agar berkas lamaran temannya bisa ditinjau dan diperbaiki bersama perekrut."
      },
      {
        "id": "bank-l-toefl-fast3-l2-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Excuse me, I need an official transcript for graduate school, but the online portal says there's a hold on my account.",
            "translation": "Permisi, saya butuh transkrip resmi untuk pendaftaran S2, tapi portal online menunjukkan ada penangguhan di akun saya."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Let me check. Yes, you still have an unreturned chemistry handbook from last semester. Once you clear that with the science library, the hold will be lifted immediately.",
            "translation": "Biar saya periksa. Ya, kamu masih punya buku panduan kimia semester lalu yang belum dikembalikan. Begitu kamu selesaikan di perpustakaan sains, penangguhannya langsung dicabut."
          }
        ],
        "narrator": "What must the man do to obtain his transcript?",
        "question": "What must the man do to obtain his transcript? (Apa yang harus pria lakukan agar memperoleh transkripnya?)",
        "options": [
          "Pay a fine directly to the graduate school admissions office.",
          "Return an overdue book to the science library.",
          "Submit a formal appeal to the registrar officer.",
          "Retake his chemistry course in the coming term."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Petugas menjelaskan ada 'unreturned chemistry handbook'. Pria harus menyelesaikannya di 'science library' agar transkrip bisa dicetak."
      },
      {
        "id": "bank-l-toefl-fast3-l2-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Have you talked to your roommate about playing loud music while you're studying?",
            "translation": "Sudahkah kamu bicara dengan teman sekamarmu tentang musik keras saat kamu lagi belajar?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I was hesitant at first, but once I brought it up politely, he was more than happy to use his headphones.",
            "translation": "Awalnya aku ragu, tapi begitu aku bicarakan secara sopan, dia dengan senang hati langsung memakai headphone."
          }
        ],
        "narrator": "What did the man's roommate do?",
        "question": "What did the man's roommate do? (Apa reaksi teman sekamar pria tersebut?)",
        "options": [
          "He refused to lower the volume of the stereo.",
          "He agreed cooperatively to wear headphones.",
          "He demanded that the man move to another dorm.",
          "He stopped studying music altogether."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Frasa 'more than happy to use his headphones' menunjukkan teman sekamarnya menyetujui secara kooperatif tanpa keberatan."
      },
      {
        "id": "bank-l-toefl-fast3-l2-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Professor Davis, is it okay if I wear sandals today since the temperature outside is over ninety degrees?",
            "translation": "Profesor Davis, bolehkah saya memakai sandal hari ini karena suhu di luar lebih dari 32 derajat?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'm afraid not, Michael. Closed-toe shoes are an absolute requirement whenever hazardous reagents are out on the lab counters.",
            "translation": "Sayangnya tidak boleh, Michael. Sepatu tertutup adalah kewajiban mutlak setiap kali reagen berbahaya ada di meja lab."
          }
        ],
        "narrator": "What does the professor tell Michael?",
        "question": "What does the professor tell Michael? (Apa yang disampaikan profesor kepada Michael?)",
        "options": [
          "He can wear sandals only if he stays near the door.",
          "He is strictly prohibited from wearing open shoes in the lab.",
          "He should postpone his experiment until the weather cools down.",
          "He needs to wear safety goggles instead of shoes."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'I'm afraid not' diikuti 'closed-toe shoes are an absolute requirement' menegaskan Michael dilarang memakai sandal di laboratorium sains demi keselamatan."
      },
      {
        "id": "bank-l-toefl-fast3-l2-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Are you free to join our macroeconomics review session tonight at the student center?",
            "translation": "Apakah kamu ada waktu luang untuk ikut sesi ulasan makroekonomi malam ini di student center?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I really wish I could, but my part-time shift at the campus bookstore doesn't wrap up until ten.",
            "translation": "Aku ingin sekali bisa ikut, tapi giliran kerja paruh waktuku di toko buku kampus baru kelar jam sepuluh."
          }
        ],
        "narrator": "What does the man imply?",
        "question": "What does the man imply? (Apa yang disiratkan oleh sang pria?)",
        "options": [
          "He will lead the review group starting at ten o'clock.",
          "He cannot attend the study session because of work commitments.",
          "He wants the woman to buy textbooks at his bookstore.",
          "He prefers studying macroeconomics completely on his own."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Pola 'I wish I could, but...' adalah cara halus menolak undangan karena adanya jadwal lain yang bertabrakan (shift kerja)."
      },
      {
        "id": "bank-l-toefl-fast3-l3-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Did you hear that the coastal wetland excursion has been pushed back due to the severe thunderstorm forecast?",
            "translation": "Kamu dengar tidak kalau ekskursi lahan basah pesisir diundur karena ramalan badai petir lebat?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "That works out great for me! It gives me the extra weekend I needed to finish my research proposal on mangrove biodiversity.",
            "translation": "Bagus sekali bagiku! Itu memberiku tambahan akhir pekan yang kubutuhkan untuk menyelesaikan proposal riset tentang keanekaragaman mangrove."
          }
        ],
        "narrator": "How does the man feel about the delay?",
        "question": "How does the man feel about the delay? (Bagaimana perasaan pria terkait penundaan tersebut?)",
        "options": [
          "He is disappointed because he bought camping gear.",
          "He welcomes the extra time to work on his proposal.",
          "He worries the thunderstorms will damage the mangroves.",
          "He thinks the trip should be cancelled permanently."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ucapan pria 'That works out great for me!' dan 'It gives me the extra weekend...' menunjukkan ia sangat menyambut baik penundaan tersebut."
      },
      {
        "id": "bank-l-toefl-fast3-l3-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Professor Vance, I'm finding it difficult to narrow down my topic on Renaissance art; it just feels overwhelmingly broad.",
            "translation": "Profesor Vance, saya merasa sulit mempersempit topik seni Renaisans; rasanya terlalu luas."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Why don't you focus specifically on how linear perspective evolved between Giotto and Brunelleschi? That will give your paper a clear, concrete comparative spine.",
            "translation": "Mengapa kamu tidak fokus secara spesifik pada evolusi perspektif linier antara Giotto dan Brunelleschi? Itu akan memberi makalahmu kerangka perbandingan yang konkret dan jelas."
          }
        ],
        "narrator": "What does Professor Vance suggest the student do?",
        "question": "What does Professor Vance suggest the student do? (Apa saran Profesor Vance?)",
        "options": [
          "Abandon the Renaissance topic and study Modern Art.",
          "Compare linear perspective techniques between two specific historical artists.",
          "Write a comprehensive overview of all Italian Renaissance painters.",
          "Submit an outline instead of a complete term paper."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Profesor menyarankan fokus spesifik: 'how linear perspective evolved between Giotto and Brunelleschi' (membandingkan teknik dua seniman)."
      },
      {
        "id": "bank-l-toefl-fast3-l3-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Can I check out this anthropology reserve reading for the weekend?",
            "translation": "Bisakah saya meminjam buku bacaan antropologi cadangan ini untuk akhir pekan?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Unfortunately, reserve readings have a two-hour in-library limit during the day. However, if you come back after five on Friday, you can borrow it overnight until Monday morning.",
            "translation": "Sayangnya, bacaan cadangan dibatasi dua jam di dalam perpustakaan saat siang. Namun, jika kamu kembali setelah jam lima pada hari Jumat, kamu bisa meminjamnya semalaman hingga Senin pagi."
          }
        ],
        "narrator": "When may the woman borrow the book overnight?",
        "question": "When may the woman borrow the book overnight? (Kapan sang wanita boleh meminjam buku tersebut semalaman?)",
        "options": [
          "Only during regular weekday afternoon hours.",
          "Starting late Friday afternoon after five o'clock.",
          "Any time as long as she deposits her student ID card.",
          "Never, because reserve books cannot leave the building."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Petugas menjelaskan aturan 'overnight checkout': 'if you come back after five on Friday, you can borrow it overnight until Monday morning'."
      },
      {
        "id": "bank-l-toefl-u0-l1-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Did you hear that Professor Adams postponed the term paper deadline to next Friday?",
            "translation": "Kamu dengar tidak kalau Profesor Adams menunda batas waktu makalah sampai Jumat depan?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Really? That's a huge relief! I was worried I'd have to pull an all-nighter tonight.",
            "translation": "Benarkah? Lega sekali mendengarnya! Tadinya aku khawatir harus begadang semalaman malam ini."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
        "options": [
          "She had planned to go to sleep early tonight.",
          "She is relieved because she has more time to finish her paper.",
          "She will ask Professor Adams for another extension.",
          "She already submitted her paper this morning."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'That's a huge relief!' (Lega sekali) dan idiom 'pull an all-nighter' (begadang semalaman suntuk tanpa tidur) menunjukkan wanita tersebut bersyukur karena batas waktu tugas diundur sehingga ia tidak perlu begadang malam ini."
      },
      {
        "id": "bank-l-toefl-u0-l1-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I really wanted to take Dr. Miller's Psychology seminar, but the registrar said the class is completely capped.",
            "translation": "Aku sangat ingin mengambil seminar Psikologi Dr. Miller, tapi bagian akademik bilang kelasnya sudah penuh kuota."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Why don't you talk to Dr. Miller in person during office hours? Professors can often sign an override slip.",
            "translation": "Kenapa kamu tidak menemui langsung Dr. Miller di jam kantornya? Dosen sering kali bisa menandatangani surat dispensasi penambahan kuota."
          }
        ],
        "narrator": "What does the woman suggest the man do?",
        "question": "What does the woman suggest the man do? (Apa saran sang wanita kepada pria tersebut?)",
        "options": [
          "Wait until next semester to take the course.",
          "Switch his major to Psychology.",
          "Ask the instructor directly for permission to join the course.",
          "Complain to the university registrar office."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Frasa saran 'Why don't you talk to Dr. Miller in person... sign an override slip' menyarankan sang pria untuk menemui langsung dosen pengampu agar mendapatkan izin khusus (override) masuk ke kelas yang kuotanya sudah penuh."
      },
      {
        "id": "bank-l-toefl-u0-l1-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The campus bookstore wants ninety dollars for this used chemistry textbook!",
            "translation": "Toko buku kampus mematok harga sembilan puluh dolar untuk buku kimia bekas ini!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Have you checked the student co-op bulletin board? Seniors usually sell theirs for next to nothing.",
            "translation": "Sudahkah kamu mengecek papan pengumuman koperasi mahasiswa? Mahasiswa tingkat akhir biasanya menjual milik mereka dengan harga sangat murah."
          }
        ],
        "narrator": "What does the woman imply about the textbook?",
        "question": "What does the woman imply about the textbook? (Apa yang diimplikasikan sang wanita?)",
        "options": [
          "The chemistry textbook is no longer required for the class.",
          "The man can likely find a much cheaper copy through other students.",
          "The campus bookstore offers the best discount in town.",
          "She wants to buy the textbook from the man."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'for next to nothing' berarti 'sangat murah sekali / hampir gratis'. Sang wanita mengindikasikan sang pria bisa menghemat uang dengan membeli buku bekas dari mahasiswa senior di papan koperasi."
      },
      {
        "id": "bank-l-toefl-u0-l1-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The printer in the computer lab jammed again, and my presentation handout is due in twenty minutes!",
            "translation": "Mesin cetak di lab komputer macet lagi, padahal makalah presentasiku harus dikumpulkan dua puluh menit lagi!"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Don't panic. The copy center in the basement of the student union has high-speed printers and almost no line right now.",
            "translation": "Jangan panik. Pusat fotokopi di ruang bawah tanah gedung mahasiswa punya printer berkecepatan tinggi dan hampir tidak ada antrean saat ini."
          }
        ],
        "narrator": "What will the man probably do next?",
        "question": "What will the man probably do next? (Apa yang kemungkinan besar akan dilakukan sang pria?)",
        "options": [
          "Try to repair the jammed printer by himself.",
          "Postpone his presentation until tomorrow.",
          "Go to the student union copy center to print his handout.",
          "Ask his classmates to lend him their handouts."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Dalam tipe soal 'What will the speaker probably do next', tindakan logis sang pria setelah mendengar saran darurat adalah segera menuju ke pusat fotokopi gedung mahasiswa ('student union copy center')."
      },
      {
        "id": "bank-l-toefl-u0-l2-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are you coming with us to the downtown jazz concert tonight?",
            "translation": "Apakah kamu ikut bersama kami ke konser jazz di pusat kota malam ini?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'd love to, but I've been feeling under the weather all afternoon. I think I'll just turn in early.",
            "translation": "Aku sebenarnya mau sekali, tapi badanku merasa kurang enak sepanjang siang ini. Sepertinya aku akan tidur lebih awal saja."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
        "options": [
          "The stormy weather will ruin the outdoor concert.",
          "She cannot attend the concert because she feels unwell.",
          "She prefers listening to classical music rather than jazz.",
          "She will meet them downtown later in the evening."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'under the weather' adalah salah satu idiom paling sering muncul di TOEFL yang berarti 'kurang sehat / sakit ringan' (feeling sick/unwell). 'Turn in early' bermakna tidur lebih awal."
      },
      {
        "id": "bank-l-toefl-u0-l2-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "How is the biology group project going with Kevin and Lisa?",
            "translation": "Bagaimana perkembangan tugas kelompok biologi bersama Kevin dan Lisa?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "To be honest, we just don't see eye to eye on how to organize the research findings.",
            "translation": "Jujur saja, kami tidak sependapat mengenai cara menyusun hasil temuan penelitian."
          }
        ],
        "narrator": "What problem does the woman describe?",
        "question": "What problem does the woman describe? (Masalah apa yang diceritakan sang wanita?)",
        "options": [
          "The group members disagree on how to present their data.",
          "One of the students has problems with their eyesight.",
          "They have not found enough research material in the library.",
          "Kevin and Lisa refused to attend the group meetings."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sepaham / berbeda pendapat' (to disagree). Pilihan B adalah jebakan harfiah kata 'eye' yang umum diujikan dalam tes TOEFL."
      },
      {
        "id": "bank-l-toefl-u0-l2-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Would you like to grab lunch at the new Thai restaurant across from the stadium?",
            "translation": "Mau makan siang bersama di restoran Thailand baru di seberang stadion?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Can I take a rain check? My midterm exam in Economics starts in less than an hour.",
            "translation": "Bolehkah aku tunda lain waktu? Ujian tengah semester Ekonomiku dimulai kurang dari satu jam lagi."
          }
        ],
        "narrator": "What does the man imply?",
        "question": "What does the man imply? (Apa yang diimplikasikan sang pria?)",
        "options": [
          "It is raining too hard to walk to the restaurant.",
          "He does not like Thai food.",
          "He wants to postpone lunch with her to a later date.",
          "He already finished taking his Economics exam."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Idiom 'take a rain check' berarti 'menunda tawaran atau ajakan ke lain waktu' (to postpone an invitation). Opsi A adalah jebakan bunyi kata 'rain'."
      },
      {
        "id": "bank-l-toefl-u0-l2-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Did you end up buying that new laptop you were looking at for your computer science classes?",
            "translation": "Apakah kamu akhirnya membeli laptop baru yang kamu incar untuk kuliah ilmu komputer?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I decided against it. It would have cost me an arm and a leg, so I'll stick with my old one for now.",
            "translation": "Aku putuskan tidak jadi beli. Harganya selangit, jadi aku tetap pakai yang lama saja untuk sekarang."
          }
        ],
        "narrator": "What does the man mean?",
        "question": "What does the man mean? (Apa yang dimaksud oleh sang pria?)",
        "options": [
          "He injured himself while carrying the heavy laptop.",
          "The laptop was far too expensive for his budget.",
          "The computer store did not have the model in stock.",
          "He prefers desktop computers for programming."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'cost an arm and a leg' berarti 'sangat mahal harganya' (extremely expensive). Pria itu batal membeli laptop karena harganya melebihi anggarannya."
      },
      {
        "id": "bank-l-toefl-list-extra1-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Have you accepted the summer research internship offer from the environmental agency yet?",
            "translation": "Apakah kamu sudah menerima tawaran magang riset musim panas dari dinas lingkungan hidup?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Not quite yet. It's a fantastic opportunity, but I promised myself I'd sleep on it before signing anything.",
            "translation": "Belum sepenuhnya. Ini kesempatan luar biasa, tapi aku berjanji pada diriku sendiri untuk memikirkannya semalam dulu sebelum menandatangani apa pun."
          }
        ],
        "narrator": "What will the woman probably do?",
        "question": "What will the woman probably do? (Apa yang kemungkinan akan dilakukan wanita tersebut?)",
        "options": [
          "Go to bed immediately and decline the internship tomorrow.",
          "Take overnight time to carefully consider the decision before responding.",
          "Sign the contract right now without reading the details.",
          "Ask the man to take the internship position instead."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'sleep on it' berarti 'menunda keputusan sampai besok pagi agar bisa berpikir dengan kepala jernih'. Opsi A adalah jebakan makna harfiah 'sleep'!"
      },
      {
        "id": "bank-l-toefl-list-extra1-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are you sure Dean Richardson doesn't know anything about the farewell party we're planning?",
            "translation": "Kamu yakin Dekan Richardson belum tahu apa-apa soal pesta perpisahan yang sedang kita rencanakan?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Well, somebody let the cat out of the bag during the faculty lunch yesterday, so the secret is definitely out.",
            "translation": "Wah, seseorang sudah membocorkan rahasianya saat makan siang dosen kemarin, jadi rahasianya sudah pasti terbongkar."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean? (Apa yang dimaksud oleh sang wanita?)",
        "options": [
          "A stray cat was found inside the faculty dining hall.",
          "Dean Richardson already knows about the upcoming party.",
          "The faculty decided to cancel the farewell gathering.",
          "She forgot to deliver the party invitations."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom populer 'let the cat out of the bag' berarti 'membocorkan rahasia'. Opsi A adalah jebakan kata 'cat' secara harfiah!"
      },
      {
        "id": "bank-l-toefl-list-extra1-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I've registered for six honors courses this term and signed up for twenty hours of campus tutoring.",
            "translation": "Aku mendaftar enam mata kuliah kelas kehormatan semester ini dan mengambil 20 jam bimbingan belajar di kampus."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Don't you think you might be biting off more than you can chew?",
            "translation": "Tidakkah kamu berpikir bahwa kamu mungkin mengambil beban melebihi apa yang sanggup kamu tanggung?"
          }
        ],
        "narrator": "What does the woman suggest to the man?",
        "question": "What does the woman suggest to the man? (Apa yang disiratkan oleh sang wanita kepada pria tersebut?)",
        "options": [
          "He should chew his cafeteria food more slowly.",
          "He is taking on far more responsibilities than he can handle.",
          "He needs to register for even more academic credits.",
          "He should resign from his university courses immediately."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'bite off more than you can chew' berarti 'mengambil komitmen/beban terlalu banyak melebihi kesanggupan'. Opsi A adalah jebakan harfiah kata 'chew'."
      },
      {
        "id": "bank-l-toefl-list-extra1-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Are we still heading up to Mount Mitchell this Saturday morning, or should we book hotel reservations now?",
            "translation": "Apakah kita tetap mendaki ke Gunung Mitchell Sabtu pagi ini, atau kita harus pesan hotel sekarang?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Given how unpredictable the meteorology forecast has been, let's just play it by ear.",
            "translation": "Mengingat ramalan cuaca masih tidak menentu, mari kita lihat situasinya nanti saat hari H saja."
          }
        ],
        "narrator": "What does the man suggest doing?",
        "question": "What does the man suggest doing? (Apa saran sang pria?)",
        "options": [
          "Buying audio equipment before going hiking.",
          "Deciding what to do later depending on how circumstances develop.",
          "Canceling the entire weekend trip immediately.",
          "Going to a musical concert at Mount Mitchell instead."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ungkapan 'play it by ear' berarti 'menentukan keputusan secara fleksibel saat situasi berjalan (wait and see)'. Opsi A & D adalah jebakan kata 'ear'!"
      },
      {
        "id": "bank-l-toefl-list-extra3-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Have you decided whether to declare your major in political science or international relations?",
            "translation": "Apakah kamu sudah memutuskan untuk memilih jurusan ilmu politik atau hubungan internasional?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Honestly, I'm still on the fence about it. Both departments offer such compelling curriculum tracks.",
            "translation": "Jujur saja, aku masih ragu-ragu dan belum bisa memutuskan. Kedua departemen menawarkan kurikulum yang sangat menarik."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean? (Apa maksud wanita tersebut?)",
        "options": [
          "She climbed over the campus security fence.",
          "She has not yet made up her mind about her major.",
          "She decided to quit university altogether.",
          "She dislikes both academic departments equally."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'on the fence' bermakna 'ragu-ragu / belum bisa menentukan pilihan'. Opsi A adalah jebakan harfiah kata 'fence'!"
      },
      {
        "id": "bank-l-toefl-list-extra3-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Are our biochemistry titration results consistent with the theoretical benchmarks?",
            "translation": "Apakah hasil titrasi biokimia kita konsisten dengan tolok ukur teoritis?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "It was touch and go for a while when the pH meter drifted, but our final averages hit the bullseye.",
            "translation": "Tadi sempat tidak menentu dan kritis ketika alat pH meter bergeser, tapi rata-rata akhir kita tepat sasaran."
          }
        ],
        "narrator": "What does the man imply about the experiment?",
        "question": "What does the man imply about the experiment?",
        "options": [
          "The experiment was a total disaster and failed.",
          "There was a period of severe uncertainty, but the final results were highly accurate.",
          "The students must repeat the titration next semester.",
          "The man prefers to use a broken thermometer."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'touch and go' berarti 'situasi kritis/tidak menentu', sedangkan 'hit the bullseye' berarti 'tepat sasaran/akurat'."
      },
      {
        "id": "bank-l-toefl-list-extra3-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Did you and Brian manage to agree on who presents the case study slides?",
            "translation": "Apakah kamu dan Brian berhasil sepakat tentang siapa yang membawakan slide studi kasus?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Not really. We don't see eye to eye on how the statistical charts should be interpreted.",
            "translation": "Belum juga. Kami tidak sependapat mengenai bagaimana grafik statistik seharusnya diinterpretasikan."
          }
        ],
        "narrator": "What does the woman say about her and Brian?",
        "question": "What does the woman say about her and Brian?",
        "options": [
          "They both need to visit an optometrist for eye exams.",
          "They have differing viewpoints and disagree on the charts.",
          "They already submitted the slides to the professor.",
          "They decided to cancel the presentation."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'not see eye to eye' bermakna 'tidak sependapat / bertolak belakang pandangan'. Opsi A adalah jebakan harfiah kata 'eye'!"
      },
      {
        "id": "bank-l-toefl-list-extra3-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "You look exhausted, Kevin! Did you get any rest before this morning's architecture critique?",
            "translation": "Kamu kelihatan lelah sekali, Kevin! Apakah kamu sempat istirahat sebelum sesi kritik arsitektur pagi ini?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Hardly any. I had to burn the midnight oil to assemble the structural cardboard model.",
            "translation": "Nyaris tidak sama sekali. Aku harus begadang bekerja sampai larut malam untuk merakit maket kardus struktur."
          }
        ],
        "narrator": "What did Kevin do last night?",
        "question": "What did Kevin do last night? (Apa yang Kevin lakukan semalam?)",
        "options": [
          "He accidentally caused an oil fire in the studio.",
          "He stayed up working late into the night.",
          "He slept soundly for ten consecutive hours.",
          "He purchased kerosene lamps for his dormitory."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'burn the midnight oil' berarti 'bekerja atau belajar sampai larut malam'. Opsi A & D adalah jebakan harfiah kata 'oil'!"
      },
      {
        "id": "bank-l-toefl-d2-l1-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Excuse me, I'm trying to find the reading assignment for Professor Baker's European history seminar, but the shelf is empty.",
            "translation": "Permisi, saya sedang mencari buku bacaan wajib untuk seminar sejarah Eropa Profesor Baker, tetapi raknya kosong."
          },
          {
            "speaker": "man",
            "label": "Petugas Pustaka",
            "avatar": "👨‍💼",
            "text": "Those titles are on two-hour closed reserve behind the circulation desk. You can photocopy chapters here, but they cannot be checked out overnight.",
            "translation": "Buku-buku itu ada di bagian cadangan tertutup 2 jam di belakang meja sirkulasi. Anda bisa memfotokopi bab di sini, tetapi tidak boleh dipinjam bawa pulang."
          }
        ],
        "narrator": "What does the librarian explain to the student?",
        "question": "What does the librarian explain to the student? (Apa yang dijelaskan petugas perpustakaan kepada mahasiswi?)",
        "options": [
          "The requested books have been permanently removed from the library catalog.",
          "The books are on reserve and can only be used inside the library for two hours.",
          "Professor Baker has canceled the reading assignment for this week.",
          "She must purchase her own copy from the campus bookstore."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Petugas menjelaskan bahwa buku tugas disimpan di 'closed reserve' di belakang meja sirkulasi dengan batasan waktu 2 jam dan tidak boleh dipinjam bawa pulang ('cannot be checked out overnight')."
      },
      {
        "id": "bank-l-toefl-d2-l1-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "I really need to request a room transfer. My new roommate stays up studying with the overhead lights on until three in the morning every night.",
            "translation": "Aku benar-benar harus mengajukan pindah kamar. Teman sekamar baruku selalu begadang belajar dengan lampu utama menyala sampai jam 3 pagi setiap malam."
          },
          {
            "speaker": "woman",
            "label": "Petugas Asrama",
            "avatar": "👩‍💼",
            "text": "The housing office has a mandatory two-week freeze on room swaps at the start of the term. You'll need to speak with your resident advisor first.",
            "translation": "Kantor asrama memberlakukan pembekuan pertukaran kamar wajib selama dua minggu di awal semester. Kamu harus berbicara dengan pembimbing asramamu terlebih dahulu."
          }
        ],
        "narrator": "What does the woman imply the man should do?",
        "question": "What does the woman imply the man should do? (Apa yang disarankan wanita tersebut kepada mahasiswa tersebut?)",
        "options": [
          "Consult his resident advisor because immediate room changes are frozen.",
          "Move into an off-campus apartment immediately.",
          "Ask the housing office to refund his dormitory fees.",
          "Study with his roommate until late at night."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Petugas menjelaskan adanya 'two-week freeze' (penundaan perubahan kamar 2 minggu di awal semester) dan menyarankan sang mahasiswa berkonsultasi terlebih dahulu dengan 'resident advisor' (pembimbing asrama)."
      },
      {
        "id": "bank-l-toefl-d2-l1-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Professor Miller, our centrifuge machine malfunctioned during the microbiology lab yesterday. Could our team have until Friday to submit the report?",
            "translation": "Profesor Miller, mesin sentrifus kami rusak saat praktikum mikrobiologi kemarin. Bisakah kelompok kami diberi waktu hingga hari Jumat untuk mengumpulkan laporannya?"
          },
          {
            "speaker": "man",
            "label": "Profesor Miller",
            "avatar": "👨‍🏫",
            "text": "As long as you submit the raw data by Wednesday afternoon to show your progress, a Friday deadline for the full write-up is acceptable.",
            "translation": "Sepanjang kalian mengumpulkan data mentah pada hari Rabu sore untuk menunjukkan progres kalian, tenggat hari Jumat untuk laporan lengkapnya bisa saya terima."
          }
        ],
        "narrator": "Under what condition will the professor grant an extension?",
        "question": "Under what condition will the professor grant an extension? (Dengan syarat apa profesor memberikan perpanjangan waktu?)",
        "options": [
          "If the students repair the centrifuge machine themselves.",
          "If the team submits their initial raw data by Wednesday afternoon.",
          "If all team members score full marks on the upcoming exam.",
          "If they conduct the experiment in a different laboratory."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kata kunci bersyarat ('As long as...'): Profesor mengizinkan perpanjangan waktu hingga hari Jumat dengan syarat data mentah ('raw data') dikumpulkan pada hari Rabu sore."
      },
      {
        "id": "bank-l-toefl-d2-l1-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "I'm worried my grade point average from last semester dropped just enough to put my merit scholarship at risk.",
            "translation": "Aku khawatir IPK-ku dari semester lalu turun dan membuat beasiswa prestasiku terancam."
          },
          {
            "speaker": "woman",
            "label": "Petugas Beasiswa",
            "avatar": "👩‍💼",
            "text": "The financial aid office allows a one-semester probationary period before revoking aid. You should schedule a meeting with a counselor to verify your standing.",
            "translation": "Kantor bantuan keuangan memberikan masa percobaan satu semester sebelum mencabut beasiswa. Kamu sebaiknya menjadwalkan pertemuan dengan konselor untuk memastikan statusmu."
          }
        ],
        "narrator": "What does the woman tell the man about his scholarship?",
        "question": "What does the woman tell the man about his scholarship? (Apa yang diberitahukan wanita tersebut mengenai beasiswa sang pria?)",
        "options": [
          "His scholarship has already been canceled permanently.",
          "There is a one-semester probation period before scholarships are revoked.",
          "He must repay all the financial aid funds he received.",
          "Counselor meetings are only available for freshmen students."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Sang wanita menenangkan pria tersebut dengan mengabarkan adanya masa percobaan satu semester ('one-semester probationary period') sebelum beasiswa dicabut, dan menyarankan pria tersebut menemui konselor."
      },
      {
        "id": "bank-l-toefl-d2-l1-4",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Parking permits for the central commuter lot completely sold out within ten minutes of online registration opening.",
            "translation": "Izin parkir untuk lahan komuter utama terjual habis dalam waktu sepuluh menit sejak pendaftaran daring dibuka."
          },
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "You can still get a perimeter pass for half the price. The express campus shuttle runs from that lot every seven minutes.",
            "translation": "Kamu masih bisa membeli izin parkir pinggir dengan harga separuhnya. Bus antar-jemput kampus beroperasi dari lahan tersebut setiap tujuh menit."
          }
        ],
        "narrator": "What alternative does the man suggest?",
        "question": "What alternative does the man suggest? (Alternatif apa yang disarankan sang pria?)",
        "options": [
          "Walking to campus instead of driving a car.",
          "Buying a cheaper perimeter parking permit and taking the frequent campus shuttle.",
          "Parking illegally in the central faculty parking lot.",
          "Waiting until next semester to bring her car to university."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Pria menawarkan solusi praktis: membeli izin parkir pinggir ('perimeter pass') yang harganya separuh lebih murah dan menaiki bus antar-jemput kampus ('shuttle') yang berangkat setiap 7 menit."
      },
      {
        "id": "bank-l-toefl-u0-l3-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Professor Higgins, I was hoping to go over my draft thesis with you today, but I have a lab class during your regular office hours.",
            "translation": "Profesor Higgins, saya tadinya berharap bisa membahas draf skripsi dengan Anda hari ini, tetapi saya ada kelas praktikum saat jam konsultasi reguler Anda."
          },
          {
            "speaker": "man",
            "label": "Profesor Higgins",
            "avatar": "👨‍🏫",
            "text": "My schedule is pretty packed this afternoon, but my door is open tomorrow morning between nine and eleven.",
            "translation": "Jadwal saya cukup padat siang ini, tetapi pintu saya terbuka besok pagi antara pukul sembilan sampai sebelas."
          }
        ],
        "narrator": "What does Professor Higgins mean?",
        "question": "What does Professor Higgins mean? (Apa yang dimaksud oleh Profesor Higgins?)",
        "options": [
          "He will not be able to review the student's thesis at all.",
          "The student should come back tomorrow morning to meet him.",
          "He wants the student to cancel her lab class.",
          "The office door is broken and needs to be repaired."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'my door is open' bermakna 'saya tersedia untuk ditemui/berkonsultasi'. Profesor menyarankan mahasiswi tersebut datang besok pagi antara pukul 09.00 - 11.00."
      },
      {
        "id": "bank-l-toefl-u0-l3-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "Professor Vance, I got a completely unexpected reading during the titration step of today's chemistry experiment.",
            "translation": "Profesor Vance, saya mendapat angka yang sangat tak terduga pada tahap titrasi eksperimen kimia hari ini."
          },
          {
            "speaker": "woman",
            "label": "Profesor Vance",
            "avatar": "👩‍🏫",
            "text": "Did you calibrate the digital pH meter before starting? If the sensor isn't zeroed out, your measurements will be off.",
            "translation": "Apakah kamu mengkalibrasi pH meter digital sebelum mulai? Kalau sensornya belum dinolkan, pengukuranmu akan meleset."
          }
        ],
        "narrator": "What does the professor suggest was the cause of the problem?",
        "question": "What does the professor suggest was the cause of the problem? (Apa dugaan penyebab masalah menurut sang profesor?)",
        "options": [
          "The student used the wrong chemical solution.",
          "The equipment was not properly calibrated prior to testing.",
          "The experiment was conducted at the wrong temperature.",
          "The student arrived too late to complete the lab."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Pertanyaan retoris profesor ('Did you calibrate... if the sensor isn't zeroed out...') mengindikasikan bahwa instrumen digital kemungkinan belum dikalibrasi dengan benar sebelum eksperimen dimulai."
      },
      {
        "id": "bank-l-toefl-u0-l3-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Excuse me, Professor Daniels. Would you be willing to write a letter of recommendation for my graduate school application?",
            "translation": "Permisi, Profesor Daniels. Apakah Anda bersedia menuliskan surat rekomendasi untuk pendaftaran program pascasarjana saya?"
          },
          {
            "speaker": "man",
            "label": "Profesor Daniels",
            "avatar": "👨‍🏫",
            "text": "I'd be glad to. Just email me your current resume and a copy of your statement of purpose so I have some details to highlight.",
            "translation": "Tentu dengan senang hati. Tolong kirimkan resume terbaru dan salinan esai tujuan studi Anda ke email saya agar ada rincian yang bisa saya tonjolkan."
          }
        ],
        "narrator": "What must the student provide to the professor?",
        "question": "What must the student provide to the professor? (Apa yang harus diberikan mahasiswi kepada profesor?)",
        "options": [
          "Her undergraduate diploma and official transcripts.",
          "Her resume and statement of purpose.",
          "A draft of the recommendation letter itself.",
          "A list of graduate schools that rejected her."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Profesor menyatakan bersedia ('I'd be glad to') dengan syarat mahasiswi mengirimkan dokumen pendukung: 'your current resume' dan 'a copy of your statement of purpose'."
      },
      {
        "id": "bank-l-toefl-u0-l3-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I've sent out twenty applications for summer internships, but haven't received a single interview callback.",
            "translation": "Aku sudah mengirimkan dua puluh lamaran magang musim panas, tapi belum menerima panggilan wawancara satu pun."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "The university Career Center is hosting a resume polishing workshop tomorrow. Several recruiters will be reviewing drafts on the spot.",
            "translation": "Pusat Karir universitas mengadakan lokakarya pemolesan resume besok. Beberapa perekrut akan meninjau draf secara langsung."
          }
        ],
        "narrator": "Why does the woman mention the workshop?",
        "question": "Why does the woman mention the workshop? (Mengapa sang wanita menyebutkan lokakarya tersebut?)",
        "options": [
          "To suggest a place where the man can get help improving his job applications.",
          "To invite the man to conduct job interviews with her.",
          "To warn the man that internship positions have already closed.",
          "To explain why she is not looking for a summer internship."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Sang wanita menyebut lokakarya pemolesan resume ('resume polishing workshop') di Career Center sebagai saran konstruktif agar sang pria mendapatkan bimbingan langsung dari perekrut untuk memperbaiki berkas lamaran kerjanya."
      },
      {
        "id": "bank-l-toefl-d2-l3-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Professor, I'm reading about desert cacti. How do they perform photosynthesis during hot daylight hours without losing all their moisture?",
            "translation": "Profesor, saya membaca tentang kaktus gurun. Bagaimana mereka berfotosintesis di siang hari yang panas tanpa kehilangan seluruh kelembapannya?"
          },
          {
            "speaker": "man",
            "label": "Profesor Biologi",
            "avatar": "👨‍🏫",
            "text": "They utilize a specialized cycle called CAM photosynthesis. They keep their pores closed during the scorching day and only open them at night to capture carbon dioxide.",
            "translation": "Mereka menggunakan siklus khusus bernama fotosintesis CAM. Mereka menutup pori-porinya di siang hari yang terik dan hanya membukanya di malam hari untuk menangkap karbon dioksida."
          }
        ],
        "narrator": "How do desert plants conserve water while photosynthesizing?",
        "question": "How do desert plants conserve water while photosynthesizing? (Bagaimana tumbuhan gurun menghemat air saat fotosintesis?)",
        "options": [
          "By growing deeply submerged underground near aquifers.",
          "By keeping their pores closed during the day and capturing carbon dioxide at night.",
          "By shedding all of their stems during the dry season.",
          "By absorbing water directly from passing birds and insects."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Dosen menjelaskan adaptasi CAM: tumbuhan gurun menutup pori-porinya di siang hari yang terik ('closed during the scorching day') dan hanya membukanya di malam hari untuk menyerap CO2."
      },
      {
        "id": "bank-l-toefl-d2-l3-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "During our hiking field trip, we noticed enormous ridges of unsorted boulders and gravel piled up across the valley.",
            "translation": "Saat kuliah lapangan mendaki kemarin, kami melihat gundukan batu besar dan kerikil tak beraturan yang menumpuk di sepanjang lembah."
          },
          {
            "speaker": "woman",
            "label": "Asisten Dosen",
            "avatar": "👩‍🏫",
            "text": "Those are terminal moraines. As a massive glacier advances and subsequently retreats, it deposits all the pulverized rock material it pushed forward.",
            "translation": "Itu adalah endapan morain glasial. Saat gletser es raksasa bergerak maju dan kemudian menyusut mundur, gletser mengendapkan seluruh material batuan yang didorongnya."
          }
        ],
        "narrator": "What created the rock ridges observed by the student?",
        "question": "What created the rock ridges observed by the student? (Apa yang menciptakan gundukan batuan yang diamati mahasiswa tersebut?)",
        "options": [
          "Volcanic eruptions that occurred during the last century.",
          "The advance and retreat of a massive prehistoric glacier.",
          "Man-made excavation for highway construction.",
          "Strong desert winds depositing fine sand particles."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Asisten dosen menjelaskan bahwa gundukan batu tersebut adalah 'terminal moraines' yang diendapkan oleh pergerakan maju dan menyusutnya gletser es raksasa ('glacier advances and subsequently retreats')."
      },
      {
        "id": "bank-l-toefl-d2-l3-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Mahasiswi",
            "avatar": "👩",
            "text": "Is it true that the campus observatory is distributing specialized solar filters for this Thursday's partial eclipse?",
            "translation": "Apakah benar observatorium kampus membagikan filter matahari khusus untuk pengamatan gerhana parsial hari Kamis ini?"
          },
          {
            "speaker": "man",
            "label": "Petugas Observatorium",
            "avatar": "👨‍🔬",
            "text": "Yes, but remember that looking through standard sunglasses or camera lenses without an ISO-certified filter can cause irreversible retinal burns.",
            "translation": "Benar, tetapi ingat bahwa melihat melalui kacamata hitam biasa atau lensa kamera tanpa filter bersertifikat ISO dapat menyebabkan luka bakar retina permanen."
          }
        ],
        "narrator": "What warning does the man give about viewing the eclipse?",
        "question": "What warning does the man give about viewing the eclipse? (Peringatan apa yang diberikan pria tersebut mengenai pengamatan gerhana?)",
        "options": [
          "Regular sunglasses do not provide adequate eye protection against retinal injury.",
          "The observatory will be closed to undergraduate students.",
          "The solar eclipse can only be viewed from mountain peaks.",
          "Camera filters are too expensive for the astronomy department."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Pria memperingatkan bahwa kacamata hitam biasa ('standard sunglasses') tidak aman dan dapat menyebabkan luka bakar retina permanen ('irreversible retinal burns') tanpa filter bersertifikat ISO."
      },
      {
        "id": "bank-l-toefl-d2-l3-3",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Mahasiswa",
            "avatar": "👨",
            "text": "The documentary claimed that warming sea surface temperatures cause corals to expel their symbiotic algae.",
            "translation": "Film dokumenter itu menyatakan bahwa kenaikan suhu permukaan air laut menyebabkan karang mengeluarkan alga simbiosisnya."
          },
          {
            "speaker": "woman",
            "label": "Profesor Kelautan",
            "avatar": "👩‍🏫",
            "text": "Precisely. Without the microscopic algae providing nutrients and coloration, the coral skeleton turns stark white and faces starvation.",
            "translation": "Tepat sekali. Tanpa alga mikroskopis yang menyuplai nutrisi dan warna, rangka karang menjadi putih pucat dan terancam kelaparan."
          }
        ],
        "narrator": "What occurs when ocean temperatures rise significantly?",
        "question": "What occurs when ocean temperatures rise significantly? (Apa yang terjadi saat suhu laut meningkat drastis?)",
        "options": [
          "Corals multiply much faster across shallow waters.",
          "Corals expel their essential algae, turning white and risking starvation.",
          "Algae create protective shells that strengthen the coral reefs.",
          "Ocean currents cool down automatically to heal the reef."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'Coral bleaching' terjadi ketika karang mengeluarkan alga simbiosisnya ('expel symbiotic algae'), sehingga karang memutih dan menghadapi kematian/kelaparan ('faces starvation')."
      },
      {
        "id": "bank-l-toefl-list-extra2-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "Today we will examine glacial deposition. As continental glaciers advance, they act like colossal bulldozers, carving rock and gathering massive debris known as till.",
            "translation": "Hari ini kita akan mengulas pengendapan glasial. Saat gletser benua bergerak maju, mereka bertindak seperti buldoser raksasa, mengikis batu dan mengumpulkan serpihan masif yang disebut till."
          },
          {
            "speaker": "woman",
            "label": "Mahasiswi (Wanita)",
            "avatar": "👩",
            "text": "So when the ice retreats due to warming, that accumulated unsorted sediment forms terminal moraines that mark the glacier's furthest boundary?",
            "translation": "Jadi ketika es mencair mundur akibat pemanasan, sedimen tak tersortir yang terakumulasi itu membentuk moraine terminal yang menandai batas terjauh pergerakan gletser?"
          },
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "Precisely, Sarah! Long Island and Cape Cod are prime geographic examples of terminal moraines deposited during the last Ice Age.",
            "translation": "Tepat sekali, Sarah! Long Island dan Cape Cod adalah contoh geografis utama dari moraine terminal yang terendapkan selama Zaman Es terakhir."
          }
        ],
        "narrator": "What is the primary function of a terminal moraine in geological studies?",
        "question": "What does a terminal moraine indicate to geologists? (Apa yang ditunjukkan moraine terminal kepada ahli geologi?)",
        "options": [
          "The fastest speed at which liquid water flows under ice sheets.",
          "The maximum extent or furthest boundary reached by an advancing glacier.",
          "The exact chemical salinity of ancient ocean basins.",
          "The presence of active volcanic magma chambers below the ice."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Percakapan menegaskan bahwa terminal moraine 'marks the glacier's furthest boundary' (batas terjauh yang dicapai gletser sebelum mencair mundur)."
      },
      {
        "id": "bank-l-toefl-list-extra2-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Profesor (Wanita)",
            "avatar": "👩",
            "text": "Ecologists frequently describe coastal marshes and wetlands as nature's kidneys. Why do you think that physiological metaphor is so fitting?",
            "translation": "Para ahli ekologi sering menggambarkan rawa pesisir dan lahan basah sebagai ginjal alami. Menurut kalian mengapa metafora fisiologis itu sangat tepat?"
          },
          {
            "speaker": "man",
            "label": "Mahasiswa (Pria)",
            "avatar": "👨",
            "text": "Because wetland vegetation slows down surface runoff, allowing dense root networks to trap suspended sediments and absorb agricultural excess nitrates before they reach open waters.",
            "translation": "Karena vegetasi lahan basah memperlambat aliran air permukaan, memungkinkan jaringan akar lebat memerangkap sedimen tersuspensi dan menyerap kelebihan nitrat pertanian sebelum mencapai perairan terbuka."
          }
        ],
        "narrator": "Why are wetlands compared to human kidneys?",
        "question": "Why are wetlands compared to kidneys? (Mengapa lahan basah diibaratkan ginjal?)",
        "options": [
          "They regulate blood pressure in aquatic mammals.",
          "They filter out harmful pollutants, toxins, and excess nutrients from runoff water.",
          "They store vast quantities of drinking water during extreme droughts.",
          "They produce vital enzymes required by freshwater fish."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Analogi 'nature's kidneys' digunakan karena lahan basah menyaring sedimen dan menyerap zat pencemar beracun/nitrat dari air limpasan."
      },
      {
        "id": "bank-l-toefl-list-extra2-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "How do astronomers detect planets orbiting stars hundreds of light-years away when the planets themselves emit virtually no visible light?",
            "translation": "Bagaimana para astronom mendeteksi planet yang mengorbit bintang ratusan tahun cahaya jauhnya ketika planet itu sendiri hampir tidak memancarkan cahaya tampak?"
          },
          {
            "speaker": "woman",
            "label": "Mahasiswi (Wanita)",
            "avatar": "👩",
            "text": "By observing the transit method! When an exoplanet crosses directly between its host star and our telescope, it causes a tiny, periodic dip in the star's measured brightness.",
            "translation": "Dengan metode transit! Ketika sebuah eksoplanet melintas tepat di antara bintang induknya dan teleskop kita, ia menyebabkan penurunan kecil yang berkala pada kecerahan bintang yang terukur."
          }
        ],
        "narrator": "How does the transit method detect exoplanets?",
        "question": "What phenomenon indicates the presence of an exoplanet in the transit method?",
        "options": [
          "A sudden explosion of cosmic radio frequencies from the star.",
          "A periodic slight decrease in the observed brightness of the star.",
          "A visible change in the chemical color spectrum of neighboring galaxies.",
          "A measurable gravitational pull that pulls telescopes closer to the planet."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Mahasiswi menjelaskan bahwa metode transit bekerja saat eksoplanet melintas dan menimbulkan 'tiny, periodic dip in the star's measured brightness' (penurunan kecil kecerahan cahaya bintang)."
      },
      {
        "id": "bank-l-toefl-list-extra4-0",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "Prior to 1977, marine biologists assumed that all oceanic life ultimately depended on photosynthetic sunlight. However, the discovery of hydrothermal vents at the Galapagos Rift radically overturned that doctrine.",
            "translation": "Sebelum tahun 1977, para ahli biologi laut berasumsi bahwa semua kehidupan laut bergantung pada sinar matahari fotosintesis. Namun, penemuan lubang hidrotermal di Celah Galapagos membalikkan doktrin tersebut secara radikal."
          },
          {
            "speaker": "woman",
            "label": "Mahasiswi (Wanita)",
            "avatar": "👩",
            "text": "Because vent ecosystems thrive in perpetual pitch darkness, utilizing chemosynthetic bacteria that metabolize toxic hydrogen sulfide spewing from volcanic fissures as their primary energy engine?",
            "translation": "Karena ekosistem lubang hidrotermal berkembang dalam kegelapan abadi, memanfaatkan bakteri kemosintetik yang memetabolisme hidrogen sulfida beracun dari celah vulkanik sebagai mesin energi utama mereka?"
          },
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "Spot on! Giant tube worms and vent crabs form an entire food pyramid completely decoupled from solar photosynthesis.",
            "translation": "Tepat sekali! Cacing tabung raksasa dan kepiting ventilasi membentuk seluruh piramida makanan yang terlepas sama sekali dari fotosintesis matahari."
          }
        ],
        "narrator": "What biological process powers hydrothermal vent ecosystems?",
        "question": "What biological process powers hydrothermal vent ecosystems?",
        "options": [
          "Solar photosynthesis from surface algae.",
          "Bacterial chemosynthesis using volcanic hydrogen sulfide.",
          "Nuclear radiation absorption by tube worms.",
          "Atmospheric nitrogen fixation."
        ],
        "answer": 1,
        "explanation": "💡 Analisis Kuliah Sains: Organisme lubang hidrotermal hidup dari kemosintesis bakteri ('chemosynthetic bacteria that metabolize toxic hydrogen sulfide') tanpa sinar matahari."
      },
      {
        "id": "bank-l-toefl-list-extra4-1",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Profesor (Wanita)",
            "avatar": "👩",
            "text": "When human societies transitioned from nomadic hunter-gatherer bands to sedentary agricultural settlements around 10,000 BCE, what was the most profound sociological byproduct?",
            "translation": "Ketika masyarakat manusia bertransisi dari kelompok pemburu-peramu nomaden ke permukiman pertanian menetap sekitar 10.000 SM, apa konsekuensi sosiologis yang paling mendalam?"
          },
          {
            "speaker": "man",
            "label": "Mahasiswa (Pria)",
            "avatar": "👨",
            "text": "Food surpluses allowed for occupational specialization. For the first time, individuals could become full-time artisans, priests, and administrators rather than everyone needing to forage for sustenance.",
            "translation": "Surplus pangan memungkinkan spesialisasi pekerjaan. Untuk pertama kalinya, individu bisa menjadi pengrajin purnawaktu, pendeta, dan administrator alih-alih semua orang harus mencari makan."
          }
        ],
        "narrator": "According to the discussion, how did farming transform social structures?",
        "question": "How did agriculture transform social structures in ancient civilizations?",
        "options": [
          "It forced everyone to become nomadic seasonal foragers.",
          "Food surpluses enabled the emergence of occupational specialization and complex administration.",
          "It eliminated social classes and property ownership.",
          "It caused human populations to decline sharply."
        ],
        "answer": 1,
        "explanation": "💡 Analisis Antropologi: Mahasiswa menjelaskan bahwa surplus pangan pertanian memicu 'occupational specialization' (spesialisasi profesi seperti pengrajin dan administrator)."
      },
      {
        "id": "bank-l-toefl-list-extra4-2",
        "section": "listening",
        "part": "Part A & B: Campus Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Profesor (Pria)",
            "avatar": "👨",
            "text": "Consider the Upper Paleolithic cave paintings of Lascaux in southwestern France. How did ancient artists achieve such vibrant ochre reds and velvety charcoal blacks deep in subterranean caves without daylight?",
            "translation": "Perhatikan lukisan gua Paleolitik Atas di Lascaux di Prancis barat daya. Bagaimana para seniman purba menghasilkan warna merah oker menyala dan hitam arang yang pekat jauh di dalam gua bawah tanah tanpa sinar matahari?"
          },
          {
            "speaker": "woman",
            "label": "Mahasiswi (Wanita)",
            "avatar": "👩",
            "text": "They ground iron oxide minerals and charcoal into fine powder, mixed them with animal fat binders, and painted by the flickering illumination of crude tallow lamps made from hollowed stones.",
            "translation": "Mereka menumbuk mineral besi oksida dan arang menjadi bubuk halus, mencampurnya dengan perekat lemak hewani, dan melukis dengan penerangan lampu lemak dari batu berongga."
          }
        ],
        "narrator": "What technique did prehistoric artists use to create cave pigments?",
        "question": "What method did prehistoric painters employ at Lascaux?",
        "options": [
          "Imported synthetic oil paints from Mediterranean traders.",
          "Grinding natural minerals like iron oxide and charcoal and binding them with animal fat.",
          "Using chemical dyes extracted from tropical rainforest flowers.",
          "Carving stone walls using iron chisels without applying pigment."
        ],
        "answer": 1,
        "explanation": "💡 Analisis Sejarah Seni: Seniman gua Lascaux menumbuk mineral alami (besi oksida dan arang) yang dicampur lemak hewan ('ground iron oxide minerals and charcoal mixed with animal fat')."
      },
      {
        "id": "bank-l-53",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are there any parking spaces left near the science building? I've been circling the lot for twenty minutes."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Good luck with that! Unless you arrive before eight in the morning, you'll have to park at the football stadium and take the campus shuttle."
          }
        ],
        "narrator": "What does the woman imply about parking near the science building?",
        "question": "What does the woman imply about parking near the science building?",
        "options": [
          "The parking lot is closed for renovations today.",
          "Spaces are virtually impossible to find after eight in the morning.",
          "The shuttle bus from the stadium is currently out of service.",
          "The man should purchase a special permit to park there."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'Unless you arrive before eight... you'll have to park at the stadium' mengindikasikan bahwa setelah jam 8 pagi, tempat parkir di dekat gedung sains hampir mustahil ditemukan."
      },
      {
        "id": "bank-l-54",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I can't believe the campus bookstore charges ninety dollars for a used calculus workbook!"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Why don't you check whether an open-source digital edition is listed on the course syllabus?"
          }
        ],
        "narrator": "What does the man suggest the woman do?",
        "question": "What does the man suggest the woman do?",
        "options": [
          "Complain to the bookstore manager about high textbook prices.",
          "See if a free or digital version of the workbook is authorized.",
          "Borrow his copy of the calculus book for the semester.",
          "Drop the calculus course before the add-drop deadline."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Frasa saran 'Why don't you check whether an open-source digital edition is listed...' berarti pria tersebut menyarankan wanita mengecek edisi digital terbuka/gratis di silabus kuliah."
      },
      {
        "id": "bank-l-55",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The registrar's office placed a registration hold on my account because of an unpaid library fee from last semester."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "If I were in your shoes, I'd settle that fine online immediately before course enrollment closes at five."
          }
        ],
        "narrator": "What does the woman advise the man to do?",
        "question": "What does the woman advise the man to do?",
        "options": [
          "Pay the outstanding fine right away to clear his registration.",
          "Appeal the library fine at the student affairs office.",
          "Wait until tomorrow morning to register for his classes.",
          "Return the overdue library books in person."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: 'If I were in your shoes, I'd settle that fine online immediately...' menunjukkan saran mendesak untuk membayar denda perpustakaan tersebut sesegera mungkin secara daring."
      },
      {
        "id": "bank-l-56",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Has Professor Jenkins approved your topic for the senior thesis yet?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Not quite. He felt my proposal on urban biodiversity was too broad and advised me to narrow the scope to migratory birds in city parks."
          }
        ],
        "narrator": "What did the professor recommend regarding the man's thesis?",
        "question": "What did the professor recommend regarding the man's thesis?",
        "options": [
          "Abandon the topic of biodiversity completely.",
          "Focus his research on a more specific aspect of urban wildlife.",
          "Submit the original proposal to a different faculty advisor.",
          "Conduct field interviews with municipal urban planners."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Frasa 'narrow the scope to migratory birds' berarti mempersempit fokus penelitian dari topik yang terlalu luas menjadi aspek yang jauh lebih spesifik."
      },
      {
        "id": "bank-l-57",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I'm having a hard time balancing a twenty-hour work week with four upper-level chemistry courses."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "You might want to drop by the academic counseling center; they offer workshops on effective time management."
          }
        ],
        "narrator": "What does the woman recommend the man do?",
        "question": "What does the woman recommend the man do?",
        "options": [
          "Resign from his off-campus job immediately.",
          "Drop two of his chemistry courses this term.",
          "Seek assistance from university academic counselors.",
          "Study together with his chemistry lab partners."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: 'drop by the academic counseling center' berarti mendatangi pusat bimbingan akademik kampus untuk mendapatkan bantuan pengelolaan waktu."
      },
      {
        "id": "bank-l-58",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Do you know if the multimedia lab is open during spring break?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "It is, but only on reduced hours from ten in the morning until two in the afternoon."
          }
        ],
        "narrator": "What does the man say about the multimedia lab?",
        "question": "What does the man say about the multimedia lab?",
        "options": [
          "It will remain closed throughout the entire break.",
          "It operates on a restricted schedule during spring break.",
          "It is reserved exclusively for graduate students.",
          "It opens earlier in the morning than usual."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'only on reduced hours from ten... to two' menunjukkan bahwa lab multimedia beroperasi dengan jam operasional yang terbatas selama liburan."
      },
      {
        "id": "bank-l-59",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Could you lend me your notes from yesterday's art history lecture? I had an emergency dental appointment."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I would, but Professor Tanaka uploaded the entire lecture recording and slide deck to the online portal."
          }
        ],
        "narrator": "What does the woman imply?",
        "question": "What does the woman imply?",
        "options": [
          "She lost her notes on the way to the dental clinic.",
          "The man can access the lecture material directly on the portal.",
          "Professor Tanaka prohibited sharing class notes with absent students.",
          "She failed to attend yesterday's lecture as well."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Wanita menginformasikan bahwa dosen sudah mengunggah seluruh rekaman dan materi ke portal online, sehingga mahasiswa bisa mengaksesnya langsung tanpa meminjam catatan fisik."
      },
      {
        "id": "bank-l-60",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I thought the deadline for the summer research fellowship was midnight tonight, but the portal says applications are closed!"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Check the fine print; applications had to be submitted by noon Eastern Standard Time, not midnight."
          }
        ],
        "narrator": "What problem does the woman have?",
        "question": "What problem does the woman have?",
        "options": [
          "She missed the deadline due to a misunderstanding of the time cutoff.",
          "The fellowship application server crashed before midnight.",
          "She forgot to attach her letters of recommendation.",
          "The fellowship program was cancelled by the department."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Wanita salah mengira batas akhir adalah tengah malam (midnight), padahal aturannya adalah jam 12 siang (noon EST), sehingga ia melewatkan tenggat waktu pengumpulan."
      },
      {
        "id": "bank-l-61",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Are you attending the guest speaker's presentation on artificial intelligence this evening?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I wouldn't miss it for the world! Dr. Vance is one of the leading pioneers in neural network architectures."
          }
        ],
        "narrator": "What does the woman mean?",
        "question": "What does the woman mean?",
        "options": [
          "She will definitely attend the lecture because of the speaker's reputation.",
          "She travels around the world to attend AI conferences.",
          "She is too busy to attend the presentation tonight.",
          "She doubts that Dr. Vance's presentation will be informative."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Idiom 'I wouldn't miss it for the world!' adalah penegasan bahwa pembicara pasti akan hadir tanpa ragu karena sangat menghormati reputasi pembicara tamu."
      },
      {
        "id": "bank-l-62",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I can't seem to get the printer in the basement computer lab to work. It keeps showing a paper jam error."
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Don't bother trying to fix it yourself; the lab technician stepped out to grab replacement rollers and should be back in ten minutes."
          }
        ],
        "narrator": "What does the man suggest the woman do?",
        "question": "What does the man suggest the woman do?",
        "options": [
          "Try removing the jammed paper manually.",
          "Wait for the technician to return and resolve the issue.",
          "Purchase her own printer for her dormitory room.",
          "Print her documents at the university administration office."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'Don't bother trying to fix it yourself... technician should be back in ten minutes' menyarankan agar wanita menunggu teknisi yang sebentar lagi kembali daripada mencoba memperbaikinya sendiri."
      },
      {
        "id": "bank-l-63",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The meteorology club is hosting a stargazing night at the observatory tomorrow evening."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Unless the weather forecast changes drastically, thick cloud cover will obscure the entire night sky."
          }
        ],
        "narrator": "What does the woman imply about the stargazing event?",
        "question": "What does the woman imply about the stargazing event?",
        "options": [
          "The observatory will be closed for equipment maintenance.",
          "Poor weather conditions will likely hinder astronomical viewing.",
          "She prefers to study indoor meteorology rather than astronomy.",
          "The event has already been rescheduled for next weekend."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'thick cloud cover will obscure the entire night sky' menunjukkan bahwa awan tebal akan menghalangi pengamatan bintang di observatorium."
      },
      {
        "id": "bank-l-64",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I heard you applied for an internship at the city environmental protection agency. Have they reached out yet?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Actually, their human resources director called this morning to schedule a panel interview for Thursday!"
          }
        ],
        "narrator": "What does the man tell the woman?",
        "question": "What does the man tell the woman?",
        "options": [
          "He was rejected by the agency.",
          "He has been invited to participate in an interview later this week.",
          "He decided to withdraw his application.",
          "He accepted a full-time position with the city."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Pria mengatakan bahwa pihak HR menelepon pagi ini untuk menjadwalkan wawancara panel pada hari Kamis."
      },
      {
        "id": "bank-l-65",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "Do you want to grab lunch at the student union cafeteria after our political science seminar?"
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'd love to, but I packed a lunch from home today to save money for upcoming textbook expenses."
          }
        ],
        "narrator": "Why does the woman decline the man's invitation?",
        "question": "Why does the woman decline the man's invitation?",
        "options": [
          "She dislikes the food served at the union cafeteria.",
          "She brought her own food to economize for academic supplies.",
          "She has another class scheduled right after the seminar.",
          "She already had lunch before arriving on campus."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'I packed a lunch from home today to save money for upcoming textbook expenses' menjelaskan bahwa wanita membawa bekal sendiri demi menghemat uang buku."
      },
      {
        "id": "bank-l-66",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Are you almost finished with your contribution to our group marketing presentation?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I just need to compile the customer survey metrics into a final bar chart, and then I'll email the entire deck to everyone."
          }
        ],
        "narrator": "What remaining task does the man have?",
        "question": "What remaining task does the man have?",
        "options": [
          "Conduct additional customer survey interviews.",
          "Convert survey statistics into a visual graphical chart.",
          "Print color handouts for the seminar audience.",
          "Present his findings directly to the marketing professor."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'compile the customer survey metrics into a final bar chart' adalah tugas terakhir yang tersisa sebelum mengirimkan seluruh slide presentasi."
      },
      {
        "id": "bank-l-67",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "I forgot my student identification card at home, and I need to check out two reference books for tonight's assignment."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "You can generate a temporary digital barcode using the university mobile application on your smartphone."
          }
        ],
        "narrator": "How does the woman solve the man's dilemma?",
        "question": "How does the woman solve the man's dilemma?",
        "options": [
          "By offering to lend him her own student identification card.",
          "By explaining that the library does not require identification.",
          "By advising him to use a mobile app barcode as a temporary substitute.",
          "By suggesting he return home before the library closes."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Wanita memberikan solusi berupa penggunaan barcode digital sementara melalui aplikasi ponsel kampus sebagai pengganti kartu fisik yang tertinggal."
      },
      {
        "id": "bank-l-68",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Did you manage to understand the proof for the Pythagorean theorem in advanced geometry?"
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "It went right over my head during lecture, but our teaching assistant walked me through it step-by-step during office hours."
          }
        ],
        "narrator": "What does the man mean?",
        "question": "What does the man mean?",
        "options": [
          "He understood the concept immediately in class.",
          "He finally grasped the proof after receiving assistance from the TA.",
          "He skipped both the lecture and the office hours.",
          "The teaching assistant was unable to clarify the mathematical proof."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Idiom 'went right over my head' berarti awalnya tidak paham sama sekali, namun setelah dibimbing oleh asisten dosen (TA) langkah demi langkah, pria tersebut akhirnya mengerti."
      },
      {
        "id": "bank-l-69",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "The dormitory heating system seems to be malfunctioning again; my radiator is completely cold."
          },
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "Submit an emergency maintenance ticket through the housing portal right away; they usually send a repair technician within an hour."
          }
        ],
        "narrator": "What does the woman recommend?",
        "question": "What does the woman recommend?",
        "options": [
          "Buying a portable space heater for the room.",
          "Filing an urgent repair request through the student housing system.",
          "Relocating to an empty room on a warmer floor.",
          "Waiting until tomorrow morning to notify housing authorities."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: 'Submit an emergency maintenance ticket through the housing portal right away' adalah saran untuk segera melaporkan keluhan fasilitas pemanas lewat portal perumahan kampus."
      },
      {
        "id": "bank-l-70",
        "section": "listening",
        "part": "Part A: Short Conversation",
        "dialogue": [
          {
            "speaker": "woman",
            "label": "Wanita",
            "avatar": "👩",
            "text": "I'm dreading the organic chemistry cumulative final exam next Monday."
          },
          {
            "speaker": "man",
            "label": "Pria",
            "avatar": "👨",
            "text": "You've aced every weekly quiz and lab report all semester; you're more prepared than you think!"
          }
        ],
        "narrator": "What is the man doing?",
        "question": "What is the man doing?",
        "options": [
          "Encouraging the woman and boosting her confidence.",
          "Warning the woman about the exam's extreme difficulty.",
          "Asking the woman to tutor him for the chemistry final.",
          "Criticizing the woman's study habits throughout the semester."
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Pria memuji performa wanita ('aced every quiz... more prepared than you think') untuk menenangkan kecemasan dan membangkitkan rasa percaya dirinya menjelang ujian akhir."
      }
    ],
    "structure": [
      {
        "id": "ts-q11",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "was electricity harnessed",
          "electricity was harnessed",
          "harnessed electricity was",
          "when electricity was harnessed"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Pola Inversi Negatif (Negative Inversion). Jika sebuah kalimat diawali dengan frasa negatif atau restriktif seperti 'Not until...', maka klausa utama wajib mengalami pembalikan urutan (Auxiliary Verb + Subject): 'was electricity harnessed'."
      },
      {
        "id": "ts-q12",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "is",
          "are",
          "being",
          "to be"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesesuaian Subjek & Kata Kerja (Subject-Verb Agreement). Inti subjek dari kalimat ini adalah kata benda tunggal 'The behavior' (bukan 'molecules' yang berada di dalam frasa preposisi), sehingga memerlukan kata kerja tunggal 'is'."
      },
      {
        "id": "ts-q13",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "forming",
          "formed",
          "are formed",
          "which formed by"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Klausa Relatif Tereduksi (Reduced Relative Clause). Kalimat sudah memiliki predikat utama 'study'. Frasa setelah 'rocks' berasal dari bentuk pasif 'rocks [which were] formed beneath...', sehingga disederhanakan menjadi past participle (V3) 'formed'."
      },
      {
        "id": "ts-q14",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "and also",
          "as well as",
          "but also",
          "or also"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Konjungsi Berpasangan (Correlative Conjunction). Pasangan gramatikal baku untuk 'not only' adalah 'but also' ('not only X but also Y')."
      },
      {
        "id": "ts-q15",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "revises",
          "revise",
          "revised",
          "will revise"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Bentuk Subjunctive Mandatif. Setelah kata kerja rekomendasi atau tuntutan seperti 'recommend that', 'demand that', 'require that', kata kerja klausa berikutnya wajib menggunakan bentuk kata kerja dasar (base form / bare infinitive), yaitu 'revise' (tanpa akhiran -s)."
      },
      {
        "id": "ts-q16",
        "section": "structure",
        "part": "Part B: Error Identification",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "(A) iron is",
          "(B) rarely find",
          "(C) because",
          "(D) with"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kesalahan bentuk pasif (Passive Voice). Kalimat 'is rarely find' harus menggunakan bentuk Past Participle (V3), yaitu 'is rarely found' (jarang ditemukan)."
      },
      {
        "id": "ts-q17",
        "section": "structure",
        "part": "Part B: Error Identification",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "(A) conveys",
          "(B) the direction",
          "(C) abundant",
          "(D) to"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Struktur Paralel (Parallel Structure). Dalam daftar 'direction, distance, and...', semua elemen harus berjenis kata benda (noun). Kata 'abundant' adalah kata sifat (adjective), sehingga harus diubah menjadi kata benda 'abundance'."
      },
      {
        "id": "ts-q18",
        "section": "structure",
        "part": "Part B: Error Identification",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "(A) Despite of",
          "(B) in",
          "(C) remain",
          "(D) to forecast"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesalahan preposisi ganda. Kata 'Despite' tidak pernah diikuti kata 'of'. Bentuk yang benar adalah 'Despite' saja, atau jika ingin memakai 'of' harus menggunakan frasa 'In spite of'."
      },
      {
        "id": "ts-q19",
        "section": "structure",
        "part": "Part B: Error Identification",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "(A) Each of",
          "(B) were",
          "(C) under",
          "(D) licensed"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Subjek kata ganti 'Each' selalu dianggap tunggal (singular). Oleh karena itu, kata kerja bantu 'were' salah dan seharusnya adalah 'was conducted'."
      },
      {
        "id": "ts-q20",
        "section": "structure",
        "part": "Part B: Error Identification",
        "prompt": "Pilih jawaban yang paling tepat:",
        "options": [
          "(A) essential",
          "(B) for",
          "(C) protect",
          "(D) supporting"
        ],
        "answer": 3,
        "explanation": "💡 Analisis TOEFL: Struktur Paralel Kata Kerja. Deretan predikat dalam kalimat ini adalah 'provide...', 'protect...', dan seharusnya 'support...' (bentuk kata kerja dasar jamak), bukan bentuk gerund '-ing' ('supporting')."
      },
      {
        "id": "bank-sq-toefl-fast3-l4-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Structure: \"_________ the dominant architectural style of Medieval European cathedrals for over three centuries.\"",
        "options": [
          "Gothic was",
          "That Gothic was",
          "Although Gothic was",
          "The Gothic style being"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kalimat belum memiliki Subjek maupun Verb utama. Opsi A 'Gothic was' langsung melengkapi [S + V] secara tepat tanpa konektor yang menggantung."
      },
      {
        "id": "bank-sq-toefl-fast3-l4-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Structure: \"The telescope at Mount Palomar has a 200-inch mirror, _________ astronomers to observe distant galaxies with unprecedented clarity.\"",
        "options": [
          "enables",
          "which enables",
          "and it enables",
          "that it enables"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kalimat pertama sudah memiliki S+V ('The telescope has'). Untuk menyambung klausa kedua dengan Verb 'enables', dibutuhkan konektor relatif 'which'."
      },
      {
        "id": "bank-sq-toefl-fast3-l4-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Structure: \"A thick layer of blubber beneath the skin _________ marine mammals from hypothermia in arctic waters.\"",
        "options": [
          "protects",
          "protecting",
          "protection",
          "is protected"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Subjek kalimat adalah 'A thick layer' (tunggal). Frasa 'of blubber beneath the skin' hanyalah keterangan preposisi. Kalimat butuh Verb aktif tunggal 'protects'."
      },
      {
        "id": "bank-sq-toefl-fast3-l5-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"The research team conducted extensive field experiments, analyzed the raw data, and [publishing] their findings in an international scientific journal.\"",
        "options": [
          "conducted",
          "extensive",
          "publishing",
          "findings"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Melanggar hukum Paralelisme! Deret kata kerja lampau: 'conducted' (V2), 'analyzed' (V2), and... maka bentuk ketiga harus setara: 'published' (V2), bukan 'publishing'."
      },
      {
        "id": "bank-sq-toefl-fast3-l5-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"The number of endangered bird species in the southern wetlands [have increased] dramatically over the past five years.\"",
        "options": [
          "endangered",
          "have increased",
          "dramatically",
          "over"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Frasa 'The number of...' selalu diikuti Verb tunggal ('has increased'), berbeda dengan 'A number of...' yang bermakna jamak."
      },
      {
        "id": "bank-sq-toefl-fast3-l5-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"Geothermal energy systems provide an [extreme] reliable source of continuous power for residential communities.\"",
        "options": [
          "provide",
          "extreme",
          "continuous",
          "for"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kata 'reliable' adalah kata sifat (Adjective). Untuk menerangkan kata sifat, kita memerlukan Adverb ('extremely reliable'), bukan Adjective 'extreme'."
      },
      {
        "id": "bank-s-toefl-fast3-l6-0",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Neither the professor nor his assistants ___________ able to locate the archival documents yesterday.",
        "options": [
          "was",
          "were",
          "is",
          "are"
        ],
        "answer": 1,
        "explanation": "💡 Aturan 'Neither... nor...': Verb mengikuti subjek terdekat. Karena 'his assistants' jamak dan waktunya lampau ('yesterday'), bentuk yang benar adalah 'were'."
      },
      {
        "id": "bank-s-toefl-fast3-l6-1",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Not only ___________ the final exam with distinction, but she also earned a full graduate scholarship.",
        "options": [
          "she passed",
          "did she pass",
          "passed she",
          "she had passed"
        ],
        "answer": 1,
        "explanation": "💡 Rumus Inversi: Ketika kalimat diawali kata negatif 'Not only', pola Subjek dan Kata Bantu dibalik menjadi 'did she pass'."
      },
      {
        "id": "bank-s-toefl-fast3-l6-2",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The architectural monument, ___________ during the fourteenth century, still attracts millions of tourists annually.",
        "options": [
          "which built",
          "built",
          "it was built",
          "was building"
        ],
        "answer": 1,
        "explanation": "💡 Reduced Relative Clause: Bentuk pasif yang disederhanakan dari 'which was built' cukup disingkat menjadi participle 'built'."
      },
      {
        "id": "bank-s-toefl-fast3-l6-3",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The committee recommended that the proposal ___________ submitted before the upcoming fiscal audit.",
        "options": [
          "is",
          "be",
          "was",
          "being"
        ],
        "answer": 1,
        "explanation": "💡 Subjunctive Mood: Kata kerja saran seperti 'recommend, suggest, insist that...' selalu mewajibkan bentuk infinitive dasar tanpa perubahan: 'be submitted'."
      },
      {
        "id": "bank-s-toefl-fast3-l6-4",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The Pacific ocean trench is substantially ___________ than any geological formation found on the continental landmass.",
        "options": [
          "deep",
          "deeper",
          "deepest",
          "more deep"
        ],
        "answer": 1,
        "explanation": "💡 Komparatif: Keberadaan kata 'than' menandakan perbandingan komparatif kata sifat 1 suku kata: 'deep' menjadi 'deeper'."
      },
      {
        "id": "bank-sq-toefl-hack-l2-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The collection of rare Mesoamerican artifacts ________ on display at the national museum.\" — Manakah pilihan yang melengkapi kalimat?",
        "options": [
          "is",
          "are",
          "being",
          "were"
        ],
        "answer": 0,
        "explanation": "💡 Rumus S+V: Subject kalimat ini adalah kata tunggal \"The collection\" (bukan artifacts!). Prepositional phrase \"of rare Mesoamerican artifacts\" hanya pengecoh. Subject tunggal butuh Verb tunggal (\"is\")."
      },
      {
        "id": "bank-sq-toefl-hack-l2-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________, Thomas Edison invented the phonograph and the incandescent light bulb.\" — Manakah pengisi posisi sebelum koma?",
        "options": [
          "A prolific American inventor",
          "He was a prolific American inventor",
          "Because was a prolific American inventor",
          "Inventor was prolific American"
        ],
        "answer": 0,
        "explanation": "💡 Rumus Appositive: Frasa sebelum koma menjelaskan Subject \"Thomas Edison\". Tidak boleh ada Subject atau Verb ganda di dalam appositive (jangan pilih opsi B yang ada \"He was\")."
      },
      {
        "id": "bank-sq-toefl-hack-l2-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Although the hurricane struck the coastal barrier islands with immense fury, the central control tower ________ intact.\" — Lengkapi kalimat:",
        "options": [
          "remained",
          "remaining",
          "was remaining to",
          "it remained"
        ],
        "answer": 0,
        "explanation": "💡 Klausa Utama butuh Main Verb: Klausa anak dipimpin \"Although...\". Klausa utama memiliki Subject \"the central control tower\", sehingga hanya butuh Verb lampau murni: \"remained\". Hindari \"it remained\" karena akan menghasilkan Double Subject!"
      },
      {
        "id": "bank-sq-toefl-hack-l2-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ in the outer solar system, Pluto possesses a highly eccentric orbit.\" — Pilihan terbaik:",
        "options": [
          "Located",
          "It is located",
          "Locating it",
          "Location"
        ],
        "answer": 0,
        "explanation": "💡 Participle Phrase: \"Located in the outer solar system\" adalah reduced adjective clause pasif dari \"Which is located...\". Opsi B salah karena menghasilkan double subject tanpa konektor."
      },
      {
        "id": "bank-sq-toefl-hack-l2-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Neither the lead researcher nor his laboratory assistants ________ able to reproduce the experimental results.\" — Pilihan verb:",
        "options": [
          "were",
          "was",
          "is",
          "being"
        ],
        "answer": 0,
        "explanation": "💡 Aturan Neither... Nor: Verb mengikuti subjek yang PALING DEKAT dengan verb. Subjek terdekat adalah jamak (\"his laboratory assistants\"), maka verb harus jamak lampau (\"were\")."
      },
      {
        "id": "bank-sq-toefl-hack-l2-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Every citizen in the democratic nation ________ the constitutional right to vote.\" — Pilihan:",
        "options": [
          "has",
          "have",
          "having",
          "are having"
        ],
        "answer": 0,
        "explanation": "💡 Rumus Indefinite Pronoun: Kata \"Every\" dan \"Each\" selalu diikuti kata benda tunggal dan MEMBUTUHKAN VERB TUNGGAL (\"has\", bukan \"have\")."
      },
      {
        "id": "bank-sq-toefl-hack-l2-6",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Not only the director ________ also the board members supported the financial reform.\" — Lengkapi konektor korelatif:",
        "options": [
          "but",
          "and",
          "or",
          "with"
        ],
        "answer": 0,
        "explanation": "💡 Pasangan Korelatif Wajib: Pasangan resmi dari \"Not only...\" adalah SELALU \"but also...\"! Tidak boleh dipasangkan dengan \"and\" atau \"or\"."
      },
      {
        "id": "bank-sq-toefl-d3-l2-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The financial audit was thorough, ________ no major discrepancies were discovered.\" — Manakah Coordinate Connector (FANBOYS) yang tepat secara logika makna?",
        "options": [
          "yet",
          "so",
          "or",
          "for"
        ],
        "answer": 0,
        "explanation": "💡 Makna Kontras FANBOYS: Audit sangat mendalam, NAMUN (yet / but) tidak ditemukan kejanggalan besar. \"Yet\" berfungsi sebagai konektor kontras yang setara dengan \"but\"."
      },
      {
        "id": "bank-sq-toefl-d3-l2-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ the geothermal power plant was expensive to construct, it provides remarkably cheap electricity in the long run.\" — Konektor adverbial:",
        "options": [
          "Although",
          "Because",
          "Despite",
          "In spite of"
        ],
        "answer": 0,
        "explanation": "💡 Connector vs Preposition: Diikuti klausa lengkap (Subject + Verb: \"the plant was...\"), maka wajib gunakan CONJUNCTION (\"Although\"). \"Despite\" dan \"In spite of\" hanya diikuti Noun Phrase!"
      },
      {
        "id": "bank-sq-toefl-d3-l2-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The committee must decide ________ the surplus funds will be allocated to infrastructure or academic scholarships.\" — Noun clause connector:",
        "options": [
          "whether",
          "that",
          "which",
          "what"
        ],
        "answer": 0,
        "explanation": "💡 Pasangan Whether... Or: Ketika ada pilihan biner dua hal (\"...allocated to X or Y\"), konektor noun clause yang tepat adalah \"whether\"."
      },
      {
        "id": "bank-sq-toefl-d3-l2-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The ancient manuscript, ________ authorship remains a mystery, was discovered in a monastery library.\" — Adjective clause connector:",
        "options": [
          "whose",
          "which",
          "that",
          "whom"
        ],
        "answer": 0,
        "explanation": "💡 Kepemilikan (Whose): Diikuti kata benda (\"authorship\"), menunjukkan penulis dari manuskrip tersebut. Konektor kepemilikan adalah \"whose\"."
      },
      {
        "id": "bank-sq-toefl-d3-l2-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Solar panels produce direct current electricity, ________ an inverter is needed to convert it to alternating current for home use.\" — Pilihan konektor:",
        "options": [
          "so",
          "but",
          "nor",
          "yet"
        ],
        "answer": 0,
        "explanation": "💡 Sebab - Akibat (Cause & Effect): Panel menghasilkan arus DC, SEHINGGA (so) dibutuhkan inverter untuk mengubahnya menjadi arus AC."
      },
      {
        "id": "bank-sq-toefl-d3-l2-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ severe winter storms swept through the midwest, air travel was grounded nationwide.\" — Pilihan:",
        "options": [
          "When",
          "During",
          "Because of",
          "In case"
        ],
        "answer": 0,
        "explanation": "💡 Conjunction Klausa: Karena diikuti Subject + Verb (\"storms swept\"), wajib menggunakan Conjunction waktu (\"When\"). \"During\" dan \"Because of\" hanya diikuti kata benda."
      },
      {
        "id": "bank-s-toefl-u3-l3-0",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The study revealed that exercise not only improves physical health _________ enhances mental well-being.",
        "options": [
          "but also",
          "and also",
          "or also",
          "however also"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-toefl-u3-l3-1",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "_________ deforestation is one of _________ most pressing environmental issues of our time.",
        "options": [
          "The / a",
          "Ø / the",
          "A / the",
          "Ø / a"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-toefl-u3-l3-2",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Effective leaders must be decisive, communicative, and _________.",
        "options": [
          "adapting",
          "to adapt",
          "adaptable",
          "adaptation"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-toefl-d3-extra-0",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "___________, a pioneer in the field of radioactivity, was the first person to win two Nobel Prizes in different scientific categories.",
        "options": [
          "Marie Curie",
          "That Marie Curie was",
          "It was Marie Curie",
          "Because Marie Curie"
        ],
        "answer": 0,
        "explanation": "💡 Appositive: Frasa 'a pioneer in the field...' diapit koma adalah penjelas. Kalimat membutuhkan Subjek murni tanpa kata sambung: 'Marie Curie'."
      },
      {
        "id": "bank-s-toefl-d3-extra-1",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Seldom ___________ such magnificent biodiversity as that found in pristine tropical coral reef formations.",
        "options": [
          "biologists observe",
          "do biologists observe",
          "have observed biologists",
          "biologists are observing"
        ],
        "answer": 1,
        "explanation": "💡 Inversi Negatif: Kata 'Seldom' di awal kalimat mewajibkan inversi Aux + Subject: 'do biologists observe'."
      },
      {
        "id": "bank-s-toefl-d3-extra-2",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "___________ the volcanic eruption was catastrophic, nearby soil eventually became exceptionally fertile for agriculture.",
        "options": [
          "Although",
          "Despite",
          "In spite of",
          "Because of"
        ],
        "answer": 0,
        "explanation": "💡 Konektor Klausa: 'the volcanic eruption was catastrophic' adalah klausa utuh (S+V). Membutuhkan konjungsi 'Although', bukan preposisi 'Despite'."
      },
      {
        "id": "bank-s-toefl-d3-extra-3",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The giant redwood trees ___________ in the coastal fog belt of Northern California can reach heights exceeding three hundred feet.",
        "options": [
          "they grow",
          "growing",
          "are growing",
          "growth"
        ],
        "answer": 1,
        "explanation": "💡 Reduced Adjective Clause: Singkatan dari 'which grow' menjadi active present participle 'growing'."
      },
      {
        "id": "bank-s-toefl-d3-extra-4",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "___________ struck the Atlantic coastline in 1938 caused unprecedented infrastructural devastation.",
        "options": [
          "The hurricane that",
          "The hurricane",
          "That the hurricane",
          "When the hurricane"
        ],
        "answer": 0,
        "explanation": "💡 Noun Clause / Relative Clause: Kalimat sudah memiliki predikat utama 'caused'. Subjek yang tepat adalah 'The hurricane that struck the Atlantic coastline in 1938'."
      },
      {
        "id": "bank-s-toefl-d3-extra-5",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Not until the late nineteenth century ___________ electric lighting become widespread in commercial establishments.",
        "options": [
          "did",
          "when",
          "that",
          "it was"
        ],
        "answer": 0,
        "explanation": "💡 Inversi 'Not until': Pola 'Not until [time] + Aux + Subject + Verb'. Kata bantu yang tepat untuk bentuk lampau adalah 'did'."
      },
      {
        "id": "bank-s-toefl-d3-extra-6",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The Federal Reserve dictates monetary policy, ___________ commercial interest rates throughout the national banking system.",
        "options": [
          "which directly influences",
          "influences directly it",
          "that directly influences it",
          "directly influencing it was"
        ],
        "answer": 0,
        "explanation": "💡 Non-restrictive Relative Clause: Membutuhkan relative pronoun 'which' untuk menerangkan dampak klausa sebelumnya: 'which directly influences'."
      },
      {
        "id": "bank-s-toefl-d3-extra-7",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Deep within subterranean caves, bats navigate with extreme precision by ___________ high-frequency ultrasonic vocalizations.",
        "options": [
          "emit",
          "emitting",
          "emitted",
          "emission of they"
        ],
        "answer": 1,
        "explanation": "💡 Preposition + Gerund: Setelah preposisi 'by', kata kerja wajib berakhiran -ing (Gerund): 'by emitting'."
      },
      {
        "id": "bank-sq-toefl-hack-l3-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"The (A) university committee have (B) decided to postpone the annual conference until (C) next November (D).\"",
        "options": [
          "The (A)",
          "have (B)",
          "until (C)",
          "next (D)"
        ],
        "answer": 1,
        "explanation": "💡 Dosa 1: Subject-Verb Agreement! Subjek \"The university committee\" adalah kata benda kolektif tunggal dalam standar TOEFL ETS, sehingga verb harus \"has decided\", bukan \"have decided\"."
      },
      {
        "id": "bank-sq-toefl-hack-l3-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"Modern architecture emphasizes simplicity, functional (A), and the innovative (B) use of natural (C) daylight (D).\"",
        "options": [
          "functional (A)",
          "innovative (B)",
          "natural (C)",
          "daylight (D)"
        ],
        "answer": 0,
        "explanation": "💡 Dosa 2: Parallel Structure! Sebelum dan sesudah tanda koma harus setara: \"simplicity\" (noun), maka (A) harus berupa noun \"functionality\", bukan adjective \"functional\"."
      },
      {
        "id": "bank-sq-toefl-hack-l3-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"The driver steered the heavy transport vehicle very careful (A) around the dangerous (B) icy curve (C) on the highway (D).\"",
        "options": [
          "careful (A)",
          "dangerous (B)",
          "curve (C)",
          "on the (D)"
        ],
        "answer": 0,
        "explanation": "💡 Dosa 3: Word Form (Adj vs Adv)! Kata \"steered\" (mengemudi) adalah VERB, sehingga harus diterangkan oleh ADVERB (\"carefully\"), bukan adjective (\"careful\")."
      },
      {
        "id": "bank-sq-toefl-hack-l3-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"The research team collected many (A) valuable informations (B) regarding the atmospheric (C) changes in the Arctic (D).\"",
        "options": [
          "many (A)",
          "informations (B)",
          "atmospheric (C)",
          "Arctic (D)"
        ],
        "answer": 1,
        "explanation": "💡 Dosa 4: Uncountable Noun! Kata \"information\" adalah UNCOUNTABLE (tidak bisa dihitung). Tidak boleh ada akhiran \"-s\" (informations) dan tidak boleh memakai \"many\" (harus \"much information\")."
      },
      {
        "id": "bank-sq-toefl-hack-l3-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"Professor Clark was capable to solve (A) the complex aerodynamic (B) problem using advanced (C) computer simulations (D).\"",
        "options": [
          "capable to solve (A)",
          "aerodynamic (B)",
          "advanced (C)",
          "simulations (D)"
        ],
        "answer": 0,
        "explanation": "💡 Dosa 5: Preposition Idiom! Pola kata \"capable\" SELALU berpasangan dengan \"OF + V-ing\" (\"capable of solving\"), BUKAN \"capable to solve\"."
      },
      {
        "id": "bank-sq-toefl-hack-l3-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"Neither the president nor the senators was (A) willing to compromise on (B) the proposed tax legislation (C) during yesterday's debate (D).\"",
        "options": [
          "was (A)",
          "on (B)",
          "legislation (C)",
          "during (D)"
        ],
        "answer": 0,
        "explanation": "💡 Neither... Nor Agreement: Subjek terdekat ke verb adalah \"senators\" (jamak), maka verb harus berbentuk jamak \"were\", bukan \"was\"!"
      },
      {
        "id": "bank-sq-toefl-hack-l3-6",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Cari Bagian Salah: \"Plants absorb water and nutrients from the soil through (A) their root systems, which (B) anchor them firm (C) in the ground (D).\"",
        "options": [
          "through (A)",
          "which (B)",
          "firm (C)",
          "ground (D)"
        ],
        "answer": 2,
        "explanation": "💡 Word Form: Kata kerja \"anchor\" membutuhkan adverb untuk menerangkan bagaimana tanaman menancap: harus \"firmly\" (dengan kokoh), bukan adjective \"firm\"."
      },
      {
        "id": "bank-sq-toefl-u3-l2-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Kalimat manakah yang memiliki struktur paralel (parallel structure) yang BENAR?",
        "options": [
          "He enjoys swimming, to hike, and cycling.",
          "He enjoys swimming, hiking, and cycling.",
          "He enjoys swim, hiking, and to cycle.",
          "He enjoys to swim, to hiking, and cycle."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Periksa aturan paralelisme dan eliminasi distraktor."
      },
      {
        "id": "bank-sq-toefl-u3-l2-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Pilihlah kalimat dengan struktur paralel yang PALING TEPAT:",
        "options": [
          "The policy aims to reduce pollution, creating jobs, and to improve infrastructure.",
          "The policy aims to reduce pollution, to create jobs, and to improve infrastructure.",
          "The policy aims reducing pollution, to create jobs, and improved infrastructure.",
          "The policy aims to reduce pollution, creating jobs, and improved infrastructure."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Periksa aturan paralelisme dan eliminasi distraktor."
      },
      {
        "id": "bank-sq-toefl-u3-l2-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "\"Not only is she intelligent, ___ she is also hardworking.\"",
        "options": [
          "and",
          "but",
          "or",
          "nor"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Periksa aturan paralelisme dan eliminasi distraktor."
      },
      {
        "id": "bank-sq-toefl-u3-l2-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Manakah dari pilihan berikut yang strukturnya SALAH (tidak paralel)?",
        "options": [
          "Both reading and writing are important.",
          "Either he goes, or she will go.",
          "Neither they nor we are ready.",
          "Both study and to practice are needed."
        ],
        "answer": 3,
        "explanation": "💡 Analisis TOEFL: Periksa aturan paralelisme dan eliminasi distraktor."
      },
      {
        "id": "bank-sq-toefl-d4-l3-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Temukan bagian yang SALAH: \"The architect designed a (A) remarkably (B) beauty building that (C) attracted visitors (D) worldwide.\"",
        "options": [
          "(A) remarkably",
          "(B) beauty",
          "(C) attracted",
          "(D) worldwide"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kata \"building\" adalah kata benda (noun). Di depannya harus ada kata sifat (Adjective) yaitu \"beautiful\", bukan kata benda \"beauty\"! Opsi (B) salah."
      },
      {
        "id": "bank-sq-toefl-d4-l3-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Temukan bagian yang SALAH: \"Recent (A) medical (B) researches have revealed that (C) regular exercise (D) improves cognitive health.\"",
        "options": [
          "(A) medical",
          "(B) researches",
          "(C) regular",
          "(D) improves"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kata \"research\" dalam bahasa Inggris akademik adalah Uncountable Noun (kata benda tak terhitung) sehingga TIDAK PERNAH memiliki akhiran jamak \"-es\". Seharusnya \"Recent medical research has revealed...\"."
      },
      {
        "id": "bank-sq-toefl-d4-l3-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Lengkapi kalimat: \"The soprano sang _________ during the opening performance of the opera.\"",
        "options": [
          "beautiful",
          "beautifully",
          "beauty",
          "beautify"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kata \"sang\" (bernyanyi) adalah kata kerja (verb). Untuk menerangkan bagaimana ia bernyanyi, diperlukan kata keterangan (adverb) berakhiran -ly yaitu \"beautifully\"."
      },
      {
        "id": "bank-sq-toefl-d4-extra-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"The ancient architectural aqueduct in Rome was [careful] designed to transport millions of gallons of freshwater daily.\"",
        "options": [
          "ancient",
          "was",
          "careful",
          "daily"
        ],
        "answer": 2,
        "explanation": "💡 Dosa Bentuk Kata: Kata 'designed' adalah Verb pasif. Untuk menerangkan kata kerja, kita memerlukan Adverb ('carefully designed'), bukan Adjective 'careful'."
      },
      {
        "id": "bank-sq-toefl-d4-extra-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"Neither the lead researcher nor her graduate assistants [was] able to replicate the laboratory findings in subsequent trials.\"",
        "options": [
          "Neither",
          "graduate",
          "was",
          "subsequent"
        ],
        "answer": 2,
        "explanation": "💡 Dosa Agreement 'Neither... nor': Verb menyesuaikan dengan subjek terdekat ('her graduate assistants' = jamak). Maka to be yang benar adalah 'were', bukan 'was'."
      },
      {
        "id": "bank-sq-toefl-d4-extra-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"The new turbine design operates [more efficiently], generates higher output, and [reducing] maintenance costs significantly.\"",
        "options": [
          "operates",
          "more efficiently",
          "higher",
          "reducing"
        ],
        "answer": 3,
        "explanation": "💡 Dosa Paralelisme: Rangkaian kata kerja setara: 'operates' (V1s), 'generates' (V1s), and... maka bentuk ketiga harus 'reduces' (V1s), bukan bentuk gerund 'reducing'."
      },
      {
        "id": "bank-sq-toefl-d4-extra-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"Of all the mountain peaks in North America, Mount Denali is the [most highest] elevation above sea level.\"",
        "options": [
          "peaks",
          "the",
          "most highest",
          "above"
        ],
        "answer": 2,
        "explanation": "💡 Dosa Double Superlative: 'high' adalah kata sifat satu suku kata yang bentuk superlatifnya cukup 'highest'. Penggunaan 'most highest' adalah pemborosan yang salah."
      },
      {
        "id": "bank-sq-toefl-d4-extra-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"A series of unexpected geological [discovery] in the Great Rift Valley has transformed historical timelines.\"",
        "options": [
          "series",
          "unexpected",
          "discovery",
          "has transformed"
        ],
        "answer": 2,
        "explanation": "💡 Dosa Singular/Plural: Frasa 'A series of...' selalu diikuti kata benda jamak ('geological discoveries')."
      },
      {
        "id": "bank-sq-toefl-d4-extra-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Written Expression: \"Despite the committee members debated for hours, they failed [reaching] a definitive consensus on the budgetary policy.\"",
        "options": [
          "Despite",
          "debated",
          "reaching",
          "budgetary"
        ],
        "answer": 0,
        "explanation": "💡 Dosa Preposition vs Conjunction: 'the committee members debated for hours' adalah klausa utuh (S+V). Kata yang benar adalah konjungsi 'Although / Even though', bukan preposisi 'Despite'."
      },
      {
        "id": "bank-sq-toefl-d5-l1-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Seldom ________ such breathtaking geological formations as those found in Bryce Canyon.\" — Pilihan jawaban:",
        "options": [
          "does one see",
          "one sees",
          "one does see",
          "sees one"
        ],
        "answer": 0,
        "explanation": "💡 Jurus Inversi Negatif: Kalimat diawali adverb negatif (\"Seldom\", \"Rarely\", \"Never\"). Rumus wajib INVERSI: Adverb Negatif + Auxiliary/Modal + Subject + Verb murni -> \"Seldom does one see\"."
      },
      {
        "id": "bank-sq-toefl-d5-l1-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Not only ________ immense pressure during deep-sea dives, but they also experience freezing water temperatures.\" — Lengkapi:",
        "options": [
          "do submarines endure",
          "submarines endure",
          "submarines do endure",
          "endure submarines"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Not Only\": Pola \"Not only + Auxiliary + Subject + Main Verb\". Opsi A adalah satu-satunya susunan inversi yang benar!"
      },
      {
        "id": "bank-sq-toefl-d5-l1-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Beyond the dense pine forest ________ the ancient ruins of an abandoned silver mining town.\" — Pilihan verb:",
        "options": [
          "lay",
          "did it lie",
          "it lay",
          "lying"
        ],
        "answer": 0,
        "explanation": "💡 Inversi Tempat (Place Inversion): Ketika kalimat diawali keterangan tempat/arah (\"Beyond the forest\"), susunan kalimat diinversi menjadi Verb + Subject: \"Beyond the forest lay (verb) the ancient ruins (subject)\"."
      },
      {
        "id": "bank-sq-toefl-d5-l1-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Only after extensive geological surveying ________ the engineers begin excavation on the mountain tunnel.\" — Pilihan:",
        "options": [
          "did",
          "was",
          "have",
          "were"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Only After\": Frasa \"Only after...\" memicu inversi di klausa utama: Auxiliary (\"did\") + Subject (\"the engineers\") + Verb murni (\"begin\")."
      },
      {
        "id": "bank-sq-toefl-d5-l1-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Under no circumstances ________ laboratory chemicals without wearing proper protective goggles.\" — Pilihan:",
        "options": [
          "should students handle",
          "students should handle",
          "students handle",
          "handle should students"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Under no circumstances\": Ungkapan negatif mutlak ini mewajibkan inversi modal + subject: \"should students handle\"."
      },
      {
        "id": "bank-sq-toefl-d5-l1-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"Hardly ________ into the departure terminal when the boarding announcement was broadcast.\" — Lengkapi:",
        "options": [
          "had the passengers stepped",
          "the passengers had stepped",
          "passengers stepped",
          "did the passengers stepped"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Hardly... When\": Rumus klasik TOEFL: \"Hardly + had + Subject + V3 + when...\". Hanya opsi A yang memenuhi kaidah."
      },
      {
        "id": "bank-sq-toefl-d5-l2-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ the severe weather conditions earlier, the flight would have been rerouted to another airport.\" — Inverted Conditional Type 3:",
        "options": [
          "Had the air traffic controllers known",
          "If the controllers had know",
          "Did the controllers know",
          "Have the controllers known"
        ],
        "answer": 0,
        "explanation": "💡 Inversi Kondisional Tanpa \"If\": \"If the controllers had known...\" diinversi menjadi \"Had the controllers known...\". Hilangkan kata 'If' dan letakkan 'Had' di awal!"
      },
      {
        "id": "bank-sq-toefl-d5-l2-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ any further complications arise during the procedure, contact the supervising surgeon immediately.\" — Inverted Conditional Type 1:",
        "options": [
          "Should",
          "If should",
          "Were",
          "Had"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Should\" (Pengganti If): Kalimat pengandaian \"If any complications arise...\" dapat ditulis menjadi \"Should any complications arise...\". Sangat sering muncul di TOEFL!"
      },
      {
        "id": "bank-sq-toefl-d5-l2-2",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The historical documents ________ during the restoration project will be cataloged by the university archive.\" — Reduced Relative Clause:",
        "options": [
          "discovered",
          "which discovered",
          "were discovered",
          "discovering"
        ],
        "answer": 0,
        "explanation": "💡 Reduced Relative Clause Pasif: Bentuk lengkap \"which were discovered\" disederhanakan menjadi kata kerja bentuk ketiga pasif saja: \"discovered\". Opsi C salah karena membuat double main verb."
      },
      {
        "id": "bank-sq-toefl-d5-l2-3",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ the highest mountain peak in North America, Denali rises over 20,000 feet above sea level.\" — Reduced Appositive Clause:",
        "options": [
          "Being",
          "It is",
          "Because it is",
          "Was"
        ],
        "answer": 0,
        "explanation": "💡 Participle Phrase: \"Being the highest mountain peak...\" menerangkan subjek \"Denali\". Opsi B salah karena menghasilkan dua klausa independen tanpa konjungsi."
      },
      {
        "id": "bank-sq-toefl-d5-l2-4",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"________ he here with us today, he would undoubtedly agree with our proposed environmental policy.\" — Inverted Conditional Type 2:",
        "options": [
          "Were",
          "Was",
          "Had",
          "Should"
        ],
        "answer": 0,
        "explanation": "💡 Inversi \"Were\" (Kondisional Lampau): \"If he were here...\" diinversi menjadi \"Were he here...\". Dalam conditional formal TOEFL, selalu gunakan \"were\" untuk semua subjek."
      },
      {
        "id": "bank-sq-toefl-d5-l2-5",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Soal TOEFL: \"The committee members recommended that the treasurer ________ a detailed monthly expenditure report.\" — Subjunctive Mood:",
        "options": [
          "submit",
          "submits",
          "submitted",
          "submitting"
        ],
        "answer": 0,
        "explanation": "💡 Subjunctive Mood: Setelah kata kerja perintah/saran seperti \"recommended that...\", kata kerja berikutnya WAJIB berbentuk VERB DASAR BARE INFINITIVE (\"submit\", bukan \"submits\")."
      },
      {
        "id": "bank-sq-toefl-d5-l3-0",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Lengkapi kalimat: \"_________ the flight earlier, we would have attended the opening symposium on time.\"",
        "options": [
          "Had we booked",
          "If we booked",
          "We had booked",
          "Did we book"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Klausa kedua menggunakan \"would have attended\" (Conditional Tipe 3). Bentuk pengandaian tanpa \"if\" yang benar adalah inversi \"Had we booked\" (= If we had booked)."
      },
      {
        "id": "bank-sq-toefl-d5-l3-1",
        "section": "structure",
        "part": "Section 2: Structure & Written Expression",
        "prompt": "Pilih jawaban yang paling tepat:",
        "sentence": "Lengkapi kalimat: \"_________ any questions arise regarding the contract, please contact legal counsel.\"",
        "options": [
          "Should",
          "Had",
          "Would",
          "Unless"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Ini adalah bentuk pengandaian sopan tanpa if untuk Tipe 1: \"Should any questions arise...\" yang setara dengan \"If any questions should arise...\"."
      },
      {
        "id": "bank-s-toefl-d5-extra-0",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Beyond the perimeter of the ancient settlement ___________ the remnants of an expansive irrigation canal system.",
        "options": [
          "lay",
          "did lie",
          "it was lying",
          "where laid"
        ],
        "answer": 0,
        "explanation": "💡 Inversi Keterangan Tempat: Ketika kalimat diawali keterangan tempat ('Beyond the perimeter...'), posisi Verb langsung mendahului Subjek: 'lay the remnants'."
      },
      {
        "id": "bank-s-toefl-d5-extra-1",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "___________ the volcanic warning sirens sounded sooner, thousands of villagers could have evacuated to safety.",
        "options": [
          "Had",
          "If had",
          "Were",
          "Should"
        ],
        "answer": 0,
        "explanation": "💡 Pengandaian Type 3 Tanpa 'If': Bentuk inversi dari 'If the sirens had sounded' dibalik menjadi 'Had the sirens sounded'."
      },
      {
        "id": "bank-s-toefl-d5-extra-2",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The chief aerospace engineer had the technician ___________ the hydraulic pressure valves before final liftoff.",
        "options": [
          "inspect",
          "to inspect",
          "inspected",
          "inspecting"
        ],
        "answer": 0,
        "explanation": "💡 Causative Active 'Have': Pola 'have + someone + Verb dasar (bare infinitive)': 'had the technician inspect'."
      },
      {
        "id": "bank-s-toefl-d5-extra-3",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The university provost insisted that every faculty department ___________ its curriculum standards by the end of the academic year.",
        "options": [
          "align",
          "aligns",
          "aligned",
          "aligning"
        ],
        "answer": 0,
        "explanation": "💡 Subjunctive Mood: Kata kerja saran/tuntutan 'insist that...' selalu mewajibkan bentuk infinitive dasar tanpa akhiran -s: 'align'."
      },
      {
        "id": "bank-s-toefl-d5-extra-4",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "The more aerodynamic the exterior body of an automobile, ___________ fuel efficiency it achieves during highway cruising.",
        "options": [
          "the greater",
          "greater",
          "is the greater",
          "the greatest"
        ],
        "answer": 0,
        "explanation": "💡 Double Comparative: Pola 'The more [X], the greater [Y]'."
      },
      {
        "id": "bank-s-toefl-d5-extra-5",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "Were the global climate ___________ by even two degrees Celsius, polar ice caps would experience catastrophic melting.",
        "options": [
          "to warm",
          "warm",
          "warmed",
          "warming"
        ],
        "answer": 0,
        "explanation": "💡 Pengandaian Type 2 Tanpa 'If': Bentuk inversi dari 'If the climate were to warm' dibalik menjadi 'Were the climate to warm'."
      },
      {
        "id": "bank-s-toefl-u4-l3-0",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "While some argue that technology isolates people, _________ technology, when used responsibly, strengthens human connections.",
        "options": [
          "I believe that",
          "it is said that",
          "nobody knows if",
          "it might be possible"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-toefl-u4-l3-1",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "AI has revolutionized medical diagnosis. _________, it has also created ethical concerns about data privacy.",
        "options": [
          "Furthermore",
          "However",
          "Therefore",
          "For instance"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-toefl-u4-l3-2",
        "section": "structure",
        "part": "Section 2: Structure",
        "prompt": "Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:",
        "sentence": "_________, the evidence clearly shows that renewable energy is essential for a sustainable future.",
        "options": [
          "For example",
          "However",
          "In conclusion",
          "Furthermore"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Subjek dan Verb wajib lengkap dan setara."
      },
      {
        "id": "bank-s-89",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "Not only _______ essential nutrients to marine organisms, but coastal estuaries also serve as vital breeding grounds for migratory waterfowl.",
        "options": [
          "estuaries supply",
          "do estuaries supply",
          "supply estuaries",
          "estuaries do supply"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Pola Inversi 'Not only... but also...'. Ketika kalimat diawali 'Not only', klausa tersebut wajib mengalami inversi: Auxiliary (do) + Subject (estuaries) + Verb (supply)."
      },
      {
        "id": "bank-s-90",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "_______ by strong gravitational forces, the planetary debris gradually coalesced into distinct orbital rings.",
        "options": [
          "Influencing",
          "Influenced",
          "To influence",
          "Influence"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Reduced Adverbial Clause (Past Participle). Puing-puing planet dipengaruhi (pasif) oleh gaya gravitasi, sehingga bentuk yang benar adalah past participle 'Influenced'."
      },
      {
        "id": "bank-s-91",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "Had the engineers _______ the thermal expansion of the steel girders, the catastrophic bridge collapse could have been averted.",
        "options": [
          "foreseen",
          "foreseeing",
          "foresee",
          "foresaw"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Inversion in Conditional Type 3 (tanpa kata 'if'). Pola baku: 'Had + Subject + V3 (Past Participle)'. Maka bentuk yang tepat adalah 'foreseen'."
      },
      {
        "id": "bank-s-92",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "The discovery of fossilized pollen grains in Antarctic sediment indicates that lush temperate forests _______ millions of years ago.",
        "options": [
          "once flourished there",
          "there flourishing once",
          "were once flourishing there",
          "flourish once there"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Klausa komplemen 'that + Subject (lush temperate forests) + Simple Past Verb (once flourished) + adverb (there)'. Urutan kata bahasa Inggris yang gramatikal dan natural."
      },
      {
        "id": "bank-s-93",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "Rarely _______ an astronomical phenomenon generated such widespread public fascination as Halley's Comet did in 1910.",
        "options": [
          "has",
          "have",
          "had",
          "was"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Negative Inversion dengan kata 'Rarely'. Subjek kalimat adalah 'an astronomical phenomenon' (tunggal), maka kata bantu yang tepat adalah 'has' (Rarely has an astronomical phenomenon generated...)."
      },
      {
        "id": "bank-s-94",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "The federal commission mandated that each autonomous drone _______ equipped with a fail-safe altitude limit sensor.",
        "options": [
          "is",
          "be",
          "was",
          "being"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Subjunctive Mood setelah kata kerja desakan/mandat ('mandated that + Subject + bare infinitive [V1 tanpa to]'). Wajib menggunakan 'be'."
      },
      {
        "id": "bank-s-95",
        "section": "structure",
        "part": "Part A: Sentence Completion",
        "questionText": "No sooner had the experimental supersonic jet crossed the sound barrier _______ radar anomalies were detected along the tracking perimeter.",
        "options": [
          "than",
          "when",
          "then",
          "that"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Pasangan konjungsi korelatif baku untuk 'No sooner had...' adalah 'than'. (Bandingkan dengan 'Hardly/Scarcely... when')."
      },
      {
        "id": "bank-s-96",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "The rapid [proliferate](A) of electric vehicles [has driven](B) substantial advancements in [battery chemistry](C) and lithium recycling [techniques](D).",
        "options": [
          "proliferate",
          "has driven",
          "battery chemistry",
          "techniques"
        ],
        "answer": 0,
        "explanation": "💡 Letak Kesalahan: (A) 'proliferate'. Setelah artikel 'The' dan adjektiva 'rapid', kata yang dibutuhkan adalah kata benda (noun), yaitu 'proliferation', bukan kata kerja 'proliferate'."
      },
      {
        "id": "bank-s-97",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "Deep-sea corals, [unlike](A) their shallow-water counterparts, [does not](B) rely on symbiotic photosynthetic algae to [derive](C) their metabolic [energy](D).",
        "options": [
          "unlike",
          "does not",
          "derive",
          "energy"
        ],
        "answer": 1,
        "explanation": "💡 Letak Kesalahan: (B) 'does not'. Subjek utama kalimat adalah 'Deep-sea corals' (jamak/plural). Kata kerja bantu yang tepat adalah 'do not', bukan 'does not'."
      },
      {
        "id": "bank-s-98",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "Although honeybees communicate [effective](A) through complex waggle dances, environmental pesticides [frequently](B) impair their [navigational](C) abilities and hive [survival](D).",
        "options": [
          "effective",
          "frequently",
          "navigational",
          "survival"
        ],
        "answer": 0,
        "explanation": "💡 Letak Kesalahan: (A) 'effective'. Kata ini memodifikasi kata kerja 'communicate' (verb), sehingga harus berbentuk kata keterangan (adverb): 'effectively'."
      },
      {
        "id": "bank-s-99",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "The architectural blueprints [submitted](A) by the municipal engineering firm [was](B) evaluated [rigorously](C) by the state zoning [board](D).",
        "options": [
          "submitted",
          "was",
          "rigorously",
          "board"
        ],
        "answer": 1,
        "explanation": "💡 Letak Kesalahan: (B) 'was'. Subjek kalimat adalah 'The architectural blueprints' (jamak). Predikat kalimat harus menggunakan kata kerja jamak 'were evaluated', bukan 'was'."
      },
      {
        "id": "bank-s-100",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "Because of [its](A) exceptional strength and lightweight molecular framework, carbon nanotubes [is widely](B) utilized in [aerospace](C) manufacturing and high-performance [electronics](D).",
        "options": [
          "its",
          "is widely",
          "aerospace",
          "electronics"
        ],
        "answer": 1,
        "explanation": "💡 Letak Kesalahan: (B) 'is widely'. Subjek kalimat adalah 'carbon nanotubes' (jamak). Maka predikat pasif yang benar adalah 'are widely utilized', bukan 'is'."
      },
      {
        "id": "bank-s-101",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "In the 18th century, Benjamin Franklin demonstrated that lightning [was](A) a form of electrical discharge by [flying](B) a silk kite [during](C) a severe [thunderstormly](D).",
        "options": [
          "was",
          "flying",
          "during",
          "thunderstormly"
        ],
        "answer": 3,
        "explanation": "💡 Letak Kesalahan: (D) 'thunderstormly'. Kata benda yang tepat setelah kata sifat 'severe' adalah 'thunderstorm' (badai petir), tidak ada kata 'thunderstormly'."
      },
      {
        "id": "bank-s-102",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "Neither the lead climatologist [nor](A) her research assistants [was convinced](B) by the petroleum industry's [claims of](C) net-zero emission [compliance](D).",
        "options": [
          "nor",
          "was convinced",
          "claims of",
          "compliance"
        ],
        "answer": 1,
        "explanation": "💡 Letak Kesalahan: (B) 'was convinced'. Aturan subjek gabungan 'Neither... nor...' menentukan kesesuaian kata kerja dengan subjek terdekat ('her research assistants' - jamak). Seharusnya 'were convinced'."
      },
      {
        "id": "bank-s-103",
        "section": "structure",
        "part": "Part B: Written Expression",
        "sentenceHighlighted": "Geothermal energy plants [extracts](A) superheated steam from subterranean hydrothermal reservoirs to [power](B) heavy industrial turbines and [generate](C) clean baseline [electricity](D).",
        "options": [
          "extracts",
          "power",
          "generate",
          "electricity"
        ],
        "answer": 0,
        "explanation": "💡 Letak Kesalahan: (A) 'extracts'. Subjek 'Geothermal energy plants' berbentuk jamak (plural), sehingga kata kerja bentuk sekarang (Simple Present) tidak boleh berakhiran -s: harus 'extract'."
      }
    ],
    "reading": [
      {
        "id": "ts-q21",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "What is the primary purpose of the passage?",
        "options": [
          "To describe the history of oceanographic exploration in the deep sea",
          "To explain the chemical mechanism and ecological functions of marine bioluminescence",
          "To prove that luciferin can be synthesized for commercial human lighting",
          "To argue that anglerfish are the most efficient predators in the ocean"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ide Pokok (Main Idea). Paragraf 1 menjelaskan mekanisme kimiawi ('chemical mechanism'), dan paragraf 2 menguraikan berbagai fungsi ekologis (menangkap mangsa, pertahanan diri, dan kamuflase) dari bioluminesensi laut."
      },
      {
        "id": "ts-q22",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "The word 'predominantly' in paragraph 1 is closest in meaning to:",
        "options": [
          "occasionally",
          "mostly / mainly",
          "partially",
          "artificially"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Makna Kosakata dalam Konteks. 'Predominantly' bermakna sebagian besar atau terutama (mostly/chiefly/mainly)."
      },
      {
        "id": "ts-q23",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "According to paragraph 1, why is bioluminescence referred to as 'cold light'?",
        "options": [
          "Because it only occurs in freezing polar ocean waters",
          "Because less than twenty percent of its energy is dissipated as heat",
          "Because luciferin requires low temperatures to ignite",
          "Because it produces no visible colors other than blue"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Rincian Fakta (Factual Detail). Teks menyatakan secara eksplisit: '...bioluminescence is 'cold light,' in which less than twenty percent of the generated energy is lost as thermal radiation' (kurang dari 20% energi hilang menjadi radiasi panas)."
      },
      {
        "id": "ts-q24",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "It can be inferred from paragraph 2 that counter-illumination is effective because:",
        "options": [
          "It blinds predators with an intensely bright flash of light",
          "It eliminates the dark shadow that would otherwise be visible from underneath",
          "It raises the water temperature around the prey",
          "It allows fish to communicate complex hunting strategies"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Soal Kesimpulan Tersirat (Inference). Hatchetfish memancarkan cahaya dari perutnya yang cocok dengan intensitas sinar matahari dari atas ('camouflaging their silhouettes from predators lurking below'), sehingga bayangan gelap mereka tidak terlihat oleh pemangsa di bawahnya."
      },
      {
        "id": "ts-q25",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "Why does the author mention the 'hatchetfish' in paragraph 2?",
        "options": [
          "To provide an example of an organism that uses light for camouflage",
          "To contrast deep-sea fish with shallow freshwater species",
          "To demonstrate that bioluminescence causes rapid extinction",
          "To illustrate how anglerfish hunt their prey"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Tujuan Retoris (Author's Purpose). Hatchetfish dihadirkan sebagai contoh konkret dari hewan laut yang memanfaatkan bioluminesensi untuk kamuflase bayangan (counter-illumination)."
      },
      {
        "id": "ts-q26",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "What is the passage primarily concerned with?",
        "options": [
          "The history of building materials from ancient times to the present",
          "The causes, impacts, and architectural mitigation strategies of urban heat islands",
          "How green roofs reduce residential water consumption in arid regions",
          "Why electricity grids fail during winter snowstorms in cities"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ide Pokok Teks (Main Idea). Teks secara lengkap membahas: penyebab (paragraf 1), dampak berbahaya (paragraf 2), dan strategi mitigasi arsitektur hijau (paragraf 3) dari fenomena Urban Heat Island."
      },
      {
        "id": "ts-q27",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "The word 'disparity' in paragraph 1 is closest in meaning to:",
        "options": [
          "difference / inequality",
          "equilibrium",
          "similarity",
          "fluctuation"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Makna Kosakata (Vocabulary in Context). 'Thermal disparity' merujuk pada perbedaan atau kesenjangan suhu yang kontras antara area perkotaan dan pedesaan (difference/gap)."
      },
      {
        "id": "ts-q28",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "According to paragraph 1, all of the following contribute to the Urban Heat Island effect EXCEPT:",
        "options": [
          "High solar reflectance (albedo) of rural pastures",
          "Anthropogenic heat generated by automobiles and air conditioners",
          "Storage and re-emission of solar radiation by asphalt and concrete",
          "Extensive replacement of natural vegetation"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Soal Pengecualian (Negative Factual Detail / EXCEPT). Paragraf 1 menyebutkan bahwa UHI disebabkan oleh bahan berdaya pantul rendah ('low solar reflectance'), panas antropogenik kendaraan, dan hilangnya tumbuhan. Daya pantul tinggi daerah pedesaan (rural albedo) justru merupakan faktor kebalikan (bukan penyebab UHI)."
      },
      {
        "id": "ts-q29",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "According to paragraph 2, what hazardous air pollutant is accelerated by elevated urban temperatures?",
        "options": [
          "Carbon monoxide gas",
          "Ground-level tropospheric ozone",
          "Sulfur dioxide compounds",
          "Chlorofluorocarbons (CFCs)"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Rincian Fakta Teks (Factual Detail). Paragraf 2 menyatakan: 'Elevated urban temperatures dramatically accelerate the formation of ground-level tropospheric ozone...'"
      },
      {
        "id": "ts-q30",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "question": "It can be inferred from paragraph 3 that green roofs mitigate urban heat primarily through:",
        "options": [
          "Evaporative cooling from vegetation and interior insulation",
          "Reflecting 100% of all solar energy into deep space",
          "Eliminating the need for municipal electrical power grids",
          "Attracting continuous rainfall to downtown centers"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Kesimpulan Logis (Inference). Paragraf 3 menerangkan bahwa atap hijau ('green roofs') bekerja dengan cara memfasilitasi pendinginan evaporatif dari tanaman ('evaporative cooling') sekaligus mengisolasi ruang bangunan bagian dalam ('insulating interior living spaces')."
      },
      {
        "id": "bank-r-toefl-fast3-l8-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Origins of Modern Printing and Information Flow",
          "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
        },
        "question": "What is the primary topic of the passage?",
        "options": [
          "The life and personal struggles of Johannes Gutenberg.",
          "The historical transition from handwritten manuscripts to mechanical printing and its societal impact.",
          "A technical comparison of East Asian and Western European papermaking.",
          "The role of medieval monasteries in preserving ancient classical texts."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Kalimat pembuka paragraf 1 dan paragraf 2 menyoroti bagaimana pencetakan mekanik menggantikan naskah tulisan tangan serta dampak sosialnya yang masif."
      },
      {
        "id": "bank-r-toefl-fast3-l8-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Origins of Modern Printing and Information Flow",
          "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
        },
        "question": "According to paragraph 1, why were books accessible almost exclusively to wealthy institutions before 1440?",
        "options": [
          "Monasteries prohibited public access to classical literature.",
          "Paper had not yet been introduced to continental Europe.",
          "Each copy had to be laboriously reproduced by hand, making them scarce and costly.",
          "Most secular universities discouraged students from purchasing books."
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Paragraf 1 menyatakan: 'Every manuscript had to be meticulously copied by hand... Consequently, books remained scarce luxury items'."
      },
      {
        "id": "bank-r-toefl-fast3-l8-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Origins of Modern Printing and Information Flow",
          "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
        },
        "question": "The word \"pivotal\" in paragraph 3 is closest in meaning to:",
        "options": [
          "crucial",
          "accidental",
          "gradual",
          "temporary"
        ],
        "answer": 0,
        "explanation": "💡 Analisis Kosakata: Kata 'pivotal' berarti 'sangat penting / menjadi titik tolak krusial' (= crucial)."
      },
      {
        "id": "bank-r-toefl-fast3-l8-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Origins of Modern Printing and Information Flow",
          "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
        },
        "question": "The word \"His\" in paragraph 2 refers to:",
        "options": [
          "A scribe in an urban workshop",
          "Johannes Gutenberg",
          "A wine merchant from Mainz",
          "An East Asian printer"
        ],
        "answer": 1,
        "explanation": "💡 Analisis Pronoun Reference: Kata ganti 'His invention' secara langsung merujuk pada subjek yang diperkenalkan sebelumnya: 'Johannes Gutenberg, a German goldsmith'."
      },
      {
        "id": "bank-r-toefl-fast3-l8-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Origins of Modern Printing and Information Flow",
          "text": "Prior to the mid-fifteenth century in Western Europe, the reproduction of written works was an extraordinarily laborious and expensive endeavor. Every manuscript had to be meticulously copied by hand, a task primarily undertaken by scribes in monastic scriptoria or specialized urban workshops. Consequently, books remained scarce luxury items accessible almost exclusively to the ecclesiastical elite, universities, and wealthy royalty. Information flowed sluggishly, and scholarly debate was often constrained by the geographical isolation of literary materials.\n\nThe trajectory of European intellectual history shifted dramatically around 1440 when Johannes Gutenberg, a German goldsmith from Mainz, introduced movable metal type. While woodblock printing had been utilized for centuries in East Asia, Gutenberg combined multiple ingenious innovations into an integrated mechanical system: durable lead-alloy type pieces, oil-based ink that adhered smoothly to metal surfaces, and an adapted wooden screw press modeled after wine and olive presses. His invention allowed identical texts to be produced with unprecedented speed and uniform accuracy.\n\nThe societal repercussions of Gutenberg's press were immediate and far-reaching. Within several decades, print shops sprouted across major European commercial centers, from Venice to Paris. The resulting plunge in book prices democratized access to classical treatises, scientific discoveries, and religious translations. This democratization of knowledge was pivotal in accelerating the Renaissance, fueling the scientific revolution, and laying the groundwork for widespread literacy among the emergent middle classes."
        },
        "question": "Which of the following is NOT mentioned in the passage as one of Gutenberg's technical innovations?",
        "options": [
          "Durable lead-alloy metal type pieces",
          "Specially formulated oil-based printing ink",
          "Steam-powered automated rotary machinery",
          "An adapted wooden screw press"
        ],
        "answer": 2,
        "explanation": "💡 Soal Negative Factual: Mesin bertenaga uap ('steam-powered') baru muncul berabad-abad kemudian saat Revolusi Industri, bukan bagian dari inovasi Gutenberg tahun 1440."
      },
      {
        "id": "bank-r-toefl-u2-l2-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Deforestation and Global Ecosystems",
          "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
        },
        "question": "What is the main idea of the passage? (Apa ide pokok bacaan di atas?)",
        "options": [
          "Hutan hujan tropis memiliki banyak spesies",
          "Deforestasi mengancam ekosistem global dan terus terjadi meski berdampak buruk",
          "Pemerintah harus melarang semua aktivitas penebangan pohon",
          "Karbon dioksida adalah penyebab utama perubahan iklim"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: Bacaan membahas berbagai dampak kerusakan akibat deforestasi DAN menegaskan bahwa aktivitas ini masih terus meningkat — menjadikan opsi ke-2 sebagai ide pokok (main idea) yang paling lengkap dan akurat."
      },
      {
        "id": "bank-r-toefl-u2-l2-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Deforestation and Global Ecosystems",
          "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
        },
        "question": "The word \"crucial\" in paragraph 1 is closest in meaning to:",
        "options": [
          "minor (kecil/sepele)",
          "essential / critical (sangat penting / krusial)",
          "difficult (sulit)",
          "surprising (mengejutkan)"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: \"Crucial\" bermakna sangat penting / vital (extremely important/essential). Pohon memainkan peran penting dalam menyerap gas karbon dioksida di atmosfer."
      },
      {
        "id": "bank-r-toefl-u2-l2-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Deforestation and Global Ecosystems",
          "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
        },
        "question": "According to the passage, what percentage of Earth's surface do tropical rainforests cover?",
        "options": [
          "18%",
          "More than half (Lebih dari separuh)",
          "6%",
          "Less than 1% (Kurang dari 1%)"
        ],
        "answer": 2,
        "explanation": "💡 Penjelasan: Paragraf 2 menyatakan secara langsung: \"Tropical rainforests, which cover only 6% of Earth's surface...\" (Hutan hujan tropis hanya menutupi 6% permukaan Bumi)."
      },
      {
        "id": "bank-r-toefl-u2-l2-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Deforestation and Global Ecosystems",
          "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
        },
        "question": "It can be inferred from the passage that the author believes: (Dapat disimpulkan bahwa penulis meyakini:)",
        "options": [
          "Deforestasi mustahil untuk dihentikan",
          "Ekspansi pertanian adalah satu-satunya penyebab deforestasi",
          "Tindakan dan regulasi yang lebih tegas sangat diperlukan untuk mengatasi deforestasi",
          "Kehilangan keanekaragaman hayati bukan masalah serius"
        ],
        "answer": 2,
        "explanation": "💡 Penjelasan: Kalimat penutup \"...calling for stricter regulations and sustainable land-use practices\" (mendesak regulasi yang lebih ketat) mengindikasikan bahwa penulis mendukung adanya tindakan nyata yang lebih tegas."
      },
      {
        "id": "bank-r-toefl-u2-l2-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Deforestation and Global Ecosystems",
          "text": "Deforestation, the large-scale removal of forests, poses significant threats to global ecosystems. Scientists estimate that approximately 18 million acres of forest are destroyed each year. This rapid loss of forest cover contributes to climate change, as trees play a crucial role in absorbing carbon dioxide from the atmosphere.\n\nFurthermore, deforestation leads to soil erosion, water cycle disruption, and the devastating loss of biodiversity. When forests disappear, countless species lose their natural habitats, often resulting in extinction. Tropical rainforests, which cover only 6% of Earth's surface, are estimated to contain more than half of the world's plant and animal species.\n\nDespite these alarming consequences, deforestation continues to accelerate, driven primarily by agricultural expansion, logging, and urban development. Governments and environmental organizations are increasingly calling for stricter regulations and sustainable land-use practices to address this global crisis."
        },
        "question": "Why does the author mention \"18 million acres\" in paragraph 1? (Mengapa penulis menyebutkan angka ini?)",
        "options": [
          "Untuk membandingkan luas hutan di berbagai negara",
          "Untuk memberikan bukti data nyata mengenai besarnya skala deforestasi",
          "Untuk menjelaskan mengapa keanekaragaman hayati itu penting",
          "Untuk menggambarkan ukuran hutan hujan tropis"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: Angka statistik 18 juta hektar hutan disajikan sebagai bukti konkret (evidence) untuk mendukung pernyataan bahwa deforestasi terjadi dalam skala yang luar biasa besar."
      },
      {
        "id": "bank-r-toefl-u2-l3-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rise of Artificial Intelligence",
          "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
        },
        "question": "What is the passage primarily about? (Apa topik utama bacaan ini?)",
        "options": [
          "Cara memprogram kecerdasan buatan",
          "Keuntungan sekaligus kekhawatiran seputar perkembangan AI",
          "Mengapa AI lebih unggul daripada kecerdasan manusia",
          "Sejarah komputer dan teknologi digital"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: Teks menyajikan KEDUA sisi secara objektif: manfaat positif AI (efisiensi, medis) dan kekhawatiran yang dihadapi (hilangnya lapangan kerja, etika keputusan mandiri)."
      },
      {
        "id": "bank-r-toefl-u2-l3-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rise of Artificial Intelligence",
          "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
        },
        "question": "The word \"proponents\" in paragraph 2 is closest in meaning to:",
        "options": [
          "critics (penentang/pengkritik)",
          "supporters (para pendukung/pembela)",
          "researchers (peneliti)",
          "opponents (lawan)"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: \"Proponents\" artinya para pendukung / advokat ide tersebut (supporters/advocates). Mereka berargumen mengenai dampak positif peningkatan efisiensi."
      },
      {
        "id": "bank-r-toefl-u2-l3-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rise of Artificial Intelligence",
          "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
        },
        "question": "According to the passage, what concern do critics have about AI?",
        "options": [
          "AI tidak dapat mendeteksi penyakit secara akurat",
          "Biaya pengembangan sistem AI terlalu mahal",
          "AI dapat menggantikan tenaga kerja manusia dan memicu masalah etika",
          "AI hanya bermanfaat di bidang transportasi"
        ],
        "answer": 2,
        "explanation": "💡 Penjelasan: Paragraf 3 secara eksplisit menyebutkan ancaman hilangnya lapangan pekerjaan (job displacement) dan dilema etika sebagai kekhawatiran utama para kritikus."
      },
      {
        "id": "bank-r-toefl-u2-l3-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rise of Artificial Intelligence",
          "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
        },
        "question": "The word \"obsolete\" in paragraph 3 is closest in meaning to:",
        "options": [
          "lebih berharga",
          "ketinggalan zaman / tidak lagi terpakai (out of date / no longer useful)",
          "sangat kompetitif",
          "tumbuh dengan cepat"
        ],
        "answer": 1,
        "explanation": "💡 Penjelasan: \"Obsolete\" berarti usang, ketinggalan zaman, atau tidak lagi digunakan karena tergantikan oleh teknologi baru."
      },
      {
        "id": "bank-r-toefl-u2-l3-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rise of Artificial Intelligence",
          "text": "The development of artificial intelligence (AI) has transformed numerous industries over the past decade. AI systems are now capable of performing tasks that previously required human intelligence, including image recognition, language translation, and complex decision-making. These capabilities have made AI an invaluable tool in fields such as medicine, finance, and transportation.\n\nProponents of AI argue that these technologies significantly increase efficiency and reduce human error. In the medical field, for example, AI algorithms have demonstrated the ability to detect certain cancers with greater accuracy than experienced physicians. Similarly, autonomous vehicles equipped with AI systems have the potential to drastically reduce traffic accidents caused by human error.\n\nHowever, critics express serious concerns about the rapid expansion of AI. Chief among these is the issue of job displacement, as automation threatens to render many traditional occupations obsolete. Additionally, questions surrounding the ethical implications of autonomous decision-making systems — particularly in law enforcement and military applications — remain largely unresolved."
        },
        "question": "It can be inferred that the author's attitude toward AI is: (Sikap penulis terhadap AI:)",
        "options": [
          "Sangat negatif — AI harus dilarang sepenuhnya",
          "Sangat positif — AI selalu bermanfaat tanpa risiko",
          "Berimbang (balanced) — menyajikan sisi manfaat dan tantangan etika",
          "Netral tanpa pemahaman materi"
        ],
        "answer": 2,
        "explanation": "💡 Penjelasan: Penulis memaparkan sudut pandang para pendukung (proponents) dan kritikus (critics) dengan porsi adil tanpa memihak secara ekstrem, sehingga sikapnya adalah berimbang (balanced)."
      },
      {
        "id": "bank-r-toefl-u2-l4-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Honeybee Communication and the Waggle Dance",
          "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
        },
        "question": "What is the main topic of the passage?",
        "options": [
          "The chemical composition of honeybee royal jelly.",
          "How honeybees transmit precise location data about food sources through symbolic dancing.",
          "The evolutionary history of wild bee species in Western Europe.",
          "Methods used by beekeepers to increase commercial honey production."
        ],
        "answer": 1,
        "explanation": "💡 Main Idea: Paragraf pertama dan kedua secara eksplisit menjelaskan bagaimana tarian 'waggle dance' menyandikan koordinat arah dan jarak sumber makanan."
      },
      {
        "id": "bank-r-toefl-u2-l4-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Honeybee Communication and the Waggle Dance",
          "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
        },
        "question": "According to paragraph 2, how does the dancer indicate the direction of the food source?",
        "options": [
          "By the intensity of the scent she releases from her sting gland.",
          "By the angle of her central straight run relative to the vertical line.",
          "By the total number of semicircular loops performed per minute.",
          "By flying directly towards the sun inside the hive."
        ],
        "answer": 1,
        "explanation": "💡 Fact Detail: Paragraf 2 menyatakan: 'The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the sun'."
      },
      {
        "id": "bank-r-toefl-u2-l4-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Honeybee Communication and the Waggle Dance",
          "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
        },
        "question": "The word \"intricate\" in paragraph 1 is closest in meaning to:",
        "options": [
          "complex",
          "aggressive",
          "useless",
          "frequent"
        ],
        "answer": 0,
        "explanation": "💡 Vocabulary in Context: Kata 'intricate' berarti rumit, penuh detail terkoordinasi (= complex)."
      },
      {
        "id": "bank-r-toefl-u2-l4-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Honeybee Communication and the Waggle Dance",
          "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
        },
        "question": "Which of the following is NOT mentioned as a way recruit bees receive information during the dance?",
        "options": [
          "Detecting mechanical vibrations using their sensitive antennae.",
          "Tasting nectar samples regurgitated by the dancing forager.",
          "Watching the dance visually through sunlight illuminated windows.",
          "Feeling the angle and duration of the central straight run in the dark hive."
        ],
        "answer": 2,
        "explanation": "💡 Negative Factual: Paragraf 3 menyatakan sarang lebah bagian dalam berada dalam kondisi gelap gulita ('in the dark interior of the hive'), sehingga lebah tidak memakai penglihatan sinar matahari melainkan antena dan getaran mekanik."
      },
      {
        "id": "bank-r-toefl-u2-l4-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Honeybee Communication and the Waggle Dance",
          "text": "Among social insects, the Western honeybee (Apis mellifera) possesses one of the most sophisticated communication systems found anywhere in the animal kingdom. When a successful foraging bee discovers a rich nectar or pollen source far from the hive, she returns to the colony and performs an intricate physical routine upon the vertical honeycomb, commonly known as the 'waggle dance.' First deciphered in detail by Austrian ethologist Karl von Frisch in the mid-twentieth century, this ritual encodes precise geographic coordinates using purely kinetic and sensory signals.\n\nThe choreography of the dance consists of a figure-eight pattern featuring a central straight run flanked by two alternating semicircular loops. During the straight run, the bee vigorously vibrates her abdomen from side to side while emitting low-frequency acoustic pulses with her wings. The angle at which this straight run deviates from vertical represents the exact angle of the food source relative to the current azimuth of the sun. For instance, if the dancer angles her run forty-five degrees to the right of vertical, following bees understand that the food is located forty-five degrees to the right of the sun's position.\n\nFurthermore, the duration of the waggle phase conveys distance. A longer duration corresponds directly to a greater flight distance, with each second of waggling translating to approximately one kilometer of flight. Potential recruits observe the dance in the dark interior of the hive using their antennae and mechanoreceptors. In addition, the dancer periodically regurgitates samples of floral nectar, allowing her nestmates to identify the distinctive scent and sugar concentration of the targeted flora before departing into the field."
        },
        "question": "What can be inferred about a waggle dance that features a three-second straight run compared to a one-second run?",
        "options": [
          "The food source is located significantly farther away from the hive.",
          "The food source has a much lower sugar concentration.",
          "The dancer is exhausted and needs assistance from other bees.",
          "The flight must be conducted exclusively during night hours."
        ],
        "answer": 0,
        "explanation": "💡 Inference: Teks menyebutkan 'duration of the waggle phase conveys distance... with each second translating to approximately one kilometer'. Durasi 3 detik berarti jaraknya jauh lebih jauh (~3 km) dibanding 1 detik (~1 km)."
      },
      {
        "id": "bank-r-toefl-u2-l5-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rosetta Stone and Ancient Hieroglyphs",
          "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
        },
        "question": "What is the primary focus of the passage?",
        "options": [
          "Napoleon's strategic military campaigns across North Africa.",
          "The architectural design of temples during the fourth century CE.",
          "The discovery of the Rosetta Stone and how it enabled the decipherment of Egyptian hieroglyphs.",
          "The diplomatic agreements between Macedonian rulers and ancient Greece."
        ],
        "answer": 2,
        "explanation": "💡 Main Idea: Teks mengulas misteri hieroglif yang terkunci berabad-abad, penemuan Batu Rosetta tahun 1799, dan terobosan Champollion dalam menguraikan maknanya."
      },
      {
        "id": "bank-r-toefl-u2-l5-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rosetta Stone and Ancient Hieroglyphs",
          "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
        },
        "question": "According to paragraph 2, why was the presence of Ancient Greek on the stone so crucial for researchers?",
        "options": [
          "It proved that Napoleon had visited Egypt before 1799.",
          "Scholars already knew how to read Ancient Greek, providing a translation reference for the other scripts.",
          "Greek was the only script on the stone that described mathematical equations.",
          "It demonstrated that hieroglyphs originated directly from the Greek alphabet."
        ],
        "answer": 1,
        "explanation": "💡 Factual Detail: Teks menyebutkan: 'Because scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key'."
      },
      {
        "id": "bank-r-toefl-u2-l5-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rosetta Stone and Ancient Hieroglyphs",
          "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
        },
        "question": "The word \"enigma\" in paragraph 1 is closest in meaning to:",
        "options": [
          "mystery",
          "tradition",
          "triumph",
          "disaster"
        ],
        "answer": 0,
        "explanation": "💡 Vocabulary in Context: 'Impenetrable enigma' berarti 'teka-teki misteri yang tak terpecahkan' (= mystery)."
      },
      {
        "id": "bank-r-toefl-u2-l5-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rosetta Stone and Ancient Hieroglyphs",
          "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
        },
        "question": "The word \"it\" in paragraph 1 refers to:",
        "options": [
          "The fourth century CE",
          "The pictorial script",
          "The Roman Empire",
          "Non-Christian temples"
        ],
        "answer": 1,
        "explanation": "💡 Pronoun Referent: Frasa 'how to read and write the pictorial script vanished... The inscriptions... were perceived... rather than a language' merujuk pada tulisan bergambar / aksara hieroglif."
      },
      {
        "id": "bank-r-toefl-u2-l5-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The Rosetta Stone and Ancient Hieroglyphs",
          "text": "For over fourteen centuries, the hieroglyphic writing system of ancient Egypt remained an impenetrable enigma to modern historians. Following the closure of non-Christian temples in the late Roman Empire during the fourth century CE, knowledge of how to read and write the pictorial script vanished completely. The monumental inscriptions carving Pharaohs' deeds into sandstone obelisks and temple walls stood silent, perceived by medieval scholars as mystical esoteric symbols rather than a phonetic spoken language.\n\nThis intellectual stalemate was shattered in July 1799 during Napoleon Bonaparte's military expedition to Egypt. While excavating fortifications near the port city of Rashid (Rosetta) in the Nile Delta, French engineering officer Pierre-François Bouchard uncovered a slab of dark granodiorite weighing over seven hundred kilograms. The stone, dating to 196 BCE during the reign of King Ptolemy V, bore a royal decree inscribed in three distinct scripts: ancient Egyptian hieroglyphs (used for sacred religious documents), Egyptian Demotic (the cursive script of daily administration), and Ancient Greek (the language of Egypt's ruling Macedonian court).\n\nBecause scholars could still read Ancient Greek with relative ease, the stone provided an unprecedented bilingual key. Scholars quickly deduced that all three inscriptions contained the identical decree. In 1822, French philologist Jean-François Champollion achieved the definitive breakthrough. By comparing royal cartouches—oval loops enclosing Pharaohs' names—Champollion realized that hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds. Champollion's linguistic triumph unlocked thousands of years of recorded Egyptian literature, history, and law."
        },
        "question": "What fundamental insight did Jean-François Champollion achieve that broke previous scholarly assumptions?",
        "options": [
          "Hieroglyphs were solely decorative art without grammatical rules.",
          "Hieroglyphic signs functioned as phonetic symbols representing spoken sounds rather than purely mystical concepts.",
          "The inscriptions were written backwards from right to left.",
          "The decree had been fabricated by medieval scribes."
        ],
        "answer": 1,
        "explanation": "💡 Inference & Key Detail: Paragraf 3 menjelaskan terobosan Champollion: 'hieroglyphic signs did not represent mere mystical concepts, but rather functioned primarily as phonetic symbols representing consonants and sounds'."
      },
      {
        "id": "bank-r-toefl-u2-l6-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Geothermal Energy and Plate Tectonics",
          "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
        },
        "question": "What is the primary advantage of geothermal energy over solar and wind power mentioned in paragraph 1?",
        "options": [
          "It generates substantially lower construction costs than wind farms.",
          "It provides a continuous and reliable baseload output regardless of atmospheric weather conditions.",
          "It can be extracted without any drilling machinery.",
          "It produces high-grade radioactive minerals for commercial sale."
        ],
        "answer": 1,
        "explanation": "💡 Comparison Detail: Paragraf 1 menyatakan: 'Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night'."
      },
      {
        "id": "bank-r-toefl-u2-l6-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Geothermal Energy and Plate Tectonics",
          "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
        },
        "question": "Where are economical geothermal reservoirs overwhelmingly concentrated?",
        "options": [
          "In the center of stable continental plains far from mountains.",
          "Along tectonic plate boundaries and volcanic zones like the Pacific Ring of Fire.",
          "Underneath ancient limestone caves in desert regions.",
          "At high atmospheric altitudes near polar ice caps."
        ],
        "answer": 1,
        "explanation": "💡 Fact Detail: Paragraf 2 menyatakan: 'Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire'."
      },
      {
        "id": "bank-r-toefl-u2-l6-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Geothermal Energy and Plate Tectonics",
          "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
        },
        "question": "The word \"ubiquitously\" in paragraph 2 is closest in meaning to:",
        "options": [
          "everywhere",
          "rarely",
          "dangerously",
          "temporarily"
        ],
        "answer": 0,
        "explanation": "💡 Vocabulary in Context: 'ubiquitously' berarti 'ada di mana-mana' (= everywhere)."
      },
      {
        "id": "bank-r-toefl-u2-l6-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Geothermal Energy and Plate Tectonics",
          "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
        },
        "question": "Why is condensed water reinjected into the subterranean reservoir via injection wells?",
        "options": [
          "To cool down the electrical generators above ground.",
          "To prevent aquifer depletion and maintain a sustainable closed-loop cycle.",
          "To extinguish subterranean volcanic eruptions.",
          "To dissolve valuable gold and silver minerals."
        ],
        "answer": 1,
        "explanation": "💡 Process Detail: Paragraf 3 menjelaskan: 'condensed steam is reinjected back... creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion'."
      },
      {
        "id": "bank-r-toefl-u2-l6-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Geothermal Energy and Plate Tectonics",
          "text": "Geothermal energy—the thermal energy generated and stored within the Earth's interior—represents one of the most reliable and environmentally benign sources of renewable baseload power. Unlike solar and wind power, which are intermittent and depend on atmospheric conditions, geothermal output remains continuous day and night regardless of weather. The ultimate origin of this subterranean heat stems from primordial thermal energy trapped during the planet's gravitational formation over 4.5 billion years ago, combined with the continuous radioactive decay of naturally occurring isotopes, primarily uranium, thorium, and potassium.\n\nWhile thermal energy exists ubiquitously deep underground everywhere on Earth, harvesting it economically requires geological conditions that concentrate heat near the surface. Such geothermal reservoirs are overwhelmingly concentrated along tectonic plate boundaries, particularly within the volcanic Ring of Fire circling the Pacific Ocean and along mid-ocean spreading ridges. In these active zones, fractured magma chambers heat circulating groundwater to temperatures exceeding three hundred degrees Celsius under high geological pressure.\n\nWhen geothermal power plants tap these pressurized aquifers through deep production wells, the superheated water flashes into steam as pressure drops upon reaching the surface. This high-pressure steam drives mechanical turbines connected to electric generators. Afterward, the condensed steam is reinjected back into the deep subterranean reservoir through injection wells, creating a sustainable closed-loop hydrothermal cycle that prevents aquifer depletion and minimizes surface emissions."
        },
        "question": "According to the passage, all of the following contribute to geothermal heat EXCEPT:",
        "options": [
          "Primordial thermal energy from planetary formation",
          "Radioactive decay of uranium isotopes",
          "Radioactive decay of potassium isotopes",
          "Solar ultraviolet radiation absorbed by magma"
        ],
        "answer": 3,
        "explanation": "💡 Negative Factual: Radiasi ultraviolet matahari tidak menembus ke dalam magma bawah tanah; sumber panas bumi murni berasal dari panas primordial pembentukan bumi dan peluruhan radioaktif alami."
      },
      {
        "id": "bank-r-toefl-u2-l7-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The James Webb Space Telescope and Infrared Astronomy",
          "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
        },
        "question": "What is the primary topic of the passage?",
        "options": [
          "The retirement and decommission of the Hubble Space Telescope.",
          "The technological design of the James Webb Space Telescope and its capabilities in infrared astrophysics.",
          "Methods for building optical mirrors using gold-plated beryllium alloys.",
          "The geographical locations of international rocket launch pads."
        ],
        "answer": 1,
        "explanation": "💡 Main Idea: Paragraf 1 dan 2 mengulas lompatan teknologi teleskop James Webb dalam astronomi inframerah, orbitnya di L2, serta signifikansi ilmiahnya."
      },
      {
        "id": "bank-r-toefl-u2-l7-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The James Webb Space Telescope and Infrared Astronomy",
          "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
        },
        "question": "According to paragraph 1, why is infrared capability crucial for observing the earliest galaxies?",
        "options": [
          "Infrared radiation travels substantially faster through space than visible light.",
          "Cosmic expansion has stretched the light of ancient galaxies into longer infrared wavelengths (cosmological redshift).",
          "Stars in early galaxies only emitted thermal radio signals.",
          "The Earth's ozone layer completely reflects optical starlight."
        ],
        "answer": 1,
        "explanation": "💡 Factual Detail: Teks menyebutkan: 'light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves'."
      },
      {
        "id": "bank-r-toefl-u2-l7-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The James Webb Space Telescope and Infrared Astronomy",
          "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
        },
        "question": "The word \"unprecedented\" in paragraph 1 is closest in meaning to:",
        "options": [
          "never before seen or matched",
          "heavily criticized",
          "extremely expensive",
          "temporarily delayed"
        ],
        "answer": 0,
        "explanation": "💡 Vocabulary in Context: 'Unprecedented' berarti belum pernah ada sebelumnya / tiada bandingnya (= never before seen)."
      },
      {
        "id": "bank-r-toefl-u2-l7-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The James Webb Space Telescope and Infrared Astronomy",
          "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
        },
        "question": "Why was the James Webb telescope placed at the L2 Lagrange point rather than in low Earth orbit?",
        "options": [
          "To allow astronauts to easily service the instruments every month.",
          "To escape thermal radiation and atmospheric interference from the Earth, Sun, and Moon.",
          "Because space debris in low Earth orbit destroyed previous space telescopes.",
          "To utilize solar wind currents to propel the telescope between planetary systems."
        ],
        "answer": 1,
        "explanation": "💡 Factual Detail: Paragraf 2 menyatakan bahwa Webb tidak bisa berada di orbit Bumi karena panas Bumi akan menyilaukan sensornya; di L2, perisai matahari melindunginya dari radiasi matahari, Bumi, dan bulan."
      },
      {
        "id": "bank-r-toefl-u2-l7-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "The James Webb Space Telescope and Infrared Astronomy",
          "text": "Launched in late December 2021, the James Webb Space Telescope (JWST) represents an unprecedented leap forward in observational astrophysics. Unlike its venerable predecessor, the Hubble Space Telescope, which operates primarily in the optical and ultraviolet spectra from low Earth orbit, Webb is engineered specifically for infrared astronomy. Infrared instruments are essential for observing the most distant objects in the cosmos because light emitted by early galaxies billions of years ago has undergone profound cosmological redshift—its wavelength stretched from short visible bands into long infrared waves by the relentless expansion of spacetime itself.\n\nTo detect these extraordinarily faint thermal signatures without interference from its own mechanical heat, Webb cannot orbit Earth, where atmospheric glow and thermal radiation from the planet would blind its sensors. Instead, the observatory was dispatched approximately 1.5 million kilometers away to the second Sun-Earth Lagrange point (L2). At this gravitationally balanced vantage point, a tennis-court-sized, five-layer polyimide sunshield permanently shields Webb's 6.5-meter gold-plated beryllium primary mirror and cryogenically cooled detectors from the blistering radiation of the Sun, Earth, and Moon.\n\nWebb's unparalleled infrared sensitivity allows astronomers to peer through dense interstellar dust clouds that conceal stellar nurseries, revealing the birth of stars and planetary systems in breathtaking detail. Furthermore, by performing transit transmission spectroscopy on atmospheres of exoplanets, Webb can detect atmospheric biosignatures and chemical compounds, including water vapor, carbon dioxide, and methane, revolutionizing our understanding of planetary habitability across the Milky Way."
        },
        "question": "Which of the following is NOT mentioned as a research capability of the James Webb telescope?",
        "options": [
          "Peering through interstellar dust clouds to observe star formation.",
          "Analyzing the chemical composition of exoplanet atmospheres via spectroscopy.",
          "Transporting astronauts to colonize candidate exoplanets.",
          "Detecting traces of water vapor, carbon dioxide, and methane on distant worlds."
        ],
        "answer": 2,
        "explanation": "💡 Negative Factual: James Webb adalah teleskop observatorium tak berawak, bukan wahana pengangkut astronaut ('transporting astronauts')."
      },
      {
        "id": "bank-r-toefl-u2-l8-0",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Cognitive Dissonance and Human Behavior",
          "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
        },
        "question": "What is the primary focus of the passage?",
        "options": [
          "The biography and academic career of Leon Festinger.",
          "The psychological mechanism of cognitive dissonance and how people cope with contradictory beliefs and actions.",
          "A comparative study of marketing strategies used by automobile manufacturers.",
          "Medical therapies designed to assist patients in quitting smoking."
        ],
        "answer": 1,
        "explanation": "💡 Main Idea: Paragraf 1 mendefinisikan disonansi kognitif, paragraf 2 menguraikan strategi rasionalisasi perilaku, dan paragraf 3 menjelaskan aplikasinya pada pengambilan keputusan."
      },
      {
        "id": "bank-r-toefl-u2-l8-1",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Cognitive Dissonance and Human Behavior",
          "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
        },
        "question": "According to paragraph 1, why do individuals feel motivated to resolve cognitive dissonance?",
        "options": [
          "Societal laws penalize inconsistent opinions.",
          "Humans possess an innate drive for internal consistency, making dissonance inherently uncomfortable.",
          "Contradictory thoughts trigger immediate physical pain in the nervous system.",
          "Peer pressure forces everyone to agree on common principles."
        ],
        "answer": 1,
        "explanation": "💡 Detail Fact: Paragraf 1 menyatakan: 'Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable'."
      },
      {
        "id": "bank-r-toefl-u2-l8-2",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Cognitive Dissonance and Human Behavior",
          "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
        },
        "question": "The word \"rationalize\" in paragraph 2 is closest in meaning to:",
        "options": [
          "justify with plausible excuses",
          "condemn publicly",
          "calculate mathematically",
          "forget completely"
        ],
        "answer": 0,
        "explanation": "💡 Vocabulary in Context: 'Rationalize' berarti membenarkan tindakan dengan alasan atau pembelaan diri (= justify with plausible excuses)."
      },
      {
        "id": "bank-r-toefl-u2-l8-3",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Cognitive Dissonance and Human Behavior",
          "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
        },
        "question": "The word \"their\" in paragraph 3 refers to:",
        "options": [
          "Deficiencies in automobile engines",
          "Individuals who commit to a decision",
          "Alternative choices that were rejected",
          "Medical researchers"
        ],
        "answer": 1,
        "explanation": "💡 Pronoun Referent: Dalam kalimat 'Once individuals commit to an irreversible decision... they often emphasize the superior qualities of their chosen option', kata 'their' merujuk pada 'individuals'."
      },
      {
        "id": "bank-r-toefl-u2-l8-4",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passage": {
          "title": "Cognitive Dissonance and Human Behavior",
          "text": "First articulated by American social psychologist Leon Festinger in 1957, the theory of cognitive dissonance remains one of the cornerstone concepts of modern psychology. Cognitive dissonance refers to the distressing mental tension experienced by an individual who simultaneously holds two contradictory beliefs, values, or ideas, or whose behavior directly conflicts with their deeply held convictions. Because human beings possess an innate psychological drive for internal consistency, experiencing dissonance is inherently uncomfortable, motivating individuals to reduce the disharmony through various cognitive coping strategies.\n\nWhen confronted with an acute contradiction between actions and principles, people rarely choose the most logical remedy—altering their established behavior. Modifying longstanding habits requires substantial willpower and effort. Instead, individuals frequently alter their perceptions or rationalize their conduct to harmonize the conflict. For example, consider chronic cigarette smokers who know the incontrovertible medical evidence that smoking causes fatal respiratory diseases. Rather than enduring nicotine withdrawal to quit, many resolve their dissonance by adopting defensive rationalizations, asserting that life is full of hazards regardless, that smoking relieves stress, or that empirical research exaggerates the risk.\n\nFurthermore, cognitive dissonance plays a prominent role in post-decisional regret and consumer choice, a phenomenon known as buyer's remorse. Once individuals commit to an irreversible decision between two equally appealing alternatives—such as purchasing an expensive automobile—they often emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative. By amplifying positive aspects and ignoring deficiencies, they preserve psychological equilibrium and validate their initial judgment."
        },
        "question": "Which of the following can be inferred about a person experiencing buyer's remorse?",
        "options": [
          "They will immediately return the product to the store without explanation.",
          "They tend to focus on the attractive features of the purchased item to reassure themselves that they made the right choice.",
          "They never consult reviews before making major financial commitments.",
          "They experience total memory loss regarding the price they paid."
        ],
        "answer": 1,
        "explanation": "💡 Inference: Paragraf 3 menjelaskan bahwa pembeli menepis keraguan dengan 'emphasize the superior qualities of their chosen option while systematically disparaging the discarded alternative'."
      },
      {
        "id": "bank-r-51",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "What is the primary topic of the passage?",
        "options": [
          "The engineering techniques used in constructing Maya limestone pyramids",
          "The role of severe paleoclimatic megadroughts in the collapse of the Classic Maya civilization",
          "The linguistic decipherment of ancient Mesoamerican hieroglyphic script",
          "A comparison of agricultural methods between the Maya and the Aztecs"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Ide Pokok (Main Idea). Teks secara komprehensif mengulas bagaimana temuan geologis paleoklimat (megadroughts) menjelaskan runtuhnya peradaban suku Maya Klasik."
      },
      {
        "id": "bank-r-52",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "According to paragraph 2, what modern scientific method helped uncover the cause of the Maya collapse?",
        "options": [
          "Satellite thermal imaging of buried jungle ruins",
          "Oxygen-isotope analyses of cave stalagmites and lake sediment cores",
          "Carbon-14 dating of royal timber artifacts",
          "Genetic sequencing of ancient Mesoamerican crop seeds"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Factual Detail. Paragraf 2 menyatakan secara eksplisit: 'specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab'."
      },
      {
        "id": "bank-r-53",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "The word 'percolates' in paragraph 3 is closest in meaning to:",
        "options": [
          "freezes",
          "filters through",
          "evaporates into",
          "bounces off"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Vocabulary in Context. 'Percolates' dalam konteks air hujan melalui batuan kapur berpori berarti 'filters through' (meresap/menyaring menembus ke dalam)."
      },
      {
        "id": "bank-r-54",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "Why was the Maya civilization particularly vulnerable to drought compared to other ancient societies?",
        "options": [
          "They did not know how to store food for the winter.",
          "The karst landscape lacked major surface rivers, forcing reliance on stored rainfall.",
          "Their military spent too much time away from farmlands.",
          "They had forgotten their traditional farming techniques."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Factual Inference. Paragraf 3 menjelaskan 'karst topography of the Yucatán lacks surface river networks... completely reliant on seasonal monsoon rains collected in artificial reservoirs'."
      },
      {
        "id": "bank-r-55",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "The word 'undermining' in paragraph 3 could best be replaced by:",
        "options": [
          "weakening",
          "celebrating",
          "establishing",
          "recording"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Vocabulary. 'Undermining divine authority' berarti 'weakening' (merongrong atau melemahkan otoritas kekuasaan para raja Maya)."
      },
      {
        "id": "bank-r-56",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "All of the following were traditional explanations for the Maya collapse EXCEPT:",
        "options": [
          "Inter-city warfare",
          "Royal succession disputes",
          "Soil depletion due to overfarming",
          "A massive asteroid impact in the Yucatán"
        ],
        "answer": 3,
        "explanation": "💡 Analisis TOEFL: Negative Factual (EXCEPT). Paragraf 2 menyebutkan warfare, succession crises, dan overfarming. Tumbukan asteroid tidak pernah disebutkan sebagai penyebab runtuhnya Maya Klasik."
      },
      {
        "id": "bank-r-57",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "By how much did annual rainfall decrease during the severe megadrought periods?",
        "options": [
          "Between 10 and 15 percent",
          "Between 20 and 25 percent",
          "Between 40 and 54 percent",
          "Nearly 100 percent"
        ],
        "answer": 2,
        "explanation": "💡 Analisis TOEFL: Detail Fact. Paragraf 3 menyebutkan: 'annual rainfall diminished by an estimated 40 to 54 percent'."
      },
      {
        "id": "bank-r-58",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "The author mentions 'plaster-lined reservoirs' in paragraph 3 to illustrate:",
        "options": [
          "The Maya's attempt to engineer artificial water storage systems in the absence of rivers",
          "The decorative artistic styles prevalent in urban public squares",
          "A method used by invading tribes to poison city drinking water",
          "The commercial trade in hydraulic plaster across the Caribbean"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Author's Purpose. Penulis menyebutkan waduk berlapis plester untuk menunjukkan upaya rekayasa Maya dalam menampung air hujan karena ketiadaan sungai di atas tanah."
      },
      {
        "id": "bank-r-59",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "What happened to the authority of the Maya rulers during the drought?",
        "options": [
          "It became absolute and unquestioned.",
          "It was diminished because people lost faith in their ability to petition the gods for rain.",
          "The kings resigned and joined the priesthood.",
          "The kings conquered northern territories to secure fresh river supplies."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Inference. Kalimat terakhir menjelaskan bahwa legitimasi raja bersandar pada kemampuan mereka memohon hujan kepada para dewa; ketika kekeringan berkepanjangan terjadi, kepercayaan masyarakat runtuh."
      },
      {
        "id": "bank-r-60",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "The Collapse of the Classic Maya Civilization and Megadroughts",
        "passageText": "For centuries, the Classic Maya civilization flourished across the dense tropical lowlands of the Yucatán Peninsula and Mesoamerica. Between 250 and 800 CE, the Maya constructed monumental limestone pyramids, developed a sophisticated hieroglyphic writing system, and achieved remarkable precision in astronomical calendar tracking. Yet, between 800 and 1000 CE, this prosperous urban network underwent a catastrophic collapse. Grand cities like Tikal, Palenque, and Calakmul were abruptly abandoned, agricultural terraces fell into disrepair, and millions perished or dispersed into the surrounding rainforest.\n\nHistorians long attributed the Maya downfall to warfare, royal succession crises, or environmental degradation caused by overfarming. However, recent paleoclimatic breakthroughs—specifically oxygen-isotope analyses of stalagmites from regional caves and sediment cores from Lake Chichancanab—have revolutionized this understanding. These geological proxies demonstrate that Mesoamerica suffered from the most severe series of prolonged megadroughts in over seven millennia between 800 and 1000 CE.\n\nThe Maya civilization was uniquely susceptible to precipitation deficits because the karst topography of the Yucatán lacks surface river networks. Rainwater rapidly percolates through porous limestone bedrock into deep subterranean aquifers, leaving communities completely reliant on seasonal monsoon rains collected in artificial plaster-lined reservoirs. When prolonged drought struck, annual rainfall diminished by an estimated 40 to 54 percent, causing reservoir evaporation and massive agricultural failures. Famine and the collapse of potable water supplies crippled the social hierarchy, undermining the divine authority of Maya kings whose primary legitimacy rested on their purported ability to intercede with the rain gods.",
        "question": "Which of the following can be inferred about the Classic Maya cities like Tikal and Palenque?",
        "options": [
          "They were rebuilt and repopulated during the Spanish colonial era.",
          "Their massive populations could not be sustained once reservoir storage failed.",
          "They had developed deep wells that reached the underground aquifers.",
          "They were completely destroyed by volcanic eruptions."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Inference. Ketergantungan kota-kota besar tersebut pada penampungan air membuat jutaan populasinya tidak dapat bertahan hidup begitu waduk mengering akibat kekeringan bertahun-tahun."
      },
      {
        "id": "bank-r-61",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "What is the main topic of the passage?",
        "options": [
          "The physical hardware components required to build commercial quantum computers",
          "How quantum computing threatens traditional public-key encryption and the rise of post-quantum cryptography",
          "The biography and mathematical achievements of Peter Shor",
          "A comparison of speed benchmarks between binary transistors and optical circuits"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Main Idea. Teks berfokus pada ancaman komputer kuantum terhadap kriptografi kunci publik klasik dan transisi menuju Post-Quantum Cryptography (PQC)."
      },
      {
        "id": "bank-r-62",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "According to paragraph 1, classical public-key cryptography is secure because:",
        "options": [
          "Quantum bits are too expensive to manufacture.",
          "Certain mathematical calculations are practically impossible for classical computers to solve in a reasonable timeframe.",
          "International law prohibits breaking government encrypted messages.",
          "Computers operate only on analog radio signals."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Factual Detail. Paragraf 1 menyatakan: 'predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers'."
      },
      {
        "id": "bank-r-63",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "The word 'inviolability' in paragraph 1 is closest in meaning to:",
        "options": [
          "unbreakability or security",
          "physical flexibility",
          "market profitability",
          "gradual obsolescence"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Vocabulary. 'Inviolability' (tidak dapat ditembus/dirusak) paling dekat maknanya dengan 'unbreakability or security'."
      },
      {
        "id": "bank-r-64",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "What unique quantum mechanical property allows qubits to represent multiple states at once?",
        "options": [
          "Superposition",
          "Thermal dissipation",
          "Electrical resistance",
          "Silicon oxidation"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Fact. Paragraf 2 menyatakan: 'Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously'."
      },
      {
        "id": "bank-r-65",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "The author mentions 'Peter Shor' in paragraph 2 in order to:",
        "options": [
          "Criticize mathematicians for releasing dangerous computer algorithms",
          "Introduce the algorithm that mathematically proves quantum computers can defeat standard encryption",
          "Demonstrate how quantum computers can predict weather patterns",
          "Explain the history of early 19th-century mechanical calculators"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Author's Purpose. Penulis merujuk Peter Shor untuk memperkenalkan algoritma kuantum ciptaannya yang mampu memecahkan faktorisasi prima dalam waktu polinomial, memecahkan enkripsi RSA."
      },
      {
        "id": "bank-r-66",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "The word 'looming' in paragraph 3 could best be replaced by:",
        "options": [
          "approaching or impending",
          "fading away",
          "unimportant",
          "historical"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Vocabulary. 'Looming vulnerability' berarti ancaman kerentanan yang 'approaching' atau 'impending' (sudah di depan mata/mengancam segera)."
      },
      {
        "id": "bank-r-67",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "Which agency is highlighted in paragraph 3 as spearheading the development of Post-Quantum Cryptography?",
        "options": [
          "The World Health Organization",
          "The National Institute of Standards and Technology (NIST)",
          "The Federal Aviation Administration",
          "The International Monetary Fund"
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Factual Detail. Paragraf 3 secara jelas menuliskan: 'led by the National Institute of Standards and Technology (NIST)'."
      },
      {
        "id": "bank-r-68",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "Post-Quantum Cryptography (PQC) relies on which mathematical foundations to resist attacks?",
        "options": [
          "Mathematical lattices, multivariate polynomials, and hash-based signatures",
          "Simple binary additions and arithmetic means",
          "Prime factorization of three-digit numbers",
          "Traditional Morse code encodings"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Fact. Paragraf 3 menyebutkan: 'constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures'."
      },
      {
        "id": "bank-r-69",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "It can be inferred from the passage that if a fault-tolerant quantum computer were built tomorrow without PQC in place:",
        "options": [
          "Internet speeds would immediately drop to zero.",
          "Current secure online financial transactions would become vulnerable to eavesdropping and decryption.",
          "Classical computers would instantly catch fire.",
          "Cryptographers would have no interest in building new algorithms."
        ],
        "answer": 1,
        "explanation": "💡 Analisis TOEFL: Inference. Paragraf 1 dan 2 menjelaskan bahwa transaksi keuangan digital saat ini diamankan oleh RSA yang akan dapat didekripsi dalam hitungan jam oleh komputer kuantum."
      },
      {
        "id": "bank-r-70",
        "section": "reading",
        "part": "Section 3: Academic Reading",
        "passageTitle": "Quantum Computing and the Cryptographic Paradigm Shift",
        "passageText": "Modern digital security relies almost universally on public-key cryptography, particularly algorithms such as RSA and Elliptic Curve Cryptography (ECC). These cryptographic protocols secure everything from confidential financial transactions and national security communications to fundamental Internet browsing authentication. Their inviolability is predicated on the mathematical intractability of certain problems for classical computers—specifically, the immense computational difficulty of factoring extremely large composite integers into prime factors or computing discrete logarithms.\n\nHowever, this cryptographic foundation faces existential disruption from the advent of quantum computing. Unlike classical computers, which manipulate binary bits constrained to states of 0 or 1, quantum computers harness quantum bits (qubits). Through the principles of superposition and quantum entanglement, qubits can represent multiple computational states simultaneously. In 1994, mathematician Peter Shor formulated a quantum algorithm capable of solving prime factorization in polynomial time. Once large-scale, fault-tolerant quantum processors are realized, Shor's algorithm will render current RSA-2048 encryption easily decipherable within hours rather than millennia.\n\nIn response to this looming vulnerability, cybersecurity agencies and international standards bodies—led by the National Institute of Standards and Technology (NIST)—have launched intensive initiatives to develop Post-Quantum Cryptography (PQC). PQC focuses on constructing novel cryptographic algorithms based on mathematical lattices, multivariate polynomials, and hash-based signatures that remain invulnerable to both classical and quantum computing attacks. This architectural transition represents the largest cryptographic overhaul in modern telecommunications history.",
        "question": "The author describes the transition to PQC as 'the largest cryptographic overhaul' because:",
        "options": [
          "It requires replacing global security protocols that have protected communication for decades",
          "It will make all mobile phones obsolete and unusable",
          "Only two scientists in the world understand the mathematics behind it",
          "It was completely rejected by international standards organizations"
        ],
        "answer": 0,
        "explanation": "💡 Analisis TOEFL: Synthesis & Inference. Transisi ini melibatkan perombakan mendasar seluruh arsitektur enkripsi yang telah mengamankan telekomunikasi dan internet dunia selama puluhan tahun."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.APP_DATA = APP_DATA;
if (typeof module !== 'undefined' && module.exports) module.exports = APP_DATA;
