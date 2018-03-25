/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j = 0;
    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] != val) {
            nums[j++] = nums[i];
        }
    }
    return j;
};

console.log(removeElement([3,2,2,3],3));

