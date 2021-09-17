
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png";

//find first image [0]
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//find the second image [1]
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} // if player 2 wings
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} // if its a tie
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
