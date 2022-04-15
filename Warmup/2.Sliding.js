

const slide = (arr, k) => {


    let current = 0
    let currentMax = -Infinity
    let windowStart = 0

    for (let i = 0; i < arr.length; i++) {

        current += arr[i]

        if (i >= k-1) {
            currentMax = Math.max(current, currentMax)
            current -= arr[windowStart]
            windowStart += 1
        }
    }

    return currentMax
}

console.log(slide([1,2,3,4,5], 3))
