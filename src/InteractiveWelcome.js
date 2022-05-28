import React from 'react';
import { Welcome } from './Welcome';

export class InteractiveWelcome extends React.Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <Welcome name={this.state.name} />
      </>
    );
  }
}
