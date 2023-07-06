// Exercise 5 - Level 1

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// 1. Print the price of each product using forEach

products.forEach((product) => {
    console.log(product.price)
})


// 2. Print the product items as follows using forEach
// "The price of banana is 3 euros."

products.forEach((product) => {
    console.log(`The price of a ${product.product} is ${product.price} euros.`)
})

// 3. Calculate the sum of all the prices using forEach

let total = 0;

products.forEach((product) => {
    total += Number(product.price)
})

console.log(total)

// 4. Create an array of prices using map and store it in a variable prices

const pricesArray = products.map((product) => {
    return product.price
})
console.log(pricesArray)

// 5. Filter products with prices

const pricesOnlyArray = products.filter((product) => {
    return product.price > 0
});
console.log(pricesOnlyArray);


// 6. Use method chaining to get the sum of the prices(map, filter, reduce)




// 7. Calculate the sum of all the prices using reduce only



// 8. Find the first product which doesn't have a price value



// 9. Find the index of the first product which does not have price value



// 10. Check if some products do not have a price value



// 11. Check if all the products have price value



// 12. Explain the difference between forEach, map, filter and reduce



// 13. Explain the difference between filter, find and findIndex



// 14. Explain the difference between some and every