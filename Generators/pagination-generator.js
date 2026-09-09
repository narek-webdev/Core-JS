function* paginate(array, pageSize) {
  let chunkStart = 0;

  while (true) {
    let new_arr = [];

    if (chunkStart > array.length) break;

    for (let i = chunkStart; i < chunkStart + pageSize; ++i) {
      if (i >= array.length) break;
      new_arr.push(array[i]);
    }

    chunkStart += pageSize;

    yield new_arr;
  }
}

const gen = paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());