// Longest Substring with Same Letters after Replacement (hard)

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

const longest = (str, k) => {

    let windowStart = 0
    let maxLength = 0
    let maxRepeatChar = 0
    let frequency = {}

    for (let i = 0; i < str.length; i++) {
        // grabs current character in string
        const current = str[i]

        // if it isn't in the hash map, add it
        if (!(current in frequency)) {
            frequency[current] = 0
        }

        // add it to the count
        frequency[current] += 1

        // save the current highest repeating character 
        maxRepeatChar = Math.max(maxRepeatChar, frequency[current])

        // window size - highest repeating character == how many items are left to replace
        // if the number of items left to replace is greater than k, slide the window up one
        // this is because we want the number of characters to be replaced to be k or less 
        // so that we can save it to the maxLength
        if (i-windowStart+1 - maxRepeatChar > k) {
            let start = str[windowStart]
            frequency[start] -= 1
            windowStart += 1
        }

        // grab current largest window
        maxLength = Math.max(maxLength, i-windowStart+1)
    }

    return maxLength
} 

console.log(longest("abbcb", 1))