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

console.log(myArray) // [1,2,3,4,5,5,1,2]
console.log(mySet) // Set(5) { 1,2,3,4,5 }

const uniqueArray = [...mySet]

console.log(uniqueArray) // [1,2,3,4,5]



