// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 1. 递归：每次将两条列表merge
// var mergeKLists = function(lists) {
//     let len = lists.length;
//     let i = 0;
//     let l, node = null;

//     while(i < len) {
//       l = lists[i];
//       node = recurse(node, l);
//       i++;
//     }
//     return node;
// };

// function recurse(l1, l2, node) {
//   node = node || new ListNode();

//   if (l1 === null) {
//       return l2;
//   } else if (l2 === null) {
//       return l1;
//   } 
  
//   if (l1.val <= l2.val) {
//       node.val = l1.val;
//       node.next = recurse(l1.next, l2);
//   } else {
//       node.val = l2.val;
//       node.next = recurse(l1, l2.next);
//   }
//   return node;
// }

// 划分成多个，两两合并
const merge = (l1, l2) => {
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}

var mergeKLists = function (lists) {
  if(lists.length <= 1) {
    return lists.length ? lists[0] : null;
  }
  const left = lists.slice(0, lists.length >> 1);
  const right = lists.slice(lists.length >> 1);

  return merge(mergeKLists(left), mergeKLists(right));
}




var a = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null
    }
  }
}
var b = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
var c = {
  val: 2,
  next: {
    val: 6,
    next: null
  }
}

var arr = [a, b , c]

console.log(mergeKLists(arr));