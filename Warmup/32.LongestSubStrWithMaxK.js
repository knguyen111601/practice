// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.


const longest = (str, k) => {

    let windowStart = 0
    let hash = {}
    let currentMax = 0

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (!(current in hash)) {
            hash[current] = 0
        }

        hash[current] += 1

        if (Object.keys(hash).length > k) { // Upon there being more distinct chars than k
            const start = str[windowStart] // grab first added item 
            hash[start] -= 1 // decrement from the count
            if (hash[start] === 0) { // if it is 0, remove it from hash map
                delete hash[start]
            }
            windowStart += 1 // increment window
        }

        currentMax = Math.max(currentMax, i-windowStart+1) // compare max size hash 
    }
    return currentMax
}

console.log(longest("araaci", 2))
