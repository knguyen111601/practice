// Given a string s, find the length of the longest substring without repeating characters.


const lengthOfLongestSubstring = (s) => {
    const lengths = []

    if (!s.length) {
        return 0
    }

    for (let i = 0; i < s.length; i++) {
        let current = new Set
        current.add(s[i])
        for (let j = i+1; j < s.length; j++) {
            if (!current.has(s[j])) {
                current.add(s[j])
            } else {
                lengths.push(current.size)
                break
            }
        }
        lengths.push(current.size)
    }

    lengths.sort((a,b)=>{
        if (a < b) {
            return -1
        } else if (b < a) {
            return 1
        } else {
            return 0
        }
    })
    console.log(lengths[lengths.length-1])
}

lengthOfLongestSubstring("nigzhtkqxr")