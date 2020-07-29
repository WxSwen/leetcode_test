/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  function reverse(root) {
    if (!root) return null;
    tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    root.left && reverse(root.left);
    root.right && reverse(root.right);
  }

  reverse(root);
  return root;
};
