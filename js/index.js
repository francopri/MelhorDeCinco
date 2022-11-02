
let melhorDeCinco;


//FUNÇOES

function init() {

  melhorDeCinco = new MelhorDeCinco();

  const btnStart = document.getElementById('btnStart');

  btnStart.addEventListener('click', showBoard);

}

function startGame() {

  //mostra dados dos jogadores
  initPlayers();

  //Mostrar o score
  showScoreTable();

  //Mostrar cartas da pessoa
  showPlayerCards();

  //Mostra tabela de debug das cartas sorteadas
  showDebugTable();

  //Inicia a primeira rodada
  startRound();

}

function showScoreTable() {

  const gameScoreDiv = document.getElementById('gameScore');
  const gameScoreTbody = gameScoreDiv.querySelector('table > tbody');

  gameScoreTbody.innerHTML = '';

  const playersClone = [...melhorDeCinco.players]; //Clonando o array para fazer o sort

  playersClone.sort((a, b) => b.score - a.score)

  for (const player of playersClone) {
    gameScoreTbody.innerHTML += `<tr>
    <td>${player.name}</td>
    <td class="text-center">${player.score}</td>
  </tr>`

  }
}

function showDebugTable() {

  const debugTableTbody = document.querySelector('#debug-table tbody');

  debugTableTbody.innerHTML = '';

  for (const player of melhorDeCinco.players) {
    debugTableTbody.innerHTML += `<tr>
  <td>${player.name}</td>
  <td class="text-center">${player.cards}</td>
</tr>`

  }
}

function initPlayers() {

  for (let i = 0; i < melhorDeCinco.players.length; i++) {

    const playerPhotoImg = document.getElementById(`player${i + 1}-photo`);
    const playerName = document.getElementById(`player${i + 1}-name`);
    const playerScore = document.getElementById(`player${i + 1}-score`);

    playerName.innerText = melhorDeCinco.players[i].name;
    playerScore.innerText = melhorDeCinco.players[i].score;

  }

}

function showPlayerCards() {

  const cardsPlayer1ContainerDiv = document.getElementById('player1-cards');

  cardsPlayer1ContainerDiv.innerHTML = '';

  for (const card of melhorDeCinco.players[0].cards) {
    cardsPlayer1ContainerDiv.innerHTML += `<div class="d-flex align-items-center justify-content-center card-face card-player">${card}</div>`;
  }
  const cardsPlayerDiv = document.querySelectorAll('.card-player');

  for (const cardDiv of cardsPlayerDiv) {

    cardDiv.addEventListener('click', playerCardClick);

  }

}

function showComputersCards() {

  for (let p = 1; p <= 3; p++) {

    const cardsPlayerContainerDiv = document.getElementById(`player${p + 1}-cards`);

    cardsPlayerContainerDiv.innerHTML = '';

    for (let i = 1; i <= melhorDeCinco.players[p].cards.length; i++) {
      cardsPlayerContainerDiv.innerHTML += `<div class="card-back card-stack-back card-stack-back-${i}"></div>`;
    }

  }

}

function showStartScreen() {

  //esconder a startScreen
  const startScreenDiv = document.getElementById('startScreen');
  startScreenDiv.classList.add('show');

  //mostrar a gameScreen
  const gameScreenDiv = document.getElementById('gameScreen');
  gameScreenDiv.className = 'hide';

}

function showBoard() {

  const newNameInput = document.getElementById('newName');

  //se não informou nome, finaliza a função
  if (newNameInput.value === "") {
    return;
  }

  //esconder a startScreen
  const startScreenDiv = document.getElementById('startScreen');
  startScreenDiv.classList.add('hide');

  //mostrar a gameScreen
  const gameScreenDiv = document.getElementById('gameScreen');
  gameScreenDiv.className = 'show';

  melhorDeCinco.init(newNameInput.value);

  startGame();

}

function startRound() {

  melhorDeCinco.selectComputerCards();

  showComputersCards();


}

function playerCardClick(event) {

  const playerCardValue = +event.currentTarget.innerText;

  event.currentTarget.parentNode.removeChild(event.currentTarget);

  melhorDeCinco.setPlayerSelectedCard(playerCardValue);

  showSelectedPlayerCard(1, playerCardValue);
  showSelectedPlayerCard(2, melhorDeCinco.cardsSelected[1]);
  showSelectedPlayerCard(3, melhorDeCinco.cardsSelected[2]);
  showSelectedPlayerCard(4, melhorDeCinco.cardsSelected[3]);

}

function showSelectedPlayerCard(playerNum, card){

  const cardSelectedPlayer1Div = document.getElementById(`card-selected-player${playerNum}`);

  cardSelectedPlayer1Div.classList.add('card-face');

  cardSelectedPlayer1Div.classList.remove('card-back');

  cardSelectedPlayer1Div.innerText = card;

}

init();








//TODO REMOVER
melhorDeCinco.init("Priscila");
startGame();

// const roundSpan = document.getElementById('round');
// const btnNewGame = document.getElementById('btnNewGame');
