// Given a number N, determine if the sum of N consecutive numbers is odd or even.

// If the sum is definitely an odd number, return Odd.
// If the sum is definitely an even number, return Even.
// If the sum can be either odd or even ( depending on which first number you choose ), return Either.

// const Odd_or_Even = (n) => {
//     let evens = 0
//     let odds = 0

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             evens += 1
//         } else if (i % 2 === 1) {
//             odds += 1
//         }
//     }

//     if (evens === odds && evens % 2 === 0) {
//         console.log("Even")
//     } else if (evens === odds && evens % 2 === 1) {
//         console.log("Odd")
//     } else {
//         console.log("Either")
//     }

// }
// WORKING ^^ but times out

const Odd_or_Even = (n) => {
    if (n % 2) {
        console.log("Either")
    } else if (n/2 % 2) {
        // This returns 1 if n/2 is odd and 1 is truthy while 0 is falsey
        console.log("Odd")
    } else {
        console.log("Even")
    }
}



Odd_or_Even(6)
