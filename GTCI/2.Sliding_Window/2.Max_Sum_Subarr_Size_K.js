// Maximum Sum Subarray of Size K (easy)

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const maxSum = (k ,arr) => {
    let current = 0
    let currentMax = 0
    let windowStart = 0

    for (let i = 0; i < arr.length; i++) {
        // Add each element of window to current sum
        current += arr[i]
        
        // Upon reaching the window size
        if (i >= k - 1) {
            // Set currentMax to whichever is highest between the current sum and the current max
            currentMax = Math.max(current, currentMax)
            // Remove the first element of current window
            current -= arr[windowStart]
            // Slide window up one
            windowStart += 1
        }
    }
    return currentMax

}

console.log(maxSum(3, [2,1,5,1,3,2]))