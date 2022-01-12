function quickSort(arr){
    const left = []
    // Makes the pivot the last item in the array
    const pivot = arr[arr.length-1]
    const right = []
    let start = 0
    
    // once the arrays length is shortened to 2, the "quickSort(array)" in the return becomes the values of that sorted array
    // this is how we get returned the whole array after each is being sorted below
    if (arr.length < 2) {
        return arr
    }

    // while the start of the array remains to be less than the length of the array
    // stops when the start gets to the end of the array
    while (start < arr.length-1) {
        // Pushes into left array when it is less than pivot
        if (arr[start] < pivot) {
            left.push(arr[start])
        } else {
            // pushes into right if greater than pivot
            right.push(arr[start])
        }
        // increment up one item
        start += 1
    }

    // console.log(left)
    // console.log(right)
    // console.log(`PIVOT: [${pivot}]`)
    // console.log(`ARR: [${arr}]`)
    // console.log("END")

    // sends both arrays to callback and puts pivot in the middle
    // the entire return is one array
    // each array is being quick sorted and put back into here 
    return [...quickSort(left), pivot, ...quickSort(right)]

}

console.log(quickSort([12,6,3,7,13,8]))