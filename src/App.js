import React, { Component } from "react";
import "./App.css";

import Counter from "./Counter";
import CounterClass from "./CounterClass";
import SignUpForm from "./SignUpForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Counter /> */}
          {/* <CounterClass /> */}
          <SignUpForm />
        </header>
      </div>
    );
  }
}

export default App;
