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

  reverse(root, []);

  function reverse (root, array) {
    if (!root.left && !root.right) {
      let finals = [...array, root.val];
      if (finals.reduce((a, b) => a + b) === sum) {
        arr.push(finals);
      }
    };
    
    if (root.left) {
      reverse(root.left, [...array, root.val]);
    }
    if (root.right) {
      reverse(root.right, [...array, root.val]);
    }
  }

  return arr;
};

