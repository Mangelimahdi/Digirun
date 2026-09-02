import React, { useEffect, useState } from 'react'

const useCountDown = (duration = 120) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const restart = (newDuration = duration) => {
        setTimeLeft(newDuration);
        setIsRunning(true)
    }

    const getFormattedTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    return {
        timeLeft,
        isRunning,
        isExpired: timeLeft === 0,
        restart,
        getFormattedTime
    }
}

export default useCountDown