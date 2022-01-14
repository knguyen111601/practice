// First in, first out

const Node = require("../Node/Node")

class Queue {
    #data = []

    push(newNode) {
        this.#data.push(new Node(newNode))
    }

    shift() {
        return this.#data.shift()
    }
}

