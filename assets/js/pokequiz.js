// ------------------------------------------------------------------ JOKERS (OBJECTS)

const allJokers = [
    {
        name: "fifty",
        active: true
    },
    {
        name: "google",
        active: true
    },
    {
        name: "skip",
        active: true
    },
    {
        name: "change",
        active: true
    },
    {
        name: "revive",
        active: true
    },
]

// ------------------------------------------------------------------ ALL QUESTIONS (OBJECTS)

const allQuestions = [
    {
        question: "How many pokemon is each trainer allowed to carry around?",
        answers: [
            {
                answer: "a. Six Pokemon",
                correct: true
            },
            {
                answer: "b. Eight Pokemon",
                correct: false
            },
            {
                answer: "c. Four Pokemon",
                correct: false
            },
            {
                answer: "d. Twelve Pokemon",
                correct: false
            }
        ]
    },
    {
        question: "What is the first Badge you can get in the Kanto region?",
        answers: [
            {
                answer: "a.  Rainbow Badge",
                correct: false
            },
            {
                answer: "b. Stone Badge",
                correct: false
            },
            {
                answer: "c. Boulder Badge",
                correct: true
            },
            {
                answer: "d. Earth Badge",
                correct: false
            }
        ]
    },
    {
        question: "What is the MS ANNE?",
        answers: [
            {
                answer: "a.  a Mountain",
                correct: false
            },
            {
                answer: "b. a Gym Leader",
                correct: false
            },
            {
                answer: "c. A Cruise Ship",
                correct: true
            },
            {
                answer: "d. A Cave",
                correct: false
            }
        ]
    },
    {
        question: "What Pokemon is the Fire Starter in generation 1?",
        answers: [
            {
                answer: "a.  Cyndaquil",
                correct: false
            },
            {
                answer: "b. Charmeleon",
                correct: false
            },
            {
                answer: "c. Chimchar",
                correct: false
            },
            {
                answer: "d. Charmander",
                correct: true
            }
        ]
    },
    {
        question: "What makes the Master Ball the best pokeball ever built?",
        answers: [
            {
                answer: "a.  100% catching rate",
                correct: true
            },
            {
                answer: "b. it's indistructeble",
                correct: false
            },
            {
                answer: "c. can catch 2 Pokemon",
                correct: false
            },
            {
                answer: "d. can steal Pokemon",
                correct: false
            }
        ]
    },
    {
        question: "What are the three Eevee evolutions in Gen1?",
        answers: [
            {
                answer: "a.  Umbreon, Espeon, Jolteon",
                correct: false
            },
            {
                answer: "b. Espeon, Flareon, Leafeon",
                correct: false
            },
            {
                answer: "c. Sylveon, Glaceon, Espeon",
                correct: false
            },
            {
                answer: "d. Vaporeon, Jolteon, Flareon",
                correct: true
            }
        ]
    },
    {
        question: "What's the job of Professor Oak?",
        answers: [
            {
                answer: "a.  Pokemon Researcher",
                correct: true
            },
            {
                answer: "b. Pokemon Doctor",
                correct: false
            },
            {
                answer: "c. Pokemon Programmer",
                correct: false
            },
            {
                answer: "d. Pokemon Engeneer",
                correct: false
            }
        ]
    },
    {
        question: "Who is the Pokemon almost everyone should know?",
        answers: [
            {
                answer: "a.  Pikachu",
                correct: true
            },
            {
                answer: "b. Dunsparce",
                correct: false
            },
            {
                answer: "c. Pineco",
                correct: false
            },
            {
                answer: "d. Gilgar",
                correct: false
            }
        ]
    },
    {
        question: "Which of these attacks is not a normal type?",
        answers: [
            {
                answer: "a.  Bodyslam",
                correct: false
            },
            {
                answer: "b. Psych Up",
                correct: true
            },
            {
                answer: "c. Bulldozer",
                correct: false
            },
            {
                answer: "d. Sweet Scent",
                correct: false
            }
        ]
    },
    {
        question: "What is special about Ditto?",
        answers: [
            {
                answer: "a.  can talk in human language",
                correct: false
            },
            {
                answer: "b. can heal other Pokemon",
                correct: false
            },
            {
                answer: "c. can fuse with other Pokemon",
                correct: false
            },
            {
                answer: "d. can transform into any Pokemon",
                correct: true
            }
        ]
    },
    {
        question: "How many arms has a Machamp?",
        answers: [
            {
                answer: "a.  four Arms",
                correct: true
            },
            {
                answer: "b. two Arms",
                correct: false
            },
            {
                answer: "c. six Arms",
                correct: false
            },
            {
                answer: "d. no Arms",
                correct: false
            }
        ]
    },
    {
        question: "Which of these Types does not exist?",
        answers: [
            {
                answer: "a.  Fire",
                correct: false
            },
            {
                answer: "b. Fairy",
                correct: false
            },
            {
                answer: "c. Warrior",
                correct: true
            },
            {
                answer: "d. Dark",
                correct: false
            }
        ]
    },
    {
        question: "What is a good choise if you want to catch a water or bug type?",
        answers: [
            {
                answer: "a.  Waterball",
                correct: false
            },
            {
                answer: "b. Netball",
                correct: true
            },
            {
                answer: "c. Timerball",
                correct: false
            },
            {
                answer: "d. Diveball",
                correct: false
            }
        ]
    },
    {
        question: "How many badges are necessary to challenge the Elite 4?",
        answers: [
            {
                answer: "a.  nine",
                correct: false
            },
            {
                answer: "b. six",
                correct: false
            },
            {
                answer: "c. eight",
                correct: true
            },
            {
                answer: "d. ten",
                correct: false
            }
        ]
    },
    {
        question: "What Is Ash Catchums origin?",
        answers: [
            {
                answer: "a.  Cerullian City",
                correct: false
            },
            {
                answer: "b. Pewter City",
                correct: false
            },
            {
                answer: "c. Vermillion City",
                correct: false
            },
            {
                answer: "d. Pallet Town",
                correct: true
            }
        ]
    },
    {
        question: "Which starter has two types?",
        answers: [
            {
                answer: "a.  Bulbasaur",
                correct: true
            },
            {
                answer: "b. Chimchar",
                correct: false
            },
            {
                answer: "c. Piplup",
                correct: false
            },
            {
                answer: "d. Tortodile",
                correct: false
            }
        ]
    },
    {
        question: "How are the 3 legendaries from the Kanto Region also called?",
        answers: [{
                answer: "a.  The 3 legandary dragons",
                correct: false
            },
            {
                answer: "b. The 3 legandary dogs",
                correct: false
            },
            {
                answer: "c. The 3 legandary ghosts",
                correct: false
            },
            {
                answer: "d. The 3 legandary birds",
                correct: true
            }
        ]
    },
    {
        question: "What is the strongest fire move every fire starter can learn through a Move Tutor?",
        answers: [
            {
                answer: "a.  Firestorm",
                correct: false
            },
            {
                answer: "b. Blastburn",
                correct: true
            },
            {
                answer: "c. Flamethrower",
                correct: false
            },
            {
                answer: "d. Sacred Fire",
                correct: false
            }
        ]
    },
    {
        question: "What is the only move here that doesn't need recharge time after beeing used?",
        answers: [
            {
                answer: "a.  Hyper Beam",
                correct: false
            },
            {
                answer: "b. Frenzy Plant",
                correct: false
            },
            {
                answer: "c. Solar Beam",
                correct: true
            },
            {
                answer: "d. Hydro Canon",
                correct: false
            }
        ]
    },
    {
        question: "What fossil do you need for Omanyte?",
        answers: [
            {
                answer: "a.  helix fossil",
                correct: true
            },
            {
                answer: "b. dome fossil",
                correct: false
            },
            {
                answer: "c. root fossil",
                correct: false
            },
            {
                answer: "d. fish fossil",
                correct: false
            }
        ]
    }
];

