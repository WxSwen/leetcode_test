/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 一开始是想着使用反转二叉树将right树反转，再对比；
// 然后发现效率不高，递归反转后，在对比，时间复杂度为2 * O(n);
// 然后使用单树对比，即沿着一条树先一直对比，遇到非直接return，这样会比较快

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return reverse(root.left, root.right);
};

function reverse(left, right) {
  var leftStatus, rightStatus;
  if(left === null && right === null) {
    return true;
  } else if(left === null || right === null){
    return false;
  } else {
    if(left.val === right.val) {
      return reverse(left.left, right.right) && reverse(left.right, right.left)
    } else {
      return false;
    }
  }
  return tree;
}

var a = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 1,
      left: null,
      right: null
    }
  }
}

console.log(isSymmetric(a));