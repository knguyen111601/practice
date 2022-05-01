// Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array. 

const remove = (arr, key) => {

    let nextElement = 0 // index of next element which is NOT key

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== key) { 
            arr[nextElement] = arr[i] // set spot at nextElement to the non-key element
            nextElement += 1 // increment position 
            // it works like shifting each of the non-key items to the left
        }
    }
    return nextElement // incrementing nextElement simultaneously moves position and gives us length
}

console.log(remove([3, 2, 3, 6, 3, 10, 9, 3], 3))