// ------------------------------------------------------------------ VARIABLES

// DOM
const quiz = document.querySelector(".quiz");
const infoScreen = document.querySelector(".quiz-info-screen");
const quizContainer = document.querySelector(".quiz-container");
const currentQuestions = document.querySelectorAll(".current-question");
const currentQuestionCont = document.querySelector(".current-question-cont");
const googleJokerBtn = document.querySelector(".google-joker-btn");
const skipOneJokerBtn = document.querySelector(".skip-joker-btn");
const fiftyJokerBtn = document.querySelector(".fifty-joker-btn");
const startScreen = document.querySelector(".start-screen-quiz");
const scoreScreen = document.querySelector(".score-screen-quiz");

const restartQuizBtn = document.querySelector(".restart-quiz-btn");
const startQuizBtn = document.querySelector(".start-quiz-btn");
const nextJokerBtn = document.querySelector(".next-joker-btn");

const endscoreTxt = document.querySelector(".endscore-txt");
const jokersUsedTxt = document.querySelector(".j-used-txt");
const rAnswersTxt = document.querySelector(".r-answer-txt");
const wAnswersTxt = document.querySelector(".w-answer-txt");

let quizClock = document.querySelector(".quiz-clock").firstElementChild;
let currentQuesionIndex;
let randomQuestions;
let wrongAnswers;
let jokersUsed;
let revive;
let timer;


