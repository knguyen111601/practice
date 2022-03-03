// Return the first positive integer not in the array

// Big O Notation : O(N) 

const solution = (A) => {
    const sorted = A.sort((a,b) => {
        a-b
    }) 

    // Create set to remove any duplicate numbers
    const set = new Set

    for (let i = 0; i < sorted.length; i++) {
        // if the absolute value of a number is same as the original number then it is positive
        if (Math.abs(parseInt(sorted[i])) == parseInt(sorted[i])){
            set.add(sorted[i])
        }
    }


    // increment "i" to one greater than the size of the set to see first number that isn't in the set
    for (let i = 1; i <= set.size+1; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

console.log(solution([-3,-5,-1, 3, 5]))