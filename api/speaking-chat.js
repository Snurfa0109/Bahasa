/**
 * API Endpoint: /api/speaking-chat
 * Real Dynamic AI Speaking Companion for English Learner
 * Powered by Google Gemini (with smart local fallback engine)
 */

const https = require('https');

// Built-in topics pool (refreshed daily or on user request)
const SPEAKING_TOPICS = [
  {
    id: 'daily_routine',
    title: 'Morning Routine & Daily Life ☀️',
    badge: 'Daily Life',
    opener: "Hey there! How has your day been going so far? Tell me, what time do you usually wake up in the morning, and what's the first thing you do?",
    openerId: "Halo! Gimana harimu sejauh ini? Coba ceritain, biasanya kamu bangun jam berapa di pagi hari dan apa hal pertama yang kamu lakuin?",
    starters: ["I usually wake up around 6 AM.", "To be honest, I'm not a morning person!", "The first thing I do is check my phone."]
  },
  {
    id: 'comfort_food',
    title: 'Favorite Comfort Food & Cafes 🍕☕',
    badge: 'Food & Drinks',
    opener: "I'm feeling a bit hungry today! What's your absolute favorite comfort food when you want to treat yourself, and where do you usually get it?",
    openerId: "Aku lagi agak laper nih hari ini! Makanan favorit apa yang paling kamu suka pas pengen manjain diri, dan biasanya belinya di mana?",
    starters: ["I really love spicy food, especially noodles.", "My comfort food is definitely pizza with extra cheese.", "I love chilling at quiet cafes with an iced latte."]
  },
  {
    id: 'weekend_vibes',
    title: 'Weekend Plans & Relaxation 🏖️',
    badge: 'Lifestyle',
    opener: "The weekend always feels too short! If you have completely free time this weekend, what would your ideal day look like?",
    openerId: "Akhir pekan rasanya selalu cepet banget ya! Kalau akhir pekan ini kamu bener-bener luang, hari ideal kamu bakal ngapain aja?",
    starters: ["I would probably stay home and binge-watch series.", "I love hanging out outdoors with my friends.", "I just want to sleep in and read a good book."]
  },
  {
    id: 'dream_travel',
    title: 'Dream Vacation & Hidden Gems ✈️🌏',
    badge: 'Travel',
    opener: "Let's imagine you just won a free plane ticket anywhere in the world! Which country or city would you fly to first, and why?",
    openerId: "Bayangin kamu baru menang tiket pesawat gratis ke mana aja di dunia! Negara atau kota mana yang bakal kamu tuju pertama kali, dan kenapa?",
    starters: ["I've always dreamed of visiting Japan during spring.", "I would fly straight to Switzerland for the mountains.", "I want to explore London and visit its museums."]
  },
  {
    id: 'movies_music',
    title: 'Favorite Movies, Music & Series 🎬🎵',
    badge: 'Entertainment',
    opener: "I need some fresh recommendations! What kind of movies or music have you been obsessed with lately?",
    openerId: "Aku butuh rekomendasi baru nih! Film atau musik genre apa yang lagi sering banget kamu tonton/dengerin akhir-akhir ini?",
    starters: ["I'm really into thriller and mystery movies.", "I listen to upbeat pop and indie music all the time.", "I recently finished a great series on Netflix."]
  },
  {
    id: 'college_career',
    title: 'Study, Goals & Future Dreams 🎯💼',
    badge: 'Ambition',
    opener: "Everyone has something they're currently working towards. What are you studying or working on right now, and what's your big dream for the future?",
    openerId: "Setiap orang pasti punya tujuan yang lagi diperjuangkan. Kamu lagi kuliah atau ngerjain apa sekarang, dan apa impian besarmu ke depan?",
    starters: ["I'm a college student preparing for graduation.", "I'm improving my English to get a scholarship or job.", "My dream is to work in a global tech company."]
  }
];

