const data = [1,2,3,4,5,6,7,8,9,10]

const swapFirstLast = (arr) => {

    const temp = arr[arr.length - 1] 
    arr[arr.length-1] = arr[0]
    arr[0] = temp

    console.log(arr)
}

swapFirstLast(data)