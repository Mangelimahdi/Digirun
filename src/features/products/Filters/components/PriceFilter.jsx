import React, { useRef, useState } from 'react';
import useToggle from '../../../../hooks/useToggle';
import { FaAngleLeft } from 'react-icons/fa6';
import AccordionItem from '../../../../components/common/Accordion/AccordionItem';
import clsx from 'clsx';
import usePriceRange from '../../../../hooks/usePriceRange';

const PriceFilter = () => {
    const { state: isOpen, toggle } = useToggle(false);
    const {
        MAX_PRICE,
        minRange,
        maxRange,
        trackRef,
        left,
        right,
        trackHandler,
        minRangeHandler,
        maxRangeHandler,
    } = usePriceRange()

    const trigger = (isOpen) => (
        <>
            <span className='text-gray-400 dark:text-gray-400 text-base'>محدوده قیمت</span>
            <FaAngleLeft className={clsx('transition-transform duration-300',
                isOpen ? "-rotate-90" : "rotate-0"
            )} />
        </>
    )
    const content = (
        <div className='w-full py-2' dir='ltr'>
            <div className='w-full relative h-1.25 bg-gray-200 rounded-lg' ref={trackRef} onClick={trackHandler}>
                <div style={{
                    left: `${left}%`,
                    right: `${right}%`
                }} className='absolute h-full bg-primary-300 rounded-lg top-0'></div>
            </div>
            <div className='range-inputs-container'>
                <input type="range" className='range-input' min={0} max={MAX_PRICE} value={minRange} onChange={minRangeHandler} />
                <input type="range" className='range-input' min={0} max={MAX_PRICE} value={maxRange} onChange={maxRangeHandler} />
            </div>
            <div className='flex mt-2 items-center justify-between *:flex *:items-center *:gap-1 text-gray-400'>
                <div>
                    <span>{minRange.toLocaleString('fa')}</span>
                    <p>تومان</p>
                </div>
                <div>
                    <span>{maxRange.toLocaleString('fa')}</span>
                    <p>تومان</p>
                </div>
            </div>
        </div>
    )
    return (
        <AccordionItem
            level={-1}
            trigger={trigger}
            content={content}
            isOpen={isOpen}
            onToggle={toggle}
        />
    )
}

export default PriceFilter