import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Component3() {
  const { counter, increment, decrement } = useContext(GlobalContext);

  return (
    <div className="component-3">
      <h3>Component3</h3>
      <h3 className="counter">{counter}</h3>
      <div>
        <button onClick={() => increment(5)}>+</button>
        <button onClick={() => decrement(2)}>-</button>
      </div>
    </div>
  );
}

export default Component3;
