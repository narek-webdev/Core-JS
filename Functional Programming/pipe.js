function pipe (...funcs) {
	return function nested (n) {
		nested.steps ??= 0;

		if (nested.steps >= funcs.length) {
			return n;
		} else {
			return nested.call(this, funcs[nested.steps++].call(this, n));
		}
	}
}