/* 
Exercises: Level 1

What is a controlled input?
A controlled input is a component that is controlled by React state as opposed to being controlled and stored in the DOM.
This means the input/data and the UI are always in-sync, allowing for the form to respond to changes immediately, which is useful for validation, disabling buttons until data entry is valid or enforcing specific input. 

What is an uncontrolled input?
A uncontrolled input is not controlled by React state, instead it is stored in the DOM. 

How do you get a content of a certain HTML element in React?
useRef

Why it is not a good idea to touch the DOM directly in React?
The purpose of React is to use a virtual DOM that allows React to compare the current DOM to the virtual DOM and make changes as they are needed. If you manipulate the DOM directly, you are not using React for it's purpose and can make maintaining the code tricky.

What is most frequently used in React ? Controlled or Uncontrolled input.
Controlled.


When do you use uncontrolled input?
If your form is incredibly simple in terms of UI feedback, uncontrolled can be fine.

When do you use controlled input?
Commonly used with forms. 

Do you use a controlled or uncontrolled input to validate form input fields?
Controlled.

*/