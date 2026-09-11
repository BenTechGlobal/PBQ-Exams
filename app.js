(() => {
  "use strict";

  /* ============================================================
     CodingHamme Practice Exam – Multi-stage Exam Platform
     ============================================================ */

  const EXAM_REGISTRY = {
    "ccna-200-301": {
      title: "Cisco CCNA 200-301 Practice Exam",
      code: "CCNA 200-301",
      shortCode: "CCNA",
      productCode: "CCNA-200-301",
      durationMinutes: 120,
      passPercentage: 82,
      domains: [
        "Network Infrastructure and Connectivity",
        "Switching and Network Access",
        "IP Routing",
        "Network Services and Security",
        "AI and Network Operations"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Network Infrastructure and Connectivity" },
        { id: "mod2", label: "Module 2 – Switching and Network Access" },
        { id: "mod3", label: "Module 3 – IP Routing" },
        { id: "mod4", label: "Module 4 – Network Services and Security" },
        { id: "mod5", label: "Module 5 – AI and Network Operations" }
      ],
      exams: [
        { id: "practice-1", label: "CCNA Practice Exam #1" },
        { id: "practice-2", label: "CCNA Practice Exam #2" },
        { id: "chapter-quizzes", label: "CCNA Chapter Quizzes" }
      ],
      questions: []
    },
    "sc-100": {
      title: "Microsoft Cybersecurity Architect (SC-100)",
      code: "SC-100",
      shortCode: "SC-100",
      productCode: "SC-100",
      durationMinutes: 120,
      passPercentage: 75,
      domains: ["Zero Trust", "Identity & Access", "Security Operations", "Data Protection", "Application Security", "Governance"],
      modules: [
        { id: "mod1", label: "Zero Trust Architecture" },
        { id: "mod2", label: "Identity & Access" },
        { id: "mod3", label: "Security Operations" },
        { id: "mod4", label: "Data Protection & Governance" }
      ],
      exams: [
        { id: "practice-1", label: "SC-100 Practice Exam #1" },
        { id: "chapter-quizzes", label: "SC-100 Domain Quizzes" }
      ],
      questions: []
    },
    "aws-saa-c03": {
      title: "AWS Solutions Architect Associate (SAA-C03)",
      code: "SAA-C03",
      shortCode: "SAA",
      productCode: "AWS-SAA-C03",
      durationMinutes: 130,
      passPercentage: 72,
      domains: ["Design Secure Architectures", "Design Resilient Architectures", "Design High-Performing Architectures", "Design Cost-Optimized Architectures"],
      modules: [
        { id: "mod1", label: "Secure Architectures" },
        { id: "mod2", label: "Resilient Architectures" },
        { id: "mod3", label: "High-Performing Architectures" },
        { id: "mod4", label: "Cost-Optimized Architectures" }
      ],
      exams: [
        { id: "practice-1", label: "SAA-C03 Practice Exam #1" },
        { id: "chapter-quizzes", label: "SAA Domain Quizzes" }
      ],
      questions: []
    },
    "sy0-701": {
      title: "CompTIA Security+ (SY0-701)",
      code: "SY0-701",
      shortCode: "Sec+",
      productCode: "SY0-701",
      durationMinutes: 90,
      passPercentage: 75,
      domains: [
        "General Security Concepts",
        "Threats, Vulnerabilities, and Mitigations",
        "Security Architecture",
        "Security Operations",
        "Security program management and oversight"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – General Security Concepts" },
        { id: "mod2", label: "Module 2 – Threats, Vulnerabilities, and Mitigations" },
        { id: "mod3", label: "Module 3 – Security Architecture" },
        { id: "mod4", label: "Module 4 – Security Operations" },
        { id: "mod5", label: "Module 5 – Security Program Management & Oversight" }
      ],
      exams: [
        { id: "practice-1", label: "Security+ Practice Exam #1" },
        { id: "chapter-quizzes", label: "Security+ Domain Quizzes" }
      ],
      questions: []
    },
    "cs0-004": {
      title: "CompTIA CySA+ (CS0-004)",
      code: "CS0-004",
      shortCode: "CySA+",
      productCode: "CS0-004",
      durationMinutes: 165,
      passPercentage: 75,
      domains: [
        "Continuous Security Monitoring & Threat Detection",
        "System & Network Architecture Controls",
        "Log Analysis & SIEM Tools Integration",
        "Threat Intelligence Platforms & IoCs",
        "Security Automation, Orchestration (SOAR), and AI Integration",
        "Vulnerability Identification, Scanning Tools & Prioritization",
        "Endpoint Telemetry & Behavioral Analytics",
        "Network Traffic Analysis & Packet Capture Analysis"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Security Operations" },
        { id: "mod2", label: "Module 2 – Vulnerability Management" },
        { id: "mod3", label: "Module 3 – Incident Response and Management" }
      ],
      exams: [
        { id: "practice-1", label: "CySA+ Practice Exam #1" },
        { id: "chapter-quizzes", label: "CySA+ Domain Quizzes" }
      ],
      questions: []
    },
    "pt0-003": {
      title: "CompTIA PenTest+ (PT0-003)",
      code: "PT0-003",
      shortCode: "PenTest+",
      productCode: "PT0-003",
      durationMinutes: 165,
      passPercentage: 75,
      domains: [
        "Pre-engagement activities, legal concepts, and compliance frameworks",
        "Scoping, targets, and defining rules of engagement (ROE)",
        "Information gathering and passive reconnaissance",
        "Active enumeration and scanning",
        "Vulnerability Discovery and Analysis",
        "Attacks and Exploits",
        "Post-Exploitation and Lateral Movement"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Engagement Management" },
        { id: "mod2", label: "Module 2 – Reconnaissance and Enumeration" },
        { id: "mod3", label: "Module 3 – Vulnerability Discovery and Analysis" },
        { id: "mod4", label: "Module 4 – Attacks and Exploits" },
        { id: "mod5", label: "Module 5 – Post-Exploitation and Lateral Movement" }
      ],
      exams: [
        { id: "practice-1", label: "PenTest+ Practice Exam #1" },
        { id: "chapter-quizzes", label: "PenTest+ Domain Quizzes" }
      ],
      questions: []
    },
    "n10-009": {
      title: "CompTIA Network+ (N10-009)",
      code: "N10-009",
      shortCode: "Net+",
      productCode: "N10-009",
      durationMinutes: 90,
      passPercentage: 75,
      domains: [
        "1.0 Networking Concepts",
        "2.0 Network Implementation",
        "3.0 Network Operations",
        "4.0 Network Security",
        "5.0 Network Troubleshooting"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Networking Concepts" },
        { id: "mod2", label: "Module 2 – Network Implementation" },
        { id: "mod3", label: "Module 3 – Network Operations" },
        { id: "mod4", label: "Module 4 – Network Security" },
        { id: "mod5", label: "Module 5 – Network Troubleshooting" }
      ],
      exams: [
        { id: "practice-1", label: "Network+ Practice Exam #1" },
        { id: "chapter-quizzes", label: "Network+ Domain Quizzes" }
      ],
      questions: []
    },
    "sc-500": {
      title: "Microsoft Cybersecurity Defense Operations (SC-500)",
      code: "SC-500",
      shortCode: "SC-500",
      productCode: "SC-500",
      durationMinutes: 120,
      passPercentage: 75,
      domains: [
        "Cloud Security Architecture & Posture Management",
        "Identity & Access Management",
        "Threat Protection & Detection",
        "Security Monitoring & Incident Response",
        "Threat Hunting"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Cloud Security Architecture" },
        { id: "mod2", label: "Module 2 – Identity & Access Management" },
        { id: "mod3", label: "Module 3 – Threat Protection" },
        { id: "mod4", label: "Module 4 – Security Monitoring & Incident Response" }
      ],
      exams: [
        { id: "practice-1", label: "SC-500 Practice Exam #1" },
        { id: "chapter-quizzes", label: "SC-500 Domain Quizzes" }
      ],
      questions: []
    },
    "ceh-v13-ai": {
      title: "Certified Ethical Hacker v13 (CEH v13 AI)",
      code: "CEH v13",
      shortCode: "CEH",
      productCode: "CEH-V13-AI",
      durationMinutes: 240,
      passPercentage: 70,
      domains: [
        "Information Security and Ethical Hacking Overview",
        "Footprinting and Reconnaissance",
        "System Hacking Phases and Attack Techniques",
        "Network and Perimeter Hacking",
        "Web Application Hacking",
        "Wireless Network Hacking",
        "Mobile Platform, IoT, and OT Hacking",
        "Cloud Computing",
        "Cryptography"
      ],
      modules: [
        { id: "mod1", label: "Module 1 – Information Security and Ethical Hacking Overview" },
        { id: "mod2", label: "Module 2 – Footprinting and Reconnaissance" },
        { id: "mod3", label: "Module 3 – System Hacking Phases and Attack Techniques" },
        { id: "mod4", label: "Module 4 – Network and Perimeter Hacking" },
        { id: "mod5", label: "Module 5 – Web Application Hacking" },
        { id: "mod6", label: "Module 6 – Wireless Network Hacking" },
        { id: "mod7", label: "Module 7 – Mobile Platform, IoT, and OT Hacking" },
        { id: "mod8", label: "Module 8 – Cloud Computing" },
        { id: "mod9", label: "Module 9 – Cryptography" }
      ],
      exams: [
        { id: "practice-1", label: "CEH v13 Practice Exam #1" },
        { id: "chapter-quizzes", label: "CEH Domain Quizzes" }
      ],
      questions: []
    }
  };

  /** Map of normalized product codes → exam registry id */
  const PRODUCT_CODE_MAP = (() => {
    const map = {};
    Object.entries(EXAM_REGISTRY).forEach(([id, exam]) => {
      const code = String(exam.productCode || "").trim().toUpperCase();
      if (code) map[code] = id;
      // Also accept short aliases without hyphens / spaces
      const compact = code.replace(/[-\s]/g, "");
      if (compact) map[compact] = id;
      // Accept the registry id itself as a code
      map[String(id).toUpperCase()] = id;
      map[String(id).toUpperCase().replace(/[-\s]/g, "")] = id;
    });
    // Friendly aliases for common product names
    const aliases = {
      "CYSA+": "cs0-004",
      "CYSA": "cs0-004",
      "CS0004": "cs0-004",
      "NETWORK+": "n10-009",
      "NET+": "n10-009",
      "N10009": "n10-009",
      "SECURITY+": "sy0-701",
      "SEC+": "sy0-701",
      "SY0701": "sy0-701",
      "CCNA": "ccna-200-301",
      "CCNA200301": "ccna-200-301",
      "SC100": "sc-100",
      "SC500": "sc-500",
      "AWS-SAA": "aws-saa-c03",
      "SAAC03": "aws-saa-c03",
      "PENTEST+": "pt0-003",
      "PENTEST": "pt0-003",
      "PT0003": "pt0-003",
      "PT0-003": "pt0-003",
      "CEH": "ceh-v13-ai",
      "CEHV13": "ceh-v13-ai",
      "CEH-V13": "ceh-v13-ai",
      "CEH-V13-AI": "ceh-v13-ai",
      "CEHV13AI": "ceh-v13-ai"
    };
    Object.entries(aliases).forEach(([k, v]) => {
      if (EXAM_REGISTRY[v]) map[k] = v;
    });
    return map;
  })();

  const STORAGE_KEY = "codinghamme_prep_v1";
  const ARCHIVE_KEY = "CH_ARCHIVED_PRODUCTS";
  const WHATSAPP_CHANNEL_URL = "https://www.whatsapp.com/channel/0029VbAp1qHIXnltu1srjl3A";
  const WHATSAPP_TRAINING_PHONE = "2349078920214";

  const defaultConfig = () => ({
    stopAfter: false,
    timeMinutes: 120,
    maxQuestions: 120,
    qType: "all",
    missedMin: 0,
    correctSkip: 0,
    orderByObjectives: true,
    randomizeQuestions: true,
    randomizeAnswers: false,
    markedOnly: false,
    notesOnly: false,
    showCorrectCount: true,
    selectedExams: [],
    selectedModules: []
  });

  /* ---------- Persistent learner state ---------- */
  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.savedSessions)) parsed.savedSessions = [];
        if (!Array.isArray(parsed.archived)) parsed.archived = [];
        if (!Array.isArray(parsed.activated)) parsed.activated = [];
        return parsed;
      }
    } catch (_) {}
    return { history: {}, notes: {}, marked: {}, stats: {}, savedSessions: [], archived: [], activated: [] };
  }
  function saveStore(store) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (_) {}
  }
  let store = loadStore();

  /* ---------- Archive helpers (ported) ---------- */
  function getArchivedList() {
    try {
      if (Array.isArray(store.archived) && store.archived.length) return store.archived;
      return JSON.parse(localStorage.getItem(ARCHIVE_KEY)) || store.archived || [];
    } catch (_) {
      return store.archived || [];
    }
  }
  function setArchivedList(list) {
    store.archived = list;
    try { localStorage.setItem(ARCHIVE_KEY, JSON.stringify(list)); } catch (_) {}
    saveStore(store);
  }
  function toggleArchiveProduct(productId) {
    let archived = getArchivedList();
    if (archived.includes(productId)) {
      archived = archived.filter((id) => id !== productId);
    } else {
      archived.push(productId);
    }
    setArchivedList(archived);
    renderDashboard();
  }

  /* ---------- Product activation (product-code gated access) ---------- */
  function getActivatedList() {
    if (!Array.isArray(store.activated)) store.activated = [];
    return store.activated;
  }

  function setActivatedList(list) {
    store.activated = Array.from(new Set(list.filter((id) => id && EXAM_REGISTRY[id])));
    saveStore(store);
  }

  function isProductActivated(examId) {
    return getActivatedList().includes(examId);
  }

  function normalizeProductCode(raw) {
    return String(raw || "")
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "-")
      .replace(/_+/g, "-");
  }

  /**
   * Attempt to unlock a product by product code.
   * Returns { ok, examId, title, message }.
   */
  function activateByProductCode(rawCode) {
    const normalized = normalizeProductCode(rawCode);
    if (!normalized) {
      return { ok: false, message: "Please enter a product activation code." };
    }
    const compact = normalized.replace(/-/g, "");
    const examId = PRODUCT_CODE_MAP[normalized] || PRODUCT_CODE_MAP[compact];
    if (!examId || !EXAM_REGISTRY[examId]) {
      return {
        ok: false,
        message: "Invalid activation code. Check the code and try again."
      };
    }
    if (isProductActivated(examId)) {
      return {
        ok: true,
        examId,
        title: EXAM_REGISTRY[examId].title,
        message: `"${EXAM_REGISTRY[examId].title}" is already activated on this device.`
      };
    }
    const list = getActivatedList();
    list.push(examId);
    setActivatedList(list);
    return {
      ok: true,
      examId,
      title: EXAM_REGISTRY[examId].title,
      message: `"${EXAM_REGISTRY[examId].title}" has been unlocked and is ready to use.`
    };
  }

  function requireActivated(examId) {
    if (isProductActivated(examId)) return true;
    alert("This product is locked. Use + Activate Product and enter a valid product code to unlock it.");
    $("#modal-activate")?.classList.remove("hidden");
    return false;
  }

  /* ---------- Runtime state ---------- */
  const state = {
    view: "dashboard",
    activeExamId: null,
    mode: null, // guided | flashcard | exam
    config: defaultConfig(),
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    timeRemaining: 0,
    timerInterval: null,
    isPaused: false,
    revealed: new Set(),
    notesQid: null,
    dashboardTab: "active" // active | archived | saved
  };

  let QUESTIONS = [];
  let PASS_PERCENT = 82;
  let TOTAL_TIME = 0;

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  /* ---------- View router ---------- */
  function showView(id) {
    $$(".view").forEach((v) => {
      v.classList.add("hidden");
      v.classList.remove("active");
    });
    const el = $(`#view-${id}`);
    if (el) {
      el.classList.remove("hidden");
      el.classList.add("active");
    }
    state.view = id;
  }

  /* ---------- Dashboard ---------- */
  function switchDashboardTab(tabId) {
    state.dashboardTab = tabId;
    $$(".product-tabs .tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.tab === tabId);
    });
    renderDashboard();
  }

  function renderSavedSessionsList(grid) {
    const sessions = store.savedSessions || [];
    if (!sessions.length) {
      grid.innerHTML = `<div class="empty-state"><strong>No saved exams</strong>Start a test and use Save during the exam to resume later.</div>`;
      return;
    }
    sessions
      .slice()
      .reverse()
      .forEach((s, idx) => {
        const realIdx = sessions.length - 1 - idx;
        const exam = EXAM_REGISTRY[s.examId];
        const title = exam ? exam.title : s.examId;
        const card = document.createElement("div");
        card.className = "saved-exam-card";
        card.innerHTML = `
          <div class="saved-exam-meta">
            <h4>${title} · ${s.mode || "exam"}</h4>
            <span>${s.date ? new Date(s.date).toLocaleString() : "—"} · Q${(s.index || 0) + 1}</span>
          </div>
          <div class="saved-exam-actions">
            <button class="btn btn-primary btn-sm" data-resume="${realIdx}" type="button">Resume</button>
            <button class="btn btn-secondary btn-sm" data-delete-saved="${realIdx}" type="button">Delete</button>
          </div>`;
        grid.appendChild(card);
      });
    grid.querySelectorAll("[data-resume]").forEach((btn) => {
      btn.addEventListener("click", () => resumeSavedSession(Number(btn.dataset.resume)));
    });
    grid.querySelectorAll("[data-delete-saved]").forEach((btn) => {
      btn.addEventListener("click", () => {
        store.savedSessions.splice(Number(btn.dataset.deleteSaved), 1);
        saveStore(store);
        renderDashboard();
      });
    });
  }

  function resumeSavedSession(idx) {
    const s = (store.savedSessions || [])[idx];
    if (!s || !s.examId || !EXAM_REGISTRY[s.examId]) {
      alert("Saved session is incomplete or product is no longer available.");
      return;
    }
    if (!requireActivated(s.examId)) return;
    state.activeExamId = s.examId;
    state.mode = s.mode || "exam";
    state.config = { ...defaultConfig(), ...(s.config || {}) };
    // Rehydrate via start path then overlay answers
    (async () => {
      const exam = EXAM_REGISTRY[s.examId];
      const all = await loadQuestions(s.examId);
      QUESTIONS = Array.isArray(s.questions) && s.questions.length
        ? s.questions
        : filterQuestions(all, state.config, s.examId);
      if (!QUESTIONS.length) {
        alert("Could not restore questions for this saved session.");
        return;
      }
      PASS_PERCENT = exam.passPercentage;
      TOTAL_TIME = (state.config.stopAfter ? state.config.timeMinutes : exam.durationMinutes) * 60;
      state.timeRemaining = typeof s.timeRemaining === "number" ? s.timeRemaining : TOTAL_TIME;
      state.currentIndex = Math.min(s.index || 0, QUESTIONS.length - 1);
      state.answers = s.answers || {};
      state.flagged = new Set();
      state.revealed = new Set();
      state.isPaused = false;
      QUESTIONS.forEach((q) => {
        if (!state.answers[q.id]) {
          state.answers[q.id] = q.type === "dragdrop" ? { placements: {} } : { selected: [] };
        }
      });
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }
      if (state.mode === "flashcard") {
        startFlashcards();
        return;
      }
      $("#exam-mode-pill").textContent = state.mode === "guided" ? "Guided" : "Exam";
      $("#exam-running-title").textContent = exam.title;
      $("#btn-view-answer").style.display = state.mode === "guided" ? "" : "none";
      showView("exam");
      updateTimerDisplay();
      if (state.mode === "exam" || state.config.stopAfter) startTimer();
      else $("#timer-display").textContent = "—";
      renderQuestion();
    })();
  }

  function renderDashboard() {
    const grid = $("#product-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Sync tab UI
    $$(".product-tabs .tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.tab === state.dashboardTab);
    });

    if (state.dashboardTab === "saved") {
      renderSavedSessionsList(grid);
      return;
    }

    const archived = getArchivedList();
    const activated = getActivatedList();
    const entries = Object.entries(EXAM_REGISTRY).filter(([id]) => {
      const isArchived = archived.includes(id);
      const isActivated = activated.includes(id);
      if (state.dashboardTab === "archived") {
        return isArchived && isActivated;
      }
      // My Products: only activated and not archived
      return isActivated && !isArchived;
    });

    if (!entries.length) {
      if (state.dashboardTab === "archived") {
        grid.innerHTML = `<div class="empty-state"><strong>No archived products</strong>Archive a product from My Products to hide it here without deleting history.</div>`;
      } else if (!activated.length) {
        grid.innerHTML = `<div class="empty-state"><strong>No activated products</strong>Enter a product activation code via <em>+ Activate Product</em> to unlock a certification exam bank on this device.</div>`;
      } else {
        grid.innerHTML = `<div class="empty-state"><strong>No products</strong>All activated products may be archived. Check the Archived tab.</div>`;
      }
      return;
    }

    entries.forEach(([id, exam]) => {
      const isArchived = archived.includes(id);
      const card = document.createElement("article");
      card.className = "product-card" + (isArchived ? " archived-card" : "");
      card.innerHTML = `
        <div class="product-card-top">
          <div class="product-thumb">${exam.shortCode}</div>
          <div class="product-info">
            <h2>${exam.title}</h2>
            <div class="product-meta">${exam.code} · ${exam.durationMinutes} min · Pass ${exam.passPercentage}%</div>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn btn-start" data-action="start" data-id="${id}">Start Test</button>
          <button class="btn btn-secondary" data-action="history" data-id="${id}">View History</button>
          <button class="btn btn-secondary" data-action="notes" data-id="${id}">View Notes</button>
          <button class="btn btn-secondary btn-archive-toggle" data-action="archive" data-id="${id}">${isArchived ? "Unarchive" : "Archive"}</button>
        </div>`;
      grid.appendChild(card);
    });

    grid.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const id = btn.dataset.id;
        if (action === "start") openModeSelect(id);
        else if (action === "history") openHistory(id);
        else if (action === "notes") openProductNotes(id);
        else if (action === "archive") toggleArchiveProduct(id);
      });
    });
  }

  function openModeSelect(examId) {
    if (!requireActivated(examId)) return;
    state.activeExamId = examId;
    state.mode = null;
    const exam = EXAM_REGISTRY[examId];
    $("#mode-product-title").textContent = exam.title;
    $("#mode-product-cover").textContent = exam.shortCode;
    $$(".mode-card").forEach((c) => c.classList.remove("selected"));
    $("#btn-mode-continue").disabled = true;
    showView("mode-select");
  }

  /* ---------- Mode selection ---------- */
  function bindModeCards() {
    $$(".mode-card").forEach((card) => {
      card.addEventListener("click", () => {
        $$(".mode-card").forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        state.mode = card.dataset.mode;
        $("#btn-mode-continue").disabled = false;
      });
      card.querySelector(".btn-select-mode")?.addEventListener("click", (e) => {
        e.stopPropagation();
        $$(".mode-card").forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        state.mode = card.dataset.mode;
        $("#btn-mode-continue").disabled = false;
      });
    });
    $("#btn-mode-continue").addEventListener("click", () => {
      if (!state.mode) return;
      openObjectives();
    });
    $("#btn-mode-cancel").addEventListener("click", () => showView("dashboard"));
    $("#btn-back-dashboard").addEventListener("click", () => showView("dashboard"));
    $("#btn-load-saved")?.addEventListener("click", () => {
      switchDashboardTab("saved");
      showView("dashboard");
    });
  }

  /* ---------- Help / Legal / Promo helpers (ported) ---------- */
  function buildPersonalizedTrainingWhatsAppLink() {
    const draft = `Hi, I'm a learner from CodingHamme Practice Exam. I'm interested in personalized training for a tech course (e.g., CyberSecurity, Networking, Cloud).`;
    return `https://wa.me/${WHATSAPP_TRAINING_PHONE}?text=${encodeURIComponent(draft)}`;
  }
  function wirePromoCardLinks() {
    const link = document.getElementById("personalizedTrainingLink");
    if (link) link.href = buildPersonalizedTrainingWhatsAppLink();
  }
  function openExamResourcesLink() {
    window.open(WHATSAPP_CHANNEL_URL, "_blank", "noopener,noreferrer");
  }
  function toggleHelpFaq(btn) {
    if (!btn || !btn.classList.contains("hc-faq-question")) return;
    const item = btn.closest(".hc-faq-item");
    if (!item) return;
    const answer = item.querySelector(".hc-faq-answer");
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const list = document.getElementById("hcFaqList");
    if (list) {
      list.querySelectorAll(".hc-faq-question").forEach((q) => {
        q.setAttribute("aria-expanded", "false");
        const a = q.parentElement?.querySelector(".hc-faq-answer");
        if (a) a.hidden = true;
      });
    }
    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
      if (answer) answer.hidden = false;
    }
  }

  /* ---------- Objectives ---------- */
  function openObjectives() {
    const exam = EXAM_REGISTRY[state.activeExamId];
    const modeLabel = { guided: "Guided Practice Test", flashcard: "Flash Card Practice", exam: "Exam Simulation" }[state.mode];
    $("#obj-mode-label").textContent = modeLabel;
    $("#obj-product-title").textContent = exam.title;
    $("#cfg-mode-label").textContent = modeLabel;
    $("#cfg-product-title").textContent = exam.title;

    const examList = $("#exam-check-list");
    examList.innerHTML = "";
    (exam.exams || []).forEach((ex) => {
      examList.innerHTML += `<label class="check-row"><input type="checkbox" class="exam-cb" value="${ex.id}" checked /><span>${ex.label}</span></label>`;
    });

    const objList = $("#obj-check-list");
    objList.innerHTML = "";
    (exam.modules || exam.domains.map((d, i) => ({ id: `mod${i + 1}`, label: d }))).forEach((m) => {
      objList.innerHTML += `<label class="check-row"><input type="checkbox" class="obj-cb" value="${m.id}" checked /><span>${m.label}</span></label>`;
    });

    showView("objectives");
  }

  function collectScope() {
    const exams = [...$$(".exam-cb:checked")].map((c) => c.value);
    const modules = [...$$(".obj-cb:checked")].map((c) => c.value);
    state.config.selectedExams = exams;
    state.config.selectedModules = modules;
  }

  /* ---------- Configure ---------- */
  function openConfigure() {
    collectScope();
    const cfg = state.config;
    $("#cfg-stop-after").checked = cfg.stopAfter;
    $("#cfg-time-slider").value = cfg.timeMinutes;
    $("#cfg-time-value").textContent = `${cfg.timeMinutes} min`;
    $("#cfg-max-questions").value = cfg.maxQuestions;
    $("#cfg-qtype").value = cfg.qType;
    $("#cfg-order-obj").checked = cfg.orderByObjectives;
    $("#cfg-random-q").checked = cfg.randomizeQuestions;
    $("#cfg-marked-only").checked = cfg.markedOnly;
    $("#cfg-notes-only").checked = cfg.notesOnly;
    $("#cfg-show-count").checked = cfg.showCorrectCount;
    setChipGroup("cfg-missed-chips", cfg.missedMin);
    setChipGroup("cfg-correct-chips", cfg.correctSkip);
    showView("configure");
  }

  function setChipGroup(id, val) {
    $$(`#${id} .chip`).forEach((c) => {
      c.classList.toggle("active", Number(c.dataset.val) === Number(val));
    });
  }

  function readConfigFromUI() {
    state.config.stopAfter = $("#cfg-stop-after").checked;
    state.config.timeMinutes = Number($("#cfg-time-slider").value);
    state.config.maxQuestions = Number($("#cfg-max-questions").value) || 90;
    state.config.qType = $("#cfg-qtype").value;
    state.config.orderByObjectives = $("#cfg-order-obj").checked;
    state.config.randomizeQuestions = $("#cfg-random-q").checked;
    state.config.markedOnly = $("#cfg-marked-only").checked;
    state.config.notesOnly = $("#cfg-notes-only").checked;
    state.config.showCorrectCount = $("#cfg-show-count").checked;
    const missChip = $("#cfg-missed-chips .chip.active");
    const corrChip = $("#cfg-correct-chips .chip.active");
    state.config.missedMin = missChip ? Number(missChip.dataset.val) : 0;
    state.config.correctSkip = corrChip ? Number(corrChip.dataset.val) : 0;
  }

  /* ---------- Question filtering & launch ---------- */
  /**
   * Normalize heterogeneous question-bank schemas into the platform shape:
   * { id, qid, moduleId, domain, type, prompt, scenario, options, correct, selectCount, explanation, ... }
   * Handles legacy banks that use question/answer instead of prompt/correct and mixed option id casing.
   */
  function normalizeQuestion(raw, idx) {
    if (!raw || typeof raw !== "object") return null;
    const q = { ...raw };
    // Prompt (some banks put the stem only in scenario or question)
    if (!q.prompt && q.question) q.prompt = q.question;
    if (!q.prompt && q.scenario) {
      // Strip simple HTML to produce a readable stem for flashcards / reports
      const tmp = String(q.scenario)
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (tmp) q.prompt = tmp.length > 280 ? tmp.slice(0, 277) + "…" : tmp;
    }
    // Correct answers
    if (!q.correct && q.answer != null) {
      const ans = Array.isArray(q.answer) ? q.answer : [q.answer];
      q.correct = ans.map((a) => String(a).toLowerCase());
    }
    if (Array.isArray(q.correct)) {
      q.correct = q.correct.map((a) => String(a).toLowerCase());
    }
    // Option ids → lowercase for consistent scoring
    if (Array.isArray(q.options)) {
      q.options = q.options.map((o) => {
        if (typeof o === "string") return { id: o.toLowerCase(), text: o };
        const id = String(o.id != null ? o.id : "").toLowerCase();
        return { ...o, id };
      });
    }
    // Hotspot / config nodes
    if (Array.isArray(q.nodes)) {
      q.nodes = q.nodes.map((n) => ({
        ...n,
        id: String(n.id != null ? n.id : "").toLowerCase()
      }));
    }
    // Drag-drop zones / items ids
    if (Array.isArray(q.items)) {
      q.items = q.items.map((it) => ({ ...it, id: String(it.id != null ? it.id : "").toLowerCase() }));
    }
    if (Array.isArray(q.zones)) {
      q.zones = q.zones.map((z) => ({ ...z, id: String(z.id != null ? z.id : "").toLowerCase() }));
    }
    if (q.correct && typeof q.correct === "object" && !Array.isArray(q.correct)) {
      const mapped = {};
      Object.keys(q.correct).forEach((zoneId) => {
        const key = String(zoneId).toLowerCase();
        const vals = q.correct[zoneId];
        mapped[key] = Array.isArray(vals) ? vals.map((v) => String(v).toLowerCase()) : vals;
      });
      q.correct = mapped;
    }
    if (q.altCorrect && typeof q.altCorrect === "object") {
      const mapped = {};
      Object.keys(q.altCorrect).forEach((zoneId) => {
        const key = String(zoneId).toLowerCase();
        const vals = q.altCorrect[zoneId];
        mapped[key] = Array.isArray(vals) ? vals.map((v) => String(v).toLowerCase()) : vals;
      });
      q.altCorrect = mapped;
    }
    // Stable id / qid
    if (q.id == null) q.id = idx + 1;
    if (!q.qid) q.qid = `Q-${q.id}`;
    if (!q.type) q.type = Array.isArray(q.correct) && q.correct.length > 1 ? "multiselect" : "single";
    if (!q.domain) q.domain = q.module || "General";
    if (!q.moduleId && q.moduleId !== 0) {
      const m = String(q.module || q.qid || "").match(/mod\s*(\d+)/i);
      q.moduleId = m ? `mod${m[1]}` : "mod1";
    }
    return q;
  }

  async function loadQuestions(examId) {
    if (!isProductActivated(examId)) {
      console.warn("[CodingHamme] Refusing to load questions for locked product:", examId);
      return [];
    }
    try {
      const mod = await import(`./data/${examId}.js`);
      // Optional integrity: verify bank product code matches registry when present
      if (mod.PRODUCT_CODE) {
        const bankCode = normalizeProductCode(mod.PRODUCT_CODE);
        const expected = normalizeProductCode(EXAM_REGISTRY[examId]?.productCode || "");
        if (expected && bankCode && bankCode !== expected && bankCode.replace(/-/g, "") !== expected.replace(/-/g, "")) {
          console.warn("[CodingHamme] Product code mismatch for", examId, mod.PRODUCT_CODE);
        }
      }
      const list = mod.default || mod.questions || [];
      if (Array.isArray(list) && list.length) {
        return list.map((raw, idx) => normalizeQuestion(raw, idx)).filter(Boolean);
      }
    } catch (err) {
      console.warn("[CodingHamme] Dynamic import failed, using fallback", err);
    }
    const fallback = EXAM_REGISTRY[examId]?.questions || [];
    return fallback.map((raw, idx) => normalizeQuestion(raw, idx)).filter(Boolean);
  }

  function filterQuestions(all, cfg, examId) {
    let list = [...all];
    const exam = EXAM_REGISTRY[examId];

    // Module filter (match domain text or module id tag)
    if (cfg.selectedModules?.length && exam.modules?.length) {
      const selectedLabels = exam.modules
        .filter((m) => cfg.selectedModules.includes(m.id))
        .map((m) => m.label.toLowerCase());
      const domainMap = exam.domains || [];
      list = list.filter((q) => {
        const d = (q.domain || "").toLowerCase();
        const mod = (q.module || "").toLowerCase();
        if (cfg.selectedModules.includes(q.moduleId)) return true;
        return selectedLabels.some((l) => d.includes(l.split("–")[0].trim().toLowerCase().slice(0, 12)) || mod.includes(l.slice(0, 12)))
          || domainMap.some((dom, i) => cfg.selectedModules.includes(`mod${i + 1}`) && d.includes(dom.toLowerCase().slice(0, 10)));
      });
      // If filter emptied the bank, keep all (graceful)
      if (!list.length) list = [...all];
    }

    if (cfg.qType && cfg.qType !== "all") {
      list = list.filter((q) => q.type === cfg.qType);
    }

    // Spaced repetition: missed >= X
    if (cfg.missedMin > 0) {
      list = list.filter((q) => (store.stats[q.id]?.missed || 0) >= cfg.missedMin);
      if (!list.length) list = [...all];
    }
    // Skip correct >= X
    if (cfg.correctSkip > 0) {
      list = list.filter((q) => (store.stats[q.id]?.correct || 0) < cfg.correctSkip);
      if (!list.length) list = [...all];
    }

    if (cfg.markedOnly) {
      const marked = store.marked[examId] || [];
      list = list.filter((q) => marked.includes(q.id));
      if (!list.length) list = [...all];
    }
    if (cfg.notesOnly) {
      list = list.filter((q) => store.notes[`${examId}:${q.id}`]);
      if (!list.length) list = [...all];
    }

    if (cfg.orderByObjectives) {
      list.sort((a, b) => String(a.domain).localeCompare(String(b.domain)) || (a.id - b.id));
    }
    if (cfg.randomizeQuestions) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }

    const cap = Math.min(cfg.maxQuestions || 90, list.length);
    return list.slice(0, cap);
  }

  async function startTest(useDefaults = false) {
    if (!requireActivated(state.activeExamId)) return;
    if (!useDefaults) readConfigFromUI();
    else {
      collectScope();
      state.config = { ...defaultConfig(), selectedExams: state.config.selectedExams, selectedModules: state.config.selectedModules };
    }

    const examId = state.activeExamId;
    const exam = EXAM_REGISTRY[examId];
    const all = await loadQuestions(examId);
    if (!all.length) {
      alert(`No questions found for ${exam.title}. Ensure data/${examId}.js is available.`);
      return;
    }

    QUESTIONS = filterQuestions(all, state.config, examId);
    if (!QUESTIONS.length) {
      alert("No questions matched your filters. Try broader settings.");
      return;
    }

    PASS_PERCENT = exam.passPercentage;
    TOTAL_TIME = (state.config.stopAfter ? state.config.timeMinutes : exam.durationMinutes) * 60;
    state.timeRemaining = TOTAL_TIME;
    state.currentIndex = 0;
    state.answers = {};
    state.flagged = new Set();
    state.revealed = new Set();
    state.isPaused = false;

    QUESTIONS.forEach((q) => {
      if (q.type === "dragdrop") state.answers[q.id] = { placements: {} };
      else state.answers[q.id] = { selected: [] };
    });

    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }

    if (state.mode === "flashcard") {
      startFlashcards();
      return;
    }

    $("#exam-mode-pill").textContent = state.mode === "guided" ? "Guided" : "Exam";
    $("#exam-running-title").textContent = exam.title;
    $("#btn-view-answer").style.display = state.mode === "guided" ? "" : "none";
    showView("exam");
    updateTimerDisplay();
    if (state.mode === "exam" || state.config.stopAfter) startTimer();
    else {
      $("#timer-display").textContent = "—";
    }
    renderQuestion();
  }

  /* ---------- Timer ---------- */
  function formatTime(sec) {
    const m = Math.floor(Math.max(0, sec) / 60).toString().padStart(2, "0");
    const s = (Math.max(0, sec) % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
  function updateTimerDisplay() {
    const el = $("#timer-display");
    if (!el) return;
    el.textContent = formatTime(state.timeRemaining);
    el.classList.remove("warning", "critical");
    if (state.timeRemaining <= 60) el.classList.add("critical");
    else if (state.timeRemaining <= 300) el.classList.add("warning");
  }
  function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      if (state.isPaused) return;
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
        gradeExam();
      }
    }, 1000);
  }

  /* ---------- Rendering questions ---------- */
  function getQ() {
    return QUESTIONS[state.currentIndex];
  }

  function renderQuestion() {
    const q = getQ();
    if (!q) return;
    const idx = state.currentIndex;
    $("#question-counter").textContent = `Question ${idx + 1} of ${QUESTIONS.length}`;
    $("#question-id").textContent = `ID: ${q.qid || `CCNA-${q.id}`}`;
    const marked = (store.marked[state.activeExamId] || []).includes(q.id);
    $("#btn-mark").textContent = marked ? "Unmark Question" : "Mark Question";

    const typeLabels = {
      dragdrop: "Drag & Drop",
      multiselect: "Multiple Response",
      single: "Multiple Choice",
      hotspot: "Hotspot / Topology"
    };
    $("#q-type-badge").textContent = typeLabels[q.type] || q.type;

    const promptHtml = q.scenario
      ? q.scenario + `<p style="margin-top:1rem;font-weight:600;">${q.prompt}</p>`
      : `<p style="font-weight:600;">${q.prompt}</p>`;
    $("#scenario-content").innerHTML = promptHtml;

    const ws = $("#workspace-content");
    ws.innerHTML = "";
    $("#guided-feedback").classList.add("hidden");
    $("#guided-feedback").innerHTML = "";

    if (q.type === "dragdrop") renderDragDrop(q);
    else if (q.type === "multiselect" || q.type === "single") renderOptions(q);
    else if (q.type === "hotspot") renderHotspot(q);

    $("#btn-prev").disabled = idx === 0;
    $("#btn-next").textContent = idx === QUESTIONS.length - 1 ? "Finish →" : "Next Question →";
  }

  function renderOptions(q) {
    const a = state.answers[q.id];
    const isMulti = q.type === "multiselect";
    const required = q.selectCount || 1;
    let html = "";
    if (isMulti && state.config.showCorrectCount) {
      const count = a.selected.length;
      html += `<div class="selection-counter${count === required ? " complete" : ""}">Selected ${count} of ${required}</div>`;
    }
    html += `<div class="options-list">`;
    (q.options || []).forEach((opt) => {
      const sel = a.selected.includes(opt.id);
      html += `<label class="option-item ${isMulti ? "multi" : ""} ${sel ? "selected" : ""}" data-id="${opt.id}">
        <span class="option-marker"></span><span class="option-text">${opt.text}</span></label>`;
    });
    html += `</div>`;
    $("#workspace-content").innerHTML = html;
    $$("#workspace-content .option-item").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.id;
        if (isMulti) {
          const i = a.selected.indexOf(id);
          if (i > -1) a.selected.splice(i, 1);
          else if (a.selected.length < required) a.selected.push(id);
        } else a.selected = [id];
        renderOptions(q);
      });
    });
  }

  function renderDragDrop(q) {
    const a = state.answers[q.id];
    (q.zones || []).forEach((z) => {
      if (!a.placements[z.id]) a.placements[z.id] = [];
    });
    const placed = new Set();
    Object.values(a.placements).forEach((arr) => arr.forEach((id) => placed.add(id)));
    const available = (q.items || []).filter((i) => !placed.has(i.id));

    let html = `<div class="dnd-container"><div class="dnd-source"><h3>Available Items</h3><div class="dnd-items" id="dnd-source">`;
    available.forEach((item) => {
      html += `<div class="dnd-item" draggable="true" data-id="${item.id}">${item.text}</div>`;
    });
    html += `</div></div><div class="dnd-targets">`;
    (q.zones || []).forEach((z) => {
      html += `<div class="drop-zone" data-zone="${z.id}"><span class="zone-label">${z.label}</span>`;
      (a.placements[z.id] || []).forEach((itemId) => {
        const item = q.items.find((i) => i.id === itemId);
        if (item) {
          html += `<span class="placed-item" data-id="${item.id}">${item.text}
            <button class="remove-btn" data-id="${item.id}" data-zone="${z.id}" type="button">×</button></span>`;
        }
      });
      html += `</div>`;
    });
    html += `</div><div class="dnd-actions"><button class="btn-reset" id="btn-reset-dnd" type="button">Reset All</button></div></div>`;
    $("#workspace-content").innerHTML = html;

    const source = $("#dnd-source");
    source?.querySelectorAll(".dnd-item").forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.dataset.id);
        e.target.classList.add("dragging");
      });
      item.addEventListener("dragend", (e) => e.target.classList.remove("dragging"));
    });
    $$("#workspace-content .drop-zone").forEach((zone) => {
      zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("drag-over"); });
      zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        const itemId = e.dataTransfer.getData("text/plain");
        if (!itemId) return;
        Object.keys(a.placements).forEach((zid) => {
          a.placements[zid] = a.placements[zid].filter((id) => id !== itemId);
        });
        if (!a.placements[zone.dataset.zone].includes(itemId)) a.placements[zone.dataset.zone].push(itemId);
        renderDragDrop(q);
      });
    });
    $$("#workspace-content .remove-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        a.placements[btn.dataset.zone] = a.placements[btn.dataset.zone].filter((id) => id !== btn.dataset.id);
        renderDragDrop(q);
      });
    });
    $("#btn-reset-dnd")?.addEventListener("click", () => {
      (q.zones || []).forEach((z) => { a.placements[z.id] = []; });
      renderDragDrop(q);
    });
  }

  function renderHotspot(q) {
    const a = state.answers[q.id];
    if (q.useConfigHotspot) {
      const lines = [
        { id: "l1", text: "username admin privilege 15 secret Cisco123" },
        { id: "l2", text: "aaa new-model" },
        { id: "l3", text: "username helpdesk privilege 15 secret Help456" },
        { id: "l4", text: "line vty 0 4" },
        { id: "l5", text: " login local" },
        { id: "l6", text: " transport input ssh" }
      ];
      if (state.activeExamId === "sc-100") {
        lines[0].text = "Global Administrator – admin@contoso.com";
        lines[2].text = "Global Administrator – helpdesk@contoso.com";
        lines[1].text = "Security Reader – secops@contoso.com";
        lines[3].text = "User Administrator – hr@contoso.com";
        lines[4].text = "Conditional Access – enabled";
        lines[5].text = "PIM – eligible only";
      }
      let html = `<div class="hotspot-container"><div class="code-block">`;
      lines.forEach((line) => {
        const sel = a.selected.includes(line.id) ? "selected" : "";
        html += `<div class="config-line option-item ${sel}" data-id="${line.id}" style="cursor:pointer;margin-bottom:0.35rem;">
          <span class="option-marker" style="border-radius:4px;"></span>
          <span class="option-text" style="font-family:var(--mono);font-size:0.85rem;">${line.text}</span></div>`;
      });
      html += `</div><p class="hotspot-instruction">Click the lines that violate least privilege.</p>
        <p class="hotspot-selected-count">Selected: ${a.selected.length}${q.selectCount ? " / " + q.selectCount : ""}</p></div>`;
      $("#workspace-content").innerHTML = html;
      $$("#workspace-content .config-line").forEach((el) => {
        el.addEventListener("click", () => {
          const id = el.dataset.id;
          const i = a.selected.indexOf(id);
          if (i > -1) a.selected.splice(i, 1);
          else if (a.selected.length < (q.selectCount || 2)) a.selected.push(id);
          renderHotspot(q);
        });
      });
      return;
    }

    let html = `<div class="hotspot-container"><div class="hotspot-diagram">`;
    (q.nodes || []).forEach((node) => {
      const sel = a.selected.includes(node.id) ? "selected" : "";
      html += `<div class="hotspot-node ${sel}" data-id="${node.id}" style="left:${node.x}%;top:${node.y}%;transform:translate(-50%,-50%);">
        ${String(node.label).replace(/\n/g, "<br>")}</div>`;
    });
    html += `</div><p class="hotspot-instruction">${q.prompt}</p>
      <p class="hotspot-selected-count">Selected: ${a.selected.length}${q.selectCount ? " / " + q.selectCount : ""}</p></div>`;
    $("#workspace-content").innerHTML = html;
    const max = q.selectCount || 1;
    $$("#workspace-content .hotspot-node").forEach((node) => {
      node.addEventListener("click", () => {
        const id = node.dataset.id;
        const i = a.selected.indexOf(id);
        if (i > -1) a.selected.splice(i, 1);
        else if (max === 1) a.selected = [id];
        else if (a.selected.length < max) a.selected.push(id);
        renderHotspot(q);
      });
    });
  }

  /* ---------- Scoring ---------- */
  function arraysEqual(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    const sa = [...a].sort();
    const sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  function scoreQuestion(q) {
    const a = state.answers[q.id];
    if (!a) return false;
    if (q.type === "dragdrop") {
      let match = true;
      for (const zoneId of Object.keys(q.correct || {})) {
        if (!arraysEqual(q.correct[zoneId] || [], a.placements[zoneId] || [])) {
          match = false;
          break;
        }
      }
      if (match) return true;
      if (q.altCorrect) {
        match = true;
        for (const zoneId of Object.keys(q.altCorrect)) {
          if (!arraysEqual(q.altCorrect[zoneId] || [], a.placements[zoneId] || [])) {
            match = false;
            break;
          }
        }
        return match;
      }
      return false;
    }
    return arraysEqual(a.selected || [], q.correct || []);
  }

  function isAnswered(q) {
    const a = state.answers[q.id];
    if (!a) return false;
    if (q.type === "dragdrop") return Object.values(a.placements || {}).some((arr) => arr.length > 0);
    return (a.selected || []).length > 0;
  }

  function gradeExam() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    let correct = 0;
    const details = [];
    const domainScores = {};
    QUESTIONS.forEach((q) => {
      const ok = scoreQuestion(q);
      if (ok) correct++;
      details.push({ q, isCorrect: ok });
      if (!domainScores[q.domain]) domainScores[q.domain] = { correct: 0, total: 0 };
      domainScores[q.domain].total++;
      if (ok) domainScores[q.domain].correct++;

      // Update spaced-repetition stats
      if (!store.stats[q.id]) store.stats[q.id] = { missed: 0, correct: 0 };
      if (ok) store.stats[q.id].correct++;
      else store.stats[q.id].missed++;
    });

    const percent = Math.round((correct / QUESTIONS.length) * 100);
    const passed = percent >= PASS_PERCENT;
    const timeUsed = TOTAL_TIME - state.timeRemaining;

    // History
    if (!store.history[state.activeExamId]) store.history[state.activeExamId] = [];
    store.history[state.activeExamId].unshift({
      date: new Date().toISOString(),
      mode: state.mode,
      percent,
      correct,
      total: QUESTIONS.length,
      timeUsed,
      passed
    });
    store.history[state.activeExamId] = store.history[state.activeExamId].slice(0, 20);
    saveStore(store);

    // Report UI
    const exam = EXAM_REGISTRY[state.activeExamId];
    $("#report-subtitle").textContent = `${exam.code} · ${exam.title} · ${state.mode}`;
    $("#pass-threshold").textContent = `${PASS_PERCENT}%`;
    const circle = $("#score-circle");
    circle.className = `score-circle ${passed ? "pass" : "fail"}`;
    $("#score-percent").textContent = `${percent}%`;
    $("#pass-fail").textContent = passed ? "PASS" : "FAIL";
    $("#pass-fail").style.color = passed ? "var(--success)" : "var(--danger)";
    $("#correct-count").textContent = `${correct} / ${QUESTIONS.length}`;
    $("#time-used").textContent = formatTime(timeUsed);

    const domainBars = $("#domain-bars");
    domainBars.innerHTML = "";
    Object.entries(domainScores).forEach(([name, s]) => {
      const pct = Math.round((s.correct / s.total) * 100);
      const color = pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--danger)";
      domainBars.innerHTML += `<div class="domain-bar-row">
        <span class="domain-name">${name}</span>
        <div class="domain-track"><div class="domain-fill" style="width:${pct}%;background:${color};"></div></div>
        <span class="domain-pct">${pct}%</span></div>`;
    });

    const reviewList = $("#review-list");
    reviewList.innerHTML = "";
    details.forEach((d, i) => {
      reviewList.innerHTML += `<div class="review-item ${d.isCorrect ? "correct" : "incorrect"}">
        <div class="review-q-header">
          <span class="review-q-num">Question ${i + 1} · ${d.q.domain}</span>
          <span class="review-status ${d.isCorrect ? "ok" : "bad"}">${d.isCorrect ? "Correct" : "Incorrect"}</span>
        </div>
        <div class="review-prompt">${d.q.prompt}</div>
        <div class="review-explanation"><strong>Explanation:</strong> ${d.q.explanation || "—"}</div>
      </div>`;
    });

    showView("report");
  }

  /* ---------- Flash cards ---------- */
  function startFlashcards() {
    state.currentIndex = 0;
    $("#fc-title").textContent = EXAM_REGISTRY[state.activeExamId].title;
    showView("flashcard");
    renderFlashcard();
  }
  function renderFlashcard() {
    const q = QUESTIONS[state.currentIndex];
    if (!q) return;
    $("#fc-front").textContent = q.prompt;
    $("#fc-front").classList.remove("hidden");
    $("#fc-back").classList.add("hidden");
    let back = q.explanation || "";
    if (q.options && q.correct) {
      const texts = q.correct.map((id) => q.options.find((o) => o.id === id)?.text || id);
      back = `Answer: ${texts.join("; ")}\n\n${back}`;
    }
    $("#fc-back").textContent = back;
    $("#fc-counter").textContent = `${state.currentIndex + 1} / ${QUESTIONS.length}`;
  }

  /* ---------- Notes / History ---------- */
  function openHistory(examId) {
    if (!requireActivated(examId)) return;
    const list = store.history[examId] || [];
    const el = $("#history-list");
    if (!list.length) {
      el.innerHTML = `<p style="color:var(--text-secondary);padding:1rem;">No history yet for this product.</p>`;
    } else {
      el.innerHTML = list.map((h) => `
        <div class="history-item">
          <span>${new Date(h.date).toLocaleString()} · ${h.mode}</span>
          <strong style="color:${h.passed ? "var(--success)" : "var(--danger)"}">${h.percent}% (${h.correct}/${h.total})</strong>
        </div>`).join("");
    }
    $("#modal-history").classList.remove("hidden");
  }

  function openProductNotes(examId) {
    if (!requireActivated(examId)) return;
    const keys = Object.keys(store.notes).filter((k) => k.startsWith(examId + ":"));
    const el = $("#history-list");
    if (!keys.length) {
      el.innerHTML = `<p style="color:var(--text-secondary);padding:1rem;">No notes saved for this product.</p>`;
    } else {
      el.innerHTML = keys.map((k) => {
        const qid = k.split(":")[1];
        return `<div class="history-item"><span>Q ${qid}</span><span>${(store.notes[k] || "").slice(0, 80)}</span></div>`;
      }).join("");
    }
    $("#modal-history").classList.remove("hidden");
  }

  function openNotesModal() {
    const q = getQ();
    if (!q) return;
    state.notesQid = q.id;
    const key = `${state.activeExamId}:${q.id}`;
    $("#notes-editor").value = store.notes[key] || "";
    $("#modal-notes").classList.remove("hidden");
  }

  /* ---------- Event wiring ---------- */
  function bindGlobal() {
    $("#btn-activate-product")?.addEventListener("click", () => {
      const input = $("#activate-code");
      if (input) input.value = "";
      const msg = $("#activate-feedback");
      if (msg) { msg.textContent = ""; msg.className = "activate-feedback"; }
      $("#modal-activate").classList.remove("hidden");
      input?.focus();
    });
    $("#btn-do-activate")?.addEventListener("click", () => {
      const raw = $("#activate-code")?.value || "";
      const result = activateByProductCode(raw);
      const msg = $("#activate-feedback");
      if (msg) {
        msg.textContent = result.message;
        msg.className = "activate-feedback " + (result.ok ? "ok" : "err");
      }
      if (result.ok) {
        renderDashboard();
        // Keep modal open briefly so user sees success, then close
        setTimeout(() => {
          $("#modal-activate")?.classList.add("hidden");
          if ($("#activate-code")) $("#activate-code").value = "";
          if (msg) { msg.textContent = ""; msg.className = "activate-feedback"; }
        }, 900);
      }
    });
    $("#activate-code")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        $("#btn-do-activate")?.click();
      }
    });
    $("#btn-help")?.addEventListener("click", () => showView("helpcenter"));
    $("#btn-tools")?.addEventListener("click", () => showView("tools"));
    $("#btn-back-from-tools")?.addEventListener("click", () => { showView("dashboard"); renderDashboard(); });
    $("#btn-tools-activate")?.addEventListener("click", () => $("#modal-activate").classList.remove("hidden"));
    $("#btn-tools-resources")?.addEventListener("click", openExamResourcesLink);
    $("#footer-legal")?.addEventListener("click", (e) => { e.preventDefault(); showView("legal"); });
    $("#footer-privacy")?.addEventListener("click", (e) => { e.preventDefault(); showView("privacy"); });
    $("#btn-back-from-privacy")?.addEventListener("click", () => { showView("dashboard"); renderDashboard(); });
    $("#btn-back-from-legal")?.addEventListener("click", () => { showView("dashboard"); renderDashboard(); });
    $("#btn-back-from-help")?.addEventListener("click", () => { showView("dashboard"); renderDashboard(); });
    $("#btn-hc-learn-more")?.addEventListener("click", openExamResourcesLink);
    document.getElementById("hcFaqList")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".hc-faq-question");
      if (btn) toggleHelpFaq(btn);
    });
    $$(".product-tabs .tab").forEach((tab) => {
      tab.addEventListener("click", () => switchDashboardTab(tab.dataset.tab));
    });
    wirePromoCardLinks();

    $$("[data-close]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-close");
        if (id) $(`#${id}`)?.classList.add("hidden");
      });
    });

    $("#exam-toggle-all")?.addEventListener("change", (e) => {
      $$(".exam-cb").forEach((c) => { c.checked = e.target.checked; });
    });
    $("#obj-toggle-all")?.addEventListener("change", (e) => {
      $$(".obj-cb").forEach((c) => { c.checked = e.target.checked; });
    });

    $("#btn-obj-cancel")?.addEventListener("click", () => showView("mode-select"));
    $("#btn-obj-default")?.addEventListener("click", () => startTest(true));
    $("#btn-obj-continue")?.addEventListener("click", () => openConfigure());

    $("#cfg-time-slider")?.addEventListener("input", (e) => {
      $("#cfg-time-value").textContent = `${e.target.value} min`;
    });
    $$(".chip-group").forEach((group) => {
      group.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          group.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");
        });
      });
    });
    $("#btn-cfg-restore")?.addEventListener("click", () => {
      state.config = defaultConfig();
      openConfigure();
    });
    $("#btn-cfg-save")?.addEventListener("click", () => {
      readConfigFromUI();
      alert("Settings saved for this session.");
    });
    $("#btn-cfg-cancel")?.addEventListener("click", () => showView("objectives"));
    $("#btn-cfg-start")?.addEventListener("click", () => startTest(false));

    $("#btn-prev")?.addEventListener("click", () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
      }
    });
    $("#btn-next")?.addEventListener("click", () => {
      if (state.currentIndex >= QUESTIONS.length - 1) {
        if (state.mode === "guided") gradeExam();
        else $("#modal-submit").classList.remove("hidden");
        return;
      }
      state.currentIndex++;
      renderQuestion();
    });
    $("#btn-mark")?.addEventListener("click", () => {
      const q = getQ();
      if (!q) return;
      if (!store.marked[state.activeExamId]) store.marked[state.activeExamId] = [];
      const arr = store.marked[state.activeExamId];
      const i = arr.indexOf(q.id);
      if (i > -1) arr.splice(i, 1);
      else arr.push(q.id);
      saveStore(store);
      renderQuestion();
    });
    $("#btn-feedback")?.addEventListener("click", () => alert("Thank you. Feedback has been recorded for CodingHamme content review."));
    $("#btn-view-answer")?.addEventListener("click", () => {
      const q = getQ();
      if (!q) return;
      const ok = scoreQuestion(q);
      const fb = $("#guided-feedback");
      fb.classList.remove("hidden", "correct", "incorrect");
      fb.classList.add(ok ? "correct" : "incorrect");
      fb.innerHTML = `<strong>${ok ? "Correct" : "Not correct"}.</strong> ${q.explanation || ""}`;
      state.revealed.add(q.id);
    });
    $("#btn-reset-q")?.addEventListener("click", () => {
      const q = getQ();
      if (!q) return;
      if (q.type === "dragdrop") state.answers[q.id] = { placements: {} };
      else state.answers[q.id] = { selected: [] };
      renderQuestion();
    });
    $("#btn-create-notes")?.addEventListener("click", openNotesModal);
    $("#btn-save-notes")?.addEventListener("click", () => {
      if (state.notesQid != null) {
        store.notes[`${state.activeExamId}:${state.notesQid}`] = $("#notes-editor").value;
        saveStore(store);
      }
      $("#modal-notes").classList.add("hidden");
    });
    $("#btn-grade-exam")?.addEventListener("click", () => {
      const answered = QUESTIONS.filter(isAnswered).length;
      $("#submit-summary").textContent = `You have answered ${answered} of ${QUESTIONS.length} questions. Unanswered items will be scored as incorrect.`;
      $("#modal-submit").classList.remove("hidden");
    });
    $("#btn-confirm-grade")?.addEventListener("click", () => {
      $("#modal-submit").classList.add("hidden");
      gradeExam();
    });
    $("#btn-save-exam")?.addEventListener("click", () => {
      store.savedSessions = store.savedSessions || [];
      store.savedSessions.push({
        examId: state.activeExamId,
        mode: state.mode,
        index: state.currentIndex,
        answers: state.answers,
        timeRemaining: state.timeRemaining,
        config: { ...state.config },
        questions: QUESTIONS,
        date: new Date().toISOString()
      });
      // Cap history of saved sessions
      if (store.savedSessions.length > 15) store.savedSessions = store.savedSessions.slice(-15);
      saveStore(store);
      alert("Progress saved. Resume anytime from Load Saved Exams.");
    });
    $("#btn-new-exam")?.addEventListener("click", () => {
      if (confirm("Start a new exam? Current progress will be lost unless saved.")) {
        openModeSelect(state.activeExamId);
      }
    });
    $("#btn-review-exam")?.addEventListener("click", () => {
      alert("Use Grade Exam to finish and open the full review report.");
    });
    $("#btn-retake")?.addEventListener("click", () => openModeSelect(state.activeExamId));
    $("#btn-back-to-selection")?.addEventListener("click", () => {
      showView("dashboard");
      renderDashboard();
    });

    // Flashcard
    $("#btn-fc-flip")?.addEventListener("click", () => {
      $("#fc-front").classList.toggle("hidden");
      $("#fc-back").classList.toggle("hidden");
    });
    $("#flashcard")?.addEventListener("click", () => {
      $("#fc-front").classList.toggle("hidden");
      $("#fc-back").classList.toggle("hidden");
    });
    $("#btn-fc-prev")?.addEventListener("click", () => {
      if (state.currentIndex > 0) { state.currentIndex--; renderFlashcard(); }
    });
    $("#btn-fc-next")?.addEventListener("click", () => {
      if (state.currentIndex < QUESTIONS.length - 1) { state.currentIndex++; renderFlashcard(); }
    });
    $("#btn-fc-exit")?.addEventListener("click", () => showView("dashboard"));

    $("#product-search")?.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      $$(".product-card").forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = !q || text.includes(q) ? "" : "none";
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    bindModeCards();
    bindGlobal();
    renderDashboard();
    showView("dashboard");
  }

  init();
})();
