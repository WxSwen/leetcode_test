/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let k = -1, temp;
  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] > nums[i - 1]) {
      k = i - 1;
      break;
    };
  }

  //2.如果不存在升序，即这个数是最大的，那么反排这个数组
  if (k < 0) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  for(let j = nums.length - 1; j >= k; j--) {
    if(nums[j] > nums[k]) {
      temp = nums[j];
      nums[j] = nums[k];
      nums[k] = temp;
      break;
    }
  }
  
  for(let g = nums.length - 1; g >= k + 2; g--) {
    for(let h = g - 1; h >= k + 1; h--) {
      if(nums[g] < nums[h]) {
        temp = nums[g];
        nums[g] = nums[h];
        nums[h] = temp;
      }
    }
  }

  return;
};

let reverse = function(list, begin, end) {
let temp = null;
while(begin < end) {
  temp = list[begin];
  list[begin] = list[end];
  list[end] = temp;
  begin++;
  end--;
}
}

console.log(nextPermutation([3, 2, 1]));