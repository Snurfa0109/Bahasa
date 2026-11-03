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
  toeflActiveTrack: 'full',
  toeflTargetScore: 500,
  toeflTargetMode: null,
  toeflTargetDate: null,
  toeflTargetPace: null,
  toeflRecUnitId: null
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

function speak(text, lang = 'ko-KR', rate = 0.88, gender = 'neutral') {
  speakWithVoice(text, lang, { rate, gender });
}

// ─── AUDIO ENGINE (High-Fidelity Chrome/Windows/Mobile Multi-Speaker TTS) ───
let speechSynth = window.speechSynthesis;
let availableVoices = [];
window.__speechUtterances = window.__speechUtterances || new Set();
let speechHeartbeatTimer = null;

const FEMALE_VOICE_NAMES = /female|woman|zira|jenny|samantha|victoria|karen|moira|tessa|ava|susan|serena|aria|cathy|alice|clara|fiona|katherine|linda|stephanie|ayumi|sfg|Google US English/i;
const MALE_VOICE_NAMES = /(^|\b|_|-)(male|man|david|mark|guy|george|daniel|fred|oliver|arthur|rishi|tom|alex|aaron|christopher|eric|roger|ryan|steffan|brian|john|james|andrew|richard|charles|matthew|anthony|steven|paul|ken|lee|nathan|joshua|jacob|adam|evan|iob|iom|rjs|fis)(\b|_|-|$)/i;

function isVoiceFemale(v) {
  if (!v) return false;
  const str = `${v.name || ''} ${v.voiceURI || ''}`;
  return FEMALE_VOICE_NAMES.test(str) && !/(^|\b)male(\b|$)/i.test(str.replace(/female/gi, ''));
}

function isVoiceMale(v) {
  if (!v) return false;
  const str = `${v.name || ''} ${v.voiceURI || ''}`;
  if (isVoiceFemale(v)) return false;
  return MALE_VOICE_NAMES.test(str);
}

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

  const langPrefix = (lang || 'en').split('-')[0].toLowerCase();
  const langVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith(langPrefix));
  const candidatePool = langVoices.length ? langVoices : voices;

  if (gender === 'male') {
    // 1. Confirmed authentic male voice
    const maleVoice = candidatePool.find(v => isVoiceMale(v));
    if (maleVoice) return maleVoice;

    // 2. Any voice that is not confirmed female
    const nonFemale = candidatePool.find(v => !isVoiceFemale(v));
    if (nonFemale) return nonFemale;

    // Fallback: will receive deep formant pitch modulation
    return candidatePool[0] || null;
  }

  if (gender === 'female') {
    // 1. Confirmed authentic female voice
    const femaleVoice = candidatePool.find(v => isVoiceFemale(v));
    if (femaleVoice) return femaleVoice;

    // 2. Any voice that is not confirmed male
    const nonMale = candidatePool.find(v => !isVoiceMale(v));
    if (nonMale) return nonMale;

    return candidatePool[0] || null;
  }

  // Neutral / Narrator:
  const neutralVoice = candidatePool.find(v => isVoiceMale(v) || isVoiceFemale(v));
  return neutralVoice || candidatePool[0] || null;
}

function speakWithWebSpeech(text, lang = 'en-US', rate = 0.88, gender = 'neutral') {
  speakWithVoice(text, lang, { rate, gender });
}

function speakWithVoice(text, lang = 'en-US', opts = {}, onEnd = null) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Sanitize text for smooth TTS flow (remove Indonesian translations in parentheses, annoying punctuation, quotes)
  let cleanText = (text || '')
    .replace(/\([^)]*\)/g, '')   // Strip Indonesian translations like (Apa yang disiratkan...)
    .replace(/\[[^\]]*\]/g, '')
    .replace(/["“”'‘’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Natural trailing cadence cushion: ensures final syllable (e.g. "imply", "mean") resonates fully without abrupt cutoff
  if (cleanText && !/[.!?]$/.test(cleanText)) {
    cleanText += '.';
  }

  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  const gender = opts.gender || 'neutral';
  const matchedVoice = getBestVoice(gender, lang);
  const isRealMale = matchedVoice && isVoiceMale(matchedVoice);
  const isRealFemale = matchedVoice && isVoiceFemale(matchedVoice);

  // Unmistakable pitch modulation ensures 100% distinct male vs female sound across ALL devices:
  // - Male: 0.88 with authentic male voice, 0.60 with fallback voice (drops pitch deep into baritone register!)
  // - Female: 1.05 with authentic female voice, 1.25 with fallback voice (bright feminine tone)
  // - Neutral: 0.98 standard narrator
  let defaultPitch = 1.0;
  let defaultRate = 0.92;

  if (gender === 'male') {
    defaultPitch = isRealMale ? 0.88 : 0.60;
    defaultRate = 0.90;
  } else if (gender === 'female') {
    defaultPitch = isRealFemale ? 1.05 : 1.25;
    defaultRate = 0.95;
  } else {
    defaultPitch = 0.98;
    defaultRate = 0.92;
  }

  const pitch = opts.pitch !== undefined ? opts.pitch : defaultPitch;
  const rate = opts.rate !== undefined ? opts.rate : defaultRate;
  const shouldCancel = opts.cancelPrevious !== false;

  if (speechSynth) {
    loadVoices();
    if (speechSynth.paused) speechSynth.resume();
    if (shouldCancel && speechSynth.speaking) {
      speechSynth.cancel();
    }

    // Pre-roll silent micro-breath (", ") ensures audio context wakes up fully BEFORE 1st syllable.
    // Trailing dot-space (" . ") allows final question inflection to decay smoothly without hardware cut.
    const paddedSpokenText = ', ' + cleanText + ' . ';
    const utter = new SpeechSynthesisUtterance(paddedSpokenText);
    utter.lang = lang;
    utter.rate = rate;
    utter.pitch = pitch;

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

    utter.onerror = (err) => {
      if (err && (err.error === 'canceled' || err.error === 'interrupted')) {
        return;
      }
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
      // Soft audio decay grace period (350ms): Keeps utterance alive in memory so hardware audio buffer
      // finishes streaming the final rising inflection syllable completely to silence.
      setTimeout(() => {
        finish();
      }, 350);
    };

    setTimeout(() => {
      if (speechSynth.paused) speechSynth.resume();
      speechSynth.speak(utter);
    }, 25);
    return;
  }

  // Fallback to Google Translate TTS
  const ttsLang = TTS_LANG_MAP[lang] || lang.split('-')[0];
  const encoded = encodeURIComponent(cleanText);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=${ttsLang}&client=tw-ob&ttsspeed=1`;
  const audio = new Audio(url);
  currentAudio = audio;

  // Modulate pitch via playbackRate when pitch preservation is disabled
  if (gender === 'male') {
    audio.preservesPitch = false;
    audio.mozPreservesPitch = false;
    audio.webkitPreservesPitch = false;
    audio.playbackRate = 0.80;
  } else if (gender === 'female') {
    audio.preservesPitch = false;
    audio.mozPreservesPitch = false;
    audio.webkitPreservesPitch = false;
    audio.playbackRate = 1.10;
  } else {
    audio.preservesPitch = true;
    audio.playbackRate = 0.92;
  }

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
  if (typeof window !== 'undefined') window.state = state;
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

async function syncProgressFromCloud() {
  if (!state.currentUser || !state.currentUser.id) return;
  const uid = state.currentUser.id;
  if (typeof uid === 'string' && (uid.startsWith('local_') || uid.startsWith('guest_'))) return;

  try {
    const res = await fetch(`/api/progress/${uid}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.progress) {
        const cloud = data.progress;
        // Merge completed lessons & units
        const localLessons = new Set(state.completedLessons || []);
        (cloud.completedLessons || []).forEach(l => localLessons.add(l));

        const localUnits = new Set(state.completedUnits || []);
        (cloud.completedUnits || []).forEach(u => localUnits.add(u));

        const localBadges = new Set(state.unlockedAchievements || []);
        (cloud.unlockedAchievements || []).forEach(b => localBadges.add(b));

        state.completedLessons = Array.from(localLessons);
        state.completedUnits = Array.from(localUnits);
        state.unlockedAchievements = Array.from(localBadges);
        state.totalXp = Math.max(state.totalXp || 0, cloud.totalXp || 0);
        state.todayXp = Math.max(state.todayXp || 0, cloud.todayXp || 0);
        state.streak = Math.max(state.streak || 0, cloud.streak || 0);
        if (cloud.toeflActiveTrack) state.toeflActiveTrack = cloud.toeflActiveTrack;

        localStorage.setItem('basaloka_state', JSON.stringify(state));
        localStorage.setItem('linguaplay_state', JSON.stringify(state));
        updateNavStats();
        if (currentView === 'dashboard') {
          renderDashboard();
        }
      }
    }
  } catch (err) {
    // Offline or network error - continue silently with local cache
  }
}

