/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */

// Your runtime beats 43.32 %
// Your memory usage beats 49.69 %

// var levelOrderBottom = function(root) {
//   if(!root) return [];
//   let arr = [[root.val]];

//   reverse(root, 1);

//   function reverse(root, level) {
//     if(!root || (!root.left && !root.right)) {
//       return arr;
//     }
//     arr[level] = arr[level] ? arr[level] : [];
//     if (root.left) {
//       arr[level].push(root.left.val);
//     }
//     if (root.right) {
//       arr[level].push(root.right.val);
//     }

//     reverse(root.left, level + 1);
//     reverse(root.right, level + 1);
//   }
//   return arr.reverse();
// };

var levelOrderBottom = function(root) {
  if(!root) return [];
  let arr = [];
  function stack(root, level) {
    if(!root) return;
    arr[level] = arr[level] ? arr[level] : [];
    arr[level].push(root.val);
    stack(root.left, level + 1);
    stack(root.right, level + 1);
  }

  stack(root, 0);
  return arr.reverse();
}

