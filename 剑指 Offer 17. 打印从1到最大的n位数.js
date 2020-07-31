/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let max = 9 * (n > 1 ? Math.pow(11, n - 1) : 1);
  let res = [];
  for (let i = max; i >= 0; i--) {
    res.unshift(i);
  }
  return res;
};
console.log(printNumbers(2));
