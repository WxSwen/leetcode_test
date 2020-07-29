/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length === 0) return nums;

  let slow = 0;
  let fast = 0;
  while (slow < nums.length && nums[slow] % 2 !== 0) {
    slow++;
  }
  fast = slow + 1;
  // 从开始fast就只比slow快一个位置，所以不用担心是奇数跟奇数互换
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

console.log(exchange([1, 2, 3, 4, 5, 6, 7, 8]));
