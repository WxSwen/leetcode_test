/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sumArray = [];
    var unique = [];
    var i = 0;
    while(i < nums.length - 2) {
      for(var j = i + 1; j < nums.length - 1; j++){
        for(var k = j + 1; k < nums.length; k++) {
          if(0 - nums[i] - nums[j] === nums[k]) {
            if(nums.indexOf(nums[k]) >= k){
              sumArray.push([nums[i], nums[j], nums[k]]);
            }
          }
        }
      }
      i++;
    }
    return sumArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));