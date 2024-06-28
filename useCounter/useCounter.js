import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, seCounter] = useState(initialValue)

    const increment = (value = 1) => {
        seCounter(counter + value);
    }

    const decrement = () => {
        if (counter === 0) return;
        seCounter(counter - 1);
    }

    const reset = () => {
        seCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}