import React from 'react';

export class TodoList extends React.Component {
  state = {
    items: [],
    todo: '',
  };

  handleAddItem = () => {
    this.state.items.push(this.state.todo);
    this.setState({ todo: '' });
  };

  handleInputChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="todo"
          value={this.state.todo}
        />
        <button type="button" onClick={this.handleAddItem}>
          Add Item
        </button>
      </>
    );
  }
}
