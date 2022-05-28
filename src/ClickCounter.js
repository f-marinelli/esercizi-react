import React from 'react';

export class ClickCounter extends React.Component {
  state = {
    counter: 1,
  };

  handleIncrement = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}
