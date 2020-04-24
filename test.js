var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] > 0 ? nums[i - 1] + nums[i] : nums[i];
  }
  return Math.max(...nums);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
