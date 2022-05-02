// Squaring a Sorted Array (easy)
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const square = (arr) => {

    const squares = Array(arr.length).fill(0)

    let left = 0
    let right = arr.length-1
    let last = arr.length - 1

    while (left < right){
        let squaredLeft = arr[left] * arr[left]
        let squaredRight = arr[right] * arr[right]

        if (squaredLeft > squaredRight) {
            squares[last] = squaredLeft
            last -= 1
            left += 1 
        } else {
            squares[last] = squaredRight
            last -= 1
            right -= 1
        }
    }
    console.log(squares)
}

square([-2, -1, 0, 2, 3])
square([-3, -1, 0, 1, 2])