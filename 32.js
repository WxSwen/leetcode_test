// Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s, max) {
//   let stack = [];
//   let copyS = [];

//   s.split('').forEach((str, index) => {
//     if(str === '(') {
//       stack.push({
//         str,
//         index
//       });
//     } else {
//       if(stack[stack.length - 1] && '(' === stack[stack.length - 1].str) {
//         let start = stack.pop();
//         copyS[start.index] = 1;
//         copyS[index] = 1;
//       } else {
//         return;
//       }
//     }
//   });
//   return findTheMostLongArray(copyS);
// }

// function findTheMostLongArray(arr) {
//   let max = 0;
//   let i = 0;
//   let tempMax = 0;

//   while(i <= arr.length) {
//     if(arr[i] === 1) {
//       i += 2;
//       tempMax += 2;
//     } else {
//       i++;
//       max = max > tempMax ? max : tempMax;
//       tempMax = 0;
//     }
//   }
//   return max;
// }

var longestValidParentheses = function(s) {
  var max = 0;
  var stack = [-1];

  for(let i = 0; i < s.length; i++) {
    if('(' === s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
      if(!stack.length) stack.push(i);
      // stack.push(i)
      // i - stack[stack.length - 1]
      else max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
};

// var longestValidParentheses = function(s) {
//   let longest = 0;
//   let stack = [-1];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack.push(i);
//     } else {
//       stack.pop();
//       if (!stack.length) stack.push(i);
//       else longest = Math.max(longest, i - stack[stack.length - 1]);
//     }
//   }

//   return longest;
// };

console.log(longestValidParentheses(")))()()()()()"));