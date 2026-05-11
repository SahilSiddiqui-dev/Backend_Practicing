# 📚 DAY 2 LEARNING GUIDE - Classes, Promises, Async/Await & Modules

**Date:** May 7, 2026  
**Status:** Complete ✅  
**Focus:** Advanced JavaScript for React mastery

---

## 📖 Table of Contents
1. [Classes & Inheritance](#classes--inheritance)
2. [Promises](#promises)
3. [Async/Await](#asyncawait)
4. [ES6 Modules](#es6-modules)
5. [React Patterns](#react-patterns)
6. [Quick Reference](#quick-reference)
7. [Gotchas & Best Practices](#gotchas--best-practices)

---

## Classes & Inheritance

### Basic Syntax

```javascript
// Basic class
class Person {
  constructor(name, age) {
    this.name = name;    // Instance property
    this.age = age;
  }
  
  greet() {              // Instance method
    console.log(`Hello, I'm ${this.name}`);
  }
}

// Create instance
const person1 = new Person("John", 30);
person1.greet();  // Hello, I'm John
```

### Static Methods (belong to class, not instance)

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

Calculator.add(5, 3);  // 8 ✅
const calc = new Calculator();
calc.add(5, 3);        // ❌ TypeError
```

### Inheritance with `extends`

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // Call parent constructor FIRST
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks!`);  // Override parent method
  }
}

const dog = new Dog("Buddy", "Golden");
dog.speak();  // Buddy barks!
```

### Multi-level Inheritance

```javascript
class Mammal extends Animal {
  constructor(name, furColor) {
    super(name);
    this.furColor = furColor;
  }
}

class Cat extends Mammal {
  constructor(name, furColor, lives = 9) {
    super(name, furColor);  // Pass to parent
    this.lives = lives;
  }
}

const cat = new Cat("Whiskers", "Orange");
console.log(cat.name);      // Whiskers (from Animal)
console.log(cat.furColor);  // Orange (from Mammal)
console.log(cat.lives);     // 9 (from Cat)
```

### Getters & Setters

```javascript
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this._balance = balance;  // Convention: _ means "private"
  }
  
  get balance() {             // Called like: account.balance (no parentheses)
    return this._balance;
  }
  
  set balance(amount) {       // Called like: account.balance = 100
    if (amount < 0) {
      console.log("Cannot be negative!");
      return;
    }
    this._balance = amount;
  }
}

const account = new BankAccount("John", 100);
console.log(account.balance);  // 100 (uses getter)
account.balance = 200;          // Uses setter
account.balance = -50;          // Prevented! Still 200
```

### `instanceof` Operator

```javascript
const dog = new Dog("Max", "Labrador");

dog instanceof Dog;     // true
dog instanceof Animal;  // true (checks entire chain)
dog instanceof Object;  // true (everything extends Object)
```

### ⚠️ Classes Gotchas

1. **Must call `super()` first in child constructor**
   ```javascript
   class Child extends Parent {
     constructor(name) {
       // ❌ this.name = name;  // ERROR: must call super first
       super(name);
       this.name = name;  // ✅ Now OK
     }
   }
   ```

2. **Methods are not enumerable** (don't show in `for...in`)
   ```javascript
   class Person {
     name = "John";
     greet() {}
   }
   for (let key in new Person()) {
     console.log(key);  // Only "name", not "greet"
   }
   ```

3. **Static methods cannot use `this` context**
   ```javascript
   class Math {
     static PI = 3.14;
     static add(a, b) {
       return a + b;  // Can't use this.PI
     }
   }
   ```

---

## Promises

### Promise States

```
Pending → Fulfilled (resolve)  ✅
       → Rejected (reject)    ❌
```

### Basic Promise

```javascript
const promise = new Promise((resolve, reject) => {
  // Do async operation
  if (success) {
    resolve(value);    // Pass value to next .then()
  } else {
    reject(error);     // Pass error to .catch()
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

### Chaining with `.then()`

```javascript
// ⚠️ KEY: Must RETURN value from .then() to continue chain

Promise.resolve(5)
  .then(num => {
    console.log(num);        // 5
    return num * 2;          // ← MUST return!
  })
  .then(doubled => {
    console.log(doubled);    // 10 (receives return value)
    return doubled + 10;
  })
  .then(final => {
    console.log(final);      // 20
  });
```

### Shorthand Methods

```javascript
// Instead of: new Promise((resolve) => { resolve(value) })
Promise.resolve("Done");

// Instead of: new Promise((resolve, reject) => { reject(error) })
Promise.reject(new Error("Failed"));
```

### Error Handling

```javascript
Promise.reject(new Error("Network error"))
  .catch(error => {
    console.log(error.message);  // Network error
    return "Recovered";           // Continue chain
  })
  .then(result => {
    console.log(result);          // Recovered
  });
```

### `Promise.all()` - Wait for ALL

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results);  // [1, 2, 3]
  });

// ⚠️ If ANY rejects, entire Promise.all rejects
const pFail = Promise.reject(new Error("Failed"));
Promise.all([p1, pFail, p3])
  .catch(error => console.log("Caught:", error.message));
```

### `Promise.race()` - First to Finish

```javascript
const slow = new Promise(resolve => {
  setTimeout(() => resolve("Slow"), 2000);
});

const fast = new Promise(resolve => {
  setTimeout(() => resolve("Fast"), 500);
});

Promise.race([slow, fast])
  .then(winner => console.log(winner));  // Fast (wins race)
```

### Real-World Pattern: API Simulation

```javascript
function fetchUserData() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000 + 1000;  // 1-2 seconds
    
    setTimeout(() => {
      if (Math.random() > 0.3) {  // 70% success
        resolve({ id: 1, name: "John" });
      } else {
        reject(new Error("Failed to fetch"));
      }
    }, delay);
  });
}

fetchUserData()
  .then(user => console.log(user.name))
  .catch(error => console.log(error.message));
```

### ⚠️ Promise Gotchas

1. **Forgetting to RETURN in .then() breaks chain**
   ```javascript
   // ❌ WRONG
   promise
     .then(result => {
       console.log(result);
       // No return! Next .then() gets undefined
     })
     .then(next => console.log(next));  // undefined

   // ✅ CORRECT
   promise
     .then(result => {
       return result * 2;  // Return for chain
     })
     .then(next => console.log(next));  // 2x value
   ```

2. **State is immutable** (can't resolve twice)
   ```javascript
   const p = new Promise(resolve => {
     resolve(1);
     resolve(2);  // ❌ Ignored
   });
   p.then(x => console.log(x));  // 1 (first resolve wins)
   ```

3. **Promise.all() fails if ANY rejects**
   ```javascript
   Promise.all([
     Promise.resolve(1),
     Promise.reject(new Error("Fail")),  // ← One failure
     Promise.resolve(3)
   ])
   .catch(error => console.log("Caught:", error.message));
   ```

---

## Async/Await

### Basic Syntax

```javascript
// async function returns a Promise
async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg));  // Hello!
```

### `await` Keyword

```javascript
// ⚠️ await ONLY works inside async functions

async function getData() {
  const promise = Promise.resolve("Data");
  const result = await promise;  // Pause until Promise resolves
  console.log(result);           // "Data"
  return result;
}

getData();  // Returns a Promise
```

### Error Handling with try/catch

```javascript
async function riskyOperation() {
  try {
    const result = await Promise.reject(new Error("Failed"));
    return result;
  } catch (error) {
    console.log("Caught:", error.message);  // Caught: Failed
    return "Recovered";
  }
}

riskyOperation();  // Returns Promise
```

### Sequential Awaits

```javascript
async function processSequentially() {
  const user = await Promise.resolve({ id: 1, name: "Alice" });
  console.log("Got user:", user.name);
  
  const posts = await Promise.resolve([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" }
  ]);
  console.log("Got posts:", posts.length);
  
  const comments = await Promise.resolve([
    { id: 1, text: "Nice!" }
  ]);
  console.log("Got comments:", comments.length);
}

processSequentially();
// Output: Got user: Alice
//         Got posts: 2
//         Got comments: 1
```

### Parallel Execution with `Promise.all()`

```javascript
async function getMultiple() {
  // Faster than sequential!
  const [users, posts, comments] = await Promise.all([
    Promise.resolve([{ id: 1, name: "Alice" }]),
    Promise.resolve([{ id: 1, title: "Post 1" }]),
    Promise.resolve([{ id: 1, text: "Nice!" }])
  ]);
  
  console.log("All fetched at once!");
}
```

### Await in Loops

```javascript
async function processArray() {
  const items = [
    Promise.resolve("Item 1"),
    Promise.resolve("Item 2"),
    Promise.resolve("Item 3")
  ];
  
  // ✅ Sequential (waits for each)
  for (let item of items) {
    const result = await item;
    console.log(result);
  }
  
  // ❌ DON'T use forEach with await
  // items.forEach(async (item) => {
  //   await item;  // Runs in parallel, not sequential
  // });
}
```

### Comparing `.then()` vs `async/await`

```javascript
// OLD WAY: .then() chains
function oldStyle() {
  return Promise.resolve(5)
    .then(num => num * 2)
    .then(doubled => doubled + 10)
    .then(final => {
      console.log(final);
      return final;
    });
}

// NEW WAY: async/await (cleaner!)
async function newStyle() {
  let num = await Promise.resolve(5);
  num = num * 2;
  num = num + 10;
  console.log(num);
  return num;
}
```

### IIFE Pattern (Immediately Invoked Function Expression)

```javascript
// ⚠️ This is EXACTLY how React useEffect fetches data!

(async () => {
  const data = await fetchData();
  console.log("Data loaded:", data);
})();

// In React:
// useEffect(() => {
//   (async () => {
//     const data = await fetchData();
//     setData(data);
//   })();
// }, []);
```

### ⚠️ Async/Await Gotchas

1. **`await` only works in `async` functions**
   ```javascript
   // ❌ ERROR
   const result = await Promise.resolve(5);
   
   // ✅ CORRECT
   async function getData() {
     const result = await Promise.resolve(5);
   }
   ```

2. **Forgetting `await` returns Promise object**
   ```javascript
   async function test() {
     const data = fetchData();           // ❌ Promise object
     const data = await fetchData();     // ✅ Actual value
   }
   ```

3. **Don't use `forEach` with `await` (runs in parallel)**
   ```javascript
   // ❌ WRONG - runs all at once
   items.forEach(async (item) => {
     await delay(item);  // Not sequential!
   });
   
   // ✅ CORRECT - sequential
   for (let item of items) {
     await delay(item);
   }
   ```

4. **`try/catch` doesn't catch errors in nested callbacks**
   ```javascript
   try {
     setTimeout(() => {
       throw new Error("Async error");
     }, 1000);
   } catch (error) {
     // ❌ Won't catch - error happens later
   }
   ```

---

## ES6 Modules

### Named Exports

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;

// Import in another file
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(PI);             // 3.14159
```

### Default Export

```javascript
// config.js
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

export default config;

// Import (can use ANY name)
import myConfig from './config.js';
import settings from './config.js';  // Works too!

console.log(myConfig.apiUrl);
```

### Rename on Import

```javascript
// ✅ Useful to avoid naming conflicts
import { add as addition, subtract as subtraction } from './math.js';

console.log(addition(5, 3));  // 8
```

### Namespace Import

```javascript
import * as math from './math.js';

console.log(math.add(5, 3));    // 8
console.log(math.subtract(5, 3)); // 2
console.log(math.PI);           // 3.14159
```

### Mix Default + Named

```javascript
// button.js
export const SIZES = { small: '8px', large: '16px' };
export const COLORS = { primary: 'blue', danger: 'red' };

const Button = ({ size, color }) => {
  return <button>Click</button>;
};

export default Button;

// Import both
import Button, { SIZES, COLORS } from './button.js';

console.log(Button);       // Component
console.log(SIZES.small);  // 8px
```

### Module Best Practices

```
✅ Use NAMED exports for:
   - Utility functions (helpers, validators)
   - Constants and configuration
   - Multiple related items

✅ Use DEFAULT export for:
   - Main component per file
   - Single primary function/class
   - Configuration files

✅ Use BOTH for:
   - Main component + constants
   - Component + related utilities
```

### Real Project Structure

```
my-app/
├── src/
│   ├── utils/
│   │   ├── math.js          (NAMED: { add, subtract })
│   │   └── validators.js    (NAMED: { isEmail, isPhone })
│   │
│   ├── config/
│   │   └── app.js           (DEFAULT: config object)
│   │
│   ├── components/
│   │   ├── Button.js        (DEFAULT + NAMED: Button + SIZES)
│   │   ├── Card.js          (DEFAULT: Card)
│   │   └── Header.js        (DEFAULT: Header)
│   │
│   └── App.js               (DEFAULT: App component)

Usage in App.js:
import App from './App';
import Button, { SIZES } from './components/Button';
import { add } from './utils/math';
import config from './config/app';
```

### ⚠️ Module Gotchas

1. **Each file has ONE default export**
   ```javascript
   // ❌ ERROR
   export default Button;
   export default Header;  // Can't have two
   
   // ✅ CORRECT
   export default Button;
   export { Header };  // Use named for second
   ```

2. **Named imports must match export name exactly**
   ```javascript
   // math.js
   export const add = () => {};
   
   // ❌ ERROR
   import { Add } from './math.js';  // Capital A
   
   // ✅ CORRECT
   import { add } from './math.js';
   ```

3. **Don't forget `export`** (code is private without it)
   ```javascript
   // ❌ Private
   const helper = () => {};
   
   // ✅ Exported
   export const helper = () => {};
   ```

---

## React Patterns

### Using Classes in React

```javascript
// Before Hooks: Class Components
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "John" };
  }
  
  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default UserProfile;
```

### Async/Await in useEffect

```javascript
// Fetch data on component mount
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // IIFE pattern!
    (async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    })();
  }, []);  // Run once on mount
  
  return <div>{users.map(u => <p>{u.name}</p>)}</div>;
}

export default UserList;
```

### Promise in Event Handlers

```javascript
function LoginButton() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log("Logged in:", data.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  return <button onClick={handleClick}>Login</button>;
}
```

### Importing Components

```javascript
// components/Button.js
export const BUTTON_SIZES = { small: 'sm', large: 'lg' };

function Button({ size, label }) {
  return <button className={`btn-${size}`}>{label}</button>;
}

export default Button;

// App.js
import Button, { BUTTON_SIZES } from './components/Button';

function App() {
  return <Button size={BUTTON_SIZES.large} label="Click" />;
}

export default App;
```

---

## Quick Reference

### Classes Cheatsheet

| Feature | Syntax | Notes |
|---------|--------|-------|
| Class | `class Name {}` | Blueprint for objects |
| Constructor | `constructor(x) { this.x = x }` | Runs on `new` |
| Method | `method() {}` | Function in class |
| Static | `static method() {}` | Belongs to class, not instance |
| Extends | `class Child extends Parent` | Inheritance |
| Super | `super(name)` | Call parent constructor |
| Getter | `get property() {}` | Called like property (no `()`) |
| Setter | `set property(x) {}` | Called like assignment |
| instanceof | `obj instanceof Class` | Check type in chain |

### Promises Cheatsheet

| Method | Purpose | Returns |
|--------|---------|---------|
| `.then(cb)` | Handle success | New Promise |
| `.catch(cb)` | Handle error | New Promise |
| `.finally(cb)` | Run regardless | New Promise |
| `Promise.all()` | Wait for ALL | Promise with array |
| `Promise.race()` | First to finish | Winning result |
| `Promise.resolve(x)` | Instant resolve | Resolved Promise |
| `Promise.reject(e)` | Instant reject | Rejected Promise |

### Async/Await Cheatsheet

| Syntax | Purpose |
|--------|---------|
| `async function() {}` | Mark function async |
| `await promise` | Pause until resolved |
| `try { await }` | Wrap in try block |
| `catch (error)` | Handle errors |
| `finally {}` | Run regardless |
| `await Promise.all([])` | Wait for all parallel |

### Modules Cheatsheet

| Type | Export | Import |
|------|--------|--------|
| Named | `export { func }` | `import { func }` |
| Multiple | `export const x=1; export const y=2;` | `import { x, y }` |
| Rename | `export { a as b }` | `import { a as b }` |
| Namespace | (all named) | `import * as ns` |
| Default | `export default X` | `import X from './x'` |
| Both | (def + named) | `import D, { n }` |

---

## Gotchas & Best Practices

### Universal Gotchas

1. **Read error messages carefully**
   - "Cannot read property 'x' of undefined" = forgot to check if object exists
   - "await only valid in async" = function not marked `async`
   - "Module parse failed" = missing `export` keyword

2. **Test incrementally**
   - Fill 1 blank → test → repeat
   - Don't fill all at once and debug later

3. **Use console.log() liberally**
   - Before/after each await
   - Inside try/catch blocks
   - Check promise resolution status

### Performance Gotchas

```javascript
// ❌ SLOW: Sequential fetch
async function slow() {
  const users = await fetchUsers();      // 1 second
  const posts = await fetchPosts();      // 1 second
  // Total: 2 seconds
}

// ✅ FAST: Parallel fetch
async function fast() {
  const [users, posts] = await Promise.all([
    fetchUsers(),      // 1 second
    fetchPosts()       // 1 second (same time!)
  ]);
  // Total: 1 second
}
```

### Debugging Tips

```javascript
// Add debug logs in async functions
async function debuggedFetch() {
  console.log("1. Starting fetch");
  try {
    const response = await fetch('/api/data');
    console.log("2. Got response:", response.status);
    
    const data = await response.json();
    console.log("3. Parsed data:", data);
    
    return data;
  } catch (error) {
    console.error("4. Error caught:", error.message);
    throw error;
  }
}
```

---

## 📋 Files Summary

| File | Concepts | Status |
|------|----------|--------|
| `01-classes.js` | Classes, inheritance, static methods, getters/setters, instanceof | ✅ Complete |
| `09-promises.js` | Promise basics, chaining, `.catch()`, `.all()`, `.race()` | ✅ Complete |
| `10-async-await.js` | Async functions, await, try/catch, IIFE pattern, error handling | ✅ Complete |
| `11-modules.js` | Named exports, default exports, import patterns, best practices | ✅ Complete |

---

## 🎯 Next Steps

- **Day 3:** JSX & React Components
- **Day 4:** Hooks (useState, useEffect, useContext)
- **Day 5:** Component Patterns & Reusability

---

## 📚 Review Checklist

Before moving to Day 3, ensure you understand:

- [ ] Class inheritance with `super()`
- [ ] Promise chaining with `.then()` and return values
- [ ] `async/await` replaces `.then()` chains
- [ ] IIFE pattern `(async () => {})()`
- [ ] Module export/import syntax
- [ ] When to use default vs named exports
- [ ] Why `Promise.all()` is faster than sequential awaits
- [ ] How `try/catch` works with `await`

✅ **All Day 2 concepts mastered!**

🎓 **Ready for React!**
