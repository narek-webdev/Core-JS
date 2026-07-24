function curry (cb) {
	return function curried (...args) {
		if (args.length >= cb.length) {
			return cb.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, [...args, ...args2])
			}
		}
	}
}