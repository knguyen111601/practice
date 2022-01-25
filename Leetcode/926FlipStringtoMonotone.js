// 926. Flip String to Monotone Increasing

// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

const minFlipsMonoIncr = (s) => {
    
    let zeros = 0
    let ans = 0

    // Changing all 0's to 1s and recording how many steps it takes
    for (let i = 0; i < s.length; i++){
        if (s[i] == "0") {
            zeros += 1
        }
    }

    ans = zeros

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "0") {
            zeros -= 1
        } else {
            zeros += 1
        }
        ans = Math.min(zeros, ans)
    }
    console.log(ans)
}

minFlipsMonoIncr("00110")