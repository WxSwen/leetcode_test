// 98. Validate Binary Search Tree

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:

// Input:
//     2
//    / \
//   1   3
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//              is 5 but its right child's value is 4.

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
// var isValidBST = function(root) {
//     if(!root) return true;
//     let pre = null;

//     function recurse(root) {
//       console.log('root');
//       if (root != null) {
//         // Inorder traversal: left first.
//         if (!recurse(root.left)) return false;
//         console.log(pre);
//         // Compare it with the previous value in inorder traversal.
//         if (pre != null && root.val <= pre.val) return false;
        
//         // Update the previous value.
//         pre = root;
        
//         // Inorder traversal: right last.
//         return recurse(root.right);
//       }
//       return true;
//     }
//     return recurse(root);
// };

// 中序遍历法： 递增序列
var isValidBST = function(root) {
  if(!root) return true;
  if (root.left == null && root.right == null) return true;
  let arr = [];

  recurse(root);
  for(let i = 0 ; i < arr.length - 1; i++) {
    if(arr[i] >= arr[i + 1]) return false;
  }
  return true;

  function recurse(root) {
    if(!root) return;
    recurse(root.left);
    arr.push(root.val);
    recurse(root.right);
  }
}

var a = {
  val: 10,
  left: {
    val: 5,
    left:null,
    right: null
  },
  right: {
    val: 15,
    left:{
      val: 11,
      left:null,
      right: null
    },
    right: {
      val: 20,
      left:null,
      right: null
    }
  }
}

console.log(isValidBST(a));