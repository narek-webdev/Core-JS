/*
TASK 4 — Rewrite using Promises

function getNumber2() {
    return Promise.resolve(5);
}

async function calculate() {
    const number = await getNumber2();

    console.log(number * 3);
}

calculate();
*/

function getNumber2() {
  return Promise.resolve(5);
}

getNumber2().then((number) => {
  console.log(number * 3);
});
