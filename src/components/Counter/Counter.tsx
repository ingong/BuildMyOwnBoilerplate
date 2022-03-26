// Counter.js
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
