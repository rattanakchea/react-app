import React, { useState } from "react";


function Counter() {
    const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(number + 1);
    };

    // jsx
    return (
        <div>
            <h3>Counter: {number}</h3>

            <button onClick={addNumber}>Add a number</button>
        </div>
    )
}

export default Counter;