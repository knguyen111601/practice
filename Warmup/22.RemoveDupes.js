// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const removeDupes = (arr) => {
    let nextNonDupe = 1

    let i = 0
    while (i < arr.length) {
        if (arr[nextNonDupe - 1] !== arr[i]) {
            arr[nextNonDupe] = arr[i]
            nextNonDupe += 1
        }
        i+=1
    }

    return nextNonDupe
}

