import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value ? value : defaultValue;
        } catch (error) {
            console.log("Error Reading LocalStorage key:", key, error);
            return defaultValue;
        }
    });

    const setValue = (value) => {
        try {
            setState(() => {
                const currentValue = JSON.parse(localStorage.getItem(key)) ?? defaultValue
                const newValue =
                    typeof value === "function"
                        ? value(currentValue)
                        : value;

                localStorage.setItem(key, JSON.stringify(newValue));
                return newValue
            });
        } catch (error) {
            console.log("Error Setting LocalStorage Key:", key, error)
        }
    }
    const removeValue = () => {
        localStorage.removeItem(key);
        setState(defaultValue)
    }

    return { state, setValue, removeValue }
}

export default useLocalStorage