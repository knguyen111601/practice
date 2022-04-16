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

        // the current window size if from windowStart to i
        // we have a letter which is repeating maxRepeatingLetterCount times
        // This means we should make the window have one letter repeating "maxRepeatingLetterCount" times and replace the rest
        // If the rest of the letters are more than "k" then we must shrink the window as we are only allowed to replace "k" letters
        // size of window - most repeating characters 
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
