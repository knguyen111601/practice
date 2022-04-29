// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

////////////////////////////////////////////////////////////////////////
// My Solution
////////////////////////////////////////////////////////////////////////
const remove_dupe = (arr) => {

    let left  = 0
    let right = 1

    while (left < right && right < arr.length) { // While the two pointer indexes are not at same point
        if (arr[left] !== arr[right]) {
            left += 1
            right += 1
        } else {
            arr.splice(right, 1)
        }
    }
    return arr.length

}

console.log(remove_dupe([2, 2, 2, 11]))

////////////////////////////////////////////////////////////////////////
// GTCI SOLUTION
////////////////////////////////////////////////////////////////////////
const remove_duplicates = (arr) => {
    let nextNonDuplicate = 1 

    let i = 0

    while (i < arr.length) { // iterate through array

        if (arr[nextNonDuplicate - 1] !== arr[i]) { // if the pointers don't match
            arr[nextNonDuplicate] = arr[i] // shift all non dupe elements left
            nextNonDuplicate += 1 // increment length count
        }
        i += 1
    }

    return nextNonDuplicate
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]))

// Time Complexity 
// O(N)

// Space Complexity
// O(1)