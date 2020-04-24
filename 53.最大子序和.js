/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：保证前后都是正数
// var maxSubArray = function (nums) {
//   let map = new Map();
//   let max = 0;

//   if (!nums) return [];
//   if (nums.length <= 1) return nums;

//   recurse(0, nums.length - 1);
//   function recurse(start, end) {
//     if (start >= end) return;
//     if (nums[start] <= 0) {
//       while (nums[start] <= 0 && end > start) {
//         start++;
//       }
//     }
//     if (nums[end] <= 0) {
//       while (nums[end] <= 0 && end > start) {
//         end--;
//       }
//     }
//     if (!map.has(`${start}${end + 1}`)) {
//       map.set(`${start}${end + 1}`, nums.slice(start, end + 1));
//     }
//     recurse(start, end - 1);
//     recurse(start + 1, end);
//   }

//   for (let value of map.values()) {
//     max = Math.max(
//       max,
//       value.reduce((prev, next) => {
//         return prev + next;
//       }, 0)
//     );
//   }
//   if (max === 0) return Math.max.apply(null, nums);
//   return max;
// };

// console.log(maxSubArray([-8, -19, -5, -4, -20]));

// 思路：正数相加，负数不处理
// var maxSubArray = function (nums) {
//   let res = nums[0];
//   let sum = 0;
//   nums.forEach((num) => {
//     if (sum > 0) sum += num;
//     else sum = num;
//     res = Math.max(res, sum);
//   });
//   return res;
// };
// console.log(maxSubArray([-8, 19, 5, -4, 20]));

// 思路：改变数组的每一项并且保证前面相加为正数
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] > 0 && (nums[i] = nums[i - 1] + nums[i]);
  }
  return Math.max(...nums);
};
// @lc code=end
