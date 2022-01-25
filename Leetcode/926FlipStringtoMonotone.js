// 926. Flip String to Monotone Increasing

// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

// const minFlipsMonoIncr = (s) => {
    
//     let zeros = 0
//     let ans = 0

//     // Changing all 0's to 1s and recording how many steps it takes
//     for (let i = 0; i < s.length; i++){
//         if (s[i] == "0") {
//             zeros += 1
//         }
//     }

//     ans = zeros

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "0") {
//             zeros -= 1
//         } else {
//             zeros += 1
//         }
//         ans = Math.min(zeros, ans)
//     }
//     console.log(ans)
// }

// minFlipsMonoIncr("00110")


const minFlipsMonoIncr = (s) => {
    let numberFlips = 0
    let ones = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '0') {
            // if it the number it is on is 0 and isn't the first one, flip to 1 so increase by 1 flip
            if (ones !== 0) {
                numberFlips  += 1
            }
        // if number is 1 add to ones count
        } else {
            ones += 1
        }
    }

    // if the total flips is greater than the number of 1s then set total flips to number of ones
    if (numberFlips > ones) {
        numberFlips = ones
    }

    console.log(numberFlips)
}

minFlipsMonoIncr("00110")
