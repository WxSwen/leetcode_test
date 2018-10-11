// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  var res = [];
  var n = nums.length;
  
  for(var i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for(var j = i + 1, k = n - 1; j < k;) {
      if(nums[i] + nums[j] + nums[k] === 0) {
        res.push([ nums[i], nums[j], nums[k] ])
        j++;
        k--;
        while(j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while(j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if(nums[i] + nums[j] + nums[k] > 0){
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));