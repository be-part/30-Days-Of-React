Exercises: Level 1

useRef:
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.

useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).

In general, we want to let React handle all DOM manipulation.
But there are some instances where useRef can be used without causing issues.
In React, we can add a ref attribute to an element to access it directly in the DOM.