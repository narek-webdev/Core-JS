function normalizeLength (length) {	
	let len = Number(length);

	if (Number.isNaN(len) || len < 0) {
		return 0;
	}

	if (len === Infinity) {
		return (2 ** 53) - 1;
	}

	len = Math.floor(len);

	return Math.min(len, (2 ** 53) - 1);
}

//Array.prototype.reduce()
Array.prototype.accumulate = function(callbackFn, initialValue) {
	this.length = normalizeLength(this.length);

	if (!this.length && initialValue === undefined) {
		throw Error();
	}

	let accumulator = initialValue === undefined ? this[0] : initialValue;
	let initialIndex = initialValue === undefined ? 1 : 0;

	for (let i = initialIndex; i < this.length; ++i) {
		accumulator = callbackFn(accumulator, this[i], i, this);
	}

	return accumulator;
}