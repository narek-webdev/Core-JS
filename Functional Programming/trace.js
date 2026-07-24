function trace (cb) {
	return function wrapper (...args) {
		wrapper.history ??= [];
		wrapper.steps ??= 0;

		if (wrapper.steps < cb.length) {
			const [arg1, arg2] = args;
			wrapper.steps++;
			let output = cb.apply(this, [arg1, arg2]);
			wrapper.history.push({args: [arg1, arg2], output});
			return output;
		}
	}
}