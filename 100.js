/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) {
      return true;
    } else if((!p && q) || (p && !q) || (p.val !== q.val)) {
      return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    
};


var a = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: null,
    left: null,
    right: null
  }
}

var b = {
  val: 1,
  left: {
    val: null,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}

console.log(isSameTree(a, b));