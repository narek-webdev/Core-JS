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

// Array.prototype.reverse()
Array.prototype.reversePolyfill = function () {
	this.length = normalizeLength(this.length);

	let steps = Math.floor(this.length / 2);
	let i = 0;

	while (steps) {
		const last = this.length - i - 1;

		if (!(i in this)) {
			this[i] = this[last];
			delete this[last];
		} else if (!(last in this)) {
			this[last] = this[i];
			delete this[i];
		} else {
			const tmp = this[i];
			this[i] = this[last];
			this[last] = tmp;
		}

		++i;
		--steps;
	}

	return this;
}