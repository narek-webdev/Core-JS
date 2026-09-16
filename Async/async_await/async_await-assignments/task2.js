/*
TASK 2 — Rewrite using async/await

function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello!");
        }, 1000);
    });
}

getMessage()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
*/

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 1000);
  });
}

async function main() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

main();
