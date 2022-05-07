// Happy Number (medium)

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = (num) => {
    let slow = num
    let fast = num

    while (true) {
        slow = find_square_sum(slow) // move forward once
        fast = find_square_sum(find_square_sum(fast)) // move forward twice
        if (slow == fast) { // upon meeting, means that they either in a cycle with 1 or something else
            break; 
        }
    }
    return slow === 1 // if they meet and are stuck at one, then it is true, else false
}

const find_square_sum = (num) => {
    let sum = 0
    while (num > 0) {
        digit = num % 10 // grabs one's place digit from number (EX. 123 -> 3)
        sum += digit * digit // adds the square of that number to the sum
        num = Math.floor(num / 10) // removes one's place from num (EX. 123 -> 12) and keeps going
    }
    return sum
}

console.log(find_happy_number(23));
console.log(find_happy_number(12));

