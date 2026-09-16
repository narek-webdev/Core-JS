/*
TASK 5 — Rewrite using Promises

function getName2() {
  return Promise.resolve("John");
}

async function showName() {
  const name = await getName2();
  console.log("Hello", name);
}

showName();
*/

function getName2() {
  return Promise.resolve("John");
}

getName2().then((name) => {
  console.log("Hello", name);
});
