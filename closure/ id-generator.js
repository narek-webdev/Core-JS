/*
ID Generator
Create a createIdGenerator(prefix) function.

Requirements:

Returns a function that generates a unique ID.
The ID format must be: prefix + number (for example, "user_1").


Example:

const gen = createIdGenerator("user_");
gen(); // user_1
gen(); // user_2
gen(); // user_3
*/

function createIdGenerator (prefix) {
    let id = 0;
    
    return function () {
        return prefix + (++id);
    }
}

const gen = createIdGenerator("user_");
gen();
gen();
gen();