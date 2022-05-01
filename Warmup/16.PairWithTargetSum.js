// Pair with Target Sum (easy)
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

const pair = (arr, target) => {

    let left = 0
    let right = arr.length - 1

    while (left < right) {

        const currentSum = arr[left] + arr[right]

        if (currentSum === target) { // If they match, return [left, right]
            return [left, right]
        }

        if (currentSum < target) { // If the currSum is < target, we need a bigger number so Left increment
            left += 1
        } else { // If currentSum is > target, we need a smaller number so right decrement
            right -= 1
        }

    }

    return [-1,1] // If they never match the target

}

console.log(pair([1,2,3,4,6], 6))