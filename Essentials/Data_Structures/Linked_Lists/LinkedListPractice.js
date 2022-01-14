const Node = require("../Node/Node")

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

class LinkedList {

}