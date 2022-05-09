// Pair with Target Sum (easy)

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

const sum =  (arr, target) => {


    let left = 0
    let right = arr.length - 1

    while (left < right) {

        let currentSum = arr[left] + arr[right]

        if (currentSum === target) {
            return [left, right]
        }

        if (currentSum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
    return [-1,1]
}

console.log(sum([1, 2, 3, 4, 6], 6))