class Thing {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    hello() {
        console.log("hello")
    }
}

let square = new Thing("10px", "10px")

square.hello()