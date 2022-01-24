// const myMap = new Map([["name", "John"], ["surname", "Doe"]])

// console.log(myMap)


// JavaScript does not allow for multiple key in object created this way. It gets overwritten. That is where map comes in
// const myObject = {}

// const a = {}
// const b = {}

// myObject[a] = "a"
// myObject[b] = "b"

// console.log(myObject)



const a = {}
const b = {}

const myMap = new Map([[1, 1]])

// Set Method adds a new key and value 
myMap.set(2, 2)

// Delete Method
myMap.delete(1) // should remove element with key 1

// Clear Method
myMap.clear() // Empties map


// Has Method
console.log(myMap.has(1)) // returns true or false if it has the value in the argument, searches by key

// Size Method
console.log(myMap.size) // returns how many elements the map has

console.log(myMap) // Map will keep track of both keys 
