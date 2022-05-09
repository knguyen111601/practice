// Binary Tree Level Order Traversal (easy)

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
////////////////////////////////////////////////////////////////////////////////
// SOLUTION
////////////////////////////////////////////////////////////////////////////////

    // Since we need to traverse all nodes of each level before moving on, we can use Breadth First Search 

    // We can use a queue to efficiently traverse BFS fashion

    // STEPS
        // 1. Start by pushing the root node to the queue
        // 2. Keep iterating until the queue is empty 
        // 3. In each iteration, first count the elements in the queue (let's call it levelSize). We wil have these many nodes in the current level
        // 4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level
        // 5. After removing each node from the queue, insert both of its children into the queue
        // 6. If the queue is not empty, repeat from step 3 for the next level

////////////////////////////////////////////////////////////////////////////////
const traverse = (root) => {

    let result = []

    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let levelSize = queue.length
        let currentLevel = []

        for (let i = 0; i < levelSize; i++) {

            const currentNode = queue.shift() // first item in the queue and removes it from queue

            currentLevel.push(currentNode.val) // push into current level array

            if (currentNode.left) {
                queue.push(currentNode.left) // add children to the queue
            }
            if (currentNode.right) {
                queue.push(currentNode.right) // add children to the queue
            }
        }
        result.push(currentLevel)
    }
    return result
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);