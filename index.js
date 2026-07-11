// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



let firstCard = 2;
let lastCard = 9;
let sum = firstCard + lastCard;

let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el')

function startGame() {
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${firstCard} ${lastCard}`
    if (sum > 21) {
        message = `The Sum of Your Cards Are ${sum}, Your OUT!`;
        isAlive = false;
    } else if (sum === 21){
        message = `Wohooo, You've got a BlackJack !!!`;
        hasBlackjack = true;
    } else {
        message = 'Do You Want To Get A new Card? ';
        console.log(message)
    }

    messageEl.textContent = message;
}


function newCard() {
    let thirdCard = 2;
    sum += thirdCard;
    startGame();
}


document.getElementById('btn').addEventListener('click', startGame);
document.getElementById('new-btn').addEventListener('click', newCard);