// Max Sub Array Sum
// Find the sub array of size (size) where the sum is the greatest


const maxSubArraySum = (num, size) => {

    if (size < 0 || size > num.length) return null

    let currentSum = 0
    let maxSumSeen = -Infinity // case of negative integers 

    for (let i = 0; i < num.length; i++) {
        currentSum += num[i]
        if ( i > size - 1) { // when i is greater than the window
            maxSumSeen = Math.max(currentSum, maxSumSeen)
            currentSum -= num[i - (size - 1)] // subtracts the first number from the window  
        }
    }

    return maxSumSeen

}

const arr1 = [1,2,3,5,4,8,6,2]

console.log(maxSubArraySum(arr1, 3)) 