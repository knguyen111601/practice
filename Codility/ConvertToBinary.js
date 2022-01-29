// Convert a Number to Binary 

// Given an integer, we keep dividing a number by two and capturing its remainder till the number turns less than 2

const convertToBinary = (num) => {
    let current = num
    let remainders = []

    while (current > 0) {
        remainders.push(current % 2)
        current = Math.floor(current/2)
    }
    console.log(parseInt(remainders.reverse().join("")))
}

convertToBinary(25)


function recursiveMethod (number, bin) {
    if (number > 0) {
        return recursiveMethod( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

// console.log(recursiveMethod(25))