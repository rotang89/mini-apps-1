//creates empty board
var turnX = true;
var scoreX = 0;
var scoreO = 0;

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

//places X or O on clicked block
function makeMove() {
  if (!this.style.backgroundImage) {
    this.style.backgroundImage = (`url(${turnX ? imageX : imageO})`);
    this.style.backgroundSize = '200px 200px'
    turnX = !turnX
  }
}



function newGame() {
  createBoard();
  turnX = true;
}
