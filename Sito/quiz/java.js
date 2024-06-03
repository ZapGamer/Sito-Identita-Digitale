const claims = [
    { statement: "Le identità digitali non possono essere violate grazie alla tecnologia avanzata.", isTrue: false },
    { statement: "L'utilizzo di sole password è una protezione adeguata per le identità digitali.", isTrue: false },
    { statement: "L'idea di identità digitale esisteva già prima di internet.", isTrue: false },
    { statement: "Solo gli individui possono creare identità digitali, non le aziende.", isTrue: false },
    { statement: "L'uso di autenticazione a due fattori aumenta significativamente la sicurezza degli account.", isTrue: true },
    { statement: "Il phishing è una tecnica usata per rubare dati personali fingendo di essere un'istituzione fidata.", isTrue: true },
    { statement: "I siti web con HTTP sono sempre affidabili e sicuri.", isTrue: false },
    { statement: "Gli hacker non possono ottenere i tuoi dati se utilizzi una rete Wi-Fi pubblica.", isTrue: false },
    { statement: "Le impronte digitali e altri dati biometrici sono infallibili per la sicurezza.", isTrue: false },
    { statement: "Le identità digitali permettono l'accesso a vari servizi online.", isTrue: true },
    { statement: "Per proteggere le identità digitali, è importante utilizzare password complesse.", isTrue: true },
    { statement: "Le identità digitali sono completamente sicure contro gli attacchi di phishing.", isTrue: false },
    { statement: "Organizzazioni e aziende possono gestire identità digitali per scopi specifici.", isTrue: true },
    { statement: "Un'identità digitale compromessa può danneggiare gravemente la reputazione di un individuo o di un'azienda.", isTrue: true },
    { statement: "Il furto di identità digitale non causa mai panico o confusione tra le persone.", isTrue: false },
    { statement: "Verificare l'autenticità di un sito web è cruciale per la protezione dell'identità digitale.", isTrue: true },
    { statement: "Le identità digitali possono includere informazioni sensibili e personali.", isTrue: true },
    { statement: "Non esistono organizzazioni che si occupano della protezione delle identità digitali.", isTrue: false },
    { statement: "Le identità digitali non vengono mai utilizzate per scopi di propaganda politica.", isTrue: false },
    { statement: "La gestione sicura delle identità digitali richiede aggiornamenti costanti delle misure di sicurezza.", isTrue: true }
];

let currentClaimIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(claims);

document.getElementById('trueButton').addEventListener('click', () => handleAnswer(true));
document.getElementById('falseButton').addEventListener('click', () => handleAnswer(false));

function displayNextClaim() {
    if (currentClaimIndex < claims.length) {
        document.getElementById('question').innerText = claims[currentClaimIndex].statement;
    } else {
        document.getElementById('question').innerText = "Gioco terminato!";
        document.getElementById('trueButton').disabled = true;
        document.getElementById('falseButton').disabled = true;
        document.getElementById('trueButton').textContent = "torna indietro";
        document.getElementById('falseButton').textContent = "ricomincia";
        
    }
    
}

function handleAnswer(userAnswer) {
    if (currentClaimIndex >= claims.length)  {
        document.getElementById('trueButton').addEventListener('click', back);
        document.getElementById('falseButton').addEventListener('click', restart);
    } else {
        const claim = claims[currentClaimIndex];
        const correctAnswer = claim.isTrue;
        document.getElementById('trueButton').disabled = true;
        document.getElementById('falseButton').disabled = true;
        const resultElement = document.getElementById('result');
        if (userAnswer === correctAnswer) {
            score += 10;
            resultElement.innerText = "Corretto!";
            resultElement.classList.remove('incorrect');
            resultElement.classList.add('correct');
        } else {
            score -= 5;
            resultElement.innerText = "Sbagliato.";
            resultElement.classList.remove('correct');
            resultElement.classList.add('incorrect');
        }
        document.getElementById('score').innerText = `Punteggio: ${score}`;
        currentClaimIndex++;
        setTimeout(() => {
            resultElement.innerText = '';
            displayNextClaim();
            document.getElementById('trueButton').disabled = false;
            document.getElementById('falseButton').disabled = false;
        }, 1000);
    }
}

function restart() {
    window.location.href="quiz.html";
}

function back() {
    window.location.href="..\\index.html";
}

displayNextClaim();