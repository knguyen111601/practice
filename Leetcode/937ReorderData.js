// 937. Reorder Data in Log Files

// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.


const reorderLogFiles = (logs) => {
    let letters = []
    let digits = []

    for (log of logs) {
        if (log.split(" ")[1] >= 0) { // checks if the log is a digit log because strings are not greater than 0
            digits.push(log)
        } else { 
            letters.push(log)
        }
    }

    // let sorted = letters.sort((a,b)=> {
    //     let aCut = a.slice(a.indexOf(" ") + 1) // the log without the key
    //     let bCut = b.slice(b.indexOf(" ") + 1)

    //     if (aCut == bCut) { // if logs are the same
    //         return a > b ? 1 : -1 // compares the keys since the logs are the same

    //     } else { // if the logs are different 
    //         return aCut > bCut ? 1 : -1 
    //     }
    // })



    let sorted = letters.sort((a,b) => {
        // grab the version without the key
        let aLog = a.slice(a.indexOf(" ") + 1) // removes everything from beginning to first space
        let bLog = b.slice(b.indexOf(" ") + 1) // reason for +1 is because index of the space is one less than its position in the string

        if (aLog == bLog) { // if the logs are the same
            if (b < a) { // looks at the entirety and compares (is comparing the keys since the logs are the same)
                return 1 // return 1 to put b before a
            } else {
                return -1 // return -1 to be a before b
            }
        } else { // if the logs are different 
            if (bLog < aLog) { // compares just the logs without the key part
                return 1 // put b before a
            } else {
                return -1 // put a before b
            }
        }
    })






    return sorted.concat(digits)

}

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))