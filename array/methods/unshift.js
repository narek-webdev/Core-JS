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

//Array.prototype.unshift()
Array.prototype.prepend = function (...rest) {
	this.length = normalizeLength(this.length);

	let initialLastIndex = this.length - 1;
	this.length += rest.length;

	for (let i = this.length - 1; i >= 0; --i) {
		this[i] = this[initialLastIndex];
		--initialLastIndex; 
	}

	for (let j = 0; j < rest.length; ++j) {
		this[j] = rest[j];
	}

	return this.length;
}