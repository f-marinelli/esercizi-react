import React from 'react';

export class Login extends React.Component {
  state = {
    name: '',
    password: '',
    remember: false,
  };

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleButton = () => {
    this.props.onLogin(this.state);
  };

  handlerReset = () => {
    this.setState({
      name: '',
      password: '',
      remember: false,
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
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></input>
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleChange}
        ></input>
        <button
          type="button"
          onClick={this.handleButton}
          disabled={!this.state.name || !this.state.password}
        >
          Login
        </button>
        <button type="button" onClick={this.handlerReset}>
          Reset
        </button>
      </>
    );
  }
}
