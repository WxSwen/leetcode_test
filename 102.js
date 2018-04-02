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
    if(!root) return [];
    var arr = [];
    function stack(tree, level) {
      if(!tree) return;
      arr[level] = arr[level] ? arr[level] : [];
      arr[level].push(tree.val);
      stack(tree.left, level + 1);
      stack(tree.right, level + 1);
    }
    stack(root, 0);
    return arr;
};
var a = {
  val: 3,
  left: {
    val: 9,
    left:null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(levelOrder(a));