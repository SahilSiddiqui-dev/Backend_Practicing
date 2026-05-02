// ========================================
// EXERCISE: Destructuring
// ========================================

console.log("=== Array Destructuring ===");

// PART 1: Basic array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);  // Should print: red green blue

// TASK 1: Extract only first and third (skip second)
// Hint: Use an empty space for skipped elements
const [first1, , third1] = colors;
console.log(`First: ${first1}, Third: ${third1}`);

// TASK 2: Rest operator in array
const numbers = [1, 2, 3, 4, 5];
const [head, ...tail] = numbers;  // head = 1, tail = [2,3,4,5]
console.log("Head:", head, "Tail:", tail);

// TASK 3: Destructure with default value
const fruits = ["apple", "banana"];
const [fruit1, fruit2, fruit3 = "orange"] = fruits;
console.log(fruit1, fruit2, fruit3);  // Should print: apple banana orange

// ============================================
// PART 2: Object destructuring
// ============================================

console.log("\n=== Object Destructuring ===");

const book = {
  title: "React Guide",
  author: "John Doe",
  pages: 350,
  isbn: "123-456"
};

// Basic destructuring:
const { title, author } = book;
console.log(`"${title}" by ${author}`);
// Should print: "React Guide" by John Doe

// TASK 4: Extract title and pages
const { title: bookTitle, pages: pageCount} = book;
console.log(`Title: ${bookTitle}, Pages: ${pageCount}`);

// TASK 5: With default values
const config = { host: "localhost", port: 3000 };
const { host, port, username = "admin" } = config;
console.log(host, port, username);  // Should print: localhost 3000 admin

// TASK 6: Rest operator in object
const { title: t, ...metadata } = book;
console.log("Metadata:", metadata);  
// Should be: { author: "John Doe", pages: 350, isbn: "123-456" }

// ============================================
// PART 3: Nested destructuring
// ============================================

console.log("\n=== Nested Object Destructuring ===");

const student = {
  name: "Hannah",
  grades: {
    math: 95,
    english: 88,
    science: 92
  }
};

// TASK 7: Extract name and math grade
// Fill both blanks
const { name, grades: {math} } = student;
console.log(`${name} scored ${math} in Math`);
// Should print: Hannah scored 95 in Math

// TASK 8: Nested with rename
const { name: studentName, grades: { english: engGrade } } = student;
console.log(`${studentName}'s English: ${engGrade}`);
// Should print: Hannah's English: 88

// ============================================
// PART 4: Function parameters with destructuring
// ============================================

console.log("\n=== Destructuring in Function Parameters ===");

// TASK 9: Destructure object in function parameter
function printPerson({name, age, city}) {
  console.log(`${name} is ${age} years old from ${city}`);
}

const person = { name: "Isaac", age: 25, city: "Boston" };
printPerson(person);
// Should print: Isaac is 25 years old from Boston

// TASK 10: With default values in function
function greetUser({name, greeting = "hello"} = {}) {
  console.log(`${greeting}, ${name}!`);
}

greetUser({ name: "Jane" });  // Should print: Hello, Jane!
greetUser({ name: "John", greeting: "Hi" });  // Should print: Hi, John!

// ============================================
// CHALLENGE: Complex destructuring
// ============================================

console.log("\n=== Challenge ===");

// TASK 11: Destructure and use in real scenario
const userData = {
  id: 1,
  profile: {
    firstName: "Kevin",
    lastName: "Smith",
    email: "kevin@example.com"
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

// Extract firstName, email, and theme in one line
const { profile: { firstName, email }, settings: { theme } } = userData;
console.log(`${firstName} (${email}) prefers ${theme} theme`);
// Should print: Kevin (kevin@example.com) prefers dark theme

// TASK 12: Array of objects destructuring
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

// Destructure first product's name and price
const [{ name: product1Name, price: product1Price }] = products;
console.log(`${product1Name}: $${product1Price}`);
// Should print: Laptop: $1000

// ============================================
// GOTCHA: What's the difference?
// ============================================

console.log("\n=== Common Mistakes ===");

// ❌ WRONG: Using regular syntax (no destructuring)
const obj1 = { a: 1, b: 2 };
const a = obj1.a;  // Long way
const b = obj1.b;

// ✅ RIGHT: Using destructuring (cleaner)
const obj2 = { a: 1, b: 2 };
const { a: aVal, b: bVal } = obj2;

// TASK 13: Which is easier to read?
// const result1 = data.user.profile.email;
// OR
// const { user: { profile: { email } } } = data;
// Your answer: second one 
// Why? because in 2nd one less and precise code and easy unserstandbale
