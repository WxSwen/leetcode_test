/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

// Your runtime beats 26.34 % of javascript submissions
// Your memory usage beats 11.88 % of javascript submissions (38 MB)
var isBalanced = function(root) {
  return typeof reverse(root) === 'number';
};

// 先递归后取值，比较反思维一点
function reverse (root) {
  if (!root) return 0;

  let left = reverse(root.left);
  let right = reverse(root.right);

  if (left === false || right === false || Math.abs(left - right) > 1) {
    return false;
  } else {
    return Math.max(left, right) + 1;
  }
}
