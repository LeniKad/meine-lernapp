// --- Data: Word Packages ---
const wordPackages = [
    { id: 'paket1', level: 'Einfach 1', title: 'Paket 1', words: ['und', 'in', 'zu', 'der', 'die', 'das', 'er', 'sie', 'es', 'auf'] },
    { id: 'paket2', level: 'Einfach 2', title: 'Paket 2', words: ['mit', 'von', 'ist', 'im', 'an', 'für', 'was', 'wie', 'wir', 'aus'] },
    { id: 'paket3', level: 'Mittel 1', title: 'Paket 3', words: ['sich', 'ein', 'eine', 'aber', 'auch', 'als', 'bei', 'noch', 'nur', 'so'] },
    { id: 'paket4', level: 'Mittel 2', title: 'Paket 4', words: ['oder', 'sind', 'dann', 'um', 'doch', 'mehr', 'vor', 'zum', 'schon', 'wenn'] },
    { id: 'paket5', level: 'Schwerer 1', title: 'Paket 5', words: ['wieder', 'immer', 'etwas', 'nichts', 'weil', 'jetzt', 'alles', 'damit', 'selbst', 'durch'] },
    { id: 'paket6', level: 'Schwerer 2', title: 'Paket 6', words: ['dieses', 'werden', 'können', 'haben', 'machen', 'sehr', 'einmal', 'heute', 'ganz', 'viel'] },
    { id: 'paket7', level: 'Pronomen 1', title: 'Paket 7', words: ['sein', 'seine', 'ihr', 'ihre', 'mein', 'meine', 'dein', 'deine', 'ihm', 'ihn'] },
    { id: 'paket8', level: 'Pronomen 2', title: 'Paket 8', words: ['unser', 'unsere', 'euch', 'mich', 'dich', 'uns', 'man', 'wer', 'wo', 'wann'] },
    { id: 'paket9', level: 'Profi 1', title: 'Paket 9', words: ['gehen', 'stehen', 'sehen', 'ohne', 'sehr', 'mehr', 'ihn', 'ihnen', 'fahren', 'Jahr'] },
    { id: 'paket10', level: 'Profi 2', title: 'Paket 10', words: ['dann', 'denn', 'wenn', 'dass', 'muss', 'voll', 'soll', 'will', 'kann', 'Herr'] },
    { id: 'paket11', level: 'Profi 3', title: 'Paket 11', words: ['deshalb', 'trotzdem', 'nachdem', 'bevor', 'darum', 'davor', 'danach', 'dabei', 'wieso', 'warum'] },
    { id: 'paket12', level: 'Spezial', title: 'Paket 12', words: ['wie', 'was', 'wer', 'wo', 'wann', 'warum', 'wieso', 'weshalb', 'wohin', 'woher'] },
    { id: 'paket_abc_gross', level: 'ABC', title: 'Großbuchstaben', words: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü'] },
    { id: 'paket_abc_klein', level: 'abc', title: 'Kleinbuchstaben', words: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'] }
];

function generateMathPackages() {
    const packages = [];
    for (let logic = 1; logic <= 10; logic++) {
        let items = [];
        for (let base = 1; base <= 10; base++) {
            items.push({ q: `${base} x ${logic} = `, a: (base * logic).toString() });
        }
        packages.push({
            id: `mathe${logic}`,
            level: '1x1',
            title: `${logic}er Reihe`,
            items: items
        });
    }
    // Profi-Mix
    let profiItems = [];
    for(let i=0; i<10; i++){
        let factorA = Math.floor(Math.random() * 10) + 1;
        let factorB = Math.floor(Math.random() * 10) + 1;
        profiItems.push({ q: `${factorA} x ${factorB} = `, a: (factorA * factorB).toString() });
    }
    packages.push({
        id: `mathe_profi`,
        level: 'Profi',
        title: `Mix (Zufall)`,
        items: profiItems
    });

    // Zehner Ergänzen
    let ergaenzenItems = [];
    let possibleTargets = [20, 30, 40, 50, 60, 70, 80, 90, 100];
    for(let i=0; i<10; i++) {
        let target = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        let startNum = Math.floor(Math.random() * (target - 1)) + 1;
        let missing = target - startNum;
        ergaenzenItems.push({ q: `${startNum} + _ = ${target}`, a: missing.toString() });
    }
    packages.push({
        id: `mathe_ergaenzen`,
        level: 'Kopfrechnen',
        title: `Zehner ergänzen`,
        items: ergaenzenItems
    });

    // Zehnerübergang Plus
    let zehnerPlusItems = [
        { q: "8 + 5 = ", a: "13" },
        { q: "7 + 4 = ", a: "11" },
        { q: "9 + 6 = ", a: "15" },
        { q: "6 + 5 = ", a: "11" },
        { q: "8 + 3 = ", a: "11" },
        { q: "7 + 6 = ", a: "13" },
        { q: "9 + 4 = ", a: "13" },
        { q: "5 + 7 = ", a: "12" },
        { q: "8 + 7 = ", a: "15" },
        { q: "9 + 2 = ", a: "11" }
    ];
    packages.push({ id: `mathe_z_plus`, level: 'Zehner', title: `Übergang (+)`, items: zehnerPlusItems });

    // Zehnerübergang Minus
    let zehnerMinusItems = [
        { q: "13 - 5 = ", a: "8" },
        { q: "11 - 4 = ", a: "7" },
        { q: "15 - 6 = ", a: "9" },
        { q: "11 - 5 = ", a: "6" },
        { q: "12 - 3 = ", a: "9" },
        { q: "13 - 6 = ", a: "7" },
        { q: "14 - 9 = ", a: "5" },
        { q: "12 - 7 = ", a: "5" },
        { q: "15 - 7 = ", a: "8" },
        { q: "11 - 2 = ", a: "9" }
    ];
    packages.push({ id: `mathe_z_minus`, level: 'Zehner', title: `Übergang (-)`, items: zehnerMinusItems });

    // 20er Übergang Plus
    let zwanzigerPlusItems = [
        { q: "18 + 5 = ", a: "23" },
        { q: "17 + 4 = ", a: "21" },
        { q: "19 + 6 = ", a: "25" },
        { q: "16 + 5 = ", a: "21" },
        { q: "18 + 3 = ", a: "21" },
        { q: "17 + 6 = ", a: "23" },
        { q: "19 + 4 = ", a: "23" },
        { q: "15 + 7 = ", a: "22" },
        { q: "18 + 7 = ", a: "25" },
        { q: "19 + 2 = ", a: "21" }
    ];
    packages.push({ id: `mathe_z20_plus`, level: 'Zwanziger', title: `Übergang (+)`, items: zwanzigerPlusItems });

    // 20er Übergang Minus
    let zwanzigerMinusItems = [
        { q: "23 - 5 = ", a: "18" },
        { q: "21 - 4 = ", a: "17" },
        { q: "25 - 6 = ", a: "19" },
        { q: "21 - 5 = ", a: "16" },
        { q: "22 - 3 = ", a: "19" },
        { q: "23 - 6 = ", a: "17" },
        { q: "24 - 9 = ", a: "15" },
        { q: "22 - 7 = ", a: "15" },
        { q: "25 - 7 = ", a: "18" },
        { q: "21 - 2 = ", a: "19" }
    ];
    packages.push({ id: `mathe_z20_minus`, level: 'Zwanziger', title: `Übergang (-)`, items: zwanzigerMinusItems });

    return packages;
}
const mathPackages = generateMathPackages();

// --- Application State ---
let englishPackages = JSON.parse(localStorage.getItem('custom_english_packages') || '[]');
let isMultipleChoice = false;
let currentEnglishDir = 'de-en';
let currentSubject = 'deutsch'; 
let currentPackage = null;
let wordIndex = 0;
let startTime = 0;
let recognition = null;
let isTrainingActive = false;
let currentInputMode = 'mic';
let currentAttempts = 0;
let failedTasks = [];

// --- DOM Elements ---
const screens = {
    subjects: document.getElementById('screen-subjects'),
    start: document.getElementById('screen-start'),
    training: document.getElementById('screen-training'),
    result: document.getElementById('screen-result'),
    'vocab-editor': document.getElementById('screen-vocab-editor')
};
const packagesContainer = document.getElementById('packages-container');
const currentWordEl = document.getElementById('current-word');
const progressBar = document.getElementById('progress-bar');
const btnCancel = document.getElementById('btn-cancel');
const micStatus = document.getElementById('mic-status');
const btnNextManual = document.getElementById('btn-next-manual');
const mathAnswerInput = document.getElementById('math-answer-input');

// Result elements
const resTime = document.getElementById('res-time');
const resSpb = document.getElementById('res-spb');
const resSpbCard = document.getElementById('res-spb-card');
const feedbackMsg = document.getElementById('feedback-message');
const btnRestart = document.getElementById('btn-restart-level');
const btnBackHome = document.getElementById('btn-back-home');

// --- Initialization ---
function init() {
    // Standard-Screen wird in HTML über .active geregelt.
    setupSpeechRecognition();
    
    // Event Listeners
    btnCancel.addEventListener('click', cancelTraining);
    btnNextManual.addEventListener('click', () => { if (isTrainingActive) nextWord(); });
    btnRestart.addEventListener('click', () => startTraining(currentPackage.id));
    btnBackHome.addEventListener('click', () => showScreen('start'));
    
    if (mathAnswerInput) {
        mathAnswerInput.addEventListener('input', () => {
            handleAnswerSubmission(false);
        });
        
        mathAnswerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAnswerSubmission(true);
            }
        });
    }
    
    const mathAnswerForm = document.getElementById('math-answer-form');
    if (mathAnswerForm) {
        mathAnswerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleAnswerSubmission(true);
        });
    }
}

