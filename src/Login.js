import React from 'react';

export class Login extends React.Component {
  state = {
    name: '',
    password: '',
    remember: false,
  };

  render() {
    return (
      <>
        <input type="text" name="name" value={this.state.name}></input>
        <input
          type="password"
          name="password"
          value={this.state.password}
        ></input>
        <input
          type="checkbox"
          name="remember"
          value={this.state.remember}
        ></input>
      </>
    );
  }
}
