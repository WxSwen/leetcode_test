/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 1.var len = nums.length;
    // var low = 0, high = len - 1;

    // return getIndex(low, high);

    // function getIndex(low, high) {
    //   var mid = parseInt((low + high)/2);
      
    //   if(nums[mid] === target) {
    //     return mid
    //   } else if(nums[mid] < target) {
    //     if(nums[mid + 1] >= target){
    //       return mid + 1;
    //     } else {
    //       if(mid + 2 > len - 1) return len;
    //       return getIndex(mid + 2,high);
    //     }
    //   } else if(nums[mid] > target) {
    //     if(nums[mid - 1] === target){
    //       return mid - 1
    //     }else if(nums[mid - 1] < target){
    //       return mid;
    //     } else {
    //       if(mid - 2 < 0) return 0;
    //       return getIndex(low, mid - 2);
    //     }
    //   }
    // }
    var low = 0, high = len - 1;

    while(low <= high) {
      var mid = parseInt((low + high) / 2);

      if(nums[mid] === target) return mid;
      if()
    }
};

console.log(searchInsert([1,3,5,6], 5));