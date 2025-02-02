import { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  function handleDecrease() {
    setCounter((counter) => counter - 1);
  }
  function handleIncrease() {
    setCounter((counter) => counter +1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="bg-container">
      <div className="container">
        <p>Number:{counter}</p>
        <div className="btn-container">
          <button className="decrease" onClick={handleDecrease}>
            -
          </button>
          <button className="increase" onClick={handleIncrease}>
            +
          </button>
          <button onClick={handleReset} className="btn-reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
