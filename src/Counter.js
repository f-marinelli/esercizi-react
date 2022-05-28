import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementValue,
        };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}
