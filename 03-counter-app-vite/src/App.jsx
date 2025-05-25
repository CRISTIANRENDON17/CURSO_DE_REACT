import { useState } from "react";
import FirstApp from "./FirstApp.jsx";
import CounterApp from "./CounterApp.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <FirstApp title="Hola desde App" />
    <CounterApp />
    </div>
  );    
}


export default App;