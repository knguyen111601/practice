// JavaScript Hoisting is the process in which the interpreter moves all the declarations of functions, variables, or classes to the top of their scope, prior to the execution of the code

// ONLY TAKES THE DECLARATION AND NOT THE VALUE ASSIGNED TO IT
// EX. var d; will be hoisted, but if it is assigned something, that is ignored
var a = "First"
var b = "Second"
var c = "Third"
console.log(a + " " + b + " " + c + " " + d)
// The console.log will log d as undefined as the declaration is hoisted but not the value
var d = "Fourth"

////////////////////////////////////////////////////////////////////////////////////////////

// Here, f is declared below the console.log, but is assigned a value before its declaration is written
// JavaScript hoisting will bring it to the top of the scope
var e = "Fifth"
f = "Sixth"

console.log(e + " " + f)

var f 

////////////////////////////////////////////////////////////////////////////////////////////
