// Find the Missing Number (easy)

// We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

const find_missing_number = (nums) => {

    let i = 0

    while (i < nums.length) {
        j = nums[i];
        if (nums[i] < nums.length && nums[i] !== nums[j]) { // have to make sure that nums[i] in the range
          [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
          i += 1;
        }
      }

    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
    return nums.length
}

console.log(find_missing_number([4, 0, 3, 1]))
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));


// Time Complexity 
    // O(N)
    //In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n)

// Space Complexity 
    // O(1)