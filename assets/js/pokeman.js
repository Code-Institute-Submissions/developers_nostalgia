// ------------------------------------------------------------------- VARIABLES

const hintBox = document.querySelector(".hint-box");
const elements = document.querySelectorAll(".first-el");
const lettersCont = document.querySelector(".letters-cont");
const pokemanCont = document.querySelector(".poke-man-cont");
const currentLevel = document.querySelector("#current-level");
const rocketBalls = document.querySelectorAll(".rocket-ball");
const pokemanElements = document.querySelectorAll(".pkmn-img");
const changeModeBtn = document.querySelector(".mode-icon-btn");
const hardModeIcon = document.querySelector(".hard-mode-icon");
const normalModeIcon = document.querySelector(".norm-mode-icon");
const remainingWords = document.querySelector("#remaining-words");
const startingScreen = document.querySelector(".starting-screen");
const startGameBtns = document.querySelectorAll(".start-pokeman-btn");

let level;
let wordIndex;
let currentWord;
let shuffledWords;
let wrongLettersIndex;
let selectedLetters = [];
let displayedWord = document.querySelector(".displayed-word");

// All Pokeman Words (Normal)
const allWords = [
    ["boy", "hello", "name"],
    ["girl", "four", "game"],
    ["page", "spin", "banana"],
    ["cheese", "police", "skateboard"],
    ["star", "eyes", "spoon"]
];

// All Pokeman Words (Hardcore)
const allWordsHard = [
    ["banjo", "blizzard", "bikini"],
    ["syndrome", "american", "keyhole"],
    ["queue", "comet", "unknown"],
    ["programmer", "witchcraft", "bandwagon"],
    ["jazz", "rythm", "abyss"]
];


// ------------------------------------------------------------------- STARTING/PREPARING GAME FUNCTIONS

// Restarts - Ampel Game
const reloadSite = () => location.reload();


// Main Function
const pokeManGame = (wordsArr) => {
    prepareGame(wordsArr);
    displayWord();
}


// Prepares game - resets variables, remove start screen, shuffles all words
const prepareGame = wordsArr => {
    resetGameField();
    createAlphabetBtns();
    toggleVisibilityGameField();
    rocketBalls.forEach(pe => pe.classList.remove("appear"));
    shuffledWords = shuffleArray(wordsArr).map(a => shuffleArray(a));
}

// Toggles Game Field (Hint Box, etc.)
const toggleVisibilityGameField = () => {
    hintBox.classList.toggle("disp-none");
    pokemanCont.classList.toggle("disp-none");
    startingScreen.classList.toggle("disp-none");
    startGameBtns.forEach(btn => btn.style.animationDelay = "1.3s");
}


// Shuffles an array
const shuffleArray = arr => arr.sort(a => Math.random() - .5);


// Resets field, sets vars back
const resetGameField = () => {
    level = 0;
    wordScore = -1;
    wordIndex = -1;
    wrongLettersIndex = 0;

    updateGameData();
    removePulseClasses();
    hintBox.innerHTML = "Hint";
    lettersCont.innerHTML = "";
    displayedWord.innerHTML = "";
    pokemanElements.forEach(pe => pe.classList.remove("invisible"));
}

// Updates Level & Score
const updateGameData = () => {
    currentLevel.innerText = `Level: ${level + 1}/5`;
    remainingWords.innerText = `Score: ${wordScore + 1}/15`;
}


// Creates Letter Btns A-Z
const createAlphabetBtns = () => {
    let alphabet = createAlphabetArray();

    alphabet.forEach((a, i) => {
        lettersCont.insertAdjacentHTML("beforeend", `
            <div class="letter flex-center">${alphabet[i]}</div>
        `);
    });
    document.querySelectorAll(".letter").forEach(l => l.addEventListener("click", selectLetter));
}


// Creates an array with all letters [A-Z]
const createAlphabetArray = () => [...Array(26)].map((x, i) => String.fromCharCode(i + 65));


// Displays current word to displayWord, increases vars (score, index, level)
const displayWord = () => {
    wordScore++;
    wordIndex++;
    // level increases if all 3 words are correct
    if (wordIndex > 2) {
        wordIndex = 0;
        level++;
    }
    // takes current word as argument
    splitWordToSpans(shuffledWords[level][wordIndex]);
}

