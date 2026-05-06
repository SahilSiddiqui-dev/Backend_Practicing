// ========================================
// EXERCISE: Template literals basics
// ========================================

console.log("=== Template Literals ===");

const name = "Frank";
const age = 28;
const city = "New York";

// OLD WAY (string concatenation):
const oldWay = "My name is " + name + " and I'm " + age + " years old from " + city;
console.log(oldWay);

// NEW WAY (template literal): Fill in the blanks
const newWay = `My name is ${name} and I'm ${age} years old from ${city}`;
console.log(newWay);

// PART 2: Expressions inside ${}
const x = 10;
const y = 20;

// TASK: Write a template literal that says: "10 + 20 = 30"
const math = `${x} + ${y} = ${x + y}`;  // You should understand this pattern
console.log(math);

// PART 3: Multiline strings
console.log("\n=== Multiline Template Literals ===");

// Without template literals (messy):
const oldHTML = "<div>\n  <h1>Hello</h1>\n  <p>Welcome</p>\n</div>";

// WITH template literals (clean): Fill in the blank
const newHTML = `
  <div>
    <h1>Hello ${name} </h1>
    <p>Welcome to ${city} </p>
  </div>
`;
console.log(newHTML);

// CHALLENGE: Create a function that returns a formatted message
function formatUserCard(user) {
  // user object has: name, email, phone
  return `
  NAME : ${user.name}
  EMAIL: ${user.email}
  PHONE: ${user.phone}`;
  // RETURN a template literal with all three fields, nicely formatted
  // FILL THIS IN
}

const userData = { name: "Grace", email: "grace@example.com", phone: "555-1234" };
console.log(formatUserCard(userData));
// Should print something like:
// NAME: Grace
// EMAIL: grace@example.com
// PHONE: 555-1234