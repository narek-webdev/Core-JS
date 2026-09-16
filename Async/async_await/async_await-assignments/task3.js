/*
TASK 3 — Rewrite using async/await

function getName() {
    return Promise.resolve("Albert");
}

function getAge() {
    return Promise.resolve(23);
}

getName()
    .then((name) => {
        console.log(name);
        return getAge();
    })
    .then((age) => {
        console.log(age);
    });
*/

function getName() {
  return Promise.resolve("Albert");
}

function getAge() {
  return Promise.resolve(23);
}

async function main() {
  const name = await getName();
  console.log(name);
  const age = await getAge();
  console.log(age);
}

main();
