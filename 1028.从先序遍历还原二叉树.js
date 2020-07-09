/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let stack = [S];
  let arr = [];
  let q = null;
  while (stack.length) {
    q = stack.pop();
    arr.push(q.val);
    q.right && stack.push(q.right);
    q.left && stack.push(q.left);
  }
  return arr;
};
// @lc code=end
