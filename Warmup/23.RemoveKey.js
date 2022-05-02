const removeKey = (arr, key) => {
    let nextNonDupe = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[nextNonDupe] = arr[i]
            nextNonDupe += 1
        }
    }
    return nextNonDupe
}

console.log(removeKey([3, 2, 3, 6, 3, 10, 9, 3], 3))