function handleAnswerSubmission(isExplicitSubmit) {
    if (!isTrainingActive || currentInputMode !== 'keyboard') return;
    if (currentSubject === 'englisch' && isMultipleChoice) return;
    
    let targetTxt = '';
    if (currentSubject === 'deutsch') targetTxt = currentPackage.words[wordIndex];
    else if (currentSubject === 'mathe') targetTxt = currentPackage.items[wordIndex].a;
    else if (currentSubject === 'englisch') targetTxt = currentEnglishDir === 'de-en' ? currentPackage.items[wordIndex].a : currentPackage.items[wordIndex].q;
    
    let currentVal = mathAnswerInput.value.trim().toLowerCase();
    
    if (!currentVal) return;

    const isCorrect = currentSubject === 'mathe' 
        ? currentVal.replace(/\s+/g, '') === targetTxt.toString().toLowerCase()
        : currentVal === targetTxt.toString().toLowerCase();

    if (isCorrect) {
        // Richtig
        mathAnswerInput.style.borderColor = "var(--secondary)";
        mathAnswerInput.style.color = "var(--secondary)";
        mathAnswerInput.disabled = true;
        setTimeout(() => {
            nextWord();
        }, 400);
    } else if (isExplicitSubmit) {
        // Falsch (nur bei Enter werten)
        currentAttempts++;
        if (currentAttempts >= 3) {
            // Nach 3 Versuchen aufgeben
            failedTasks.push(currentSubject === 'deutsch' ? {q: currentPackage.words[wordIndex], a: currentPackage.words[wordIndex]} : (currentSubject === 'englisch' ? {q: currentWordEl.textContent, a: targetTxt} : currentPackage.items[wordIndex]));
            mathAnswerInput.style.borderColor = "#EF4444";
            mathAnswerInput.style.color = "#EF4444";
            mathAnswerInput.value = targetTxt; // Lösung kurz zeigen
            mathAnswerInput.disabled = true;
            setTimeout(() => {
                nextWord();
            }, 1500);
        } else {
            // Versuch falsch, aber noch Chancen
            mathAnswerInput.style.borderColor = "#EF4444";
            mathAnswerInput.style.color = "#EF4444";
            mathAnswerInput.disabled = true;
            setTimeout(() => {
                mathAnswerInput.style.borderColor = "var(--primary)";
                mathAnswerInput.style.color = "var(--primary)";
                mathAnswerInput.value = '';
                mathAnswerInput.disabled = false;
                mathAnswerInput.focus();
            }, 500);
        }
    }
}

