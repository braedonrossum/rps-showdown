const options = ["rock", "paper", "scissors"];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const computerSelectionDiv = document.getElementById("computer-selection");
const computerImage = document.getElementById("computer-image");
const playerImage = document.getElementById("player-image");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const resultText = document.getElementById("result");


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
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;

resultText.innerHTML = `<p>${result}</p>`;
}

function resetImages() {
    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    playerRock.style.display = "none";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";
}

rockButton.addEventListener("click", () => {
    resetImages();
    const computerChoice = computerPlay();
    if(computerChoice === "rock") {
        computerRock.style.display = "block";
    } else if(computerChoice === "paper") {
        computerPaper.style.display = "block";
    } else {
        computerScissors.style.display = "block";
    }
    const result = playRound("rock", computerChoice);
    updateScoreboard(result, computerChoice);
    playerRock.style.display = "block";
});

paperButton.addEventListener("click", () => {
    resetImages();
    const computerChoice = computerPlay();
    if(computerChoice === "rock") {
        computerRock.style.display = "block";
    } else if(computerChoice === "paper") {
        computerPaper.style.display = "block";
    } else {
        computerScissors.style.display = "block";
    }
    const result = playRound("paper", computerChoice);
    updateScoreboard(result, computerChoice);
    playerPaper.style.display = "block";
});

scissorsButton.addEventListener("click", () => {
    resetImages();
    const computerChoice = computerPlay();
    if(computerChoice === "rock") {
        computerRock.style.display = "block";
    } else if(computerChoice === "paper") {
        computerPaper.style.display = "block";
    } else {
        computerScissors.style.display = "block";
    }
    const result = playRound("scissors", computerChoice);
    updateScoreboard(result, computerChoice);
    playerScissors.style.display = "block";

});
