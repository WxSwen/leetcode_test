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

// dfs
// 深度优先搜索(减少迭代调用帧)
// 需要一个max进行对比，因为分左右两边
// Your runtime beats 82.02 % of javascript submissions
// Your memory usage beats 44.95 % of javascript submissions (37.1 MB)
// var maxDepth = function(root, level = 0) {
//   if(!root) return level;
  
//   let nodes = [{ node: root, level: 1}];
//   let currentNode = {};
//   let max = 1;

//   while(nodes.length) {
//     currentNode = nodes.pop();

//     if (currentNode.node.right) {
//       nodes.push({
//         node: currentNode.node.right,
//         level: currentNode.level + 1
//       });
//     }
//     if (currentNode.node.left) {
//       nodes.push({
//         node: currentNode.node.left,
//         level: currentNode.level + 1
//       });
//     }
//     max = max > currentNode.level ? max : currentNode.level;
//   };
  
//   return max;
// };

// bfs
// 广度优先搜索
// Your runtime beats 38.59 % of javascript submissions
// Your memory usage beats 93.2 % of javascript submissions (36.8 MB)
var maxDepth = function(root, level = 0) {
  if(!root) return level;
  
  let nodes = [{ node: root, level: 1}];
  let currentNode = {};
  let max = 1;

  while(nodes.length) {
    currentNode = nodes.shift();

    if (currentNode.node.right) {
      nodes.push({
        node: currentNode.node.right,
        level: currentNode.level + 1
      });
    }
    if (currentNode.node.left) {
      nodes.push({
        node: currentNode.node.left,
        level: currentNode.level + 1
      });
    }
    max = max > currentNode.level ? max : currentNode.level;
  };
  return max;
};

