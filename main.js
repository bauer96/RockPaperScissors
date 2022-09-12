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

console.log(getComputerChoice());