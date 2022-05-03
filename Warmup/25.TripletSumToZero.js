// Triplet Sum to Zero (medium)
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const triplet = (arr) => {

    arr.sort((a,b)=> a-b)

    const triplets = []

    // Y + Z = -X

    for (let i = 0; i < arr.length; i++) {
        search_pair(arr, -arr[i], i+1, triplets) // left is i + 1 (Y)
    }

    return triplets
}

const search_pair = (arr, target, left, triplets) => {

    let right = arr.length -1 

    while (left < right) {

        const currentSum = arr[left] + arr[right]

        if (currentSum === target) {
            triplets.push([-target, arr[left], arr[right]])
            left += 1
            right += 1
            while (left < right && arr[left] === arr[left-1]) {
                left += 1
            }
            while (left < right && arr[right] === arr[right+1]) {
                right -= 1
            }
        } else if (currentSum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
}

console.log(triplet([-3, 0, 1, 2, -1, 1, -2]))