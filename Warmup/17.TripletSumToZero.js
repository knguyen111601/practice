// Triplet Sum to Zero (medium)
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const trip = (arr) => {
    arr.sort((a,b)=> a-b)

    // Imagine we have x + y + z == 0
    // Instead we can look for -x which would be y+z == -x
    // We also need to skip duplicate numbers and since the arr is sorted they are next to each other

    const triplets = []
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i-1]) { // skip the same element to avoid duplicate triplets
            continue
        }

        search_pair(arr,-arr[i], i+1, triplets) // -arr[i] is the target sum for y+z == -x
    }
    return triplets 
}

const search_pair = (arr, target_sum, left, triplets) => {

    let right = arr.length - 1

    while (left < right) {

        const currentSum = arr[left] + arr[right]

        if (currentSum === target_sum) {
            triplets.push([-target_sum, arr[left], arr[right]])
            left += 1
            right += 1
            while (left < right && arr[left] === arr[left - 1]) {
                left += 1 // skip same element to avoid duplicate triplets
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate triplets
            }
        } else if (currentSum < target_sum) {
            left += 1
        } else {
            right -= 1
        }
    }
}

console.log(trip([-3, 0, 1, 2, -1, 1, -2]))