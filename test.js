var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let low = 0;
  let high = nums.length - 1;

  if (nums[low] < nums[high]) return nums[low];

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[mid] > nums[0]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
console.log(findMin([2, 3, 4, 5, 1]));
