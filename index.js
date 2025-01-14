const options = ["rock", "paper", "scissors"];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const computerSelectionDiv = document.getElementById("computer-selection");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScoreboard(result, computerChoice) {
    computerSelectionDiv.innerHTML = `<h2>Computer chose: ${computerChoice}</h2>`;

    const playerScoreText = `Player: ${playerScore}`;
    const computerScoreText = `Computer: ${computerScore}`;
    scoreboard.innerHTML = `
        <h2>Score</h2>
        <p>${playerScoreText}</p>
        <p>${computerScoreText}</p>
        <p>${result}</p>
    `;
}

rockButton.addEventListener("click", () => {
    const computerChoice = computerPlay();
    const result = playRound("rock", computerChoice);
    updateScoreboard(result, computerChoice);
});

paperButton.addEventListener("click", () => {
    const computerChoice = computerPlay();
    const result = playRound("paper", computerChoice);
    updateScoreboard(result, computerChoice);
});

scissorsButton.addEventListener("click", () => {
    const computerChoice = computerPlay();
    const result = playRound("scissors", computerChoice);
    updateScoreboard(result, computerChoice);
});
