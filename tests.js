

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
//     return(birds.filter(bird => !geese.includes(bird)))
// }




//   gooseFilter([ 'Mallard',
//   'Hook Bill',
//   'African',
//   'Crested',
//   'Pilgrim',
//   'Toulouse',
//   'Blue Swedish' ]
//   )

////////////////////////////////////////////////////////
// Check if divisible by these two numbers or not
////////////////////////////////////////////////////////

// function isDivideBy(number, a, b) {
//     if ((number/a % 1 === 0) && (number/b % 1 === 0)) {
//       return true 
//     } else {
//         return false
//     }
//   }

////////////////////////////////////////////////////////
// Disemvowel trolls 
////////////////////////////////////////////////////////

// function disemvowel(str) {
//     const newStr = str.split("")
//     for (i=0;i<newStr.length;i++) {
//         if (newStr[i] === "a" || newStr[i] === "A" || newStr[i] === "e" || newStr[i] === "E" || newStr[i] === "i" || newStr[i] === "I" || newStr[i] === "o" || newStr[i] === "O" || newStr[i] === "u" || newStr[i] === "U") {
//             newStr.splice(i, 1)
//         }
//     }
 
//     console.log(newStr.join(""))
// }



// disemvowel("No offense but,\nYour writing is among the worst I've ever read")

////////////////////////////////////////////////////////
// OUTCOMES LIVE CODING
////////////////////////////////////////////////////////
// const myFunction = (x) =>{
//     let sum = 0
//     const newX = x.toString().split("")
//     for (i=0;i<newX.length;i++) {
//         sum+=parseInt(newX[i])
//     }
//     return sum
// }

// console.log(myFunction(12))

// // SUCCESS ^^^^^^


// const a = ["dog", "cat"]
// a[100] = "cat"
// console.log(a.length)

// class TaxCal {
//     static calc(total) {
//         console.log(total * 0.5)
//     }
// }

// TaxCal.calc(50)

// var obj
// console.log(obj)

// var v = 1
// var f1 = function() {
//     console.log(v)
// }

// var f2 = function() {
//     var v =2
//     f1()
// }



// const foo = [1, 2, 3]
// const [n] = foo;
// console.log(n)


// console.log(3 == "3")


router.get("/" , (req,res)=>{
    res.send("Kenny Nguyen - Full Stack Developer")
})

router.get("/skills", (req,res)=>{
    // array of skills
    const skillList = [
        {frontEnd: ["HTML", "CSS", "JavaScript", "Liquid",]},
        {backEnd: ["Express", "Liquid", "MongoDB", "REST", "Node.js"]},
        {frameworksLibraries: ["React"]}
      ];
    Skills.create(skillList)
        .then((data)=>{res.json({data})})
    })

/////////////////////////////////////////////////////////////////
// Edabit Stuff
/////////////////////////////////////////////////////////////////
// Sum of all the numbers leading up to
// const addNum = (x) =>{
//     let sum = 0
//     for (let i=1; i<x+1; i++) {
//         sum +=i
//     }
//     return sum
// } 

// addNum(4)

// Matchhouse
// const match = (step) =>{
//     let total = 6
//     if (step > 1) {
//         total = (total*step) - (step-1)
//     }
//     console.log(total)
// }

// match(4)


// Find the smallest and biggest number
// const minMax = (arr) => {

// }



// minMax([1, 4, 56, 6, 3])

// Which is larger function
// const which = (f, g) =>{
//    f()>g() ? "f" : g()>f() ? "g" : "neither"
// }

// which(() => 5, () => 10) 

// Among us
// const detectWord = (x) => {
//     let newArr = x.split("")
//     let total = []
//     for (i=0; i<newArr.length; i++) {
//         if (newArr[i] !== newArr[i].toUpperCase()) {
//             total.push(newArr[i])
//         }
//     }
//     console.log(total.join(""))
// }

// detectWord("UcUNFYGaFYFYGtNUH")

// Largest Swap
// const largestSwap = (num) =>{
//     let newNum = num.toString().split("")
//     if (parseInt(newNum[1]) > parseInt(newNum[0])) {
//         console.log("false")
//     } else {
//         console.log("true")
//     }
// }

// largestSwap(27)

// Tuck in Array

// const tuckIn = (x, y) =>{
//     y.unshift(x[0])
//     y.push(x[x.length-1])
//     return y
// }

// tuckIn([[1, 2], [5, 6]], [[3, 4]])

