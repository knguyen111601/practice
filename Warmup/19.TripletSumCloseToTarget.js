// Triplet Sum Close to Target (medium)

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet = (arr, target) => {


    let smallest_difference = Infinity

    for(let i = 0; i < arr.length; i++) {
        let left = i+1
        let right = arr.length -1

        while (left < right) {
            let target_diff = target - arr[i] - arr[left] - arr[right] // target - (sum of currTriplet) = diff

            if (target_diff === 0) {
                return target // meaning we found exact triplet 
            } 

            if (Math.abs(target_diff) < Math.abs(smallest_difference || Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
                // we are looking for the difference that happens to be the smallest as that would be the closest triplet to the target
                smallest_difference = target_diff
            }

            if (target_diff > 0) {
                left += 1
            } else {
                right -= 1
            }
        }  
    }
    return target-smallest_difference
}

console.log(triplet([1,0,1,1], 100))