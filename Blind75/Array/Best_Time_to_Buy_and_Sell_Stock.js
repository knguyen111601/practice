// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const maxProfit = (prices) => {
//     let priceDay = []
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i+1] - prices[i] > prices[i+2] - prices[i+1] || prices[i+1] > prices[i]) {
//             priceDay.push(prices[i])
//             priceDay.push(prices[i+1])
//         }
//     }

//     console.log(priceDay)

//     if (priceDay.indexOf(Math.max(...priceDay)) < priceDay.indexOf(Math.min(...priceDay)) || prices.length === 1 || priceDay.length === 0) {
//         console.log(0)
//     } else {
//         console.log(Math.max(...priceDay) - Math.min(...priceDay))
//     }
// }

const maxProfit = (prices) => {
    let min = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
    console.log(maxProfit)
}



// maxProfit([2,4,1])

// maxProfit([7,1,5,3,6,4])

// maxProfit([7,6,4,3,1])

// maxProfit([2,1,2,0,1])

// maxProfit([2,1,2,1,0,1,2])

// maxProfit([1,2])
