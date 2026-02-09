// ============================================
// JAVASCRIPT ARRAY METHODS - DETAILED GUIDE
// ============================================

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(arr.length);

for(var i = 0; i < arr.length; i++) {
    if(i == 2) {
        break;
        // continue;
    }
console.log(arr[i]);
}  

// =============================================
// 1. PUSH() - Array ke end mein element add karta hai ✅
// =============================================
console.log("\n========== PUSH METHOD ==========");
var fruits = ["Apple", "Banana", "Orange"];
console.log("Pehle ka array:", fruits);

var length = fruits.push("Mango", "Pineapple");
console.log("Push ke baad:", fruits);
console.log("Naya length:", length);
// Kaise kaam karta hai: Push original array ko modify kar deta hai aur naya length return karta hai

// =============================================
// 2. POP() - Array ke end se element remove karta hai ✅
// =============================================
console.log("\n========== POP METHOD ==========");
var last = fruits.pop();
console.log("Jo element remove hua:", last);
console.log("Array ab:", fruits);
// Kaise kaam karta hai: Last element ko array se nikaal deta hai aur us element ko return karta hai

// =============================================
// 3. UNSHIFT() - Array ke start mein element add karta hai ✅
// =============================================
console.log("\n========== UNSHIFT METHOD ==========");
var colors = ["Red", "Blue"];
console.log("Pehle:", colors);

colors.unshift("Yellow", "Green");
console.log("Unshift ke baad:", colors);
// Kaise kaam karta hai: Start mein element add karta hai aur naya length return karta hai

// =============================================
// 4. SHIFT() - Array ke start se element remove karta hai ✅
// =============================================
console.log("\n========== SHIFT METHOD ==========");
var firstColor = colors.shift();
console.log("Pehla element:", firstColor);
console.log("Array ab:", colors);
// Kaise kaam karta hai: First element ko nikaal deta hai aur us element ko return karta hai

// =============================================
// 5. SLICE() - Array ka ek part nikalti hai (Original array change nahi hota) ✅
// =============================================
console.log("\n========== SLICE METHOD ==========");
var numbers = [10, 20, 30, 40, 50, 60];
console.log("Original array:", numbers);

var sliced1 = numbers.slice(2, 5);
console.log("slice(2, 5) - index 2 se 4 tak:", sliced1);
// 2 se shuru, 5 se pehle tak (5 nahi aata)

var sliced2 = numbers.slice(3);
console.log("slice(3) - index 3 se end tak:", sliced2);

var sliced3 = numbers.slice(-2);
console.log("slice(-2) - last 2 elements:", sliced3);

var sliced4 = numbers.slice();
console.log("slice() - pure array ki copy:", sliced4);
// Kaise kaam karta hai: Naya array return karta hai, original nahi change hota

// =============================================
// 6. SPLICE() - Array se elements remove/add karta hai (Original array change hota hai) ✅
// =============================================
console.log("\n========== SPLICE METHOD ==========");
var letters = ["A", "B", "C", "D", "E"];
console.log("Pehle:", letters);

var removed = letters.splice(2, 1);
console.log("splice(2, 1) se nikle hue:", removed);
console.log("Array ab:", letters);
// Index 2 se shuru karke 1 element remove hua

var nums = [1, 2, 3, 4, 5];
nums.splice(2, 0, 30, 40);
console.log("splice(2, 0, 30, 40):", nums);
// Index 2 par 30 aur 40 insert kiye, koi remove nahi

var data = [10, 20, 30, 40, 50];
var changed = data.splice(1, 2, 100, 200);
console.log("Remove ke sath add:", data);
// Index 1 se 2 elements nikale aur 100, 200 add kiye

// =============================================
// 7. CONCAT() - Multiple arrays ko combine karta hai ✅
// =============================================
console.log("\n========== CONCAT METHOD ==========");
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var combined = arr1.concat(arr2, arr3);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("Combined array:", combined);
// Kaise kaam karta hai: Naya array return karta hai, original arrays change nahi hote
// Original arrays: arr1 === [1, 2, 3] (change nahi hua)

// =============================================
// 8. JOIN() - Array elements ko string mein convert karta hai ✅
// =============================================
console.log("\n========== JOIN METHOD ==========");
var words = ["Hello", "JavaScript", "World"];
console.log("Array:", words);

var sentence1 = words.join(" ");
console.log("join(' '):", sentence1);