window.openVocabEditor = function() {
    document.getElementById('vocab-list-title').value = '';
    const container = document.getElementById('vocab-rows-container');
    container.innerHTML = '';
    addVocabRow(); addVocabRow(); addVocabRow();
    showScreen('vocab-editor');
}

window.autoTranslate = async function(enInputEl) {
    const enWord = enInputEl.value.trim();
    if (!enWord) return;
    
    const row = enInputEl.closest('.vocab-row');
    const deInputEl = row.querySelector('.vocab-de');
    
    // Nur übersetzen, wenn das deutsche Feld noch leer ist
    if (deInputEl.value.trim() !== '') return;
    
    const oldPlaceholder = deInputEl.placeholder;
    deInputEl.placeholder = "Übersetze...";
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(enWord)}&langpair=en|de`);
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
            deInputEl.value = data.responseData.translatedText;
        }
    } catch(e) {
        console.error("Translation error", e);
    } finally {
        deInputEl.placeholder = oldPlaceholder;
    }
}

window.addVocabRow = function(de = '', en = '') {
    const container = document.getElementById('vocab-rows-container');
    const row = document.createElement('div');
    row.className = 'vocab-row';
    row.innerHTML = `
        <input type="text" class="vocab-input vocab-en" placeholder="Englisch" value="${en}" onblur="autoTranslate(this)">
        <input type="text" class="vocab-input vocab-de" placeholder="Deutsch" value="${de}">
        <button class="vocab-delete-btn" onclick="this.parentElement.remove()">🗑️</button>
    `;
    container.appendChild(row);
}

window.saveVocabPackage = function() {
    const title = document.getElementById('vocab-list-title').value.trim();
    if (!title) return alert("Bitte vergib einen Namen für die Liste.");
    const rows = document.querySelectorAll('.vocab-row');
    let items = [];
    rows.forEach(row => {
        const de = row.querySelector('.vocab-de').value.trim();
        const en = row.querySelector('.vocab-en').value.trim();
        if (de && en) items.push({ q: de, a: en });
    });
    if (items.length < 4) return alert("Bitte trage mindestens 4 Vokabelpaare ein (für Multiple Choice benötigt).");
    
    englishPackages.push({
        id: 'vocab_' + Date.now(),
        level: 'Eigene Liste',
        title: title,
        items: items
    });
    localStorage.setItem('custom_english_packages', JSON.stringify(englishPackages));
    openSubject('englisch');
}

window.handleMCAnswer = function(btn, selectedVal, targetAns) {
    if (!isTrainingActive) return;
    const allBtns = document.querySelectorAll('.mc-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selectedVal === targetAns) {
        btn.classList.add('correct');
        setTimeout(() => nextWord(), 600);
    } else {
        btn.classList.add('wrong');
        currentAttempts++;
        const correctBtn = Array.from(allBtns).find(b => b.textContent === targetAns);
        
        if (currentAttempts >= 3) {
            failedTasks.push({ q: currentWordEl.textContent, a: targetAns });
            if (correctBtn) correctBtn.classList.add('correct');
            setTimeout(() => nextWord(), 1500);
        } else {
            setTimeout(() => {
                btn.classList.remove('wrong');
                allBtns.forEach(b => b.disabled = false);
            }, 600);
        }
    }
}

window.openSubject = function(subject) {
    currentSubject = subject;
    
    // Dynamic Header Text
    const titleEl = document.getElementById('subject-header-title');
    const descEl = document.getElementById('subject-header-desc');
    if (titleEl && descEl) {
        if (subject === 'deutsch') {
            titleEl.textContent = '🚀 Blitzlesen';
            descEl.textContent = 'Trainiere deinen Sichtwortschatz!';
        } else if (subject === 'mathe') {
            titleEl.textContent = '🔢 Das 1x1';
            descEl.textContent = 'Lerne die Malfolgen rasend schnell!';
        } else if (subject === 'englisch') {
            titleEl.textContent = '🌍 Vokabeln';
            descEl.textContent = 'Erstelle und lerne eigene Listen!';
        }
    }

    renderPackages();
    showScreen('start');
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// --- Home Screen Logic ---
function renderPackages() {
    const mathOptions = document.getElementById('math-options-container');
    const englishOptions = document.getElementById('english-options-container');
    const createVocab = document.getElementById('create-vocab-container');
    
    if (mathOptions) mathOptions.style.display = (currentSubject === 'mathe') ? 'flex' : 'none';
    if (englishOptions) englishOptions.style.display = (currentSubject === 'englisch') ? 'flex' : 'none';
    if (createVocab) createVocab.style.display = (currentSubject === 'englisch') ? 'block' : 'none';

    packagesContainer.innerHTML = '';
    const activePackages = currentSubject === 'deutsch' ? wordPackages : (currentSubject === 'mathe' ? mathPackages : englishPackages);
    
    activePackages.forEach(pkg => {
        const bestDataRaw = localStorage.getItem(`blitzlesen_${pkg.id}`);
        let statsHtml = '';
        
        if (bestDataRaw) {
            const parsed = JSON.parse(bestDataRaw);
            if (currentSubject === 'deutsch' && parsed.spb) {
                statsHtml = `<div class="pack-stats">Bestwert: ${parsed.spb.toFixed(2)} spB</div>`;
            } else if (currentSubject === 'mathe' && parsed.time) {
                statsHtml = `<div class="pack-stats">Rekord: ${parsed.time.toFixed(1)} s</div>`;
            }
        }
        
        let previewTxt = '';
        if(currentSubject === 'deutsch'){
            previewTxt = pkg.words.slice(0, 3).join(', ') + '...';
        } else if(currentSubject === 'mathe') {
            previewTxt = pkg.items.slice(0, 3).map(i => i.q.replace(' = ','')).join(', ') + '...';
        } else {
            previewTxt = pkg.items.slice(0, 3).map(i => `${i.q} ➔ ${i.a}`).join(', ') + '...';
        }

        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                <div>
                    <div class="pack-level">${pkg.level}</div>
                    <div class="pack-title">${pkg.title}</div>
                    <div class="pack-preview">${previewTxt}</div>
                </div>
                ${currentSubject === 'englisch' ? `<button class="btn-print" onclick="event.stopPropagation(); window.openPrintDialog('${pkg.id}')" title="Liste drucken">🖨️</button>` : ''}
            </div>
            ${statsHtml}
        `;
        
        card.addEventListener('click', () => startTraining(pkg.id));
        packagesContainer.appendChild(card);
    });
}

