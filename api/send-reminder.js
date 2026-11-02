const { pool } = require('./db');
const webPush = require('web-push');
require('dotenv').config();

const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || 'BOA7Frh6Eh0d1auW2ALi7zlHEJEi2HSmxHHfFdYMRorqTfmvKpbEzvazpxxM8XoVT5K2Rok6Q9Xp_3aIDyN270I';
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY || 'xSWrBRSA0PTtSGptq4PwVWISI5prcgtHI6NxapSl9Tw';
const vapidSubject = process.env.VAPID_SUBJECT || 'mailto:admin@basaloka.com';

webPush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);

// ─── ☀️ 20+ EDUCATIONAL & TRIVIA NUGGETS (Sesi Siang 12:00 WIB) ───
const NOON_MESSAGES = [
  {
    title: '💡 Trik TOEFL Siang Ini!',
    body: 'Kata "although" dan "but" ga boleh dipakai bersamaan dalam 1 kalimat TOEFL! Cek contoh benarnya yuk 📖'
  },
  {
    title: '☀️ Break Siang Sambil Listening!',
    body: '80% jawaban Listening Part A ada di ucapan orang kedua. Latih telingamu 1 kuis kilat sekarang 🎧'
  },
  {
    title: '🇰🇷 Kosakata Korea Hari Ini!',
    body: 'Kenapa orang Korea sering teriak "대박" (Daebak)? Artinya bukan cuma "hebat", tapikan sesuatu yang tak terduga!'
  },
  {
    title: '📐 Rumus 3 Detik TOEFL!',
    body: 'Setiap kalimat wajib punya tepat 1 Subject & 1 Verb. Awas jebakan Appositive & Preposisi!'
  },
  {
    title: '☕ Istirahat 5 Menit BasaLoka',
    body: 'Daripada scrolling sosmed, yuk tebak 5 idiom bahasa Inggris populer yang sering keluar di kampus!'
  },
  {
    title: '💡 Jebakan Bunyi Mirip TOEFL',
    body: 'Audio bilang "pain" (sakit), tapi di opsi ada "plane" (pesawat). 90% itu jebakan distracter! Waspada ya.'
  },
  {
    title: '🇰🇷 Rahasia Huruf "ㅇ" Hangul',
    body: 'Kalau ㅇ di atas bunyinya bisu (0), tapi kalau di bawah bunyinya "ng"! Udah hafal belum?'
  },
  {
    title: '📖 Academic Reading Hack',
    body: 'Pertanyaan "Main Idea" selalu bisa dijawab dari kalimat pertama atau kedua setiap paragraf. Hemat waktumu!'
  },
  {
    title: '⚡ Boost Fokus Siangmu!',
    body: 'Selesaikan 1 sesi kilat sekarang, kumpulkan +30 XP untuk naikin rank mingguanmu di BasaLoka!'
  },
  {
    title: '💡 Trik Inversi TOEFL',
    body: 'Kalau kalimat diawali kata negatif (Not only, Rarely, Seldom), posisi Subject dan Verb wajib dibalik!'
  },
  {
    title: '🇰🇷 Ungkapan Gaul Korea',
    body: 'Tahu arti "치맥" (Chimaek)? Gabungan dari Chicken (ayam goreng) + Maekju (bir)! Kultur populer di Seoul 🍗'
  },
  {
    title: '🎯 Parallel Structure Check',
    body: 'Kalau ada kata "and/or/but", bentuk katanya harus kembar: V-ing ketemu V-ing, Adjective ketemu Adjective!'
  },
  {
    title: '☀️ Energi Tengah Hari!',
    body: 'Otak manusia menyerap memori lebih kuat saat diselingi kuis interaktif singkat. Coba 1 sesi sekarang 🚀'
  },
  {
    title: '💡 Trik Tebak Arti Kata Asing',
    body: 'Lihat awalan & akhiran kata: "un-" artinya tidak, "-able" artinya dapat. Soal reading jadi jauh lebih mudah!'
  },
  {
    title: '🇰🇷 Sopan vs Akrab (존댓말)',
    body: 'Akhiran "-요" (-yo) dan "-습니다" (-seumnida) bikin bicaramu auto sopan saat di Korea. Praktikkan yuk!'
  },
  {
    title: '🎧 TOEFL Part B & C Strategy',
    body: 'Jangan coba catat semua kata! Catat hanya 5W+1H (Siapa, Kapan, Apa masalah utamanya). Coba latih sekarang!'
  },
  {
    title: '🌟 Micro-Learning Break',
    body: 'Cuma butuh 3 menit untuk belajar 1 pola tata bahasa baru. Ayo ambil XP siangmu sebelum balik beraktivitas!'
  },
  {
    title: '💡 Dosa Terbesar Error Analysis',
    body: 'Make, Have, Let diikuti Bare Infinitive (kata kerja dasar tanpa "to"). Jangan sampai salah pilih ya!'
  },
  {
    title: '🇰🇷 Kata Semangat Favorit!',
    body: '"화이팅!" (Hwaiting / Fighting) adalah mantra penyemangat paling sering diucapkan di Korea. Semangat harimu!'
  },
  {
    title: '🏆 Target Skor TOEFL Kampus',
    body: 'Rata-rata syarat skripsi & wisuda adalah skor 450–500. Kamu selangkah lebih dekat dengan latihan hari ini!'
  }
];

