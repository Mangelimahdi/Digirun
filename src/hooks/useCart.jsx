import useLocalStorage from './useLocalStorage';
import { clampCount, parseCountInput } from '../utils/count';
import { useContext } from 'react';
import CartContext from '../Contexts/CartContext';


const useCart = () => {
   const context=useContext(CartContext);
return context
}

export default useCart