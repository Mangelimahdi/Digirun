
export const getProductPrice = (price, discount) => {
    if (!discount?.active) {
        return {
            originalPrice: price,
            finalPrice: price,
            discountAmount: 0,
        }
    }

    let discountAmount = 0

    if (discount.type === 'percentage') {
        discountAmount = price * (discount.value / 100);
    }

    if (discount.type === 'fixed') {
        discountAmount = discount.value;
    }

    const finalPrice = price - discountAmount;

    return {
        originalPrice: price,
        finalPrice,
        discountAmount
    }
}
