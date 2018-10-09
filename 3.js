// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    var str = s[0];
    var maxLength = 0;
    for(var i = 1; i < s.length; i++){
      let subIndex = str.indexOf(s[i]);
      if(subIndex === -1){
        str += s[i];
      } else {
        maxLength = maxLength > str.length ? maxLength : str.length;
        str = str.substring(subIndex + 1) + s[i];
      }
    }
    return maxLength > str.length ? maxLength : str.length;
};

console.log(lengthOfLongestSubstring("aab"))