// Check if One Array can be Nested in Another
// const canNest = (arr1, arr2) =>{
//     if (arr1.sort()[0] > arr2.sort()[0] && arr1.sort()[arr1.length-1] < arr2.sort()[arr2.length-1]) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// canNest([1, 2, 3, 4], [2, 3])

// Convert Minutes into Seconds
// const conver = (minutes) =>{
//     return minutes * 60
// }

// Slighty Superior 
// const isFirstSuperior = (arr1, arr2) =>{
//     let truth = null
//     for (i=0;i<arr1.length;i++ || arr1[i].toString().split("").length > arr2[i].toString().split("").length) {
//         if (arr1[i] > arr2[i]) {
//             console.log(true)
//             truth = 1
//         } 
//     } 
//     if (truth === null) {
//         console.log(false)
//     }
// }

// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])

///////////////////////////////////////////////////////////////////////////
// No Conditionals? THIS ONE IS EPIC!
///////////////////////////////////////////////////////////////////////////
// if input is 1 return 0 if input is 0 return 1
// const flip = (y) =>{
//     console.log(Math.abs(y - y**y))
// }

// flip(0)
///////////////////////////////////////////////////////////////////////////
// Find Number of Digits in Number MEDIUM
///////////////////////////////////////////////////////////////////////////
// const num_of_digits = (num) => {
//     let newNum = num.toString().split("")
//     let sum = 0
//     for (i = 0; i < newNum.length; i++) {
//         if (isNaN(newNum[i]) !== true) {
//             sum += 1
//         }
//     }
//     console.log(sum)
// }
// num_of_digits(1.1)

// Count True
// const countTrue = (arr) => {
//     let sum = 0
//     for (i=0; i<arr.length; i++) {
//         if (arr[i] === true) {
//             sum += 1
//         } else if (arr[i] == "false") {
//             sum = 0
//         }
//     }
//     console.log(sum)
// }

// countTrue([])

///////////////////////////////////////////////////////////////////////////
// Running Athlete EPIC!!!!!!
///////////////////////////////////////////////////////////////////////////
// const runningAthlete = (act, txt) =>{
//     let total = []
//     for (i = 0; i<act.length; i++) {
//         if (act[i] === "run" && txt[i] === "_") {
//             total.push("_")
//         } else if (act[i] === "jump" && txt[i] === "|") {
//             total.push("|")
//         } else if (act[i] === "run" && txt[i] === "|") {
//             total.push("/")
//         } else if (act[i] === "jump" && txt[i]==="_") {
//             total.push("x")
//         }
//     }
//     console.log(total.join(""))
// }
// runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_")

// A Redundant Function
// const redundant = (str) => {
//     return ()=>{return str}
// }

// Possible Bonus
// const possibleBonus = (a, b) =>{
//     if ((b-a) <= 6 && (b-a) > 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// possibleBonus(3, 7)
// possibleBonus(5, 3)

// Burglary Series (04)
// const addName = (obj, name, value) =>{
//     let newObj = obj
//     newObj[name] = value
//     console.log(newObj)
// }

// addName({}, "Brutus", 300)

// Min Max
// const minMax = (arr) => {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     console.log([min, max])
// }

// minMax([2334454, 5])

// Generations
// const generation = (x, y) =>{
//     let gender = ""
//     if (x > 0 && y === "m") {
//         gender="son"
//     }
//     if (x > 0 && y === "f") {
//         gender="daughter"
//     }
//     if (x < 0 && y === "m") {
//         gender="father"
//     }
//     if (x < 0 && y === "f") {
//         gender = "mother"
//     }
//     if (x === 1) {
//             console.log(gender)
//         }
//     if (x === 2) {
//             console.log("grand" + gender)
//         }
//     if (x === 3) {
//             console.log("great grand" + gender)
//         }
//     if (x === -1) {
//             console.log(gender)
//         }
//     if (x === -2) {
//             console.log("grand" + gender)
//         }
//     if (x === -3) {
//             console.log("great grand" + gender)
//         }  
// }

// generation(3, "m")

// Num layers folded paper 
// const numLayers = (n) =>{
//     let thick =.5
//     for (let i =0; i<n; i++) {
//         thick += thick
//     }
//     console.log(`${thick/1000}m`)
// }

// numLayers(4)

// If a number is a palindrome
// var isPalindrome = function(x) {
//     const newNum = x.toString().split("").reverse().join("")
//     if (x === parseInt(newNum)) {
//         return true
//     } else {
//         return false
//     }
// }
// isPalindrome(121)