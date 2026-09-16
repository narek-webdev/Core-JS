/*
TASK 1 — Rewrite using async/await

function getNumber() {
    return new Promise((resolve) => {
        resolve(10);
    });
}

getNumber()
    .then((number) => {
        console.log(number * 2);
    })
    .catch((error) => {
        console.log(error);
    });
*/

function getNumber() {
  return new Promise((resolve) => {
    resolve(10);
  });
}

async function main() {
  try {
    const number = await getNumber();
    console.log(number * 2);
  } catch (error) {
    console.log(error);
  }
}

main();
