import React from 'react'
import generateSummaries from '../../../utils/panel'

const Summaries = () => {
    const summaries = generateSummaries({
        wallet: 30000,
        productsLength: 3,
        ticketsLength: 3,
    });

    return (
        <>
            {
                summaries.map((summary) => (
                    <div key={summary.id} className='flex items-center gap-x-3 xl:gap-6 w-full xl:w-1/3 shadow-100 p-4 rounded-lg dark:bg-dark-100 bg-white'>
                        <summary.Icon className='text-xl lg:text-2xl xl:text-4xl text-primary-300' />
                        <div className='flex flex-col items-center gap-y-2 *:text-gray-400 *:dark:text-gray-500 *:text-sm xl:*:text-base'>
                            <span>{summary.title}</span>
                            <span>{summary.value}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Summaries