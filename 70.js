/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 1.Time Limit Exceeded 斐波那契数列Fibon(效率低，重复求值)
  // if(n === 0 || n === 1 || n === 2) return n;

  // return climbStairs(n - 1) + climbStairs(n - 2);



  // 2.尾递归优化



  // 3.动态规划 对象查找
  var obj = Object.create(null);
  Object.assign(obj, {
    0: 0,
    1: 1,
    2: 2
  })

  if(n === 0 || n === 1 || n === 2) return obj[n];

  for(var i = 3; i <= n ;i++) {
    obj[i] = obj[i - 1] + obj[i - 2];
  }

  return obj[n];
};

console.log(climbStairs(6));