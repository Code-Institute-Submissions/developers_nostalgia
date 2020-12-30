// ------------------------------------------------------------------ VARIABLES

// DOM
const timeUpCont = document.querySelector('.time-up-cont');
const startScreen = document.querySelector('.pokemory-start-screen');
const gameBoard = document.querySelector('.pokemory-cards-cont');
const socialFooter = document.querySelector('.ttc-socials-cont');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-slider');
const startGameBtn = document.querySelector('.start-game-btn');

let cPairsParagraph = document.querySelector('.correct-pairs');
let timerToggleCheck = document.querySelector('#timer-toggle');
let countParagraph = document.querySelector('.countdown');
let scoreParagraph = document.querySelector('.score');

countParagraph.innerText = 'T';
scoreParagraph.innerText = 0;

let timer;
let score;
let allCards;
let highscore;
let countdown;
let correctPairs;
let allCardsShuffled;

let maxCountdown = 90;
let selectedCards = [];
let cardsFlipped = false;
let menuOpen = false;
let wait = false;


// Card Objects - id, name, background img
let totalCards = [
    {
        name: 'Gardevoir',
        id: 1,
        background: 'mega_gardevoir.png'
    },
    {
        name: 'Absol',
        id: 2,
        background: 'mega_absol.png'
    },
    {
        name: 'Alakazam',
        id: 3,
        background: 'mega_alakazam.png'
    },
    {
        name: 'Ampharos',
        id: 4,
        background: 'mega_ampharos.png'
    },
    {
        name: 'Beedrill',
        id: 5,
        background: 'mega_beedrill.png'
    },
    {
        name: 'Blaziken',
        id: 6,
        background: 'mega_blaziken.png'
    },
    {
        name: 'Charizard',
        id: 7,
        background: 'mega_charizard.png'
    },
    {
        name: 'Greninja',
        id: 8,
        background: 'mega_greninja.png'
    },
    {
        name: 'Houndoom',
        id: 9,
        background: 'mega_houndoom.png'
    },
    {
        name: 'Rayquaza',
        id: 10,
        background: 'mega_rayquaza.png'
    },
    {
        name: 'Heracross',
        id: 11,
        background: 'mega_heracross.png'
    },
    {
        name: 'Lucario',
        id: 12,
        background: 'mega_lucario.png'
    },
    {
        name: 'Metagross',
        id: 13,
        background: 'mega_metagross.png'
    },
    {
        name: 'Mewtwo',
        id: 14,
        background: 'mega_mewtwoy.png'
    },
    {
        name: 'Scizor',
        id: 15,
        background: 'mega_scizor.png'
    },
    {
        name: 'Mawile',
        id: 16,
        background: 'mega_mawile.png'
    }
];


// ------------------------------------------------------------------ TOGGLE FUNCTIONS

// Toggles Mobile Menu & Checkbox
function toggleMobileMenu() {
    menuOpen ? menuOpen = false : menuOpen = true;
    menuOpen ? mobileMenuBtn.innerHTML = `<i class="fas fa-times"></i>` : mobileMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    menuOpen ? mobileMenu.classList.add("menu-open") : mobileMenu.classList.remove("menu-open");
}


// Toggles Start Screen & Footer
function toggleStartScreenFooter() {
    gameBoard.classList.toggle('disp-none');
    startScreen.classList.toggle('disp-none');
    socialFooter.classList.toggle('disp-none');
}


// ------------------------------------------------------------------ START POKEMORY GAME

// Restarts - Ampel Game
function reloadSite() {
    location.reload();
}


// Starts Pokemory Game
function startGame() {
    toggleStartScreenFooter();
    takePlayersInput();
    setUpBoard();
}


// Checks Players input (timer on/off, 16 or 32 cards)
function takePlayersInput() {
    let allInputs = document.querySelectorAll('input');
    //            timerOn = allInputs[0].checked;

    allInputs.forEach((inp, i) => {
        if (i > 0 && inp.checked) {
            amountCards = parseInt(inp.value);
        }
    });
    
    if (timerToggleCheck.checked) {
        countdown = allInputs[1].checked ? maxCountdown : (maxCountdown * 2);
        countParagraph.innerText = countdown;
        timer = setInterval(countDown, 1000);
    }
}


// Timer/Countdown Function
function countDown() {
    countdown--;
    countParagraph.innerText = countdown;

    if (countdown === 0) {
        playerLoses();
    }
}


