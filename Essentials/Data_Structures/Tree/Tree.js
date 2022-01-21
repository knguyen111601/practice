// Binary Search Tree

// A binary tree node has its value, left, and right

class Node {
    constructor (data, left = null, right = null) { //left and right initialized as null
        this.data = data;
        this.left = left // left is lesser value
        this.right = right; // right is greater value
    }
}

class BST {
    constructor() {
        this.root = null; // start of the tree
    }

    // add data
    add(data) {
        const node = this.root;
        if (node === null) { // this checks if the node is the root node 
            this.root = new Node(data); // set root node to new data inserted 
            return;
        } else {
            const searchTree = function(node) { // pass in node that starts at root
                if (data < node.data) { // put on the left
                    if (node.left === null) { // if there isn't a left node, then we set the node to the left
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) { // if it already exists
                        return searchTree(node.left) // continue searching to find where to put node
                    }
                } else if (data > node.data) { // put node on the right side
                    if (node.right === null) { // if right exists
                        node.right = new Node(data) // assign to the right
                        return;
                    } else if (node.right !== null) { // if it already exists
                        return searchTree(node.right) // keep searching 
                    }
                } else {
                    return null; // if they are equal, do not add to the tree
                }
            };
            return searchTree(node) // initially call the search tree with the root node            
        }
    }

    // find min
    findMin() {
        let current = this.root;
        while(current.left !== null) { // if the left node isn't null set the current node to the left node and keep going until
            current = current.left // set current node to the left node of the root node
        }
        return current.data // once a node does not have a left, it is the minimum 
    }

    // find max
    findMax() {
        let current = this.root; 
        while(current.right !== null) { // while right node isn't null set the current node to right node and keep going 
            current = current.right
        }
        return current.data // once a right node doesn't exist, it is the maximum 
    }

    // find data
    find(data) {
        let current = this.root;
        while (current !== data) { // while the data is not the same as the current node
            if (data < current.data) { // if it is less than the current node then go left and set current to left node
                current = current.left
            } else { // if it is greater, go right and set current to right node
                current = current.right
            }
            if (current === null) { // if the current node becomes null, then it does not exist in the tree as the loop would've stopped when the data === current.data
                return null;
            }
        }
        return current; // return the node 
    }

    // isPresent
    isPresent(data) {
        let current = this.root;
        while (current) { // while current is true or is not null 
            if (current === data) { // if they match return true
                return true;
            }
            if (data < current.data) { // traverse left if data is less than current
                current = current.left
            } else {
                current = current.right // traverse right if data is greater than current
            }
        }
        return false; // return false after loop is run and current becomes null
    }

    remove(data) {
        const removeNode = function(node, data) {
          if (node == null) { // see if tree is empty 
            return null;
          }
          if (data == node.data) { // if the data matches, 
            // node has no children 
            if (node.left == null && node.right == null) {
              return null; // setting that node that had that data to null
            }
            // node has no left child 
            if (node.left == null) {
              return node.right; // replace the parent node with its right node (deleting the parent)
            }
            // node has no right child 
            if (node.right == null) {
              return node.left; // replace the parent node with its left node (deleting the parent)
            }
            // node has two children 
            // if it has two children you want to set the deleted node to the left most node 
            var tempNode = node.right; // start by setting a temp node to the right node of the target
            while (tempNode.left !== null) { // then traverse left as far as you can
              tempNode = tempNode.left; // set the temp node to that left most node
            }
            node.data = tempNode.data; // set the data of the node to the temp node's data
            node.right = removeNode(node.right, tempNode.data); // call remove node function again and create the right of new node
            return node;
          } else if (data < node.data) { // go left of the tree 
            node.left = removeNode(node.left, data); 
            return node;
          } else { // data is greater than node.data
            node.right = removeNode(node.right, data);
            return node;
          }
        }
        this.root = removeNode(this.root, data); // start with root node and the data we are planning on removing
      }
}

const bst = new BST() // creating a tree

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

bst.remove(4) // remove 4
console.log(bst.findMin()) // returns 1
console.log(bst.findMax()) // returns 7
bst.remove(7) // removes 7
console.log(bst.findMax()) // now returns 6
console.log(bst.isPresent(4)) // returns false as it was removed