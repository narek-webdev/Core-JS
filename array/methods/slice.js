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

// Array.prototype.slice()
Array.prototype.copyRange = function (start = 0, end) {
	this.length = normalizeLength(this.length);

	if (end === undefined) {
		end = this.length;
	}

	if (end < 0) {
		end = end + this.length;
	}

	if (start < 0) {
		start = end + start;
	}

	let result = [];

	for (let i = start; i < end; ++i) {
		if (!(i in this)) {
			result.length++;
			continue;
		}

		result.push(this[i]);
	}

	return result;
}