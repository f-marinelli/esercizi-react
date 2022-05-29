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
        {this.props.render(this.state.items, this.handleRemove)}
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
