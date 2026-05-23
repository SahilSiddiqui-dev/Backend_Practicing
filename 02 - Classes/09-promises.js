// ========================================
// DAY 2 - PROMISES
// ========================================
// Promises handle asynchronous operations
// States: pending → fulfilled (resolve) or rejected (reject)
// Key: .then()   chains operations, .catch() handles errors

console.log("=== PART 1: Basic Promise ===");

// TASK 1: Create a basic Promise that resolves with a value
// Use: new Promise((resolve, reject) => { resolve(value) })
// Fill in the blank to resolve with "Success!"
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise1.then((result) => {
  console.log("Task 1 result:", result);  // Should print: Success!
});

console.log("\n=== PART 2: Promise with delay ===");

// TASK 2: Create a Promise that resolves after 1 second
// Use: setTimeout to delay, then call resolve
// Fill in blanks to complete the setTimeout
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from async");
  }, 1000);
});

promise2.then((msg) => {
  console.log("Task 2 after delay:", msg);  // Should print: Hello from async
});

console.log("\n=== PART 3: Promise rejection and .catch() ===");

// TASK 3: Create a Promise that rejects
// Throw an error to test .catch()
// Fill in the blank to reject with an error message
const promise3 = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong"));
});

promise3.catch((error) => {
  console.log("Task 3 caught error:", error.message);  // Should print: Something went wrong
});

console.log("\n=== PART 4: Promise chaining ===");

// TASK 4: Chain .then() calls
// Remember: MUST return value from .then() to pass to next .then()
// Fill in the blanks to create a chain: number → double → add 10 → print
const promise4 = new Promise((resolve) => {
  resolve(5);
});

promise4
  .then((num) => {
    console.log("Starting with:", num);
    return num*2;  // Double the number
  })
  .then((doubled) => {
    console.log("After doubling:", doubled);
    return doubled + 10;  // Already complete: add 10
  })
  .then((final) => {
    console.log("Task 4 final result:", final);  // Should print: 20
  });

console.log("\n=== PART 5: Promise.resolve() shorthand ===");

// TASK 5: Use Promise.resolve() to create instant resolved promise
// Alternative to: new Promise((resolve) => { resolve(value) })
// Fill in blank with value "Instant!"
const promise5 = Promise.resolve("Instant!");

promise5.then((val) => {
  console.log("Task 5:", val);  // Should print: Instant!
});

console.log("\n=== PART 6: Promise.reject() and error handling ===");

// TASK 6: Use Promise.reject() to create instant rejected promise
// Then catch it with .catch()
// Fill in blank with error message "Rejected immediately"
const promise6 = Promise.reject(new Error("Rejected immediately"));

promise6
  .catch((error) => {
    console.log("Task 6 caught:", error.message);  // Should print: Rejected immediately
    return "Recovered from error";  // Return to continue chain
  })
  .then((recovered) => {
    console.log("After recovery:", recovered);  // Should print: Recovered from error
  });

console.log("\n=== PART 7: Simulating API call with Promise ===");

// TASK 7: Simulate fetching user data
// Random delay 1-2 seconds, 70% success rate
// Fill in blanks for:
//   a) setTimeout delay calculation
//   b) Success vs failure logic
//   c) What to resolve/reject with
function fetchUserData() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random()*1000 ) + 1000;  // Random between 1000-2000
    const success = Math.random() > 0.3;  // 70% success = > 0.3

    setTimeout(() => {
      if (success) {
        resolve({ id: 1, name: "John", email: "john@example.com" });
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, delay);
  });
}

// Use the function
fetchUserData()
  .then((user) => {
    console.log("Task 7 user fetched:", user.name);
  })
  .catch((error) => {
    console.log("Task 7 error:", error.message);
  });

console.log("\n=== PART 8: Promise.all() - wait for all promises ===");

// TASK 8: Create 3 promises and wait for all with Promise.all()
// If ANY promise rejects, Promise.all rejects
// Fill in blanks to complete the 3 promises
const promise8a = Promise.resolve("A");  // Resolve with "A"
const promise8b = Promise.resolve("B");  // Resolve with "B"
const promise8c = Promise.resolve("C");  // Resolve with "C"

Promise.all([promise8a, promise8b, promise8c])
  .then((results) => {
    console.log("Task 8 all results:", results);  // Should print: ["A", "B", "C"]
  });

console.log("\n=== PART 9: Promise.race() - first to finish wins ===");

// TASK 9: Create 2 promises with different delays
// Promise.race() returns result of FIRST to settle
// Fill in blanks to create promises with different delays
const racePromise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Turtle"), 2000);  // Slower (2000ms)
});

const racePromise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Rabbit"), 500);  // Faster (500ms)
});

Promise.race([racePromise1, racePromise2])
  .then((winner) => {
    console.log("Task 9 race winner:", winner);  // Should print: Rabbit
  });

console.log("\n=== PART 10: CHALLENGE - Process user data ===");

// TASK 10: Chain multiple API-like calls
// Simulate: fetch user → fetch user's posts → fetch post comments
// Fill in blanks for intermediate then() returns
function getUser(userId) {
  return Promise.resolve({ id: userId, name: "Alice" });
}

function getUserPosts(userId) {
  return Promise.resolve([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" }
  ]);
}

function getPostComments(postId) {
  return Promise.resolve([
    { id: 1, text: "Great post!" },
    { id: 2, text: "Thanks for sharing" }
  ]);
}

getUser(1)
  .then((user) => {
    console.log("Task 10 user:", user.name);
    return getUserPosts(user.id);  // Should return getUserPosts(user.id)
  })
  .then((posts) => {
    console.log("Task 10 posts count:", posts.length);
    return getPostComments(posts[0].id);  // Should return getPostComments(posts[0].id)
  })
  .then((comments) => {
    console.log("Task 10 first post comments count:", comments.length);
  })
  .catch((error) => {
    console.log("Error in chain:", error.message);
  });

// ========================================
// GOTCHAS TO REMEMBER:
// ========================================
// 1. MUST return value from .then() - breaks chain if you don't
// 2. .catch() only catches errors, doesn't stop execution
// 3. Promise state is immutable - can't resolve twice
// 4. setTimeout returns undefined - don't forget to capture callback
// 5. Promise.all() rejects if ANY promise rejects
// 6. Promise.race() returns FIRST result (success or error)
// ========================================
