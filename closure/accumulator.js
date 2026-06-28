/*
Summing function (Sum/Accumulator)
Create a sum() function.

Requirements:

The function must return a new function.
Each time a number is passed in, it must be added to the running total.
Return the current value of the total.

Example:
const add = sum();
add(5);  // 5
add(3);  // 8
add(10); // 18
*/

function sum () {
    let sum = 0;

	return function (num) {
		sum += num;
		return sum;
	}
}

const add = sum();
add(5);
add(5);
add(10);