const claims = [
    { statement: "Le identità digitali sono sempre sicure e non possono essere rubate.", isTrue: false },
    { statement: "Solo le password sono sufficienti per proteggere un'identità digitale.", isTrue: false },
    { statement: "L'identità digitale è un concetto recente, nato con l'avvento di internet.", isTrue: true },
    { statement: "Le identità digitali possono essere create solo da individui privati, non da organizzazioni.", isTrue: false },
    { statement: "L'autenticazione a due fattori migliora la sicurezza dell'account.", isTrue: true },
    { statement: "Il phishing è un tentativo di ottenere informazioni sensibili spacciandosi per un ente affidabile.", isTrue: true },
    { statement: "Tutti i siti web con HTTP sono sicuri.", isTrue: false },
    { statement: "Gli hacker non possono accedere alle tue informazioni tramite Wi-Fi pubblico.", isTrue: false },
    { statement: "I dati biometrici come impronte digitali sono infallibili.", isTrue: false },
    { statement: "Le identità digitali possono essere utilizzate per accedere a servizi online.", isTrue: true },
    { statement: "Le identità digitali spesso richiedono l'uso di password complesse per la protezione.", isTrue: true },
    { statement: "Le identità digitali possono essere rubate tramite attacchi di phishing.", isTrue: true },
    { statement: "Le identità digitali possono essere gestite da organizzazioni con scopi specifici.", isTrue: true },
    { statement: "La compromissione di un'identità digitale può danneggiare la reputazione di una persona o di un'azienda.", isTrue: true },
    { statement: "La compromissione di un'identità digitale può causare panico e confusione nella popolazione.", isTrue: true },
    { statement: "Verificare l'autenticità dei siti web è importante per proteggere l'identità digitale.", isTrue: true },
    { statement: "Le identità digitali possono contenere informazioni sensibili e personali.", isTrue: true },
    { statement: "Esistono organizzazioni dedicate alla protezione delle identità digitali.", isTrue: true },
    { statement: "Le identità digitali possono essere utilizzate per propaganda politica.", isTrue: true }
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

