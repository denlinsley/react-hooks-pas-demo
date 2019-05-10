import React, { Component } from "react";
import "./App.css";

import Counter from "./Counter";
import CounterClass from "./CounterClass";
import Todos from "./Todos";
import SignUpForm from "./SignUpForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <pre>Counter</pre>
        <Counter />
        <hr />
        <pre>CounterClass</pre>
        <CounterClass />
        <hr />
        <pre>Todos</pre>
        <Todos />
        <hr />
        <pre>SignupForm</pre>
        <SignUpForm />
      </div>
    );
  }
}

export default App;
