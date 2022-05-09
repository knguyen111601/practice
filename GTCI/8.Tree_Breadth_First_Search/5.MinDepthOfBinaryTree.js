// Minimum Depth of a Binary Tree (easy)

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};
  
const find_minimum_depth = (root) => {

    let minDepth = 0
    let queue = []
    queue.push(root)

    while (queue.length > 0) {

        let levelSize = queue.length
        minDepth += 1

        for (let i = 0; i < levelSize; i++) {

            const currentNode = queue.shift() // grabs first from queue

            // check if this is a leaf node
            if (currentNode.left === null && currentNode.right === null) {
                return minDepth;
            }

            if (currentNode.left) {
                queue.push(currentNode.left)
            } 

            if (currentNode.right) {
                queue.push(currentNode.right)
            } 
        }
    }
    return minDepth
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)

// Time Complexity 
    // O(N) where N is number of nodes in tree

// Space Complexity 
    // O(N) since we need to return list of each level 
