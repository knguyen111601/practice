const bucketSort = (arr) => {
    let bucket1 = []
    let bucket2 = []
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            bucket1.push(arr[i])
        } else {
            bucket2.push(arr[i])
        }
    }

    for (let i = 0; i < bucket1.length; i++) {
        if (bucket1[i] > bucket1[i+1]) {
            let temp = bucket1[i]
            bucket1[i] = bucket1[i+1]
            bucket1[i+1] = temp
        }
        newArr.push(bucket1[i])
    }

    for (let i = 0; i < bucket2.length; i++) {
        if (bucket2[i] > bucket2[i+1]) {
            let temp = bucket2[i]
            bucket2[i] = bucket2[i+1]
            bucket2[i+1] = temp
        }
        newArr.push(bucket2[i])
    }

    console.log(newArr)
    
}

bucketSort([12,6,3,7,13,8])