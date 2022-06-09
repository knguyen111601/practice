// Target Sum Practice 

const target = (arr, target) => {


    let left = 0
    let right = arr.length - 1

    while (left < right) {

        let currSum = arr[left] + arr[right]

        if (currSum === target) {
            return [left, right]
        }
        if (currSum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
    return [-1,1]
}

console.log(target([1, 2, 3, 4, 6], 6))
console.log(target([2, 5, 9, 11], 11))