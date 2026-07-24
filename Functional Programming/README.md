# Functional Programming

Solved exercises for the Functional Programming folder.

## Task 1: Curry

Implement `curry(cb)`.

Requirements:

- Return a curried version of `cb`.
- Support partial application.
- Accept arguments in any grouping.
- Once enough arguments are collected, call `cb` and return the result.

Example:

```js
function curry(cb) {
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); // 6
console.log(sumFunc(1, 2)(3)); // 6
console.log(sumFunc(1, 2, 3)); // 6
console.log(prodFunc(1, 2, 3, 4)); // 24
console.log(prodFunc(1)(2, 3, 4)); // 24
console.log(prodFunc(1, 2)(3, 4)); // 24
console.log(prodFunc(1, 2, 3)(4)); // 24
```

Solution file: [`curry.js`](./curry.js)

## Task 2: Memoize

Implement `memoize(cb)`.

Requirements:

- Return a new function that caches results.
- If the function is called again with the same argument, return the cached result instead of recalculating it.
- For this task, assume the function receives one argument.

Example:

```js
function factorial(a) {
  let res = 1;

  for (let i = 2; i <= a; ++i) {
    res *= i;
  }

  return res;
}

function memoize(cb) {
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120
```

Solution file: [`memoize.js`](./memoize.js)

## Task 3: Pipe

Implement `pipe(...funcs)`.

Requirements:

- Return a function that takes an initial value.
- Pass the result of each function to the next one from left to right.
- Return the final result.

Example:

```js
function pipe(...funcs) {
}

const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4);
console.log(func(2)); // 20
```

Solution file: [`pipe.js`](./pipe.js)

## Task 4: Trace

Implement `trace(cb)`.

Requirements:

- Return a wrapper around `cb`.
- The wrapper should call `cb` normally.
- It should also store the history of calls.
- Each history entry must contain the call arguments and the returned output.
- Store all records in `wrappedFunction.history`.

Example:

```js
function trace(cb) {
}

function foo(a, b) {
  return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); // 3
console.log(tracedFunc(2, 4, 6)); // 6

console.log(tracedFunc.history);
// [{ args: [1, 2], output: 3 }, { args: [2, 4], output: 6 }]
```

Solution file: [`trace.js`](./trace.js)