/**
 * @param {number} n
 * @return {string[]}
 */

// 递归后再将每个问题动态规划

var generateParenthesis = function(n) {
  var result = [];
  function generate(str, n, m) {
    if(n === 0) {
      result.push(`${str}${')'.repeat(m)}`);
      return;
    }

    if(n <= m && n !== 0) {
      generate(`${str}(`, n - 1, m);
    }

    if(n < m) {
      generate(`${str})`, n, m - 1);
    }
  }

  generate('', n, n);

  return result;
};

console.log(generateParenthesis(3));