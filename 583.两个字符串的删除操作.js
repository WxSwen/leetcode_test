/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let dp = Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    dp[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = dp[i][j - 1] + 1;
      let down = dp[i - 1][j] + 1;
      let left_down = dp[i - 1][j - 1];
      if (word1[i - 1] !== word2[j - 1]) {
        left_down += 1;
      }
      dp[i][j] = Math.min(left, down, left_down);
    }
  }
  return dp[n][m];
};
// @lc code=end
