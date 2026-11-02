function escapeDiagnosticHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============================================================
// BasaLoka — TOEFL Diagnostic Placement Test (10 Menit Kilat)
// Curated 10 Questions: 3 Listening, 4 Structure, 3 Reading
// ============================================================

const TOEFL_DIAGNOSTIC_DATA = [
  // ─── SECTION 1: LISTENING COMPREHENSION (3 SOAL) ───────────
  {
    id: "diag-l1",
    section: "listening",
    sectionLabel: "🎧 Section 1: Listening Comprehension",
    title: "Percakapan Kampus & Trik Orang Kedua",
    dialogue: [
      { speaker: "man", label: "Pria", text: "Are you heading home for the long weekend?" },
      { speaker: "woman", label: "Wanita", text: "I was planning to, but my biology professor just assigned a twenty-page research proposal." }
    ],
    narrator: "What does the woman imply?",
    q: "What does the woman imply?",
    options: [
      "She is going to visit her family this weekend.",
      "She has to stay on campus to complete an assignment.",
      "She already finished her biology proposal yesterday.",
      "She prefers staying home over traveling to campus."
    ],
    answer: 1,
    explanation: "Trik Orang Kedua: Pembicara kedua berkata 'I was planning to, BUT...', artinya rencana pulangnya batal karena ada tugas proposal 20 halaman dari dosen biologi."
  },
  {
    id: "diag-l2",
    section: "listening",
    sectionLabel: "🎧 Section 1: Listening Comprehension",
    title: "Idiom Populer Kampus (take a rain check)",
    dialogue: [
      { speaker: "woman", label: "Wanita", text: "We are grabbing some pizza after the seminar. Would you like to join us?" },
      { speaker: "man", label: "Pria", text: "I'd love to, but I have a shift at the campus library. Can I take a rain check?" }
    ],
    narrator: "What does the man mean?",
    q: "What does the man mean?",
    options: [
      "He wants to join them on another occasion.",
      "He is worried about the heavy rain outside.",
      "He does not enjoy eating pizza after seminars.",
      "He intends to quit his job at the campus library."
    ],
    answer: 0,
    explanation: "Idiom 'take a rain check' bermakna menolak tawaran saat ini secara halus dan meminta untuk menundanya di lain kesempatan."
  },
  {
    id: "diag-l3",
    section: "listening",
    sectionLabel: "🎧 Section 1: Listening Comprehension",
    title: "Ekspresi Kesepakatan Mutlak (Strong Agreement)",
    dialogue: [
      { speaker: "man", label: "Pria", text: "That chemistry lecture was by far the most complex one this semester!" },
      { speaker: "woman", label: "Wanita", text: "You can say that again!" }
    ],
    narrator: "What does the woman mean?",
    q: "What does the woman mean?",
    options: [
      "She did not hear what the man said clearly.",
      "She completely agrees with the man's assessment.",
      "She wants the man to repeat the entire chemistry lecture.",
      "She found the chemistry lecture remarkably easy."
    ],
    answer: 1,
    explanation: "Frasa 'You can say that again!' adalah idiom persetujuan mutlak (Strong Agreement), artinya wanita tersebut sangat setuju bahwa materi kuliah kimia tadi memang sangat rumit."
  },

  // ─── SECTION 2: STRUCTURE & WRITTEN EXPRESSION (4 SOAL) ────
  {
    id: "diag-s1",
    section: "structure",
    sectionLabel: "📐 Section 2: Structure & Written Expression",
    title: "Rumus Baku Subjek & Participle Phrase",
    q: "___________ in the North Atlantic, Greenland is considered the largest island in the world.",
    options: [
      "Located",
      "It is located",
      "Because location",
      "Was located"
    ],
    answer: 0,
    explanation: "Kalimat utama sudah memiliki Subject ('Greenland') dan Verb ('is considered'). Bagian depan adalah Participle Phrase (Reduced Adjective Clause: 'Which is located' -> 'Located'). Opsi 'It is located' salah karena membuat kalimat kelebihan Subject & Verb tanpa konjungsi."
  },
  {
    id: "diag-s2",
    section: "structure",
    sectionLabel: "📐 Section 2: Structure & Written Expression",
    title: "Konektor Klausa Kontras (Although vs Despite)",
    q: "___________ the severe snowstorm paralyzed the transit system, most laboratory staff managed to report on time.",
    options: [
      "Despite",
      "Although",
      "Because of",
      "In addition to"
    ],
    answer: 1,
    explanation: "Struktur setelah titik-titik adalah klausa lengkap: 'the severe snowstorm' (Subject) + 'paralyzed' (Verb). Penghubung klausa kontras adalah konjungsi 'Although'. 'Despite' dan 'Because of' adalah preposisi yang hanya boleh diikuti Noun/frasa tanpa kata kerja."
  },
  {
    id: "diag-s3",
    section: "structure",
    sectionLabel: "📐 Section 2: Structure & Written Expression",
    title: "Kesejajaran Paralel (not only... but also...)",
    q: "The newly established research facility will not only accommodate international scholars ___________ advanced biotechnology projects.",
    options: [
      "and also fund",
      "but also fund",
      "or financing",
      "but funds"
    ],
    answer: 1,
    explanation: "Pasangan baku correlative conjunctions adalah 'not only... but also...'. Setelah 'not only' terdapat kata kerja bentuk dasar ('accommodate'), maka setelah 'but also' wajib paralel menggunakan kata kerja bentuk dasar ('fund')."
  },
  {
    id: "diag-s4",
    section: "structure",
    sectionLabel: "📐 Section 2: Structure & Written Expression",
    title: "Detektif Error: Dosa Word Form (Adjective vs Adverb)",
    q: "Identifikasi kata yang SALAH secara tata bahasa:\n\nSolar cells [A: produce] electrical [B: energy] [C: direct] from sunlight by [D: means of] the photovoltaic effect.",
    options: [
      "A (produce)",
      "B (energy)",
      "C (direct)",
      "D (means of)"
    ],
    answer: 2,
    explanation: "Dosa Word Form: Kata 'direct' menerangkan bagaimana energi listrik diproduksi ('produce' sebagai kata kerja), sehingga harus berbentuk adverb 'directly', bukan adjective 'direct'."
  },

  // ─── SECTION 3: READING COMPREHENSION (3 SOAL) ─────────────
  {
    id: "diag-r1",
    section: "reading",
    sectionLabel: "📖 Section 3: Reading Comprehension",
    title: "Gagasan Utama Teks Akademik",
    passage: "Bioluminescence is the emission of light by a living organism as the result of a chemical reaction. While terrestrial fireflies are widely celebrated for their nocturnal displays, an overwhelming ninety percent of deep-sea marine creatures possess this extraordinary adaptation. In the perpetually pitch-black abyss below one thousand meters, sunlight cannot penetrate, making self-generated luminescence imperative for survival. Deep-sea predators utilize glowing lures to attract unsuspecting prey, while smaller organisms discharge luminous clouds of fluid to baffle pursuers. Furthermore, specific flashing frequencies serve as crucial signals for species identification and mate recognition. Thus, bioluminescence functions not merely as an ornamental oddity, but as an indispensable evolutionary apparatus across oceanic ecosystems.",
    q: "What is the primary purpose of the passage?",
    options: [
      "To compare the glowing mechanisms of land fireflies with beetles.",
      "To illustrate the diverse survival and communication functions of bioluminescence in marine life.",
      "To argue that sunlight penetrates deep into ocean trenches.",
      "To explain the chemical manufacturing of commercial glow sticks."
    ],
    answer: 1,
    explanation: "Gagasan utama teks adalah memaparkan beragam fungsi adaptasi bioluminescence bagi makhluk laut dalam (mulai dari memangsa, meloloskan diri, hingga komunikasi/reproduksi)."
  },
  {
    id: "diag-r2",
    section: "reading",
    sectionLabel: "📖 Section 3: Reading Comprehension",
    title: "Makna Kosakata dalam Konteks (Vocabulary in Context)",
    passage: "In the perpetually pitch-black abyss below one thousand meters, sunlight cannot penetrate, making self-generated luminescence imperative for survival. Deep-sea predators utilize glowing lures to attract unsuspecting prey, while smaller organisms discharge luminous clouds of fluid to baffle pursuers.",
    q: "The word 'imperative' in the passage is closest in meaning to ___________.",
    options: [
      "essential",
      "optional",
      "hazardous",
      "decorative"
    ],
    answer: 0,
    explanation: "'Imperative' dalam konteks 'imperative for survival' bermakna sangat mendesak / mutlak diperlukan, bersinonim langsung dengan 'essential' atau 'vital'."
  },
  {
    id: "diag-r3",
    section: "reading",
    sectionLabel: "📖 Section 3: Reading Comprehension",
    title: "Fakta Rinci Menurut Bacaan (Factual Detail)",
    passage: "Deep-sea predators utilize glowing lures to attract unsuspecting prey, while smaller organisms discharge luminous clouds of fluid to baffle pursuers. Furthermore, specific flashing frequencies serve as crucial signals for species identification and mate recognition.",
    q: "According to the passage, how do smaller marine organisms utilize luminous clouds of fluid?",
    options: [
      "To illuminate their nests in coral reefs.",
      "To confuse and escape from potential predators.",
      "To attract larger prey into their mouths.",
      "To warm the freezing ocean water around them."
    ],
    answer: 1,
    explanation: "Teks menyebutkan: '...while smaller organisms discharge luminous clouds of fluid to baffle pursuers'. 'Baffle pursuers' bermakna membingungkan pemangsa/pengejar agar bisa meloloskan diri."
  }
];

