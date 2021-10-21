function computerPlay() {
  //pick a random number and declare as a variable
  let randomNum = Math.random();
  //if within a certain range declare computer choice as rock
  if (randomNum <= 0.33) {
    let computerMove = "rock";
    //return computer choice
    return computerMove;
    //otherwise if within a different range declare computer choice as paper
  } else if (randomNum <= 0.66) {
    let computerMove = "paper";
    //return computer choice
    return computerMove;
    //otherwise declare computer choice as scissors
  } else {
    let computerMove = "scissors";
    //return computer choice
    return computerMove;
  }
}

//weird but it doesn't make sense to declare scores in any of the functions
let playerScore = 0;
let computerScore = 0;

function playRound(playerMove) {
  const computerMove = computerPlay();
  //if playerMove wins against computerMove return player win message
  if ((playerMove === "rock" && computerMove === "scissors")
      || (playerMove === "paper" && computerMove === "rock")
      || (playerMove === "scissors" && computerMove === "paper")) {
    playerScore++;
    if (playerScore === 5) {
      outputDisplay.textContent = `Good game! (${playerMove} beats ${computerMove})
        Score is ${playerScore} : ${computerScore} Continue?`;
    } else {
      outputDisplay.textContent = `You Win! (${playerMove} beats ${computerMove})
        Score is ${playerScore} : ${computerScore}`;
    }
    //else if playerMove loses against computerMove return computer win message
  } else if ((playerMove === "scissors" && computerMove === "rock")
      || (playerMove === "rock" && computerMove === "paper")
      || (playerMove === "paper" && computerMove === "scissors")) {
    computerScore++;
    if (computerScore === 5) {
      outputDisplay.textContent = `Good game! (${computerMove} beats ${playerMove})
        Score is ${playerScore} : ${computerScore} Continue?`;
    } else {
      outputDisplay.textContent = `Computer Wins :( (${computerMove} beats ${playerMove})
        Score is ${playerScore} : ${computerScore}`;
    }
      //else return tie message
  } else {
    outputDisplay.textContent = `Tie! Both ${playerMove}!
      Score is ${playerScore} : ${computerScore}`;
  }
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", () => {playRound('rock')});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click", () => {playRound('paper')});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener("click", () => {playRound('scissors')});

const body = document.querySelector('body');
const outputDisplay = document.createElement('div');
outputDisplay.textContent = 'Choose a move to play! First to 5 wins!';
body.appendChild(outputDisplay);

