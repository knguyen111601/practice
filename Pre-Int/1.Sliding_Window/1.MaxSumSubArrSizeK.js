// Maximum Sum Subarray of Size K (easy)

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const find_max = (arr, k) => {

    let start = 0
    let maxSum = -Infinity

    let sum = 0

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i]

        if (i >= k-1) {
            maxSum = Math.max(maxSum, sum)
            sum -= arr[start]
            start += 1
        }
    }

    return maxSum
}

console.log(find_max([2, 1, 5, 1, 3, 2], 3))
console.log(find_max([2, 3, 4, 1, 5], 2))
