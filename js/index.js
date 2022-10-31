//MANIPULAÇÃO DO DOM

// instanciando a classe do jogo Melhor de Cinco

const melhorDeCinco = new MelhorDeCinco();


//capturando os elementos de HTML

const startScreenDiv = document.getElementById('startScreen');
const newNameInput = document.getElementById('newName');
const gameScreenDiv = document.getElementById('gameScreen');
const gameScoreDiv = document.getElementById('gameScore');
const roundSpan = document.getElementById('round');
const btnStart = document.getElementById('btnStart');
const btnNewGame = document.getElementById('btnNewGame');

const player1PhotoImg = document.getElementById('player1-photo');
const player1Name = document.getElementById('player1-name');
const player1Score = document.getElementById('player1-score');

const player2PhotoImg = document.getElementById('player2-photo');
const player2Name = document.getElementById('player2-name');
const player2Score = document.getElementById('player2-score');

const player3PhotoImg = document.getElementById('player3-photo');
const player3Name = document.getElementById('player3-name');
const player3Score = document.getElementById('player3-score');

const player4PhotoImg = document.getElementById('player4-photo');
const player4Name = document.getElementById('player4-name');
const player4Score = document.getElementById('player4-score');


// adicionar o event listener no btnStart
btnStart.addEventListener('click', () => {


  //se não informou nome, finaliza a função
  if (newNameInput.value === "") {
    return;
  }

  //esconder a startScreen
  startScreenDiv.classList.add('hide');

  //mostrar a gameScreen
  gameScreenDiv.className = 'show';

  // melhorDeCinco.playerName = newNameInput.value;

  melhorDeCinco.init(newNameInput.value);



});


//TODO: REMOVER
melhorDeCinco.playerName = "Priscila";


player1Name.innerText = melhorDeCinco.playerName;
player1Score.innerText = '10';

player2Name.innerText = 'Guilherme';
player2Score.innerText = '15';

player3Name.innerText = 'Sofia';
player3Score.innerText = '20';

player4Name.innerText = 'Gabriel';
player4Score.innerText = '25';








