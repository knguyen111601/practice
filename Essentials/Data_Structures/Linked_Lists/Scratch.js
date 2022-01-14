const LinkedList = require("./LinkedListPractice")

// const LL = new LinkedList(1)

// LL.add(2)

// LL.add(3)

// console.log(LL.getData()) // Should return 1
// LL.next()

// console.log(LL.getData()) // Should be 2
// LL.next()

// console.log(LL.getData()) // Should be 3
// LL.back() 

// console.log(LL.getData()) // Should be 2
// LL.back()

// console.log(LL.getData()) // Should be 1


const LL = new LinkedList("goop")

LL.add("po")

LL.add("dog")

console.log(LL.getData()) // should be goop

LL.next()

console.log(LL.getData()) // should be po

LL.back()

console.log(LL.getData()) // should be goop

LL.next()
LL.next()

console.log(LL.getData()) // should be dog
