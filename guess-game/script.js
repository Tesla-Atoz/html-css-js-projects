"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

document.querySelector(".check").addEventListener("click", function (e) {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please Guess the number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct  Number !";
    document.querySelector(".number").textContent = secretNumber;

    score += 1;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > hightscore) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "NO SCORE";
      document.querySelector(".message").textContent =
        "You lost the game dear!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "NO SCORE";
      document.querySelector(".message").textContent =
        "You lost the game dear!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "please Guess the number";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
