import allProducts from '../data/products'
const SALES_COUNT = 510;

const searchProducts = (value) => {
    const query = value.trim().toLowerCase();
    return allProducts.filter((product) => product.title.toLowerCase().includes(query));
}

const getPopularProducts = (limit = 5) => {
    return allProducts
        .filter((product) => product.salesCount > SALES_COUNT)
        .slice(0, limit);
}

export {
    searchProducts,
    getPopularProducts,
}