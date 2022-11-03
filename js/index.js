
let melhorDeCinco;


//FUNÇOES

function init() {

  melhorDeCinco = new MelhorDeCinco();

  const btnStart = document.getElementById('btnStart');

  btnStart.addEventListener('click', showBoard);

  document.getElementById('newName').addEventListener('keydown', (event) => {
    if (event.code === 'Enter') showBoard();
  });

  document.getElementById('btnNewGame').addEventListener('click', newGame);

}

function startGame() {

  // iniciar uma nova partida
  melhorDeCinco.newGame();

  //mostra dados dos jogadores
  initPlayers();

  //Mostrar cartas da pessoa
  showPlayerCards();

  //Inicia a primeira rodada
  startRound();

}

function showScoreTable() {

  //atualiza o número da rodada
  const currentRoundSpan = document.getElementById('current-round');

  currentRoundSpan.innerText = melhorDeCinco.currentRound;

  //atualiza a tabela de pontos

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

  configPlayerCardsListener(true);

}

function configPlayerCardsListener(activate) {

  const cardsPlayerDiv = document.querySelectorAll('.card-player');

  for (const cardDiv of cardsPlayerDiv) {


    if (activate) {
      cardDiv.addEventListener('click', playerCardClick);
    } else {
      cardDiv.removeEventListener('click', playerCardClick);
    }

  }


}

function showComputersCardsStack() {

  for (let p = 1; p <= 3; p++) {

    const cardsPlayerContainerDiv = document.getElementById(`player${p + 1}-cards`);

    cardsPlayerContainerDiv.innerHTML = '';

    for (let i = 1; i <= melhorDeCinco.players[p].cards.length; i++) {
      cardsPlayerContainerDiv.innerHTML += `<div class="card-back card-stack-back card-stack-back-${i}"></div>`;
    }

  }

}

function resetSelectedCards() {


  for (let p = 1; p <= 4; p++) {

    const cardSelectedPlayer1Div = document.getElementById(`card-selected-player${p}`);

    cardSelectedPlayer1Div.classList.remove('card-selected-winner');

    cardSelectedPlayer1Div.classList.remove('card-selected-face');

    cardSelectedPlayer1Div.innerText = '';

    if (p != 1) {
      cardSelectedPlayer1Div.classList.add('card-selected-back');
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
  if (!newNameInput.value || newNameInput.value.trim() === "") {
    return;
  }

  //esconder a startScreen
  const startScreenDiv = document.getElementById('startScreen');
  startScreenDiv.classList.add('hide');

  //mostrar a gameScreen
  const gameScreenDiv = document.getElementById('gameScreen');
  gameScreenDiv.classList.remove('hide');


  melhorDeCinco.init(newNameInput.value);

  startGame();

}

function startRound() {

  melhorDeCinco.selectComputerCards();

  resetSelectedCards();

  showComputersCardsStack();

  showScoreTable();

}

function playerCardClick(event) {

  //desativa o click nas cartas do jogador
  configPlayerCardsListener(false);

  //obtem o valor da carta escolhida pelo jogador
  const playerCardValue = +event.currentTarget.innerText;

  //remove a carta escolhida da lista de cartas do jogador
  event.currentTarget.parentNode.removeChild(event.currentTarget);


  //mostra os valores das cartas de todos os jogadores
  showSelectedPlayerCardFace(1, playerCardValue);
  showSelectedPlayerCardFace(2, melhorDeCinco.cardsSelected[1]);
  showSelectedPlayerCardFace(3, melhorDeCinco.cardsSelected[2]);
  showSelectedPlayerCardFace(4, melhorDeCinco.cardsSelected[3]);


  //executa a jogada da rodada

  const result = melhorDeCinco.playRound(playerCardValue);


  //destaca a carta que ganhou a rodada

  const cardWinnerDiv = document.getElementById(`card-selected-player${result.indexPlayerRoundWinner + 1}`);

  cardWinnerDiv.classList.remove('card-selected-face');
  cardWinnerDiv.classList.add('card-selected-winner');


  //atualizar tabela de score

  showScoreTable();


  //atualizar o score de cada jogador

  showPlayersScore();


  //se o jogo não acabou  inicia um novo round

  if (!result.gameFinished) {

    setTimeout(() => {
      startRound();
      configPlayerCardsListener(true);
    }, 1500);

  }
  else {
    showWinners();
  }

}

function showPlayersScore() {

  for (let i = 0; i <= 3; i++) {

    const playerScoreDiv = document.getElementById(`player${i + 1}-score`);

    playerScoreDiv.innerText = melhorDeCinco.players[i].score;

  }

}

function showSelectedPlayerCardFace(playerNum, card) {

  const cardSelectedPlayer1Div = document.getElementById(`card-selected-player${playerNum}`);

  cardSelectedPlayer1Div.classList.add('card-selected-face');

  cardSelectedPlayer1Div.classList.remove('card-selected-back');

  // cardSelectedPlayer1Div.innerText = card;
  cardSelectedPlayer1Div.innerHTML = `<div class="card-selected-face-text">${card}</div>`;

}

function showWinners() {

  // obter array de jogar(es) vencedor(es)
  const winners = melhorDeCinco.getWinners();

  // mostrar o status do resultado (vitória ou empate)

  const resultStatusDiv = document.getElementById('resultStatus');

  resultStatusDiv.innerText = winners.length > 1 ? 'Houve um empate!!' : 'Temos um vencedor!';

  // mostrar o conteúdo do(s) vencedor(es)

  const winnersContentDiv = document.getElementById('winnersContent');

  winnersContentDiv.innerHTML = '';

  for (const player of winners) {

    const playerProfileDiv = document.getElementById(`player${player.number}Profile`);

    const playerProfileDivClone = playerProfileDiv.cloneNode(true);

    winnersContentDiv.appendChild(playerProfileDivClone);

  }

  const resultModal = new bootstrap.Modal('#resultModal');

  resultModal.show();

}

function newGame() {

  const resultModalEl = document.querySelector('#resultModal');

  const resultModal = bootstrap.Modal.getInstance(resultModalEl);

  resultModal.hide();

  startGame();

}


init();


