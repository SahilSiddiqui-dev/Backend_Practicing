# 📚 Day 1: ES6 JavaScript Fundamentals - Learning Summary

**Date:** May 3, 2026  
**Status:** ✅ COMPLETE - All 6 Concepts Mastered  
**Time:** 3 Hours | 6 Files | Ready for React  

---

# 🎯 Quick Summary

| Concept | What It Does | Key Takeaway |
|---------|-------------|--------------|
| **let/const vs var** | Block vs function scope | Always use let/const, never var |
| **Arrow Functions** | Shorter syntax + `this` binding | Use for callbacks, preserve parent `this` |
| **Template Literals** | String interpolation | Use backticks for clean strings |
| **Destructuring** | Extract values from arrays/objects | Cleaner variable assignment |
| **Spread/Rest** | Copy, merge, collect | Shallow copy for nested objects |
| **Array Methods** | Transform, filter, combine | map→filter→reduce pattern |

---

# 1️⃣ let/const vs var

## Core Difference
```javascript
var x = 1;      // Function scoped, hoisted (bad)
let y = 2;      // Block scoped (good)
const z = 3;    // Block scoped, immutable (best)
```

## ⚠️ HackerRank Gotcha: var in loops
```javascript
// ❌ WRONG: All print 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 50);
}

// ✅ CORRECT: Print 0,1,2,3,4
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 50);
}
```
**Why?** `var` doesn't create new variable per iteration. All closures share same `i`.

## Rule
- Default: use `const`
- When reassigning: use `let`
- Never: use `var`

---

# 2️⃣ Arrow Functions

## Three Syntax Forms
```javascript
// 1. Full form
const add = (a, b) => {
  return a + b;
};

// 2. Implicit return
const add = (a, b) => a + b;

// 3. Single parameter (no parens)
const double = x => x * 2;
```

## 🔴 Critical: `this` Binding

```javascript
// Arrow: Inherits parent's this
const person = {
  name: "Alice",
  sayHiArrow: () => console.log(this.name)  // undefined
};

// Regular: Gets its own this (caller)
const person = {
  name: "Alice",
  sayHiRegular: function() { console.log(this.name) }  // Alice
};

// setTimeout: Arrow fixes it!
const user = {
  name: "Bob",
  login: function() {
    setTimeout(() => {
      console.log(this.name);  // ✅ Bob (arrow preserved it)
    }, 100);
  }
};
```

## When to Use
| Situation | Use | Why |
|-----------|-----|-----|
| Callbacks (setTimeout, events) | Arrow | Preserve parent `this` |
| Object methods | Regular | Need object as `this` |
| React handlers | Arrow | Component stays bound |
| Array methods (map/filter) | Arrow | Concise |

---

# 3️⃣ Template Literals

## Syntax
```javascript
const name = "Alice";
const age = 25;

// Old
const msg = "Hello " + name + ", age " + age;

// New
const msg = `Hello ${name}, age ${age}`;
```

## Any Expression Works
```javascript
const price = 100;
const total = `Total: $${price * 1.1}`;  // Math

const msg = `Hello ${name.toUpperCase()}`;  // Methods

const status = `User is ${age >= 18 ? "adult" : "minor"}`;  // Ternary

const html = `
  <div>
    <h1>Title</h1>
  </div>
`;  // Multiline
```

## ⚠️ Common Mistake
```javascript
const msg = 'Hello ${name}';   // ❌ Wrong: prints literal
const msg = `Hello ${name}`;   // ✅ Right: prints value
```

---

# 4️⃣ Destructuring

## Array Destructuring
```javascript
const [a, b, c] = [1, 2, 3];         // a=1, b=2, c=3

const [x, , z] = [1, 2, 3];          // Skip middle: x=1, z=3

const [head, ...tail] = [1, 2, 3];   // head=1, tail=[2,3]

const [n = 10] = [];                 // Default: n=10
```

## Object Destructuring
```javascript
const { name, age } = user;          // Extract properties

const { name: userName } = user;     // Rename: name→userName

const { role = "user" } = {};        // Default value

const { user: { email } } = data;    // Nested extraction

const { id, ...rest } = data;        // Rest: collect remaining
```

## In Function Parameters
```javascript
// Clean extraction
function greet({ name, greeting = "Hello" } = {}) {
  console.log(`${greeting}, ${name}`);
}

greet({ name: "Alice" });  // "Hello, Alice"
```

