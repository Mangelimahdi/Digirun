import React from 'react'
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const Sort = ({isOpen ,onClose}) => {
    return (
        <>
            <Desktop />
            <Mobile isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default Sort