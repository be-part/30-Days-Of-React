/* 
Exercises: Level 1
What is props in a React component?
You can pass data between functional components as 'props'. Typically, it goes from parent to child.
If you pass it without assigning it anything, you get an empty object.

How do you access props in a React component?
you can refer to the props object that is automatically passed as an argument to the component function or available within the class component.

What data types can we pass as props to components?
String, Number, Boolean, Array, Objects, Functions,

What is a propTypes?
You can import it:
import PropTypes from 'prop-types';
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
  }),
};
And then the component will expect props of that type.
It checks for that type and helps prevent bugs or errors further down the line.

What is a default propTypes?
MyComponent.defaultProps = {
  name: 'John Doe', // Default value for the 'name' prop
};
Provides a default value if one was not provided.

*/