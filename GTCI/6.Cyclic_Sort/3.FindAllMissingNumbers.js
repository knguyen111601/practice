// Find all Missing Numbers (easy)

// We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

const find_missing_numbers = (nums) => {

    let i = 0
    const result = []

    while (i < nums.length) {
        let j = nums[i] - 1

        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j],  nums[i]]
        } else {
            i += 1
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i+1 !== nums[i]) {
            result.push(i+1)
        }
    }

    return result
}   

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]))
console.log(find_missing_numbers([2, 4, 1, 2]))
console.log(find_missing_numbers([2, 3, 2, 1]))

// Time Complexity 
    // O(n)

// Space Complexity
    // O(1)