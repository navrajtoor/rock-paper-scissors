for(i = 0; i<5; i++){
    console.log(game());
}
function game(){
    let playerMove = getPlayerChoice();
    let compMove = getComputerChoice();
    console.log("\n");
    console.log("Player: " + playerMove);
    console.log("Computer: "+ compMove);
    return play(playerMove, compMove);
}
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    return choice == 0 ? "rock"
           :choice == 1 ? "paper"
           :"scissors";
}
function getPlayerChoice(){
    let input = prompt("Enter 'rock', 'paper' or 'scissors'");
    return input.toLowerCase();
}
function play(playerChoice, compChoice){
    if(playerChoice === compChoice){
        return "Tie game!";
    }else if(playerChoice === "rock"){
        if(compChoice === "paper"){
            return "Computer wins! Paper beats rock!";
        }else{
            return "Player wins! Rock beats scissors!";
        }
    }else if(playerChoice === "paper"){
        if(compChoice === "scissors"){
            return "Computer wins! Scissors beats paper!";
        }else{
            return "Player wins! Paper beats rock!";
        }
    }else if(playerChoice === "scissors"){
        if(compChoice === "rock"){
            return "Computer wins! Rock beats scissors!";
        }else{
            return "Player wins! Scissors beats paper!";
        }
    }
}