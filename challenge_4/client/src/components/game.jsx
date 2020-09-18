const React = require('react')
const Block = require('./block.jsx')

// class Game extends React.Component {

//   render() {
//     return (
//       <div className='game'>
//         <Block/>
//       </div>
//     )
//   }
// }

function Game() {
  const board = []
  for (let i = 0; i < 42; i++) {
    board.push(i)
  }

  return (
    <div className='game'>
      {board.map((x) => <Block/>)}
  </div>
  )
}

module.exports = Game;