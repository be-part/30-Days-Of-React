// Exercise 4 - Level 3

// 1. Declare a function name userIdGeneratedByUser. One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

const userIdGeneratedByUser = function (characterPrompt, totalIdPrompt) {

    let total = 0;
    while (total < totalIdPrompt){
         let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let counter = 0;
        while (counter < characterPrompt) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
        }
        console.log(result)
        total += 1;
    }
}


// 2. Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = function (type, number) {

    const hexCharacters = '0123456789abcdef'


    if (type === 'hex') {
        let total = 0;
        while (total < number) {
            let result = ''
            let counter = 0;
            while (counter < 6) {
                result += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));
                counter +=1;
            }
            console.log("#" + result) 
            total +=1;
        }
        
    } else if (type === 'rgb') {
        let total = 0;
        while (total < number) {
            let resultArray = []
            let setOfThree = 0;

                while (setOfThree < 3) {
                    let counter = 0;
                    let result = ''
                     setLength = Math.ceil(Math.random() * 3)
                            while (counter < setLength) {
                            
                            result += Math.floor(Math.random() * 4);
                            counter +=1;
                            }
                        let parsedNumber = parseInt(result) 
                        resultArray.push(parsedNumber)
                        setOfThree +=1;
            
            }
            console.log("rgb(" + resultArray + ")") 
            total +=1;
        }
    }
}

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = function (arr) {
    const arrayLength = arr.length;
    const shuffledArray = Array(arrayLength);
    let emptySpace = arrayLength;

    while (emptySpace > 0) {
        for (let i = 0; i <= arr.length; i++) {
            let arrayIndex = Math.floor(Math.random() * arrayLength);
            if (shuffledArray[arrayIndex] === undefined && !shuffledArray.includes(arr[i])) {
                shuffledArray[arrayIndex] = arr[i];
                emptySpace -= 1;
            } 
        }
    }
    console.log(shuffledArray);
}


// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorialFunc = function (integer) {

    let total = integer
    let currentNumber = integer-1

    while (currentNumber > 0) {
       total *= currentNumber 
    currentNumber-=1; 
    }
    console.log(total)
}


// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = function (parameter) {
    if (!parameter) {
        console.log("Empty")
    } else { console.log("Not empty")}
}


// 6. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give reasonable feedback.

const averageFunc = function (arr) {

    var res = arr.every((element)=> {return typeof element === 'number';});
    let total = 0;

    if (!res) {
        console.log("Every item needs to be a number.")
    } else {
        arr.forEach((item) => {
            total += Number(item)
        })
        console.log(total/arr.length)
    }
}