// Cyclic Sort (easy)

// We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

// Write a function to sort the objects in-place on their creation sequence number in O(n)
// O(n)
// and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.


const cyclic_sort = (nums) => {

    let maxNum = -Infinity

    for (let i = 0; i < nums.length; i++) {
        maxNum = Math.max(nums[i], maxNum)
    }

    for (let i = 1; i <= maxNum; i++) {
        nums[i-1] = i
    }
    return nums
}

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)

//////////////////////////////////////////////////////////////////////////////////////////
// Alternate 
//////////////////////////////////////////////////////////////////////////////////////////

// Solution
    // What if we iterate the array one number at a time, and if the current number we are iterating is not at the correct index, we swap it with the number at its correct index. This way, we will go through all numbers and place them at their correct indices, hence, sorting the whole array.


const alternate = (nums) => {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1; // current numbers correct index pos EX. nums[i]==2 -> j == 2 - 1 -> j == 1
      if (nums[i] !== nums[j]) { 
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1; // iterate only once the first number is the correct number
      }
    }
    return nums;
}

console.log(`${alternate([3, 1, 5, 4, 2])}`)
console.log(`${alternate([2, 6, 4, 3, 1, 5])}`)
console.log(`${alternate([1, 5, 6, 4, 3, 2])}`)

// Time Complexity 
    // O(n) 
    // O(n) + O(n - 1) which is == O(n)

// Space Complexity 
    // O(1)