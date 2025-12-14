const btnPlayer1 = document.querySelector("#p1-btn");
const btnPlayer2 = document.querySelector("#p2-btn");
const scoreDisplayPlayer1 = document.querySelector("#score1");
const scoreDisplayPlayer2 = document.querySelector("#score2");
const resetBtn = document.querySelector("#reset");
const playTo = document.querySelector("#playto");

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let winningScore = 3;
let isGameOver = false;

btnPlayer1.addEventListener("click", () => {
  if (!isGameOver) {
    scorePlayer1++;
    if (scorePlayer1 === winningScore) {
      isGameOver = true;
      scoreDisplayPlayer1.textContent = scorePlayer1;
      scoreDisplayPlayer1.classList.add("winner");
      scoreDisplayPlayer2.classList.add("loser");
      alert("Player 1 won the game!");
    }
    scoreDisplayPlayer1.textContent = scorePlayer1;
  }
});

btnPlayer2.addEventListener("click", () => {
  if (!isGameOver) {
    scorePlayer2++;
    if (scorePlayer2 === winningScore) {
      isGameOver = true;
      scoreDisplayPlayer2.textContent = scorePlayer2;
      scoreDisplayPlayer2.classList.add("winner");
      scoreDisplayPlayer1.classList.add("loser");
      alert("Player 2 won the game!");
    }
    scoreDisplayPlayer2.textContent = scorePlayer2;
  }
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

playTo.addEventListener("change", (e) => {
  winningScore = parseInt(e.target.value);
});

function resetGame() {
  isGameOver = false;
  scorePlayer1 = 0;
  scorePlayer2 = 0;

  scoreDisplayPlayer1.textContent = scorePlayer1;
  scoreDisplayPlayer2.textContent = scorePlayer2;
  scoreDisplayPlayer1.classList.remove("winner", "loser");
  scoreDisplayPlayer2.classList.remove("winner", "loser");
}
