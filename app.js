// --- Data: Word Packages ---
const wordPackages = [
    { id: 'paket1', category: 'Wortpakete', level: 'Ein|fach 1', title: 'Pa|ket 1', words: ['und', 'in', 'zu', 'der', 'die', 'das', 'er', 'sie', 'es', 'auf'] },
    { id: 'paket2', category: 'Wortpakete', level: 'Ein|fach 2', title: 'Pa|ket 2', words: ['mit', 'von', 'ist', 'im', 'an', 'für', 'was', 'wie', 'wir', 'aus'] },
    { id: 'paket3', category: 'Wortpakete', level: 'Mit|tel 1', title: 'Pa|ket 3', words: ['sich', 'ein', 'ei|ne', 'a|ber', 'auch', 'als', 'bei', 'noch', 'nur', 'so'] },
    { id: 'paket4', category: 'Wortpakete', level: 'Mit|tel 2', title: 'Pa|ket 4', words: ['o|der', 'sind', 'dann', 'um', 'doch', 'mehr', 'vor', 'zum', 'schon', 'wenn'] },
    { id: 'paket5', category: 'Wortpakete', level: 'Schwe|rer 1', title: 'Pa|ket 5', words: ['wie|der', 'im|mer', 'et|was', 'nichts', 'weil', 'jetzt', 'al|les', 'da|mit', 'selbst', 'durch'] },
    { id: 'paket6', category: 'Wortpakete', level: 'Schwe|rer 2', title: 'Pa|ket 6', words: ['die|ses', 'wer|den', 'kön|nen', 'ha|ben', 'ma|chen', 'sehr', 'ein|mal', 'heu|te', 'ganz', 'viel'] },
    { id: 'paket7', category: 'Wortpakete', level: 'Pro|no|men 1', title: 'Pa|ket 7', words: ['sein', 'sei|ne', 'ihr', 'ih|re', 'mein', 'mei|ne', 'dein', 'dei|ne', 'ihm', 'ihn'] },
    { id: 'paket8', category: 'Wortpakete', level: 'Pro|no|men 2', title: 'Pa|ket 8', words: ['un|ser', 'un|se|re', 'euch', 'mich', 'dich', 'uns', 'man', 'wer', 'wo', 'wann'] },
    { id: 'paket9', category: 'Wortpakete', level: 'Pro|fi 1', title: 'Pa|ket 9', words: ['ge|hen', 'ste|hen', 'se|hen', 'oh|ne', 'sehr', 'mehr', 'ihn', 'ih|nen', 'fah|ren', 'Jahr'] },
    { id: 'paket10', category: 'Wortpakete', level: 'Pro|fi 2', title: 'Pa|ket 10', words: ['dann', 'denn', 'wenn', 'dass', 'muss', 'voll', 'soll', 'will', 'kann', 'Herr'] },
    { id: 'paket11', category: 'Wortpakete', level: 'Pro|fi 3', title: 'Pa|ket 11', words: ['des|halb', 'trotz|dem', 'nach|dem', 'be|vor', 'dar|um', 'da|vor', 'da|nach', 'da|bei', 'wie|so', 'war|um'] },
    { id: 'paket12', category: 'Wortpakete', level: 'Spe|zi|al', title: 'Pa|ket 12', words: ['wie', 'was', 'wer', 'wo', 'wann', 'war|um', 'wie|so', 'wes|halb', 'wo|hin', 'wo|her'] },
    { id: 'paket_abc_gross', category: 'LRS', level: 'ABC', title: 'Groß|buch|sta|ben', words: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü'] },
    { id: 'paket_abc_klein', category: 'LRS', level: 'abc', title: 'Klein|buch|sta|ben', words: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'] },
    { id: 'paket_stolper_buchstaben', category: 'LRS', level: 'Spe|zi|al', title: 'Buch|sta|ben (H/K/W/P...)', words: ['W', 'w', 'P', 'p', 'H', 'h', 'K', 'k', 'Sp', 'sp', 'Sch', 'sch', 'St', 'st'] },
    { id: 'paket_stolper_h', category: 'LRS', level: 'Spe|zi|al', title: 'Stol|per|steine (H)', words: ['Haus', 'Hund', 'hoch', 'hel|fen', 'Hals', 'Haar', 'Hand', 'heis|se'] },
    { id: 'paket_stolper_k', category: 'LRS', level: 'Spe|zi|al', title: 'Stol|per|steine (K)', words: ['Kro|ko|dil', 'Kat|ze', 'klein', 'kalt', 'kom|men', 'Kopf', 'Kä|fer', 'Kind'] },
    { id: 'paket_stolper_sp', category: 'LRS', level: 'Spe|zi|al', title: 'Stol|per|steine (Sp)', words: ['Spin|ne', 'Spa|ten', 'spu|cken', 'spie|len', 'Spaß', 'spät'] },
    { id: 'paket_stolper_st', category: 'LRS', level: 'Spe|zi|al', title: 'Stol|per|steine (St)', words: ['Stein', 'Sta|chel', 'Stuhl', 'ste|hen', 'stark', 'Staub'] },
    { id: 'paket_stolper_sch', category: 'LRS', level: 'Spe|zi|al', title: 'Stol|per|steine (Sch)', words: ['Schuh', 'Schlan|ge', 'schnell', 'schön', 'schla|fen', 'Schu|le', 'Schnee', 'schwarz'] },
    { id: 'paket_lrs_silbenband', category: 'LRS', level: 'Me|tho|de', title: 'Sil|ben-Fließ|band', words: ['Ra|ke|te', 'Kro|ko|dil', 'To|ma|te', 'Scho|ko|la|de', 'Ba|na|ne', 'Lo|ko|mo|ti|ve', 'Te|le|fon'] },
    { id: 'paket_lrs_alien', category: 'LRS', level: 'Me|tho|de', title: 'A|li|en-Wör|ter', words: ['Mupf', 'Lo|ma|tor', 'Schrip|pe', 'Pra|lu', 'Fa|sel', 'Römp', 'Klu|ba', 'Flu|pel', 'Zar|pel'] },
    { id: 'paket_lrs_zwillinge', category: 'LRS', level: 'Me|tho|de', title: 'Wort-Zwil|lin|ge', items: [
        { q: 'Hund', a: 'Hand' },
        { q: 'wo', a: 'von' },
        { q: 'kalt', a: 'klein' },
        { q: 'bellen', a: 'Bälle' },
        { q: 'viel', a: 'fiel' },
        { q: 'Haus', a: 'Maus' },
        { q: 'braucht', a: 'Bauch' },
        { q: 'wird', a: 'wir' },
        { q: 'Kind', a: 'Rind' },
        { q: 'sind', a: 'Sand' }
    ]},
    { id: 'paket_lrs_luecken', category: 'LRS', level: 'Me|tho|de', title: 'Buch|sta|ben|dieb', items: [
        { q: 'Sch_le', a: 'Schule' },
        { q: 'Sp_ele', a: 'Spiele' },
        { q: 'B_ume', a: 'Bäume' },
        { q: 'K_tze', a: 'Katze' },
        { q: 'H_nd', a: 'Hund' },
        { q: 'L_mp_', a: 'Lampe' },
        { q: 'F_hrr_d', a: 'Fahrrad' },
        { q: 'W_sser', a: 'Wasser' }
    ]},
    { id: 'paket_lesetexte', category: 'Geschichten', level: 'Le|sen', title: 'Tier-Aben|teu|er', words: [] }
];

const letterDictionary = {
    'A': ['🍎 Apfel', '🐒 Affe', '🚗 Auto'],
    'B': ['🐻 Bär', '🍌 Banane', '🚌 Bus'],
    'C': ['🤡 Clown', '💻 Computer', '🏕️ Camping'],
    'D': ['🐬 Delfin', '🦕 Dino', '🍩 Donut'],
    'E': ['🐘 Elefant', '🍓 Erdbeere', '🦆 Ente'],
    'F': ['🐟 Fisch', '🐸 Frosch', '🦊 Fuchs'],
    'G': ['🦒 Giraffe', '🎸 Gitarre', '🎁 Geschenk'],
    'H': ['🏠 Haus', '🐶 Hund', '✋ Hand'],
    'I': ['🦔 Igel', '🏝️ Insel', '💡 Idee'],
    'J': ['🐆 Jaguar', '👖 Jeans', '🪀 Jojo'],
    'K': ['🐊 Krokodil', '👑 Krone', '🐱 Katze'],
    'L': ['🦁 Löwe', '🍭 Lutscher', '🪜 Leiter'],
    'M': ['🐭 Maus', '🌙 Mond', '🏍️ Motorrad'],
    'N': ['🦛 Nashorn', '🍝 Nudeln', '🥜 Nuss'],
    'O': ['🐙 Oktopus', '🍊 Orange', '👂 Ohr'],
    'P': ['🐧 Pinguin', '🍕 Pizza', '🍄 Pilz'],
    'Q': ['🪼 Qualle', '🐸 Quak', '⬜ Quadrat'],
    'R': ['🚀 Rakete', '🌹 Rose', '🌧️ Regen'],
    'S': ['☀️ Sonne', '🚢 Schiff', '🐍 Schlange'],
    'T': ['🐯 Tiger', '🍅 Tomate', '🚜 Traktor'],
    'U': ['🦉 Uhu', '🕰️ Uhr', '🛸 UFO'],
    'V': ['🐦 Vogel', '🌋 Vulkan', '🧛 Vampir'],
    'W': ['🌊 Wellen', '🍉 Wassermelone', '☁️ Wolke'],
    'X': ['🎷 Xylophon'],
    'Y': ['🧘 Yoga', '🛥️ Yacht'],
    'Z': ['🦓 Zebra', '🍋 Zitrone', '⛺ Zelt'],
    'Ä': ['🍏 Äpfel', '🌿 Äste'],
    'Ö': ['🛢️ Öl', '🚪 Öffnen'],
    'Ü': ['🎁 Überraschung'],
    'SP': ['⛏️ Spaten', '🕷️ Spinne', '👻 Spuk'],
    'ST': ['🪨 Stein', '🌵 Stachel', '🌟 Stern'],
    'SCH': ['✂️ Schere', '🎒 Schule', '🐍 Schlange']
};

const wordDictionary = {
    'haus': '🏠 Haus',
    'hund': '🐶 Hund',
    'hoch': '⬆️ hoch',
    'helfen': '🤝 helfen',
    'hals': '🦒 Hals',
    'haar': '💇 Haar',
    'hand': '✋ Hand',
    'heisse': '🔥 heiße',
    'krokodil': '🐊 Krokodil',
    'katze': '🐱 Katze',
    'klein': '🐜 klein',
    'kalt': '❄️ kalt',
    'kommen': '🚶 kommen',
    'kopf': '🗣️ Kopf',
    'käfer': '🐞 Käfer',
    'kind': '🧒 Kind',
    'spinne': '🕷️ Spinne',
    'spaten': '⛏️ Spaten',
    'spucken': '💦 spucken',
    'spielen': '🎲 spielen',
    'spaß': '🥳 Spaß',
    'spät': '⏰ spät',
    'stein': '🪨 Stein',
    'stachel': '🌵 Stachel',
    'stuhl': '🪑 Stuhl',
    'stehen': '🧍 stehen',
    'stark': '💪 stark',
    'staub': '🧹 Staub',
    'schuh': '👞 Schuh',
    'schlange': '🐍 Schlange',
    'schnell': '🏎️ schnell',
    'schön': '✨ schön',
    'schlafen': '😴 schlafen',
    'schule': '🎒 Schule',
    'schnee': '⛄ Schnee',
    'schwarz': '⬛ schwarz',
    'wellen': '🌊 Wellen',
    'pinguin': '🐧 Pinguin',
    'wasser': '💧 Wasser'
};
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
let currentCategory = null; 
let currentPackage = null;
let wordIndex = 0;
let startTime = 0;
let recognition = null;
let isTrainingActive = false;
let currentInputMode = 'mic';
let currentAttempts = 0;
let failedTasks = [];
let wordStats = [];
let currentWordStartTime = 0;
let useBlitzlicht = localStorage.getItem('blitzlesen_useBlitzlicht') === 'true' || false;
let blitzTimeout = null;

// --- DOM Elements ---
const screens = {
    subjects: document.getElementById('screen-subjects'),
    start: document.getElementById('screen-start'),
    training: document.getElementById('screen-training'),
    result: document.getElementById('screen-result'),
    'vocab-editor': document.getElementById('screen-vocab-editor'),
    reading: document.getElementById('screen-reading'),
    review: document.getElementById('screen-review')
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
    btnRestart.onclick = () => startTraining(currentPackage.id);
    btnBackHome.onclick = () => showScreen('start');
    
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
    
    const blitzToggle = document.getElementById('deutsch-blitz-toggle');
    if (blitzToggle) {
        blitzToggle.checked = useBlitzlicht;
        blitzToggle.addEventListener('change', (e) => {
            useBlitzlicht = e.target.checked;
            localStorage.setItem('blitzlesen_useBlitzlicht', useBlitzlicht);
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

    let isCorrect = currentSubject === 'mathe' 
        ? currentVal.replace(/\s+/g, '') === targetTxt.toString().toLowerCase()
        : currentVal === targetTxt.toString().toLowerCase();

    if (currentSubject === 'deutsch' && currentPackage.id === 'paket_krokodil') {
        const t = targetTxt.toLowerCase();
        if (t === 'k') isCorrect = currentVal === 'krokodil';
        if (t === 'h') isCorrect = currentVal === 'haus' || currentVal === 'hals' || currentVal === 'hoch';
    }

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
    currentCategory = null;
    
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
    const deutschOptions = document.getElementById('deutsch-options-container');
    
    if (mathOptions) mathOptions.style.display = (currentSubject === 'mathe') ? 'flex' : 'none';
    if (englishOptions) englishOptions.style.display = (currentSubject === 'englisch') ? 'flex' : 'none';
    if (deutschOptions) deutschOptions.style.display = (currentSubject === 'deutsch') ? 'flex' : 'none';
    if (createVocab) createVocab.style.display = (currentSubject === 'englisch') ? 'block' : 'none';

    packagesContainer.innerHTML = '';
    
    if (currentSubject === 'deutsch' && !currentCategory) {
        const folders = [
            { id: 'Wortpakete', icon: '📁', title: 'Grundwortschatz', desc: 'Die häufigsten Wörter (Paket 1 - 12)' },
            { id: 'LRS', icon: '🧩', title: 'LRS & Stolpersteine', desc: 'Gezieltes Training für schwere Laute' },
            { id: 'Geschichten', icon: '📖', title: 'Geschichten', desc: 'Zusammenhängende Texte lesen' }
        ];
        
        folders.forEach(folder => {
            const card = document.createElement('div');
            card.className = 'package-card';
            card.style.textAlign = 'center';
            card.style.padding = '32px 16px';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 12px;">${folder.icon}</div>
                <div style="font-size: 1.5rem; font-weight: 800; color: #1F2937;">${folder.title}</div>
                <div style="color: #6B7280; margin-top: 8px;">${folder.desc}</div>
            `;
            card.onclick = () => {
                currentCategory = folder.id;
                renderPackages();
            };
            packagesContainer.appendChild(card);
        });
        return;
    }
    
    if (currentSubject === 'deutsch' && currentCategory) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn-secondary';
        backBtn.style.gridColumn = '1 / -1';
        backBtn.style.marginBottom = '16px';
        backBtn.style.justifySelf = 'start';
        backBtn.innerHTML = '⬅️ Zurück zur Ordner-Übersicht';
        backBtn.onclick = () => {
            currentCategory = null;
            renderPackages();
        };
        packagesContainer.appendChild(backBtn);
    }
    
    let activePackages = currentSubject === 'deutsch' ? wordPackages : (currentSubject === 'mathe' ? mathPackages : englishPackages);
    
    if (currentSubject === 'deutsch' && currentCategory) {
        activePackages = activePackages.filter(p => p.category === currentCategory);
    }
    
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
        
        const playCount = parseInt(localStorage.getItem(`blitzlesen_${pkg.id}_count`) || '0');
        if (playCount > 0) {
            statsHtml += `<div style="font-size: 0.85rem; color: #6B7280; margin-top: 4px; font-weight: bold;">🔄 ${playCount}x geübt</div>`;
        }
        
        let previewTxt = '';
        if(currentSubject === 'deutsch'){
            if (pkg.words) {
                previewTxt = pkg.words.slice(0, 3).join(', ').replace(/\|/g, '') + '...';
            } else if (pkg.items) {
                previewTxt = pkg.items.slice(0, 3).map(i => i.q.replace(/_/g, '')).join(', ') + '...';
            }
        } else if(currentSubject === 'mathe') {
            previewTxt = pkg.items.slice(0, 3).map(i => i.q.replace(' = ','')).join(', ') + '...';
        } else {
            previewTxt = pkg.items.slice(0, 3).map(i => `${i.q} ➔ ${i.a}`).join(', ') + '...';
        }

        const lastCompletedRaw = localStorage.getItem(`lastCompleted_${pkg.id}`);
        let completedTodayBadge = '';
        if (lastCompletedRaw) {
            const lastCompletedDate = new Date(lastCompletedRaw);
            const today = new Date();
            if (lastCompletedDate.setHours(0,0,0,0) === today.setHours(0,0,0,0)) {
                completedTodayBadge = `<div style="background: #D1FAE5; color: #047857; font-size: 0.8rem; padding: 4px 8px; border-radius: 8px; font-weight: bold; margin-bottom: 8px; display: inline-block;">✅ Heute geübt</div>`;
            }
        }

        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                <div>
                    ${completedTodayBadge}
                    <div class="pack-level">${(pkg.level || '').replace(/\|/g, '')}</div>
                    <div class="pack-title">${(pkg.title || '').replace(/\|/g, '')}</div>
                    <div class="pack-preview">${previewTxt}</div>
                </div>
                ${currentSubject === 'englisch' ? `<button class="btn-print" onclick="event.stopPropagation(); window.openPrintDialog('${pkg.id}')" title="Liste drucken">🖨️</button>` : ''}
            </div>
            ${statsHtml}
        `;
        
        if (currentSubject === 'englisch') {
            const delBtn = document.createElement('button');
            delBtn.className = 'btn-delete';
            delBtn.innerHTML = '🗑️';
            delBtn.onclick = (e) => {
                e.stopPropagation();
                if (confirm('Vokabelliste wirklich löschen?')) {
                    englishPackages = englishPackages.filter(p => p.id !== pkg.id);
                    localStorage.setItem('custom_english_packages', JSON.stringify(englishPackages));
                    renderPackages();
                }
            };
            card.appendChild(delBtn);
        }
        
        card.onclick = () => startTraining(pkg.id);
        packagesContainer.appendChild(card);
    });
}

// --- Reading Mode Logic ---
let currentChapterIndex = 0;

window.initReadingMode = function() {
    currentPackage = wordPackages.find(p => p.id === 'paket_lesetexte');
    const savedIndex = localStorage.getItem('leseabenteuer_chapter');
    currentChapterIndex = savedIndex ? parseInt(savedIndex) : 0;
    
    if (typeof storyChapters === 'undefined') {
        alert("Fehler: Geschichten konnten nicht geladen werden.");
        return;
    }
    
    if (currentChapterIndex >= storyChapters.length) {
        currentChapterIndex = 0;
    }
    
    renderChapter(currentChapterIndex);
    showScreen('reading');
}

let useSyllableColors = true; // State for syllable coloring

window.colorizeSyllables = function(text) {
    if (!text.includes('|')) return text;
    return text.replace(/[a-zA-ZäöüÄÖÜß|]+/g, function(match) {
        if (!match.includes('|')) return match;
        const syllables = match.split('|');
        let html = '';
        syllables.forEach((syl, i) => {
            html += `<span class="s${(i % 2) + 1}">${syl}</span>`;
        });
        return html;
    });
}

window.renderChapter = function(index) {
    const chapter = storyChapters[index];
    
    let titleHtml = chapter.title;
    let textHtml = chapter.text;
    
    if (useSyllableColors) {
        titleHtml = colorizeSyllables(titleHtml);
        textHtml = colorizeSyllables(textHtml);
    } else {
        titleHtml = titleHtml.replace(/\|/g, '');
        textHtml = textHtml.replace(/\|/g, '');
    }
    
    document.getElementById('reading-title').innerHTML = titleHtml;
    const formattedText = textHtml.split('\\n').map(p => `<p style="margin-bottom: 1em;">${p}</p>`).join('');
    document.getElementById('reading-content').innerHTML = formattedText;
}

window.nextChapter = function() {
    currentChapterIndex++;
    if (currentChapterIndex >= storyChapters.length) {
        currentChapterIndex = 0;
    }
    localStorage.setItem('leseabenteuer_chapter', currentChapterIndex);
    renderChapter(currentChapterIndex);
    document.getElementById('reading-content').scrollTo(0, 0);
}

window.prevChapter = function() {
    currentChapterIndex--;
    if (currentChapterIndex < 0) {
        currentChapterIndex = storyChapters.length - 1;
    }
    localStorage.setItem('leseabenteuer_chapter', currentChapterIndex);
    renderChapter(currentChapterIndex);
    document.getElementById('reading-content').scrollTo(0, 0);
}

window.finishReading = function() {
    localStorage.setItem('leseabenteuer_chapter', currentChapterIndex + 1);
    localStorage.setItem(`lastCompleted_paket_lesetexte`, new Date().toISOString());
    openSubject('deutsch');
}

window.printReading = function() {
    const chapter = storyChapters[currentChapterIndex];
    let titleHtml = chapter.title;
    let textHtml = chapter.text;
    
    if (useSyllableColors) {
        titleHtml = colorizeSyllables(titleHtml);
        textHtml = colorizeSyllables(textHtml);
    } else {
        titleHtml = titleHtml.replace(/\|/g, '');
        textHtml = textHtml.replace(/\|/g, '');
    }

    const formattedText = textHtml.split('\n').map(p => `<p style="margin-bottom: 1em;">${p}</p>`).join('');
    
    let html = `<h1>${titleHtml}</h1>`;
    html += `<div style="font-size: 1.5rem; line-height: 1.8; color: black !important;">${formattedText}</div>`;
    
    document.getElementById('print-area').innerHTML = html;
    document.getElementById('print-modal').style.display = 'none';
    
    setTimeout(() => {
        window.print();
    }, 100);
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
        
        if (combinedTranscript && micStatus) {
            micStatus.textContent = "🎙️ " + combinedTranscript;
        }
        
        if (currentSubject === 'deutsch') {
            let targetWord = currentPackage.words[wordIndex].toLowerCase().replace(/\|/g, '');
            let isCorrect = combinedTranscript.includes(targetWord);
            
            if (currentPackage.id === 'paket_krokodil') {
                if (targetWord === 'k') isCorrect = combinedTranscript.includes('krokodil');
                if (targetWord === 'h') isCorrect = combinedTranscript.includes('haus') || combinedTranscript.includes('hals') || combinedTranscript.includes('hoch');
            }
            
            if (currentPackage.id === 'paket_huerdenlauf_schwer') {
                if (targetWord === 'w') isCorrect = combinedTranscript.includes('w') || combinedTranscript.includes('wellen') || combinedTranscript.includes('wasser');
                if (targetWord === 'p') isCorrect = combinedTranscript.includes('p') || combinedTranscript.includes('pinguin') || combinedTranscript.includes('pusten');
                if (targetWord === 'h') isCorrect = combinedTranscript.includes('h') || combinedTranscript.includes('haus') || combinedTranscript.includes('hund') || combinedTranscript.includes('hoch');
                if (targetWord === 'k') isCorrect = combinedTranscript.includes('k') || combinedTranscript.includes('krokodil') || combinedTranscript.includes('katze');
                if (targetWord === 'sp') isCorrect = combinedTranscript.includes('sp') || combinedTranscript.includes('schp') || combinedTranscript.includes('spinne') || combinedTranscript.includes('spuk');
                if (targetWord === 'st') isCorrect = combinedTranscript.includes('st') || combinedTranscript.includes('scht') || combinedTranscript.includes('stein') || combinedTranscript.includes('stachel');
                if (targetWord === 'sch') isCorrect = combinedTranscript.includes('sch') || combinedTranscript.includes('schlange') || combinedTranscript.includes('schuh');
            }

            if (isCorrect) {
                if (currentPackage.id.startsWith('paket_huerdenlauf')) {
                    triggerHurdleJump();
                } else {
                    nextWord();
                }
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
    wordStats = [];
    failedTasks = [];
    currentAttempts = 0;
    
    if (packageId === 'paket_lesetexte') {
        initReadingMode();
        return;
    }

    if (currentSubject === 'deutsch') {
        let pkg = wordPackages.find(p => p.id === packageId);
        currentPackage = { ...pkg, words: pkg.words ? [...pkg.words] : undefined, items: pkg.items ? [...pkg.items] : undefined };
        
        let arr = currentPackage.words || currentPackage.items;
        if (arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
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
    
    // Force modes for special LRS packages
    if (currentSubject === 'deutsch') {
        if (packageId === 'paket_lrs_zwillinge') {
            currentInputMode = 'mc';
            isMultipleChoice = true;
        } else if (packageId === 'paket_lrs_alien') {
            currentInputMode = 'manual';
        }
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
    } else if (currentInputMode === 'mc') {
        if (micArea) micArea.style.display = 'none';
        if (manualArea) manualArea.style.display = 'none';
        if (keyboardArea) keyboardArea.style.display = 'none';
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
            if (currentPackage.id === 'paket_lrs_zwillinge') {
                const item = currentPackage.items[wordIndex];
                currentWordEl.innerHTML = '<span style="font-size:0.5em">🔊 Hör gut zu!</span>';
                
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(item.q);
                    utterance.lang = 'de-DE';
                    utterance.rate = 0.9;
                    window.speechSynthesis.speak(utterance);
                }
                
                if (mcGrid) {
                    mcGrid.style.display = 'grid';
                    let options = [item.q, item.a];
                    options.sort(() => 0.5 - Math.random());
                    
                    mcGrid.innerHTML = '';
                    options.forEach(opt => {
                        const btn = document.createElement('button');
                        btn.className = 'mc-btn';
                        btn.textContent = opt;
                        btn.onclick = () => handleMCAnswer(btn, opt, item.q);
                        mcGrid.appendChild(btn);
                    });
                }
                currentWordStartTime = Date.now();
                return;
            } else if (currentPackage.id === 'paket_lrs_luecken') {
                let displayWord = currentPackage.items[wordIndex].q;
                currentWordEl.textContent = displayWord;
            } else {
                let displayWord = currentPackage.words[wordIndex];
                
                if (currentPackage.id === 'paket_lrs_silbenband') {
                    if (window.silbenTimeout) clearTimeout(window.silbenTimeout);
                    let syllables = displayWord.split('|');
                    let currentDisplay = '';
                    currentWordEl.innerHTML = '';
                    
                    const showNextSyllable = (i) => {
                        if (i < syllables.length) {
                            currentDisplay += `<span class="s${(i % 2) + 1}">${syllables[i]}</span>`;
                            currentWordEl.innerHTML = currentDisplay;
                            window.silbenTimeout = setTimeout(() => showNextSyllable(i+1), 800);
                        } else {
                            window.silbenTimeout = setTimeout(() => {
                               currentWordEl.innerHTML = displayWord.replace(/\|/g, ''); 
                            }, 800);
                        }
                    };
                    showNextSyllable(0);
                } else {
                    if (useSyllableColors) {
                        currentWordEl.innerHTML = colorizeSyllables(displayWord);
                    } else {
                        currentWordEl.textContent = displayWord.replace(/\|/g, '');
                    }
                    
                    clearTimeout(blitzTimeout);
                    if (useBlitzlicht && currentPackage.id !== 'paket_lrs_alien') {
                        blitzTimeout = setTimeout(() => {
                            if (isTrainingActive) currentWordEl.innerHTML = '👁️';
                        }, 1000);
                    }
                }
            }
            
            if (currentInputMode === 'mic' && micStatus) {
                micStatus.textContent = "🎙️ Hör zu...";
            }
            
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

        currentWordStartTime = Date.now();

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


let showingSolution = false;

function nextWord(wasCrash = false) {
    if (currentSubject === 'deutsch' && currentPackage.id === 'paket_lrs_luecken' && !showingSolution) {
        showingSolution = true;
        currentWordEl.textContent = currentPackage.items[wordIndex].a;
        currentWordEl.style.color = '#10B981'; // Green text to indicate success
        setTimeout(() => {
            showingSolution = false;
            currentWordEl.style.color = '';
            nextWord(wasCrash);
        }, 1000);
        return;
    }
    
    if (currentSubject === 'deutsch') {
        const durationMs = Date.now() - currentWordStartTime;
        const durationSec = durationMs / 1000;
        
        let targetWord = '';
        if (currentPackage.items) {
            targetWord = currentPackage.items[wordIndex].q;
        } else {
            targetWord = currentPackage.words[wordIndex];
        }
        
        const cleanWord = targetWord.replace(/\|/g, '');
        const wordSpb = durationSec / cleanWord.length;
        
        // Track stats
        const existing = wordStats.find(w => w.word === cleanWord);
        if (existing) {
            existing.spb = wordSpb;
            existing.time = durationSec;
        } else {
            wordStats.push({ word: cleanWord, spb: wordSpb, time: durationSec });
        }

        if (durationMs > 2500) {
            if (currentPackage.id === 'paket_abc_gross' || currentPackage.id === 'paket_abc_klein') {
                currentPackage.words.push(currentPackage.words[wordIndex]);
            } else if (currentPackage.id.startsWith('paket_stolper')) {
                if (currentPackage.items) currentPackage.items.push(currentPackage.items[wordIndex]);
                else currentPackage.words.push(targetWord);
                if (!failedTasks.some(t => t.q === targetWord)) {
                    failedTasks.push({ q: targetWord, a: '' });
                }
            }
        }
    }

    wordIndex++;
    updateProgressBar();
    showWord();
}

function updateProgressBar() {
    const listLen = currentPackage.words ? currentPackage.words.length : currentPackage.items.length;
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
        let totalLetters = 0;
        if (currentPackage.words) {
            totalLetters = currentPackage.words.reduce((sum, word) => sum + word.length, 0);
        } else if (currentPackage.items) {
            totalLetters = currentPackage.items.reduce((sum, item) => sum + item.a.length, 0);
        }
        spb = totalSeconds / totalLetters;
    }
    
    // Vermerken, dass das Paket heute abgeschlossen wurde
    localStorage.setItem(`lastCompleted_${currentPackage.id}`, new Date().toISOString());
    
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
    
    const storageKeyCount = `blitzlesen_${currentPackage.id}_count`;
    let playCount = parseInt(localStorage.getItem(storageKeyCount) || '0');
    
    // In finishTraining wird es nicht erhöht, wir machen es hier:
    // Wait, let's just make sure we only increase it once per finish.
    // I'll increment it here in showResults.
    playCount++;
    localStorage.setItem(storageKeyCount, playCount);

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
    
    // IMMER Konfetti (Motivation ist wichtig bei LRS)
    triggerConfetti(isNewBest ? 3000 : 1000); 
    
    if (isNewBest) {
        localStorage.setItem(storageKey, JSON.stringify({
            time: currentSeconds,
            spb: currentSubject === 'deutsch' ? currentSpb : 0,
            date: new Date().toISOString()
        }));
        
        if (showEdgeCaseFeedback) {
            feedbackMsg.textContent = "Wahnsinn! Du hast zwar länger gebraucht, weil die Wörter riiiesig waren, aber deine Lesegeschwindigkeit pro Buchstabe ist eigentlich sogar SCHNELLER geworden!";
        } else {
            feedbackMsg.textContent = "🎉 Neuer Highscore! Du bist super schnell geworden!";
        }
    } else {
        // Kein Highscore, aber trotzdem loben!
        feedbackMsg.textContent = `Klasse! Du hast das Paket schon ${playCount}x geübt! Je öfter du übst, desto schneller wird dein Gehirn.`;
    }
    feedbackMsg.classList.remove('hidden');
    
    const statsContainer = document.getElementById('word-stats-container');
    const statsList = document.getElementById('word-stats-list');
    
    if (currentSubject === 'deutsch' && wordStats.length > 0) {
        wordStats.sort((a, b) => b.spb - a.spb);
        let listHtml = '';
        wordStats.forEach(item => {
            let color = '#10B981'; // Grün
            if (item.spb > 0.8) color = '#EF4444'; // Rot
            else if (item.spb > 0.4) color = '#F59E0B'; // Orange
            
            listHtml += `<li style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #E5E7EB;">
                <span>${item.word}</span>
                <span style="color: ${color}; font-weight: bold;">${item.spb.toFixed(2)} spB</span>
            </li>`;
        });
        if (statsList) statsList.innerHTML = listHtml;
        if (statsContainer) statsContainer.style.display = 'block';
    } else {
        if (statsContainer) statsContainer.style.display = 'none';
    }
    
    const failedContainer = document.getElementById('failed-tasks-container');
    const failedList = document.getElementById('failed-tasks-list');
    if (failedTasks.length > 0) {
        failedList.innerHTML = failedTasks.map(t => `<li>${t.q} <span style="color: var(--secondary)">${t.a}</span></li>`).join('');
        if (failedContainer) failedContainer.style.display = 'block';
    } else {
        if (failedContainer) failedContainer.style.display = 'none';
    }
    
    const btnRestart = document.getElementById('btn-restart-level');
    const btnBackHome = document.getElementById('btn-back-home');
    
    if ((currentPackage.id.startsWith('paket_huerdenlauf') || currentPackage.id.startsWith('paket_stolper')) && failedTasks.length > 0) {
        if (failedContainer) failedContainer.style.display = 'none'; // Hide default list
        btnRestart.textContent = "Zur Auswertung ➔";
        btnRestart.onclick = () => startReviewSession();
        btnBackHome.style.display = "none";
    } else {
        btnRestart.textContent = "Nochmal spielen";
        btnRestart.onclick = () => startTraining(currentPackage.id);
        btnBackHome.style.display = "block";
    }
    
    renderPackages();
    showScreen('result');
}

let reviewQueue = [];

window.startReviewSession = function() {
    reviewQueue = [...failedTasks];
    showNextReviewLetter();
}

window.showNextReviewLetter = function() {
    if (reviewQueue.length === 0) {
        showScreen('start');
        return;
    }
    
    const task = reviewQueue.shift();
    const cleanWord = task.q.replace(/\|/g, '');
    const isLetter = cleanWord.length <= 3;
    const lookupKey = isLetter ? cleanWord.toUpperCase() : cleanWord.toLowerCase();
    
    document.getElementById('review-letter').textContent = cleanWord;
    const wordsContainer = document.getElementById('review-words');
    wordsContainer.innerHTML = '';
    
    let entries = [];
    if (isLetter && letterDictionary[lookupKey]) {
        entries = letterDictionary[lookupKey];
    } else if (!isLetter && wordDictionary[lookupKey]) {
        entries = [wordDictionary[lookupKey]];
    }
    
    if (entries.length > 0) {
        entries.forEach(entry => {
            const row = document.createElement('div');
            row.style.fontSize = '2rem';
            row.style.background = '#F3F4F6';
            row.style.padding = '12px 24px';
            row.style.borderRadius = '16px';
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.fontWeight = 'bold';
            row.style.color = '#1F2937';
            row.textContent = entry;
            wordsContainer.appendChild(row);
        });
    } else {
        wordsContainer.innerHTML = '<div style="font-size: 1.5rem;">Keine Beispiele.</div>';
    }
    
    document.getElementById('btn-next-review').onclick = showNextReviewLetter;
    
    showScreen('review');
}

function triggerConfetti(durationParam = 3000) {
    if (typeof confetti === 'function') {
        const duration = durationParam;
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
