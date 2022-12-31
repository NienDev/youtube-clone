import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
  });
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
