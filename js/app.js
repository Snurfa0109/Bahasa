// ============================================================
// BasaLoka — Main Application Logic
// ============================================================

// ─── STATE ───────────────────────────────────────────────────
let state = {
  currentUser: null,
  userName: '',
  streak: 0,
  lastPlayDate: null,
  totalXp: 0,
  todayXp: 0,
  hearts: 5,
  koreanXp: 0,
  englishXp: 0,
  toeflXp: 0,
  completedLessons: [],
  completedUnits: [],
  unlockedAchievements: [],
  totalLessons: 0,
  koreanLessons: 0,
  englishLessons: 0,
  toeflLessons: 0,
  perfectScores: 0,
  toeflActiveTrack: 'full'
};

let currentView = 'onboarding';
let currentLesson = null;
let currentUnit = null;
let currentLang = null;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── INTERACTIVE POPUP MODAL SYSTEM (Custom Confirm & Alert) ──
let popupCallback = null;
let popupCancelCallback = null;

function showConfirmPopup({
  icon = '⚠️',
  title = 'Konfirmasi',
  message = '',
  type = 'warning',
  confirmText = 'Lanjutkan',
  cancelText = 'Batal',
  onConfirm = null,
  onCancel = null
}) {
  const modal = document.getElementById('interactive-popup-modal');
  const iconBadge = document.getElementById('popup-icon-badge');
  const iconEl = document.getElementById('popup-icon');
  const titleEl = document.getElementById('popup-title');
  const msgEl = document.getElementById('popup-message');
  const confirmBtn = document.getElementById('popup-confirm-btn');
  const cancelBtn = document.getElementById('popup-cancel-btn');

  if (!modal) {
    if (confirm(message || title)) { if (onConfirm) onConfirm(); }
    else { if (onCancel) onCancel(); }
    return;
  }

  if (iconBadge) iconBadge.className = `popup-icon-badge popup-${type}`;
  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.innerHTML = (message || '').replace(/\n/g, '<br>');
  if (confirmBtn) {
    confirmBtn.textContent = confirmText;
    confirmBtn.className = `btn-primary popup-btn-confirm ${type === 'danger' ? 'btn-danger' : ''}`;
  }
  if (cancelBtn) {
    cancelBtn.textContent = cancelText;
    cancelBtn.style.display = cancelText ? 'inline-flex' : 'none';
  }

  popupCallback = onConfirm;
  popupCancelCallback = onCancel;

  modal.classList.add('active');
  modal.style.setProperty('display', 'flex', 'important');
  if (confirmBtn) confirmBtn.focus();
}

function showAlertPopup({
  icon = '💡',
  title = 'Informasi',
  message = '',
  type = 'info',
  buttonText = 'Mengerti',
  onClose = null
}) {
  showConfirmPopup({
    icon,
    title,
    message,
    type,
    confirmText: buttonText,
    cancelText: '',
    onConfirm: onClose,
    onCancel: onClose
  });
}

function closeInteractivePopup(isConfirm) {
  const modal = document.getElementById('interactive-popup-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.setProperty('display', 'none', 'important');
  }
  if (isConfirm && typeof popupCallback === 'function') {
    const cb = popupCallback;
    popupCallback = null;
    cb();
  } else if (!isConfirm && typeof popupCancelCallback === 'function') {
    const cb = popupCancelCallback;
    popupCancelCallback = null;
    cb();
  }
}

function handlePopupBackdropClick(e) {
  if (e.target && e.target.id === 'interactive-popup-modal') {
    closeInteractivePopup(false);
  }
}
let lessonStep = 0;
let lessonCards = [];
let lessonQuiz = [];
let quizStep = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let lessonStartTime = null;
let lessonXpEarned = 0;
let matchSelected = null;
let matchCompleted = 0;
let verbDrillCards = [];
let verbDrillIndex = 0;
let fillBlankStep = 0;
let readingStep = 0;
let matchPairs = [];
let matchState = {};
let convoListeningStep = 0;
let convoTranscriptVisible = false;
let isPlayingConvo = false;
let convoAudioQueueTimeout = null;

// ─── AUDIO — Google TTS (primary) + Web Speech API (fallback) ─
// Google Translate TTS works without any local voice pack install.
// It requires internet connection, which is fine for this app.

let currentAudio = null;

// Map language codes to Google TTS format
const TTS_LANG_MAP = {
  'ko-KR': 'ko',
  'en-US': 'en',
  'en-GB': 'en'
};

function speak(text, lang = 'ko-KR', rate = 0.85) {
  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  const ttsLang = TTS_LANG_MAP[lang] || lang.split('-')[0];
  const encoded = encodeURIComponent(text);

  // Google Translate TTS URL — free, no API key needed
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=${ttsLang}&client=tw-ob&ttsspeed=${rate}`;

  const audio = new Audio(url);
  audio.volume = 1;
  currentAudio = audio;

  audio.onerror = () => {
    // Fallback to Web Speech API if Google TTS fails (offline / blocked)
    speakWithWebSpeech(text, lang, rate);
  };

  audio.oncanplaythrough = () => {
    audio.play().catch(() => {
      speakWithWebSpeech(text, lang, rate);
    });
  };

  audio.load();
}

// ─── AUDIO ENGINE (High-Fidelity Chrome/Windows Multi-Speaker TTS) ───
let speechSynth = window.speechSynthesis;
let availableVoices = [];
window.__speechUtterances = window.__speechUtterances || new Set();
let speechHeartbeatTimer = null;

function startSpeechHeartbeat() {
  if (speechHeartbeatTimer) clearInterval(speechHeartbeatTimer);
  speechHeartbeatTimer = setInterval(() => {
    if (!speechSynth) return;
    if (speechSynth.speaking) {
      speechSynth.pause();
      speechSynth.resume();
    } else {
      clearInterval(speechHeartbeatTimer);
      speechHeartbeatTimer = null;
    }
  }, 9000);
}

function loadVoices() {
  if (speechSynth) {
    availableVoices = speechSynth.getVoices() || [];
  }
}
if (speechSynth) {
  speechSynth.onvoiceschanged = loadVoices;
  loadVoices();
}

function getBestVoice(gender = 'neutral', lang = 'en-US') {
  loadVoices();
  const voices = availableVoices;
  if (!voices || !voices.length) return null;

  if (lang.startsWith('en')) {
    if (gender === 'male') {
      // 1. Windows Native David (highest quality on Windows, zero stutter)
      const david = voices.find(v => /david/i.test(v.name));
      if (david) return david;
      // 2. Google UK English Male or other English male
      const googleMale = voices.find(v => /male/i.test(v.name) && v.lang.startsWith('en'));
      if (googleMale) return googleMale;
      // 3. Mark, Guy, George
      const otherMale = voices.find(v => /mark|guy|george/i.test(v.name));
      if (otherMale) return otherMale;
    } else if (gender === 'female') {
      // 1. Windows Native Zira (matches David perfectly, zero stutter)
      const zira = voices.find(v => /zira/i.test(v.name));
      if (zira) return zira;
      // 2. Google US English (natural female)
      const googleUS = voices.find(v => /Google US English/i.test(v.name));
      if (googleUS) return googleUS;
      // 3. Jenny, Samantha, Victoria
      const otherFemale = voices.find(v => /female|jenny|samantha|victoria/i.test(v.name));
      if (otherFemale) return otherFemale;
    } else {
      // Narrator: prefer clear female or male
      const zira = voices.find(v => /zira/i.test(v.name));
      if (zira) return zira;
      const david = voices.find(v => /david/i.test(v.name));
      if (david) return david;
    }

    // Fallback: any en-US or en voice
    return voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en')) || null;
  }

  // Non-English (e.g. ko-KR)
  return voices.find(v => v.lang === lang) || voices.find(v => v.lang.startsWith(lang.split('-')[0])) || null;
}

function speakWithWebSpeech(text, lang, rate = 0.88) {
  if (!speechSynth) {
    showToast('⚠️ Tidak ada koneksi internet & browser tidak support TTS', 'warning');
    return;
  }
  loadVoices();
  if (speechSynth.speaking) speechSynth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate;
  utter.pitch = 1.0;

  const voice = getBestVoice('neutral', lang);
  if (voice) utter.voice = voice;

  window.__speechUtterances.add(utter);
  startSpeechHeartbeat();

  utter.onend = () => window.__speechUtterances.delete(utter);
  utter.onerror = () => {
    window.__speechUtterances.delete(utter);
    showToast('❌ Audio gagal. Cek koneksi internet kamu.', 'error');
  };

  speechSynth.speak(utter);
}

function speakWithVoice(text, lang = 'en-US', opts = {}, onEnd = null) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Sanitize text for smooth TTS flow (remove annoying punctuation marks, quotes, brackets)
  const cleanText = (text || '')
    .replace(/["“”'‘’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  // Keep natural pitch (1.0) so SAPI / Web Audio resampler does NOT stutter or introduce robotic clipping
  const pitch = opts.pitch || 1.0;
  const rate = opts.rate || 0.92;
  const gender = opts.gender || 'neutral';
  const shouldCancel = opts.cancelPrevious !== false;

  if (speechSynth) {
    loadVoices();
    if (shouldCancel && speechSynth.speaking) {
      speechSynth.cancel();
    }

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = lang;
    utter.rate = rate;
    utter.pitch = pitch;

    const matchedVoice = getBestVoice(gender, lang);
    if (matchedVoice) utter.voice = matchedVoice;

    // SOLVE CHROMIUM GC BUG: Keep strong reference so Chrome doesn't kill audio mid-sentence
    window.__speechUtterances.add(utter);
    startSpeechHeartbeat();

    let hasEnded = false;
    const finish = () => {
      if (hasEnded) return;
      hasEnded = true;
      window.__speechUtterances.delete(utter);
      if (onEnd) onEnd();
    };

    utter.onend = finish;
    utter.onerror = (err) => {
      console.warn('TTS playback error:', err);
      finish();
    };

    // Failsafe timeout in case Chrome swallows onend event
    const estimatedDurationMs = Math.max(2500, (cleanText.length / 8) * 1000 + 3500);
    const failsafeTimer = setTimeout(() => {
      if (!hasEnded && (!speechSynth || !speechSynth.speaking)) {
        finish();
      }
    }, estimatedDurationMs);

    utter.onend = () => {
      clearTimeout(failsafeTimer);
      finish();
    };

    speechSynth.speak(utter);
    return;
  }

  // Fallback to Google Translate TTS
  const ttsLang = TTS_LANG_MAP[lang] || lang.split('-')[0];
  const encoded = encodeURIComponent(cleanText);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=${ttsLang}&client=tw-ob&ttsspeed=${rate}`;
  const audio = new Audio(url);
  currentAudio = audio;
  if (onEnd) {
    audio.onended = () => onEnd();
    audio.onerror = () => onEnd();
  }
  audio.play().catch(() => {
    if (onEnd) onEnd();
  });
}

// ─── LOCAL STORAGE & MYSQL SYNC ───────────────────────────────
function saveState() {
  localStorage.setItem('basaloka_state', JSON.stringify(state));
  localStorage.setItem('linguaplay_state', JSON.stringify(state)); // backwards-compatible
  syncProgressToMySQL();
}