let currentPrintPkgId = null;
window.openPrintDialog = function(pkgId) {
    currentPrintPkgId = pkgId;
    document.getElementById('print-modal').style.display = 'flex';
}

window.executePrint = function(mode) {
    const pkg = englishPackages.find(p => p.id === currentPrintPkgId);
    if (!pkg) return;
    
    let html = `<h1>${pkg.title}</h1>`;
    html += `<table class="print-table">`;
    html += `<tr><th>Englisch</th><th>Deutsch</th></tr>`;
    
    pkg.items.forEach(item => {
        let enText = item.q;
        let deText = item.a;
        
        if (mode === 'en-only') deText = '';
        else if (mode === 'de-only') enText = '';
        
        html += `<tr><td>${enText}</td><td>${deText}</td></tr>`;
    });
    
    html += `</table>`;
    
    document.getElementById('print-area').innerHTML = html;
    document.getElementById('print-modal').style.display = 'none';
    
    setTimeout(() => {
        window.print();
    }, 100);
}

// --- Speech Recognition Setup ---
function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Dein Browser unterstützt die Spracherkennungs-API leider nicht. Bitte benutze Google Chrome oder Safari.");
        return;
    }
    
    recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        if (!isTrainingActive) return;

        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        const combinedTranscript = (finalTranscript + ' ' + interimTranscript).toLowerCase().trim();
        
        if (currentSubject === 'deutsch') {
            const targetWord = currentPackage.words[wordIndex].toLowerCase();
            if (combinedTranscript.includes(targetWord)) {
                nextWord();
            }
        } else if (currentSubject === 'mathe') {
            const targetNum = currentPackage.items[wordIndex].a;
            // The regex \b sorgt dafür, dass nur das genaue Wort/Zahl gematcht wird. Bspw fängt \b2\b nicht bei "20"
            const regex = new RegExp(`\\b${targetNum}\\b`);
            // Manche Handys übersetzen Zahlwörter nicht direkt in Ziffern. Hier simpel abfangen falls es nötig wird. Aber API gibt fast immer Ziffern raus!
            if (regex.test(combinedTranscript)) {
                nextWord();
            }
        }
    };

    recognition.onerror = (event) => {
        console.warn("Speech Recognition Error:", event.error);
        if (event.error === 'not-allowed') {
            micStatus.textContent = "Mikrofon blockiert!";
            micStatus.style.backgroundColor = "#FCA5A5";
        }
    };

    recognition.onend = () => {
        if (isTrainingActive && currentInputMode === 'mic') {
            try { recognition.start(); } catch(e) {}
        }
    };
}

