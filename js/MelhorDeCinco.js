//CLASSE

class MelhorDeCinco {

    constructor() {

        //nome do jogador será recebido no inputname
        this.playerName = '';
        this.players = [];
        this.cardsSelected = null;
        this.currentRound = 0;

    }

    init(playerName) {

        //configura o nome da pessoa
        this.playerName = playerName;

        //define lista de nomes
        const names = ['Patrícia', 'Karen', 'Jino', 'Daniele', 'Guilherme', 'João', 'Marcelo', 'Claudia', 'Cíntia', 'Joana', 'Sofia', 'Gabriel', 'Minie', 'Jujuba', 'Amora', 'Rodrigo'];


        //instanciando humano

        const p1 = new Player(1, this.playerName, 'profile.png');

        this.players.push(p1);


        //instanciando computadores

        for (let p = 2; p <= 4; p++) {

            const player = new Player(p, this.getRandomNamePlayer(names), 'profile.png');

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
     * @param {*} cards lista de cartas possíveis
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
     * Sorteia um nome para um jogador a partir de um conjunto de nomes possíveis fornecido como parâmetro. O nome sorteado é removido da lista de nomes possíveis.
     * @param {*} names lista de nomes possíveis
     * @returns 
     */
    getRandomNamePlayer(names) {

        let i = Math.floor((Math.random() * names.length) - 1);

        if (i < 0) i = 0;

        const name = names.splice(i, 1)[0];

        return name;

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

}


