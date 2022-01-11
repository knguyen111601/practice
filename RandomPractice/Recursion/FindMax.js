// Solve using recursion

function findMax(arr, index = 0, currentLargest=0){
    // This function returns the largest number in a given array.

    if (index === arr.length) {
        console.log(currentLargest)
        return;
    } 

    if (arr[index] > currentLargest) {
        currentLargest = arr[index]

    }

    return findMax(arr, index+1, currentLargest)
}

findMax([3,2,1, 5, 190, 2])