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

// Array.prototype.some()
Array.prototype.any = function (callbackFn, thisArg) {
	this.length = normalizeLength(this.length);

	for (let i = 0; i < this.length; ++i) {
		if (callbackFn.call(thisArg, this[i], i, this)) {
			return true;
		}
	}

	return false;
}