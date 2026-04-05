// ============================================
// TRUTHY VALUES IN JAVASCRIPT
// ============================================

/*
TRUTHY VALUES: Values that evaluate to TRUE in boolean contexts
FALSY VALUES: false, 0, "", null, undefined, NaN

Everything else is TRUTHY!
*/

console.log("--- Truthy Examples ---");

// Strings (non-empty)
console.log("String 'hello':", Boolean("hello")); // true
console.log("String '0':", Boolean("0")); // true (not empty!)
console.log("Empty string:", Boolean("")); // false

// Numbers (non-zero)
console.log("Number 1:", Boolean(1)); // true
console.log("Number -1:", Boolean(-1)); // true
console.log("Number 0:", Boolean(0)); // false
console.log("NaN:", Boolean(NaN)); // false

// Objects and Arrays
console.log("Empty object:", Boolean({})); // true
console.log("Empty array:", Boolean([])); // true
console.log("null:", Boolean(null)); // false
console.log("undefined:", Boolean(undefined)); // false

// ============================================
// PRACTICAL USAGE
// ============================================

console.log("\n--- Practical Examples ---");

// Checking if variable exists
let user = "John";
if (user) {
  console.log("User exists:", user);
}

let email; // undefined
if (!email) {
  console.log("Email is not provided");
}

// Checking array length
let items = ["apple", "banana"];
if (items.length) {
  console.log("Items found:", items.length);
}

// ============================================
// COMMON PITFALLS
// ============================================

console.log("\n--- Common Pitfalls ---");

// String "0" is truthy!
let count = "0";
if (count) {
  console.log("Count is truthy:", count); // This runs!
}

// Empty array is truthy!
let data = [];
if (data) {
  console.log("Data exists (but empty)"); // This runs!
}

// Check length instead
if (data.length > 0) {
  console.log("Data has items");
} else {
  console.log("Data is empty array"); // This runs
}

// ============================================
// TRUTHY IN CONDITIONAL OPERATORS
// ============================================

console.log("\n--- Conditional Operators ---");

// Logical AND (&&) - returns first falsy or last truthy
console.log("true && 'hello':", true && "hello"); // "hello"
console.log("false && 'hello':", false && "hello"); // false
console.log("'' && 'hello':", "" && "hello"); // ""

// Logical OR (||) - returns first truthy or last falsy
console.log("false || 'hello':", false || "hello"); // "hello"
console.log("'' || 'default':", "" || "default"); // "default"
console.log("0 || 42:", 0 || 42); // 42

// Nullish coalescing (??) - only null/undefined are falsy
console.log("null ?? 'default':", null ?? "default"); // "default"
console.log("'' ?? 'default':", "" ?? "default"); // "" (empty string is truthy)
console.log("0 ?? 'default':", 0 ?? "default"); // 0 (zero is truthy)



// Nullish coalescing operator (??) is a newer addition to JavaScript that provides a way to handle null or undefined values without treating other falsy values (like 0 or "") as nullish. It returns the right-hand operand only if the left-hand operand is null or undefined, making it ideal for providing default values while preserving valid falsy values.  