import useLocalStorage from './useLocalStorage'

const useFavorites = (productId) => {
    const { state, setValue } = useLocalStorage('favorites', []);

    const addFavorite = () => {
        setValue((prev) => {
            if (prev.includes(productId)) {
                return prev
            }
            return [...prev, productId]
        });
    }
    const removeFavorite = () => {
        setValue((prev) => prev.filter((id) => id !== productId));
    }

    const isFavorite = () => {
        return state.includes(productId)
    }

    const toggleFavorite = () => {
        const favorite = isFavorite();
        if (favorite) {
            removeFavorite();
        } else {
            addFavorite()
        }
    }

    return {
        toggleFavorite,
        isFavorite
    }
}

export default useFavorites