import React from 'react';

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  interval = setInterval(() => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementValue,
      };
    });
  }, this.props.incrementInterval);

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
