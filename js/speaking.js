/**
 * BasaLoka - Luca AI Speaking Buddy
 * 1-on-1 Immersive Real Voice Call (True Speaking Mode)
 */

(function () {
  const speakingState = {
    activeTopic: null,
    messages: [],
    isRecording: false,
    isSpeaking: false,
    timerInterval: null,
    secondsElapsed: 0,
    recognition: null,
    isSending: false,
    currentLucaText: '',
    currentLucaTranslation: '',
    userTurnsCount: 0
  };

  // ─── INITIALIZATION ───────────────────────────────────────────
  async function initSpeakingBuddy() {
    try {
      const res = await fetch('/api/speaking-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      if (res.ok) {
        const data = await res.json();
        if (data.topic) {
          speakingState.activeTopic = data.topic;
          renderSpeakingBannerTopic(data.topic);
        }
      }
    } catch (err) {
      console.warn('Speaking init error:', err);
    }
  }

  function renderSpeakingBannerTopic(topic) {
    const titleEl = document.getElementById('speaking-banner-topic-title');
    if (titleEl) titleEl.textContent = topic.title;
  }

  // ─── MODAL CONTROLLERS ─────────────────────────────────────────
  async function openSpeakingBuddyModal() {
    speakingState.messages = [];
    speakingState.secondsElapsed = 0;
    speakingState.userTurnsCount = 0;

    const modal = document.getElementById('speaking-buddy-modal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
    }

    // Reset status & subtitles
    updateCallStatus('Menghubungkan panggilan...', false, false);
    const subText = document.getElementById('voice-call-current-text');
    if (subText) subText.textContent = '"Menghubungkan panggilan suara dengan Luca..."';
    hideSubActions();
    hideRecastCard();
    hideHintsDrawer();

    startSpeakingTimer();
    setupSpeechRecognition();

    try {
      const res = await fetch('/api/speaking-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: speakingState.activeTopic ? speakingState.activeTopic.id : undefined,
          userName: (window.state && window.state.userName) || ''
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.topic) speakingState.activeTopic = data.topic;
        updateTopicDisplay();

        if (data.opener) {
          speakingState.messages.push({ role: 'model', text: data.opener.reply });
          displayLucaSpokenTurn(data.opener.reply, data.opener.translation, data.opener.suggestions, null);
          speakTextAloud(data.opener.reply);
        }
      }
    } catch (err) {
      updateCallStatus('Gagal terhubung ke server', false, false);
      if (subText) subText.textContent = '"Gagal terhubung. Pastikan server lokal berjalan."';
    }
  }

  function closeSpeakingBuddyModal() {
    stopSpeakingTimer();
    stopAudioPlayback();
    stopSpeechRecognition();

    const modal = document.getElementById('speaking-buddy-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }

    if (speakingState.userTurnsCount >= 2) {
      showSpeakingSummary();
    }
  }

  function updateTopicDisplay() {
    const titleEl = document.getElementById('speaking-modal-topic-title');
    if (titleEl && speakingState.activeTopic) {
      titleEl.textContent = speakingState.activeTopic.title;
    }
  }

  async function cycleSpeakingTopic() {
    stopAudioPlayback();
    stopSpeechRecognition();
    hideHintsDrawer();
    hideRecastCard();

    const topics = [
      { id: 'daily_routine', title: 'Morning Routine & Daily Life ☀️' },
      { id: 'comfort_food', title: 'Favorite Comfort Food & Cafes 🍕☕' },
      { id: 'weekend_vibes', title: 'Weekend Plans & Relaxation 🏖️' },
      { id: 'dream_travel', title: 'Dream Vacation & Hidden Gems ✈️🌏' },
      { id: 'movies_music', title: 'Favorite Movies, Music & Series 🎬🎵' },
      { id: 'college_career', title: 'Study, Goals & Future Dreams 🎯💼' }
    ];

    const currentId = speakingState.activeTopic ? speakingState.activeTopic.id : '';
    const currentIndex = topics.findIndex(t => t.id === currentId);
    const nextTopic = topics[(currentIndex + 1) % topics.length];

    speakingState.activeTopic = nextTopic;
    updateTopicDisplay();

    speakingState.messages = [];
    const subText = document.getElementById('voice-call-current-text');
    if (subText) subText.textContent = `Mengganti topik ke: ${nextTopic.title}...`;
    updateCallStatus('Mengganti topik...', false, false);

    try {
      const res = await fetch('/api/speaking-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: nextTopic.id,
          userName: (window.state && window.state.userName) || ''
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.opener) {
          speakingState.messages.push({ role: 'model', text: data.opener.reply });
          displayLucaSpokenTurn(data.opener.reply, data.opener.translation, data.opener.suggestions, null);
          speakTextAloud(data.opener.reply);
        }
      }
    } catch (_) {}
  }

  // ─── TIMER ────────────────────────────────────────────────────
  function startSpeakingTimer() {
    stopSpeakingTimer();
    const timerEl = document.getElementById('speaking-call-timer');
    speakingState.timerInterval = setInterval(() => {
      speakingState.secondsElapsed++;
      const mins = String(Math.floor(speakingState.secondsElapsed / 60)).padStart(2, '0');
      const secs = String(speakingState.secondsElapsed % 60).padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopSpeakingTimer() {
    if (speakingState.timerInterval) {
      clearInterval(speakingState.timerInterval);
      speakingState.timerInterval = null;
    }
  }

  // ─── STATUS & VOICE WAVE PULSES ───────────────────────────────
  function updateCallStatus(text, isSpeaking = false, isRecording = false) {
    const label = document.getElementById('speaking-status-label');
    if (label) label.textContent = text;

    const orb = document.getElementById('voice-call-orb-wrap');
    if (orb) {
      if (isSpeaking) {
        orb.classList.add('is-speaking');
        orb.classList.remove('is-recording');
      } else if (isRecording) {
        orb.classList.add('is-recording');
        orb.classList.remove('is-speaking');
      } else {
        orb.classList.remove('is-speaking');
        orb.classList.remove('is-recording');
      }
    }
  }

  // ─── TEXT-TO-SPEECH (LUCA VOICE) ──────────────────────────────
  function speakTextAloud(text) {
    if (!('speechSynthesis' in window)) return;
    stopAudioPlayback();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    const userSpeed = (window.getAudioSpeed ? window.getAudioSpeed() : (parseFloat(localStorage.getItem('basaloka_audio_speed')) || 1.0));
    utterance.rate = Math.max(0.50, Math.min(1.80, 0.95 * userSpeed));
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Jenny')) && 
      v.lang.startsWith('en')
    ) || voices.find(v => v.lang.startsWith('en'));

    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => {
      speakingState.isSpeaking = true;
      updateCallStatus('🔊 Luca sedang berbicara...', true, false);
    };

    utterance.onend = () => {
      speakingState.isSpeaking = false;
      updateCallStatus('🟢 Giliranmu • Ketuk mic untuk bicara', false, false);
    };

    utterance.onerror = () => {
      speakingState.isSpeaking = false;
      updateCallStatus('🟢 Giliranmu • Ketuk mic untuk bicara', false, false);
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopAudioPlayback() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    speakingState.isSpeaking = false;
    updateCallStatus('🟢 Terhubung', false, false);
  }

  function replayCurrentLucaAudio() {
    if (speakingState.currentLucaText) {
      speakTextAloud(speakingState.currentLucaText);
    }
  }

  function toggleCurrentTranslation() {
    const el = document.getElementById('voice-call-translation-text');
    if (!el) return;
    el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
  }

  // ─── SPEECH-TO-TEXT (MIC INPUT) ───────────────────────────────
  function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const hint = document.getElementById('speaking-mic-hint');
      if (hint) hint.textContent = 'Browser tidak mendukung Speech API.';
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      speakingState.isRecording = true;
      updateMicUI(true);
      updateCallStatus('🎙️ Mendengarkan suaramu...', false, true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript) {
        processUserSpokenInput(transcript);
      }
    };

    recognition.onerror = (e) => {
      console.warn('Speech recognition error:', e.error);
      speakingState.isRecording = false;
      updateMicUI(false);
      updateCallStatus('🟢 Ketuk mic untuk bicara', false, false);
    };

    recognition.onend = () => {
      speakingState.isRecording = false;
      updateMicUI(false);
    };

    speakingState.recognition = recognition;
  }

  function toggleSpeakingMic() {
    if (!speakingState.recognition) {
      setupSpeechRecognition();
      if (!speakingState.recognition) return;
    }

    stopAudioPlayback();

    if (speakingState.isRecording) {
      stopSpeechRecognition();
    } else {
      try {
        speakingState.recognition.start();
      } catch (_) {}
    }
  }

  function stopSpeechRecognition() {
    if (speakingState.recognition && speakingState.isRecording) {
      speakingState.recognition.stop();
      speakingState.isRecording = false;
      updateMicUI(false);
    }
  }

  function updateMicUI(isRecording) {
    const btn = document.getElementById('btn-speaking-mic');
    const hint = document.getElementById('speaking-mic-hint');
    if (btn) {
      if (isRecording) btn.classList.add('recording');
      else btn.classList.remove('recording');
    }
    if (hint) {
      hint.textContent = isRecording ? 'Mendengarkan... (bicara sekarang)' : 'Ketuk mic untuk bicara';
    }
  }

  // ─── DIALOGUE PROCESSOR ───────────────────────────────────────
  async function processUserSpokenInput(userText) {
    const text = (userText || '').trim();
    if (!text) return;

    speakingState.userTurnsCount++;
    stopAudioPlayback();
    stopSpeechRecognition();
    hideHintsDrawer();

    // Show what user just said in subtitle box
    const subText = document.getElementById('voice-call-current-text');
    if (subText) subText.innerHTML = `<span style="color:#94a3b8; font-size:0.86rem; display:block; margin-bottom:4px;">Kamu baru saja berkata:</span> "${escapeHTML(text)}"`;
    hideSubActions();

    updateCallStatus('Luca sedang merespons...', false, false);
    speakingState.messages.push({ role: 'user', text });

    try {
      const res = await fetch('/api/speaking-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: speakingState.activeTopic ? speakingState.activeTopic.id : undefined,
          userText: text,
          messages: speakingState.messages,
          userName: (window.state && window.state.userName) || ''
        })
      });

      if (res.ok) {
        const data = await res.json();
        speakingState.messages.push({ role: 'model', text: data.reply });
        displayLucaSpokenTurn(data.reply, data.translation, data.suggestions, data.feedback);
        speakTextAloud(data.reply);
      } else {
        const fallback = "I see! Tell me more about that.";
        displayLucaSpokenTurn(fallback, "Aku paham! Ceritakan lebih banyak tentang hal itu dong.", [
          "It's really important to me.",
          "I think it's very fun!"
        ]);
        speakTextAloud(fallback);
      }
    } catch (err) {
      const fallback = "That sounds wonderful! What do you like most about it?";
      displayLucaSpokenTurn(fallback, "Kedengarannya luar biasa! Apa yang paling kamu sukai dari hal itu?", [
        "I really enjoy the atmosphere.",
        "It makes me feel happy."
      ]);
      speakTextAloud(fallback);
    }
  }

  // ─── UI DISPLAY TURN ──────────────────────────────────────────
  function displayLucaSpokenTurn(reply, translation, suggestions, feedback) {
    speakingState.currentLucaText = reply;
    speakingState.currentLucaTranslation = translation;

    const subText = document.getElementById('voice-call-current-text');
    if (subText) {
      subText.innerHTML = `"${escapeHTML(reply)}"`;
    }

    const trText = document.getElementById('voice-call-translation-text');
    if (trText) {
      trText.textContent = translation || '';
      trText.style.display = 'none';
    }

    const subActions = document.getElementById('voice-call-sub-actions');
    if (subActions) subActions.style.display = 'flex';

    // Recasting card
    if (feedback) {
      showRecastCard(feedback);
    } else {
      hideRecastCard();
    }

    // Populate hints drawer
    populateHintsDrawer(suggestions);
  }

  function showRecastCard(feedback) {
    const card = document.getElementById('voice-call-recast-card');
    const content = document.getElementById('voice-call-recast-content');
    if (card && content) {
      content.innerHTML = formatMarkdownBold(feedback);
      card.style.display = 'flex';
    }
  }

  function hideRecastCard() {
    const card = document.getElementById('voice-call-recast-card');
    if (card) card.style.display = 'none';
  }

  function hideSubActions() {
    const subActions = document.getElementById('voice-call-sub-actions');
    if (subActions) subActions.style.display = 'none';
    const trText = document.getElementById('voice-call-translation-text');
    if (trText) trText.style.display = 'none';
  }

  // ─── HINTS DRAWER (SLIDE-UP) ──────────────────────────────────
  function populateHintsDrawer(suggestions) {
    const chipsContainer = document.getElementById('speaking-chips-container');
    if (!chipsContainer) return;

    if (!suggestions || suggestions.length === 0) {
      chipsContainer.innerHTML = '<span style="color:#94a3b8; font-size:0.8rem;">Tidak ada contekan untuk giliran ini.</span>';
      return;
    }

    chipsContainer.innerHTML = suggestions.map(s => `
      <button type="button" class="vch-chip-btn" onclick="window.speakHintChip('${escapeJS(s)}')">
        <span>🗣️</span>
        <span>"${escapeHTML(s)}"</span>
      </button>
    `).join('');
  }

  function toggleHintsDrawer() {
    const drawer = document.getElementById('voice-call-hints-drawer');
    if (!drawer) return;
    drawer.style.display = (drawer.style.display === 'none' || !drawer.style.display) ? 'block' : 'none';
  }

  function hideHintsDrawer() {
    const drawer = document.getElementById('voice-call-hints-drawer');
    if (!drawer) return;
    drawer.style.display = 'none';
  }

  function speakHintChip(sentence) {
    hideHintsDrawer();
    processUserSpokenInput(sentence);
  }

  // ─── REWARD & SUMMARY ─────────────────────────────────────────
  function showSpeakingSummary() {
    const mins = Math.max(1, Math.ceil(speakingState.secondsElapsed / 60));
    const turns = speakingState.userTurnsCount;

    if (window.state) {
      window.state.totalXp = (window.state.totalXp || 0) + 20;
      window.state.englishXp = (window.state.englishXp || 0) + 20;
      window.state.todayXp = (window.state.todayXp || 0) + 20;
      if (typeof saveState === 'function') saveState();
      if (typeof updateNavStats === 'function') updateNavStats();
    }

    if (typeof showCustomPopup === 'function') {
      showCustomPopup({
        icon: '🎉',
        title: 'Panggilan Selesai!',
        message: `
          <div style="text-align: left; padding: 6px 0;">
            <p style="margin-bottom: 8px;">Keren! Kamu baru saja latihan ngomong bahasa Inggris secara aktif:</p>
            <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 10px; margin-bottom: 10px;">
              <div>⏱️ <strong>Durasi Telepon:</strong> ${mins} Menit</div>
              <div>💬 <strong>Putaran Obrolan:</strong> ${turns} Kali Bicara</div>
              <div>⚡ <strong>Hadiah Konsistensi:</strong> +20 XP!</div>
            </div>
            <p style="font-size: 0.88rem; color: #94a3b8;">Latihan berbicara 3–5 menit setiap hari adalah cara tercepat melatih reflek lidah dan menghilangkan rasa minder. Sampai jumpa besok!</p>
          </div>
        `,
        buttonText: 'Mantap, Paham! 🚀'
      });
    } else if (typeof showToast === 'function') {
      showToast(`🎉 Panggilan selesai! +20 XP didapatkan!`, 'success');
    }
  }

  // ─── UTILITIES ────────────────────────────────────────────────
  function escapeHTML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeJS(str) {
    return String(str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  function formatMarkdownBold(str) {
    return escapeHTML(str).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  document.addEventListener('DOMContentLoaded', initSpeakingBuddy);

  // Global Exports
  window.openSpeakingBuddyModal = openSpeakingBuddyModal;
  window.closeSpeakingBuddyModal = closeSpeakingBuddyModal;
  window.cycleSpeakingTopic = cycleSpeakingTopic;
  window.toggleSpeakingMic = toggleSpeakingMic;
  window.replayCurrentLucaAudio = replayCurrentLucaAudio;
  window.toggleCurrentTranslation = toggleCurrentTranslation;
  window.toggleHintsDrawer = toggleHintsDrawer;
  window.speakHintChip = speakHintChip;
})();
