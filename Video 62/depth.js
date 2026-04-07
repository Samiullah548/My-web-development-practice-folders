// for...in Loop
// The for...in loop iterates over the enumerable properties of an object (including inherited ones). It returns the property names (keys) as strings.

// Syntax:
// for (let key in object) {
//   // code to execute
// }

// Example:
// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log(key, obj[key]); // Outputs: a 1, b 2, c 3
// }

// Notes:
// - Use for objects; not recommended for arrays (use indices instead).
// - Includes prototype properties; use hasOwnProperty to filter.
// - Order is not guaranteed.

// for...of Loop
// The for...of loop iterates over iterable objects (arrays, strings, Maps, Sets, etc.) and returns the values directly.

// Syntax:
// for (let value of iterable) {
//   // code to execute
// }

// Example:
// const arr = [1, 2, 3];
// for (let value of arr) {
//   console.log(value); // Outputs: 1, 2, 3
// }

// Notes:
// - Works with any iterable (not plain objects).
// - Cannot iterate over object properties directly (use for...in or Object.keys).
// - Maintains insertion order for ordered iterables.

// Maps
// A Map is a collection of key-value pairs where keys can be any type (objects, functions, primitives). Unlike plain objects, Maps preserve insertion order and allow keys of any type.

// Creating a Map:
// const map = new Map();
// map.set('key1', 'value1');
// map.set(42, 'value2');

// Methods:
// - set(key, value): Adds or updates a key-value pair.
// - get(key): Retrieves the value for a key.
// - has(key): Checks if a key exists.
// - delete(key): Removes a key-value pair.
// - clear(): Removes all pairs.
// - size: Property for the number of pairs.

// Iteration:
// for (let [key, value] of map) {
//   console.log(key, value);
// }

// Notes:
// - Keys are compared by reference (not value).
// - Better than objects for frequent additions/deletions or non-string keys.
// - Use for...of or map.forEach() for iteration.