function loadState() {
  const saved = localStorage.getItem('basaloka_state') || localStorage.getItem('linguaplay_state');
  if (saved) {
    state = { ...state, ...JSON.parse(saved) };
    checkStreak();
  }
  if (typeof window !== 'undefined') window.state = state;
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
  if (viewName !== 'lesson' && typeof stopQuestionTimer === 'function') {
    stopQuestionTimer();
  }
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

  if (viewName !== 'onboarding' && viewName !== 'result' && viewName !== 'lesson') {
    try { localStorage.setItem('basaloka_last_view', viewName); } catch (_) {}
  }

  // Maintain browser history for mobile hardware back button / swipe back gestures
  if (pushHistory) {
    if (navHistory[navHistory.length - 1] !== viewName) {
      navHistory.push(viewName);
    }
    if (window.history && window.history.pushState) {
      try {
        const hashTarget = (viewName === 'lesson' && currentLang && currentUnit && currentLesson)
          ? `lesson?lang=${currentLang}&unit=${currentUnit.id}&lesson=${currentLesson.id}`
          : viewName;
        window.history.pushState({ view: viewName }, '', '#' + hashTarget);
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

// ─── TOEFL LIVE SCORE PREDICTOR & PEMBANGKIT SEMANGAT ENGINE ─
const TOEFL_PREDICTOR_LESSONS = {
  listening: [
    'toefl-fast3-l1', 'toefl-fast3-l2', 'toefl-fast3-l3', 'toefl-hack-l1',
    'toefl-u0-l1', 'toefl-u0-l2', 'toefl-list-extra1', 'toefl-list-extra3',
    'toefl-d2-l1', 'toefl-u0-l3', 'toefl-d2-l3', 'toefl-list-extra2',
    'toefl-list-extra4', 'toefl-d2-l4', 'toefl-d7-l1'
  ],
  structure: [
    'toefl-fast3-l4', 'toefl-fast3-l5', 'toefl-fast3-l6', 'toefl-hack-l2',
    'toefl-d3-l2', 'toefl-u3-l3', 'toefl-d3-extra', 'toefl-hack-l3',
    'toefl-u3-l2', 'toefl-d4-l3', 'toefl-d4-extra', 'toefl-d5-l1',
    'toefl-d5-l2', 'toefl-d5-l3', 'toefl-d5-extra', 'toefl-u4-l1',
    'toefl-u4-l2', 'toefl-u4-l3', 'toefl-d7-l2'
  ],
  reading: [
    'toefl-fast3-l7', 'toefl-fast3-l8', 'toefl-fast3-l9', 'toefl-hack-l4',
    'toefl-u2-l1', 'toefl-d6-l2', 'toefl-d6-l3', 'toefl-u2-l2',
    'toefl-u2-l3', 'toefl-u2-l4', 'toefl-u2-l5', 'toefl-u2-l6',
    'toefl-u2-l7', 'toefl-u2-l8', 'toefl-u1-l1', 'toefl-u1-l2',
    'toefl-u1-l3', 'toefl-u1-l4', 'toefl-d7-l3'
  ]
};

function calculatePredictedToeflScore(targetState) {
  const curState = targetState || state;
  const completed = curState.completedLessons || [];

  const lIds = TOEFL_PREDICTOR_LESSONS.listening;
  const sIds = TOEFL_PREDICTOR_LESSONS.structure;
  const rIds = TOEFL_PREDICTOR_LESSONS.reading;

  const doneL = lIds.filter(id => completed.includes(id)).length;
  const doneS = sIds.filter(id => completed.includes(id)).length;
  const doneR = rIds.filter(id => completed.includes(id)).length;
  const totalDone = doneL + doneS + doneR;
  const totalLessons = lIds.length + sIds.length + rIds.length;

  // Base ETS scaled range: Listening (31-68), Structure (31-68), Reading (31-67)
  let scaleL = 31 + Math.round((doneL / lIds.length) * 37);
  let scaleS = 31 + Math.round((doneS / sIds.length) * 37);
  let scaleR = 31 + Math.round((doneR / rIds.length) * 36);

  // If user has taken official ETS simulation exam, anchor with simulation benchmark
  if (curState.lastExamScore) {
    const exam = curState.lastExamScore;
    if (exam.scaleL) scaleL = Math.max(scaleL, exam.scaleL);
    if (exam.scaleS) scaleS = Math.max(scaleS, exam.scaleS);
    if (exam.scaleR) scaleR = Math.max(scaleR, exam.scaleR);
  }

  // Bounds check
  scaleL = Math.min(68, Math.max(31, scaleL));
  scaleS = Math.min(68, Math.max(31, scaleS));
  scaleR = Math.min(67, Math.max(31, scaleR));

  // Official ETS Total Score Formula: ((scaleL + scaleS + scaleR) * 10) / 3
  const totalScore = Math.min(677, Math.max(310, Math.round(((scaleL + scaleS + scaleR) * 10) / 3)));

  // Milestones: Dasar (310+), Menengah (450+), BUMN & S2 (500+), Beasiswa LPDP (550+), Master (600+)
  let milestoneId = 'foundation';
  let milestoneBadge = '🌱 Level Dasar (310+)';
  let targetScore = 450;
  let targetLabel = 'Skor 450 (Menengah)';
  let motivation = 'Setiap modul yang kamu selesaikan menambah prediksimu! Mulai dari Listening Fast Track untuk dongkrak skor pertamamu! 🚀';

  if (totalScore >= 600) {
    milestoneId = 'master';
    milestoneBadge = '🌟 Master Class (600+)';
    targetScore = 677;
    targetLabel = 'Skor Maksimal ETS (677)';
    motivation = 'Luar biasa! Skor prediksimu setara mahasiswa berprestasi global. Pertahankan konsistensi belajarmu! 👑';
  } else if (totalScore >= 550) {
    milestoneId = 'lpdp';
    milestoneBadge = '🏆 Standar Beasiswa (550+)';
    targetScore = 600;
    targetLabel = 'Master Class (600)';
    motivation = 'Hebat! Skor 550+ membuka pintu beasiswa bergengsi dalam & luar negeri! Sedikit lagi menuju 600+! 🚀';
  } else if (totalScore >= 500) {
    milestoneId = 'bumn';
    milestoneBadge = '💼 Standar Profesional & BUMN (500+)';
    targetScore = 550;
    targetLabel = 'Standar Beasiswa (550)';
    motivation = 'Mantap! Skor 500+ sudah memenuhi standar rekrutmen BUMN & jenjang karir profesional!';
  } else if (totalScore >= 450) {
    milestoneId = 'intermediate';
    milestoneBadge = '📈 Level Menengah (450+)';
    targetScore = 500;
    targetLabel = 'Standar Profesional & BUMN (500)';
    motivation = 'Kemampuanmu makin meningkat! Lanjutkan latihan untuk menembus target skor 500! 💪';
  } else {
    milestoneId = 'foundation';
    milestoneBadge = '🌱 Level Dasar (310+)';
    targetScore = 450;
    targetLabel = 'Skor 450 (Menengah)';
    motivation = 'Setiap modul yang kamu selesaikan menambah prediksimu! Terus selesaikan modul harianmu! 🚀';
  }

  // Dynamic tip based on weakest section if score is below 550
  if (totalScore < 550 && totalDone > 0) {
    if (scaleL <= scaleS && scaleL <= scaleR) {
      motivation = 'Tips Luca: Listening Part A paling cepat nambah poin! Fokus dengarkan ucapan orang kedua dan hindari jebakan kata mirip! 🎧';
    } else if (scaleS <= scaleL && scaleS <= scaleR) {
      motivation = 'Tips Luca: Structure punya bobot penentu! Cari Subjek & Verb di tiap kalimat, lalu periksa kesesuaian jamak-tunggal! 📐';
    } else {
      motivation = 'Tips Luca: Jangan baca seluruh teks bacaan! Gunakan trik Skimming kalimat pertama tiap paragraf untuk temukan ide pokok! 📖';
    }
  }

  const pointsToTarget = Math.max(0, targetScore - totalScore);
  const progressPct = Math.min(100, Math.max(0, Math.round(((totalScore - 310) / (677 - 310)) * 100)));
  const pctL = Math.min(100, Math.max(0, Math.round(((scaleL - 31) / (68 - 31)) * 100)));
  const pctS = Math.min(100, Math.max(0, Math.round(((scaleS - 31) / (68 - 31)) * 100)));
  const pctR = Math.min(100, Math.max(0, Math.round(((scaleR - 31) / (67 - 31)) * 100)));

  return {
    totalScore,
    scaleL,
    scaleS,
    scaleR,
    doneL,
    doneS,
    doneR,
    totalDone,
    totalLessons,
    pctL,
    pctS,
    pctR,
    milestoneId,
    milestoneBadge,
    targetScore,
    targetLabel,
    pointsToTarget,
    progressPct,
    motivation
  };
}
window.calculatePredictedToeflScore = calculatePredictedToeflScore;

function updateToeflPredictorUI() {
  const pred = calculatePredictedToeflScore(state);

  // 1. Dashboard TOEFL Card Pill
  const cardScoreEl = document.getElementById('toefl-card-pred-score');
  const cardBadgeEl = document.getElementById('toefl-card-pred-badge');
  if (cardScoreEl) cardScoreEl.textContent = pred.totalScore;
  if (cardBadgeEl) cardBadgeEl.textContent = pred.milestoneBadge;

  // 2. Dashboard Pembangkit Semangat Card
  const tpcScoreNum = document.getElementById('tpc-score-number');
  const tpcMilestone = document.getElementById('tpc-milestone-badge');
  const tpcTargetTag = document.getElementById('tpc-target-tag');
  const tpcPointsLeft = document.getElementById('tpc-points-left');
  const tpcMeterFill = document.getElementById('tpc-meter-fill');
  const tpcMeterPercent = document.getElementById('tpc-meter-percent');
  const tpcScoreL = document.getElementById('tpc-score-l');
  const tpcFillL = document.getElementById('tpc-fill-l');
  const tpcScoreS = document.getElementById('tpc-score-s');
  const tpcFillS = document.getElementById('tpc-fill-s');
  const tpcScoreR = document.getElementById('tpc-score-r');
  const tpcFillR = document.getElementById('tpc-fill-r');
  const tpcBoosterMsg = document.getElementById('tpc-booster-msg');

  if (tpcScoreNum) tpcScoreNum.textContent = pred.totalScore;
  if (tpcMilestone) tpcMilestone.textContent = pred.milestoneBadge;
  if (tpcTargetTag) tpcTargetTag.textContent = `Target: ${pred.targetLabel}`;
  if (tpcPointsLeft) {
    tpcPointsLeft.textContent = pred.pointsToTarget > 0
      ? `Kurang ${pred.pointsToTarget} poin`
      : 'Target Terlampaui! 🎉';
  }
  if (tpcMeterFill) tpcMeterFill.style.width = `${pred.progressPct}%`;
  if (tpcMeterPercent) tpcMeterPercent.textContent = `${pred.progressPct}% Menuju Skor Maksimal`;

  if (tpcScoreL) tpcScoreL.textContent = pred.scaleL;
  if (tpcFillL) tpcFillL.style.width = `${pred.pctL}%`;
  if (tpcScoreS) tpcScoreS.textContent = pred.scaleS;
  if (tpcFillS) tpcFillS.style.width = `${pred.pctS}%`;
  if (tpcScoreR) tpcScoreR.textContent = pred.scaleR;
  if (tpcFillR) tpcFillR.style.width = `${pred.pctR}%`;

  if (tpcBoosterMsg) tpcBoosterMsg.textContent = pred.motivation;

  // 3. TOEFL Map Sticky Strip
  const mapScore = document.getElementById('map-toefl-pred-score');
  const mapBadge = document.getElementById('map-toefl-milestone-badge');
  const mapMeter = document.getElementById('map-toefl-meter-fill');
  const mapQuote = document.getElementById('map-toefl-luca-text');

  if (mapScore) mapScore.textContent = pred.totalScore;
  if (mapBadge) mapBadge.textContent = pred.milestoneBadge;
  if (mapMeter) mapMeter.style.width = `${pred.progressPct}%`;
  if (mapQuote) mapQuote.textContent = `Luca: "${pred.motivation}"`;

  const trigBtn = document.getElementById('btn-toefl-diagnostic-trigger');
  if (trigBtn) {
    if (state.toeflDiagnosticTaken && state.toeflDiagnosticScore) {
      trigBtn.innerHTML = `🎯 Tes Diagnostik Ulang (Skor: ${state.toeflDiagnosticScore})`;
    } else {
      trigBtn.innerHTML = `🎯 Tes Diagnostik 10 Menit (Cek Skor Awal)`;
    }
  }

  // Update Study Plan Card & Countdown
  if (typeof renderToeflStudyPlanCard === 'function') {
    renderToeflStudyPlanCard();
  }
}
window.updateToeflPredictorUI = updateToeflPredictorUI;

// ══════════════════════════════════════════════════════════
// 🎯 TOEFL EXAM TARGET & ADAPTIVE STUDY PLAN CONTROLLER
// ══════════════════════════════════════════════════════════

let selectedToeflScoreTarget = 500;
let selectedToeflTargetMode = 'date';
let selectedToeflTargetPace = 'standard';

function openToeflExamTargetModal() {
  selectedToeflScoreTarget = state.toeflTargetScore || 500;
  selectedToeflTargetMode = state.toeflTargetMode || (state.toeflTargetDate ? 'date' : (state.toeflTargetPace ? 'pace' : 'date'));
  selectedToeflTargetPace = state.toeflTargetPace || 'standard';

  selectTargetScoreChip(selectedToeflScoreTarget);
  selectTargetMode(selectedToeflTargetMode);
  selectTargetPace(selectedToeflTargetPace);

  const dateInput = document.getElementById('tetm-date-input');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (state.toeflTargetDate) {
      dateInput.value = state.toeflTargetDate;
    } else {
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 30);
      dateInput.value = defaultDate.toISOString().split('T')[0];
    }
  }

  const modal = document.getElementById('toefl-exam-target-modal');
  if (modal) modal.style.display = 'flex';
}

function closeToeflExamTargetModal() {
  const modal = document.getElementById('toefl-exam-target-modal');
  if (modal) modal.style.display = 'none';
}

function selectTargetScoreChip(score) {
  selectedToeflScoreTarget = Number(score) || 500;
  [450, 500, 550, 600].forEach(s => {
    const chip = document.getElementById(`tchip-${s}`);
    if (chip) chip.classList.toggle('active', s === selectedToeflScoreTarget);
  });
}

function selectTargetMode(mode) {
  selectedToeflTargetMode = mode;
  const radioDate = document.getElementById('tetm-mode-date');
  const radioPace = document.getElementById('tetm-mode-pace');
  const dateWrap = document.getElementById('tetm-date-input-wrap');
  const paceChips = document.getElementById('tetm-pace-chips');
  const lucaDesc = document.getElementById('tetm-luca-desc');

  if (mode === 'date') {
    if (radioDate) radioDate.checked = true;
    if (dateWrap) dateWrap.style.display = 'block';
    if (paceChips) paceChips.style.display = 'none';
    if (lucaDesc) {
      lucaDesc.textContent = 'Memasang tanggal ujian resmi mengaktifkan hitung mundur H-X dan membagi beban materi per hari secara presisi!';
    }
  } else {
    if (radioPace) radioPace.checked = true;
    if (dateWrap) dateWrap.style.display = 'none';
    if (paceChips) paceChips.style.display = 'flex';
    if (lucaDesc) {
      lucaDesc.textContent = 'Pilihan fleksibel bagi kamu yang belum daftar tes resmi. Pilih ritme agar tetap konsisten tanpa tekanan tanggal!';
    }
  }
}

function selectTargetPace(pace) {
  selectedToeflTargetPace = pace;
  ['sprint', 'standard', 'flexible'].forEach(p => {
    const btn = document.getElementById(`tpace-${p}`);
    if (btn) btn.classList.toggle('active', p === pace);
  });
}

function saveToeflExamTarget() {
  state.toeflTargetScore = selectedToeflScoreTarget;
  state.toeflTargetMode = selectedToeflTargetMode;

  if (selectedToeflTargetMode === 'date') {
    const dateInput = document.getElementById('tetm-date-input');
    const pickedDate = dateInput ? dateInput.value : '';
    if (!pickedDate) {
      showToast('Silakan pilih tanggal ujianmu terlebih dahulu!', 'warning');
      return;
    }
    state.toeflTargetDate = pickedDate;
  } else {
    state.toeflTargetPace = selectedToeflTargetPace;
  }

  saveState();
  closeToeflExamTargetModal();
  updateToeflPredictorUI();
  renderToeflStudyPlanCard();
  showToast('Target ujian TOEFL berhasil disimpan! Rencana belajar diperbarui 🎯', 'success');
}

function renderToeflStudyPlanCard() {
  const cardEl = document.getElementById('toefl-study-plan-card');
  if (!cardEl) return;

  const toeflData = APP_DATA.toefl;
  if (!toeflData || !toeflData.units) {
    cardEl.style.display = 'none';
    return;
  }

  let totalLessons = 0;
  let doneLessons = 0;
  toeflData.units.forEach(u => {
    (u.lessons || []).forEach(l => {
      totalLessons++;
      if (state.completedLessons && state.completedLessons.includes(l.id)) doneLessons++;
    });
  });

  const remainingLessons = Math.max(0, totalLessons - doneLessons);
  const isAllDone = totalLessons > 0 && doneLessons === totalLessons;

  // Post-curriculum Mastery Banner (Alumni loop)
  const masteryBanner = document.getElementById('toefl-mastery-banner');
  if (masteryBanner) {
    masteryBanner.style.display = isAllDone ? 'flex' : 'none';
  }

  const targetScore = state.toeflTargetScore || 500;
  const targetMode = state.toeflTargetMode || (state.toeflTargetDate ? 'date' : (state.toeflTargetPace ? 'pace' : null));

  // Empty state: prompt user to set goal
  if (!targetMode) {
    cardEl.style.display = 'block';
    cardEl.innerHTML = `
      <div class="tsp-empty-state">
        <div class="tsp-es-icon">🎯</div>
        <div class="tsp-es-body">
          <div class="tsp-badge">PERSONAL STUDY PLAN</div>
          <h3 class="tsp-title">Punya Target Tanggal Ujian TOEFL?</h3>
          <p class="tsp-sub">Pasang tanggal tes atau pilih ritme belajarmu agar Luca bisa menghitung target harian dan countdown H-Day secara otomatis!</p>
          <button type="button" class="btn-primary tsp-btn-setup" onclick="openToeflExamTargetModal()">
            ⚡ Pasang Target & Skema Belajar Sekarang
          </button>
        </div>
      </div>
    `;
    return;
  }

  cardEl.style.display = 'block';

  let countdownBadge = '';
  let countdownMain = '';
  let countdownSub = '';
  let paceAdvice = '';

  if (targetMode === 'date' && state.toeflTargetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const examDate = new Date(state.toeflTargetDate);
    examDate.setHours(0, 0, 0, 0);
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dateFormatted = examDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    if (diffDays > 1) {
      countdownBadge = `H-${diffDays} HARI MENUJU UJIAN`;
      countdownMain = `H-${diffDays}`;
      countdownSub = `Tes: ${dateFormatted}`;
      const dailyLessons = remainingLessons > 0 ? (remainingLessons / diffDays).toFixed(1) : 0;
      paceAdvice = isAllDone
        ? 'Semua materi telah tuntas! Lakukan pemanasan harian untuk mengasah reflek.'
        : `Target ritme: <strong>~${Math.max(1, Math.ceil(dailyLessons))} modul per hari</strong> (${remainingLessons} modul tersisa).`;
    } else if (diffDays === 1) {
      countdownBadge = `BESOK HARI H! 🔥`;
      countdownMain = `H-1`;
      countdownSub = `Ujian besok: ${dateFormatted}`;
      paceAdvice = 'Hari terakhir! Istirahat cukup, hindari begadang, dan review trik inti di Buku Catatan.';
    } else if (diffDays === 0) {
      countdownBadge = `HARI INI UJIAN! 🌟`;
      countdownMain = `HARI H`;
      countdownSub = `Good luck pejuang TOEFL!`;
      paceAdvice = 'Tarik napas dalam-dalam, fokus pada kata kunci speaker kedua, dan basmi jebakan!';
    } else {
      countdownBadge = `TARGET TANGGAL TELAH LEWAT`;
      countdownMain = `SELESAI`;
      countdownSub = `Ujian: ${dateFormatted}`;
      paceAdvice = 'Ujianmu sudah lewat. Pasang tanggal baru atau ganti ke ritme belajar santai.';
    }
  } else {
    // Mode PACE
    const pace = state.toeflTargetPace || 'standard';
    if (pace === 'sprint') {
      countdownBadge = `🚀 SPRINT KILAT (14 HARI)`;
      countdownMain = `2 Modul/Hari`;
      countdownSub = `Intensif & Cepat`;
      paceAdvice = `Target: Selesaikan 2 modul per hari. Dalam 14 hari seluruh materi tuntas dipelajari!`;
    } else if (pace === 'standard') {
      countdownBadge = `📅 STANDAR MANTAP (30 HARI)`;
      countdownMain = `1 Modul/Hari`;
      countdownSub = `Ritme Paling Ideal`;
      paceAdvice = `Target: 1 modul per hari. Santai, mantap, dan daya ingat bertahan lama.`;
    } else {
      countdownBadge = `🍃 RITME BEBAS & FLEKSIBEL`;
      countdownMain = `Santai`;
      countdownSub = `Sesuai Waktu Luang`;
      paceAdvice = `Belajar mengalir tanpa beban deadline, tapi usahakan minimal 3 modul per minggu ya!`;
    }
  }

  const completionPct = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0;

  cardEl.innerHTML = `
    <div class="tsp-content">
      <div class="tsp-header">
        <div class="tsp-header-left">
          <span class="tsp-badge-tag">${countdownBadge}</span>
          <span class="tsp-target-score">Target: <strong>${targetScore}+</strong></span>
        </div>
        <button type="button" class="tsp-btn-edit" onclick="openToeflExamTargetModal()" title="Ubah Target atau Tanggal">
          ✏️ Edit Target
        </button>
      </div>

      <div class="tsp-grid">
        <div class="tsp-countdown-block">
          <div class="tsp-cd-main">${countdownMain}</div>
          <div class="tsp-cd-sub">${countdownSub}</div>
        </div>

        <div class="tsp-progress-block">
          <div class="tsp-pb-header">
            <span>Kurikulum TOEFL: <strong>${doneLessons}/${totalLessons} Selesai</strong></span>
            <span><strong>${completionPct}%</strong></span>
          </div>
          <div class="tsp-pb-bar">
            <div class="tsp-pb-fill" style="width: ${completionPct}%;"></div>
          </div>
          <div class="tsp-pb-advice">
            <span class="tsp-luca-emoji">Luca 🦉:</span>
            <span>${paceAdvice}</span>
          </div>
        </div>
      </div>

      <div class="tsp-actions">
        ${isAllDone ? `
          <button type="button" class="btn-primary tsp-btn-action" onclick="startDailyToeflWarmup()">
            ⚡ Pemanasan Asah 5 Menit Sekarang
          </button>
        ` : `
          <button type="button" class="btn-primary tsp-btn-action" onclick="continueNextToeflLesson()">
            🚀 Lanjutkan Belajar Hari Ini
          </button>
        `}
      </div>
    </div>
  `;
}

function startDailyToeflWarmup() {
  const toeflData = APP_DATA.toefl;
  if (!toeflData || !toeflData.units) return;

  const allQuizzes = [];
  toeflData.units.forEach(u => {
    (u.lessons || []).forEach(l => {
      if (l.quiz && Array.isArray(l.quiz)) {
        l.quiz.forEach(q => {
          allQuizzes.push({
            ...q,
            unitTitle: u.title
          });
        });
      }
    });
  });

  if (allQuizzes.length === 0) {
    showToast('Belum ada bank soal pemanasan yang tersedia.', 'error');
    return;
  }

  // Shuffle and pick 5 rapid questions
  const shuffled = allQuizzes.sort(() => 0.5 - Math.random());
  const selectedQuiz = shuffled.slice(0, 5);

  const warmupUnit = {
    id: 'toefl_warmup',
    title: '⚡ Pemanasan Asah Reflek TOEFL (Alumni)',
    color: '#f59e0b',
    section: 'mixed',
    lessons: []
  };

  const warmupLesson = {
    id: 'toefl_warmup_session_' + Date.now(),
    title: '5-Minute Rapid TOEFL Warmup',
    type: 'flashcard-quiz',
    xpReward: 35,
    cards: [],
    quiz: selectedQuiz
  };

  currentLesson = warmupLesson;
  currentUnit = warmupUnit;
  currentLang = 'toefl';
  lessonStep = 0;
  quizStep = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  lessonStartTime = Date.now();
  lessonXpEarned = 35;

  showView('lesson');
  renderLessonStep();
  showToast('Pemanasan kilat 5 soal dimulai! Pertahankan reflekmu!', 'info');
}

window.openToeflExamTargetModal = openToeflExamTargetModal;
window.closeToeflExamTargetModal = closeToeflExamTargetModal;
window.selectTargetScoreChip = selectTargetScoreChip;
window.selectTargetMode = selectTargetMode;
window.selectTargetPace = selectTargetPace;
window.saveToeflExamTarget = saveToeflExamTarget;
window.renderToeflStudyPlanCard = renderToeflStudyPlanCard;
window.startDailyToeflWarmup = startDailyToeflWarmup;

function continueNextToeflLesson() {
  const data = APP_DATA.toefl;
  if (!data || !data.units) return;

  const activeTrack = state.toeflActiveTrack || 'full';
  const trackUnits = data.units.filter(u => !u.track || u.track === activeTrack || u.track === 'both');

  for (const unit of trackUnits) {
    for (const lesson of unit.lessons) {
      if (!state.completedLessons.includes(lesson.id)) {
        startLesson('toefl', unit.id, lesson.id);
        return;
      }
    }
  }

  // If all completed, open exam simulation modal
  showToast('🏆 Semua modul TOEFL telah selesai dipelajari! Yuk uji prediksimu di Simulasi Resmi!', 'success');
  openExamSetupModal();
}
window.continueNextToeflLesson = continueNextToeflLesson;

function openToeflScoreInfoModal() {
  const modal = document.getElementById('toefl-score-info-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}
window.openToeflScoreInfoModal = openToeflScoreInfoModal;

function closeToeflScoreInfoModal() {
  const modal = document.getElementById('toefl-score-info-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}
window.closeToeflScoreInfoModal = closeToeflScoreInfoModal;

// ─── UNIT NOTES & TIPS MODAL (BUKU CATATAN PER MODUL) ─────────
function openUnitNotesModal(lang, unitId) {
  const modal = document.getElementById('unit-notes-modal');
  if (!modal) return;

  const notes = (typeof UNIT_NOTES_DATA !== 'undefined' && UNIT_NOTES_DATA[unitId]) ? UNIT_NOTES_DATA[unitId] : null;

  // Fallback metadata from APP_DATA
  const langKey = lang || currentLang || 'toefl';
  const langData = (typeof APP_DATA !== 'undefined' && APP_DATA[langKey]) ? APP_DATA[langKey] : null;
  const unitObj = langData && langData.units ? langData.units.find(u => u.id === unitId) : null;
  const unitTitle = (notes && notes.unitTitle) || (unitObj ? unitObj.title : 'Catatan Modul Pembelajaran');
  const cleanTitle = unitTitle.replace(/^[\p{Extended_Pictographic}\u200d\uFE0F\uD800-\uDFFF\s]+/u, '').trim();

  // 🔒 Reward Guard: Notes are only unlocked after all lessons in the module are 100% completed
  const isUnitDone = unitObj && unitObj.lessons ? unitObj.lessons.every(l => state.completedLessons.includes(l.id)) : false;
  if (!isUnitDone && !state.completedUnits.includes(unitId)) {
    showLockedNotesMsg(cleanTitle);
    return;
  }
  const icon = (notes && notes.icon) || (unitObj ? unitObj.icon : '📖');
  const badge = (notes && notes.badge) || (langKey === 'toefl' ? 'TOEFL ITP Cheat Sheet' : 'Rangkuman Materi & Catatan Penting');
  const color = (notes && notes.color) || (unitObj ? unitObj.color : '#8b5cf6');

  const titleEl = document.getElementById('un-modal-title');
  if (titleEl) titleEl.textContent = cleanTitle;

  const iconEl = document.getElementById('un-header-icon');
  if (iconEl) iconEl.textContent = icon;

  const badgeEl = document.getElementById('un-header-badge');
  if (badgeEl) {
    badgeEl.textContent = badge;
    badgeEl.style.background = `${color}20`;
    badgeEl.style.color = color;
    badgeEl.style.borderColor = `${color}55`;
  }

  const bodyEl = document.getElementById('un-modal-body');
  if (bodyEl) {
    if (!notes) {
      bodyEl.innerHTML = `
        <div class="un-summary-card" style="border-left-color: ${color}">
          <div class="un-card-title">📌 Intisari Materi Modul</div>
          <p>${unitObj ? unitObj.description : 'Pelajari dan kuasai materi dalam modul ini dengan konsisten!'}</p>
        </div>
        <div class="un-luca-box">
          <span class="un-luca-avatar">🌍</span>
          <div class="un-luca-text">
            <strong>Pesan dari Luca:</strong>
            <p>Terus asah latihanmu setiap hari! Konsistensi 10-15 menit sehari akan melesatkan skor dan kemampuan bahasamu!</p>
          </div>
        </div>
      `;
    } else {
      let html = '';

      // 1. Intisari Materi
      if (notes.summary) {
        html += `
          <div class="un-summary-card" style="border-left-color: ${color}">
            <div class="un-card-title">💡 Intisari Pokok Materi</div>
            <p>${notes.summary}</p>
          </div>
        `;
      }

      // 2. Kaidah Emas & Rumus
      if (notes.goldenRules && notes.goldenRules.length > 0) {
        html += `
          <div class="un-section-header">
            <span class="un-sec-icon">⭐</span>
            <h4>Kaidah Emas & Rumus Penting</h4>
          </div>
          <div class="un-rules-list">
            ${notes.goldenRules.map((rule, idx) => `
              <div class="un-rule-card">
                <div class="un-rule-num" style="background: ${color}">${idx + 1}</div>
                <div class="un-rule-content">
                  <h5 class="un-rule-title">${rule.rule}</h5>
                  <p class="un-rule-exp">${rule.explanation}</p>
                  ${rule.formula ? `
                    <div class="un-rule-formula">
                      <span class="un-formula-tag">⚡ Rumus / Pola Kunci:</span>
                      <code>${rule.formula}</code>
                    </div>
                  ` : ''}
                  ${rule.example ? `
                    <div class="un-rule-example">
                      <span class="un-example-tag">🔍 Contoh Kasus:</span>
                      <div class="un-example-body">${rule.example.replace(/\n/g, '<br>')}</div>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 3. Trik Soal & Waspada Jebakan
      if (notes.questionTips && notes.questionTips.length > 0) {
        html += `
          <div class="un-section-header">
            <span class="un-sec-icon">🎯</span>
            <h4>Trik Eksekusi Soal & Jebakan Ujian</h4>
          </div>
          <div class="un-tips-grid">
            ${notes.questionTips.map(tip => `
              <div class="un-tip-card">
                <div class="un-tip-pattern">
                  <span class="un-tip-dot"></span>
                  <strong>${tip.pattern}</strong>
                </div>
                <div class="un-tip-hack">
                  <span class="un-hack-label">🚀 Trik Cepat:</span>
                  ${tip.hack}
                </div>
                ${tip.trapAlert ? `
                  <div class="un-tip-trap">
                    ${tip.trapAlert}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      // 4. Cheat Sheet Cepat
      if (notes.cheatSheet && notes.cheatSheet.length > 0) {
        html += `
          <div class="un-section-header">
            <span class="un-sec-icon">⚡</span>
            <h4>Ringkasan Cepat (Cheat Sheet)</h4>
          </div>
          <div class="un-cheatsheet-grid">
            ${notes.cheatSheet.map(cs => `
              <div class="un-cs-item">
                <div class="un-cs-label">${cs.label}</div>
                <div class="un-cs-value">${cs.value}</div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 5. Pesan Luca
      if (notes.lucaMessage) {
        html += `
          <div class="un-luca-box">
            <span class="un-luca-avatar">🌍</span>
            <div class="un-luca-text">
              <strong>Trik & Catatan dari Maskot Luca:</strong>
              <p>${notes.lucaMessage}</p>
            </div>
          </div>
        `;
      }

      bodyEl.innerHTML = html;
    }
  }

  modal.classList.add('active');
  modal.style.setProperty('display', 'flex', 'important');
  const cardBody = modal.querySelector('.modal-body');
  if (cardBody) cardBody.scrollTop = 0;
}

function closeUnitNotesModal() {
  const modal = document.getElementById('unit-notes-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.setProperty('display', 'none', 'important');
  }
}

function showLockedNotesMsg(unitTitle) {
  showAlertPopup({
    icon: '🔒',
    title: 'Buku Catatan Masih Terkunci!',
    message: `Buku Rangkuman & Trik Soal untuk modul <strong>"${unitTitle || 'ini'}"</strong> adalah <strong>Hadiah Eksklusif Kelulusan</strong>! 🏆<br><br>Selesaikan seluruh pelajaran di modul ini dengan skor 100% sempurna untuk membuka dan membaca catatan ini selamanya!`,
    type: 'warning',
    buttonText: 'Siap Tuntaskan Latihan! 💪'
  });
}
window.openUnitNotesModal = openUnitNotesModal;
window.closeUnitNotesModal = closeUnitNotesModal;
window.showLockedNotesMsg = showLockedNotesMsg;

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

  // Update Live TOEFL Score Predictor Card & Badges
  updateToeflPredictorUI();

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

// Achievements List & Unlock Rules
const ACHIEVEMENTS = [
  {
    id: 'first_lesson',
    icon: '🌱',
    title: 'Langkah Pertama',
    desc: 'Selesaikan 1 pelajaran pertamamu di BasaLoka',
    condition: (s) => (s.totalLessons || 0) >= 1
  },
  {
    id: 'streak_3',
    icon: '🔥',
    title: 'Api Semangat',
    desc: 'Capai streak belajar selama 3 hari berturut-turut',
    condition: (s) => (s.streak || 0) >= 3
  },
  {
    id: 'streak_7',
    icon: '⚡',
    title: 'Pahlawan Konsisten',
    desc: 'Capai streak belajar selama 7 hari berturut-turut',
    condition: (s) => (s.streak || 0) >= 7
  },
  {
    id: 'xp_100',
    icon: '✨',
    title: 'Pengumpul XP',
    desc: 'Kumpulkan total 100 XP dari latihanmu',
    condition: (s) => (s.totalXp || 0) >= 100
  },
  {
    id: 'xp_500',
    icon: '🌟',
    title: 'Bintang Prestasi',
    desc: 'Kumpulkan total 500 XP belajar',
    condition: (s) => (s.totalXp || 0) >= 500
  },
  {
    id: 'perfect_master',
    icon: '🎯',
    title: 'Skor Sempurna',
    desc: 'Selesaikan kuis dengan nilai 100% tanpa salah',
    condition: (s) => (s.perfectScores || 0) >= 1
  },
  {
    id: 'polyglot',
    icon: '🌍',
    title: 'Penjelajah Bahasa',
    desc: 'Pelajari Bahasa Korea, Inggris, & TOEFL',
    condition: (s) => (s.koreanLessons || 0) >= 1 && (s.englishLessons || 0) >= 1
  },
  {
    id: 'unit_champion',
    icon: '🏆',
    title: 'Juara Modul',
    desc: 'Tuntaskan seluruh pelajaran dalam 1 modul',
    condition: (s) => (s.completedUnits || []).length >= 1
  }
];

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
    updateToeflPredictorUI();
    renderToeflStudyPlanCard();
  }

  pathEl.innerHTML = unitsToRender.map((unit, ui) => {
    const unitLessons = unit.lessons;
    const doneLessons = unitLessons.filter(l => state.completedLessons.includes(l.id));
    const unitDone = doneLessons.length;
    const unitTotal = unitLessons.length;
    const unitPct = Math.round((unitDone / unitTotal) * 100);
    const unitComplete = state.completedUnits.includes(unit.id);
    
    // MODULAR FREEDOM: All modules (Structure, Reading, Listening) are accessible anytime!
    const isLocked = false;

    const cleanTitle = (unit.title || '').replace(/^[\p{Extended_Pictographic}\u200d\uFE0F\uD800-\uDFFF\s]+/u, '').trim();

    return `
      <div class="unit-section" style="--unit-color: ${unit.color}">
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
            <div class="unit-progress-footer">
              <span class="unit-progress-text">${unitDone}/${unitTotal} pelajaran</span>
              <button type="button" class="btn-unit-notes-pill ${unitComplete ? 'completed' : 'locked'}" 
                onclick="event.stopPropagation(); ${unitComplete ? `openUnitNotesModal('${lang}', '${unit.id}')` : `showLockedNotesMsg('${cleanTitle.replace(/'/g, "\\'")}')`}" 
                title="${unitComplete ? 'Buka Buku Catatan & Rangkuman Modul' : 'Selesaikan seluruh pelajaran di modul ini untuk membuka catatan lengkap'}">
                📖 Buku Catatan
              </button>
            </div>
          </div>
        </div>
        <div class="lessons-grid">
          ${unitLessons.map((lesson, li) => {
            const done = state.completedLessons.includes(lesson.id);
            const prevLesson = li > 0 ? unitLessons[li - 1] : null;
            // STRICT LESSON MASTERY: Lessons within each module must be mastered sequentially (100% accuracy required)
            const locked = prevLesson && !state.completedLessons.includes(prevLesson.id);
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
    title: 'Pelajaran Masih Terkunci!',
    message: 'Mode Belajar Ketat (Strict Mastery): Kamu wajib menyelesaikan pelajaran sebelumnya di modul ini dengan <strong>skor 100% sempurna</strong> terlebih dahulu untuk membuka level berikutnya!',
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

// ══════════════════════════════════════════════════════════
// 🎯 CHECKPOINT-LOOP CONTROLLER (INTERLEAVED ACTIVE LEARNING)
// ══════════════════════════════════════════════════════════

let checkpointIndex = 0;
let checkpointPhase = 'card'; // 'card' | 'quiz' | 'transition'
let checkpointQuizIndex = 0;
let checkpointQuizzes = [];
let checkpointCorrectCount = 0;
let checkpointAttempts = 1;
let checkpointHistory = []; // Records { id, title, correct, total, passed }

function initCheckpointLesson(lesson) {
  checkpointIndex = 0;
  checkpointPhase = 'card';
  checkpointQuizIndex = 0;
  checkpointCorrectCount = 0;
  checkpointAttempts = 1;
  checkpointHistory = [];
  prepareActiveCheckpointQuizzes();
}

function prepareActiveCheckpointQuizzes(excludeIds = []) {
  if (!currentLesson || !currentLesson.checkpoints) return;
  const cp = currentLesson.checkpoints[checkpointIndex];
  if (!cp || !cp.pool) return;

  const count = cp.sampleCount || 3;
  let available = cp.pool.filter(q => !excludeIds.includes(q.q));
  if (available.length < count) available = cp.pool;

  // Shuffle and sample fresh questions
  const picked = [...available].sort(() => 0.5 - Math.random()).slice(0, count);

  // Deep clone and randomize options positions (anti-key memorization)
  checkpointQuizzes = picked.map(q => {
    const cloned = JSON.parse(JSON.stringify(q));
    const correctText = cloned.options[cloned.answer];
    const shuffledOpts = [...cloned.options].sort(() => 0.5 - Math.random());
    cloned.options = shuffledOpts;
    cloned.answer = shuffledOpts.indexOf(correctText);
    return cloned;
  });

  checkpointQuizIndex = 0;
  checkpointCorrectCount = 0;
}

function renderCheckpointStep() {
  const lesson = currentLesson;
  if (!lesson || !lesson.checkpoints) return;
  const cp = lesson.checkpoints[checkpointIndex];
  if (!cp) {
    finishLesson();
    return;
  }

  updateLessonProgress();

  if (checkpointPhase === 'card') {
    renderCheckpointCard(cp);
  } else if (checkpointPhase === 'quiz') {
    const q = checkpointQuizzes[checkpointQuizIndex];
    if (q) {
      renderQuiz(q);
      // Prepend checkpoint header badge
      const quizContainer = document.querySelector('.quiz-wrapper') || document.querySelector('.quiz-container');
      if (quizContainer) {
        const tag = document.createElement('div');
        tag.className = 'checkpoint-quiz-tag';
        tag.innerHTML = `
          <span>🎯 <strong>${cp.title}</strong></span>
          <span>Soal <strong>${checkpointQuizIndex + 1} dari ${checkpointQuizzes.length}</strong></span>
        `;
        quizContainer.insertBefore(tag, quizContainer.firstChild);
      }
    } else {
      evaluateCheckpoint(cp);
    }
  }
}

function renderCheckpointCard(cp) {
  const content = document.getElementById('lesson-content');
  if (!content) return;
  const card = cp.card;
  const totalCp = currentLesson.checkpoints.length;

  content.innerHTML = `
    <div class="checkpoint-card-wrapper">
      <div class="checkpoint-step-indicator">
        <span class="csi-badge">${cp.badge || `TRIK ${checkpointIndex + 1} DARI ${totalCp}`}</span>
        <h3 class="csi-title">${cp.title}</h3>
      </div>

      <div class="flashcard-container" style="margin-top: 10px;">
        <div class="flashcard front" style="transform: none;">
          <div class="fc-front-main">${card.front}</div>
          <div class="fc-front-sub">${card.romanization || ''}</div>
          <div class="fc-front-pron">${card.pronunciation || ''}</div>
          ${card.example ? `
            <div class="fc-example">
              <div class="fc-ex-text">${card.example}</div>
              <div class="fc-ex-trans">${card.exampleMeaning || ''}</div>
            </div>
          ` : ''}
          ${card.tip ? `
            <div class="fc-tip" style="margin-top: 14px; font-size: 0.88rem; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 10px; padding: 12px; color: #fde68a; line-height: 1.5;">
              ${card.tip}
            </div>
          ` : ''}
        </div>
      </div>

      <div class="checkpoint-action-row" style="margin-top: 20px; text-align: center;">
        <button type="button" class="btn-primary" onclick="startCheckpointQuiz()" style="width: 100%; max-width: 440px; padding: 14px 24px; font-size: 1.05rem; font-weight: 800; border-radius: 14px; box-shadow: 0 4px 18px rgba(139, 92, 246, 0.4);">
          ⚡ Mulai 3 Soal Latihan Trik Ini →
        </button>
      </div>
    </div>
  `;
}

function startCheckpointQuiz() {
  checkpointPhase = 'quiz';
  checkpointQuizIndex = 0;
  checkpointCorrectCount = 0;
  renderLessonStep();
}

function nextCheckpointQuizStep() {
  const container = document.getElementById('quiz-feedback-container');
  if (container) container.innerHTML = '';

  const cp = currentLesson.checkpoints[checkpointIndex];
  checkpointQuizIndex++;

  if (checkpointQuizIndex < checkpointQuizzes.length) {
    renderLessonStep();
  } else {
    evaluateCheckpoint(cp);
  }
}

function evaluateCheckpoint(cp) {
  const content = document.getElementById('lesson-content');
  if (!content) return;
  const passScore = cp.passScore || 2;
  const isPassed = checkpointCorrectCount >= passScore;
  const totalCp = currentLesson.checkpoints.length;
  const isLastCp = checkpointIndex + 1 === totalCp;

  checkpointHistory[checkpointIndex] = {
    id: cp.id,
    title: cp.title,
    correct: checkpointCorrectCount,
    total: checkpointQuizzes.length,
    passed: isPassed
  };

  checkpointPhase = 'transition';

  if (isPassed) {
    content.innerHTML = `
      <div class="checkpoint-transition-card success">
        <div class="ctc-icon">🎉</div>
        <div class="ctc-badge">CHECKPOINT TUNTAS!</div>
        <h3 class="ctc-title">${cp.title} Berhasil Dikuasai!</h3>
        <p class="ctc-sub">Skor: <strong>${checkpointCorrectCount}/${checkpointQuizzes.length} Benar</strong>. Pemahaman trik ini sudah terpatri kuat di kepalamu!</p>
        <button type="button" class="btn-primary ctc-btn" onclick="proceedToNextCheckpoint()">
          ${isLastCp ? 'Selesaikan Pelajaran & Lihat Rapor 🏁' : 'Lanjut ke Trik Berikutnya →'}
        </button>
      </div>
    `;
    if (typeof launchConfetti === 'function') launchConfetti();
  } else {
    content.innerHTML = `
      <div class="checkpoint-transition-card remedial">
        <div class="ctc-icon">⚠️</div>
        <div class="ctc-badge remedial">PERLU PENGUATAN</div>
        <h3 class="ctc-title">${cp.title} Perlu Dipoles</h3>
        <p class="ctc-sub">Kamu baru benar <strong>${checkpointCorrectCount}/${checkpointQuizzes.length}</strong> (target minimal ${passScore}/${checkpointQuizzes.length}). Jangan khawatir, yuk uji kembali dengan 3 soal variasi baru!</p>
        <div class="ctc-tip-reminder">
          <strong>💡 Trik Kunci:</strong> ${cp.card.tip || cp.card.exampleMeaning}
        </div>
        <button type="button" class="btn-primary ctc-btn remedial" onclick="retryCheckpointWithNewQuestions()">
          🔄 Coba 3 Soal Variasi Baru (Anti-Hafalan)
        </button>
      </div>
    `;
  }
}

function proceedToNextCheckpoint() {
  checkpointIndex++;
  if (checkpointIndex < currentLesson.checkpoints.length) {
    checkpointPhase = 'card';
    checkpointAttempts = 1;
    prepareActiveCheckpointQuizzes();
    renderLessonStep();
  } else {
    finishLesson();
  }
}

function retryCheckpointWithNewQuestions() {
  const previousQuestions = checkpointQuizzes.map(q => q.q);
  checkpointAttempts++;
  checkpointPhase = 'quiz';
  prepareActiveCheckpointQuizzes(previousQuestions);
  renderLessonStep();
}

window.startCheckpointQuiz = startCheckpointQuiz;
window.nextCheckpointQuizStep = nextCheckpointQuizStep;
window.proceedToNextCheckpoint = proceedToNextCheckpoint;
window.retryCheckpointWithNewQuestions = retryCheckpointWithNewQuestions;

function startLesson(lang, unitId, lessonId) {
  const data = APP_DATA[lang];
  if (!data) return;
  const unit = data.units.find(u => u.id === unitId);
  if (!unit) return;
  const lesson = unit.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  // Modular Freedom: Any module (Structure, Reading, Listening) can be started freely!
  // Strict Lesson Mastery: Lessons within each module must be mastered sequentially (100% accuracy required)
  const li = unit.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = li > 0 ? unit.lessons[li - 1] : null;
  const isLessonLocked = prevLesson && !state.completedLessons.includes(prevLesson.id);

  if (isLessonLocked) {
    showLockedMsg();
    return;
  }

  // Deep clone so master data in APP_DATA is pristine on each repeat
  currentLesson = JSON.parse(JSON.stringify(lesson));
  currentUnit = unit;
  currentLang = lang;

  // Dynamically sample questions and randomize option positions
  if (currentLesson.type === 'checkpoint-loop') {
    initCheckpointLesson(currentLesson);
  } else if (currentLesson.type === 'flashcard-quiz' && currentLesson.quiz && currentLesson.quiz.length) {
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
        stopQuestionTimer();
        try { sessionStorage.removeItem('basaloka_active_lesson'); } catch (_) {}
        showView(lang === 'korean' ? 'korean-map' : (lang === 'english' ? 'english-map' : 'toefl-map'));
      }
    });
  };

  try {
    sessionStorage.setItem('basaloka_active_lesson', JSON.stringify({ lang, unitId, lessonId }));
  } catch (_) {}

  showView('lesson');
  updateHeartsDisplay('lesson-hearts-display');
  updateLessonTimerUI();
  renderLessonStep();
}

// ─── TOEFL REAL EXAM TIMER MODE ENGINE ─────────────────────────
let lessonTimerInterval = null;
let lessonTimeRemaining = 0;
let lessonTimeLimit = 40;

function updateLessonTimerUI() {
  const toggleBtn = document.getElementById('btn-lesson-timer-toggle');
  const timerText = document.getElementById('ltt-text');
  const timerWrap = document.getElementById('lesson-timer-bar-wrap');
  
  const isTimerOn = !!state.toeflTimerEnabled;
  if (toggleBtn) {
    if (isTimerOn) {
      toggleBtn.classList.add('active');
      if (timerText) timerText.textContent = 'Timer ON ⚡';
    } else {
      toggleBtn.classList.remove('active');
      if (timerText) timerText.textContent = 'Timer OFF';
    }
  }

  if (!isTimerOn && timerWrap) {
    timerWrap.style.display = 'none';
  }
}

function toggleLessonTimerMode() {
  state.toeflTimerEnabled = !state.toeflTimerEnabled;
  saveState();
  updateLessonTimerUI();

  if (state.toeflTimerEnabled) {
    showToast('⏱️ Mode Timer ETS Aktif! Waktu berjalan per soal.', 'info');
    if (currentLesson && currentLang === 'toefl') {
      restartCurrentQuestionTimer();
    }
  } else {
    stopQuestionTimer();
    showToast('⏱️ Mode Timer Dinonaktifkan (Mode Santai).', 'info');
  }
}
window.toggleLessonTimerMode = toggleLessonTimerMode;

function stopQuestionTimer() {
  if (lessonTimerInterval) {
    clearInterval(lessonTimerInterval);
    lessonTimerInterval = null;
  }
  const timerWrap = document.getElementById('lesson-timer-bar-wrap');
  if (timerWrap) {
    timerWrap.style.display = 'none';
    timerWrap.classList.remove('danger');
  }
}

function startQuestionTimer(durationSec, onTimeout) {
  stopQuestionTimer();

  if (!state.toeflTimerEnabled || currentLang !== 'toefl') return;

  const timerWrap = document.getElementById('lesson-timer-bar-wrap');
  const timerFill = document.getElementById('lesson-timer-bar-fill');
  const timerText = document.getElementById('lesson-timer-countdown-text');

  if (!timerWrap || !timerFill || !timerText) return;

  lessonTimeLimit = durationSec || 40;
  lessonTimeRemaining = lessonTimeLimit;

  timerWrap.style.display = 'flex';
  timerWrap.classList.remove('danger');
  timerFill.style.width = '100%';
  timerText.innerHTML = `⏱️ ${lessonTimeRemaining}s`;

  lessonTimerInterval = setInterval(() => {
    lessonTimeRemaining--;
    const pct = Math.max(0, Math.round((lessonTimeRemaining / lessonTimeLimit) * 100));
    timerFill.style.width = `${pct}%`;
    timerText.innerHTML = `⏱️ ${lessonTimeRemaining}s`;

    if (lessonTimeRemaining <= 10) {
      timerWrap.classList.add('danger');
    }

    if (lessonTimeRemaining <= 0) {
      stopQuestionTimer();
      if (typeof onTimeout === 'function') {
        onTimeout();
      }
    }
  }, 1000);
}

function restartCurrentQuestionTimer() {
  if (!currentLesson || currentLang !== 'toefl') return;
  const l = currentLesson;
  if (l.type === 'flashcard-quiz' || l.type === 'verb-drill') {
    const cards = l.type === 'verb-drill' ? (l.verbs || []) : (l.cards || []);
    const qi = lessonStep - cards.length;
    if (qi >= 0 && l.quiz && l.quiz[qi]) {
      startQuestionTimer(40, () => answerQuiz(-1, l.quiz[qi].answer, true));
    }
  } else if (l.type === 'fill-blank' && l.questions && l.questions[fillBlankStep]) {
    const q = l.questions[fillBlankStep];
    const correctVal = typeof q.answer === 'number' ? q.options[q.answer] : (q.answer || '');
    startQuestionTimer(40, () => answerFill('__TIMEOUT__', String(correctVal), '', '', q.explanation || '', true));
  } else if (l.type === 'reading-quiz' && l.questions && l.questions[readingStep]) {
    const q = l.questions[readingStep];
    startQuestionTimer(60, () => answerReadingQuiz(-1, q.answer, q.explanation || '', true));
  } else if (l.type === 'conversation-listening' && l.conversations && l.conversations[convoListeningStep]) {
    const c = l.conversations[convoListeningStep];
    startQuestionTimer(45, () => answerConversationListening(-1, c.answer, c.explanation || '', true));
  }
}

function renderLessonStep() {
  const lesson = currentLesson;
  if (!lesson) return;
  const content = document.getElementById('lesson-content');
  updateLessonProgress();

  if (lesson.type === 'checkpoint-loop') {
    renderCheckpointStep();
    return;
  }

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

  if (lesson.type === 'checkpoint-loop') {
    const totalCp = lesson.checkpoints ? lesson.checkpoints.length : 3;
    const stepsPerCp = 4; // 1 card + 3 quizzes
    total = totalCp * stepsPerCp;
    current = (checkpointIndex * stepsPerCp) + (checkpointPhase === 'card' ? 0 : (checkpointQuizIndex + 1));
  } else if (lesson.type === 'flashcard-quiz') {
    total = (lesson.cards ? lesson.cards.length : 0) + (lesson.quiz ? lesson.quiz.length : 0);
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
          <div class="fc-tap-hint"><span>👆</span> <strong>Tap untuk Pembahasan</strong> <span>💡</span></div>
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
          <div class="fc-back-tap-hint"><span>↩️</span> Tap untuk Balik</div>
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

// ─── TOEFL ACADEMIC VOCABULARY DICTIONARY (Tap-to-Translate) ────
const TOEFL_VOCAB_DICT = {
  // Structure & Grammar
  "appointed": "ditunjuk / diangkat resmi",
  "ambassador": "duta besar negara",
  "dominant": "dominan / paling berpengaruh",
  "architectural": "tata bangunan / arsitektur",
  "cathedrals": "katedral (gereja agung besar)",
  "centuries": "abad (rentang 100 tahun)",
  "preposition": "kata depan (in, on, at, by)",
  "connectors": "kata hubung antar klausa",
  "parallel": "sejajar / setara bentuknya",
  "inversion": "pembalikan posisi kata kerja mendahului subjek",
  "adverb": "kata keterangan waktu/tempat/cara",
  "clause": "klausa (kelompok kata ber-Subjek & Predikat)",
  "subject": "subjek / pelaku utama kalimat",
  "verb": "kata kerja / predikat kalimat",
  "conjunction": "kata sambung penghubung",
  "subordinate": "anak kalimat / klausa bawahan",
  "coordinates": "posisi koordinat geografis",
  "redundant": "berlebihan / mubazir",
  "omitted": "dihilangkan / dihapus",
  "ambiguous": "bermakna ganda / ambigu",
  "appositive": "keterangan penjelas subjek (diapit koma)",
  "prepositional": "frasa kata depan (misal: in the room)",
  "predicate": "predikat kalimat",
  "singular": "tunggal (hanya 1)",
  "plural": "jamak (lebih dari 1)",
  "noun": "kata benda",
  "adjective": "kata sifat",
  "pronoun": "kata ganti orang/benda",

  // Reading & Science Terms
  "photosynthesis": "fotosintesis (proses tumbuhan membuat makanan)",
  "chloroplasts": "kloroplas (organel hijau sel tumbuhan)",
  "biochemical": "biokimiawi (proses kimiawi makhluk hidup)",
  "glucose": "glukosa (zat gula sederhana)",
  "molecules": "molekul (ikatan partikel atom)",
  "industrial": "industri / perindustrian",
  "revolution": "revolusi (perubahan besar mendasar)",
  "mechanized": "digerakkan oleh mesin otomatis",
  "agrarian": "agraris / berbasis pertanian",
  "bioluminescence": "bioluminesensi (kemampuan alami memancarkan cahaya)",
  "abyssal": "abisal (zona laut terdalam yang gelap gulita)",
  "oceanic": "samudra / lautan",
  "predatory": "bersifat pemangsa / predator",
  "anglerfish": "ikan sungut ganda (penghuni laut dalam)",
  "luminous": "bercahaya / berpendar terang",
  "dorsal": "bagian punggung",
  "lures": "umpan penarik perhatian",
  "tectonics": "tektonik (pergerakan lempeng kulit bumi)",
  "lithospheric": "litosfer (kerak batuan terluar bumi)",
  "asthenosphere": "astenosfer (lapisan semi-cair mantel bumi)",
  "seismic": "seismik / getaran gempa bumi",
  "orogeny": "orogenesa (proses pembentukan pegunungan)",
  "hieroglyphic": "hieroglif (aksara simbol kuno)",
  "decipherment": "penerjemahan / pemecahan sandi teks kuno",
  "logosyllabic": "sistem aksara berbasis suku kata dan lambang",
  "geothermal": "panas bumi / geotermal",
  "hydrothermal": "air panas alami dari dalam kerak bumi",
  "boreholes": "lubang bor pengeboran dalam",
  "periodic": "berkala / terjadi berulang",
  "gravitation": "gravitasi (daya tarik menarik benda)",
  "serendipitously": "ditemukan secara kebetulan yang menguntungkan",
  "bacteriologist": "ahli bakteri / mikrobiolog",
  "contaminant": "zat / kuman pencemar",
  "biogenic": "dihasilkan oleh proses biologis makhluk hidup",
  "polyps": "polip (hewan karang mikroskopis)",
  "scleractinian": "karang keras pembuat terumbu",
  "movable": "dapat digerakkan / dipindah-pindah",
  "vellum": "perkamen kulit hewan untuk naskah",
  "humanism": "humanisme (gerakan penghargaan akal & budaya)",
  "foragers": "lebah pekerja pencari makan",
  "nectar": "nektar (cairan manis bunga)",
  "spatial": "keruangan / jarak spasial",
  "nutritional": "kandungan nutrisi / gizi",
  "xerophytic": "tanaman tahan kering / gurun",
  "cuticles": "lapisan lilin pelindung daun",
  "transpiration": "transpirasi (penguapan air lewat daun)",
  "aquifers": "lapisan batuan penyimpan air tanah",
  "nocturnal": "aktif di malam hari",
  "acidification": "pengasaman (penurunan derajat pH)",
  "calcification": "kalsifikasi (pembentukan cangkang kapur)",
  "invertebrates": "hewan avertebrata (tidak bertulang belakang)",
  "resilient": "tangguh / cepat pulih kembali",
  "volcanic": "vulkanik / berhubungan dengan gunung api",
  "erosion": "pengikisan tanah oleh air atau angin",
  "unprecedented": "belum pernah terjadi sebelumnya",
  "transform": "mengubah bentuk / merombak",
  "transformed": "mengubah secara drastis",
  "essential": "sangat mendasar / esensial",
  "profoundly": "secara mendalam / signifikan",
  "spurred": "memicu / mempercepat",
  "bustling": "ramai padat / sibuk",
  "phenomena": "fenomena / gejala ilmiah",
  "remarkable": "luar biasa mengagumkan",
  "presumed": "diduga / diasumsikan",
  "harnesses": "memanfaatkan / mendayagunakan",
  "reservoir": "tempat penampungan cadangan alam",
  "baseload": "beban dasar energi stabil",
  "emissions": "emisi / pembuangan gas",
  "triumphant": "penuh kemenangan / sukses besar",
  "pioneering": "merintis / kepeloporan",
  "investigations": "penyelidikan mendalam",
  "isolating": "mengisolasi / memisahkan zat murni",
  "intricate": "rumit mendetail",
  "morphological": "morfologi (bentuk susunan fisik)",
  "sustained": "berkelanjutan / terus menerus",
  "delicate": "rapuh / sangat peka",
  "repository": "gudang penyimpanan naskah / ilmu",
  "patronage": "perlindungan / sokongan dana resmi",
  "collaborative": "kolaboratif / kerja sama",
  "demonstrated": "membuktikan secara nyata",
  "abrasion": "pengikisan / pengasahan batuan",
  "spectrometer": "alat pengukur spektrum zat/cahaya",
  "ascertain": "memastikan kepastian",
  "fertile": "subur",
  "equatorial": "khatulistiwa / ekuatorial"
};

function renderInteractiveToeflText(rawText) {
  if (!rawText) return '';
  const escaped = escapeHtml(rawText);

  return escaped.replace(/\b([a-zA-Z]{3,})\b/g, (match, word) => {
    const key = word.toLowerCase();
    const meaning = TOEFL_VOCAB_DICT[key];
    if (meaning) {
      const safeMeaning = escapeHtml(meaning).replace(/'/g, "\\'");
      const safeWord = escapeHtml(word).replace(/'/g, "\\'");
      return `<span class="toefl-vocab-word" onclick="handleVocabWordClick(event, this, '${safeWord}', '${safeMeaning}')" data-word="${safeWord}" data-meaning="${safeMeaning}" title="Ketuk untuk arti">${word}</span>`;
    }
    return match;
  });
}

function handleVocabWordClick(event, el, word, meaning) {
  if (event) event.stopPropagation();

  const existing = document.getElementById('toefl-vocab-active-tooltip');
  if (existing) existing.remove();

  const tooltip = document.createElement('div');
  tooltip.id = 'toefl-vocab-active-tooltip';
  tooltip.className = 'vocab-micro-tooltip';
  tooltip.innerHTML = `
    <div class="vmt-header">
      <span class="vmt-word">${escapeHtml(word)}</span>
      <button type="button" class="vmt-close" onclick="event.stopPropagation(); document.getElementById('toefl-vocab-active-tooltip')?.remove();">✕</button>
    </div>
    <div class="vmt-meaning">➔ ${escapeHtml(meaning)}</div>
  `;

  document.body.appendChild(tooltip);

  const rect = el.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const top = rect.top - tooltipRect.height - 8;
  const left = Math.max(12, Math.min(window.innerWidth - tooltipRect.width - 12, rect.left + (rect.width / 2) - (tooltipRect.width / 2)));

  tooltip.style.top = `${window.scrollY + (top > 40 ? top : rect.bottom + 8)}px`;
  tooltip.style.left = `${left}px`;
}
window.handleVocabWordClick = handleVocabWordClick;

// Global dismiss for vocab tooltip
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#toefl-vocab-active-tooltip') && !e.target.closest('.toefl-vocab-word')) {
      const existing = document.getElementById('toefl-vocab-active-tooltip');
      if (existing) existing.remove();
    }
  });
}

// ─── QUIZ ─────────────────────────────────────────────────────
function renderQuiz(q) {
  const content = document.getElementById('lesson-content');
  const cards = currentLesson.type === 'verb-drill' ? (currentLesson.verbs || []) : (currentLesson.cards || []);
  const totalCards = cards.length;
  const isCpLoop = currentLesson && currentLesson.type === 'checkpoint-loop';
  const qi = isCpLoop ? (checkpointQuizIndex + 1) : (lessonStep - totalCards + 1);
  const totalQ = isCpLoop ? (checkpointQuizzes ? checkpointQuizzes.length : 3) : (currentLesson.quiz ? currentLesson.quiz.length : 1);

  // Check if question contains conversation or audio prompt
  const hasAudioPrompt = !!(q.audioText || q.dialogue || (q.q && (q.q.includes('Audio') || q.q.includes('Man:') || q.q.includes('Woman:'))));
  let audioPlayerHtml = '';
  let displayQuestion = q.q;

  if (hasAudioPrompt) {
    const parsed = parseQuizDialogue(q);
    let spk1Role = 'man';
    let spk1Label = 'Pria';
    let spk1Text = '';
    let spk2Role = 'woman';
    let spk2Label = 'Wanita';
    let spk2Text = '';
    let narratorSpeech = '';

    if (parsed && parsed.hasDialogue) {
      spk1Role = parsed.speaker1.role;
      spk1Label = parsed.speaker1.label;
      spk1Text = parsed.speaker1.text;
      if (parsed.speaker2) {
        spk2Role = parsed.speaker2.role;
        spk2Label = parsed.speaker2.label;
        spk2Text = parsed.speaker2.text;
      }
      displayQuestion = parsed.questionText;
      narratorSpeech = getEnglishNarratorPrompt(parsed.questionText);
    } else {
      spk2Text = q.audioText || q.q.replace(/Audio.*?:\s*/i, '').replace(/—.*$/i, '').trim();
      narratorSpeech = 'Listen carefully to the audio and choose the correct answer.';
    }

    const safeSpk1Role = spk1Role.replace(/'/g, "\\'");
    const safeSpk1Label = spk1Label.replace(/'/g, "\\'");
    const safeSpk1Text = spk1Text.replace(/'/g, "\\'");
    const safeSpk2Role = spk2Role.replace(/'/g, "\\'");
    const safeSpk2Label = spk2Label.replace(/'/g, "\\'");
    const safeSpk2Text = spk2Text.replace(/'/g, "\\'");
    const safeNarrator = narratorSpeech.replace(/'/g, "\\'");

    hasAudioPlayedThisQuestion = false;
    audioPlayerHtml = `
      <div class="quiz-audio-player-card">
        <div class="qap-header">
          <span class="qap-tag">🎧 Rekaman Suara Percakapan</span>
          <span class="qap-sub">Dengarkan audio dialog dengan saksama sebelum menjawab:</span>
        </div>
        <div class="qap-action-row">
          <button type="button" class="btn-quiz-audio primary" id="btn-quiz-convo-play" onclick="playQuizCombinedAudio('${safeSpk1Role}', '${safeSpk1Text}', '${safeSpk2Role}', '${safeSpk2Text}', '${safeNarrator}')">
            ▶️ Putar Percakapan
          </button>
          <button type="button" class="btn-audio-mode-pill ${state.toeflStrictAudioMode ? 'active-strict' : ''}" id="btn-audio-mode-pill" onclick="toggleAudioStrictExamMode()" title="Ganti antara Mode Santai dan Simulasi Ujian ETS 1x Putar">
            ${state.toeflStrictAudioMode ? '🏛️ Mode ETS (1x Saja)' : '🔄 Mode Santai (Bisa Diulang)'}
          </button>
          <button type="button" class="btn-quiz-transcript-toggle" id="btn-quiz-transcript-toggle" onclick="toggleQuizTranscript()" ${state.toeflStrictAudioMode ? 'style="display: none;"' : ''}>
            👁️ Buka Naskah & Arti
          </button>
        </div>
        <div id="qap-strict-notice-area"></div>
        <div class="quiz-transcript-drawer" id="quiz-transcript-drawer" style="display: none;">
          <div class="qtd-header">📜 Naskah Percakapan (Transkrip):</div>
          <div class="qtd-line"><strong>${escapeHtml(spk1Label)}:</strong> "${escapeHtml(spk1Text)}"</div>
          ${spk2Text ? `<div class="qtd-line"><strong>${escapeHtml(spk2Label)}:</strong> "${escapeHtml(spk2Text)}"</div>` : ''}
          ${narratorSpeech ? `<div class="qtd-line" style="color: #94a3b8; font-style: italic;"><strong>🎙️ Narator:</strong> "${escapeHtml(narratorSpeech)}"</div>` : ''}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="quiz-wrapper">
      <div class="quiz-label">🎯 Quiz ${qi}/${totalQ}</div>
      ${audioPlayerHtml}
      ${q.passage ? `
        <div class="quiz-reading-passage-box">
          <div class="qrpb-header">
            <span class="qrpb-tag">📖 Teks Bacaan Singkat</span>
          </div>
          <div class="qrpb-content">${currentLang === 'toefl' ? renderInteractiveToeflText(q.passage) : escapeHtml(q.passage)}</div>
        </div>
      ` : ''}
      ${q.char ? `<div class="quiz-char-display">${escapeHtml(q.char)}</div>` : ''}
      <div class="quiz-question">${currentLang === 'toefl' ? renderInteractiveToeflText(displayQuestion) : escapeHtml(displayQuestion)}</div>
      ${currentLang === 'toefl' ? `<div class="toefl-vocab-hint">💡 <em>Ketuk kata yang digarisbawahi titik halus untuk intip artinya</em></div>` : ''}
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" id="qopt-${i}" onclick="answerQuiz(${i}, ${q.answer})">
            ${escapeHtml(opt)}
          </button>`).join('')}
      </div>
      <div id="quiz-feedback-container"></div>
    </div>`;

  stopQuestionTimer();
  if (state.toeflTimerEnabled && currentLang === 'toefl') {
    startQuestionTimer(40, () => {
      answerQuiz(-1, q.answer, true);
    });
  }
}

function parseQuizDialogue(q) {
  if (q.dialogue && Array.isArray(q.dialogue)) {
    const s1 = q.dialogue[0];
    const s2 = q.dialogue.length > 1 ? q.dialogue[1] : null;
    return {
      hasDialogue: true,
      speaker1: {
        role: s1 ? (s1.speaker || 'man') : 'man',
        label: s1 ? (s1.label || (s1.speaker === 'woman' ? 'Wanita' : 'Pria')) : 'Pria',
        text: s1 ? s1.text : ''
      },
      speaker2: s2 ? {
        role: s2.speaker || 'woman',
        label: s2.label || (s2.speaker === 'woman' ? 'Wanita' : 'Pria'),
        text: s2.text
      } : null,
      questionText: q.questionText || q.q || q.narrator || 'What does the speaker imply?'
    };
  }

  const rawQ = q.q || '';
  const manMatch = rawQ.match(/\bMan:\s*["“]([^"”\n\r]+)["”]/i);
  const womanMatch = rawQ.match(/\bWoman:\s*["“]([^"”\n\r]+)["”]/i);

  if (manMatch && womanMatch) {
    const manText = manMatch[1].trim();
    const womanText = womanMatch[1].trim();

    const manIdx = rawQ.toLowerCase().search(/\bman:/);
    const womanIdx = rawQ.toLowerCase().search(/\bwoman:/);
    const firstIsMan = manIdx < womanIdx;

    let questionText = rawQ
      .replace(/\bWoman:\s*["“][^"”\n\r]+["”]/gi, '')
      .replace(/\bMan:\s*["“][^"”\n\r]+["”]/gi, '')
      .replace(/^[/\s\n\r—\-]+/, '')
      .replace(/[/\s\n\r—\-]+$/, '')
      .replace(/^[/\s\n\r—\-]+/, '')
      .trim();

    if (!questionText) {
      questionText = 'What does the speaker imply? (Apa yang disiratkan oleh pembicara?)';
    }

    return {
      hasDialogue: true,
      firstSpeaker: firstIsMan ? 'man' : 'woman',
      speaker1: firstIsMan ? { role: 'man', label: 'Pria', text: manText } : { role: 'woman', label: 'Wanita', text: womanText },
      speaker2: firstIsMan ? { role: 'woman', label: 'Wanita', text: womanText } : { role: 'man', label: 'Pria', text: manText },
      questionText
    };
  }

  // Single speaker: Man
  if (manMatch && !womanMatch) {
    const manText = manMatch[1].trim();
    let questionText = rawQ
      .replace(/\bMan:\s*["“][^"”\n\r]+["”]/gi, '')
      .replace(/^[/\s\n\r—\-]+/, '')
      .replace(/[/\s\n\r—\-]+$/, '')
      .trim();
    if (!questionText) questionText = 'What does the man mean? (Apa maksud ucapan pria?)';
    return {
      hasDialogue: true,
      firstSpeaker: 'man',
      speaker1: { role: 'man', label: 'Pria', text: manText },
      speaker2: null,
      questionText
    };
  }

  // Single speaker: Woman
  if (womanMatch && !manMatch) {
    const womanText = womanMatch[1].trim();
    let questionText = rawQ
      .replace(/\bWoman:\s*["“][^"”\n\r]+["”]/gi, '')
      .replace(/^[/\s\n\r—\-]+/, '')
      .replace(/[/\s\n\r—\-]+$/, '')
      .trim();
    if (!questionText) questionText = 'What does the woman mean? (Apa maksud ucapan wanita?)';
    return {
      hasDialogue: true,
      firstSpeaker: 'woman',
      speaker1: { role: 'woman', label: 'Wanita', text: womanText },
      speaker2: null,
      questionText
    };
  }

  const audioMatch = rawQ.match(/\bAudio(?:[^:"]*):\s*["“]([^"”\n\r]+)["”]/i);
  if (audioMatch) {
    const audioText = audioMatch[1].trim();
    let questionText = rawQ
      .replace(/\bAudio(?:[^:"]*):\s*["“][^"”\n\r]+["”]/gi, '')
      .replace(/^[/\s\n\r—\-]+/, '')
      .trim();
    if (!questionText) questionText = 'Dengarkan audio dan tentukan makna yang paling tepat:';
    return {
      hasDialogue: true,
      firstSpeaker: 'audio',
      speaker1: { role: 'speaker', label: 'Audio', text: audioText },
      speaker2: null,
      questionText
    };
  }

  return null;
}

function getEnglishNarratorPrompt(questionText) {
  // Strip out Indonesian translations or text in parentheses / brackets
  let clean = (questionText || '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/["“”'‘’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (/^(what|who|where|how|which|why)\b/i.test(clean)) {
    // Ensure clean natural question mark ending
    clean = clean.replace(/[?.\s]+$/, '') + '?';
    return clean;
  }
  const lower = clean.toLowerCase();
  if (lower.includes('woman') || lower.includes('wanita') || lower.includes('cewe')) {
    return 'What does the woman mean?';
  }
  if (lower.includes('man') || lower.includes('pria') || lower.includes('cowo')) {
    return 'What does the man mean?';
  }
  if (lower.includes('mark')) {
    return 'What does the speaker say about Mark?';
  }
  return 'What does the speaker imply?';
}

// ─── STRICT 1X LISTENING MODE (ETS REAL EXAM SIMULATION) ─────
let hasAudioPlayedThisQuestion = false;

function toggleAudioStrictExamMode() {
  state.toeflStrictAudioMode = !state.toeflStrictAudioMode;
  saveState();

  const isStrict = !!state.toeflStrictAudioMode;
  showToast(
    isStrict 
      ? '🏛️ Mode Simulasi ETS Aktif: Audio hanya diputar 1 kali tanpa pengulangan!' 
      : '🔄 Mode Santai Aktif: Audio bebas diputar ulang.',
    'info'
  );

  const quizPill = document.getElementById('btn-audio-mode-pill');
  if (quizPill) {
    quizPill.className = `btn-audio-mode-pill ${isStrict ? 'active-strict' : ''}`;
    quizPill.innerHTML = isStrict ? '🏛️ Mode ETS (1x Saja)' : '🔄 Mode Santai (Bisa Diulang)';
  }
  const convoPill = document.getElementById('btn-convo-mode-pill');
  if (convoPill) {
    convoPill.className = `btn-audio-mode-pill ${isStrict ? 'active-strict' : ''}`;
    convoPill.innerHTML = isStrict ? '🏛️ Mode ETS (1x Saja)' : '🔄 Mode Santai (Bisa Diulang)';
  }

  const quizTrBtn = document.getElementById('btn-quiz-transcript-toggle');
  if (quizTrBtn && !hasAnsweredCurrentQuestion()) {
    quizTrBtn.style.display = isStrict ? 'none' : 'inline-flex';
  }
  const convoTrBtn = document.getElementById('btn-transcript-toggle');
  if (convoTrBtn && !hasAnsweredCurrentQuestion()) {
    convoTrBtn.style.display = isStrict ? 'none' : 'inline-flex';
  }
}
window.toggleAudioStrictExamMode = toggleAudioStrictExamMode;

function hasAnsweredCurrentQuestion() {
  const qOpts = document.querySelector('.quiz-option');
  if (qOpts && qOpts.disabled) return true;
  const cOpts = document.querySelector('.convo-option-btn');
  if (cOpts && cOpts.disabled) return true;
  return false;
}

function toggleQuizTranscript() {
  const drawer = document.getElementById('quiz-transcript-drawer');
  const btn = document.getElementById('btn-quiz-transcript-toggle');
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none' || drawer.style.display === '';
  drawer.style.display = isHidden ? 'block' : 'none';
  if (btn) {
    btn.innerHTML = isHidden ? '🙈 Sembunyikan Naskah' : '👁️ Buka Naskah & Arti';
  }
}
window.toggleQuizTranscript = toggleQuizTranscript;

function playQuizCombinedAudio(spk1Role, spk1Text, spk2Role, spk2Text, narratorText) {
  if (state.toeflStrictAudioMode && hasAudioPlayedThisQuestion) {
    showToast('⚠️ Aturan ETS: Audio hanya dapat diputar 1 kali di ujian resmi!', 'warning');
    return;
  }

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
    if (state.toeflStrictAudioMode) {
      hasAudioPlayedThisQuestion = true;
      if (btn) {
        btn.disabled = true;
        btn.classList.add('disabled-strict');
        btn.innerHTML = '🔒 Audio Selesai (Aturan ETS: 1x Saja)';
      }
      const noticeArea = document.getElementById('qap-strict-notice-area');
      if (noticeArea) {
        noticeArea.innerHTML = '<div class="strict-audio-notice">⚠️ <strong>Aturan Resmi ETS:</strong> Audio tidak dapat diulang. Silakan pilih opsi jawaban terbaikmu!</div>';
      }
    } else {
      if (btn) btn.innerHTML = '▶️ Putar Percakapan';
    }
  };

  const spk1Gender = (spk1Role === 'woman' || spk1Role === 'female') ? 'female' : 'male';
  const spk2Gender = (spk2Role === 'woman' || spk2Role === 'female') ? 'female' : 'male';

  if (spk1Text && spk2Text) {
    // Initial 120ms gentle warmup delay so first word is never clipped
    setTimeout(() => {
      if (!isPlayingConvo) return;
      speakWithVoice(spk1Text, 'en-US', { gender: spk1Gender }, () => {
        if (!isPlayingConvo) return;
        // Natural 600ms turn-taking conversation pause
        setTimeout(() => {
          if (!isPlayingConvo) return;
          speakWithVoice(spk2Text, 'en-US', { gender: spk2Gender, cancelPrevious: false }, () => {
            if (!isPlayingConvo) return;
            if (narratorText) {
              // Calm 750ms silence pause before ETS exam narrator speaks
              setTimeout(() => {
                if (!isPlayingConvo) return;
                speakWithVoice(narratorText, 'en-US', { gender: 'neutral', rate: 0.88, pitch: 0.98, cancelPrevious: false }, () => {
                  setTimeout(() => {
                    resetBtn();
                  }, 450);
                });
              }, 750);
            } else {
              setTimeout(() => resetBtn(), 400);
            }
          });
        }, 600);
      });
    }, 120);
  } else if (spk1Text) {
    speakWithVoice(spk1Text, 'en-US', { gender: spk1Gender }, () => {
      if (!isPlayingConvo) return;
      if (narratorText) {
        setTimeout(() => {
          if (!isPlayingConvo) return;
          speakWithVoice(narratorText, 'en-US', { gender: 'neutral', rate: 0.88, pitch: 0.98, cancelPrevious: false }, () => {
            setTimeout(() => {
              resetBtn();
            }, 400);
          });
        }, 650);
      } else {
        setTimeout(() => resetBtn(), 350);
      }
    });
  } else {
    resetBtn();
  }
}
window.playQuizCombinedAudio = playQuizCombinedAudio;

function answerQuiz(selected, correct, isTimeout) {
  stopQuestionTimer();
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o => o.disabled = true);

  // Automatically reveal transcript drawer upon answering so learners can review the full dialogue
  const drawer = document.getElementById('quiz-transcript-drawer');
  const transcriptBtn = document.getElementById('btn-quiz-transcript-toggle');
  if (transcriptBtn) transcriptBtn.style.display = 'inline-flex';
  if (drawer && (drawer.style.display === 'none' || drawer.style.display === '')) {
    drawer.style.display = 'block';
    if (transcriptBtn) transcriptBtn.innerHTML = '🙈 Sembunyikan Naskah';
  }

  totalAnswers++;
  const isCorrect = !isTimeout && selected === correct;
  if (currentLesson && currentLesson.type === 'checkpoint-loop') {
    if (isCorrect) checkpointCorrectCount++;
  }
  const cards = currentLesson.type === 'verb-drill' ? (currentLesson.verbs || []) : (currentLesson.cards || []);
  const totalCards = cards.length;
  const qi = Math.max(0, lessonStep - totalCards);
  const currentQ = currentLesson.type === 'checkpoint-loop' 
    ? checkpointQuizzes[checkpointQuizIndex]
    : ((currentLesson.quiz && currentLesson.quiz[qi]) || null);
  const correctText = (currentQ && currentQ.options && currentQ.options[correct]) || (opts[correct] ? opts[correct].innerText : '');
  const selectedText = isTimeout
    ? '⏰ Waktu Habis (Tidak sempat menjawab)'
    : ((currentQ && currentQ.options && currentQ.options[selected]) || (opts[selected] ? opts[selected].innerText : ''));
  let explanation = currentQ?.explanation || currentQ?.tip || currentLesson?.tip || '';
  if (isTimeout) {
    explanation = `<span style="color: #ef4444; font-weight: 700;">⏰ Waktu Pengerjaan Habis!</span><br>Di ujian TOEFL asli, kamu rata-rata hanya memiliki waktu 37 detik per soal di Structure. Jangan panik, pelajari pembahasannya di bawah ini:<br><br>${explanation}`;
  }

  if (isCorrect) {
    correctAnswers++;
    if (opts[selected]) opts[selected].classList.add('correct');
    let xpReward = Math.round((currentLesson.xpReward || 20) / (currentLesson.quiz ? currentLesson.quiz.length : 1));
    if (state.toeflTimerEnabled && currentLang === 'toefl') {
      xpReward += 5; // +5 Bonus XP for speed with timer on
      showToast('⚡ +5 XP Bonus Kecepatan Waktu ETS!', 'success');
    }
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
  const isLastQuestion = currentLesson.type === 'checkpoint-loop'
    ? (checkpointQuizIndex + 1 >= checkpointQuizzes.length)
    : (qi >= totalQ);

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
  if (currentLesson && currentLesson.type === 'checkpoint-loop') {
    nextCheckpointQuizStep();
    return;
  }
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

  stopQuestionTimer();
  if (state.toeflTimerEnabled && currentLang === 'toefl') {
    startQuestionTimer(40, () => {
      answerFill('__TIMEOUT__', safeAnswer, '', '', safeExp, true);
    });
  }
}

function answerFill(selected, correct, ttsText, ttsLang, explanation, isTimeout) {
  stopQuestionTimer();
  const opts = document.querySelectorAll('.fill-option');
  opts.forEach(o => o.disabled = true);
  totalAnswers++;
  const isCorrect = !isTimeout && selected.trim() === correct.trim();

  opts.forEach(o => {
    if (o.textContent.trim() === correct.trim()) o.classList.add('correct');
    if (o.textContent.trim() === selected.trim() && !isCorrect) o.classList.add('wrong');
  });

  if (isCorrect) {
    correctAnswers++;
    let xpGain = Math.round(currentLesson.xpReward / currentLesson.questions.length);
    if (state.toeflTimerEnabled && currentLang === 'toefl') {
      xpGain += 5;
      showToast('⚡ +5 XP Bonus Kecepatan Waktu ETS!', 'success');
    }
    lessonXpEarned += xpGain;
    showToast('✅ Benar!', 'success');
    playSuccessEffect();
    if (ttsText) setTimeout(() => speak(ttsText, ttsLang), 300);
  } else {
    loseHeart();
    showToast(isTimeout ? '⏰ Waktu Habis!' : '❌ Kurang tepat, periksa pembahasannya', 'error');
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

  stopQuestionTimer();
  if (state.toeflTimerEnabled && currentLang === 'toefl') {
    startQuestionTimer(60, () => {
      answerReadingQuiz(-1, qObj.answer, qObj.explanation, true);
    });
  }
}

function answerReadingQuiz(selectedIndex, correctIndex, explanation, isTimeout) {
  stopQuestionTimer();
  const btns = document.querySelectorAll('.reading-opt-btn');
  btns.forEach(btn => btn.disabled = true);

  totalAnswers++;
  const isCorrect = !isTimeout && selectedIndex === correctIndex;
  const letters = ['A', 'B', 'C', 'D'];
  const qObj = currentLesson.questions[readingStep] || {};
  const selectedText = isTimeout
    ? '⏰ Waktu Habis (Tidak sempat menjawab)'
    : ((qObj.options && qObj.options[selectedIndex]) ? `${letters[selectedIndex]}. ${qObj.options[selectedIndex]}` : `Opsi ${letters[selectedIndex]}`);
  const correctText = (qObj.options && qObj.options[correctIndex]) ? `${letters[correctIndex]}. ${qObj.options[correctIndex]}` : `Opsi ${letters[correctIndex]}`;

  if (isCorrect) {
    btns[selectedIndex].classList.add('correct');
    correctAnswers++;
    let xpGain = Math.round(currentLesson.xpReward / currentLesson.questions.length);
    if (state.toeflTimerEnabled && currentLang === 'toefl') {
      xpGain += 5;
      showToast('⚡ +5 XP Bonus Kecepatan Waktu ETS!', 'success');
    }
    lessonXpEarned += xpGain;
    showToast('✅ Jawaban Benar!', 'success');
    playSuccessEffect();
  } else {
    if (btns[selectedIndex]) btns[selectedIndex].classList.add('wrong');
    if (btns[correctIndex]) btns[correctIndex].classList.add('correct');
    loseHeart();
    showToast(isTimeout ? '⏰ Waktu Habis!' : '❌ Kurang tepat, periksa pembahasannya', 'error');
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
  hasAudioPlayedThisQuestion = false;
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
            <button type="button" class="btn-audio-mode-pill ${state.toeflStrictAudioMode ? 'active-strict' : ''}" id="btn-convo-mode-pill" onclick="toggleAudioStrictExamMode()" title="Ganti antara Mode Santai dan Simulasi Ujian ETS 1x Putar">
              ${state.toeflStrictAudioMode ? '🏛️ Mode ETS (1x Saja)' : '🔄 Mode Santai (Bisa Diulang)'}
            </button>
            <button class="btn-transcript-toggle" id="btn-transcript-toggle" onclick="toggleConvoTranscript()" ${state.toeflStrictAudioMode ? 'style="display: none;"' : ''}>
              <span id="transcript-btn-icon">👁️</span>
              <span id="transcript-btn-text">Buka Naskah & Terjemahan</span>
            </button>
          </div>
          <div id="convo-strict-notice-area"></div>

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
          ${(convo.options || []).map((opt, i) => `
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

  stopQuestionTimer();
  if (state.toeflTimerEnabled && currentLang === 'toefl') {
    startQuestionTimer(45, () => {
      answerConversationListening(-1, convo.answer, convo.explanation, true);
    });
  }
}

function playFullConversation() {
  if (state.toeflStrictAudioMode && hasAudioPlayedThisQuestion) {
    showToast('⚠️ Aturan ETS: Audio hanya dapat diputar 1 kali di ujian resmi!', 'warning');
    return;
  }

  if (!currentLesson || !currentLesson.conversations) return;
  const convo = currentLesson.conversations[convoListeningStep];
  if (!convo || !convo.dialogue || !convo.dialogue.length) return;

  const playBtnText = document.getElementById('play-all-text');
  const playBtnIcon = document.getElementById('play-all-icon');
  const waveBar = document.getElementById('convo-soundwave');
  const waveStatus = document.getElementById('soundwave-status');

  if (isPlayingConvo) {
    // Stop playing
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (convoAudioQueueTimeout) clearTimeout(convoAudioQueueTimeout);
    isPlayingConvo = false;
    if (waveBar) waveBar.style.display = 'none';
    if (playBtnIcon) playBtnIcon.textContent = '▶️';
    if (playBtnText) playBtnText.textContent = 'Putar Percakapan';
    return;
  }

  isPlayingConvo = true;
  if (waveBar) waveBar.style.display = 'flex';
  if (playBtnIcon) playBtnIcon.textContent = '⏹️';
  if (playBtnText) playBtnText.textContent = 'Hentikan Pemutaran';

  const resetBtn = () => {
    isPlayingConvo = false;
    if (waveBar) waveBar.style.display = 'none';
    if (playBtnIcon) playBtnIcon.textContent = '▶️';
    if (state.toeflStrictAudioMode) {
      hasAudioPlayedThisQuestion = true;
      const playBtn = document.getElementById('btn-play-convo');
      if (playBtn) {
        playBtn.disabled = true;
        playBtn.classList.add('disabled-strict');
      }
      if (playBtnText) playBtnText.textContent = '🔒 Audio Selesai (Aturan ETS: 1x Saja)';
      const noticeArea = document.getElementById('convo-strict-notice-area');
      if (noticeArea) {
        noticeArea.innerHTML = '<div class="strict-audio-notice">⚠️ <strong>Aturan Resmi ETS:</strong> Audio tidak dapat diulang. Silakan pilih opsi jawaban terbaikmu!</div>';
      }
    } else {
      if (playBtnText) playBtnText.textContent = 'Putar Percakapan';
    }
  };

  // Play lines in strictly CHRONOLOGICAL order (turn 1 then turn 2)!
  const line1 = convo.dialogue[0];
  const line2 = convo.dialogue.length > 1 ? convo.dialogue[1] : null;
  const narratorLine = convo.narrator || convo.question || '';

  const getVoiceOpts = (line) => {
    const isWoman = line && (line.speaker === 'woman' || line.speaker === 'female');
    return {
      gender: isWoman ? 'female' : 'male',
      cancelPrevious: false
    };
  };

  // Step 1: Speaker 1 in chronological sequence
  const line1Label = line1.label || (line1.speaker === 'woman' ? 'Wanita' : 'Pria');
  if (waveStatus) waveStatus.textContent = `🔊 Memutar ${line1Label} (Pembicara 1)...`;

  speakWithVoice(line1.text, 'en-US', getVoiceOpts(line1), () => {
    if (!isPlayingConvo) return;

    convoAudioQueueTimeout = setTimeout(() => {
      if (!isPlayingConvo) return;

      // Step 2: Speaker 2 in chronological sequence
      if (line2 && line2.text) {
        const line2Label = line2.label || (line2.speaker === 'woman' ? 'Wanita' : 'Pria');
        if (waveStatus) waveStatus.textContent = `🔊 Memutar ${line2Label} (Pembicara 2)...`;

        speakWithVoice(line2.text, 'en-US', getVoiceOpts(line2), () => {
          if (!isPlayingConvo) return;

          // Step 3: Narrator reads question
          if (narratorLine) {
            convoAudioQueueTimeout = setTimeout(() => {
              if (!isPlayingConvo) return;
              if (waveStatus) waveStatus.textContent = '🎙️ Narator membacakan pertanyaan...';
              speakWithVoice(narratorLine, 'en-US', { pitch: 0.98, rate: 0.88, gender: 'neutral', cancelPrevious: false }, () => {
                setTimeout(() => resetBtn(), 400);
              });
            }, 650);
          } else {
            setTimeout(() => resetBtn(), 350);
          }
        });
      } else if (narratorLine) {
        convoAudioQueueTimeout = setTimeout(() => {
          if (!isPlayingConvo) return;
          if (waveStatus) waveStatus.textContent = '🎙️ Narator membacakan pertanyaan...';
          speakWithVoice(narratorLine, 'en-US', { pitch: 0.98, rate: 0.90, gender: 'neutral', cancelPrevious: false }, resetBtn);
        }, 600);
      } else {
        resetBtn();
      }
    }, 500);
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

  const opts = (speakerRole === 'man' || speakerRole === 'male')
    ? { gender: 'male' }
    : (speakerRole === 'woman' || speakerRole === 'female')
    ? { gender: 'female' }
    : { gender: 'neutral' };

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

function answerConversationListening(selectedIndex, correctIndex, explanation, isTimeout) {
  stopQuestionTimer();
  const btns = document.querySelectorAll('.convo-option-btn');
  btns.forEach(btn => btn.disabled = true);

  const transcriptBtn = document.getElementById('btn-transcript-toggle');
  if (transcriptBtn) transcriptBtn.style.display = 'inline-flex';

  totalAnswers++;
  const isCorrect = !isTimeout && selectedIndex === correctIndex;
  const currentConvo = currentLesson.conversations[convoListeningStep] || {};
  const selectedText = isTimeout
    ? '⏰ Waktu Habis (Tidak sempat menjawab)'
    : ((currentConvo.options && currentConvo.options[selectedIndex]) ? currentConvo.options[selectedIndex] : 'Jawaban Anda');
  const correctText = (currentConvo.options && currentConvo.options[correctIndex]) ? currentConvo.options[correctIndex] : 'Kunci Jawaban';

  if (isCorrect) {
    btns[selectedIndex].classList.add('correct');
    correctAnswers++;
    let rewardPerQ = Math.round((currentLesson.xpReward || 35) / currentLesson.conversations.length);
    if (state.toeflTimerEnabled && currentLang === 'toefl') {
      rewardPerQ += 5;
      showToast('⚡ +5 XP Bonus Kecepatan Waktu ETS!', 'success');
    }
    lessonXpEarned += rewardPerQ;
    showToast('✅ Jawaban Benar!', 'success');
    playSuccessEffect();
  } else {
    if (btns[selectedIndex]) btns[selectedIndex].classList.add('wrong');
    if (btns[correctIndex]) btns[correctIndex].classList.add('correct');
    showToast(isTimeout ? '⏰ Waktu Habis!' : '❌ Kurang tepat, periksa pembahasannya', 'error');
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
  if (typeof stopQuestionTimer === 'function') stopQuestionTimer();
  try {
    sessionStorage.removeItem('basaloka_active_lesson');
  } catch (_) {}
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

    // TOEFL Live Score Predictor Boost Banner in Result View
    const toeflBoostEl = document.getElementById('result-toefl-boost');
    if (toeflBoostEl) {
      if (lang === 'toefl') {
        const pred = calculatePredictedToeflScore(state);
        const prevScore = state.toeflLastPredictedScore || 310;
        const diff = Math.max(0, pred.totalScore - prevScore);
        state.toeflLastPredictedScore = pred.totalScore;
        saveState();

        const predScoreEl = document.getElementById('rtb-pred-score');
        const milestoneEl = document.getElementById('rtb-milestone-badge');
        const diffEl = document.getElementById('rtb-score-diff');
        const targetEl = document.getElementById('rtb-target-info');

        if (predScoreEl) predScoreEl.textContent = pred.totalScore;
        if (milestoneEl) milestoneEl.textContent = pred.milestoneBadge;
        if (diffEl) {
          diffEl.textContent = diff > 0 ? `+${diff} Poin Prediksi Baru! 🚀` : `Skor Prediksi Terkini`;
          diffEl.style.color = diff > 0 ? '#10b981' : '#38bdf8';
        }
        if (targetEl) {
          targetEl.textContent = pred.pointsToTarget > 0 
            ? `Kurang ${pred.pointsToTarget} poin lagi menuju ${pred.targetLabel}!`
            : `Selamat! Target ${pred.targetLabel} telah berhasil dicapai! 🎉`;
        }
        toeflBoostEl.style.display = 'block';
        updateToeflPredictorUI();
      } else {
        toeflBoostEl.style.display = 'none';
      }
    }

    // 🩺 TOEFL Post-Lesson / Exam Module Prescription Card
    const prescCard = document.getElementById('result-prescription-card');
    if (prescCard) {
      if (lang === 'toefl') {
        const pred = calculatePredictedToeflScore(state);
        let targetUnitId = 'toefl-day3';
        let badgeText = 'REKOMENDASI DONGKRAK SKOR CEPAT';
        let titleText = 'Modul 3: Structure 1–15 (Rumus S+V & Konektor)';
        let descText = 'Menguasai pola Subjek & Kata Kerja memberi lonjakan poin tercepat pada tes TOEFL!';

        if (unit && (unit.section === 'listening' || unit.id.includes('listening') || unit.id.includes('d1') || unit.id.includes('u-hack')) && !isPerfect) {
          targetUnitId = 'toefl-u-hack';
          badgeText = 'FOKUS PERBAIKAN: LISTENING COMPREHENSION';
          titleText = 'Modul 1: Listening Part A (Trik Second Speaker)';
          descText = 'Fokus pada speaker kedua dan cari sinonim kata kunci untuk menghindari perangkap bunyi!';
        } else if (unit && (unit.section === 'structure' || unit.id.includes('structure') || unit.id.includes('day3') || unit.id.includes('day4')) && !isPerfect) {
          targetUnitId = 'toefl-day4';
          badgeText = 'FOKUS PERBAIKAN: DETEKTIF ERROR 16–40';
          titleText = 'Modul 4: Written Expression (Detektif Error)';
          descText = 'Periksa kesesuaian Subject-Verb Agreement dan bentuk kata (Adjective vs Adverb) untuk membasmi jebakan soal!';
        } else if (unit && (unit.section === 'reading' || unit.id.includes('reading') || unit.id.includes('day6') || unit.id.includes('u2')) && !isPerfect) {
          targetUnitId = 'toefl-day6';
          badgeText = 'FOKUS PERBAIKAN: READING NINJA';
          titleText = 'Modul 6: Reading Ninja (Scan & Skim Cepat)';
          descText = 'Hindari membaca seluruh teks dari awal. Baca kalimat pertama tiap paragraf lalu scan kata kunci!';
        } else if (state.toeflRecUnitId) {
          targetUnitId = state.toeflRecUnitId;
          const recU = (APP_DATA.toefl && APP_DATA.toefl.units) ? APP_DATA.toefl.units.find(u => u.id === targetUnitId) : null;
          if (recU) {
            badgeText = 'REKOMENDASI DIAGNOSTIK LUCA';
            titleText = (recU.title || 'Modul Rekomendasi').replace(/^[\p{Extended_Pictographic}\u200d\uFE0F\uD800-\uDFFF\s]+/u, '').trim();
            descText = 'Modul ini dipilih otomatis sesuai kelemahan terbesarmu saat tes diagnostik.';
          }
        }

        const rpcBadge = document.getElementById('rpc-badge');
        const rpcTitle = document.getElementById('rpc-title');
        const rpcDesc = document.getElementById('rpc-desc');
        const rpcBtn = document.getElementById('rpc-action-btn');

        if (rpcBadge) rpcBadge.textContent = badgeText;
        if (rpcTitle) rpcTitle.textContent = titleText;
        if (rpcDesc) rpcDesc.textContent = descText;
        if (rpcBtn) {
          rpcBtn.onclick = () => {
            const uObj = (APP_DATA.toefl && APP_DATA.toefl.units) ? APP_DATA.toefl.units.find(u => u.id === targetUnitId) : null;
            if (uObj && uObj.lessons && uObj.lessons.length) {
              startLesson('toefl', uObj.id, uObj.lessons[0].id);
            } else {
              showView('toefl-map');
            }
          };
        }
        prescCard.style.display = 'block';
      } else {
        prescCard.style.display = 'none';
      }
    }

    // 📘 Unit Completion Card (Buku Catatan & Tips Modul)
    const unitCompleteCard = document.getElementById('result-unit-complete-card');
    if (unitCompleteCard) {
      const isUnitAllDone = unit && unit.lessons && unit.lessons.every(l => state.completedLessons.includes(l.id));
      if (isUnitAllDone && isPerfect) {
        const titleEl = document.getElementById('rucc-unit-title');
        if (titleEl) {
          const cleanUName = (unit.title || 'Materi Modul').replace(/^[\p{Extended_Pictographic}\u200d\uFE0F\uD800-\uDFFF\s]+/u, '').trim();
          titleEl.textContent = cleanUName;
        }
        const openNotesBtn = document.getElementById('rucc-open-notes-btn');
        if (openNotesBtn) {
          openNotesBtn.onclick = () => {
            openUnitNotesModal(lang, unit.id);
          };
        }
        unitCompleteCard.style.display = 'block';
      } else {
        unitCompleteCard.style.display = 'none';
      }
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
  if (alertEl) {
    alertEl.className = 'auth-alert hidden';
    alertEl.style.display = 'none';
  }

  if (tab === 'login') {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
    if (formLogin) {
      formLogin.classList.remove('hidden');
      formLogin.style.display = 'block';
    }
    if (formRegister) {
      formRegister.classList.add('hidden');
      formRegister.style.display = 'none';
    }
  } else {
    if (tabRegister) tabRegister.classList.add('active');
    if (tabLogin) tabLogin.classList.remove('active');
    if (formRegister) {
      formRegister.classList.remove('hidden');
      formRegister.style.display = 'block';
    }
    if (formLogin) {
      formLogin.classList.add('hidden');
      formLogin.style.display = 'none';
    }
  }
}

function showAuthAlert(msg, type = 'error') {
  const alertEl = document.getElementById('auth-alert');
  if (!alertEl) return;
  alertEl.textContent = msg;
  alertEl.className = `auth-alert ${type}`;
  alertEl.style.display = 'block';
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  if (btn) {
    const icon = btn.querySelector('.eye-icon') || btn;
    if (isPassword) {
      icon.textContent = '🙈';
      btn.setAttribute('aria-label', 'Sembunyikan password');
      btn.setAttribute('title', 'Sembunyikan password');
    } else {
      icon.textContent = '👁️';
      btn.setAttribute('aria-label', 'Lihat password');
      btn.setAttribute('title', 'Lihat password');
    }
  }

  // Preserve focus
  try { input.focus(); } catch (_) {}
}
window.togglePasswordVisibility = togglePasswordVisibility;

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
      setTimeout(checkAndPromptWelcomeReview, 700);
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
    setTimeout(checkAndPromptWelcomeReview, 700);
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

function switchToEmailPasswordAuth() {
  closeGoogleModal();
  openAuthModal('login');
}
window.switchToEmailPasswordAuth = switchToEmailPasswordAuth;

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
      setTimeout(checkAndPromptWelcomeReview, 700);
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
  setTimeout(checkAndPromptWelcomeReview, 700);
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
      sessionStorage.removeItem('basaloka_review_prompted');
      sessionStorage.removeItem('basaloka_luca_greeted');
      sessionStorage.removeItem('basaloka_active_lesson');
      state.currentUser = null;
      state.userName = '';
      state.totalXp = 0;
      state.todayXp = 0;
      state.streak = 0;
      state.koreanXp = 0;
      state.englishXp = 0;
      state.toeflXp = 0;
      state.completedLessons = [];
      state.completedUnits = [];
      state.totalLessons = 0;
      state.koreanLessons = 0;
      state.englishLessons = 0;
      state.toeflLessons = 0;
      state.perfectScores = 0;
      saveState();
      updateNavStats();
      showToast('👋 Kamu sudah keluar dari akun.', 'info');
      showView('onboarding', false);
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

  try { sessionStorage.setItem('basaloka_active_dialogue', dialogueId); } catch (_) {}

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

      const partnerIsMan = currentDialogue.partner && (currentDialogue.partner.avatar === '👨' || /min-jun|oliver|man|pria|david/i.test(currentDialogue.partner.name));
      const partnerGender = partnerIsMan ? 'male' : 'female';

      // Render partner bubble
      const row = document.createElement('div');
      row.className = 'chat-row partner';
      row.innerHTML = `
        <div class="partner-avatar" style="width: 32px; height: 32px; font-size: 1.1rem; flex-shrink: 0;">
          ${currentDialogue.partner.avatar}
        </div>
        <div class="chat-bubble">
          <div class="chat-text-main">
            <button class="chat-audio-btn" onclick="speak('${turn.text.replace(/'/g, "\\'")}', '${turn.ttsLang}', 0.88, '${partnerGender}')" title="Dengarkan pengucapan">🔊</button>
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
      speak(turn.text, turn.ttsLang, 0.88, partnerGender);

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
      try { sessionStorage.removeItem('basaloka_active_dialogue'); } catch (_) {}
      showView(returnTarget);
    }
  });
}

function finishDialogue() {
  try { sessionStorage.removeItem('basaloka_active_dialogue'); } catch (_) {}
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
    const line1 = q.dialogue && q.dialogue[0] ? q.dialogue[0] : { speaker: 'man', text: '' };
    const line2 = q.dialogue && q.dialogue[1] ? q.dialogue[1] : null;
    const safeLine1Text = (line1.text || '').replace(/'/g, "\\'");
    const safeLine1Speaker = line1.speaker || 'man';
    const safeLine2Text = (line2 ? line2.text : '').replace(/'/g, "\\'");
    const safeLine2Speaker = line2 ? line2.speaker : 'woman';
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
              <button class="btn-exam-play" id="btn-exam-audio" onclick="playExamConvoAudio(${index}, '${safeLine1Speaker}', '${safeLine1Text}', '${safeLine2Speaker}', '${safeLine2Text}', '${safeNarratorText}')">
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

function playExamConvoAudio(qIndex, spk1Role, spk1Text, spk2Role, spk2Text, narratorText) {
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

  if (btn) {
    btn.disabled = true;
    btn.classList.add('playing');
  }
  if (icon) icon.textContent = '🔊';
  if (text) text.textContent = 'Sedang Memutar... (Hanya 1x)';
  if (wave) wave.style.display = 'inline-flex';

  const isWoman1 = (spk1Role === 'woman' || spk1Role === 'female');
  const gender1 = isWoman1 ? 'female' : 'male';

  const isWoman2 = (spk2Role === 'woman' || spk2Role === 'female');
  const gender2 = isWoman2 ? 'female' : 'male';

  // Step 1: Speaker 1 in chronological sequence
  if (status) status.textContent = `Memutar pembicara 1 (${isWoman1 ? 'Wanita' : 'Pria'})...`;

  speakWithVoice(spk1Text, 'en-US', { gender: gender1 }, () => {
    if (!toeflSimState.isPlayingAudio) return;

    toeflSimState.audioTimeout = setTimeout(() => {
      if (!toeflSimState.isPlayingAudio) return;

      // Step 2: Speaker 2 in chronological sequence
      if (spk2Text) {
        if (status) status.textContent = `Memutar pembicara 2 (${isWoman2 ? 'Wanita' : 'Pria'})...`;

        speakWithVoice(spk2Text, 'en-US', { gender: gender2, cancelPrevious: false }, () => {
          if (!toeflSimState.isPlayingAudio) return;

          toeflSimState.audioTimeout = setTimeout(() => {
            if (!toeflSimState.isPlayingAudio) return;

            // Step 3: Narrator
            if (status) status.textContent = 'Narator membacakan pertanyaan...';

            speakWithVoice(narratorText, 'en-US', { gender: 'neutral', cancelPrevious: false }, () => {
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
          }, 600);
        });
      } else {
        toeflSimState.audioTimeout = setTimeout(() => {
          if (!toeflSimState.isPlayingAudio) return;
          if (status) status.textContent = 'Narator membacakan pertanyaan...';
          speakWithVoice(narratorText, 'en-US', { pitch: 0.98, rate: 0.90, gender: 'neutral', cancelPrevious: false }, () => {
            toeflSimState.isPlayingAudio = false;
            if (btn) {
              btn.disabled = true;
              btn.classList.remove('playing');
              btn.classList.add('played-locked');
              btn.innerHTML = '<span id="exam-play-icon">🔒</span> <span id="exam-play-text">Audio Selesai (Hanya 1x Putar Sesuai Aturan Ujian)</span>';
            }
            if (wave) wave.style.display = 'none';
          });
        }, 600);
      }
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

  // Persist official exam score and refresh live predictor
  state.lastExamScore = {
    totalScore,
    scaleL,
    scaleS,
    scaleR,
    correctL,
    totalL,
    correctS,
    totalS,
    correctR,
    totalR,
    date: Date.now()
  };
  state.toeflLastPredictedScore = totalScore;

  saveState();
  updateNavStats();
  updateToeflPredictorUI();

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

// ─── ROUTING & PERSISTENCE ────────────────────────────────────
function resolveInitialRoute() {
  if (!state.userName) {
    showView('onboarding', false);
    return;
  }

  const rawHash = (window.location.hash || '').replace(/^#/, '').trim();
  let route = rawHash;
  let queryParams = {};

  if (rawHash.includes('?')) {
    const parts = rawHash.split('?');
    route = parts[0];
    try {
      const searchParams = new URLSearchParams(parts[1]);
      searchParams.forEach((val, key) => { queryParams[key] = val; });
    } catch (_) {}
  }

  // 1. Resume active lesson if requested via hash or saved session
  if (route === 'lesson') {
    let lang = queryParams.lang;
    let unitId = queryParams.unit;
    let lessonId = queryParams.lesson;

    if (!lang || !unitId || !lessonId) {
      const savedLessonStr = sessionStorage.getItem('basaloka_active_lesson');
      if (savedLessonStr) {
        try {
          const parsed = JSON.parse(savedLessonStr);
          lang = parsed.lang;
          unitId = parsed.unitId;
          lessonId = parsed.lessonId;
        } catch (_) {}
      }
    }

    if (lang && unitId && lessonId && APP_DATA[lang]) {
      startLesson(lang, unitId, lessonId);
      return;
    }
  }

  // 2. Resume active dialogue
  if (route === 'dialogue') {
    const dialogueId = queryParams.id || sessionStorage.getItem('basaloka_active_dialogue');
    if (dialogueId && (APP_DATA.dialogues || []).some(d => d.id === dialogueId)) {
      startDialogue(dialogueId);
      return;
    }
    showView('dialogue-hub', false);
    return;
  }

  // 3. Known views
  const validViews = ['dashboard', 'korean-map', 'toefl-map', 'english-map', 'dialogue-hub', 'toefl-sim'];
  if (validViews.includes(route)) {
    showView(route, false);
    return;
  }

  // 4. Fallback to last saved view from localStorage or default dashboard
  const lastView = localStorage.getItem('basaloka_last_view');
  if (lastView && validViews.includes(lastView) && lastView !== 'onboarding') {
    showView(lastView, false);
  } else {
    showView('dashboard', false);
  }
}

window.resolveInitialRoute = resolveInitialRoute;

window.addEventListener('hashchange', () => {
  if (currentView === 'lesson' || currentView === 'toefl-sim') return;
  resolveInitialRoute();
});

// ─── INIT ─────────────────────────────────────────────────────
function initApp() {
  loadState();
  let hasValidUser = !!state.userName;
  if (!hasValidUser) {
    try {
      const rawUser = localStorage.getItem('basaloka_user');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed && (parsed.name || parsed.email)) {
          state.userName = parsed.name || parsed.email.split('@')[0];
          hasValidUser = true;
        }
      }
    } catch (_) {}
  }
  if (!hasValidUser && typeof currentUser !== 'undefined' && currentUser) {
    state.userName = currentUser.name || (currentUser.email ? currentUser.email.split('@')[0] : 'Sobat Loka');
    hasValidUser = true;
  }

  if (hasValidUser) {
    resolveInitialRoute();
    syncProgressFromCloud();
  } else {
    showView('onboarding', false);
  }
  checkPushStatus();
  setTimeout(showLucaGreetingSplash, 120);
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

// ─── 🔔 WEB PUSH NOTIFICATIONS (Pengingat 2x Sehari) ─────────
const VAPID_PUBLIC_KEY = 'BOA7Frh6Eh0d1auW2ALi7zlHEJEi2HSmxHHfFdYMRorqTfmvKpbEzvazpxxM8XoVT5K2Rok6Q9Xp_3aIDyN270I';
let currentPushSubscription = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function checkPushStatus() {
  const btn = document.getElementById('btn-enable-notif');
  const testBtn = document.getElementById('btn-test-notif');
  const statusText = document.getElementById('rcb-status-text');
  const badge = document.getElementById('rcb-badge');

  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    if (btn) {
      btn.textContent = 'Tidak Didukung Browser';
      btn.disabled = true;
    }
    if (statusText) statusText.textContent = 'Browser kamu tidak mendukung Web Push. Coba pasang (Install) BasaLoka di Chrome/Edge agar notifikasi aktif.';
    return;
  }

  try {
    const reg = await navigator.serviceWorker.ready;
    currentPushSubscription = await reg.pushManager.getSubscription();

    if (currentPushSubscription && Notification.permission === 'granted') {
      if (btn) {
        btn.innerHTML = '✅ Pengingat Aktif';
        btn.classList.add('active');
      }
      if (testBtn) testBtn.style.display = 'inline-flex';
      if (badge) badge.textContent = 'Aktif: 12:00 & 19:00';
      if (statusText) {
        statusText.innerHTML = 'Pengingat aktif! Notifikasi otomatis berbunyi pada <strong>12:00 WIB (Siang)</strong> dan <strong>19:00 WIB (Malam)</strong>.';
      }
    } else {
      if (btn) {
        btn.innerHTML = 'Aktifkan Pengingat 🔔';
        btn.classList.remove('active');
      }
      if (testBtn) testBtn.style.display = 'none';
      if (badge) badge.textContent = '12:00 & 19:00 WIB';
      if (statusText) {
        statusText.textContent = 'Dapatkan notifikasi otomatis di HP saat istirahat siang (12:00) & malam (19:00) agar streak belajarmu tidak putus!';
      }
    }
  } catch (err) {
    console.warn('Error checking push status:', err);
  }
}

async function enablePushNotifications() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    showToast('⚠️ Browser kamu belum mendukung Web Push Notifications.', 'error');
    return;
  }

  const btn = document.getElementById('btn-enable-notif');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) btn.innerHTML = 'Memproses... ⏳';

  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      showToast('⚠️ Izin notifikasi ditolak. Harap izinkan notifikasi di pengaturan browser/HP kamu.', 'error');
      if (btn) btn.innerHTML = originalText;
      return;
    }

    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();

    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
      });
    }

    currentPushSubscription = sub;

    // Send to backend
    const uid = (state.currentUser && state.currentUser.id) ? state.currentUser.id : null;
    const res = await fetch('/api/push-subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription: sub,
        timeSlot1: '12:00',
        timeSlot2: '19:00',
        userId: uid
      })
    });

    if (res.ok) {
      showToast('🎉 Pengingat berhasil diaktifkan! Notifikasi akan bunyi jam 12:00 Siang & 19:00 Malam.', 'success');
      checkPushStatus();
    } else {
      showToast('⚠️ Gagal menyimpan ke server, silakan coba lagi.', 'error');
      if (btn) btn.innerHTML = originalText;
    }
  } catch (err) {
    console.error('Error enabling push:', err);
    showToast('⚠️ Gagal mengaktifkan notifikasi: ' + err.message, 'error');
    if (btn) btn.innerHTML = originalText;
  }
}

async function sendTestPushNotification() {
  if (!currentPushSubscription) {
    showToast('Harap aktifkan pengingat terlebih dahulu!', 'info');
    return;
  }

  const testBtn = document.getElementById('btn-test-notif');
  if (testBtn) testBtn.innerHTML = 'Mengirim... 🚀';

  try {
    const res = await fetch('/api/send-reminder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        test: true,
        endpoint: currentPushSubscription.endpoint
      })
    });

    if (res.ok) {
      showToast('🔔 Notifikasi uji coba terkirim! Cek bilah status HP / layar kuncimu.', 'success');
    } else {
      showToast('⚠️ Gagal mengirim notifikasi uji coba.', 'error');
    }
  } catch (err) {
    showToast('⚠️ Terjadi kendala jaringan.', 'error');
  } finally {
    if (testBtn) testBtn.innerHTML = '🔔 Tes Bunyikan HP';
  }
}

window.enablePushNotifications = enablePushNotifications;
window.sendTestPushNotification = sendTestPushNotification;

// ─── SPACED REPETITION / WELCOME BACK 10-QUESTION REVIEW ────────
let welcomeReviewState = {
  active: false,
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  totalCount: 10,
  lessonTitle: '',
  startTime: 0
};

function findLessonInfoById(id) {
  if (!id || typeof APP_DATA === 'undefined') return null;
  for (const lang of ['korean', 'english', 'toefl']) {
    for (const u of (APP_DATA[lang]?.units || [])) {
      const l = (u.lessons || []).find(x => x.id === id);
      if (l) return { lesson: l, unit: u, lang };
    }
  }
  return null;
}

function shuffleReviewOptions(q) {
  const options = [...q.options];
  const correctText = options[q.answer];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return {
    ...q,
    options,
    answer: options.indexOf(correctText)
  };
}

function extractQuestionsFromLesson(lesson, lang) {
  const result = [];
  if (!lesson) return result;

  // 0. Checkpoint-loop lessons (TOEFL mastery checkpoints with rich question pools)
  if (Array.isArray(lesson.checkpoints)) {
    lesson.checkpoints.forEach(cp => {
      if (Array.isArray(cp.pool)) {
        cp.pool.forEach(q => {
          if (q && (q.q || q.dialogue) && Array.isArray(q.options) && q.options.length >= 2) {
            const parsed = (typeof parseQuizDialogue === 'function') ? parseQuizDialogue(q) : null;
            const hasD = parsed && parsed.hasDialogue;
            let dialogueArray = null;
            if (hasD) {
              if (Array.isArray(q.dialogue)) {
                dialogueArray = q.dialogue;
              } else if (parsed.speaker1 && parsed.speaker2) {
                dialogueArray = [parsed.speaker1, parsed.speaker2];
              } else if (parsed.speaker1) {
                dialogueArray = [parsed.speaker1];
              }
            }
            result.push({
              q: hasD ? (q.q || parsed.questionText) : q.q,
              options: [...q.options],
              answer: q.answer || 0,
              explanation: q.explanation || '',
              sourceLessonTitle: lesson.title,
              dialogue: dialogueArray,
              convoTitle: cp.title || lesson.title,
              passage: q.passage || null,
              audioText: q.ttsText || null,
              audioLang: lang === 'korean' ? 'ko-KR' : 'en-US'
            });
          }
        });
      }
    });
  }

  // 1. Regular quiz
  if (Array.isArray(lesson.quiz)) {
    lesson.quiz.forEach(q => {
      if (q && q.q && Array.isArray(q.options) && q.options.length >= 2) {
        const parsed = (typeof parseQuizDialogue === 'function') ? parseQuizDialogue(q) : null;
        const hasD = parsed && parsed.hasDialogue;
        let dialogueArray = null;
        if (hasD) {
          if (Array.isArray(parsed.dialogue)) {
            dialogueArray = parsed.dialogue;
          } else if (parsed.speaker1 && parsed.speaker2) {
            dialogueArray = [parsed.speaker1, parsed.speaker2];
          } else if (parsed.speaker1) {
            dialogueArray = [parsed.speaker1];
          }
        }
        result.push({
          q: hasD ? (q.q || parsed.questionText) : q.q,
          options: [...q.options],
          answer: q.answer || 0,
          explanation: q.explanation || '',
          sourceLessonTitle: lesson.title,
          dialogue: dialogueArray,
          convoTitle: lesson.title,
          audioText: q.ttsText || (lang === 'korean' ? q.char : null),
          audioLang: lang === 'korean' ? 'ko-KR' : 'en-US'
        });
      }
    });
  }

  // 2. Questions in fill-blank / reading-quiz
  if (Array.isArray(lesson.questions)) {
    lesson.questions.forEach(q => {
      const text = q.text || q.q || q.question;
      if (text && Array.isArray(q.options) && q.options.length >= 2) {
        result.push({
          q: text,
          options: [...q.options],
          answer: q.answer || 0,
          explanation: q.explanation || '',
          sourceLessonTitle: lesson.title,
          passage: lesson.passage || null,
          passageTitle: lesson.title,
          audioText: null,
          audioLang: lang === 'korean' ? 'ko-KR' : 'en-US'
        });
      }
    });
  }

  // 3. Conversation-listening
  if (Array.isArray(lesson.conversations)) {
    lesson.conversations.forEach(c => {
      const qText = c.question || c.title || 'Pilih jawaban yang paling tepat sesuai percakapan:';
      if (Array.isArray(c.options) && c.options.length >= 2) {
        result.push({
          q: qText,
          options: [...c.options],
          answer: c.answer || 0,
          explanation: c.explanation || '',
          sourceLessonTitle: lesson.title,
          convoTitle: c.title,
          dialogue: c.dialogue,
          narrator: c.narrator,
          audioLang: 'en-US'
        });
      }
    });
  }

  // 4. Cards (if needed as MCQs)
  if (Array.isArray(lesson.cards) && lesson.cards.length >= 2) {
    lesson.cards.forEach((c, i) => {
      if (c && c.front && (c.exampleMeaning || c.tip || c.pronunciation)) {
        const correctOpt = c.exampleMeaning || c.pronunciation || c.tip;
        const otherCards = lesson.cards.filter((_, idx) => idx !== i);
        const distractor1 = otherCards[0]?.exampleMeaning || otherCards[0]?.pronunciation || 'Pilihan lain';
        const distractor2 = otherCards[1]?.exampleMeaning || otherCards[1]?.pronunciation || 'Pilihan pengecoh';
        result.push({
          q: `Apa arti atau pelafalan yang tepat untuk: "${c.front}"?`,
          options: [correctOpt, distractor1, distractor2],
          answer: 0,
          explanation: c.tip || `Pelafalan: ${c.pronunciation || ''}`,
          sourceLessonTitle: lesson.title,
          audioText: c.ttsText || c.front,
          audioLang: c.ttsLang || (lang === 'korean' ? 'ko-KR' : 'en-US')
        });
      }
    });
  }

  return result;
}

function collectReviewQuestions(completedLessonIds, targetCount = 10) {
  if (!completedLessonIds || completedLessonIds.length === 0) return [];

  let pool = [];
  const reversed = [...completedLessonIds].reverse();

  for (const lid of reversed) {
    const info = findLessonInfoById(lid);
    if (info) {
      const qs = extractQuestionsFromLesson(info.lesson, info.lang);
      pool.push(...qs);
      if (pool.length >= targetCount * 3) break;
    }
  }

  const seen = new Set();
  const deduped = [];
  for (const item of pool) {
    const dialogueKey = item.dialogue ? item.dialogue.map(d => (d.text || '')).join(' ') : '';
    const passageKey = item.passage ? item.passage.slice(0, 40) : '';
    const key = (dialogueKey + ' ' + passageKey + ' ' + (item.q || '')).trim().toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      deduped.push(item);
    }
  }

  if (deduped.length === 0) return [];

  // Shuffle so warm-up questions are fresh and varied every time
  const shuffledPool = [...deduped].sort(() => 0.5 - Math.random());

  let finalQuestions = [];
  while (finalQuestions.length < targetCount) {
    for (const q of shuffledPool) {
      finalQuestions.push(shuffleReviewOptions(q));
      if (finalQuestions.length >= targetCount) break;
    }
  }

  return finalQuestions.slice(0, targetCount);
}

function checkAndPromptWelcomeReview() {
  if (sessionStorage.getItem('basaloka_review_prompted') === 'true') return;
  if (!state.completedLessons || state.completedLessons.length === 0) return;
  if (!state.userName && !state.currentUser) return;

  const lastLessonId = state.completedLessons[state.completedLessons.length - 1];
  const lessonInfo = findLessonInfoById(lastLessonId);
  if (!lessonInfo) return;

  sessionStorage.setItem('basaloka_review_prompted', 'true');

  const nameEl = document.getElementById('wr-user-name');
  if (nameEl) nameEl.textContent = state.userName || 'Sobat Loka';

  const titleEl = document.getElementById('wr-last-lesson-title');
  if (titleEl) titleEl.textContent = lessonInfo.lesson.title;

  const subEl = document.getElementById('wr-last-lesson-sub');
  if (subEl) subEl.textContent = `${lessonInfo.unit.title} • ${lessonInfo.lang.toUpperCase()}`;

  const modal = document.getElementById('welcome-review-modal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeWelcomeReviewModal() {
  const modal = document.getElementById('welcome-review-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function startWelcomeReviewSession() {
  closeWelcomeReviewModal();
  const questions = collectReviewQuestions(state.completedLessons, 3);
  if (!questions || questions.length === 0) {
    showInteractiveAlert({
      title: 'Materi Belum Cukup',
      message: 'Selesaikan minimal 1 materi latihan terlebih dahulu untuk membuka mode buka kunci!',
      type: 'info'
    });
    return;
  }

  const lastLessonId = state.completedLessons[state.completedLessons.length - 1];
  const lessonInfo = findLessonInfoById(lastLessonId);

  welcomeReviewState = {
    active: true,
    questions,
    currentIndex: 0,
    correctCount: 0,
    totalCount: questions.length,
    lessonTitle: lessonInfo ? lessonInfo.lesson.title : 'Pelajaran Terakhir',
    startTime: Date.now()
  };

  showView('lesson', false);

  const quitBtn = document.getElementById('lesson-quit-btn');
  if (quitBtn) {
    quitBtn.onclick = () => {
      showConfirmPopup({
        icon: '🔒',
        type: 'warning',
        title: 'Buka Kunci Belum Selesai!',
        message: 'Tinggal sedikit lagi! Selesaikan 3 soal kilat ini (~45 detik) untuk membuka kunci Beranda & klaim bonus +20 XP.',
        confirmText: 'Lanjut Kuis (Tinggal Dikit)',
        cancelText: 'Keluar ke Halaman Awal',
        onConfirm: () => {},
        onCancel: () => {
          stopReviewAudio();
          welcomeReviewState.active = false;
          showView('onboarding', false);
        }
      });
    };
  }

  renderReviewQuestion();
}

let isPlayingReviewConvo = false;
let reviewAudioQueueTimeout = null;
let reviewTranscriptVisible = true;

function stopReviewAudio() {
  if (isPlayingReviewConvo) {
    if (speechSynth) speechSynth.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (reviewAudioQueueTimeout) clearTimeout(reviewAudioQueueTimeout);
    isPlayingReviewConvo = false;
    const btnText = document.getElementById('play-review-text');
    const btnIcon = document.getElementById('play-review-icon');
    if (btnIcon) btnIcon.textContent = '▶️';
    if (btnText) btnText.textContent = 'Putar Percakapan Audio';
  }
}

function toggleReviewTranscript() {
  reviewTranscriptVisible = !reviewTranscriptVisible;
  const box = document.getElementById('review-transcript-box');
  const icon = document.getElementById('rev-transcript-btn-icon');
  const text = document.getElementById('rev-transcript-btn-text');
  if (box) box.style.display = reviewTranscriptVisible ? 'flex' : 'none';
  if (icon) icon.textContent = reviewTranscriptVisible ? '🙈' : '👁️';
  if (text) text.textContent = reviewTranscriptVisible ? 'Sembunyikan Naskah' : 'Buka Naskah & Terjemahan';
}

function playReviewDialogueAudio() {
  if (!welcomeReviewState.active) return;
  const q = welcomeReviewState.questions[welcomeReviewState.currentIndex];
  if (!q || !q.dialogue || !q.dialogue.length) return;

  const btnText = document.getElementById('play-review-text');
  const btnIcon = document.getElementById('play-review-icon');

  if (isPlayingReviewConvo) {
    stopReviewAudio();
    return;
  }

  isPlayingReviewConvo = true;
  if (btnIcon) btnIcon.textContent = '⏹️';
  if (btnText) btnText.textContent = 'Hentikan Audio';

  const resetBtn = () => {
    isPlayingReviewConvo = false;
    if (btnIcon) btnIcon.textContent = '▶️';
    if (btnText) btnText.textContent = 'Putar Percakapan Audio';
  };

  const line1 = q.dialogue[0];
  const line2 = q.dialogue.length > 1 ? q.dialogue[1] : null;
  const narratorText = q.narrator || '';

  const getVoiceOpts = (line) => {
    const isWoman = line && (line.speaker === 'woman' || line.speaker === 'female' || (line.label && /wanita|mahasiswi|girl|woman/i.test(line.label)));
    return {
      gender: isWoman ? 'female' : 'male',
      cancelPrevious: false
    };
  };

  if (line1 && line1.text) {
    speakWithVoice(line1.text, 'en-US', getVoiceOpts(line1), () => {
      if (!isPlayingReviewConvo) return;
      reviewAudioQueueTimeout = setTimeout(() => {
        if (!isPlayingReviewConvo) return;
        if (line2 && line2.text) {
          speakWithVoice(line2.text, 'en-US', getVoiceOpts(line2), () => {
            if (!isPlayingReviewConvo) return;
            if (narratorText) {
              reviewAudioQueueTimeout = setTimeout(() => {
                if (!isPlayingReviewConvo) return;
                speakWithVoice(narratorText, 'en-US', { pitch: 0.98, rate: 0.90, gender: 'neutral', cancelPrevious: false }, resetBtn);
              }, 600);
            } else {
              resetBtn();
            }
          });
        } else if (narratorText) {
          reviewAudioQueueTimeout = setTimeout(() => {
            if (!isPlayingReviewConvo) return;
            speakWithVoice(narratorText, 'en-US', { pitch: 0.98, rate: 0.90, gender: 'neutral', cancelPrevious: false }, resetBtn);
          }, 600);
        } else {
          resetBtn();
        }
      }, 500);
    });
  } else {
    resetBtn();
  }
}

function renderReviewQuestion() {
  const content = document.getElementById('lesson-content');
  if (!content || !welcomeReviewState.active) return;

  stopReviewAudio();
  reviewTranscriptVisible = true;

  const q = welcomeReviewState.questions[welcomeReviewState.currentIndex];
  if (!q) {
    finishWelcomeReviewSession();
    return;
  }

  const progressPct = Math.round((welcomeReviewState.currentIndex / welcomeReviewState.totalCount) * 100);
  const fill = document.getElementById('lesson-progress-fill');
  if (fill) fill.style.width = `${progressPct}%`;

  let contextHtml = '';
  // 1. Dialogue context (conversation listening & short dialogue)
  if (q.dialogue && Array.isArray(q.dialogue) && q.dialogue.length) {
    contextHtml = `
      <div class="convo-hero-card" style="margin-bottom: 20px; text-align: left; background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 18px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
        <div class="convo-hero-header" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; background: rgba(56, 189, 248, 0.12); border-bottom: 1px solid rgba(56, 189, 248, 0.25);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">🎧</span>
            <span style="font-weight: 800; color: #38bdf8; font-size: 0.88rem; letter-spacing: 0.5px;">SKENARIO PERCAKAPAN: ${escapeHtml(q.convoTitle || 'Listening Part A/B')}</span>
          </div>
          <span style="font-size: 0.75rem; color: #94a3b8;">Dengarkan / baca percakapan sebelum menjawab</span>
        </div>
        <div class="convo-hero-body" style="padding: 16px 18px;">
          <div class="convo-audio-controls" style="display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;">
            <button type="button" class="btn-play-all" id="btn-play-review-convo" onclick="playReviewDialogueAudio()" style="background: linear-gradient(135deg, #0284c7, #2563eb); border: none; padding: 10px 20px; border-radius: 50px; color: #ffffff; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.35);">
              <span class="play-icon" id="play-review-icon">▶️</span>
              <span id="play-review-text">Putar Percakapan Audio</span>
            </button>
            <button type="button" class="btn-transcript-toggle" id="btn-review-transcript-toggle" onclick="toggleReviewTranscript()" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); padding: 10px 16px; border-radius: 50px; color: #e2e8f0; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              <span id="rev-transcript-btn-icon">🙈</span>
              <span id="rev-transcript-btn-text">Sembunyikan Naskah</span>
            </button>
          </div>

          <!-- Dialogue Bubbles List -->
          <div class="transcript-bubbles-list" id="review-transcript-box" style="display: flex; flex-direction: column; gap: 10px;">
            ${q.dialogue.map(d => {
              const isW = (d.speaker === 'woman' || d.speaker === 'female' || (d.label && /wanita|mahasiswi|girl|woman/i.test(d.label)));
              return `
                <div class="transcript-bubble ${isW ? 'woman' : 'man'}" style="padding: 12px 16px; border-radius: 14px; background: rgba(255, 255, 255, 0.04); border-left: 3.5px solid ${isW ? '#ec4899' : '#38bdf8'};">
                  <div class="tb-speaker" style="font-size: 0.82rem; font-weight: 700; margin-bottom: 4px; color: ${isW ? '#f472b6' : '#38bdf8'};">
                    ${d.avatar || (isW ? '👩' : '👨')} ${escapeHtml(d.label || (isW ? 'Wanita' : 'Pria'))}:
                  </div>
                  <div class="tb-en" style="font-size: 0.95rem; color: #f8fafc; line-height: 1.5; font-weight: 500;">
                    "${escapeHtml(d.text)}"
                  </div>
                  ${d.translation ? `
                    <div class="tb-id" style="font-size: 0.82rem; color: #94a3b8; margin-top: 4px; line-height: 1.4;">
                      🇮🇩 ${escapeHtml(d.translation)}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (q.passage) {
    contextHtml = `
      <div class="reading-passage-card" style="margin-bottom: 20px; text-align: left; background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(99, 102, 241, 0.3); border-radius: 18px; padding: 18px 20px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
        <div style="font-size: 0.84rem; font-weight: 800; color: #818cf8; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
          <span>📖</span>
          <span>TEKS BACAAN: ${escapeHtml(q.passageTitle || 'Reading Comprehension')}</span>
        </div>
        <div style="font-size: 0.93rem; color: #cbd5e1; line-height: 1.65; max-height: 240px; overflow-y: auto; padding-right: 8px;">
          ${escapeHtml(q.passage)}
        </div>
      </div>
    `;
  } else if (q.audioText) {
    const safeAudio = escapeHtml(q.audioText).replace(/'/g, "\\'");
    const audioLang = q.audioLang || 'en-US';
    contextHtml = `
      <div style="margin-bottom: 18px; text-align: center;">
        <button type="button" class="btn-card" style="padding: 10px 22px; border-radius: 50px; display: inline-flex; align-items: center; gap: 8px; font-weight: 700; cursor: pointer; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8;" onclick="speakReviewAudio('${safeAudio}', '${audioLang}')">
          🔊 Putar Audio Soal
        </button>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="quiz-wrapper">
      <div class="review-quiz-badge-bar">
        <span class="review-tag-pill">🔒 Buka Kunci Harian (${welcomeReviewState.currentIndex + 1}/${welcomeReviewState.totalCount})</span>
        <span class="review-source-pill">📚 ${escapeHtml(q.sourceLessonTitle || welcomeReviewState.lessonTitle)}</span>
      </div>
      ${contextHtml}
      <div class="quiz-question">${escapeHtml(q.q)}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" id="rev-opt-${i}" onclick="answerReviewQuiz(${i}, ${q.answer})">
            ${escapeHtml(opt)}
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback-container"></div>
    </div>
  `;
}

function speakReviewAudio(text, lang) {
  if (lang === 'ko-KR') {
    speakKorean(text);
  } else {
    speakEnglish(text);
  }
}

function answerReviewQuiz(selectedIndex, correctIndex) {
  stopReviewAudio();
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === correctIndex;
  const q = welcomeReviewState.questions[welcomeReviewState.currentIndex];
  const correctText = (q && q.options && q.options[correctIndex]) || (opts[correctIndex] ? opts[correctIndex].innerText : '');
  const selectedText = (q && q.options && q.options[selectedIndex]) || (opts[selectedIndex] ? opts[selectedIndex].innerText : '');

  if (isCorrect) {
    welcomeReviewState.correctCount++;
    if (opts[selectedIndex]) opts[selectedIndex].classList.add('correct');
    playSuccessEffect();
  } else {
    if (opts[selectedIndex]) opts[selectedIndex].classList.add('wrong');
    if (opts[correctIndex]) opts[correctIndex].classList.add('correct');
  }

  const container = document.getElementById('quiz-feedback-container');
  if (container) {
    const isLast = welcomeReviewState.currentIndex + 1 >= welcomeReviewState.totalCount;
    const nextBtnLabel = isLast ? '🎉 Buka Kunci Beranda & Klaim +20 XP 🔓' : `Lanjut ke Soal Berikutnya (${welcomeReviewState.currentIndex + 2}/${welcomeReviewState.totalCount}) →`;
    container.innerHTML = `
      <div class="quiz-feedback-box ${isCorrect ? 'fb-correct' : 'fb-wrong'}" style="margin-top: 18px;">
        <div class="fb-header">
          <span class="fb-icon">${isCorrect ? '🎉' : '💡'}</span>
          <div class="fb-text-wrap">
            <div class="fb-title">${isCorrect ? 'Tepat Sekali! Ingatanmu Mantap!' : 'Hampir Benar! Perhatikan Kunci Jawabannya:'}</div>
            <div class="fb-breakdown-row" style="margin-top: 6px;">
              ${!isCorrect ? `<span class="fb-tag wrong">❌ Pilihanmu: ${escapeHtml(selectedText)}</span>` : ''}
              <span class="fb-tag correct">✅ Kunci Jawaban Benar: ${escapeHtml(correctText)}</span>
            </div>
            ${q.explanation ? `
              <div class="fb-explanation-detail" style="margin-top: 10px;">
                <div class="fb-exp-title">🔍 Penjelasan Materi:</div>
                <div class="fb-exp-text">${escapeHtml(q.explanation)}</div>
              </div>
            ` : ''}
          </div>
        </div>
        <button type="button" class="btn-primary" id="btn-review-next" onclick="nextReviewQuestion()" style="margin-top: 16px; width: 100%; padding: 13px; font-weight: 800; border-radius: 14px; font-size: 0.98rem;">
          ${nextBtnLabel}
        </button>
      </div>
    `;
  }
}

function nextReviewQuestion() {
  stopReviewAudio();
  welcomeReviewState.currentIndex++;
  if (welcomeReviewState.currentIndex < welcomeReviewState.totalCount) {
    renderReviewQuestion();
  } else {
    finishWelcomeReviewSession();
  }
}

function finishWelcomeReviewSession() {
  stopReviewAudio();
  welcomeReviewState.active = false;
  const fill = document.getElementById('lesson-progress-fill');
  if (fill) fill.style.width = '100%';

  // Reward +20 XP for unlocking the gate
  const xpReward = 20;
  state.totalXp = (state.totalXp || 0) + xpReward;
  state.todayXp = (state.todayXp || 0) + xpReward;
  saveState();
  updateNavStats();
  try { launchConfetti(); } catch (_) {}

  const accuracy = Math.round((welcomeReviewState.correctCount / welcomeReviewState.totalCount) * 100);
  const duration = Math.max(1, Math.round((Date.now() - welcomeReviewState.startTime) / 1000));

  const content = document.getElementById('lesson-content');
  if (!content) return;

  content.innerHTML = `
    <div class="review-score-card">
      <div class="rsc-icon">🔓</div>
      <h2 class="rsc-title">Gerbang Beranda Terbuka!</h2>
      <p class="rsc-sub">Luar biasa! 3 soal kilat dari materi <strong>${escapeHtml(welcomeReviewState.lessonTitle)}</strong> tuntas kamu kuasai. Akses penuh ke seluruh fitur BasaLoka kini terbuka!</p>

      <div class="rsc-stats-grid">
        <div class="rsc-stat-box">
          <span class="rsc-stat-val">+${xpReward} XP</span>
          <span class="rsc-stat-label">Bonus Buka Kunci</span>
        </div>
        <div class="rsc-stat-box">
          <span class="rsc-stat-val">${accuracy}%</span>
          <span class="rsc-stat-label">${welcomeReviewState.correctCount}/${welcomeReviewState.totalCount} Benar</span>
        </div>
        <div class="rsc-stat-box">
          <span class="rsc-stat-val">${duration}s</span>
          <span class="rsc-stat-label">Waktu Kilat</span>
        </div>
      </div>

      <div class="rsc-actions">
        <button type="button" class="btn-primary" onclick="showView('dashboard')" style="width: 100%; padding: 14px 28px; font-size: 1.05rem; font-weight: 800; border-radius: 16px;">
          🚀 Jelajahi Beranda BasaLoka
        </button>
      </div>
    </div>
  `;
}

// Window bindings
window.checkAndPromptWelcomeReview = checkAndPromptWelcomeReview;
window.closeWelcomeReviewModal = closeWelcomeReviewModal;
window.startWelcomeReviewSession = startWelcomeReviewSession;
window.answerReviewQuiz = answerReviewQuiz;
window.nextReviewQuestion = nextReviewQuestion;
window.speakReviewAudio = speakReviewAudio;
window.playReviewDialogueAudio = playReviewDialogueAudio;
window.toggleReviewTranscript = toggleReviewTranscript;
window.stopReviewAudio = stopReviewAudio;

// ─── LUCA INTERACTIVE GREETING / SPLASH SCREEN ───────────────
const LUCA_NUGGETS = [
  'Konsisten 10 menit sehari lebih dahsyat daripada belajar 3 jam seminggu!',
  'Tips TOEFL: 85% kunci jawaban Listening Part A ada di ucapan orang kedua!',
  'Fun Fact: Huruf vokal Hangul terinspirasi dari Langit (•), Bumi (ㅡ), dan Manusia (ㅣ)!',
  'Tips Grammar: Bentuk "Neither... nor..." selalu ikut subjek terdekatnya!',
  'Jurus TOEFL: Hindari opsi jawaban yang bunyinya mirip audio. Biasanya itu jebakan sinonim!',
  'Setiap soal yang kamu kerjakan hari ini membawamu selangkah lebih dekat ke skor 550+!',
  'Belajar bahasa itu seperti olahraga: otot ingatanmu makin kuat kalau dilatih tiap hari!'
];

let lucaAutoTimer = null;
let isLucaGreetingActive = false;

function showLucaGreetingSplash() {
  if (sessionStorage.getItem('basaloka_luca_greeted') === 'true') {
    setTimeout(checkAndPromptWelcomeReview, 600);
    return;
  }

  const overlay = document.getElementById('luca-greeting-overlay');
  if (!overlay) {
    setTimeout(checkAndPromptWelcomeReview, 600);
    return;
  }

  sessionStorage.setItem('basaloka_luca_greeted', 'true');
  isLucaGreetingActive = true;

  const titleEl = document.getElementById('luca-greeting-title');
  const subEl = document.getElementById('luca-greeting-sub');
  const streakPill = document.getElementById('luca-streak-pill');
  const factText = document.getElementById('luca-fun-fact-text');
  const fill = document.getElementById('luca-progress-fill');

  const rawUser = state.userName || (state.currentUser && (state.currentUser.username || state.currentUser.name));
  if (rawUser) {
    if (titleEl) titleEl.innerHTML = `Halo, <span>${escapeHtml(rawUser)}</span>! 👋`;
    if (subEl) subEl.innerHTML = `Aku <strong>Luca</strong>, senang melihatmu kembali! Siap asah kemampuan bahasa hari ini? ✨`;
    if (streakPill && (state.streak || 0) > 0) {
      streakPill.style.display = 'inline-block';
      streakPill.textContent = `🔥 Streak ${state.streak} Hari`;
    }
  } else {
    if (titleEl) titleEl.innerHTML = `Halo, <span>Sobat Loka</span>! 👋`;
    if (subEl) subEl.innerHTML = `Kenalin, aku <strong>Luca</strong>! Pemandu belajarmu keliling dunia bahasa & TOEFL 🌍✨`;
    if (streakPill) streakPill.style.display = 'none';
  }

  if (factText) {
    const randomNugget = LUCA_NUGGETS[Math.floor(Math.random() * LUCA_NUGGETS.length)];
    factText.textContent = randomNugget;
  }

  overlay.classList.remove('fade-out');
  overlay.style.display = 'flex';

  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => {
      if (isLucaGreetingActive) fill.style.width = '100%';
    }, 50);
  }

  lucaAutoTimer = setTimeout(dismissLucaGreeting, 2500);
}

function dismissLucaGreeting() {
  if (!isLucaGreetingActive) return;
  isLucaGreetingActive = false;
  if (lucaAutoTimer) {
    clearTimeout(lucaAutoTimer);
    lucaAutoTimer = null;
  }

  const overlay = document.getElementById('luca-greeting-overlay');
  if (overlay) {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.classList.remove('fade-out');
      if (typeof checkAndPromptWelcomeReview === 'function') {
        setTimeout(checkAndPromptWelcomeReview, 350);
      }
    }, 400);
  }
}

function handleLucaOverlayClick(e) {
  dismissLucaGreeting();
}

window.showLucaGreetingSplash = showLucaGreetingSplash;
window.dismissLucaGreeting = dismissLucaGreeting;
window.handleLucaOverlayClick = handleLucaOverlayClick;




