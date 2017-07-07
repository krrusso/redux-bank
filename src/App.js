import React, { Component } from "react";
import store, { deposit, withdraw } from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { balance: store.getState().balance };

    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ balance: store.getState().balance });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDeposit() {
    store.dispatch(deposit(+this.amount.value));
    this.amount.value = "";
  }

  handleWithdraw() {
    store.dispatch(withdraw(+this.amount.value));
    this.amount.value = "";
  }

  render() {
    return (
      <div>
        <header className="header">
          <img src={process.env.PUBLIC_URL + "/logo.svg"} width="150" alt="ReduxBank" />
          <br />Redux Bank
        </header>
        <br />
        <h1>
          Your balance is {this.state.balance.toFixed(2)}
        </h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref={input => (this.amount = input)} />
          <br />
          <button onClick={this.handleWithdraw}>Withdraw</button>
          <button onClick={this.handleDeposit}>Deposit</button>
        </div>
      </div>
    );
  }
}

export default App;
