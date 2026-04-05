// ============================================
// SWITCH STATEMENT
// ============================================

// Switch statements are used when you have multiple conditions
// based on a single value. They're often cleaner than long if-else chains.

console.log("--- Basic Switch Example ---");
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular workday");
}

// ============================================
// SWITCH WITH NUMBERS
// ============================================

console.log("\n--- Switch with Numbers ---");
let rating = 3;

switch (rating) {
  case 1:
    console.log("Very poor");
    break;
  case 2:
    console.log("Poor");
    break;
  case 3:
    console.log("Average");
    break;
  case 4:
    console.log("Good");
    break;
  case 5:
    console.log("Excellent");
    break;
  default:
    console.log("Invalid rating");
}

// ============================================
// FALL-THROUGH BEHAVIOR
// ============================================

console.log("\n--- Fall-Through Example ---");
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
    console.log("This is a pome fruit");
    break;
  case "orange":
  case "lemon":
    console.log("This is a citrus fruit");
    break;
  default:
    console.log("Unknown fruit type");
}

// ============================================
// PRACTICAL EXAMPLE: MENU SYSTEM
// ============================================

console.log("\n--- Menu System Example ---");
let choice = "2";

switch (choice) {
  case "1":
    console.log("Selected: View Profile");
    break;
  case "2":
    console.log("Selected: Edit Settings");
    break;
  case "3":
    console.log("Selected: Logout");
    break;
  default:
    console.log("Invalid choice");
}

// ============================================
// COMMON DOUBTS & EXPLANATIONS
// ============================================

/*
DOUBT 1: When to use switch vs if-else?
- Use switch when checking ONE variable against MULTIPLE values
- Use if-else when checking DIFFERENT variables or complex conditions

DOUBT 2: Why do we need 'break'?
- Without break, execution "falls through" to the next case
- This can be useful (like grouping cases) or cause bugs if forgotten

DOUBT 3: Can I use expressions in cases?
- No, cases must be constant values (strings, numbers)
- For expressions, use if-else instead

DOUBT 4: What's the default case for?
- It's optional but recommended
- Executes when no case matches
- Like the final 'else' in if-else

DOUBT 5: Can switch work with booleans?
- Technically yes, but if-else is usually better for true/false
- Switch is better for multiple discrete values

DOUBT 6: Performance difference?
- Modern JS engines optimize both similarly
- Switch can be slightly faster for many cases, but readability matters more
*/

// ============================================
// SWITCH WITH RETURN (in functions)
// ============================================

console.log("\n--- Switch in Function ---");
function getDayType(dayName) {
  switch (dayName) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log("Monday is:", getDayType("Monday"));
console.log("Sunday is:", getDayType("Sunday"));

// ============================================
// SWITCH WITH OBJECTS (alternative approach)
// ============================================

console.log("\n--- Object Alternative ---");
// Sometimes an object lookup is cleaner than switch
const actions = {
  "save": "Saving file...",
  "load": "Loading file...",
  "delete": "Deleting file..."
};

let action = "save";
console.log(actions[action] || "Unknown action");
