/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let diff = {};
  for (let i = 0; i < nums.length; i++) {
    if (diff[nums[i]]) {
      return nums[i];
    } else {
      diff[nums[i]] = 1;
    }
  }
  return -1;
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
