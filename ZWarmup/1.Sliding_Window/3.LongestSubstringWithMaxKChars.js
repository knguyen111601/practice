// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longest = (arr, k) => {

    let windowStart = 0
    let currentMax = 0 
    let frequency = {} // Hash map for character frequency 

    for (let i = 0; i < arr.length; i++) {

        const current = arr[i] // current value in iteration

        if (!(current in frequency)) {
            frequency[current] = 0 // add to frequency hash map if it doesn't yet exist
        }

        frequency[current] += 1 // increment count

        if (Object.keys(frequency).length > k) { // if the length of the hash map is > k
            const start = arr[windowStart] // grab first item in the current window
            frequency[start] -= 1 // remove it from the current count
            if (frequency[start] === 0) {
                delete frequency[start] // if its 0, remove it so we can check hash map length later
            }
            windowStart += 1 // increment window
        }
        currentMax = Math.max(i-windowStart+1, currentMax) // compare windowSize to currentMax
    }
    return currentMax
}

console.log(longest("araaci", 2))