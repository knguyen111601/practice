const pair = (arr, target) => {

    let left = 0 
    let right = arr.length - 1

    while (left < right) {

        const currentSum = arr[left] + arr[right]

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

console.log(pair([1,2,3,4,6], 6))