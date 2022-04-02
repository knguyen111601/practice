const addNums = (num) => {
    num = Math.floor(num/10) + num%10
    return num
}

console.log(addNums(23))

