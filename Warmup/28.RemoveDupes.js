// Remove Duplicates (easy)

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const dupe = (arr) => {

    let left = 0
    let nextNonDupe = 1

    while (left < arr.length) {
        if (arr[nextNonDupe - 1] !== arr[left]) { 

            // [2,3,3,3,6,9]
            // when non == 1 and left == 1
            // arr[non - 1] !== arr[left]
            // so it will put arr[left] at the arr[nextNonDupe]
            // then both iterate forward
            // non == 2 left == 2
            // non - 1 == left so just left iterates
            // non == 2 left == 3
            // same thing left iterates
            // non == 2 left == 4
            // arr[non - 1] !== arr[left] 3 !== 6
            arr[nextNonDupe] = arr[left] // puts the non duplicate number at nextNonDupe spot
            nextNonDupe += 1 // then iterates
        }
        left += 1
    }
    return nextNonDupe
}

console.log(dupe([2, 3, 3, 3, 6, 9, 9]))