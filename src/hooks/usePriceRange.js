import { useRef, useState } from 'react'

const priceGap = 1000;
const MAX_PRICE = 100_000_000;

const usePriceRange = () => {
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(50000000);

    const trackRef = useRef();

    const trackHandler = (event) => {
        const rect = trackRef.current.getBoundingClientRect();
        const clickPosition = event.clientX - rect.left
        const clickedPrice = Math.floor((clickPosition / rect.width) * MAX_PRICE);
        const distanceToMin = Math.abs(clickedPrice - minRange);
        const distanceToMax = Math.abs(clickedPrice - maxRange);

        if (distanceToMin < distanceToMax) {
            updateMinRange(clickedPrice);
        }
        else {
            updateMaxRange(clickedPrice);
        }
    }

    const updateMinRange = (value) => {
        let newMinValue = value;
        if ((maxRange - newMinValue) < priceGap) {
            newMinValue = maxRange - priceGap;
        }
        setMinRange(newMinValue)
    }

    const updateMaxRange = (value) => {
        let newMaxValue = value;
        if ((newMaxValue - minRange) < priceGap) {
            newMaxValue = minRange + priceGap;
        }
        setMaxRange(newMaxValue)
    }

    const minRangeHandler = (event) => {
        updateMinRange(Number(event.target.value));
    }

    const maxRangeHandler = (event) => {
        updateMaxRange(Number(event.target.value));
    }

    const left = (minRange / MAX_PRICE) * 100;
    const right = 100 - (maxRange / MAX_PRICE) * 100;

    return {
        MAX_PRICE,
        minRange,
        maxRange,
        trackRef,
        left,
        right,
        trackHandler,
        minRangeHandler,
        maxRangeHandler,
    }

}


export default usePriceRange