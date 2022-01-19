// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1,l2) => {
    const arr1 = []
    const arr2 = []

    for (let i = l1.length-1 ; i >= 0; i--) {
        arr1.push(l1[i])
    }

    for (let i = l2.length-1 ; i >= 0; i--) {
        arr2.push(l2[i])
    }

    const sum = parseInt(arr1.join("")) + parseInt(arr2.join(""))

    const newSum = sum.toString().split("").reverse()

    for (let i = 0; i < newSum.length; i++) {
        newSum[i] = parseInt(newSum[i])
    }

    console.log(newSum)

    //////////////////////////////////////////////////
    // Correct Solution
    //////////////////////////////////////////////////
    // let sum = 0
    // let current = new ListNode(0)
    // let result = current;

    // while (l1 || l2) {
    //     if (l1) {
    //         sum += l1.val
    //         l1 = l1.next
    //     }

    //     if (l2) {
    //         sum += l2.val
    //         l2 = l2.next
    //     }

    //     current.next = new ListNode(sum%10)
    //     current = current.next

    //     sum = sum > 9 ? 1 : 0
    // }

    // if (sum) {
    //     current.next = new ListNode(sum)
    // }

    // return result.next

}

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])

