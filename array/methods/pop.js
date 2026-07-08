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

//Array.prototype.pop()
Array.prototype.removeLast = function () {
	let len = normalizeLength(this.length);

	if (!len) return;

	let lastElem = this[len - 1];

	--len;

	this.length = len;

	delete this[this.length];

	return lastElem;
}