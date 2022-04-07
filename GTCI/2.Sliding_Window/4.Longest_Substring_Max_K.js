// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longestSubstring = (str, k) => {

    let current = 0
    let currentMax = 0
    windowStart = 0

    for (let i = 0; i < str.length; i++){

        current += str[i]


        if (i >= k - 1) {
            currentMax = Math.max(current, currentMax)
            current -= str[windowStart]
            windowStart += 1
        }
    }
    
    return currentMax




}

console.log(longestSubstring([2,1,5,1,3,2], 3))

