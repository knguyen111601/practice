//5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

const longestPalindromic = (s) => {

    const pals = []

    if (s.length == 1) {
        return s[0]
    }

    // for (let i = 0; i < s.length; i++) {
    //     let current = []
    //     current.push(s[i])
    //     pals.push(current[0])
    //     for (let j = i+1; j < s.length; j++) {
    //         if (current[0] !== s[j]) {
    //             current.push(s[j])
    //         } else {
    //             current.push(s[j])
    //             pals.push(current.join(""))
    //             current = []
    //         }
    //     }
    // }

    // if (s.length % 2 === 1) {
    //     for (let i = 0; i < s.length; i++) {
    //         let current = []
    //         current.push(s[i])
    //         pals.push(current[0])
    //         for (let j = i+2; j < s.length; j++) {
    //             if (current[0] !== s[j]) {
    //                 current.push(s[j])
    //             } else {
    //                 current.push(s[j-1])
    //                 current.push(s[j])
    //                 pals.push(current.join(""))
    //                 current = []
    //             }
    //         }
    //     }
    // }


    for (let i = 0; i < s.length; i++ ) {
        let current = []
        current.push(s[i])
        for (let j = s.length-1; j >= 0; j--) {
            if (s[i] == s[j]) {
                current.push(s.split("").splice(i, j).join(""))
                console.log(current)
            } 
        }
    }

    const test = "kk"

    console.log(test.split("").splice(2).join(""))

    pals.sort((a,b)=>{
        if (a.length < b.length) {
            return -1
        } else if (b.length < a.length) {
            return 1
        } else {
            return 0
        }
    })

    console.log(pals)
    console.log(pals[pals.length-1])

}

longestPalindromic("cbbd")