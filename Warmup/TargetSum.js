// Target Sum
// Given an array and sum, if any addition of any two memeber from array is target sum or not. If there is then return first number from array which makes target sum. If there is no target sum return 0.


const targetSum = (arr, sum) => {

    let has = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(arr[i])
                has = true
            }
        }
    }
    if (!has) {
        console.log(0)
    }
}

targetSum([1, 2, 4, 5, 6, 7, -5], 0)