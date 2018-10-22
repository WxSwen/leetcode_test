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
var swapPairs = function(head) {
    if(!head || !head.next) {
      return head;
    }
    let l1 = head, l2 = head.next, val = l1.val;
    l1.val = l2.val;
    l2.val = val;
    swapPairs(l2.next);
    return head;
};

var a = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 6,
          next: null
        }
      }
    }
  }
}

console.log(swapPairs(a));