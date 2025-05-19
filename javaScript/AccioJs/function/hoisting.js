//what is hoisting in js?
//https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

//hoisting in js means variables and functions are moved to top of the code before execution starts 
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.

// 🔍 Explanation:
// When JavaScript code runs, it scans for declarations and "hoists" them to the top of the scope (either global or function scope). However, only the declarations are hoisted, not the initializations.

console.log(a); // undefined (not an error) due to hoisting
var a = 5;
console.log(a); // 5

//js internally treats as the below code
var a;
console.log(a);
a = 5;

 
//📌 Function Hoisting:
greet(); // "Hello" // called before the function is declared
function greet() {
  console.log("Hello");
}
//js internally treats as the below code
function greet() {
  console.log("Hello");
}
greet();


