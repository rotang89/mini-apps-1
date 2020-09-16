class App extends React.Component {
constructor(props){
  super(props)

  this.handleCheckout = this.handleCheckout.bind(this)
}
handleCheckout(event) {
  //go to first form
}

  render() {
    return (
      <div>
        <button onClick={this.handleCheckout}>CHECK OUT</button>
      </div>
    )
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name)
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }

  handleSubmit(event) {
    //add state info to database
    //go to next form
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type='text' value={this.state.name} onChange={this.handleName}></input>
        Password:
        <input type='text' value={this.state.password} onChange={this.handlePassword}></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    }

    this.handleLine1 = this.handleLine1.bind(this);
    this.handleLine2 = this.handleLine2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZipCode = this.handleZipCode.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleLine1(event) {
    this.setState({
      line1: event.target.value
    })
  }

  handleLine2(event) {
    this.setState({
      line2: event.target.value
    })
  }

  handleCity(event) {
    this.setState({
      city: event.target.value
    })
  }

  handleState(event) {
    this.setState({
      state: event.target.value
    })
  }

  handleZipCode(event) {
    this.setState({
      zipCode: event.target.value
    })
  }

  handlePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    })
  }

  handleSubmit(event) {
    //add state info to database
    //go to next form
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        <b>Address</b>
        <div>Line 1</div>
        <input type='text' value={this.state.line1} onChange={this.handleLine1}></input>
        <div>Line 2</div>
        <input type='text' value={this.state.line2} onChange={this.handleLine2}></input>
        <div>City</div>
        <input type='text' value={this.state.city} onChange={this.handleCity}></input>
        <div>State</div>
        <input type='text' value={this.state.state} onChange={this.handleState}></input>
        <div>Zip Code</div>
        <input type='text' value={this.state.zipCode} onChange={this.handleZipCode}></input>
        <br></br><br></br>
        <b>Phone Number:</b>
        <br></br>
        <input type='text' value={this.state.phoneNumber} onChange={this.handlePhoneNumber}></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
    )
  }
}

ReactDOM.render(<Form2/>, document.getElementById('app'))