// let nums = new Set()


// // .add is a function for sets
// nums.add(3)
// nums.add(4)
// nums.add(3) // Doesn't get added because it is a duplicate 
// nums.add("Goop")
// nums.add("Po")
// nums.add("Buh")


// nums.forEach(n => {console.log(n)})

const myArray = [1,2,3,4, 5, 5, 1, 2]

const mySet = new Set(myArray)

// console.log(myArray) // [1,2,3,4,5,5,1,2]
// console.log(mySet) // Set(5) { 1,2,3,4,5 }

// const uniqueArray = [...mySet]

// console.log(uniqueArray) // [1,2,3,4,5]


/////////////////////////////////////////////////
// Methods
/////////////////////////////////////////////////


// ADD

mySet.add(6)
console.log(mySet)

mySet.add("6")
// can add objects
mySet.add({website: "Google"})

console.log(mySet)

// DELETE
// deletes a value that is 3
mySet.delete(3)
console.log(mySet)

// CLEAR

mySet.clear() // deletes every item in the set
console.log(mySet)

// HAS
// Returns Boolean value if item has item
console.log(mySet.has(5))

// Size
// Returns length 
console.log(mySet.size)