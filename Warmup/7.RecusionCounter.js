const counter = (num) => {
    while (num > 0) {
        return counter(num-1)
    }
    return num
}

console.log(counter(100))