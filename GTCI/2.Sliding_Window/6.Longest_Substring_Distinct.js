// Longest Substring with Distinct Characters (hard)
// Given a string, find the length of the longest substring, which has all distinct characters.


const non_repeat_substring = (str) => {

    let windowStart = 0
    let currentMax = 0
    let charIndex = {}


    for (let i = 0; i < str.length; i++) {


        const current = str[i]

        // if the map already has current, shrink the window from the beginning so that we only have once occurrence of current
        if (current in charIndex) {
            // this is tricky; in the current window, we will not have any 'current' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'current', we'll keep 'windowStart'
            // charIndex[current] + 1 is accessing the duplicate characters original index and adding 1 and setting the window start to that point
            windowStart = Math.max(windowStart, charIndex[current] + 1)
            console.log("window start = " + windowStart)
        }

        // insert the current into the map
        // its index
        charIndex[current] = i
        console.log(charIndex)

        // grab the current max length 
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
}

console.log(non_repeat_substring("aabccbb"))

// Time Complexity 
// O(N) N is number of inputs

// Space Complexity 
// O(K) where K is the number of distinct characters in the input string




