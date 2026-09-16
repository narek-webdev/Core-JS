/*
Task 2 — Word Counter

Given the following array:

const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "kiwi",
    "orange"
];

Using only a Map to store the results, count how many times each word appears.
Expected result:
apple → 3
banana → 2
orange → 2
kiwi → 1
*/

const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi",
  "orange",
];

const mapWords = new Map();

for (const word of words) {
  if (mapWords.has(word)) {
    mapWords.set(word, mapWords.get(word) + 1);
  } else {
    mapWords.set(word, 1);
  }
}

console.log(mapWords);