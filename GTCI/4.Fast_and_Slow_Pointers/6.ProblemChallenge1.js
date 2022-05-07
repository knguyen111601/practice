// Problem Challenge 1

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)
// O(N)
//  time complexity where ‘N’ is the number of nodes in the LinkedList.

// SOLUTION
// We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
// Once we have the middle of the LinkedList, we will reverse the second half.
// Then, we will compare the first half with the reversed second half to see if the LinkedList represents a palindrome.
// Finally, we will reverse the second half of the LinkedList again to revert and bring the LinkedList back to its original form.


class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

const is_palindromic_linked_list = (head) => {
    let slow = head
    let fast = head

    while (fast && fast.next) { // sets slow to the half point of the linked list
        slow = slow.next
        fast = fast.next.next
    }

    headSecondHalf = reverse(slow) // reverses the second half of the linked list // 2 -> 4 -> 6
    copyHeadSecondHalf = headSecondHalf

    while (head && headSecondHalf) { // iterate through the head linked list and the second half reversed
        if (head.value !== headSecondHalf.value) { 
            break; // not a palindrome
        }
        head = head.next
        headSecondHalf = headSecondHalf.next
    }

    reverse(copyHeadSecondHalf) // revert the reverse of the second half in the original list 

    if (head === null || headSecondHalf === null) {
        return true
    }
    return false
}

const reverse = (head) => {
    let prev = null
    while (head !== null) {
        // 6 -> 4 -> 2
        let next = head.next // next = 4 // next = 2 // next = null 
        head.next = prev // 6 -> null -> 2 // 4 -> 6 // 2 -> 4 -> 6
        prev = head // prev = 6  // prev = 4 // prev = 2
        head = next // iterate head=4 // iterate head=2 -> head = null
    }
    return prev // 2 -> 4 -> 6
}

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)