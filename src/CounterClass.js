import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
    name: "You"
  };

  componentDidMount() {
    document.title = `${this.state.name} clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `${this.state.name} clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
