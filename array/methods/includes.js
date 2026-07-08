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

// Array.prototype.includes()
Array.prototype.contains = function (searchElement, fromIndex = 0) {
	this.length = normalizeLength(this.length);

	if (fromIndex < 0) {
		fromIndex = Math.max(fromIndex + this.length, 0);
	}

	for (let i = fromIndex; i < this.length; ++i) {
		if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
			return true;
		}

		if (searchElement === this[i]) {
			return true;
		}
	}

	return false;
}