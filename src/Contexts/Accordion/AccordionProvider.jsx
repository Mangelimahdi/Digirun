import React, { useState } from 'react'
import AccordionContext from './AccordionContext';


const AccordionProvider = ({ children }) => {
    const [openMap, setOpenMap] = useState({});

    const isOpen = (parentId, id) => {
        return openMap[parentId] === id;
    }

    const toggle = (parentId, id) => {
        setOpenMap(prev => ({
            ...prev,
            [parentId]:
                prev[parentId] === id
                    ? null
                    : id
        }))
    }

    return (
        <AccordionContext value={{
            isOpen,
            toggle,
            openMap
        }}>
            {children}
        </AccordionContext>
    )
}

export default AccordionProvider