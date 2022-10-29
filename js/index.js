//MANIPULAÇÃO DO DOM

//capturando os elementos de HTML

const startScreen = document.getElementById('startScreen');
const inputName = document.getElementById('inputName');
const gameScreen = document.getElementById('gameScreen');
const gameScore = document.getElementById('gameScore');
const round = document.getElementById('round');
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('score');
const board = document.getElementById('board');
const btnStart = document.getElementById('btnStart');

// adicionar o event listener no btnStart
btnStart.addEventListener('click',() => {

    //esconder a startScreen
    startScreen.classList.add('hide');

    //mostrar o gameScore
    gameScore.className = 'show';
} )