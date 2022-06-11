// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {

        const difference = nums.indexOf(target-nums[i]) // because target - num == missing number

        if (difference >= 0 && difference !== i) {
            return [i, difference]
        }
    }

    return [] // if no solution

}

console.log(twoSum([2,7,111,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))