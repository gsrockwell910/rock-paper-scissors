// Start score section
let playerScore = 0;
let computerScore = 0;
// End score section

// Start function to determine computers play
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = options[randNum];
    return computerChoice;
}
// End function to determine computers play

// Start global variable section
const rockButton = document.querySelector(".rockButton");
rockButton.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
const paperButton = document.querySelector(".paperButton");
paperButton.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
const scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
const outputDiv = document.querySelector(".outputDiv");
const p = document.createElement("p");
p.textContent = "Rock, Paper, Scissors best of 5. Can you save the Earth?";
outputDiv.appendChild(p).style.color = "white";
const h2 = document.createElement("h2");
let playScore = document.querySelector("#playerScore");
let alienScore = document.querySelector("#alienScore");
const restartButtonDiv = document.querySelector(".restart-button-div");
const btnContainer = document.querySelector(".btn-container");
// End global variable section

// Start function to play a single round 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        p.textContent = `You tied! you both threw ${playerSelection}!`
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore
        p.textContent = "You won! rock crushes scissors!"
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore
        p.textContent = "You won! paper covers rock!"
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       ++playerScore
        p.textContent = "You won! scissors cuts paper!"
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore
        p.textContent = "You lost! paper covers rock!"
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore
        p.textContent = "You lost! scissors cuts paper!"
        outputDiv.appendChild(p).style.color = "white"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore
        p.textContent = "You lost! rock crushes scissors!"
        outputDiv.appendChild(p).style.color = "white"
    }
}
// End function to play a single round

// Start winner section
const findWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        h2.innerText = "You Won! Earth lives to see another day!";
        outputDiv.removeChild(p);
        outputDiv.appendChild(h2).style.color = "white";
        let restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.style = "padding: 35px; border-radius: 10%; font-size: 30px;";
        restartButton.style.color = "white"
        restartButton.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
        restartButtonDiv.appendChild(restartButton).addEventListener("click", () => {
            location.reload();
        });
        btnContainer.style.display = "none";
         
    } else if (computerScore === 5) {
        h2.innerText = "You Lost! Earth will de destroyed in 10, 9, 8....";
        outputDiv.removeChild(p);
        outputDiv.appendChild(h2).style.color = "white";
        let restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.style = "padding: 35px; border-radius: 10%; font-size: 30px;";
        restartButton.style.color = "white"
        restartButton.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
        restartButtonDiv.appendChild(restartButton).addEventListener("click", () => {
            location.reload();
        });
        btnContainer.style.display = "none";
    }
};
// End winner section

// Start score function
const trackScores = (playerScore, computerScore) => {
    playScore.textContent = `👨‍🚀 Player Score: ${playerScore}`;
    alienScore.textContent = `👽 Alien Score: ${computerScore}`;
    };
// End score function

// Start buttons
rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    trackScores(playerScore, computerScore);
    findWinner(playerScore, computerScore);
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    trackScores(playerScore, computerScore);
    findWinner(playerScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    findWinner(playerScore, computerScore);
    findWinner(playerScore, computerScore);
});
// End buttons

// Start function to loop a five round game 
// const game = () => {
//    for (let i = 0; i < 5; i++) {
//        const playerSelection = prompt("What will you throw?", "Rock, Paper, or Scissors").toLowerCase();
//        const computerSelection = getComputerChoice();
//        console.log(playRound(playerSelection, computerSelection));
//    }
//    if (playerScore > computerScore) {
//        return "You won! Absolutely remarkable";
//    } else if (playerScore < computerScore) {
//        return "You lost! Now the computers shall rule us all!"
//    } else {
//        return "You tied! What a fateful ending"
//    }
//}

//console.log(game());
// End function to loop a five round game 