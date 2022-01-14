const Queue = require("./Queue")

const line = new Queue()

line.queue("Po")

line.queue("Buh")

line.queue("Goop")

console.log(line.dequeue()) // Po
console.log(line.dequeue()) // Buh
console.log(line.dequeue()) // Goop
