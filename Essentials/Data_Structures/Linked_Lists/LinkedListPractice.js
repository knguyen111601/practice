// this keyword practice
// const Node = (element) => {
//     this.element = element
//     this.next = "next thing"
//     console.log(this)
// }
// Node("Whatever")
// The above returns: {element: "Whatever", next: "next thing"}


const LinkedList = () => {
    let length = 0
    let head = null

    let Node = (element) =>{
        this.element = element
        this.next = null
    }

    this.size = () => {
        return length
    }

    this.head = () => {
        return head
    }

    this.add = (element) => {
        let node = new Node(element)
        if (head === null) {
            head = node
        } else {
            let currentNode = head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        length++
    }

}



