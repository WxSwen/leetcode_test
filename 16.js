// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var closest = 0, sum = 0, min = 0;

  if(nums.length === 3) return nums[0] + nums[1] + nums[2]

  nums = nums.sort((a, b) => a - b);
  for(var i = 0; i < nums.length - 2; i++) {
    for(var j = i + 1, k = nums.length - 1; j < k;) {
      sum = nums[i] + nums[j] + nums[k];
      
      if(i === 0 && min === 0 && closest === 0) {
        min = sum;
        closest = target > sum ? (target - sum) : (sum - target);
      }

      if(sum > target) {
        if(sum - target <= closest) {
          min = sum;
          closest = sum - target;
        }
        k--;
      } else if(sum < target){
        if(target - sum <= closest) {
          min = sum;
          closest = target - sum;
        }
        j++;
      } else {
        return sum;
      }
    } 
  }
  return min;
};

console.log(threeSumClosest([1,1,1,1], 0));