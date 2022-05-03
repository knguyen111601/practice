const Node = require("./Node.js")

class LLNode extends Node {
    #previous = null
    #next = null

    constructor(previous, data){
        super(data)

        this.#previous = previous
    }

    setNext(next) {
        this.#next = next
    }

    getNext() {
        return this.#next
    }

    getPrevious() {
        return this.#previous
    }
}

class LL {
    #current
    #last

    constructor(data){
        // creation of new node with previous being null and data being whatever was passed into the param
        this.#current = new LLNode(null, data)

        // saves the current node to the last so that it can be used in the add 
        this.#last = this.#current
    }

    getData() {
        // get data is from the Node class
        return this.#current.getData()
    }

    add(data) {
        // here, they are making the new node's previous the current node
        const newNode = new LLNode(this.#last, data)

        // then we need to make the current node's next the one we just created
        this.#last.setNext(newNode)

        // then set the last node in the LL to be the new one
        this.#last = newNode
    }

    next() {
        // LLNode's getNext() function 
        this.#current = this.#current.getNext()
    }

    back() {
        // LLNode's getPrevious() function
        this.#current = this.#current.getPrevious()
    }
}

const LinkedList = new LL("First")

console.log(LinkedList.getData())

LinkedList.add("Second")
LinkedList.next()

console.log(LinkedList.getData())

LinkedList.back()

console.log(LinkedList.getData())