// Splits a word, loops through it and inserts every letter in a span-element (displayWord)
const splitWordToSpans = word => word.split("").forEach(sw => displayedWord.insertAdjacentHTML("beforeend", `
    <div class="letter-box flex-center">
        <div class="letter-span hidden">${sw}</div>
    </div>
`));


// ------------------------------------------------------------------- CLICK FUNCTION (LETTER BTNS)

// Selects a letter and checks if it matches
const selectLetter = e => {
    let letters = [...document.querySelectorAll(".letter-span")];

    e.target.classList.add("disabled");
    selectedLetters.push(e.target.innerText);

    if (!letters.some(l => l.innerText.toLowerCase() === e.target.innerText.toLowerCase())) {
        drawPokeman();
        wrongLettersIndex++;
        checkIfPlayerLost();
    }
    letters.forEach(l => {
        if (l.innerText.toLowerCase() === e.target.innerText.toLowerCase()) {
            l.classList.remove("hidden");
            e.target.classList.add("right-letter");
            // checks if all letters are revealed -> correct word func.
            if (letters.every(l => !l.classList.contains("hidden"))) {
                correctWord();
            }
        }
    });
}


// ------------------------------------------------------------------- FINISH GAME/TURN FUNCTIONS

// Player wins
const correctWord = () => {
    document.querySelectorAll(".letter").forEach(letter => letter.classList.add("disabled"));
    setTimeout(correctAnimation, 300);
    
    let maxWordsScore = 15;
    // checks if player guessed all words (finishes game)
    if ((level >= allWords.length - 1) && wordScore >= 14) {
        setTimeout(pulseLetters, 500);
        setTimeout(toggleVisibilityGameField, 3500);
    } else {
        setTimeout(nextWord, 1500);
    }  
}


// Scales/Pulses Letters (hidden word)
const pulseLetters = () => {
    const letters = document.querySelectorAll(".letter-span");
    let counter = 0;
    
    for (let i = 0; i <= letters.length - 1; i++) {
        setTimeout(() => letters[i].classList.add("pulse"), counter);
        counter += 50;
    }
}


const removePulseClasses = () => {
    const letters = document.querySelectorAll(".letter-span");
    letters.forEach(letter => letter.classList.remove("pulse"));
}


// Turns letter bars green
const correctAnimation = () => document.querySelectorAll(".letter-box").forEach(lb => lb.classList.add("green-bars"));

// Turns letter bars red
const wrongAnimation = () => document.querySelectorAll(".letter-box").forEach(lb => lb.classList.add("red-bars"));


// Checks if all elements are invisible, if yes - returns player to Menu screen
const checkIfPlayerLost = () => {
    if (wrongLettersIndex === pokemanElements.length) {
        document.querySelectorAll(".letter").forEach(letter => letter.classList.add("disabled"));
        wrongLettersIndex = 0;
        setTimeout(wrongAnimation, 600);
        setTimeout(toggleVisibilityGameField, 2200);
    }   
}


// Displays next word (clears field first and creates new content)
const nextWord = () => {
    updateGameData();
    
    wrongLettersIndex = 0;
    hintBox.innerHTML = "Hint";
    lettersCont.innerHTML = "";
    displayedWord.innerHTML = "";
    rocketBalls.forEach(pe => pe.classList.remove("appear"));
    pokemanElements.forEach(pe => pe.classList.remove("invisible"));
    
    createAlphabetBtns();
    displayWord();
}


// Usually a line is getting drawn - here a pkmn image disappears/getting stolen by Team Rocket (wrong letter)
const drawPokeman = () => {
    rocketBalls[wrongLettersIndex].classList.add("appear");
    pokemanElements[wrongLettersIndex].classList.add("invisible");
}


// Creates hint in hintBox (takes letter as argument)
const createHint = () => {
    hintBox.classList.add("active");
    hintBox.innerText = shuffledWords[level][wordIndex];
}


// Changes Difficulty Mode
const changeMode = () => {
    // removes animation delay - for quicker change of buttons
    startGameBtns.forEach(btn => btn.style.animationDelay = "0s");
    
    hardModeIcon.classList.toggle("disp-none");
    normalModeIcon.classList.toggle("disp-none");
    startGameBtns[0].classList.toggle("disp-none");
    startGameBtns[1].classList.toggle("disp-none");
}


// ------------------------------------------------------------------- EVENT LISTENERS

hintBox.addEventListener("dblclick", createHint);
changeModeBtn.addEventListener("click", changeMode);
