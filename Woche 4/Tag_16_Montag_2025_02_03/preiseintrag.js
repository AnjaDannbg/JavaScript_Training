'use strict';

const getProductPrice = () => {
    const productPrice = Number(prompt('Please insert the product price.'));
    if (productPrice < 0) {
        console.log("A negative price could be disastrous for your company's health.");
        return getProductPrice();
    } else return productPrice;
}

console.log('$' + getProductPrice());