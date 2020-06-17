/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let max = A[0] + 0;
  let ans = 0;

  for (let j = 1; j < A.length; j++) {
    ans = Math.max(ans, max + A[j] - j);

    // 之前A[i] + i的最大和现在的A[j] + j做对比
    max = Math.max(max, A[j] + j);
  }
  return ans;
};
// @lc code=end
