function promiseAny (promises) {
	return new Promise((resolve, reject) => {
		if (!promises.length) {
			return reject(new AggregateError([new Error("All promises were rejected")]));
		}

		let errorsCount = 0;
		let rejectionReasons = [];

		for (let i = 0; i < promises.length; ++i) {
			Promise.resolve(promises[i])
			.then(resolve)
			.catch((err) => {
				rejectionReasons[i] = err;
				errorsCount++;

				if (errorsCount === promises.length) {
					return reject(new AggregateError(rejectionReasons, "All promises were rejected"));
				}
			})
		}
	});
}

// const p1 = Promise.reject("Error A");
// const p2 = Promise.reject("Error B");
// const p3 = Promise.reject("Error C");

// promiseAny([p1, p2, p3])
// .then(console.log)