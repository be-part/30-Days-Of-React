// Exercise 6 - Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, colour, species, legs = '4') {
            this.name = name
            this.age = age
            this.colour = colour
            this.species = species
            this.legs = legs
            }

        introduceSelf() {
            return `My name is ${this.name} and I am ${this.age} years old.`
            }
        makeNoise() {
            if (this.species === 'cat') {
                return 'Meow'
            }
            else if (this.species === 'dog') {
                return 'Growl'
            } else {
                return 'Tumbleweed...'
            }
            }
        get getSpecies() {
            return this.species
            }
        set setAge(age) {
            this.age = age
        }
}

// 2. Create a Dog and Cat child class from the Animal Class.

const cat = new Animal('Mittens', 3, 'Black', 'cat')
const dog = new Animal('Fido', 2, 'Brown', 'dog')


// Exercise 6 - Level 2

// 3. Override the method you create in Animal class

class Dog extends Animal {
    makeNoise() {
        return 'Woof!';
    }
}

const dog2 = new Dog('Rex', 4, 'White', 'dog');


// Exercise 6 - Level 3

// 4. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 

class Statistics {
    constructor(arr) {
        this.data = arr
    }
    mean() {
        let total = 0;
        this.data.forEach((item) => {
            total += Number(item)
        })
        return total/this.data.length
        }

    median() {
        const sortedData = this.data.sort((a,b) => {
            return a - b
        })
        if (sortedData.length%2 === 0) {
            const medianIndex = sortedData.length/2
            const median = (sortedData[medianIndex] + sortedData[medianIndex+1])/2
            return median
        } else {
            const medianIndex = Math.ceil((sortedData.length)/2)
            const median = sortedData[medianIndex-1]
            return median
        }
        } 

    range() {
        const sortedData = this.data.sort((a,b) => {
            return a - b })
        const max = sortedData[sortedData.length-1]
        const min = sortedData[0]
        const range = max - min
        return range
    }

    min() {
        const sortedData = this.data.sort((a,b) => {
            return a - b })
        const max = sortedData[sortedData.length-1]
        return max
    }

    max() {
        const sortedData = this.data.sort((a,b) => {
            return a - b })
        const min = sortedData[0]
        return min
    }

    count() {
        return this.data.length
    }
    
    describe() {
        const results = {
            mean: this.mean(),
            median: this.median(),
            range: this.range(),
            min: this.min(),
            max: this.max(),
            count: this.count()
        }
        return results
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const information = new Statistics(ages)

