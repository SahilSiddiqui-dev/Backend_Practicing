// ========================================
// EXERCISE: Classes, constructors, inheritance
// ========================================

console.log("=== PART 1: Basic Class ===");

// TASK 1: Create a Person class
class Person {
  // Constructor runs when you create new instance
  constructor(name, age) {
    this.name = name;  // Store name
    this.age = age;   // Store age
  }
  
  // Method: regular function inside class
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  // Method: return formatted string
  bio() {
    return `${this.name} is ${this.age} years old`;
  }
}

// Create instances
const person1 = new Person("Alice", 25);
person1.greet();  // Should print: Hello, I'm Alice
console.log(person1.bio());  // Should print: Alice is 25 years old

// TASK 2: Add a static method
class Calculator {
  // Static methods belong to CLASS, not instances
  static add(a, b) {
    return  a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.add(5, 3));  // Should print: 8 (no instance needed!)
console.log(Calculator.multiply(5, 3));  // Should print: 15

console.log("\n=== PART 2: Inheritance (extends/super) ===");

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// TASK 3: Extend Animal class
class Dog extends Animal {
  constructor(name, breed) {
    // super() calls parent constructor FIRST
    super(name);  // Pass name to parent
    this.breed = breed;
  }
  
  // Override parent method
  speak() {
    console.log(`${this.name} barks!`);
  }
  
  // New method only in Dog
  getInfo() {
    return `${this.name} is a ${this.breed}`;
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();  // Should print: Rex barks!
console.log(dog.getInfo());  // Should print: Rex is a Labrador

// TASK 4: Multiple levels of inheritance
class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

class Mammal extends Animal2 {
  constructor(name, furColor) {
    super(name);
    this.furColor = furColor;
  }
}

class Cat extends Mammal {
  constructor(name, furColor, lives = 9) {
    super(name, furColor);  // Pass to Mammal
    this.lives = lives;
  }
}

const cat = new Cat("Whiskers", "Orange");
console.log(cat.name);  // Should print: Whiskers
console.log(cat.furColor);  // Should print: Orange
console.log(cat.lives);  // Should print: 9

console.log("\n=== PART 3: Getters & Setters ===");

// TASK 5: Class with getter/setter
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this._balance = balance;  // Convention: _ means "private"
  }
  
  // Getter: called like property (no parentheses)
  get balance() {
    return this._balance; 
  }
  
  // Setter: called like assignment
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
      return;
    }
    this._balance = amount;
  }
  
  deposit(amount) {
    this.balance += amount;  // Uses setter!
  }
}

const account = new BankAccount("John", 100);
console.log(account.balance);  // Uses getter: prints 100
account.balance = 200;  // Uses setter
console.log(account.balance);  // Prints 200
account.balance = -50;  // Setter prevents negative
console.log(account.balance);  // Still 200

console.log("\n=== CHALLENGE ===");

// TASK 6: Create a Vehicle class hierarchy
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  info() {
    return `${this.brand} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);  // Call parent
    this.doors = doors;
  }
  
  info() {
    return `${super.info()} - ${this.doors} doors`;
  }
}

// Create instance
const myCar = new Car("Toyota", "Camry", 4);
console.log(myCar.info());  // Should print: Toyota Camry - 4 doors

// TASK 7: Create a Student class with getter
class Student {
  constructor(name, grades = []) {
    this.name = name;
    this.grades = grades;
  }
  
  // Calculate average grade (getter)
  get averageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;  // Calculate average
  }
  
  addGrade(grade) {
    this.grades.push(grade);
  }
}

const student = new Student("Emma", [85, 90, 92]);
console.log(`${student.name}'s average: ${student.averageGrade}`);  // Should be ~89
student.addGrade(88);
console.log(`Updated average: ${student.averageGrade}`);  // Should be ~89

// TASK 8: instanceof check
console.log(myCar instanceof Car);  // Should be true
console.log(myCar instanceof Vehicle);  // Should be true
console.log(dog instanceof Animal);  // Should be true
console.log(dog instanceof Dog);  // Should be true
console.log(dog instanceof Person);  // Should be false