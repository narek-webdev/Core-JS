function promiseAllSettled (promises) {
	return new Promise((resolve, _) => {
		if (!promises.length) return resolve([]);

		let result = new Array(promises.length);
		let completedCount = 0;

		for (let i = 0; i < promises.length; ++i) {
			Promise.resolve(promises[i]).then(val => {
				result[i] = {
					status: 'fulfilled', value: val
				};
			}).catch(err => {
				result[i] = {
					status: 'rejected', reason: err
				};
			})
			.finally(() => {
				completedCount++;
				if (completedCount === promises.length) {
					return resolve(result);
				}
			})
		}
	})
}

// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("Something went wrong");
// const p3 = Promise.resolve("C");

// promiseAllSettled([p1, p2, p3]).then(console.log)