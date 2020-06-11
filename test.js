// function compare(v1, v2) {
//   let v1_arr = v1.split(".");
//   let v2_arr = v2.split(".");

//   let minArray = v1_arr.length < v2_arr.length ? v1_arr : v2_arr;
//   let maxArray = v2_arr.length > v2_arr.length ? v2_arr : v1_arr;

//   for (let i = 0; i < maxArray.length; i++) {
//     if (minArray[i]) {
//       if (Number(minArray[i]) < Number(maxArray[i])) {
//         return 1;
//       } else if (Number(minArray[i]) > Number(maxArray[i])) {
//         return -1;
//       }
//     }
//   }
//   return 0;
// }

// console.log(compare("1.2.2", "1.2.6"));

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
  let far = 0;
  let near = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(near, nums[i] + far);
    far = near;
    near = max;
  }
  return near;
};
// console.log(calculate(40));

// int a = 0, b = 0;
//         for (int i = 0; i < nums.length; i++) {
//             int c = Math.max(b, a + nums[i]);
//             a = b;
//             b = c;
//         }
//         return b;
// @lc code=end
