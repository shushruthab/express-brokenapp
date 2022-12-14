### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  a. Use async await
  b. Use promises - .then, .catch and other methods.
  c. Use setTimeout to execute code after a specific amount of time. 
  d. Use EventEmitter class from Node.js 

- What is a Promise?
  Object that is the eventual result of an async operation. It is the placeholder for a value that is expected to be available at some point in the future.

- What are the differences between an async function and a regular function?
  a. Async function always returns a promise. A regular function can return anything.
  b. Async function run in the background independently of the rest of the code. Unlike regular functions they do not block rest of the code from executing. 

- What is the difference between Node.js and Express.js?
  Node.js is a runtime environment for executing Javascript code. Express.js is a web framework built on top Node.js. Node.js provides the core functionality for building server-side applications, while Express.js provides a set of tools and middleware for building web applications and APIs.

- What is the error-first callback pattern?
  Way of handling errors in Node.js. Pass a callback function to an async operation and have the callback take two arguments - an error object and a result value. 

- What is middleware?
  Code executed between receipt of HTTP request and generation of HTTP response. Often used for authentication, logging or routing. 

- What does the `next` function do?
  The `next` function is used to pass control to the next function in the middleware pipeline.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  a. Uses a jQuery method which means the library would have to be imported. Native `fetch` method or a dedicated library such as `axios` is preferred. 
  b. Function returns the Promise object instead of data associated with the Promises. 
  c. Function uses hard coded URL's to make http requests. This is difficult to maintain as a pattern.
  d. Naming is poor as elie, joel and matt are not descriptive or meaningful about the incoming data. 
