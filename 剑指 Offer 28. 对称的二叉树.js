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

//    1
//   / \
//  2   2
// / \ / \
// 3  4 4  3
var isSymmetric = function (root) {
  if (!root) return true;

  function recur(l, r) {
    if (l === null && r === null) {
      return true;
    } else if (l === null || r === null) {
      return false;
    } else {
      if (l.val === r.val) {
        return recur(l.left, r.right) && recur(l.right, r.left);
      } else {
        return false;
      }
    }
  }

  return recur(root.left, root.right);
};
