import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("You");
  const [doNothing, setDoNothing] = useState(true);

  useEffect(() => {
    document.title = `${name} clicked ${count} times`;
  });

  return (
    <div>
      <input value={name} onChange={event => setName(event.target.value)} />
      <p>
        {name} clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setDoNothing(!doNothing)}>Do nothing</button>
    </div>
  );
}

export default Counter;
