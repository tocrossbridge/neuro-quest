/* end game */
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

// get & show the most recent score from localStorage:
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// prevendDefault
saveHighScore = e => { e.preventDefault(); }