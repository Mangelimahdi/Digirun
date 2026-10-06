import React from 'react'
import CartContext from './CartContext'
import useLocalStorage from '../hooks/useLocalStorage';
import { clampCount } from '../utils/count';

const CartProvider = ({ children }) => {
    const { state: cartItems, setValue: setCartItems } = useLocalStorage("cart", []);

    const isSameCartItem = (item, productId, color) => item?.id === productId && item?.color?.name === color?.name;
    const getCartItem = (productId, color) => cartItems.find(item => isSameCartItem(item, productId, color));

    const addToCart = (productId, count, color) => {
        setCartItems((prevItems) => [...prevItems, { id: productId, count, color }])
    }

    const changeItemCount = (productId, color, value) => {
        const parsed = parseCountInput(value);
        if (parsed === null) return;
        setCartItems((prevItems) => prevItems.map((item) => isSameCartItem(item, productId, color)
            ? { ...item, count: parsed }
            : item
        ))
    }

    const removeFromCart = (productId, color) => {
        setCartItems((prevItems) => prevItems.filter(item => !isSameCartItem(item, productId, color)))
    }

    const incrementCount = (productId, color) => {
        setCartItems((prevItems) => prevItems.map((item) => isSameCartItem(item, productId, color)
            ? { ...item, count: clampCount(item.count + 1) }
            : item
        ))
    }

    const decrementCount = (productId, color) => {
        setCartItems((prevItems) => prevItems.map((item) => isSameCartItem(item, productId, color)
            ? { ...item, count: clampCount(item.count - 1) }
            : item
        ))
    }

    const totalItemsCount = cartItems.reduce((sum, item) => sum + item.count, 0);

    const value = {
        cartItems,
        getCartItem,
        addToCart,
        changeItemCount,
        removeFromCart,
        incrementCount,
        decrementCount,
        totalItemsCount,
    }

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    )
}

export default CartProvider