// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twosum = (arr, target) => {

    let hash = {}

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i]

        if (!(target - current in hash)) {
            hash[current] = i
        } else {
            return [hash[target-current], i]
        }
    }
    return []
}

console.log(twosum([1, 3, 10, 11, 13], 13)) // 1,2

console.log(twosum([3, 11, 10, 13, 1], 13)) // 0,2