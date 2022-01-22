// Given a string s, find the length of the longest substring without repeating characters.


const lengthOfLongestSubstring = (s) => {

    const stack = []

    if (!s.length) {
        return (0)
    }

    for (let i = 0; i < s.length; i++) {
        let current = new Set
        current.add(s[i])
        for (let j = i+1; j < s.length; j++) {
            if (!current.has(s[j])) {
                current.add(s[j])
            } else {
                stack.push(current.size)
                break
            }
        }

        stack.push(current.size)
    }

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] > stack[i+1]){
            let temp = stack[i]
            stack[i] = stack[i+1]
            stack[i+1] = temp
        }
    }
    console.log(stack[stack.length-1])

}

lengthOfLongestSubstring("nigzhtkqxr")
