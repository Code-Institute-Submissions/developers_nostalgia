// ------------------------------------------------------------------------------------- VARIABLES

// DOM - Variables
const apiQuizContainer = document.querySelector(".api-quiz-cont");
const apiStartScreen = document.querySelector(".start-screen-apiquiz");
const apiQuizScoreScreen = document.querySelector(".api-quiz-score-screen");
const playerLifesContainer = document.querySelector(".player-lifes-cont");
const playerJokersContainer = document.querySelector(".api-joker-cont");
const allplayersLifes = document.querySelectorAll(".players-life");        
const allplayersJokers = document.querySelectorAll(".api-joker");  
const currentScore = document.querySelector(".api-curr-score");

let endScore = 0;
let subtScore = 0;
let jokersUsed = 0;
let wrongAnswers = 0;
let correctAnswers = 0;
let currentQuestion = 0;
let apiQuizProgressB = 0;

let allApiQuestions = [];
let sortedQuestions = []; 
let allDifficulties = [];

let diffQuestionsEasy;
let diffQuestionsMedium;
let diffQuestionsHard;


// ---------------------------------------------------------------------------------------------------- FETCHING API

// Fetches 50 questions from api -> Fills empty array above with formatted questions; Starts Quiz
const fetchApiQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=50&category=9&type=multiple").then(res => res.json()).then(data => {
        allApiQuestions = data.results.map(apiQuestion => {
            const mappedQuestion = {
                question: apiQuestion.question,
                answers: [...apiQuestion.incorrect_answers, apiQuestion.correct_answer],
                correct: apiQuestion.correct_answer,
                difficulty: apiQuestion.difficulty
            }
            // shuffles answers - sort method not the best choice but it's good enough for this
            mappedQuestion.answers.sort(() => Math.random() - .5);

            return mappedQuestion;
        });
        startApiQuiz();
    });
}


// ----------------------------------------------------- Preparing Quiz (sort and display questions)

// Reloads Game/Site
const reloadSite = () => {
    location.reload();
}


// Starts Quiz
const startApiQuiz = () => {
    sortedQuestions = prepareQuestions(allApiQuestions);
    apiStartScreen.classList.add("invisible");
    
    toggleInvisibilityClasses();
    apiQuizContainer.classList.remove("invisible");
    displayApiQuestion();
}


// Toggels Invisibility Classes
const toggleInvisibilityClasses = () => {            
    apiQuizContainer.classList.toggle("invisible");
    apiQuizScoreScreen.classList.toggle("invisible");
    playerLifesContainer.classList.toggle("invisible");
    playerJokersContainer.classList.toggle("invisible");
    setTimeout(() => { // toggles slider classes del. 500ms
        playerLifesContainer.classList.toggle("quiz-slidera");
        playerJokersContainer.classList.toggle("quiz-sliderb");
    }, 500);
}


// Returns array width all questions sorted (easy,medium,hard)
const prepareQuestions = allQuestions => {
    
    let allDifficulties = [];
    let easyQuestions = [];
    let mediumQuestions = [];
    let hardQuestions = [];
    
    allQuestions.forEach(qstn => {
        if (qstn.difficulty == "easy") {
            qstn.score = 100;
            easyQuestions.push(qstn);
        } else if (qstn.difficulty == "medium") {
            qstn.score = 200;
            mediumQuestions.push(qstn);
        } else {
            qstn.score = 300;
            hardQuestions.push(qstn);
        }
    });
    
    // displayes how many questions in every difficulity
    diffQuestionsEasy = easyQuestions.length;
    diffQuestionsMedium = mediumQuestions.length;
    diffQuestionsHard = hardQuestions.length;
    
    // randomizes each question category and joins them to 1 (sorted) array 
    easyQuestions.sort(() => Math.random() - .5);
    mediumQuestions.sort(() => Math.random() - .5);
    hardQuestions.sort(() => Math.random() - .5);
    allDifficulties.push(easyQuestions, mediumQuestions, hardQuestions);

    return allDifficulties.flat();
}


