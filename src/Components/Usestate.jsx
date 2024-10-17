import { useState } from "react";
import "./Usestate.css";

const Usestate = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
    
        <h1>Count: {count}</h1>
      <div className="container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Usestate;
