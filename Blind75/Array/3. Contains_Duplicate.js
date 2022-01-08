// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// The reason my solution works and doesn't return false after returning true is because "return" breaks the function

const containsDuplicate  = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return (true)
            }
        }
    }
    return false
}

containsDuplicate([1,2,3,1])