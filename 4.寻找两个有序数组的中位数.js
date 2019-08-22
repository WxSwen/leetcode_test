/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let middle = len >> 1;
    let i = j = 0;
    let arr = [];
    let lastIndex = 0;

    while(true) {
      if(nums1[i] <= nums2[j] || nums2[j] === undefined) {
        arr.push(nums1[i]);
        i++;
      } else {
        arr.push(nums2[j]);
        j++;
      }
      if(lastIndex === middle) break;
      lastIndex++;
    }
    if(len % 2) {
      return arr[lastIndex];
    }
    return (arr[lastIndex - 1] + arr[lastIndex]) / 2;
};


