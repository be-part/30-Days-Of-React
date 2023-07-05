// Exercise 4 - Level 2

// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = function (array) {
    array.forEach((item) => {
        console.log(item)
    })
}

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const currentDate = new Date()

formatDateTime = function () {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() 
    const day = currentDate.getDate()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    let formatDay = day
    let formatMonth = month

    if (day < 10) {
        formatDay = `0${day}`
    }

    if (month < 10) {
        formatMonth = `0${month}`
    }

    console.log(`${formatDay}/${formatMonth}/${year} ${hours}:${minutes}`)
}

// 4. Declare a function name swapValues. This function swaps value of x to y.

const swapValues = function (x, y) {
    console.log('x' = y, 'y' = x)
}

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = function (array) {
    for (let i = array.length-1; i !== 0; i--) {
            console.log(array[i])
    }
}


// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// 10. Write a function which takes any number of arguments and return the sum of the arguments

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.