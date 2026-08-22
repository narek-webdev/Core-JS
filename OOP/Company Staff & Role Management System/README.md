# Company Staff Management System

A small educational JavaScript project that demonstrates object-oriented programming with ES6 classes, inheritance, and private class fields.

The system models common employee types while keeping shared employee information in a reusable base class. It currently supports developers and managers and can be extended with additional roles such as designers or QA engineers.

## Project Goals

- Use inheritance to avoid duplicating shared employee logic.
- Protect employee data from direct external mutation with private fields.
- Separate general employee behavior from role-specific responsibilities.
- Provide a simple foundation for adding new employee types.

## Class Structure

### `Employee`

The base class for every employee in the system.

Private fields:

- `name` — the employee's full name.
- `baseSalary` — the employee's base compensation.

Methods:

- `getName()` — returns the employee's name.
- `getBaseSalary()` — returns the base salary.
- `calculatePay()` — calculates and returns the baseline payment.
- `getProfileInfo()` — returns a formatted employee summary.

### `Developer extends Employee`

Represents a software developer.

Private fields:

- `mainLanguage` — the developer's primary programming language.
- `bugsFixed` — the number of resolved bugs, initially `0`.

Methods:

- `writeCode()` — returns a message describing the language used by the developer.
- `fixBug()` — increments the resolved bug counter and returns the updated total.

### `Manager extends Employee`

Represents a team manager.

Private fields:

- `teamSize` — the number of employees managed.
- `successfulDeals` — the number of successful deals, initially `0`.

Methods:

- `conductMeeting()` — returns a message describing a meeting with the manager's team.
- `closeDeal()` — increments the successful deal counter and returns the updated total.

## Inheritance Overview

```text
Employee
├── Developer
└── Manager
```

Both specialized classes inherit employee profile and payment behavior from `Employee` and add only the data and actions specific to their roles.

## Usage Example

```js
const developer = new Developer("James", 900, "JavaScript");

console.log(developer.getProfileInfo());
console.log(developer.writeCode());
console.log(developer.fixBug());

const manager = new Manager("John", 500, 20);

console.log(manager.getProfileInfo());
console.log(manager.conductMeeting());
console.log(manager.closeDeal());
```

## Running the Project

### With Node.js

From the project directory, run:

```bash
node index.js
```

Use a modern JavaScript runtime that supports private class fields.

## Project Files

```text
Company-Staff/
├── index.js
└── README.md
```

## Possible Future Extensions

- Add roles such as `Designer` and `QAEngineer`.
- Add role-specific payment calculations.
- Validate constructor input types and values.
- Split each class into its own module as the project grows.
- Add automated tests for inheritance, encapsulation, and counters.

## Concepts Demonstrated

- ES6 classes
- Class inheritance with `extends`
- Parent constructor calls with `super()`
- Private class fields (`#field`)
- Encapsulation
- Method reuse and specialization

