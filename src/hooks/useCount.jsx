import React, { useState } from 'react'

const useCount = () => {
    const [count, setCount] = useState(1);

    const handlerIncrement = () => {
        setCount((prev) => Math.min(20, prev + 1));
    }

    const handlerDecrement = () => {
        setCount((prev) => Math.max(0, prev - 1));
    }

    const handleCountChange = (value) => {
        if (!/^[0-9]*$/.test(value)) return;

        if (value === "") {
            setCount(0);
            return
        }

        setCount(Math.min(20, Number(value)))
    }

    return {
        count,
        handlerIncrement,
        handlerDecrement,
        handleCountChange,
    }
}

export default useCount