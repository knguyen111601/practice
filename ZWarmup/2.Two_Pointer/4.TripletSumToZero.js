// Triplet Sum to Zero (medium)

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.


const triplet_sum_to_zero = (arr) => {
    // Sort array 
    arr.sort((a,b) => a-b)

    const triplets = []

    // y+z == -x 

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i-1]) { // skip the same element to avoid duplicate triplets
            continue
        }
        search_pair(arr, -arr[i], i+1, triplets)
    }
    return triplets
}

const search_pair = (arr, target, left, triplets) => {

    let right = arr.length - 1

    while (left < right) {

        const currentSum = arr[left] + arr[right]

        if (currentSum == target) {
            triplets.push([-target, arr[left], arr[right]])
            left  += 1
            right += 1
            while (left < right && arr[left] === arr[left - 1]) {
                left += 1 // skip same element to avoid duplicate triplets
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate triplets
            }
        } else if (currentSum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
}

console.log(triplet_sum_to_zero([-3, 0, 1, 2, -1, 1, -2]))