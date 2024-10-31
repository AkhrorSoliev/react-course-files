import Component3 from "./Component3";

import { useContext } from "react";
import { GloablContext } from "../context/GlobalContext";

function Component2({ counter, increment, decrement }) {
  const data = useContext(GloablContext);
  console.log("data from c2: ", data.counter);
  return (
    <div className="container">
      <h2>Component2</h2>
      <Component3
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default Component2;
