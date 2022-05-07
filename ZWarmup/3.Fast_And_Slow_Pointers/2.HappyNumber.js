// Happy Number (medium)
// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = (num) => {

    let slow = num
    let fast = num

    while (true) {

        slow = square(slow)
        fast = square(square(fast))
        if (slow == fast) {
            break; // stop the loop when they meet and the return will discover if it cycles at 1
        }
    }
    
    return slow === 1 // if it is a happy number, the cycle will become 1 infinitely
}

const square = (num) => {

    let sum = 0

    while (num > 0) {
        let digit = num % 10 // grabs one's place EX. 123 -> 3
        sum += digit * digit // squares one's place
        num = Math.floor(num / 10) // removes one's place EX. 123 -> 12
    }
    return sum
}

console.log(find_happy_number(23))