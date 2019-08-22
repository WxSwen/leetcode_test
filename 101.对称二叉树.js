/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if(!root) return true;

  return diff(root.left, root.right);
};

function diff(left, right) {
  if(!left && !right) {
    return true;
  } else if (!left && right || left && !right || left.val !== right.val) {
    return false;
  } else if (left.val === right.val) {
    return diff(left.left, right.right) && diff(left.right, right.left);
  };
}

