// -------------------------------------------------------------------------------------- VARIABLES

const reactionHighscoreCont = document.querySelector(".reaction-highscore-cont");
const reactionPlayersInput = document.querySelector("#reaction-highscore-input");
const reactionPlayersScore = document.querySelector(".players-reaction-score");
const reactionStartScreen = document.querySelector(".reaction-start-screen");
const recentHighscorePlayer = document.querySelector("#recent-player");
const recentHighscoreHscore = document.querySelector("#recent-hscore");
const ractionExitBtn = document.querySelector(".reaction-exit-btn");
const reactionContainer = document.querySelector(".reaction-cont");
const reactionColor = document.querySelector(".reaction-color");
const reactionTime = document.querySelector(".reaction-time");

let hScore;

let spaceBarEnabled = false;
let gameRunning = false;
let reactionTimer;
let ms = 0;
let s = 0;


// -------------------------------------------------------------------------------------- ONLOAD

// Stop Reaction Timer Key - activates Spacebar if game is running
document.body.onkeydown = e => {
        if (e.keyCode == 32 && spaceBarEnabled) {
            spaceBarEnabled = false;
            finishRound();
        }
    }


// Stop Reaction Timer - BUTTON (reaction color)
reactionColor.addEventListener("click", () => {
    if (spaceBarEnabled) {
            spaceBarEnabled = false;
            finishRound();
        }
});


// Creates default Highscore in Local Storage if no Player Highscore avalible
if (localStorage.getItem("reactionHighscore") === null) {
    localStorage.setItem("reactionHighscore", JSON.stringify( { name: "Computer", score: [0,59] } ));
}

// Call
updateHscoreStartScreen();


// -------------------------------------------------------------------------------------- FUNCTIONS

// Updates Recent Highscore on Start Screen
function updateHscoreStartScreen() {
    hScore = JSON.parse(localStorage.getItem("reactionHighscore"));
    
    recentHighscorePlayer.innerText = hScore.name;
    recentHighscoreHscore.innerText = `${hScore.score[0]}.${hScore.score[1]}s`;
}


// Resets and Runs game; 
const standbyReactionTest = () => {
    resetForNextRound();
    gameRunning = true;
    toggleInvisibleClass();

    reactionTime.innerText = `${s} : ${ms}s`;
    
    if (gameRunning) {
        setTimeout(startReactionTest, (Math.floor(Math.random() * 6) * 1000 + 2000));
    }
}


// Toggles start screen and reaction container
const toggleInvisibleClass = () => {
    reactionStartScreen.classList.toggle("invisible");
    reactionContainer.classList.toggle("invisible");
    ractionExitBtn.classList.toggle("slide-up");
}


// Starts test timer; Enables Spacebar; Sets Color to Green
const startReactionTest = () => {
    stopTimer();
    hScore = JSON.parse(localStorage.getItem("reactionHighscore"));
    spaceBarEnabled = true;
    
    reactionHighscoreCont.classList.add("invisible");
    reactionColor.style.backgroundColor = "green";
    startReactionTimer();
}


// Running Speed of the timer (ms)
const startReactionTimer = () => { 
    reactionTimer = setInterval(runTimer, 10);
}


// Starts the Timer
const runTimer = () => {
    reactionTime.innerText = `${s} : ${ms}s`;
    ms++;
    
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s >= 5) {
        finishRound();
    }
}


// Stops the Timer
const stopTimer = () => clearInterval(reactionTimer);


// Finished Round - Checks if Highscore - if not, Restarts game
const finishRound = () => {
    let playerScore = [s, ms];
    let randomTime = Math.floor(Math.random() * 6) * 1000 + 2000;
    
    stopTimer();
    gameRunning = false;
    
    // checks if player beat the default highscore - reveals highscore screen
    if (hScore.score[0] >= playerScore[0] && hScore.score[1] > playerScore[1]) {
        reactionHighscoreCont.classList.toggle("invisible");
        revealHighscoreScreen(playerScore);
    } else {
        // if not -> reset and start next round
        setTimeout(resetForNextRound, 4000);
        setTimeout(() => {
            if (gameRunning) {
                setTimeout(startReactionTest, randomTime);
            }
        }, 7000);   
    }
}


// Reveals Highscore Screen
const revealHighscoreScreen = (score) => {
    reactionPlayersScore.innerText = `${score[0]}.${score[1]}s`;
    reactionPlayersInput.focus();
}


// Resets Timer and Reaction Content; game is running
const resetForNextRound = () => {
    ms = 0;
    s = 0;
    gameRunning = true;
    reactionTime.innerText = `${s} : ${ms}s`;
    reactionColor.style.backgroundColor = "darkred";
}


// Changes/Updates Highscore in Local Storage And Start Screen; Toggles invisibility classes
const safePlayersScore = (e) => {
    e.preventDefault;
    
    localStorage.setItem("reactionHighscore", JSON.stringify(
        { 
            name: reactionPlayersInput.value ? reactionPlayersInput.value : "Player",
            score: [s, ms] 
        }
    ));
    
    hScore = JSON.parse(localStorage.getItem("reactionHighscore"));
    updateHscoreStartScreen();
    
    reactionHighscoreCont.classList.toggle("invisible");
    toggleInvisibleClass();
}


// Exits Game - Return to Start Screen
const exitGame = () => {
    reactionHighscoreCont.classList.add("invisible");
    toggleInvisibleClass();
    stopTimer();
}
