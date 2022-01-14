const Node = require("../Node/Node")

class LLNode extends Node {
    #previous = null
    #next = null
    constructor(previous, data){
        super(data)
        this.#previous = previous
        this.#previous ? previous.setNext(this) : null
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

class LinkedList {

    #current;
    #last;

    constructor(data) {
        this.#current = new LLNode(null, data)
        this.#last = this.#current;
    }

    getData() {
        // get data is from the Node class
        return this.#current.getData()
    }

    add(data) {
        const newNode = new LLNode(this.#last, data)
        this.#last.setNext(newNode)
        this.#last = newNode
    }

    // Traverse 
    next() {
        this.#current = this.#current.getNext()
    }


    back(){
        this.#current = this.#current.getPrevious()
    }
}

module.exports = LinkedList