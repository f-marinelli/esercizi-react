import React from 'react';

export class UncontrolledLogin extends React.Component {
  state = {
    name: '',
    password: '',
    remember: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    this.setState(
      {
        name: formData.get('name'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on' ? true : false,
      },
      () => {
        this.props.onLogin(this.state);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" />
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
