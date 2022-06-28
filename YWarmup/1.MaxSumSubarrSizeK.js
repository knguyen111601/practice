// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const maxSum = (arr, k) => {

    let windowStart = 0
    let currentMax = -Infinity
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {

        currentSum += arr[i]

        if (i-windowStart+1 > k) { // Upon the window size being larger than k
            let start = arr[windowStart] // grab the first item in window
            currentSum -= start // remove from current count
            windowStart += 1 // slide window up 1
        }

        currentMax = Math.max(currentMax, currentSum) // comapre the currentSum to the currentMax
    }
    return currentMax
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3))
console.log(maxSum([2, 3, 4, 1, 5], 2))
