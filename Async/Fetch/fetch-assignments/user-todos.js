async function combined() {
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=3",
  );

  const data = await request.json();

  const completedTasks = data.filter(({ completed }) => completed);
  const inCompletedTasks = data.filter(({ completed }) => !completed);

  console.log("Only completed");
  console.log("//////////////////////////////////");
  console.log(completedTasks);
  console.log("//////////////////////////////////");

  console.log("Only incompleted");
  console.log("//////////////////////////////////");
  console.log(inCompletedTasks);
  console.log("//////////////////////////////////");

  console.log("Count");
  console.log("//////////////////////////////////");
  console.log(
    `Completed ${completedTasks.length} of ${inCompletedTasks.length}`,
  );
  console.log("//////////////////////////////////");
}

combined();