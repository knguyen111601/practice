// Maximum Sum Subarray of Size K (easy)

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sum = (arr, k) => {

    let currentSum = 0
    let currentMax = 0
    let windowStart = 0

    for (let i = 0; i < arr.length; i++) {

        currentSum += arr[i]

        if (i >= k - 1) { // reason for -1 because of indexes so when i == 2 its a window size of 3
            currentMax = Math.max(currentMax, currentSum)
            currentSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return currentMax
}

console.log(max_sum([2, 1, 5, 1, 3, 2], 3))