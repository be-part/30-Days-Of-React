/* 
Exercises

Part 1: What is React?
What is React?
React is a JavaScript library that, while it uses HTML, comes with many other features for interactivity and more complex logic for websites.

What is a library?
Programming libraries are co,lections of pre-written, re-usable bits of code that can be used in your own application.

What is a single page application?
A single page application rewrites a current webpage dynamically using data from the server. Traditional websites rely on full page reloads for each new page, while SPAs load the initial content and then dynamically update the page using JavaScript and APIs. SPAs provide a more interactive and seamless user experience by reducing the need for full page reloads and providing faster navigation between pages.

What is a component ?
A self-contained and reusable piece of code that has a specific feature of UI element. They can be combined to create more complex structures. They can be developed, tested, and maintained in isolation, which improves code modularity and makes it easier to reason about the behavior of individual components.

What is the latest version of React?
React 18.

What is DOM?
Document Object Model (DOM) is is a object-orientated programming interface for web documents. It provides a representation of web documents with nodes and objects so programming languages can interact with the web document. Nodes are individual elements, text, or other entities within an HTML or XML document. 

What is React Virtual DOM?
It is a virtual representation of the actual HTML DOM. This virtual DOM is a JavaScript object that mirrors the structure of the actual DOM elements, including elements, attributes, and their relationships.
 - On initial render: a virtual DOM that corresponds to the actual DOM is created.
 - When a component is rendered, React compares the virtual DOM to the actual DOM to look for changes (diffing).
 - An algorithm decides the most efficient way to update the real DOM to match the changes.
 - This is more efficient compared to re-rendering the entire component or manually manipulating the DOM.
 - React batches multiple updates and performs them in a single pass to minimize the impact on performance. 

What does a web application or a website(composed of) have?
Several key components and technologies that work together to provide its functionality and user experience:
 - User interface, HTML, CSS, JavaScript (functionality), a backend server, a web framework that provides a structure and set of tools to streamline web application development, a database, an API, security measures, deployment infrastructure.


Part 2: Why React?
Why did you chose to use react?
It is generally faster and more efficient because you can write smaller code files.
It has a better UX as instead of reloading everything, everytime, it just reloads what it needs to when it needs to, making it more fluid.
It has a large community of developers.

What measures do you use to know popularity ?
GitHub repository stars, watchers and forks.

What is more popular, React or Vue ?
React.

Part 3: JSX
What is an HTML element?
A HTML element represents a specific component or part of a web page's structure and content. HTML elements are defined by opening and closing tags and can contain other elements, text, or attributes.

How to write a self closing HTML element?
The tag name indicates the type or category of the element.
In HTML, a self-closing tag is a syntax convention used for certain HTML elements that do not have any content or children. Instead of using separate opening and closing tags, these elements can be represented with a single tag that ends with a forward slash ("/") before the closing angle bracket.

What is an HTML attribute? Write some of them:
Attributes are specified within the opening tag and provide values relevant to the element;
 - href
 - target
 - src
 - alt

What is JSX?
Is an extension to the JavaScript language syntax that allows developers to write HTML-like code directly within JavaScript which makes it easier to describe the structure and content of your user interface and render more dynamic content.

What is babel?
A transpiler.

What is a transpiler?
Browsers cannot interpret JSX directly, so it needs to be transpiled to regular JavaScript for browser compatibility. This is usually done using a build tool, which transforms JSX syntax into regular function calls or object expressions.


Part 4: JSX Elements
What is a JSX element?
A JSX element refers to a representation of a user interface component or element written in JSX syntax. JSX elements are the building blocks of React components, representing the structure, content, and attributes of the user interface.

Write your name in a JSX element and store it in a name variable.✓
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable. ✓
Write a footer JSX element. ✓


Part 5: Inline Style
Create a style object for the main JSX. ✓
Create a style object for the footer and app JSX. ✓
Add more styles to the JSX elements. ✓


Part 6: Internal Styles
Apply different styles to your JSX elements. ✓


Part 7: Inject data to JSX
Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object). ✓
*/