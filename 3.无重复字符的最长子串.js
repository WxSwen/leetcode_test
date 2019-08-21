/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;
  let maxLength = 0;
  let str = s[0];

  for(let i = 1; i < s.length; i++) {
    let subIndex = str.indexOf(s[i]);
    if (subIndex === -1) {
      str += s[i];
    } else {
      maxLength = maxLength > str.length ? maxLength : str.length;
      // 取str对比
      // 每次对比完都将前面的清除，将当前对比的字符串添加到末尾
      str = str.substring(subIndex + 1) + s[i];
    }
  }
  // 防止最后一次未添加进去
  return maxLength > str.length ? maxLength : str.length;
};

