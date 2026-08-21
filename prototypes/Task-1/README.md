# JavaScript Prototypes Homework

Homework project for Picsart Academy, assigned on July 30. The project contains five separate exercises covering JavaScript constructors, prototypes, and prototype-chain behavior.

## Tasks

### 1. Custom `instanceof`

Implements `myInstanceOf(obj, Constructor)` without using the native `instanceof` operator. The function manually traverses the prototype chain and safely handles primitive values and invalid input.

File: `task-01-custom-instanceof.js`

### 2. Custom `new`

Implements `myNew(Constructor, ...args)` without using the native `new` operator. It creates an object, links it to the constructor prototype, invokes the constructor with the correct context, and handles explicit object return values.

File: `task-02-custom-new.js`

### 3. Own or inherited property

Implements `checkProperty(obj, key)`, which determines whether a property is owned directly by an object, inherited through its prototype chain, or not found.

File: `task-03-check-property.js`

### 4. Immediate prototype methods

Implements `getPrototypeMethods(obj)`, which returns the names of function properties found on an object's immediate prototype.

File: `task-04-get-prototype-methods.js`

### 5. Custom array sum method

Adds `mySum()` to `Array.prototype`. The method sums numeric array elements, returns `0` for an empty array, and throws an error when an element is not a valid number.

File: `task-05-array-my-sum.js`

## Project structure

```text
.
├── task-01-custom-instanceof.js
├── task-02-custom-new.js
├── task-03-check-property.js
├── task-04-get-prototype-methods.js
└── task-05-array-my-sum.js
```

## Running the exercises

Each task is independent and includes its own test cases. Run any task with Node.js:

```bash
node task-01-custom-instanceof.js
node task-02-custom-new.js
node task-03-check-property.js
node task-04-get-prototype-methods.js
node task-05-array-my-sum.js
```

## Constraints

- Function constructors and prototypes are used instead of classes.
- Every task is implemented separately.
- Native operators explicitly forbidden by the assignment are not used.
- Test output is printed to the console.
