Array.prototype.mySum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; ++i) {
    if (typeof this[i] !== "number" || isNaN(this[i])) {
      throw new Error("Must be an array of integers");
    }
    sum += this[i];
  }

  return sum;
};

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error
