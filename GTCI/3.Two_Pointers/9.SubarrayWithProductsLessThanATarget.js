// Subarrays with Product Less than a Target (medium)

// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

const find_subarrays = (arr, target) => {

    let result = []
    let product = 1
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        product *= arr[right]
        
        while ((product >= target && left < arr.length)) {
            product /= arr[left]
            left += 1
        }

        // since the product of all numbers from left to right is less than the target therefore,
        // all subarrays from left to right will have a product less than the target too; to avoid
        // duplicates, we will start with a subarray containing only arr[right] and then extend it

        const tempList = new Deque()
        for (let i = right; i > left - 1; i--) {
            tempList.unshift(arr[i])
            result.push(tempList.toArray())
        }
    }
    return result
}

console.log(find_subarrays([2, 5, 3, 10], 30))