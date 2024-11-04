let container = document.querySelector(".container");
let points = document.querySelector(".points");

let Fcards = [
  { name: " Lion", img: "images/Lion.jpg" },
  { name: " Tiger", img: "images/Tiger.jpg" },
  { name: " Elephant", img: "images/Elephant.webp" },
  { name: " Peacock", img: "images/Peacock.webp" },
  { name: " Monkey", img: "images/Monkey.webp" },
  { name: " Snake", img: "images/Snake.jpg" },
  { name: " Lion", img: "images/Lion.jpg" },
  { name: " Tiger", img: "images/Tiger.jpg" },
  { name: " Elephant", img: "images/Elephant.webp" },
  { name: " Peacock", img: "images/Peacock.webp" },
  { name: " Monkey", img: "images/Monkey.webp" },
  { name: " Snake", img: "images/Snake.jpg" },
];

Fcards.sort(() => 0.5 - Math.random());

createBoard();
function createBoard() {
  for (let i = 0; i < Fcards.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "Images/logo.jpg");
    card.setAttribute("data-class", i);
    card.addEventListener("click", flipCard);
    container.appendChild(card);
    console.log(card);
  }
}
card_selected = [];
card_selected_id = [];
function flipCard() {
  let card = this.getAttribute("data-class");
  this.setAttribute("src", Fcards[card].img);
  card_selected.push(Fcards[card].name);
  card_selected_id.push(card);

  if (card_selected.length === 2) {
    setTimeout(checkcard, 400);
  }
}
correctcards = [];

function checkcard() {
  let cards = document.querySelectorAll("img");
  if (card_selected[0] === card_selected[1]) {
    cards[card_selected_id[0]].setAttribute("src", "Images/done.jpg");
    cards[card_selected_id[1]].setAttribute("src", "Images/done.jpg");
    cards[card_selected_id[0]].removeEventListener("click", flipCard);
    cards[card_selected_id[1]].removeEventListener("click", flipCard);
    correctcards.push(card_selected);
    points.innerHTML = correctcards.length;
  } else {
    cards[card_selected_id[0]].setAttribute("src", "Images/Logo.jpg");
    cards[card_selected_id[1]].setAttribute("src", "Images/Logo.jpg");
  }

  card_selected = [];
  card_selected_id = [];

  if (correctcards.length === Fcards.length / 2) {
    points.innerHTML = "You Won the game";
  }
}