var sentence2 = words.join("-");
console.log("join('-'):", sentence2);

var sentence3 = words.join("");
console.log("join(''):", sentence3);

var sentence4 = words.join();
console.log("join() default:", sentence4);
// Kaise kaam karta hai: Elements ko separator se join karke string return karta hai

// =============================================
// 9. REVERSE() - Array ko ulta (reverse) karta hai ✅
// =============================================
console.log("\n========== REVERSE METHOD ==========");
var nums1 = [1, 2, 3, 4, 5];
console.log("Pehle:", nums1);

nums1.reverse();
console.log("Reverse ke baad:", nums1);
// Kaise kaam karta hai: Original array ko reverse karta hai (mutating method)

// =============================================
// 10. SORT() - Array ko sort karta hai ✅
// =============================================
console.log("\n========== SORT METHOD ==========");
var unsorted = [40, 100, 1, 5, 25, 10];
console.log("Unsorted:", unsorted);

unsorted.sort();
console.log("sort() - String ke taur pe sort:", unsorted);
// String comparison karta hai to 1 < 10 < 100 < 25 < 40 dikhta hai

var numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort(function(a, b) {
    return a - b; // Ascending order
});
console.log("sort(function) - Ascending:", numbers1);

var numbers2 = [40, 100, 1, 5, 25, 10];
numbers2.sort(function(a, b) {
    return b - a; // Descending order
});
console.log("sort(function) - Descending:", numbers2);

// String sort
var fruits1 = ["Mango", "Apple", "Banana", "Cherry"];
fruits1.sort();
console.log("String sort:", fruits1);

// =============================================
// 11. FIND() - Pehla element jo condition match kare (Non-mutating) ✅
// =============================================
console.log("\n========== FIND METHOD ==========");
var ages = [5, 12, 8, 130, 44];
console.log("Array:", ages);

var found = ages.find(function(age) {
    return age > 18;
});
console.log("pehla age jo 18 se zada hai:", found);
// 130 return hoga

var notFound = ages.find(function(age) {
    return age > 200;
});
console.log("age jo 200 se zada hai:", notFound);
// undefined return hoga

// =============================================
// 12. FINDINDEX() - Pehla element ki index return karta hai ✅
// =============================================
console.log("\n========== FINDINDEX METHOD ==========");
var index = ages.findIndex(function(age) {
    return age > 18;
});
console.log("Index of first age > 18:", index);
// 3 return hoga (index position par 130 hai)

var notFoundIndex = ages.findIndex(function(age) {
    return age > 200;
});
console.log("Index agar match nahi:", notFoundIndex);
// -1 return hoga

// =============================================
// 13. INDEXOF() - Element ki pehli index search karta hai ✅
// =============================================
console.log("\n========== INDEXOF METHOD ==========");
var items = ["Apple", "Banana", "Orange", "Banana", "Mango"];
console.log("Array:", items);

var idx1 = items.indexOf("Banana");
console.log("indexOf('Banana'):", idx1);
// 1 return hoga (pehli baar Banana index 1 par hai)

var idx2 = items.indexOf("Strawberry");
console.log("indexOf('Strawberry'):", idx2);
// -1 return hoga (nahi mila)

// =============================================
// 14. LASTINDEXOF() - Element ki last index search karta hai ✅
// =============================================
console.log("\n========== LASTINDEXOF METHOD ==========");
var lastIdx = items.lastIndexOf("Banana");
console.log("lastIndexOf('Banana'):", lastIdx);
// 3 return hoga (aakhri baar Banana index 3 par hai)

// =============================================
// 15. INCLUDES() - Check karta hai ke element array mein hai ya nahi ✅
// =============================================
console.log("\n========== INCLUDES METHOD ==========");
var numbers3 = [1, 2, 3, 4, 5];
console.log("Array:", numbers3);

console.log("includes(3):", numbers3.includes(3));
// true
console.log("includes(10):", numbers3.includes(10));
// false

var hasElement = ["Cat", "Dog", "Bird"].includes("Dog");
console.log("hasElement:", hasElement);
// true

// =============================================
// 16. FILTER() - Condition ke basis par filter karta hai ✅
// =============================================
console.log("\n========== FILTER METHOD ==========");
var numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", numbers4);

var evenNumbers = numbers4.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);
// [2, 4, 6, 8, 10]