// --- Training Logic ---
function startTraining(packageId) {
    if (currentSubject === 'deutsch') {
        let pkg = wordPackages.find(p => p.id === packageId);
        currentPackage = { ...pkg, words: [...pkg.words] };
        for (let i = currentPackage.words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentPackage.words[i], currentPackage.words[j]] = [currentPackage.words[j], currentPackage.words[i]];
        }
    } else if (currentSubject === 'mathe') {
        // Bei Mathe mischen wir das Profi Paket und Ergänzen immer neu, wenn es aufgerufen wird.
        if(packageId === 'mathe_profi' || packageId === 'mathe_ergaenzen') {
            const pkgs = generateMathPackages();
            currentPackage = pkgs.find(p => p.id === packageId);
        } else {
            let pkg = mathPackages.find(p => p.id === packageId);
            currentPackage = { ...pkg, items: [...pkg.items] };
            const mixToggle = document.getElementById('math-mix-toggle');
            if (mixToggle && mixToggle.checked) {
                for (let i = currentPackage.items.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [currentPackage.items[i], currentPackage.items[j]] = [currentPackage.items[j], currentPackage.items[i]];
                }
            }
        }
    } else if (currentSubject === 'englisch') {
        let pkg = englishPackages.find(p => p.id === packageId);
        currentPackage = { ...pkg, items: [...pkg.items] };
        for (let i = currentPackage.items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentPackage.items[i], currentPackage.items[j]] = [currentPackage.items[j], currentPackage.items[i]];
        }
        isMultipleChoice = document.getElementById('english-mc-toggle').checked;
        const dirRadios = document.getElementsByName('english-dir');
        for (const radio of dirRadios) {
            if (radio.checked) currentEnglishDir = radio.value;
        }
    }
    
    wordIndex = 0;
    isTrainingActive = true;
    failedTasks = [];

    const modeRadios = document.getElementsByName('input-mode');
    for (const radio of modeRadios) {
        if (radio.checked) currentInputMode = radio.value;
    }
    
    if (currentSubject === 'mathe') {
        document.getElementById('math-answer-input').setAttribute('inputmode', 'numeric');
        document.getElementById('math-answer-input').setAttribute('pattern', '[0-9]*');
    } else {
        document.getElementById('math-answer-input').removeAttribute('inputmode');
        document.getElementById('math-answer-input').removeAttribute('pattern');
    }
    
    const micArea = document.getElementById('mic-indicator-area');
    const manualArea = document.getElementById('manual-btn-area');
    const keyboardArea = document.getElementById('keyboard-input-area');

    if (currentInputMode === 'mic') {
        if (micArea) micArea.style.display = 'block';
        if (manualArea) manualArea.style.display = 'none';
        if (keyboardArea) keyboardArea.style.display = 'none';
        micStatus.textContent = "🎙️ Hör zu...";
        micStatus.style.backgroundColor = "#FEF3C7";
        try { recognition.start(); } catch(e) {}
    } else if (currentInputMode === 'manual') {
        if (micArea) micArea.style.display = 'none';
        if (manualArea) manualArea.style.display = 'block';
        if (keyboardArea) keyboardArea.style.display = 'none';
        try { recognition.stop(); } catch(e) {}
    } else if (currentInputMode === 'keyboard') {
        if (micArea) micArea.style.display = 'none';
        if (manualArea) manualArea.style.display = 'none';
        if (keyboardArea) keyboardArea.style.display = 'block';
        try { recognition.stop(); } catch(e) {}
    }
    
    showScreen('training');
    updateProgressBar();
    showWord();
    
    startTime = Date.now();
}

