// ========================================
// DAY 2 - ES6 MODULES (import/export)
// ========================================
// Modules organize code into reusable files
// export = make code available to other files
// import = use code from other files
// Each file is its own scope (private by default)

console.log("=== UNDERSTANDING EXPORTS ===");
console.log(`
There are TWO types of exports:

1. NAMED EXPORTS:
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;
   
   Import: import { add, subtract } from './file'
   
2. DEFAULT EXPORT:
   export default { appName: 'MyApp' };
   
   Import: import config from './file'
`);

// ========================================
// SECTION 1: Simulating math-utils.js
// ========================================

console.log("\n=== SECTION 1: Math Utilities (NAMED exports) ===");

// TASK 1: Create named export functions
// Fill in the blanks with function bodies
const add = (a, b) => {
  return a + b
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// TASK 2: Create constant export
const PI = 3.14159;

// In real file: export { add, subtract, multiply, divide, PI };

console.log("Math functions:");
console.log("add(10, 5) =", add(10, 5));  // Should print: 15
console.log("subtract(10, 5) =", subtract(10, 5));  // Should print: 5
console.log("multiply(10, 5) =", multiply(10, 5));  // Should print: 50
console.log("divide(10, 5) =", divide(10, 5));  // Should print: 2
console.log("PI =", PI);  // Should print: 3.14159

// ========================================
// SECTION 2: Simulating string-utils.js
// ========================================

console.log("\n=== SECTION 2: String Utilities (NAMED exports) ===");

// TASK 3: Create string manipulation functions
// Fill in the blanks with string methods
const toUpperCase = (str) => {
  return str.toUpperCase();
};

const toLowerCase = (str) => {
  return str.toLowerCase();
};

const reverse = (str) => {
  return str.split('').reverse().join('');
};

// In real file: export { toUpperCase, toLowerCase, reverse };

console.log("toUpperCase('hello') =", toUpperCase('hello'));  // Should print: HELLO
console.log("toLowerCase('WORLD') =", toLowerCase('WORLD'));  // Should print: world
console.log("reverse('javascript') =", reverse('javascript'));  // Should print: tpircsavaj

// ========================================
// SECTION 3: Simulating config.js
// ========================================

console.log("\n=== SECTION 3: Config (DEFAULT export) ===");

// TASK 4: Create default export object
// Fill in the blanks with config values
const config = {
  appName: "My App",
  version: "1.0.0",
  isDevelopment: true
};

// In real file: export default config;

console.log("config.appName =", config.appName);  // Should print: "My App"
console.log("config.version =", config.version);  // Should print: "1.0.0"
console.log("config.isDevelopment =", config.isDevelopment);  // Should print: true

// ========================================
// SECTION 4: Simulating logger.js
// ========================================

console.log("\n=== SECTION 4: Logger (NAMED + DEFAULT exports) ===");

// TASK 5: Named exports for specific functions
const log = (message) => {
  console.log("[LOG]", message);
};

const error = (message) => {
  console.log("[ERROR]", message);
};

// TASK 6: Default export - main logger object
const logger = {
  info: (msg) => console.log("[INFO]", msg),
  warn: (msg) => console.log("[WARN]", msg),
  debug: (msg) => console.log("[DEBUG]", msg)
};

// In real file: export default logger; export { log, error };

log("Test named export");  // Should print: [LOG] Test named export
error("Test error export");  // Should print: [ERROR] Test error export
logger.info("Test default export");  // Should print: [INFO] Test default export

// ========================================
// SECTION 5: Using imports
// ========================================

console.log("\n=== SECTION 5: Import Patterns ===");

// TASK 7: Demonstrate import patterns
console.log(`
Pattern 1: Import named exports
import { add, subtract } from './math-utils';
Result: add(10, 5) = ${add(10, 5)}
`);

console.log(`Pattern 2: Rename on import
import { toUpperCase as upper } from './string-utils';
Result: upper('hello') = ${toUpperCase('hello')}
`);

console.log(`Pattern 3: Namespace import
import * as math from './math-utils';
Result: math.multiply(10, 5) = ${multiply(10, 5)}
`);

console.log(`Pattern 4: Import default
import config from './config';
Result: config.appName = ${config.appName}
`);

console.log(`Pattern 5: Mix default + named
import logger, { log } from './logger';
Result: logger.info('test') calls info function
`);

// ========================================
// SECTION 6: Real World React Pattern
// ========================================

console.log("\n=== SECTION 6: React Component Pattern ===");

// TASK 8: Create a button component pattern
// Fill in the blanks
const SIZES = { small: "8px", large: "16px" };
const COLORS = { primary: "blue", danger: "red" };

const Button = ({ size, color, label }) => {
  return `<button size=${size} color=${color}>${label}</button>`;
};

// In real Button.js: export default Button; export { SIZES, COLORS };

console.log("Button component created");
console.log(Button({ size: SIZES.small, color: COLORS.primary, label: 'Click' }));
// Should print: <button size=8px color=blue>Click</button>

// ========================================
// SECTION 7: Module Best Practices
// ========================================

console.log("\n=== SECTION 7: Best Practices ===");

// TASK 9: Choose the right export type
console.log(`
✅ Use NAMED exports for:
   - Utility functions (helpers, validators)
   - Constants and configuration objects
   - Multiple related functions
   
   Example: export { add, subtract, multiply }
   Import: import { add } from './math'
`);

console.log(`✅ Use DEFAULT export for:
   - Main component per file
   - Single primary function/class
   - Configuration files (usually)
   
   Example: export default Button
   Import: import Button from './Button'
`);

console.log(`✅ Use BOTH (default + named) for:
   - Main component WITH related utilities
   - Component file with constants
   
   Example: export default Button; export { SIZES, COLORS }
   Import: import Button, { SIZES } from './Button'
`);

// ========================================
// SECTION 8: Real File Structure
// ========================================

// TASK 10: Understand project structure
console.log(`
=== TYPICAL PROJECT STRUCTURE ===

my-app/
├── src/
│   ├── utils/
│   │   ├── math.js         (all NAMED: export { add, subtract })
│   │   └── string.js       (all NAMED: export { upper, lower })
│   │
│   ├── config/
│   │   └── app.js          (DEFAULT: export default config)
│   │
│   ├── components/
│   │   ├── Button.js       (DEFAULT + NAMED: export default Button; export { SIZES })
│   │   ├── Card.js         (DEFAULT: export default Card)
│   │   └── Header.js       (DEFAULT: export default Header)
│   │
│   └── App.js              (DEFAULT: export default App)

Usage in App.js:
import Button, { SIZES } from './components/Button';
import Card from './components/Card';
import { add } from './utils/math';
import config from './config/app';
`);

console.log("\n=== GOTCHAS & BEST PRACTICES ===");
console.log(`
1. ⚠️ One default export per file (use wisely)
2. ⚠️ Named imports MUST match export name: import { add } not { Add }
3. ⚠️ import { default as X } to import default with name
4. ⚠️ Circular dependencies can cause issues
5. ⚠️ Named imports create separate namespace
6. ⚠️ Forget 'export' = code is private to that file!
7. ⚠️ In Node.js, need .js extension in import paths
8. ⚠️ React uses default exports for components (convention)
`);

console.log("\n✅ ALL CONCEPTS DEMONSTRATED!");
console.log("🎓 You now understand ES6 modules!");
console.log("📦 Ready to use in React projects!");

// ========================================
// SUMMARY TABLE
// ========================================

console.log(`
╔═══════════════════╦═════════════════════╦════════════════════════╗
║   Export Type     ║   Syntax            ║   Import Syntax        ║
╠═══════════════════╬═════════════════════╬════════════════════════╣
║   Named           ║   export { func }   ║   import { func }      ║
║   Multiple Named  ║   export const x=1  ║   import { x, y }      ║
║   Rename          ║   export { a as b } ║   import { a as b }    ║
║   Namespace       ║   (all named)       ║   import * as ns       ║
║   Default         ║   export default X  ║   import X from './x'  ║
║   Both            ║   (def + named)     ║   import D, { n }      ║
╚═══════════════════╩═════════════════════╩════════════════════════╝
`);
