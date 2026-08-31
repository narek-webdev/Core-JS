function promiseAll (promises) {
	return new Promise((resolve, reject) => {
		if (!promises.length) return resolve([]);

		let result = new Array(promises.length);
		let comletedPromisesCount = 0;

		for (let i = 0; i < promises.length; ++i) {
			Promise.resolve(promises[i]).then(value => {
				result[i] = value;
				comletedPromisesCount++;
				
				if (comletedPromisesCount === result.length) {
					return resolve(result);
				}
			}).catch(reject)
		}
	});
}

// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");
// const p4 = Promise.reject("Err");

// promiseAll([p1, p2, p3, p4])
//   .then(result => {
//     console.log(result);
//   });