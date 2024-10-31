import { useState } from "react";
import Component1 from "./components/Component1";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = (amount) => {
    setCounter(counter + amount);
  };

  const decrement = (amount) => {
    setCounter(counter - amount);
  };

  return (
    <div>
      <h1>App</h1>
      <Component1
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default App;
