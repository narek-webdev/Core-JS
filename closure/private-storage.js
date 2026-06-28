/*
Private storage (Encapsulation)
Create a createStore() function.

Requirements:

Inside the function there must be a data array.
Direct access to the data array must be forbidden (encapsulation).
To work with the data, use only two methods: add(item) and getAll().

Example:
const store = createStore();
store.add(1);
store.add(2);
console.log(store.getAll()); // [1, 2]
*/

function createStore () {
	const data = [];

	return {
		getAll: function () {
		    return data;
		},
		add: function (item) {
		    data.push(item);
		}
	};
}

const store = createStore();
store.add(1);
store.add(2);
store.add(3);

console.log(store.getAll());