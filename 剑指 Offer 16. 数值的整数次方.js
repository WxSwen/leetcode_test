/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 64位系统中，int的最小值为-2147483648 = -2^31，其补码为1000...0000。计算时采用补码
// 2147483648 取正数后超出，因为按位操作时，最高为32位，第一位为符号为 0表示正，1表示负

// 有符号32位整数
// 所有的按位操作符的操作数都会被转成补码（two's complement）形式的有符号32位整数

// 取巧：单独处理2147483648这个超出范围的数字，即可

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  if (n === 2147483648) {
    n = n - 1;
    res *= x;
  }
  while (n) {
    if ((n & 1) === 1) res *= x;
    x *= x;
    n >>= 1;
  }
  return res;
};

console.log(myPow(2, -2147483648));
