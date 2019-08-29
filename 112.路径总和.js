/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
// Your runtime beats 83.11 % of javascript submissions
// Your memory usage beats 82.18 % of javascript submissions (36.9 MB)
var hasPathSum = function(root, sum) {
    if(!root) return false;
    if (root.val === sum && (root.left || root.right)) return false; 

    return sums(root, 0, sum);
};

// 迭代遍历每个节点
function sums (root, final, sum) {
  if(!root) return sum === final;

  let left = null;
  let right = null;

  if (root.left && !root.right) {
    right = false;
    left = sums(root.left, final + root.val, sum)
  } else if (!root.left && root.right) {
    left = false;
    right = sums(root.right, final + root.val, sum)
  } else {
    left = sums(root.left, final + root.val, sum);
    right = sums(root.right, final + root.val, sum);
  }

  return left || right;
}

