// recursive counter

const recursive = (num) => {
    while (num > 0) {
        return recursive(num-1)
    }
    return num
}

console.log(recursive(100))