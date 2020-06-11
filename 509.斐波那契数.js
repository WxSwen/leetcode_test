/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 尾递归优化，相当于把数字倒过来相加
var fib = function (N, a = 0, b = 1) {
  if (N === 0) return 0;
  if (N === 1) return b;
  return fib(N - 1, b, a + b);
};

// 普通递归
// let fib = (n) => {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// hash 记忆
// let fib = (num) => {
//   let memo = {};
//   let hel = (n, sum) => {
//     if (n === 1 || n === 2) return 1;
//     if (memo[n]) return memo[n];
//     memo[n] = hel(n - 1, sum) + hel(n - 2, sum);
//     return memo[n];
//   };
//   return hel(num, 0);
// };
// @lc code=end
