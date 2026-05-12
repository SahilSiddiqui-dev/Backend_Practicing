// ========================================
// DAY 3 - FUNCTIONAL COMPONENTS
// ========================================
// Components are JavaScript functions that return JSX
// Naming: PascalCase (capital first letter)
// Re-usable, composable, testable

import React from 'react';

// ========================================
// TASK 1: Basic Functional Component
// ========================================
// A component is just a function that returns JSX
// Component name MUST start with capital letter

function Task1() {
 
  // TASK 1: Create and return a simple component
  // Create a component function that returns:
  // <div>
  //   <h1>Hello Component</h1>
  //   <p>This is my first component</p>
  // </div>
  
  function Greeting() {
    return (
      <div>
        <h1>Hello Component</h1>
      <p>This is my first component</p>
      </div>
    );
  }
  
  // Render component
  return <Greeting/>;
}

// ========================================
// TASK 2: Component with State (useState)
// ========================================
// useState hook allows functional components to have state
// const [state, setState] = useState(initialValue);

function Task2() {
  // TASK 2: Create a counter component with state
  // Fill in:
  // const [count, setCount] = useState(___________)  // initial value
  // Button to increment: onClick={() => setCount(count + 1)}
  // Display current count
  
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// ========================================
// TASK 3: Multiple State Variables
// ========================================
// A component can use multiple useState hooks

function Task3() {
  // TASK 3: Create a form with name and email state
  // const [name, setName] = useState("__________");
  // const [email, setEmail] = useState("__________");
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);  // event.target.value
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);  // event.target.value
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// ========================================
// TASK 4: Component Lifecycle with useEffect
// ========================================
// useEffect runs AFTER component renders
// Used for: API calls, event listeners, timers

function Task4() {
  const [message, setMessage] = React.useState("");
  
  // TASK 4: Use useEffect to set a message after 2 seconds
  // Fill in:
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage("__________");  // "Hello from useEffect"
  //   }, 2000);
  // }, []);
  
  React.useEffect(() => {
    setTimeout(() => {
      setMessage("hello from useEffect");
    }, 2000);
  }, []);
  
  return <p>{message || "Loading..."}</p>;
}

// ========================================
// TASK 5: Controlled vs Uncontrolled Components
// ========================================
// Controlled: React manages value via state
// Uncontrolled: DOM manages value

function Task5() {
  // TASK 5a: Controlled component (React manages it)
  const [controlledValue, setControlledValue] = React.useState("");
  
  return (
    <div>
      <h3>Controlled Input</h3>
      <input
        type="text"
        value={controlledValue}
        onChange={(e) => setControlledValue(e.target.value)}
      />
      <p>You typed: {controlledValue}</p>
      
      {/* TASK 5b: Uncontrolled component (use ref)
          ❌ NOT recommended but shows difference */}
      {/* <input type="text" ref={myRef} /> */}
    </div>
  );
}

// ========================================
// TASK 6: Component Composition
// ========================================
// Combine multiple components together

function Task6() {
  // Create child components
  function Header() {
    return <h1>My App</h1>;
  }
  
  function Content() {
    return <p>This is the main content</p>;
  }
  
  function Footer() {
    return <footer>© 2026 My App</footer>;
  }
  
  // TASK 6: Compose components together
  // Return all three components
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

// ========================================
// TASK 7: Conditional Rendering in Components
// ========================================

function Task7() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  // TASK 7: Show different UI based on login state
  // Ternary: isLoggedIn ? <Dashboard /> : <LoginForm />
  
  function Dashboard() {
    return <h2>Welcome back!</h2>;
  }
  
  function LoginForm() {
    return (
      <div>
        <p>Please log in</p>
        <button onClick={() => setIsLoggedIn(true)}>
          Log In
        </button>
      </div>
    );
  }
  
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginForm />}
    </div>
  );
}

// ========================================
// TASK 8: Lists of Components
// ========================================

function Task8() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Learn JSX" },
    { id: 2, text: "Learn Components" },
    { id: 3, text: "Build Projects" }
  ]);
  
  function TodoItem({ id, text }) {
    return (
      <li key={id}>
        {text}
      </li>
    );
  }
  
  // TASK 8: Use .map() to render list of components
  // Fill in the .map() call
  return (
    <div>
      <h3>To-Do List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// ========================================
// TASK 9: Component with Default Values
// ========================================

function Task9() {
  // TASK 9: Create component with default state values
  const [formData, setFormData] = React.useState({
    username: "",  // ""
    password: "",  // ""
    rememberMe: false  // false
  });
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>
      
      <p>Form data: {JSON.stringify(formData)}</p>
    </div>
  );
}

// ========================================
// TASK 10: Component with cleanup (useEffect cleanup)
// ========================================
// Return cleanup function from useEffect

function Task10() {
  const [count, setCount] = React.useState(0);
  
  // TASK 10: Add cleanup function that runs when component unmounts
  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);
    
    // Cleanup function: runs when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return <p>Count: {count}</p>;
}

// ========================================
// REAL-WORLD EXAMPLE: Todo App Component
// ========================================

function TodoApp() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build projects", completed: false }
  ]);
  const [input, setInput] = React.useState("");
  
  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: todos.length + 1,
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };
  
  const toggleTodos = (id) => {
    setTodos(todos.map((todo) => {
      todo.id === id ? { ...todo , completed = !todo.completed} : todo
    }))
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Todo List</h1>
      
      <div>
        <input
          type="text"
          placeholder="Add new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ========================================
// COMPONENT STRUCTURE BEST PRACTICES
// ========================================

console.log(`
COMPONENT STRUCTURE:

function MyComponent() {
  // 1. State declarations (useState)
  const [state, setState] = React.useState(initial);
  
  // 2. Effects (useEffect)
  React.useEffect(() => {
    // setup
    return () => {
      // cleanup
    };
  }, []);
  
  // 3. Event handlers
  const handleClick = () => {};
  
  // 4. Helper functions
  const calculateValue = () => {};
  
  // 5. JSX return
  return (
    <div>
      {/* content */}
    </div>
  );
}

NAMING CONVENTIONS:
✅ Components: PascalCase (MyComponent)
✅ State variables: camelCase (myState)
✅ Functions: camelCase (handleClick)
✅ Constants: UPPER_CASE (MAX_LENGTH)

GOTCHAS:
1. ⚠️ Component name MUST start with capital letter
2. ⚠️ useState must be called at top level
3. ⚠️ useEffect dependencies array [] = run once
4. ⚠️ Mutating state directly won't trigger re-render
5. ⚠️ Keys in lists must be unique and stable
6. ⚠️ Avoid using index as key (breaks list updates)
7. ⚠️ Event handlers are called INLINE: onClick={() => fn()}
`);

// Export components
export { 
  Task1, Task2, Task3, Task4, Task5, 
  Task6, Task7, Task8, Task9, Task10, 
  TodoApp 
};
