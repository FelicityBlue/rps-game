function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return ["It's a draw",0];
  }
  else if(playerSelection == "ROCK"){
    if(computerSelection == "PAPER"){
      return ["You Lose! Paper beats Rock",-1];
    }
    else if(computerSelection == "SCISSOR"){
      return ["You Won! Rock beats Scissor",1];
    }
  }
  else if(playerSelection == "PAPER"){
    if(computerSelection == "ROCK"){
      return ["You Won! Paper beats Rock",1];
    }
    else if(computerSelection == "SCISSOR,1)"){
      return ["You Lost! Scissor eats Paper",-1];
    }
  }
  else if(playerSelection == "SCISSOR"){
    if(computerSelection == "ROCK"){
      return ["You Lost! Rock beats Scissor",-1];
    }
    else if(computerSelection == "PAPER"){
      return ["You Won! Scissor beats Paper",1];
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
    let result = playRound(playerSelection, computerSelection);

    console.log(result[0]);
    
    // update scores
    if(result[1] == -1){
      computer_score += 1;
    }
    else if(result[1] == 1){
      player_score += 1;
    }
  }
  return[player_score, computer_score];
}

let game_round = prompt("Enter the number of round: ");
let scores = game(game_round);

// scores
console.log("Your score: " + scores[0]);
console.log("Computer score: " + scores[1]);

// final result
if(scores[0] > scores[1]){
  console.log("You won!");
}
else if(scores[0] < scores[1]){
  console.log("You lost!");
}
else{
  console.log("It's a draw!");
}