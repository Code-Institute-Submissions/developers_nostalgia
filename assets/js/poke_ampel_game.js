// --------------------------------------------------------------- DOM VARIABLES

const playersRed = document.querySelector('#p-red');
const playersBlue = document.querySelector('#p-blue');
const allLights = document.querySelectorAll('.ampel');
const playersGreen = document.querySelector('#p-green');
const pokeBall = document.querySelector('.poke-circle');
const ampelScore = document.querySelector("#ampel-score");
const playersField = document.querySelector('.players-field');
const gameStartBtn = document.querySelector('#start-game-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-slider');
const allPlayersBtns = document.querySelectorAll('.players-btn');
const playersChoicesCont = document.querySelector('.players-choices-cont');
const playersChoiceCheckBox = document.querySelector('#players-choice-checkbox');


// --------------------------------------------------------------- GAME VARIABLES

let menuOpen = false;
let playersChoices;
let choiceCounter;
let combination;
let display;
let counter;
let round = 0;


// --------------------------------------------------------------- TOGGLE FUNCTIONS

// CHECKBOX - Toggles Animation (Circle)
//        function toggleAnimationBall() {
//            animatiionCheckBox.checked ? pokeBall.classList.add("animate") : pokeBall.classList.remove("animate");
//        }


// CHECKBOX - Toggles Players Choices Container
function togglePlayersChoices() {
    playersChoiceCheckBox.checked ? playersChoicesCont.style.opacity = 0 : playersChoicesCont.style.opacity = 1;
}


// Toggles Mobile Menu & Checkbox
function toggleMobileMenu() {
    menuOpen ? menuOpen = false : menuOpen = true;
    menuOpen ? mobileMenuBtn.innerHTML = `<i class="fas fa-times"></i>` : mobileMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    menuOpen ? mobileMenu.classList.add("menu-open") : mobileMenu.classList.remove("menu-open");
    // toggles checkbox
    menuOpen ? document.querySelector("#players-choice-checkbox").classList.add("mobile") : document.querySelector("#players-choice-checkbox").classList.remove("mobile");
}


// --------------------------------------------------------------- RESTART, START, PREPARE GAME

// Restarts - Ampel Game
function reloadSite() {
    location.reload();
}

// Start Ampel Game Function
function startGame() {
    if (round < 1) {
        ampelScore.innerHTML = 0;
    }
    
    fillPlayersChoices();
    choiceCounter = -1;
    playersChoices = [];
    round++;
    combination = createOrder();
    counter = 0;
    gameStartBtn.classList.add('active');
    removeAllLights();
    display = setInterval(displayCombination, 1500);
    playersField.classList.add('active', 'disabled-btns');
}


// Displays amount of colors
function fillPlayersChoices() {
    playersChoicesCont.innerHTML = "";
    
    for (let i = 0; i <= round; i++) {
        playersChoicesCont.innerHTML += `<div class="players-choice"></div>`;
    }
}

// Removes all bg-color classes
function removeAllLights() {
    [...allLights].forEach(a => a.classList.remove('red', 'blue', 'green'));
}


// Creates an array with the color-order (based on rounds)
const createOrder = () => {
    const allColors = ['red', 'blue', 'green'];
    const result = [];

    for (let i = 1; i <= round; i++) {
        let randomSelection = allColors[Math.floor(Math.random() * 3)];

        result.push(randomSelection);
    }
    return result
}   


// --------------------------------------------------------------- DISPLAY COMBINATION

// Displays Color Combination
function displayCombination() {
    displayColor(combination[counter]);
    counter++;

    if (counter >= combination.length) {
        clearInterval(display);
        setTimeout(() => playersField.classList.remove('disabled-btns'), 1200);
//                setTimeout(removeAllLights, 1500);
    }
}   


// Changes bg-color of one light 
function displayColor(color) {
    removeAllLights();

    let combiIndex = [...allLights].indexOf([...allLights].filter(c => c.id === `${color}`)[0]);
    let combi = allLights.item(combiIndex);
    
    combi.classList.add(`${color}`);
    setTimeout(removeAllLights, 1000);
}


// --------------------------------------------------------------- CHECK PLAYERS SELECTION

// BUTTONS - Pushes all players choices to global array - playersChoices
function playersBtn(e) {
    const allChoices = document.querySelectorAll(".players-choice");
    
    choiceCounter++;
    switch (e.target.id) {
        case 'p-red':
            playersChoices.push('red');
            allChoices[choiceCounter].classList.add("red");
            break;
        case 'p-blue':
            playersChoices.push('blue');
            allChoices[choiceCounter].classList.add("blue");
            break;
        case 'p-green':
            playersChoices.push('green');
            allChoices[choiceCounter].classList.add("green");
    }
    checkProgress();
}


// Checks if players selection is correct
function checkProgress () {
    let currentSelectionSlice = combination.slice(0, playersChoices.length);    
    
    if (playersChoices.toString() !== currentSelectionSlice.toString()) {
        playersField.classList.remove('active');
        gameStartBtn.classList.remove('active');
        playerLoses();
    } else if (playersChoices.toString() === combination.toString()) {
        playersField.classList.remove('active');
        gameStartBtn.classList.remove('active');
        playerWins();
    }
}


// --------------------------------------------------------------- GAME FINISHES

// Player is Correct (increase score)
function playerWins() {
    gameStartBtn.innerText = 'Correct!'
    gameStartBtn.classList.remove('wrong');
    gameStartBtn.classList.add('correct');
    ampelScore.innerHTML++;

    setTimeout(startGame, (1000 * round) + 1000);
}


// Player is Wrong
function playerLoses() {
    round = 0;
    gameStartBtn.innerText = 'Try Again!';
    gameStartBtn.classList.remove('correct');
    gameStartBtn.classList.add('wrong');
}


// --------------------------------------------------------------- Event Listeners

gameStartBtn.addEventListener('click', startGame);
allPlayersBtns.forEach(b => b.addEventListener('click', playersBtn));
