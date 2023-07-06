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
    console.log(`x = ${y}, y = ${x}`)
}

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = function (array) {
    if (array.length === 0 ) {
        console.log([])
    }

    for (let i = array.length-1; i !== -1; i--) {
            console.log(array[i])
    }
}


// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = function (array) {
    const newArray = []
    array.forEach((word) => {
        const capitalised = word[0].toUpperCase() + word.slice(1)

        newArray.push(capitalised)
    })
    console.log(newArray)
}


// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = function (item) {
    const itemsArray = ['orange', 'apple', 'blueberry']
    itemsArray.push(item)
    console.log(itemsArray)
}

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

const removeItem = function (index) {
    const itemsArray = ['orange', 'apple', 'blueberry']
    itemsArray.splice(index, 1)
    console.log(itemsArray)
}


// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = function (integer) {
    let odds = 0
    let evens = 0

    const integerString = integer.toString()
    const integerArray = integerString.split('')
    for (let i = 0; i < integerArray.length; i++) {
       if (integerArray[i]%2 === 0) {
        evens++
       } else {odds++}
    }
    console.log("odds: " + odds + " evens: " + evens)
}


// 10. Write a function which takes any number of arguments and return the sum of the arguments

const sum = function(...arguments) {
    const numArray = Array.from(arguments)

    let total = 0
    for (let i =0; i < numArray.length; i++) {
        total += numArray[i]
    }
    console.log(total)
}


// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

const userIdGenerator = function () {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 7) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    console.log(result)
}