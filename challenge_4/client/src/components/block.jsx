const React = require('react')

class Block extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='block'>
        <div>block</div>
      </div>
    )
  }
}

module.exports = Block;