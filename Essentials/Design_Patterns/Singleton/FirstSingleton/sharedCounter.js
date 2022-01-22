// Import SingleCounter
const {SingleCounter} = require("./single")

// Create two Counters
const firstCounter = new SingleCounter()
const secondCounter = new SingleCounter()


firstCounter.inc() // increment the instance of SingleCounter by 1
firstCounter.inc() // increment the instance of SingleCounter by 1

console.log(firstCounter.counterVal) // returns 2
console.log(secondCounter.counterVal) // ALSO returns 2 as any changes done by either are changing the one instance of counter

secondCounter.name = "counterB"

console.log(secondCounter.name) // Returns counter b
console.log(firstCounter.name) // ALSO returns counter b