// Helper: Common Indonesian learner grammar recasting heuristics
function detectGrammarTips(text) {
  if (!text) return null;
  const lower = text.toLowerCase();

  if (/\bi\s+am\s+agree\b/.test(lower)) {
    return {
      wrong: "I am agree",
      better: "I agree",
      note: "Dalam bahasa Inggris, 'agree' adalah kata kerja (verb), jadi langsung ucapkan 'I agree' tanpa to be 'am'."
    };
  }
  if (/\byesterday\b.*\b(i|we|they|he|she)\s+go\b/.test(lower) || /\b(i|we|they|he|she)\s+go\b.*\byesterday\b/.test(lower)) {
    return {
      wrong: "...go yesterday",
      better: "...went yesterday",
      note: "Untuk menceritakan kejadian kemarin (lampau), gunakan kata kerja bentuk kedua (V2): 'went' bukan 'go'."
    };
  }
  if (/\bi\s+am\s+graduate\b/.test(lower)) {
    return {
      wrong: "I am graduate",
      better: "I graduated (lampau) atau I am a graduate (kata benda)",
      note: "Gunakan 'I graduated' jika sudah lulus, atau 'I will graduate' jika akan lulus."
    };
  }
  if (/\bmore\s+better\b/.test(lower)) {
    return {
      wrong: "more better",
      better: "much better atau better",
      note: "'Better' sudah berarti lebih baik, jadi jangan ditambah 'more' lagi ya."
    };
  }
  if (/\bi\s+have\s+eat\b/.test(lower)) {
    return {
      wrong: "I have eat",
      better: "I have eaten",
      note: "Setelah have/has (Present Perfect), gunakan kata kerja bentuk ketiga (V3): 'eaten'."
    };
  }
  if (/\b(she|he)\s+don't\b/.test(lower)) {
    return {
      wrong: "he/she don't",
      better: "he/she doesn't",
      note: "Untuk subjek tunggal (he, she, it) gunakan 'doesn't' ya."
    };
  }
  if (/\b(everyday|every\s+day)\b.*\b(she|he)\s+(work|go|study|eat)\b/.test(lower)) {
    return {
      wrong: "he/she [verb 1]",
      better: "he/she works/goes/studies (tambah s/es)",
      note: "Di tenses kebiasaan (Simple Present), he/she/it kata kerjanya ditambah -s atau -es."
    };
  }
  return null;
}

// Call Google Gemini API
async function callGemini(apiKey, systemInstruction, history, userText, topicTitle) {
  return new Promise((resolve, reject) => {
    const contents = [];

    // Map history to Gemini contents format
    (history || []).forEach(msg => {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{
        text: `The user said: "${userText}". Current topic: "${topicTitle}". Respond as Luca following all system instructions. Output pure JSON format.`
      }]
    });

    const payload = JSON.stringify({
      contents,
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.75,
        maxOutputTokens: 250,
        responseMimeType: "application/json"
      }
    });

    // Use Gemini 1.5 Flash (high speed & natural conversational pacing)
    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const parsed = JSON.parse(data);
            const rawText = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
            if (rawText) {
              const cleanJson = JSON.parse(rawText.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim());
              return resolve(cleanJson);
            }
          }
          reject(new Error(`Gemini status ${res.statusCode}: ${data}`));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Gemini API timeout'));
    });

    req.write(payload);
    req.end();
  });
}

