var info = {}

class App extends React.Component {

handleCheckout(event) {
  //go to first form
  ReactDOM.render(<Form1/>, document.getElementById('app'))
}

  render() {
    return (
      <div>
        <button onClick={this.handleCheckout.bind(this)}>CHECK OUT</button>
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

  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    //add state info
    //go to next form
    info = {...info, ...this.state}
    ReactDOM.render(<Form2/>, document.getElementById('app'))
  }


  render() {
    return (
    <div>
      Name:
      <input type='text' value={this.state.name} onChange={this.handleName.bind(this)}></input>
      Password:
      <input type='text' value={this.state.password} onChange={this.handlePassword.bind(this)}></input>
      <button onClick={this.handleSubmit.bind(this)}>NEXT</button>
    </div>
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
    //add state info
    //go to next form
    info = {...info, ...this.state}
    ReactDOM.render(<Form3/>, document.getElementById('app'))
  }

  render() {
    return (
    <div>
      <b>Address</b>
      <div>Line 1</div>
      <input type='text' value={this.state.line1} onChange={this.handleLine1.bind(this)}></input>
      <div>Line 2</div>
      <input type='text' value={this.state.line2} onChange={this.handleLine2.bind(this)}></input>
      <div>City</div>
      <input type='text' value={this.state.city} onChange={this.handleCity.bind(this)}></input>
      <div>State</div>
      <input type='text' value={this.state.state} onChange={this.handleState.bind(this)}></input>
      <div>Zip Code</div>
      <input type='text' value={this.state.zipCode} onChange={this.handleZipCode.bind(this)}></input>
      <br></br><br></br>
      <b>Phone Number:</b>
      <br></br>
      <input type='text' value={this.state.phoneNumber} onChange={this.handlePhoneNumber.bind(this)}></input>
      <button onClick={this.handleSubmit.bind(this)}>NEXT</button>
    </div>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creditCardNumber: '',
      expirationDate: '',
      CVV: '',
      billingZipCode: ''
    }
  }

  handleCreditCard(event) {
    this.setState({
      creditCardNumber: event.target.value
    })
  }

  handleExpirationDate(event) {
    this.setState({
      expirationDate: event.target.value
    })
  }

  handleCVV(event) {
    this.setState({
      CVV: event.target.value
    })
  }

  handleBillingZipCode(event) {
    this.setState({
      billingZipCode: event.target.value
    })
  }

  handleSubmit(event) {
    //add state info
    //go to confirmation
    info = {...info, ...this.state}
    ReactDOM.render(<Summary/>, document.getElementById('app'))

  }

  render() {
    return (
    <div>
      Credit Card #
      <input type='text' value={this.state.name} onChange={this.handleCreditCard.bind(this)}></input><br></br>
      Expiration Date
      <input type='text' value={this.state.password} onChange={this.handleExpirationDate.bind(this)}></input><br></br>
      CVV
      <input type='text' value={this.state.password} onChange={this.handleCVV.bind(this)}></input><br></br>
      Billing Zip Code
      <input type='text' value={this.state.password} onChange={this.handleBillingZipCode.bind(this)}></input>
      <button onClick={this.handleSubmit.bind(this)}>NEXT</button>
    </div>
    )
  }
}

class Summary extends React.Component {
constructor(props) {
  super(props);
}

submit(event) {
  console.log(info)
  axios.post('/', info)
  .then(function (response) {
    ReactDOM.render(<App/>, document.getElementById('app'))
  })
  .catch(function(error) {
    console.log(error)
  })
}

  render() {
    return (
      <div>
        <div>summary</div>
        <button onClick={this.submit.bind(this)}>Confirm</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
