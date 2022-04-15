// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longest = (str, k) => {

    let windowStart = 0
    let currentMax = 0
    let frequency = {}

    for (let i = 0; i < str.length; i++) {
        const current = str[i]
        // if current is not in frequency, add it
        if (!(current in frequency)) {
            frequency[current] = 0
        }
        // add one to current count in frequency 
        frequency[current] += 1

        // once the length of the frequency map is greater than the k window size
        while (Object.keys(frequency).length > k) {
            // grab first value
            const first = str[windowStart]
            
            // remove it from the count
            frequency[first] -= 1

            // if its count becomes 0, delete it entire since it is no longer in the window at all
            if (frequency[first] === 0) {
                delete frequency[first]
            }
            // slide window up one
            windowStart+=1
        }

        // compare currentMax to the size of the window (string's length)
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    
    return currentMax
}

console.log(longest("araaci", 2))
