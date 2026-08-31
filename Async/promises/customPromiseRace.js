function promiseRace (promises) {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; ++i) {
			Promise.resolve(promises[i]).then(resolve, reject);
		}
	})
}

const slowPromise = new Promise(resolve => {
  setTimeout(() => resolve("Hello"), 2000);
});

promiseRace([slowPromise, 90]).then((value) => {
  console.log(value);
});