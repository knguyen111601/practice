// Squaring a Sorted Array (easy)
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = (arr) => {
    const squares = []

    for (let i = 0; i < arr.length; i++) {
        squares.push(arr[i] * arr[i])
    }

    squares.sort((a,b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    }) 

    return squares
}

console.log(make_squares([-2,-1,0,2,3]))

///////////////////////////////////////////////////////
// GTCI 
///////////////////////////////////////////////////////

const make_squares2 = (arr) => {
    
    const n = arr.length

    let squares = Array(n).fill(0) // makes array length of arr.length and fills with 0's
    let highestSquareIndex = n-1 // -1 because index
    let left = 0
    let right = n-1

    while (left <= right) {

        let leftSquare = arr[left] * arr[left] // square of left 
        let rightSquare = arr[right] * arr[right] // square of right

        if (leftSquare > rightSquare) {
            squares[highestSquareIndex] = leftSquare //adding number into squares array from right to left
            left+=1 // increment left pointer
        } else {
            squares[highestSquareIndex] = rightSquare //adding number into squares array from right to left
            right -= 1 // decrement right pointer
        }
        highestSquareIndex -=1 // move leftwards from squares.length (decrement)
    }
    return squares
}

console.log(make_squares2([-2,-1,0,2,3]))