// Displays a question
const displayApiQuestion = () => {
    apiQuizContainer.innerHTML = "";
    apiQuizContainer.insertAdjacentHTML("beforeend", `
        <div onclick="gameOver()" class="stop-quiz-btn"><i class="far fa-stop-circle"></i></div>
        <div onclick="reloadSite()" class="reload-quiz-btn"><i class="fas fa-sync-alt"></i></div>
        <div class="flex-center">
            <div class="api-quiz-diffs easy flex-center">${diffQuestionsEasy}</div>
            <div class="api-quiz-diffs medium flex-center">${diffQuestionsMedium}</div>
            <div class="api-quiz-diffs hard flex-center">${diffQuestionsHard}</div>
        </div>
        <div class="api-curr-score">${endScore < 0 ? 0 : endScore}</div>
        <div class="api-quiz-question-cont flex-center ${sortedQuestions[currentQuestion].difficulty}">
            <h2 class="api-question">${sortedQuestions[currentQuestion].question}</h2>
        </div>
        <div class="api-answers-cont flex-center flex-column">
            <div class="coin-flip-cont flex-center invisible">
                <button onclick="coinFlipForJoker(event)" class="coin-flip-btn head"></button>
                <button onclick="coinFlipForJoker(event)" class="coin-flip-btn tails"></button>
            </div>
            <button class="api-answer">${sortedQuestions[currentQuestion].answers[0]}</button>
            <button class="api-answer">${sortedQuestions[currentQuestion].answers[1]}</button>
            <button class="api-answer">${sortedQuestions[currentQuestion].answers[2]}</button>
            <button class="api-answer">${sortedQuestions[currentQuestion].answers[3]}</button>
        </div>
        <div class="api-quiz-progress-bar">
            <div class="api-current-qstn api-current-question-index flex-center">${currentQuestion + 1}</div>
            <div class="api-current-qstn api-maximal-question-index flex-center">${sortedQuestions.length}</div>
            <div class="api-quiz-progress"></div>
        </div>
    `);
    // gives all answer buttons a onclick event listener
    document.querySelectorAll(".api-answer").forEach(answ => answ.addEventListener("click", selectAnswer));
    
    const apiQuizProgress = document.querySelector(".api-quiz-progress");
    // increases progress bar
    apiQuizProgressB += 2;
    apiQuizProgress.style.width = `${apiQuizProgressB}%`;
}


// ----------------------------------------------------- Select Answer Buttons

// Fires when player selects an answer; Checks if players answer is correct
const selectAnswer = (e) => {
    const allAnswers = document.querySelectorAll(".api-answer");
    
    // assigns 'disabled' class to all answers
    allAnswers.forEach(answer => answer.classList.add("disabled-answer"));
    if (e.target.innerText.includes(sortedQuestions[currentQuestion].correct)) {
        e.target.classList.add("correct-answer");
        correctOrWrongAnswer(true);
    } else {
        e.target.classList.add("wrong-answer");
        // adds correct-answer class to correct answer
        allAnswers.forEach(ans => {
            if (ans.innerText.includes(sortedQuestions[currentQuestion].correct)) {
                ans.classList.add("correct-answer");
            }
        });
        if (playerLifesContainer.innerHTML.length > 0) {
            correctOrWrongAnswer(false);
        } else {
            gameOver();
        }                
    }
}


// ----------------------------------------------------- Correct/Wrong

// Increses current question; Adds/Subtracts Life/Score points
const correctOrWrongAnswer = bool => {
    currentQuestion++;
    // adds difficulty to array
    if (bool) {
        allDifficulties.push(sortedQuestions[currentQuestion].difficulty); 
    }
    if (!bool) subtScore++;
    // adds 1 life
    bool ? changePlayersLifes(true) : changePlayersLifes(false);
    // increase score
    bool ? endScore += sortedQuestions[currentQuestion].score : endScore -= 50;
        
    // next question
    setTimeout(displayApiQuestion, 1000);
}


// ----------------------------------------------------- Lifes

// Depending if argument is true/false -> Adds/Subtracts a Life
const changePlayersLifes = bool => {
    const playersLifes = document.querySelectorAll(".players-life");
    
    if (bool) {
        if (playersLifes.length < 5) {
            addOneLife();
        }
    } else {
        removeOneLife(playersLifes.length - 1);
    }
}


// Adds one life to Players Lifes Container
const addOneLife = () => playerLifesContainer.insertAdjacentHTML("beforeend", `<div class="players-life flex-center"></div>`);


// Removes one life from playerLifesContainer
const removeOneLife = lifes => {
    let allLifes = [...document.querySelectorAll(".players-life")];
    let life = allLifes[[lifes].length -1];
    
    life.remove();
    // if player has 0 lifes - game over
    if (lifes < 1) {
        gameOver();
    }
}


// ----------------------------------------------------- Game Over

// Finishes Quiz
const gameOver = () => {
    apiQuizContainer.classList.toggle("invisible");
    toggleInvisibilityClasses();
    
    fillScoreScreen();
    resetApiQuiz();
}


// ------------------------------------ Score Section

