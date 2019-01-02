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
// var maxDepth = function(root) {
//     return getDepth(root, 0);
// };

// function getDepth(tree, depth){
//   if(!tree) return depth;
//   let left = getDepth(tree.left, depth + 1);
//   let right = getDepth(tree.right, depth + 1);
//   return left > right ? left : right;
// }

// dfs
// var maxDepth = function(root) {
//   var fringe = [{ node: root, depth: 1 }];
//   var current = fringe.pop();
//   var max = 0;

//   while (current && current.node) {
//       var node = current.node;
      
//       // Find all children of this node.
//       if (node.left) {
//           fringe.push({ node: node.left, depth: current.depth + 1 });
//       }
//       if (node.right) {
//           fringe.push({ node: node.right, depth: current.depth + 1 });
//       }
  
//       if (current.depth > max) {
//           max = current.depth;
//       }
      
//       current = fringe.pop();
//   }

//   return max;
// };

// bfs
var maxDepth = function(root) {
  var f = [{ node: root, dep: 1 }];
  var current = f.shift();
  var max = 0;
  while(current && current.node) {
    var node = current.node;
    if(node.left) {
      f.push({ node: node.left, dep: current.dep + 1 })
    }
    if(node.right) {
      f.push({ node: node.right, dep: current.dep + 1 })
    }
    max = Math.max(current.dep, max);
    current = f.shift();
  }
  return max;
}


var a = {
  val: 3,
  left: {
    val: 9,
    left: null,
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

console.log(maxDepth(a));