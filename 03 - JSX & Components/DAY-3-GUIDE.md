# 🎯 DAY 3 - JSX & REACT COMPONENTS

**Date:** May 11, 2026  
**Status:** Started ✅  
**Focus:** Understanding React's core: JSX syntax and component structure

---

## 📚 Today's Topics

### 1. **JSX Fundamentals** (`01-jsx-fundamentals.jsx`)
Learn how to write JSX - the HTML-like syntax for React

**Key Concepts:**
- What is JSX? (JavaScript XML)
- JSX vs HTML differences
- Expressions in JSX with `{}`
- Conditional rendering (ternary, &&)
- Rendering lists with `.map()`
- Event handlers (onClick, onChange)
- Inline styles and className

**Tasks:** 10 scaffolded exercises
**Time:** ~30 minutes

---

### 2. **Functional Components** (`02-functional-components.jsx`)
Create reusable React components with hooks

**Key Concepts:**
- What are functional components?
- Component naming (PascalCase)
- React Hooks: `useState`, `useEffect`
- Managing component state
- Component lifecycle
- Controlled vs Uncontrolled components
- Component composition

**Tasks:** 10 scaffolded exercises + TodoApp example
**Time:** ~45 minutes

---

### 3. **Props (Component Properties)** (`03-props.jsx`)
Pass data between parent and child components

**Key Concepts:**
- What are props?
- Passing data to components
- Destructuring props
- Default props
- Props with objects and arrays
- Callback functions (parent→child communication)
- Children prop
- Props immutability

**Tasks:** 10 scaffolded exercises + ProductList example
**Time:** ~40 minutes

---

## 🎬 Getting Started

### Step 1: Fill in the Blanks
Each file has 10 tasks with `_________________` blanks to fill

Example:
```javascript
// TASK 1: Fill in the blank
function Greeting() {
  return <h1>_________________</h1>;  // Should be: Hello JSX
}
```

### Step 2: Test in Browser
You have two options:

**Option A: Use the existing Vite React app**
```bash
cd d:\Leaning React\My-App
npm run dev
```

**Option B: Use a code sandbox online**
- Go to: https://codesandbox.io/s/react
- Copy-paste the code and test

### Step 3: Verify Output
- Test each component
- Check console for errors
- Verify component renders correctly

---

## 💡 Quick Reference

### JSX Syntax

```javascript
// Basic JSX
<div>Hello World</div>

// Expressions
<p>Count: {count}</p>

// Conditionals
{isLoggedIn ? <Dashboard /> : <Login />}
{isAdmin && <AdminPanel />}

// Lists
{items.map(item => <li key={item.id}>{item.name}</li>)}

// Event handlers
<button onClick={handleClick}>Click</button>

// Style
<div style={{ color: 'red', fontSize: '20px' }}>Text</div>

// ClassName
<div className="container">Content</div>
```

### Functional Components

```javascript
// Basic component
function Greeting() {
  return <h1>Hello!</h1>;
}

// Component with state
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Component with props
function Card({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
```

### Props Pattern

```javascript
// Parent passing props
<UserCard name="Alice" age={25} isVerified={true} />

// Child receiving props
function UserCard({ name, age, isVerified }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      {isVerified && <span>✓ Verified</span>}
    </div>
  );
}
```

---

## ⚠️ Common Gotchas

### JSX Gotchas
1. **className** not class
2. **htmlFor** not for
3. **camelCase** attributes: onClick, onChange
4. **Expressions** in `{}` - no statements
5. **One root element** - wrap multiple in parent

### Component Gotchas
1. **PascalCase** - component names start with capital
2. **Hooks at top level** - useState/useEffect must be at function top
3. **State updates** - use setState, don't mutate directly
4. **Key in lists** - must be unique, not index

### Props Gotchas
1. **Props are read-only** - don't modify directly
2. **Pass functions** - use callbacks for communication
3. **Spread operator** - use `{...props}` carefully
4. **Default values** - set sensible defaults

---

## 📝 Recommended Workflow

### Day 3 - Part 1 (Today)
- [ ] Fill in `01-jsx-fundamentals.jsx` (10 tasks)
- [ ] Test in browser or CodeSandbox
- [ ] Understand JSX syntax

### Day 3 - Part 2 (Next session)
- [ ] Fill in `02-functional-components.jsx` (10 tasks)
- [ ] Test useState and useEffect
- [ ] Build the TodoApp example

### Day 3 - Part 3 (Next session)
- [ ] Fill in `03-props.jsx` (10 tasks)
- [ ] Test prop passing
- [ ] Build the ProductList example

---

## 🧪 Testing Your Code

### Test in CodeSandbox

1. Go to https://codesandbox.io/s/react
2. Copy the entire component function into `App.js`
3. Click "Add" or "Run"
4. Check the preview pane

### Test Locally

```bash
# In My-App folder
npm run dev

# Then create a test file or import component
import { Task1 } from './03-JSX/01-jsx-fundamentals';

function App() {
  return <Task1 />;
}
```

---

## 🎯 Success Criteria

After Day 3, you should be able to:

- [ ] Write JSX code with proper syntax
- [ ] Understand JSX expressions and conditionals
- [ ] Create functional components
- [ ] Use useState hook for state management
- [ ] Pass props between components
- [ ] Render lists with `.map()`
- [ ] Handle events (onClick, onChange)
- [ ] Compose components together
- [ ] Understand component lifecycle basics
- [ ] Build a simple interactive app (like TodoApp)

---

## 📚 Additional Resources

### React Docs
- Official React Guide: https://react.dev
- React JSX Documentation: https://react.dev/learn/writing-markup-with-jsx
- Hooks Documentation: https://react.dev/reference/react

### Practice Ideas
1. Create a simple counter component
2. Build a todo list with add/delete
3. Create a user profile card with props
4. Build a form with multiple inputs
5. Create a product gallery

---

## 🚀 Next After Day 3

Once Day 3 is complete:

**Day 4:** Advanced Hooks
- useEffect for side effects
- useContext for global state
- Custom hooks

**Day 5:** Component Patterns
- Controlled components
- Render props
- HOC (Higher-Order Components)

---

## 📝 Notes

**Important:** JSX is NOT HTML - it's a syntax extension that compiles to `React.createElement()`

Example transformation:
```javascript
// This JSX:
<div className="greeting">
  <h1>Hello {name}!</h1>
</div>

// Becomes:
React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello ', name, '!')
)
```

That's why we need the closing parenthesis and proper syntax!

---

**Ready to start? Pick a file and begin filling in the blanks!** 💪
