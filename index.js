const choices = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

// Returns a random limited number
let getRandomInt = (maxNum) => Math.floor(Math.random() * maxNum);

// Returns a random elements in the array, 'choices'
let computerPlay = () => choices[getRandomInt(3)];

// Checks for if Player won, else if Computer won, if none, then it's a tie game
function playRound(playerSelection, computerSelection) {

    let playerWins = "Player wins the round!";
    let computerWins = "Computer wins the round!";
    let tieGame = "Tie Game!";

    if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore++;
        document.getElementById('result').innerHTML = playerWins;
        return playerWins;
    }
    else if((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore++;
        document.getElementById('result').innerHTML = computerWins;
        return computerWins;
    }
    else
    {
        document.getElementById('result').innerHTML = tieGame;
        return tieGame;
    }
}

function game() {
    for(let i = 0; i <= 4; i++) {
        let choice = prompt("Enter your choice, Rock, Scissors, or Paper.")
        computerSelection = computerPlay();
        playRound(choice, computerSelection);
    }
    
    let scoreBoard = `Player's score: ${playerScore} and Computer's score: ${computerScore}`;
    document.getElementById('result').innerHTML = scoreBoard;

    if(playerScore > computerScore) {
        document.getElementById('finalResult').innerHTML = "The player has won the game!";
    }
    else if(playerScore < computerScore) {
        document.getElementById('finalResult').innerHTML = "The computer has defeated you!";
    }
    else {
        document.getElementById('finalResult').innerHTML = "Tie game, refresh the page to try again!";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        game();
    });
});