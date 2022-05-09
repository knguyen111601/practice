// Longest Substring with Distinct Characters (hard)

// Given a string, find the length of the longest substring, which has all distinct characters.


const longest = (str) => {

    let windowStart = 0
    let frequency = {}
    let currentMax = 0

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (current in frequency) {
            windowStart = Math.max(windowStart, frequency[current] + 1)
        }

        frequency[current] = i
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(longest("aabccbb"))
console.log(longest("abbbb"))
console.log(longest("abccde"))