function showWord() {
    const listLen = currentSubject === 'deutsch' ? currentPackage.words.length : currentPackage.items.length;
    const mathVis = document.getElementById('math-visualization');
    const mcGrid = document.getElementById('mc-options-grid');
    if (mathVis) {
        mathVis.style.display = 'none';
        mathVis.innerHTML = '';
    }
    if (mcGrid) mcGrid.style.display = 'none';
    if (currentInputMode === 'keyboard') {
        const kbArea = document.getElementById('keyboard-input-area');
        if (kbArea) kbArea.style.display = (currentSubject === 'englisch' && isMultipleChoice) ? 'none' : 'block';
    }

    if (wordIndex < listLen) {
        if (currentSubject === 'deutsch') {
            currentWordEl.textContent = currentPackage.words[wordIndex];
        } else if (currentSubject === 'mathe') {
            let questionText = currentPackage.items[wordIndex].q;
            const learnToggle = document.getElementById('math-learn-toggle');
            if (learnToggle && learnToggle.checked) {
                currentWordEl.innerHTML = `<span>${questionText}</span><span style="color: var(--secondary); margin-left: 12px; display: inline-block;">${currentPackage.items[wordIndex].a}</span>`;
            } else {
                currentWordEl.textContent = questionText;
            }
            
            if (mathVis) {
                const match = questionText.match(/(\d+)\s*x\s*(\d+)/);
                if (match) {
                    const factor1 = parseInt(match[1]);
                    const factor2 = parseInt(match[2]);
                    const cols = factor1;
                    const rows = factor2;
                    mathVis.style.display = 'flex';
                    const emojis = ['🚗', '🍎', '⭐', '🎈', '🐶', '⚽', '🚀', '🐱', '🍪', '🍄'];
                    const emoji = emojis[(factor1 * factor2 + wordIndex) % emojis.length];
                    for (let r = 0; r < rows; r++) {
                        const rowDiv = document.createElement('div');
                        rowDiv.style.display = 'flex';
                        rowDiv.style.gap = '8px';
                        rowDiv.style.fontSize = (rows > 5 || cols > 5) ? '1.5rem' : '2.5rem';
                        let rowHtml = '';
                        for (let c = 0; c < cols; c++) {
                            rowHtml += `<span>${emoji}</span>`;
                        }
                        rowDiv.innerHTML = rowHtml;
                        mathVis.appendChild(rowDiv);
                    }
                }
            }
        } else if (currentSubject === 'englisch') {
            const item = currentPackage.items[wordIndex];
            const qTxt = currentEnglishDir === 'de-en' ? item.q : item.a;
            const targetAns = currentEnglishDir === 'de-en' ? item.a : item.q;
            currentWordEl.textContent = qTxt;
            
            if (isMultipleChoice) {
                mcGrid.style.display = 'grid';
                let options = [targetAns];
                let allItems = [...currentPackage.items];
                allItems.splice(wordIndex, 1);
                allItems.sort(() => 0.5 - Math.random());
                for(let i=0; i<3 && i<allItems.length; i++) {
                    options.push(currentEnglishDir === 'de-en' ? allItems[i].a : allItems[i].q);
                }
                options.sort(() => 0.5 - Math.random());
                
                mcGrid.innerHTML = '';
                options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'mc-btn';
                    btn.textContent = opt;
                    btn.onclick = () => handleMCAnswer(btn, opt, targetAns);
                    mcGrid.appendChild(btn);
                });
            }
        }
        
        currentWordEl.style.transform = 'scale(0.9)';
        setTimeout(() => {
            currentWordEl.style.transform = 'scale(1)';
        }, 50);

        if (currentInputMode === 'keyboard' && mathAnswerInput) {
            currentAttempts = 0;
            mathAnswerInput.disabled = false;
            mathAnswerInput.style.borderColor = "var(--primary)";
            mathAnswerInput.style.color = "var(--primary)";
            mathAnswerInput.value = '';
            mathAnswerInput.focus();
        }
    } else {
        finishTraining();
    }
}

