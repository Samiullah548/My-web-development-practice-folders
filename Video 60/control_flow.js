// ============================================
// IF-ELSE STATEMENTS
// ============================================

// Basic if-else
console.log("--- Basic If-Else ---");
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// ============================================
// ELSE IF (Multiple Conditions)
// ============================================

console.log("\n--- Else If Example ---");
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ============================================
// IF WITHOUT ELSE
// ============================================

console.log("\n--- If Without Else ---");
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
}

// ============================================
// NESTED IF-ELSE
// ============================================

console.log("\n--- Nested If-Else ---");
let isStudent = true;
let hasDiscount = false;

if (isStudent) {
  if (hasDiscount) {
    console.log("Student with discount: 50% off");
  } else {
    console.log("Student without discount: 10% off");
  }
} else {
  console.log("Regular customer: 5% off");
}

// ============================================
// LOGICAL OPERATORS (AND &&, OR ||)
// ============================================

console.log("\n--- Logical Operators ---");

// AND (&&) - both conditions must be true
let income = 50000;
let creditScore = 750;

if (income > 30000 && creditScore > 700) {
  console.log("Approved for loan");
} else {
  console.log("Loan denied");
}

// OR (||) - at least one condition must be true
let hasGithub = true;
let hasPortfolio = false;

if (hasGithub || hasPortfolio) {
  console.log("You can apply for the job");
} else {
  console.log("Please build your profile first");
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

console.log("\n--- Practical Examples ---");

// Password validation
let password = "MyPass123";

if (password.length >= 8) {
  console.log("Password is strong");
} else {
  console.log("Password must be at least 8 characters");
}

// Traffic light
let light = "red";

if (light === "red") {
  console.log("Stop!");
} else if (light === "yellow") {
  console.log("Slow down!");
} else if (light === "green") {
  console.log("Go!");
} else {
  console.log("Invalid light color");
}

// Even or Odd
let number = 5;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}