// Displays and Fills the Score Screen
const displayFillScoreScreen = () => {
    apiQuizContainer.innerHTML = `
        <h2 class="api-quiz-score-headline">Game Over</h2>
        <p>- Your Score -</p>
        <div class="api-quiz-score-data flex-center flex-column">
            <div class="score-questions">${currentQuestion +1} / ${sortedQuestions.length}</div>
            <div class="flex-center">
                <div class="score-diff easy flex-center"></div>
                <div class="score-diff medium flex-center"></div>
                <div class="score-diff hard flex-center"></div>
            </div>
                <div class="flex-center">
                    <div class="api-score-data">x100</div>
                    <div class="api-score-data">x200</div>
                    <div class="api-score-data">x300</div>
            </div>
            <div class="score-bonus">Joker Bonus <span class="joker-bonus">+${jokerBonus}</span></div>
            <div class="score-bonus">Lifes Bonus <span class="lifes-bonus">+${lifesBonus}</span></div>
            <div class="score-bonus">Wrong Answers  <span class="wrong-bonus">-${-(subtScore.toString())}</span></div>
            <div class="score-bonus">Jokers Used <span class="jokers-used">-${jokersUsed}</span></div>
            <div class="api-quiz-player-score">Total Score: <span class="api-total-score">${endScore}</span></div>
        </div>
        <button onclick="restartApiQuiz()" class="restart-api-quiz-btn">Restart Quiz</button>
    `
    // calcultates and
    //  fills the rest
    fillScoreScreen();
}


// Fills Score Screen with Players Data
const fillScoreScreen = () => {            
    const apiTotalScore = document.querySelector(".api-total-score");
    const jokerBonusData = document.querySelector(".joker-bonus");
    const lifesBonusData = document.querySelector(".lifes-bonus");
    const wrongBonusData = document.querySelector(".wrong-bonus");
    const jokersUsedData = document.querySelector(".jokers-used");
    
    // if the quiz is finished - add joker & lifes bonuses
    if (currentQuestion >= sortedQuestions.length - 1) {
        jokersLifesBonus();
    }
    
    // disp score data
    questionsScores();
    jokerBonusData.innerText = 0;
    lifesBonusData.innerText = 0;
    wrongBonusData.innerText = subtScore;
    jokersUsedData.innerText = `${- jokersUsed * 50}`;
    
    apiTotalScore.innerText = endScore;
    // displays how many questions the player had (correct & wrong) - e.g. 12/50
    document.querySelector(".score-questions").innerText = `${currentQuestion} / ${sortedQuestions.length}`;
}


// Calculates and displays Joker and Lifes Bonuses; Adds to Score
const jokersLifesBonus = () => {
    const jokerBonusData = document.querySelector(".joker-bonus");
    const lifesBonusData = document.querySelector(".lifes-bonus");
    
    // for every not used joker or life - X Points
    let jokerBonus = 5000 - (jokersUsed * 1000);
    let lifesBonus = 5000 - (lifesLost * 1000);

    // displays bonuses & jokers and lifes
    jokerBonusData.innerText = `${+ jokerBonus}`;
    lifesBonusData.innerText = `${+ lifesBonus}`;

    // bonuses to end score 
    endScore += jokerBonus;
    endScore += lifesBonus;
}


// Displays question scores
const questionsScores = () => {
    // all difficulties circles
    const allDiff = document.querySelectorAll(".score-diff");
    
    // takes a diff and returns filtered array with this difficulty
    const filterDiff = (diff) => allDifficulties.filter(d => d === diff);
    
    // Brings end score to 0 if negative
    const avoidNegativeScore = () => {
        if (endScore < 0) {
            endScore = 0;
        }
    }

    // displays amount of questions in diff. circles
    allDiff[0].innerText = filterDiff("easy").length;
    allDiff[1].innerText = filterDiff("medium").length;
    allDiff[2].innerText = filterDiff("hard").length;
    
    avoidNegativeScore();
}

// ------------------------------------

// Resets Quiz
const resetApiQuiz = () => {
    // resets all variables
    endScore = 0;
    subtScore = 0;
    jokersUsed = 0;
    wrongAnswers = 0;
    correctAnswers = 0;
    currentQuestion = 0;
    apiQuizProgressB = 0;
    allDifficulties = [];
    
    // restore both
    restoreLifes();
    restoreJokers();
}


// ---------------------------------------------------------------------------------------------------- JOKERS AND RESTORATION


// Fifty-Fifty Joker
const apiFiftyJoker = (e) => {
    e.target.classList.add("invisible");
    jokersUsed++;
    
    const allApiAnswers = document.querySelectorAll(".api-answer");
    const correctAnswerIndex = sortedQuestions[currentQuestion].answers.indexOf(sortedQuestions[currentQuestion].correct);
    const allWrongAnswers = [...allApiAnswers].filter(ans => [...allApiAnswers].indexOf(ans) != correctAnswerIndex).sort(() => Math.random() - .5);
    
    allWrongAnswers[0].classList.add("invisible");
    allWrongAnswers[1].classList.add("invisible");
}


