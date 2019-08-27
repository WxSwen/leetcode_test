/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  let arr = [];
  
  function recurse(root) {
    // push进数组，递归
    // 且按中序遍历的方式将对应值放入
    // 中序遍历后的数组绝对是递增数组
    if(!root) return;
    recurse(root.left);
    arr.push(root.val);
    recurse(root.right);
  }

  recurse(root);

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] >= arr[i + 1]) return false;
  }
  return true;

};

