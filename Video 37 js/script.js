// function avg(a, b) {
//     return (a + b) / 2;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// conditionals in JavaScript

var age = 41;
// Single if statement
if (age > 18) {
    console.log("You can vote");
}

// if-else statement
if (age > 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// if-else ladder
if (age > 32) {
    console.log("You are not a kid");
}
else if (age > 26) {
    console.log("You are a grown up");
}
else if (age > 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// For loop in JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
        // continue;
    }
    console.log(arr[i]);
}

// while loop in JavaScript
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods in JavaScript
console.log(myArr.length); //Output will be 5, And 5 is the length of the array
// myArr.pop(); // It will remove the last element of the array, and it will return the removed element, which is true in this case
myArr.push("Samiullah"); // It will add the element at the end of the array, and it will return the new length of the array, which is 6 in this case
console.log(myArr); // Output will be ["Fan", "Camera", 34, null, true, "Samiullah"]
myArr.push("Samiullah"); // It will add the element at the end of the array, and it will return the new length of the array, which is 7 in this case
console.log(myArr); // Output will be ["Fan", "Camera", 34, null, true, "Samiullah", "Samiullah"]



