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

////////////////////////////////////////
// MY ORIGINAL METHOD
////////////////////////////////////////
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

////////////////////////////////////////
// GTCI METHOD
////////////////////////////////////////

const find_permutation = (str, pattern) => {
    let windowStart = 0
    let matched = 0
    let charFrequency = {}

    // Adds each character in pattern to frequency 
    for (let i = 0; i < pattern.length; i++){ 
        const chr = pattern[i]
        if (!(chr in pattern[i])) {
            charFrequency[chr] = 0
        }
        charFrequency[chr] += 1
    }

    // The goal is to match all of the characters from charFrequency with the current window
    // 
    for (let i = 0; i < str.length; i++) {
        const current = str[i]
        if (current in charFrequency) {
            // DECREMENT THE FREQUENCY OF MATCHED CHARACTER
            // We are trying to get to 0 if the window has a correct character
            charFrequency[current] -= 1
            // When a character reached 0, then increment matched as we have a matching character from this window
            if (charFrequency[current] === 0) {
                matched += 1
            }
        }

        // if the number of matched is the same as the length of the pattern, then it is true
        if (matched === Object.keys(charFrequency).length) {
            return true
        }

        // if the window size is larger than the length of the pattern
        // shrink the window to make it equal the pattern
        // if the character leaving the window was part of the pattern, put it back in 
        if (i >= pattern.length-1) {
            const start = str[windowStart]
            windowStart += 1
            if (start in charFrequency) {
                if (charFrequency[start] === 0) {
                    matched -= 1
                }
                charFrequency[start] += 1
            }
        }
        return false
    }


}