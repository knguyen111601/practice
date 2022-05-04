// Longest Substring with Distinct Characters (hard)

// Given a string, find the length of the longest substring, which has all distinct characters.
const longest = (str) => {

    let windowStart = 0
    let currentMax = 0
    let frequency = {}

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (current in frequency) {
            windowStart = Math.max(frequency[current]+1, windowStart) //frequency[current] + 1 is the position after the current in the string
        }

        frequency[current] = i // sets position for that character to the index
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(longest("aabccbb"))
console.log(longest("abbbb"))
console.log(longest("abccde"))