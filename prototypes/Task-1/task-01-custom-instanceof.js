function myInstanceOf(obj, Constructor) {
  if (typeof obj !== "object" || obj === null) return false;

  let objPrototype = Object.getPrototypeOf(obj);

  while (objPrototype !== null) {
    if (objPrototype === Constructor.prototype) return true;

    objPrototype = Object.getPrototypeOf(objPrototype);
  }

  return false;
}

function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf([], Array)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false
