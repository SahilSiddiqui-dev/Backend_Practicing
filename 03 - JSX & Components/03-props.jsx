// ========================================
// DAY 3 - PROPS (Component Properties)
// ========================================
// Props = way to pass data from parent to child component
// Props are read-only (immutable)
// Similar to function parameters

import React from 'react';

// ========================================
// TASK 1: Basic Props
// ========================================
// Pass data to component as attributes

function Task1() {
  // TASK 1: Create Greeting component that takes 'name' prop
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  // Use component with prop:
  // <Greeting name="Alice" />
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

// ========================================
// TASK 2: Destructuring Props
// ========================================
// Instead of props.name, use { name } destructuring

function Task2() {
  // TASK 2a: Old way: props.name, props.age
  function UserProfile(props) {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  
  // TASK 2b: Better way: destructure directly
  function BetterUserProfile({ name, age, email }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  
  return (
    <div>
      <UserProfile name="Alice" age={25} />
      <BetterUserProfile name="Bob" age={30} email="bob@example.com" />
    </div>
  );
}

// ========================================
// TASK 3: Default Props
// ========================================
// Provide default values if prop not passed

function Task3() {
  // TASK 3: Create Button with default label
  function Button({ label = "default", size = "medium" }) {
    return (
      <button style={{ padding: size === "large" ? "20px" : "10px" }}>
        {label}
      </button>
    );
  }
  
  return (
    <div>
      <Button  />                    {/* Uses default */}
      <Button label="Click me" />   {/* Custom label */}
      <Button label="Big button" size="large" />
    </div>
  );
}

// ========================================
// TASK 4: Props with Objects
// ========================================
// Pass complex data as object props

function Task4() {
  // TASK 4: Create Card component that takes user object
  function Card({ user }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  }
  
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 }
  ];
  
  return (
    <div>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

// ========================================
// TASK 5: Props with Functions (Callbacks)
// ========================================
// Parent passes function, child calls it

function Task5() {
  // TASK 5a: Child component receives function prop
  function ClickButton({ onClick, label }) {
    return (
      <button onClick={onClick}>
        {label}
      </button>
    );
  }
  
  // TASK 5b: Parent component passes function
  function Parent() {
    const handleClick = () => {
      alert("Button clicked!");
    };
    
    return (
      <ClickButton 
        onClick={handleClick}
        label="Click me"
      />
    );
  }
  
  return <Parent />;
}

// ========================================
// TASK 6: Props with Spread Operator
// ========================================
// Use ...props to pass multiple props

function Task6() {
  // TASK 6a: Forward all props to child
  function Layout({ children, className, style }) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  
  // TASK 6b: Using spread operator
  function Container() {
    const props = {
      className: "container",
      style: { padding: "20px" }
    };
    
    return (
      <Layout {...props} >
        <p>Content here</p>
      </Layout>
    );
  }
  
  return <Container />;
}

// ========================================
// TASK 7: Children Prop
// ========================================
// children = content between opening and closing tags

function Task7() {
  // TASK 7: Create Box component with children
  function Box({ children, title }) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
  
  return (
    <Box title="My Box">
      <p>This is content inside the box</p>
      <button>Click me</button>
    </Box>
  );
}

// ========================================
// TASK 8: Props Types Documentation
// ========================================
// Use PropTypes to document expected prop types

function Task8() {
  function PersonCard({ name, age, email, isActive }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Status: {isActive ? "Active" : "Inactive"}</p>
      </div>
    );
  }
  
  // Expected prop types (documentation):
  // name: string (required)
  // age: number
  // email: string
  // isActive: boolean
  
  // TASK 8: What props should this component receive?
  return (
    <PersonCard 
      name="Alice"  // string
      age={25}    // number
      email="alice@example.com"  // string
      isActive={true}  // boolean
    />
  );
}

// ========================================
// TASK 9: Props Immutability
// ========================================
// ⚠️ NEVER modify props directly

function Task9() {
  function WrongComponent(props) {
    // ❌ WRONG: Don't modify props
    // props.count = 0;
    
    // ✅ CORRECT: Use state if need to modify
    const [count, setCount] = React.useState(props.initialCount);
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    );
  }
  
  return <WrongComponent initialCount={0} />;
}

// ========================================
// TASK 10: Props with Conditional Rendering
// ========================================

function Task10() {
  // TASK 10: Create Alert component that shows different styles
  function Alert({ type, message }) {
    const colors = {
      success: "green",
      error: "red",
      warning: "orange",
      info: "blue"
    };
    
    return (
      <div
        style={{
          backgroundColor: colors[type],
          color: "white",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {message}
      </div>
    );
  }
  
  return (
    <div>
      <Alert type="success" message="Operation successful!" />
      <Alert type="error" message="An error occurred" />
      <Alert type="warning" message="Please be careful" />
      <Alert type="info" message="Information message" />
    </div>
  );
}

// ========================================
// REAL-WORLD EXAMPLE: Product List
// ========================================

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Mouse", price: 29, inStock: true },
    { id: 3, name: "Keyboard", price: 79, inStock: false }
  ];
  
  function Product({ id, name, price, inStock, onAddToCart }) {
    return (
      <div style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px"
      }}>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
        <button
          disabled={!inStock}
          onClick={() => onAddToCart(id)}
        >
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    );
  }
  
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };
  
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <Product
          key={product.id}
          {...product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

// ========================================
// PROPS PATTERNS & BEST PRACTICES
// ========================================

console.log(`
PROPS PATTERNS:

1. BASIC PROPS:
   <Component name="Alice" age={25} />
   function Component({ name, age }) {}

2. DEFAULT PROPS:
   function Component({ name = "Guest", age = 0 }) {}

3. CONDITIONAL PROPS:
   <Component {...condition && { prop: value }} />

4. CHILDREN:
   <Wrapper>
     <Child />
   </Wrapper>
   function Wrapper({ children }) {}

5. CALLBACK PROPS:
   <Button onClick={handleClick} />
   function Button({ onClick }) {}

6. SPREAD OPERATOR:
   <Component {...props} />

7. REST OPERATOR (collect remaining):
   function Component({ id, ...rest }) {}

GOTCHAS:
1. ⚠️ Props are READ-ONLY (immutable)
2. ⚠️ Changes don't trigger re-render (use state for that)
3. ⚠️ Don't pass new objects every render (use useMemo)
4. ⚠️ Callback props should be memoized to avoid child re-renders
5. ⚠️ Avoid passing entire object if only need one property
6. ⚠️ Use PropTypes or TypeScript for type safety

BEST PRACTICES:
✅ Destructure props at function signature
✅ Use meaningful names (not "data" or "config")
✅ Document expected props with comments
✅ Use defaultProps or default parameters
✅ Keep props flat (avoid deep nesting)
✅ Use callback functions for child→parent communication
✅ Separate logic from presentation props
`);

// Export components
export {
  Task1, Task2, Task3, Task4, Task5,
  Task6, Task7, Task8, Task9, Task10,
  ProductList
};
