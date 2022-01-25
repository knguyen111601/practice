// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

const suggestedProducts = (products, searchWord) => {

    const response = []

    let currentString = ""

    // Sort function with callback compare function inside 
    products.sort((a,b)=> {
        if (a > b) {
            return 1
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    })

    for (let i = 1; i <= searchWord.length; i++) {
        const results = products.filter(word => word.startsWith(searchWord.slice(0, i))) // slice returns letters from 0 to increment

        response.push(results.slice(0,3)) // push into response the first 3 words of the sorted array
    }

    console.log(response)

}

suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")