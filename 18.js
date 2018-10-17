// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let result = [];
    let i,j,k,l;

    for(i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      for(j = i + 1; j < n - 2; j++) {
          if (j > 0 && nums[j] === nums[j - 1] && j !== (i + 1)) {
            continue;
          }
        for(k = j + 1, l = n - 1; k < l;) {
          console.log(i, j, k, l);
          if(nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
            k++;
            l--;
            while(k < l && nums[k] === nums[k-1]) {
              k++;
            }
            while(k < l && nums[l] === nums[l+1]) {
              l--;
            }
          } else if(nums[i] + nums[j] + nums[k] + nums[l] > target){
            l--;
          } else {
            k++;
          }
        }
      }
    }
    return result;
};

// [-9, -9, -8, -7, -7, -3, -3, 0, 0, 1, 1, 3, 4, 6, 7]

console.log(fourSum([0,-1,0,1,-2,-5,3,5,0], 6));