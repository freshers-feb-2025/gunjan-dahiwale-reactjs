import React, {useState, useEffect} from 'react';
import useCounter from './hooks/Use-counter';

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0); 

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}

export default Counter;