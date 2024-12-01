// Seleziona gli elementi dalla pagina
const memorizzaDiv = document.querySelector('.memorizza');
const insertDiv = document.querySelector('.insert');
const numberDisplay = document.querySelector('.number');
const timerDisplay = document.querySelector('.timer');
const inputs = document.querySelectorAll('.insert input');
const checkButton = document.querySelector('.btn-success');
// Variabili globali
let randomNumbers = [];
const displayTime = 10; // Tempo in secondi per visualizzare i numeri


// Funzione per generare numeri casuali
function generateRandomNumbers(count, min = 1, max = 50) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

// Funzione per avviare il timer e mostrare i numeri
function startGame() {
  randomNumbers = generateRandomNumbers(5);
  numberDisplay.textContent = randomNumbers.join(' ');

  let timeLeft = displayTime;
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showInputForm();
    }
  }, 1000);
}

// Funzione per nascondere i numeri e mostrare il modulo di input
function showInputForm() {
  memorizzaDiv.classList.add('hide');
  insertDiv.classList.remove('hide');
}

// Funzione per verificare i numeri inseriti
function checkNumbers() {
  const userNumbers = Array.from(inputs).map(input => parseInt(input.value, 10));
  const correctNumbers = userNumbers.filter(num => randomNumbers.includes(num));

  alert(`Numeri corretti: ${correctNumbers.length}\nIndovinati: ${correctNumbers.join(', ')}`);
}

// Event listener per il pulsante di controllo
checkButton.addEventListener('click', checkNumbers);

// Avvia il gioco
startGame();

/*correzione con Stefano
const form = document.getElementById('answers-form');
const inputFields = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list')
const messageElement = document.getElementById('messsage')
const instructionsElement = document.getElementById('instructions')

// dati iniziali
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 10;

/*
1. creo un array con i numeri estratti e li stampo
2. faccio partire il countdown
3. al termine del countdown nascondo i numeri e mostro il form
4. al click del bottone del form vengono verificati i numeri e generato l'output

per verificare i numeri mi occorre: 
1.salvo in un array i numeri giocati (dopo la validazione)
2.ogni numero giocato(ciclo i numeri giocati) verifico se è incluso nell'array dei numeri estratti
3.ogni numero corretto viene pushato in un array di numeri vincenti
4.se la lunghezza dell'array dei numeri vincenti corrisponde alla lunghezza dell'array dei numeri estratti hai vinto
5.se è inferiore hai perso
6.per questi 2 punti (4 e 5) verrà stampato l'elenco dei numeri vincenti
7.se l'array dei numeri vincenti è vuoto messaggio che dice che non hai indovinato nulla
//1.
const numbers = getDifferenceRandomNumbers(min, max, totalNumbers)

let items = ''
for (let i = 0; i < numbers.length; i++) {
  items += `<li>${number}</li>`;
}
numbersListElement.innerHTML = items;

//2.
countdownElement.innerHTML = time;
const countdown = setInterval(() => {
  countdownElement.innerHTML = --time;
  if (time = 0) { //fermare a 0 countdown
  clearInterval(countdown);
  numbersListElement.classList.add('d-none')
  countdownElement.classList.add('d-none')
  form.classList.remove('d-none')
  instructionsElement.innerHTML = 'inserisci tutti i numeri che ricordi anche nello stesso ordine'
}
}, 1000);

form.addEventListener('submit', confirm)
*/