// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min)

// }

const num_1 = Math.ceil(Math.random() * 10);
const num_2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${num_1} multiply by ${num_2}?`;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const correctAns = num_1 * num_2;

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `score : ${score}`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
