import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = (e) => {
    this.setState((state) => ({ [e.target.name]: state[e.target.name] + 1 }));
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map((name) => (
          <button
            type="button"
            name={name}
            key={name}
            onClick={this.handleClickButton}
          >
            {name}
          </button>
        ))}

        {/* <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button> */}
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </>
    );
  }
}

export default App;
