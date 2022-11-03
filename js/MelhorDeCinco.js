//CLASSE

class MelhorDeCinco {

    constructor() {

        this.players = [];
        this.cardsSelected = null;
        this.currentRound = 0;

    }

    init(playerName) {

        //define lista de nomes
        const playersConfig = this.getPlayersConfig();


        //instanciando humano

        const p1 = new Player(1, playerName, 'profile.png');

        this.players.push(p1);


        //instanciando computadores

        for (let p = 2; p <= 4; p++) {

            const playerConfig = this.getRandomPlayerConfig(playersConfig);

            const player = new Player(p, playerConfig.name, playerConfig.imgCode);

            this.players.push(player);

        }

    }

    newGame() {

        this.cardsSelected = [];
        this.currentRound = 0;

        //cria uma lista de cartas possíveis
        const cards = [];

        for (let ct = 1; ct <= 20; ct++) {
            cards.push(ct);
        }


        // sorteando a ordem dos jogadores para o sorteio das cartas

        const playersOrder = this.getRandomIndexesOfPlayers();


        // sorteando as cartas para os jogadores

        for (const po of playersOrder) {

            //obter as cartas sorteadas para cada jogador
            const playerCards = this.getCardsForPlayer(cards);

            //configurando as cartas sorteadas de cada jogador em seu respectivo objeto
            this.players[po].setCards(playerCards);

            //iniciando score
            this.players[po].score = 0;

        }

    }

    getRandomIndexesOfPlayers() {

        const playersIndex = [0, 1, 2, 3];

        const playersOrder = [];

        for (let p = 0; p <= 3; p++) {

            let i = Math.floor((Math.random() * playersIndex.length));

            const randomPlayerIndex = playersIndex.splice(i, 1)[0];

            playersOrder.push(randomPlayerIndex);

        }

        return playersOrder;

    }

    /**
     * Sorteia uma lista de cartas para um jogador a partir de um conjunto de cartas possíveis fornecido como parâmetro. As cartas sorteadas para o jogador são removidas da lista de cartas possíveis fornecida.
     * @param {number[]} cards lista de cartas possíveis
     * @returns a lista de cartas selecionadas para o jogador
     */
    getCardsForPlayer(cards) {

        const selectedCards = [];

        for (let j = 0; j < 5; j++) {

            let i = Math.floor((Math.random() * cards.length));


            //o método splice retorna um array com um subconjunto dos elementos do array onde ele foi aplicado. Como se pretende obter apenas 1 valor e não um array com 1 valor, foi usado o [0]para pegar o valor do primeiro e único elemento.

            const card = cards.splice(i, 1)[0];

            selectedCards.push(card);

        }

        return selectedCards;

    }

    /**
     * Sorteia um nome e uma imagem para um jogador a partir de um objeto de configuração que possui nomes e imagens  possíveis. O método altera o objeto de configuração.
     * @param {*} playerConfigs objeto de configuração que possui nomes e imagens possíveis 
     * @returns Objeto com o nome e o código de imagem sorteados
     */
    getRandomPlayerConfig(playerConfigs) {

        // sorteia um indice no array de players

        const ip = Math.floor(Math.random() * playerConfigs.players.length);

        const player = playerConfigs.players.splice(ip, 1)[0];


        // sorteia um indice no array de tipos de acordo com o tipo do players sorteado

        let imgCode;

        if (player.type === 'woman') {
            
            const itw = Math.floor(Math.random() * playerConfigs.womanImgCodes.length);

            imgCode = playerConfigs.womanImgCodes.splice(itw, 1)[0];

        }
        else {

            const itm = Math.floor(Math.random() * playerConfigs.manImgCodes.length);

            imgCode = playerConfigs.manImgCodes.splice(itm, 1)[0];

        }

        return {
            name: player.name,
            imgCode
        };

    }

    selectComputerCards() {

        //incrementar a rodada

        this.currentRound++;


        //sorteia cartas para os computadores

        this.cardsSelected = [null];

        for (let p = 1; p <= 3; p++) {

            let i = Math.floor((Math.random() * this.players[p].cards.length));

            const card = this.players[p].cards.splice(i, 1)[0];

            this.cardsSelected.push(card);

        }

    }

    playRound(playerCard) {


        //definir a carta do jogador humano

        this.cardsSelected[0] = playerCard;


        //remover a carta que o jogador selecionou

        this.players[0].cards = this.players[0].cards.filter(c => c !== playerCard);


        //verificar o jogador que venceu a rodada

        let indexPlayerRoundWinner = -1;

        let winnerValue = -1;

        for (let i = 0; i < this.cardsSelected.length; i++) {
            if (this.cardsSelected[i] > winnerValue) {
                indexPlayerRoundWinner = i;
                winnerValue = this.cardsSelected[i];

            }

        }

        //incrementar o score do player que venceu a rodada

        this.players[indexPlayerRoundWinner].score++;


        //verifica o jogador com maior pontuação após a rodada

        const scoreDiff = this.getScoreStatus().diff;

        const remaingRounds = this.players[0].cards.length;


        //verificar se já há um vencedor

        const gameFinished = (remaingRounds == 0 || remaingRounds < scoreDiff);


        // retornar um objeto com o status do jogo

        return {
            gameFinished,
            indexPlayerRoundWinner
        };

    }

    getScoreStatus() {

        let scoreFirst = -1;

        let scoreSecond = -1;

        for (let i = 0; i < this.players.length; i++) {

            if (this.players[i].score > scoreFirst) {

                scoreFirst = this.players[i].score;

            } else if (this.players[i].score > scoreSecond) {

                scoreSecond = this.players[i].score;

            }

        }

        return {
            scoreFirst,
            scoreSecond,
            diff: scoreFirst - scoreSecond
        };

    }

    getWinners() {

        const scoreWinner = this.getScoreStatus().scoreFirst;

        const winners = this.players.filter(p => p.score === scoreWinner);

        return winners;


    }

    getPlayersConfig() {

        return {
            womanImgCodes: ['woman1', 'woman2', 'woman3'],
            manImgCodes: ['man1', 'man2', 'man3'],
            players: [
                {
                    name: 'Patrícia',
                    type: 'woman',
                },
                {
                    name: 'Karen',
                    type: 'woman',
                },
                {
                    name: 'Jino',
                    type: 'man',
                },
                {
                    name: 'Daniele',
                    type: 'woman',
                },
                {
                    name: 'Guilherme',
                    type: 'man',
                },
                {
                    name: 'João',
                    type: 'man',
                },
                {
                    name: 'Marcelo',
                    type: 'man',
                },
                {
                    name: 'Claudia',
                    type: 'woman',
                },
                {
                    name: 'Cíntia',
                    type: 'woman',
                },
                {
                    name: 'Joana',
                    type: 'woman',
                },
                {
                    name: 'Sofia',
                    type: 'woman',
                },
                {
                    name: 'Gabriel',
                    type: 'man',
                },
                {
                    name: 'Rodrigo',
                    type: 'man',
                }
            ],
        };

    }


}


