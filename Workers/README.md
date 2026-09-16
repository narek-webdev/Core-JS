# Web Workers

This folder demonstrates communication between the main thread and a Web Worker while transferring binary data with `ArrayBuffer` and `Uint32Array`.

## Task 1: Processing Binary Data

The main thread creates a 20-byte `ArrayBuffer` and views it as a `Uint32Array`. It stores these values in the buffer:

```text
10
20
30
40
50
```

The buffer is sent to the Worker as a transferable object. The Worker then:

- Receives the `ArrayBuffer`.
- Creates a `Uint32Array` view of the received buffer.
- Multiplies every element by `2`.
- Sends the processed data back to the main thread.

The main thread receives and prints:

```text
20
40
60
80
100
```

Files:

- [`main.js`](./task-1/main.js) creates the buffer, sends it to the Worker, and receives the result.
- [`worker.js`](./task-1/worker.js) processes the typed array in the Worker thread.
- [`index.html`](./task-1/index.html) loads `main.js`.

## Running the exercise

Open [`task-1/index.html`](./task-1/index.html) through a local web server, then check the browser console for the result. Web Workers should be run from a server origin rather than directly from a `file://` URL.
