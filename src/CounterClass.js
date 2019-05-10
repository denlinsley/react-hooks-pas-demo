import React from "react";

class CounterClass extends React.Component {
  state = {
    count: 0,
    name: "You"
  };

  componentDidMount() {
    document.title = `${this.state.name} clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `${this.state.name} clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <p>
          {this.state.name} clicked {this.state.count} times
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default CounterClass;
