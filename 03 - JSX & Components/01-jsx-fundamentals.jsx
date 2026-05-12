// ========================================
// DAY 3 - JSX FUNDAMENTALS
// ========================================
// JSX = JavaScript XML
// It looks like HTML but it's actually JavaScript
// JSX compiles to React.createElement() calls

import React from 'react';

// ========================================
// TASK 1: Basic JSX Element
// ========================================
// JSX is NOT HTML - it's a syntax extension
// Every JSX element must be inside a function

function Task1() {
  // TASK 1: Fill in the JSX return statement
  // Should return a simple <div> with text "Hello JSX"
  return (
    <div>
      <h1>Hello JSX</h1>
    </div>
  );
}

// ========================================
// TASK 2: JSX with Multiple Elements
// ========================================
// ⚠️ GOTCHA: Must return ONE root element
// Wrap multiple elements in a parent <div> or Fragment <>

function Task2() {
  // TASK 2: Create a card with heading and paragraph
  // Fill in the blanks:
  // <h2>Welcome</h2>
  // <p>This is my first React component</p>
  return (
    <div>
      <h2>Welcome</h2>
      <p>This is my first React component</p>
    </div>
  );
}

// ========================================
// TASK 3: JavaScript Expressions in JSX
// ========================================
// Use curly braces {} to embed JavaScript expressions
// ⚠️ Must be expressions, NOT statements (if, for, etc)

function Task3() {
  const name = "Alice";
  const age = 25;
  const isStudent = true;
  
  // TASK 3: Use JavaScript expressions in JSX
  // Fill in the blanks to show:
  // - name variable
  // - age variable  
  // - calculation: age + 5
  // - boolean check: isStudent ? "Yes" : "No"
  return (
    <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Age in 5 years: {age + 5} </p>
      <p> Is Student : {isStudent ? "Yes" : "NO" }</p>
    </div>
  );
}

// ========================================
// TASK 4: Conditional Rendering
// ========================================
// Show/hide elements based on conditions

function Task4() {
  const isLoggedIn = true;
  const userRole = "admin";
  
  // TASK 4a: Ternary operator (condition ? true : false)
  // Fill in to show "Welcome back!" if logged in, else "Please log in"
  return (
    <div>
      <p>{isLoggedIn? "Welcome back!" : "Please log in" }</p>
      
      {/* TASK 4b: Logical && operator (show if true) */}
      {/* Fill in to show "You are an admin" only if userRole === "admin" */}
      {isLoggedIn && userRole === "admin" && <p>You are an admin</p>}
    </div>
  );
}

// ========================================
// TASK 5: Rendering Lists
// ========================================
// Use .map() to convert array to JSX elements
// ⚠️ GOTCHA: Each item must have a unique 'key' prop

function Task5() {
  const fruits = ["Apple", "Banana", "Orange"];
  
  // TASK 5: Use .map() to create <li> for each fruit
  // Fill in the blank with .map() function
 
  const fruitList = fruits.map((fruit) => 
      <li key={fruit}>{fruit}</li>
    );
  
  return (
    <div>
      <h3>Fruits:</h3>
      <ul>{fruitList}</ul>
    </div>
  );
}

// ========================================
// TASK 6: JSX Attributes (className, style)
// ========================================
// ⚠️ HTML attributes translate differently in JSX

function Task6() {
  // TASK 6a: Use className instead of class
  // Fill in: className="_________________"
  const cssClass = "container";
  
  // TASK 6b: Use inline styles as objects (camelCase)
  // Fill in: style={{ color: "_________________", fontSize: "_________________" }}
  const textStyle = {
    color: "#19ce5eb8",
    fontSize: "30"
  };
  
  return (
    <div className={cssClass}>
      <p style={textStyle}>
        Styled text
      </p>
    </div>
  );
}

// ========================================
// TASK 7: Event Handlers
// ========================================
// Use camelCase for event names: onClick, onChange, onSubmit

function Task7() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };
  
  // TASK 7a: Attach click handler
  // Fill in: onClick={_________________}
  
  // TASK 7b: Attach change handler to input
  // Fill in: onChange={_________________}
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
    </div>
  );
}

// ========================================
// TASK 8: Fragment (<>...</>) 
// ========================================
// Return multiple elements without wrapper div
// Fragment doesn't create actual DOM node

function Task8() {
  // TASK 8: Use Fragment to return 2 elements without wrapper
  // Replace the <div> with <> and </>
  return (
    <>
      <h1>Fragment Example</h1>
      <p>No extra div wrapper!</p>
    </>
      
  );
}

// ========================================
// TASK 9: JSX in Loops (alternative to .map())
// ========================================

function Task9() {
  const items = ["First", "Second", "Third"];
  const elements = [];
  
  // TASK 9: Fill in the loop to push JSX elements
  // for loop: for (let i = 0; i < items.length; i++)
  // push a <div> with key={i} and text
  for (let i = 0; i < items.length; i++) {
    elements.push(
      <div key={i}>
        {items[i]}
      </div>
    );
  }
  
  return <div>{elements}</div>;
}

// ========================================
// TASK 10: Comments in JSX
// ========================================
// JavaScript comments INSIDE JSX must use {/* */}
// Regular // comments work OUTSIDE JSX

function Task10() {
  return (
    <div>
      {/* TASK 10: This is correct comment syntax in JSX */}
      <p>
        {
          // TASK 10: This comment works too (inside expression)
          "Text here"
        }
      </p>
    </div>
  );
}

// ========================================
// REAL-WORLD EXAMPLE: Welcome Card
// ========================================

function WelcomeCard() {
  const user = {
    name: "John",
    email: "john@example.com",
    isVerified: true
  };
  
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {user.isVerified && <p style={{ color: "green" }}>✓ Email verified</p>}
      {!user.isVerified && <p style={{ color: "red" }}>⚠ Email not verified</p>}
    </div>
  );
}

// ========================================
// GOTCHAS & BEST PRACTICES
// ========================================

console.log(`
GOTCHAS:
1. ⚠️ className (not class)
2. ⚠️ htmlFor (not for)  
3. ⚠️ camelCase attributes: onClick, onChange, onSubmit
4. ⚠️ Inline styles are objects with camelCase: { backgroundColor: 'red' }
5. ⚠️ Must return ONE root element (or Fragment)
6. ⚠️ Expressions in {} - no statements (if, for, etc)
7. ⚠️ list.map() needs key prop
8. ⚠️ Comments in JSX need {/* */}

BEST PRACTICES:
✅ Use Fragment <> for multiple elements
✅ Use .map() for lists
✅ Keep event handlers simple or extract to functions
✅ Use meaningful variable names
✅ Separate concerns (logic vs rendering)
✅ Use comments to explain complex JSX
`);

// Export components for testing
export { Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8, Task9, Task10, WelcomeCard };
