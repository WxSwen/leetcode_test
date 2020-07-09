/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_VALUE;
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i + 1] - min > max) {
      max = Math.max(prices[i + 1] - min, max);
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// @lc code=end
