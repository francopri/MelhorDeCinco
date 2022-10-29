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

  melhorDeCinco.playerName = newNameInput.value;
  


});


//TODO: REMOVER
melhorDeCinco.playerName = "Priscila";


