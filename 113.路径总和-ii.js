/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if(!root) return [];

  let arr = [];

  reverse(root, [], 0);

  function reverse (root, array, currentSum) {
    if (!root.left && !root.right) {
      if (currentSum + root.val === sum) {
        arr.push([...array, root.val]);
      }
    };
    
    if (root.left) {
      reverse(root.left, [...array, root.val], currentSum + root.val);
    }
    if (root.right) {
      reverse(root.right, [...array, root.val], currentSum + root.val);
    }
  }

  return arr;
};