// Google Joker (30s)
const apiGoogleJoker = (e) => {
    e.target.classList.add("invisible");
    jokersUsed++;
    
    // opens new window with google url for 30sec
    googleWindow = window.open("http://www.google.com");
    setTimeout(() => googleWindow.close(), 30000);
}


// Skip one Question Joker
const apiSkipItJoker = (e) => {
    e.target.classList.add("invisible");
    jokersUsed++;
    
//            currentQuestion++;
    correctOrWrongAnswer(true);
//            displayApiQuestion();
}

// ---------------------------------------------------- Coin Flip Functions

// Coin Flip Joker
const apiCoinFlipJoker = (e) => {
    const apiCoinFlipJokerContainer = document.querySelector(".coin-flip-cont");
    e.target.classList.add("invisible");
    jokersUsed++;
    
    apiCoinFlipJokerContainer.classList.remove("invisible");
}


// Flips Coin for Coin Flip Joker
const coinFlipForJoker = (e) => {
    const coinSides = ["head", "tails"];
    const randomSide = coinSides[Math.floor(Math.random() * 2)];
    const bothCoinSides = document.querySelectorAll(".coin-flip-btn");
    const apiCoinFlipJokerContainer = document.querySelector(".coin-flip-cont");
    // Flips Coin; Changes Backg Color (correct/wrong); Next Question
    const coinFlipNextQuestion = () => {
        flipCoinAnimation();
        
        if (e.target.classList.contains(randomSide)) {
            apiCoinFlipJokerContainer.style.backgroundColor = "darkgreen";
            setTimeout(() => goToNextQuestion(true), 1000);
        } else {
            apiCoinFlipJokerContainer.style.backgroundColor = "darkred";
            setTimeout(() => goToNextQuestion(false), 1000);
        }
    }
    
    // Animates the coin flip
    const flipCoinAnimation = () => {
        const coinToRemove = [...bothCoinSides].filter(coin => !coin.classList.contains(`${randomSide}`))[0];
        const coinToKeep = [...bothCoinSides].filter(coin => coin.classList.contains(`${randomSide}`))[0];
        
        coinToKeep.style.transform = "translateY(-15%)";
        // you win - text
        coinToRemove.classList.add("invisible");
    }
    
    // Next question; Boolean decides if answer correct of wrong
    const goToNextQuestion = (bool) => {
        apiCoinFlipJokerContainer.classList.remove("invisible");
        
        if (bool) {
            correctOrWrongAnswer(true);
        } else {
            correctOrWrongAnswer(false);
        }
        // Removes Coin Flip Container
        setTimeout(() => {
            apiCoinFlipJokerContainer.classList.add("invisible");
            apiCoinFlipJokerContainer.style.backgroundColor = "#fafafa";
            apiCoinFlipJokerContainer.innerHTML = `
                <button onclick="coinFlipForJoker(event)" class="coin-flip-btn head"></button>
                <button onclick="coinFlipForJoker(event)" class="coin-flip-btn tails"></button>
            `;
        }, 1000);
    }
    // Main Coin Flip Function
    coinFlipNextQuestion();
}


// ----------------------------------------------------

// Revives and restores Player; decreases score
const apiReviveJoker = (e) => { 
    endScore -= 1500;                                           
    // restores both
    restoreJokers();
    restoreLifes();
    // skips question
    apiSkipItJoker(e);
}


// Restores all Jokers
const restoreJokers = () => {
    playerJokersContainer.innerHTML = "";
    playerJokersContainer.insertAdjacentHTML("beforeend", `
                <button onclick="apiFiftyJoker(event)" class="api-joker api-fifty-joker-btn">50/50</button>
                <button onclick="apiGoogleJoker(event)" class="api-joker api-google-joker-btn">Google</button>
                <button onclick="apiSkipItJoker(event)" class="api-joker api-skip-joker-btn">Skip-It</button>
                <button onclick="apiCoinFlipJoker(event)" class="api-joker api-skip-joker-btn">CoinFlip</button>
                <button onclick="apiReviveJoker(event)" class="api-joker api-next-joker-btn">Restore</button>
    `);
}


// Restores all Lifes
const restoreLifes = () => {
    document.querySelector(".player-lifes-cont").innerHTML = `
        <div class="players-life flex-center"></div>
        <div class="players-life flex-center"></div>
        <div class="players-life flex-center"></div>
        <div class="players-life flex-center"></div>
        <div class="players-life flex-center"></div>
    `;
}


// Exits Game to Score Screen
const exitApiQuiz = () => {
    apiQuizScoreScreen.classList.add("visible");
    fillScoreScreen();
}


// Restarts and Resets Api Quiz
const restartApiQuiz = () => {
    resetApiQuiz();
    fetchApiQuestions();
}
