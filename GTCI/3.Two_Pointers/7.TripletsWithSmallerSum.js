// Triplets with Smaller Sum (medium)

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

const triplet_with_smaller_sum = (arr, target) => {

    arr.sort((a,b)=> a-b)
    let count = 0

    for (let i = 0; i < arr.length-2; i++) {
        count += search_pair(arr, target-arr[i], i)
    }
    return count
}

const search_pair = (arr, target, first) => {

    let count = 0
    let left = first + 1
    let right = arr.length-1

    while (left < right) {
        if (arr[left] + arr[right] < target) {
            count += right - left
            left += 1
        } else {
            right -= 1
        }
    }
    return count
}

console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5))

// Time Complexity
// O(N*logN) 
// Search pair is O(N)
// O(N^2)

// Space Complexity
// O(N) for sorting
