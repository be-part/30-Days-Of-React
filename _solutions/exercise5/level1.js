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

const productPrices = function () {
products.forEach((product) => {
    console.log(product.price)
})
}


// 2. Print the product items as follows using forEach
// "The price of banana is 3 euros."

const productItems = function () {
products.forEach((product) => {
    console.log(`The price of a ${product.product} is ${product.price} euros.`)
})
}


// 3. Calculate the sum of all the prices using forEach

const sumOfAll = function () {

    let total = 0;

products.forEach((product) => {
    total += Number(product.price)
})

console.log(total)
}


// 4. Create an array of prices using map and store it in a variable prices

const makePricesArray = function () {
   const pricesArray = products.map((product) => {
    return product.price
})
console.log(pricesArray) 
}



// 5. Filter products with prices

const pricesOnly = function () {

    const pricesOnlyArray = products.filter((product) => {
    return product.price > 0
});
console.log(pricesOnlyArray);

}



// 6. Use method chaining to get the sum of the prices(map, filter, reduce)

const sumOfPrices = function () {
    
    const finalTotal = products.map((product) => {
        return Number(product.price)
    }).filter((item) => {
        return item > 0
    }).reduce((accumulator, currentValue) => accumulator + currentValue,
    0)

    console.log(finalTotal)
}


// 7. Calculate the sum of all the prices using reduce only

const sumOfPrices2 = function () {
    let total = 0;
    for (const product of products) {
      if (typeof product.price === 'string' && product.price === '') {
        continue;
      } else {
        total += Number(product.price);
      }
    }
  
    console.log(total);
};
  


// 8. Find the first product which doesn't have a price value

const findFirst = function () {

    for (const product in products) {
        if (typeof product.price === 'string'){
        console.log(product)
        break;
        }
    }

}


// 9. Find the index of the first product which does not have price value

const findFirstIndex = function () {
    for (let i = 0; i < products.length; i++) {
      if (typeof products[i].price === 'string') {
        console.log(i);
        break;
      }
    }
  };


// 10. Check if some products do not have a price value
// 11. Check if all the products have price value

const checkIfPrices = function () {

    const res = products.every((product)=> {return typeof product === 'number';});
    
    if (res) {
        console.log("All products have a price value.")
    } else {console.log("Some products do not have a price value.")}
    
}

// 12. Explain the difference between forEach, map, filter and reduce

/* 
forEach: 
 - calls a function for each element in an array
 - not executed for empty elements
 - returns undefined
 - forEach() doesn't mutate the array, but the callback function can

map:
 - calls a function for each element in the array
 - it will execute for empty elements, passing that empty value to the callback function
 - returns a new array
 - map() does not mutate the original array, nor does the callback function

filter:
 - calls a function for each element in the array
 - it will execute for empty elements, passing that empty value to the callback function
 - returns a shallow copy of a portion of an array that contains elements that when passed into the callback function,        returned a truthy value
 - filter() does not mutate the original array, nor does the callback function

reduce:
 - calls a reducer callback function on each element, passing in the return value from the calculation on the preceding element, till a single value
 - it does not execute on empty elements, and instead continues onto the next element in the array
 - returns a value from the finished result of the reducer function
 - reduce() does not mutate the array on which it is called, but the callback function can

*/

// 13. Explain the difference between filter, find and findIndex

/*
filter:
 - calls a function for each element in the array
 - it will execute for empty elements, passing that empty value to the callback function
 - returns a shallow copy of a portion of an array that contains elements that when passed into the callback function,        returned a truthy value
 - filter() does not mutate the original array, nor does the callback function

find: 
 - calls a function for each element in the array until an element satisfies the callback function
 - it will execute on empty elements
 - returns the first element that matches the callback function, or undefined if none satisfy the function
 - find() does not mutate the array on which it is called, but the callback function can

findIndex:
 - calls a function for each element in the array until an element satisfies the callback function
 - it will execute on empty elements
 - returns the index of the first element that matches the callback function, or -1 if none satisfy the function
 - findIndex() does not mutate the array on which it is called, but the callback function can

*/


// 14. Explain the difference between some and every

/*
some:
 - calls a function for each element in the array
 - it does not execute on empty elements and will continue onto next element in array
 - returns true if at least one element in the array satisfies the callback function, else returns false
 - some() does not mutate the array on which it is called, but the callback function can

every:
 - calls a function for each element in the array
 - if the array is empty, it returns true because the function is not called for any element in the array. If one element is empty, it returns false because the function could not be satisfied for every element in the array.
 - returns true if every element in the array satisfies the function, otherwise returns false
 - every() does not mutate the array on which it is called, but the callback function can

*/