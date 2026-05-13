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
    return packages;
}
const mathPackages = generateMathPackages();

// --- Application State ---
let currentSubject = 'deutsch'; 
let currentPackage = null;
let wordIndex = 0;
let startTime = 0;
let recognition = null;
let isTrainingActive = false;
let currentInputMode = 'mic';

// --- DOM Elements ---
const screens = {
    subjects: document.getElementById('screen-subjects'),
    start: document.getElementById('screen-start'),
    training: document.getElementById('screen-training'),
    result: document.getElementById('screen-result')
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
            if (!isTrainingActive || currentInputMode !== 'keyboard') return;
            let targetNum = currentSubject === 'deutsch' ? currentPackage.words[wordIndex].toLowerCase() : currentPackage.items[wordIndex].a;
            let currentVal = mathAnswerInput.value.replace(/\s+/g, '').toLowerCase();
            if (currentVal === targetNum.toString().toLowerCase()) {
                setTimeout(nextWord, 100);
            }
        });
    }
    
    const mathAnswerForm = document.getElementById('math-answer-form');
    if (mathAnswerForm) {
        mathAnswerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!isTrainingActive || currentInputMode !== 'keyboard') return;
            
            let targetNum = currentSubject === 'deutsch' ? currentPackage.words[wordIndex].toLowerCase() : currentPackage.items[wordIndex].a;
            let currentVal = mathAnswerInput.value.replace(/\s+/g, '').toLowerCase();
            
            if (currentVal === targetNum.toString().toLowerCase()) {
                nextWord();
            } else {
                // Falsche Antwort beim "Entern"
                mathAnswerInput.style.borderColor = "var(--danger)";
                mathAnswerInput.style.color = "var(--danger)";
                setTimeout(() => {
                    mathAnswerInput.style.borderColor = "var(--primary)";
                    mathAnswerInput.style.color = "var(--primary)";
                    mathAnswerInput.value = '';
                    mathAnswerInput.focus();
                }, 500);
            }
        });
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
    if (mathOptions) {
        mathOptions.style.display = (currentSubject === 'mathe') ? 'flex' : 'none';
    }

    packagesContainer.innerHTML = '';
    const activePackages = currentSubject === 'deutsch' ? wordPackages : mathPackages;
    
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
        } else {
            previewTxt = pkg.items.slice(0, 3).map(i => i.q.replace(' = ','')).join(', ') + '...';
        }

        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div>
                <div class="pack-level">${pkg.level}</div>
                <div class="pack-title">${pkg.title}</div>
                <div class="pack-preview">${previewTxt}</div>
            </div>
            ${statsHtml}
        `;
        
        card.addEventListener('click', () => startTraining(pkg.id));
        packagesContainer.appendChild(card);
    });
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
    } else {
        // Bei Mathe mischen wir das Profi Paket immer neu, wenn es aufgerufen wird.
        if(packageId === 'mathe_profi') {
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
    }
    
    wordIndex = 0;
    isTrainingActive = true;

    const modeRadios = document.getElementsByName('input-mode');
    for (const radio of modeRadios) {
        if (radio.checked) currentInputMode = radio.value;
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
    if (mathVis) {
        mathVis.style.display = 'none';
        mathVis.innerHTML = '';
    }

    if (wordIndex < listLen) {
        if (currentSubject === 'deutsch') {
            currentWordEl.textContent = currentPackage.words[wordIndex];
        } else {
            let questionText = currentPackage.items[wordIndex].q;
            const learnToggle = document.getElementById('math-learn-toggle');
            if (learnToggle && learnToggle.checked) {
                // Ergebnis direkt in grün dahinter packen
                currentWordEl.innerHTML = `<span>${questionText}</span><span style="color: var(--secondary); margin-left: 12px; display: inline-block;">${currentPackage.items[wordIndex].a}</span>`;
            } else {
                currentWordEl.textContent = questionText;
            }
            
            if (mathVis) {
                const match = questionText.match(/(\d+)\s*x\s*(\d+)/);
                if (match) {
                    const factor1 = parseInt(match[1]);
                    const factor2 = parseInt(match[2]);
                    // z.B. 2 x 3 = 3 Reihen mit jeweils 2 Elementen
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
        }
        
        currentWordEl.style.transform = 'scale(0.9)';
        setTimeout(() => {
            currentWordEl.style.transform = 'scale(1)';
        }, 50);

        if (currentInputMode === 'keyboard' && mathAnswerInput) {
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
