// Assignment 1: Variables, Data Types, and Console Operations
var userName = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

const skillsText = "[" + skills.map((s) => `"${s}"`).join(", ") + "]";

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${skillsText} (Type: ${typeof skills})`);
