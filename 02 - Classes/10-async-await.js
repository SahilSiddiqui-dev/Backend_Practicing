// ========================================
// DAY 2 - ASYNC/AWAIT
// ========================================
// Modern way to handle Promises (ES2017)
// async = function returns a Promise
// await = pause execution until Promise resolves
// Replaces .then() chains with cleaner syntax

console.log("=== PART 1: Basic async/await ===");

// TASK 1: Create a basic async function
// Use: async function functionName() { }
// Fill in the blank to make function async
async function greetAsync() {
  return "Hello from async!";
}

// Call it
greetAsync().then((result) => {
  console.log("Task 1:", result);  // Should print: Hello from async!
});

console.log("\n=== PART 2: await keyword ===");

// TASK 2: Use await to pause execution
// await only works INSIDE async functions!
// Fill in blanks for: await the promise, then use result
async function delayedGreet() {
  const promise = Promise.resolve("Hi there!");
  const result = await promise; // await the promise
  return  result; // return the result
}

delayedGreet().then((result) => {
  console.log("Task 2:", result);  // Should print: Hi there!
});

console.log("\n=== PART 3: Error handling with try/catch ===");

// TASK 3: Replace .catch() with try/catch
// try: code that might fail (await statements)
// catch: code to handle error
// Fill in blanks for: try { await }, catch(error) { handle }
async function riskyOperation() {
  try {
    const rejectedPromise = Promise.reject(new Error("Operation failed"));
    const result = await rejectedPromise;
    return result;
  } catch (error) {
    console.log("Task 3 caught:", error.message);  // Should print: Operation failed
    return "Recovered";
  }
}

riskyOperation();

console.log("\n=== PART 4: Simulating API call ===");

// TASK 4: Simulate fetching from API with delay
// Create promise with setTimeout, await it, return data
// Fill in blanks to complete the function
async function fetchUserData() {
  const user = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John", email: "john@example.com" });
    }, 1000);  // 1000ms delay
  });
  return user;
}

async function showUser() {
  const user = await fetchUserData();
  console.log("Task 4 user:", user.name);  // Should print: John
}

showUser();

console.log("\n=== PART 5: Multiple sequential awaits ===");

// TASK 5: Chain multiple async operations (sequence matters)
// First fetch user, THEN fetch posts, THEN fetch comments
// Fill in blanks for two await statements
async function getCompleteData() {
  const user = await Promise.resolve({ id: 1, name: "Alice" });
  console.log("Task 5 got user:", user.name);
  
  const posts = await Promise.resolve([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" }
  ]);
  console.log("Task 5 got posts:", posts.length);
  
  const comments = await Promise.resolve([
    { id: 1, text: "Nice!" },
    { id: 2, text: "Great!" }
  ]);
  console.log("Task 5 got comments:", comments.length);
}

getCompleteData();

console.log("\n=== PART 6: Async with loops ===");

// TASK 6: await inside a for loop (sequential execution)
// GOTCHA: Don't use forEach with await - use for loop!
// Fill in blank to await each promise in the loop
async function processArray() {
  const promises = [
    Promise.resolve("Item 1"),
    Promise.resolve("Item 2"),
    Promise.resolve("Item 3")
  ];
  
  for (let promise of promises) {
    const result = await promise;
    console.log("Task 6 processed:", result);
  }
}

processArray();

console.log("\n=== PART 7: Promise.all() with async/await ===");

// TASK 7: Wait for MULTIPLE promises in parallel with Promise.all()
// Much faster than sequential awaits!
// Fill in blank to await all promises at once
async function getMultipleUsers() {
  const promise1 = Promise.resolve({ id: 1, name: "Alice" });
  const promise2 = Promise.resolve({ id: 2, name: "Bob" });
  const promise3 = Promise.resolve({ id: 3, name: "Charlie" });
  
  const results = await Promise.all([promise1, promise2, promise3]);
  console.log("Task 7 all results:", results.length);  // Should print: 3
}

getMultipleUsers();

console.log("\n=== PART 8: Comparing async/await vs .then() ===");

// SAME operation - two different ways

// OLD WAY: .then() chains
function oldWay() {
  return Promise.resolve(5)
    .then(num => num * 2)
    .then(doubled => doubled + 10)
    .then(final => {
      console.log("Task 8 old way:", final);
      return final;
    });
}

// NEW WAY: async/await (cleaner!)
async function newWay() {
  let num = await Promise.resolve(5);
  num = num * 2;
  num = num + 10;
  console.log("Task 8 new way:", num);
  return num;
}

oldWay();
newWay();

console.log("\n=== PART 9: Simulate realistic API pattern ===");

// TASK 9: Realistic fetch pattern with error handling
// Try to fetch user, if fails retry once
// Fill in blanks for: try/await/catch/retry logic
async function fetchWithRetry() {
  let attempts = 0;
  
  try {
    attempts++;
    console.log("Task 9 attempt:", attempts);
    
    const success = Math.random() > 0.5;  // 50% success rate
    if (!success) {
      throw new Error("Network error");
    }
    
    const result = await Promise.resolve({ id: 1, name: "Success!" });
    return result;
  } catch (error) {
    if (attempts < 2) {
      console.log("Task 9 failed, retrying...");
      return await fetchWithRetry();  // Recursively retry
    } else {
      throw error;  // Give up after 2 attempts
    }
  }
}

fetchWithRetry()
  .then(result => console.log("Task 9 final result:", result.name))
  .catch(error => console.log("Task 9 gave up:", error.message));

console.log("\n=== PART 10: CHALLENGE - React useEffect pattern ===");

// TASK 10: This is the EXACT pattern used in React!
// Simulate: useEffect(() => { fetch data }, [])
// Fill in blanks to create async IIFE (Immediately Invoked Function Expression)
// IIFE syntax: (async () => { ... })()

async function simulateUseEffect() {
  // This pattern is used in React like:
  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchData();
  //     setData(data);
  //   })();
  // }, []);
  
  (async () => {
    console.log("Task 10 useEffect starting (component mounted)");
    const data = await Promise.resolve({ 
      title: "My Data",
      content: "Loaded successfully"
    });
    console.log("Task 10 data loaded:", data.title);
    // In real React: setData(data);
  })();
}

simulateUseEffect();

console.log("\n=== GOTCHAS & BEST PRACTICES ===");
console.log(`
1. ⚠️ await ONLY works in async functions
2. ⚠️ Don't use forEach with await - use for loop for sequential
3. ⚠️ Use Promise.all() to run promises in parallel (faster!)
4. ⚠️ try/catch replaces .catch() - always use for error handling
5. ⚠️ Forgetting to await = Promise object instead of value
6. ⚠️ Async functions always return a Promise (even if you return nothing)
7. ⚠️ IIFE pattern: (async () => { await ... })() - used in React useEffect
`);

// ========================================
// KEY DIFFERENCE: await vs no await
// ========================================
// const data = fetchData();           // ❌ Returns Promise object
// const data = await fetchData();     // ✅ Returns actual value
// ========================================
