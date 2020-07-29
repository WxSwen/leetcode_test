/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length === 0) return nums;

  let slow = 0;

  while (slow < nums.length && nums[slow] % 2 !== 0) {
    slow++;
  }
  let fast = slow + 1;

  while (fast < nums.length) {
    if (nums[fast] % 2 !== 0) {
      swap(nums, slow, fast);
      slow++;
    }
    fast++;
  }
  return nums;
};

var swap = (nums, i, j) => {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

console.log(exchange([2, 4, 5, 7, 9]));
