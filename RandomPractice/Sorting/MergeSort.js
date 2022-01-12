function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    // Splices from start of array to the half point
    const left = arr.splice(0, arr.length/2)

    // returns the split array left part and right part which what was remaining after the splice
    // recursively splits the arrays 
    // sends it the merge helper function 
    return merge(mergeSort(left), mergeSort(arr))

}

function merge(arr1, arr2) {
    var result = [];
  
    // while the length of the arrays still exists, it will sort into the result array
    while (arr1.length && arr2.length) {
      if(arr1[0] <= arr2[0]) {
        // returns the first element in the array and pushes it to the result array
        result.push(arr1.shift());
      } else {
        // returns the first element in the array and pushes it to the result array
        result.push(arr2.shift());
      }
    }

    return result.concat(arr1, arr2);
  }


console.log(mergeSort([12,6,3,7,13,8]))


