/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 合并的时候保持next
// cur 返回cur.next
var mergeTwoLists = function (l1, l2) {
  let dum = new ListNode(0);
  let cur = dum;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return dum.next;
};

var a = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null,
    },
  },
};
var b = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

console.log(mergeTwoLists(a, b));
