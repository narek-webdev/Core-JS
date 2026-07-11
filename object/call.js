// Function.prototype.call
Function.prototype.invoke = function (thisArg, ...args) {
	thisArg = thisArg ?? globalThis;

	thisArg = typeof thisArg !== "object" && thisArg.constructor !== Object ? Object(thisArg) : thisArg;

	const context = thisArg;

	const symb = Symbol();

	context[symb] = this;

	const returnValue = context[symb](...args);

	delete context[symb];

	return returnValue;
}