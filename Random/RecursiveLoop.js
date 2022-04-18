const multiply = (arr, n) => {

    if (n <= 0) {
        return 1
    } else {
        return multiply(arr, n-1) * arr[n-1]
    }

}

console.log(multiply([2,3,4], 2))


const sum = (arr, n) => {
    if (n <= 0) {
        return 0
    } else {
        // returns sum([2,3,4], 2) + 4
        // then inside the recursion it returns sum([2,3,4], 1) + 3
        // then returns sum([2,3,4], 0) + 2
        // so look at it backwards from bottom to top
        // 0 + 2
        // 2 + 3
        // 5 + 4
        return sum(arr, n-1) + arr[n-1]
    }
}

console.log(sum([2,3,4], 3))
