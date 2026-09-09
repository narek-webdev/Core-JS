async function randomPeople() {
  const request = await fetch("https://randomuser.me/api/?results=20");
  const { results } = await request.json();

  const olderThan18 = results.filter(({ dob: { age } }) => age >= 18);
  const olderThan30 = results.filter(({ dob: { age } }) => age >= 30);
  const younderThan25 = results.filter(({ dob: { age } }) => age < 25);

  console.log("Older than 18");
  console.log("//////////////////////////////////");
  console.log(olderThan18);
  console.log("//////////////////////////////////");

  console.log("Count older than 30");
  console.log("//////////////////////////////////");
  console.log(olderThan30.length);
  console.log("//////////////////////////////////");

  console.log("Younger than 25");
  console.log("//////////////////////////////////");
  for (const {
    name: { first },
  } of younderThan25) {
    console.log(first);
  }
  console.log("//////////////////////////////////");
}

randomPeople();