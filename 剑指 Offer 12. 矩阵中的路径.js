/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 暴力解
// 递归所有情况
// 中间需要添加替换 tmp

var exist = function (board, word) {
  let words = word.split("");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, words, i, j, 0)) return true;
    }
  }
};
var dfs = function (board, word, i, j, k) {
  if (
    i >= board.length ||
    i < 0 ||
    j >= board[0].length ||
    j < 0 ||
    board[i][j] !== word[k]
  )
    return false;
  if (k === word.length - 1) return true;
  let tmp = board[i][j];
  board[i][j] = "/";
  let res =
    dfs(board, word, i + 1, j, k + 1) ||
    dfs(board, word, i - 1, j, k + 1) ||
    dfs(board, word, i, j + 1, k + 1) ||
    dfs(board, word, i, j - 1, k + 1);
  board[i][j] = tmp;
  return res;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
