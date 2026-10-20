import { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
    const [debounced, setDebounced] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(timeout);
    }, [value])

    return debounced
}

export default useDebounce