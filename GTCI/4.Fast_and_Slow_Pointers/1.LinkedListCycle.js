// LinkedList Cycle (easy)

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

/////////////////////////////////////////////////
// GTCI METHOD BELOW!!!
/////////////////////////////////////////////////

const has_cycle = (head) => {
    
    const frequency = {} // hash map for keeping each value

    while (head.next) {
        if (!(head.value in frequency)) { // If the value is not apparent inside the hash map
            frequency[head.value] = 0 // add it
        } else {
            return true // If it is, then the linked list is looping back and return true
        }
        head = head.next // Increment by setting current head to the next head
    }
    return false // If it never loops, return false
}
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
 // should be false since never has a "next" being something there before

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`) // should be true since it comes back 

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`) // should be true since it comes back

/////////////////////////////////////////////////////////////////////////////
// EXPLANATION FOR GTCI METHOD
/////////////////////////////////////////////////////////////////////////////
// Two racers in circular racing track 
// If one racer is faster than the other, the faster racer is bound to catch the slower racer

// In this algorithm, we can have a fast and slow pointer traversing a linked list
// In each iteration the slow pointer moves one step and fast pointer moves two steps

// TWO POSSIBLE CONCLUSIONS
    // 1. If the linked list doesn't have a cycle, the fast pointer will reach the end of the list before the slow pointer to reveal no cycle
    // 2. The slow pointer will never be able to catch up to the fast pointer if there is no cycle

// If the linked list has a cycle, the fast pointer enters the cycle first, followed by the slow pointer
// After this, both pointers will keep moving in the cycle infinitely 
// If they ever meet, we can conclude there is a cycle in it
// When the fast pointer is approaching the slow pointer from behind we have two possibilities: 
    // 1. The fast pointer is one step behind the slow pointer
    // 2. The fast pointer is two steps behind the slow pointer

// All other distances between the fast and slow pointers will reduce to one of these two possibilities:
    // 1. If the fast pointer is one step behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step, they both meet
    // 2. If the fast pointer is two steps behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step. After the moves, the fast pointer will be one step behind, which reduces this scenario to the first scenario. Which means they will meet. 

const alternate = (head) => {

    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
            return true // found the cycle
        }
    }
    return false
}

const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);
head2.next.next.next.next.next = new Node(6);
console.log("--ALTERNATE BELOW--")
console.log(`LinkedList has cycle: ${has_cycle(head2)}`);

head2.next.next.next.next.next.next = head2.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head2)}`);

head2.next.next.next.next.next.next = head2.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head2)}`);



