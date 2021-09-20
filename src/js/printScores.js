var deleteBtn = document.querySelector('#delete-btn');

function printScores() {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.sort(function (a, b) {
        return b.score - a.score;
    });    

    scores.forEach(function (score) {        
        var scoreItem = document.createElement("li");
        scoreItem.textContent = " " + score.name + ": " + score.score;
        scoreItem.classList.add('score-item')
        
        var scoreList = document.querySelector("#scores");
        scoreList.appendChild(scoreItem);
    });    
}

deleteBtn.addEventListener('click', function deleteScores() {
    localStorage.removeItem("scores");
    location.reload();
});

printScores();