// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const removeDupes = (arr) => {

    let left = 0
    let nextNonDupe = 1

    while (left < arr.length) {

        if (arr[nextNonDupe-1] !== arr[left]) {
            arr[nextNonDupe] = arr[left] 
            nextNonDupe += 1
        }
        left += 1
    }
    return nextNonDupe
}

console.log(removeDupes([2,3,3,3,6,9,9]))