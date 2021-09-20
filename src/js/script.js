var timer = document.querySelector('#timer')
var time = 60;

var quizMain = document.querySelector('#quiz');
var btnStart = document.querySelector('#btn-start');

var questionStatement = document.querySelector('#question-statement');
var Answers = document.querySelector('#answers');
var Questions = document.querySelector('#questions');
var inputMessage = document.querySelector('#message');

var finalPage = document.querySelector('#final-page');
var finalScore = document.querySelector('#final-score');
var btnEnd = document.querySelector('#btn-end');
var scoreNameEl = document.querySelector('#score-name')

var questions = [
    {
        question: 'What is the best program for front-end web development?',
        answers: ['GIT', 'CSS', 'JavaScript', 'HTML'],
        correct: 'JavaScript'
    },
    {
        question: 'What program is considered the skeleton of a website?',
        answers: ['CSS', 'express.js', 'SQL', 'HTML'],
        correct: 'HTML'
    },
    {
        question: 'What do you use to add style to your HTML code?',
        answers: ['JavaScript', 'node.js', 'CSS', 'SQL'],
        correct: 'CSS'
    },
    {
        question: 'What brackets are used to represent an array?',
        answers: ['[]', '()', '{}', '""'],
        correct: '[]'
    },
    {
        question: 'Which program is used to create functions for a website?',
        answers: ['JavaScript', 'GIT', 'CSS', 'SQL'],
        correct: 'JavaScript'
    },
];

function startQuiz() {
    quizMain.classList.add('d-none');
    Questions.classList.remove('d-none');

    currentQuestionIndex = 0;

    timerInterval = setInterval(function () {
        if (time > 0) {
            timer.textContent = time;
            time--;
        } else {
            endQuiz();
        }
    }, 1000);

    showQuestions();
}

function showQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    questionStatement.textContent = currentQuestion.question;

    Answers.innerHTML = '';

    currentQuestion.answers.forEach(function (answer, i) {
        var answerBtn = document.createElement('button');
        answerBtn.classList.add('answer', 'btn', 'btn-info', 'btn-lg', 'col-7', 'mt-2');
        answerBtn.setAttribute('value', answer);

        answerBtn.textContent = answer;

        Answers.appendChild(answerBtn);

        answerBtn.addEventListener('click', function (selectedBtn) {
            console.log(selectedBtn.target.value);
            if (selectedBtn.target.value === currentQuestion.correct) {
                inputMessage.textContent = 'Correct!'

            } else {
                inputMessage.textContent = 'Wrong!'
                time -= 15;

                if (time < 0) {
                    time = 0;
                }

                timer.textContent = time;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex === questions.length) {

                endQuiz();
            } else {
                showQuestions();
            }
        });
    }
    )
};

function endQuiz() {
    clearInterval(timerInterval);

    Questions.classList.add('d-none');
    finalPage.classList.remove('d-none');
    inputMessage.classList.add('d-none');

    finalScore.textContent = time;
}

function saveScore() {
    var scoreName = scoreNameEl.value;    

    if (scoreName !== "") {
        var scores = JSON.parse(localStorage.getItem("scores")) || [];

        var score = {
            score: time,
            name: scoreName
        };

        scores.push(score);
        localStorage.setItem("scores", JSON.stringify(scores));
        location.href = 'scores.html';
       
    }
}

btnEnd.addEventListener('click', saveScore);

btnStart.addEventListener('click', startQuiz);



