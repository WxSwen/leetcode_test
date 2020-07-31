/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    if (n & 1) count++;
    n >>= 1;
  }

  return count;
};

console.log(hammingWeight(11111111111111111111111111111101));
