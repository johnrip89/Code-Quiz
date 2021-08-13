var timer = document.querySelector('#timer')
var time = 0;

var btnStart = document.querySelector('#btn-start');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');
var btnEnd = document.querySelector('#btn-end');

var quizMain = document.querySelector('#quiz');
var q1 = document.querySelector('#question1');
var q2 = document.querySelector('#question2');
var q3 = document.querySelector('#question3');
var q4 = document.querySelector('#question4');
var q5 = document.querySelector('#question5');
var final = document.querySelector('#final-score');

function penalty () {    
}

function startTimer () {
}

function startQuiz () {
    quizMain.classList.add('d-none');
    q1.classList.remove('d-none');
    startTimer();    
}

function question1Submit () {
    if (/* right answer */) {
        q1.classList.add('d-none');
        q2.classList.remove('d-none');
    }
        return penalty();   
}

function question2Submit () {
    if (/* right answer */) {
        q2.classList.add('d-none');
        q3.classList.remove('d-none')
    }
        return penalty();    
}

function question3Submit () {
    if (/* right answer */) {
        q3.classList.add('d-none');
        q4.classList.remove('d-none');
    }
        return penalty();      
}

function question4Submit () {
    if (/* right answer */) {
        q4.classList.add('d-none');
        q5.classList.remove('d-none');
    }
        return penalty();    
}

function question5Submit () {
    if (/* right answer */) {
        q5.classList.add('d-none');
        final.classList.remove('d-none');
    }
        return penalty();    
}

function finalSubmit () {
    final.classList.add('d-none');
    quizMain.classList.remove('d-none');
}

btnStart.addEventListener('click', startQuiz);
btn1.addEventListener('click', question1Submit);
btn2.addEventListener('click', question2Submit);
btn3.addEventListener('click', question3Submit);
btn4.addEventListener('click', question4Submit);
btn5.addEventListener('click', question5Submit);
btnEnd.addEventListener('click', finalSubmit);