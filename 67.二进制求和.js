/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = Number(a) + Number(b);
  let binary = [];

  function recurse(last) {
    sum += last;
    let l = sum % 10;
    sum = Math.floor(sum / 10);

    let p = l % 2;
    let res = Math.floor(l / 2);
    binary.unshift(p);
    if (sum || res) {
      recurse(res);
    }
  }

  recurse(0);
  return binary.join("");
};
// @lc code=end
