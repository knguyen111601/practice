// Longest Substring with Distinct Characters (hard)

// Given a string, find the length of the longest substring, which has all distinct characters.

const non_repeat_substring = (str) => {

    let windowStart = 0
    let currentMax = 0
    let charIndex = {}


    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        // check if the current character has already appeared 
        if (current in charIndex) {
            // if it has already appeared, we want to move the window to the point right after where it appeared. so that we can begin checking from that point onwards
            // i.e. "aabc"
            // it would get to the second "a" and detect a duplicate character
            // so we can start the window at the next character after the original "a" to start looking from there
            // it would end up returning 3
            windowStart = Math.max(windowStart, charIndex[current] + 1)
        }
        // put into dictionary with value as index of character
        charIndex[current] = i
        // compare the currentMax to the size of the substring so far
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(non_repeat_substring("aabccbb"))