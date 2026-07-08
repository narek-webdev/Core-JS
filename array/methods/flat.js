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

// Array.prototype.flat()
Array.prototype.flattenDepth = function (depth = 1) {
	if (isNaN(depth) || +depth <= 0) {
		return [...this];
	}

	this.length = normalizeLength(this.length);

	let result = [];

	for (let i = 0; i < this.length; ++i) {
		if (!(i in this)) continue;

		if (!Array.isArray(this[i])) {
			result.push(this[i]);
			continue;
		}

		result.push(...this[i].flattenDepth(depth - 1));
	}

	return result;
}