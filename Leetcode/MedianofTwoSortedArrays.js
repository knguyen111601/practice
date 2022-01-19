// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
    let sum = []

    for (let i = 0; i < nums1.length; i++) {
        sum.push(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        sum.push(nums2[i])
    }

    if (sum.length > 0) {
        for (let i = 0; i < sum.length; i++){
            for (let j = i+1; j < sum.length; j++) {
                if (sum[i] > sum[j]){
                    let newNum = sum[i]
                    sum[i] = sum[j]
                    sum[j] = newNum
                }
            }
        }
    }

    if (sum.length % 2 === 1) {
        console.log(sum[Math.floor(sum.length/2)])
    } else {
        console.log((sum[sum.length/2 - 1] + sum[sum.length/2])/2)
    }
}

findMedianSortedArrays([2,2,4,4], [2,2,4,4])


////////////////////////////////////////////////
// DOES NOT MEET TIME COMPLEXITY DOE
// MAY NEED FASTER SORTING METHOD?
////////////////////////////////////////////////

