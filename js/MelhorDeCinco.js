//CLASSE

class MelhorDeCinco {

    constructor() {

        //nome do jogador será recebido no inputname
        this.playerName = '';

        //o jogador começa com 0 pontos
        this.playerScore = 0;

        this.cardsSelected = [];

        this.players = [];

    }


    init(playerName) {

        //configura o nome da pessoa
        this.playerName = playerName;


        //define lista de nomes
        const names = ['Patrícia', 'Karen', 'Jino', 'Daniele', 'Guilherme', 'João', 'Marcelo', 'Claudia', 'Cíntia', 'Joana', 'Sofia', 'Gabriel', 'Minie', 'Jujuba', 'Amora'];

        //instancia cada jogador
        const p1 = new Player(this.playerName, 'profile.png');
        const p2 = new Player(this.getRandomNamePlayer(names), 'profile.png');
        const p3 = new Player(this.getRandomNamePlayer(names), 'profile.png');
        const p4 = new Player(this.getRandomNamePlayer(names), 'profile.png');

        //inclui cada jogador na lista de jogadores
        this.players.push(p1);
        this.players.push(p2);
        this.players.push(p3);
        this.players.push(p4);

        //cria uma lista de cartas possíveis
        const cards = [];

        for (let ct = 1; ct <= 20; ct++) {
            cards.push(ct);
        }

        //obter as cartas sorteadas para cada jogador
        const p1Cards = this.getCardsForPlayer(cards);
        const p2Cards = this.getCardsForPlayer(cards);
        const p3Cards = this.getCardsForPlayer(cards);
        const p4Cards = this.getCardsForPlayer(cards);

        //configurando as cartas sorteadas de cada jogador em seu respectivo objeto
        p1.setCards(p1Cards);
        p2.setCards(p2Cards);
        p3.setCards(p3Cards);
        p4.setCards(p4Cards);

    }

    /**
     * Sorteia uma lista de cartas para um jogador a partir de um conjunto de cartas possíveis fornecido como parâmetro. As cartas sorteadas para o jogador são removidas da lista de cartas possíveis fornecida.
     * @param {*} cards lista de cartas possíveis
     * @returns a lista de cartas selecionadas para o jogador
     */
    getCardsForPlayer(cards) {

        const selectedCards = [];

        for (let j = 0; j < 5; j++) {

            let i = Math.floor((Math.random() * cards.length) - 1);

            if (i < 0) i = 0;

            const card = cards.splice(i, 1);

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

        const name = names.splice(i, 1);

        return name;

    }

}


