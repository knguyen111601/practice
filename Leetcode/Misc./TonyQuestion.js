// make an array from 0 to 9 (not including the number 8) and make a function that returns the missing number. This function should work for any array from 1-10 , 7-19, 0 1,000,0000


const arr = [1,2,3,4,5,6,7,9]


const findMissing = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i+1] && arr[i] !== arr[arr.length-1]) {
            console.log(arr[i] + 1)
        }
    }
}

findMissing()


