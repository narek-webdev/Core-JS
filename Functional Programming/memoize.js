function factorial (a) {
	let res = 1;

	for (let i = 2; i <= a; ++i) {
		res *= i;
	}

	return res;
}

function memorize (cb) {
	memorize.cache ??= {};
	return function (arg) {
		if (arg in memorize.cache) {
			return memorize.cache[arg];
		}
		memorize.cache[arg] = cb(arg);
		return memorize.cache[arg];
	}
}
