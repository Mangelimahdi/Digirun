import { useContext } from 'react'
import AccordionContext from '../Contexts/Accordion/AccordionContext'

const useAccordion = () => {
  return useContext(AccordionContext);
}

export default useAccordion