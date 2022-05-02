// Squaring a Sorted Array (easy)
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.


const square = (arr) => {

    let squares = Array(arr.length).fill(0) // creates array the size of arr and fills with 0's
    let highestSquareIndex = arr.length -1 
    let left = 0
    let right = arr.length - 1

    while (left <= right) {

        let leftSquare = arr[left] * arr[left]
        let rightSquare = arr[right] * arr[right]

        if (leftSquare > rightSquare) {
            squares[highestSquareIndex] = leftSquare // squares[highestSquareIndex] is a decrementing pointer for the squares array
            left+=1 // move forward one point
        } else {
            squares[highestSquareIndex] = rightSquare // squares[highestSquareIndex] is a decrementing pointer for the squares array
            right-=1 // move left one point
        }
        highestSquareIndex -= 1 // decrement squares pointer [0,0,0,0,pointer,wasPointer] to put nums in order
    }
    return squares
}

console.log(square([-2, -1, 0, 2, 3]))