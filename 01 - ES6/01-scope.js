// ========================================
// EXERCISE: Understand block scope
// ========================================

// PROBLEM 1: Predict output without running
console.log("=== Problem 1: var in loop ===");
for (var i = 0; i < 3; i++) {
  // What is i inside the loop?
}
console.log("After loop, i =", i);  // Will this error or print a number?

// Fix it: Replace var with let or const
console.log("\n=== Problem 2: let in loop ===");
for (let j = 0; j < 3; j++) {
  // What happens now?
}
//console.log("After loop, j =", j);  // UNCOMMENT THIS - will it error?

// CHALLENGE: Why does this print 5 five times?
console.log("\n=== Problem 3: Classic gotcha ===");
for (var k = 0; k < 5; k++) {
  setTimeout(() => {
    console.log("k =", k);  // Predict: will this print 0,1,2,3,4 or 5,5,5,5,5?
  }, 50);

}

for(let k = 0; k < 5; k++){
    setTimeout(() => {
        console.log("k = ", k);
    }, 50)
}

// FIX IT: Change var to let or const. Why does that fix it?
// Your explanation: ______
//1. var is function scoped and its not block scoped
//2. let is blocked scope 
//3. var does not create a new variable for loop but let does see the difference by running this code
