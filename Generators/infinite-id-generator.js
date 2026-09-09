function* idGenerator() {
  let id = 0;

  while (true) {
    ++id;
    yield `id_${id}`;
  }
}

const gen = idGenerator();

console.log(gen.next());
console.log(gen.next());