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