// ------------------------------------------------------------------ EVENT LISTENERS (Re-/Start Btns, Jokers Btns)

startQuizBtn.addEventListener("click", startQuiz);
restartQuizBtn.addEventListener("click", startQuiz);
nextJokerBtn.addEventListener("click", nextJokerFunc);
fiftyJokerBtn.addEventListener("click", fiftyJokerFunc);
googleJokerBtn.addEventListener("click", googleJokerFunc);
skipOneJokerBtn.addEventListener("click", skipOneJokerFunc);


// ------------------------------------------------------------------ EVENT LISTENERS

// Toggles Info Screen
const toggleInfoScreen = () => infoScreen.classList.toggle("invisible");


// Restarts - Quiz
function reloadSite() {
    location.reload();
}


// Start Quiz - BUTTON
function startQuiz() {
    resetQuiz();
    [...currentQuestions][14].classList.add("selected"); // select first one
    displayQuestion(currentQuesionIndex);
}


// Resets quiz (res. vars & removes classes)
function resetQuiz() {
    // res. vars
    timer = null;
    revive = false;
    jokersUsed = 0;
    wrongAnswers = 0;
    currentQuesionIndex = 0;
    quizContainer.innerHTML = "";

    // enables all jokers
    [...document.querySelectorAll(".joker")].forEach(j => j.classList.remove("disabled-joker"));
    // visibility of start screen/quiz cont
    startScreen.classList.remove("visible");
    scoreScreen.classList.remove("visible");
    quiz.classList.remove("invisible");
    currentQuestionCont.classList.remove("invisible");
    // randomizes questions
    randomQuestions = randomizeQuestions(allQuestions);
}


// Randomizes the order of allQuestion (creates new arr)
const randomizeQuestions = arr => arr.sort(() => Math.random() - .5);


// Displays Question & Answers
function displayQuestion(qIndex) {
    quizContainer.insertAdjacentHTML("beforeend", `
    <div onclick="reloadSite()" class="reload-btn"><i class="fas fa-sync-alt"></i></div>
    <div class="question-cont flex-center">
        <p class="question">${randomQuestions[qIndex].question}</p>
    </div>
    <div class="answers-cont">
        <div class="answer flex-center" data-ans="0">${randomQuestions[qIndex].answers[0].answer}</div>
        <div class="answer flex-center" data-ans="1">${randomQuestions[qIndex].answers[1].answer}</div>
        <div class="answer flex-center" data-ans="2">${randomQuestions[qIndex].answers[2].answer}</div>
        <div class="answer flex-center" data-ans="3">${randomQuestions[qIndex].answers[3].answer}</div>
    </div>
    `);
    // adds a click function to newly created answers btns
    [...document.querySelectorAll(".answer")].map(a => a.addEventListener("click", selectAnswer));
    // sets clock/timer back
    quizClock.innerText = 60;
    // starts timer
    StartQuizTimer();
}


// Starts (and ends) Timer
function StartQuizTimer() {
        timer = setInterval(() => {
        quizClock.innerText--;
        if (quizClock.innerText == 0) {
            if (quizClock.innerText < 0) {
                quizClock.innerText = X;
            }
            clearInterval(timer);
            timeIsUp();
        }
    }, 1000);
}


// Shows player that the time is up, checks for Revive joker
function timeIsUp() {
    [...document.querySelectorAll(".answer")].forEach(a => {
        a.classList.add("disabled-quiz");
        a.classList.add("wrong");
    });
    // changes text
    document.querySelector(".question").innerText = "Time is Up :-(";
    checkForRevive();
}


// ------------------------------------------------------------------ CLICK FUNCTION (Select answer)

// BUTTON - Checks if answer is correct, calls correct/wrong function
function selectAnswer(e) {
    const question = document.querySelector(".question");
    const answer = [...document.querySelectorAll(".answer")];

    if (randomQuestions[currentQuesionIndex].answers[e.target.dataset.ans].correct) {
        correctAnswer(parseInt(e.target.dataset.ans), question, answer);
    } else {
        wrongAnswer(parseInt(e.target.dataset.ans), question, answer);
    }
}


// Disables all answers, changes answers background color to right/wrong -> next question
function correctAnswer(aIndex, qtn, ans) {
    ans.forEach(a => {
        a.classList.add("disabled-quiz");
        console.log(randomQuestions[currentQuesionIndex].answers[ans.indexOf(a)].correct)
        ans.indexOf(a) === aIndex ? a.classList.add("correct") : a.classList.add("wrong");
    });
    // changes text
    qtn.innerText = "Correct!";
    // calls next question
    setTimeout(nextQuestion, 1500);
}


