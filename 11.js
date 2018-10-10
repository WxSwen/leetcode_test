// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     var max = 0;
//     for(var i = 0; i < height.length; i++) {
//       for(var j = height.length - 1; j > i; j--) {
//         var len = j - i;
//         var min = Math.min(height[i], height[j]);
//         max = min * len > max ? min * len : max;
//       }
//     }
//     return max;
// };


var maxArea = function(height) {
  var max = 0;
  var i = 0,j = height.length - 1;
  while(i !== j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    height[i] < height[j] ? i++ : j--;
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));