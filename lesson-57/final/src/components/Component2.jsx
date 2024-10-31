import Component3 from "./Component3";

function Component2({ counter, increment, decrement }) {
  return (
    <div>
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
