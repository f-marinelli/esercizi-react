import React from 'react';

export class ClickTracker extends React.Component {
  state = {
    track: 0,
  };

  handleTrack = (e) => {
    this.setState({
      track: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Last Button Clicked: {this.state.track}</h1>
        <button onClick={this.handleTrack} value={1}>
          1
        </button>
        <button onClick={this.handleTrack} value={2}>
          2
        </button>
        <button onClick={this.handleTrack} value={3}>
          3
        </button>
      </>
    );
  }
}
