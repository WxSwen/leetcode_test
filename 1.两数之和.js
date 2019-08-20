/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};

  for(let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let index = hash[target - n];

    if (
      index !== undefined
    ) {
      return [index, i];
    }
    hash[n] = i;
  }
};

