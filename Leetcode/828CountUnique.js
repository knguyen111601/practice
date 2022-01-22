// 828. Count Unique Characters of All Substrings of a Given String
// Let's define a function countUniqueChars(s) that returns the number of unique characters on s.

// For example if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
// Given a string s, return the sum of countUniqueChars(t) where t is a substring of s.

// Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

// const uniqueLetterString = (s) => {
    
//     const individual = new Set

//     const each = []

//     const had = []

//     const words = []

//     for (let i = 0; i < s.length; i++) {
//         if (!individual.has(s[i])) {
//             individual.add(s[i])
//         } else {
//             had.push(s[i])
//         }

//         words.push(s[i])

//         for (let j = i+1; j < s.length; j++) {
//             if (s[i] !== s[j]) {
//                 words.push(s[j])
//             }
//         }

//         for (word of had){
//             individual.delete(word)
//         }

//     }

//     console.log(words)

//     let sum = 0

//     for (string of each) {
//         sum += string.length
//     }

//     sum += individual.size * 2

//     console.log(each)
//     console.log(individual)

//     console.log(had)

//     console.log(sum)

// }

// uniqueLetterString("LEETCODE")



const uniqueLetterString = (s) => {

    const substring = new Set
    const had = []
    const unique = []
    const all = []

    for (let i = 0; i < s.length; i++) {
        if (!substring.has(s[i])) {
            substring.add(s[i])
        } else {
            had.push(s[i])
        }
        for (word of had) {
            substring.delete(word)
        }
    }

    substring.forEach(n => unique.push(n))

    for (let i = 0; i < unique.length; i++) {
        let temp = []
        temp.push(unique[i])
        for (let j = 0; j < unique.length; j++){
            if (unique[i] !== unique[j]){
                temp.push(unique[j])
            }
        }
        all.push(temp.join(""))
    }

    let sum = 0

    sum += unique.length * 2

    for (sub of all){
        sum += sub.length
    }



    console.log(unique)
    console.log(all)



    console.log(sum)


}

uniqueLetterString("ABC")