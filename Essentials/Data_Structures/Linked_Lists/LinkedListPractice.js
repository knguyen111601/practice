const Node = require("../Node/Node")

class LLNode extends Node {
    #previous = null
    #next = null
    constructor(previous, data){
        super(data)
        // it sets its previous node to the previous node passed in through the params of LinkedList methods (add)
        this.#previous = previous
        // if the node has no previous (meaning its the head) it will do nothing, if it does, it will set the previous node's next node to itself
        this.#previous ? previous.setNext(this) : null
    }

    setNext(next) {
        // creates next property and sets it equal to the item passed into the method upon use
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
    // last is like the last node in the list
    #last;

    constructor(data) {
        // creation of new node with previous being null and data being whatever was passed into the param
        this.#current = new LLNode(null, data)
        // saves the current node to the last so that it can be used in the add 
        this.#last = this.#current;
    }

    getData() {
        // get data is from the Node class
        return this.#current.getData()
    }

    add(data) {
        // here, they are making the new node's previous the current node
        const newNode = new LLNode(this.#last, data)
        // and setting the current node's next node the new one
        this.#last.setNext(newNode)
        // This then sets the last node to the new node 
        this.#last = newNode
    }

    // Traverse 
    next() {
        // uses method from LLNode to traverse to the next and sets it to the current node 
        this.#current = this.#current.getNext()
    }


    back(){
        // uses method from LLNode to traverse to the next and sets it the current node
        this.#current = this.#current.getPrevious()
    }
}

module.exports = LinkedList