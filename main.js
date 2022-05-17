const options = document.querySelectorAll(".options");

let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.value;
    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    updateMoves(pInput, cInput);
    compareInputs(pInput, cInput);
    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
    updateScore();
  });
});

const compareInputs = (pInput, cInput) => {
  const match = `${pInput} VS ${cInput}`;

  //Check for Tie
  if (pInput === cInput) {
    alert(`${match} is a Tie`);
    return;
  }

  //Rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${match} = You Win`);
      pScore++;
    } else {
      alert(`${match} = Computer Wins`);
      cScore++;
    }
  }

  //Paper
  if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${match} = You Win`);
      pScore++;
    } else {
      alert(`${match} = Computer Wins`);
      cScore++;
    }
  }

  //Scissors
  if (pInput === "Scissors") {
    if (cInput === "Paper") {
      alert(`${match} = You Win`);
      pScore++;
    } else {
      alert(`${match} = Computer Wins`);
      cScore++;
    }
  }
};

const updateScore = () => {
  document.getElementById("pScore").textContent = pScore;
  document.getElementById("cScore").textContent = cScore;
};

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}

function updateMoves(pInput, cInput) {
  document.getElementById("p-move").src = `images/${pInput}.png`;
  document.getElementById("c-move").src = `images/${cInput}.png`;
}