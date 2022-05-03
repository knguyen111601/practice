// Triplet Sum Close to Target (medium)
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const trip = (arr, target) => {

    arr.sort((a,b)=> a-b)
    let smallest_diff = Infinity


    for (let i = 0; i < arr.length; i++) {
        // target - x - y - z

        let left = i+1 // the other pointer is i
        let right = arr.length - 1

        while (left < right) {

            // target - x - y - z
            // closest to 0 is the closest triplet sum 
            const target_diff = target - arr[i] - arr[left] - arr[right]

            if (target_diff === 0) {
                return target // triplet matches target sum
            }

            if (Math.abs(target_diff) < Math.abs(smallest_diff) || Math.abs(target_diff) === Math.abs(smallest_diff) && target_diff > smallest_diff) {
                smallest_diff = target_diff
            }

            if (target_diff > 0) {
                left += 1
            } else {
                right -= 1
            }

        }


    }
    return smallest_diff
}

console.log(trip([-2, 0, 1, 2], 2))