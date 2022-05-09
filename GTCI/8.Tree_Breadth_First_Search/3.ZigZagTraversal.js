// Zigzag Traversal (medium)

// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

class TreeNode {

    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null; 
    }
};

//////////////////////////////////////////////////////////////////////
// SOLUTION 
//////////////////////////////////////////////////////////////////////

// This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. The only additional step we have to keep in mind is to alternate the level order traversal, which means that for every other level, we will traverse similar to Reverse Level Order Traversal.

//////////////////////////////////////////////////////////////////////

const traverse = (root) => {


    let result = []
    if (root === null) {
        return result
    }

    let queue = []
    queue.push(root)

    let leftToRight = true

    while (queue.length > 0) {

        let levelSize = queue.length
        let currentLevel = []

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()

            if (leftToRight) { // going left to right
                currentLevel.push(currentNode.val)
            } else { // going right to left
                currentLevel.unshift(currentNode.val)
            }

            if (currentNode.left) {
                queue.push(currentNode.left)
            } 
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevel)
        leftToRight = !leftToRight // switch directions 
    }
    return result
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)

// Time Complexity 
    // O(N) where N is number of nodes in tree

// Space Complexity 
    // O(N) since we need to return list of each level 
