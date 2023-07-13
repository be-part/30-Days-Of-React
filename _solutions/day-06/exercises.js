/* 
Exercises: Level 1

map vs forEach:
Use map to transform data (as it returns a new array) or collect results.
Use forEach for side effects - like if you want to do something else for each element in an array. It is better for when the order of execution matters as it does it in a sequential way. 

Why you need to map an array?
To render something for each element in the array - often a HTML element.

Why we need keys during mapping an array?
Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity. The key should be unique. If you don't give each element a key, you will get a warning from React. 

What is the importance of destructuring your code ?
Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays into distinct variables. 

Example object:
const person = { name: 'Jane', age: 30, city: 'New York' };
const { name, age } = person;

Example array:
const numbers = [1, 2, 3];
const [first, second] = numbers;

It provides a convenient way to extract and assign values from complex data structures, making your code more concise and readable.

Does destructuring make your code clean and easy to read ?
Yes.


*/