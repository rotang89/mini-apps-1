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

var winningLine = [];

const imageX = 'https://ca.slack-edge.com/T019CF39AMN-U0188278ULX-8680e1349f0e-512'
const imageO = 'https://ca.slack-edge.com/T019CF39AMN-U018G2K23N2-12d21d9ce236-512'

//creates empty board
function createBoard() {
  document.getElementById('turn').innerHTML = `TURN: ${turn===X ? 'Michael' : 'Josef'}`
  let board = document.getElementById('gameContainer')
  board.innerHTML = '';
  for (let i=1; i<10; i++) {
    let block = document.createElement('span');
    block.setAttribute('id', i);
    block.setAttribute('class', 'block');
    block.addEventListener("click", makeMove);
    board.appendChild(block);
  }
}

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
    } else if (checkDraw()) {
      displayDraw();
    } else {
      turn = turn === X ? O : X
    }
    document.getElementById('turn').innerHTML = `TURN: ${turn===X ? 'Michael' : 'Josef'}`
  }
}

//shows Draw, button for new game
function displayDraw() {
  document.getElementById('winner').innerHTML = 'DRAW'
  document.getElementById('display').style.display = 'block';
}

//shows winning line, displays winner, button for new game
function displayWinner() {
  //remove event listener from board, highlight winning line
  let blocks = document.getElementsByClassName('block');
  for (let block of blocks) {
    block.removeEventListener("click", makeMove)
  }
  for (let i = 0; i < winningLine.length; i++) {
    document.getElementById(winningLine[i].toString()).style.border = '5px blue dashed'
  }

  //show winner on bottom of page
  let winnerContainer = document.getElementById('winner');
  let winner = document.createElement('div');
  winnerContainer.innerHTML = `${turn === X ? 'Michael WINS' : 'Josef WINS'}`;
  winnerContainer.appendChild(winner);
  document.getElementById('display').style.display = 'block';
}

//updates score
function updateScore() {
  let scoreX = document.createElement('div');
  scoreX.setAttribute('class', 'score');
  let scoreO = document.createElement('div');
  scoreO.setAttribute('class', 'score');
  scoreX.innerHTML = `Michael: ${X.score}`;
  scoreO.innerHTML = `Josef: ${O.score}`;
  document.getElementById('scoreboard').innerHTML = '';
  document.getElementById('scoreboard').append(scoreX);
  document.getElementById('scoreboard').append(scoreO);
}

//detects draw
function checkDraw() {
  for(let i = 1; i <= 9; i++) {
    if (!document.getElementById(i.toString()).style.backgroundImage) {
      return false;
    }
  }
  console.log('draw')
  return true;
}

//detects winner
function checkWinner(player) {
  console.log(player.blocks)
  for(let i = 0; i < winningBoard.length; i++) {
    if (winningBoard[i].every((val) => player.blocks.includes(val))) {
      winningLine = winningBoard[i]
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

createBoard()
updateScore()