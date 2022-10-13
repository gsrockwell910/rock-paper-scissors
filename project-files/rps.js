// Start variables for score 
let playerScore = 0;
let computerScore = 0;
// End variables for score
// Start function to determine computers play
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = options[randNum];
    return computerChoice;
}
// End function to determine computers play
// Start function to play a single round 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! you both threw rock!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! you both threw paper!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied! you both threw scissors!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You won! rock crushes scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You won! paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You won! scissors cuts paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lost! paper covers rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lost! scissors cuts paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lost! rock crushes scissors!"
    }
}
// End function to play a single round
// Start function to loop a five round game 
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What will you throw?", "Rock, Paper, or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "You won! Absolutely remarkable";
    } else if (playerScore < computerScore) {
        return "You lost! Now the computers shall rule us all!"
    } else {
        return "You tied! What a fateful ending"
    }
}

console.log(game());
// End function to loop a five round game 