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
const fruitsCopy = ___________; // Use spread operator
fruitsCopy.push("grape");
console.log("Original fruits:", fruits);  // Should NOT have grape
console.log("Copied fruits:", fruitsCopy);  // Should have grape

// TASK 2: Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = ___________; // Merge both arrays into one
console.log("Merged:", merged);  // Should be [1, 2, 3, 4, 5, 6]

console.log("\n=== Spread operator: Objects ===");

// PART 2: Copy an object
const user = { name: "Iris", age: 25 };
const userCopy = ___________; // Use spread
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
const personWithEmail = { ...person, email: "___________ " };
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