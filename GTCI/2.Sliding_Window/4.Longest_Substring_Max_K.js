// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters

const longestSubstring = (str, k) => {

    let windowStart = 0
    let currentMax = 0
    let frequency = {}

    for (let i = 0; i < str.length; i++) {
      // save current item to variable
      const current = str[i]
      // if the item does not exist in the hash map, add it 
      if (!(current in frequency)) {
        frequency[current] = 0
      }
      // add to count in hash map
      frequency[current] += 1

      // Shrink the sliding window, until we are left with "k" distinct characters in the frequency 
      while (Object.keys(frequency).length > k) {
        // save first item in window
        const start = str[windowStart]
        // remove it from the frequency count
        frequency[start] -= 1
        // if the frequency count of that character becomes 0, remove it from the hash map
        if (frequency[start] === 0) {
          delete frequency[start]
        }
        // move forward 1 in the window
        windowStart += 1 // shrink the window
      }
      // compare max of currentMax to the size of the window
      currentMax = Math.max(currentMax, i - windowStart + 1)
    }

    return currentMax
}

console.log(longestSubstring("araaci", 2))
