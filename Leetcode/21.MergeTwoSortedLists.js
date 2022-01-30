// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


const mergeTwoLists = (list1, list2) => {

    const combined = []

    for (let i = 0; i < list2.length; i++) {
        combined.push(list2[i])
    }

    for (let i = 0; i < list1.length; i++) {
        combined.push(list1[i])
    }

    const sorted = combined.sort((a,b) => a-b)

    console.log(sorted)
}

mergeTwoLists([1,2,4], [1,3,4])

mergeTwoLists([], [])

// Not right
// Did it not using linked list, so doesn't work