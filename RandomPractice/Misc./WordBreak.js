const wordBreak = (s, wordDict) => {

    let arr = []
    let sum = []

    for (let i = 0; i < wordDict.length; i++) {
        let addArr = []
        for (let j = 0; j < wordDict[i].length; j++) {
            addArr.push(s[j])
        }
        s = s.slice(wordDict[i].length)
        arr.push(addArr.join(""))
        if (arr.join("").includes(wordDict[i])){
            sum.push(1)
        } else {
            sum.push(0)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arr.splice(i)
        }
    }

    let determine = 0

    for (num of sum) {
        determine = determine + num
    }

    if (determine === wordDict.length) {
        return true
    } else {
        return false
    }


}

// wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])

wordBreak("leetcode", ["leet", "code"])