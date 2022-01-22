class Counter {
    constructor() {
        this.counterVal = 0
        this.name = "counterA"
    }

    inc() {
        this.counterVal += 1
        return this.counterVal
    }

    dec() {
        this.counterVal -= 1
        return this.counterVal
    }
}

const instance = new Counter()

class SingleCounter {
    constructor() {
        return instance
    }
}

module.exports = {
    SingleCounter
}