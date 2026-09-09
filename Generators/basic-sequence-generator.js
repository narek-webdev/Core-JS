function* numberGenerator(start, end) {
  if (start > end) {
    throw new Error("Start should be less than end");
  }

  for (let i = start; i <= end; ++i) {
    yield i;
  }
}

const gen = numberGenerator(0, 5);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());