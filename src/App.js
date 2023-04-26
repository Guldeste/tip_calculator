
import React from "react";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bill: "",
      service: "",
      people: "",
      result: "",

      // value: '',
      // msg: 'No messages to show'
      // name: '',
      // surname: ''
    };
  }

  // showMsg = () => {
  //   this.setState({msg: this.state.value.toUpperCase(), value: ''})
  // }

  render() {
    const perPerson = Number(this.state.bill) / 100;
    const tips = Number(this.state.service) * perPerson;
    const numPeople = tips / Number(this.state.people);

    return (
      <div className="App">
        <h1>Tip Calculator</h1>

        <p>How much was your bill?</p>
        <input
          value={this.state.bill}
          onChange={(event) => this.setState({ bill: event.target.value })}
        />

        <p>How was your service?</p>
        <select
          onChange={(event) => this.setState({ service: event.target.value })}
        >
          <option value="option">Choose an option</option>
          <option value="30">30% outstanding</option>
          <option value="20">20% good</option>
          <option value="15">15% It was OK</option>
          <option value="10">10% Bad</option>
          <option value="5">5% Terrible</option>
        </select>

        <p>How many people are sharing the bill?</p>
        <input
          value={this.state.people}
          onChange={(event) => this.setState({ people: event.target.value })}
        />
        <br></br>

        <button onClick={() => this.setState({ result: numPeople })}>
          CALCULATE!
        </button>

        <div>Tip amount</div>
        <p>
          {" "}
          ${this.state.result} <br></br>per person{" "}
        </p>

        {/* <h1>A message You'd Like to Pass</h1>
        <input
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />

        <button onClick={this.showMsg}>Submit</button>
        <h3>Last Message Submitted</h3>
        <p>{this.state.msg}</p> */}

        {/* <label>
          Name:
          <input value={this.state.name} onChange={(event)=> this.setState({name:event.target.value})
          } />
        </label>
        <label>
          surname:
          <input value={this.state.surname} onChange={(event)=> this.setState({surname:event.target.value})
          }/>
        </label> */}
      </div>
    );
  }
}

export default App;
