/* 
Exercises: Level 1

What is state in React?
Components need to “remember” things: this is what state is for.
Local variables don’t persist between renders & Changes to local variables won’t trigger renders. 

You can store any kind of JavaScript value in state.
A state variable to retain the data between renders.
A state setter function to update the variable and trigger React to render the component again.

What is the difference between props and state in React?
* props are immutable and state is mutable
* props are not component-specific data whereas state is
* props generally follow parent to child relationship, whereas state scope is the component it is in although you can pass it down from parent to child.
* setState triggers a re-render

How do you access state in a React component?
useState hook.

How do you set a set in a React component?
setState which is the second parameter of the useState hook.


Exercises: Level 2: 
Use React state to change the background of the portfolio page. ✓
Develop a random country selector that selects your holiday destination.

*/

