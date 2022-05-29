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
          value={this.state.remember}
          onChange={this.handleChange}
        ></input>
        <button
          type="button"
          onClick={this.handleButton}
          disabled={!this.state.name || !this.state.password}
          className={this.state.password.length < 8 ? 'bg-red' : ''}
        >
          Login
        </button>
      </>
    );
  }
}
