/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = [];
  dp[0] = [grid[0][0]];

  let rows = grid.length;
  let columns = grid[0].length;

  for (let j = 1; j < rows; j++) {
    if (!dp[j]) dp[j] = [];
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }

  for (let i = 1; i < columns; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let j = 1; j < rows; j++) {
    for (let i = 1; i < columns; i++) {
      dp[j][i] = Math.min(dp[j - 1][i], dp[j][i - 1]) + grid[j][i];
    }
  }

  return dp[rows - 1][columns - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
// @lc code=end
