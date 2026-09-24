
export const getProductPrice = (price = 0, discount) => {
    if (!discount?.active) {
        return {
            originalPrice: price,
            finalPrice: price,
            discountAmount: 0,
        }
    }

    const rawDiscount = discount.type === 'percentage'
        ? price * (discount.value / 100)
        : discount.value;

    const discountAmount = Math.min(Math.floor(rawDiscount), price);

    const finalPrice = price - discountAmount;

    return {
        originalPrice: price,
        finalPrice,
        discountAmount
    }
}
