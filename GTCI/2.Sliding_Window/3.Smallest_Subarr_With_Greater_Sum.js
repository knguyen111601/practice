// Smallest Subarray With a Greater Sum (easy)

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallestSubarray = (s, arr) => {

    let current = 0
    let currentSmallest = Infinity
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        current += arr[windowEnd]
        while (current >= s) { // keep removing element from window until current !>= s (shrink window)
            currentSmallest = Math.min(windowEnd - windowStart + 1, currentSmallest)
            current -= arr[windowStart]
            windowStart += 1
        }
    }
    if (currentSmallest === Infinity) {
        return 0
    }
    return currentSmallest
}

console.log(smallestSubarray(7, [2,1,5,2,8]))

// Time Complexity = O(N)
    // The time complexity of the above algorithm will be O(N)
    // The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically = O(N)

// Space Complexity = O(1)
