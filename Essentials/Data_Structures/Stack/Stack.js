// Last in, first out

// Import node
const Node = require("../Node/Node")

class Stack {

    #data = []

    push(newNode) {
        this.#data.push(new Node(newNode))
    }

    pop() {
        return this.#data.pop().getData()
    }
}

module.exports = Stack