// Sets up/Prepares Board (displays & shuffles 16/32 cards, resets vars etc.)
function setUpBoard() {
    let totalCardsDuplicated;
    
    selectedCards = [];
    cardsFlipped = false;
    gameBoard.innerHTML = '';
    cPairsParagraph.innerText = 0;
    scoreParagraph.innerText = 0;
    correctPairs = 0;
    score = 0;

    if (amountCards < 32) {
        // slice cards array in half, then concat
        let halfOfCards = totalCards.slice(0, totalCards.length / 2);
        totalCardsDuplicated = halfOfCards.concat(halfOfCards.slice(0));
    } else {
        // duplicating totalCards
        totalCardsDuplicated = totalCards.concat(totalCards.slice(0));
    }
    // Shuffles all card objects & Creates 'html-cards' filled with data
    shuffle(totalCardsDuplicated);
    totalCardsDuplicated.forEach((c, i) => {
        gameBoard.insertAdjacentHTML("beforeend", `
            <div class="pokemory-card">
                <div id="${totalCardsDuplicated[i].id}" onclick="flipCard(event)" class="card-back-onclick"></div>
                <div class="pokemory-inner-card">
                    <div class="card-front">
                        <div class="card-ball">
                            <div class="card-inner-ball"></div>
                        </div>
                    </div>
                    <div class="card-back">
                        <div class="card-back-circle"></div>
                        <img src="${totalCardsDuplicated[i].background}" alt="${totalCardsDuplicated[i].name}">
                        <div class="card-pkmn-name">${totalCardsDuplicated[i].name}</div>
                    </div>
                </div>
            </div>
        `);
    });
}


// Shuffles elements in an array
const shuffle = arr => arr.sort(() => Math.random() - .5);


// ------------------------------------------------------------------ FLIP CARD - CLICK FUNCTION

// Flips selected Card
function flipCard(e) {
    if (!wait && !(e.target.nextElementSibling.classList.contains('flipped'))) {
        e.target.nextElementSibling.classList.add('flipped');
        // pushes id to array to compare
        selectedCards.push(e.target.id);
        // increases score
        score++;
        scoreParagraph.innerText = score;

        if (cardsFlipped) {
            wait = true;
            checkForMatch();
        } else {
            cardsFlipped = true;
        }
    }
}


// Checks if selected Cards are a match - if not -> flips them back
function checkForMatch() {
    if (selectedCards[0] === selectedCards[1]) {
        correctPair();
    } else {
        setTimeout(flipCardsBack, 1000);
    }
}


// If correct pair -> Resets vars & Checks if all cards are flipped (playerWon())
function correctPair() {
    // resets vars
    selectedCards = [];
    cardsFlipped = false;
    wait = false;
    // increases correct Pairs
    correctPairs++
    cPairsParagraph.innerText = correctPairs;

    // checks if all cards are flipped and if player won
    if ([...document.querySelectorAll('.pokemory-inner-card')].every(c => c.classList.contains('flipped'))) {
        playerWon();
    }
}


// Flippes both cards back if wrong
function flipCardsBack() {
    [...document.querySelectorAll('.pokemory-inner-card')].forEach((c) => {
        if (c.previousElementSibling.id === selectedCards[0] || c.previousElementSibling.id === selectedCards[1]) {
            c.classList.remove('flipped');
        }
    });
    // resets vars
    cardsFlipped = false;
    selectedCards = [];
    wait = false;
}


// ------------------------------------------------------------------ GAME ENDING FUNCTIONS

// Player Wins - makes winning screen appear & calls gameOver()
function playerWon() {
    if (timerToggleCheck.checked) {
        clearInterval(timer);
    }
    gameOver();
}


// Player Loses Game - Time's up message & calls gameOver()
function playerLoses() {
    if (timerToggleCheck) {
        clearInterval(timer);
    }
    startGameBtn.innerText = 'Restart Game';
    setTimeout(timeIsUp, 500);
    setTimeout(gameOver, 1000);
}


// Finishes the game if time is up
const timeIsUp = () => {
    timeUpCont.classList.add("time-up-animation")
    setTimeout(() => timeUpCont.classList.remove("time-up-animation"), 1500);
} 

// Finnishes the game (flips all cards face up, message, flips cards face down)
function gameOver() {
    setTimeout(flipAllCardsFaceUp, 1000);
    setTimeout(toggleStartScreenFooter, 5000);
}


// Flips all cards on the board face up
function flipAllCardsFaceUp() {
    document.querySelectorAll('.pokemory-inner-card').forEach(c => {
        if (!c.classList.contains('flipped')) {
            c.classList.add('flipped');
        }
    });
}


// Flips all cards on the board face down
function flipAllCardsFaceDown() {
    document.querySelectorAll('.pokemory-inner-card').forEach(c => c.classList.remove('flipped'));
}


// ------------------------------------------------------------------ EVENT LISTENERS

// For Start Pokemory Game BUTTON
startGameBtn.addEventListener('click', startGame);
