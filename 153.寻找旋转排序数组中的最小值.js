/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let high = nums.length;
  let low = 0;
  while (high > low) {
    let mid = (low + (high + low)) >> 1;
    if (nums[mid] > nums[right]) {
      low += 1;
    } else if (nums[mid] < nums[right]) {
      high -= 1;
    } else {
      return nums[mid];
    }
  }
};
console.log();
// @lc code=end
