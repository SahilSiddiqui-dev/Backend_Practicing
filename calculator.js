const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require('./calculator-ops');

console.log('Addition:', add(10, 5));
console.log('Subtraction:', subtract(10, 5));
console.log('Multiplication:', multiply(10, 5));
console.log('Division:', divide(10, 5));
console.log('Expression result:', calculate(20, '+', 5));

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
