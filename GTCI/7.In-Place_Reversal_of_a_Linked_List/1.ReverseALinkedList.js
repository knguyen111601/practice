// Reverse a Linked List 

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    print_list() {
      let temp = this;
      while (temp !== null) {
        process.stdout.write(`${temp.value} `);
        temp = temp.next;
      }
      console.log();
    }
  }

//////////////////////////////////////////////////////////////////////
// SOLUTION
//////////////////////////////////////////////////////////////////////
    // To reverse a LL, we need to reverse one node at a time
    // Start with variable, current which will initially point to the head of the LL 
    // A variable called previous which will point to the previous node processed
    // Initially previous will point to null 

    // Steps
        // Reverse current node by pointing it to the previous before moving on 
        // Update the previous to always point to the previous node that we processed 
    
//////////////////////////////////////////////////////////////////////

const reverse = (head) => {

    let previous = null
    let current = head

    while (current) {
        let next = current.next // temporarily store the next node
        current.next = previous // point current to the previous node (first will be null)
        previous = current // before we move to the next node, point previous to the current node
        current = next // set current to the next node we saved prior
    }
    return previous
}




const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();