// Helper to calculate Day of Year (1 - 366)
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// ─── 🌙 DYNAMIC EVENING STREAK & MILESTONE ENGINE (Sesi Malam 19:00 WIB) ───
function getDynamicEveningMessage(username, streak, playedToday, dayOfYear) {
  const name = username ? username.trim() : 'Sobat Loka';
  const currentStreak = Number.isInteger(streak) ? streak : 0;

  // 1. If user ALREADY studied today, congratulate & invite for optional bonus XP
  if (playedToday) {
    const safeStreakMessages = [
      {
        title: `✨ Streak ${currentStreak} Hari Aman, ${name}!`,
        body: 'Kamu sudah belajar hari ini, keren banget! Mau coba 1 kuis santai lagi untuk bonus XP malam ini? ⚡'
      },
      {
        title: `🌙 Hari yang Produktif, ${name}!`,
        body: `Streak ${currentStreak} harimu sudah terkunci aman. Selamat beristirahat dan sampai jumpa esok hari!`
      },
      {
        title: `🔥 Konsistensi Level Juara!`,
        body: `Hebat, ${name}! Api streak ${currentStreak} hari tetap menyala. Terus melangkah menuju impian skor TOEFL-mu 🌟`
      }
    ];
    return safeStreakMessages[dayOfYear % safeStreakMessages.length];
  }

  // 2. If user HAS NOT studied today, dynamic milestone & urgency messages!
  if (currentStreak === 0) {
    const starterMessages = [
      {
        title: `🌱 Mulai Langkah Pertamamu Malam Ini!`,
        body: `Halo ${name}, yuk selesaikan 1 kuis kilat (3 menit) malam ini untuk menyalakan api Streak Hari ke-1! 🔥`
      },
      {
        title: `🎯 Luangkan 5 Menit Sebelum Tidur`,
        body: `Belajar sedikit setiap hari jauh lebih dahsyat daripada maraton semalam. Mulai hari pertamamu sekarang yuk, ${name}!`
      },
      {
        title: `🚀 BasaLoka Menunggumu, ${name}!`,
        body: '1 sesi latihan singkat malam ini bisa mengubah kepercayaan dirimu saat tes TOEFL nanti. Yuk buka materi!'
      }
    ];
    return starterMessages[dayOfYear % starterMessages.length];
  }

  if (currentStreak === 1) {
    return {
      title: `🔥 Hari ke-2 Menantimu, ${name}!`,
      body: 'Langkah pertama sudah kamu lewati kemarin. Jangan biarkan apinya padam, raih Streak Hari ke-2 malam ini!'
    };
  }

  if (currentStreak >= 2 && currentStreak <= 6) {
    return {
      title: `🔥 Streak ${currentStreak} Hari Dalam Bahaya!`,
      body: `Halo ${name}, tinggal beberapa jam lagi sebelum streak ${currentStreak} harimu hangus! Amankan dengan 1 sesi kilat sekarang ⏰`
    };
  }

  if (currentStreak === 7) {
    return {
      title: `🏆 1 MINGGU PENUH! Rekor Hebat, ${name}!`,
      body: '7 hari berturut-turut konsisten bukan hal mudah! Jangan biarkan apimu padam di malam penentuan ini 🔥'
    };
  }

  if (currentStreak >= 8 && currentStreak <= 13) {
    return {
      title: `🔥 Hari ke-${currentStreak}! Streak Makin Membara!`,
      body: `Kamu sudah di atas rata-rata pembelajar lain, ${name}! Amankan hari ke-${currentStreak} sebelum tengah malam tiba.`
    };
  }

  if (currentStreak === 14) {
    return {
      title: `🎉 2 MINGGU LENGKAP TANPA PUTUS!`,
      body: `Luar biasa ${name}! 14 hari penuh disiplin. Amankan malam ini untuk membuka badge pencapaian berikutnya 🏆`
    };
  }

  if (currentStreak >= 15 && currentStreak <= 20) {
    return {
      title: `⚡ Hari ke-${currentStreak}! Otakmu Makin Terlatih!`,
      body: `Pola kalimat TOEFL sudah mulai kamu kuasai di luar kepala, ${name}. Yuk luangkan 5 menit sebelum tidur!`
    };
  }

  if (currentStreak === 21) {
    return {
      title: `🧠 3 MINGGU BERUNTUN! Habit Terbentuk!`,
      body: `Menurut riset psikologi, 21 hari konsisten membuat belajar jadi kebiasaan alami. Bangga banget sama kamu, ${name}! 🌟`
    };
  }

  if (currentStreak >= 22 && currentStreak <= 29) {
    return {
      title: `🔥 Hari ke-${currentStreak}! Menuju Rekor 1 Bulan!`,
      body: `Tinggal sedikit lagi menuju rekor 30 hari, ${name}! Jangan biarkan perjuangan berminggu-minggu terputus malam ini.`
    };
  }

  if (currentStreak === 30) {
    return {
      title: `👑 1 BULAN PENUH! Rekor Legendaris!`,
      body: `30 HARI STREAK, ${name}! Ini bukti nyata dedikasi kamu. Calon peraih skor TOEFL 550+ sejati 🏆`
    };
  }

  // 31+ days
  return {
    title: `🔥 Streak Hari ke-${currentStreak}! Luar Biasa!`,
    body: `Mahkota konsistensi ada di tanganmu, ${name}. Selesaikan 1 kuis kilat malam ini untuk menjaga rekormu tetap abadi!`
  };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    const isTest = req.query?.test === 'true' || req.body?.test === true;
    const targetEndpoint = req.body?.endpoint || null;

    // Join with users and user_progress to enable personalized context-aware notifications!
    let query = `
      SELECT
        ps.endpoint, ps.p256dh, ps.auth, ps.user_id,
        u.username,
        up.streak, up.last_play_date, up.total_xp
      FROM push_subscriptions ps
      LEFT JOIN users u ON ps.user_id = u.id
      LEFT JOIN user_progress up ON ps.user_id = up.user_id
      WHERE ps.is_active = 1
    `;
    let params = [];

    if (targetEndpoint) {
      query += ' AND ps.endpoint = ?';
      params.push(targetEndpoint);
    }

    const [rows] = await pool.query(query, params);

    if (!rows || rows.length === 0) {
      return res.status(200).json({
        message: 'Tidak ada subscriber aktif yang cocok ditemukan.',
        sentCount: 0
      });
    }

    const dayOfYear = getDayOfYear();
    const nowWIBHour = (new Date().getUTCHours() + 7) % 24;
    const isNoon = nowWIBHour >= 11 && nowWIBHour < 15;
    const todayStr = new Date().toDateString();

    let successCount = 0;
    let failedCount = 0;

    const sendPromises = rows.map(async (row, index) => {
      let payload;

      if (isTest) {
        payload = {
          title: '🔔 Pengingat BasaLoka Aktif!',
          body: `Halo ${row.username || 'Sobat Loka'}! Notifikasi pengingat 2x sehari (12:00 Siang & 19:00 Malam) sudah aktif di HP kamu!`,
          icon: '/images/icon-192.png',
          badge: '/images/favicon.png',
          url: '/'
        };
      } else if (isNoon) {
        // Noon Session: Educational tips & trivia nuggets, rotated pseudo-randomly per subscriber & date
        const tipIndex = (dayOfYear + index) % NOON_MESSAGES.length;
        const msg = NOON_MESSAGES[tipIndex];
        payload = {
          title: msg.title,
          body: msg.body,
          icon: '/images/icon-192.png',
          badge: '/images/favicon.png',
          url: '/'
        };
      } else {
        // Evening Session: Adaptive streak milestone & gamified safeguard
        const playedToday = (row.last_play_date === todayStr);
        const eveningMsg = getDynamicEveningMessage(row.username, row.streak, playedToday, dayOfYear);
        payload = {
          title: eveningMsg.title,
          body: eveningMsg.body,
          icon: '/images/icon-192.png',
          badge: '/images/favicon.png',
          url: '/'
        };
      }

      const sub = {
        endpoint: row.endpoint,
        keys: {
          p256dh: row.p256dh,
          auth: row.auth
        }
      };

      try {
        await webPush.sendNotification(sub, JSON.stringify(payload));
        successCount++;
      } catch (err) {
        failedCount++;
        // If expired or gone (e.g. user uninstalled app or revoked permission), deactivate cleanly
        if (err.statusCode === 404 || err.statusCode === 410) {
          await pool.query('UPDATE push_subscriptions SET is_active = 0 WHERE endpoint = ?', [row.endpoint]);
        }
      }
    });

    await Promise.all(sendPromises);

    return res.status(200).json({
      message: `Notifikasi dinamis berhasil dikirim ke ${successCount} perangkat.`,
      successCount,
      failedCount
    });

  } catch (err) {
    console.error('Error in send-reminder:', err);
    return res.status(500).json({ error: 'Gagal mengirim pengingat push dinamis.' });
  }
};
