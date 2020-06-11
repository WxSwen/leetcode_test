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
  let v1_arr = version1.split(".");
  let v2_arr = version2.split(".");
  let minArray = null;
  let maxArray = null;
  let isV1Min = false;

  if (v1_arr.length < v2_arr.length) {
    minArray = v1_arr;
    maxArray = v2_arr;
    isV1Min = true;
  } else {
    minArray = v2_arr;
    maxArray = v1_arr;
    isV1Min = false;
  }

  for (let i = 0; i < maxArray.length; i++) {
    if (!minArray[i]) minArray[i] = 0;
    if (Number(minArray[i]) < Number(maxArray[i])) {
      return isV1Min ? -1 : 1;
    } else if (Number(minArray[i]) > Number(maxArray[i])) {
      return isV1Min ? 1 : -1;
    }
  }
  return 0;
};
// @lc code=end
