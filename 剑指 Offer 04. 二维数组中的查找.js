/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let rows = 0;
  let column = matrix.length - 1;

  while (column >= 0 && rows <= matrix[0].length - 1) {
    if (matrix[column][rows] > target) {
      column--;
    } else if (matrix[column][rows] < target) {
      rows++;
    } else {
      return true;
    }
  }
  return false;
};
console.log(findNumberIn2DArray([[-5]], -5));
