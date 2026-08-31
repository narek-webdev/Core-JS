# Async Promises

This folder contains custom JavaScript implementations of common Promise utilities inspired by native `Promise.all`, `Promise.race`, `Promise.allSettled`, and `Promise.any`.

## Included files

- `customPromiseAll.js` — custom implementation of `Promise.all`
- `customPromiseRace.js` — custom implementation of `Promise.race`
- `customAllSettled.js` — custom implementation of `Promise.allSettled`
- `customPromiseAny.js` — custom implementation of `Promise.any`

## What each function does

### `promiseAll(promises)`
Returns a single Promise that resolves with an array of all fulfilled values in input order.

- Resolves only when every promise fulfills.
- Rejects immediately when any promise rejects.

### `promiseRace(promises)`
Returns a Promise that settles with the first fulfilled or rejected value from the input list.

- The first settled promise wins.
- It mirrors the behavior of the native `Promise.race`.

### `promiseAllSettled(promises)`
Returns a Promise that resolves after all input promises settle.

- Produces an array of objects like:
  - `{ status: 'fulfilled', value: ... }`
  - `{ status: 'rejected', reason: ... }`

### `promiseAny(promises)`
Returns the first fulfilled promise value as soon as one succeeds.

- Rejects with `AggregateError` when all input promises reject.

## Example usage

```javascript
const p1 = Promise.resolve('A');
const p2 = Promise.resolve('B');
const p3 = Promise.reject('Error');

promiseAll([p1, p2])
  .then(console.log); // ['A', 'B']

promiseRace([p1, p2, p3])
  .then(console.log); // 'A' or 'B' depending on timing

promiseAllSettled([p1, p3])
  .then(console.log);

promiseAny([p3, p1])
  .then(console.log); // 'A'
```

## Running the examples

Each file contains example code at the bottom, commented out by default. To test one:

```bash
node Async/promises/customPromiseAll.js
node Async/promises/customPromiseRace.js
node Async/promises/customAllSettled.js
node Async/promises/customPromiseAny.js
```

Uncomment the example block in the file you want to test, then run the corresponding command.

## Notes

These implementations are educational examples and help demonstrate how native Promise combinators work internally.
