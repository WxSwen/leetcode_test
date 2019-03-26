// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */

// 动态规划
// 关键在于每个二维布尔值确定都会与上一个做对比
// Submission Result: Time Limit Exceeded
// var longestPalindrome = function(s) {
//   if (s == null) {
//     return null;
//   }

//   var ret = '';

//   var len = s.length;
//   var max = 0;
//   var D = [];

//   for (var j = 0; j < len; j++) {
//       for (var i = 0; i <= j; i++) {
//           D[i] = [];
//           D[i][j] = s.charAt(i) === s.charAt(j) && (j - i <= 2 || D[i + 1][j - 1]);
//           if (D[i][j]) {
//               if (j - i + 1 > max) {
//                   max = j - i + 1;
//                   ret = s.substring(i, j + 1);
//               }
//           }
//       }
//   }

//   return ret;
// };

// 回文只有偶数和奇数两种
var longestPalindrome = function(s) {
  if (s == null) {
    return null;
  }

  var ret = '';
  var max = 0;

  for(var i = 0; i < s.length; i++) {
    var longest1 = diff(s, i, i);
    var longest2 = diff(s, i, i + 1);

    if(longest1.length > max) {
      max = longest1.length;
      ret = longest1
    } 
    if(longest2.length > max) {
      max = longest2.length;
      ret = longest2
    }

  }

  return ret;
  
};

function diff(s, left, right) {
  var len = s.length;
  while(left >= 0 && right < len) {
    if(s.charAt(left) !== s.charAt(right)) {
      break;
    }
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}


console.log(longestPalindrome("cccc"));