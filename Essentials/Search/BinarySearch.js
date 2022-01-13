// Given a sorted array of n integers and a target value, determine if the target exists in the array in logarithmic time using the binary search algorithm. If target exists in the array, print the index of it.

// function binarySearch(target, arr) {
//     const middle = arr[Math.floor(arr.length/2)]

//     let subsection = []

//     if (arr.length % 2 === 0 && target === arr[Math.floor(arr.length/2-1)]) {
//         return arr[Math.floor(arr.length/2-1)]
//     } 

//     if (arr.length === 1 && arr[0] === target) {
//         return arr[0]
//     } else if (arr.length === 1 && target !== arr[0]) {
//         return -1
//     }

//     if (target < middle) {
//         for (let i = 0; i < Math.floor(arr.length/2); i++) {
//             subsection.push(arr[i])
//         }
//     } else {
//         for (let i = Math.floor(arr.length/2); i < arr.length; i++) {
//             subsection.push(arr[i])
//         }
//     }

//     return binarySearch(target, subsection)

// }

// function binarySearch(target, arr) {
//     let high = arr.length - 1
//     let low = 0

//     while (low <= high) {
//         let mid = Math.floor((low+high)/2)
//         if (target === arr[mid]) {
//             return mid
//         }
//         if (target > arr[mid]) {
//             low = mid + 1
//         } else {
//             high = mid - 1
//         }
//     }

//     return "Not Found"
// }


function binarySearch (target, arr) {
    let mid = Math.floor(arr.length/2)
    let subsection = []
    if (target < arr[mid]) {
        subsection = arr.splice(0, mid)
    } else {
        subsection = arr.splice(mid, arr.length-1)
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[mid] === target) {
            return arr[mid]
        }
    }

    return (binarySearch(target, subsection))

}

console.log(binarySearch(3, [2, 3, 5, 7, 9, 10]))