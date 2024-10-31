import Component2 from "./Component2";

function Component1({ counter, increment, decrement }) {
  return (
    <div>
      <h2>Component1 </h2>
      <Component2
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default Component1;
