const isPalindrome = (num) => {

    if (num < 0) return false

    let reversed = 0 
    let copy = num

    while (copy > 0) {
        onesPlace = copy % 10 
            // reversed * 10 keeps putting onesPlace at the ones spot
            // EX. 123
            // onesPlace = 3 -> reversed == 3
            // next cycle onesPlace is 2 -> reversed = 32
            // next cycle onesPlace is 1 -> reversed = 321
        reversed = (reversed * 10) + onesPlace 
        console.log(reversed)
        copy = (copy/10) | 0 
    }
    return num === reversed
}



console.log(isPalindrome(123)) 