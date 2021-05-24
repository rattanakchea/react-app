import React, { useState } from "react";


function Counter() {
    const [number, setNumber] = useState(0);

    // jsx
    return (
        <div>
            <h3>Counter: {number}</h3>
        </div>
    )
}

export default Counter;