var greaterThan5 = numbers4.filter(function(num) {
    return num > 5;
});
console.log("Numbers > 5:", greaterThan5);
// [6, 7, 8, 9, 10]

// Objects ke saath
var students = [
    { name: "Ali", marks: 85 },
    { name: "Sara", marks: 92 },
    { name: "Ahmed", marks: 78 },
    { name: "Fatima", marks: 88 }
];

var toppers = students.filter(function(student) {
    return student.marks >= 85;
});
console.log("Toppers (marks >= 85):", toppers);

// Kaise kaam karta hai: Condition true jo elements hain unka new array return karta hai

// =============================================
// 17. MAP() - Har element par function apply karta hai ✅
// =============================================
console.log("\n========== MAP METHOD ==========");
var nums2 = [1, 2, 3, 4, 5];
console.log("Original array:", nums2);

var doubled = nums2.map(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);
// [2, 4, 6, 8, 10]

var squared = nums2.map(function(num) {
    return num * num;
});
console.log("Squared:", squared);
// [1, 4, 9, 16, 25]

// Convert strings to numbers
var stringNumbers = ["1", "2", "3", "4", "5"];
var intNumbers = stringNumbers.map(function(str) {
    return parseInt(str);
});
console.log("String to numbers:", intNumbers);

// Objects transform karna
var products = [
    { name: "Shirt", price: 500 },
    { name: "Pants", price: 1000 },
    { name: "Shoes", price: 2000 }
];

var productNames = products.map(function(product) {
    return product.name;
});
console.log("Product names:", productNames);
// ["Shirt", "Pants", "Shoes"]

var discountedPrices = products.map(function(product) {
    return product.price * 0.8; // 20% discount
});
console.log("Discounted prices:", discountedPrices);

// Kaise kaam karta hai: Har element par function apply karke naya array return karta hai

// =============================================
// 18. FOREACH() - Har element ke liye loop run karta hai (return nahi karta) ✅
// =============================================
console.log("\n========== FOREACH METHOD ==========");
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

console.log("Cities:");
cities.forEach(function(city, index) {
    console.log(index + ": " + city);
});

var total = 0;
var prices = [100, 200, 300, 400];
prices.forEach(function(price) {
    total += price;
});
console.log("Total sum:", total);

// Kaise kaam karta hai: Har element par function chalata hai lekin kuch return nahi karta

// =============================================
// 19. REDUCE() - Array ko single value mein convert karta hai ✅
// =============================================
console.log("\n========== REDUCE METHOD ==========");
var nums3 = [1, 2, 3, 4, 5];
console.log("Array:", nums3);

var sum = nums3.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum using reduce:", sum);
// 0+1+2+3+4+5 = 15

var product = nums3.reduce(function(acc, num) {
    return acc * num;
}, 1);
console.log("Product using reduce:", product);
// 1*1*2*3*4*5 = 120

// Array ko object mein convert karna
var colors1 = ["red", "green", "blue"];
var colorObj = colors1.reduce(function(obj, color, index) {
    obj[index] = color;
    return obj;
}, {});
console.log("Array to object:", colorObj);
// { 0: "red", 1: "green", 2: "blue" }

// Word count
var wordList = ["apple", "banana", "apple", "cherry", "banana", "apple"];
var wordCount = wordList.reduce(function(count, word) {
    if (count[word]) {
        count[word]++;
    } else {
        count[word] = 1;
    }
    return count;
}, {});
console.log("Word count:", wordCount);

// Kaise kaam karta hai: Accumulator (pichli value) + current value ko process karke final value return karta hai

// =============================================
// 20. SOME() - Check karta hai ke koi bhi element condition match kare ✅
// =============================================
console.log("\n========== SOME METHOD ==========");
var ages1 = [5, 12, 8, 130, 44];
console.log("Ages:", ages1);

var hasAdult = ages1.some(function(age) {
    return age >= 18;
});
console.log("Kiya koi adult hai:", hasAdult);
// true

var allGreater = ages1.some(function(age) {
    return age > 150;
});
console.log("Kiya koi 150 se zada age hai:", allGreater);
// false

// Kaise kaam karta hai: Agar koi bhi element true return kare to true, warna false

// =============================================
// 21. EVERY() - Check karta hai ke sab elements condition match karay ✅
// =============================================
console.log("\n========== EVERY METHOD ==========");
var numbers5 = [2, 4, 6, 8, 10];
console.log("Numbers:", numbers5);

