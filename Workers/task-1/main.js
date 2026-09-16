const worker = new Worker("./worker.js");
const buffer = new ArrayBuffer(20);
const numbers = new Uint32Array(buffer);

for (let i = 0; i < 5; ++i) {
  numbers[i] = (i + 1) * 10;
}

worker.postMessage(buffer, [buffer]);

worker.onmessage = function (event) {
  console.log(event.data);
};
