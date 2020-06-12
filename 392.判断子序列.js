/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) {
      index++;
    } else {
      continue;
    }
  }
  return index === s.length;
};

// @lc code=end
