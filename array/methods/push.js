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

// Array.prototype.push()
Array.prototype.append = function (...rest) {
	let len = normalizeLength(this.length);

	for (let i = 0; i < rest.length; ++i) {
		this[len] = rest[i];
		++len;
	}

	this.length = len;

	return this.length;
}