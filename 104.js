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
var maxDepth = function(root) {
    return getDepth(root, 0);
};

function getDepth(tree, depth){
  if(!tree) return depth;
  let left = getDepth(tree.left, depth + 1);
  let right = getDepth(tree.right, depth + 1);
  return left > right ? left : right;
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

console.log(maxDepth(a));