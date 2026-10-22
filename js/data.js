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
        "id": "toefl-u-hack",
        "title": "📅 Day 1: Listening Part A (Trik Second Speaker & Anti-Bunyi Mirip)",
        "titleNative": "Second Speaker Focus, Similar Sound Traps & Campus Idioms",
        "icon": "🎧",
        "color": "#f59e0b",
        "month": 1,
        "description": "Fokus hari ke-1 (30–45 menit): Kuasai 80% soal Listening Part A! Pelajari cara mengabaikan bunyi mirip, menangkap intisari orang kedua, dan idiom kampus sehari-hari.",
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
          }
        ]
      },
      {
        "id": "toefl-day2",
        "title": "🎙️ Day 2: Listening Part B & C (Catatan Kuliah & Percakapan Panjang)",
        "titleNative": "Anticipating Questions, Note-Taking Strategy & Academic Lectures",
        "icon": "🎙️",
        "color": "#06b6d4",
        "month": 1,
        "description": "Fokus hari ke-2 (30–45 menit): Menghadapi audio panjang 2–3 menit tanpa panik! Trik scan pilihan ganda sebelum audio mulai dan mencatat pola Sebab-Akibat kuliah profesor.",
        "lessons": [
          {
            "id": "toefl-d2-l1",
            "title": "Note-Taking Kuliah Profesor: Pola Sebab-Akibat & Kronologi",
            "type": "flashcard-quiz",
            "xpReward": 30,
            "cards": [
              {
                "front": "📝 TEKNIK CORNELL TOEFL",
                "romanization": "Strategi Menyimak Kuliah 3 Menit",
                "pronunciation": "Topic Sentence & Key Connectors",
                "example": "Prof: \"Today we will examine two primary causes of desertification...\"",
                "exampleMeaning": "Fokus tangkap: Topik (Desertification / Penggurunan) dan Pola Pembahasan (2 penyebab utama).",
                "tip": "💡 Tulis singkatan di kertas coretan: T = Topic, C1 = Cause 1, C2 = Cause 2. Jangan tulis kalimat panjang!",
                "ttsText": "Today we will examine two primary causes of desertification.",
                "ttsLang": "en-US"
              },
              {
                "front": "⚡ KATA TRANSISI SEBAB-AKIBAT",
                "romanization": "Pemicu Munculnya Soal Ujian",
                "pronunciation": "Consequently, As a result, Due to",
                "example": "\"Consequently, the soil loses its capacity to retain moisture.\"",
                "exampleMeaning": "Kata \"Consequently\" menandakan akibat penting yang 90% akan ditanyakan di kuis pemahaman!",
                "tip": "💡 Saat mendengar \"Consequently\", \"Because of this\", atau \"The main factor is\", langsung pasang telinga ekstra tajam.",
                "ttsText": "Consequently, the soil loses its capacity to retain moisture.",
                "ttsLang": "en-US"
              },
              {
                "front": "⏳ KATA TRANSISI KRONOLOGI",
                "romanization": "Urutan Proses & Sejarah",
                "pronunciation": "Initially, Subsequently, Eventually",
                "example": "\"Initially, only the upper canopy is affected; subsequently, root systems decay.\"",
                "exampleMeaning": "Urutan tahap: Mula-mula kanopi atas terkena dampak, selanjutnya sistem akar membusuk.",
                "tip": "💡 Soal urutan proses (Process questions) selalu menguji kata: Initially (awal) -> Subsequently (lalu) -> Eventually (akhirnya).",
                "ttsText": "Initially, only the upper canopy is affected; subsequently, root systems decay.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Di bagian manakah ide pokok (Main Idea) ceramah kuliah (Lecture Part C) TOEFL hampir SELALU diucapkan oleh dosen?",
                "options": [
                  "Di 2–3 kalimat pertama (30 detik awal kuliah).",
                  "Di pertengahan setelah ada sesi tanya jawab.",
                  "Di kalimat terakhir tepat sebelum kelas selesai.",
                  "Hanya saat dosen mengulang kata yang sama tiga kali."
                ],
                "answer": 0,
                "explanation": "💡 Rumus Kuliah TOEFL: Dosen ETS selalu mengenalkan topik bahasan di 30 detik pertama: \"Today, we're going to examine...\" atau \"In our last class we talked about X, but today we focus on Y\"."
              },
              {
                "q": "Jika dosen berkata: \"Now, let's turn our attention to the secondary cause...\", apa fungsi frasa tersebut dalam mendengarkan?",
                "options": [
                  "Transisi topik penting (tanda pergantian poin soal berikutnya).",
                  "Tanda bahwa dosen akan mengakhiri kuliah.",
                  "Tanda bahwa penjelasan sebelumnya salah.",
                  "Hanya gurauan pembuka dosen."
                ],
                "answer": 0,
                "explanation": "💡 Transition Markers: Kata seperti \"Now let's turn to...\", \"However...\", atau \"Another factor is...\" menandakan peralihan ke poin soal berikutnya!"
              },
              {
                "q": "Dosen: \"While many historians believed the collapse occurred suddenly, recent soil samples suggest a prolonged drought.\" — Apa inti kuliah?",
                "options": [
                  "Keruntuhan peradaban terjadi secara bertahap akibat kemarau panjang, bukan mendadak.",
                  "Petani zaman dulu tidak memiliki tanah yang subur.",
                  "Para sejarawan selalu benar dalam analisisnya.",
                  "Banjir besar menenggelamkan kota kuno."
                ],
                "answer": 0,
                "explanation": "💡 Kontras \"While X... Y\": Ide pokok selalu berada di klausa utama (Y). Dosen menekankan bahwa kemarau panjang yang berlangsung lama adalah penyebabnya."
              },
              {
                "q": "Audio: \"The professor's tone when discussing the new solar panel efficiency sounded rather skeptical.\" — Apa arti nada suara (tone) dosen?",
                "options": [
                  "Dosen sangat mendukung dan yakin dengan teknologi itu.",
                  "Dosen meragukan klaim efisiensi panel surya tersebut.",
                  "Dosen marah kepada mahasiswa.",
                  "Dosen tidak mengerti cara kerja panel surya."
                ],
                "answer": 1,
                "explanation": "💡 Soal Tone & Attitude: Kata \"skeptical\" berarti ragu/sangsi. Dosen tidak langsung percaya terhadap klaim efisiensi yang diajukan."
              },
              {
                "q": "Manakah kata penanda urutan kronologis yang menandakan jawaban untuk soal proses/tahapan?",
                "options": [
                  "\"Initially... subsequently... ultimately...\"",
                  "\"Perhaps... maybe... supposedly...\"",
                  "\"Regardless... anyway... somehow...\"",
                  "\"Whereas... nevertheless... nonetheless...\""
                ],
                "answer": 0,
                "explanation": "💡 Soal Tahapan Proses: Perhatikan kata kunci urutan: Initially (awalnya), subsequently (berikutnya), ultimately (pada akhirnya)."
              },
              {
                "q": "Dosen: \"The term 'echolocation' refers to the ability of bats to navigate using high-frequency sound waves.\" — Pertanyaan: Apa topik bahasan dosen?",
                "options": [
                  "Penyakit yang sering menyerang populasi kelelawar.",
                  "Mekanisme navigasi kelelawar menggunakan pantulan gelombang suara.",
                  "Cara kelelawar mencari pasangan di dalam gua.",
                  "Perbandingan kecepatan terbang burung dan kelelawar."
                ],
                "answer": 1,
                "explanation": "💡 Definisi Istilah: Frasa \"The term X refers to Y\" adalah sinyal kuat bahwa pertanyaan nomor 1 pasti menanyakan definisi/fungsi X."
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
            "title": "Part C Drill: Kuliah Mini Sains (Photosynthesis & Plant Biology)",
            "type": "flashcard-quiz",
            "xpReward": 35,
            "cards": [
              {
                "front": "🌿 KULIAH BIOLOGI TOEFL",
                "romanization": "Tema Sains Paling Sering Muncul",
                "pronunciation": "Chlorophyll and Solar Energy Conversion",
                "example": "Prof: \"Plants utilize chlorophyll pigments to absorb sunlight wavelengths, converting carbon dioxide and water into glucose.\"",
                "exampleMeaning": "Tumbuhan menggunakan pigmen klorofil untuk menyerap sinar matahari, mengubah CO2 dan air menjadi glukosa.",
                "tip": "💡 Topik sains TOEFL tidak menuntut kamu jadi ilmuwan, kamu hanya perlu memahami relasi Subjek -> Kata Kerja -> Hasil.",
                "ttsText": "Plants utilize chlorophyll pigments to absorb sunlight wavelengths, converting carbon dioxide and water into glucose.",
                "ttsLang": "en-US"
              },
              {
                "front": "💡 FAKTOR PEMBATAS (LIMITING FACTOR)",
                "romanization": "Soal Kondisi Ekstrem Sains",
                "pronunciation": "When light intensity peaks...",
                "example": "\"When ambient temperature exceeds forty degrees, enzymatic proteins denature, halting the entire cycle.\"",
                "exampleMeaning": "Bila suhu melebihi 40 derajat, protein enzim rusak (denaturasi), menghentikan seluruh siklus fotosintesis.",
                "tip": "💡 Pertanyaan TOEFL sering menanyakan kondisi ekstrim: \"What happens when temperature is too high?\"",
                "ttsText": "When ambient temperature exceeds forty degrees, enzymatic proteins denature, halting the entire cycle.",
                "ttsLang": "en-US"
              }
            ],
            "quiz": [
              {
                "q": "Idiom Kampus: \"I need to burn the midnight oil tonight.\" — Apa yang akan dilakukan pembicara?",
                "options": [
                  "Membeli minyak kompor di minimarket.",
                  "Belajar atau bekerja sampai larut malam.",
                  "Membakar kertas tugas yang salah.",
                  "Tidur lebih awal karena lelah."
                ],
                "answer": 1,
                "explanation": "💡 \"Burn the midnight oil\" = begadang belajar/bekerja hingga larut malam. Jebakan: jangan pilih kata yang berkaitan dengan minyak/api!"
              },
              {
                "q": "Idiom Kampus: \"Let's call it a day.\" — Kapan ungkapan ini digunakan?",
                "options": [
                  "Saat menanyakan hari apa sekarang.",
                  "Saat memutuskan untuk menyudahi pekerjaan hari ini dan pulang.",
                  "Saat membuat janji temu baru di siang hari.",
                  "Saat merayakan ulang tahun teman sekelas."
                ],
                "answer": 1,
                "explanation": "💡 \"Call it a day\" = cukupkan dulu pekerjaan untuk hari ini. Sangat sering keluar di soal penutup percakapan Part A & B."
              },
              {
                "q": "Idiom Kampus: \"The mid-term exam was a piece of cake.\" — Apa yang dirasakan siswa?",
                "options": [
                  "Ujiannya sangat mudah dikerjakan.",
                  "Pengawas membagikan kue bolu di ruang ujian.",
                  "Ujiannya membutuhkan waktu makan siang.",
                  "Siswa tersebut lapar saat mengerjakan soal."
                ],
                "answer": 0,
                "explanation": "💡 \"Piece of cake\" = sangat mudah (very easy). Hindari opsi yang mengandung makanan/kue!"
              },
              {
                "q": "Woman: \"Are you ready for the presentation?\" / Man: \"I've got butterflies in my stomach.\" — Apa kondisi pria?",
                "options": [
                  "Dia sakit perut karena keracunan makanan.",
                  "Dia merasa sangat gugup atau cemas.",
                  "Dia sedang mengamati serangga di laboratorium biologi.",
                  "Dia sangat percaya diri dan tenang."
                ],
                "answer": 1,
                "explanation": "💡 \"Butterflies in one's stomach\" = merasa gugup / cemas (nervous), terutama sebelum tampil di depan umum."
              },
              {
                "q": "Man: \"I don't think I can finish the thesis on time.\" / Woman: \"Hang in there! You're almost done.\" — Apa maksud wanita?",
                "options": [
                  "Menyuruh pria menggantung dokumennya di dinding.",
                  "Memberi semangat agar pria tetap bertahan dan tidak menyerah.",
                  "Menyuruh pria menyerah saja sekarang.",
                  "Menolak membantu pria menyelesaikan skripsinya."
                ],
                "answer": 1,
                "explanation": "💡 \"Hang in there!\" = ungkapan penyemangat: tetaplah bertahan, jangan putus asa!"
              },
              {
                "q": "Woman: \"Did the professor accept your late paper?\" / Man: \"He gave me a cold shoulder.\" — Apa arti respon pria?",
                "options": [
                  "Ruang dosen memiliki AC yang sangat dingin.",
                  "Dosen bersikap dingin, tidak ramah, dan mengabaikan permohonannya.",
                  "Dosen mengalami cedera pada pundaknya.",
                  "Dosen menerimanya dengan ramah dan tersenyum."
                ],
                "answer": 1,
                "explanation": "💡 \"Give someone a cold shoulder\" = bersikap dingin, acuh tak acuh, atau menolak secara tidak ramah."
              }
            ]
          }
        ]
      },
      {
        "id": "toefl-day3",
        "title": "📐 Day 3: Structure 1–15 (Rumus S+V & Konektor Klausa)",
        "titleNative": "Subject-Verb Formula, Appositive Traps & Multi-Clause Connectors",
        "icon": "📐",
        "color": "#10b981",
        "month": 1,
        "description": "Fokus hari ke-3 (30–45 menit): Lumbung poin tercepat! Setiap kalimat wajib punya 1 Subjek & 1 Kata Kerja. Waspada jebakan koma (Appositive) dan rumus konektor klausa.",
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
          }
        ]
      },
      {
        "id": "toefl-day4",
        "title": "🕵️ Day 4: Written Expression 16–40 (Detektif 5 Dosa Error)",
        "titleNative": "Subject-Verb Agreement, Parallel Structure & Word Form Traps",
        "icon": "🕵️",
        "color": "#ec4899",
        "month": 1,
        "description": "Fokus hari ke-4 (30–45 menit): Temukan kata yang salah digarisbawahi dalam 20 detik! 5 Dosa: Agreement, Parallel Structure, Verb Form tertukar, Adjective vs Adverb, dan Countable Nouns.",
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
          }
        ]
      },
      {
        "id": "toefl-day5",
        "title": "⚡ Day 5: Jurus Lanjutan 550+ (Inversi, Reduced Clauses & Tanpa If)",
        "titleNative": "Inverted Word Order, Reduced Participles & Conditionals without If",
        "icon": "⚡",
        "color": "#8b5cf6",
        "month": 1,
        "description": "Fokus hari ke-5 (30–45 menit): Kunci tembus skor 550 ke atas! Soal-soal tingkat dewa yang sering mengecoh: Inversi kata negatif (Never, Seldom), pemendekan klausa partisipel, dan pengandaian tanpa If.",
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
          }
        ]
      },
      {
        "id": "toefl-day6",
        "title": "📖 Day 6: Reading Ninja (Scan & Skim Cepat Tanpa Baca Semua)",
        "titleNative": "Main Idea, Negative Factual EXCEPT, Pronoun Reference & Context Vocab",
        "icon": "📖",
        "color": "#3b82f6",
        "month": 1,
        "description": "Fokus hari ke-6 (30–45 menit): Habiskan 50 soal reading tanpa kehabisan waktu! Jawab Main Idea dari baris pertama, scan opsi EXCEPT, lacak rujukan Pronoun, dan tebak arti kata dari konteks.",
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
          }
        ]
      },
      {
        "id": "toefl-day7",
        "title": "🎓 Day 7: Simulasi Ujian Lengkap & Prediksi Skor Resmi (310–677)",
        "titleNative": "Pacing Strategy, 10-Question High-Yield Drill & Diagnostic Scaled Score",
        "icon": "🏆",
        "color": "#f59e0b",
        "month": 1,
        "description": "Fokus hari ke-7 (30–45 menit): Gladi bersih hari H! Alokasi waktu 37 detik per soal, trik eliminasi cerdas tanpa minus nilai, drill kilat 10 soal standar ETS, dan cek prediksi skormu.",
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
                "example": "Uji penguasaan konsep 7 hari dalam 1 set soal kurasi penentu skor 500+.",
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
        ]
      },
      {
        "id": "toefl-u1",
        "title": "📚 Bank Kosakata Akademik (Academic Word List - AWL)",
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
        ]
      },
      {
        "id": "toefl-u2",
        "title": "🔬 Pemahaman Teks Ekstra (Science & History Passages)",
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
          }
        ]
      },
      {
        "id": "toefl-u4",
        "title": "✍️ Keterampilan Struktur Esai & Kalimat Akademik",
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
        ]
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
  }
};
