// Start of LinkedList Cycle (medium)
// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

const find_cycle = (head) => {

    let slow = head
    let fast = head
    let length = 0

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (fast == slow) {
            length = find_length(slow)
            break;
        }
    }
    return find_start(head, length)
}


const find_length = (slow) => {

    let current = slow
    let count = 0

    while (true) {
        current = current.next
        count += 1
        if (current == slow) {
            break;
        }
    }
    return count
}

const find_start = (head, length) => {

    let pointer1 = head
    let pointer2 = head

    while (length !== 0) {
        pointer2 = pointer2.next
        length -= 1
    }

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return pointer1
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle(head).value}`)
