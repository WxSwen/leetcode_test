/**
 * @param {number[]} nums
 * @return {number}
 */

 // sorted array!!

var removeDuplicates = function(nums) {
  var removeIdx = 0;
  var len = 1;
  
  for(var i = removeIdx + 1, length = nums.length; i < length; i++) {
    if(nums[removeIdx] !== nums[i]) {
      nums[len] = nums[i];
      removeIdx = i;
      len++;
    } 
  }
  return len;
};

console.log(removeDuplicates([1,1,1,2,2,3]));