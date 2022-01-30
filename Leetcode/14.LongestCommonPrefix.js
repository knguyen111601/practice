// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        // indexOf returns -1 when the argument is not included in the string
        // when it returns 0, that means it is included in the string
        // each time it returns -1, prefix is shortened by one letter
        // here, when it returns 0, we grab the substring of the prefix from 0 to its length - 1
        while(strs[i].indexOf(prefix) !== 0) {
            // sets the prefix to the new substring and then moves on
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    // once completed, it will return the longest common prefix
    console.log(prefix)
}

longestCommonPrefix(["flower","flow","flight"])