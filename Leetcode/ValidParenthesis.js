// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s) => {
    const map = {
        '}':'{',
        ']':'[',
        ')':'('
    }
  
    const stack = []
    let returnValue = true;
  
  
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if(Object.values(map).includes(char)){
            stack.push(char)
        }else{
            let popped = stack.pop();
            if(popped != map[char]){
                returnValue = false
            }
        }
    }
    if(stack.length != 0){
        returnValue = false
    }
    return returnValue
}

console.log(isValid("))"))

