// Longest Subarray with Ones after Replacement (hard)

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const longest = (arr, k) => {

    let windowStart = 0
    let currentMax = 0
    // Number of repeating ones in current window
    let onesRepeat = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 1) {
            // if is one, add to ones count
            onesRepeat += 1
        }

        // window size - number of ones = number of zeros
        // if number of zeros exceeds k, slide window up one position 
        // this is because that window now has too many zeros to replace
        if (i-windowStart+1 - onesRepeat > k) {
            // if the start of the window is 1, remove it from the ones count
            if (arr[windowStart] == 1) {
                onesRepeat -= 1
            }
            // slide window up one
            windowStart += 1
        }
        // compare max to current window size
        currentMax = Math.max(currentMax, i-windowStart+1)  
    } 
    return currentMax
}

console.log(longest([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))