// ========================================
// EXERCISE: Destructuring
// ========================================

console.log("=== Array Destructuring ===");

// PART 1: Basic array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);  // Should print: red green blue

// TASK 1: Extract only first and third
const [___________, , ___________] = colors;  // Note: empty space for skipped element
console.log(`First: ${first}, Third: ${third}`);

// TASK 2: Rest operator in array
const numbers = [1, 2, 3, 4, 5];
const [head, ...tail] = numbers;  // head = 1, tail = [2,3,4,5]
console.log("Head:", head, "Tail:", tail);

// PART 2: Object destructuring
console.log("\n=== Object Destructuring ===");

const book = {
  title: "React Guide",
  author: "John Doe",
  pages: 350,
  isbn: "123-456"
};

// Basic:
const { title, author } = book;
console.log(`"${title}" by ${author}`);

// TASK 3: Extract title and pages (rename pages to pageCount)
const { title: ___________, pages: ___________ } = book;
console.log(`Title: ${title}, Pages: ${pageCount}`);

// TASK 4: With default values
const config = { host: "localhost", port: 3000 };
const { host, port, username = "admin" } = config;
console.log(host, port, username);  // Should print: localhost 3000 admin

// TASK 5: Rest operator in object
const { title: bookTitle, ...metadata } = book;
console.log("Metadata:", metadata);  // Should be { author, pages, isbn }

// CHALLENGE: Destructure nested object
const student = {
  name: "Hannah",
  grades: {
    math: 95,
    english: 88,
    science: 92
  }
};

// FILL THIS IN: Extract name and math grade
const { name, grades: { ___________ } } = student;
console.log(`${name} scored ${math} in Math`);