/* 
Exercises: Level 1

a. How do you write a pure JavaScript function?
A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.


b. What is inheritance and how do you make a child from a parent class?
Classes can be made as per the following:
class ClassName {
  constructor() { ... }
}
You can use the class to create objects. Classes are not objects themselves, they are just templates for creating objects.

You can then make a class that extends from another class:
class AnotherClass extends ClassName {
    constructor() {...}
}
You can reuse the properties of the existing class as it inherits from that class. This class would be a child of the parent class.


c. What is class based React component?
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
Class components provided the this.state and this.setState() mechanisms to handle state.
However, because React introduced hooks, function components can do the same thing as class components now, and we rarely need to use them.


d. What is the difference between functional React component and class based React component?
* Syntax: arrows for functional and traditional for class
* functional components are more flexible than class components and more easily reusable


e. When do we need to use class based components instead of functional components?
Maybe found in legacy codebases. 

f. What is the use cases of class based component?
Also, class components can be better for external APIs or third-party libraries.

g. Which type of component do use most frequently? Functional or class-based component?
Functional.



A legacy codebase refers to an existing software system or application that has been developed using older technologies, outdated practices, or deprecated frameworks. 

*/