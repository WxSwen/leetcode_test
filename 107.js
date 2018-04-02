/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  102 107 获取二叉树顺序（倒序）数组，js只能通过全局变量的数组，将当前排列保留；

//  关键字:  bfs， 广度优先搜索

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
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
    return arr.reverse();
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
console.log(levelOrderBottom(a));