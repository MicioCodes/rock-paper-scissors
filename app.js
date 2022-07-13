let computerHand = ['rock', 'paper', 'scissors'];
let playerHand;
let playerSelection;
let computerSelection = computerPlay();
let gameRounds = 5;
let computerScore = 1;
let playerScore = 1;
let roundWinner;

function computerPlay(){
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function game(){

    for (let i = 0; i < gameRounds; i++) {
        playRound(playerSelection, computerSelection);

        if(playerScore >= 5 || computerScore >= 5){
            if(playerScore > computerScore) {
                console.log(`Player has won the game with a score of ${playerScore} vs computer score of ${computerScore}`);
            }
            if(playerScore < computerScore){
                console.log(`Computer has won the game with a score of ${computerScore} vs player score of ${playerScore}`);
            } 
            if(playerScore === computerScore) {
                console.log(`Match was undecided! Player score was ${playerScore} and computer score was ${computerScore}`);
            }
            break;
        }

        console.log(playRound(i));
    }
}

function playRound(playerSelection, computerSelection){

    playerHand = prompt('Choose Rock, Paper or Scissors', 'rock');
    playerSelection = playerHand.toLowerCase();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        roundWinner = 'tie';

        result = `It's a tie. Player picked ${playerSelection}, Computer picked ${computerSelection}`;

        return result;
    }
    if(computerSelection === 'rock' && playerSelection != 'paper' 
    || computerSelection === 'scissors' && playerSelection != 'rock'
    || computerSelection === 'paper' && playerSelection != 'scissors'
    ){
        computerScore++;
        roundWinner = 'computer';

        result = `Computer wins! ${computerSelection} beats ${playerSelection}. Player Score: ${playerScore} Computer Score: ${computerScore}`;

        return result;
    }
    if(playerSelection === 'rock' && computerSelection != 'paper'
    || playerSelection === 'scissors' && computerSelection != 'rock'
    || playerSelection === 'paper' && computerSelection != 'scissors'){

        playerScore++;
        roundWinner = 'player';

        result = `Player wins! ${playerSelection} beats ${computerSelection} Player Score: ${playerScore} Computer Score: ${computerScore}`;

        return result;
    }
    else {
        return 'You didnt select Rock Paper or Scissors';
    }
}

console.log(game());