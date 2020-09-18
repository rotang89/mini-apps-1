const React = require('react')
const Game = require('./game.jsx')

class App extends React.Component {
  render() {
  return (
    <div>
      <h1>Connect Four</h1>
      <Game />
    </div>
  )}
}

module.exports = App