// Fallback intelligent conversation engine when API key is not yet set
function generateSmartFallbackResponse(userText, topic, historyTurnCount, userName) {
  const text = (userText || '').trim();
  const lower = text.toLowerCase();
  const tip = detectGrammarTips(text);

  let reply = "";
  let translation = "";
  let suggestions = [];

  // 1. Check for specific question types or remarks
  if (lower.includes('what about you') || lower.includes('how about you') || lower.includes('and you')) {
    reply = "As for me, I love meeting motivated learners like you! I get super energized every time someone practices speaking with me. What inspired you to learn English recently?";
    translation = "Kalau aku, aku seneng banget ketemu pembelajar semangat kayak kamu! Aku selalu bersemangat setiap kali ada yang latihan ngomong bareng aku. Apa sih yang menginspirasimu belajar bahasa Inggris akhir-akhir ini?";
    suggestions = [
      "I want to prepare for an English job interview.",
      "I want to travel abroad without language barriers.",
      "I need a good TOEFL score for my university."
    ];
  } else if (lower.includes('tired') || lower.includes('sleepy') || lower.includes('exhausted')) {
    reply = "Oh man, sounds like you've had a really long day! Don't push yourself too hard. What was the most exhausting thing you had to deal with today?";
    translation = "Wah, kedengerannya harimu bener-bener panjang ya! Jangan terlalu memaksakan diri. Apa hal yang paling bikin capek hari ini?";
    suggestions = [
      "I had back-to-back classes and heavy traffic.",
      "Work deadlines have been crazy this week.",
      "Just doing a lot of chores around the house."
    ];
  } else if (lower.includes('happy') || lower.includes('good') || lower.includes('great') || lower.includes('awesome') || lower.includes('fun')) {
    reply = "That's awesome to hear! Positive energy makes everything better. Tell me more, what made your day feel so good?";
    translation = "Seneng banget dengernya! Energi positif bikin segalanya jadi lebih baik. Ceritain dong, apa yang bikin harimu terasa begitu menyenangkan?";
    suggestions = [
      "I finally finished an important task today.",
      "I had a great conversation with my close friends.",
      "Nothing special, just enjoying a peaceful day!"
    ];
  } else if (lower.includes('stress') || lower.includes('busy') || lower.includes('hard') || lower.includes('difficult')) {
    reply = "I totally get that. We all have those overwhelming moments! How do you usually unwind and relax when stress starts piling up?";
    translation = "Aku bener-bener paham itu. Kita semua pasti punya momen-momen melelahkan begitu! Biasanya gimana caramu melepas penat kalau stres mulai menumpuk?";
    suggestions = [
      "I listen to my favorite acoustic songs.",
      "I usually take a quick nap or grab coffee.",
      "I like watching funny clips on YouTube."
    ];
  } else if (lower.includes('noodle') || lower.includes('rice') || lower.includes('pizza') || lower.includes('coffee') || lower.includes('eat')) {
    reply = "Mmm, that sounds delicious! You've got great taste. Do you prefer cooking that at home, or do you have a go-to spot where you buy it?";
    translation = "Mmm, kedengerannya enak banget! Seleramu oke juga. Kamu lebih suka masak itu sendiri di rumah, atau punya tempat langganan buat beli?";
    suggestions = [
      "I usually order it online through delivery apps.",
      "There is a great local stall right near my place.",
      "I actually love cooking it myself on weekends!"
    ];
  } else if (lower.includes('japan') || lower.includes('london') || lower.includes('bali') || lower.includes('travel') || lower.includes('city') || lower.includes('beach')) {
    reply = "That would be an unforgettable trip! The atmosphere there must be incredible. Who is the first person you would bring along with you?";
    translation = "Itu pasti bakal jadi perjalanan tak terlupakan! Suasana di sana pasti luar biasa. Siapa orang pertama yang bakal kamu ajak ke sana?";
    suggestions = [
      "I'd definitely bring my best friends along.",
      "I want to go on a solo trip to explore freely.",
      "I'd love to take my family there on vacation."
    ];
  } else {
    // Dynamic general conversational turns based on turn depth
    if (historyTurnCount <= 1) {
      reply = `That's interesting! I love hearing your perspective on this. Could you share a bit more detail about why that came to mind?`;
      translation = `Menarik banget! Aku suka denger sudut pandangmu tentang ini. Bisa ceritain sedikit lebih detail kenapa hal itu yang terpikirkan?`;
      suggestions = [
        "Because it really helps me relax during the day.",
        "It's just something I've been doing for years.",
        "Honestly, it makes me feel genuinely happy!"
      ];
    } else if (historyTurnCount <= 3) {
      reply = `Haha, you explained that so well! It really shows how you see things. By the way, have you always felt that way, or is it a new habit?`;
      translation = `Haha, kamu ngejelasinnya bagus banget! Bener-bener kelihatan gimana caramu memandang sesuatu. Btw, udah dari dulu ngerasa gitu atau kebiasaan baru?`;
      suggestions = [
        "It's pretty new, I started doing it this year.",
        "I've been like this since I was younger!",
        "It just developed naturally over time."
      ];
    } else {
      reply = `You're speaking so naturally today, high five! 👏 I really enjoyed chatting with you about this. Anything else you'd like to share before we wrap up our 5-minute session?`;
      translation = `Kamu ngomongnya natural banget hari ini, tos dulu! 👏 Aku bener-bener nikmatin ngobrol bareng kamu. Ada hal lain yang mau kamu ceritain sebelum kita akhiri sesi 5 menit ini?`;
      suggestions = [
        "That's all for today, thanks for the fun chat!",
        "I'm feeling much more confident speaking now.",
        "Let's practice again tomorrow with a new topic!"
      ];
    }
  }

  return {
    reply,
    translation,
    feedback: tip ? `💡 **Koreksi Santai:** Kamu tadi bilang *"${tip.wrong}"*, lebih natural: *"${tip.better}"*. ${tip.note}` : null,
    suggestions: suggestions.length > 0 ? suggestions : [
      "I totally agree with you on that.",
      "That's actually a very good question!",
      "Let me think about that for a second..."
    ]
  };
}

