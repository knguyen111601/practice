// 239. Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.


const maxSlidingWindow = (nums, k) => {

    const largestNum = (arr) => {
        let curr = 0
        let highest = -Infinity
        for (let i = 0; i < arr.length; i++) {
            curr = arr[i]
            if (curr > highest) {
                highest = curr
            }
        }
        return highest
    }

    let currentWindow = []
    const maxes = []

    for (let i = 0; i < nums.length;  i++) {
        currentWindow.push(nums[i])
        if (i >= (k - 1)) {
            console.log(currentWindow)
            maxes.push(largestNum(currentWindow))
            currentWindow.shift()
        }
    }
    return maxes
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))