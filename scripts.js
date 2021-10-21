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

function playRound() {
  //prompt move from player, set to playerMove
  let playerMove = prompt("What move would you like to play?");
  //change playerMove to be lowercase
  playerMove = playerMove.toLowerCase();
  //notify player if playerMove is not any of the three valid moves
  if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
    return "Sorry, that is not a valid move. Please enter 'rock', 'paper' or 'scissors'";
  }
  const computerMove = computerPlay();
  //if playerMove wins against computerMove return player win message
  if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
    return `You Win! (${playerMove} beats ${computerMove})`;
    //else if playerMove loses against computerMove return computer win message
  } else if ((playerMove === "scissors" && computerMove === "rock") || (playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors")) {
    return `Computer Wins :( (${computerMove} beats ${playerMove})`;
    //else return tie message
  } else {
    return "Tie!";
  }
}

function playMatch() {
  //declare player and computer scores
  let playerScore = 0;
  let computerScore = 0;
  //play game five times
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    //if round ends in player win, update and show scores
    if (result.substr(0, 3) === "You") {
      playerScore++;
      console.log(`${result} score is ${playerScore} : ${computerScore}`);
    }
    //if round ends in computer win, update and show scores
    if (result.substr(0, 3) === "Com") {
      computerScore++;
      console.log(`${result} score is ${playerScore} : ${computerScore}`);
    }
    //if round ends in tie, show scores
    if (result.substr(0, 3) === "Tie") {
      console.log(`${result} score is ${playerScore} : ${computerScore}`);
    }
    //if input is invalid, notify player and reduce index to allow for redo
    if (result.substr(0, 3) === "Sor") {
      console.log("Sorry, that is not a valid move. Please enter 'rock', 'paper' or 'scissors'");
      i--;
    }
  }
  //if playerScore is greater than computerScore, show victory message
  if (playerScore > computerScore) {
    return `You Win ${playerScore} : ${computerScore}!`;
  }
  //if computerScore is greater than playerScore, show loss message
  if (playerScore < computerScore) {
    return `You Lose ${playerScore} : ${computerScore} :(`;
  }
  //if scores are tied, show tie message
  if (playerScore === computerScore) {
    return `Tie! ${playerScore} : ${computerScore}`;
  }
}