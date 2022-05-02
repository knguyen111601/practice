// Triplet Sum Close to Target (medium)

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.


const triplet_sum_close_to_target = (arr, target) => {


    arr.sort((a,b)=>a-b)
    let smallest_difference = Infinity


    for (let i = 0; i < arr.length; i++) {
        let left = i+1
        let right = arr.length-1

        while (left < right) {
            const target_diff = target - arr[i] - arr[left] - arr[right] // target - x - y - z 

            if (target_diff === 0) { // triplet with exact sum
                return target
            }

            if (Math.abs(target_diff) < Math.abs(smallest_difference) || Math.abs(target_diff) === Math.abs (smallest_difference) && target_diff > smallest_difference) {
                smallest_difference = target_diff
            }


            if (target_diff > 0) {
                left += 1 // need a bigger number
            } else {
                right -= 1 // need a smaller number
            }
        }
    }
    return target - smallest_difference
}

console.log(triplet_sum_close_to_target([-2,0,1,2], 2))