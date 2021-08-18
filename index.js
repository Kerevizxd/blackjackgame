let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");
const playerEl = document.getElementById("player-el");
let player = {
  name: "player",
  chips: "150",
};
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game... Try again!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
  }
}
