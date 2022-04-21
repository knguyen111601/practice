// Longest Substring with Same Letters after Replacement (hard)

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = (str, k) => {

    let windowStart = 0
    let maxLength = 0
    let maxRepeatingLetterCount = 0
    let frequencyMap = {}

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (!(current in frequencyMap)) {
            frequencyMap[current] = 0
        }
        frequencyMap[current] += 1

        // sets maxRepeatingLetterCount to the most frequently seen letter
        maxRepeatingLetterCount = Math.max(maxRepeatingLetterCount, frequencyMap[current])

        // window size - highest repeating character == how many items are left to replace
        // if the number of items left to replace is greater than k, slide the window up one
        // this is because we want the number of characters to be replaced to be k or less 
        // so that we can save it to the maxLength
        if ((i-windowStart+1 - maxRepeatingLetterCount > k)) {
            // grabs first in window
            let start = str[windowStart]
            // removes that one from the count
            frequencyMap[start] -= 1
            // slide window up one
            windowStart += 1
        }

        maxLength = Math.max(maxLength, i-windowStart+1)
    }
    return maxLength
}

console.log(length_of_longest_substring("aabccbb", 2))
