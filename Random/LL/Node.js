class Node {
    #data = null
    constructor(data) {
        this.#data = data
    }

    getData() {
        return this.#data
    }

    setData(newData) {
        this.#data = newData
    }
}

module.exports = Node
