/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;

  if (n * m === 0) return n + m;

  let D = [];

  for (let j = 0; j < m + 1; j++) {
    if (D[j] === undefined) {
      D[j] = [];
    }
    D[j][0] = j;
  }
  for (let i = 0; i < n + 1; i++) {
    D[0][i] = i;
  }

  for (j = 1; j < m + 1; j++) {
    for (i = 1; i < n + 1; i++) {
      let left = D[j - 1][i] + 1;
      let down = D[j][i - 1] + 1;

      let left_down = D[j - 1][i - 1];

      if (word1[j - 1] !== word2[i - 1]) {
        left_down += 1;
      }
      D[j][i] = Math.min(left, down, left_down);
    }
  }
  return D[m][n];
};

console.log(minDistance("horse", "ros"));

// 1. 删除a = 添加b
// 2. 添加a = 删除b
// 3. 替换a = 替换b

// 1. 添加a
// 2. 添加b
// 3. 替换a
