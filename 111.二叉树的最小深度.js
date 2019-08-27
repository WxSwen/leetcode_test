/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

// 1.没有根节点，那结果就是0 
// 2.有根节点，没有左右子树，结果为1 
// 3.没有左子树，有右子树。把右子树看成一棵新的树。 
// 4.没有右子树，有左子树。把左子树看成一棵新的树。 
// 5.既有左子树，又有右子树。那就把左右子树分别都看成新的树，最后比较谁的最近叶子的路径短，就取哪边。 

var minDepth = function(root) {
    if(!root) return 0;
    
    function depth(root, level) {
      if(!root) return level;

      if(!root.left && !root.right) return level + 1;
      if(root.left && !root.right) return depth(root.left, level + 1);
      if(root.right && !root.left) return depth(root.right, level + 1);

      let left = depth(root.left, level + 1);
      let right = depth(root.right, level + 1);
      
      return Math.min(left, right);
    };
    return depth(root, 0);
};

