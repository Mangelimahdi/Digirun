import React from 'react'
import useLocalStorage from './useLocalStorage'
import { clampCount, parseCountInput } from '../utils/count';

const useCart = () => {
    const { state: cartItems, setValue: setCartItems } = useLocalStorage("cart", []);

    const getCartItem = (productId) => cartItems.find(product => product.id === productId);

    const addToCart = (productId, count, userId) => {
        // const product=products.find((product)=>product.id===)
        setCartItems((prevItems) => [...prevItems, { id: productId, count, userId }])
    }

    const changeItemCount = (productId, value) => {
        const parsed = parseCountInput(value);
        if (parsed === null) return;
        setCartItems((prevItems) => prevItems.map((item) => item.id === productId
            ? { ...item, count: parsed }
            : item
        ))
    }

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
    }

    const incrementCount = (productId) => {
        setCartItems((prevItems) => prevItems.map((item) => item.id === productId
            ? { ...item, count: clampCount(item.count + 1) }
            : item
        ))
    }

    const decrementCount = (productId) => {
        setCartItems((prevItems) => prevItems.map((item) => item.id === productId
            ? { ...item, count: clampCount(item.count - 1) }
            : item
        ))
    }

    const totalItemsCount = () => cartItems.reduce((sum, item) => sum + item.count, 0);

    return {
        cartItems,
        getCartItem,
        addToCart,
        changeItemCount,
        removeFromCart,
        incrementCount,
        decrementCount,
        totalItemsCount,
    }
}

export default useCart