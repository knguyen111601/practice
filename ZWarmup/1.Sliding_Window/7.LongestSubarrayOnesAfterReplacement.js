// Longest Subarray with Ones after Replacement (hard)

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const longest = (arr, k) => {

    let windowStart = 0
    let onesCount = 0
    let currentMax = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 1) {
            onesCount += 1
        }

        while (i-windowStart+1 - onesCount > k) {

            if (arr[windowStart] == 1) {
                onesCount -= 1
            }
            windowStart += 1
        }

        currentMax = Math.max(i-windowStart+1, currentMax)
    }
    return currentMax
}

console.log(longest([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))
console.log(longest([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3))

