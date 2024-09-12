let score = 0;
let pointsPerClick = 1;

const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    updateScore();
});

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function buyUpgrade(upgrade) {
    if (upgrade === 1 && score >= 10) {
        score -= 10;
        pointsPerClick += 1;
    } else if (upgrade === 2 && score >= 100) {
        score -= 100;
        pointsPerClick += 5;
    } else if (upgrade === 3 && score >= 500) {
        score -= 500;
        pointsPerClick += 20;
    } else {
        alert('Not enough score to buy this upgrade!');
        return;
    }
    updateScore();
}
