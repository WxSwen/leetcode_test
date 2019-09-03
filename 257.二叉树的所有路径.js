/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

// Your runtime beats 16.67 % of javascript submissions
// Your memory usage beats 6 % of javascript submissions (35.1 MB)

// var binaryTreePaths = function(root) {
//   let arr = [];

//   function reverse(root, array = []) {
//     if(!root) return [];

//     array.push(root.val);

//     if (!root.left && !root.right) {
//       arr.push(array);
//       return;
//     };
//     if (root.left) {
//       reverse(root.left, [...array]);
//     }
//     if(root.right) {
//       reverse(root.right, [...array]);
//     }
//   }

//   reverse(root);

//   return arr.map(item => item.join('->'));
// };

// Your runtime beats 62.67 % of javascript submissions
// Your memory usage beats 82 % of javascript submissions (34.2 MB)
var binaryTreePaths = function(root) {
  let arr = [];
  function reverse(root, str) {
    if(!root) return;

    str = `${str === '' ? '' : `${str}->` }${root.val}`;
    if (!root.left && !root.right) {
      arr.push(str);
      return;
    }
    if(root.left) {
      reverse(root.left, str)
    }
    if(root.right) {
      reverse(root.right, str)
    }
  };
  reverse(root, '');

  return arr;
}
