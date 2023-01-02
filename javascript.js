function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return "It's a draw";
  }
  else if(playerSelection == "ROCK"){
    if(computerSelection == "PAPER"){
      return "You Lose! Paper beats Rock";
    }
    else if(computerSelection == "SCISSOR"){
      return "You Won! Rock beats Scissor";
    }
  }
  else if(playerSelection == "PAPER"){
    if(computerSelection == "ROCK"){
      return "You Won! Paper beats Rock";
    }
    else if(computerSelection == "SCISSOR"){
      return "You Lost! Scissor eats Paper";
    }
  }
  else if(playerSelection == "SCISSOR"){
    if(computerSelection == "ROCK"){
      return "You Lost! Rock beats Scissor";
    }
    else if(computerSelection == "PAPER"){
      return "You Won! Scissor beats Paper";
    }
  }
}
function getComputerChoice(){
  // Random numbers between 0 to 2
  let comp_choice = Math.floor(Math.random()*3) ;
  if(comp_choice == 0){
    return "ROCK";
  }
  else if(comp_choice == 1){
    return "PAPER";
  }
  else{
    return "SCISSOR";
  }
}
function game(round){
  let player_score = 0;
  let computer_score = 0;
  for (let i = 0; i < round; i++) {
    let playerSelection = prompt("Choose your hand (ROCK, PAPER, SCISSOR): ");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

let game_round = prompt("Enter the number of round: ");
game(game_round);
