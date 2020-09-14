//creates empty board
const X = {
  score: 0,
  blocks: []
}
const O = {
  score: 0,
  blocks: []
}
var turn = X;

var winningBoard = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

const imageX = 'https://www.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_blue-512.png'
const imageO = 'https://images.ctfassets.net/yr4qj72ki4ky/5gltqdfqQSQj1K9DPVMYWf/8e1ca3d632a440be80270f4952a878d0/hrhq-avatar.png'

function createBoard() {

  var blockId = 1
  var board = document.getElementById('gameContainer')
  board.innerHTML = '';
  for (let i=0; i<9; i++) {
    var block = document.createElement('span');
    block.setAttribute('id', blockId);
    block.setAttribute('class', 'block');
    block.addEventListener("click", makeMove);
    board.appendChild(block);
    blockId++;
  }
}
createBoard()
updateScore()

//places X or O on clicked block, and checks for winner
function makeMove() {
  if (!this.style.backgroundImage) {
    this.style.backgroundImage = (`url(${turn===X ? imageX : imageO})`);
    this.style.backgroundSize = '200px 200px';
    let id = Number(this.getAttribute('id'));
    turn.blocks.push(id)
    if (checkWinner(turn)) {
      turn.score++;
      updateScore();
      displayWinner();
    } else {
      turn = turn === X ? O : X
    }
  }
}

//shows winning line, displays winner, button for new game
function displayWinner() {
  let winnerContainer = document.getElementById('winner');
  let winner = document.createElement('div');
  let newGame = document.createElement('button')
  winnerContainer.innerHTML = `PLAYER ${turn === X ? 'X WINS' : 'O WINS'}`;
  winnerContainer.appendChild(winner);
  document.getElementById('display').style.display = 'block';
}

//updates score
function updateScore() {
  var scoreX = document.createElement('div');
  scoreX.setAttribute('class', 'score');
  var scoreO = document.createElement('div');
  scoreO.setAttribute('class', 'score');
  scoreX.innerHTML = `Player X: ${X.score}`;
  scoreO.innerHTML = `Player O: ${O.score}`;
  document.getElementById('scoreboard').innerHTML = '';
  document.getElementById('scoreboard').append(scoreX);
  document.getElementById('scoreboard').append(scoreO);
}


//detects winner
function checkWinner(player) {
  console.log(player.blocks)
  for(let i = 0; i < winningBoard.length; i++) {
    if (winningBoard[i].every((val) => player.blocks.includes(val))) {
      return true;
    }
  }
  return false;
}

function newGame() {
  createBoard();
  X.blocks = [];
  O.blocks = [];
  turn = X;
  document.getElementById('display').style.display = 'none'
}