// Disables all answers, changes answers background to wrong/right, checks if player has revive
function wrongAnswer(aIndex, qtn, ans) {
    ans.forEach(a => {
        a.classList.add("disabled-quiz");
        randomQuestions[currentQuesionIndex].answers[ans.indexOf(a)].correct ? a.classList.add("correct") : a.classList.add("wrong");
    });
    // changes text
    qtn.innerText = "Sorry, Wrong Answer :-(";
    clearInterval(timer);
    checkForRevive();
}


// Incr. Question Index, Incr. Currernt Index, empties Quiz Cont -> next question
function nextQuestion() {
    clearInterval(timer);
    currentQuesionIndex += 1;
    quizContainer.innerHTML = "";
    // finishes game if all questions are answered - otherwise revive
    if (currentQuesionIndex > 14) {
        gameOver();
    } else if (currentQuesionIndex === 5 && !revive || currentQuesionIndex === 10 && !revive) {
        revive = true;
    }
    // adds 'selected' class to current question
    if (currentQuestions[14 - currentQuesionIndex]) {
        currentQuestions[14 - currentQuesionIndex].classList.add("selected");
        displayQuestion(currentQuesionIndex);
    }
}


// If player has revive -> next question or game over
function checkForRevive() {
    if (revive) {
        revive = false;
        wrongAnswers++;
        setTimeout(nextQuestion, 1500);
    } else {
        setTimeout(gameOver, 1500);
    }
}


// Ends game clears/resets Quiz Cont & current questions, start screen appears
function gameOver() {
    quizContainer.innerHTML = "";
    removeAllCurrents();
    scoreScreenAppaer();
}


// Removes all 'selected' classes from current questions
function removeAllCurrents() {
    [...currentQuestions].map(cq => cq.classList.remove("selected"));
}


// ------------------------------------------------------------------ JOKERS

// Joker for 50/50
function fiftyJokerFunc() {
    jokersUsed++;
    const answers = [...document.querySelectorAll(".answer")];
    let wrongAnswerIndexes = [];

    for (let i = 0; i <= 3; i++) {
        if (!randomQuestions[currentQuesionIndex].answers[i].correct) {
            wrongAnswerIndexes.push(i);
        }
    }
    answers[wrongAnswerIndexes[2]].innerText = "";
    answers[wrongAnswerIndexes[Math.floor(Math.random() * 1)]].innerText = "";
    allJokers[0].active = false;
    fiftyJokerBtn.classList.add("disabled-joker");
}


// Joker for 30 seconds google search
function googleJokerFunc() {
    jokersUsed++;
    // opens new window witth google web site for 30sec
    googleWindow = window.open("http://www.google.com");

    setTimeout(() => googleWindow.close(), 30000);
    allJokers[1].active = false;
    googleJokerBtn.classList.add("disabled-joker");
}


// Joker for skipping one question (not for nr. 14 to 15)
function skipOneJokerFunc() {
    if (currentQuesionIndex < 14) {
        jokersUsed++;
        allJokers[2].active = false;
        nextQuestion();
        skipOneJokerBtn.classList.add("disabled-joker");
    }
}


// Joker for changing the question (index stays same)
function nextJokerFunc() {
    jokersUsed++;
    clearInterval(timer);
    quizContainer.innerHTML = "";
    // takes question from the end of the array
    displayQuestion(randomQuestions.length - 1);
    allJokers[0].active = false;
    this.classList.add("disabled-joker");
}


// Makes score screen appear and fills innerTexts with 'data'/scores
function scoreScreenAppaer() {
    quiz.classList.add("invisible");
    currentQuestionCont.classList.add("invisible");
    scoreScreen.classList.add("visible");
    jokersUsedTxt.innerText = jokersUsed;
    wAnswersTxt.innerText = wrongAnswers;
    rAnswersTxt.innerText = currentQuesionIndex - wrongAnswers;
    endscoreTxt.innerText = calculateEndscore();
}


// Calculates the final score (1000points for every correct question,
//  -500points for every joker used, -2500 for every revive/w. answer
//  if no jokers used and no revives - player gets bonus +5000points)
function calculateEndscore() {
    let endscore = (currentQuesionIndex * 1000);
    let wrongAnsScore = wrongAnswers * 2500;
    let jokersUsedScore = jokersUsed * 500;

    if (currentQuesionIndex >= 14) {
        if (jokersUsed < 1 && wrongAnswers < 1) {
            endscore += 5000;
        }
    }
    return endscore - wrongAnsScore - jokersUsedScore;
}