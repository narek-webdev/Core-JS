# Generators

Exercises demonstrating JavaScript generator functions, lazy iteration, infinite sequences, pagination, and passing values back into a generator with `.next(value)`.

## Task 1: Basic Sequence Generator

Implement `numberGenerator(start, end)`.

Requirements:

- Yield every integer from `start` to `end`.
- Include both the starting and ending values.
- Produce one number each time `.next()` is called.

Solution file: [`basic-sequence-generator.js`](./basic-sequence-generator.js)

## Task 2: Infinite ID Generator

Implement `idGenerator()`.

Requirements:

- Generate a unique identifier on every `.next()` call.
- Use the format `id_1`, `id_2`, `id_3`, and so on.
- Continue generating identifiers indefinitely.

Solution file: [`infinite-id-generator.js`](./infinite-id-generator.js)

## Task 3: Fibonacci Number Generator

Implement an infinite `fibonacci()` generator.

Requirements:

- Yield Fibonacci numbers one at a time.
- Keep the sequence running indefinitely.
- Return the next number only when `.next()` is called.

Solution file: [`fibonacci-generator.js`](./fibonacci-generator.js)

## Task 4: Pagination via Generator

Implement `paginate(array, pageSize)`.

Requirements:

- Accept an array and the desired page size.
- Yield one chunk of the array on each `.next()` call.
- Preserve the original item order.
- Allow the final chunk to contain fewer items than `pageSize`.

Solution file: [`pagination-generator.js`](./pagination-generator.js)

## Task 5: Passing Data to a Generator with `.next(value)`

Implement `storeGenerator(initialValue)`.

Requirements:

- Accept and store an initial value.
- Yield the doubled current value.
- Update the stored value when `.next(newValue)` is called.
- Yield the doubled updated value after each update.

The first call to `.next()` starts the generator and returns the doubled initial value. A value passed to `.next(value)` becomes the result of the suspended `yield` expression.

Solution file: [`store-generator.js`](./store-generator.js)

These files are educational examples of how generator functions pause at `yield`, resume with `.next()`, and produce values lazily.
