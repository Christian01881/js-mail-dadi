/* 
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let diceGame = document.getElementById('DiceGame');
let emailCheck = document.getElementById('EmailCheck');
const homePage = document.getElementById('HomePage');
const eMail = document.getElementById('E-mail');
const dice = document.getElementById('Dice');

emailCheck.addEventListener('click', function() {
    homePage.classList.add('d-none');
    eMail.classList.remove('d-none');
});

diceGame.addEventListener('click', function() {
    homePage.classList.add('d-none');
    dice.classList.remove('d-none');
});


const mail = [
    'classe92@gmail.com',
    'classe93@gmail.com',
    'classe94@gmail.com',
    'classe95@gmail.com',
    'classe96@gmail.com',
    'classe97@gmail.com',
    'classe98@gmail.com',
    'classe99@gmail.com',
];

const validate = document.getElementById('Validate');
const text = document.getElementById('text');

validate.addEventListener('click',  function(){
    const search = document.getElementById('Email1').value;
    let invitato = '';
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === search) {
          invitato = mail[i];
        }
    }
    if (invitato) {
        text.innerHTML = `<h2>La Email è convalidata</h2>`;
    } else {
        text.innerHTML = `<h2>La Email non è presente nei nostri registri</h2>`;
    }
});


let game = document.getElementById('Game');
const dadoUtente = document.getElementById('MyDice');
const dadoPc = document.getElementById('PcDice');
const win = document.getElementById('win');

game.addEventListener('click', function(){
    let getRndNumber = Math.floor(Math.random() * 6) + 1;
    let getRndNumber2 = Math.floor(Math.random() * 6) + 1;
    dadoUtente.innerHTML = `<h1>${getRndNumber}</h1>`;
    dadoPc.innerHTML = `<h1>${getRndNumber2}</h1>`;
    
    if(getRndNumber > getRndNumber2){
        win.innerHTML += `<h2 class="text-center mt-3">Hai vinto</h2>`;
    }else{
        win.innerHTML += `<h2 class="text-center mt-3">Hai perso</h2>`;
    }

})





