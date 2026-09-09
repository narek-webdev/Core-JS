async function postByOneUser() {
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=2",
  );
  const data = await request.json();

  console.log("Number of posts");
  console.log("//////////////////////////////////");
  console.log(data.length);
  console.log("//////////////////////////////////");

  console.log("Print titles");
  console.log("//////////////////////////////////");
  for (const { title } of data) {
    console.log(title);
  }
  console.log("//////////////////////////////////");

  console.log("Find post");
  console.log("//////////////////////////////////");
  console.log(data.find(({ id }) => id === 15) ?? "Not found");
  console.log("//////////////////////////////////");
}

postByOneUser();