/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let i = 0;
  let max = 0;

  while (nums[i] <= 0) i++;

  for (let k = i; k < nums.length; k++) {
    if (nums[k - 1] > 0) {
      nums[k] += nums[k - 1];
      max = Math.max(nums[k]);
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
