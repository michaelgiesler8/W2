let team1Score = 0;
let team2Score = 0;

function updateScore(team, points) {
    if (team === 'team1') {
        team1Score = Math.max(team1Score + points, 0);
    } else if (team === 'team2') {
        team2Score = Math.max(team2Score + points, 0);
    }
    drawScores();
    checkWinner();
}

function resetScores() {
    team1Score = 0;
    team2Score = 0;
    drawScores();
}

function drawScores() {
    document.getElementById('team1-score').textContent = team1Score;
    document.getElementById('team2-score').textContent = team2Score;
}

function checkWinner() {
    if (team1Score >= 10) {
        alert('Team 1 wins!');
        resetScores();
    } else if (team2Score >= 10) {
        alert('Team 2 wins!');
        resetScores();
    }
}