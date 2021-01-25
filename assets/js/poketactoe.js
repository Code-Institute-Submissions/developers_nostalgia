// ------------------------------------------------------------------ VARIABLES

const startButtonGame = document.querySelector(".start-ttc-game");
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-slider');
const allSquares = document.querySelectorAll(".ttc-square");
const allSquaresArray = [...allSquares];

let menuScreen = document.querySelector(".menu-screen");
let winningTxt = document.querySelector(".winning-txt");
let randomPlayerCheckbox = document.querySelector("#random-pl-checkbox");

let menuOpen = false;
let turnPlayerOne = true;
let randomPlayerOn = true;


// ------------------------------------------------------------------ TOGGLE FUNCTIONS

// Toggles Mobile Menu & Checkbox
const toggleMobileMenu = () => {
    menuOpen ? menuOpen = false : menuOpen = true;
    menuOpen ? mobileMenuBtn.innerHTML = `<i class="fas fa-times"></i>` : mobileMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    menuOpen ? mobileMenu.classList.add("menu-open") : mobileMenu.classList.remove("menu-open");
}


// ------------------------------------------------------------------ EVENT LISTENERS

startButtonGame.addEventListener("click", startTtcGame);
allSquaresArray.forEach(s => s.addEventListener('click', setMark));


// ------------------------------------------------------------------ RE-/START POKETACTOE GAME

// Restarts - Ampel Game
function reloadSite() {
    location.reload();
}


// Starts PokeTakToe Game, determits randomPlayer, sets up field
function startTtcGame() {
    turnPlayerOne = true;
    // checks if checkbox for random pl - checked
    randomPlayerOn = randomPlayerCheckbox.checked ? true : false;
    allSquaresArray.map(sa => {
        sa.innerHTML = "";
        sa.classList.remove("p1", "p2", "disabled");
    });
    menuScreen.classList.remove("visible");
}


// Sets a Circle or a Cross and checks if some of the players won
function setMark(e) {
    
    // RANDOM Computer Move - Sets a random cross on an empty field
    function randomPlayerMove() {
        // takes all empty squares and selects a random one
        let allEmptySquares = [...allSquares].filter(s => s.innerHTML === "");
        let targetedEmptySquare = allEmptySquares[Math.floor(Math.random() * allEmptySquares.length)];
        // checkIfAllSquaresActive(allSquaresArray);
        
        if (checkForWin("p1")) {
                winner = "p1";
                winningTxt.innerText = "Player1 Wins!"
                gameOver();
        } else if (allEmptySquares.length > 0) {
            // inserts cross
            targetedEmptySquare.insertAdjacentHTML("beforeend", `
                <div class="cross">
                    <span></span>
                    <span class="second"></span>
                </div>
            `);

            targetedEmptySquare.classList.add("disabled", "p2");
            // checks if any player won this turn

            checkIfAllSquaresActive(allSquaresArray);
            if (checkForWin("p2")) {
                winner = "p2";
                winningTxt.innerText = "Player2 Wins!"
                gameOver();
            } else if (checkForWin("p1")) {
                winningTxt.innerText = "Player1 Wins!"
                gameOver();
            }
        } else {
            if (checkForWin("p1")) {
                winner = "p1";
                winningTxt.innerText = "Player1 Wins!"
                gameOver();
            } else{
                checkIfAllSquaresActive(allSquaresArray);
            }
        }
        turnPlayerOne = true;
    }

    
    // ------------------- P1
    // if players turn -> sets circle & checks if player won
    if (e.target.innerHTML === "" && turnPlayerOne) {
        e.target.insertAdjacentHTML("beforeend", `
            <div class="circle"></div>
        `);
        // changes to player2 turn
        turnPlayerOne = false;
        // finishes game if player wins
        e.target.classList.add("disabled", "p1");
        if (checkForWin("p1")) {
            winner = "p1";
            winningTxt.innerText = "Player1 Wins!"
            gameOver();
        // if random player is on -> sets random cross
        } else if (randomPlayerOn) {
            setTimeout(randomPlayerMove, 500);
        }
    // ------------------- P2  
    // if player2 turn -> sets cross & checks if player2 won
    } else if (e.target.innerHTML === '' && !turnPlayerOne) {
        e.target.insertAdjacentHTML("beforeend", `
            <div class="cross">
                <span></span>
                <span class="second"></span>
            </div>
        `);
        // changes to players turn
        turnPlayerOne = true;
        // finishes game if player2 wins
        e.target.classList.add("disabled", "p2");
        if (checkForWin("p2")) {
            winner = "p2";
            winningTxt.innerText = "Player2 Wins!"
            gameOver();
        }
    }
    // if none of the players won -> checks for draw
    if (!(checkForWin("p1") || checkForWin("p2"))) {
        checkIfAllSquaresActive(allSquaresArray);
    }
}


// ------------------------------------------------------------------ DECLARE WINNER & FINISH GAME

// Checks if all aquares are filled and finishes the game
function checkIfAllSquaresActive(arr) {
    let filteredSquareArray = arr.filter(s => s.innerHTML === "");

    if (filteredSquareArray.length === 0) {
        winningTxt.innerText = "Draw";
        gameOver();
    }
}


// Finishes the game
function gameOver() {
    allSquaresArray.map(sa => sa.classList.add('disabled'));
    setTimeout(() => menuScreen.classList.add("visible"), 2000);
}


// ------------------------------------------------------------------ CHECK FIELD FOR WINNING ROW

// Creates a 3d-array of squares
function createNestedArrays(arr) {
    let allSortedArrays = [];
    let firstArray = arr.filter(s => parseInt(s.dataset.square) < 4);
    let secondArray = arr.filter(s => parseInt(s.dataset.square) > 3 && parseInt(s.dataset.square) < 7);
    let thirdArray = arr.filter(s => parseInt(s.dataset.square) > 6 && parseInt(s.dataset.square) < 10);

    allSortedArrays.push(firstArray, secondArray, thirdArray);
    return allSortedArrays;
}


// Checks if some of the players win
function checkForWin(player) {
    let normalArray = [...document.querySelectorAll(".ttc-square")];
    let nestedArrays = createNestedArrays([...document.querySelectorAll(".ttc-square")]);
    // returns boolean
    return (checkForHorizontalWin(nestedArrays, player) ||
            checkForVerticalWin(nestedArrays, player) || 
            checkForDiagonalWin(normalArray, player));
}
    

// Takes p1/p2 as input and checks for Horizontal win
function checkForHorizontalWin(nSquares, playerMark) {
    let verticalTrue = false;
    nSquares.forEach(na => {
        if (na.every(ne => ne.classList.contains(playerMark))) {
            verticalTrue = true;
        }
    });
    return verticalTrue;
}


// Takes p1/p2 as input and checks for Vertical win
function checkForVerticalWin(nSquares, playerMark) {
    for (let i = 0; i < nSquares.length; i++) {
        if (nSquares.every(e => e[i].classList.contains(playerMark))) {
            return true;
            // try to give green classes!
        }
    }
    return false;
}


// Takes p1/p2 as input and checks for Diagonal win
function checkForDiagonalWin(arr, playerMark) {
    if (arr[0].classList.contains(playerMark) &&
        arr[4].classList.contains(playerMark) &&
        arr[8].classList.contains(playerMark)) {
        return true;
    } else if (arr[2].classList.contains(playerMark) &&
        arr[4].classList.contains(playerMark) &&
        arr[6].classList.contains(playerMark)) {
        return true;
    } else {
        return false;
    }
}