module.exports = async function handler(req, res) {
  // CORS & Method verification
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages, topicId, userText, userName } = req.body || {};

  // Find or pick topic
  let topic = SPEAKING_TOPICS.find(t => t.id === topicId);
  if (!topic) {
    // Pick topic of the day based on day of month
    const dayIndex = new Date().getDate() % SPEAKING_TOPICS.length;
    topic = SPEAKING_TOPICS[dayIndex];
  }

  // If initial request to fetch today's topic & opener
  if (!userText && (!messages || messages.length === 0)) {
    return res.status(200).json({
      success: true,
      topic,
      opener: {
        reply: topic.opener,
        translation: topic.openerId,
        feedback: null,
        suggestions: topic.starters
      }
    });
  }

  const history = messages || [];
  const turnCount = Math.floor(history.length / 2);
  const geminiApiKey = process.env.GEMINI_API_KEY;

  if (geminiApiKey) {
    try {
      const systemPrompt = `You are Luca, a friendly, warm, and supportive AI English speaking partner for an Indonesian learner (${userName || 'Friend'}) in the BasaLoka app.
Rules:
1. Speak in natural, everyday conversational American or British English.
2. KEEP RESPONSES SHORT: 1 to 3 sentences maximum so the conversation stays balanced and conversational. Never write long paragraphs!
3. ALWAYS ask an engaging, casual follow-up question related to what the user said to keep the conversation flowing.
4. GENTLE RECASTING: If the user made a grammar or vocabulary mistake, naturally and subtly incorporate the correct phrasing into your conversational reply without shaming them.
5. In the "feedback" field, if the user made a noticeable grammar mistake, write a very gentle 1-sentence tip in friendly Indonesian (e.g. "💡 Tips santai: Daripada 'I am agree', penutur asli biasanya bilang 'I agree' ya! 👍"). If their grammar was good/understandable, leave "feedback" as null.
6. Provide a JSON output with the exact schema:
{
  "reply": "string (spoken conversational English reply)",
  "translation": "string (friendly Indonesian translation)",
  "feedback": "string or null (optional gentle tip in Indonesian)",
  "suggestions": ["3 short starter phrases the user can say next"]
}`;

      const aiResponse = await callGemini(geminiApiKey, systemPrompt, history, userText, topic.title);
      return res.status(200).json({
        success: true,
        topic,
        source: 'gemini',
        ...aiResponse
      });
    } catch (err) {
      console.warn('Gemini Speaking API failed, falling back to smart local engine:', err.message);
    }
  }

  // Fallback engine
  const fallback = generateSmartFallbackResponse(userText, topic, turnCount, userName);
  return res.status(200).json({
    success: true,
    topic,
    source: 'smart-fallback',
    ...fallback
  });
};

module.exports.SPEAKING_TOPICS = SPEAKING_TOPICS;

