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

// Time Complexity 
// Since for every element of the input array, we are calculating the sum of its next "K" elements, the time complexity of the above algorithm will be O(N*K) where "N" is the number of elements in the  input array
// The inefficiency lies in when the same 4 elements are being recalculated on each on each subarray 
// ex. 0-4 then 1-5 overlapping elements recalculated

/////////////////
// Sliding Window 
/////////////////

// Efficient way is to visualize a sliding window of "k" elements and slide the window by one element when we move on to the next subarray
// To reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element being added to the sliding window

const findAveragesSliding = (k, arr) => {

    const result = []

    let windowSum = 0.0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd] // add the next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (windowEnd >= k-1) {
            result.push(windowSum / k) // calculate the average
            windowSum -= arr[windowStart] // subtract the element going out (first of the window)
            windowStart += 1 // slide the window ahead (move window up 1)
        }
    }
    return result
}

const slidingResult = findAveragesSliding(5, [1,3,2,6,-1,4,1,8,2])
console.log(slidingResult)

// Time Complexity
// Now the TC is O(N) because it is only doing an operation per element in the array and saving time by not recalculating on each subarray




