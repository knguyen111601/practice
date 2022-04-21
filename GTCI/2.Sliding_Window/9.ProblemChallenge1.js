// Problem Challenge 1

// Permutation in a String (hard)
// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
// abc
// acb
// bac
// bca
// cab
// cba

const permutation = (str, pattern) => {


    let windowStart = 0
    let frequency = {}
    let frequency2 = {}
    let output = true

    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in frequency2)) {
            frequency2[pattern[i]] = 0
        }
        frequency2[pattern[i]] += 1
    }

    for (let i = 0; i < str.length; i++) {

        const current = str[i]
        if (pattern.includes(current)) {
            if (!(current in frequency)) {
                frequency[current] = 0
            }
            frequency[current] += 1
        }

        if (frequency[current] > frequency2[current] || !(pattern.includes(current))){
            const start = str[windowStart]
            if (frequency[start]) {
                frequency[start] -= 1
            }
            windowStart = Math.max(windowStart, i-1)
        }
    }

    for (letter in frequency) {
        if (frequency[letter] !== frequency2[letter]) {
            output = false
        } 
    }

    console.log(frequency)

    return output
}

console.log(permutation("oidbcaf", "abc"))