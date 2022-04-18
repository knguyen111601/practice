const rangeOfNumbers = (startNum, endNum) => {
    if (endNum - startNum == 0) {
        return [startNum]
    } else {
        // this continuously is returning each number in the range and saving it to numbers
        let numbers = rangeOfNumbers(startNum, endNum-1)
        numbers.push(endNum)
        return numbers
    }
}

console.log(rangeOfNumbers(1,10))