// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longest = (str, k) => {

    let windowStart = 0
    let frequency = {}
    let currentLongest = 0

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (!(current in frequency)) {
            frequency[current] = 0
        }
        frequency[current] += 1

        if (Object.keys(frequency).length > k) {
            const start = str[windowStart]
            frequency[start] -= 1
            if (frequency[start] === 0) {
                delete frequency[start]
            }
            windowStart += 1
        }
        currentLongest = Math.max(currentLongest, i-windowStart+1)
    }
    return currentLongest
}

console.log(longest("araaci", 2));
console.log(longest("araaci", 1));
console.log(longest("cbbebi", 3));
console.log(longest("cbbebi", 10));
