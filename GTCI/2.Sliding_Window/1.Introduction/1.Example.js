// Given an array, find the average of all subarray of ‘K’ contiguous elements in it.

// Array : [1, 3, 2, 6, -1, 4, 1, 8, 2] k = 5

// Here, we are asked to find the average of all subarray of "5" contiguous elements in the given array

/////
// Solve
/////

/////////////////
// BRUTE FORCE ALGORITHM
/////////////////
// Will calculate the sum of every 5-element subarray of the given array and divide by "5" to find the average

const findAverages = (k, arr) => {
    const result = []

    for (let i = 0; i < arr.length - k + 1; i++) { 
        // arr.length - k + 1 will find how many averages can be calculated in the array size
        // for example if the length was 8 there are only 4 subarray
        // find sum of next "k" elements
        sum = 0
        for (let j = i; j < i + k; j++) {
            sum += arr[j]
        }
        result.push(sum/k) // calculate average
    }
    return result
}

const result = findAverages(5, [1,3,2,6,-1,4,1,8,2])
console.log(result)