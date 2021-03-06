// Fruits into Baskets (medium)

// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.


const fruits = (arr) => {


    let windowStart = 0
    let currentMax = -Infinity
    let frequency = {}

    for (let i = 0; i < arr.length; i++) {

        const current = arr[i]

        if (!(current in frequency)) {
            frequency[current] = 0
        }

        frequency[current] += 1

        if (Object.keys(frequency).length > 2) {
            const start = arr[windowStart]
            frequency[start] -= 1
            if (frequency[start] == 0) {
                delete frequency[start]
            }
            windowStart+=1
        }
        currentMax = Math.max(i-windowStart+1, currentMax)
    }
    return currentMax
}

console.log(fruits(['A', 'B', 'C', 'A', 'C']))
console.log(fruits(['A', 'B', 'C', 'B', 'B', 'C']))
