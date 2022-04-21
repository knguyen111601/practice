// Longest Substring with maximum K Distinct Characters (medium)
// Given a string, find the length of the longest substring in it with no more than K distinct characters.


const longest = (str, k) => {

    let windowStart = 0 
    let currentMax = 0
    let frequency = {}


    for (let i = 0; i < str.length; i++) {
        const current = str[i]
        if (!(current in frequency)) {
            frequency[current] = 0
        }
        frequency[current] += 1
        while(Object.keys(frequency).length > k) {
            const start = str[windowStart]
            // remove the first item added in this window from the count
            frequency[start] -= 1
            if (frequency[start] === 0) {
                delete frequency[start]
            }
            windowStart += 1
        }
        // compares currentMax to current size of the window
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(longest("araaci", 2))