
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return "rock";
    } 
    else if (number % 3 === 1) {
        return "paper";
    } else {
        return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection ==="Paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
    } else {
        console.log("It's a tie");
    };
} else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper");
        } else if (computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
        } else {
           console.log("It's a tie");
        };
    } else if (playerSelection === "Scissors") {
if (computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissors");
} else if (computerSelection === "Paper") {
   console.log("You Win! Scissors beats Paper");
} else {
    console.log("It's a tie");
};
        };
    };
    
console.log(playSingleRound(playerSelection, computerSelection));
