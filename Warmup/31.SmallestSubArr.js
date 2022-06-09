// Smallest Subarray With a Greater Sum (easy)

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const subArr = (arr, s) => {

    let windowStart = 0
    let current = 0
    let currentMin = Infinity

    for (let i = 0; i < arr.length; i++) {

        current += arr[i] // add to current sum

        if (current >= s) { // once the sum is >= to sum
            currentMin = Math.min(i-windowStart+1, currentMin) // comparing the current window to minWindow
            current -= arr[windowStart] // remove first item in sum
            windowStart += 1 // slide window up 1
        }
    }
    return currentMin
}

console.log(subArr([2, 1, 5, 2, 8], 7))
