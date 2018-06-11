/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//ONLY TEXT NO HTML
// document.querySelector('#current-' + playerTurn).textContent = dice;
// SHOWING INNERHTML
// document.querySelector('#current-' + playerTurn).innerHTML = '<em>' + dice + '</em>';
// Reads what is set as var
// var x = document.querySelector('#score-0').textContent;

var score, rounds, playerTurn, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() { 
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // var diceDOM = document.querySelector('.dice');
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        if (dice1 !== 1 && dice2 !== 1) {
            rounds += dice1 + dice2;
            document.querySelector('#current-' + playerTurn).textContent = rounds;
        } else {
            nextPlayer();
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        score[playerTurn] += rounds;

        document.querySelector('#score-' + playerTurn).textContent = score[playerTurn];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input) {
            winningScore = input;

        } else {
            winningScore = 100;
        }
        if (score[playerTurn] >= winningScore) {
            document.querySelector('#name-' + playerTurn).textContent = 'WINNER'; 
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + playerTurn + '-panel').classList.add('winner');
            document.querySelector('.player-' + playerTurn + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;
    rounds = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    alert('Next player!')

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0,0]; 
    rounds = 0;
    playerTurn = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
