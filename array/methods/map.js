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

//Array.prototype.map()
Array.prototype.transform = function (callbackFn, thisArg) {
	this.length = normalizeLength(this.length);
    
    let new_arr = [];

	for (let i = 0; i < this.length; ++i) {
		if (i in this) {
			new_arr.push(callbackFn.call(thisArg, this[i], i, this));
		} else {
			new_arr.length++;
		}
	}

	return new_arr;
}