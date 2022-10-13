//Start function to determine computers play
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = options[randNum];
    return computerChoice;
}
//End function to determine computers play
