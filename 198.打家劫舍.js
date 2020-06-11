/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }
  return dp[n - 1];
};
console.log(rob([2, 1, 1, 2]));
// @lc code=end
