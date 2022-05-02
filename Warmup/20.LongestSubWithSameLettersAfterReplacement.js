// Longest Substring with Same Letters after Replacement (hard)
// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

const longest = (str, k) => {

    let windowStart = 0 // initialize window 
    let currentMax = 0 // current longest length window
    let maxRepeat = 0 // most frequently seen letter
    let frequency = {} // frequency map 

    for (let i = 0; i < str.length; i++) {

        const current = str[i]
        if(!(current in frequency)) {
            frequency[current] = 0
        }
        frequency[current] += 1

        maxRepeat = Math.max(maxRepeat, frequency[current]) // saves largest repeating letter

        if (i-windowStart+1 - maxRepeat > k) { // windowSize - repeatingLetter == letters left to replace
            let start = str[windowStart]
            frequency[start] -= 1 // removes first from count 
            windowStart += 1 // slide window
        }
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(longest("abccde", 1))