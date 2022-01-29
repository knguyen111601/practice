const numbers = [1,2,3,4,5]

const newNumbers = numbers.map((num)=> {return num + 1})

console.log(newNumbers)


////////////////////////////////////////////////////////////////////////////////
// Sort
////////////////////////////////////////////////////////////////////////////////
// Compare Function 
// If return is > 0, it will put b before a
// if return is < 0, it will put a before b
// if return === 0, it will keep same positions
const sortedNumbers = numbers.sort((a,b)=>{
    if (b < a) {
        return 1
    } else {
        return -1
    }
})

console.log(sortedNumbers)

////////////////////////////////////////////////////////////////////////////////
// Filter
////////////////////////////////////////////////////////////////////////////////
// In the callback inside of filter, it will create a new array where the statement returns true
// Here, the numbers that are odd are returned in a new array 
const filteredNums = numbers.filter((nums)=> {
    return nums % 2 === 1
})

console.log(filteredNums)