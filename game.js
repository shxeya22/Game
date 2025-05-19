let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    if (round > 5) return;

    const computerChoice = getComputerChoice();

    document.getElementById("humanChoice").textContent = humanChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win this round!";
        humanScore++;
    } else {
        result = "Computer wins this round!";
        computerScore++;
    }

    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("roundNumber").textContent = round;
    document.getElementById("resultText").textContent = result;

    round++;

    if (round > 5) {
        setTimeout(() => {
            if (humanScore > computerScore) {
                document.getElementById("resultText").textContent = "🎉 You win the game!";
            } else if (computerScore > humanScore) {
                document.getElementById("resultText").textContent = "💻 Computer wins the game!";
            } else {
                document.getElementById("resultText").textContent = "🤝 It's a tie!";
            }
        }, 500);
    }
}