// Controller State for Diagnostic Placement Test
let toeflDiagnosticState = {
  currentIndex: 0,
  answers: [],
  selectedOpt: null,
  isPlayingAudio: false
};

function openToeflDiagnosticModal() {
  const modal = document.getElementById('toefl-diagnostic-modal');
  if (!modal) return;

  toeflDiagnosticState = {
    currentIndex: 0,
    answers: [],
    selectedOpt: null,
    isPlayingAudio: false
  };

  renderDiagnosticStep();
  modal.classList.add('active');
  modal.style.setProperty('display', 'flex', 'important');
}

function closeToeflDiagnosticModal() {
  if (speechSynth) speechSynth.cancel();
  toeflDiagnosticState.isPlayingAudio = false;
  const modal = document.getElementById('toefl-diagnostic-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.setProperty('display', 'none', 'important');
  }
}

function renderDiagnosticStep() {
  const { currentIndex } = toeflDiagnosticState;
  const totalQ = TOEFL_DIAGNOSTIC_DATA.length;
  const qData = TOEFL_DIAGNOSTIC_DATA[currentIndex];
  if (!qData) return;

  const barFill = document.getElementById('tdm-progress-bar-fill');
  if (barFill) {
    const pct = Math.round(((currentIndex + 1) / totalQ) * 100);
    barFill.style.width = `${pct}%`;
  }

  const badgeEl = document.getElementById('tdm-header-badge');
  if (badgeEl) badgeEl.textContent = `SOAL ${currentIndex + 1} DARI ${totalQ} • ${qData.section.toUpperCase()}`;

  const titleEl = document.getElementById('tdm-header-title');
  if (titleEl) titleEl.textContent = qData.title;

  const bodyEl = document.getElementById('tdm-body');
  if (!bodyEl) return;

  let audioSectionHtml = '';
  if (qData.section === 'listening' && qData.dialogue) {
    const spk1 = qData.dialogue[0];
    const spk2 = qData.dialogue[1];
    audioSectionHtml = `
      <div class="quiz-audio-player-card" style="margin-bottom: 8px;">
        <div class="qap-header">
          <span class="qap-tag">🎧 Rekaman Audio Percakapan</span>
          <span class="qap-sub">Dengarkan audio dialog sebelum menjawab pertanyaan narator:</span>
        </div>
        <div class="qap-action-row">
          <button type="button" class="btn-quiz-audio primary" id="btn-diag-audio-play" onclick="playDiagnosticAudio('${(spk1.text || '').replace(/'/g, "\\'")}', '${spk1.speaker}', '${(spk2.text || '').replace(/'/g, "\\'")}', '${spk2.speaker}', '${(qData.narrator || '').replace(/'/g, "\\'")}')">
            ▶️ Putar Audio Percakapan
          </button>
        </div>
      </div>
    `;
  }

  let passageSectionHtml = '';
  if (qData.section === 'reading' && qData.passage) {
    passageSectionHtml = `
      <div class="tdm-passage-box">
        <div class="tdm-passage-header">
          <span class="tph-badge">📖 Teks Bacaan Soal ${currentIndex + 1}/10:</span>
        </div>
        <div class="tdm-passage-content">
          ${escapeDiagnosticHtml(qData.passage)}
        </div>
      </div>
    `;
  }

  const letters = ['A', 'B', 'C', 'D'];
  bodyEl.innerHTML = `
    <div class="tdm-section-tag">${qData.sectionLabel}</div>
    ${passageSectionHtml}
    ${audioSectionHtml}
    <h4 class="tdm-question-text">${escapeDiagnosticHtml(qData.q).replace(/\n\n/g, '<br><br>')}</h4>
    <div class="tdm-options-grid" id="tdm-options-grid">
      ${qData.options.map((opt, i) => `
        <button type="button" class="tdm-opt-btn" id="tdm-opt-${i}" onclick="selectDiagnosticOption(${i})">
          <span class="tdm-opt-letter">${letters[i]}</span>
          <span class="tdm-opt-text">${escapeDiagnosticHtml(opt)}</span>
        </button>
      `).join('')}
    </div>
  `;

  const footerEl = document.getElementById('tdm-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="tdm-footer-step-row">
        <button type="button" class="btn-secondary tdm-btn-cancel" onclick="closeToeflDiagnosticModal()">
          Batal
        </button>
        <button type="button" class="btn-primary tdm-btn-next" id="btn-diag-next" onclick="submitDiagnosticAnswer()" disabled>
          ${currentIndex + 1 === totalQ ? 'Lihat Rapor Skor 🎯' : 'Lanjut →'}
        </button>
      </div>
    `;
  }

  toeflDiagnosticState.selectedOpt = null;
  // Ensure instantaneous scroll-to-top on new question so passage is immediately visible
  bodyEl.scrollTop = 0;
  requestAnimationFrame(() => {
    bodyEl.scrollTop = 0;
  });
  setTimeout(() => {
    bodyEl.scrollTop = 0;
  }, 40);
}

function selectDiagnosticOption(optIdx) {
  toeflDiagnosticState.selectedOpt = optIdx;
  document.querySelectorAll('.tdm-opt-btn').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === optIdx);
  });
  const nextBtn = document.getElementById('btn-diag-next');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function playDiagnosticAudio(spk1Text, spk1Role, spk2Text, spk2Role, narratorText) {
  const btn = document.getElementById('btn-diag-audio-play');
  if (toeflDiagnosticState.isPlayingAudio) {
    if (speechSynth) speechSynth.cancel();
    toeflDiagnosticState.isPlayingAudio = false;
    if (btn) btn.innerHTML = '▶️ Putar Audio Percakapan';
    return;
  }

  toeflDiagnosticState.isPlayingAudio = true;
  if (btn) btn.innerHTML = '🔊 Memutar Audio...';

  const resetBtn = () => {
    toeflDiagnosticState.isPlayingAudio = false;
    if (btn) btn.innerHTML = '▶️ Putar Audio Percakapan';
  };

  const g1 = (spk1Role === 'woman' || spk1Role === 'female') ? 'female' : 'male';
  const g2 = (spk2Role === 'woman' || spk2Role === 'female') ? 'female' : 'male';

  // Soft initial breath cushion delay before speaker 1
  setTimeout(() => {
    if (!toeflDiagnosticState.isPlayingAudio) return;
    speakWithVoice(spk1Text, 'en-US', { gender: g1 }, () => {
      if (!toeflDiagnosticState.isPlayingAudio) return;
      // Natural dialogue turn-taking pause (600ms) before speaker 2
      setTimeout(() => {
        if (!toeflDiagnosticState.isPlayingAudio) return;
        speakWithVoice(spk2Text, 'en-US', { gender: g2, cancelPrevious: false }, () => {
          if (!toeflDiagnosticState.isPlayingAudio) return;
          if (narratorText) {
            // Calm ETS silence pause (750ms) before official question narrator
            setTimeout(() => {
              if (!toeflDiagnosticState.isPlayingAudio) return;
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
}

function submitDiagnosticAnswer() {
  if (toeflDiagnosticState.selectedOpt === null) return;

  if (speechSynth) speechSynth.cancel();
  toeflDiagnosticState.isPlayingAudio = false;

  const currentQ = TOEFL_DIAGNOSTIC_DATA[toeflDiagnosticState.currentIndex];
  const isCorrect = toeflDiagnosticState.selectedOpt === currentQ.answer;

  toeflDiagnosticState.answers.push({
    questionId: currentQ.id,
    section: currentQ.section,
    selected: toeflDiagnosticState.selectedOpt,
    correct: currentQ.answer,
    isCorrect
  });

  toeflDiagnosticState.currentIndex++;
  if (toeflDiagnosticState.currentIndex < TOEFL_DIAGNOSTIC_DATA.length) {
    renderDiagnosticStep();
  } else {
    showDiagnosticResults();
  }
}

function showDiagnosticResults() {
  const answers = toeflDiagnosticState.answers;
  const totalCorrect = answers.filter(a => a.isCorrect).length;

  const listeningAnswers = answers.filter(a => a.section === 'listening');
  const structureAnswers = answers.filter(a => a.section === 'structure');
  const readingAnswers = answers.filter(a => a.section === 'reading');

  const lCorrect = listeningAnswers.filter(a => a.isCorrect).length;
  const sCorrect = structureAnswers.filter(a => a.isCorrect).length;
  const rCorrect = readingAnswers.filter(a => a.isCorrect).length;

  // Scale calculations (310 - 677 official scale)
  const lScore = Math.round(31 + (lCorrect / 3) * 36) * 10;
  const sScore = Math.round(31 + (sCorrect / 4) * 37) * 10;
  const rScore = Math.round(31 + (rCorrect / 3) * 35) * 10;

  // Scaled Score Formula: ((L + S + R) * 10) / 3
  const lRawScaled = Math.round(31 + (lCorrect / 3) * 37);
  const sRawScaled = Math.round(31 + (sCorrect / 4) * 37);
  const rRawScaled = Math.round(31 + (rCorrect / 3) * 36);
  const totalScore = Math.min(677, Math.max(310, Math.round(((lRawScaled + sRawScaled + rRawScaled) * 10) / 3)));

  // Identify Weakest Section
  const lPct = lCorrect / 3;
  const sPct = sCorrect / 4;
  const rPct = rCorrect / 3;

  let weakestSection = 'structure';
  let minPct = sPct;
  if (lPct < minPct) { weakestSection = 'listening'; minPct = lPct; }
  if (rPct < minPct) { weakestSection = 'reading'; minPct = rPct; }

  let recUnitId = 'toefl-day3';
  let recUnitTitle = 'Modul 3: Structure 1–15 (Rumus S+V & Konektor)';
  let recAdvice = 'Kuasai pola Subjek & Kata Kerja serta 5 Dosa Error untuk menaikkan skor Structure kamu ke 500+!';

  if (weakestSection === 'listening') {
    recUnitId = 'toefl-u-hack';
    recUnitTitle = 'Modul 1: Listening Part A (Trik Orang Kedua)';
    recAdvice = 'Fokuskan telingamu pada ucapan orang kedua dan waspadai jebakan bunyi yang mirip agar skor Listening melesat!';
  } else if (weakestSection === 'reading') {
    recUnitId = 'toefl-day6';
    recUnitTitle = 'Modul 6: Reading Ninja (Teknik Skim & Scan)';
    recAdvice = 'Gunakan teknik membaca cerdas: cari kata kunci pertanyaan di paragraf tanpa perlu membaca seluruh teks kata per kata!';
  }

  // Determine Milestone Tier
  let milestoneBadge = '🌱 Level Dasar (310+)';
  let milestoneClass = 'tier-basic';
  if (totalScore >= 600) { milestoneBadge = '👑 Master TOEFL (600+)'; milestoneClass = 'tier-master'; }
  else if (totalScore >= 550) { milestoneBadge = '🎓 Siap Beasiswa LPDP / S2 (550+)'; milestoneClass = 'tier-lpdp'; }
  else if (totalScore >= 500) { milestoneBadge = '🏢 Tembus Syarat BUMN / CPNS (500+)'; milestoneClass = 'tier-bumn'; }
  else if (totalScore >= 450) { milestoneBadge = '📚 Level Menengah / Lolos Sidang (450+)'; milestoneClass = 'tier-mid'; }

  // Save to user state & sync
  state.toeflDiagnosticScore = totalScore;
  state.toeflDiagnosticTaken = true;
  state.toeflRecUnitId = recUnitId;
  state.toeflLastPredictedScore = Math.max(state.toeflLastPredictedScore || 310, totalScore);
  saveState();

  // Update map button & predictor strip
  const trigBtn = document.getElementById('btn-toefl-diagnostic-trigger');
  if (trigBtn) {
    trigBtn.innerHTML = `🎯 Tes Diagnostik Ulang (Skor: ${totalScore})`;
  }
  updateToeflPredictorUI();

  // Render Result in Modal
  const badgeEl = document.getElementById('tdm-header-badge');
  if (badgeEl) badgeEl.textContent = 'HASIL DIAGNOSTIK LEVEL AWAL';

  const titleEl = document.getElementById('tdm-header-title');
  if (titleEl) titleEl.textContent = 'Rapor Skor & Rekomendasi Belajar';

  const bodyEl = document.getElementById('tdm-body');
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="tdm-result-hero">
        <div class="tdm-res-badge">🎯 ESTIMASI SKOR AWAL TOEFL ITP</div>
        <div class="tdm-res-score-row">
          <span class="tdm-res-score">${totalScore}</span>
          <span class="tdm-res-max">/ 677</span>
        </div>
        <div class="tdm-res-tier">${milestoneBadge}</div>
      </div>

      <div class="tdm-breakdown-card">
        <div class="tdm-bc-title">📊 Rapor Kemampuan per Section (Akurasi & Estimasi):</div>
        
        <div class="tdm-section-row">
          <div class="tdm-sr-header">
            <span>🎧 Section 1: Listening Comprehension</span>
            <span><strong>${lCorrect}/3 Benar</strong> (${Math.round(lPct * 100)}%)</span>
          </div>
          <div class="tdm-sr-bar">
            <div class="tdm-sr-fill" style="width: ${Math.round(lPct * 100)}%; background: #38bdf8;"></div>
          </div>
        </div>

        <div class="tdm-section-row">
          <div class="tdm-sr-header">
            <span>📐 Section 2: Structure & Written Expression</span>
            <span><strong>${sCorrect}/4 Benar</strong> (${Math.round(sPct * 100)}%)</span>
          </div>
          <div class="tdm-sr-bar">
            <div class="tdm-sr-fill" style="width: ${Math.round(sPct * 100)}%; background: #8b5cf6;"></div>
          </div>
        </div>

        <div class="tdm-section-row">
          <div class="tdm-sr-header">
            <span>📖 Section 3: Reading Comprehension</span>
            <span><strong>${rCorrect}/3 Benar</strong> (${Math.round(rPct * 100)}%)</span>
          </div>
          <div class="tdm-sr-bar">
            <div class="tdm-sr-fill" style="width: ${Math.round(rPct * 100)}%; background: #10b981;"></div>
          </div>
        </div>
      </div>

      <div class="tdm-rec-box">
        <span class="tdm-rec-icon">🌍</span>
        <div class="tdm-rec-text">
          <strong>Rekomendasi Presisi dari Maskot Luca:</strong>
          <p>${recAdvice}</p>
        </div>
      </div>
    `;
  }

  const footerEl = document.getElementById('tdm-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <button type="button" class="btn-primary tdm-btn-primary-block" onclick="startDiagnosticRecommendedModule('${recUnitId}')">
        🚀 Mulai Belajar Modul Rekomendasi
      </button>
      <div class="tdm-sub-actions-row">
        <button type="button" class="btn-secondary" onclick="closeToeflDiagnosticModal(); openToeflExamTargetModal();" style="color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
          🎯 Pasang Target
        </button>
        <button type="button" class="btn-secondary" onclick="closeToeflDiagnosticModal()">
          Tutup Rapor
        </button>
      </div>
    `;
  }

  launchConfetti();
}

function startDiagnosticRecommendedModule(unitId) {
  closeToeflDiagnosticModal();
  const langData = APP_DATA.toefl;
  if (!langData) return;
  const unit = langData.units.find(u => u.id === unitId);
  if (unit && unit.lessons && unit.lessons.length) {
    startLesson('toefl', unit.id, unit.lessons[0].id);
  } else {
    showView('toefl-map');
  }
}

window.openToeflDiagnosticModal = openToeflDiagnosticModal;
window.closeToeflDiagnosticModal = closeToeflDiagnosticModal;
window.playDiagnosticAudio = playDiagnosticAudio;
window.selectDiagnosticOption = selectDiagnosticOption;
window.submitDiagnosticAnswer = submitDiagnosticAnswer;
window.startDiagnosticRecommendedModule = startDiagnosticRecommendedModule;

