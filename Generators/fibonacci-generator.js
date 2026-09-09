function* fibonacci() {
  let prev = 0;
  let next = 0;

  while (true) {
    if (!next) yield next++;

    const tmp = next;
    next = prev + next;
    prev = tmp;

    yield prev;
  }
}

const gen = fibonacci();

console.log(gen.next());
console.log(gen.next());