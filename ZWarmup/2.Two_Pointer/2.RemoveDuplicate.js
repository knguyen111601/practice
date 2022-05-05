// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const remove_duplicates = (arr) => {

    let left = 0 // first pointer
    let nextNonDupe = 1 // 2nd pointer

    for (let i = 0; i < arr.length; i++) {

        // example:
        // when next == 2 and left == 4
        // arr[next - 1] !== arr[left] || 3 !== 6
        // so now arr[next] = arr[left] || arr[2] = arr[4] || arr[2] = 6
        // array is now [2,3,6,3,6,9,9] // The 2,3,6 are at the front right now
        if (arr[nextNonDupe - 1] !== arr[left]) {
            arr[nextNonDupe] = arr[left] // shift non duplicates to the left
            nextNonDupe += 1
        }
        left += 1
    }
    return nextNonDupe
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])) // [2,3,6,9] 
console.log(remove_duplicates([2, 2, 2, 11])) // [2,11]
