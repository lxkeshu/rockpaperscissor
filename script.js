let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const dispChoice = document.querySelector("#dispChoice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const draw = (u,c) => {
  dispChoice.innerHTML = `User Choice: (${u}) , Computer Choice: (${c})`;
  msg.innerHTML = "Draw";
  msg.parentElement.style.backgroundColor = "white";
  msg.style.color = "black";
  dispChoice.style.color = "black";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = "User Wins";
    msg.parentElement.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = "Computer Wins";
    msg.parentElement.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playgame = (userChoice) => {
  const computerChoice = getComputerChoice();
  dispChoice.innerHTML = `User Choice: (${userChoice}) , Computer Choice: (${computerChoice})`;
  dispChoice.style.color = "white";
  if (userChoice === computerChoice) {
    draw(userChoice, computerChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else {
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
