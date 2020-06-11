/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1_arr = version1.split(".").map((v) => Number(v));
  let v2_arr = version2.split(".").map((v) => Number(v));
  let arr = v1_arr.length > v2_arr.length ? v2_arr : v1_arr;
  let abs = Math.abs(v1_arr.length - v2_arr.length);
  while (abs) {
    arr.push(0);
    abs--;
  }

  for (let i = 0; i < v1_arr.length; i++) {
    if (v1_arr[i] < v2_arr[i]) {
      return -1;
    } else if (v1_arr[i] > v2_arr[i]) {
      return 1;
    }
  }
  return 0;
};
// @lc code=end