async function syncProgressToMySQL() {
  if (!state.currentUser || !state.currentUser.id) return;
  try {
    await fetch(`/api/progress/${state.currentUser.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
  } catch (err) {
    // Offline or server not running - local storage has it safe
  }
}

function loadState() {
  const saved = localStorage.getItem('basaloka_state') || localStorage.getItem('linguaplay_state');
  if (saved) {
    state = { ...state, ...JSON.parse(saved) };
    checkStreak();
  }
}

function checkStreak() {
  const today = new Date().toDateString();
  const last = state.lastPlayDate;
  if (last) {
    const lastDate = new Date(last);
    const todayDate = new Date(today);
    const diff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    if (diff === 0) {
      // Same day — streak unchanged
    } else if (diff === 1) {
      // Yesterday — streak continues, reset today XP
      state.todayXp = 0;
    } else {
      // Missed days — reset streak
      state.streak = 0;
      state.todayXp = 0;
    }
  }
}

// ─── VIEW ROUTING & UCD NAVIGATION HISTORY ─────────────────────
let navHistory = ['dashboard'];

function updateMobileBottomNav(viewName) {
  const bottomNav = document.getElementById('mobile-bottom-nav');
  if (!bottomNav) return;

  // Immersive modes hide bottom navigation for full screen focus
  const immersiveViews = ['onboarding', 'lesson', 'toefl-sim', 'dialogue'];
  if (immersiveViews.includes(viewName) || !state.userName) {
    bottomNav.classList.add('nav-hidden');
    bottomNav.classList.add('hidden');
  } else {
    bottomNav.classList.remove('nav-hidden');
    bottomNav.classList.remove('hidden');
  }

  // Update active tab indicator
  const items = bottomNav.querySelectorAll('.mobile-nav-item');
  items.forEach(btn => {
    const target = btn.getAttribute('data-view');
    if (target === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function navigateBack() {
  if (currentView === 'dialogue') {
    quitDialogue();
    return;
  }
  if (currentView === 'toefl-sim') {
    confirmQuitToeflSim();
    return;
  }
  if (currentView === 'lesson') {
    const quitBtn = document.getElementById('lesson-quit-btn');
    if (quitBtn) { quitBtn.click(); return; }
    showView('dashboard');
    return;
  }
  if (currentView === 'toefl-report') {
    showView('toefl-map');
    return;
  }

  // General history pop
  if (navHistory.length > 1) {
    navHistory.pop(); // Pop current view
    const prevView = navHistory.pop(); // Get previous view
    showView(prevView || 'dashboard', true);
  } else {
    showView('dashboard', true);
  }
}

function showView(viewName, pushHistory = true) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    target.style.display = (viewName === 'onboarding' || viewName === 'result' ? 'flex' : 'block');
    currentView = viewName;
  }
  window.scrollTo(0, 0);

  // Maintain browser history for mobile hardware back button / swipe back gestures
  if (pushHistory) {
    if (navHistory[navHistory.length - 1] !== viewName) {
      navHistory.push(viewName);
    }
    if (window.history && window.history.pushState) {
      try {
        window.history.pushState({ view: viewName }, '', '#' + viewName);
      } catch (e) {
        // Safe fallback in restricted environments
      }
    }
  }

  updateMobileBottomNav(viewName);

  const nav = document.getElementById('main-nav');
  if (nav) {
    if (viewName === 'onboarding' || viewName === 'dialogue' || viewName === 'toefl-sim' || viewName === 'lesson') {
      nav.classList.add('hidden');
      nav.style.display = 'none';
    } else {
      nav.classList.remove('hidden');
      nav.style.display = 'flex';
      try { updateNavStats(); } catch(e) { console.error(e); }
    }
  }

  try {
    if (viewName === 'dashboard') renderDashboard();
    if (viewName === 'korean-map') renderLessonMap('korean');
    if (viewName === 'english-map') renderLessonMap('english');
    if (viewName === 'toefl-map') renderLessonMap('toefl');
    if (viewName === 'dialogue-hub') renderDialogueHub();
  } catch (err) {
    console.error('Error rendering view:', err);
  }
}

// Mobile hardware / browser back gesture listener
window.addEventListener('popstate', (e) => {
  if (currentView === 'toefl-sim') {
    // Intercept to avoid accidental exam loss
    try { window.history.pushState({ view: 'toefl-sim' }, '', '#toefl-sim'); } catch (_) {}
    confirmQuitToeflSim();
    return;
  }
  if (currentView === 'lesson') {
    const quitBtn = document.getElementById('lesson-quit-btn');
    if (quitBtn) { quitBtn.click(); return; }
  }
  const target = (e.state && e.state.view) ? e.state.view : 'dashboard';
  showView(target, false);
});

window.navigateBack = navigateBack;

// ─── ONBOARDING ───────────────────────────────────────────────
function startApp() {
  const nameInput = document.getElementById('user-name-input');
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    if (nameInput) {
      nameInput.classList.add('shake');
      setTimeout(() => nameInput.classList.remove('shake'), 600);
      nameInput.placeholder = 'Isi nama kamu dulu ya! 😊';
      nameInput.focus();
    }
    showAlertPopup({
      icon: '😊',
      type: 'info',
      title: 'Halo Pembelajar!',
      message: 'Silakan isi nama panggilanmu terlebih dahulu agar kami bisa menyiapkan materi belajar yang personal untukmu.',
      buttonText: 'Siap, Mengerti! ✨',
      onClose: () => { if (nameInput) nameInput.focus(); }
    });
    return;
  }
  state.userName = name;
  state.lastPlayDate = new Date().toDateString();
  saveState();
  showView('dashboard');
}

const initialNameInput = document.getElementById('user-name-input');
if (initialNameInput) {
  initialNameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') startApp();
  });
}

// ─── DASHBOARD ────────────────────────────────────────────────
function renderDashboard() {
  const hour = new Date().getHours();
  let greeting = '☀️ Selamat pagi';
  if (hour >= 11 && hour < 15) {
    greeting = '🌤️ Selamat siang';
  } else if (hour >= 15 && hour < 18) {
    greeting = '🌅 Selamat sore';
  } else if (hour >= 18 || hour < 5) {
    greeting = '🌙 Selamat malam';
  } else {
    greeting = '☀️ Selamat pagi';
  }

  document.getElementById('dashboard-greeting').textContent = `${greeting}, ${state.userName}! 👋`;
  const dayNum = state.totalLessons || 0;
  document.getElementById('dashboard-sub').textContent = dayNum === 0
    ? 'Yuk mulai perjalanan belajarmu hari ini!'
    : `${state.streak} hari streak 🔥 — Teruskan semangat!`;

  // Update nav stats
  updateNavStats();

  // Daily goal circle
  const goalXp = Math.min(state.todayXp, 50);
  const pct = (goalXp / 50) * 100;
  document.getElementById('goal-circle').setAttribute('stroke-dasharray', `${pct}, 100`);
  document.getElementById('goal-xp-today').textContent = goalXp;

  // Korean card stats
  const krUnits = APP_DATA.korean.units;
  const krTotalLessons = krUnits.reduce((a, u) => a + u.lessons.length, 0);
  const krDone = state.completedLessons.filter(id => id.startsWith('kr')).length;
  const krPct = Math.round((krDone / krTotalLessons) * 100);
  document.getElementById('korean-progress-bar').style.width = `${krPct}%`;
  document.getElementById('korean-progress-text').textContent = `${krPct}% selesai`;
  document.getElementById('korean-xp').textContent = state.koreanXp;
  document.getElementById('korean-lessons').textContent = krDone;
  document.getElementById('korean-total').textContent = krTotalLessons;
  document.getElementById('korean-btn-text').textContent = krDone === 0 ? 'Mulai Belajar' : 'Lanjutkan';
  const krLevel = Math.floor(state.koreanXp / 100) + 1;
  document.getElementById('korean-badge').textContent = `Level ${krLevel}`;

  // English card stats
  const enUnits = APP_DATA.english.units;
  const enTotalLessons = enUnits.reduce((a, u) => a + u.lessons.length, 0);
  const enDone = state.completedLessons.filter(id => id.startsWith('en')).length;
  const enPct = Math.round((enDone / enTotalLessons) * 100);
  document.getElementById('english-progress-bar').style.width = `${enPct}%`;
  document.getElementById('english-progress-text').textContent = `${enPct}% selesai`;
  document.getElementById('english-xp').textContent = state.englishXp;
  document.getElementById('english-lessons').textContent = enDone;
  document.getElementById('english-total').textContent = enTotalLessons;
  document.getElementById('english-btn-text').textContent = enDone === 0 ? 'Mulai Belajar' : 'Lanjutkan';
  const enLevel = Math.floor(state.englishXp / 100) + 1;
  document.getElementById('english-badge').textContent = `Level ${enLevel}`;

  // TOEFL card stats
  const toeflUnits = APP_DATA.toefl.units;
  const toeflTotalLessons = toeflUnits.reduce((a, u) => a + u.lessons.length, 0);
  const toeflDone = state.completedLessons.filter(id => id.startsWith('toefl')).length;
  const toeflPct = Math.round((toeflDone / toeflTotalLessons) * 100);
  document.getElementById('toefl-progress-bar').style.width = `${toeflPct}%`;
  document.getElementById('toefl-progress-text').textContent = `${toeflPct}% selesai`;
  document.getElementById('toefl-xp').textContent = state.toeflXp;
  document.getElementById('toefl-lessons').textContent = toeflDone;
  document.getElementById('toefl-total').textContent = toeflTotalLessons;
  document.getElementById('toefl-btn-text').textContent = toeflDone === 0 ? 'Mulai TOEFL Prep' : 'Lanjutkan';
  const toeflLevel = Math.floor(state.toeflXp / 100) + 1;
  document.getElementById('toefl-badge').textContent = `Level ${toeflLevel}`;

  // Achievements
  renderAchievements();
}

function updateNavStats() {
  document.getElementById('streak-count').textContent = state.streak;
  document.getElementById('xp-count').textContent = state.totalXp;
  updateAuthNavUI();
}

function updateHeartsDisplay(containerId) {
  // Hearts system disabled: learners can practice freely without penalty
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  const stats = {
    totalLessons: state.totalLessons,
    streak: state.streak,
    completedUnits: state.completedUnits || [],
    completedLessons: state.completedLessons || [],
    totalXp: state.totalXp,
    koreanLessons: state.koreanLessons,
    englishLessons: state.englishLessons,
    perfectScores: state.perfectScores
  };
  grid.innerHTML = ACHIEVEMENTS.map(ach => {
    const unlocked = (state.unlockedAchievements || []).includes(ach.id);
    let earned = false;
    try {
      earned = typeof ach.condition === 'function' ? ach.condition(stats) : false;
    } catch (e) {
      earned = false;
    }
    if (earned && !unlocked) {
      state.unlockedAchievements.push(ach.id);
      saveState();
    }
    return `
      <div class="achievement-item ${earned ? 'earned' : 'locked'}">
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-info">
          <div class="ach-title">${ach.title}</div>
          <div class="ach-desc">${ach.desc}</div>
        </div>
        ${earned ? '<div class="ach-check">✓</div>' : ''}
      </div>`;
  }).join('');
}

// ─── LESSON MAP ───────────────────────────────────────────────
function setToeflTrack(track) {
  state.toeflActiveTrack = track;
  saveState();
  renderLessonMap('toefl');
  if (typeof playClickSound === 'function') playClickSound();
}
window.setToeflTrack = setToeflTrack;

function renderLessonMap(lang) {
  const data = APP_DATA[lang];
  const pathEl = document.getElementById(`${lang}-lesson-path`);
  const mapXpEl = document.getElementById(`${lang}-map-xp`);
  if (mapXpEl) {
    if (lang === 'korean') mapXpEl.textContent = state.koreanXp;
    else if (lang === 'english') mapXpEl.textContent = state.englishXp;
    else if (lang === 'toefl') mapXpEl.textContent = state.toeflXp;
  }
  if (!pathEl) return;

  let unitsToRender = data.units;
  if (lang === 'toefl') {
    const activeTrack = state.toeflActiveTrack || 'full';
    const btnFast3 = document.getElementById('track-btn-fast3');
    const btnFull = document.getElementById('track-btn-full');
    if (btnFast3) btnFast3.classList.toggle('active', activeTrack === 'fast3');
    if (btnFull) btnFull.classList.toggle('active', activeTrack === 'full');
    unitsToRender = data.units.filter(u => !u.track || u.track === activeTrack || u.track === 'both');
  }

  pathEl.innerHTML = unitsToRender.map((unit, ui) => {
    const unitLessons = unit.lessons;
    const doneLessons = unitLessons.filter(l => state.completedLessons.includes(l.id));
    const unitDone = doneLessons.length;
    const unitTotal = unitLessons.length;
    const unitPct = Math.round((unitDone / unitTotal) * 100);
    const unitComplete = state.completedUnits.includes(unit.id);
    const prevUnit = ui > 0 ? unitsToRender[ui - 1] : null;
    const isLocked = prevUnit && !state.completedUnits.includes(prevUnit.id);

    const cleanTitle = (unit.title || '').replace(/^[\p{Extended_Pictographic}\u200d\uFE0F\uD800-\uDFFF\s]+/u, '').trim();

    return `
      <div class="unit-section ${isLocked ? 'unit-locked' : ''}" style="--unit-color: ${unit.color}">
        <div class="unit-header">
          <div class="unit-icon-wrap ${unitComplete ? 'complete' : ''}">
            <span class="unit-icon">${unit.icon}</span>
            ${unitComplete ? '<span class="unit-check">✓</span>' : ''}
          </div>
          <div class="unit-meta">
            <h3 class="unit-title">${cleanTitle}</h3>
            <div class="unit-subtitle">${unit.titleNative}</div>
            <div class="unit-desc">${unit.description}</div>
            <div class="unit-progress-bar">
              <div class="unit-progress-fill" style="width: ${unitPct}%; background: ${unit.color}"></div>
            </div>
            <div class="unit-progress-text">${unitDone}/${unitTotal} pelajaran</div>
          </div>
        </div>
        <div class="lessons-grid">
          ${unitLessons.map((lesson, li) => {
            const done = state.completedLessons.includes(lesson.id);
            const prevLesson = li > 0 ? unitLessons[li - 1] : null;
            const locked = isLocked || (prevLesson && !state.completedLessons.includes(prevLesson.id));
            return `
              <div class="lesson-node ${done ? 'done' : ''} ${locked ? 'locked' : 'available'}"
                   onclick="${!locked ? `startLesson('${lang}', '${unit.id}', '${lesson.id}')` : 'showLockedMsg()'}">
                <div class="lesson-node-icon">
                  ${done ? '✅' : locked ? '🔒' : getTypeIcon(lesson.type)}
                </div>
                <div class="lesson-node-title">${lesson.title}</div>
                <div class="lesson-node-xp">⚡ ${lesson.xpReward} XP</div>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }).join('');

  if (lang === 'korean') {
    renderDialogueList('korean-dialogue-cards', 'korean');
  } else if (lang === 'english') {
    renderDialogueList('english-dialogue-cards', 'english');
  }
}

function getTypeIcon(type) {
  const icons = {
    'flashcard-quiz': '🃏',
    'match': '🔗',
    'fill-blank': '✏️',
    'verb-drill': '⚡',
    'listen-choose': '🔊',
    'conversation-listening': '🎧'
  };
  return icons[type] || '📚';
}

function showLockedMsg() {
  showAlertPopup({
    icon: '🔒',
    title: 'Materi Masih Terkunci!',
    message: 'Mode Belajar Ketat (Strict Mastery): Kamu wajib menyelesaikan materi sebelumnya dengan <strong>skor 100% sempurna</strong> terlebih dahulu untuk membuka modul ini!',
    type: 'warning',
    buttonText: 'Siap Belajar 👍'
  });
}

// ─── DYNAMIC QUESTION POOL & OPTION SHUFFLE ENGINE ────────────
function prepareLessonQuiz(rawQuiz) {
  if (!rawQuiz || !rawQuiz.length) return [];
  // Shuffle the question pool so each repeat gets fresh order, testing ALL questions in the bank
  const pool = shuffle([...rawQuiz]);

  return pool.map(q => {
    const correctText = q.options[q.answer];
    const shuffledOpts = shuffle([...q.options]);
    const newAnswer = shuffledOpts.indexOf(correctText);
    return {
      ...q,
      options: shuffledOpts,
      answer: newAnswer
    };
  });
}

function prepareFillBlankQuestions(rawQuestions) {
  if (!rawQuestions || !rawQuestions.length) return [];
  const pool = shuffle([...rawQuestions]);
  return pool.map(q => {
    return {
      ...q,
      options: shuffle([...q.options])
    };
  });
}

function prepareConversationQuestions(rawConvos) {
  if (!rawConvos || !rawConvos.length) return [];
  const pool = shuffle([...rawConvos]);
  return pool.map(c => {
    if (!c.options) return c;
    const correctText = c.options[c.answer];
    const shuffledOpts = shuffle([...c.options]);
    return {
      ...c,
      options: shuffledOpts,
      answer: shuffledOpts.indexOf(correctText)
    };
  });
}

// ─── LESSON ENGINE ────────────────────────────────────────────
function startLesson(lang, unitId, lessonId) {
  const data = APP_DATA[lang];
  if (!data) return;
  const unit = data.units.find(u => u.id === unitId);
  if (!unit) return;
  const lesson = unit.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  // Strict Lock Guard: verify previous unit & lesson are completed 100% within current track
  const activeTrack = (lang === 'toefl') ? (state.toeflActiveTrack || 'full') : null;
  const trackUnits = activeTrack ? data.units.filter(u => !u.track || u.track === activeTrack || u.track === 'both') : data.units;
  const ui = trackUnits.findIndex(u => u.id === unitId);
  const prevUnit = ui > 0 ? trackUnits[ui - 1] : null;
  const isUnitLocked = prevUnit && !state.completedUnits.includes(prevUnit.id);
  const li = unit.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = li > 0 ? unit.lessons[li - 1] : null;
  const isLessonLocked = isUnitLocked || (prevLesson && !state.completedLessons.includes(prevLesson.id));

  if (isLessonLocked) {
    showLockedMsg();
    return;
  }

  // Deep clone so master data in APP_DATA is pristine on each repeat
  currentLesson = JSON.parse(JSON.stringify(lesson));
  currentUnit = unit;
  currentLang = lang;

  // Dynamically sample questions and randomize option positions
  if (currentLesson.type === 'flashcard-quiz' && currentLesson.quiz && currentLesson.quiz.length) {
    currentLesson.quiz = prepareLessonQuiz(currentLesson.quiz);
  } else if (currentLesson.type === 'fill-blank' && currentLesson.questions && currentLesson.questions.length) {
    currentLesson.questions = prepareFillBlankQuestions(currentLesson.questions);
  } else if (currentLesson.type === 'conversation-listening' && currentLesson.conversations && currentLesson.conversations.length) {
    currentLesson.conversations = prepareConversationQuestions(currentLesson.conversations);
  }
  lessonStep = 0;
  quizStep = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  lessonXpEarned = 0;
  lessonStartTime = Date.now();
  matchCompleted = 0;
  matchSelected = null;
  matchState = {};
  verbDrillIndex = 0;
  fillBlankStep = 0;
  readingStep = 0;
  convoListeningStep = 0;

  // Replenish hearts slightly on new lesson
  if (state.hearts < 5) state.hearts = Math.min(5, state.hearts + 1);

  document.getElementById('lesson-quit-btn').onclick = () => {
    showConfirmPopup({
      icon: '🚪',
      type: 'warning',
      title: 'Keluar dari Pelajaran?',
      message: 'Progress sesi latihan ini belum selesai dan tidak akan tersimpan. Apakah kamu yakin ingin keluar?',
      confirmText: 'Ya, Keluar',
      cancelText: 'Tetap Lanjut Belajar',
      onConfirm: () => {
        showView(lang === 'korean' ? 'korean-map' : (lang === 'english' ? 'english-map' : 'toefl-map'));
      }
    });
  };

  showView('lesson');
  updateHeartsDisplay('lesson-hearts-display');
  renderLessonStep();
}

function renderLessonStep() {
  const lesson = currentLesson;
  const content = document.getElementById('lesson-content');
  updateLessonProgress();

  if (lesson.type === 'flashcard-quiz') {
    const cards = lesson.cards;
    const quizzes = lesson.quiz;
    if (lessonStep < cards.length) {
      renderFlashcard(cards[lessonStep]);
    } else {
      const qi = lessonStep - cards.length;
      if (qi < quizzes.length) {
        renderQuiz(quizzes[qi]);
      } else {
        finishLesson();
      }
    }
  } else if (lesson.type === 'verb-drill') {
    const verbs = lesson.verbs;
    const quizzes = lesson.quiz;
    if (lessonStep < verbs.length) {
      renderVerbDrill(verbs[lessonStep]);
    } else {
      const qi = lessonStep - verbs.length;
      if (qi < quizzes.length) {
        renderQuiz(quizzes[qi]);
      } else {
        finishLesson();
      }
    }
  } else if (lesson.type === 'match') {
    renderMatchGame(lesson.pairs);
  } else if (lesson.type === 'fill-blank') {
    if (fillBlankStep < lesson.questions.length) {
      renderFillBlank(lesson.questions[fillBlankStep]);
    } else {
      finishLesson();
    }
  } else if (lesson.type === 'reading-quiz') {
    if (readingStep < lesson.questions.length) {
      renderReadingQuiz(lesson.passage, lesson.questions[readingStep], readingStep, lesson.questions.length);
    } else {
      finishLesson();
    }
  } else if (lesson.type === 'conversation-listening') {
    if (convoListeningStep < lesson.conversations.length) {
      renderConversationListening(lesson.conversations[convoListeningStep], convoListeningStep, lesson.conversations.length);
    } else {
      finishLesson();
    }
  }
}

function updateLessonProgress() {
  const lesson = currentLesson;
  if (!lesson) return;
  let total = 1;
  let current = 0;

  if (lesson.type === 'flashcard-quiz') {
    total = lesson.cards.length + lesson.quiz.length;
    current = lessonStep;
  } else if (lesson.type === 'verb-drill') {
    total = lesson.verbs.length + lesson.quiz.length;
    current = lessonStep;
  } else if (lesson.type === 'match') {
    total = lesson.pairs.length;
    current = matchCompleted;
  } else if (lesson.type === 'fill-blank') {
    total = lesson.questions.length;
    current = fillBlankStep;
  } else if (lesson.type === 'reading-quiz') {
    total = lesson.questions.length;
    current = readingStep;
  } else if (lesson.type === 'conversation-listening') {
    total = lesson.conversations.length;
    current = convoListeningStep;
  }

  const pct = Math.round((current / total) * 100);
  document.getElementById('lesson-progress-fill').style.width = `${pct}%`;
}

// ─── FLASHCARD HELPER & NAVIGATION ───────────────────────────
function formatUserContent(text) {
  if (!text) return '';
  const name = (state.currentUser && state.currentUser.username) || state.userName || 'kamu';
  return text.replace(/\{userName\}/g, name);
}

function renderFlashcard(card) {
  const content = document.getElementById('lesson-content');
  const isKorean = currentLang === 'korean';
  const exText = formatUserContent(card.example);
  const exRom = formatUserContent(card.exampleRomanization);
  const exMeaning = formatUserContent(card.exampleMeaning);
  const ttsText = formatUserContent(card.ttsText);

  const frontLen = (card.front || '').length;
  let charClass = 'fc-char';
  if (frontLen > 14) charClass += ' fc-char-title';
  else if (frontLen > 6) charClass += ' fc-char-phrase';
  else if (frontLen > 2) charClass += ' fc-char-word';

  content.innerHTML = `
    <div class="flashcard-wrapper">
      <div class="flashcard-label">📖 Pelajari & Dengarkan</div>
      <div class="flashcard" id="fc-card" onclick="flipCard()">
        <div class="fc-front">
          <div class="${charClass}">${card.front}</div>
          <div class="fc-romanization">${card.romanization}</div>
          <div class="fc-tap-hint">👆 Ketuk untuk lihat detail</div>
        </div>
        <div class="fc-back">
          <div class="fc-char-sm">${card.front}</div>
          <div class="fc-pronunciation">🔊 ${card.pronunciation}</div>
          <div class="fc-example">
            <div class="fc-ex-text">${exText}</div>
            ${exRom ? `
              <div class="fc-ex-rom">
                <span class="fc-rom-icon">🗣️</span>
                <span class="fc-rom-label">Cara baca:</span>
                <span class="fc-rom-value">${exRom}</span>
              </div>
            ` : ''}
            <div class="fc-ex-meaning">${exMeaning}</div>
          </div>
          ${card.whyRule ? `
            <div class="fc-rule-box">
              <div class="fc-rule-badge">${card.whyRule.badge}</div>
              <div class="fc-rule-desc">${card.whyRule.desc.replace(/\n/g, '<br>')}</div>
            </div>
          ` : ''}
          <div class="fc-tip">${(card.tip.startsWith('💡') || card.tip.startsWith('🎯') || card.tip.startsWith('✅')) ? card.tip : '💡 ' + card.tip}</div>
        </div>
      </div>
      <div class="fc-actions">
        ${lessonStep > 0 ? `
          <button class="btn-secondary btn-prev-fc" onclick="prevFlashcard()">
            ← Sebelumnya
          </button>
        ` : ''}
        <button class="btn-audio" onclick="speak('${ttsText.replace(/'/g, "\\'")}', '${card.ttsLang}')">
          🔊 Dengarkan
        </button>
        <button class="btn-primary btn-next-fc" onclick="nextFlashcard()">
          Lanjut →
        </button>
      </div>
    </div>`;
}

function prevFlashcard() {
  if (lessonStep > 0) {
    lessonStep--;
    renderLessonStep();
  }
}

function flipCard() {
  const card = document.getElementById('fc-card');
  if (card) card.classList.toggle('flipped');
}

function nextFlashcard() {
  lessonStep++;
  renderLessonStep();
}

// ─── VERB DRILL ───────────────────────────────────────────────
function renderVerbDrill(verb) {
  const content = document.getElementById('lesson-content');
  content.innerHTML = `
    <div class="verb-drill-wrapper">
      <div class="verb-drill-label">⚡ Verb Drill</div>
      <div class="verb-card">
        <div class="verb-meaning">${verb.meaning}</div>
        <div class="verb-forms">
          <div class="verb-form-box v1">
            <div class="vf-label">V1 (Infinitive)</div>
            <div class="vf-word">${verb.v1}</div>
          </div>
          <div class="verb-arrow">→</div>
          <div class="verb-form-box v2">
            <div class="vf-label">V2 (Past)</div>
            <div class="vf-word">${verb.v2}</div>
          </div>
          <div class="verb-arrow">→</div>
          <div class="verb-form-box v3">
            <div class="vf-label">V3 (Past Participle)</div>
            <div class="vf-word">${verb.v3}</div>
          </div>
        </div>
        <div class="verb-example">
          <div class="verb-ex-label">📝 Contoh:</div>
          <div class="verb-ex-text">${verb.example}</div>
        </div>
      </div>
      <div class="fc-actions">
        <button class="btn-audio" onclick="speak('${verb.ttsText.replace(/'/g, "\\'")}', '${verb.ttsLang}', 0.75)">
          🔊 Dengarkan
        </button>
        <button class="btn-primary btn-next-fc" onclick="nextVerbDrill()">
          Lanjut →
        </button>
      </div>
    </div>`;
}

function nextVerbDrill() {
  lessonStep++;
  renderLessonStep();
}

// ─── QUIZ ─────────────────────────────────────────────────────
function renderQuiz(q) {
  const content = document.getElementById('lesson-content');
  const cards = currentLesson.type === 'verb-drill' ? (currentLesson.verbs || []) : (currentLesson.cards || []);
  const totalCards = cards.length;
  const qi = lessonStep - totalCards + 1;
  const totalQ = currentLesson.quiz ? currentLesson.quiz.length : 1;

  // Check if question contains conversation or audio prompt
  const hasAudioPrompt = !!(q.audioText || q.dialogue || (q.q && (q.q.includes('Audio') || q.q.includes('Man:') || q.q.includes('Woman:'))));
  let audioPlayerHtml = '';

  if (hasAudioPrompt) {
    let manSpeech = '';
    let womanSpeech = '';
    let narratorSpeech = '';

    if (q.dialogue && Array.isArray(q.dialogue)) {
      const manObj = q.dialogue.find(d => d.speaker === 'man');
      const womanObj = q.dialogue.find(d => d.speaker === 'woman');
      if (manObj) manSpeech = manObj.text;
      if (womanObj) womanSpeech = womanObj.text;
      narratorSpeech = q.narrator || q.questionText || '';
    } else {
      // Parse dialogue from q.q if available
      const manMatch = q.q.match(/Man:\s*["“]([^"”]+)["”]/i);
      const womanMatch = q.q.match(/Woman:\s*["“]([^"”]+)["”]/i);
      const audioMatch = q.q.match(/Audio(?:[^:"]*):\s*["“]([^"”]+)["”]/i);

      if (manMatch && womanMatch) {
        manSpeech = manMatch[1];
        womanSpeech = womanMatch[1];
      } else if (audioMatch) {
        womanSpeech = audioMatch[1];
      } else {
        womanSpeech = q.q.replace(/Audio.*?:\s*/i, '').replace(/—.*$/i, '').trim();
      }
    }

    const safeMan = manSpeech.replace(/'/g, "\\'");
    const safeWoman = womanSpeech.replace(/'/g, "\\'");
    const safeNarrator = (narratorSpeech || '').replace(/'/g, "\\'");

    audioPlayerHtml = `
      <div class="quiz-audio-player-card">
        <div class="qap-header">
          <span class="qap-tag">🎧 Rekaman Suara Percakapan</span>
          <span class="qap-sub">Dengarkan audio percakapan di bawah ini dengan saksama:</span>
        </div>
        <div class="qap-speakers-row">
          <button type="button" class="btn-quiz-audio primary" id="btn-quiz-convo-play" onclick="playQuizCombinedAudio('${safeMan}', '${safeWoman}', '${safeNarrator}')">
            ▶️ Putar Percakapan
          </button>
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="quiz-wrapper">
      <div class="quiz-label">🎯 Quiz ${qi}/${totalQ}</div>
      ${audioPlayerHtml}
      ${q.char ? `<div class="quiz-char-display">${escapeHtml(q.char)}</div>` : ''}
      <div class="quiz-question">${escapeHtml(q.q)}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" id="qopt-${i}" onclick="answerQuiz(${i}, ${q.answer})">
            ${escapeHtml(opt)}
          </button>`).join('')}
      </div>
      <div id="quiz-feedback-container"></div>
    </div>`;
}

function playQuizCombinedAudio(manText, womanText, narratorText) {
  const btn = document.getElementById('btn-quiz-convo-play');
  if (isPlayingConvo) {
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    isPlayingConvo = false;
    if (btn) btn.innerHTML = '▶️ Putar Percakapan';
    return;
  }
  isPlayingConvo = true;
  if (btn) btn.innerHTML = '🔊 Memutar Percakapan...';

  const resetBtn = () => {
    isPlayingConvo = false;
    if (btn) btn.innerHTML = '▶️ Putar Percakapan';
  };

  if (manText && womanText) {
    speakWithVoice(manText, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'male' }, () => {
      if (!isPlayingConvo) return;
      setTimeout(() => {
        if (!isPlayingConvo) return;
        speakWithVoice(womanText, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'female', cancelPrevious: false }, () => {
          if (!isPlayingConvo) return;
          if (narratorText) {
            setTimeout(() => {
              if (!isPlayingConvo) return;
              speakWithVoice(narratorText, 'en-US', { pitch: 1.0, rate: 0.90, gender: 'neutral', cancelPrevious: false }, () => {
                resetBtn();
              });
            }, 500);
          } else {
            resetBtn();
          }
        });
      }, 450);
    });
  } else if (womanText || manText) {
    speakWithVoice(womanText || manText, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'female' }, () => {
      resetBtn();
    });
  } else {
    resetBtn();
  }
}
window.playQuizCombinedAudio = playQuizCombinedAudio;

