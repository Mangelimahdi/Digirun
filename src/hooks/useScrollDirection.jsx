import { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 10;
const useScrollDirection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0)
    const ticking = useRef(false);

    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50) {
                setIsVisible(true)
            } else {
                const difference = currentScrollY - lastScrollY.current;

                if (Math.abs(difference) > SCROLL_THRESHOLD) {
                    if (difference > 0) {
                        setIsVisible(false)
                    } else {
                        setIsVisible(true)
                    }
                    lastScrollY.current = currentScrollY;
                }
            }
            ticking.current = false;
        }

        const handlerScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    updateScrollDirection();
                })
            }
            ticking.current = true
        }

        window.addEventListener('scroll', handlerScroll, {
            passive: true
        })

        return () => window.addEventListener('scroll', handlerScroll);

    }, []);
    return isVisible;
}
export default useScrollDirection;





