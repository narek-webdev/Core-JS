function checkProperty(obj, key) {
  if (Object.hasOwn(obj, key)) return "own";

  let objectPrototype = Object.getPrototypeOf(obj);

  while (objectPrototype !== null) {
    if (Object.hasOwn(objectPrototype, key)) return "inherited";
    objectPrototype = Object.getPrototypeOf(objectPrototype);
  }

  return "not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited
