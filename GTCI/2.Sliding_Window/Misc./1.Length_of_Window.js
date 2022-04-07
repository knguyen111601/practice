// Trick to find the length of a window
// end of window - start or window + 1

const windowSize = (arr, k) => {

    let size = 0
    let windowStart = 0

    for (let i = 0; i < arr.length; i++) {
        if (i >= k - 1) {
            size = i - windowStart + 1
            windowStart += 1
        }

        console.log(size) // upon reaching window size, should continue to return a size of K

    }
}

windowSize([1,2,3,4,5,6,7,8,9], 3)




