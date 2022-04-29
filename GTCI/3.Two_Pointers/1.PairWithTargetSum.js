// Pair with Target Sum (easy)

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

const pair_with_targetSum = (arr, target_sum) => {
    
    let left = 0
    let right = arr.length - 1

    while (left < right) { // as long as the two pointers don't meet at one element
        const currentSum = arr[left] + arr[right] // check current sum

        if (currentSum === target_sum) { // if they match target then return the indexes of left and right
            return [left, right]
        }

        if (target_sum > currentSum) { // If the target sum is still greater than current 
            left += 1 // Increment the index of left pointer
        } else { // if the currentSum is greater than the target sum
            right -= 1  // Decrement thr right pointer
        }
    }
    return [-1,-1] // if they never match the target sum

}

console.log(pair_with_targetSum([1, 2, 3, 4, 6], 6))

// Time Complexity 
// O(N)

// Space Complexity 
// O(1)


//////////////////////////////////////////////////////////////////////
// ALTERNATE APPROACH
//////////////////////////////////////////////////////////////////////

// Instead of two-pointer, or binary search approach, we can utilize a Hash Table
// Iterate through array one number at a time

const pair_with_targetSum2 = (arr, target_sum) => {

    const nums = {} // store numbers and index

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]

        if (target_sum - num in nums) { // if the target sum - current num is in the hash table (this is because the sum - y = x)
            return [nums[target_sum-num], i] // return the two numbers [x, y]
        }
        
        nums[num] = i // add the current number with its index as the value into hashmap
    }
    return [-1,-1]
}

console.log(pair_with_targetSum2([1, 2, 3, 4, 6], 6))

// Time Complexity 
// O(N)

// Space Complexity
// O(N) because you are saving each of the numbers in the hash table