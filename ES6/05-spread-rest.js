// ========================================
// EXERCISE: Spread & Rest operators
// ========================================

console.log("=== Spread operator: Arrays ===");

// PART 1: Copy an array (without reference issues)
const original = [1, 2, 3];
const reference = original;  // This is NOT a copy, same array
const copy = [...original];   // This IS a copy, new array

original.push(4);
console.log("Original:", original);  // [1, 2, 3, 4]
console.log("Reference:", reference);  // [1, 2, 3, 4] — both changed!
console.log("Copy:", copy);            // [1, 2, 3] — copy stayed same

// TASK 1: Create a copy of an array using spread
const fruits = ["apple", "banana", "orange"];
const fruitsCopy = [...fruits]; // Use spread operator
fruitsCopy.push("grape");
console.log("Original fruits:", fruits);  // Should NOT have grape
console.log("Copied fruits:", fruitsCopy);  // Should have grape

// TASK 2: Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // Merge both arrays into one
console.log("Merged:", merged);  // Should be [1, 2, 3, 4, 5, 6]

console.log("\n=== Spread operator: Objects ===");

// PART 2: Copy an object
const user = { name: "Iris", age: 25 };
const userCopy = {...user}; // Use spread
userCopy.age = 26;
console.log("Original user:", user);  // age should still be 25
console.log("Copied user:", userCopy);  // age should be 26

// TASK 3: Merge two objects
const defaults = { theme: "light", language: "en" };
const userSettings = { theme: "dark" };  // Overrides defaults
const finalSettings = { ...defaults, ...userSettings };
console.log("Final settings:", finalSettings);
// Should be { theme: "dark", language: "en" }

// TASK 4: Add a new property while copying
const person = { name: "Jack", city: "Boston" };
const personWithEmail = { ...person, email: "sahil@123" };
console.log(personWithEmail);  // Should have name, city, AND email

console.log("\n=== Rest operator: Functions ===");

// PART 3: Rest in function parameters
function sum(...numbers) {
  // numbers is an array of all arguments
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));        // Should be 6
console.log(sum(10, 20, 30, 40)); // Should be 100

// TASK 5: Function that takes name, age, and rest of properties
function createUser(name, age, ...extras) {
  return {
    name,
    age,
    extras  // extras is an array of remaining arguments
  };
}

const newUser = createUser("Katie", 30, "Engineer", "NYC", "Active");
console.log(newUser);
// Should be { name: "Katie", age: 30, extras: ["Engineer", "NYC", "Active"] }

// TASK 6: Override properties
const config1 = { host: "localhost", port: 3000, debug: false };
const config2 = { ...config1, debug: true, port: 5000 };
console.log(config2);
// Should be { host: "localhost", port: 5000, debug: true }

// TASK 7: Rest parameter function
function printNames(first, second, ...rest) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

printNames("Alice", "Bob", "Charlie", "Diana");
// Should print:
// First: Alice
// Second: Bob
// Rest: [ "Charlie", "Diana" ]

// TASK 8: Function with rest and default
function greetMultiple(greeting = "Hello", ...names) {
  return names.map(name => `${greeting}, ${name}!`).join(", ");
}

console.log(greetMultiple("Hi", "Eve", "Frank"));  // Should print: Hi, Eve!, Hi, Frank!
console.log(greetMultiple("Bye", "Grace"));         // Should print: Bye, Grace!

console.log("\n=== Combining Spread & Rest ===");

// TASK 9: Spread in function call
const allNumbers = [1, 2, 3, 4, 5];
console.log(sum(...allNumbers));  // Use spread operator to pass array as arguments
// Should print: 15

// TASK 10: Real-world: Pass some args, rest as array
function createUserV2(id, name, ...permissions) {
  return {
    id,
    name,
    permissions
  };
}

const user1 = createUserV2(1, "Alice", "read", "write", "delete");
console.log(user1);
// Should be: { id: 1, name: "Alice", permissions: [ "read", "write", "delete" ] }

console.log("\n=== CHALLENGE ===");

// TASK 11: Spread + destructure
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...remaining] = data;
console.log("First:", first, "Second:", second);
console.log("Remaining:", remaining);
// First: 1, Second: 2
// Remaining: [3, 4, 5, 6, 7, 8, 9, 10]

// TASK 12: Combine objects
const baseConfig = { host: "localhost", port: 3000 };
const userConfig = { port: 5000, ssl: true };
const finalConfig = { ...baseConfig, ...userConfig};
console.log("Final config:", finalConfig);
// Should be { host: "localhost", port: 5000, ssl: true }

console.log("\n=== Common Mistakes ===");

// ❌ WRONG: No spread (reference)
const original1 = { x: 1, y: 2 };
const copy1 = original1;
copy1.x = 99;
console.log("Original1 x:", original1.x);  // Prints: 99 (changed!)

// ✅ RIGHT: With spread (real copy)
const original2 = { x: 1, y: 2 };
const copy2 = { ...original2 };
copy2.x = 99;
console.log("Original2 x:", original2.x);  // Prints: 1 (unchanged)

// TASK 13: Shallow vs Deep copy
// const nested = { user: { name: "John" } };
// const copy = { ...nested };  // Shallow copy
// copy.user.name = "Jane";  // This WILL affect original!
// Why? // Why? Because spread creates a shallow copy - nested objects are still references to the original.
