const Node = require("../Node/Node")

class LLNode extends Node {

    #next = null

    constructor(data) {
        super(data)
    }

    setNext(next) {
        this.#next = next
    }

    getNext() {
        return this.#next
    }

}

class LinkedList {
    #current;
    #last;

    constructor(data) {
        this.#current = new LLNode(data)
        this.#last = this.#current
    }

    getData() {
        // get data is a method inside of the node class
        return this.#current.getData()
    }

    add(data) {
        // create new node with data
        const newNode = new LLNode(data)
        // sets the current last node's next item to the new node
        this.#last.setNext(newNode)
        // sets the new last node to the new node
        this.#last = newNode
    }

    next(){
        this.#current = this.#current.getNext()
    }
}

const LL = new LinkedList(1)

LL.add(2)

LL.add(3)

LL.add(4)

console.log(LL.getData()) // returns 1

LL.next()
console.log(LL.getData()) // returns 2