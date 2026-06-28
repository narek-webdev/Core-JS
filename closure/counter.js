/* 
Counter with a custom step (Counter with step)
Create a makeCounter(step) function.

Requirements:

The function must return another function.
The returned function must, on each call, increase the value by step.
The state must be preserved using a closure.

Example:
const counter = makeCounter(2);
counter(); // 2
counter(); // 4
counter(); // 6
*/

function makeCounter (step) {
	let count = 0;
	
    return function () {
		count += step;
		return count;
	}
}

const counter = makeCounter(2);
console.log(counter());
console.log(counter());