function nextWord() {
    wordIndex++;
    updateProgressBar();
    showWord();
}

function updateProgressBar() {
    const listLen = currentSubject === 'deutsch' ? currentPackage.words.length : currentPackage.items.length;
    const percent = (wordIndex / listLen) * 100;
    progressBar.style.width = `${percent}%`;
}

function cancelTraining() {
    isTrainingActive = false;
    try { recognition.stop(); } catch(e) {}
    showScreen('start');
}

// --- Results & Validation Logic ---
function finishTraining() {
    isTrainingActive = false;
    try { recognition.stop(); } catch(e) {}
    
    const endTime = Date.now();
    const totalSeconds = (endTime - startTime) / 1000;
    
    let spb = 0;
    if (currentSubject === 'deutsch') {
        const totalLetters = currentPackage.words.reduce((sum, word) => sum + word.length, 0);
        spb = totalSeconds / totalLetters;
    }
    
    showResults(totalSeconds, spb);
}

function showResults(currentSeconds, currentSpb) {
    resTime.textContent = `${currentSeconds.toFixed(1)} s`;
    
    feedbackMsg.classList.add('hidden');
    feedbackMsg.textContent = "";
    
    const storageKey = `blitzlesen_${currentPackage.id}`;
    const previousDataRaw = localStorage.getItem(storageKey);
    
    let isNewBest = false;
    let showEdgeCaseFeedback = false;
    
    if (currentSubject === 'deutsch') {
        resSpbCard.style.display = 'block';
        resSpb.textContent = currentSpb.toFixed(2);
        
        if (previousDataRaw) {
            const prevData = JSON.parse(previousDataRaw);
            if (currentSpb < prevData.spb) {
                isNewBest = true;
                if (currentSeconds > prevData.time) {
                    showEdgeCaseFeedback = true;
                }
            }
        } else {
            isNewBest = true;
        }
    } else {
        // Mathe Modus
        resSpbCard.style.display = 'none';
        
        if (previousDataRaw) {
            const prevData = JSON.parse(previousDataRaw);
            if (currentSeconds < prevData.time) {
                isNewBest = true;
            }
        } else {
            isNewBest = true;
        }
    }
    
    if (isNewBest) {
        localStorage.setItem(storageKey, JSON.stringify({
            time: currentSeconds,
            spb: currentSubject === 'deutsch' ? currentSpb : 0,
            date: new Date().toISOString()
        }));
        
        triggerConfetti();
        
        if (showEdgeCaseFeedback) {
            feedbackMsg.textContent = "Wahnsinn! Du hast zwar länger gebraucht, weil die Wörter riiiesig waren, aber deine Lesegeschwindigkeit pro Buchstabe ist eigentlich sogar SCHNELLER geworden!";
            feedbackMsg.classList.remove('hidden');
        } else {
            feedbackMsg.textContent = currentSubject === 'deutsch' ? "🎉 Neuer Highscore bei der Lesegeschwindigkeit! Weiter so!" : "🎉 Neue Bestzeit beim Einmaleins! Super gemacht!";
            feedbackMsg.classList.remove('hidden');
        }
    }
    
    const failedContainer = document.getElementById('failed-tasks-container');
    const failedList = document.getElementById('failed-tasks-list');
    if (failedTasks.length > 0) {
        failedList.innerHTML = failedTasks.map(t => `<li>${t.q} <span style="color: var(--secondary)">${t.a}</span></li>`).join('');
        if (failedContainer) failedContainer.style.display = 'block';
    } else {
        if (failedContainer) failedContainer.style.display = 'none';
    }
    
    renderPackages();
    showScreen('result');
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#4F46E5', '#10B981', '#F59E0B']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#4F46E5', '#10B981', '#F59E0B']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// Start
document.addEventListener('DOMContentLoaded', init);
