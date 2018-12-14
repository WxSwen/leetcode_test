/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 非递归即使用while方式时间稍低
// 时间复杂度o(n)
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  } 
  if(root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root;
};