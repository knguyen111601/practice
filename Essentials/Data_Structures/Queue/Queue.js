// First in, first out

const Node = require("../Node/Node")

class Queue {
    #data = []

   queue(data) {
       this.#data.push(new Node(data))
   }

   dequeue() {
       return this.#data.shift().getData()
   }
}

module.exports = Queue
