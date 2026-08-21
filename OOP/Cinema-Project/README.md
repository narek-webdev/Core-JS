# Cinema OOP Project

A small educational cinema management system built with JavaScript using
object-oriented programming (OOP) principles.

## About the project

The project models the main entities of a cinema and the relationships between
them. The `Cinema` class is the central manager: it stores halls, movies,
sessions, and users, and validates new data before adding it.

## Features

- Manage cinema halls, movies, sessions, and users
- Find stored entities by their ID
- Prevent duplicate IDs
- Verify that a session references an existing movie and hall
- Prevent two sessions from starting in the same hall at the same time
- Protect internal collections using private class fields

## Technologies

- JavaScript (ES6+)
- Object-oriented programming
- JavaScript private class fields

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) version 14 or newer. Private class fields
must be supported by the installed runtime.

### Run the project

1. Clone or download the repository.
2. Open a terminal in the project directory.
3. Run:

```bash
node cinema.js
```

The example at the end of `cinema.js` creates a cinema, a hall, movies, a user,
and two sessions. It does not print anything to the console by default.

## Project structure

```text
cinema-oop/
├── cinema.js  # Classes and example usage
└── README.md  # Project documentation
```

## Main classes

### `User`

Represents a cinema user.

| Property | Description |
| --- | --- |
| `id` | Unique user identifier |
| `name` | User's name |
| `email` | User's email address |

### `Movie`

Represents a movie.

| Property | Description |
| --- | --- |
| `id` | Unique movie identifier |
| `title` | Movie title |
| `duration` | Movie duration |
| `genre` | Movie genre |
| `ageRating` | Movie age rating |

### `Hall`

Represents a cinema hall.

| Property | Description |
| --- | --- |
| `id` | Unique hall identifier |
| `name` | Hall name |
| `capacity` | Number of available seats |

### `Session`

Connects a movie to a hall at a specific start time.

| Property | Description |
| --- | --- |
| `id` | Unique session identifier |
| `movie` | A `Movie` instance |
| `hall` | A `Hall` instance |
| `startTime` | Session start date and time |
| `price` | Ticket price |

### `Cinema`

Stores and manages the other entities.

#### Getters

- `name`
- `address`

#### Public methods

- `addHall(hall)`
- `addMovie(movie)`
- `createSession(session)`
- `addUser(user)`
- `getHalls()` / `getHall(id)`
- `getMovies()` / `getMovie(id)`
- `getSessions()` / `getSession(id)`
- `getUsers()` / `getUser(id)`

## Validation rules

The `Cinema` class rejects:

- Halls, movies, sessions, or users with duplicate IDs
- Sessions that reference a movie not stored in the cinema
- Sessions that reference a hall not stored in the cinema
- Sessions with the same hall and start time as an existing session

Validation failures throw an `Error` with a short description.

## OOP concepts

### Encapsulation

The `Cinema` class keeps its state in private fields:

```javascript
#name;
#address;
#sessions;
#halls;
#movies;
#users;
```

Collections can only be changed through public methods. Collection getters
return new arrays, preventing callers from directly modifying the stored arrays:

```javascript
getHalls() {
  return [...this.#halls];
}
```

### Object relationships

A `Session` contains references to one `Movie` and one `Hall`. The `Cinema`
object owns the collections and coordinates these related objects.

## Usage example

```javascript
const cinema = new Cinema("Cinema Star", "Yerevan");

const hall = new Hall(1, "Main Hall", 100);
const movie = new Movie(1, "Interstellar", 169, "Sci-Fi", 13);
const user = new User(1, "John Doe", "john@example.com");

cinema.addHall(hall);
cinema.addMovie(movie);
cinema.addUser(user);

const session = new Session(
  1,
  movie,
  hall,
  new Date(2026, 9, 16, 18, 0),
  2500,
);

cinema.createSession(session);

console.log(cinema.getMovies());
console.log(cinema.getHalls());
console.log(cinema.getSessions());
```
