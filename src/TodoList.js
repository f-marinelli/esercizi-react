import React from 'react';

export class TodoList extends React.Component {
  state = {
    items: [],
    todo: '',
  };

  handleAddItem = () => {
    this.setState((prevState) => {
      return { items: [...prevState.items, this.state.todo] };
    });
    this.setState({ todo: '' });
  };

  handleInputChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleReset = (e) => {
    this.setState({ items: [] });
  };

  handleRemove = (i) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((_, index) => i !== index),
      };
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              <h2>{item}</h2>
              <button type="button" onClick={this.handleRemove.bind(this, i)}>
                Remove item
              </button>
            </li>
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
        <button type="button" onClick={this.handleReset}>
          Reset Items
        </button>
      </>
    );
  }
}
