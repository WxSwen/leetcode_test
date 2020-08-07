/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let slow = head;
  let fast = head;

  if (head.val === val) return head.next;
  while (fast) {
    if (fast.val === val) {
      slow.next = fast.next;
    }
    slow = fast;
    fast = fast.next;
  }

  return slow;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var deleteNode = function (head, val) {
//   if (head.val === val) return head.next;
//   let temp = head;
//   while (head.next) {
//     if (head.next.val === val) {
//       head.next = head.next.next;
//       break;
//     }
//     head = head.next;
//   }

//   return temp;
// };

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

console.log(deleteNode(a, 3));
