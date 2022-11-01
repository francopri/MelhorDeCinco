//MANIPULAÇÃO DO DOM

let melhorDeCinco;

//capturando os elementos de HTML
const startScreenDiv = document.getElementById('startScreen');
const newNameInput = document.getElementById('newName');
const gameScreenDiv = document.getElementById('gameScreen');
const gameScoreDiv = document.getElementById('gameScore');
const gameScoreTbody = gameScoreDiv.querySelector('table > tbody');
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
  melhorDeCinco = new MelhorDeCinco();
  melhorDeCinco.init(newNameInput.value);

});


//TODO: REMOVER

//define dados de teste
melhorDeCinco = new MelhorDeCinco();
melhorDeCinco.init("Priscila");
melhorDeCinco.players[0].score = 25;
melhorDeCinco.players[1].score = 35;
melhorDeCinco.players[2].score = 15;
melhorDeCinco.players[3].score = 5;


//mostra dados dos jogadores
player1Name.innerText = melhorDeCinco.players[0].name + ' - ' + melhorDeCinco.players[0].cards;
player1Score.innerText = melhorDeCinco.players[0].score;

player2Name.innerText = melhorDeCinco.players[1].name + ' - ' + melhorDeCinco.players[1].cards;
player2Score.innerText = melhorDeCinco.players[1].score;

player3Name.innerText = melhorDeCinco.players[2].name + ' - ' + melhorDeCinco.players[2].cards;
player3Score.innerText = melhorDeCinco.players[2].score;

player4Name.innerText = melhorDeCinco.players[3].name + ' - ' + melhorDeCinco.players[3].cards;
player4Score.innerText = melhorDeCinco.players[3].score;

//Mostrar o score
gameScoreTbody.innerHTML = '';

let trs = '';
const playersClone = [...melhorDeCinco.players]; //Clonando o array para fazer o sort

const playersSortedByScore = playersClone.sort((a, b) => b.score - a.score)

for (const player of playersClone) {
  trs += `<tr>
  <td>${player.name}</td>
  <td>${player.score}</td>
</tr>`

}

gameScoreTbody.innerHTML = trs;

//Mostrar cartas da pessoa
const cardsPlayer1ContainerDiv = document.getElementById('player1-cards');
cardsPlayer1ContainerDiv.innerHTML = '';

for (const card of melhorDeCinco.players[0].cards) {
  cardsPlayer1ContainerDiv.innerHTML += `<div class="d-flex align-items-center justify-content-center card-face card-player">${card}</div>`;

}

const cardsPlayerDiv = document.querySelectorAll('.card-player');

for (const cardDiv of cardsPlayerDiv) {
  cardDiv.addEventListener('click', (event) => {
    alert(event.currentTarget.innerText)
  })

}

//Mostra cartas do computador 1
const cardsPlayer2ContainerDiv = document.getElementById('player2-cards');

cardsPlayer2ContainerDiv.innerHTML = '';

for (let i = 1; i <= 5; i++) {
  cardsPlayer2ContainerDiv.innerHTML += `<div class="card-stack-back card-stack-back-${i}"></div>`;

}

//Mostra cartas do computador 2
const cardsPlayer3ContainerDiv = document.getElementById('player3-cards');

cardsPlayer3ContainerDiv.innerHTML = '';

for (let i = 1; i <= 5; i++) {
  cardsPlayer3ContainerDiv.innerHTML += `<div class="card-stack-back card-stack-back-${i}"></div>`;
}

//Mostra cartas do computador 3

const cardsPlayer4ContainerDiv = document.getElementById('player4-cards');

cardsPlayer4ContainerDiv.innerHTML = '';

for (let i = 1; i <= 5; i++) {

  cardsPlayer4ContainerDiv.innerHTML += `<div class="card-stack-back card-stack-back-${i}"></div>`;

}


