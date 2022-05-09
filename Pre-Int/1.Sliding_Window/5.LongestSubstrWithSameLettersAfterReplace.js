// Longest Substring with Same Letters after Replacement (hard)

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

const longest = (str, k) => {

    let windowStart = 0
    let currentMax = 0
    let maxRepeat = 0
    let frequency = {}

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (!(current in frequency)) {
            frequency[current] = 0
        }

        frequency[current] += 1

        maxRepeat = Math.max(maxRepeat, frequency[current])

        while (i-windowStart+1 - maxRepeat > k) { // windowSize - mostRepeating == letters left to replace
            const start = str[windowStart]
            frequency[start] -= 1
            windowStart += 1
        }

        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(longest("aabccbb", 2))
console.log(longest("abbcb", 1))
console.log(longest("abccde", 1))

