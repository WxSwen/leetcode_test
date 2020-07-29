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
var mergeTwoLists = function (l1, l2) {
  let list = new ListNode(null);
  let head = list.next;

  while (l1 || l2) {
    if (l2.val > l1.val) {
      head.val = l1.val;
      head = new ListNode(null);
      l1 = l1.next;
    } else {
      head.val = l2.val;
      head = new ListNode(null);
      l2 = l2.next;
    }
  }

  return list.next;
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
