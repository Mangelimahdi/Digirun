import { useEffect, useState } from 'react'

const useInitialLoader = (duration = 500) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, duration)
    }, [duration])


    return isLoading;
}

export default useInitialLoader