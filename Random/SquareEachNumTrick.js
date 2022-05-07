const math = (num) => {
    let sum = 0
    while (num > 0) {
        digit = num % 10 // grabs one's place digit from number (EX. 123 -> 3)
        sum += digit * digit // adds the square of that number to the sum
        num = Math.floor(num / 10) // removes one's place from num (EX. 123 -> 12) and keeps going
    }
    return sum
}

console.log(math(123))