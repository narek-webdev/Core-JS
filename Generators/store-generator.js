function* storeGenerator(initialValue) {
  let currentValue = initialValue;

  while (true) {
    currentValue = yield currentValue * 2;
  }
}

const gen = storeGenerator(5);

console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(7));