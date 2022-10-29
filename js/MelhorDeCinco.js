//CLASSE

class MelhorDeCinco {
    constructor(){
        
        //nome do jogador será recebido no inputname
        this.playerName = '';

        //o jogador começa com 0 pontos
        this.playerScore = 0; 

        this.cards = [
            "./assets/card2.webp",
            "./assets/card2.webp",
            "./assets/card2.webp",
            "./assets/card2.webp",
            "./assets/card2.webp"
        ]

renderBoard() {
    //randomizar as cartas

    //o metodo sort resulta em 0, 1 ou -1 e joga as cartas para frente ou para trás ou deixa na mesma posição
    this.cards.sort(() => {
        return Math.random() - 0.5;
    })

}

    }
}