// 1492. The kth Factor of n
// You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

const kthFactor = (n, k) => {
    const list = []

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            list.push(i)
        }
    }


    if (k > list.length) {
        return -1
    }

    return (list[k-1])

}

kthFactor(12, 3)

// Faster than 91.64% 😎


