// Triplet Sum Close to Target (medium)

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = (arr, target) => {

    arr.sort((a,b) => a-b)

    let smallestDifference = Infinity

    for (let i = 0; i < arr.length; i++) {

        let left = i + 1
        let right = arr.length -1 

        while (left < right) {
            const currentDifference = target - arr[i] - arr[left] - arr[right]

            if (currentDifference === 0) {
                return target
            }

            if (Math.abs(currentDifference) < Math.abs(smallestDifference) || Math.abs(currentDifference) === Math.abs(smallestDifference) && currentDifference > smallestDifference) {
                smallestDifference = currentDifference
            }

            if (currentDifference > 0) {
                left +=1
            } else {
                right -= 1
            }
        }
    }
    return target - smallestDifference
}

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100))
