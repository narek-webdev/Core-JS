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

//Array.prototype.shift()
Array.prototype.extractFirst = function () {
	this.length = normalizeLength(this.length);

	if (!this.length) return;

	const firstElement = this[0];

	for (let i = 1; i < this.length; ++i) {
		this[i - 1] = this[i];
	}

	--this.length;

	return firstElement;
}