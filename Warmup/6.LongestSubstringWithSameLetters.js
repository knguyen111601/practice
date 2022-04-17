// Longest Substring with Same Letters after Replacement (hard)

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = (str, k) => {

    let windowStart = 0
    let maxLength = 0
    let maxRepeatingLetterCount = 0
    const characters = {}



    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (!(current in characters)) {
            characters[current] = 0
        }

        characters[current] += 1

        maxRepeatingLetterCount = Math.max(maxRepeatingLetterCount, characters[current])

        if (i-windowStart+1 - maxRepeatingLetterCount > k) {
            const start = str[windowStart]
            characters[start] -= 1
            windowStart += 1
        }
        maxLength = Math.max(maxLength, i-windowStart+1)
    }
    return maxLength
}

console.log(length_of_longest_substring("abccde", 1))