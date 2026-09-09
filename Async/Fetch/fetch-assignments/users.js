async function allUsers() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await request.json();

  console.log("Names");
  console.log("//////////////////////////////////");
  for (const { name } of result) {
    console.log(name);
  }
  console.log("//////////////////////////////////");

  console.log("Emails");
  console.log("//////////////////////////////////");
  for (const { email } of result) {
    console.log(email);
  }
  console.log("//////////////////////////////////");

  console.log("Specific User");
  console.log("//////////////////////////////////");
  console.log(result.find(({ username }) => username === "Bret"));
  console.log("//////////////////////////////////");
}

allUsers();