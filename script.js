const rockEl = document.querySelector(".card.rock");
const paperEl = document.querySelector(".card.paper");
const scissorsEl = document.querySelector(".card.scissors");

const rockValue = rockEl.dataset.rock;
const paperValue = paperEl.dataset.paper;
const scissorsValue = scissorsEl.dataset.scissors;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const reload = document.querySelector(".reload");

let youScore = 0;
let aiScore = 0;

const youScoreElement = document.querySelector(".you-score");
const aiScoreElement = document.querySelector(".ai-score");

const overall = document.querySelector(".overall");

let gameStarted = false;

rock.addEventListener('click', () => {
    if (gameStarted) {
        choicedWord(rockValue);
        updateScores();
    }
});

paper.addEventListener('click', () => {
    if (gameStarted) {
        choicedWord(paperValue);
        updateScores();
    }
});

scissors.addEventListener('click', () => {
    if (gameStarted) {
        choicedWord(scissorsValue);
        updateScores();
    }
});

function choicedWord(element) {
    document.querySelector(".ty").innerHTML = element;
}

const ai = document.querySelector(".ai");
const cards = document.querySelectorAll(".card");
const cardStart = document.querySelector(".card-start");

let choices = ['scissors', 'paper', 'rock'];

cards.forEach((e) => {
    e.addEventListener('click', () => {
        if (gameStarted) {
            getRandomChoice();
            updateScores();
        }
    });
});

cardStart.addEventListener('click', function () {
    document.querySelector(".reload").style.display = "block";
    cardStart.style.display = "none";
    gameStarted = true;
});

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const result = choices[randomIndex];
    displayWord(result);
    checkWin(document.querySelector(".ty").innerHTML, result);
}

function displayWord(choice) {
    ai.innerHTML = choice;
}

function checkWin(you, ai) {
    if (you === ai) {
        overall.innerHTML = "REMIS";
    } else if (
        (you === 'rock' && ai === 'scissors') ||
        (you === 'paper' && ai === 'rock') ||
        (you === 'scissors' && ai === 'paper')
    ) {
        overall.innerHTML = "YOU WON!";
        youScore++;
    } else {
        overall.innerHTML = "YOU LOST";
        aiScore++;
    }
}

function updateScores() {
    youScoreElement.innerHTML = youScore;
    aiScoreElement.innerHTML = aiScore;
}

reload.addEventListener('click', () => {
    window.location.reload();
});