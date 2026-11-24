
import React, { useState } from "react";

function App() {
  // Counter
  const [count, setCount] = useState(0);

  // Calculator
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Calculator</h2>
      <input type="number" onChange={e => setA(Number(e.target.value))} />
      <input type="number" onChange={e => setB(Number(e.target.value))} />

      <br />

      <button onClick={() => setResult(a + b)}>Add</button>
      <button onClick={() => setResult(a - b)}>Subtract</button>
      <button onClick={() => setResult(a * b)}>Multiply</button>
      <button onClick={() => setResult(b !== 0 ? a / b : "Cannot divide by zero")}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
