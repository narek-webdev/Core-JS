/*
Task 1 — User Roles

Create a Map where:
key → userId
value → user role

Given data:
const users = new Map([
    [101, "admin"],
    [205, "user"],
    [307, "moderator"],
    [412, "user"]
]);

Requirements:
Get the role of user 307.
Check whether user 500 exists.
Change the role of user 205 to "moderator".
Delete user 412.
Print the number of users.
Iterate over the Map and print:
101 → admin
205 → moderator
307 → moderator
*/

const users = new Map([
  [101, "admin"],
  [205, "user"],
  [307, "moderator"],
  [412, "user"],
]);

console.log(users.get(307)); // Get the role of user 307.
console.log(users.has(500)); // Check whether user 500 exists.
users.set(205, "moderator"); // Change the role of user 205 to "moderator".
users.delete(412); // Delete user 412.
console.log(users.size); // Print the number of users.

// Iterate over the Map and print:
for (const [k, v] of users) {
  console.log(`${k} → ${v}`);
}
