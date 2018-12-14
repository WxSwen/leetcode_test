/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = new Set();
    var column = new Set();

    var i = 0,j = 0, k = 0;
    while(i < 9) {
      while(j < 9) {
        var filed = new Set();
        
        if(board[i][j] !== '.') {
          if(row.has(`${i}${board[i][j]}`)) return false;
          row.add(`${i}${board[i][j]}`);
        }
        if(board[j][i] !== '.') {
          if(column.has(`${i}${board[j][i]}`)) return false;
          column.add(`${i}${board[j][i]}`);
        }

        if(Math.abs(i - j) < 3) {
          if(filed.has())
        }
        j++;
      }
      i++;
      j = 0;
    }
};

var board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board));
