const gameBored = document.getElementById("game-area");
const isPlayerTurnArea = document.getElementById(is-player-turn-area)
let player1;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

creatGameBoard();
function creatGameBoard(){
  const emptyTiles = " ".repeat(9).split("");
  const tileGrid = emptyTiles
  .map((t) => '<button class="title"></button>')
  .join("");
  gameBored.innerHTML = tileGrid
  player1 = "X";


}

