// // Array in JavaScript

// // Definition:
// // Array ek ordered collection of elements hota hai jisme values square brackets [ ] ke andar store hoti hain.

// Example
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// // Array Index

// // Array me har element ka index number hota hai jo 0 se start hota hai.

// Example

// //     Index	      Value
// //     0	          Apple
// //     1	          Banana
// //     2	          Mango

// console.log(fruits[0]); 
// console.log(fruits[1]);


// // Array Create Karne Ke Tarike
// // 1. Using Square Brackets
// let numbers = [10, 20, 30];
// // 2. Using Array Constructor
// // let numbers = new Array(10,20,30);
// // Important Array Methods
// // 1. push()

// // Array ke end me element add karta hai.

// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");

// Result

// ["Apple","Banana","Mango"]

// 2. pop()

// Array ke last element ko remove karta hai.

// fruits.pop();

// 3. shift()

// Array ke first element ko remove karta hai.

// fruits.shift();
// 4. unshift()

// Array ke start me element add karta hai.

// fruits.unshift("Orange");
// 5. length

// Array ki total elements count batata hai.

// console.log(fruits.length);
// 6. indexOf()

// Kisi element ka index find karta hai.

// fruits.indexOf("Mango");
// 7. join()

// Array ko string me convert karta hai.

// fruits.join("-");

// Output

// Apple-Banana-Mango
// Example Program
// let numbers = [10,20,30];

// numbers.push(40);

// console.log(numbers);
// console.log(numbers.length);

// // Output

// // [10,20,30,40]
// // 4