/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let result = 0
  let length = prices.length
  for (let i = 0; i < length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      result += prices[i + 1] - prices[i]
    }
  }
  return result
}