var allEven = numbers5.every(function(num) {
    return num % 2 === 0;
});
console.log("Sab even hain:", allEven);
// true

var numbers6 = [2, 4, 6, 8, 9];
var allEven2 = numbers6.every(function(num) {
    return num % 2 === 0;
});
console.log("Sab even hain (2nd array):", allEven2);
// false

// Objects ke saath
var grades = [
    { student: "Ali", pass: true },
    { student: "Sara", pass: true },
    { student: "Ahmed", pass: false }
];

var allPass = grades.every(function(grade) {
    return grade.pass === true;
});
console.log("Sab pass hue:", allPass);
// false

// Kaise kaam karta hai: Agar sab elements true return karay to true, otherwise false

// =============================================
// 22. FILL() - Array ke elements ko specific value se fill karta hai ✅
// =============================================
console.log("\n========== FILL METHOD ==========");
var array1 = [1, 2, 3, 4, 5];
console.log("Original:", array1);

var array2 = [1, 2, 3, 4, 5];
array2.fill(0);
console.log("fill(0) - pura array:", array2);

var array3 = [1, 2, 3, 4, 5];
array3.fill(99, 2, 4);
console.log("fill(99, 2, 4) - index 2 se 3 tak:", array3);

// Kaise kaam karta hai: Original array ko modify karta hai specific value se

// =============================================
// 23. FLAT() - Nested arrays ko flat karta hai ✅
// =============================================
console.log("\n========== FLAT METHOD ==========");
var nested = [1, 2, [3, 4, [5, 6]]];
console.log("Nested array:", nested);

var flat1 = nested.flat();
console.log("flat() - 1 level:", flat1);
// [1, 2, 3, 4, [5, 6]]

var flat2 = nested.flat(2);
console.log("flat(2) - 2 levels:", flat2);
// [1, 2, 3, 4, 5, 6]

var flat3 = nested.flat(Infinity);
console.log("flat(Infinity) - sab levels:", flat3);
// [1, 2, 3, 4, 5, 6]

// Kaise kaam karta hai: Nested arrays ko flatten karke naya array return karta hai

// =============================================
// 24. FLATMAP() - MAP aur FLAT dono karta hai ✅
// =============================================
console.log("\n========== FLATMAP METHOD ==========");
var nums4 = [1, 2, 3, 4];
console.log("Array:", nums4);

var result = nums4.flatMap(function(num) {
    return [num, num * 2];
});
console.log("flatMap(num => [num, num*2]):", result);
// [1, 2, 2, 4, 3, 6, 4, 8]

// Sentences ko words mein split karna
var sentences = ["Hello world", "JavaScript is fun"];
var words = sentences.flatMap(function(sentence) {
    return sentence.split(" ");
});
console.log("Words:", words);
// ["Hello", "world", "JavaScript", "is", "fun"]

// =============================================
// SUMMARY TABLE
// =============================================
console.log("\n========== METHOD SUMMARY ==========");
console.log(`
MUTATING METHODS (Original array badlati hain):
├─ push()      - End mein element add
├─ pop()       - End se element nikale
├─ unshift()   - Start mein element add
├─ shift()     - Start se element nikale
├─ splice()    - Elements remove/add
├─ reverse()   - Array ko ulta karta hai
├─ sort()      - Array ko sort karta hai
└─ fill()      - Array ko specific value se fill karta hai

NON-MUTATING METHODS (Original array safe rahti hai):
├─ slice()     - Array ka part nikale
├─ concat()    - Arrays ko combine karta hai
├─ join()      - Array ko string mein convert karta hai
├─ map()       - Har element transform karta hai
├─ filter()    - Condition basis par filter karta hai
├─ reduce()    - Array ko single value mein convert karta hai
├─ flat()      - Nested arrays ko flatten karta hai
└─ flatMap()   - Map aur flat dono karta hai

SEARCH/CHECK METHODS:
├─ indexOf()        - Element ki index dhundhta hai
├─ lastIndexOf()    - Last index return karta hai
├─ includes()       - Element present hai ya nahi check karta hai
├─ find()           - Condition match karne wala element dhundhta hai
└─ findIndex()      - Condition match karne wala element ki index dhundhta hai

ITERATION METHODS:
├─ forEach()  - Har element par function chalata hai
├─ some()     - Kiya koi element condition match kare
└─ every()    - Kiya sab elements condition match karay
`);