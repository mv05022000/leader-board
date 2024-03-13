document.addEventListener('DOMContentLoaded', function() {
    const leaderboardBody = document.querySelector('#leaderboard tbody');
    const addPlayerForm = document.getElementById('addPlayerForm');
    const nameInput = document.getElementById('nameInput');
    const scoreInput = document.getElementById('scoreInput');

    let players = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 90 },
        { name: 'Player 3', score: 80 },
        { name: 'Player 4', score: 70 },
        { name: 'Player 5', score: 60 }
    ];

    
    function renderLeaderboard() {
        leaderboardBody.innerHTML = '';

        players.forEach((player, index) => {
            const row = `<tr>
                            <td>${index + 1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        </tr>`;
            leaderboardBody.insertAdjacentHTML('beforeend', row);
        });
    }

   
    function handleFormSubmit(event) {
        event.preventDefault();

        const playerName = nameInput.value.trim();
        const playerScore = parseInt(scoreInput.value.trim());

        if (playerName && !isNaN(playerScore)) {
            players.push({ name: playerName, score: playerScore });
            players.sort((a, b) => b.score - a.score);
            renderLeaderboard();
            addPlayerForm.reset();
        } else {
            alert('Please enter valid name and score.');
        }
    }

   
    addPlayerForm.addEventListener('submit', handleFormSubmit);

    
    renderLeaderboard();
});