---

# 5️⃣ Spread & Rest Operators

## Spread: Copy/Merge
```javascript
// Copy array
const copy = [...original];

// Merge arrays
const merged = [...arr1, ...arr2];

// Copy object
const userCopy = { ...user };

// Merge objects (override)
const config = { ...defaults, ...userSettings };
```

## Rest: Collect Arguments
```javascript
function sum(...numbers) {
  return numbers.reduce((a, n) => a + n, 0);
}

sum(1, 2, 3);  // 6
```

## ⚠️ Critical: Shallow Copy
```javascript
// ❌ Problem: Nested objects still reference original
const nested = { user: { name: "John" } };
const copy = { ...nested };
copy.user.name = "Jane";
console.log(nested.user.name);  // "Jane" (original changed!)

// ✅ Solution: Deep copy
const deepCopy = JSON.parse(JSON.stringify(nested));
```

---

# 6️⃣ Array Methods

## MAP: Transform Each Element
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);  // [2, 4, 6]

// Returns NEW array (same length)
const names = products.map(p => p.name);
```

## FILTER: Keep Some Elements
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// Returns NEW array (might be shorter)
const inStock = products.filter(p => p.inStock);
```

## REDUCE: Combine Into One Value
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 10

// Pattern: reduce((accumulator, current) => newAccumulator, initialValue)

// Array to object
const map = users.reduce((acc, u) => {
  acc[u.id] = u.name;
  return acc;
}, {});
```

## Method Chaining
```javascript
// Real example: total price of in-stock items with tax
const totalWithTax = products
  .filter(p => p.inStock)
  .map(p => p.price * 1.1)
  .reduce((sum, price) => sum + price, 0);
```

---

# ⚡ Critical Gotchas (Exam Questions)

## 1. var in setTimeout
```javascript
// Prints 5,5,5,5,5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
// Fix: change var to let
```

## 2. Arrow function `this` in objects
```javascript
const obj = {
  value: 42,
  arrow: () => console.log(this.value),     // undefined
  regular: function() { console.log(this.value) }  // 42
};
```

## 3. Template literal backticks
```javascript
'Hello ${name}'   // ❌ Prints literal
`Hello ${name}`   // ✅ Interpolates
```

## 4. Destructuring with defaults
```javascript
const { email = "noemail@ex.com" } = user;  // If missing, uses default
```

## 5. Spread is shallow copy
```javascript
const copy = { ...nested };  // Only top level copied
// Nested objects still referenced!
```

## 6. Reduce must return accumulator
```javascript
// ❌ WRONG: doesn't return
const sum = nums.reduce((acc, n) => { acc + n }, 0);

// ✅ CORRECT: returns new accumulator
const sum = nums.reduce((acc, n) => acc + n, 0);
```

---

# 📋 Practice Files

All files in `ES6/` folder:

| File | Concept | Status |
|------|---------|--------|
| `01-scope.js` | var vs let/const | ✅ |
| `01-arrow-function.js` | Arrow syntax & `this` | ✅ |
| `03-template-literals.js` | String interpolation | ✅ |
| `04-destructuring.js` | Arrays & objects | ✅ |
| `05-spread-rest.js` | Copy, merge, collect | ✅ |
| `06-array-method.js` | map/filter/reduce | ✅ |

---

# 🚀 Ready for Day 2?

**Next Topics:**
- Classes & constructors
- Promises & async/await
- Modules (import/export)

**Why it matters:**
- Promises: React data fetching (useEffect + fetch)
- async/await: Modern pattern for promises
- Modules: Organize React components

---

# 💡 Quick Reference Cheatsheet

```javascript
// Scope: use const by default
const x = 1;

// Arrow function with implicit return
const add = (a, b) => a + b;

// Template literal
const msg = `Hello ${name}`;

// Destructure object
const { name, age } = person;

// Spread to copy
const copy = { ...original };

// Map to transform
const doubled = nums.map(n => n * 2);

// Filter to subset
const evens = nums.filter(n => n % 2 === 0);

// Reduce to sum
const sum = nums.reduce((a, n) => a + n, 0);
```

---

**Created:** May 3, 2026  
**Status:** Day 1 Complete ✅  
**Next:** Day 2 ES6 Advanced
