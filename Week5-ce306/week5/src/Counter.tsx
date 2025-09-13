import React, { useState } from "react";

interface CounterPops {
    initialCount?: number;
}

const Counter: React.FC<CounterPops> = ({ initialCount = 0 }) => {

    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const reset = () => {
        setCount(0)
    };


    return (
        <div style={{
            padding: '20px',
            textAlign: 'center',
                
        }}>
            <h2>Counter Exercise - Solution </h2>
            <h1>{count}</h1>

         <div style={{
            margin: "20px 0",
            display: "flex",
            gap: "20px",
         }}>
            <button onClick={increment} style={{ backgroundColor: 'green' }}> + Increment</button>
            <button onClick={decrement} style={{ backgroundColor: 'red' }}> - Decrement</button>
            <button onClick={reset} style={{ backgroundColor: 'orange' }}>Reset</button>
         </div>
        </div>
    )
};
export default Counter;