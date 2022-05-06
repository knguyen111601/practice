// Start of LinkedList Cycle (medium)

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
const find_cycle_start = function(head){
    let fast = head
    let slow = head
    let length = 0;

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
            length = cycle_length(slow) // Grab the length of the cycle
            break;
        }
    }
    return find_start(head, length) // find the start of the cycle using the head and length
};

const cycle_length = (slow) => {

    let current = slow // another pointer for iteration
    let length = 0 // length of cycle 

    while (true) {
        current = current.next // iterate
        length += 1 // increment length count

        if (current == slow) { // once they meet, that is the length
            break;
        }
    }
    return length // return the length
}

const find_start = (head, cycle_length) => {
    let pointer1 = head // first pointer
    let pointer2 = head // second pointer

    while (cycle_length > 0) { // move the first pointer forward length amount of times
        pointer2 = pointer2.next // iterate
        cycle_length -= 1 // decrement length until it is 0 to loop that many times
    }

    // if pointer1 moves forward "k" amount of times, when you increment each of them by one, you will find where the start of the cycle is
    while (pointer1 !== pointer2) { 
        pointer1 = pointer1.next // iterate
        pointer2 = pointer2.next // iterate
    }
    return pointer1 // return pointer1
}


  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)