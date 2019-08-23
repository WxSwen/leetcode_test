/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
var levelOrder = function(root) {
  let arr = [];
  if(!root) return arr;

  arr.push([root.val]);

  reverse(root, arr, 1);

  return arr;
};

// 这个是只收集同一颗树下的左右子树,与要求不符
// function reverse(root, finalArr) {
//   if(!root || (root.left === null && root.right === null)) return finalArr; 
//   let arr = [];

//   if (root.left) {
//     arr.push(root.left.val);
//   }
//   if (root.right) {
//     arr.push(root.right.val);
//   }

//   finalArr.push(arr);

//   if (root.left) {
//     reverse(root.left, finalArr);
//   }
//   if (root.right) {
//     reverse(root.right, finalArr);
//   }

//   return finalArr;
// }

function reverse(root, finalArr, level) {
  if(!root || (root.left === null && root.right === null)) return finalArr;
  finalArr[level] = finalArr[level] ? finalArr[level] : [];

  if (root.left) {
    finalArr[level].push(root.left.val);
  }
  if (root.right) {
    finalArr[level].push(root.right.val);
  }

  if (root.left) {
    reverse(root.left, finalArr, level + 1);
  }
  if (root.right) {
    reverse(root.right, finalArr, level + 1);
  }

  return finalArr;
}

