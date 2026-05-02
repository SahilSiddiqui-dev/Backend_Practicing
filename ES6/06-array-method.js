// ========================================
// EXERCISE: Array methods (map, filter, reduce)
// ========================================

// Sample data:
const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Tablet", price: 500, inStock: true },
  { id: 4, name: "Monitor", price: 300, inStock: true },
];

console.log("=== MAP: Transform each element ===");

// TASK 1: Get all product names
const names = products.map(product => ___________);
console.log("Names:", names);
// Should be: ["Laptop", "Phone", "Tablet", "Monitor"]

// TASK 2: Get prices with 10% tax
const pricesWithTax = products.map(product => {
  return ___________; // Calculate price * 1.1
});
console.log("Prices with 10% tax:", pricesWithTax);
// Should be: [1320, 880, 550, 330]

// TASK 3: Create formatted strings (use template literal)
const formatted = products.map(p => `${p.name} - $${p.price}`);
console.log("Formatted:", formatted);
// Should be: ["Laptop - $1200", "Phone - $800", ...]

console.log("\n=== FILTER: Keep only some elements ===");

// TASK 4: Get only in-stock products
const inStock = products.filter(product => ___________);
console.log("In stock count:", inStock.length);  // Should be 3
console.log("In stock:", inStock);

// TASK 5: Get products cheaper than $600
const affordable = products.filter(___________);
console.log("Affordable products:", affordable);
// Should include: Phone (800) and Monitor (300)

console.log("\n=== REDUCE: Combine into one value ===");

// TASK 6: Get total price of all products
const totalPrice = products.reduce((accumulator, product) => {
  return ___________; // Add product.price to accumulator
}, 0);
console.log("Total price:", totalPrice);  // Should be 2800

// TASK 7: Get total price of only in-stock products
const totalInStock = products
  .filter(p => p.inStock)
  .reduce((sum, p) => ___________, 0);
console.log("Total in-stock price:", totalInStock);  // Should be 2000

// TASK 8: Convert array to object (id -> name mapping)
const idToName = products.reduce((map, product) => {
  map[___________] = ___________;  // Fill both blanks
  return map;
}, {});
console.log("ID to Name mapping:", idToName);
// Should be: { 1: "Laptop", 2: "Phone", 3: "Tablet", 4: "Monitor" }

console.log("\n=== CHALLENGE: Method chaining ===");

// TASK 9: Get total price of all in-stock products with 10% tax applied
const challengeResult = products
  .filter(p => ___________)  // Only in-stock
  .map(p => ___________)     // Add 10% tax to price
  .reduce((sum, price) => ___________, 0);  // Sum all
console.log("Total in-stock with tax:", challengeResult);  // Should be 2200

// TASK 10: Create array of product objects, only in-stock, with formatted price
const enrichedProducts = products
  .filter(p => ___________)
  .map(p => ({
    name: p.name,
    priceFormatted: `$${(p.price * 1.1).toFixed(2)}`,
    // ADD taxAmount field here
  }));
console.log("Enriched products:", enrichedProducts);