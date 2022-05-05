// Squaring a Sorted Array (easy)
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = (arr) => {

    const squares = Array(arr.length).fill(0) // creates array the length of arr filled with 0's
    let last = squares.length - 1 
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {

        const leftSquare = arr[left] * arr[left]
        const rightSquare = arr[right] * arr[right]

        if (leftSquare < rightSquare) {
            squares[last] = rightSquare // set the current greatest spot in squares to rightSquare
            right -= 1 // need next right number 
            last -= 1 // move left one position in squares array
        } else {
            squares[last] = leftSquare // set the current greatest spot in squares to leftSquare
            left += 1 // need next left number
            last -= 1 // move left one position in squares array
        }
    }
    return squares
}

console.log(make_squares([-2, -1, 0, 2, 3]))
console.log(make_squares([-3, -1, 0, 1, 2]))
