const Stack = require("./Stack")

const pancakes = new Stack()

pancakes.push("blueberry")
pancakes.push("strawberry")
pancakes.push("chocolate chip")
console.log(pancakes.pop()) // chocolate chip 
console.log(pancakes.pop()) // strawberry
console.log(pancakes.pop()) // blueberry
