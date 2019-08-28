/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// Your runtime beats 68.02 % of javascript submissions
// Your memory usage beats 48.25 % of javascript submissions (37.1 MB)
// 迭代level
// var maxDepth = function(root, level = 0) {
//     if(!root) return level;
    
//     return Math.max(
//       maxDepth(root.left, level + 1), 
//       maxDepth(root.right, level + 1)
//     )
// };


var maxDepth = function(root, level = 0) {
  if(!root) return level;
  
  return Math.max(
    maxDepth(root.left, level + 1), 
    maxDepth(root.right, level + 1)
  )
};

