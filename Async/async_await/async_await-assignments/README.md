# Async/Await Assignments

This directory contains practical assignments focused on understanding and converting between **async/await** syntax and **Promise** syntax. These exercises help solidify the concepts of asynchronous programming in JavaScript.

## Overview

The assignments are divided into two main groups:
1. **Converting Promises to async/await** (task1.js, task2.js, task3.js)
2. **Converting async/await to Promises** (task4.js, task5.js)

---

## Assignment Details

### task1.js - Simple Promise Resolution
**Objective:** Convert a basic Promise that resolves to a value into async/await syntax.

**Key Concepts:**
- Awaiting a resolved Promise
- Variable assignment with `await`
- Error handling in async functions

**Task:** Rewrite the promise-based code to use async/await while maintaining the same functionality.

---

### task2.js - Async Operation with Timeout
**Objective:** Convert a Promise that uses `setTimeout` to async/await syntax.

**Key Concepts:**
- Awaiting Promises that wrap asynchronous operations
- Time delays in async/await patterns
- Preserving async behavior with async/await syntax

**Task:** Convert the setTimeout-based Promise to use async/await.

---

### task3.js - Chained Promises
**Objective:** Convert multiple `.then()` chains into sequential async/await calls.

**Key Concepts:**
- Sequential awaiting of multiple Promises
- Handling dependent asynchronous operations
- Improved readability with async/await vs. Promise chains

**Task:** Rewrite chained `.then()` calls using `await` statements while preserving execution order.

---

### task4.js - Async/Await to Promise Conversion
**Objective:** Convert an async/await function back to Promise syntax using `.then()`.

**Key Concepts:**
- Converting `async` functions to Promise-based functions
- Replacing `await` with `.then()`
- Understanding the equivalence between both syntaxes

**Task:** Rewrite the async function to use only `.then()` for handling the resolved Promise.

---

### task5.js - Async Function to Promise Chain
**Objective:** Convert another async/await example to Promise-based `.then()` syntax.

**Key Concepts:**
- Converting async operations to chained Promises
- Maintaining the same behavior with different syntax
- Understanding Promise fundamentals

**Task:** Rewrite the async function using Promise `.then()` method.

---

## Learning Goals

By completing these assignments, you will:
- ✅ Understand the relationship between Promises and async/await
- ✅ Master converting between Promise `.then()/.catch()` and async/await syntax
- ✅ Learn when and how to use async/await for cleaner code
- ✅ Understand error handling with try/catch in async functions
- ✅ Recognize that async/await is syntactic sugar over Promises
- ✅ Build confidence with asynchronous JavaScript patterns

## Best Practices

1. **Use async/await** when you have multiple asynchronous operations that depend on each other
2. **Use Promises** when you need fine-grained control or are working with library APIs
3. **Always handle errors** using either `.catch()` or `try/catch` blocks
4. **Avoid callback hell** by using async/await or Promise chains
5. **Use `await` only in async functions** to avoid syntax errors

## Running the Assignments

Each file can be executed with Node.js:

```bash
node task1.js
node task2.js
node task3.js
node task4.js
node task5.js
```

## Resources

- [MDN: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: async/await](https://javascript.info/async-await)
