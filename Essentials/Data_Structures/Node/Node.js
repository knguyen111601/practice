// NODE - REPRESENTS ONE UNIT OF DATA

class Node {
    constructor(data) {
        // # means it is a private piece of data
        // Cannot access it outside of the Node
        this.#data 
    }

    getData() {
        return this.#data
    }

    setData(newdata) {
        this.#data  = newdata
    }
}

module.exports = Node