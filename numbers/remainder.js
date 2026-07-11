function remainder (a, b) {
	if (isNaN(a) || isNaN(b) || a === Infinity || a === -Infinity) return NaN;

	if (b === Infinity || b === -Infinity) return a;

	return a - (b * Math.trunc(a / b));
}