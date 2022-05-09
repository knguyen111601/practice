// Max Depth of Binary Tree

// Problem 1: Given a binary tree, find its maximum depth (or height).



class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};

const find_maximum_depth = (root) => {


    let maxDepth = 0
    
    let queue = []
    queue.push(root)

    while (queue.length > 0) {

        maxDepth += 1 // increment on each node looked at
        let levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {

            const currentNode = queue.shift()
            
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }
    return maxDepth
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

// Time Complexity 
    // O(N) where N is number of nodes in tree

// Space Complexity 
    // O(N) since we need to return list of each level 