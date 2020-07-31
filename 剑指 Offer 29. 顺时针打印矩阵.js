/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];

  let rows = matrix.length;
  let columns = matrix[0].length;
  let order = [];
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order[index++] = matrix[top][column];
    }
    for (let row = top + 1; row <= bottom; row++) {
      order[index++] = matrix[row][right];
    }

    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order[index++] = matrix[bottom][column];
      }
      for (let row = bottom; row > top; row--) {
        order[index++] = matrix[row][left];
      }
    }

    top++;
    bottom--;
    left++;
    right--;
  }
  return order;
};

console.log(spiralOrder([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));
