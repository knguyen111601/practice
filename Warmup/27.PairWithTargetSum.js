// Pair with Target Sum (easy)
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

const target = (arr, target) => {

    let left = 0
    let right = arr.length -1

    while (left < right) {

        const currentSum = arr[left] + arr[right]

        if (currentSum === target) {
            return [left, right]
        }

        if (currentSum < target) {
            left += 1 // we need a larger number to meet the target
        } else {
            right -= 1
        }
    }
    return [-1,1] // if there is no match 
}

console.log(target([1,2,3,4,6], 6))