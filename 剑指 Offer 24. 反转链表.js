/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 快慢指针
// 实际上跟普通递归没什么区别，只是保存next变量
var reverseList = function (head) {
  let slow = null;
  let fast = head;

  while (fast) {
    let next = fast.next;
    fast.next = slow;
    slow = fast;
    fast = next;
  }
  return slow;
};

var a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(a));
