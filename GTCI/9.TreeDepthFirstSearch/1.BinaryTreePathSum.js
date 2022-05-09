// Binary Tree Path Sum (easy)

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null; 
    }
};

////////////////////////////////////////////////////////////////////////////////////////
// SOLUTION 
////////////////////////////////////////////////////////////////////////////////////////

    // As we are trying to search for a root-to-leaf path, we can use Depth First Search technique to solve this problem 

    // To recursively traverse a binary tree in a DFS fashion, we can start from the root and at every step, make two recursive calls one for the left and one for the right of the child 

    // Steps:

        // 1. Start DFS with root of the tree
        // 2. If the current node is not a leaf node, do two things:
            // Subtract the value of the current node from the given number to get new sum=> S = S-node.val
            // Make two recursive calls for both the children of the current node with the new num calculated in the previous step
        // 3. At every step, see if the current node being visited is a leaf node, and if its value is equal to the given number 'S'. If both these conditions are true, we have found the required root-to-leaf path, return true
        // 4. If the current node is a leaf but its value is not equal to the given number 'S' return false


////////////////////////////////////////////////////////////////////////////////////////
const has_path = (root, sum) => {

    if (root === null) {
        return false
    }

    // if the current node is a leaf and its value is equal to the sum, we've found a path
    if (root.val === sum && !root.left && !root.right) {
        return true
    }

    // recursively call to traverse the left and right sub-tree
    // return true if any of the two recursive call return true
    return has_path(root.left, sum-root.val) || has_path(root.right, sum-root.val)
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)

// Time Complexity 
    // O(N) N is total number of nodes in tree

// Space Complexity 
    // O(N) store the recursion stack