function answerQuiz(selected, correct) {
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o => o.disabled = true);

  totalAnswers++;
  const isCorrect = selected === correct;
  const cards = currentLesson.type === 'verb-drill' ? (currentLesson.verbs || []) : (currentLesson.cards || []);
  const totalCards = cards.length;
  const qi = Math.max(0, lessonStep - totalCards);
  const currentQ = (currentLesson.quiz && currentLesson.quiz[qi]) || null;
  const correctText = (currentQ && currentQ.options && currentQ.options[correct]) || (opts[correct] ? opts[correct].innerText : '');
  const selectedText = (currentQ && currentQ.options && currentQ.options[selected]) || (opts[selected] ? opts[selected].innerText : '');
  const explanation = currentQ?.explanation || currentQ?.tip || currentLesson?.tip || '';

  if (isCorrect) {
    correctAnswers++;
    if (opts[selected]) opts[selected].classList.add('correct');
    const xpReward = Math.round((currentLesson.xpReward || 20) / (currentLesson.quiz ? currentLesson.quiz.length : 1));
    lessonXpEarned += xpReward;
    playSuccessEffect();
    showQuizFeedback({
      isCorrect: true,
      selectedText,
      correctText,
      explanation,
      xpReward
    });
  } else {
    if (opts[selected]) opts[selected].classList.add('wrong');
    if (opts[correct]) opts[correct].classList.add('correct');
    loseHeart();
    showQuizFeedback({
      isCorrect: false,
      selectedText,
      correctText,
      explanation,
      xpReward: 0
    });
  }
}

function showQuizFeedback({ isCorrect, selectedText, correctText, explanation, xpReward }) {
  const container = document.getElementById('quiz-feedback-container');
  if (!container) return;

  const cards = currentLesson.type === 'verb-drill' ? (currentLesson.verbs || []) : (currentLesson.cards || []);
  const totalCards = cards.length;
  const qi = lessonStep - totalCards + 1;
  const totalQ = currentLesson.quiz ? currentLesson.quiz.length : 1;
  const isLastQuestion = qi >= totalQ;

  container.innerHTML = `
    <div class="quiz-feedback-box ${isCorrect ? 'fb-correct' : 'fb-wrong'}">
      <div class="fb-header">
        <span class="fb-icon">${isCorrect ? '🎉' : '⚠️'}</span>
        <div class="fb-text-wrap">
          <div class="fb-title">${isCorrect ? 'Keren, Jawabanmu Benar!' : 'Jawaban Kurang Tepat!'}</div>
          ${!isCorrect ? `
            <div class="fb-breakdown-row">
              <span class="fb-tag wrong">❌ Pilihanmu: ${escapeHtml(selectedText)}</span>
              <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
            </div>
          ` : `
            <div class="fb-breakdown-row">
              <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
            </div>
          `}
          ${explanation ? `
            <div class="fb-explanation-detail">
              <div class="fb-exp-title">🔍 Letak Kesalahan & Trik Cepat Menjawab:</div>
              <div class="fb-exp-text">${escapeHtml(explanation)}</div>
            </div>
          ` : ''}
        </div>
        ${isCorrect ? `<div class="fb-xp">+${xpReward} XP</div>` : ''}
      </div>
      <button class="btn-primary fb-next-btn" id="quiz-continue-btn" onclick="nextQuizStep()">
        ${isLastQuestion ? 'Lihat Hasil Latihan 🏆' : 'Lanjut ke Soal Berikutnya →'}
      </button>
    </div>
  `;

  const btn = document.getElementById('quiz-continue-btn');
  if (btn) btn.focus();
}

function nextQuizStep() {
  lessonStep++;
  renderLessonStep();
}

// ─── MATCH GAME ───────────────────────────────────────────────
function renderMatchGame(pairs) {
  const content = document.getElementById('lesson-content');
  if (!matchState.initialized) {
    matchState.initialized = true;
    matchState.pairs = [...pairs];
    matchState.leftItems = shuffle([...pairs.map((p, i) => ({ id: i, text: p.left, side: 'left' }))]);
    matchState.rightItems = shuffle([...pairs.map((p, i) => ({ id: i, text: p.right, side: 'right' }))]);
    matchState.matched = new Set();
    matchState.selectedLeft = null;
    matchState.selectedRight = null;
  }

  content.innerHTML = `
    <div class="match-wrapper">
      <div class="match-label">🔗 Cocokkan Pasangannya!</div>
      <div class="match-grid">
        <div class="match-col" id="match-left">
          ${matchState.leftItems.map(item => `
            <button class="match-item ${matchState.matched.has(item.id) ? 'matched' : ''} ${matchState.selectedLeft?.id === item.id ? 'selected' : ''}"
                    id="ml-${item.id}"
                    onclick="${!matchState.matched.has(item.id) ? `selectMatchLeft(${item.id})` : ''}">
              ${item.text}
            </button>`).join('')}
        </div>
        <div class="match-col" id="match-right">
          ${matchState.rightItems.map(item => `
            <button class="match-item ${matchState.matched.has(item.id) ? 'matched' : ''} ${matchState.selectedRight?.id === item.id ? 'selected' : ''}"
                    id="mr-${item.id}"
                    onclick="${!matchState.matched.has(item.id) ? `selectMatchRight(${item.id})` : ''}">
              ${item.text}
            </button>`).join('')}
        </div>
      </div>
      <div class="match-progress">✅ ${matchState.matched.size}/${matchState.pairs.length} pasangan ditemukan</div>
    </div>`;
}

function selectMatchLeft(id) {
  matchState.selectedLeft = matchState.leftItems.find(i => i.id === id);
  checkMatchPair();
}

function selectMatchRight(id) {
  matchState.selectedRight = matchState.rightItems.find(i => i.id === id);
  checkMatchPair();
}

function checkMatchPair() {
  if (matchState.selectedLeft && matchState.selectedRight) {
    const leftId = matchState.selectedLeft.id;
    const rightId = matchState.selectedRight.id;
    if (leftId === rightId) {
      matchState.matched.add(leftId);
      matchCompleted++;
      totalAnswers++;
      correctAnswers++;
      lessonXpEarned += Math.round(currentLesson.xpReward / currentLesson.pairs.length);
      showToast('✅ Cocok!', 'success');
      playSuccessEffect();

      if (matchState.matched.size === matchState.pairs.length) {
        setTimeout(() => finishLesson(), 700);
        return;
      }
    } else {
      totalAnswers++;
      loseHeart();
      showToast('❌ Coba lagi!', 'error');
      const wrongEl = document.getElementById(`ml-${leftId}`);
      const wrongElR = document.getElementById(`mr-${rightId}`);
      if (wrongEl) { wrongEl.classList.add('wrong-flash'); setTimeout(() => wrongEl.classList.remove('wrong-flash'), 400); }
      if (wrongElR) { wrongElR.classList.add('wrong-flash'); setTimeout(() => wrongElR.classList.remove('wrong-flash'), 400); }
    }
    matchState.selectedLeft = null;
    matchState.selectedRight = null;
    updateLessonProgress();
    renderMatchGame(currentLesson.pairs);
  } else {
    renderMatchGame(currentLesson.pairs);
  }
}

// ─── FILL IN BLANK ────────────────────────────────────────────
function renderFillBlank(q) {
  const content = document.getElementById('lesson-content');
  const sentenceText = q.sentence || q.text || '';
  const correctVal = typeof q.answer === 'number' ? q.options[q.answer] : (q.answer || '');
  const hintText = q.hint || '';
  const contextText = q.context || 'Lengkapi kalimat baku di bawah ini sesuai kaidah Structure TOEFL:';
  const safeAnswer = String(correctVal).replace(/'/g, "\\'");
  const safeExp = String(q.explanation || q.tip || '').replace(/'/g, "\\'");

  content.innerHTML = `
    <div class="fill-wrapper">
      <div class="fill-label">✏️ Pilih Jawaban yang Tepat</div>
      <div class="fill-context">${contextText}</div>
      <div class="fill-sentence">
        ${sentenceText.replace(/___________|_________/g, '<span class="fill-blank">_________</span>')}
      </div>
      ${hintText ? `<div class="fill-hint">💡 Petunjuk: ${hintText}</div>` : ''}
      <div class="fill-options" id="fill-options">
        ${(q.options || []).map(opt => `
          <button class="fill-option" onclick="answerFill('${opt.replace(/'/g, "\\'")}', '${safeAnswer}', '${(q.ttsText || sentenceText).replace(/'/g, "\\'")}', '${q.ttsLang || 'en-US'}', '${safeExp}')">
            ${opt}
          </button>`).join('')}
      </div>
      <div id="fill-feedback-area"></div>
    </div>`;
}

function answerFill(selected, correct, ttsText, ttsLang, explanation) {
  const opts = document.querySelectorAll('.fill-option');
  opts.forEach(o => o.disabled = true);
  totalAnswers++;
  const isCorrect = selected.trim() === correct.trim();

  opts.forEach(o => {
    if (o.textContent.trim() === correct.trim()) o.classList.add('correct');
    if (o.textContent.trim() === selected.trim() && !isCorrect) o.classList.add('wrong');
  });

  if (isCorrect) {
    correctAnswers++;
    lessonXpEarned += Math.round(currentLesson.xpReward / currentLesson.questions.length);
    showToast('✅ Benar!', 'success');
    playSuccessEffect();
    if (ttsText) setTimeout(() => speak(ttsText, ttsLang), 300);
  } else {
    loseHeart();
    showToast('❌ Kurang tepat, periksa pembahasannya', 'error');
  }

  const feedbackArea = document.getElementById('fill-feedback-area');
  const isLast = (fillBlankStep + 1 >= currentLesson.questions.length);

  if (feedbackArea) {
    feedbackArea.innerHTML = `
      <div class="quiz-feedback-box ${isCorrect ? 'fb-correct' : 'fb-wrong'}" style="margin-top: 18px;">
        <div class="fb-header">
          <span class="fb-icon">${isCorrect ? '🎯' : '⚠️'}</span>
          <div class="fb-text-wrap">
            <div class="fb-title">${isCorrect ? 'Struktur Kalimat Tepat!' : 'Struktur Kalimat Belum Tepat!'}</div>
            ${!isCorrect ? `
              <div class="fb-breakdown-row">
                <span class="fb-tag wrong">❌ Pilihanmu: ${escapeHtml(selected)}</span>
                <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correct)}</span>
              </div>
            ` : `
              <div class="fb-breakdown-row">
                <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correct)}</span>
              </div>
            `}
            ${explanation ? `
              <div class="fb-explanation-detail">
                <div class="fb-exp-title">🔍 Letak Kesalahan & Trik Grammar TOEFL:</div>
                <div class="fb-exp-text">${escapeHtml(explanation)}</div>
              </div>
            ` : ''}
          </div>
        </div>
        <button class="btn-primary fb-next-btn" style="margin-top: 14px;" onclick="nextFillBlank()">
          ${isLast ? 'Selesaikan Pelajaran 🏆' : 'Lanjut ke Soal Berikutnya →'}
        </button>
      </div>
    `;
  } else {
    setTimeout(nextFillBlank, 1500);
  }
}

function nextFillBlank() {
  fillBlankStep++;
  lessonStep++;
  renderLessonStep();
}

