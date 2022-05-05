// Smallest Subarray With a Greater Sum (easy)

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_sub = (arr, k) => {

    let windowStart = 0
    let current = 0
    let currentMin = Infinity


    for (let i = 0; i < arr.length; i++) {
        
        current += arr[i] // add number to current count

        while (current >= k) { // while the value is >= k 
            currentMin = Math.min(i-windowStart+1, currentMin) // compare min from windowSize to currentMin
            current -= arr[windowStart] // remove first from current count 
            windowStart += 1 // increment window
        }
    }
    return currentMin
}

console.log(smallest_sub([2, 1, 5, 2, 8], 7))