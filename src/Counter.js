import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("You");

  useEffect(() => {
    document.title = `${name} clicked ${count} times`;
  });

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
