const myAtoi = (s) => {

    let split = s.split("")

    for (let i = 0; i < split.length; i++) {
        if (!parseInt(split[i]) && split[i] !== "-") {
            split[i] = ""
        }
    }
    split = split.join("")
    console.log(split)
}

myAtoi("words and -987")



