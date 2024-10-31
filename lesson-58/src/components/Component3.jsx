function Component3({ counter, increment, decrement }) {
  return (
    <div className="container">
      <h2>Component3 - {counter}</h2>
      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement(2)}>-</button>
    </div>
  );
}

export default Component3;
