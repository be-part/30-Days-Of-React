// Exercise 3 - Level 1

// 1. Create an empty object called dog
const dog = {}

// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Montgomery'
dog.legs = 4
dog.colour = 'brown'
dog.age = 2

dog.bark = function () {
    console.log('woof woof')
}

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.colour, dog.age, dog.bark())

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Pug'
dog.getDogInfo = function () {
    console.log(dog)
}
