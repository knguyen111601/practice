// Level Averages in a Binary Tree (easy)

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {

    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null; 
    }
};
  

const find_level_averages = (root) => {

    let result = []

    if (root === null) {
        return result
    }

    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let levelSize = queue.length
        let sum = 0.0 // the current level's total sum 
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift() // grab first item in queue

            sum += currentNode.val // add to the current sum 

            if (currentNode.left) {
                queue.push(currentNode.left) // add children to queue
            }
            if (currentNode.right) {
                queue.push(currentNode.right) // add children to queue
            }
        }
        result.push(sum/levelSize) // push average (sum/totalItems) to results 
    }
    return result
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)

// Time Complexity 
    // O(N) where N is number of nodes in tree

// Space Complexity 
    // O(N) since we need to return list of each level 
