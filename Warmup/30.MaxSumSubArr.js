// Maximum Sum Subarray of Size K (easy)

// Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.

const maxSum = (arr, k) => {

    let windowStart = 0
    let currentSum = 0
    let currentMax = 0

    for (let i = 0; i < arr.length; i++) {

        currentSum += arr[i]

        if (i-windowStart+1 > k-1) {
            currentMax = Math.max(currentMax, currentSum)
            currentSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return currentMax
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3))
