## Jogo Melhor de Cinco - Projeto 1 

- são 4 jogadores, sendo 3 jogadores máquina e 1 jogador humano que pode ter o nome definido
- montar uma tela de start para a pessoa colocar o nome. O nome dos outros jogadores será escolhido a partir de uma lista fixa.
- as cartas são sorteadas aleatoriamente entre 1 e 20 entre os 4 jogadores, não havendo repetição de cartas.
- montar uma "mesa" para mostrar as cartas de cada jogador. Nessa tela as 4 cartas dos 3 jogadores máquina não devem estar visíveis, somente as cartas do jogador humano devem estar viradas.
- para começar o jogo, o jogador humano deve escolher 1 carta para disputar a rodada. Não há opção de trocar a carta.
- ao selecionar a carta todas vão para a "mesa central".
- As cartas que foram para a mesa central devem ser retiradas das cartas dos jogadores
- quem escolheu a carta de maior pontuação ganhará um ponto e vencerá a rodada. 
- Os pontos devem ser exibidos ao lado/abaixo do nome de cada jogador.
- Exibir os pontos no placar geral
- Remontar a "mesa" com as novas cartas escolhidas.
- São necessárias no mínimo 3 rodadas para haver 1 vencedor. 
- Exibir tela com nome do vencedor e um botão para jogar novamente, com os mesmos jogadores, ou reiniciar tudo.

## Escopo do Projeto

Definindo quais serão as funcionalidades do jogo

- O jogo será um jogo de cartas
- Haverá 20 cartas.
    - 5 cartas para cada jogador
- As cartas serão embaralhadas randomicamente de 1 a 20
- No começo do jogo o jogador deverá informar seu nome
- A pessoa deverá escolher 1 carta
  - Se a carta for a mais alta, ganha 1 ponto
  - Cada jogador começará o jogo com 0 pontos
  
  - Estado de vitória
  - em no máximo 5 rodadas vence quem tiver o maior número de pontos


## TEMP
~~- fonte para cartas do jogador~~
~~- estilo completo para o score de cada jogador~~
~~- estilizar o placar~~
~~- tirar a concatenaçao das cartas sorteadas~~
~~- tirar linhas dos divs~~
~~- criar painel de debug de cartas sorteadas~~
- REVISAR atributo playername na classe melhor de cinco
- REVISAR NOME PLAYER - PlayerHuman e playerComputer
- figurinhas para profiles
~~- padronizar o formato da nomenclatura dos ids~~
~~- Mecanismo de definição dos nomes dos computadores~~
~~- sortear cartas dos computadores: ~~
  ~~- sortear 1 carta de cada computador~~
  ~~- mostrar a carta sorteada no meio~~
  ~~- remover uma carta do jogador~~
~~- quando o jogador clicar em uma carta:~~
  ~~- mostrar a carta clicada no meio~~
  ~~- remover a carta da lista do jogador~~
  ~~- verificar qual jogador teve a maior carta e incrementar a pontuação ~~
  ~~- Atualizar placar~~
  ~~- verificar se alguém já ganhou~~
  ~~- Se ninguém ganhou~~
    ~~- limpar as cartas do centro ~~
    ~~- sortear cartas dos computadores novamente.~~
  ~~- Se alguém ganhou, mostrar o resultado e um botão para jogar novamente.~~