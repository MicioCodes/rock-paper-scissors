let computerHand = ['rock', 'paper', 'scissors'];
let playerHand;
let playerSelection;
let computerSelection = computerPlay();
let gameRounds = 5;
let computerScore = 0;
let playerScore = 0;
let roundWinner;

function computerPlay(){
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function game(){

    for (let i = 0; i < gameRounds; i++) {
        playRound(playerSelection, computerSelection);

        if(playerScore === 5 || computerScore === 5 || i === gameRounds){
            if(playerScore > computerScore) {
                console.log(`Player has won the game with a score of ${playerScore} vs computer score of ${computerScore}`);
                break;
            }
            if(playerScore < computerScore){
                console.log(`Computer has won the game with a score of ${computerScore} vs player score of ${playerScore}`);
                break;
            } 
            if(playerScore === computerScore) {
                console.log(`Match was undecided! Player score was ${playerScore} and computer score was ${computerScore}`);
                break;
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
        gameRounds++;
        result = `It's a tie! Extra round has been added! Total of ${gameRounds} rounds`;

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