// Reverse Level Order Traversal (easy)

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};

const traverse = (root) => {


    let result = []

    if (root === null) {
        return result;
    }

    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];
        for (i = 0; i < levelSize; i++) {
          currentNode = queue.shift();
          // add the node to the current level
          currentLevel.push(currentNode.value);
          // insert the children of current node in the queue
          if (currentNode.left !== null) {
            queue.push(currentNode.left);
          }
          if (currentNode.right !== null) {
            queue.push(currentNode.right);
          }
        }
        result.unshift(currentLevel);
      }
    return result
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`)

// Time Complexity 
    // O(N) where N is total number of nodes in the tree

// Space Complexity
    // O(N) since we need to return a list containing the level order traversal 