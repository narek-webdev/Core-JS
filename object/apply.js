// Function.prototype.apply
Function.prototype.invokeWithArray = function (thisArg, argsArray) {
	if (!Array.isArray(argsArray)) {
		throw Error();
	}

	thisArg = thisArg ?? globalThis;

	thisArg = typeof thisArg !== "object" && thisArg.constructor !== Object ? Object(thisArg) : thisArg;

	const context = thisArg;

	const symb = Symbol();

	context[symb] = this;

	const returnValue = context[symb](...argsArray);

	delete context[symb];

	return returnValue;
}