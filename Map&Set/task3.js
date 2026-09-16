/*
Task 3 — Unique IDs

Given the following array:
const ids = [
    101, 205, 101, 307,
    205, 412, 307, 500,
    101, 412
];

Using a Set:
Get only the unique IDs.
Find the number of unique users.
Check whether 307 exists.
Check whether 999 exists.
Add 600.
Delete 205.
*/

const ids = [101, 205, 101, 307, 205, 412, 307, 500, 101, 412];

const set = new Set([...ids]); // Get only the unique IDs.

console.log(set.size); // Find the number of unique users.

console.log(set.has(307)); // Check whether 307 exists.

console.log(set.has(999)); // Check whether 999 exists.

set.add(600); // Add 600.

set.delete(205); //Delete 205.
