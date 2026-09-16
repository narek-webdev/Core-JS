self.onmessage = function (event) {
  const numbers = new Uint32Array(event.data);

  for (let i = 0; i < numbers.length; ++i) {
    numbers[i] = numbers[i] * 2;
  }

  self.postMessage(numbers, [event.data]);
};
