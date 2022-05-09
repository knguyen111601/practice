// Smallest Subarray With a Greater Sum (easy)

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray = (arr, sum) => {

    let windowStart = 0
    let currentSum = 0 
    let currentMin = Infinity

    for (let i = 0; i < arr.length; i++) {

        currentSum += arr[i]

        while (currentSum >= sum) { // keep shrinking window until we get the window with sum>targetSum
            currentMin = Math.min(currentMin, i-windowStart+1)
            currentSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return currentMin
}

console.log(smallest_subarray([2, 1, 5, 2, 3, 2], 7))
console.log(smallest_subarray([2, 1, 5, 2, 8], 7))
console.log(smallest_subarray( [3, 4, 1, 1, 6], 8))



