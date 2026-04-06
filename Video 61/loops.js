// For Loop Example
console.log("For Loop:");
for (let i = 0; i <= 5; i++) {
    console.log(i);  // Outputs: 0, 1, 2, 3, 4, 5
}

// Break and Continue Examples
console.log("\nBreak Example:");
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

console.log("\nContinue Example:");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);  // Outputs: 0, 1, 3, 4 (skips 2)
}

// While Loop Example
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
    console.log(j);  // Outputs: 0, 1, 2, 3, 4
    j++;
}

// Do-While Loop Example
console.log("\nDo-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 6);  // Outputs: 0, 1, 2, 3, 4, 5, 6

// for of Loop Example
console.log("\nFor Of Loop:");
const array = ['a', 'b', 'c'];
for (const num of array) {
    console.log(num);  // Outputs: 'a', 'b', 'c' 
}

const greeting = "Hello World";

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);  // Outputs: 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'
}

Maps 

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);  // Outputs: 'name: John', 'age: 30'
}