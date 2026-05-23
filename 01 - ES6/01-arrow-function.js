// ========================================
// EXERCISE: Arrow functions vs regular functions
// ========================================

// PART 1: Convert to arrow function
console.log("=== Part 1: Arrow syntax ===");

// Old way (function declaration):
function greet(name) {
  return "Hello, " + name;
}

// TASK 1a: Rewrite as arrow function (long form with braces)
const greetArrow = (name) => {
    return `Hello ${name}`;
}

// TASK 1b: Rewrite as arrow function (implicit return, no braces)
const greetShort = (name) =>  `Hello ${name}`// ONE LINE

// TASK 1c: Single parameter — no parentheses needed
const double = num => {
    return 2*num;
};  // Fill both blanks

// Test them:
console.log(greet("Alice"));        // Should print: Hello, Alice
console.log(greetArrow("Bob"));     // Should print: Hello, Bob
console.log(greetShort("Charlie")); // Should print: Hello, Charlie
console.log(double(5));             // Should print: 10

// PART 2: The `this` gotcha
console.log("\n=== Part 2: this binding ===");

const person = {
  name: "Diana",
  age: 30,
  
  // Regular function — has its own `this`
  sayHiRegular: function() {
    console.log(`Hi, I'm ${this.name}, age ${this.age}`);
  },
  
  //Arrow function — inherits `this` from parent
  sayHiArrow: () => {
    console.log(`Hi, I'm ${this.name}, age ${this.age}`);  // What happens?
  }
};

person.sayHiRegular();  // This should work — what does it print?
person.sayHiArrow();    // This will break OR print undefined — why?

// CHALLENGE: Create a method that uses setTimeout with arrow function
const user = {
  username: "Eve",
  login: function() {
    setTimeout(() => {
      console.log(`${this.username} logged in`);  // Arrow preserves `this`
    }, 100);
  }
};

user.login();  // This should work — what does it print?

// EXPLANATION: Why does arrow function fix the setTimeout issue?
// Your answer: because arrow this  inherit this from parent but function has its own this 