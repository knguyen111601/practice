// Fruits into Baskets (medium)

// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const fruits = (fruits) => {

    let windowStart = 0
    let currentMax = 0
    let basket = {}

    for (let i = 0; i < fruits.length; i++) {
        // save current fruit to variable
        const current = fruits[i]
        // if it doesn't exist in the basket, add it
        if (!(current in basket)) {
            basket[current] = 0
        }

        // once a third fruit comes up
        while (Object.keys(basket).length > 2) {
            // save the first fruit to variable
            const start = fruits[windowStart]
            // remove it from basket
            delete basket[start]
            // slide window up one
            windowStart += 1
        }
        // compare currentMax to the size of the window (window size is dependent on when 3rd fruit it reached)
        currentMax = Math.max(currentMax, i-windowStart+1)
    }
    return currentMax
} 

console.log(fruits(['A', 'B', 'C', 'B', 'B', 'C']))

// Time Complexity 
// O(N) N is number of inputs in the array
// Outer for loop runs for each character once and inner processes each character once so it is O(N+N) 
// O(N+N) == O(N)

// Space Complexity 
// O(1) constant space as there can be a maximum of three types of fruits stored in the frequency map