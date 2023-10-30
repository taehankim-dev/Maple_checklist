import { useState } from 'react';

export function Counting() {
  const [count, setCount] = useState<number>(0);
  
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  }

  const onDecrease = () => {
    setCount((prev) => prev - 1);
  }

  return(
    <>
      <span data-testid="count-display">{count}</span>
      <button data-testid="increment-button" type="button" onClick={onIncrease}>+1</button>
      <button data-testid="decrement-button" type="button" onClick={onDecrease}>-1</button>
    </>
  )
}