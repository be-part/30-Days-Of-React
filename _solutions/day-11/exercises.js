/*
Exercises: Level 1

What is an event?
An event is an action or occurrence recognized by a software.

What is the different between an HTML element event and React event?
* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

Write at least 4 keyboard events?
* onKeyDown: when a key is pressed down.
* onKeyPress: when a key is pressed down and released.
* onKeyUp: when a key is released.
* onFocus: when an element receives keyboard focus.
* onBlur: when an element loses keyboard focus.
* onChange: when the value of an input element changes.
* onInput: when the value of an input element changes, similar to onChange.
* onSubmit: when a form is submitted.

Write at least 8 mouse events?
* onClick: when user clicks element
* onDoubleClick: when user double clicks element
* onMouseDown: when the user presses a mouse button while the cursor is over an element
* OnMouseUp: when the user releases a mouse button while the cursor is over an element
* onMouseEnter: when mouse cursor enters boundaries of element
* onMouseLeave: when mouse cursor leaves boundaries of element
* onMouseMove: when mouse cursor moves while over the element
* onMouseOver: when mouse cursor enters the boundaries of an element or one of its child elements
* onMouseOut: when mouse cursor leaves the boundaries of an element or one of its child elements
* onContextMenu: when user right clicks on element and opens up the context menu

What are the most common mouse and keyboard events?
onInput, onChange, onSubmit, onClick, onMouseEnter

Write an event specific to input element?
onChange, onInput, onSubmit
These events are particularly useful when you want to capture and respond to user input in real-time or when you need to handle form submissions.

Write an event specific to form element?
onChange and onSubmit

Display the coordinate of the view port when a mouse is moving on the body?


What is the difference between onInput, onChange and onBlur?
* onInput: fires immediately afer each change
* onChange: event is triggered after the input element loses focus or the user commits the change - provides a more final value after user is finished making changes
* onBlur: triggered after user has finished interacting with element by clicking or tabbing away
onBlur is triggered when an input element loses focus, indicating that the user has finished interacting with it, while onInput and onChange events are triggered during user input or when certain conditions are met, allowing for immediate updates or feedback.

Where do we put the onSubmit event ?
onSubmit has to go in the <form> element.

Exercises: Level 2
Implement the following using onMouseEnter event. ✓

*/