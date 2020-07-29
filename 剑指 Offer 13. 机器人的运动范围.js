/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 只需要一次，不需要回溯
var movingCount = function (m, n, k) {
  let count = 0;
  let diff = {};

  function runing(i, j) {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      sum(i) + sum(j) > k ||
      diff[`${i},${j}`]
    )
      return count;
    diff[`${i},${j}`] = true;
    count++;
    runing(i + 1, j);
    runing(i, j + 1);
    runing(i - 1, j);
    runing(i, j - 1);
  }
  runing(0, 0);
  return count;
};

var sum = (num) => {
  let res = 0;
  while (num) {
    res += num % 10;
    num = parseInt(num / 10);
  }
  return res;
};

console.log(movingCount(38, 15, 9));
