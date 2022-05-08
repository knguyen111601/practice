// Find the Duplicate Number (easy)

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

const find_duplicate = (nums) => {

    let i = 0

    while (i < nums.length) {
        if (nums[i] !== i+1) { // if it isn't in the correct position 
            let j = nums[i] - 1

            if (nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]] // swap 
            } else { // found duplicate
                return nums[i]
            }

        } else {
            i += 1
        }
    }
    return -1 
}


console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));