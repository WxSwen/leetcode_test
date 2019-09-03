/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 暂时保存
function Link(val) {
  this.val = val;
  this.next = null;
}
var flatten = function(root) {
  if(!root) return null;
  let links = new Link(null);
  let currentLink = null;
  reverse(root, links);
  
  function reverse (root, finalLink) {
    if(!root) return null;
    
    finalLink.val = root.val;
    finalLink.next = new Link(null);
    currentLink = finalLink.next;
    
    if(!root.left && !root.right) {
      return null;
    }
    
    root.left && reverse(root.left, currentLink);
    
    root.right && reverse(root.right, currentLink);
  }

  return links;
};

