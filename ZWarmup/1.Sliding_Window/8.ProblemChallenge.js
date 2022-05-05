// Permutation in a String (hard)
// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n!
// n!
//  permutations.

const permutation = (str, pattern) => {

    let windowStart = 0
    let patternMap = {}
    let frequency = {}

    for(let i = 0; i < pattern.length; i++) {
        const current = pattern[i]

        if (!(current in patternMap)) {
            patternMap[current] = 0
        }
        patternMap[current] += 1
    }

    for (let i = 0; i < str.length; i++) {

        const current = str[i]

        if (pattern.includes(current)) {
            if(!(current in frequency)) {
                frequency[current] = 0
            }
            frequency[current] += 1
        }

        if (frequency[current] > patternMap[current] || !(pattern.includes(current))) {
            const start = str[windowStart]
            if (frequency[start]) {
                frequency[start] -= 1
            }
            windowStart = Math.max(windowStart, i-1)
        }
    }
    for (letter in frequency) {
        if (frequency[letter] !== patternMap[letter]) {
            return false
        }
    }
    return true
}

console.log(permutation("oidbcaf", "abc"))
console.log(permutation("odicf", "dc"))
console.log(permutation("bcdxabcdy", "bcdyabcdx"))
console.log(permutation("aaacb", "abc"))

const alternate = (str, pattern) => {

    let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}
console.log("Alt below")
console.log(alternate("oidbcaf", "abc"))
console.log(alternate("odicf", "dc"))
console.log(alternate("bcdxabcdy", "bcdyabcdx"))
console.log(alternate("aaacb", "abc"))