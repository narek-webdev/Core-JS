function getPrototypeMethods(obj) {
  let arr = [];

  const immediatePrototype = Object.getPrototypeOf(obj);

  if (Array.isArray(immediatePrototype)) {
    Object.getOwnPropertyNames(immediatePrototype).forEach((item) => {
      if (
        item !== "constructor" &&
        typeof immediatePrototype[item] === "function"
      ) {
        arr.push(item);
      }
    });
  } else {
    for (const key in immediatePrototype) {
      if (typeof immediatePrototype[key] === "function") {
        arr.push(key);
      }
    }
  }

  return arr;
}

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
// console.log(getPrototypeMethods({ a: 1 })); // []
// console.log(getPrototypeMethods([]).includes("push")); // true

// const base = {
//   x: 10,
//   print() {
//     return "hello";
//   },
// };

// const obj = Object.create(base);

// console.log(getPrototypeMethods(obj)); // ["print"]
// console.log(getPrototypeMethods(Object.create(null))); // []
