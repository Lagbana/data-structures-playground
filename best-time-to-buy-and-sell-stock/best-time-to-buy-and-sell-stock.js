/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let minBuy = Infinity
    
    for (let p of prices) {
        minBuy = Math.min(minBuy, p)
        maxProfit = Math.max(maxProfit, p - minBuy)
    }
    return maxProfit
};