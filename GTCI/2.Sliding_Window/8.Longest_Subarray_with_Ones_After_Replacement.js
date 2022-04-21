// Longest Subarray with Ones after Replacement (hard)

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = (arr, k) =>{

    let windowStart = 0
    let currentMax = 0
    // Grabs the number of repeating ones
    let maxRepeatOne = 0

    for (let i = 0; i < arr.length; i++) {

        // if element is 1, add to the ones count
        if (arr[i] == 1) {
            maxRepeatOne += 1
        }

        // window size - ones count = number of remaining 0's
        // if the number of remaining 0's is > k
        // slide window up 1
        if (i-windowStart+1 - maxRepeatOne > k) {
            // makes sure to remove the 1 being removed from window when sliding
            if (arr[windowStart] == 1) {
                maxRepeatOne -= 1
            }
            windowStart += 1
        }

        // grab current max
        currentMax = Math.max(currentMax, i-windowStart+1)

    }
    return currentMax

}

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))