// ─── READING QUIZ (TOEFL) ─────────────────────────────────────
function renderReadingQuiz(passage, qObj, qIndex, totalQ) {
  const content = document.getElementById('lesson-content');
  const letters = ['A', 'B', 'C', 'D'];
  const safeTitle = (passage.title || '').replace(/'/g, "\\'");
  const safeText = (passage.text || '').replace(/'/g, "\\'").replace(/\n/g, ' ');

  content.innerHTML = `
    <div class="reading-quiz-container">
      <div class="passage-card">
        <div class="passage-header">
          <span class="passage-badge">📖 TOEFL Academic Reading</span>
          <button class="btn-audio" onclick="speak('${safeTitle}. ${safeText}', 'en-US')" title="Dengarkan passage dalam aksen akademik">
            🔊 Dengarkan Paragraf
          </button>
        </div>
        <h3 class="passage-title">${passage.title}</h3>
        <div class="passage-text">${passage.text.replace(/\\n\\n/g, '<br><br>')}</div>
      </div>

      <div class="reading-question-card">
        <div class="question-meta">Pertanyaan ${qIndex + 1} dari ${totalQ}</div>
        <div class="question-heading">${qObj.q}</div>
        <div class="reading-options" id="reading-options">
          ${qObj.options.map((opt, i) => `
            <button class="reading-opt-btn" onclick="answerReadingQuiz(${i}, ${qObj.answer}, '${(qObj.explanation || '').replace(/'/g, "\\'")}')">
              <span class="reading-opt-letter">${letters[i]}</span>
              <span class="reading-opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="reading-feedback"></div>
      </div>
    </div>
  `;
}

function answerReadingQuiz(selectedIndex, correctIndex, explanation) {
  const btns = document.querySelectorAll('.reading-opt-btn');
  btns.forEach(btn => btn.disabled = true);

  totalAnswers++;
  const isCorrect = selectedIndex === correctIndex;
  const letters = ['A', 'B', 'C', 'D'];
  const qObj = currentLesson.questions[readingStep] || {};
  const selectedText = (qObj.options && qObj.options[selectedIndex]) ? `${letters[selectedIndex]}. ${qObj.options[selectedIndex]}` : `Opsi ${letters[selectedIndex]}`;
  const correctText = (qObj.options && qObj.options[correctIndex]) ? `${letters[correctIndex]}. ${qObj.options[correctIndex]}` : `Opsi ${letters[correctIndex]}`;

  if (isCorrect) {
    btns[selectedIndex].classList.add('correct');
    correctAnswers++;
    lessonXpEarned += Math.round(currentLesson.xpReward / currentLesson.questions.length);
    showToast('✅ Jawaban Benar!', 'success');
    playSuccessEffect();
  } else {
    btns[selectedIndex].classList.add('wrong');
    btns[correctIndex].classList.add('correct');
    loseHeart();
    showToast('❌ Kurang tepat, periksa pembahasannya', 'error');
  }

  const feedbackEl = document.getElementById('reading-feedback');
  feedbackEl.innerHTML = `
    <div class="quiz-feedback-box ${isCorrect ? 'fb-correct' : 'fb-wrong'}" style="margin-top: 16px;">
      <div class="fb-header">
        <span class="fb-icon">${isCorrect ? '🎯' : '⚠️'}</span>
        <div class="fb-text-wrap">
          <div class="fb-title">${isCorrect ? 'Analisis Tepat! Jawabanmu Benar!' : 'Jawaban Belum Tepat!'}</div>
          ${!isCorrect ? `
            <div class="fb-breakdown-row">
              <span class="fb-tag wrong">❌ Pilihanmu: ${escapeHtml(selectedText)}</span>
              <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
            </div>
          ` : `
            <div class="fb-breakdown-row">
              <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
            </div>
          `}
          ${explanation ? `
            <div class="fb-explanation-detail">
              <div class="fb-exp-title">🔍 Letak Kesalahan & Trik Membaca TOEFL:</div>
              <div class="fb-exp-text">${explanation}</div>
            </div>
          ` : ''}
        </div>
      </div>
      <div class="reading-next-bar" style="margin-top: 14px;">
        <button class="btn-primary" onclick="nextReadingQuiz()">
          ${readingStep + 1 < currentLesson.questions.length ? 'Pertanyaan Berikutnya →' : 'Selesaikan Pelajaran 🏆'}
        </button>
      </div>
    </div>
  `;
}

function nextReadingQuiz() {
  readingStep++;
  lessonStep++;
  renderLessonStep();
}

// ─── CONVERSATION LISTENING (TOEFL Part A 2-Person Short Dialogues) ───
function renderConversationListening(convo, qIndex, totalQ) {
  const content = document.getElementById('lesson-content');
  const letters = ['A', 'B', 'C', 'D'];
  convoTranscriptVisible = false;
  isPlayingConvo = false;
  if (convoAudioQueueTimeout) clearTimeout(convoAudioQueueTimeout);

  const manLine = (convo.dialogue || []).find(d => d.speaker === 'man') || convo.dialogue[0];
  const womanLine = (convo.dialogue || []).find(d => d.speaker === 'woman') || convo.dialogue[1];

  const safeManText = (manLine ? manLine.text : '').replace(/'/g, "\\'");
  const safeWomanText = (womanLine ? womanLine.text : '').replace(/'/g, "\\'");
  const safeNarratorText = (convo.narrator || convo.question || '').replace(/'/g, "\\'");

  content.innerHTML = `
    <div class="convo-listening-wrapper">
      <!-- Top Audio Player & Control Card -->
      <div class="convo-hero-card">
        <div class="convo-hero-header">
          <div class="convo-tag">
            <span class="pulse-indicator"></span>
            🎧 TOEFL Part A • Short Conversation
          </div>
          <div class="convo-counter">Soal ${qIndex + 1} dari ${totalQ}</div>
        </div>

        <div class="convo-hero-body">
          <div class="convo-scenario-title">${convo.title || 'Percakapan Kampus Standar TOEFL'}</div>
          <p class="convo-instruction">
            Dengarkan percakapan audio di bawah ini dengan saksama, lalu jawab pertanyaan pemahaman:
          </p>

          <!-- Audio Action Bar -->
          <div class="convo-audio-controls">
            <button class="btn-play-all" id="btn-play-convo" onclick="playFullConversation()">
              <span class="play-icon" id="play-all-icon">▶️</span>
              <span id="play-all-text">Putar Percakapan</span>
            </button>
            <button class="btn-transcript-toggle" id="btn-transcript-toggle" onclick="toggleConvoTranscript()">
              <span id="transcript-btn-icon">👁️</span>
              <span id="transcript-btn-text">Buka Naskah & Terjemahan</span>
            </button>
          </div>

          <!-- Soundwave Animation Banner -->
          <div class="convo-soundwave-bar" id="convo-soundwave" style="display: none;">
            <div class="soundwave-bars">
              <span class="sw-bar"></span><span class="sw-bar"></span><span class="sw-bar"></span><span class="sw-bar"></span><span class="sw-bar"></span>
            </div>
            <span class="soundwave-label" id="soundwave-status">Sedang memutar audio...</span>
          </div>
        </div>

        <!-- Optional Collapsible Transcript Drawer -->
        <div class="convo-transcript-drawer" id="convo-transcript-drawer" style="display: none;">
          <div class="transcript-drawer-header">
            <span>📜 Naskah Lengkap & Terjemahan</span>
            <span class="transcript-hint">💡 Gunakan hanya jika sudah mencoba mendengarkan</span>
          </div>
          <div class="transcript-bubbles-list">
            ${convo.dialogue.map(d => `
              <div class="transcript-bubble ${d.speaker}">
                <div class="tb-speaker">${d.avatar || (d.speaker === 'man' ? '👨' : '👩')} <strong>${d.label || (d.speaker === 'man' ? 'Pria' : 'Wanita')}:</strong></div>
                <div class="tb-en">"${d.text}"</div>
                <div class="tb-id">🇮🇩 ${d.translation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Question & Multiple Choice Area -->
      <div class="convo-question-card">
        <div class="convo-question-header">
          <div class="question-narrator-badge">🎙️ Pertanyaan Narator:</div>
          <button class="btn-narrator-audio" onclick="playSpeakerVoice('narrator', '${safeNarratorText}', null)" title="Dengarkan pertanyaan narator">
            🔊 Dengarkan Soal
          </button>
        </div>
        <h3 class="convo-question-text">${convo.question}</h3>

        <div class="convo-options-list" id="convo-options-list">
          ${convo.options.map((opt, i) => `
            <button class="convo-option-btn" id="copt-${i}" onclick="answerConversationListening(${i}, ${convo.answer}, '${(convo.explanation || '').replace(/'/g, "\\'")}')">
              <span class="convo-opt-letter">${letters[i]}</span>
              <span class="convo-opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="convo-feedback-area"></div>
      </div>
    </div>
  `;

  // Automatically start playing conversation after a short pause
  setTimeout(() => {
    playFullConversation();
  }, 450);
}

function playFullConversation() {
  if (!currentLesson || !currentLesson.conversations) return;
  const convo = currentLesson.conversations[convoListeningStep];
  if (!convo) return;

  const manLine = (convo.dialogue || []).find(d => d.speaker === 'man') || convo.dialogue[0];
  const womanLine = (convo.dialogue || []).find(d => d.speaker === 'woman') || convo.dialogue[1];
  const narratorLine = convo.narrator || convo.question || '';

  const playBtnText = document.getElementById('play-all-text');
  const playBtnIcon = document.getElementById('play-all-icon');
  const waveBar = document.getElementById('convo-soundwave');
  const waveStatus = document.getElementById('soundwave-status');
  const cardMan = document.getElementById('speaker-card-man');
  const cardWoman = document.getElementById('speaker-card-woman');

  if (isPlayingConvo) {
    // Stop playing
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (convoAudioQueueTimeout) clearTimeout(convoAudioQueueTimeout);
    isPlayingConvo = false;
    if (cardMan) cardMan.classList.remove('active-speaking');
    if (cardWoman) cardWoman.classList.remove('active-speaking');
    if (waveBar) waveBar.style.display = 'none';
    if (playBtnIcon) playBtnIcon.textContent = '▶️';
    if (playBtnText) playBtnText.textContent = 'Putar Percakapan';
    return;
  }

  isPlayingConvo = true;
  if (waveBar) waveBar.style.display = 'flex';
  if (playBtnIcon) playBtnIcon.textContent = '⏹️';
  if (playBtnText) playBtnText.textContent = 'Hentikan Pemutaran';

  // Step 1: Speaker 1
  if (cardMan) cardMan.classList.add('active-speaking');
  if (cardWoman) cardWoman.classList.remove('active-speaking');
  if (waveStatus) waveStatus.textContent = '🔊 Memutar pembicara 1...';

  speakWithVoice(manLine.text, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'male' }, () => {
    if (!isPlayingConvo) return;
    if (cardMan) cardMan.classList.remove('active-speaking');

    // Safe gap between speakers to let audio buffer settle cleanly
    convoAudioQueueTimeout = setTimeout(() => {
      if (!isPlayingConvo) return;

      // Step 2: Speaker 2
      if (cardWoman) cardWoman.classList.add('active-speaking');
      if (waveStatus) waveStatus.textContent = '🔊 Memutar pembicara 2...';

      speakWithVoice(womanLine.text, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'female', cancelPrevious: false }, () => {
        if (!isPlayingConvo) return;
        if (cardWoman) cardWoman.classList.remove('active-speaking');

        // Gap before narrator
        convoAudioQueueTimeout = setTimeout(() => {
          if (!isPlayingConvo) return;

          // Step 3: Narrator
          if (waveStatus) waveStatus.textContent = '🎙️ Narator membacakan pertanyaan...';

          speakWithVoice(narratorLine, 'en-US', { pitch: 1.0, rate: 0.90, gender: 'neutral', cancelPrevious: false }, () => {
            // Finished full cycle
            isPlayingConvo = false;
            if (waveBar) waveBar.style.display = 'none';
            if (playBtnIcon) playBtnIcon.textContent = '▶️';
            if (playBtnText) playBtnText.textContent = 'Putar Percakapan';
          });
        }, 500);
      });
    }, 450);
  });
}

function playSpeakerVoice(speakerRole, text, cardElementId) {
  if (isPlayingConvo) {
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (convoAudioQueueTimeout) clearTimeout(convoAudioQueueTimeout);
    isPlayingConvo = false;
    const playBtnText = document.getElementById('play-all-text');
    const playBtnIcon = document.getElementById('play-all-icon');
    const waveBar = document.getElementById('convo-soundwave');
    if (playBtnIcon) playBtnIcon.textContent = '▶️';
    if (playBtnText) playBtnText.textContent = 'Putar Percakapan Lengkap (2 Orang)';
    if (waveBar) waveBar.style.display = 'none';
  }

  const card = cardElementId ? document.getElementById(cardElementId) : null;
  const cardMan = document.getElementById('speaker-card-man');
  const cardWoman = document.getElementById('speaker-card-woman');
  if (cardMan) cardMan.classList.remove('active-speaking');
  if (cardWoman) cardWoman.classList.remove('active-speaking');

  if (card) card.classList.add('active-speaking');

  const opts = speakerRole === 'man'
    ? { pitch: 1.0, rate: 0.92, gender: 'male' }
    : speakerRole === 'woman'
    ? { pitch: 1.0, rate: 0.92, gender: 'female' }
    : { pitch: 1.0, rate: 0.90, gender: 'neutral' };

  speakWithVoice(text, 'en-US', opts, () => {
    if (card) card.classList.remove('active-speaking');
  });
}

function toggleConvoTranscript() {
  convoTranscriptVisible = !convoTranscriptVisible;
  const drawer = document.getElementById('convo-transcript-drawer');
  const icon = document.getElementById('transcript-btn-icon');
  const text = document.getElementById('transcript-btn-text');
  const btn = document.getElementById('btn-transcript-toggle');

  if (drawer) {
    drawer.style.display = convoTranscriptVisible ? 'block' : 'none';
  }
  if (icon) icon.textContent = convoTranscriptVisible ? '🙈' : '👁️';
  if (text) text.textContent = convoTranscriptVisible ? 'Sembunyikan Naskah' : 'Buka Naskah & Arti';
  if (btn) btn.classList.toggle('active', convoTranscriptVisible);
}

function answerConversationListening(selectedIndex, correctIndex, explanation) {
  const btns = document.querySelectorAll('.convo-option-btn');
  btns.forEach(btn => btn.disabled = true);

  totalAnswers++;
  const isCorrect = selectedIndex === correctIndex;
  const currentConvo = currentLesson.conversations[convoListeningStep] || {};
  const selectedText = (currentConvo.options && currentConvo.options[selectedIndex]) ? currentConvo.options[selectedIndex] : 'Jawaban Anda';
  const correctText = (currentConvo.options && currentConvo.options[correctIndex]) ? currentConvo.options[correctIndex] : 'Kunci Jawaban';

  if (isCorrect) {
    btns[selectedIndex].classList.add('correct');
    correctAnswers++;
    const rewardPerQ = Math.round((currentLesson.xpReward || 35) / currentLesson.conversations.length);
    lessonXpEarned += rewardPerQ;
    showToast('✅ Jawaban Benar!', 'success');
    playSuccessEffect();
  } else {
    btns[selectedIndex].classList.add('wrong');
    btns[correctIndex].classList.add('correct');
    showToast('❌ Kurang tepat, periksa pembahasannya', 'error');
  }

  const feedbackEl = document.getElementById('convo-feedback-area');
  if (feedbackEl) {
    feedbackEl.innerHTML = `
      <div class="quiz-feedback-box ${isCorrect ? 'fb-correct' : 'fb-wrong'}" style="margin-top: 16px;">
        <div class="fb-header">
          <span class="fb-icon">${isCorrect ? '🎧' : '⚠️'}</span>
          <div class="fb-text-wrap">
            <div class="fb-title">${isCorrect ? 'Pendengaran Tajam! Jawaban Benar!' : 'Kurang Tepat, Cek Analisisnya!'}</div>
            ${!isCorrect ? `
              <div class="fb-breakdown-row">
                <span class="fb-tag wrong">❌ Pilihanmu: ${escapeHtml(selectedText)}</span>
                <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
              </div>
            ` : `
              <div class="fb-breakdown-row">
                <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
              </div>
            `}
            ${explanation ? `
              <div class="fb-explanation-detail">
                <div class="fb-exp-title">🔍 Letak Kesalahan & Trik Menyimak TOEFL:</div>
                <div class="fb-exp-text">${explanation}</div>
              </div>
            ` : ''}
          </div>
        </div>
        <div class="reading-next-bar" style="margin-top: 14px;">
          <button class="btn-primary" onclick="nextConversationListening()">
            ${convoListeningStep + 1 < currentLesson.conversations.length ? 'Soal Percakapan Berikutnya →' : 'Selesaikan Pelajaran 🏆'}
          </button>
        </div>
      </div>
    `;
  }
}

function nextConversationListening() {
  convoListeningStep++;
  lessonStep++;
  renderLessonStep();
}

// ─── HEARTS (Disabled — Free Learning) ────────────────────────
function loseHeart() {
  // No life penalty: learners can freely practice and learn from mistakes
}

// ─── FINISH LESSON ────────────────────────────────────────────
function finishLesson() {
  try {
    const timeSec = Math.round((Date.now() - (lessonStartTime || Date.now())) / 1000);
    const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 100;
    const isPerfect = accuracy === 100;

    // Award XP (Always give XP for learning effort)
    const baseXp = lessonXpEarned || (currentLesson ? currentLesson.xpReward : 20) || 20;
    const xp = isPerfect ? baseXp : Math.max(5, Math.round(baseXp * (accuracy / 100)));
    state.totalXp += xp;
    state.todayXp += xp;
    if (currentLang === 'korean') state.koreanXp += xp;
    else if (currentLang === 'english') state.englishXp += xp;
    else if (currentLang === 'toefl') state.toeflXp += xp;

    // Strict Mode: ONLY mark complete and unlock next lesson if accuracy === 100%
    if (isPerfect) {
      if (currentLesson && !state.completedLessons.includes(currentLesson.id)) {
        state.completedLessons.push(currentLesson.id);
        state.totalLessons++;
        if (currentLang === 'korean') state.koreanLessons++;
        else if (currentLang === 'english') state.englishLessons++;
        else if (currentLang === 'toefl') state.toeflLessons++;
      }

      // Safely resolve unit
      const lang = currentLang || 'toefl';
      const langData = APP_DATA[lang] || APP_DATA.toefl;
      const unit = currentUnit || (langData && langData.units ? langData.units.find(u => u.lessons.some(l => l.id === (currentLesson && currentLesson.id))) : null);
      
      if (unit && currentLesson && unit.lessons.every(l => state.completedLessons.includes(l.id))) {
        if (!state.completedUnits.includes(unit.id)) {
          state.completedUnits.push(unit.id);
        }
      }

      state.perfectScores++;
    }

    // Streak
    const today = new Date().toDateString();
    if (state.lastPlayDate !== today) {
      state.streak++;
      state.lastPlayDate = today;
    }

    saveState();

    const lang = currentLang || 'toefl';
    const langData = APP_DATA[lang] || APP_DATA.toefl;
    const unit = currentUnit || (langData && langData.units ? langData.units.find(u => u.lessons.some(l => l.id === (currentLesson && currentLesson.id))) : null);

    // Show result stats in DOM
    const iconEl = document.getElementById('result-icon');
    if (iconEl) iconEl.textContent = isPerfect ? '🏆' : '🔒';
    
    const titleEl = document.getElementById('result-title');
    if (titleEl) {
      titleEl.textContent = isPerfect 
        ? 'Sempurna! 100% Menguasai 🎉' 
        : `Belum 100% Sempurna (${accuracy}%)`;
    }
    
    const subEl = document.getElementById('result-sub');
    if (subEl) {
      subEl.innerHTML = isPerfect 
        ? 'Luar biasa! Semua jawaban benar. Pelajaran berikutnya telah resmi dibuka!' 
        : '<span style="color: #f59e0b; font-weight: 600;">⚠️ Mode Belajar Ketat (Strict Mastery):</span><br>Kamu wajib meraih skor 100% (semua benar) untuk membuka pelajaran berikutnya. Yuk ulangi sekarang!';
    }
    
    const xpEl = document.getElementById('result-xp');
    if (xpEl) xpEl.textContent = `+${xp}`;
    
    const accEl = document.getElementById('result-accuracy');
    if (accEl) {
      accEl.textContent = `${accuracy}%`;
      accEl.style.color = isPerfect ? '#10b981' : '#f59e0b';
    }
    
    const timeEl = document.getElementById('result-time');
    if (timeEl) {
      const formattedTime = timeSec >= 60 
        ? `${Math.floor(timeSec / 60)}m ${timeSec % 60}s` 
        : `${timeSec}s`;
      timeEl.textContent = formattedTime;
    }

    const backBtn = document.getElementById('result-back-btn');
    if (backBtn) backBtn.onclick = () => showView(`${lang}-map`);

    // Repeat current lesson button
    const repeatBtn = document.getElementById('result-repeat-btn');
    const curLang = lang;
    const curUnitId = unit ? unit.id : (currentUnit ? currentUnit.id : '');
    const curLessonId = currentLesson ? currentLesson.id : '';

    if (repeatBtn && currentLesson) {
      repeatBtn.onclick = () => startLesson(curLang, curUnitId, curLessonId);
      if (!isPerfect) {
        repeatBtn.textContent = '🔄 Ulangi Sekarang (Wajib 100% untuk Lanjut)';
        repeatBtn.className = 'btn-primary repeat-highlight';
      } else {
        repeatBtn.textContent = '🔄 Latihan Ulang (Asah Kembali)';
        repeatBtn.className = 'btn-secondary btn-repeat-drill';
      }
    }

    // Find next lesson
    const units = (langData && langData.units) || [];
    let nextLesson = null;
    let nextLang = lang;
    if (currentLesson) {
      for (const u of units) {
        for (let i = 0; i < u.lessons.length; i++) {
          if (u.lessons[i].id === currentLesson.id && i + 1 < u.lessons.length) {
            nextLesson = { unitId: u.id, lessonId: u.lessons[i + 1].id };
            break;
          }
        }
        if (nextLesson) break;
      }
    }

    const nextBtn = document.getElementById('result-next-btn');
    if (nextBtn) {
      if (isPerfect) {
        if (nextLesson) {
          nextBtn.onclick = () => startLesson(nextLang, nextLesson.unitId, nextLesson.lessonId);
          nextBtn.textContent = 'Pelajaran Berikutnya → 🚀';
          nextBtn.className = 'btn-primary';
          nextBtn.disabled = false;
        } else {
          nextBtn.onclick = () => showView(`${lang}-map`);
          nextBtn.textContent = '🏆 Kembali ke Peta Materi';
          nextBtn.className = 'btn-primary';
          nextBtn.disabled = false;
        }
      } else {
        // STRICT LOCK: cannot proceed if accuracy < 100
        nextBtn.className = 'btn-secondary locked-next-btn';
        nextBtn.textContent = '🔒 Pelajaran Berikutnya (Terkunci - Wajib 100%)';
        nextBtn.onclick = () => {
          showAlertPopup({
            icon: '🔒',
            title: 'Materi Masih Terkunci!',
            message: `Skor kamu saat ini adalah <strong>${accuracy}%</strong>.<br><br>Sesuai <strong>Mode Belajar Ketat (Strict Mastery)</strong>, kamu wajib mendapatkan <strong>skor 100% (semua benar)</strong> untuk membuka pelajaran berikutnya!`,
            type: 'warning',
            buttonText: 'Ulangi Pelajaran Ini 🔄',
            onClose: () => {
              if (curLessonId) startLesson(curLang, curUnitId, curLessonId);
            }
          });
        };
      }
    }

    showView('result');
    if (isPerfect) launchConfetti();
  } catch (err) {
    console.error('Error in finishLesson:', err);
    showView('result');
  }
}

// ─── CONFETTI ─────────────────────────────────────────────────
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#f43f5e', '#a855f7', '#06b6d4', '#eab308', '#22c55e', '#3b82f6'];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 12 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.vy += 0.05;
    });
    frame++;
    if (frame < 180) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ─── TOAST ────────────────────────────────────────────────────
let toastTimeout;
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  clearTimeout(toastTimeout);
  toast.className = `toast toast-${type}`;
  toastMsg.textContent = message;
  toastIcon.textContent = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
  toast.classList.remove('hidden');

  toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2000);
}

// ─── EFFECTS ──────────────────────────────────────────────────
function playSuccessEffect() {
  const el = document.querySelector('.quiz-option.correct, .match-item.matched, .fill-option.correct');
  if (el) {
    el.classList.add('pop');
    setTimeout(() => el.classList.remove('pop'), 300);
  }
}

// ─── UTILS ───────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── HANGUL GUIDE MODAL ──────────────────────────────────────
function openHangulGuideModal() {
  const modal = document.getElementById('hangul-guide-modal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeHangulGuideModal() {
  const modal = document.getElementById('hangul-guide-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// ─── AUTH & MYSQL SYNC ────────────────────────────────────────
function updateAuthNavUI() {
  const container = document.getElementById('nav-auth-section');
  if (!container) return;

  if (state.currentUser && state.currentUser.id) {
    container.innerHTML = `
      <div class="user-pill" title="Akun: ${state.currentUser.email}">
        <span class="user-pill-icon">👤</span>
        <span class="user-pill-name">${state.currentUser.username}</span>
        <span class="user-sync-status" title="Tersimpan otomatis">●</span>
        <button class="btn-logout-nav" onclick="handleLogout()" title="Keluar dari akun">Keluar</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn-auth-nav" onclick="openAuthModal('login')">
        Masuk / Daftar
      </button>
    `;
  }
}

function openAuthModal(mode = 'login') {
  closeGoogleModal();
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
    switchAuthTab(mode);
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById('auth-tab-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('auth-form-login');
  const formRegister = document.getElementById('auth-form-register');
  const alertEl = document.getElementById('auth-alert');
  if (alertEl) alertEl.className = 'auth-alert hidden';

  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
  } else {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
  }
}

function showAuthAlert(msg, type = 'error') {
  const alertEl = document.getElementById('auth-alert');
  if (!alertEl) return;
  alertEl.textContent = msg;
  alertEl.className = `auth-alert ${type}`;
}

function getLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem('basaloka_local_users') || '[]');
  } catch (e) {
    return [];
  }
}

function saveLocalUsers(users) {
  localStorage.setItem('basaloka_local_users', JSON.stringify(users));
}

async function handleLogin(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!email || !password) {
    return showAuthAlert('Harap isi email dan password!', 'error');
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      state.currentUser = data.user;
      state.userName = data.user.username;
      if (data.progress) {
        state = { ...state, ...data.progress, currentUser: data.user, userName: data.user.username };
      }
      saveState();
      closeAuthModal();
      showToast(`👋 Selamat datang kembali, ${data.user.username}!`, 'success');
      showView('dashboard');
      updateNavStats();
      return;
    }
  } catch (err) {
    // Fallback to local storage for static hosting
  }

  // Check local users database fallback
  const localUsers = getLocalUsers();
  const found = localUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (found) {
    state.currentUser = found;
    state.userName = found.username;
    saveState();
    closeAuthModal();
    showToast(`👋 Selamat datang kembali, ${found.username}!`, 'success');
    showView('dashboard');
    updateNavStats();
    return;
  }

  showAuthAlert('Email atau password salah! Jika belum punya akun, silakan daftar dulu.', 'error');
}

async function handleRegister(e) {
  if (e) e.preventDefault();
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  if (!username || !email || !password) {
    return showAuthAlert('Semua kolom wajib diisi!', 'error');
  }
  if (password.length < 6) {
    return showAuthAlert('Password minimal 6 karakter!', 'error');
  }

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    if (res.ok) {
      const data = await res.json();
      state.currentUser = data.user;
      state.userName = data.user.username;
      saveState();
      closeAuthModal();
      showToast(`🎉 Akun berhasil dibuat! Selamat belajar, ${data.user.username}!`, 'success');
      showView('dashboard');
      updateNavStats();
      return;
    }
  } catch (err) {
    // Fallback to local storage for static hosting
  }

  // Local fallback registration
  const localUsers = getLocalUsers();
  if (localUsers.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return showAuthAlert('Email sudah terdaftar. Silakan login!', 'error');
  }

  const newUser = { id: 'local_' + Date.now(), username, email, password };
  localUsers.push(newUser);
  saveLocalUsers(localUsers);

  state.currentUser = newUser;
  state.userName = username;
  saveState();
  closeAuthModal();
  showToast(`🎉 Akun berhasil dibuat! Selamat belajar, ${username}!`, 'success');
  showView('dashboard');
  updateNavStats();
}

// ─── GOOGLE AUTH & GIS INTEGRATION ────────────────────────────
const GOOGLE_CLIENT_ID = "860315695715-k5mg1bfsuq5l7rmrc2k74giksujh18p3.apps.googleusercontent.com";

function decodeJwtResponse(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error('Error decoding JWT token:', err);
    return null;
  }
}

function handleGoogleCredentialResponse(response) {
  if (!response || !response.credential) return;
  const payload = decodeJwtResponse(response.credential);
  if (!payload || !payload.email) {
    showToast('❌ Gagal membaca profil akun Google.', 'error');
    return;
  }
  const email = payload.email;
  const name = payload.name || payload.given_name || email.split('@')[0];
  submitGoogleAuth(email, name);
}

function initGoogleGIS() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
    const fallback = document.getElementById('google-hero-fallback-btn');
    if (fallback) fallback.style.display = 'flex';
    return;
  }
  try {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true
    });
    
    // Render official Google button directly on Hero Page
    const heroBtn = document.getElementById('google-hero-btn');
    if (heroBtn) {
      heroBtn.innerHTML = '';
      google.accounts.id.renderButton(heroBtn, {
        theme: 'filled_blue',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        logo_alignment: 'left',
        width: 300
      });
      const fallback = document.getElementById('google-hero-fallback-btn');
      if (fallback) fallback.style.display = 'none';
    }

    // Render official Google button inside modal container if exists
    const container = document.getElementById('google-official-btn-container');
    if (container) {
      container.innerHTML = '';
      google.accounts.id.renderButton(container, {
        theme: 'filled_blue',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        logo_alignment: 'left',
        width: 280
      });
    }

    // Prompt One Tap automatically on page load if appropriate
    google.accounts.id.prompt();
  } catch (err) {
    console.warn('GIS init error:', err);
    const fallback = document.getElementById('google-hero-fallback-btn');
    if (fallback) fallback.style.display = 'flex';
  }
}

function triggerGoogleSignIn() {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    initGoogleGIS();
    google.accounts.id.prompt();
  } else {
    openGoogleModal();
  }
}

// Auto-init GIS on window load or script load
if (document.readyState === 'complete') {
  setTimeout(initGoogleGIS, 500);
} else {
  window.addEventListener('load', () => setTimeout(initGoogleGIS, 500));
}

function openGoogleModal() {
  closeAuthModal();
  const m = document.getElementById('google-modal');
  if (m) {
    m.classList.add('active');
    m.style.display = 'flex';
  }

  // Coba tampilkan popup One Tap resmi jika didukung
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    initGoogleGIS();
    google.accounts.id.prompt();
  }

  // Render akun yang tersimpan KHUSUS di perangkat ini (jika pernah masuk sebelumnya)
  const container = document.getElementById('google-recent-account-container');
  if (container) {
    const saved = localStorage.getItem('basaloka_last_user');
    if (saved) {
      try {
        const u = JSON.parse(saved);
        if (u && u.email) {
          const initial = (u.username || u.email)[0].toUpperCase();
          container.innerHTML = `
            <div class="google-account-item" onclick="submitGoogleAuth('${u.email.replace(/'/g, "\\'")}', '${(u.username || '').replace(/'/g, "\\'")}')">
              <div class="google-avatar">${initial}</div>
              <div class="google-account-info">
                <div class="google-account-name">${u.username || 'Pengguna'}</div>
                <div class="google-account-email">${u.email}</div>
              </div>
              <span class="google-badge-fast">⚡ 1-Klik</span>
            </div>
            <div class="onboarding-divider" style="margin: 12px 0;">
              <span>atau gunakan email lain</span>
            </div>
          `;
          return;
        }
      } catch (err) {}
    }
    container.innerHTML = '';
  }
}

function closeGoogleModal() {
  const m = document.getElementById('google-modal');
  if (m) {
    m.classList.remove('active');
    m.style.display = 'none';
  }
}

async function handleCustomGoogleAuth(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('google-custom-email').value.trim();
  const name = document.getElementById('google-custom-name').value.trim();
  if (!email) return;
  await submitGoogleAuth(email, name);
}

async function submitGoogleAuth(email, name) {
  try {
    const res = await fetch('/api/google-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name })
    });
    if (res.ok) {
      const data = await res.json();
      state.currentUser = data.user;
      state.userName = data.user.username;
      if (data.progress) {
        state = { ...state, ...data.progress, currentUser: data.user, userName: data.user.username };
      }
      saveState();
      localStorage.setItem('basaloka_last_user', JSON.stringify({ email, username: data.user.username }));
      closeGoogleModal();
      closeAuthModal();
      showToast(`✨ Berhasil masuk via Google! Halo, ${data.user.username}!`, 'success');
      showView('dashboard');
      updateNavStats();
      return;
    }
  } catch (err) {
    // Fallback to local storage
  }

  const localUser = { id: 'google_' + Date.now(), username: name || email.split('@')[0], email };
  state.currentUser = localUser;
  state.userName = localUser.username;
  saveState();
  localStorage.setItem('basaloka_last_user', JSON.stringify({ email, username: localUser.username }));
  closeGoogleModal();
  closeAuthModal();
  showToast(`✨ Berhasil masuk via Google! Halo, ${localUser.username}!`, 'success');
  showView('dashboard');
  updateNavStats();
}

function handleLogout() {
  showConfirmPopup({
    icon: '👋',
    type: 'warning',
    title: 'Keluar dari Akun?',
    message: 'Progres dan streak belajarmu tersimpan aman di BasaLoka. Kamu bisa masuk kembali kapan saja!',
    confirmText: 'Ya, Keluar',
    cancelText: 'Tetap Masuk',
    onConfirm: () => {
      state.currentUser = null;
      saveState();
      updateNavStats();
      showToast('👋 Kamu sudah keluar dari akun.', 'info');
    }
  });
}

// ─── MINI-DIALOGUE ENGINE (Simulasi Percakapan Nyata) ─────────
let currentDialogue = null;
let dialogueTurnIndex = 0;
let dialogueShowRom = true;
let dialogueAnswersRecord = [];

function renderDialogueList(targetElementId, langFilter = null) {
  const grid = document.getElementById(targetElementId);
  if (!grid) return;
  const list = (APP_DATA.dialogues || []).filter(item => !langFilter || item.lang === langFilter);

  grid.innerHTML = list.map(item => `
    <div class="dialogue-card" onclick="startDialogue('${item.id}')" role="button" tabindex="0">
      <div class="dialogue-card-header">
        <span class="dialogue-card-badge">${item.badge}</span>
        <span class="dialogue-card-xp">⚡ +${item.xpReward} XP</span>
      </div>
      <div class="dialogue-card-title-group">
        <span class="dialogue-card-icon">${item.icon}</span>
        <div>
          <div class="dialogue-card-title">${item.title}</div>
          <div class="dialogue-card-native">${item.titleNative}</div>
        </div>
      </div>
      <div class="dialogue-card-desc">${item.scenarioDesc}</div>
      <div class="dialogue-card-partner">
        <span class="dialogue-card-avatar">${item.partner.avatar}</span>
        <div>
          <div class="dialogue-card-partner-name">${item.partner.name}</div>
          <div class="dialogue-card-partner-role">${item.partner.role}</div>
        </div>
      </div>
      <button class="btn-primary" style="width: 100%; border-radius: var(--radius-md); font-weight: 700;">
        Mulai Obrolan 💬
      </button>
    </div>
  `).join('');
}

function renderDialogueHub() {
  renderDialogueList('dialogue-cards-grid');
}

function startDialogue(dialogueId) {
  const d = (APP_DATA.dialogues || []).find(item => item.id === dialogueId);
  if (!d) return;

  currentDialogue = d;
  dialogueTurnIndex = 0;
  dialogueAnswersRecord = [];

  document.getElementById('dialogue-partner-avatar').textContent = d.partner.avatar;
  document.getElementById('dialogue-partner-name').textContent = d.partner.name;
  document.getElementById('dialogue-partner-status').textContent = `● Online • ${d.partner.role}`;
  document.getElementById('dialogue-chat-stream').innerHTML = '';
  document.getElementById('dialogue-action-area').innerHTML = '';

  showView('dialogue');

  // Add initial context toast or header note
  showToast(`Skenario: ${d.title}`, 'info');

  setTimeout(() => {
    processDialogueTurn();
  }, 400);
}

function processDialogueTurn() {
  if (!currentDialogue) return;
  const turns = currentDialogue.turns;

  if (dialogueTurnIndex >= turns.length) {
    finishDialogue();
    return;
  }

  const turn = turns[dialogueTurnIndex];
  const stream = document.getElementById('dialogue-chat-stream');
  const typing = document.getElementById('dialogue-typing');
  const actionArea = document.getElementById('dialogue-action-area');

  if (turn.speaker === 'partner') {
    actionArea.innerHTML = '';
    typing.style.display = 'flex';
    document.getElementById('dialogue-typing-text').textContent = `${currentDialogue.partner.name} sedang mengetik...`;
    stream.scrollTop = stream.scrollHeight;

    setTimeout(() => {
      typing.style.display = 'none';

      // Render partner bubble
      const row = document.createElement('div');
      row.className = 'chat-row partner';
      row.innerHTML = `
        <div class="partner-avatar" style="width: 32px; height: 32px; font-size: 1.1rem; flex-shrink: 0;">
          ${currentDialogue.partner.avatar}
        </div>
        <div class="chat-bubble">
          <div class="chat-text-main">
            <button class="chat-audio-btn" onclick="speak('${turn.text.replace(/'/g, "\\'")}', '${turn.ttsLang}')" title="Dengarkan pengucapan">🔊</button>
            ${turn.text}
          </div>
          ${turn.romanization ? `<div class="chat-text-rom" style="${dialogueShowRom ? '' : 'display:none;'}">🗣️ ${turn.romanization}</div>` : ''}
          <div class="chat-text-meaning">${turn.meaning}</div>
        </div>
      `;
      stream.appendChild(row);

      // Cultural Callout if available
      if (turn.culturalNote) {
        const callout = document.createElement('div');
        callout.className = 'cultural-callout';
        callout.innerHTML = turn.culturalNote;
        stream.appendChild(callout);
      }

      stream.scrollTop = stream.scrollHeight;

      // Auto play partner line
      speak(turn.text, turn.ttsLang);

      // Advance to next turn (usually user response)
      dialogueTurnIndex++;
      setTimeout(() => {
        processDialogueTurn();
      }, 1000);
    }, 1100);

  } else if (turn.speaker === 'user') {
    typing.style.display = 'none';

    // Render interactive user options
    actionArea.innerHTML = `
      <div class="dialogue-prompt-title">💬 Giliranmu merespon: ${turn.prompt}</div>
      <div class="dialogue-options-list" id="dialogue-opts-list">
        ${turn.options.map((opt, i) => `
          <button class="dialogue-option-btn" id="dopt-${i}" onclick="chooseDialogueOption(${i})">
            <div class="dialogue-opt-main">${opt.text}</div>
            ${opt.romanization ? `<div class="dialogue-opt-sub" style="${dialogueShowRom ? '' : 'display:none;'}">🗣️ ${opt.romanization}</div>` : ''}
            <div class="dialogue-opt-sub" style="color: var(--text-muted);">${opt.meaning}</div>
          </button>
        `).join('')}
      </div>
      <div id="dialogue-opt-feedback"></div>
    `;

    stream.scrollTop = stream.scrollHeight;
  }
}

function chooseDialogueOption(optionIndex) {
  if (!currentDialogue) return;
  const turn = currentDialogue.turns[dialogueTurnIndex];
  const option = turn.options[optionIndex];
  const stream = document.getElementById('dialogue-chat-stream');
  const actionArea = document.getElementById('dialogue-action-area');
  const feedbackEl = document.getElementById('dialogue-opt-feedback');

  const btns = document.querySelectorAll('.dialogue-option-btn');
  btns.forEach(b => b.disabled = true);

  if (option.isCorrect) {
    document.getElementById(`dopt-${optionIndex}`).classList.add('selected-correct');
    dialogueAnswersRecord.push({ text: option.text, meaning: option.meaning, correct: true });

    feedbackEl.innerHTML = `
      <div class="dialogue-feedback-banner correct">
        ${option.feedback}
      </div>
    `;

    playSuccessEffect();

    setTimeout(() => {
      // Append user bubble to chat stream
      const row = document.createElement('div');
      row.className = 'chat-row user';
      row.innerHTML = `
        <div class="chat-bubble">
          <div class="chat-text-main">${option.text}</div>
          ${option.romanization ? `<div class="chat-text-rom" style="${dialogueShowRom ? '' : 'display:none;'}">🗣️ ${option.romanization}</div>` : ''}
          <div class="chat-text-meaning">${option.meaning}</div>
        </div>
      `;
      stream.appendChild(row);
      stream.scrollTop = stream.scrollHeight;

      // Speak user line
      const ttsLang = currentDialogue.lang === 'korean' ? 'ko-KR' : 'en-US';
      speak(option.text, ttsLang);

      // Advance turn
      dialogueTurnIndex++;
      actionArea.innerHTML = '';

      setTimeout(() => {
        processDialogueTurn();
      }, 900);
    }, 900);

  } else {
    document.getElementById(`dopt-${optionIndex}`).classList.add('selected-wrong');
    const correctIdx = turn.options.findIndex(o => o.isCorrect);
    if (correctIdx >= 0) {
      document.getElementById(`dopt-${correctIdx}`).classList.add('selected-correct');
    }

    feedbackEl.innerHTML = `
      <div class="dialogue-feedback-banner wrong">
        ${option.feedback}
        <div style="margin-top: 8px;">
          <button class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="retryDialogueTurn()">
            Coba Lagi Respon Ini 🔄
          </button>
        </div>
      </div>
    `;
  }
}

function retryDialogueTurn() {
  const btns = document.querySelectorAll('.dialogue-option-btn');
  btns.forEach(b => {
    b.disabled = false;
    b.classList.remove('selected-correct', 'selected-wrong');
  });
  const fb = document.getElementById('dialogue-opt-feedback');
  if (fb) fb.innerHTML = '';
}

function toggleDialogueRomanization() {
  dialogueShowRom = !dialogueShowRom;
  const btn = document.getElementById('btn-toggle-rom');
  if (btn) btn.classList.toggle('active', dialogueShowRom);

  document.querySelectorAll('.chat-text-rom, .dialogue-opt-sub').forEach(el => {
    if (el.textContent.includes('🗣️')) {
      el.style.display = dialogueShowRom ? 'block' : 'none';
    }
  });
}

function quitDialogue() {
  const returnTarget = (currentDialogue && currentDialogue.lang === 'english') ? 'english-map' : 'korean-map';
  showConfirmPopup({
    icon: '💬',
    type: 'warning',
    title: 'Keluar dari Percakapan?',
    message: 'Sesi latihan percakapan dua arah ini belum selesai. Apakah kamu ingin kembali ke jalur belajar?',
    confirmText: 'Ya, Keluar',
    cancelText: 'Lanjutkan Latihan',
    onConfirm: () => {
      currentDialogue = null;
      showView(returnTarget);
    }
  });
}

function finishDialogue() {
  const xp = currentDialogue.xpReward || 35;
  state.totalXp += xp;
  state.todayXp += xp;
  if (currentDialogue.lang === 'korean') state.koreanXp += xp;
  else state.englishXp += xp;

  saveState();
  updateNavStats();
  playSuccessEffect();
  launchConfetti();

  const actionArea = document.getElementById('dialogue-action-area');
  const d = currentDialogue;

  actionArea.innerHTML = `
    <div class="dialogue-finish-card">
      <div class="dialogue-finish-icon">🎉</div>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">
        Percakapan Selesai!
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">
        Kamu berhasil menyelesaikan skenario <strong>${d.title}</strong> dan mendapatkan <strong>+${xp} XP</strong>!
      </p>

      <div class="dialogue-phrases-summary">
        <div style="font-weight: 700; font-size: 0.85rem; color: #c084fc; margin-bottom: 8px;">
          📚 Kosakata & Frasa Kunci yang Kamu Kuasai:
        </div>
        ${dialogueAnswersRecord.map(a => `
          <div class="dialogue-phrase-item">
            <div>
              <strong>${a.text}</strong>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${a.meaning}</div>
            </div>
            <button class="chat-audio-btn" onclick="speak('${a.text.replace(/'/g, "\\'")}', '${d.lang === 'korean' ? 'ko-KR' : 'en-US'}')">🔊</button>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; gap: 12px; width: 100%;">
        <button class="btn-secondary" style="flex: 1;" onclick="startDialogue('${d.id}')">
          Ulangi Lagi 🔄
        </button>
        <button class="btn-primary" style="flex: 1;" onclick="showView('${d.lang === 'english' ? 'english-map' : 'korean-map'}')">
          Kembali ke Jalur 🚀
        </button>
      </div>
    </div>
  `;
}

// ─── EXPOSE TO GLOBAL WINDOW SCOPE ────────────────────────────
window.startApp = startApp;
window.showView = showView;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.openGoogleModal = openGoogleModal;
window.closeGoogleModal = closeGoogleModal;
window.triggerGoogleSignIn = triggerGoogleSignIn;
window.submitGoogleAuth = submitGoogleAuth;
window.handleCustomGoogleAuth = handleCustomGoogleAuth;
window.handleLogout = handleLogout;
window.openHangulGuideModal = openHangulGuideModal;
window.closeHangulGuideModal = closeHangulGuideModal;
window.speak = speak;
window.renderDialogueHub = renderDialogueHub;
window.startDialogue = startDialogue;
window.chooseDialogueOption = chooseDialogueOption;
window.retryDialogueTurn = retryDialogueTurn;
window.toggleDialogueRomanization = toggleDialogueRomanization;
window.quitDialogue = quitDialogue;
window.finishDialogue = finishDialogue;
window.renderConversationListening = renderConversationListening;
window.playFullConversation = playFullConversation;
window.playSpeakerVoice = playSpeakerVoice;
window.toggleConvoTranscript = toggleConvoTranscript;
window.answerConversationListening = answerConversationListening;
window.nextConversationListening = nextConversationListening;

// ─── TOEFL ITP SIMULATION & SCORE PREDICTOR ENGINE ───────────
let toeflSimState = {
  active: false,
  examMode: 'real',
  timerInterval: null,
  durationSec: 115 * 60,
  remainingSec: 115 * 60,
  currentIndex: 0,
  answers: {}, // index: chosenOption (0 - 3)
  playedAudios: {}, // tracks which questions had audio played
  isPlayingAudio: false,
  audioTimeout: null,
  sec1End: 49,
  sec2End: 89,
  section1Shown: false,
  section2Shown: false,
  activeFilter: 'all'
};

let selectedExamMode = 'real';
window.selectedExamMode = selectedExamMode;
window.toeflSimState = toeflSimState;

function openExamSetupModal() {
  const m = document.getElementById('exam-setup-modal');
  if (m) {
    m.classList.add('active');
    m.style.display = 'flex';
  }
}
window.openExamSetupModal = openExamSetupModal;

function closeExamSetupModal() {
  const m = document.getElementById('exam-setup-modal');
  if (m) {
    m.classList.remove('active');
    m.style.display = 'none';
  }
}
window.closeExamSetupModal = closeExamSetupModal;

function selectExamModeOption(mode) {
  selectedExamMode = mode;
  window.selectedExamMode = mode;
  document.querySelectorAll('.exam-mode-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`opt-mode-${mode}`);
  if (card) {
    card.classList.add('selected');
    const radio = card.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }
}
window.selectExamModeOption = selectExamModeOption;

function confirmStartToeflExam() {
  closeExamSetupModal();
  startToeflSimulation(selectedExamMode);
}
window.confirmStartToeflExam = confirmStartToeflExam;

function generateRandomizedToeflExam(mode = 'real') {
  const bank = APP_DATA.toeflQuestionBank;
  if (!bank) return;

  const rawL = (bank.listening && bank.listening.length) ? bank.listening : (APP_DATA.toeflSimulation.questions || []).filter(q => q.section === 'listening');
  const rawS = (bank.structure && bank.structure.length) ? bank.structure : (APP_DATA.toeflSimulation.questions || []).filter(q => q.section === 'structure');
  const rawR = (bank.reading && bank.reading.length) ? bank.reading : (APP_DATA.toeflSimulation.questions || []).filter(q => q.section === 'reading');

  let targetL = 50;
  let targetS = 40;
  let targetR = 50;

  if (mode === 'quick') {
    targetL = 10;
    targetS = 10;
    targetR = 10;
  }

  // Randomly sample distinct questions from each section pool
  const pickL = shuffle([...rawL]).slice(0, targetL);
  const pickS = shuffle([...rawS]).slice(0, targetS);
  const pickR = shuffle([...rawR]).slice(0, targetR);

  // Randomize answer choices for each question so answers A/B/C/D change dynamically
  const randomizeOpts = (q, newNumber) => {
    if (!q.options || !q.options.length) return { ...q, number: newNumber };
    const correctText = q.options[q.answer];
    const shuffledOpts = shuffle([...q.options]);
    return {
      ...q,
      number: newNumber,
      options: shuffledOpts,
      answer: shuffledOpts.indexOf(correctText)
    };
  };

  let num = 1;
  const finalQuestions = [
    ...pickL.map(q => randomizeOpts(q, num++)),
    ...pickS.map(q => randomizeOpts(q, num++)),
    ...pickR.map(q => randomizeOpts(q, num++))
  ];

  APP_DATA.toeflSimulation.questions = finalQuestions;
  APP_DATA.toeflSimulation.totalQuestions = finalQuestions.length;
}

function startToeflSimulation(mode = 'real') {
  generateRandomizedToeflExam(mode);
  const simData = APP_DATA.toeflSimulation;
  if (!simData) return;

  let durationMinutes = 115;
  if (mode === 'campus-90') durationMinutes = 90;
  else if (mode === 'quick') durationMinutes = 25;

  const totalQuestions = (simData.questions || []).length;
  const countL = (simData.questions || []).filter(q => q.section === 'listening').length;
  const countS = (simData.questions || []).filter(q => q.section === 'structure').length;

  toeflSimState = {
    active: true,
    examMode: mode,
    timerInterval: null,
    durationSec: durationMinutes * 60,
    remainingSec: durationMinutes * 60,
    currentIndex: 0,
    answers: {},
    playedAudios: {},
    isPlayingAudio: false,
    audioTimeout: null,
    sec1End: countL - 1,
    sec2End: countL + countS - 1,
    section1Shown: false,
    section2Shown: false,
    activeFilter: 'all'
  };
  window.toeflSimState = toeflSimState;

  showView('toefl-sim');
  renderExamNavGrid();
  renderExamQuestion(0);
  startExamTimer();
}

function restartToeflSimWithNewQuestions() {
  closeCampusAlertAndShowReport();
  closeExamModal();
  startToeflSimulation(toeflSimState.examMode || 'real');
  showToast('🔄 Paket Soal Baru & Diacak Berhasil Dimuat!', 'info');
}
window.restartToeflSimWithNewQuestions = restartToeflSimWithNewQuestions;

function startExamTimer() {
  if (toeflSimState.timerInterval) clearInterval(toeflSimState.timerInterval);
  updateExamTimerDisplay();

  toeflSimState.timerInterval = setInterval(() => {
    if (!toeflSimState.active) {
      clearInterval(toeflSimState.timerInterval);
      return;
    }
    toeflSimState.remainingSec--;
    updateExamTimerDisplay();

    if (toeflSimState.remainingSec <= 0) {
      clearInterval(toeflSimState.timerInterval);
      toeflSimState.active = false;
      showAlertPopup({
        icon: '⏰',
        type: 'info',
        title: 'Waktu Ujian Telah Habis!',
        message: 'Batas waktu pengerjaan ujian telah selesai. Lembar jawabanmu akan dikumpulkan dan prediksi skor TOEFL resmi akan dihitung sekarang.',
        buttonText: 'Lihat Skor Ujian 🚀',
        onClose: () => { submitToeflSim(); }
      });
    }
  }, 1000);
}

function updateExamTimerDisplay() {
  const el = document.getElementById('exam-timer-digits');
  const badge = document.getElementById('exam-timer-badge');
  if (!el) return;

  const m = Math.floor(Math.max(0, toeflSimState.remainingSec) / 60);
  const s = Math.max(0, toeflSimState.remainingSec) % 60;
  el.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  if (toeflSimState.remainingSec <= 300) { // < 5 minutes
    if (badge) badge.classList.add('urgent-warning');
  } else {
    if (badge) badge.classList.remove('urgent-warning');
  }
}

function filterExamGrid(filter) {
  toeflSimState.activeFilter = filter;
  const buttons = document.querySelectorAll('.exam-filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`filter-btn-${filter}`);
  if (activeBtn) activeBtn.classList.add('active');
  renderExamNavGrid();
}
window.filterExamGrid = filterExamGrid;

function renderExamNavGrid() {
  const grid = document.getElementById('exam-grid-numbers');
  const countEl = document.getElementById('exam-answered-count');
  if (!grid) return;

  const questions = APP_DATA.toeflSimulation.questions || [];
  const answeredCount = Object.keys(toeflSimState.answers).length;
  if (countEl) countEl.textContent = `${answeredCount} / ${questions.length} Terjawab`;

  // Update counts in filter bar
  const lCount = questions.filter(q => q.section === 'listening').length;
  const sCount = questions.filter(q => q.section === 'structure').length;
  const rCount = questions.filter(q => q.section === 'reading').length;
  const elAll = document.getElementById('filter-all-count');
  const elL = document.getElementById('filter-l-count');
  const elS = document.getElementById('filter-s-count');
  const elR = document.getElementById('filter-r-count');
  if (elAll) elAll.textContent = questions.length;
  if (elL) elL.textContent = lCount;
  if (elS) elS.textContent = sCount;
  if (elR) elR.textContent = rCount;

  const filter = toeflSimState.activeFilter || 'all';

  grid.innerHTML = questions.map((q, idx) => {
    if (filter !== 'all' && q.section !== filter) return '';
    const isAnswered = toeflSimState.answers[idx] !== undefined;
    const isCurrent = idx === toeflSimState.currentIndex;
    return `
      <button class="exam-num-btn ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}"
              onclick="jumpToExamQuestion(${idx})" title="Nomor ${idx + 1} (${q.section})">
        ${idx + 1}
      </button>
    `;
  }).join('');

  if (lang === 'korean') {
    renderDialogueList('korean-dialogue-cards', 'korean');
  } else if (lang === 'english') {
    renderDialogueList('english-dialogue-cards', 'english');
  }
}

function renderExamQuestion(index) {
  const questions = APP_DATA.toeflSimulation.questions;
  if (index < 0 || index >= questions.length) return;

  toeflSimState.currentIndex = index;
  const q = questions[index];
  const letters = ['A', 'B', 'C', 'D'];

  // Update Section Header
  const secNameEl = document.getElementById('exam-section-name');
  if (secNameEl) {
    if (q.section === 'listening') secNameEl.textContent = 'Section 1: Listening Comprehension (Audio 1x Putar)';
    else if (q.section === 'structure') secNameEl.textContent = 'Section 2: Structure & Written Expression';
    else if (q.section === 'reading') secNameEl.textContent = 'Section 3: Reading Comprehension';
  }

  // Update Indicator
  const indEl = document.getElementById('exam-current-indicator');
  if (indEl) indEl.textContent = `Soal ${index + 1} dari ${questions.length} • (${q.part || (q.section === 'reading' ? 'Academic Reading' : 'Structure')})`;

  // Prev / Next button states
  const prevBtn = document.getElementById('btn-exam-prev');
  const nextBtn = document.getElementById('btn-exam-next');
  if (prevBtn) prevBtn.disabled = (index === 0);
  if (nextBtn) {
    if (index === questions.length - 1) {
      nextBtn.textContent = 'Kumpulkan Ujian 🏁';
      nextBtn.onclick = () => confirmSubmitToeflSim();
    } else {
      nextBtn.textContent = 'Soal Selanjutnya →';
      nextBtn.onclick = () => navExamQuestion(1);
    }
  }

  // Question Card UI
  const card = document.getElementById('exam-question-card');
  if (!card) return;

  const chosenOpt = toeflSimState.answers[index];

  if (q.section === 'listening') {
    const manLine = (q.dialogue || []).find(d => d.speaker === 'man') || q.dialogue[0];
    const womanLine = (q.dialogue || []).find(d => d.speaker === 'woman') || q.dialogue[1];
    const safeManText = (manLine ? manLine.text : '').replace(/'/g, "\\'");
    const safeWomanText = (womanLine ? womanLine.text : '').replace(/'/g, "\\'");
    const safeNarratorText = (q.narrator || q.question || '').replace(/'/g, "\\'");
    const hasPlayed = !!(toeflSimState.playedAudios && toeflSimState.playedAudios[index]);

    card.innerHTML = `
      <div class="exam-listening-layout">
        <div class="exam-audio-box">
          <div class="eab-header">
            <span class="exam-sec-badge">🎧 Section 1: Listening • Short Conversation</span>
            <span style="font-size: 0.82rem; color: var(--text-muted);">Nomor ${index + 1}</span>
          </div>
          <div class="eab-prompt">
            Dengarkan rekaman percakapan audio di bawah ini dengan saksama:
          </div>
          <div class="eab-action-row">
            ${hasPlayed ? `
              <button class="btn-exam-play played-locked" id="btn-exam-audio" disabled>
                <span id="exam-play-icon">🔒</span> <span id="exam-play-text">Audio Selesai (Hanya 1x Sesuai Aturan Ujian)</span>
              </button>
            ` : `
              <button class="btn-exam-play" id="btn-exam-audio" onclick="playExamConvoAudio(${index}, '${safeManText}', '${safeWomanText}', '${safeNarratorText}')">
                <span id="exam-play-icon">▶️</span> <span id="exam-play-text">Putar Percakapan</span>
              </button>
            `}
            <div class="exam-wave" id="exam-wave-anim" style="display: none;">
              <span class="sw-bar"></span><span class="sw-bar"></span><span class="sw-bar"></span><span class="sw-bar"></span>
              <span class="exam-audio-speaker-label" id="exam-speaker-status">Memutar audio...</span>
            </div>
          </div>

          <div class="exam-audio-notice ${hasPlayed ? 'locked' : ''}">
            <span class="ean-icon">${hasPlayed ? '🔒' : 'ℹ️'}</span>
            <div class="ean-text">
              ${hasPlayed 
                ? `<strong>Audio Selesai:</strong> Sesuai simulasi resmi TOEFL, rekaman percakapan hanya dapat didengarkan satu kali.`
                : `<strong>Aturan Resmi TOEFL:</strong> Rekaman percakapan hanya dapat diputar <strong>1 KALI</strong>. Dengarkan dengan konsentrasi penuh!`
              }
            </div>
          </div>
        </div>

        <div class="exam-question-body">
          <div class="exam-question-text"><strong>Pertanyaan:</strong> ${q.question}</div>
          <div class="exam-options-grid">
            ${q.options.map((opt, i) => `
              <button class="exam-opt-btn ${chosenOpt === i ? 'selected' : ''}" onclick="selectExamOption(${i})">
                <span class="opt-letter">${letters[i]}</span>
                <span class="opt-label">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (q.section === 'structure') {
    card.innerHTML = `
      <div class="exam-structure-layout">
        <div class="exam-sec-badge" style="width: fit-content; margin-bottom: 12px;">📐 Section 2 • ${q.part || 'Structure & Written Expression'}</div>
        <div class="exam-instruction-text" style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
          ${(q.part && q.part.includes('Completion')) 
            ? 'Pilihlah satu kata atau frasa yang paling tepat untuk melengkapi kalimat berikut sesuai kaidah tata bahasa Inggris resmi:' 
            : 'Pilihlah salah satu bagian bergaris bawah (A, B, C, atau D) yang memuat KESALAHAN tata bahasa:'}
        </div>

        ${q.sentenceHighlighted ? `
          <div class="exam-sentence-box">
            ${q.sentenceHighlighted
              .replace(/\[(.*?)\]\(A\)/g, '<u class="err-tag"><span class="err-sub">A</span>$1</u>')
              .replace(/\[(.*?)\]\(B\)/g, '<u class="err-tag"><span class="err-sub">B</span>$1</u>')
              .replace(/\[(.*?)\]\(C\)/g, '<u class="err-tag"><span class="err-sub">C</span>$1</u>')
              .replace(/\[(.*?)\]\(D\)/g, '<u class="err-tag"><span class="err-sub">D</span>$1</u>')
            }
          </div>
        ` : `
          <div class="exam-sentence-box">
            ${q.questionText}
          </div>
        `}

        <div class="exam-options-grid" style="margin-top: 18px;">
          ${q.options.map((opt, i) => `
            <button class="exam-opt-btn ${chosenOpt === i ? 'selected' : ''}" onclick="selectExamOption(${i})">
              <span class="opt-letter">${letters[i]}</span>
              <span class="opt-label">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (q.section === 'reading') {
    // Find passage (either on this question or referenced)
    let passageTitle = q.passageTitle;
    let passageText = q.passageText;
    if (!passageText && q.passageRef) {
      const refQ = questions.find(item => item.id === q.passageRef);
      if (refQ) {
        passageTitle = refQ.passageTitle;
        passageText = refQ.passageText;
      }
    }

    card.innerHTML = `
      <div class="exam-reading-layout">
        <div class="exam-passage-box">
          <div class="exam-passage-badge">📖 TOEFL Academic Passage</div>
          <h4 class="exam-passage-title">${passageTitle || 'Academic Text'}</h4>
          <div class="exam-passage-content">
            ${(passageText || '').replace(/\n\n/g, '<br><br>')}
          </div>
        </div>

        <div class="exam-reading-qbox">
          <div class="exam-question-text">
            <strong>Pertanyaan ${index + 1}:</strong><br>
            ${q.question}
          </div>
          <div class="exam-options-grid">
            ${q.options.map((opt, i) => `
              <button class="exam-opt-btn ${chosenOpt === i ? 'selected' : ''}" onclick="selectExamOption(${i})">
                <span class="opt-letter">${letters[i]}</span>
                <span class="opt-label">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderExamNavGrid();
}

function playExamConvoAudio(qIndex, manText, womanText, narratorText) {
  if (toeflSimState.playedAudios && toeflSimState.playedAudios[qIndex]) {
    showToast('🔒 Aturan Ujian TOEFL: Audio percakapan hanya dapat diputar 1 kali!', 'warning');
    return;
  }

  // Mark played immediately
  if (!toeflSimState.playedAudios) toeflSimState.playedAudios = {};
  toeflSimState.playedAudios[qIndex] = true;
  toeflSimState.isPlayingAudio = true;

  const btn = document.getElementById('btn-exam-audio');
  const icon = document.getElementById('exam-play-icon');
  const text = document.getElementById('exam-play-text');
  const wave = document.getElementById('exam-wave-anim');
  const status = document.getElementById('exam-speaker-status');
  const cardMan = document.getElementById('mini-card-man');
  const cardWoman = document.getElementById('mini-card-woman');

  if (btn) {
    btn.disabled = true;
    btn.classList.add('playing');
  }
  if (icon) icon.textContent = '🔊';
  if (text) text.textContent = 'Sedang Memutar... (Hanya 1x)';
  if (wave) wave.style.display = 'inline-flex';

  // Step 1: Speaker 1
  if (cardMan) cardMan.classList.add('active');
  if (cardWoman) cardWoman.classList.remove('active');
  if (status) status.textContent = 'Memutar pembicara 1...';

  speakWithVoice(manText, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'male' }, () => {
    if (!toeflSimState.isPlayingAudio) return;
    if (cardMan) cardMan.classList.remove('active');

    toeflSimState.audioTimeout = setTimeout(() => {
      if (!toeflSimState.isPlayingAudio) return;

      // Step 2: Speaker 2
      if (cardWoman) cardWoman.classList.add('active');
      if (status) status.textContent = 'Memutar pembicara 2...';

      speakWithVoice(womanText, 'en-US', { pitch: 1.0, rate: 0.92, gender: 'female', cancelPrevious: false }, () => {
        if (!toeflSimState.isPlayingAudio) return;
        if (cardWoman) cardWoman.classList.remove('active');

        toeflSimState.audioTimeout = setTimeout(() => {
          if (!toeflSimState.isPlayingAudio) return;

          // Step 3: Narrator
          if (status) status.textContent = 'Narator membacakan pertanyaan...';

          speakWithVoice(narratorText, 'en-US', { pitch: 1.0, rate: 0.90, gender: 'neutral', cancelPrevious: false }, () => {
            toeflSimState.isPlayingAudio = false;
            if (btn) {
              btn.disabled = true;
              btn.classList.remove('playing');
              btn.classList.add('played-locked');
              btn.innerHTML = '<span id="exam-play-icon">🔒</span> <span id="exam-play-text">Audio Selesai (Hanya 1x Putar Sesuai Aturan Ujian)</span>';
            }
            if (wave) wave.style.display = 'none';
            const notice = document.querySelector('.exam-audio-notice');
            if (notice) {
              notice.classList.add('locked');
              notice.innerHTML = '<span class="ean-icon">🔒</span><div class="ean-text"><strong>Audio Selesai:</strong> Sesuai simulasi resmi TOEFL, rekaman percakapan hanya dapat didengarkan satu kali.</div>';
            }
          });
        }, 500);
      });
    }, 450);
  });
}

function selectExamOption(optIndex) {
  toeflSimState.answers[toeflSimState.currentIndex] = optIndex;

  // Highlight button
  const btns = document.querySelectorAll('.exam-opt-btn');
  btns.forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIndex);
  });

  renderExamNavGrid();
}

function navExamQuestion(direction) {
  // Cancel speech immediately if navigating away
  if (toeflSimState.isPlayingAudio) {
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (toeflSimState.audioTimeout) clearTimeout(toeflSimState.audioTimeout);
    toeflSimState.isPlayingAudio = false;
  }

  const current = toeflSimState.currentIndex;
  const next = current + direction;
  const questions = APP_DATA.toeflSimulation.questions;

  // Checkpoint 1: Moving past Section 1 Listening
  if (current === toeflSimState.sec1End && next === (toeflSimState.sec1End + 1) && !toeflSimState.section1Shown) {
    showSectionCheckpoint(1);
    return;
  }

  // Checkpoint 2: Moving past Section 2 Structure
  if (current === toeflSimState.sec2End && next === (toeflSimState.sec2End + 1) && !toeflSimState.section2Shown) {
    showSectionCheckpoint(2);
    return;
  }

  if (next >= 0 && next < questions.length) {
    renderExamQuestion(next);
  }
}

function jumpToExamQuestion(index) {
  if (toeflSimState.isPlayingAudio) {
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (toeflSimState.audioTimeout) clearTimeout(toeflSimState.audioTimeout);
    toeflSimState.isPlayingAudio = false;
  }
  renderExamQuestion(index);
}

function showSectionCheckpoint(sectionNum) {
  const modal = document.getElementById('section-checkpoint-modal');
  if (!modal) return;

  const iconEl = document.getElementById('checkpoint-icon');
  const badgeEl = document.getElementById('checkpoint-badge');
  const titleEl = document.getElementById('checkpoint-title');
  const subEl = document.getElementById('checkpoint-sub');
  const rawEl = document.getElementById('checkpoint-raw');
  const scaleEl = document.getElementById('checkpoint-scale');
  const equivEl = document.getElementById('checkpoint-equiv');
  const statusEl = document.getElementById('checkpoint-campus-status');
  const nextBtn = document.getElementById('checkpoint-next-btn');

  let correctCount = 0;
  let sectionName = '';
  let scaleScore = 31;
  let nextSectionName = '';
  let totalInSection = 10;
  let startIndex = 0;
  let endIndex = 0;

  if (sectionNum === 1) {
    startIndex = 0;
    endIndex = toeflSimState.sec1End;
    totalInSection = endIndex - startIndex + 1;
    for (let i = startIndex; i <= endIndex; i++) {
      if (toeflSimState.answers[i] === APP_DATA.toeflSimulation.questions[i].answer) {
        correctCount++;
      }
    }
    scaleScore = Math.min(68, Math.max(31, Math.round(31 + (correctCount / totalInSection) * 37)));
    sectionName = 'Section 1: Listening Comprehension';
    nextSectionName = 'Section 2: Structure & Written Expression';
    if (iconEl) iconEl.textContent = '🎧';
    if (badgeEl) badgeEl.textContent = 'SECTION 1 SELESAI';
    toeflSimState.section1Shown = true;
  } else if (sectionNum === 2) {
    startIndex = toeflSimState.sec1End + 1;
    endIndex = toeflSimState.sec2End;
    totalInSection = endIndex - startIndex + 1;
    for (let i = startIndex; i <= endIndex; i++) {
      if (toeflSimState.answers[i] === APP_DATA.toeflSimulation.questions[i].answer) {
        correctCount++;
      }
    }
    scaleScore = Math.min(68, Math.max(31, Math.round(31 + (correctCount / totalInSection) * 37)));
    sectionName = 'Section 2: Structure & Written Expression';
    nextSectionName = 'Section 3: Reading Comprehension';
    if (iconEl) iconEl.textContent = '📐';
    if (badgeEl) badgeEl.textContent = 'SECTION 2 SELESAI';
    toeflSimState.section2Shown = true;
  }

  const equivScore = scaleScore * 10;
  const isSafe = scaleScore >= 43; // 430 campus target threshold

  if (titleEl) titleEl.textContent = `Hasil ${sectionName}`;
  if (subEl) subEl.textContent = `Estimasi nilai bagian ini dari ${totalInSection} soal yang sudah kamu kerjakan:`;
  if (rawEl) rawEl.textContent = `${correctCount} / ${totalInSection}`;
  if (scaleEl) scaleEl.innerHTML = `${scaleScore} <span style="font-size: 0.85rem; color: #94a3b8;">/ 68</span>`;
  if (equivEl) equivEl.textContent = equivScore;

  if (statusEl) {
    if (isSafe) {
      statusEl.className = 'checkpoint-campus-status safe';
      statusEl.innerHTML = `✅ <strong>Aman!</strong> Estimasi bagian ini (${equivScore}) sudah di atas batas minimal kampus (430). Pertahankan!`;
    } else {
      statusEl.className = 'checkpoint-campus-status danger';
      statusEl.innerHTML = `⚠️ <strong>Peringatan!</strong> Estimasi bagian ini (${equivScore}) di bawah standar kampus (430). Harus kamu kejar di section berikutnya!`;
    }
  }

  if (nextBtn) {
    nextBtn.textContent = `Mulai ${nextSectionName} →`;
    nextBtn.onclick = () => {
      closeSectionCheckpoint();
      renderExamQuestion(sectionNum === 1 ? (toeflSimState.sec1End + 1) : (toeflSimState.sec2End + 1));
    };
  }

  modal.classList.add('active');
  modal.style.display = 'flex';
}

function closeSectionCheckpoint() {
  const modal = document.getElementById('section-checkpoint-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}
window.continueToNextExamSection = closeSectionCheckpoint;

function confirmQuitToeflSim() {
  showConfirmPopup({
    icon: '📝',
    type: 'danger',
    title: 'Keluar dari Simulasi Tes?',
    message: 'Lembar jawaban dan progres pengerjaan tes ini tidak akan tersimpan. Apakah kamu yakin ingin keluar?',
    confirmText: 'Ya, Keluar Tes',
    cancelText: 'Lanjutkan Tes',
    onConfirm: () => {
      if (toeflSimState.timerInterval) clearInterval(toeflSimState.timerInterval);
      if (speechSynth) speechSynth.cancel();
      if (currentAudio) { currentAudio.pause(); currentAudio = null; }
      toeflSimState.active = false;
      showView('toefl-map');
    }
  });
}

function confirmSubmitToeflSim() {
  const questions = APP_DATA.toeflSimulation.questions;
  const answeredCount = Object.keys(toeflSimState.answers).length;
  const unanswered = questions.length - answeredCount;

  const modal = document.getElementById('exam-confirm-modal');
  const msgEl = document.getElementById('exam-confirm-message');
  if (modal && msgEl) {
    if (unanswered > 0) {
      msgEl.innerHTML = `Kamu telah menjawab <strong>${answeredCount}</strong> dari ${questions.length} soal.<br><span style="color: #f59e0b; display:inline-block; margin-top: 6px;">⚠️ Masih ada ${unanswered} nomor soal yang belum kamu jawab.</span><br><br>Yakin ingin mengumpulkan ujian sekarang dan melihat hasil sertifikat prediksimu?`;
    } else {
      msgEl.innerHTML = `Semua <strong>${questions.length} soal</strong> telah kamu jawab lengkap! Siap untuk melihat hasil skor dan sertifikat prediksimu?`;
    }
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  } else {
    submitToeflSim();
  }
}

function closeExamModal() {
  const modal = document.getElementById('exam-confirm-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

function submitToeflSim() {
  if (toeflSimState.timerInterval) clearInterval(toeflSimState.timerInterval);
  if (speechSynth) speechSynth.cancel();
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  toeflSimState.active = false;

  const questions = APP_DATA.toeflSimulation.questions;
  let correctL = 0, totalL = 0;
  let correctS = 0, totalS = 0;
  let correctR = 0, totalR = 0;

  questions.forEach((q, idx) => {
    const userChoice = toeflSimState.answers[idx];
    const isCorrect = userChoice === q.answer;

    if (q.section === 'listening') {
      totalL++;
      if (isCorrect) correctL++;
    } else if (q.section === 'structure') {
      totalS++;
      if (isCorrect) correctS++;
    } else if (q.section === 'reading') {
      totalR++;
      if (isCorrect) correctR++;
    }
  });

  // Calculate official ETS scale (31 - 68) per section
  // Using official TOEFL ITP score curve mapping
  const scaleL = Math.min(68, Math.max(31, Math.round(31 + (correctL / totalL) * 37)));
  const scaleS = Math.min(68, Math.max(31, Math.round(31 + (correctS / totalS) * 37)));
  const scaleR = Math.min(68, Math.max(31, Math.round(31 + (correctR / totalR) * 37)));

  // Official TOEFL Total Score Formula: ((L + S + R) * 10) / 3
  const totalScore = Math.round(((scaleL + scaleS + scaleR) * 10) / 3);

  // CEFR & Level Info
  let cefrCode = 'CEFR A2';
  let cefrTitle = 'Elementary (Perlu Banyak Latihan Dasar)';
  let analysisHtml = '';

  if (totalScore >= 627) {
    cefrCode = 'CEFR C1';
    cefrTitle = 'Advanced Proficiency (Tingkat Mahir)';
    analysisHtml = `
      <strong>🏆 Luar Biasa! Skor kamu setara C1 (Advance):</strong><br>
      Kemampuan bahasa Inggrismu sudah sangat matang dan siap bersaing di universitas top dunia maupun beasiswa luar negeri seperti Fulbright / Chevening. Pertahankan performamu!
    `;
  } else if (totalScore >= 543) {
    cefrCode = 'CEFR B2+';
    cefrTitle = 'Upper Intermediate (Standar Beasiswa Luar Negeri)';
    analysisHtml = `
      <strong>✨ Sangat Baik! Memenuhi Syarat Beasiswa Internasional:</strong><br>
      Skor ini melampaui batas minimal beasiswa luar negeri (seperti LPDP Luar Negeri / IISMA dengan batas rata-rata 500-550). Terus asah bagian yang paling sedikit benar agar tembus 600+.
    `;
  } else if (totalScore >= 460) {
    cefrCode = 'CEFR B1';
    cefrTitle = 'Intermediate (Standar Kelulusan S1 & BUMN)';
    analysisHtml = `
      <strong>👍 Bagus! Memenuhi Standar Kelulusan S1 / CPNS / BUMN:</strong><br>
      Skor kamu sudah aman untuk syarat sidang skripsi dan rekrutmen kerja nasional (umumnya 450-500). Untuk mencapai 550+, fokus perbaiki materi Structure (Inversi, Bentuk Paralel) dan Listening Part A.
    `;
  } else {
    cefrCode = 'CEFR A2';
    cefrTitle = 'Elementary (Perlu Pendalaman Dasar)';
    analysisHtml = `
      <strong>💪 Perlu Memperbanyak Latihan & Kosakata:</strong><br>
      Jangan berkecil hati! Tes TOEFL memiliki trik jebakan kata (*distractors*). Buka daftar pembahasan di bawah untuk mempelajari idiom yang sering keluar dan pola kalimat inversi.
    `;
  }

  // Award XP
  const xpBonus = 100;
  state.totalXp += xpBonus;
  state.todayXp += xpBonus;
  state.toeflXp += xpBonus;
  saveState();
  updateNavStats();

  // Populate Report Card
  const candidateName = (state.currentUser && state.currentUser.username) || state.userName || 'Peserta TOEFL';
  document.getElementById('report-candidate-name').textContent = candidateName;
  document.getElementById('report-test-date').textContent = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('report-total-score').textContent = totalScore;
  document.getElementById('report-cefr-code').textContent = cefrCode;
  document.getElementById('report-cefr-title').textContent = cefrTitle;

  document.getElementById('report-listening-raw').textContent = `Benar: ${correctL} / ${totalL}`;
  document.getElementById('report-listening-bar').style.width = `${Math.round((correctL / totalL) * 100)}%`;
  document.getElementById('report-listening-scale').innerHTML = `${scaleL} <span style="font-size:0.75rem;">/ 68</span>`;

  document.getElementById('report-structure-raw').textContent = `Benar: ${correctS} / ${totalS}`;
  document.getElementById('report-structure-bar').style.width = `${Math.round((correctS / totalS) * 100)}%`;
  document.getElementById('report-structure-scale').innerHTML = `${scaleS} <span style="font-size:0.75rem;">/ 68</span>`;

  document.getElementById('report-reading-raw').textContent = `Benar: ${correctR} / ${totalR}`;
  document.getElementById('report-reading-bar').style.width = `${Math.round((correctR / totalR) * 100)}%`;
  document.getElementById('report-reading-scale').innerHTML = `${scaleR} <span style="font-size:0.75rem;">/ 68</span>`;

  document.getElementById('report-analysis-box').innerHTML = analysisHtml;

  // Campus 430 Requirement Check & Badge Update
  const CAMPUS_MIN_SCORE = 430;
  const passedCampus = totalScore >= CAMPUS_MIN_SCORE;
  const campusStatusEl = document.getElementById('report-campus-status');
  if (campusStatusEl) {
    if (passedCampus) {
      campusStatusEl.innerHTML = `
        <div class="campus-status-pill pass">
          🎓 Syarat Minimal Kampus (430): <strong>LULUS RESMI (${totalScore} / 430) ✅</strong>
        </div>`;
    } else {
      campusStatusEl.innerHTML = `
        <div class="campus-status-pill fail">
          ⚠️ Syarat Minimal Kampus (430): <strong>BELUM LULUS (${totalScore} / 430) ❌ — WAJIB MENGULANG</strong>
        </div>`;
    }
  }

  // Render Full Review List (All 30 Questions)
  const letters = ['A', 'B', 'C', 'D'];
  const reviewList = document.getElementById('report-review-list');
  if (reviewList) {
    reviewList.innerHTML = questions.map((q, idx) => {
      const userChoice = toeflSimState.answers[idx];
      const isCorrect = userChoice === q.answer;
      return `
        <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
          <div class="review-item-header">
            <span class="review-q-num">Soal #${idx + 1} • ${q.section.toUpperCase()}</span>
            <span class="review-status-badge ${isCorrect ? 'correct' : 'wrong'}">
              ${isCorrect ? '✅ Jawabanmu Benar' : '❌ Jawabanmu Kurang Tepat'}
            </span>
          </div>

          <div class="review-question-title">
            ${q.section === 'listening' ? `🎧 ${q.question}` : (q.sentence || q.prompt || q.question)}
          </div>

          <div class="review-choices-compare">
            <div class="choice-row">
              <span class="cr-label">Jawaban Kamu:</span>
              <span class="cr-val ${isCorrect ? 'correct' : 'wrong'}">
                ${userChoice !== undefined ? `(${letters[userChoice]}) ${q.options[userChoice]}` : '<em>(Tidak dijawab)</em>'}
              </span>
            </div>
            ${!isCorrect ? `
              <div class="choice-row">
                <span class="cr-label">Kunci Jawaban Resmi:</span>
                <span class="cr-val correct">(${letters[q.answer]}) ${q.options[q.answer]}</span>
              </div>
            ` : ''}
          </div>

          <div class="review-explanation-box">
            ${q.explanation}
          </div>
        </div>
      `;
    }).join('');
  }

  showView('toefl-report');
  if (passedCampus) {
    playSuccessEffect();
    launchConfetti();
  }

  // Pop up the prominent Campus 430 Alert Modal
  showCampusScoreAlertModal({
    totalScore,
    scaleL,
    scaleS,
    scaleR,
    passedCampus
  });
}

function showCampusScoreAlertModal({ totalScore, scaleL, scaleS, scaleR, passedCampus }) {
  const modal = document.getElementById('campus-score-alert-modal');
  if (!modal) return;

  const cardInner = document.getElementById('campus-alert-card-inner');
  const iconEl = document.getElementById('campus-alert-icon');
  const titleEl = document.getElementById('campus-alert-title');
  const subEl = document.getElementById('campus-alert-sub');
  const pillsEl = document.getElementById('campus-breakdown-pills');
  const instEl = document.getElementById('campus-alert-instruction');
  const actionsEl = document.getElementById('campus-alert-actions');

  const equivL = scaleL * 10;
  const equivS = scaleS * 10;
  const equivR = scaleR * 10;

  if (cardInner) cardInner.className = `modal-card campus-alert-modal-card ${passedCampus ? 'pass' : 'fail'}`;
  if (iconEl) iconEl.textContent = passedCampus ? '🎉' : '🚨';

  if (titleEl) {
    titleEl.textContent = passedCampus
      ? `SELAMAT! SKOR KAMU: ${totalScore} (RESMI LULUS SYARAT KAMPUS! ✅)`
      : `SKOR KAMU: ${totalScore} (BELUM LULUS SYARAT KAMPUS! ❌)`;
  }

  if (subEl) {
    subEl.innerHTML = passedCampus
      ? `Skor kamu <strong>${totalScore}</strong> telah melampaui batas minimal kelulusan kampus (<strong>430</strong>). Dokumen skormu siap diajukan untuk syarat sidang skripsi & yudisium!`
      : `Kampus mewajibkan skor minimal <strong>430</strong> untuk syarat sidang skripsi & kelulusan. Skor kamu saat ini <strong>${totalScore}</strong> (kurang <strong>${430 - totalScore} poin</strong> lagi!).`;
  }

  if (pillsEl) {
    pillsEl.innerHTML = `
      <div class="sec-stat-pill ${equivL >= 430 ? 'safe' : 'danger'}">
        <span>🎧 Listening</span>
        <strong>${equivL}</strong>
        <small>${equivL >= 430 ? '✅ Lolos' : '⚠️ Di Bawah 430'}</small>
      </div>
      <div class="sec-stat-pill ${equivS >= 430 ? 'safe' : 'danger'}">
        <span>📐 Structure</span>
        <strong>${equivS}</strong>
        <small>${equivS >= 430 ? '✅ Lolos' : '⚠️ Di Bawah 430'}</small>
      </div>
      <div class="sec-stat-pill ${equivR >= 430 ? 'safe' : 'danger'}">
        <span>📖 Reading</span>
        <strong>${equivR}</strong>
        <small>${equivR >= 430 ? '✅ Lolos' : '⚠️ Di Bawah 430'}</small>
      </div>
    `;
  }

  if (instEl) {
    const lowestSec = equivL <= equivS && equivL <= equivR ? 'Listening Comprehension' : (equivS <= equivR ? 'Structure & Written Expression' : 'Reading Comprehension');
    instEl.innerHTML = passedCampus
      ? `Kerja kerasmu terbayar! Kamu sudah menguasai materi kunci TOEFL ITP. Tekan tombol di bawah untuk melihat rincian pembahasan setiap nomor soal.`
      : `Bagian yang paling menarik nilaimu ke bawah adalah <strong>${lowestSec}</strong>. Sesuai ketentuan, kamu <strong>WAJIB MENGULANG TES</strong> sampai mencapai minimal 430! Soal ujian akan diganti otomatis dengan <strong>PAKET SOAL BARU & DIACAK</strong>.`;
  }

  if (actionsEl) {
    if (passedCampus) {
      actionsEl.innerHTML = `
        <button class="btn-primary" onclick="closeCampusAlertAndShowReport()" style="padding: 13px; font-size: 0.96rem; font-weight: 800;">
          Buka Sertifikat & Pembahasan Lengkap 🏆
        </button>
      `;
    } else {
      actionsEl.innerHTML = `
        <button class="btn-repeat-test" onclick="restartToeflSimWithNewQuestions()">
          🔄 Ulangi Tes Sekarang (Paket Soal Baru & Diacak)
        </button>
        <button class="btn-secondary" onclick="closeCampusAlertAndShowReport()" style="padding: 11px; font-weight: 700;">
          Lihat Pembahasan Soal yang Salah Dulu 📖
        </button>
      `;
    }
  }

  modal.classList.add('active');
  modal.style.display = 'flex';
}

function closeCampusAlertAndShowReport() {
  const modal = document.getElementById('campus-score-alert-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}
window.closeCampusAlertAndShowReport = closeCampusAlertAndShowReport;
window.closeCampusAlert = closeCampusAlertAndShowReport;

window.startToeflSimulation = startToeflSimulation;
window.generateRandomizedToeflExam = generateRandomizedToeflExam;
window.jumpToExamQuestion = jumpToExamQuestion;
window.selectExamOption = selectExamOption;
window.navExamQuestion = navExamQuestion;
window.playExamConvoAudio = playExamConvoAudio;
window.confirmQuitToeflSim = confirmQuitToeflSim;
window.confirmSubmitToeflSim = confirmSubmitToeflSim;
window.closeExamModal = closeExamModal;
window.submitToeflSim = submitToeflSim;
window.showSectionCheckpoint = showSectionCheckpoint;
window.closeSectionCheckpoint = closeSectionCheckpoint;

// ─── TOEFL HACK 450 BOOTCAMP & ROADMAP ────────────────────────
const ROADMAP_14_DAYS = [
  { day: 1, title: '🎧 Listening: Trik Orang Kedua', focus: 'Buka telinga lebar-lebar untuk kalimat orang kedua.', time: '15 Menit' },
  { day: 2, title: '🎧 Listening: Eliminasi Bunyi Mirip', focus: 'Coret kata di opsi yang bunyinya sama persis dengan audio.', time: '15 Menit' },
  { day: 3, title: '🎧 Listening: Mini Practice Part A', focus: 'Latihan 10 dialog pendek di BasaLoka (Target: 7/10).', time: '15 Menit' },
  { day: 4, title: '⚡ Structure: Rumus Sakti S + V', focus: 'Setiap klausa WAJIB punya 1 Subjek dan 1 Verb.', time: '15 Menit' },
  { day: 5, title: '✂️ Structure: Jurus Coret Preposisi', focus: 'Coret kata setelah in, on, at, of, with, under, from.', time: '15 Menit' },
  { day: 6, title: '⚡ Structure: Waspada Verb Palsu', focus: 'V-ing sendirian bukan Verb! Pilih Verb asli.', time: '15 Menit' },
  { day: 7, title: '⚡ Structure: Mini Test Soal 1-15', focus: 'Latihan 15 soal Structure tanpa baca artinya (Target: 10/15).', time: '15 Menit' },
  { day: 8, title: '🕵️ Written: Dosa Subjek vs Verb', focus: 'Cek apakah Subjek jamak ketemu Verb jamak.', time: '15 Menit' },
  { day: 9, title: '🕵️ Written: Dosa Bentuk Kata', focus: 'Bedakan quick decision (Adjective+Noun) vs decided quickly.', time: '15 Menit' },
  { day: 10, title: '🕵️ Written: Dosa Pasangan Kembar', focus: 'Hafalkan: Both... and, Either... or, Neither... nor.', time: '15 Menit' },
  { day: 11, title: '🥷 Reading: Ninja Scan Main Idea', focus: 'Baca cuma kalimat pertama paragraf 1 dan 2.', time: '15 Menit' },
  { day: 12, title: '🥷 Reading: Ninja Scan Tahun & Nama', focus: 'Scan mata cepat cari angka tahun & huruf kapital.', time: '15 Menit' },
  { day: 13, title: '🏆 Simulasi Tes TOEFL 25 Menit', focus: 'Kerjakan Simulasi Resmi 30 Soal di BasaLoka!', time: '25 Menit' },
  { day: 14, title: '🎯 Evaluasi & Siap Ujian Asli', focus: 'Pelajari pembahasan soal yang salah di Score Report.', time: '20 Menit' }
];

function getRoadmapProgress() {
  try {
    const saved = localStorage.getItem('toefl_hack_checklist');
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function openToeflHackModal(tab = 'listening') {
  const modal = document.getElementById('toefl-hack-modal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
  switchHackTab(tab);
  renderHackRoadmap();
}

function closeToeflHackModal() {
  const modal = document.getElementById('toefl-hack-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function switchHackTab(tabName) {
  const tabs = document.querySelectorAll('.hack-tab-btn');
  tabs.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabName));
  });

  const panes = document.querySelectorAll('.hack-tab-pane');
  panes.forEach(pane => {
    pane.classList.remove('active');
    pane.style.display = 'none';
  });

  const targetPane = document.getElementById(`hack-tab-${tabName}`);
  if (targetPane) {
    targetPane.classList.add('active');
    targetPane.style.display = 'block';
  }

  if (tabName === 'roadmap') {
    renderHackRoadmap();
  }
}

function renderHackRoadmap() {
  const container = document.getElementById('roadmap-days-container');
  if (!container) return;

  const progress = getRoadmapProgress();
  let completedCount = 0;

  container.innerHTML = ROADMAP_14_DAYS.map((d, idx) => {
    const isDone = !!progress[d.day];
    if (isDone) completedCount++;

    return `
      <div class="roadmap-day-card ${isDone ? 'done' : ''}" onclick="toggleRoadmapDay(${d.day})">
        <div class="day-checkbox-wrap">
          <input type="checkbox" id="chk-day-${d.day}" ${isDone ? 'checked' : ''} onclick="event.stopPropagation(); toggleRoadmapDay(${d.day})">
        </div>
        <div class="day-info-wrap">
          <div class="day-top-meta">
            <span class="day-badge">HARI ${d.day}</span>
            <span class="day-time">⏱️ ${d.time}</span>
          </div>
          <h4 class="day-title">${d.title}</h4>
          <p class="day-focus">${d.focus}</p>
        </div>
        <div class="day-status-icon">${isDone ? '✅' : '⚪'}</div>
      </div>
    `;
  }).join('');

  const percent = Math.round((completedCount / ROADMAP_14_DAYS.length) * 100);
  const fill = document.getElementById('roadmap-progress-fill');
  const count = document.getElementById('roadmap-progress-count');
  if (fill) fill.style.width = `${percent}%`;
  if (count) count.textContent = `${completedCount} / 14 Hari Selesai (${percent}%)`;
}

function toggleRoadmapDay(day) {
  const progress = getRoadmapProgress();
  progress[day] = !progress[day];
  try {
    localStorage.setItem('toefl_hack_checklist', JSON.stringify(progress));
  } catch (e) {}
  renderHackRoadmap();
  playClickSound();

  const isDone = progress[day];
  if (isDone) {
    showToast(`🎉 Misi Hari ke-${day} Selesai! Pertahankan konsistensi 15 menit/hari!`, 'success');
  }
}

window.openToeflHackModal = openToeflHackModal;
window.closeToeflHackModal = closeToeflHackModal;
window.switchHackTab = switchHackTab;
window.toggleRoadmapDay = toggleRoadmapDay;

// ─── INIT ─────────────────────────────────────────────────────
function initApp() {
  loadState();
  if (state.userName) {
    showView('dashboard');
  } else {
    showView('onboarding');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Keyboard accessibility: Enter & Escape handlers
document.addEventListener('keydown', (e) => {
  const popupModal = document.getElementById('interactive-popup-modal');
  if (popupModal && popupModal.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeInteractivePopup(false);
    } else if (e.key === 'Enter') {
      closeInteractivePopup(true);
    }
    return;
  }

  if (e.key === 'Enter') {
    const continueBtn = document.getElementById('quiz-continue-btn');
    if (continueBtn && continueBtn.offsetParent !== null) {
      continueBtn.click();
    }
  }
});

// ─── PWA (PROGRESSIVE WEB APP) & INSTALL PROMPT SYSTEM ────────
let deferredPwaPrompt = null;

// Listen for native browser install prompt (Android Chrome & Desktop Chrome/Edge)
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;

  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) installBtn.style.display = 'inline-flex';

  const banner = document.getElementById('pwa-install-banner');
  if (banner && !localStorage.getItem('pwa_banner_dismissed')) {
    banner.style.display = 'flex';
  }
});

window.addEventListener('appinstalled', () => {
  deferredPwaPrompt = null;
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) installBtn.style.display = 'none';

  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';

  if (typeof showToast === 'function') {
    showToast('🎉 BasaLoka berhasil terpasang di HP kamu! Selamat belajar!', 'success');
  }
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('BasaLoka SW registered. Scope:', reg.scope))
      .catch(err => console.log('BasaLoka SW registration error:', err));
  });
}

function triggerPwaInstall() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        if (typeof showToast === 'function') {
          showToast('🚀 Menginstall BasaLoka ke Layar HP...', 'success');
        }
      }
      deferredPwaPrompt = null;
    });
  } else {
    // Show guide modal for iOS or manual browsers
    openPwaGuideModal(isIOS ? 'ios' : 'android');
  }
}

function executeNativeInstall() {
  if (deferredPwaPrompt) {
    closePwaGuideModal();
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then(() => {
      deferredPwaPrompt = null;
    });
  } else {
    if (typeof showToast === 'function') {
      showToast('Buka menu titik tiga (⋮) di Chrome lalu pilih "Install aplikasi"', 'info');
    }
  }
}

function openPwaGuideModal(device = 'android') {
  const modal = document.getElementById('pwa-guide-modal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
  switchPwaTab(device);
}

function closePwaGuideModal() {
  const modal = document.getElementById('pwa-guide-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function switchPwaTab(device) {
  const tabAndroid = document.getElementById('tab-pwa-android');
  const tabIos = document.getElementById('tab-pwa-ios');
  const contentAndroid = document.getElementById('pwa-content-android');
  const contentIos = document.getElementById('pwa-content-ios');

  if (tabAndroid) tabAndroid.classList.toggle('active', device === 'android');
  if (tabIos) tabIos.classList.toggle('active', device === 'ios');
  if (contentAndroid) contentAndroid.style.display = device === 'android' ? 'block' : 'none';
  if (contentIos) contentIos.style.display = device === 'ios' ? 'block' : 'none';
}

function dismissPwaBanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
  localStorage.setItem('pwa_banner_dismissed', '1');
}

window.triggerPwaInstall = triggerPwaInstall;
window.executeNativeInstall = executeNativeInstall;
window.openPwaGuideModal = openPwaGuideModal;
window.closePwaGuideModal = closePwaGuideModal;
window.switchPwaTab = switchPwaTab;
window.dismissPwaBanner = dismissPwaBanner;

