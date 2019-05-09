import React, { Component } from "react";
import "./App.css";

import Counter from "./Counter";
import CounterClass from "./CounterClass";
import SignUpForm from "./SignUpForm";
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <CounterClass /> */}
        {/* <SignUpForm /> */}
        <Todos />
      </div>
    );
  }
}

export default App;
