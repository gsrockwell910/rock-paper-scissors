//Start function to determine computers play
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = options[randNum];
    return computerChoice;
}
//End function to determine computers play
//Start function to play a single round 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! you both threw rock!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! you both threw paper!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied! you both threw scissors!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! rock crushes scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! scissors cuts paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! paper covers rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost! scissors cuts paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost! rock crushes scissors!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
//End function to play a single round