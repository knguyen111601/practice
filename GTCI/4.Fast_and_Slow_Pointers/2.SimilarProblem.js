// Similar to Linked List Cycle

// Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

// SOLUTION: 
    // We can use the fast and slow pointers to discover when the two pointers will meet and use another pointer to iterate through the list to until we find the slow pointer again to find the length of the cycle


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_length = (head) => {

    let fast = head
    let slow = head

    while (fast && fast.next) {

        fast = fast.next.next // fast head iterates twice
        slow = slow.next // slow head iterates once

        if (fast === slow) { // once they meet
            return calculate_cycle_length(slow) // return length calculator function with slow as param
        }
    }
    return 0
}

const calculate_cycle_length = (slow) => {

    let current = slow // use another pointer
    let cycle_length = 0 

    while (true) {
        current = current.next // iterate using other pointer
        cycle_length += 1 // increase count on each iteration
        if (current === slow) { // if the iteration ever meets the slow pointer
            break;
        }
    }
    return cycle_length // return the length 
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// TIME COMPLEXITY 
// O(N)

// SPACE COMPLEXITY
// O(1)