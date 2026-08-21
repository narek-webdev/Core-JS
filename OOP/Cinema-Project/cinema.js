class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Session {
  constructor(id, movie, hall, startTime, price) {
    this.id = id;
    this.movie = movie;
    this.hall = hall;
    this.startTime = startTime;
    this.price = price;
  }
}

class Movie {
  constructor(id, title, duration, genre, ageRating) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    this.ageRating = ageRating;
  }
}

class Hall {
  constructor(id, name, capacity) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
  }
}

class Cinema {
  #name;
  #address;
  #sessions;
  #halls;
  #movies;
  #users;

  constructor(name, address) {
    this.#name = name;
    this.#address = address;
    this.#halls = [];
    this.#movies = [];
    this.#sessions = [];
    this.#users = [];
  }

  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }

  addHall(hall) {
    const isHallExists = this.#halls.some(({ id }) => id === hall.id);

    if (isHallExists) {
      throw new Error("Hall Exists");
    }

    this.#halls.push(hall);
  }

  addMovie(movie) {
    const isMovieExists = this.#movies.some(({ id }) => id === movie.id);

    if (isMovieExists) {
      throw new Error("Movie Exists");
    }

    this.#movies.push(movie);
  }

  createSession(session) {
    const isSessionExists = this.#sessions.some(({ id }) => id === session.id);
    const isMovieExists = this.#movies.some(
      ({ id }) => id === session.movie.id,
    );
    const isHallExists = this.#halls.some(({ id }) => id === session.hall.id);

    const isHallLocked = this.#sessions.some(({ startTime, hall }) => {
      return startTime === session.startTime && hall.id === session.hall.id;
    });

    if (isSessionExists) {
      throw new Error("Session Exists");
    }

    if (!isMovieExists) {
      throw new Error("Movie Does Not Exist");
    }

    if (!isHallExists) {
      throw new Error("Hall Does Not Exist");
    }

    if (isHallLocked) {
      throw new Error("Hall is locked");
    }

    this.#sessions.push(session);
  }

  addUser(user) {
    const isUserExists = this.#users.some(({ id }) => id === user.id);

    if (isUserExists) {
      throw new Error("User Exists");
    }

    this.#users.push(user);
  }

  getHalls() {
    return [...this.#halls];
  }

  getHall(id) {
    return this.#halls.find((hall) => hall.id === id);
  }

  getMovies() {
    return [...this.#movies];
  }

  getMovie(id) {
    return this.#movies.find((movie) => movie.id === id);
  }

  getSessions() {
    return [...this.#sessions];
  }

  getSession(id) {
    return this.#sessions.find((session) => session.id === id);
  }

  getUsers() {
    return [...this.#users];
  }

  getUser(id) {
    return this.#users.find((user) => user.id === id);
  }
}

const cinema = new Cinema("Cinema Star", "Dalma Street");
cinema.addHall(new Hall(1, "Big Hall", 500));
cinema.addMovie(new Movie(2, "Avatar", 3, "FANT", 18));
cinema.addMovie(new Movie(3, "Gladiator", 3, "FANT", 18));

cinema.addUser(new User(1, "James", "dkafjlakd"));

const hall = cinema.getHall(1);
const movie = cinema.getMovie(2);
const gladiator = cinema.getMovie(3);
const date = new Date(2026, 9, 16, 14, 30, 0);

cinema.createSession(new Session(1, movie, hall, date, 900));

cinema.createSession(
  new Session(2, gladiator, hall, new Date(2026, 9, 17, 14, 30, 0), 900),
);
